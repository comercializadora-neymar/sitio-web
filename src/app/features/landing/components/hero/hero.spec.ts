import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationService } from '../../../../core/services/navigation.service';
import { vi } from 'vitest';

import { Hero } from './hero';
import { LandingFacade } from '../../data-access/landing.facade';
import { signal } from '@angular/core';
import { LANDING_PAGES_DATA } from '../../data-access/landing.data';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeAll(() => {
    (window as unknown as { IntersectionObserver: unknown }).IntersectionObserver = class {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    };
  });

  beforeEach(async () => {
    const mockLandingFacade = {
      hero: signal(LANDING_PAGES_DATA.hero)
    };

    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [
        { provide: LandingFacade, useValue: mockLandingFacade }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section')).toBeTruthy();
  });

  it('should render image with correct src and alt', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBeTruthy();
    expect(img?.getAttribute('alt')).toBe('Atardecer sobre el río Magdalena');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('DEL RÍO A TU MESA');
  });

  it('should call NavigationService.scrollToSection when button is clicked', () => {
    const navigationService = TestBed.inject(NavigationService);
    const spy = vi.spyOn(navigationService, 'scrollToSection');
    const href = '#productos';

    component.scrollToSection(href);

    expect(spy).toHaveBeenCalledWith(href);
  });
});
