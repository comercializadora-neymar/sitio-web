import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { APP_SHARED_INFO } from '../../../core/config/app-info';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div
      class="flex items-center gap-2 transition-all"
      [class]="isSmall() ? 'flex-row' : 'flex-col items-center'"
    >
      <div class="flex items-center gap-1.5">
        <img
          [ngSrc]="appInfo.brand.icono.url"
          [alt]="appInfo.brand.icono.ariaLabel"
          [width]="isSmall() ? 46 : 202"
          [height]="isSmall() ? 36 : 160"
          class="object-contain h-auto"
          [class]="isSmall() ? 'w-8 sm:w-9' : 'w-32 sm:w-42'"
        />

        <div class="flex flex-col justify-center">
          <span
            class="font-display font-bold text-neymar-blue tracking-wider uppercase leading-none"
            [class]="isSmall() ? 'text-[0.45rem] ml-0.5' : 'text-[0.7rem] sm:text-[1rem] ml-6'"
          >
            {{ appInfo.brand.subName }}
          </span>

          <span
            class="font-display font-bold text-neymar-blue leading-tight"
            [class]="
              isSmall() ? 'text-[1.1rem] sm:text-[1.3rem]' : 'text-[3rem] sm:text-[4rem] mb-2'
            "
          >
            {{ appInfo.brand.name }}
          </span>

          @if (!isSmall()) {
            <span
              class="font-display font-semibold text-[0.6rem] sm:text-[0.9rem] text-[#b45309] uppercase tracking-[2px] ml-6"
            >
              {{ appInfo.brand.description }}
            </span>
          }
        </div>
      </div>

      @if (!isSmall()) {
        <div class="w-full text-center">
          <hr
            class="border-0 h-0.5 bg-linear-to-r from-transparent via-neymar-blue to-transparent my-2"
          />
          <div class="font-body italic text-neymar-blue text-[0.9rem] sm:text-[1.1rem]">
            {{ appInfo.brand.slogan }}
          </div>
        </div>
      }
    </div>
  `,
})
export class Brand {
  readonly appInfo = APP_SHARED_INFO;
  isSmall = input(false);
}
