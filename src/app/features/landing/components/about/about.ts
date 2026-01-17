import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, SvgIconComponent],
  styles: [
    `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .fade-in-up.delay-1 {
        animation-delay: 0.2s;
      }
      .fade-in-up.delay-2 {
        animation-delay: 0.4s;
      }
      .fade-in-up.delay-3 {
        animation-delay: 0.6s;
      }
      .fade-in-up.delay-4 {
        animation-delay: 0.8s;
      }
    `,
  ],
  template: `
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mx-auto fade-in-up">
          Sobre Comercializadora Neymar
        </h2>
        <p class="text-lg text-gray-600 text-center mt-2 max-w-md mx-auto fade-in-up delay-1">
          Somos una empresa familiar con décadas de tradición en la comercialización de pescado
          ribereño fresco del río Magdalena.
        </p>
        <div
          class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10 relative"
        >
          <div
            class="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <img
            ngSrc="https://placehold.co/830x844/32CD32/FFFFFF?text=Productos+frescos+del+río"
            alt="Productos frescos del río"
            width="830"
            height="844"
            priority
            class="max-w-sm w-full rounded-xl h-auto fade-in-up delay-2"
          />
          <div class="flex-1 fade-in-up delay-3">
            <h3 class="text-2xl font-semibold">Nuestros Compromisos</h3>
            <p class="text-sm text-slate-500 mt-2">
              Nuestro compromiso es con la calidad, la sostenibilidad y el apoyo a las comunidades
              de pescadores locales en Magangué, corazón de la pesca en Colombia.
            </p>

            <div class="flex flex-col gap-6 mt-6">
              <div class="flex items-center gap-4 fade-in-up delay-4">
                <div class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded shrink-0">
                  <app-svg-icon icon="verified" class="text-neymar-blue" size="24px"></app-svg-icon>
                </div>
                <div>
                  <h3 class="text-base font-medium text-slate-600">Calidad y Frescura</h3>
                  <p class="text-sm text-slate-500">
                    Del Río Magdalena a tu mesa, garantizando un producto de calidad e higiene en
                    todos nuestros procesos.
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-4 fade-in-up delay-1">
                <div
                  class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded flex-shrink-0"
                >
                  <app-svg-icon icon="handshake" class="text-neymar-blue" size="24px"
                    >></app-svg-icon
                  >
                </div>
                <div>
                  <h3 class="text-base font-medium text-slate-600">Apoyo a lo Local</h3>
                  <p class="text-sm text-slate-500">
                    Al comprarnos, apoyas directamente a las familias de pescadores artesanales de
                    Magangué.
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-4 fade-in-up delay-2">
                <div
                  class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded flex-shrink-0"
                >
                  <app-svg-icon icon="localShipping" class="text-neymar-blue" size="24px"
                    >></app-svg-icon
                  >
                </div>
                <div>
                  <h3 class="text-base font-medium text-slate-600">Logística Confiable</h3>
                  <p class="text-sm text-slate-500">
                    Garantizamos la cadena de frío para una entrega puntual y segura en todo el
                    país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {}
