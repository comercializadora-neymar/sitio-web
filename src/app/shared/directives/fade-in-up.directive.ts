import { Directive, ElementRef, OnInit, inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFadeInUp]',
  standalone: true,
  host: {
    '[class.fade-in-up]': 'true',
    '[style.transition-delay]': 'delay ? delay + "ms" : null',
  },
})
export class FadeInUpDirective implements OnInit {
  @Input() delay = 0;
  
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        },
      );

      observer.observe(this.el.nativeElement);
    }
  }
}
