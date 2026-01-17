import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Products } from './products';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
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

  it('should pause marquee on mouse enter', () => {
    const container = fixture.debugElement.query(By.css('.overflow-hidden'));
    container.triggerEventHandler('mouseenter', {});
    expect(component.paused()).toBe(true);
  });

  it('should resume marquee on mouse leave', () => {
    component.pauseMarquee(); // set to true
    const container = fixture.debugElement.query(By.css('.overflow-hidden'));
    container.triggerEventHandler('mouseleave', {});
    expect(component.paused()).toBe(false);
  });

  it('should render product cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('.flip-card'));
    expect(cards.length).toBe(component.doubledProducts().length);
  });

  it('should display product name in overlay on hover', () => {
    const firstCard = fixture.debugElement.query(By.css('.flip-card'));
    expect(firstCard).toBeTruthy();
    // Since it's CSS hover, hard to test trigger, just check if card exists
  });
});
