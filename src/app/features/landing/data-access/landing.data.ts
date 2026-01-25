import { Product } from '../../../core/models/product.model';
import { SeoConfig } from '../../../core/models/seo-config.model';
import { Service } from '../../../core/models/service.model';

export const LANDING_PAGES_DATA: any = {
    hero: {
        title: 'DEL RÍO A TU MESA CON\nFRESCURA Y TRADICIÓN',
        imageUrl: '/hero-image.webp',
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
        imageUrl: '/about-us.webp',
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
        defaultImage: '/product-default.webp',
        items: [
            {
                name: 'Bagre',
                description: 'Pescado de río de carne blanca y suave, ideal para freír o sudar.',
                image: '/product-bagre.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 100,
                availability: 'Baja',
            },
            {
                name: 'Bocachico',
                description: 'Pescado de río, de sabor intenso y textura firme, perfecto para asar.',
                image: '/product-bocachico.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 200,
                availability: 'Baja',
            },
            {
                name: 'Mojarra',
                description: 'Pescado de río, versátil y delicioso, ideal para freír entera o en filetes.',
                image: '/product-mojarra.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 300,
                availability: 'Baja',
            },
            {
                name: 'Capaz',
                description: 'Pescado de río con carne firme y sabrosa, excelente para sopas y guisos.',
                image: '/product-default.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 150,
                availability: 'Media',
            },
            {
                name: 'Sabaleta',
                description: 'Pescado pequeño y delicioso, ideal para frituras y ceviches.',
                image: '/product-default.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 120,
                availability: 'Alta',
            },
            {
                name: 'Blanquillo',
                description:
                    'Pescado de río con carne blanca y suave, perfecto para preparaciones ligeras.',
                image: '/product-default.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 180,
                availability: 'Media',
            },
            {
                name: 'Carpa',
                description: 'Pescado de agua dulce, de carne firme y con bajo contenido de grasa.',
                image: '/product-default.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 140,
                availability: 'Baja',
            },
            {
                name: 'Tilapia',
                description:
                    'Pescado criado en criaderos, versátil y de bajo costo, ideal para diversas preparaciones.',
                image: '/product-default.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 110,
                availability: 'Alta',
            },
            {
                name: 'Nicuro',
                description: 'Pescado de río pequeño, con sabor delicado, perfecto para comidas ligeras.',
                image: '/product-default.webp',
                weight: 'Menos de 0.5 kg',
                season: 'Todo el año',
                price: 160,
                availability: 'Media',
            },
            {
                name: 'Doncella',
                description: 'Pescado de río con carne tierna, excelente para asados y parrillas.',
                image: '/product-default.webp',
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
            'https://www.google.com/maps/embed/v1/place?key=AIzaSyC9tqundLb_wxmk_Sa17prMXAHMoVHQKHE&q=Comercializadora+Neymar+-+Pesquera+y+Distribuci%C3%B3n',
    },
    faq: {
        title: 'Preguntas Frecuentes',
        subtitle: 'FAQ',
        description: '¿Tienes preguntas? Aquí en esta sección te ayudamos a resolverlas.',
        items: [
            {
                question:
                    '¿Cómo puedo solicitar un catálogo actualizado de los productos y de sus precios?',
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
};
