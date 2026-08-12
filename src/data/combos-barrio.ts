import type { BarrioArchetype } from './municipios';

export type ContenidoArquetipo = {
  tituloPagina: string;
  h1Qualifier: string;
  metaDescAngle: string;
  speakableIntro: string;
  problemaH2: string;
  problemaContent: string;
  ventanasH2: string;
  ventanasContent: string;
  faqs: { q: string; a: string }[];
};

function t(template: string, barrio: string, municipio: string): string {
  return template.replace(/\{barrio\}/g, barrio).replace(/\{municipio\}/g, municipio);
}

const CRISTALES_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoArquetipo> = {
  'bloque-obrero': {
    tituloPagina: 'Limpiar ventanas de bloque en {barrio}: cal acumulada',
    h1Qualifier: 'pisos de bloque · cal acumulada',
    metaDescAngle: 'Eliminamos la cal incrustada en ventanas de bloques de los años 70-80 con quitacal de pH ácido certificado Ecolabel. Sin rayas.',
    speakableIntro: 'Los pisos de bloque de {barrio} son en su mayoría viviendas de los años 70-80 con ventanas de carpintería de aluminio de época. El agua de Ferrol tiene un contenido alto de cal, y en décadas de uso sin limpieza profesional esa cal se deposita en capas sobre el vidrio hasta formar una película blanca opaca que el limpiacristales convencional no elimina. En Zentro Limpiezas usamos quitacales de pH ácido certificado Ecolabel que disuelven el depósito sin atacar el aluminio ni el vidrio.',
    problemaH2: '¿Por qué los cristales de los pisos de {barrio} acumulan tanta cal?',
    problemaContent: 'El agua calcárea de Ferrol deja un depósito mineral en cada limpieza doméstica que, con los años, forma una capa blanca incrustada en el vidrio. Los bloques de {barrio}, con décadas de antigüedad y carpintería de aluminio de época, concentran este problema más que las viviendas modernas. Un quitacal de pH ácido controlado disuelve el depósito sin dañar el aluminio; sin él, el frotado solo redistribuye la cal sin eliminarla.',
    ventanasH2: 'Limpieza de ventanas y mamparas en pisos de bloque de {barrio}',
    ventanasContent: 'Las mamparas de ducha de los pisos de bloque de {barrio} acumulan sarro por las mismas razones que los cristales exteriores: agua con alta concentración de cal. En una misma visita limpiamos todas las ventanas y la mampara del baño con el mismo tratamiento de ácido cítrico certificado, sin coste adicional. Resultado sin rayas y sin residuos de producto gracias al secado con escurridor de goma profesional.',
    faqs: [
      {
        q: '¿Cuántas limpiezas necesito para eliminar la cal acumulada durante años en los cristales de {barrio}?',
        a: 'Depende del grosor del depósito. Para cal de 1-2 años, una sesión es suficiente. Para depósitos de muchos años, puede necesitarse un tratamiento intensivo inicial y una sesión de mantenimiento posterior. Lo evaluamos en la primera visita y te lo explicamos antes de empezar.',
      },
      {
        q: '¿Con qué frecuencia hay que limpiar las ventanas en un piso de bloque de {barrio} para que no vuelva a salir la cal?',
        a: 'Con el agua calcárea de Ferrol, una limpieza profesional cada 3-4 meses mantiene los cristales en buen estado y evita que la cal penetre el vidrio de forma permanente. La limpieza de mantenimiento es mucho más sencilla y rápida que el tratamiento inicial.',
      },
    ],
  },

  'historico': {
    tituloPagina: 'Ventanas históricas en {barrio}: limpieza sin dañar marcos',
    h1Qualifier: 'edificios históricos · carpintería de época',
    metaDescAngle: 'Limpiamos cristales de carpintería histórica con productos neutros certificados que no atacan la madera ni el vidrio antiguo.',
    speakableIntro: '{barrio} concentra algunos de los edificios más antiguos de {municipio}, con pisos en construcciones del siglo XVIII-XIX. Sus ventanas tienen carpintería de madera, vidrio antiguo y marcos que absorben la humedad con el tiempo. Limpiar estos cristales bien requiere productos que no ataquen la madera ni degraden el vidrio antiguo. Los productos Ecolabel de pH neutro que usamos en Zentro Limpiezas son especialmente apropiados para estas superficies delicadas, donde un quitacal agresivo podría dañar el acabado del marco.',
    problemaH2: '¿Cómo se limpian los cristales de carpintería histórica de {barrio} sin dañar la madera?',
    problemaContent: 'La diferencia clave con los cristales modernos está en el marco. La madera de las ventanas históricas de {barrio} absorbe los productos líquidos si se aplican sin control. La técnica correcta es aplicar el limpiacristales solo sobre el vidrio con paño de microfibra bien escurrido y secar de inmediato. Nunca spray directo cerca del marco de madera. Las manchas incrustadas se eliminan con rasqueta de goma sin riesgo para el vidrio de época.',
    ventanasH2: 'Limpieza de ventanas de guillotina y vidrios planos en {barrio}',
    ventanasContent: 'Muchos pisos de {barrio} tienen ventanas de guillotina (que suben y bajan verticalmente) o contraventanas de madera. Estas carpinterías acumulan polvo, suciedad y verdín en ranuras y recovecos. La limpieza requiere cepillos finos para los carriles, atención especial al sellado entre vidrio y marco, y productos ecológicos que no manchen la madera. Lo hacemos con el mismo tiempo de dedicación que una ventana moderna lleva el doble: el resultado se nota.',
    faqs: [
      {
        q: '¿Se puede usar ácido cítrico para eliminar la cal en cristales de carpintería de madera histórica de {barrio}?',
        a: 'Con precaución, sí. El ácido cítrico diluido se aplica únicamente sobre el vidrio con paño controlado, sin que gotee sobre la madera. Si el marco tiene pintura en mal estado, recomendamos evaluar el sellado antes de aplicar cualquier producto líquido.',
      },
      {
        q: '¿Cuánto tarda la limpieza de cristales en un piso de edificio histórico de {barrio}?',
        a: 'Más que en un piso estándar. Las ventanas de carpintería histórica tienen marcos, travesaños y detalles que necesitan atención individual. Para un piso de 80 m² con 6-8 ventanas de guillotina, calcular entre 2 y 3 horas, incluyendo la limpieza detallada de marcos y el secado correcto.',
      },
    ],
  },

  'marinero': {
    tituloPagina: 'Cristales con salitre en {barrio}: limpieza de vidrios costeros',
    h1Qualifier: 'zona costera · salitre y brisa marina',
    metaDescAngle: 'Eliminamos el salitre marino incrustado en cristales de casas costeras con neutralizadores de sales certificados. Sin micro-rayaduras.',
    speakableIntro: '{barrio} es uno de los barrios más expuestos a la brisa marina de {municipio}. La salinidad del ambiente deposita salitre sobre los cristales formando una película blanca nacarada que el limpiacristales convencional apenas toca. El salitre no es cal: es una mezcla de sales minerales con cristales microscópicos que pueden crear micro-rayaduras si se frota en seco. En Zentro Limpiezas usamos neutralizadores de sales marinas certificados que disuelven el depósito sin residuos.',
    problemaH2: '¿Qué hace el salitre marino a los cristales de las casas de {barrio}?',
    problemaContent: 'El salitre de la brisa marina se deposita en capas finas pero continuas. A diferencia de la cal del agua, el salitre tiene cristales de sal que crean micro-rayaduras si se frota en seco. Con el tiempo forma una capa blanca nacarada que reduce la transparencia del vidrio y puede volverse permanente. La frecuencia de limpieza en zonas costeras como {barrio} debe ser mayor que en el interior: cada 4-6 semanas en lugar de cada 3-4 meses.',
    ventanasH2: 'Limpieza de ventanas y marcos en casas de {barrio} expuestas al mar',
    ventanasContent: 'En {barrio}, los marcos de aluminio también sufren el ambiente salino: el salitre actúa como acelerador de la corrosión. Una limpieza regular con productos sin ácidos agresivos que atacen el aluminio alarga considerablemente la vida de las ventanas. El servicio incluye cristales, marcos y cualquier mampara o ventana interior que acumule humedad por el ambiente costero.',
    faqs: [
      {
        q: '¿El salitre marino daña los marcos de las ventanas de {barrio} además del cristal?',
        a: 'Sí. Los marcos de aluminio en zonas costeras pueden sufrir oxidación acelerada por el ambiente salino. Una limpieza regular con productos adecuados —sin ácidos agresivos que ataquen el aluminio— alarga considerablemente la vida de las ventanas en zonas como {barrio}.',
      },
      {
        q: '¿Puedo limpiar yo mismo los cristales con salitre en mi casa de {barrio}?',
        a: 'Para mantenimiento ligero, sí. La clave es no frotar en seco: primero moja el cristal para disolver el salitre, luego limpia con microfibra húmeda. Para salitre incrustado de semanas o meses, el tratamiento profesional con neutralizadores específicos da mejor resultado y evita las micro-rayaduras que ocurren al frotar sal cristalizada sobre vidrio.',
      },
    ],
  },

  'segunda-residencia': {
    tituloPagina: 'Apertura de temporada en {barrio}: cristales y ventanas listos',
    h1Qualifier: 'segunda residencia · apertura de temporada',
    metaDescAngle: 'Limpieza de cristales para apertura de segunda residencia en {barrio}. Eliminamos polvo, verdín y manchas de condensación acumulados en meses cerrada.',
    speakableIntro: 'En {barrio}, una parte significativa de las viviendas son segunda residencia: casas que pasan meses cerradas y se abren en verano o Navidades. Durante ese tiempo los cristales acumulan polvo, manchas de condensación y, en marcos exteriores, verdín por la humedad del invierno gallego. La limpieza de apertura de temporada es uno de los servicios más demandados en esta zona: dejamos la vivienda a punto antes de que llegues, con todos los cristales y ventanas sin rayas.',
    problemaH2: '¿Qué le ocurre a los cristales de una casa de {barrio} que lleva meses cerrada?',
    problemaContent: 'El invierno gallego es húmedo y hay poca ventilación en una casa cerrada. La condensación se deposita en los cristales y al secarse deja manchas de agua y polvo incrustado. En marcos exteriores, la humedad favorece el crecimiento de verdín. Si la casa tiene vistas al campo o a la ría, el polvo orgánico también se deposita sobre el vidrio. En la limpieza de apertura tratamos cada uno de estos problemas de forma específica.',
    ventanasH2: 'Servicio de limpieza de ventanas para apertura de casa en {barrio}',
    ventanasContent: 'El servicio de apertura en {barrio} incluye: todos los cristales interior y exterior accesible desde el suelo, tratamiento del verdín en marcos con antifúngico ecológico, eliminación de manchas de agua y condensación, y revisión de mamparas de ducha si las hay. Muchos clientes nos dejan la llave y entramos solos: cuando llegues, la casa está lista desde el primer momento.',
    faqs: [
      {
        q: '¿Con cuánta antelación hay que pedir la limpieza de apertura de temporada en {barrio}?',
        a: 'En temporada alta (junio-agosto) recomendamos solicitarla con 2-3 semanas de antelación para garantizar disponibilidad. En el resto del año, una semana suele ser suficiente. Escríbenos por WhatsApp con la fecha que necesitas y te confirmamos en el día.',
      },
      {
        q: '¿Puedo contratar solo la limpieza de cristales sin el resto de la limpieza de apertura en {barrio}?',
        a: 'Sí. Podemos hacer únicamente los cristales y ventanas si el resto de la casa ya lo tienes cubierto. También al revés: limpieza general de apertura sin los cristales. Adaptamos el servicio exactamente a lo que necesitas.',
      },
    ],
  },

  'chalet': {
    tituloPagina: 'Ventanas de chalé en {barrio}: exteriores, terraza y planta alta',
    h1Qualifier: 'chalés y unifamiliares · cristales exteriores',
    metaDescAngle: 'Limpieza de cristales en chalés y adosados de {barrio}: ventanales grandes, segunda planta y cristaleras de terraza con pértiga telescópica.',
    speakableIntro: 'Los chalés y adosados de {barrio} tienen más superficie de cristal que un piso de bloque: ventanales grandes en salón, cristaleras de terraza, ventanas de planta alta y, en muchos casos, lucernarios. El jardín y la vegetación aportan barro en los días de lluvia y polvo orgánico en verano. En Zentro Limpiezas trabajamos con pértigas telescópicas que alcanzan primera y segunda planta desde el exterior sin escalera. Todos los cristales accesibles en una sola visita.',
    problemaH2: '¿Cómo se limpian los cristales de la segunda planta en los chalés de {barrio}?',
    problemaContent: 'Para ventanas de primera y segunda planta en chalés de {barrio}, trabajamos con pértigas telescópicas de hasta 6 metros con cabezal de rasqueta. Desde el exterior, sin escalera y sin riesgo. Para ventanas de tercera planta o superiores se evalúa el acceso en cada caso. La mayoría de chalés de {barrio} tienen 2 plantas, lo que cubre perfectamente la pértiga estándar sin necesidad de equipos adicionales.',
    ventanasH2: 'Limpieza de ventanales de salón y cristaleras de terraza en {barrio}',
    ventanasContent: 'Los ventanales grandes de los salones de chalés en {barrio} son la superficie que más se nota cuando está sucia y que más impacto visual tiene cuando está limpia. Para grandes formatos usamos el sistema profesional de mopa y rasqueta: extiende el producto en toda la superficie de una pasada y elimina el agua limpiamente sin marcas. El resultado es visiblemente diferente al de los cristales pequeños trabajados con spray y microfibra.',
    faqs: [
      {
        q: '¿Limpiáis también la cristalera de la terraza y el porche cubierto en {barrio}?',
        a: 'Sí. Cristaleras de terraza, porches acristalados, lucernarios y cualquier superficie de vidrio accesible desde el suelo o con pértiga. Los porches cubiertos acumulan polvo y telarañas por el interior que también tratamos en la misma visita.',
      },
      {
        q: '¿Con qué frecuencia hay que limpiar los cristales en un chalé de {barrio}?',
        a: 'Los chalés con jardín necesitan limpieza más frecuente que los pisos de bloque porque la vegetación y la lluvia ensucian más rápido los exteriores. En {barrio}, 3-4 veces al año es lo habitual para mantener un buen nivel sin que se acumule suciedad difícil de eliminar.',
      },
    ],
  },

  'rural': {
    tituloPagina: 'Ventanas con verdín en {barrio}: limpieza rural con antifúngico',
    h1Qualifier: 'rural gallego · humedad y verdín en marcos',
    metaDescAngle: 'Limpieza de cristales en casas rurales de {barrio}: eliminamos verdín en marcos de madera y polvo orgánico con antifúngico ecológico certificado.',
    speakableIntro: 'Las casas rurales de {barrio} son en su mayoría viviendas de piedra o construcción tradicional gallega, con marcos de madera o carpintería más antigua. El invierno húmedo de Ferrolterra, con lluvias frecuentes y poca luz directa, favorece el crecimiento de verdín y musgo en marcos exteriores y, en algunos casos, en la parte inferior del propio vidrio. Además, el polvo orgánico del entorno —prados, árboles, huertos— se deposita sobre los cristales con cada brisa. En Zentro Limpiezas limpiamos vidrio y marcos con antifúngico ecológico que no daña la madera.',
    problemaH2: '¿Por qué aparece verdín en los marcos de las ventanas de las casas de {barrio}?',
    problemaContent: 'El verdín en marcos exteriores de {barrio} es consecuencia directa de la combinación de humedad, sombra y material orgánico. La madera de las casas rurales retiene la humedad y en zonas con poco sol directo las algas y el musgo encuentran las condiciones ideales. No es un problema de suciedad sino biológico. Se elimina con biocida ecológico y se previene con una limpieza periódica que no deje humedad acumulada en las ranuras del marco.',
    ventanasH2: 'Limpieza de ventanas en casas de piedra de {barrio}: cuidados específicos',
    ventanasContent: 'Las ventanas de las casas de piedra de {barrio} tienen particularidades que no existen en pisos de bloque: el contorno de piedra puede acumular agua, los marcos de madera tienen más superficie expuesta, y algunos vidrios son más delgados que los modernos. Usamos productos de pH neutro o ligeramente ácido para el vidrio y antifúngico específico en base acuosa para los marcos de madera, sin dañarlos. El secado cuidadoso con microfibra evita la condensación que vuelve a generar verdín.',
    faqs: [
      {
        q: '¿El verdín en los marcos de madera de {barrio} indica que la madera está dañada?',
        a: 'No necesariamente. El verdín superficial es una capa de algas que se elimina con tratamiento biocida ecológico. Si la madera por debajo está sana y no hay pudrición, la ventana está en buen estado. Si al retirar el verdín aparece madera blanda, entonces hay un problema estructural que requiere carpintero además de la limpieza.',
      },
      {
        q: '¿Cuánto cuesta limpiar los cristales de una casa rural en {barrio}?',
        a: 'Para una casa rural estándar de {barrio} con 6-10 ventanas, el servicio de cristales incluyendo tratamiento de verdín en marcos empieza desde 80€. Presupuesto cerrado en menos de 24 horas sin necesidad de visita previa.',
      },
    ],
  },

  'industrial': {
    tituloPagina: 'Cristales con polvo industrial en {barrio}: desengrase profesional',
    h1Qualifier: 'zona polígono · polvo industrial y tráfico',
    metaDescAngle: 'Limpieza de cristales en O Val con desengrasantes Ecolabel de alta eficacia: eliminamos la capa de polvo industrial y grasa ambiental de viviendas y locales.',
    speakableIntro: 'O Val concentra la actividad comercial e industrial de Narón, con polígonos, tráfico pesado y actividad logística que genera partículas mucho más abrasivas que el polvo doméstico. Los cristales de viviendas y locales de O Val acumulan una capa de polvo fino mezclado con grasa ambiental y partículas de combustión que se adhiere al vidrio con más fuerza que la suciedad convencional. En Zentro Limpiezas usamos desengrasantes Ecolabel de alta eficacia que disuelven esta capa sin necesidad de frotar fuerte.',
    problemaH2: '¿Por qué los cristales de O Val se ensucian más rápido que en otras zonas de Narón?',
    problemaContent: 'La cercanía al polígono industrial de Narón y al tráfico pesado de la N-651 hace que el aire de O Val tenga mayor concentración de partículas en suspensión: polvo de caucho de neumáticos, partículas de combustión diésel, polvo de materiales de construcción. Estas partículas forman sobre el vidrio una película grasienta que no sale con limpiacristales convencional. Requiere un desengrasante previo que disuelva la grasa y luego el limpiacristales para el acabado sin rayas.',
    ventanasH2: 'Limpieza de ventanas y escaparates para locales de O Val',
    ventanasContent: 'En O Val hay muchos locales comerciales y oficinas cuyas ventanas miran a la calle o al polígono. La imagen de un local con cristales sucios es la primera impresión que ve el cliente. El servicio de limpieza de cristales para locales en O Val incluye escaparates, ventanales de oficina y particiones interiores. Podemos trabajar en horario nocturno o de madrugada para no interrumpir la actividad comercial.',
    faqs: [
      {
        q: '¿Hay que usar productos especiales para limpiar los cristales de locales en zonas industriales como O Val?',
        a: 'Sí. El polvo industrial tiene componentes grasos que el limpiacristales estándar no disuelve completamente. Aplicamos una fase de desengrase con producto neutro certificado Ecolabel antes del limpiacristales final. El resultado es visiblemente mejor, especialmente en cristales de escaparate que son la imagen del negocio.',
      },
      {
        q: '¿Cuánto tarda en volver a ensuciarse un cristal en O Val después de la limpieza?',
        a: 'En O Val, los cristales exteriores de locales se ensucian visiblemente en 3-6 semanas. Para viviendas, algo más: entre 4-8 semanas según la orientación. Lo que sí cambia con la limpieza profesional es el tipo de suciedad: una vez retirada la capa de grasa, las siguientes suciedades son más superficiales y más fáciles de eliminar.',
      },
    ],
  },
};

export const CONTENIDO_BARRIO: Partial<Record<string, Record<BarrioArchetype, ContenidoArquetipo>>> = {
  'limpieza-de-cristales': CRISTALES_POR_ARQUETIPO,
};

export function getContenidoBarrio(
  servicioSlug: string,
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoArquetipo | null {
  const servicioMap = CONTENIDO_BARRIO[servicioSlug];
  if (!servicioMap) return null;
  const raw = servicioMap[archetype];
  if (!raw) return null;
  return {
    tituloMod: t(raw.tituloMod, barrioNombre, municipioNombre),
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDescAngle: t(raw.metaDescAngle, barrioNombre, municipioNombre),
    speakableIntro: t(raw.speakableIntro, barrioNombre, municipioNombre),
    problemaH2: t(raw.problemaH2, barrioNombre, municipioNombre),
    problemaContent: t(raw.problemaContent, barrioNombre, municipioNombre),
    ventanasH2: t(raw.ventanasH2, barrioNombre, municipioNombre),
    ventanasContent: t(raw.ventanasContent, barrioNombre, municipioNombre),
    faqs: raw.faqs.map(f => ({
      q: t(f.q, barrioNombre, municipioNombre),
      a: t(f.a, barrioNombre, municipioNombre),
    })),
  };
}
