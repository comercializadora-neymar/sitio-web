import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class App implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    // Aplicar Schema de empresa para SEO
    this.seoService.setCompanySchema();
  }
}
