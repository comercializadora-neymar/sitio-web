import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
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
});
