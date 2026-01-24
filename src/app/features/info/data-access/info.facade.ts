import { Injectable, signal } from '@angular/core';
import { INFO_PAGES_DATA } from './info.data';
import { InfoPage } from '../../../core/models/info-page.model';

@Injectable({
  providedIn: 'root',
})
export class InfoFacade {
  private readonly _infoPages = signal<InfoPage[]>(INFO_PAGES_DATA);
  public readonly infoPages = this._infoPages.asReadonly();

  public getInfoBySlug(slug: string): InfoPage | undefined {
    const infoPage = this.infoPages().find((page) => page.slug === slug);
    return infoPage;
  }
}