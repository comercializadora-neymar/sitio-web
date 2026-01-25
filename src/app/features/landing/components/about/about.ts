import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';
import { LandingFacade } from '../../data-access/landing.facade';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, SvgIconComponent, FadeInUpDirective],
  template: `
    <section class="py-16 bg-white overflow-hidden">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 text-center mx-auto"
          appFadeInUp
        >
          {{ aboutData().title }}
        </h2>
        <p
          class="text-lg text-gray-600 text-center mt-2 max-w-md mx-auto"
          appFadeInUp
          [delay]="100"
        >
          {{ aboutData().description }}
        </p>
        <div
          class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10 relative"
        >
          <div
            class="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <img
            [ngSrc]="aboutData().imageUrl"
            [alt]="aboutData().imageAlt"
            width="830"
            height="844"
            priority
            class="max-w-sm w-full rounded-xl h-auto"
            appFadeInUp
            [delay]="200"
          />
          <div class="flex-1" appFadeInUp [delay]="300">
            <h3 class="text-2xl font-semibold">{{ aboutData().commitmentsTitle }}</h3>
            <p class="text-sm text-slate-500 mt-2">
              {{ aboutData().commitmentsDescription }}
            </p>

            <div class="flex flex-col gap-6 mt-6">
              @for (commitment of aboutData().commitments; track commitment.title; let i = $index) {
                <div class="flex items-center gap-4" appFadeInUp [delay]="400 + i * 100">
                  <div class="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded shrink-0">
                    <app-svg-icon
                      [icon]="commitment.icon"
                      class="text-neymar-blue"
                      size="24px"
                    ></app-svg-icon>
                  </div>
                  <div>
                    <h3 class="text-base font-medium text-slate-600">{{ commitment.title }}</h3>
                    <p class="text-sm text-slate-500">
                      {{ commitment.description }}
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  private readonly landingFacade = inject(LandingFacade);
  readonly aboutData = this.landingFacade.about;
}
