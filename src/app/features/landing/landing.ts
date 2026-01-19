import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Products } from './components/products/products';
import { Services } from './components/services/services';
import { MapComponent } from './components/map/map';
import { Faq } from './components/faq/faq';
import { SeoService } from '../../core/services/seo';
import { APP_SHARED_INFO } from '../../core/config/app-info';

@Component({
  selector: 'app-landing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, About, Products, Services, MapComponent, Faq],
  template: `
    <app-hero></app-hero>
    <div class="grid grid-cols-1 2xl:grid-cols-2 gap-8">
      <div class="order-2 2xl:order-1" id="nosotros">
        <app-about></app-about>
      </div>
      <div class="order-1 2xl:order-2" id="productos">
        <app-products></app-products>
      </div>
    </div>
    <app-services id="servicios"></app-services>
    <app-faq id="faq"></app-faq>
    <app-map id="ubicacion"></app-map>
  `,
})
export class Landing implements OnInit {
  private seoService = inject(SeoService);
  private readonly seoConfig = APP_SHARED_INFO.landing.seo;

  ngOnInit(): void {
    this.seoService.updateSeo(this.seoConfig);
  }
}

