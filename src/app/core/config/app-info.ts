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
    whatsapp: {
      message: (productName?: string) =>
        productName
          ? `Quiero%20comprar%20${encodeURIComponent(productName)}`
          : 'Hola,%20quisiera%20información',
    },
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
      href: 'politicas-de-privacidad',
    },
    {
      title: 'Términos y Condiciones',
      ariaLabel: 'Abrir pagina de Términos y Condiciones',
      href: 'terminos-y-condiciones',
    },
    {
      title: 'Aviso Legal',
      ariaLabel: 'Abrir pagina de Aviso Legal',
      href: 'aviso-legal',
    },
  ]
};
