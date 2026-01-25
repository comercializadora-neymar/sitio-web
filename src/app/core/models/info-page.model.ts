import { SeoConfig } from "./seo-config.model";

export interface InfoPage {
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  seo: SeoConfig;
}