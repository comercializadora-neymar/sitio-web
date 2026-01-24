import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { SvgIconComponent } from '../../icons/svg-icon.component';
import { APP_SHARED_INFO } from '../../../core/config/app-info';
import { FadeInUpDirective } from '../../directives/fade-in-up.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, SvgIconComponent, FadeInUpDirective],
  template: `
    <header class="relative z-100 text-xs md:text-sm text-white w-full">
      <!-- Top Banner -->
      <div 
        id="inicio"
        class="bg-linear-to-r from-neymar-blue via-neymar-blue/95 to-neymar-orange px-6 md:px-16 lg:px-24 xl:px-32 py-2"
      >
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <!-- Left: Contact Info -->
          <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
            <div 
              class="flex items-center gap-2 hover:text-white/80 cursor-default"
              appFadeInUp
              [delay]="100"
            >
              <app-svg-icon icon="email" size="14px" class="opacity-90"></app-svg-icon>
              <span class="font-medium truncate max-w-[200px] sm:max-w-none">{{ appInfo.contact.email }}</span>
            </div>
            <div 
              class="flex items-center gap-2 hover:text-white/80 cursor-default"
              appFadeInUp
              [delay]="200"
            >
              <app-svg-icon icon="location" size="14px" class="opacity-90"></app-svg-icon>
              <span class="font-medium truncate max-w-[200px] sm:max-w-none text-xs">{{ appInfo.contact.location }}</span>
            </div>
          </div>

          <!-- Right: Social Links -->
          <div class="flex items-center gap-4" appFadeInUp [delay]="300">
             <span class="hidden lg:inline-block opacity-80 text-[10px] uppercase tracking-wider font-bold">Síguenos:</span>
             <div class="flex items-center gap-3">
                <a [href]="appInfo.social.instagram" target="_blank" rel="noopener" class="hover:scale-125 hover:text-neymar-orange p-1">
                  <app-svg-icon icon="instagram" viewBox="simpleIcons" size="16px"></app-svg-icon>
                </a>
                <a [href]="appInfo.social.facebook" target="_blank" rel="noopener" class="hover:scale-125 hover:text-neymar-blue p-1">
                  <app-svg-icon icon="facebook" viewBox="simpleIcons" size="16px"></app-svg-icon>
                </a>
             </div>
          </div>
        </div>
      </div>
      <app-navbar></app-navbar>
    </header>
  `,
})
export class Header {
  readonly appInfo = APP_SHARED_INFO;
}

