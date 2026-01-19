import type { Product } from '../models/product.model';
import type { Service } from '../models/service.model';
import type { SeoConfig } from '../models/seo-config';

export const APP_SHARED_INFO = {
  brand: {
    icono: {
      url: '/logo-comercializadora-neymar.svg',
      ariaLabel: 'Logo de Comercializadora Neymar',
    },
    subName: 'COMERCIALIZADORA',
    name: 'Neymar',
    description: 'Pesca & Distribución',
    slogan: 'Del río a su mesa, frescura que se nota.',
  },
  razonSocial: 'Comercializadora NEY MAR',
  nit: ' 900.123.456-7',
  social: {
    facebook: 'https://www.facebook.com/comercializadoraneymar/',
    instagram: 'https://www.instagram.com/comercializadora_neymar/',
  },
  contact: {
    phoneStringPrimary: '(+57) 314 805 8632',
    phonePrimary: '+573148058632',
    phoneStringSecondary: '(+57) 300 357 1923',
    phoneSecondary: '+573003571923',
    email: 'contacto@comercializadora-neymar.com',
    location: 'Avenida la Candelaria, Cra. 3 #20-29, Magangué, via a yati.',
  },
  schedules: ['Lunes – Sábado: 7am – 5pm', 'Domingo: 9am – 12pm'],
  navItems: [
    {
      title: 'Inicio',
      ariaLabel: 'Ir a sección Inicio',
      href: '#inicio',
    },
    {
      title: 'Nosotros',
      ariaLabel: 'Ir a sección Nosotros',
      href: '#nosotros',
    },
    {
      title: 'Productos',
      ariaLabel: 'Ir a sección Productos',
      href: '#productos',
    },
    {
      title: 'Servicios',
      ariaLabel: 'Ir a sección Servicios',
      href: '#servicios',
    },
    {
      title: 'Ubicación',
      ariaLabel: 'Ir a sección Ubicación',
      href: '#ubicacion',
    },
  ],
  helpButton: {
    title: 'Ayuda',
    ariaLabel: 'Ir a sección de Preguntas Frecuentes',
    href: '#faq',
  },
  legalItems: [
    {
      title: 'Política de Privacidad',
      ariaLabel: 'Abrir pagina de Política de Privacidad',
      href: '/politicas-de-privacidad',
    },
    {
      title: 'Términos y Condiciones',
      ariaLabel: 'Abrir pagina de Términos y Condiciones',
      href: '/terminos-y-condiciones',
    },
    {
      title: 'Aviso Legal',
      ariaLabel: 'Abrir pagina de Aviso Legal',
      href: '/aviso-legal',
    },
  ],
  landing: {
    hero: {
      title: 'PESQUERA NEYMAR:\nDEL RÍO A TU MESA CON\nFRESCURA Y TRADICIÓN',
      imageUrl:
        'https://placehold.co/800x1200/FFA500/FFFFFF?text=Hero+Image+-+Atardecer+sobre+el+río+Magdalena',
      imageAlt: 'Atardecer sobre el río Magdalena',
      ctaButtons: [
        {
          label: 'Conoce Nuestros Productos',
          type: 'primary' as const,
        },
        {
          label: 'Nuestra Historia',
          type: 'secondary' as const,
        },
      ],
    },
    about: {
      title: 'Sobre Comercializadora Neymar',
      description:
        'Somos una empresa familiar con décadas de tradición en la comercialización de pescado ribereño fresco del río Magdalena.',
      imageUrl:
        'https://placehold.co/830x844/32CD32/FFFFFF?text=Productos+frescos+del+río',
      imageAlt: 'Productos frescos del río',
      commitmentsTitle: 'Nuestros Compromisos',
      commitmentsDescription:
        'Nuestro compromiso es con la calidad, la sostenibilidad y el apoyo a las comunidades de pescadores locales en Magangué, corazón de la pesca en Colombia.',
      commitments: [
        {
          icon: 'verified' as const,
          title: 'Calidad y Frescura',
          description:
            'Del Río Magdalena a tu mesa, garantizando un producto de calidad e higiene en todos nuestros procesos.',
        },
        {
          icon: 'handshake' as const,
          title: 'Apoyo a lo Local',
          description:
            'Al comprarnos, apoyas directamente a las familias de pescadores artesanales de Magangué.',
        },
        {
          icon: 'localShipping' as const,
          title: 'Logística Confiable',
          description:
            'Garantizamos la cadena de frío para una entrega puntual y segura en todo el país.',
        },
      ],
    },
    products: {
      title: 'Nuestro Pescado Fresco: Bagre, Bocachico y más',
      description:
        'Descubre nuestra selección de pescados frescos de río, capturados con cuidado para garantizar la mejor calidad.',
      defaultImage: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Default',
      items: [
        {
          name: 'Bagre',
          description: 'Pescado de río de carne blanca y suave, ideal para freír o sudar.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Bagre',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 100,
          availability: 'Baja',
        },
        {
          name: 'Bocachico',
          description: 'Pescado de río, de sabor intenso y textura firme, perfecto para asar.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Bocachico',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 200,
          availability: 'Baja',
        },
        {
          name: 'Mojarra',
          description:
            'Pescado de río, versátil y delicioso, ideal para freír entera o en filetes.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Mojarra',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 300,
          availability: 'Baja',
        },
        {
          name: 'Capaz',
          description: 'Pescado de río con carne firme y sabrosa, excelente para sopas y guisos.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Capaz',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 150,
          availability: 'Media',
        },
        {
          name: 'Sabaleta',
          description: 'Pescado pequeño y delicioso, ideal para frituras y ceviches.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Sabaleta',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 120,
          availability: 'Alta',
        },
        {
          name: 'Blanquillo',
          description:
            'Pescado de río con carne blanca y suave, perfecto para preparaciones ligeras.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Blanquillo',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 180,
          availability: 'Media',
        },
        {
          name: 'Carpa',
          description:
            'Pescado de agua dulce, de carne firme y con bajo contenido de grasa.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Carpa',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 140,
          availability: 'Baja',
        },
        {
          name: 'Tilapia',
          description:
            'Pescado criado en criaderos, versátil y de bajo costo, ideal para diversas preparaciones.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Tilapia',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 110,
          availability: 'Alta',
        },
        {
          name: 'Nicuro',
          description: 'Pescado de río pequeño, con sabor delicado, perfecto para comidas ligeras.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Nicuro',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 160,
          availability: 'Media',
        },
        {
          name: 'Doncella',
          description: 'Pescado de río con carne tierna, excelente para asados y parrillas.',
          image: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Producto+-+Doncella',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 190,
          availability: 'Baja',
        },
      ] as Product[],
    },
    services: {
      title: 'Nuestros Servicios',
      description:
        'Ofrecemos soluciones integrales para la comercialización de productos del río Magdalena, adaptándonos a las necesidades de cada cliente.',
      items: [
        {
          icon: 'localShipping',
          title: 'Venta al por Mayor',
          description:
            'Ofrecemos precios competitivos y volumen para distribuidores, comerciantes y restaurantes. Garantizamos frescura y entrega a tiempo para su negocio.',
          theme: {
            containerBorder: 'border-sky-100',
            containerShadow: 'shadow-sky-900/5',
            iconBg: 'bg-sky-50',
            iconColor: 'text-neymar-blue',
          },
        },
        {
          icon: 'shopping_bag',
          title: 'Venta al Detal',
          description:
            'Atención personalizada para consumidores finales. Incluye preparación, limpieza y empaque especial para que disfrute del mejor pescado en casa.',
          theme: {
            containerBorder: 'border-orange-100',
            containerShadow: 'shadow-orange-900/5',
            iconBg: 'bg-orange-50',
            iconColor: 'text-neymar-orange',
          },
        },
        {
          icon: 'map',
          title: 'Logística y Entrega Eficiente',
          description:
            'Entregas rápidas y confiables en ciudades principales de Colombia. ¡Domicilios gratuitos en Magangué y zonas cercanas!',
          theme: {
            containerBorder: 'border-emerald-100',
            containerShadow: 'shadow-emerald-900/5',
            iconBg: 'bg-emerald-50',
            iconColor: 'text-emerald-600',
          },
        },
      ] as Service[],
    },
    seo: {
      title: 'Pescado Fresco de Río - Venta al por Mayor y Detal',
      description:
        'Compra el mejor pescado fresco del río Magdalena. Bagre, Bocachico, Mojarra y más. Comercializadora Neymar en Magangué: calidad, frescura y envíos a toda Colombia.',
      keywords:
        'pescado fresco, pescado de río, magdalena, magangué, venta de pescado, bagre, bocachico, mojarra, comercializadora de pescado',
      robots: 'index, follow',
      canonical: 'https://comercializadora-neymar.com/',
    } as SeoConfig,
    map: {
      embedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126432.6105740445!2d-74.82194537703358!3d9.242095989262867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5f9a6e30026335%3A0xc3f1f3e72dc0637!2sMagangu%C3%A9%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1705680000000!5m2!1ses!2sco',
    },
  },
  whatsapp: {
    phoneNumber: '+573148058632',
    message: (productName?: string) =>
      productName
        ? `Quiero%20comprar%20${encodeURIComponent(productName)}`
        : 'Hola,%20quisiera%20información',
  },
};


