import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Faq } from './faq';
import { By } from '@angular/platform-browser';
import { APP_SHARED_INFO } from '../../../../core/config/app-info';
import { vi } from 'vitest';
import { Component, input, Directive, Input } from '@angular/core';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';

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

describe('Faq', () => {
  let component: Faq;
  let fixture: ComponentFixture<Faq>;

  beforeEach(async () => {
    // Mock IntersectionObserver
    window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
      takeRecords: vi.fn(),
    }));

    await TestBed.configureTestingModule({
      imports: [Faq],
    })
    .overrideComponent(Faq, {
      remove: { imports: [SvgIconComponent, FadeInUpDirective] },
      add: { imports: [MockSvgIconComponent, MockFadeInUpDirective] }
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title, subtitle and description', () => {
    const title = fixture.debugElement.query(By.css('h2')).nativeElement;
    const subtitle = fixture.debugElement.query(By.css('p.font-medium')).nativeElement;
    
    expect(title.textContent).toContain(APP_SHARED_INFO.landing.faq.title);
    expect(subtitle.textContent).toContain(APP_SHARED_INFO.landing.faq.subtitle);
  });

  it('should render all faq items', () => {
    const items = fixture.debugElement.queryAll(By.css('button'));
    expect(items.length).toBe(APP_SHARED_INFO.landing.faq.items.length);
  });

  it('should toggle faq item on click', () => {
    const firstButton = fixture.debugElement.queryAll(By.css('button'))[0];
    
    // Initial state: closed (null)
    expect(component.openIndex()).toBeNull();
    expect(firstButton.nativeElement.getAttribute('aria-expanded')).toBe('false');

    // Click to open
    firstButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.openIndex()).toBe(0);
    expect(firstButton.nativeElement.getAttribute('aria-expanded')).toBe('true');

    // Click to close
    firstButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.openIndex()).toBeNull();
    expect(firstButton.nativeElement.getAttribute('aria-expanded')).toBe('false');
  });

  it('should close one item when opening another', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const firstButton = buttons[0];
    const secondButton = buttons[1];

    // Open first
    firstButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.openIndex()).toBe(0);

    // Open second
    secondButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.openIndex()).toBe(1);
  });
});
