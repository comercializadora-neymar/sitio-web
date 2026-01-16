import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';

@Component({
  selector: 'app-landing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, About],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
  `,
})
export class Landing {}
