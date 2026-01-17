import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
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
            <div class="flex">
              @for (product of doubledProducts(); track $index) {
                <div
                  class="w-56 mx-4 h-80 relative group hover:scale-90 transition-all duration-300 cursor-pointer"
                >
                  <img
                    [src]="product.image || defaultImage"
                    alt="{{ product.name }}"
                    class="w-full h-full object-cover rounded-md"
                    (error)="onImageError($event)"
                  />
                  <div
                    class="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20 rounded-md"
                  >
                    <div class="text-center text-white">
                      <p class="text-lg font-semibold mb-2">{{ product.name }}</p>
                      <p class="text-sm mb-2">{{ product.description }}</p>
                      <p class="text-sm mb-4">Precio: {{ '$' + product.price }}/kg</p>
                      <a
                        href="https://wa.me/1234567890?text=Quiero%20comprar%20{{ product.name }}"
                        target="_blank"
                        class="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg text-sm inline-block font-medium"
                      >
                        Comprar por WhatsApp
                      </a>
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

  pauseMarquee() {
    this.paused.set(true);
  }

  resumeMarquee() {
    this.paused.set(false);
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = this.defaultImage;
  }
}
