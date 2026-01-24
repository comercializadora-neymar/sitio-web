import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InfoFacade } from '../../data-access/info.facade';
import { ViewportScroller } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { SeoService } from '../../../../core/services/seo.service';
import { SeoConfig } from '../../../../core/models/seo-config.model';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';

@Component({
  selector: 'app-info-detail-page',
  imports: [RouterLink, SvgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="w-full py-14">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav
          class="flex flex-wrap items-center space-x-2 text-sm text-gray-700 font-medium mb-8"
          aria-label="Breadcrumb"
        >
          <a routerLink="/" class="hover:text-neymar-blue transition-colors underline-offset-4 hover:underline" aria-label="Inicio">
            <app-svg-icon icon="home" size="28px" viewBox="home" class="flex" />
          </a>

          <app-svg-icon icon="slash" size="18px" viewBox="slash" class="text-gray-500" />

          <span class="cursor-default">Información</span>

          <app-svg-icon icon="slash" size="18px" viewBox="slash" class="text-gray-500" />

          @if (infoPage()) {
            <span class="text-[#b45309] font-bold">{{ infoPage()?.title }}</span>
          } @else {
            <div class="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
          }
        </nav>

        @if (infoPage()) {
          <article class="bg-white rounded-lg shadow overflow-hidden p-6 sm:p-8">
            <header class="mb-3">
              <h1 class="text-3xl sm:text-4xl text-pretty font-bold tracking-tight text-va-primary">
                {{ infoPage()?.title }}
              </h1>
              <h2 class="mt-2 text-lg sm:text-xl text-gray-600">
                {{ infoPage()?.subtitle }}
              </h2>
            </header>

            <div
              class="prose prose-lg max-w-none pt-6 border-t border-gray-200"
              [innerHTML]="infoPage()?.content"
            ></div>
          </article>
        } @else {
          <p class="text-center text-gray-700">Cargando Información...</p>
        }
      </div>
    </div>
  `,
})
export class InfoDetailPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private infoFacade = inject(InfoFacade);
  private viewportScroller = inject(ViewportScroller);
  private seoService = inject(SeoService);

  private params = toSignal(this.route.paramMap);
  public infoPage = computed(() => {
    const slug = this.params()?.get('slug');
    if (!slug) return undefined;

    this.viewportScroller.scrollToPosition([0, 0]);
    return this.infoFacade.getInfoBySlug(slug);
  });

  constructor() {
    effect(() => {
      if (this.params() && !this.infoPage()) {
        this.router.navigate(['/']);
      }
    });

    effect(() => {
      const page = this.infoPage();
      if (page) {
        const seoData: SeoConfig = {
          title: page.title + ' | Comercializadora Neymar',
          description: page.subtitle,
          keywords: page.title.split(' ').join(', ')
        };
        this.seoService.updateSeo(seoData);
      }
    });

  }

}
