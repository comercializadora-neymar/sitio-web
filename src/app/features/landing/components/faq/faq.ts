import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { FadeInUpDirective } from '../../../../shared/directives/fade-in-up.directive';
import { LandingFacade } from '../../data-access/landing.facade';

@Component({
  selector: 'app-faq',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgIconComponent, FadeInUpDirective],
  template: `
    <section class="flex flex-col items-center text-center px-4 py-16 bg-white">
      <p 
        class="text-base font-medium text-slate-600"
        appFadeInUp
      >
        {{ appInfo().subtitle }}
      </p>
      <h2 
        class="text-3xl md:text-4xl font-semibold mt-2 text-slate-900"
        appFadeInUp
        [delay]="100"
      >
        {{ appInfo().title }}
      </h2>
      <p 
        class="text-sm text-slate-600 mt-4 max-w-sm"
        appFadeInUp
        [delay]="200"
      >
        {{ appInfo().description }}
      </p>

      <div class="max-w-xl w-full mt-10 flex flex-col gap-4 items-start text-left">
        @for (item of appInfo().items; track $index) {
          <div 
            class="flex flex-col items-start w-full group"
            appFadeInUp
            [delay]="200 + ($index * 10)"
          >
            <button
              type="button"
              (click)="toggle($index)"
              class="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-slate-200 p-4 rounded hover:shadow-sm transition-all text-left"
              [attr.aria-expanded]="openIndex() === $index"
            >
              <h3 class="text-sm font-medium text-slate-900">{{ item.question }}</h3>
              <app-svg-icon
                icon="arrowDropDown"
                size="18px"
                class="transition-transform duration-500 ease-in-out text-slate-700"
                [class.rotate-180]="openIndex() === $index"
              />
            </button>
            <div
              class="grid transition-all duration-500 ease-in-out w-full"
              [class.grid-rows-[1fr]]="openIndex() === $index"
              [class.grid-rows-[0fr]]="openIndex() !== $index"
              [class.opacity-100]="openIndex() === $index"
              [class.opacity-0]="openIndex() !== $index"
            >
              <div class="overflow-hidden">
                <p class="text-sm text-slate-600 px-4 pt-4 pb-2">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class Faq {
  private readonly landingFacade = inject(LandingFacade);
  readonly appInfo = this.landingFacade.faq;
  readonly openIndex = signal<number | null>(null);

  toggle(index: number) {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
