export type Servicio = {
  slug: string;
  slugGL: string;
  nombre: string;
  nombreGL: string;
  icono: string;
  precioDesde: string | null;
  descripcionCorta: string;
  tier: 1 | 2 | 3; // 1=servicio estrella, 2=importante, 3=complementario
  municipiosCombo: string[]; // slugs de municipios con página combo
};

export const SERVICIOS: Servicio[] = [
  {
    slug: 'limpieza-de-viviendas',
    slugGL: 'limpeza-de-vivendas',
    nombre: 'Limpieza de viviendas',
    nombreGL: 'Limpeza de vivendas',
    icono: 'house',
    precioDesde: '55€',
    descripcionCorta: 'Limpieza completa de pisos, chalets y casas unifamiliares. Puntual o periódica.',
    tier: 1,
    municipiosCombo: ['ferrol', 'a-coruna', 'naron', 'valdovino', 'fene', 'neda', 'mugardos', 'ares', 'pontedeume', 'culleredo', 'arteixo', 'cambre', 'oleiros', 'sada', 'cedeira'],
  },
  {
    slug: 'limpieza-de-pisos',
    slugGL: 'limpeza-de-pisos',
    nombre: 'Limpieza de pisos',
    nombreGL: 'Limpeza de pisos',
    icono: 'buildings',
    precioDesde: '55€',
    descripcionCorta: 'Limpieza profesional de pisos en bloque. Puntual para ocasiones especiales o periódica.',
    tier: 1,
    municipiosCombo: ['a-coruna', 'ferrol', 'naron', 'matogrande', 'mesoiro'],
  },
  {
    slug: 'limpieza-de-oficinas',
    slugGL: 'limpeza-de-oficinas',
    nombre: 'Limpieza de oficinas',
    nombreGL: 'Limpeza de oficinas',
    icono: 'briefcase',
    precioDesde: '80€',
    descripcionCorta: 'Limpieza de oficinas, despachos y espacios de trabajo. Horario adaptable.',
    tier: 1,
    municipiosCombo: ['a-coruna', 'ferrol', 'naron', 'culleredo', 'arteixo'],
  },
  {
    slug: 'limpieza-de-locales-comerciales',
    slugGL: 'limpeza-de-locais',
    nombre: 'Limpieza de locales comerciales',
    nombreGL: 'Limpeza de locais comerciais',
    icono: 'storefront',
    precioDesde: '70€',
    descripcionCorta: 'Limpieza de tiendas, bares, restaurantes y comercios. Fuera de horario de apertura.',
    tier: 2,
    municipiosCombo: ['a-coruna', 'ferrol', 'naron'],
  },
  {
    slug: 'limpieza-de-comunidades',
    slugGL: 'limpeza-de-comunidades',
    nombre: 'Limpieza de comunidades',
    nombreGL: 'Limpeza de comunidades',
    icono: 'buildings-alt',
    precioDesde: null,
    descripcionCorta: 'Limpieza de portales, zonas comunes, garajes y ascensores. Contrato periódico.',
    tier: 2,
    municipiosCombo: [],
  },
  {
    slug: 'limpieza-a-fondo',
    slugGL: 'limpeza-a-fondo',
    nombre: 'Limpieza a fondo',
    nombreGL: 'Limpeza a fondo',
    icono: 'sparkle',
    precioDesde: null,
    descripcionCorta: 'Limpieza profunda ocasional. Ideal para mudanzas, post-verano o gran limpieza anual.',
    tier: 2,
    municipiosCombo: [],
  },
  {
    slug: 'limpieza-fin-de-obra',
    slugGL: 'limpeza-fin-de-obra',
    nombre: 'Limpieza fin de obra',
    nombreGL: 'Limpeza fin de obra',
    icono: 'wrench',
    precioDesde: null,
    descripcionCorta: 'Limpieza tras construcción nueva o reforma. Polvo, residuos y acabado final.',
    tier: 1,
    municipiosCombo: ['ferrol', 'a-coruna', 'naron', 'culleredo'],
  },
  {
    slug: 'limpieza-de-apartamentos-turisticos',
    slugGL: 'limpeza-de-apartamentos',
    nombre: 'Limpieza de apartamentos turísticos',
    nombreGL: 'Limpeza de apartamentos turísticos',
    icono: 'bed',
    precioDesde: null,
    descripcionCorta: 'Limpieza entre huéspedes de alojamientos turísticos y Airbnb. Rápida y completa.',
    tier: 2,
    municipiosCombo: ['a-coruna', 'ferrol', 'sada', 'oleiros'],
  },
  {
    slug: 'limpieza-periodica',
    slugGL: 'limpeza-periodica',
    nombre: 'Limpieza periódica',
    nombreGL: 'Limpeza periódica',
    icono: 'calendar-check',
    precioDesde: '55€',
    descripcionCorta: 'Servicio regular semanal, quincenal o mensual. Mismo equipo siempre.',
    tier: 1,
    municipiosCombo: [],
  },
  {
    slug: 'limpieza-de-cristales',
    slugGL: 'limpeza-de-cristais',
    nombre: 'Limpieza de cristales',
    nombreGL: 'Limpeza de cristais',
    icono: 'window',
    precioDesde: null,
    descripcionCorta: 'Limpieza profesional de cristales y ventanales. Interior y exterior. Alturas.',
    tier: 2,
    municipiosCombo: ['a-coruna', 'ferrol'],
  },
  {
    slug: 'limpieza-de-pazos-y-eventos',
    slugGL: 'limpeza-de-pazos',
    nombre: 'Limpieza de pazos y eventos',
    nombreGL: 'Limpeza de pazos e eventos',
    icono: 'castle',
    precioDesde: null,
    descripcionCorta: 'Preparación y post-evento de pazos, fincas y espacios para bodas y celebraciones.',
    tier: 2,
    municipiosCombo: ['ferrol', 'a-coruna', 'pontedeume'],
  },
];

export function getServicioBySlug(slug: string): Servicio | undefined {
  return SERVICIOS.find(s => s.slug === slug);
}

export const SERVICIOS_TIER1 = SERVICIOS.filter(s => s.tier === 1);
