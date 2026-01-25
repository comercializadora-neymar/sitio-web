import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Products } from './products';
import { WhatsappService } from '../../../../core/services/whatsapp.service';
import { LandingFacade } from '../../data-access/landing.facade';
import { signal, computed } from '@angular/core';
import { LANDING_PAGES_DATA } from '../../data-access/landing.data';
import { vi } from 'vitest';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  // Mock IntersectionObserver logic locally
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).IntersectionObserver = class {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      observe() { }
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      unobserve() { }
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      disconnect() { }
    };
  });

  beforeEach(async () => {
    const mockLandingFacade = {
      products: signal(LANDING_PAGES_DATA.products),
      productItems: computed(() => LANDING_PAGES_DATA.products.items)
    };

    await TestBed.configureTestingModule({
      imports: [Products],
      providers: [
        { provide: LandingFacade, useValue: mockLandingFacade }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have doubled products for marquee', () => {
    expect(component.doubledProducts().length).toBe(component.products().length * 2);
  });

  it('should pause marquee on mouse enter interaction', () => {
    component.pauseMarquee();
    expect(component.paused()).toBe(true);
  });

  it('should resume marquee on mouse leave interaction', () => {
    component.pauseMarquee();
    component.resumeMarquee();
    expect(component.paused()).toBe(false);
  });

  describe('toggleFlip', () => {
    it('should set activeIndex and pause marquee when flipping a card', () => {
      component.toggleFlip(0);
      expect(component.activeProductIndex()).toBe(0);
      expect(component.paused()).toBe(true);
    });

    it('should clear activeIndex, centerOffset and resume marquee when un-flipping', () => {
      // Setup: active
      component.centerOffset.set(100);
      component.toggleFlip(0); // Activate

      // Act: Toggle again to deactivate
      component.toggleFlip(0);

      expect(component.activeProductIndex()).toBeNull();
      expect(component.centerOffset()).toBe(0);
      expect(component.paused()).toBe(false);
    });

    it('should calculate specific center offset on mobile (mocking window)', () => {
      // Mock window.innerWidth
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });

      const mockEvent = {
        currentTarget: {
          getBoundingClientRect: () => ({
            left: 50,
            width: 200,
            // other props not needed for logic
          })
        }
      } as unknown as Event;

      component.toggleFlip(1, mockEvent);

      // Calculation:
      // screenCenter = 500 / 2 = 250
      // cardCenter = 50 + (200 / 2) = 150
      // offset = 250 - 150 = 100
      expect(component.centerOffset()).toBe(100);
    });

    it('should NOT calculate center offset on desktop', () => {
      // Mock window.innerWidth > 768
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });

      const mockEvent = {
        currentTarget: {
          getBoundingClientRect: () => ({ left: 50, width: 200 })
        }
      } as unknown as Event;

      component.toggleFlip(1, mockEvent);
      expect(component.centerOffset()).toBe(0); // Should remain 0
    });
  });

  it('should call WhatsappService.getLink when calling whatsappLink', () => {
    const whatsappService = TestBed.inject(WhatsappService);
    const spy = vi.spyOn(whatsappService, 'getLink');
    const productName = 'Test Product';

    component.whatsappLink(productName);

    expect(spy).toHaveBeenCalledWith(productName);
  });
});
