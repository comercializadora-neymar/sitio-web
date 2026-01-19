import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';

@Component({
  selector: 'app-map',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FadeInUpDirective],
  template: `
    <section 
      class="w-full h-[300px] lg:h-[400px] 2xl:h-[600px] relative z-10 bg-gray-100"
      appFadeInUp
    >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126432.6105740445!2d-74.82194537703358!3d9.242095989262867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5f9a6e30026335%3A0xc3f1f3e72dc0637!2sMagangu%C3%A9%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1705680000000!5m2!1ses!2sco" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-full block filter grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
      ></iframe>
    </section>
  `
})
export class MapComponent {}
