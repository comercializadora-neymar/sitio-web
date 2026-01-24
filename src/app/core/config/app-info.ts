import type { Product } from '../models/product.model';
import type { Service } from '../models/service.model';
import type { SeoConfig } from '../models/seo-config.model';

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
      title: 'DEL RÍO A TU MESA CON\nFRESCURA Y TRADICIÓN',
      imageUrl: '/hero-image.png',
      imageAlt: 'Atardecer sobre el río Magdalena',
      ctaButtons: [
        {
          label: 'Conoce Nuestros Productos',
          type: 'primary' as const,
          href: '#productos',
        },
        {
          label: 'Nuestra Historia',
          type: 'secondary' as const,
          href: '#nosotros',
        },
      ],
    },
    about: {
      title: 'Sobre Comercializadora Neymar',
      description:
        'Somos una empresa familiar con décadas de tradición en la comercialización de pescado ribereño fresco del río Magdalena.',
      imageUrl: '/about-us.png',
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
      defaultImage: '/product-default.png',
      items: [
        {
          name: 'Bagre',
          description: 'Pescado de río de carne blanca y suave, ideal para freír o sudar.',
          image: '/product-bagre.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 100,
          availability: 'Baja',
        },
        {
          name: 'Bocachico',
          description: 'Pescado de río, de sabor intenso y textura firme, perfecto para asar.',
          image: '/product-bocachico.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 200,
          availability: 'Baja',
        },
        {
          name: 'Mojarra',
          description:
            'Pescado de río, versátil y delicioso, ideal para freír entera o en filetes.',
          image: '/product-mojarra.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 300,
          availability: 'Baja',
        },
        {
          name: 'Capaz',
          description: 'Pescado de río con carne firme y sabrosa, excelente para sopas y guisos.',
          image: '/product-default.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 150,
          availability: 'Media',
        },
        {
          name: 'Sabaleta',
          description: 'Pescado pequeño y delicioso, ideal para frituras y ceviches.',
          image: '/product-default.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 120,
          availability: 'Alta',
        },
        {
          name: 'Blanquillo',
          description:
            'Pescado de río con carne blanca y suave, perfecto para preparaciones ligeras.',
          image: '/product-default.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 180,
          availability: 'Media',
        },
        {
          name: 'Carpa',
          description:
            'Pescado de agua dulce, de carne firme y con bajo contenido de grasa.',
          image: '/product-default.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 140,
          availability: 'Baja',
        },
        {
          name: 'Tilapia',
          description:
            'Pescado criado en criaderos, versátil y de bajo costo, ideal para diversas preparaciones.',
          image: '/product-default.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 110,
          availability: 'Alta',
        },
        {
          name: 'Nicuro',
          description: 'Pescado de río pequeño, con sabor delicado, perfecto para comidas ligeras.',
          image: '/product-default.png',
          weight: 'Menos de 0.5 kg',
          season: 'Todo el año',
          price: 160,
          availability: 'Media',
        },
        {
          name: 'Doncella',
          description: 'Pescado de río con carne tierna, excelente para asados y parrillas.',
          image: '/product-default.png',
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
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d984.5171275644586!2d-74.7425233!3d9.2381708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5ec7eabc9796ef%3A0x31dc40808f9800da!2sComercializadora%20Neymar%20-%20Pesquera%20y%20Distribuci%C3%B3n!5e0!3m2!1ses-419!2sco!4v1769055010583!5m2!1ses-419!2sco',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'FAQ',
      description: '¿Tienes preguntas? Aquí en esta sección te ayudamos a resolverlas.',
      items: [
        {
          question: '¿Cómo puedo solicitar un catálogo actualizado de los productos y de sus precios?',
          answer:
            'Si deseas comunicarte directamente con un asesor de ventas puedes llamar al siguiente número (+57) 314 805 8632 y recibirás atención personalizada resolviendo todas tus inquietudes y dudas.',
        },
        {
          question: '¿Qué métodos de pago manejan?',
          answer:
            'Manejamos distintos métodos de pago como lo son pago directo, o pago por transferencia.',
        },
        {
          question: '¿Cuentan con un punto físico?',
          answer:
            'Tenemos el gusto de darte a conocer nuestras instalaciones físicas y productos directamente en Avenida la Candelaria, Cra. 3 #20-29, Magangué, via a yati.',
        },
        {
          question: '¿Se pueden realizar cambios o devoluciones del producto?',
          answer:
            'Se realizan devoluciones teniendo en cuenta lo siguiente: 1. Producto distinto al solicitado por el cliente. 2. Alimento que no cumpla los estándares de calidad que siempre manejamos como comercializadores.',
        },
        {
          question: '¿Se realizan envíos a nivel nacional o domicilios a lugares aledaños?',
          answer:
            'Sí contamos con un sistema de logística organizado y con gran disponibilidad de entrega de la mercancía directamente al consumidor a nivel local y nacional. Priorizando el tiempo de entrega establecido, su horario y el cuidado de la mercancía.',
        },
        {
          question: '¿La mercancía solo se entrega directamente por ustedes?',
          answer:
            'Manejamos distinta logística para la entrega como lo es: entrega directa con nosotros, cargue con conductores y vehículos externos o si nuestro cliente desea él puede seleccionar el modo como recoge su mercancía y su conductor preferencial.',
        },
        {
          question: '¿Incrementan medidas de cuidado para el consumidor?',
          answer:
            'Como empresa contamos con lineamientos, parámetros y normatividad establecidas por el Ministerio de Salud, cuidando siempre la inocuidad del alimento, para tener un producto de excelente calidad y brindarle lo mejor a nuestro consumidor.',
        },
      ],
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


