import { InfoPage } from '../../../core/models/info-page.model';

export const INFO_PAGES_DATA: InfoPage[] = [
  {
    slug: 'politicas-de-privacidad',
    title: 'Políticas de Privacidad',
    subtitle: 'Comprometidos con la protección de tus datos comerciales y personales.',
    content: `
      <p class="mb-4 text-pretty">En <strong>Comercializadora NEY MAR</strong>, en cumplimiento de la Ley 1581 de 2012 y demás normas concordantes, nos comprometemos a proteger la privacidad de la información de nuestros clientes, proveedores y contactos comerciales.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Tratamiento de Datos</h3>
      <p class="mb-4 text-pretty">Recopilamos información de contacto (nombre, RUT/NIT, teléfono y dirección) con el fin exclusivo de gestionar los procesos de <strong>compra, venta, facturación y logística de envío</strong> de productos pesqueros. No comercializamos sus datos con terceros.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Finalidad de la Información</h3>
      <div class="mb-4 text-pretty">Los datos registrados son utilizados para: 
        <ul class="list-disc pl-5 mt-2 space-y-2">
          <li>Coordinar entregas nacionales y locales a través de nuestra flota de camiones.</li>
          <li>Gestión de cobros y facturación.</li>
          <li>Comunicación directa sobre disponibilidad de productos y precios.</li>
        </ul>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Derechos del Titular</h3>
      <p class="mb-4 text-pretty">Usted tiene derecho a conocer, actualizar y rectificar sus datos personales en cualquier momento a través de nuestros canales oficiales de contacto.</p>
    `,
    seo: {
      title: 'Políticas de Privacidad',
      description:
        'Políticas de Privacidad de la Comercializadora Neymar.',
      keywords:
        'Políticas de Privacidad, Comercializadora Neymar, pesquera, distribución, distribuidora, pescado fresco, pescado de río, magdalena, magangué, venta de pescado, bagre, bocachico, mojarra, comercializadora de pescado',
    },
  },
  {
    slug: 'terminos-y-condiciones',
    title: 'Términos y Condiciones',
    subtitle: 'Reglas claras para una relación comercial transparente y eficiente.',
    content: `
      <p class="mb-4 text-pretty">El uso de los servicios de <strong>Comercializadora NEY MAR</strong> implica la aceptación de los siguientes términos:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Modalidades de Venta y Pesaje</h3>
      <p class="mb-4 text-pretty">Realizamos ventas al detal (por kg o unidades) y al por mayor (kg, unidades o cavas). El pesaje se realiza en nuestras instalaciones bajo estándares de precisión garantizados.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Logística de Empaque y Envío</h3>
      <div class="mb-4 text-pretty">Para garantizar la cadena de frío, utilizamos dos sistemas de empaque:
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Cavas de Icopor:</strong> Son propiedad de la comercializadora, poseen un ID único y son <strong>reutilizables</strong>. El comprador debe devolver la cava en perfecto estado tras la entrega para su siguiente uso.</li>
          <li><strong>Canastillas de Plástico/Cartón:</strong> Son de un solo uso y su costo se incluye en la transacción final sin requerir devolución.</li>
        </ul>
      </div>

      <h3 class="text-xl font-semibold mt-6 mb-3">3. Estructura de Precios</h3>
      <p class="mb-4 text-pretty">El valor final de una venta (especialmente en cavas) se calcula mediante la fórmula: 
        <br><code class="bg-gray-100 p-1 rounded">Total = Σ Productos + Gastos Operativos (Hielo, pita, otros) + Flete - Descuentos + Aumentos.</code>
      </p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. Responsabilidad en el Transporte</h3>
      <p class="mb-4 text-pretty">Contamos con camiones propios equipados para el transporte de pescado, asegurando que el producto llegue en óptimas condiciones desde nuestra bodega hasta el punto de entrega acordado.</p>
    `,
    seo: {
      title: 'Términos y Condiciones',
      description:
        'Términos y Condiciones de la Comercializadora Neymar.',
      keywords:
        'Términos y Condiciones, Comercializadora Neymar, pesquera, distribución, distribuidora, pescado fresco, pescado de río, magdalena, magangué, venta de pescado, bagre, bocachico, mojarra, comercializadora de pescado',
    },
  },
  {
    slug: 'aviso-legal',
    title: 'Aviso Legal',
    subtitle: 'Información institucional y legal de la empresa.',
    content: `
      <p class="mb-4 text-pretty">En cumplimiento con la normativa vigente, se informa que este sitio web es propiedad de:</p>
      
      <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p class="mb-2"><strong>Razón Social:</strong> Comercializadora NEY MAR</p>
        <p class="mb-2"><strong>NIT:</strong> 900.123.456-7</p>
        <p class="mb-2"><strong>Sede Principal:</strong> Avenida la Candelaria, Cra. 3 #20-29, Magangué, vía a Yati.</p>
        <p class="mb-2"><strong>Actividad Principal:</strong> Comercio al por mayor y menor de pescados y productos conexos.</p>
        <p><strong>Contacto Legal:</strong> contacto@comercializadora-neymar.com</p>
      </div>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Propiedad Intelectual</h3>
      <p class="mb-4 text-pretty">Todo el contenido, diseños y logotipos presentes en este sitio son propiedad de Comercializadora NEY MAR. Queda prohibida su reproducción total o parcial sin autorización expresa de la gerencia.</p>
    `,
    seo: {
      title: 'Aviso Legal',
      description:
        'Información institucional y legal de la empresa Comercializadora Neymar.',
      keywords:
        'aviso legal, comercializadora neymar, pesquera, distribución, distribuidora, pescado fresco, pescado de río, magdalena, magangué, venta de pescado, bagre, bocachico, mojarra, comercializadora de pescado',
    },
  },
];
