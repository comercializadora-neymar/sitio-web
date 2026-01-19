import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';

interface Product {
  name: string;
  description: string;
  image: string;
  weight: string;
  season: string;
  price: number;
  availability: string;
}

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
    <section class="py-16 bg-gray-50" appFadeInUp>
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Pescado Fresco: Bagre, Bocachico y más
          </h2>
          <p class="text-lg text-gray-600">
            Descubre nuestra selección de pescados frescos de río, capturados con cuidado para
            garantizar la mejor calidad.
          </p>
        </div>

        <div
          class="overflow-hidden w-full relative max-w-6xl mx-auto"
          (mouseenter)="pauseMarquee()"
          (mouseleave)="resumeMarquee()"
        >
          <div
            class="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-gray-50 to-transparent"
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
                        [src]="product.image || defaultImage"
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
                              [src]="product.image || defaultImage"
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
                            href="https://wa.me/1234567890?text=Quiero%20comprar%20{{ product.name }}"
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
            class="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-lienar-to-l from-gray-50 to-transparent"
          ></div>
        </div>
      </div>
    </section>
  `,
})
export class Products {
  products = signal<Product[]>([
    {
      name: 'Bagre',
      description: 'Pescado de río de carne blanca y suave, ideal para freír o sudar.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Bagre',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 100,
      availability: 'Baja',
    },
    {
      name: 'Bocachico',
      description: 'Pescado de río, de sabor intenso y textura firme, perfecto para asar.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Bocachico',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 200,
      availability: 'Baja',
    },
    {
      name: 'Mojarra',
      description: 'Pescado de río, versátil y delicioso, ideal para freír entera o en filetes.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Mojarra',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 300,
      availability: 'Baja',
    },
    {
      name: 'Capaz',
      description: 'Pescado de río con carne firme y sabrosa, excelente para sopas y guisos.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Capaz',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 150,
      availability: 'Media',
    },
    {
      name: 'Sabaleta',
      description: 'Pescado pequeño y delicioso, ideal para frituras y ceviches.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Sabaleta',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 120,
      availability: 'Alta',
    },
    {
      name: 'Blanquillo',
      description: 'Pescado de río con carne blanca y suave, perfecto para preparaciones ligeras.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Blanquillo',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 180,
      availability: 'Media',
    },
    {
      name: 'Carpa',
      description: 'Pescado de agua dulce, de carne firme y con bajo contenido de grasa.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Carpa',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 140,
      availability: 'Baja',
    },
    {
      name: 'Tilapia',
      description:
        'Pescado criado en criaderos, versátil y de bajo costo, ideal para diversas preparaciones.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Tilapia',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 110,
      availability: 'Alta',
    },
    {
      name: 'Nicuro',
      description: 'Pescado de río pequeño, con sabor delicado, perfecto para comidas ligeras.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Nicuro',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 160,
      availability: 'Media',
    },
    {
      name: 'Doncella',
      description: 'Pescado de río con carne tierna, excelente para asados y parrillas.',
      image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Doncella',
      weight: 'Menos de 0.5 kg',
      season: 'Todo el año',
      price: 190,
      availability: 'Baja',
    },
  ]);

  defaultImage = 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Default';

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
    img.src = this.defaultImage;
  }
}
