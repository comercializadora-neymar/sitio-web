import { inject, Injectable, signal, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { SeoConfig } from '../models/seo-config.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);

  // Signal para rastrear el estado actual del SEO si fuera necesario
  currentSeo = signal<SeoConfig | null>(null);

  // Schema por defecto para Comercializadora Neymar
  private readonly companySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Comercializadora NEYMAR',
    description:
      'Del Magdalena a tu mesa. 🐟 Lo mejor del pescado de Magangué con el sello de Comercializadora NEYMAR. ¡Fresco, sostenible y tradicional!',
    url: 'https://comercializadora-neymar.com',
    logo: 'https://comercializadora-neymar.com/public/logo-raw.webp',
    image: 'https://comercializadora-neymar.com/public/logo-raw.webp',
    email: 'contacto@comercializadora-neymar.com',
    telephone: '+57 314 8058632',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'AVENIDA LA CANDELARIA VIA A YATI Cra. 3 #20-29',
      addressLocality: 'Magangué',
      addressRegion: 'Bolívar', // Nota: Magangué está en Bolívar, no Magdalena
      addressCountry: 'Colombia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+57 314 8058632',
      contactType: 'Customer Service',
      availableLanguage: 'Spanish',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:30',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    priceRange: '$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Productos de Pescado Fresco',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Pescado del Río Magdalena',
          },
        },
      ],
    },
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'COP',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '9.2421', // Coordenadas aproximadas de la zona de Yati/Magangué
      longitude: '-74.7547'
    },
    areaServed: {
      '@type': 'State',
      name: 'Bolívar, Colombia'
    },
  };

  /**
   * Actualiza las meta tags SEO dinámicamente.
   * Nota: Estos meta tags sobrescriben los valores por defecto en index.html para SEO dinámico.
   */
  updateSeo(config: SeoConfig) {
    // Validación de inputs
    if (!config.title?.trim()) {
      throw new Error('SEO title is required and cannot be empty');
    }
    if (!config.description?.trim()) {
      throw new Error('SEO description is required and cannot be empty');
    }

    this.currentSeo.set(config);
    const { title, description, image, keywords, canonical, robots, schema, lang } = config;

    // Título de la página
    this.titleService.setTitle(`${title.trim()} | Comercializadora Neymar`);

    // Meta tags estándar
    this.metaService.updateTag({ name: 'description', content: description.trim() });
    if (keywords?.trim()) {
      this.metaService.updateTag({ name: 'keywords', content: keywords.trim() });
    }

    // Canonical URL
    if (canonical?.trim()) {
      this.metaService.updateTag({ rel: 'canonical', href: canonical.trim() });
    }

    // Robots meta
    if (robots?.trim()) {
      this.metaService.updateTag({ name: 'robots', content: robots.trim() });
    }

    // Language attribute (opcional, para páginas multilingüe)
    if (lang?.trim()) {
      this.metaService.updateTag({ name: 'language', content: lang.trim() });
    }

    // Open Graph (Facebook / LinkedIn)
    this.metaService.updateTag({ property: 'og:title', content: title.trim() });
    this.metaService.updateTag({ property: 'og:description', content: description.trim() });
    if (image?.trim()) {
      this.metaService.updateTag({ property: 'og:image', content: image.trim() });
    }

    // Twitter Cards
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title.trim() });
    this.metaService.updateTag({ name: 'twitter:description', content: description.trim() });

    // Structured Data (JSON-LD)
    if (schema) {
      this.addStructuredData(schema);
    } else {
      // Si la página NO tiene un schema específico (como las legales), 
      // aplicamos el de la empresa para que Google no busque "products" donde no hay.
      this.setCompanySchema();
    }
  }

  /**
   * Establece URL canónica para evitar contenido duplicado.
   */
  setCanonical(url: string) {
    if (!url?.trim()) {
      throw new Error('Canonical URL is required');
    }
    this.metaService.updateTag({ rel: 'canonical', href: url.trim() });
  }

  /**
   * Establece directivas de robots (index, follow, etc.).
   */
  setRobots(directives: string) {
    if (!directives?.trim()) {
      throw new Error('Robots directives are required');
    }
    this.metaService.updateTag({ name: 'robots', content: directives.trim() });
  }

  /**
   * Agrega datos estructurados JSON-LD para rich snippets.
   */
  addStructuredData(schema: object) {
    if (!schema) {
      throw new Error('Schema object is required');
    }

    if (isPlatformBrowser(this.platformId)) {
      // Remover schema existente si hay
      const existingScript = this.document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Agregar nuevo schema
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      this.document.head.appendChild(script);
    }
  }

  /**
   * Aplica el Schema por defecto de la empresa para mejorar posicionamiento local.
   */
  setCompanySchema() {
    this.addStructuredData(this.companySchema);
  }

  /**
   * Genera e inyecta el esquema JSON-LD para el catálogo de productos.
   * Combina el esquema base de la empresa con una lista dinámica de ofertas de productos.
   * @param products Lista de productos a incluir en el catálogo.
   */
  setProductsSchema(products: Product[]) {
    const productSchemas = products.map(p => ({
      '@type': 'Offer',
      'itemOffered': {
        '@type': 'Product',
        'name': p.name,
        'description': p.description,
        'image': p.image || 'https://comercializadora-neymar.com/public/product-default.webp',
        'offers': {
          '@type': 'Offer',
          'price': p.price,
          'priceCurrency': 'COP',
          'availability': p.availability === 'En Stock'
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock'
        }
      }
    }));

    const dynamicSchema = {
      ...this.companySchema,
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Catálogo de Pescado Fresco',
        'itemListElement': productSchemas
      }
    };

    this.addStructuredData(dynamicSchema);
  }
}
