/**
 * Política de URLs transaccionales.
 *
 * /servicios/{servicio}/  → dueña de la intención comercial ("contratar este servicio").
 * /servicios/{servicio}/{municipio}/ → money page solo si hay demanda e intención local real.
 * /zonas/{municipio}/ → hub de cobertura. No vende el servicio; enlaza a la money page o a la ficha.
 *
 * Combos retirados: 301 a la ficha de servicio. La cobertura de esos concellos sigue en /zonas/.
 * Primera tanda: municipios rurales con poca demanda de "[servicio] + pueblo".
 * Ares y el resto de Ferrolterra/Área Coruña se mantienen.
 *
 * Barrios: /zonas/{municipio}/{barrio}/ sigue como cobertura.
 * Money page de barrio solo en Ferrol y Narón, 3 servicios, 5 barrios con demanda real.
 * El resto de /servicios/{servicio}/{municipio}/{barrio}/ → 301 a la money page del municipio.
 */
export const COMBOS_RETIRADOS = [
  'moeche',
  'san-sadurnino',
  'cabanas',
  'ortigueira',
  'cerdido',
] as const;

export const SERVICIOS_BARRIO_MONEY = [
  'limpieza-de-pisos',
  'limpieza-de-viviendas',
  'limpieza-periodica',
] as const;

export const BARRIOS_MONEY: Record<string, readonly string[]> = {
  ferrol: ['caranza', 'recimil', 'a-magdalena', 'esteiro', 'infernino'],
  naron: ['a-gandara', 'o-couto', 'o-val', 'san-xiao-de-naron', 'alto-del-castano'],
};

export type ComboRetirado = (typeof COMBOS_RETIRADOS)[number];

export function esComboRetirado(slug: string): boolean {
  return (COMBOS_RETIRADOS as readonly string[]).includes(slug);
}

export function esComboBarrioPermitido(servicioSlug: string, municipioSlug: string, barrioSlug: string): boolean {
  const barrios = BARRIOS_MONEY[municipioSlug];
  if (!barrios?.includes(barrioSlug)) return false;
  return (SERVICIOS_BARRIO_MONEY as readonly string[]).includes(servicioSlug);
}
