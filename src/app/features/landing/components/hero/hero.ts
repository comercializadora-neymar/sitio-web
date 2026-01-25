import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NavigationService } from '../../../../core/services/navigation.service';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';
import { LandingFacade } from '../../data-access/landing.facade';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, FadeInUpDirective],
  template: `
    <section
      class="relative w-full h-[90vh] min-h-[500px] lg:min-h-[600px] flex items-start lg:items-center overflow-hidden bg-gray-900"
    >
      <div class="absolute inset-0 z-0">
        <img
          [ngSrc]="heroData().imageUrl"
          [alt]="heroData().imageAlt"
          fill
          priority
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 hero-overlay"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-left pt-24 lg:pt-0">
        <div class="max-w-4xl">
          <h1
            appFadeInUp
            [delay]="100"
            class="text-white font-black uppercase tracking-tight leading-[1] transition-all
                     text-3xl sm:text-5xl md:text-6xl xl:text-7xl
                     max-h-[750px]:text-3xl max-h-[750px]:mb-4
                     mb-8"
            [innerHTML]="heroData().title.replace(/\\n/g, '<br />')"
          >
          </h1>

          <div class="flex flex-col sm:flex-row items-start gap-4">
            @for (button of heroData().ctaButtons; track button.label) {
              <button
                appFadeInUp
                [delay]="200 + ($index * 100)"
                type="button"
                (click)="scrollToSection(button.href)"
                [class]="button.type === 'primary' 
                  ? 'bg-white text-[#0A2D4D] px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold transition-all shadow-xl cursor-pointer hover:scale-105 active:scale-95 max-h-[750px]:py-2.5 max-h-[750px]:text-sm'
                  : 'bg-[#0A2D4D] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold transition-all shadow-xl cursor-pointer hover:bg-[#0A2D4D]/90 hover:scale-105 active:scale-95 max-h-[750px]:py-2.5 max-h-[750px]:text-sm'"
              >
                {{ button.label }}
              </button>
            }
          </div>
        </div>
      </div>

      <div class="wave-container scale-y-50 sm:scale-y-75 lg:scale-y-100 origin-bottom">
        <svg
          class="absolute bottom-0 w-full h-40 md:h-30"
          viewBox="0 0 1440 390"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path class="path-anim" fill="#D9CDBC"></path>
        </svg>
        <svg
          class="relative w-full h-10 md:h-10"
          viewBox="0 0 1440 390"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path class="path-anim" fill="#D9CDBC"></path>
        </svg>
        <svg
          class="relative w-full h-20 md:h-15"
          viewBox="0 0 1440 390"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path class="path-anim" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .hero-overlay {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.4) 100%
      );
    }

    .wave-container {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      line-height: 0;
      z-index: 20;
      pointer-events: none;
    }

    .path-anim {
      animation: waveAnim 5s linear infinite alternate;
    }

    @keyframes waveAnim {
      0% {
        d: path(
          'M 0,400 L 0,100 C 27.2,87.6 54.5,75.3 88,79 C 121.4,82.6 161.1,102.3 202,112 C 242.8,121.6 284.9,121.3 320,109 C 355,96.6 383.1,72.4 412,78 C 440.8,83.5 470.2,118.9 507,114 C 543.7,109 587.6,63.9 622,57 C 656.3,50 681.1,81.4 718,105 C 754.8,128.5 803.7,144.2 836,132 C 868.2,119.7 883.7,79.3 912,65 C 940.2,50.6 981.3,62.2 1020,64 C 1058.6,65.7 1094.7,57.7 1128,75 C 1161.2,92.2 1191.6,134.8 1226,137 C 1260.3,139.1 1298.6,100.9 1335,88 C 1371.3,75 1405.6,87.5 1440,100 L 1440,400 L 0,400 Z'
        );
      }
      50% {
        d: path(
          'M 0,400 L 0,100 C 34.6,71.9 69.2,43.8 106,54 C 142.7,64.1 181.6,112.5 211,112 C 240.3,111.4 260.2,62 297,54 C 333.7,45.9 387.2,79.2 427,98 C 466.7,116.7 492.7,120.9 524,117 C 555.2,113 591.9,101 627,108 C 662,114.9 695.5,140.9 724,146 C 752.4,151 775.9,135 808,122 C 840,108.9 880.8,98.8 917,99 C 953.1,99.1 984.8,109.5 1019,116 C 1053.1,122.4 1089.8,125 1129,120 C 1168.1,114.9 1209.8,102.4 1242,103 C 1274.1,103.5 1296.6,117.3 1328,119 C 1359.3,120.6 1399.6,110.3 1440,100 L 1440,400 L 0,400 Z'
        );
      }
      100% {
        d: path(
          'M 0,400 L 0,100 C 33,117.2 66.1,134.5 99,125 C 131.8,115.4 164.3,79.2 203,71 C 241.6,62.7 286.2,82.6 327,99 C 367.7,115.3 404.5,128.3 429,125 C 453.4,121.6 465.6,101.9 497,97 C 528.3,92 578.9,101.6 619,100 C 659,98.3 688.4,85.3 719,79 C 749.5,72.6 781.1,72.8 817,81 C 852.8,89.1 892.8,105 926,94 C 959.1,82.9 985.2,44.7 1021,51 C 1056.7,57.2 1102,107.9 1133,114 C 1163.9,120 1180.3,81.6 1217,72 C 1253.6,62.3 1310.4,81.5 1351,91 C 1391.5,100.4 1415.7,100.2 1440,100 L 1440,400 L 0,400 Z'
        );
      }
    }
  `,
})
export class Hero {
  private readonly navigationService = inject(NavigationService);
  private readonly landingFacade = inject(LandingFacade);
  readonly heroData = this.landingFacade.hero;

  scrollToSection(href: string) {
    this.navigationService.scrollToSection(href);
  }
}
