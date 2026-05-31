// Datos públicos del negocio — seguros para importar en cualquier componente
// El email solo existe en variables de entorno y se usa únicamente en /api/presupuesto.ts

export const BUSINESS = {
  name: 'Zentro Limpiezas',
  domain: 'zentrolimpiezas.es',
  url: 'https://zentrolimpiezas.es',
  phone: '616 054 001',
  phoneHref: 'tel:+34616054001',
  phoneDisplay: '616 054 001',
  whatsappBase: 'https://wa.me/34616054001',
  foundingYear: 2004,
  yearsExperience: 20,
  priceRange: '€€',
  currency: 'EUR',
  payments: ['Efectivo', 'Bizum', 'Transferencia bancaria'],
  languages: ['es', 'gl'],
  defaultLocale: 'es',
  hours: {
    attention: {
      weekdays: { open: '08:00', close: '14:00' },
      saturday: { open: '09:00', close: '14:00' },
    },
    service: 'Flexible, incluyendo tardes y fines de semana',
  },
  address: {
    locality: 'Ferrol',
    region: 'A Coruña',
    country: 'ES',
    countryCode: 'ES',
  },
  geo: {
    latitude: 43.4833,
    longitude: -8.2333,
  },
} as const;

// Mensajes de WhatsApp pre-rellenados por contexto de página
export const WA_MESSAGES = {
  default: 'Hola, me gustaría pedir presupuesto de limpieza',
  presupuesto: 'Hola, me gustaría solicitar un presupuesto personalizado',
  municipio: (municipio: string) =>
    `Hola, necesito limpieza en ${municipio}. ¿Podéis darme presupuesto?`,
  servicio: (servicio: string) =>
    `Hola, me interesa el servicio de ${servicio}. ¿Podéis informarme y dar presupuesto?`,
  blog: 'Hola, he leído vuestro artículo y me gustaría pedir presupuesto',
  combo: (servicio: string, municipio: string) =>
    `Hola, me interesa la ${servicio} en ${municipio}. ¿Podéis darme presupuesto?`,
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS.whatsappBase}?text=${encodeURIComponent(message)}`;
}

// USPs para TrustBar y secciones
export const USPS = [
  { icon: 'trophy', text: '+20 años de experiencia', detail: 'Desde 2004 en Galicia' },
  { icon: 'leaf', text: 'Productos ecológicos incluidos', detail: 'Sin coste adicional' },
  { icon: 'lightning', text: 'Presupuesto en 24h', detail: 'Sin compromiso' },
  { icon: 'calendar', text: 'Fines de semana disponibles', detail: 'Mañanas y tardes' },
  { icon: 'users', text: 'Equipo fijo de confianza', detail: 'Siempre las mismas personas' },
] as const;

// Precios orientativos (tabla base, ajustar por municipio en cada página)
export const PRICE_HINTS = {
  vivienda: [
    { tipo: 'Piso pequeño', tamano: 'hasta 50 m²', precio: 'desde 45€' },
    { tipo: 'Piso estándar', tamano: '50–70 m²', precio: 'desde 55€' },
    { tipo: 'Piso grande', tamano: '70–100 m²', precio: 'desde 70€' },
    { tipo: 'Chalet / unifamiliar', tamano: 'consultar', precio: 'presupuesto personalizado' },
  ],
  oficina: [
    { tipo: 'Despacho pequeño', tamano: 'hasta 40 m²', precio: 'desde 60€' },
    { tipo: 'Oficina mediana', tamano: '40–80 m²', precio: 'desde 80€' },
    { tipo: 'Open space / oficina grande', tamano: 'más de 80 m²', precio: 'presupuesto personalizado' },
  ],
  local: [
    { tipo: 'Local pequeño', tamano: 'hasta 50 m²', precio: 'desde 70€' },
    { tipo: 'Local mediano', tamano: '50–100 m²', precio: 'desde 90€' },
    { tipo: 'Restaurante / bar', tamano: 'consultar', precio: 'presupuesto personalizado' },
  ],
  disclaimer: 'Precios orientativos. El precio final depende del estado del inmueble, la frecuencia y las necesidades específicas. Solicita presupuesto sin compromiso.',
} as const;
