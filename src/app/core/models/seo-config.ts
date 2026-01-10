export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  schema?: object; // JSON-LD structured data
  lang?: string; // Language attribute for page
}
