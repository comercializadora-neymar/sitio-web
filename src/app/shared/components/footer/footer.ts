import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../icons/svg-icon.component';
import { Brand } from '../brand/brand';
import { APP_SHARED_INFO } from '../../../core/config/app-info';
import { NavigationService } from '../../../core/services/navigation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgIconComponent, Brand, RouterLink],
  template: `<div class="text-gray-700 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
    <div class="flex flex-wrap justify-between gap-12 md:gap-6">
      <div class="max-w-full">
        <app-brand></app-brand>
        <!-- Redes sociales-->
        <div class="flex items-center gap-3 mt-4">
          <a [href]="appInfo.social.instagram" target="_blank" rel="noopener">
            <app-svg-icon
              icon="instagram"
              ariaLabel="Instagram icono"
              viewBox="simpleIcons"
            ></app-svg-icon>
          </a>
          <a [href]="appInfo.social.facebook" target="_blank" rel="noopener">
            <app-svg-icon
              icon="facebook"
              ariaLabel="Facebook icono"
              viewBox="simpleIcons"
            ></app-svg-icon>
          </a>
          <a
            [href]="'https://wa.me/' + appInfo.contact.phonePrimary"
            target="_blank"
            rel="noopener"
          >
            <app-svg-icon
              icon="whatsapp"
              ariaLabel="Whatsapp icono"
              viewBox="simpleIcons"
            ></app-svg-icon>
          </a>
        </div>
      </div>
      <div>
        <p class="text-lg text-gray-800">Enlaces Rápidos</p>
        <ul class="mt-3 flex flex-col gap-2 text-sm">
          @for (item of appInfo.navItems; track item.href) {
            <li>
              <a
                [href]="item.href"
                [attr.aria-label]="item.ariaLabel"
                (click)="scrollToSection($event, item.href)"
                class="cursor-pointer hover:text-neymar-blue transition-colors underline-offset-4 hover:underline"
                >{{ item.title }}</a
              >
            </li>
          }
        </ul>
      </div>
      <div class="min-w-64">
        <p class="text-lg text-gray-800 mb-4">Contacto</p>
        <div class="flex flex-col gap-3 text-sm">
          <div class="flex items-start gap-3">
            <app-svg-icon
              icon="phone"
              size="18px"
              class="text-neymar-blue shrink-0 mt-0.5"
            ></app-svg-icon>
            <div class="flex flex-col">
              <span>{{ appInfo.contact.phoneStringPrimary }}</span>
              <span class="text-gray-600 text-xs">{{ appInfo.contact.phoneStringSecondary }}</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <app-svg-icon icon="email" size="18px" class="text-neymar-blue shrink-0"></app-svg-icon>
            <span class="truncate">{{ appInfo.contact.email }}</span>
          </div>
          <div class="flex items-start gap-3">
            <app-svg-icon
              icon="location"
              size="18px"
              class="text-neymar-blue shrink-0 mt-0.5"
            ></app-svg-icon>
            <span class="leading-snug">{{ appInfo.contact.location }}</span>
          </div>
        </div>
      </div>
      <div class="max-w-80">
        <p class="text-lg text-gray-800">Horarios de atención</p>
        @for (schedule of appInfo.schedules; track schedule) {
          <p class="mt-3 text-sm text-gray-700">{{ schedule }}</p>
        }
      </div>
    </div>
    <hr class="border-gray-300 mt-8" />
    <div class="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
      <p>
        © {{ currentYear }} {{ appInfo.razonSocial }} — NIT {{ appInfo.nit }}. Todos los derechos
        reservados.
      </p>
       <ul class="flex items-center gap-4">
        @for (item of appInfo.legalItems; track item.href) {
          <li>
            <a [routerLink]="'/info/' + item.href" 
               [attr.aria-label]="item.ariaLabel"
               class="hover:text-neymar-blue transition-colors underline-offset-4 hover:underline"
            >{{
              item.title
            }}</a>
          </li>
        }
      </ul>
    </div>
  </div>`,
})
export class Footer {
  private readonly navigationService = inject(NavigationService);
  readonly appInfo = APP_SHARED_INFO;
  readonly currentYear = new Date().getFullYear();

  scrollToSection(event: Event, href: string) {
    event.preventDefault();
    this.navigationService.scrollToSection(href);
  }
}
