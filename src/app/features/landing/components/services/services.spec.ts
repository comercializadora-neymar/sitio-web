import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Services } from './services';

describe('Services', () => {
  let component: Services;
  let fixture: ComponentFixture<Services>;

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).IntersectionObserver = class {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      observe() {}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      unobserve() {}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      disconnect() {}
    };
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services],
    }).compileComponents();

    fixture = TestBed.createComponent(Services);
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

  it('should render title from app-info', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Nuestros Servicios');
  });

  it('should render all service cards', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const serviceCards = compiled.querySelectorAll('.flex.flex-col.text-center');
    expect(serviceCards.length).toBe(component.servicesData.items.length);
  });

  it('should use data from app-info', () => {
    expect(component.servicesData).toBeTruthy();
    expect(component.servicesData.items.length).toBeGreaterThan(0);
  });
});
