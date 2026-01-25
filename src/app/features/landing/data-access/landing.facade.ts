import { Injectable, computed, signal } from '@angular/core';
import { LANDING_PAGES_DATA } from './landing.data';
import { Product } from '../../../core/models/product.model';
import { SeoConfig } from '../../../core/models/seo-config.model';
import { Service } from '../../../core/models/service.model';

@Injectable({
    providedIn: 'root',
})
export class LandingFacade {
    private readonly _data = signal(LANDING_PAGES_DATA);

    public readonly hero = computed(() => this._data().hero);
    public readonly about = computed(() => this._data().about);
    public readonly products = computed(() => this._data().products);
    public readonly services = computed(() => this._data().services);
    public readonly seo = computed(() => this._data().seo as SeoConfig);
    public readonly map = computed(() => this._data().map);
    public readonly faq = computed(() => this._data().faq);

    public readonly productItems = computed<Product[]>(() => this.products().items);
    public readonly serviceItems = computed<Service[]>(() => this.services().items);
}
