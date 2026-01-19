import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';
import { APP_SHARED_INFO } from '../../../../core/config/app-info';
import type { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FadeInUpDirective],
  styles: [
    `
      .marquee-inner {
        animation: marqueeScroll linear infinite;
      }

      @keyframes marqueeScroll {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `,
  ],
  template: `
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4" appFadeInUp>
            {{ productsData.title }}
          </h2>
          <p class="text-lg text-gray-600" appFadeInUp [delay]="100">
            {{productsData.description}}
          </p>
        </div>

        <div
          class="overflow-hidden w-full relative max-w-6xl mx-auto"
          (mouseenter)="pauseMarquee()"
          (mouseleave)="resumeMarquee()"
        >
          <div
            class="absolute left-0 top-0 h-full w-8 md:w-20 z-10 pointer-events-none bg-linear-to-r from-gray-50 to-transparent"
          ></div>
          <div
            class="marquee-inner flex w-fit"
            [style.animation-play-state]="paused() ? 'paused' : 'running'"
            [style.animation-duration]="doubledProducts().length * 2500 + 'ms'"
          >
            <div
              class="flex transition-transform duration-300 ease-out will-change-transform"
              [style.transform]="'translateX(' + centerOffset() + 'px)'"
            >
              @for (product of doubledProducts(); track $index) {
                <div
                  class="group w-64 h-80 mx-4 [perspective:1000px] cursor-pointer select-none"
                  (click)="toggleFlip($index, $event)"
                  (keydown.enter)="toggleFlip($index, $event)"
                  (keydown.space)="toggleFlip($index, $event)"
                  tabindex="0"
                  role="button"
                >
                  <div
                    class="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                    [class.[transform:rotateY(180deg)]]="activeProductIndex() === $index"
                  >
                    <!-- Front Side -->
                    <div
                      class="absolute w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100"
                    >
                      <img
                        [src]="product.image || productsData.defaultImage"
                        alt="{{ product.name }}"
                        class="w-full h-64 object-cover"
                        (error)="onImageError($event)"
                      />
                      <div class="p-4 flex flex-col justify-between h-16 bg-white">
                        <div class="flex justify-between items-center">
                          <h3 class="font-bold text-gray-800 text-lg leading-tight">
                            {{ product.name }}
                          </h3>
                          <span class="text-sm font-semibold text-neymar-blue bg-blue-50 px-2 py-1 rounded">
                            {{ '$' + product.price }}/kg
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Back Side -->
                    <div
                      class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl shadow-lg bg-white border border-gray-200 p-4 flex flex-col"
                    >
                      <!-- Header -->
                      <div class="flex items-center gap-3 border-b border-gray-100 pb-3 mb-3">
                         <div class="size-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
                             <img
                              [src]="product.image || productsData.defaultImage"
                              alt="Miniatura de {{ product.name }}"
                              class="w-full h-full object-cover"
                             />
                         </div>
                         <div>
                             <h3 class="font-bold text-gray-800 text-sm">{{ product.name }}</h3>
                             <p class="text-xs text-gray-500">Pescado de Río</p>
                         </div>
                      </div>

                      <!-- Details -->
                      <div class="flex-1 space-y-2 overflow-y-auto">
                        <p class="text-xs text-gray-600 leading-relaxed">{{ product.description }}</p>
                        
                        <div class="grid grid-cols-2 gap-2 text-xs mt-2">
                             <div class="bg-gray-50 p-2 rounded">
                                 <span class="block text-gray-400 text-[10px] uppercase">Temporada</span>
                                 <span class="font-medium text-gray-700">{{product.season}}</span>
                             </div>
                             <div class="bg-gray-50 p-2 rounded">
                                 <span class="block text-gray-400 text-[10px] uppercase">Disponibilidad</span>
                                 <span class="font-medium text-gray-700">{{product.availability}}</span>
                             </div>
                        </div>
                      </div>

                      <!-- Footer / CTA -->
                      <div class="mt-3 pt-2 border-t border-gray-100">
                           <a
                            [href]="whatsappLink(product.name)"
                            target="_blank"
                            (click)="$event.stopPropagation()"
                            class="w-full block text-center bg-[#25D366] hover:bg-[#128C7E] text-white py-2 rounded-lg text-sm font-bold transition-colors"
                          >
                            Comprar por WhatsApp
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
          <div
            class="absolute right-0 top-0 h-full w-8 md:w-40 z-10 pointer-events-none bg-linear-to-l from-gray-50 to-transparent"
          ></div>
        </div>
      </div>
    </section>
  `,
})
export class Products {
  readonly productsData = APP_SHARED_INFO.landing.products;
  readonly whatsappConfig = APP_SHARED_INFO.whatsapp;
  
  products = signal<Product[]>(this.productsData.items);

  doubledProducts = computed(() => [...this.products(), ...this.products()]);

  paused = signal(false);
  activeProductIndex = signal<number | null>(null);
  centerOffset = signal(0);

  pauseMarquee() {
    this.paused.set(true);
  }

  resumeMarquee() {
    this.paused.set(false);
  }

  toggleFlip(index: number, event?: Event) {
    if (this.activeProductIndex() === index) {
      this.activeProductIndex.set(null);
      this.centerOffset.set(0);
      this.resumeMarquee();
    } else {
      this.activeProductIndex.set(index);
      this.pauseMarquee();

      // Centrar tarjeta en móvil
      if (window.innerWidth < 768 && event) {
        const target = event.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const screenCenter = window.innerWidth / 2;
        const cardCenter = rect.left + rect.width / 2;
        const offset = screenCenter - cardCenter;
        this.centerOffset.set(offset);
      }
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = this.productsData.defaultImage;
  }

  whatsappLink(productName: string): string {
    const message = this.whatsappConfig.message(productName);
    return `https://wa.me/${this.whatsappConfig.phoneNumber}?text=${message}`;
  }
}
