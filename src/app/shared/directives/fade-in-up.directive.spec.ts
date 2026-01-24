import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FadeInUpDirective } from './fade-in-up.directive';
import { vi, type Mock } from 'vitest';

@Component({
    standalone: true,
    imports: [FadeInUpDirective],
    template: `<div appFadeInUp [delay]="100">Test</div>`,
})
class TestComponent { }

// Mock global para capturar la instancia
let lastObserver: unknown;

class MockIntersectionObserver {
    readonly observe: Mock;
    readonly unobserve: Mock;
    readonly disconnect: Mock;

    constructor(public callback: (entries: unknown[], observer: unknown) => void) {
        this.observe = vi.fn();
        this.unobserve = vi.fn();
        this.disconnect = vi.fn();
        // eslint-disable-next-line @typescript-eslint/no-this-alias 
        lastObserver = this;
    }
}

describe('FadeInUpDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let element: HTMLElement;

    beforeAll(() => {
        (window as unknown as { IntersectionObserver: unknown }).IntersectionObserver = MockIntersectionObserver;
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        element = fixture.nativeElement.querySelector('div');
    });

    it('should apply initial classes and styles', () => {
        expect(element.classList.contains('fade-in-up')).toBe(true);
        expect(element.style.transitionDelay).toBe('100ms');
    });

    it('should call IntersectionObserver.observe', () => {
        const observer = lastObserver as MockIntersectionObserver;
        expect(observer.observe).toHaveBeenCalledWith(element);
    });

    it('should add animate class when intersecting', () => {
        const observer = lastObserver as MockIntersectionObserver;

        // Simulamos la entrada de intersección
        observer.callback([{ isIntersecting: true, target: element }], observer);

        expect(element.classList.contains('animate')).toBe(true);
    });
});
