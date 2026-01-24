import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationService } from '../../../core/services/navigation.service';
import { Footer } from './footer';
import { vi } from 'vitest';
import { provideRouter } from '@angular/router';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have appInfo and currentYear defined', () => {
    expect(component.appInfo).toBeDefined();
    expect(component.appInfo.razonSocial).toBe('Comercializadora NEY MAR');
    expect(component.currentYear).toBe(new Date().getFullYear());
  });

  it('should render contact info', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Comercializadora NEY MAR');
    expect(compiled.textContent).toContain('(+57) 314 805 8632');
  });

  it('should call NavigationService.scrollToSection when calling scrollToSection', () => {
    const navigationService = TestBed.inject(NavigationService);
    const spy = vi.spyOn(navigationService, 'scrollToSection');
    const mockEvent = new Event('click', { cancelable: true });
    const href = '#home';

    component.scrollToSection(mockEvent, href);

    expect(spy).toHaveBeenCalledWith(href);
    expect(mockEvent.defaultPrevented).toBe(true);
  });
});
