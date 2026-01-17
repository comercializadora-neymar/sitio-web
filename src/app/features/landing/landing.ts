import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Products } from './components/products/products';

@Component({
  selector: 'app-landing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, About, Products],
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
  `,
})
export class Landing {}
