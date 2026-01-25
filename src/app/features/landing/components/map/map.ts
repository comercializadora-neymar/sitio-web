import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';
import { DomSanitizer } from '@angular/platform-browser';
import { LandingFacade } from '../../data-access/landing.facade';

@Component({
  selector: 'app-map',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FadeInUpDirective],
  template: `
    <section
      class="w-full h-100 lg:h-120 2xl:h-150 relative z-10 bg-gray-100"
      appFadeInUp
    >
      <iframe
        [src]="safeMapUrl()"
        title="Ubicación de Comercializadora Neymar"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-full block filter grayscale-20 contrast-[1.1] hover:grayscale-0 transition-all duration-500"
      ></iframe>
    </section>
  `
})
export class MapComponent {
  private sanitizer = inject(DomSanitizer);
  private landingFacade = inject(LandingFacade);
  readonly mapData = this.landingFacade.map;
  readonly safeMapUrl = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl(this.mapData().embedUrl));
}
