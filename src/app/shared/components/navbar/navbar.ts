import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Brand } from '../brand/brand';
import { SvgIconComponent } from '../../icons/svg-icon.component';
import { RouterLink } from '@angular/router';
import { APP_SHARED_INFO } from '../../../core/config/app-info';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:resize)': 'onResize($event)',
    '[class.header-active]': 'isOpen()',
  },

  imports: [Brand, SvgIconComponent, RouterLink],
  template: `
    <nav
      class="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all"
    >
      <a routerLink="/" class="text-indigo-600 z-30">
        <app-brand [isSmall]="true"></app-brand>
      </a>

      <ul class="md:flex hidden items-center gap-10">
        @for (item of appInfo.navItems; track item.href) {
          <li>
            <a
              [routerLink]="item.href"
              [attr.aria-label]="item.ariaLabel"
              class="hover:text-neymar-orange transition-colors"
              >{{ item.title }}</a
            >
          </li>
        }
      </ul>

      <button
        aria-label="boton contacto"
        type="button"
        class="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full cursor-pointer"
      >
        Contacto
      </button>

      <button
        (click)="toggleMenu()"
        type="button"
        class="inline-block md:hidden relative z-60 p-2 active:scale-90 transition cursor-pointer border-none bg-transparent"
      >
        @if (!isOpen()) {
          <app-svg-icon icon="menu" ariaLabel="Menu icono" size="32px"></app-svg-icon>
        } @else {
          <app-svg-icon icon="close" ariaLabel="Menu icono" size="32px"></app-svg-icon>
        }
      </button>

      <div
        [class.translate-y-0]="isOpen()"
        [class.opacity-100]="isOpen()"
        [class.pointer-events-auto]="isOpen()"
        [class.visible]="isOpen()"
        [class.opacity-0]="!isOpen()"
        [class.-translate-y-4]="!isOpen()"
        [class.pointer-events-none]="!isOpen()"
        [class.invisible]="!isOpen()"
        class="absolute top-[70px] left-0 w-full bg-white p-6 md:hidden shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out z-50"
      >
        <ul class="flex flex-col space-y-4">
          @for (item of appInfo.navItems; track item.href) {
            <li>
              <a
                (click)="closeMenu()"
                [routerLink]="item.href"
                [attr.aria-label]="item.ariaLabel"
                class="text-sm block py-2 hover:text-indigo-600 transition-colors"
                >{{ item.title }}</a
              >
            </li>
          }
        </ul>
        <button
          aria-label="boton contacto"
          type="button"
          class="bg-neymar-blue text-white mt-6 text-sm hover:bg-neymar-orange active:scale-95 transition-all w-full h-11 rounded-full cursor-pointer"
        >
          Contacto
        </button>
      </div>
    </nav>
  `,
})
export class Navbar {
  readonly appInfo = APP_SHARED_INFO;
  isOpen = signal(false);

  onResize(event: UIEvent) {
    const width = (event.target as Window).innerWidth;
    if (width >= 768 && this.isOpen()) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isOpen.update((v) => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}
