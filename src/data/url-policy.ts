/**
 * Política de URLs transaccionales.
 *
 * /servicios/{servicio}/  → dueña de la intención comercial ("contratar este servicio").
 * /servicios/{servicio}/{municipio}/ → money page solo si hay demanda e intención local real.
 * /zonas/{municipio}/ → hub de cobertura. No vende el servicio; enlaza a la money page o a la ficha.
 *
 * Combos retirados: 301 a la ficha de servicio. La cobertura de esos concellos sigue en /zonas/.
 * Primera tanda: municipios rurales con poca demanda de "[servicio] + pueblo".
 * Ares y el resto de Ferrolterra/Área Coruña se mantienen. Barrios, en otra tanda.
 */
export const COMBOS_RETIRADOS = [
  'moeche',
  'san-sadurnino',
  'cabanas',
  'ortigueira',
  'cerdido',
] as const;

export type ComboRetirado = (typeof COMBOS_RETIRADOS)[number];

export function esComboRetirado(slug: string): boolean {
  return (COMBOS_RETIRADOS as readonly string[]).includes(slug);
}
