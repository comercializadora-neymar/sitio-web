import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from './svg-icon.component';

describe('SvgIconComponent', () => {
  let component: SvgIconComponent;
  let fixture: ComponentFixture<SvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SvgIconComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render svg with default attributes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const svg = compiled.querySelector('svg');
    expect(svg).toBeTruthy();
    expect(svg.getAttribute('height')).toBe('24px');
    expect(svg.getAttribute('width')).toBe('24px');
    expect(svg.getAttribute('fill')).toBe('currentColor');
    expect(svg.getAttribute('viewBox')).toBe('0 -960 960 960');
    expect(svg.getAttribute('role')).toBe('img');
    expect(svg.getAttribute('aria-label')).toBe('error');
  });

  it('should set custom size', () => {
    fixture.componentRef.setInput('size', '32px');
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg.getAttribute('height')).toBe('32px');
    expect(svg.getAttribute('width')).toBe('32px');
  });

  it('should set custom color', () => {
    fixture.componentRef.setInput('color', 'red');
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg.getAttribute('fill')).toBe('red');
  });

  it('should set aria-label', () => {
    fixture.componentRef.setInput('ariaLabel', 'Close button');
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg.getAttribute('aria-label')).toBe('Close button');
  });

  it('should render path with correct d attribute', () => {
    fixture.detectChanges();
    const path = fixture.nativeElement.querySelector('path');
    expect(path).toBeTruthy();
    expect(path.getAttribute('d')).toBe(component.svgPath);
  });

  it('should not render svg if icon path is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fixture.componentRef.setInput('icon', 'nonexistent' as any);
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeFalsy();
  });

  it('should use simpleIcons viewBox for whatsapp', () => {
    fixture.componentRef.setInput('icon', 'whatsapp');
    fixture.componentRef.setInput('viewBox', 'simpleIcons');
    fixture.detectChanges();
    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg.getAttribute('viewBox')).toBe('0 0 24 24');
  });
});
