import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';
import { LandingFacade } from '../../data-access/landing.facade';
import { signal } from '@angular/core';
import { LANDING_PAGES_DATA } from '../../data-access/landing.data';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

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

  let mockLandingFacade: Partial<LandingFacade>;

  beforeEach(async () => {
    mockLandingFacade = {
      about: signal(LANDING_PAGES_DATA.about)
    };

    await TestBed.configureTestingModule({
      imports: [About],
      providers: [
        { provide: LandingFacade, useValue: mockLandingFacade }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section')).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Sobre Comercializadora Neymar');
  });

  it('should render image with correct alt text', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('alt')).toBe('Productos frescos del río');
  });
});
