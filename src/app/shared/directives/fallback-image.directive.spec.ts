import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FallbackImageDirective } from './fallback-image.directive';

@Component({
    standalone: true,
    imports: [FallbackImageDirective],
    template: `<img [appFallbackImage]="fallback" src="broken.png" alt="test" />`,
})
class TestComponent {
    fallback = 'default.png';
}

describe('FallbackImageDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let imgElement: HTMLImageElement;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        imgElement = fixture.nativeElement.querySelector('img');
    });

    it('should change src to fallback on error', () => {
        // Simulate error event
        imgElement.dispatchEvent(new Event('error'));
        fixture.detectChanges();

        expect(imgElement.src).toContain('default.png');
    });

    it('should not change src if already on fallback', () => {
        imgElement.src = 'default.png';
        const initialSrc = imgElement.src;

        imgElement.dispatchEvent(new Event('error'));
        fixture.detectChanges();

        expect(imgElement.src).toBe(initialSrc);
    });
});
