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

// ─── LIMPIEZA PERIÓDICA ─────────────────────────────────────────────────────

export type ContenidoPeriodica = {
  h1Qualifier: string;
  metaDesc: string;
  intro: string;
  porQueH2: string;
  porQueContent: string;
  queIncluyeH2: string;
  queIncluyeItems: string[];
  frecuencia: string;
  precioItems: string[];
  faqs: { q: string; a: string }[];
};

const PERIODICA_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoPeriodica> = {
  'bloque-obrero': {
    h1Qualifier: 'pisos de bloque · limpieza regular sin sorpresas',
    metaDesc: 'Limpieza periódica de pisos en {barrio}: cocinas con grasa, baños con cal y suelos de tráfico intenso. Presupuesto cerrado, día fijo, productos Ecolabel.',
    intro: 'En los pisos de bloque de {barrio}, la limpieza periódica profesional no es un lujo: es la forma más eficiente de mantener una vivienda habitada por familias con ritmo intenso. La cocina acumula grasa semanalmente, el baño genera cal con el agua de Ferrol y los suelos de tráfico diario necesitan fregado sistemático. Con un servicio periódico fijo, la casa nunca cae por debajo de un nivel mínimo y cada limpieza dura menos que la anterior.',
    porQueH2: '¿Por qué contratar limpieza periódica en {barrio} en lugar de hacerlo tú?',
    porQueContent: 'Los pisos de bloque de {barrio} tienen una composición de suciedad muy específica: grasa de cocción en campana y azulejos, cal incrustada en baños por el agua calcárea de Ferrol, y suelos de vinilo o gres con tráfico de 3-4 personas a diario. Limpiar esto bien requiere productos específicos y una secuencia correcta. El servicio periódico ajusta la intensidad según lo que haya acumulado la semana, no aplica siempre lo mismo sin mirar.',
    queIncluyeH2: 'Qué incluye cada visita de limpieza periódica en {barrio}',
    queIncluyeItems: [
      'Cocina: campana, encimera, azulejos y electrodomésticos exteriores',
      'Baño/s: sanitarios, mampara, suelo y azulejos con antical',
      'Suelos de toda la vivienda: barrido y fregado con mopa de microfibra',
      'Superficies y muebles: polvo en encimeras, estanterías y rodapiés',
      'Papeleras vaciadas y bolsas de basura repuestas',
      'Espejos y cristales interiores sin rayas',
    ],
    frecuencia: 'Para una familia de 3-4 personas en {barrio}, la frecuencia más habitual es quincenal. Para parejas sin niños o personas solas, una vez al mes suele ser suficiente. Familias con niños pequeños o mascotas prefieren visita semanal.',
    precioItems: [
      'Piso 1-2 habitaciones (45-65 m²): desde 50-65€/visita quincenal',
      'Piso 3 habitaciones (70-90 m²): desde 65-85€/visita quincenal',
      'Bonificación por contrato mensual: 10% sobre el precio por visita',
      'Incluido siempre: productos Ecolabel, mopa de microfibra, antical para baños',
    ],
    faqs: [
      {
        q: '¿Puedo cambiar el día de visita si tengo un imprevisto en {barrio}?',
        a: 'Sí. Avisando con 24 horas de antelación recolocamos la visita sin coste. Los clientes con servicio periódico en {barrio} tienen prioridad en la agenda para reasignaciones.',
      },
      {
        q: '¿Traéis vosotros los productos o tengo que tenerlos en casa?',
        a: 'Traemos todo: productos Ecolabel certificados, mopas, cubos y microfibras. No necesitas tener nada preparado. Si tienes algún producto específico que prefieras que usemos, lo comentamos al contratar.',
      },
    ],
  },

  'historico': {
    h1Qualifier: 'edificios históricos · cuidado de suelos y madera',
    metaDesc: 'Limpieza periódica en {barrio}: suelos de madera, parquet y tarima de época cuidados con productos neutros. Regularidad sin dañar los acabados históricos.',
    intro: 'Los pisos en edificios históricos de {barrio} tienen características únicas que exigen atención especial en la limpieza regular: suelos de madera o parquet de época, molduras y rodapiés con relieve, y muros de piedra o yeso que acumulan humedad y polvo de forma diferente a la construcción moderna. Una limpieza periódica profesional en este tipo de viviendas no puede ser la misma que en un piso estándar: los productos y la técnica cambian para no dañar los acabados históricos.',
    porQueH2: '¿Qué tiene de especial la limpieza de los pisos históricos de {barrio}?',
    porQueContent: 'El principal reto en los pisos históricos de {barrio} es el suelo. La madera y el parquet de época no admiten agua en exceso: se hinchan, se decoloran y las juntas se abren. La limpieza correcta usa paños muy bien escurridos o sistemas de vapor de baja presión. Los rodapiés con moldura acumulan polvo en los recovecos que no recoge una mopa plana estándar. Y las ventanas de guillotina necesitan limpieza de los carriles con cepillos finos que no se incluyen en una limpieza convencional.',
    queIncluyeH2: 'Qué incluye la limpieza periódica en un piso histórico de {barrio}',
    queIncluyeItems: [
      'Suelos de madera: limpieza en seco con mopa de microfibra y mínima humedad',
      'Rodapiés y molduras: cepillado de polvo en recovecos y esquinas',
      'Cocina y baño: productos neutros de pH 7 sin ácidos que dañen azulejos históricos',
      'Techos: eliminación de polvo en cornisas y esquinas con barra extensible',
      'Vidrios interiores y espejos: técnica de microfibra sin spray directo',
      'Carriles de ventanas de guillotina: cepillado fino incluido',
    ],
    frecuencia: 'Para un piso histórico habitado en {barrio}, la limpieza quincenal mantiene el polvo bajo control sin sobreexponer los suelos de madera a la humedad. Una vez al mes puede ser suficiente para personas solas o parejas sin niños.',
    precioItems: [
      'Piso histórico 50-70 m²: desde 60-80€/visita quincenal',
      'Piso histórico 80-120 m²: desde 85-110€/visita quincenal',
      'Suelos de madera: técnica específica incluida sin suplemento',
      'Productos neutros Ecolabel: incluidos siempre',
    ],
    faqs: [
      {
        q: '¿Podéis limpiar suelos de madera de época en {barrio} sin dañarlos?',
        a: 'Sí. Usamos mopa de microfibra casi seca y evitamos agua en exceso. Para barnices muy antiguos o parquet sin tratar recomendamos una inspección previa gratuita para valorar qué producto es seguro en ese suelo específico.',
      },
      {
        q: '¿Tenéis experiencia con pisos en edificios protegidos de {barrio}?',
        a: 'Sí. En {barrio} hemos trabajado en varios pisos de edificios catalogados. La principal diferencia es el tratamiento del suelo y la atención a molduras y carpinterías de época, que conocemos bien.',
      },
    ],
  },

  'marinero': {
    h1Qualifier: 'zona costera · control de humedad y salitre',
    metaDesc: 'Limpieza periódica en {barrio}: control de humedad marina, salitre en superficies y condensaciones frecuentes. Servicio regular con productos certificados.',
    intro: 'Las viviendas de {barrio} están expuestas a un ambiente marino que lo cambia todo en la limpieza doméstica: la humedad se asienta en paredes y techos, el salitre se deposita en ventanas y superficies metálicas, y los hongos aparecen antes que en zonas del interior. La limpieza periódica en {barrio} tiene que incorporar ventilación activa, control de manchas por condensación y atención a los marcos metálicos antes de que el ambiente salino los deteriore.',
    porQueH2: '¿Cómo afecta el ambiente marino de {barrio} a la limpieza regular del hogar?',
    porQueContent: 'En {barrio}, la brisa marina carga el aire de partículas de sal y humedad que se depositan en todas las superficies horizontales: estantes, encimeras, alféizares. La sal combinada con la humedad acelera la aparición de manchas en paredes y techos, especialmente en baños y cocinas. El salitre en marcos de aluminio, si no se limpia con regularidad, puede acelerar la oxidación. Un servicio periódico que atiende específicamente estas zonas previene daños mayores y mantiene la vivienda en buen estado más tiempo.',
    queIncluyeH2: 'Qué incluye la limpieza periódica en las casas de {barrio}',
    queIncluyeItems: [
      'Superficies horizontales: limpieza de salitre depositado en alféizares, encimeras y estantes',
      'Baños: antical y antifúngico preventivo en juntas y techos',
      'Marcos de ventana: limpieza de salitre con neutralizador de sales',
      'Suelos: fregado con secado rápido para evitar humedad residual',
      'Cocina: desengrase de campana y encimera, limpieza de condensaciones en azulejos',
      'Ventilación: limpieza de rejillas de ventilación que acumulan sal y polvo marino',
    ],
    frecuencia: 'En {barrio}, la frecuencia recomendada es quincenal por la rapidez con que el ambiente marino deposita salitre y humedad. En verano, con más actividad y las ventanas más abiertas, muchos clientes prefieren visita semanal.',
    precioItems: [
      'Apartamento o piso 40-65 m²: desde 55-70€/visita quincenal',
      'Piso 70-90 m²: desde 70-90€/visita quincenal',
      'Tratamiento preventivo antifúngico en baños: incluido sin suplemento',
      'Neutralizador de sales en marcos: incluido siempre',
    ],
    faqs: [
      {
        q: '¿Con qué frecuencia hay que limpiar en {barrio} para evitar que salga moho?',
        a: 'En {barrio}, con el nivel de humedad marina, una limpieza quincenal con antifúngico preventivo en baños es suficiente para evitar que el moho se instale. Si la vivienda tiene ventilación deficiente, recomendamos también una inspección de juntas y sellados.',
      },
      {
        q: '¿Usáis algún producto específico para el salitre en las superficies de {barrio}?',
        a: 'Sí. Incorporamos un neutralizador de sales marinas en las superficies expuestas, especialmente marcos de ventana y alféizares. Es un paso adicional respecto a la limpieza estándar que marca la diferencia en zonas costeras como {barrio}.',
      },
    ],
  },

  'segunda-residencia': {
    h1Qualifier: 'segunda residencia · limpieza antes y después de cada estancia',
    metaDesc: 'Limpieza periódica para segunda residencia en {barrio}: apertura de temporada, mantenimiento durante la estancia y cierre. Sin preocupaciones cuando no estás.',
    intro: 'Una segunda residencia en {barrio} necesita un modelo de limpieza diferente al de una vivienda habitual. No es frecuente sino puntual: apertura antes de llegar, mantenimiento si la estancia es larga, y cierre correcto cuando te vas. En Zentro Limpiezas gestionamos el ciclo completo para propietarios de segunda residencia en {barrio}: coordinamos por WhatsApp, entramos con llave si nos la dejas y la casa está lista cuando tú llegues.',
    porQueH2: '¿Qué necesita una segunda residencia de {barrio} que lleva meses cerrada?',
    porQueContent: 'El invierno gallego es húmedo. Una casa cerrada en {barrio} durante varios meses acumula polvo, manchas de condensación en ventanas y techos, posible olor a cerrado, y en casos con vegetación cercana, pequeños insectos. La limpieza de apertura no es un repaso superficial: requiere ventilar bien, tratar la condensación en cristales y techos, desinfectar baños y cocina después del cierre, y revisar que no haya problemas de humedad o filtraciones que hayan pasado inadvertidos.',
    queIncluyeH2: 'Qué incluye la limpieza de apertura de segunda residencia en {barrio}',
    queIncluyeItems: [
      'Ventilación controlada de todas las estancias',
      'Eliminación de polvo acumulado: suelos, muebles, techos y esquinas',
      'Tratamiento de manchas de condensación en ventanas y cristales',
      'Desinfección de baños y cocina tras el período de cierre',
      'Revisión visual de humedad en paredes y techos (avisamos si encontramos algo)',
      'Frigorífico: limpieza interior si lo dejaste en marcha o con productos',
      'Camas: cambio de ropa de cama si nos dejas juego preparado',
    ],
    frecuencia: 'Para segunda residencia en {barrio}: limpieza de apertura al llegar, limpieza semanal o quincenal si la estancia supera 2 semanas, y limpieza de cierre antes de irte. Sin compromiso de regularidad: contratas las visitas que necesitas.',
    precioItems: [
      'Limpieza de apertura (hasta 80 m²): desde 90-130€ según estado',
      'Limpieza de mantenimiento durante estancia: desde 55-80€/visita',
      'Limpieza de cierre con cambio de sábanas y protección de muebles: desde 75€',
      'Gestión con llave: sin coste adicional',
    ],
    faqs: [
      {
        q: '¿Podéis entrar a limpiar en {barrio} cuando yo no estoy presente?',
        a: 'Sí. Muchos propietarios de segunda residencia en {barrio} nos dejan una copia de la llave o un código de cerradura digital. Coordinamos por WhatsApp, hacemos la limpieza y te enviamos foto de confirmación al terminar.',
      },
      {
        q: '¿Con cuánta antelación hay que pedir la limpieza de apertura en {barrio} en temporada alta?',
        a: 'En julio y agosto, con 2-3 semanas de antelación. En el resto del año, una semana suele ser suficiente. Lo antes que nos avises, antes podemos garantizar tu fecha preferida.',
      },
    ],
  },

  'chalet': {
    h1Qualifier: 'chalés y adosados · más metros, más estancias',
    metaDesc: 'Limpieza periódica en chalés de {barrio}: planta baja, primera planta, garaje, terraza y zonas exteriores. Equipo adaptado al tamaño de tu vivienda.',
    intro: 'Un chalé o adosado en {barrio} tiene superficies que no existen en un piso de bloque: garaje, terraza, jardín que se trae a casa en la suela del zapato, segunda planta con escalera, y en muchos casos más de un baño completo. La limpieza periódica de un chalé no es escalar el servicio de un piso sino un trabajo distinto en organización y tiempo. Adaptamos el equipo y la frecuencia al tamaño real de tu vivienda.',
    porQueH2: '¿Por qué los chalés de {barrio} necesitan un servicio de limpieza diferente al de un piso?',
    porQueContent: 'La mayor superficie no es el único factor. Los chalés de {barrio} tienen suciedad de entrada procedente del jardín (barro, hojas, polvo orgánico) que se distribuye por toda la planta baja con el tráfico diario. La terraza necesita atención independiente. El garaje acumula polvo de la calzada y manchas de aceite. Y la escalera interior entre plantas es una zona de acumulación de polvo que en un piso de bloque no existe. Un servicio periódico bien organizado cubre todo esto en una visita eficiente.',
    queIncluyeH2: 'Qué incluye la limpieza periódica de chalés en {barrio}',
    queIncluyeItems: [
      'Planta baja completa: salón, cocina, aseo y zonas de paso',
      'Primera planta: dormitorios, baños y pasillo',
      'Escalera interior: barandilla, escalones y rellano',
      'Terraza: barrido y fregado de suelo, limpieza de muebles de exterior',
      'Baños completos: sanitarios, mampara, suelo y azulejos',
      'Cocina: campana, encimera, azulejos y exterior de electrodomésticos',
      'Garaje: barrido de polvo y manchas superficiales (limpieza profunda de garaje aparte)',
    ],
    frecuencia: 'Los chalés habitados en {barrio} con familia necesitan visita semanal o quincenal. Para parejas o personas solas con chalé, una vez al mes es viable si la vivienda no tiene mucho tráfico de personas.',
    precioItems: [
      'Adosado 2 plantas hasta 120 m²: desde 85-110€/visita quincenal',
      'Chalé independiente 150-200 m²: desde 110-150€/visita quincenal',
      'Garaje incluido en limpieza periódica (barrido básico): sin suplemento',
      'Terraza exterior: incluida siempre',
    ],
    faqs: [
      {
        q: '¿Limpiáis también el garaje en la visita periódica de {barrio}?',
        a: 'Incluimos barrido del garaje y recogida de polvo superficial en cada visita. Para una limpieza a fondo del garaje (incluida quita de manchas de aceite y fregado total) se presupuesta aparte como servicio específico.',
      },
      {
        q: '¿Cuánto tiempo dura una visita de limpieza periódica en un chalé de {barrio}?',
        a: 'Para un adosado de 2 plantas, entre 2,5 y 3,5 horas según el estado. Para un chalé independiente de 150 m² o más, entre 3 y 5 horas. Siempre con el equipo necesario para respetar el tiempo acordado.',
      },
    ],
  },

  'rural': {
    h1Qualifier: 'casas rurales · leña, barro y polvo orgánico',
    metaDesc: 'Limpieza periódica en casas rurales de {barrio}: suelos de piedra, chimenea y cocina de leña, polvo orgánico del entorno. Productos Ecolabel respetuosos con el entorno.',
    intro: 'Las casas rurales de {barrio} tienen una suciedad característica muy diferente a la de los pisos urbanos: el barro que entra con las botas, el polvo y la ceniza de la chimenea o el horno de leña, el polvo orgánico del campo y la humedad que genera verdín en las zonas sombrías. La limpieza periódica en una casa rural de {barrio} requiere productos adecuados para suelos de piedra, baldosa antigua o madera, y una actitud respetuosa con el entorno, por eso usamos solo productos Ecolabel.',
    porQueH2: '¿Qué particularidades tiene la limpieza periódica de las casas rurales de {barrio}?',
    porQueContent: 'Las casas rurales de {barrio} acumulan tipos de suciedad que no existen en los pisos urbanos. La chimenea o el horno de leña generan ceniza que se deposita en superficies cercanas y en el suelo. El barro de la huerta entra a diario por la puerta principal. Los techos con vigas de madera acumulan polvo y telarañas en recovecos que una mopa plana no alcanza. Y en primavera, el polen de la vegetación circundante se cuela por ventanas y se asienta en todas las superficies. El servicio periódico se adapta a la estación del año.',
    queIncluyeH2: 'Qué incluye la limpieza periódica en una casa rural de {barrio}',
    queIncluyeItems: [
      'Suelos de piedra, baldosa o madera: fregado con producto adecuado a cada material',
      'Chimenea: limpieza exterior de hogar, cenicero y zona circundante',
      'Techos con vigas: eliminación de polvo y telarañas con cepillo extensible',
      'Cocina: fogones, encimera y campana; si hay cocina de leña, limpieza exterior',
      'Baños: sanitarios, suelo y paredes con productos neutros',
      'Entrada y corredor: zona de barro y suciedad de entrada',
      'Ventanas y marcos: polvo de campo y verdín preventivo en marcos exteriores',
    ],
    frecuencia: 'En casas rurales de {barrio} habitadas a diario, la limpieza quincenal es lo más habitual. En invierno con chimenea activa, algunos clientes prefieren visita semanal para la zona de estar. En casas de uso eventual, limpieza antes y después de cada estancia.',
    precioItems: [
      'Casa rural hasta 100 m²: desde 75-100€/visita quincenal',
      'Casa rural 100-150 m²: desde 100-130€/visita quincenal',
      'Includes suelos de piedra y baldosa antigua: sin suplemento',
      'Productos Ecolabel respetuosos con entorno rural: incluidos siempre',
    ],
    faqs: [
      {
        q: '¿Limpiáis también la zona de la chimenea y el hogar en {barrio}?',
        a: 'Sí. Incluimos la limpieza exterior de la chimenea: cenicero, parrilla exterior, suelo alrededor y las superficies próximas que acumulan hollín o ceniza. La deshollinación del interior de la chimenea es un servicio diferente que requiere deshollinador especializado.',
      },
      {
        q: '¿Usáis productos que puedan afectar al pozo o al entorno rural de {barrio}?',
        a: 'No. Usamos exclusivamente productos Ecolabel con certificación europea que son biodegradables y seguros para el entorno. Es especialmente importante en casas rurales con pozo propio o cerca de terrenos agrícolas.',
      },
    ],
  },

  'industrial': {
    h1Qualifier: 'zona polígono · limpieza contra partículas y grasa ambiental',
    metaDesc: 'Limpieza periódica en {barrio}: desengrase de partículas industriales en superficies, ventilación y cocina. Más frecuente por el entorno del polígono.',
    intro: 'Las viviendas de {barrio}, en el entorno del polígono industrial de Narón, acumulan un tipo de suciedad que no se da en otras zonas: partículas finas de combustión diésel, polvo de caucho y residuos de actividad industrial que el viento deposita en las superficies exteriores e incluso penetra por ventanas. Esta capa grasienta fina se deposita también en el interior: marcos de ventana, alféizares, encimeras cercanas a ventanas. La limpieza periódica en {barrio} necesita incorporar un paso de desengrase que en otras zonas no sería necesario.',
    porQueH2: '¿Por qué las viviendas de {barrio} necesitan limpieza más frecuente que en otras zonas?',
    porQueContent: 'La actividad del polígono industrial y el tráfico pesado de la N-651 generan partículas en suspensión que se depositan continuamente sobre todas las superficies. A diferencia del polvo doméstico, estas partículas tienen componentes grasos que se adhieren con más fuerza y requieren desengrasante para eliminarse. El resultado visible es que los alféizares, las encimeras y los suelos cercanos a ventanas se ensucian mucho más rápido que en zonas residenciales alejadas del polígono. Una visita cada 1-2 semanas es lo que más valoran los clientes en {barrio}.',
    queIncluyeH2: 'Qué incluye la limpieza periódica en viviendas de {barrio}',
    queIncluyeItems: [
      'Alféizares y marcos de ventana: desengrase de partículas industriales',
      'Encimeras y superficies horizontales: limpieza específica de capa grasienta',
      'Rejillas de ventilación y extractores: acumulan más partículas que en otras zonas',
      'Suelos: fregado con desengrasante previo si hay residuos pegajosos',
      'Cocina: campana con acumulación superior a la habitual por partículas del entorno',
      'Baños: limpieza estándar, sin particularidades por el entorno industrial',
    ],
    frecuencia: 'En {barrio}, la frecuencia recomendada es semanal o cada 10 días para viviendas con muchas ventanas orientadas al polígono. Quincenal es el mínimo para mantener un nivel aceptable de limpieza.',
    precioItems: [
      'Piso 1-2 habitaciones (45-65 m²): desde 55-70€/visita quincenal',
      'Piso 3 habitaciones (70-90 m²): desde 70-90€/visita quincenal',
      'Desengrasante de partículas industriales: incluido sin suplemento',
      'Descuento por contrato mensual: 10% sobre el precio por visita',
    ],
    faqs: [
      {
        q: '¿Cada cuánto hay que limpiar en {barrio} para que no se note la suciedad del polígono?',
        a: 'Con ventanas orientadas al polígono o a la N-651, cada 10-15 días para las superficies más expuestas. Limpieza general quincenal y un repaso intermedio de alféizares y cocina si ves que se acumula rápido.',
      },
      {
        q: '¿Usáis productos especiales para el polvo industrial de {barrio}?',
        a: 'Sí. Añadimos un desengrasante Ecolabel de alta eficacia antes del limpiahogar habitual en superficies con partículas grasas. Sin esa fase previa, el limpiacristales convencional redistribuye la grasa sin eliminarla.',
      },
    ],
  },
};

export function getContenidoPeriodica(
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoPeriodica | null {
  const raw = PERIODICA_POR_ARQUETIPO[archetype];
  if (!raw) return null;
  return {
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDesc: t(raw.metaDesc, barrioNombre, municipioNombre),
    intro: t(raw.intro, barrioNombre, municipioNombre),
    porQueH2: t(raw.porQueH2, barrioNombre, municipioNombre),
    porQueContent: t(raw.porQueContent, barrioNombre, municipioNombre),
    queIncluyeH2: t(raw.queIncluyeH2, barrioNombre, municipioNombre),
    queIncluyeItems: raw.queIncluyeItems.map(s => t(s, barrioNombre, municipioNombre)),
    frecuencia: t(raw.frecuencia, barrioNombre, municipioNombre),
    precioItems: raw.precioItems.map(s => t(s, barrioNombre, municipioNombre)),
    faqs: raw.faqs.map(f => ({ q: t(f.q, barrioNombre, municipioNombre), a: t(f.a, barrioNombre, municipioNombre) })),
  };
}

// ─── LIMPIEZA DE VIVIENDAS ───────────────────────────────────────────────────

export type ContenidoViviendas = {
  h1Qualifier: string;
  metaDesc: string;
  intro: string;
  particularH2: string;
  particularContent: string;
  habitacionesH2: string;
  habitacionesItems: string[];
  precioItems: string[];
  faqs: { q: string; a: string }[];
};

const VIVIENDAS_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoViviendas> = {
  'bloque-obrero': {
    h1Qualifier: 'pisos de bloque · limpieza completa habitación por habitación',
    metaDesc: 'Limpieza de vivienda en {barrio}: pisos de bloque con cocinas de grasa acumulada, baños con cal y suelos de alto tráfico. Presupuesto gratis en 24h.',
    intro: 'La limpieza integral de una vivienda en los bloques de {barrio} incluye todo lo que la limpieza semanal deja para después: el interior de armarios y electrodomésticos, los rodapiés, la parte trasera de muebles y las juntas de azulejo del baño. En Zentro Limpiezas trabajamos habitación por habitación con un checklist cerrado: la vivienda queda en un estado de limpieza profunda que se mantiene fácil durante semanas.',
    particularH2: '¿Qué tienen de especial los pisos de bloque de {barrio} para la limpieza?',
    particularContent: 'Los pisos de bloque de {barrio} construidos entre los años 60 y 90 acumulan capas de suciedad en sitios específicos: la cal del agua de Ferrol incrusta en las griferías y en los azulejos del baño; la grasa de cocción impregna los azulejos de la cocina y la campana tras años de uso; y los suelos de gres o vinilo de época tienen juntas oscurecidas que el fregado normal no aclara. Nuestra limpieza de vivienda atiende específicamente cada uno de estos puntos.',
    habitacionesH2: 'Estancias incluidas en la limpieza de vivienda en {barrio}',
    habitacionesItems: [
      'Cocina: interior y exterior de armarios, encimera, azulejos, campana, electrodomésticos y suelo',
      'Baños: sanitarios, griferías con antical, mampara, juntas de azulejo, suelo y espejo',
      'Salón/comedor: muebles, estanterías, rodapiés, ventanas interiores y suelo',
      'Dormitorios: muebles, interior de armarios (opcional), ventanas y suelo',
      'Pasillo y entrada: zapatero, perchas, suelo y puertas',
      'Terraza o balcón: barrido, fregado y barandilla',
    ],
    precioItems: [
      'Piso 1-2 habitaciones (45-65 m²): desde 120-160€ limpieza a fondo',
      'Piso 3 habitaciones (70-90 m²): desde 160-220€ limpieza a fondo',
      'Interior de armarios: incluido a petición sin suplemento',
      'Electrodomésticos (horno, nevera): incluidos en la limpieza de vivienda',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo dura la limpieza completa de un piso de bloque en {barrio}?',
        a: 'Para un piso de 70-80 m² en {barrio}, entre 3 y 5 horas con un equipo de dos personas. Depende del estado inicial: si lleva tiempo sin limpieza profunda puede extenderse a 6 horas. Te lo indicamos en el presupuesto.',
      },
      {
        q: '¿Incluís la limpieza del interior de los armarios en {barrio}?',
        a: 'Sí, a petición. Muchos clientes prefieren que no movamos su ropa; otros nos piden que vaciemos, limpiemos y volvamos a ordenar. Lo decidís vosotros al pedir presupuesto.',
      },
    ],
  },

  'historico': {
    h1Qualifier: 'edificios históricos · limpieza con cuidado de acabados de época',
    metaDesc: 'Limpieza de vivienda en edificios históricos de {barrio}: suelos de madera, parquet y baldosa hidráulica tratados con productos específicos para cada material.',
    intro: 'Las viviendas en los edificios históricos de {barrio} son un reto de limpieza profesional: cada sala puede tener un tipo de suelo diferente (parquet, baldosa hidráulica, mosaico, tarima), las molduras y techos tienen relieves que acumulan polvo en capas, y los materiales envejecidos exigen productos que los cuiden en lugar de dañarlos. En Zentro Limpiezas identificamos los materiales antes de empezar y adaptamos el producto y la técnica a cada superficie.',
    particularH2: '¿Por qué la limpieza en los pisos históricos de {barrio} es diferente?',
    particularContent: 'El principal reto no es la suciedad sino los materiales. La baldosa hidráulica de muchos pisos históricos de {barrio} es porosa y absorbe productos inadecuados. El parquet antiguo sin tratar no admite agua en exceso. Las molduras de escayola acumulan polvo en sus relieves que una fregona no alcanza. Y los techos altos con cornisas necesitan equipos con extensión. Evaluamos todo esto antes de empezar para garantizar que ningún material resulte dañado.',
    habitacionesH2: 'Estancias y superficies incluidas en la limpieza de pisos históricos de {barrio}',
    habitacionesItems: [
      'Suelos de parquet y madera: limpieza con mopa seca y mínima humedad',
      'Baldosa hidráulica o mosaico: limpieza con producto neutro pH 7 sin ácidos',
      'Techos y molduras: eliminación de polvo con cepillo de extensión y microfibra',
      'Cocina: azulejos, campana, encimera y exterior de electrodomésticos',
      'Baños: sanitarios, griferías, espejo y suelo con producto neutro',
      'Ventanas: limpieza de cristales y marcos de madera sin producto agresivo',
    ],
    precioItems: [
      'Piso histórico 50-80 m²: desde 140-190€ limpieza completa',
      'Piso histórico 80-120 m²: desde 190-260€ limpieza completa',
      'Tratamiento específico por tipo de suelo: sin suplemento',
      'Molduiras y cornisas: incluidas siempre',
    ],
    faqs: [
      {
        q: '¿Podéis limpiar la baldosa hidráulica de mi piso de {barrio} sin estropearla?',
        a: 'Sí. La baldosa hidráulica requiere producto neutro pH 7 y evitar ácidos. Si la baldosa está sin tratar (sin cera o sellador), recomendamos una inspección previa para confirmar el estado antes de aplicar cualquier producto.',
      },
      {
        q: '¿Cuánto dura la limpieza en un piso con techos altos de {barrio}?',
        a: 'Los techos altos con molduras añaden tiempo respecto a un piso estándar. Para un piso de 80 m² con techos de 3,5 metros y molduras, calculamos 4-6 horas. La extensión correcta del tiempo queda reflejada en el presupuesto.',
      },
    ],
  },

  'marinero': {
    h1Qualifier: 'zona costera · control de humedad y condensación en cada rincón',
    metaDesc: 'Limpieza de vivienda en {barrio}: control de manchas por condensación, antifúngico en juntas y atención a marcos metálicos expuestos al ambiente marino.',
    intro: 'Las viviendas de {barrio} acumulan un tipo de suciedad muy específica del ambiente marino: manchas de condensación en paredes y techos, manchas de agua en alféizares y marcos, y en algunas orientaciones, puntos de humedad en esquinas y techos de baño. La limpieza de vivienda en {barrio} incluye el tratamiento específico de estas zonas con antifúngico preventivo y productos que eliminan las manchas de condensación sin dañar la pintura.',
    particularH2: '¿Qué marca la diferencia en la limpieza de casas costeras de {barrio}?',
    particularContent: 'La humedad marina penetra por ventanas y crea condensación en las superficies más frías. Los techos de baños y cocinas, los marcos de ventanas y los muros exteriores expuestos son las zonas más afectadas. En {barrio}, cada limpieza de vivienda incorpora atención a estas superficies: tratamiento preventivo de manchas de condensación, antifúngico en juntas de baño y limpieza de marcos con neutralizador de sales. No es un extra: es parte del servicio estándar en una vivienda costera.',
    habitacionesH2: 'Estancias y puntos críticos en la limpieza de viviendas de {barrio}',
    habitacionesItems: [
      'Baños: antifúngico en juntas, suelo, mampara y techo — especialmente importante en zonas costeras',
      'Techos: revisión y tratamiento de manchas de condensación',
      'Marcos de ventana y alféizares: neutralizador de sales, eliminación de manchas de agua',
      'Cocina: ventilación de humedad, campana, encimera y azulejos',
      'Salón: muebles, cristales interiores y suelo',
      'Dormitorios: muebles, suelo y ventanas con tratamiento de condensación si aplica',
    ],
    precioItems: [
      'Apartamento o piso 40-70 m²: desde 130-170€ limpieza completa',
      'Piso 70-100 m²: desde 170-230€ limpieza completa',
      'Tratamiento antifúngico preventivo en baños: incluido sin suplemento',
      'Neutralizador de sales en marcos y alféizares: incluido',
    ],
    faqs: [
      {
        q: '¿Podéis tratar las manchas de humedad en las paredes de mi casa de {barrio}?',
        a: 'Depende de la causa. Si son manchas superficiales de condensación, las tratamos con nuestro servicio estándar. Si hay humedad por filtración o capilaridad, el problema es estructural y necesita un técnico de construcción antes de que la limpieza tenga sentido.',
      },
      {
        q: '¿Con qué frecuencia hay que hacer una limpieza a fondo en {barrio} para evitar el moho?',
        a: 'En {barrio}, una limpieza profunda con antifúngico cada 3-4 meses, complementada con limpieza periódica quincenal, es suficiente para mantener el moho bajo control en viviendas con buena ventilación.',
      },
    ],
  },

  'segunda-residencia': {
    h1Qualifier: 'segunda residencia · limpieza a fondo para empezar bien la temporada',
    metaDesc: 'Limpieza de vivienda para segunda residencia en {barrio}: apertura completa tras meses cerrada, cierre correcto antes de irse, sin que tengas que preocuparte de nada.',
    intro: 'Una segunda residencia en {barrio} que lleva meses cerrada acumula una suciedad diferente a la de una vivienda de uso diario: polvo de sedimentación, manchas de condensación en ventanas, moho preventivo en baños, posible olor a cerrado y en algunos casos insectos. La limpieza de vivienda que hacemos para apertura de temporada en {barrio} es un trabajo a fondo distinto de la limpieza periódica de mantenimiento.',
    particularH2: '¿Qué necesita una segunda residencia de {barrio} para estar lista en tu llegada?',
    particularContent: 'Cuando una vivienda lleva meses sin uso en {barrio}, las prioridades de limpieza cambian: el polvo de sedimentación en muebles y suelos tiene que eliminarse antes que cualquier otra cosa; los baños necesitan desinfección completa y revisión de juntas; la cocina requiere limpieza de la nevera si se dejó en marcha, y del horno si quedaron restos; y los cristales acumulan manchas de condensación que en una vivienda de uso diario no aparecen. También revisamos visualmente si hay alguna filtración o problema que no haya sido notado en meses de ausencia.',
    habitacionesH2: 'Qué incluye la limpieza de apertura de segunda residencia en {barrio}',
    habitacionesItems: [
      'Toda la vivienda: eliminación de polvo de sedimentación en todas las superficies',
      'Baños: desinfección completa, juntas, sanitarios, mampara y muebles',
      'Cocina: interior de nevera, horno, campana, encimera y armarios',
      'Cristales: tratamiento de manchas de condensación interiores',
      'Suelos: barrido y fregado completo de todas las estancias',
      'Aireación controlada durante la limpieza para eliminar olor a cerrado',
      'Revisión visual de humedad en paredes y techos (te avisamos si encontramos algo)',
    ],
    precioItems: [
      'Apartamento 40-70 m²: desde 150-200€ limpieza de apertura',
      'Vivienda 70-120 m²: desde 200-280€ limpieza de apertura',
      'Gestión con llave: sin coste adicional',
      'Limpieza de cierre antes de irte: desde 100€ según tamaño',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo antes de llegar debo contratar la limpieza de apertura en {barrio}?',
        a: 'En temporada alta (verano), con 2-3 semanas de antelación. Fuera de temporada, con una semana es suficiente. Muchos propietarios nos dejan la llave; hacemos la limpieza el día antes de su llegada y enviamos foto de confirmación.',
      },
      {
        q: '¿Hacéis también la limpieza de cierre al terminar la temporada en {barrio}?',
        a: 'Sí. La limpieza de cierre incluye dejar la vivienda protegida: cubrir muebles de terraza si los hay, limpiar nevera y desconectarla si lo solicitas, y dejar la casa en condiciones para el siguiente período de cierre.',
      },
    ],
  },

  'chalet': {
    h1Qualifier: 'chalés y unifamiliares · limpieza integral de planta a planta',
    metaDesc: 'Limpieza de vivienda en chalés de {barrio}: todas las plantas, terraza, garaje y espacios de exterior. Equipo adaptado a la superficie real de tu casa.',
    intro: 'La limpieza a fondo de un chalé en {barrio} es uno de los servicios más completos que ofrecemos: implica trabajar en varias plantas, atender la terraza y el porche, limpiar el garaje, y dedicar tiempo a los ventanales grandes del salón y las zonas exteriores. Para un chalé de 150-200 m² enviamos un equipo de 2-3 personas para completar el trabajo en el tiempo acordado.',
    particularH2: '¿Qué hace diferente la limpieza de un chalé de {barrio} respecto a un piso?',
    particularContent: 'La diferencia no es solo el tamaño: en un chalé de {barrio} hay suciedad de jardín y exterior que en un piso de bloque no existe. El barro y las hojas que se traen del jardín ensucian la planta baja; la terraza tiene su propia lógica de limpieza; el garaje necesita tratamiento específico para manchas de aceite; y los ventanales del salón requieren sistema de mopa y rasqueta profesional para quedarse sin marcas. Organizamos el trabajo con un checklist por estancia para no olvidar ninguna zona.',
    habitacionesH2: 'Estancias y zonas incluidas en la limpieza de chalés en {barrio}',
    habitacionesItems: [
      'Planta baja: salón con ventanales, cocina completa, aseo y entrada',
      'Primera planta: dormitorios, baños y pasillo',
      'Segunda planta o bajo cubierta: si existe, incluida sin suplemento',
      'Escalera interior: peldaños, barandilla y rellanos',
      'Terraza o porche: suelo, barandilla, muebles exteriores',
      'Garaje: barrido, manchas superficiales y paredes',
      'Zonas de servicio: cuarto de lavadoras, despensa o trastero si aplica',
    ],
    precioItems: [
      'Adosado 2 plantas hasta 130 m²: desde 200-270€ limpieza completa',
      'Chalé 150-200 m²: desde 270-360€ limpieza completa',
      'Terraza y garaje: incluidos sin suplemento en la limpieza de vivienda',
      'Cuarto de lavadoras o trastero: incluidos a petición',
    ],
    faqs: [
      {
        q: '¿Cuántas personas venís y cuánto tardáis en limpiar un chalé en {barrio}?',
        a: 'Para chalés de hasta 150 m², normalmente 2 personas durante 4-5 horas. Para 200 m² o más, 3 personas durante 4-6 horas. Lo ajustamos en el presupuesto según los detalles de tu vivienda.',
      },
      {
        q: '¿Incluís la limpieza del garaje en la limpieza completa del chalé de {barrio}?',
        a: 'Sí. El garaje está incluido con barrido completo y eliminación de manchas superficiales. Si hay manchas de aceite muy incrustadas o necesitas fregado a fondo del suelo del garaje, lo presupuestamos aparte.',
      },
    ],
  },

  'rural': {
    h1Qualifier: 'casas rurales · materiales de época y entorno natural',
    metaDesc: 'Limpieza de vivienda en casas rurales de {barrio}: piedra, madera, baldosa antigua, chimenea. Productos Ecolabel respetuosos con los materiales y el entorno.',
    intro: 'Las casas rurales de {barrio} son construcciones únicas: piedra, vigas de madera, suelos de baldosa antigua o pizarra, chimeneas y en muchos casos distribuciones irregulares con techos a distintas alturas. La limpieza a fondo de una casa rural en {barrio} requiere experiencia con estos materiales y una actitud de respeto hacia la arquitectura tradicional gallega. Usamos productos Ecolabel adaptados a cada superficie y trabajamos con el cuidado que merece una vivienda con historia.',
    particularH2: '¿Qué hay que tener en cuenta al limpiar una casa rural de {barrio}?',
    particularContent: 'Los materiales de las casas rurales de {barrio} exigen tratamientos específicos: la piedra interior y exterior no admite productos ácidos que la ataquen; la madera de vigas y suelos necesita mínima humedad y producto específico; la chimenea genera ceniza que se deposita en las superficies cercanas; y los suelos de pizarra o baldosa antigua son porosos y absorben productos equivocados. Antes de empezar, identificamos los materiales presentes y ajustamos el producto a cada zona.',
    habitacionesH2: 'Estancias y elementos incluidos en la limpieza de casas rurales de {barrio}',
    habitacionesItems: [
      'Suelos de piedra, pizarra o baldosa antigua: fregado con producto neutro específico',
      'Suelos de madera o tarima: limpieza con mopa casi seca',
      'Chimenea: exterior de hogar, cenicero, zona circundante y superficie con hollín',
      'Cocina: campana, fogones, encimera y interior de armarios',
      'Baños: sanitarios, suelo y paredes con productos neutros',
      'Techos con vigas: eliminación de polvo, telarañas y hollín acumulado',
      'Entrada y corredor rural: barro, hojas y suciedad de exterior',
    ],
    precioItems: [
      'Casa rural hasta 100 m²: desde 170-230€ limpieza completa',
      'Casa rural 100-200 m²: desde 230-350€ limpieza completa',
      'Chimenea y suelos de piedra: tratamiento específico incluido',
      'Productos Ecolabel para entornos rurales: incluidos siempre',
    ],
    faqs: [
      {
        q: '¿Podéis limpiar el suelo de pizarra de mi casa rural de {barrio} sin que pierda color?',
        a: 'Sí. La pizarra requiere producto neutro y evitar ácidos que la opaquen. Si el suelo lleva mucho tiempo sin mantenimiento puede necesitar un tratamiento de reabrillantado posterior a la limpieza, que presupuestamos aparte.',
      },
      {
        q: '¿Limpiáis también la fachada exterior de piedra de las casas rurales de {barrio}?',
        a: 'La fachada exterior es un servicio diferente al de la limpieza de vivienda. Podemos presupuestarla aparte: requiere hidrolimpiadora o tratamiento específico para piedra exterior, y tiene un precio independiente según el tipo de piedra y el estado.',
      },
    ],
  },

  'industrial': {
    h1Qualifier: 'viviendas y locales en polígono · limpieza contra grasa y partículas',
    metaDesc: 'Limpieza de vivienda y locales en {barrio}: desengrase de partículas industriales en superficies, ventilación y exteriores con mayor acumulación de suciedad.',
    intro: 'Las viviendas y locales de {barrio}, en la zona de polígono industrial de Narón, acumulan suciedad específica de la actividad industrial: capas de polvo graso de partículas de combustión y caucho que se depositan en todas las superficies exteriores y penetran por las ventanas. La limpieza completa de una vivienda en {barrio} incorpora una fase de desengrase previa en las superficies más afectadas, especialmente encimeras, alféizares y cocina.',
    particularH2: '¿Cómo afecta el entorno industrial de {barrio} a la suciedad de las viviendas?',
    particularContent: 'Las viviendas de {barrio} cerca del polígono tienen una capa de suciedad fina pero persistente en todas las superficies expuestas: los alféizares se oscurecen rápido, la cocina cerca de ventanas acumula grasa ambiental además de la de cocción, y los suelos recogen partículas de combustión con el tráfico diario que dan un aspecto grisáceo incluso poco después de fregar. El desengrasante previo en estas superficies es el paso que más diferencia hace en el resultado final.',
    habitacionesH2: 'Estancias y zonas incluidas en la limpieza de viviendas de {barrio}',
    habitacionesItems: [
      'Alféizares y marcos de ventana: desengrase de partículas industriales adheridas',
      'Cocina: campana con acumulación superior al habitual, encimera, azulejos y armarios',
      'Suelos: fregado con desengrasante previo en zonas de más tráfico',
      'Baños: limpieza estándar completa',
      'Salón: muebles, estanterías, cristales interiores y suelo',
      'Dormitorios: muebles, suelo y ventanas',
      'Terraza o balcón: tratamiento de suelo y barandilla con capa de partículas',
    ],
    precioItems: [
      'Piso 2-3 habitaciones (60-90 m²): desde 150-200€ limpieza a fondo',
      'Local comercial u oficina (hasta 80 m²): desde 160-220€ limpieza completa',
      'Desengrasante de partículas industriales: incluido sin suplemento',
      'Terraza con acumulación de partículas: incluida',
    ],
    faqs: [
      {
        q: '¿Limpiais también locales comerciales y oficinas en {barrio}?',
        a: 'Sí. Además de viviendas, trabajamos con locales, oficinas y naves en la zona de {barrio}. Para locales comerciales podemos organizarlo en horario de cierre o madrugada para no interrumpir la actividad.',
      },
      {
        q: '¿Con qué frecuencia hay que hacer una limpieza a fondo en una vivienda de {barrio}?',
        a: 'Con el entorno industrial, una limpieza a fondo cada 3-4 meses es lo recomendable, complementada con limpieza periódica quincenal o mensual para las superficies más expuestas.',
      },
    ],
  },
};

export function getContenidoViviendas(
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoViviendas | null {
  const raw = VIVIENDAS_POR_ARQUETIPO[archetype];
  if (!raw) return null;
  return {
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDesc: t(raw.metaDesc, barrioNombre, municipioNombre),
    intro: t(raw.intro, barrioNombre, municipioNombre),
    particularH2: t(raw.particularH2, barrioNombre, municipioNombre),
    particularContent: t(raw.particularContent, barrioNombre, municipioNombre),
    habitacionesH2: t(raw.habitacionesH2, barrioNombre, municipioNombre),
    habitacionesItems: raw.habitacionesItems.map(s => t(s, barrioNombre, municipioNombre)),
    precioItems: raw.precioItems.map(s => t(s, barrioNombre, municipioNombre)),
    faqs: raw.faqs.map(f => ({ q: t(f.q, barrioNombre, municipioNombre), a: t(f.a, barrioNombre, municipioNombre) })),
  };
}

// ─── LIMPIEZA DE PISOS ───────────────────────────────────────────────────────

export type ContenidoPisos = {
  h1Qualifier: string;
  metaDesc: string;
  intro: string;
  contextoH2: string;
  contextoContent: string;
  incluyeH2: string;
  incluyeItems: string[];
  precioItems: string[];
  faqs: { q: string; a: string }[];
};

const PISOS_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoPisos> = {
  'bloque-obrero': {
    h1Qualifier: 'pisos de bloque · limpieza eficiente de la A a la Z',
    metaDesc: 'Limpieza de pisos en {barrio}: bloques de los años 70-90, cal en baños, grasa en cocina y suelos de vinilo o gres con juntas oscurecidas. Presupuesto en 24h.',
    intro: 'La limpieza profesional de un piso de bloque en {barrio} marca la diferencia en las zonas que el fregado habitual nunca llega a tratar bien: las juntas del baño, la parte trasera de la campana, los rodapiés, los marcos de puerta y los rincones de la cocina. En Zentro Limpiezas trabajamos con un checklist cerrado por estancia y te entregamos el piso en un estado de limpieza real, no solo de aspecto limpio.',
    contextoH2: '¿Qué acumula un piso de bloque de {barrio} que no sale con la limpieza del día a día?',
    contextoContent: 'Los pisos de bloque de {barrio} de los años 70-90 acumulan capas de cal en griferías y azulejos del baño que el limpiabaños convencional no elimina. La campana de la cocina retiene grasa en el filtro y en las superficies interiores que se endurece con el calor. Las juntas de azulejo oscurecen con el tiempo y necesitan cepillado con antihongos. Los rodapiés y los marcos de puerta acumulan suciedad de manos y polvo pegado que solo sale frotando. Todo esto lo cubrimos en la limpieza de piso.',
    incluyeH2: 'Qué incluye la limpieza de tu piso en {barrio}',
    incluyeItems: [
      'Cocina: campana (interior y filtro), encimera, azulejos, exterior de electrodomésticos, interior de microondas y armarios a petición',
      'Baño/s: sanitarios, grifería con antical, mampara, juntas de azulejo, suelo y espejo',
      'Salón: muebles, cristales interiores, rodapiés y suelo',
      'Dormitorios: muebles, interior de armarios a petición y suelo',
      'Pasillo y entrada: suelo, puertas y zapatero',
      'Terraza o balcón: barrido, fregado y barandilla',
    ],
    precioItems: [
      'Piso 1 habitación (35-55 m²): desde 100-130€',
      'Piso 2 habitaciones (55-75 m²): desde 130-170€',
      'Piso 3 habitaciones (75-95 m²): desde 170-220€',
      'Interior de armarios y nevera: incluidos a petición sin suplemento',
    ],
    faqs: [
      {
        q: '¿Podéis limpiar el piso mientras yo no estoy en {barrio}?',
        a: 'Sí. Muchos clientes nos dejan la llave o el código de acceso. Hacemos la limpieza y enviamos foto de confirmación al terminar. Es la opción más cómoda para quienes trabajan durante el día.',
      },
      {
        q: '¿Limpiáis el interior del horno en la limpieza de piso de {barrio}?',
        a: 'Sí, a petición. El interior del horno con grasa muy incrustada puede necesitar producto específico de desengrase que dejamos actuar un tiempo antes de limpiar. Lo incluimos si lo pides al presupuestar.',
      },
    ],
  },

  'historico': {
    h1Qualifier: 'pisos históricos · cada material tratado como merece',
    metaDesc: 'Limpieza de pisos históricos en {barrio}: parquet, baldosa hidráulica y molduras de escayola limpiados con productos neutros que no dañan los acabados de época.',
    intro: 'Limpiar bien un piso histórico en {barrio} implica conocer los materiales antes de empezar. El parquet antiguo se daña con agua en exceso; la baldosa hidráulica absorbe productos ácidos; las molduras de escayola acumulan polvo en relieves que una fregona no alcanza. En Zentro Limpiezas evaluamos los materiales presentes antes de aplicar ningún producto y adaptamos la técnica a cada superficie.',
    contextoH2: '¿Qué materiales hay en los pisos históricos de {barrio} que exigen cuidado especial?',
    contextoContent: 'Los pisos en edificios históricos de {barrio} suelen combinar varios materiales en el mismo espacio: parquet o tarima de madera en dormitorios, baldosa hidráulica o mosaico en salón y cocina, y azulejo antiguo en baños. Cada material tiene su protocolo: mopa casi seca para la madera, producto neutro sin ácidos para la cerámica, y cepillo fino para las juntas. Las molduras y cornisas de escayola necesitan cepillo de extensión, no mopa. El resultado cuando se hace bien es visiblemente diferente.',
    incluyeH2: 'Qué incluye la limpieza de un piso histórico en {barrio}',
    incluyeItems: [
      'Suelos de parquet/madera: mopa casi seca con producto específico para madera',
      'Suelos de baldosa hidráulica o mosaico: limpieza con producto neutro pH 7',
      'Molduras, cornisas y techos: cepillo extensible para relieves',
      'Cocina: campana, encimera, azulejos y armarios exteriores',
      'Baños: sanitarios, grifería, espejo y suelo con productos neutros',
      'Ventanas de guillotina: cristales y carriles con cepillo fino',
    ],
    precioItems: [
      'Piso histórico 50-70 m²: desde 140-180€',
      'Piso histórico 70-100 m²: desde 180-240€',
      'Suelos especiales (parquet, hidráulica): tratamiento incluido',
      'Molduras y techos altos: incluidos sin suplemento',
    ],
    faqs: [
      {
        q: '¿Tenéis experiencia con pisos de edificios catalogados en {barrio}?',
        a: 'Sí. Hemos trabajado en varios pisos de edificios históricos en {barrio} y en otras zonas de {municipio}. La clave es identificar los materiales antes de empezar y no aplicar productos agresivos sin confirmar que el material los tolera.',
      },
      {
        q: '¿Limpiais también las ventanas de guillotina de los pisos históricos de {barrio}?',
        a: 'Sí. Incluimos los cristales y los carriles de las ventanas de guillotina. Los carriles acumulan polvo y suciedad en las ranuras que necesitan cepillo fino para limpiarse bien.',
      },
    ],
  },

  'marinero': {
    h1Qualifier: 'zona costera · pisos con humedad y salitre bajo control',
    metaDesc: 'Limpieza de pisos en {barrio}: manchas de condensación, antifúngico en baños y tratamiento de salitre en marcos y alféizares. Servicio adaptado al entorno marino.',
    intro: 'Los pisos en {barrio} tienen una realidad cotidiana: la humedad del ambiente marino se mete en los baños, crea condensación en ventanas y paredes, y deposita salitre en todas las superficies exteriores. La limpieza profesional de tu piso en {barrio} atiende específicamente estas zonas: antifúngico preventivo en baños, tratamiento de condensación en ventanas y neutralizador de sales en marcos, todo incluido sin suplemento.',
    contextoH2: '¿Qué acumula un piso costero de {barrio} que no tiene un piso del interior?',
    contextoContent: 'La diferencia principal entre un piso de {barrio} y uno del interior de Ferrol es el salitre y la humedad. El salitre se deposita en marcos, alféizares y superficies metálicas en capa fina pero constante. La humedad marina acelera el crecimiento de moho en juntas de baño y techos de zonas húmedas. Las ventanas acumulan manchas de condensación que en el interior apenas aparecen. La limpieza del piso en {barrio} incorpora el tratamiento de todos estos elementos como parte del servicio estándar.',
    incluyeH2: 'Qué incluye la limpieza de piso en {barrio}',
    incluyeItems: [
      'Baños: antifúngico en juntas y techo, sanitarios, grifería y mampara',
      'Ventanas y marcos: cristales con tratamiento de condensación, marcos con neutralizador de sales',
      'Alféizares: eliminación de salitre depositado',
      'Cocina: campana, encimera, azulejos y extractor si tiene',
      'Salón y dormitorios: muebles, suelos y cristales interiores',
      'Terraza: barrido, fregado y tratamiento de salitre en barandilla',
    ],
    precioItems: [
      'Piso 1-2 habitaciones (45-65 m²): desde 125-160€',
      'Piso 3 habitaciones (65-90 m²): desde 160-210€',
      'Antifúngico preventivo en baños: incluido',
      'Neutralizador de sales en marcos y alféizares: incluido',
    ],
    faqs: [
      {
        q: '¿Podéis evitar que salga moho en los baños de mi piso de {barrio}?',
        a: 'Podemos reducir mucho la probabilidad con antifúngico preventivo en juntas y en el techo del baño. Si ya hay moho instalado, lo eliminamos. Pero la prevención real implica también buena ventilación: si el baño no ventila bien, el moho vuelve independientemente del producto que usemos.',
      },
      {
        q: '¿El salitre daña los marcos de aluminio de mi piso en {barrio}?',
        a: 'Con el tiempo, sí. El ambiente salino puede acelerar la oxidación del aluminio si no se limpia regularmente. Con nuestro servicio, los marcos se tratan en cada limpieza con neutralizador de sales que previene ese deterioro.',
      },
    ],
  },

  'segunda-residencia': {
    h1Qualifier: 'segunda residencia · piso listo cuando llegas, protegido cuando te vas',
    metaDesc: 'Limpieza de pisos segunda residencia en {barrio}: apertura completa, mantenimiento durante la estancia y cierre antes de irse. Gestionamos con tu llave sin que tengas que estar.',
    intro: 'Tener un piso de segunda residencia en {barrio} que pasa meses cerrado exige un tipo de limpieza diferente a la habitual. La apertura tras el invierno gallego necesita un trabajo a fondo: polvo de sedimentación, manchas de condensación en cristales, baños sin usar durante meses y olor a cerrado. Lo hacemos antes de que llegues, con tu llave si nos la dejas, y enviamos confirmación por WhatsApp.',
    contextoH2: '¿En qué estado está un piso de segunda residencia de {barrio} después de meses cerrado?',
    contextoContent: 'Un piso cerrado en {barrio} durante el invierno acumula polvo de sedimentación en todos los muebles y superficies horizontales, manchas de condensación en los cristales por el diferencial de temperatura entre interior y exterior, y un punto de humedad en baños y cocina que puede generar moho superficial en juntas. La nevera, si se dejó encendida, puede tener olores. Y el olor a cerrado se elimina con ventilación activa durante la limpieza. Todo esto lo resolvemos en la limpieza de apertura.',
    incluyeH2: 'Qué incluye la limpieza de apertura de tu piso de segunda residencia en {barrio}',
    incluyeItems: [
      'Toda la vivienda: polvo de sedimentación eliminado en muebles, suelos y techos',
      'Baños: desinfección completa, juntas, sanitarios y mampara',
      'Cocina: interior de nevera, horno, campana, encimera y armarios',
      'Cristales: tratamiento de manchas de condensación interiores y marcos',
      'Aireación controlada durante todo el proceso',
      'Revisión visual de humedad o filtraciones (con aviso si encontramos algo)',
      'Camas: cambio de ropa si nos dejas juego preparado',
    ],
    precioItems: [
      'Piso 1-2 habitaciones (45-65 m²): desde 140-180€ limpieza de apertura',
      'Piso 3 habitaciones (65-90 m²): desde 180-240€ limpieza de apertura',
      'Limpieza de cierre: desde 90€',
      'Gestión con llave: sin suplemento',
    ],
    faqs: [
      {
        q: '¿Podéis hacer la limpieza de apertura de mi piso de {barrio} el día antes de que yo llegue?',
        a: 'Es exactamente lo que hacemos normalmente. Nos das la fecha de llegada, quedamos para ese día anterior y al llegar tú el piso está limpio y ventilado. Enviamos foto de confirmación al terminar.',
      },
      {
        q: '¿Limpiais también el interior de la nevera en la apertura de segunda residencia de {barrio}?',
        a: 'Sí, siempre. El interior de la nevera, si se dejó encendida con alimentos o si se notaron olores, es parte estándar de la limpieza de apertura de segunda residencia.',
      },
    ],
  },

  'chalet': {
    h1Qualifier: 'pisos en chalés · más metros, mejor resultado',
    metaDesc: 'Limpieza de pisos en chalés y adosados de {barrio}: salón con ventanales, cocina grande, baños completos, terraza y todas las plantas. Equipo adaptado al tamaño.',
    intro: 'Los pisos en chalés y adosados de {barrio} tienen superficies que no existen en los bloques de pisos: ventanales grandes de salón, terraza con suelo y mobiliario, más de un baño, y la suciedad de jardín que entra con el tráfico diario. La limpieza completa de tu chalet en {barrio} implica organizar el trabajo por plantas y estancias con un checklist que no deja ninguna zona sin atender.',
    contextoH2: '¿Qué tiene de particular la limpieza de los pisos de chalé en {barrio}?',
    contextoContent: 'El chalé tiene más metros de cocina, más metros de baño y más suelos que un piso de bloque equivalente. Pero la diferencia principal es la suciedad de entrada: el jardín y el exterior traen barro, hojas y polvo orgánico que se acumula en la entrada y la planta baja. Los ventanales grandes del salón son la superficie que más impacto visual tiene cuando está sucia. Y la terraza necesita atención independiente. Todo esto lo atendemos en la misma visita.',
    incluyeH2: 'Qué incluye la limpieza de tu chalé o adosado en {barrio}',
    incluyeItems: [
      'Cocina completa: campana, encimera, azulejos, electrodomésticos y armarios exteriores',
      'Baños (todos): sanitarios, grifería, mamparas, suelos y espejos',
      'Salón: ventanales grandes con sistema mopa-rasqueta profesional, muebles y suelo',
      'Dormitorios: muebles, suelos y ventanas',
      'Escalera interior: peldaños y barandilla',
      'Terraza: suelo, muebles exteriores y barandilla',
      'Entrada y zonas de paso: eliminación de suciedad de exterior',
    ],
    precioItems: [
      'Adosado 2 plantas hasta 130 m²: desde 200-270€',
      'Chalé hasta 160 m²: desde 250-320€',
      'Chalé más de 160 m²: presupuesto personalizado',
      'Terraza y escalera: incluidas sin suplemento',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo necesitáis para limpiar un chalé en {barrio}?',
        a: 'Para un adosado de dos plantas de unos 120 m², 2 personas durante 4-5 horas. Para chalés más grandes, adaptamos el equipo para mantener el tiempo acordado. Lo indicamos siempre en el presupuesto.',
      },
      {
        q: '¿Limpiais los ventanales grandes del salón en la limpieza del chalé de {barrio}?',
        a: 'Sí. Los ventanales de salón los limpiamos con sistema profesional de mopa y rasqueta que evita las marcas en superficies grandes. Es la técnica adecuada para vidrio de gran formato.',
      },
    ],
  },

  'rural': {
    h1Qualifier: 'pisos en casas rurales · materiales tradicionales con cuidado',
    metaDesc: 'Limpieza de pisos en casas rurales de {barrio}: piedra, madera, baldosa antigua y chimenea. Servicio profesional adaptado a la arquitectura gallega tradicional.',
    intro: 'Los pisos en casas rurales de {barrio} combinan materiales que no admiten los mismos productos que un piso urbano: piedra natural, tarima de madera antigua, baldosas de barro o gres sin esmaltar, y en muchos casos chimeneas activas que generan ceniza. La limpieza a fondo de un piso rural en {barrio} requiere identificar cada material, elegir el producto correcto y trabajar con cuidado en las zonas donde la arquitectura tradicional es irreemplazable.',
    contextoH2: '¿Qué hace diferente la limpieza de un piso rural en {barrio}?',
    contextoContent: 'Los pisos rurales de {barrio} tienen suciedad que los urbanos no tienen: ceniza y hollín de la chimenea, barro y polvo orgánico del campo, manchas de verdín en marcos de madera y un nivel de humedad invernal que genera condensación y manchas en paredes. Los materiales tampoco son los mismos: la piedra y la baldosa de barro son porosas y absorben los ácidos de los productos estándar. Hay que trabajar con producto neutro y técnica específica para no dañar lo que hace única a la casa.',
    incluyeH2: 'Qué incluye la limpieza de un piso rural en {barrio}',
    incluyeItems: [
      'Suelos de piedra o baldosa de barro: fregado con producto neutro sin ácidos',
      'Suelos de madera o tarima: mopa casi seca con producto específico',
      'Chimenea: hogar exterior, cenicero y zona con hollín alrededor',
      'Cocina: campana, fogones, encimera y superficie exterior de electrodomésticos',
      'Baños: sanitarios, suelo y paredes con productos neutros',
      'Techos con vigas: cepillo extensible para polvo, hollín y telarañas',
      'Marcos de madera: verdín preventivo con antifúngico ecológico',
    ],
    precioItems: [
      'Piso rural hasta 80 m²: desde 150-200€',
      'Piso rural 80-130 m²: desde 200-270€',
      'Suelos de piedra, barro y madera: producto específico incluido',
      'Zona de chimenea: incluida sin suplemento',
    ],
    faqs: [
      {
        q: '¿Podéis limpiar suelos de barro cocido de mi casa rural de {barrio} sin que pierdan color?',
        a: 'Sí, con producto neutro pH 7. El barro cocido sin barnizar es muy poroso y el ácido lo decolora. Si el suelo lleva mucho tiempo sin limpieza a fondo puede necesitar un tratamiento de protección posterior, que presupuestamos aparte.',
      },
      {
        q: '¿Limpiáis también la madera de las vigas del techo en {barrio}?',
        a: 'Sí. Las vigas de madera de techo acumulan polvo, telarañas y a veces hollín de la chimenea. Las limpiamos con cepillo extensible y paño de microfibra casi seco. Si la madera tiene barniz deteriorado, lo indicamos pero no aplicamos ningún producto de restauración sin que nos lo pidas.',
      },
    ],
  },

  'industrial': {
    h1Qualifier: 'zona polígono · desengrase profesional en cada visita',
    metaDesc: 'Limpieza de pisos en {barrio}: capa de partículas industriales en superficies, desengrase previo en cocina y alféizares, producto específico para entornos de polígono.',
    intro: 'Los pisos en {barrio}, en el entorno del polígono industrial, acumulan en sus superficies algo que no aparece en los pisos de otras zonas: una capa fina de partículas grasas procedentes de la actividad industrial y el tráfico pesado. Esta capa se deposita en alféizares, cocinas próximas a ventanas y suelos de entrada, y requiere una fase de desengrase antes del limpiahogar habitual para eliminarla de verdad.',
    contextoH2: '¿Por qué los pisos de {barrio} necesitan un producto de limpieza diferente?',
    contextoContent: 'Las partículas de combustión y el polvo industrial que genera el polígono de Narón tienen componentes grasos que se adhieren al vidrio, los alféizares y las encimeras con más fuerza que el polvo doméstico. Con un limpiacristales o limpiahogar estándar, estas partículas se redistribuyen en lugar de eliminarse. El desengrasante disuelve la capa grasienta antes de aplicar el producto de limpieza final. Es un paso adicional que en otras zonas no sería necesario pero que en {barrio} marca la diferencia en el resultado.',
    incluyeH2: 'Qué incluye la limpieza de un piso en {barrio}',
    incluyeItems: [
      'Alféizares y marcos de ventana: desengrase de partículas industriales',
      'Cocina: desengrase previo de encimera y azulejos expuestos a partículas, campana, electrodomésticos y armarios exteriores',
      'Baños: limpieza completa estándar con antical',
      'Suelos: fregado con desengrasante previo en entrada y cocina',
      'Salón y dormitorios: muebles, suelos y cristales interiores',
      'Terraza o balcón: suelo y barandilla con tratamiento de partículas',
    ],
    precioItems: [
      'Piso 1-2 habitaciones (45-65 m²): desde 130-165€',
      'Piso 3 habitaciones (65-90 m²): desde 165-210€',
      'Desengrasante Ecolabel de alta eficacia: incluido sin suplemento',
      'Terraza con acumulación de partículas: incluida',
    ],
    faqs: [
      {
        q: '¿Cuánto tarda en volver a ensuciarse un piso en {barrio} después de la limpieza?',
        a: 'Depende de la orientación. Los pisos que miran al polígono o a la N-651 notan suciedad en alféizares y encimeras en 2-3 semanas. Los orientados al interior del barrio, algo más. Con limpieza periódica quincenal se mantiene un nivel aceptable.',
      },
      {
        q: '¿Podéis hacer la limpieza del piso de {barrio} mientras yo no estoy?',
        a: 'Sí. Con llave o código de acceso. Hacemos la limpieza y enviamos foto de confirmación al terminar por WhatsApp.',
      },
    ],
  },
};

export function getContenidoPisos(
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoPisos | null {
  const raw = PISOS_POR_ARQUETIPO[archetype];
  if (!raw) return null;
  return {
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDesc: t(raw.metaDesc, barrioNombre, municipioNombre),
    intro: t(raw.intro, barrioNombre, municipioNombre),
    contextoH2: t(raw.contextoH2, barrioNombre, municipioNombre),
    contextoContent: t(raw.contextoContent, barrioNombre, municipioNombre),
    incluyeH2: t(raw.incluyeH2, barrioNombre, municipioNombre),
    incluyeItems: raw.incluyeItems.map(s => t(s, barrioNombre, municipioNombre)),
    precioItems: raw.precioItems.map(s => t(s, barrioNombre, municipioNombre)),
    faqs: raw.faqs.map(f => ({ q: t(f.q, barrioNombre, municipioNombre), a: t(f.a, barrioNombre, municipioNombre) })),
  };
}

// ─── LIMPIEZA DE APARTAMENTOS TURÍSTICOS ────────────────────────────────────

export type ContenidoTuristicos = {
  h1Qualifier: string;
  metaDesc: string;
  intro: string;
  rotacionH2: string;
  rotacionContent: string;
  protocoloH2: string;
  protocoloItems: string[];
  precioItems: string[];
  faqs: { q: string; a: string }[];
};

const TURISTICOS_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoTuristicos> = {
  'bloque-obrero': {
    h1Qualifier: 'apartamentos turísticos en bloque · cambio de huésped rápido y fiable',
    metaDesc: 'Limpieza de apartamentos turísticos en {barrio}: cambio de huésped en 2-3 horas, checklist cerrado, fotos de confirmación. Disponibilidad en 24-48h.',
    intro: 'Gestionar un apartamento turístico en los bloques de {barrio} implica coordinar los cambios de huésped con precisión: el siguiente inquilino entra pocas horas después de que salga el anterior, y la limpieza tiene que hacerse con rapidez y sin dejar nada sin revisar. En Zentro Limpiezas hacemos cambios de huésped en apartamentos de {barrio} con checklist cerrado, foto de confirmación y disponibilidad en 24-48 horas.',
    rotacionH2: '¿Cómo gestionamos el cambio de huésped en tu apartamento de {barrio}?',
    rotacionContent: 'El protocolo de cambio de huésped empieza en cuanto el inquilino anterior sale: revisión visual del estado del apartamento, retirada de sábanas y toallas, limpieza de baños y cocina, fregado de suelos, reposición de la ropa de cama y toallas limpias si nos las dejas preparadas, y foto final de cada habitación enviada por WhatsApp. Si detectamos un desperfecto o falta de suministros, te avisamos en el momento. Todo en 2-3 horas para un apartamento estándar de 1-2 habitaciones.',
    protocoloH2: 'Protocolo de limpieza entre huéspedes en apartamentos de {barrio}',
    protocoloItems: [
      'Recogida de ropa de cama y toallas usadas',
      'Limpieza de baño: sanitarios, mampara, suelo y espejo',
      'Cocina: lavavajillas, encimera, microondas, campana y frigorífico exterior',
      'Aireación del apartamento durante la limpieza',
      'Fregado de suelos de todas las estancias',
      'Polvo en muebles y superficies',
      'Reposición de cama y toallas (con tu ropa de cama preparada)',
      'Revisión de amenities y suministros (jabón, papel, etc.) con aviso si faltan',
      'Foto de confirmación del estado final por WhatsApp',
    ],
    precioItems: [
      'Estudio o apartamento 1 hab. (30-50 m²): desde 60-80€/cambio',
      'Apartamento 2 habitaciones (50-70 m²): desde 80-105€/cambio',
      'Disponibilidad en 24-48h: sin suplemento habitual',
      'Servicio urgente (mismo día): consultar disponibilidad',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo necesitáis para hacer el cambio de huésped en {barrio}?',
        a: 'Para un apartamento de 1 habitación en {barrio}, entre 1,5 y 2,5 horas. Para 2 habitaciones, entre 2 y 3 horas. Depende también del estado en que lo deje el huésped anterior.',
      },
      {
        q: '¿Podéis gestionar las llaves del apartamento de {barrio} vosotros mismos?',
        a: 'Sí. Muchos propietarios de apartamentos turísticos en {barrio} nos dejan una copia de la llave o el código de caja de seguridad. Coordinamos la entrada y salida sin que tengas que estar presente.',
      },
    ],
  },

  'historico': {
    h1Qualifier: 'apartamentos históricos · limpieza que cuida los acabados de época',
    metaDesc: 'Limpieza de apartamentos turísticos en el casco histórico de {barrio}: parquet, azulejo antiguo y carpintería de época cuidados en cada cambio de huésped.',
    intro: 'Los apartamentos turísticos en los edificios históricos de {barrio} son un producto especial: los huéspedes llegan atraídos por el encanto de los materiales de época, y ese encanto hay que mantenerlo. El parquet, el azulejo hidráulico y la carpintería de madera necesitan un trato diferente al de los apartamentos modernos: productos neutros, mínima humedad en suelos de madera, y atención a los detalles que hacen que un apartamento histórico parezca cuidado.',
    rotacionH2: '¿Cómo hacemos el cambio de huésped en un apartamento histórico de {barrio}?',
    rotacionContent: 'En los apartamentos históricos de {barrio}, el protocolo de cambio de huésped incorpora el cuidado específico de los materiales: mopa casi seca para suelos de parquet, producto neutro para la baldosa hidráulica, limpieza de marcos de madera con paño controlado sin producto agresivo. Los huéspedes que eligen estos apartamentos valoran los detalles, así que la revisión final es especialmente exhaustiva: manchas en parquet, residuos en azulejo, polvo en molduras.',
    protocoloH2: 'Protocolo de limpieza entre huéspedes en apartamentos históricos de {barrio}',
    protocoloItems: [
      'Recogida de ropa de cama y toallas',
      'Suelos de parquet: mopa casi seca, sin agua en exceso',
      'Suelos de baldosa hidráulica: producto neutro pH 7',
      'Baño: sanitarios, mampara, suelo y espejo con productos neutros',
      'Cocina: encimera, microondas, campana y nevera exterior',
      'Molduras, cornisas y detalles de época: polvo con microfibra seca',
      'Ventanas de guillotina: cristales y carriles',
      'Reposición de cama y toallas limpias',
      'Foto de confirmación final por WhatsApp',
    ],
    precioItems: [
      'Apartamento histórico 1 hab. (35-55 m²): desde 70-90€/cambio',
      'Apartamento histórico 2 hab. (55-80 m²): desde 90-120€/cambio',
      'Tratamiento específico para materiales de época: sin suplemento',
      'Disponibilidad en 24-48h: habitual',
    ],
    faqs: [
      {
        q: '¿Podéis limpiar el parquet de mi apartamento turístico en {barrio} sin dañarlo?',
        a: 'Sí. Usamos mopa de microfibra casi seca y producto específico para madera. El exceso de agua en parquet antiguo lo hincha y lo decolora. Nuestro protocolo para apartamentos históricos tiene ese cuidado incluido por defecto.',
      },
      {
        q: '¿Cuánto tarda el cambio de huésped en un apartamento histórico de {barrio}?',
        a: 'Entre 30 y 45 minutos más que en un apartamento moderno equivalente, por el cuidado específico de los materiales. Para un apartamento de 1 habitación, calculamos 2-3 horas. Te lo indicamos al presupuestar.',
      },
    ],
  },

  'marinero': {
    h1Qualifier: 'apartamentos con vistas al mar · impecables para cada huésped',
    metaDesc: 'Limpieza de apartamentos turísticos en {barrio}: control de salitre y humedad marina en cada cambio de huésped. Presentación impecable para las reseñas de tus huéspedes.',
    intro: 'Un apartamento turístico con vistas al mar en {barrio} es un producto de alto valor que los huéspedes eligen por la ubicación, pero que repiten o recomiendan por el estado de limpieza. La humedad y el salitre marino afectan los marcos, las superficies metálicas y los baños mucho más rápido que en el interior. El cambio de huésped en {barrio} incorpora tratamiento de salitre en marcos y antifúngico preventivo en baños, para que cada entrada sea perfecta.',
    rotacionH2: '¿Qué tiene de especial la limpieza entre huéspedes en un apartamento costero de {barrio}?',
    rotacionContent: 'En {barrio}, el ambiente marino acelera la acumulación de salitre en marcos y superficies metálicas entre un huésped y otro. Las manchas de condensación en ventanas con vistas al mar aparecen en horas con cambio de temperatura. Y los baños, en un ambiente húmedo, necesitan antifúngico preventivo en cada limpieza para evitar que el moho empiece a aparecer después de varias rotaciones. Todo esto está incluido en nuestro protocolo de cambio de huésped para apartamentos de {barrio}.',
    protocoloH2: 'Protocolo de limpieza entre huéspedes en {barrio}',
    protocoloItems: [
      'Recogida de ropa de cama y toallas',
      'Baño: antifúngico preventivo en juntas y techo, sanitarios, mampara y espejo',
      'Marcos y alféizares con vistas: tratamiento de salitre y condensación',
      'Cocina: encimera, microondas, nevera exterior, campana',
      'Suelos de todas las estancias',
      'Muebles y superficies: especial atención a zonas con depósito de salitre',
      'Terraza con vistas: barrido, fregado y tratamiento de salitre en barandilla',
      'Reposición de cama y toallas limpias',
      'Foto de confirmación por WhatsApp',
    ],
    precioItems: [
      'Apartamento 1 hab. con vistas (40-60 m²): desde 70-90€/cambio',
      'Apartamento 2 hab. con vistas (60-85 m²): desde 90-120€/cambio',
      'Antifúngico en baños y tratamiento de salitre: incluidos',
      'Terraza con vistas: incluida',
    ],
    faqs: [
      {
        q: '¿Con qué frecuencia hay que hacer cambio de sábanas en un apartamento costero de {barrio}?',
        a: 'En cada cambio de huésped sin excepción. Además, si un mismo huésped se queda más de 7 días, recomendamos un cambio intermedio de ropa de cama y toallas.',
      },
      {
        q: '¿Podéis hacer el cambio de huésped el mismo día de la salida en {barrio}?',
        a: 'Sí, si nos avisas con suficiente antelación y tenemos disponibilidad ese día. La mayoría de los cambios en {barrio} los gestionamos en 24-48 horas, pero en temporada alta es importante coordinarlo con antelación.',
      },
    ],
  },

  'segunda-residencia': {
    h1Qualifier: 'segunda residencia en alquiler · tranquilidad sin estar presente',
    metaDesc: 'Limpieza de apartamentos turísticos segunda residencia en {barrio}: cambios de huésped gestionados con tu llave, fotos de confirmación y aviso si hay incidencias.',
    intro: 'Muchos propietarios de segunda residencia en {barrio} alquilan su apartamento cuando no lo usan. Gestionar los cambios de huésped a distancia exige un servicio de limpieza de confianza: que entre con tu llave, que deje el apartamento impecable, que te avise si hay algo mal y que te mande foto de confirmación. Eso es exactamente lo que hacemos en Zentro Limpiezas para los propietarios de segunda residencia en {barrio}.',
    rotacionH2: '¿Cómo gestionamos los cambios de huésped en tu segunda residencia de {barrio}?',
    rotacionContent: 'El protocolo es claro: te avisamos cuando entramos, hacemos la limpieza con nuestro checklist cerrado, te enviamos foto de cada habitación al terminar y te avisamos por WhatsApp si detectamos algún desperfecto o falta de suministros. Guardamos una copia de tu llave o tu código. No necesitas estar en {barrio} para que tu apartamento esté listo para el siguiente huésped.',
    protocoloH2: 'Protocolo de cambio de huésped en segunda residencia de {barrio}',
    protocoloItems: [
      'Aviso de entrada por WhatsApp',
      'Recogida de ropa de cama y toallas usadas',
      'Baño: desinfección completa, juntas, sanitarios, mampara y espejo',
      'Cocina: nevera, encimera, microondas, campana y fregadero',
      'Suelos de todas las estancias',
      'Muebles y superficies con paño de microfibra',
      'Reposición de cama y toallas limpias (con tu ropa preparada)',
      'Revisión de suministros y aviso si falta algo',
      'Foto de confirmación de cada habitación por WhatsApp',
      'Aviso de incidencias inmediato si se detecta algún desperfecto',
    ],
    precioItems: [
      'Apartamento o piso 1-2 hab. (40-70 m²): desde 65-100€/cambio',
      'Gestión de llaves: sin coste adicional',
      'Informe de incidencias por foto: incluido',
      'Disponibilidad en 24-48h: habitual',
    ],
    faqs: [
      {
        q: '¿Qué hago si el huésped deja el apartamento de {barrio} en mal estado?',
        a: 'Te enviamos fotos del estado en que lo encontramos antes de empezar la limpieza y después. Si hay desperfectos o suciedad fuera de lo habitual que requiera trabajo extra, te presupuestamos el suplemento antes de hacerlo.',
      },
      {
        q: '¿Podéis recoger y entregar llaves en nombre mío en {barrio}?',
        a: 'Guardamos una copia de tu llave. Para la entrega de llaves a huéspedes, eso depende del sistema de check-in que uses. Si es caja de seguridad o cerradura digital, lo coordinas tú con el huésped directamente.',
      },
    ],
  },

  'chalet': {
    h1Qualifier: 'villas y chalés turísticos · limpieza completa entre huéspedes',
    metaDesc: 'Limpieza de chalés turísticos en {barrio}: todas las plantas, terraza, barbacoa y espacios exteriores listos para el siguiente grupo. Equipo adaptado al tamaño.',
    intro: 'Un chalé o villa turística en {barrio} implica un cambio de huésped completamente diferente al de un apartamento: más metros, más baños, terraza y barbacoa que limpiar, jardín que recoger, y habitaciones que organizar para grupos más grandes. En Zentro Limpiezas enviamos el equipo necesario para completar la limpieza del chalé en el tiempo de rotación disponible, sin comprometer el resultado.',
    rotacionH2: '¿Qué implica el cambio de huésped en un chalé turístico de {barrio}?',
    rotacionContent: 'Un chalé turístico en {barrio} puede tener 3-5 dormitorios, 2-3 baños, salón grande con cocina americana, terraza con barbacoa y jardín. Limpiar todo esto entre huéspedes en el tiempo disponible exige un equipo de 2-3 personas trabajando en paralelo por plantas y estancias. Organizamos el trabajo con checklist por habitación, foto de confirmación al terminar y aviso inmediato si detectamos un desperfecto.',
    protocoloH2: 'Protocolo de cambio de huésped en chalés turísticos de {barrio}',
    protocoloItems: [
      'Recogida de toda la ropa de cama y toallas (todos los dormitorios)',
      'Baños (todos): sanitarios, mamparas, suelos, espejos y dispensadores',
      'Cocina: lavavajillas, encimera, microondas, campana, nevera y fregadero',
      'Salón y comedor: muebles, superficies y suelo',
      'Todos los dormitorios: muebles, suelos y ventanas',
      'Terraza: suelo, muebles exteriores y barbacoa exterior',
      'Escalera interior: peldaños y barandilla',
      'Jardín: recogida de basura y objetos dejados por huéspedes',
      'Reposición de camas (con ropa preparada por el propietario)',
      'Foto de confirmación de cada estancia por WhatsApp',
    ],
    precioItems: [
      'Chalé 3 dormitorios (100-140 m²): desde 140-180€/cambio',
      'Chalé 4-5 dormitorios (140-200 m²): desde 180-250€/cambio',
      'Terraza y barbacoa: incluidas en el precio de cambio',
      'Jardín (recogida básica): incluido',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo necesitáis para hacer el cambio de huésped en un chalé en {barrio}?',
        a: 'Para un chalé de 3 dormitorios, 2 personas durante 3-4 horas. Para 5 dormitorios, 3 personas durante 4-5 horas. Ajustamos el equipo para respetar el tiempo de rotación disponible.',
      },
      {
        q: '¿Limpiáis también la barbacoa y los muebles de jardín en el cambio de huésped de {barrio}?',
        a: 'Sí. La terraza con barbacoa y los muebles exteriores están incluidos en el cambio de huésped de chalés turísticos. Si la barbacoa tiene grasa muy acumulada de varias rotaciones, puede requerir un tratamiento específico aparte.',
      },
    ],
  },

  'rural': {
    h1Qualifier: 'casas de turismo rural · experiencia auténtica, limpieza profesional',
    metaDesc: 'Limpieza de apartamentos de turismo rural en {barrio}: suelos de piedra, chimenea y materiales de época listos para cada huésped. Servicio de confianza para propietarios.',
    intro: 'Las casas de turismo rural en {barrio} son un producto premium que los huéspedes eligen por la autenticidad: piedra, madera, chimenea, entorno natural. Esa autenticidad necesita un mantenimiento impecable en cada cambio de huésped: los suelos de piedra y madera bien tratados, la chimenea y el hogar limpios, y los materiales de época cuidados con los productos correctos. Trabajamos con propietarios de casas rurales en {barrio} que saben que la limpieza es parte de la experiencia que ofrecen.',
    rotacionH2: '¿Qué hay que atender en el cambio de huésped de una casa rural de {barrio}?',
    rotacionContent: 'Las casas rurales de {barrio} tienen elementos que los apartamentos urbanos no tienen: el hogar o la chimenea usada deja ceniza y hollín; los suelos de piedra o barro traen barro de los huéspedes que han recorrido la finca; la madera de los muebles y las vigas acumula polvo orgánico del entorno; y los baños de las casas rurales más antiguas necesitan antifúngico preventivo por la mayor humedad. El checklist de cambio de huésped rural tiene más elementos que el de un apartamento urbano.',
    protocoloH2: 'Protocolo de cambio de huésped en casas rurales de {barrio}',
    protocoloItems: [
      'Recogida de ropa de cama y toallas',
      'Chimenea: limpieza de cenicero, hogar exterior y zona de hollín alrededor',
      'Suelos de piedra o barro: fregado con producto neutro',
      'Suelos de madera: mopa casi seca con producto específico',
      'Baños: antifúngico preventivo en juntas, sanitarios, suelo y espejo',
      'Cocina: campana, encimera, fogones y exterior de electrodomésticos',
      'Techos con vigas: polvo y telarañas con cepillo extensible',
      'Exterior inmediato: recogida de basura y objetos dejados',
      'Reposición de cama y toallas limpias',
      'Foto de confirmación por WhatsApp',
    ],
    precioItems: [
      'Casa rural hasta 80 m² (2-3 hab.): desde 110-150€/cambio',
      'Casa rural 80-150 m² (3-5 hab.): desde 150-220€/cambio',
      'Suelos de piedra y madera: tratamiento específico incluido',
      'Chimenea: incluida en el protocolo de cambio',
    ],
    faqs: [
      {
        q: '¿Podéis gestionar los cambios de huésped en mi casa rural de {barrio} a distancia?',
        a: 'Sí. Con copia de llave o código de acceso. Coordinamos por WhatsApp, hacemos el cambio y te enviamos fotos de confirmación. Si hay incidencias, te avisamos en el momento antes de seguir.',
      },
      {
        q: '¿Limpiáis la chimenea en cada cambio de huésped en {barrio}?',
        a: 'Incluimos la limpieza del hogar exterior, el cenicero y las superficies con hollín alrededor de la chimenea. La deshollinación del interior del conducto es un servicio específico de deshollinador que va aparte.',
      },
    ],
  },

  'industrial': {
    h1Qualifier: 'apartamentos en polígono · limpieza eficiente para trabajadores',
    metaDesc: 'Limpieza de apartamentos de alquiler temporal en {barrio}: rotación de trabajadores, cambio de huésped rápido con desengrase incluido. Servicio fiable y puntual.',
    intro: 'Los apartamentos en {barrio}, cerca del polígono industrial, se alquilan frecuentemente a trabajadores en estancias temporales de semanas o meses. El cambio entre trabajadores o el servicio de limpieza periódica durante la estancia tiene características propias: la suciedad es más intensa por el trabajo manual, la cocina se usa más, y el entorno del polígono añade la capa de partículas grasas que se deposita en superficies. En Zentro Limpiezas gestionamos estos cambios con rapidez y fiabilidad.',
    rotacionH2: '¿Cómo gestionamos el cambio de inquilino temporal en {barrio}?',
    rotacionContent: 'Los apartamentos de alquiler temporal en {barrio} suelen tener cocinas con uso intensivo, baños con más desgaste que los de uso vacacional, y una acumulación de partículas industriales en las superficies próximas a ventanas. El protocolo de cambio incluye desengrase previo en cocina y encimeras, limpieza a fondo de baños y fregado completo de suelos. El objetivo es dejar el apartamento en estado de nuevo uso en el tiempo de rotación disponible.',
    protocoloH2: 'Protocolo de cambio de inquilino en apartamentos de {barrio}',
    protocoloItems: [
      'Recogida de ropa de cama y toallas',
      'Cocina: desengrase de encimera, campana y azulejos, interior de microondas y nevera',
      'Baño: desinfección completa, sanitarios, ducha o bañera, suelo y espejo',
      'Suelos: fregado con desengrasante previo en todas las estancias',
      'Alféizares y superficies próximas a ventanas: desengrase de partículas industriales',
      'Muebles y superficies con microfibra',
      'Reposición de cama y toallas limpias',
      'Foto de confirmación por WhatsApp',
    ],
    precioItems: [
      'Estudio o apartamento 1 hab. (30-50 m²): desde 65-85€/cambio',
      'Apartamento 2 hab. (50-70 m²): desde 85-110€/cambio',
      'Desengrase de partículas industriales: incluido sin suplemento',
      'Disponibilidad en 24h: habitual en zona de {barrio}',
    ],
    faqs: [
      {
        q: '¿Podéis hacer limpieza periódica de apartamentos de trabajadores en {barrio} además del cambio entre inquilinos?',
        a: 'Sí. Para estancias largas (varias semanas o meses), ofrecemos también limpieza periódica semanal o quincenal. Es el mismo servicio que para viviendas habituales pero adaptado al tipo de uso más intensivo.',
      },
      {
        q: '¿Cuánto tiempo tardáis en hacer el cambio en un apartamento de {barrio}?',
        a: 'Para un apartamento de 1 habitación, entre 1,5 y 2,5 horas. Para 2 habitaciones, entre 2 y 3 horas. Puntualidad garantizada: si acordamos una hora de entrada, llegamos a esa hora.',
      },
    ],
  },
};

export function getContenidoTuristicos(
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoTuristicos | null {
  const raw = TURISTICOS_POR_ARQUETIPO[archetype];
  if (!raw) return null;
  return {
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDesc: t(raw.metaDesc, barrioNombre, municipioNombre),
    intro: t(raw.intro, barrioNombre, municipioNombre),
    rotacionH2: t(raw.rotacionH2, barrioNombre, municipioNombre),
    rotacionContent: t(raw.rotacionContent, barrioNombre, municipioNombre),
    protocoloH2: t(raw.protocoloH2, barrioNombre, municipioNombre),
    protocoloItems: raw.protocoloItems.map(s => t(s, barrioNombre, municipioNombre)),
    precioItems: raw.precioItems.map(s => t(s, barrioNombre, municipioNombre)),
    faqs: raw.faqs.map(f => ({ q: t(f.q, barrioNombre, municipioNombre), a: t(f.a, barrioNombre, municipioNombre) })),
  };
}

// ─── LIMPIEZA A FONDO ────────────────────────────────────────────────────────

export type ContenidoAfondo = {
  h1Qualifier: string;
  metaDesc: string;
  intro: string;
  queEsH2: string;
  queEsContent: string;
  queIncluyeH2: string;
  queIncluyeItems: string[];
  cuandoH2: string;
  cuandoItems: string[];
  precioItems: string[];
  faqs: { q: string; a: string }[];
};

const AFONDO_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoAfondo> = {
  'bloque-obrero': {
    h1Qualifier: 'pisos de bloque · cal, grasa y zonas que el día a día no alcanza',
    metaDesc: 'Limpieza a fondo en pisos de bloque de {barrio}: cal incrustada en baños, grasa acumulada en cocina y zonas que la limpieza habitual nunca alcanza. Desde 120€.',
    intro: 'La limpieza a fondo de un piso de bloque en {barrio} es el servicio que llega donde la limpieza de mantenimiento nunca llega: el interior de los armarios de cocina, la campana con años de grasa acumulada, la cal en el plato de ducha, los rodapiés y los interruptores. Los bloques de los años 70-80, frecuentes en {barrio}, tienen materiales específicos —gres, terrazo, aluminio de época— que necesitan el producto correcto para limpiarse de verdad sin deteriorarse.',
    queEsH2: '¿Qué es y qué incluye una limpieza a fondo en un piso de bloque de {barrio}?',
    queEsContent: 'La limpieza a fondo es el "reseteo" del piso: se hace cuando se necesita llegar donde el mantenimiento habitual no llega. En los pisos de bloque de {barrio}, eso significa dedicar tiempo específico a la campana extractora con grasa acumulada, la cal en griferías y plato de ducha, el interior de armarios de cocina, y el polvo detrás y debajo de los electrodomésticos. Se trabaja de arriba hacia abajo: primero alturas y techos, después muebles y armarios, finalmente suelos.',
    queIncluyeH2: 'Qué incluye la limpieza a fondo en {barrio}',
    queIncluyeItems: [
      'Cocina a fondo: interior y exterior de armarios, encimera, azulejos, campana extractora, electrodomésticos y suelo',
      'Baños: antical en griferías, inodoro, plato de ducha o bañera, mampara, juntas de azulejo, espejo y suelo',
      'Dormitorios: interior de armarios a petición, debajo de la cama, ventanas interiores, rodapiés y suelo',
      'Salón/comedor: detrás de muebles, estanterías, ventanas interiores, zócalos y suelo',
      'Interruptores, pomos y marcos de puerta: zonas de contacto frecuente con suciedad acumulada',
      'Lámparas, techos y esquinas: polvo acumulado en esquinas y luminarias',
      'Productos Ecolabel: antical, desengrasante y limpiahogar certificados incluidos',
    ],
    cuandoH2: '¿Cuándo conviene contratar una limpieza a fondo en un piso de {barrio}?',
    cuandoItems: [
      'Antes o después de una mudanza: el piso queda listo para entrar o para entregar',
      'Vuelta de vacaciones largas: cuando el piso ha estado cerrado semanas',
      'Primera limpieza con empresa: para establecer la base antes de empezar con periódica',
      'Cambio de inquilinos: el piso queda como nuevo para los siguientes residentes',
      'Acumulación de tiempo: más de 6 meses sin limpieza profesional a fondo',
    ],
    precioItems: [
      'Piso 1-2 habitaciones (45-65 m²): desde 120-170€',
      'Piso 3 habitaciones (70-90 m²): desde 170-240€',
      'Interior de armarios y electrodomésticos: incluidos a petición',
      'Presupuesto cerrado en 24h: sin sorpresas en la factura',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo dura una limpieza a fondo en un piso de bloque de {barrio}?',
        a: 'Para un piso de 70-80 m² en {barrio}, entre 4 y 6 horas con un equipo de dos personas. Para pisos más descuidados o más grandes, puede extenderse a 7-8 horas. Lo indicamos en el presupuesto.',
      },
      {
        q: '¿Tengo que vaciar los armarios antes de la limpieza a fondo en {barrio}?',
        a: 'Solo si quieres que los limpiemos por dentro. Muchos clientes vacían ellos los armarios de cocina antes de la visita y nosotros los limpiamos y rellenamos. Si prefieres que nos encarguemos del vaciado, también lo hacemos.',
      },
    ],
  },

  'historico': {
    h1Qualifier: 'edificios históricos · materiales nobles limpios con el producto correcto',
    metaDesc: 'Limpieza a fondo en {barrio}: parquet, baldosa hidráulica y molduras de escayola tratados con productos neutros. Resultado profundo sin dañar los acabados de época.',
    intro: 'Las viviendas en los edificios históricos de {barrio} son un reto de limpieza: cada sala puede tener un tipo de suelo diferente —parquet, baldosa hidráulica, mosaico—, las molduras y cornisas acumulan polvo en sus relieves, y los materiales envejecidos exigen productos que los cuiden en lugar de dañarlos. En Zentro Limpiezas identificamos los materiales antes de empezar y adaptamos producto y técnica a cada superficie para un resultado real.',
    queEsH2: '¿Qué hace diferente la limpieza a fondo en los pisos históricos de {barrio}?',
    queEsContent: 'La limpieza a fondo de un piso histórico en {barrio} no es solo ir más despacio: es saber qué producto usar en cada material. El parquet antiguo se daña con agua en exceso; la baldosa hidráulica absorbe los ácidos de limpiadores agresivos; las molduras de escayola acumulan polvo en relieves que una fregona no alcanza. La diferencia en el resultado, cuando se hace con el producto y la técnica correctos, es completamente visible.',
    queIncluyeH2: 'Qué incluye la limpieza a fondo en una vivienda histórica de {barrio}',
    queIncluyeItems: [
      'Suelos de parquet/madera: mopa casi seca con producto específico sin agua en exceso',
      'Suelos de baldosa hidráulica o mosaico: limpieza con producto neutro pH 7',
      'Molduras, cornisas y techos altos: cepillo extensible para relieves y recovecos',
      'Cocina: interior y exterior de muebles, encimera, azulejos, campana y electrodomésticos',
      'Baños con azulejo antiguo: sanitarios, grifería, mampara y suelo con productos neutros',
      'Ventanas de guillotina: cristales, carriles y marcos con cepillo fino',
      'Detrás y debajo de muebles: polvo de sedimentación en zonas sin acceso habitual',
    ],
    cuandoH2: '¿Cuándo tiene más sentido contratar una limpieza a fondo en {barrio}?',
    cuandoItems: [
      'Inicio de temporada o apertura tras meses cerrado',
      'Antes de recibir visitas importantes o alquilar el piso',
      'Para establecer la base antes de empezar con limpieza periódica',
      'Cuando la suciedad acumulada ha superado lo que el mantenimiento puede abordar',
      'Mudanza: para dejar el piso impecable al entregar o al recibir',
    ],
    precioItems: [
      'Piso histórico 50-70 m²: desde 160-220€',
      'Piso histórico 70-100 m²: desde 220-290€',
      'Tratamiento específico para parquet y baldosa hidráulica: incluido sin suplemento',
      'Molduras y techos altos: incluidos',
    ],
    faqs: [
      {
        q: '¿Dañáis los suelos de parquet al hacer la limpieza a fondo en {barrio}?',
        a: 'No si se hace correctamente, que es como lo hacemos nosotros. Mopa de microfibra casi seca con producto específico para madera, sin agua en exceso. El parquet antiguo es más sensible que el moderno y lo tratamos con el cuidado que requiere.',
      },
      {
        q: '¿Cuánto tarda una limpieza a fondo en un piso histórico de {barrio}?',
        a: 'Para un piso de 80-90 m² con materiales de época, entre 5 y 7 horas. Los materiales específicos y los detalles arquitectónicos requieren más tiempo y técnica. Lo indicamos en el presupuesto.',
      },
    ],
  },

  'marinero': {
    h1Qualifier: 'zona costera · salitre, humedad y cristales sin marcas de mar',
    metaDesc: 'Limpieza a fondo en {barrio}: salitre en marcos y alféizares, humedad en baños y manchas de condensación en cristales. Tratamiento completo para casas costeras.',
    intro: 'Una limpieza a fondo en una casa costera de {barrio} tiene que abordar lo que el ambiente marino hace al inmueble: el salitre que se deposita en marcos, alféizares y superficies metálicas, la humedad que genera moho en baños y juntas, y las manchas de condensación en cristales. Son problemas que en casas del interior no existen, y que requieren tratamiento específico.',
    queEsH2: '¿Qué incluye la limpieza a fondo en una casa costera de {barrio}?',
    queEsContent: 'Además de la limpieza integral de todas las estancias, la limpieza a fondo en {barrio} incorpora tratamiento de salitre en marcos y alféizares, antifúngico en juntas de baño donde la humedad marina acelera el crecimiento de moho, y tratamiento de manchas de condensación en cristales. Estos elementos diferenciadores son lo que hace que la limpieza a fondo de una casa costera sea distinta a la de una casa del interior.',
    queIncluyeH2: 'Qué incluye la limpieza a fondo en {barrio}',
    queIncluyeItems: [
      'Marcos y alféizares: neutralizador de sales marinas para eliminar salitre acumulado',
      'Baños: antifúngico en juntas, techos y zonas con humedad; sanitarios, mampara y grifería',
      'Cristales: tratamiento de manchas de condensación interior y salitre exterior',
      'Cocina: interior de armarios, campana, encimera, electrodomésticos y suelo',
      'Dormitorios: muebles, interior de armarios, debajo de camas y suelo',
      'Salón: detrás de muebles, estanterías, ventanas y suelo',
      'Terraza: salitre en barandilla, suelo y muebles exteriores',
    ],
    cuandoH2: '¿Cuándo conviene hacer una limpieza a fondo en tu casa de {barrio}?',
    cuandoItems: [
      'Apertura tras el invierno: la casa ha acumulado meses de humedad y salitre cerrada',
      'Antes del verano: para recibir la temporada con el inmueble en perfecto estado',
      'Cambio de inquilinos o turistas: el apartamento queda impecable para el siguiente',
      'Cuando el moho ya es visible en baños: tratamiento a fondo antes de que se extienda',
      'Mudanza: entrada o salida con el piso completamente limpio',
    ],
    precioItems: [
      'Piso o casa hasta 70 m² en {barrio}: desde 130-180€',
      'Piso o casa 70-100 m²: desde 180-250€',
      'Tratamiento de salitre y antifúngico: incluidos sin suplemento',
      'Terraza costera: incluida',
    ],
    faqs: [
      {
        q: '¿El salitre marino daña los marcos de las ventanas si no se limpia regularmente en {barrio}?',
        a: 'Con el tiempo, sí. El ambiente salino puede acelerar la oxidación de marcos de aluminio. Con una limpieza a fondo periódica y neutralizador de sales, ese deterioro se previene eficazmente.',
      },
      {
        q: '¿Podéis eliminar el moho del baño en la limpieza a fondo de {barrio}?',
        a: 'Sí. El moho visible en juntas y techo del baño se elimina con antifúngico profesional. Si el moho está muy extendido o penetra en la pared, puede requerir un tratamiento adicional que presupuestamos aparte.',
      },
    ],
  },

  'segunda-residencia': {
    h1Qualifier: 'segunda residencia · apertura o cierre a fondo antes o después de la estancia',
    metaDesc: 'Limpieza a fondo de segunda residencia en {barrio}: apertura tras meses cerrada, piso ventilado, sin moho ni polvo de sedimentación. Gestionamos con tu llave.',
    intro: 'Una segunda residencia en {barrio} que pasa meses cerrada acumula una suciedad diferente a la de uso diario: polvo de sedimentación en todas las superficies, manchas de condensación en cristales, moho superficial en baños sin usar, olor a cerrado y en algunos casos filtraciones que hay que detectar. La limpieza a fondo de apertura deja el piso listo para disfrutar desde el primer momento en que llegas.',
    queEsH2: '¿En qué estado está una segunda residencia de {barrio} después de meses cerrada?',
    queEsContent: 'Un piso cerrado durante el invierno en {barrio} acumula polvo de sedimentación en muebles y suelos, manchas de condensación en cristales por el diferencial térmico, moho superficial en juntas de baño y encimera, y el olor característico de espacio sin ventilar. Si además está en zona costera, añade salitre en marcos y superficies metálicas. La limpieza de apertura lo resuelve todo en una visita: ventilación activa, tratamiento de humedad y limpieza completa.',
    queIncluyeH2: 'Qué incluye la limpieza a fondo de apertura de segunda residencia en {barrio}',
    queIncluyeItems: [
      'Toda la vivienda: polvo de sedimentación eliminado en muebles, superficies y suelos',
      'Baños: desinfección completa, antifúngico en juntas y zonas con humedad, sanitarios y mampara',
      'Cocina: interior de nevera y horno a petición, armarios, campana, encimera y suelo',
      'Cristales interiores: manchas de condensación y polvo de sedimentación',
      'Ventilación activa durante todo el proceso',
      'Revisión visual de filtraciones o humedades (aviso por WhatsApp si encontramos algo)',
      'Cambio de ropa de cama si nos dejas juego preparado',
    ],
    cuandoH2: '¿Cuándo se contrata la limpieza a fondo de segunda residencia en {barrio}?',
    cuandoItems: [
      'Apertura de primavera/verano: para llegar y encontrar el piso listo',
      'Cierre de temporada: limpieza a fondo antes de dejarlo cerrado meses',
      'Antes de alquilarlo en plataformas: apartamento impecable para los primeros huéspedes',
      'Cuando detectas olor, moho visible o polvo excesivo al llegar',
      'Cambio de inquilino: entre un inquilino y otro',
    ],
    precioItems: [
      'Piso hasta 70 m² (limpieza de apertura): desde 130-180€',
      'Piso 70-100 m² (limpieza de apertura): desde 180-250€',
      'Limpieza de cierre (más breve que la apertura): desde 90€',
      'Gestión con tu llave: sin coste adicional',
    ],
    faqs: [
      {
        q: '¿Podéis hacer la limpieza de apertura en {barrio} el día antes de que llegue yo?',
        a: 'Exactamente así es como lo hacemos normalmente. Nos das la fecha de llegada, acordamos el día anterior y al llegar tú el piso está limpio, ventilado y listo. Foto de confirmación por WhatsApp al terminar.',
      },
      {
        q: '¿Limpiais también el interior de la nevera y el horno en la apertura de {barrio}?',
        a: 'Sí, si nos lo indicas al pedir el presupuesto. El interior de la nevera y el horno están incluidos a petición en la limpieza de apertura de segunda residencia.',
      },
    ],
  },

  'chalet': {
    h1Qualifier: 'chalés y adosados · gran limpieza de todas las plantas y exteriores',
    metaDesc: 'Limpieza a fondo en chalés de {barrio}: planta baja, primera planta, garaje, terraza y zonas exteriores. Equipo adaptado al tamaño y al tiempo necesario.',
    intro: 'La limpieza a fondo de un chalé o adosado en {barrio} no se parece a la de un piso de bloque: hay más plantas, más metros de cocina y baños, terraza que tratar, garaje, y la suciedad de jardín que se distribuye por toda la planta baja. En Zentro Limpiezas adaptamos el equipo al tamaño real de tu chalé para que la limpieza a fondo quede completa en el tiempo acordado, sin dejar ninguna zona sin atender.',
    queEsH2: '¿Qué áreas de un chalé de {barrio} se cubren en la limpieza a fondo?',
    queEsContent: 'En un chalé, la limpieza a fondo va más allá de las zonas estándar. Además de cocina, baños, dormitorios y salón, incluye la escalera interior con barandilla, la terraza con suelo y muebles, el interior del garaje con barrido, y la entrada y accesos exteriores. Son las zonas que en un piso de bloque no existen y que en el chalé acumulan suciedad específica que la visita de mantenimiento habitual no resuelve a fondo.',
    queIncluyeH2: 'Qué incluye la limpieza a fondo de chalés en {barrio}',
    queIncluyeItems: [
      'Cocina completa: interior y exterior de todos los armarios, campana, encimera, azulejos y electrodomésticos',
      'Todos los baños: sanitarios, grifería con antical, mamparas, juntas, suelos y espejos',
      'Dormitorios (todas las plantas): interior de armarios, debajo de camas, ventanas y suelos',
      'Salón y comedor: detrás de muebles, ventanales grandes, estanterías y suelo',
      'Escalera interior: peldaños, barandilla y rellanos',
      'Terraza: suelo, muebles exteriores y barandilla',
      'Garaje: barrido de polvo y recogida de suciedad superficial',
    ],
    cuandoH2: '¿Cuándo conviene contratar la limpieza a fondo del chalé en {barrio}?',
    cuandoItems: [
      'Post-verano o post-temporada: después de meses de uso intensivo con familia',
      'Antes de celebraciones en casa: recibir invitados con el chalé en perfecto estado',
      'Primera vez con empresa: establecer la base antes de empezar con servicio periódico',
      'Mudanza entrante o saliente: el chalé listo para los nuevos propietarios o inquilinos',
      'Cuando la terraza y el garaje ya no se pueden dejar para después',
    ],
    precioItems: [
      'Adosado 2 plantas hasta 130 m²: desde 220-290€',
      'Chalé independiente 130-200 m²: desde 290-380€',
      'Chalé más de 200 m²: presupuesto personalizado',
      'Terraza, escalera y garaje: incluidos',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo necesitáis para la limpieza a fondo de un chalé en {barrio}?',
        a: 'Para un adosado de dos plantas de 120-130 m², 2 personas durante 5-7 horas. Para chalés de más de 150 m², ajustamos el equipo para hacerlo en el tiempo acordado. Siempre lo indicamos en el presupuesto.',
      },
      {
        q: '¿Limpiais también el garaje en la limpieza a fondo del chalé de {barrio}?',
        a: 'Incluimos barrido de polvo y recogida de suciedad superficial del garaje. Para una limpieza a fondo del garaje con eliminación de manchas de aceite y fregado total, se presupuesta como servicio específico.',
      },
    ],
  },

  'rural': {
    h1Qualifier: 'casas rurales · limpieza a fondo con respeto por los materiales tradicionales',
    metaDesc: 'Limpieza a fondo en casas rurales de {barrio}: suelos de piedra y madera, chimenea, vigas y suciedad de campo. Productos Ecolabel respetuosos con el entorno.',
    intro: 'La limpieza a fondo de una casa rural en {barrio} tiene su propia complejidad: los suelos de piedra, baldosa de barro o madera no admiten los mismos productos que los pisos urbanos; la chimenea activa deja ceniza en zonas próximas; las vigas de los techos acumulan polvo y telarañas que solo se eliminan con cepillo extensible; y el campo trae su propia suciedad —barro, polvo orgánico— que se acumula de forma diferente. Trabajamos con el producto correcto para cada material.',
    queEsH2: '¿Qué es diferente en la limpieza a fondo de una casa rural de {barrio}?',
    queEsContent: 'La principal diferencia está en los materiales y el tipo de suciedad. La piedra natural y la baldosa de barro son porosas: absorben los ácidos de los productos de limpieza estándar y se dañan. La madera de suelos y vigas necesita mínima humedad. La chimenea activa genera hollín en superficies próximas que requiere tratamiento específico. Y la suciedad que entra del campo —barro, polvo orgánico— se distribuye por todas las estancias de forma diferente a la suciedad urbana.',
    queIncluyeH2: 'Qué incluye la limpieza a fondo en una casa rural de {barrio}',
    queIncluyeItems: [
      'Suelos de piedra o baldosa de barro: fregado con producto neutro pH 7 sin ácidos',
      'Suelos de madera o tarima: mopa casi seca con producto específico para madera',
      'Chimenea: hogar exterior, cenicero, zona con hollín y superficies próximas',
      'Techos con vigas: cepillo extensible para polvo, hollín y telarañas en recovecos',
      'Cocina: interior de armarios, campana, fogones, encimera y electrodomésticos',
      'Baños: desinfección completa con antifúngico en zonas de humedad',
      'Marcos de madera: verdín y humedad con producto antifúngico ecológico',
    ],
    cuandoH2: '¿Cuándo tiene más sentido una limpieza a fondo en {barrio}?',
    cuandoItems: [
      'Final de invierno: después de la temporada con chimenea activa',
      'Apertura de temporada: si la casa ha estado cerrada meses',
      'Antes de alquilarla o recibirla: turismo rural o visitas familiares',
      'Cuando el hollín y el polvo de campo han superado el mantenimiento habitual',
      'Mudanza: para entrar o salir con la casa completamente limpia',
    ],
    precioItems: [
      'Casa rural hasta 100 m²: desde 170-230€',
      'Casa rural 100-160 m²: desde 230-310€',
      'Tratamiento de suelos de piedra, barro y madera: incluido',
      'Zona de chimenea y vigas: incluidas',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo lleva la limpieza a fondo de una casa rural en {barrio}?',
        a: 'Para una casa de 80-100 m² con materiales tradicionales, entre 5 y 8 horas con dos personas. Los materiales específicos y los techos con vigas requieren más tiempo que un piso estándar. Lo indicamos en el presupuesto.',
      },
      {
        q: '¿Podéis limpiar suelos de barro cocido sin que pierdan color en {barrio}?',
        a: 'Sí, con producto neutro pH 7. El barro cocido sin barnizar es muy poroso y se daña con ácidos. Si el suelo lleva mucho tiempo sin limpieza a fondo, puede necesitar un tratamiento de sellado posterior que presupuestamos aparte.',
      },
    ],
  },

  'industrial': {
    h1Qualifier: 'zona polígono · gran limpieza con desengrase de partículas industriales',
    metaDesc: 'Limpieza a fondo en {barrio}: desengrase de capa industrial en alféizares, cocina y encimeras. Limpieza integral de pisos en zona de polígono.',
    intro: 'La limpieza a fondo de un piso en {barrio}, en el entorno del polígono industrial, tiene un reto extra: la capa de partículas grasas procedentes de la actividad industrial y el tráfico pesado que se deposita en alféizares, encimeras y superficies próximas a ventanas. Esta capa requiere una fase de desengrase antes de cualquier limpieza a fondo efectiva. Sin ese paso previo, el producto habitual redistribuye las partículas grasas en lugar de eliminarlas.',
    queEsH2: '¿Qué tiene de diferente la limpieza a fondo en un piso de {barrio}?',
    queEsContent: 'Además de la limpieza integral de todas las estancias, la limpieza a fondo en {barrio} incorpora como primer paso un desengrase específico de las superficies más expuestas a partículas industriales: alféizares, marcos de ventana, encimeras próximas a ventanas y suelos de entrada. Esta fase de desengrase es lo que determina si la limpieza a fondo resuelve realmente la suciedad característica del entorno industrial o simplemente la distribuye de otra manera.',
    queIncluyeH2: 'Qué incluye la limpieza a fondo en {barrio}',
    queIncluyeItems: [
      'Alféizares y marcos: desengrase previo de partículas industriales, limpieza completa',
      'Encimeras y superficies horizontales: desengrase antes del limpiahogar habitual',
      'Cocina a fondo: campana, interior y exterior de armarios, electrodomésticos y suelo con desengrase',
      'Baños: limpieza completa con antical en griferías, sanitarios, mampara y suelo',
      'Dormitorios: interior de armarios, debajo de camas, ventanas y suelo',
      'Salón: detrás de muebles, encimeras, ventanas y suelo',
      'Terraza o balcón: suelo y barandilla con tratamiento de partículas',
    ],
    cuandoH2: '¿Cuándo conviene hacer una limpieza a fondo en un piso de {barrio}?',
    cuandoItems: [
      'Cuando el nivel de suciedad industrial supera lo que la periódica resuelve',
      'Mudanza entrante: el piso queda limpio de la capa de partículas para empezar bien',
      'Mudanza saliente: entregar el piso en perfectas condiciones al siguiente inquilino',
      'Cambio de temporada: antes de que la capa industrial se vuelva crónica',
      'Primera vez con empresa: para establecer la base antes de empezar con periódica',
    ],
    precioItems: [
      'Piso 1-2 habitaciones (45-65 m²): desde 130-175€',
      'Piso 3 habitaciones (65-90 m²): desde 175-240€',
      'Desengrasante Ecolabel de alta eficacia: incluido sin suplemento',
      'Presupuesto cerrado en 24h: sin sorpresas',
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo dura una limpieza a fondo en un piso de {barrio}?',
        a: 'El desengrase previo añade 30-45 minutos a la limpieza a fondo estándar. Para un piso de 70-80 m² en {barrio}, calcular entre 4,5 y 6,5 horas con un equipo de dos personas.',
      },
      {
        q: '¿Cómo sé si mi piso de {barrio} necesita limpieza a fondo o solo limpieza periódica?',
        a: 'Si al pasar el dedo por el alféizar queda una capa grasienta oscura, si la campana tiene grasa visible acumulada, o si la cocina ya no recupera el estado de limpieza con una visita de mantenimiento, necesitas una limpieza a fondo primero.',
      },
    ],
  },
};

export function getContenidoAfondo(
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoAfondo | null {
  const raw = AFONDO_POR_ARQUETIPO[archetype];
  if (!raw) return null;
  return {
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDesc: t(raw.metaDesc, barrioNombre, municipioNombre),
    intro: t(raw.intro, barrioNombre, municipioNombre),
    queEsH2: t(raw.queEsH2, barrioNombre, municipioNombre),
    queEsContent: t(raw.queEsContent, barrioNombre, municipioNombre),
    queIncluyeH2: t(raw.queIncluyeH2, barrioNombre, municipioNombre),
    queIncluyeItems: raw.queIncluyeItems.map(s => t(s, barrioNombre, municipioNombre)),
    cuandoH2: t(raw.cuandoH2, barrioNombre, municipioNombre),
    cuandoItems: raw.cuandoItems.map(s => t(s, barrioNombre, municipioNombre)),
    precioItems: raw.precioItems.map(s => t(s, barrioNombre, municipioNombre)),
    faqs: raw.faqs.map(f => ({ q: t(f.q, barrioNombre, municipioNombre), a: t(f.a, barrioNombre, municipioNombre) })),
  };
}

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
    tituloPagina: t(raw.tituloPagina, barrioNombre, municipioNombre),
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
