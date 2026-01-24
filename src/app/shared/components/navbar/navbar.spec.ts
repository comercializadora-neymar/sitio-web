import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationService } from '../../../core/services/navigation.service';
import { vi } from 'vitest';

import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
