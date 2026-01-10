import { Component, OnInit, inject } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SeoService } from './core/services/seo';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  template: `<app-layout></app-layout>`,
})
export class App implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit() {
    // Aplicar Schema de empresa para SEO
    this.seoService.setCompanySchema();
  }
}
