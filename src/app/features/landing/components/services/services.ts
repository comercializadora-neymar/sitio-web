import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';
import { ICON_PATHS } from '../../../../shared/icons/icon-paths';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';

export interface Service {
  icon: keyof typeof ICON_PATHS;
  title: string;
  description: string;
  theme: {
    containerBorder: string;
    containerShadow: string;
    iconBg: string;
    iconColor: string;
  };
}

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FadeInUpDirective, SvgIconComponent],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 text-center mx-auto"
          appFadeInUp
        >
          {{ title }}
        </h2>
        <p
          class="text-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto"
          appFadeInUp
          [delay]="100"
        >
          {{ summary }}
        </p>

        <div class="flex items-stretch justify-center flex-wrap gap-8 mt-16 px-4 md:px-0">
          @for (service of services; track service.title; let i = $index) {
            <div
              class="flex flex-col text-center items-center rounded-2xl p-8 border bg-white shadow-xl hover:-translate-y-1 transition-transform duration-300 gap-6 max-w-sm w-full"
              [ngClass]="[service.theme.containerBorder, service.theme.containerShadow]"
              appFadeInUp
              [delay]="200 + i * 100"
            >
              <div
                class="p-6 aspect-square rounded-full flex items-center justify-center"
                [ngClass]="[service.theme.iconBg, service.theme.iconColor]"
              >
                <app-svg-icon
                  [icon]="service.icon"
                  size="32px"
                  class="stroke-current"
                  stroke-width="2"
                ></app-svg-icon>
              </div>
              <div class="space-y-4 flex-1">
                <h3 class="text-xl font-bold text-gray-900">{{ service.title }}</h3>
                <p class="text-base text-gray-600 leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Services {
  readonly title = 'Nuestros Servicios';
  readonly summary = `Ofrecemos soluciones integrales para la comercialización de productos del río Magdalena, adaptándonos a
      las necesidades de cada cliente.`;

  readonly services: Service[] = [
    {
      icon: 'localShipping', // Note: User provided 'localShipping' for Wholesale.
      title: 'Venta al por Mayor',
      description:
        'Ofrecemos precios competitivos y volumen para distribuidores, comerciantes y restaurantes. Garantizamos frescura y entrega a tiempo para su negocio.',
      theme: {
        containerBorder: 'border-sky-100',
        containerShadow: 'shadow-sky-900/5',
        iconBg: 'bg-sky-50',
        iconColor: 'text-neymar-blue',
      },
    },
    {
      icon: 'shopping_bag',
      title: 'Venta al Detal',
      description:
        'Atención personalizada para consumidores finales. Incluye preparación, limpieza y empaque especial para que disfrute del mejor pescado en casa.',
      theme: {
        containerBorder: 'border-orange-100',
        containerShadow: 'shadow-orange-900/5',
        iconBg: 'bg-orange-50',
        iconColor: 'text-neymar-orange',
      },
    },
    {
      icon: 'map',
      title: 'Logística y Entrega Eficiente',
      description:
        'Entregas rápidas y confiables en ciudades principales de Colombia. ¡Domicilios gratuitos en Magangué y zonas cercanas!',
      theme: {
        containerBorder: 'border-emerald-100',
        containerShadow: 'shadow-emerald-900/5',
        iconBg: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
      },
    },
  ];
}
