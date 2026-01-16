import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-landing',
  imports: [Hero],
  template: ` <app-hero></app-hero> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {}
