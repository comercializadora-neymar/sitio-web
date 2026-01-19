import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from "../footer/footer";
import { FloatingWhatsapp } from '../floating-whatsapp/floating-whatsapp';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, Footer, FloatingWhatsapp],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-floating-whatsapp></app-floating-whatsapp>
  `,
})
export class LayoutComponent {}
