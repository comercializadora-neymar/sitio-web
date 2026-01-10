import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { SvgIconComponent } from '../../icons/svg-icon.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, SvgIconComponent],
  template: `
    <app-header></app-header>
    <main class="container mx-auto px-4 pt-24 min-h-screen">
      <router-outlet></router-outlet>
      <app-svg-icon
        icon="integrationInstructions"
        size="28px"
        ariaLabel="Integration instructions"
      ></app-svg-icon>
    </main>
  `,
})
export class LayoutComponent {}
