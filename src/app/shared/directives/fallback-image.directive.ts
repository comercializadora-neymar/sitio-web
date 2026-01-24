import { Directive, Input, HostListener, inject, ElementRef } from '@angular/core';

@Directive({
    selector: 'img[appFallbackImage]',
    standalone: true,
})
export class FallbackImageDirective {
    private el = inject(ElementRef);

    @Input('appFallbackImage') fallbackUrl = '/product-default.png';

    @HostListener('error')
    onError() {
        const element = this.el.nativeElement as HTMLImageElement;
        if (element.src !== this.fallbackUrl) {
            element.src = this.fallbackUrl;
        }
    }
}
