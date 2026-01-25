import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingFacade } from '../../data-access/landing.facade';
import { signal } from '@angular/core';
import { LANDING_PAGES_DATA } from '../../data-access/landing.data';
import { Faq } from '../../components/faq/faq';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';
import { Component, input, Directive, Input } from '@angular/core';
import { vi } from 'vitest';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  template: ''
})
class MockSvgIconComponent {
  icon = input<string>('');
  size = input<string>('');
}

@Directive({
  selector: '[appFadeInUp]',
  standalone: true
})
class MockFadeInUpDirective {
  @Input() delay = 0;
}

import { Landing } from './landing';

describe('Landing', () => {
  let component: Landing;
  let fixture: ComponentFixture<Landing>;

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
      seo: signal(LANDING_PAGES_DATA.seo),
      hero: signal(LANDING_PAGES_DATA.hero),
      about: signal(LANDING_PAGES_DATA.about),
      products: signal(LANDING_PAGES_DATA.products),
      services: signal(LANDING_PAGES_DATA.services),
      map: signal(LANDING_PAGES_DATA.map),
      faq: signal(LANDING_PAGES_DATA.faq),
    };

    // Mock IntersectionObserver
    (window as any).IntersectionObserver = class {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
      takeRecords = vi.fn();
    };

    await TestBed.configureTestingModule({
      imports: [Landing],
      providers: [
        { provide: LandingFacade, useValue: mockLandingFacade }
      ]
    })
      .overrideComponent(Faq, {
        remove: { imports: [SvgIconComponent, FadeInUpDirective] },
        add: { imports: [MockSvgIconComponent, MockFadeInUpDirective] }
      })
      .compileComponents();

    fixture = TestBed.createComponent(Landing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero component', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-hero')).toBeTruthy();
  });
});
