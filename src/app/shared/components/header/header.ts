import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar],
  template: `
    <header class="relative z-100 text-sm text-white w-full">
      <div
        class="text-center font-medium py-2 bg-linear-to-r from-neymar-blue via-neymar-blue to-neymar-orange"
      >
        <p>
          Rebajas exclusivas! Date prisa,
          <span class="underline underline-offset-2">las ofertas terminan pronto!</span>
        </p>
      </div>
      <app-navbar></app-navbar>
    </header>
  `,
})
export class Header {}
