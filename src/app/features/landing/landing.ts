import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Products } from './components/products/products';
import { Services } from './components/services/services';

@Component({
  selector: 'app-landing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, About, Products, Services],
  template: `
    <app-hero></app-hero>
    <div class="grid grid-cols-1 2xl:grid-cols-2 gap-8">
      <div class="order-2 2xl:order-1">
        <app-about></app-about>
      </div>
      <div class="order-1 2xl:order-2">
        <app-products></app-products>
      </div>
    </div>
    <app-services></app-services>
  `,
})
export class Landing {}
