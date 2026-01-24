import { RenderMode, ServerRoute } from '@angular/ssr';
import { getLegalItemasSlugs } from './core/utils/routes.util';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'info/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const legalItemSlugs = getLegalItemasSlugs();
      return legalItemSlugs.map((slug) => ({ slug: slug.toString() }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
