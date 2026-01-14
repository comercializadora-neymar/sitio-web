import { Component } from '@angular/core';
import { APP_SHARED_INFO } from '../../../core/config/app-info';

@Component({
  selector: 'app-brand',
  imports: [],
  template: `
    <!-- Logo principal-->
    <div class="bg-trasparent p-0 flex flex-col items-center max-full">
      <div class="flex items-center gap-2">
        <img
          [src]="appInfo.brand.icono.url"
          [alt]="appInfo.brand.icono.ariaLabel"
          class="w-32 sm:w-42 h-auto object-contain"
        />

        <div class="flex flex-col">
          <span
            class="font-display font-bold text-[0.7rem] sm:text-[1rem] text-neymar-blue tracking-[2px] uppercase leading-none ml-6"
          >
            {{ appInfo.brand.subName }}
          </span>
          <span
            class="font-display font-bold text-[3rem] sm:text-[4rem] text-neymar-blue leading-[0.9] mb-2"
          >
            {{ appInfo.brand.name }}
          </span>
          <span
            class="font-display font-light text-[0.6rem] sm:text-[0.9rem] text-neymar-orange uppercase tracking-[2px] ml-6"
          >
            {{ appInfo.brand.description }}
          </span>
        </div>
      </div>

      <div class="w-full text-center">
        <hr
          class="border-0 h-0.5 bg-linear-to-r from-transparent via-neymar-blue to-transparent my-2"
        />
        <div class="font-body italic text-neymar-blue text-[0.9rem] sm:text-[1.1rem]">
          {{ appInfo.brand.slogan }}
        </div>
      </div>
    </div>
  `,
})
export class Brand {
  readonly appInfo = APP_SHARED_INFO;
}
