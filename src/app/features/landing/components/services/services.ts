import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { APP_SHARED_INFO } from '../../../../core/config/app-info';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FadeInUpDirective, SvgIconComponent],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 text-center mx-auto"
          appFadeInUp
        >
          {{ servicesData.title }}
        </h2>
        <p
          class="text-lg text-gray-600 text-center mt-4 max-w-2xl mx-auto"
          appFadeInUp
          [delay]="100"
        >
          {{ servicesData.description }}
        </p>

        <div class="flex items-stretch justify-center flex-wrap gap-8 mt-16 px-4 md:px-0">
          @for (service of servicesData.items; track service.title; let i = $index) {
            <div
              class="flex flex-col text-center items-center rounded-2xl p-8 border bg-white shadow-xl hover:-translate-y-1 transition-transform duration-300 gap-6 max-w-sm w-full"
              [class]="service.theme.containerBorder + ' ' + service.theme.containerShadow"
              appFadeInUp
              [delay]="200 + i * 100"
            >
              <div
                class="p-6 aspect-square rounded-full flex items-center justify-center"
                [class]="service.theme.iconBg + ' ' + service.theme.iconColor"
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
  readonly servicesData = APP_SHARED_INFO.landing.services;
}
