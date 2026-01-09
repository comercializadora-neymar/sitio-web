import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <main class="container mx-auto px-4 pt-24 min-h-screen">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class LayoutComponent {}
