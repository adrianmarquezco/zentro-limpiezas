import type { BarrioArchetype } from './municipios';

export type ContenidoArquetipo = {
  tituloPagina: string;
  h1Qualifier: string;
  metaDescAngle: string;
  speakableIntro: string | string[];
  problemaH2: string;
  problemaContent: string | string[];
  ventanasH2: string;
  ventanasContent: string | string[];
  faqs: { q: string; a: string }[];
};

function t(template: string, barrio: string, municipio: string): string {
  return template.replace(/\{barrio\}/g, barrio).replace(/\{municipio\}/g, municipio);
}

// Selecciona una variante de forma determinista según barrio+municipio, para que
// dos barrios con el mismo arquetipo no muestren siempre el mismo texto,
// pero cada barrio muestre siempre la misma variante (estable entre despliegues).
function pickVariant<T>(value: T | T[], barrio: string, municipio: string): T {
  if (!Array.isArray(value)) return value;
  const seed = `${municipio}-${barrio}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return value[hash % value.length];
}

function tVariant(value: string | string[], barrio: string, municipio: string): string {
  return t(pickVariant(value, barrio, municipio), barrio, municipio);
}

const CRISTALES_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoArquetipo> = {
  'bloque-obrero': {
    tituloPagina: 'Limpiar ventanas de bloque en {barrio}: cal acumulada',
    h1Qualifier: 'pisos de bloque · cal acumulada',
    metaDescAngle: 'Eliminamos la cal incrustada en ventanas de bloques de los años 70-80 con quitacal de pH ácido certificado Ecolabel. Sin rayas.',
    speakableIntro: [
      'Los pisos de bloque de {barrio} son en su mayoría viviendas de los años 70-80 con ventanas de carpintería de aluminio de época. El agua de Ferrol tiene un contenido alto de cal, y en décadas de uso sin limpieza profesional esa cal se deposita en capas sobre el vidrio hasta formar una película blanca opaca que el limpiacristales convencional no elimina. En Zentro Limpiezas usamos quitacales de pH ácido certificado Ecolabel que disuelven el depósito sin atacar el aluminio ni el vidrio.',
      'Si vives en un piso de bloque en {barrio} y notas que los cristales tienen una especie de velo blanco que no desaparece por mucho que frotes, no es suciedad: es cal incrustada. Es habitual en construcciones de los años 70-80 con carpintería de aluminio, donde décadas de agua calcárea sin tratamiento profesional han ido formando una capa mineral sobre el vidrio. El limpiacristales normal no la disuelve; hace falta un quitacal de pH ácido certificado Ecolabel, que es lo que usamos en cada visita.',
      'En {barrio}, como en la mayoría de barrios de bloques de {municipio}, el problema de los cristales casi nunca es la suciedad del día a día, sino la cal acumulada durante años. El agua de la zona es dura, y en pisos de los años 70-80 con ventanas de aluminio de época, esa cal termina formando una película opaca imposible de retirar con un limpiacristales convencional. Nuestro tratamiento con quitacal de pH ácido certificado Ecolabel resuelve el problema de raíz sin dañar el marco.',
    ],
    problemaH2: '¿Por qué los cristales de los pisos de {barrio} acumulan tanta cal?',
    problemaContent: [
      'El agua calcárea de Ferrol deja un depósito mineral en cada limpieza doméstica que, con los años, forma una capa blanca incrustada en el vidrio. Los bloques de {barrio}, con décadas de antigüedad y carpintería de aluminio de época, concentran este problema más que las viviendas modernas. Un quitacal de pH ácido controlado disuelve el depósito sin dañar el aluminio; sin él, el frotado solo redistribuye la cal sin eliminarla.',
      'Cada vez que se limpia un cristal con agua del grifo sin tratar, queda un residuo mineral microscópico. Un par de veces no se nota, pero repetido durante 40 o 50 años —la antigüedad habitual de los bloques de {barrio}— ese residuo se convierte en una capa incrustada que ya no es suciedad superficial, sino un depósito adherido al propio vidrio. Frotar con un paño normal no hace más que mover esa capa de un lado a otro; solo un quitacal de pH ácido controlado la disuelve de verdad.',
      'La carpintería de aluminio de los pisos de {barrio}, típica de construcciones de los años 70-80, tiene un problema añadido frente a la de PVC moderno: el propio metal reacciona peor a los productos ácidos agresivos, así que no vale cualquier quitacal. El que usamos en Zentro Limpiezas está formulado con pH ácido controlado, lo bastante eficaz para disolver la cal acumulada durante décadas pero seguro para el marco. Es la combinación que marca la diferencia entre un cristal limpio y uno que vuelve a mancharse a las pocas semanas.',
    ],
    ventanasH2: 'Limpieza de ventanas y mamparas en pisos de bloque de {barrio}',
    ventanasContent: [
      'Las mamparas de ducha de los pisos de bloque de {barrio} acumulan sarro por las mismas razones que los cristales exteriores: agua con alta concentración de cal. En una misma visita limpiamos todas las ventanas y la mampara del baño con el mismo tratamiento de ácido cítrico certificado, sin coste adicional. Resultado sin rayas y sin residuos de producto gracias al secado con escurridor de goma profesional.',
      'No solo las ventanas de {barrio} sufren la cal del agua: las mamparas de ducha tienen exactamente el mismo problema, por el mismo motivo. Por eso en cada visita incluimos ambas cosas con el mismo tratamiento de ácido cítrico certificado, sin recargo. El acabado final, tanto en ventanas como en mampara, se hace siempre con escurridor de goma profesional para que no quede ni una marca de agua.',
      'Si en tu piso de {barrio} las ventanas tienen cal, es muy probable que la mampara del baño también la tenga —es el mismo agua, el mismo problema—. Aprovechamos la visita para tratar las dos superficies con ácido cítrico certificado sin coste extra, y terminamos siempre con escurridor de goma profesional, la única forma de garantizar un secado sin rayas ni restos de producto.',
    ],
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
    speakableIntro: [
      '{barrio} concentra algunos de los edificios más antiguos de {municipio}, con pisos en construcciones del siglo XVIII-XIX. Sus ventanas tienen carpintería de madera, vidrio antiguo y marcos que absorben la humedad con el tiempo. Limpiar estos cristales bien requiere productos que no ataquen la madera ni degraden el vidrio antiguo. Los productos Ecolabel de pH neutro que usamos en Zentro Limpiezas son especialmente apropiados para estas superficies delicadas, donde un quitacal agresivo podría dañar el acabado del marco.',
      'Limpiar los cristales de un piso en {barrio} no es como limpiar los de una vivienda moderna: aquí hablamos de edificios del siglo XVIII-XIX, con carpintería de madera original y vidrio de época que absorbe la humedad con el tiempo. Un producto agresivo puede dejar el vidrio limpio pero dañar el marco de forma irreversible. Por eso usamos siempre productos Ecolabel de pH neutro, pensados para no atacar ni la madera ni el acabado antiguo.',
      '{municipio} conserva en {barrio} algunos de sus edificios más antiguos, y eso se nota en el tipo de ventana: carpintería de madera, vidrio de época y marcos que llevan décadas absorbiendo humedad. Es un tipo de superficie que exige cuidado, no fuerza. Trabajamos con productos Ecolabel de pH neutro que limpian el vidrio en profundidad sin poner en riesgo el marco original, algo que un quitacal convencional sí podría hacer.',
    ],
    problemaH2: '¿Cómo se limpian los cristales de carpintería histórica de {barrio} sin dañar la madera?',
    problemaContent: [
      'La diferencia clave con los cristales modernos está en el marco. La madera de las ventanas históricas de {barrio} absorbe los productos líquidos si se aplican sin control. La técnica correcta es aplicar el limpiacristales solo sobre el vidrio con paño de microfibra bien escurrido y secar de inmediato. Nunca spray directo cerca del marco de madera. Las manchas incrustadas se eliminan con rasqueta de goma sin riesgo para el vidrio de época.',
      'El riesgo real al limpiar ventanas antiguas en {barrio} no está en el vidrio, sino en el marco: la madera absorbe cualquier líquido que se aplique sin control, y con el tiempo eso deteriora el acabado. Por eso nunca usamos spray directo cerca del marco: aplicamos el limpiacristales sobre un paño de microfibra bien escurrido y secamos de inmediato. Para manchas más incrustadas, la rasqueta de goma hace el trabajo sin poner en riesgo el vidrio de época.',
      'Muchas ventanas de {barrio} llevan más de un siglo en el mismo sitio, y eso significa marcos de madera que ya han absorbido humedad de sobra. Aplicar un producto líquido sin control ahí es un error que se paga con el tiempo. La técnica que usamos es sencilla pero exige disciplina: producto solo sobre el vidrio, aplicado con paño de microfibra escurrido, secado inmediato y nada de spray cerca del marco. Así se limpia sin acelerar el deterioro.',
    ],
    ventanasH2: 'Limpieza de ventanas de guillotina y vidrios planos en {barrio}',
    ventanasContent: [
      'Muchos pisos de {barrio} tienen ventanas de guillotina (que suben y bajan verticalmente) o contraventanas de madera. Estas carpinterías acumulan polvo, suciedad y verdín en ranuras y recovecos. La limpieza requiere cepillos finos para los carriles, atención especial al sellado entre vidrio y marco, y productos ecológicos que no manchen la madera. Lo hacemos con el mismo tiempo de dedicación que una ventana moderna lleva el doble: el resultado se nota.',
      'Las ventanas de guillotina, muy habituales en los pisos antiguos de {barrio}, tienen un problema que no existe en la carpintería moderna: los carriles verticales por donde suben y bajan acumulan polvo y suciedad que una limpieza rápida no llega a tocar. Usamos cepillos finos específicos para esos carriles y prestamos atención especial al sellado entre vidrio y marco, siempre con productos que no manchen la madera. Lleva el doble de tiempo que una ventana estándar, pero se nota en el resultado.',
      'Si tu vivienda en {barrio} conserva ventanas de guillotina o contraventanas de madera originales, ya sabrás que no se limpian como una ventana corredera moderna: los recovecos y carriles acumulan suciedad que hay que tratar con cepillo fino, no con un paño cualquiera. Cuidamos especialmente el sellado entre vidrio y marco y usamos solo productos ecológicos que no dejen manchas en la madera. El tiempo de trabajo es mayor, pero es lo que exige este tipo de carpintería.',
    ],
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
    speakableIntro: [
      '{barrio} es uno de los barrios más expuestos a la brisa marina de {municipio}. La salinidad del ambiente deposita salitre sobre los cristales formando una película blanca nacarada que el limpiacristales convencional apenas toca. El salitre no es cal: es una mezcla de sales minerales con cristales microscópicos que pueden crear micro-rayaduras si se frota en seco. En Zentro Limpiezas usamos neutralizadores de sales marinas certificados que disuelven el depósito sin residuos.',
      'Si en {barrio} tienes la sensación de que los cristales nunca están del todo limpios por mucho que los frotes, el motivo es la brisa marina: deposita salitre de forma constante, y el salitre no se comporta como la cal. Es una mezcla de sales minerales con cristales microscópicos que, si se frotan en seco, pueden dejar micro-rayaduras en el vidrio. La solución no es frotar más fuerte, sino usar neutralizadores de sales marinas certificados, que es justo lo que aplicamos en cada visita.',
      'La cercanía al mar tiene su precio para las ventanas de {barrio}: una película blanca nacarada de salitre que el limpiacristales normal apenas consigue tocar. A diferencia de la cal, el salitre está formado por cristales de sal microscópicos que pueden rayar el vidrio si se frota en seco, así que la técnica importa tanto como el producto. Trabajamos con neutralizadores de sales marinas certificados que disuelven el depósito de forma segura, sin dejar residuo ni marcas.',
    ],
    problemaH2: '¿Qué hace el salitre marino a los cristales de las casas de {barrio}?',
    problemaContent: [
      'El salitre de la brisa marina se deposita en capas finas pero continuas. A diferencia de la cal del agua, el salitre tiene cristales de sal que crean micro-rayaduras si se frota en seco. Con el tiempo forma una capa blanca nacarada que reduce la transparencia del vidrio y puede volverse permanente. La frecuencia de limpieza en zonas costeras como {barrio} debe ser mayor que en el interior: cada 4-6 semanas en lugar de cada 3-4 meses.',
      'A diferencia de la cal, que se deposita cada vez que se limpia con agua sin tratar, el salitre llega directamente del aire: se posa en capas finas pero constantes, día tras día, incluso sin que llueva ni se limpie nada. Con el tiempo esa acumulación reduce la transparencia del cristal y, si no se trata, puede volverse casi permanente. Por eso en zonas como {barrio}, mucho más expuestas que el interior, recomendamos limpiar cada 4-6 semanas en vez de cada 3-4 meses.',
      'Lo que hace especialmente difícil el salitre en {barrio} no es solo que se deposite rápido, sino que sus cristales de sal son abrasivos: frotar en seco, el gesto más natural para quitar una mancha, es precisamente lo que puede rayar el vidrio. Con el tiempo la capa se vuelve nacarada y opaca, y cuanto más tiempo pasa, más difícil es de retirar sin dañar la superficie. En zonas costeras como esta, limpiar cada 4-6 semanas evita que el problema llegue a ese punto.',
    ],
    ventanasH2: 'Limpieza de ventanas y marcos en casas de {barrio} expuestas al mar',
    ventanasContent: [
      'En {barrio}, los marcos de aluminio también sufren el ambiente salino: el salitre actúa como acelerador de la corrosión. Una limpieza regular con productos sin ácidos agresivos que atacen el aluminio alarga considerablemente la vida de las ventanas. El servicio incluye cristales, marcos y cualquier mampara o ventana interior que acumule humedad por el ambiente costero.',
      'El salitre no se queda solo en el cristal: en {barrio}, los marcos de aluminio también lo notan, porque el ambiente salino acelera la corrosión del metal. Una limpieza regular con productos que no lleven ácidos agresivos protege el marco además del vidrio y alarga bastante la vida útil de la ventana. Incluimos en la misma visita cristales, marcos y cualquier mampara o ventana interior afectada por la humedad del ambiente costero.',
      'Vivir cerca del mar en {barrio} tiene ventajas evidentes, pero también un coste de mantenimiento que no siempre se tiene en cuenta: el salitre corroe el aluminio de los marcos igual que ensucia el cristal. Con una limpieza regular y productos sin ácidos agresivos evitamos acelerar ese desgaste. Aprovechamos siempre la visita para revisar también mamparas y ventanas interiores que puedan estar acumulando humedad por el propio ambiente costero.',
    ],
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
    speakableIntro: [
      'En {barrio}, una parte significativa de las viviendas son segunda residencia: casas que pasan meses cerradas y se abren en verano o Navidades. Durante ese tiempo los cristales acumulan polvo, manchas de condensación y, en marcos exteriores, verdín por la humedad del invierno gallego. La limpieza de apertura de temporada es uno de los servicios más demandados en esta zona: dejamos la vivienda a punto antes de que llegues, con todos los cristales y ventanas sin rayas.',
      'Si tu casa en {barrio} pasa la mayor parte del año cerrada y solo la usas en verano o en Navidades, ya sabrás lo que te encuentras al llegar: cristales con polvo acumulado, manchas de condensación y, muchas veces, verdín en los marcos por la humedad del invierno gallego. Es de los servicios que más pedimos en esta zona en concreto: dejar la vivienda lista con todos los cristales sin rayas antes de que llegues, sin que tengas que ocuparte de nada.',
      '{barrio} tiene un perfil muy característico: una parte importante de las viviendas son de uso estacional, cerradas buena parte del año. Meses sin ventilación ni limpieza pasan factura a los cristales —polvo, condensación, verdín en los marcos exteriores— y eso es exactamente lo que resolvemos con la limpieza de apertura de temporada, uno de los servicios que más solicitan aquí. La vivienda queda lista, con las ventanas sin rayas, antes de que pongas un pie dentro.',
    ],
    problemaH2: '¿Qué le ocurre a los cristales de una casa de {barrio} que lleva meses cerrada?',
    problemaContent: [
      'El invierno gallego es húmedo y hay poca ventilación en una casa cerrada. La condensación se deposita en los cristales y al secarse deja manchas de agua y polvo incrustado. En marcos exteriores, la humedad favorece el crecimiento de verdín. Si la casa tiene vistas al campo o a la ría, el polvo orgánico también se deposita sobre el vidrio. En la limpieza de apertura tratamos cada uno de estos problemas de forma específica.',
      'Una casa cerrada durante meses en invierno acumula un tipo de suciedad distinto al de una vivienda habitada: sin ventilación, la humedad se condensa en los cristales y, al secarse sola, deja manchas de agua mezcladas con polvo. En los marcos exteriores esa misma humedad favorece la aparición de verdín. Si además la vivienda tiene vistas al campo o a la ría, como suele pasar en {barrio}, el polvo orgánico del entorno se suma al problema. Tratamos cada uno de estos frentes por separado en la limpieza de apertura.',
      'El problema de una vivienda cerrada en {barrio} no es solo el polvo que se acumula sin nadie que limpie, sino la humedad propia del invierno gallego, que se condensa en el cristal sin ventilación y deja manchas de agua difíciles de quitar con un paño normal. Los marcos exteriores, expuestos a esa misma humedad, suelen tener además verdín. En la limpieza de apertura no tratamos todo por igual: cada uno de estos problemas necesita su propio proceso.',
    ],
    ventanasH2: 'Servicio de limpieza de ventanas para apertura de casa en {barrio}',
    ventanasContent: [
      'El servicio de apertura en {barrio} incluye: todos los cristales interior y exterior accesible desde el suelo, tratamiento del verdín en marcos con antifúngico ecológico, eliminación de manchas de agua y condensación, y revisión de mamparas de ducha si las hay. Muchos clientes nos dejan la llave y entramos solos: cuando llegues, la casa está lista desde el primer momento.',
      'Para una vivienda de segunda residencia en {barrio}, el servicio de apertura cubre todos los cristales —interior y exterior accesible desde el suelo—, el tratamiento del verdín en los marcos con antifúngico ecológico y la eliminación de manchas de agua y condensación acumuladas durante los meses cerrada. Si hay mampara de ducha, la revisamos también. Muchos propietarios nos dejan la llave y nos encargamos sin que tengan que estar presentes: al llegar, la casa ya está lista.',
      'No hace falta que estés presente para la limpieza de apertura de tu casa en {barrio}: muchos clientes nos dejan la llave y nosotros nos ocupamos de todo. El servicio incluye cristales interior y exterior, tratamiento antifúngico ecológico del verdín en marcos, y eliminación de las manchas de agua y condensación típicas de una vivienda cerrada varios meses. Si hay mampara, también entra en la visita. Cuando llegues, todo está listo desde el primer momento.',
    ],
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
    speakableIntro: [
      'Los chalés y adosados de {barrio} tienen más superficie de cristal que un piso de bloque: ventanales grandes en salón, cristaleras de terraza, ventanas de planta alta y, en muchos casos, lucernarios. El jardín y la vegetación aportan barro en los días de lluvia y polvo orgánico en verano. En Zentro Limpiezas trabajamos con pértigas telescópicas que alcanzan primera y segunda planta desde el exterior sin escalera. Todos los cristales accesibles en una sola visita.',
      'Un chalé o adosado en {barrio} tiene, de media, mucha más superficie de cristal que un piso de bloque: ventanales de salón, cristaleras de terraza, ventanas de planta alta y a veces lucernarios. A eso se suma el jardín, que aporta barro los días de lluvia y polvo orgánico en verano. Para cubrirlo todo sin poner en riesgo a nadie, trabajamos con pértigas telescópicas que llegan a primera y segunda planta desde el exterior, sin necesidad de escalera.',
      'Vivir en un chalé de {barrio} significa, entre otras cosas, más cristal que limpiar: ventanales grandes, cristaleras de terraza, ventanas en altura y, en muchos casos, algún lucernario. El jardín tampoco ayuda —barro en invierno, polvo orgánico en verano—. Resolvemos toda la superficie accesible en una sola visita, usando pértigas telescópicas para llegar a primera y segunda planta desde fuera, sin necesidad de subir a ningún sitio.',
    ],
    problemaH2: '¿Cómo se limpian los cristales de la segunda planta en los chalés de {barrio}?',
    problemaContent: [
      'Para ventanas de primera y segunda planta en chalés de {barrio}, trabajamos con pértigas telescópicas de hasta 6 metros con cabezal de rasqueta. Desde el exterior, sin escalera y sin riesgo. Para ventanas de tercera planta o superiores se evalúa el acceso en cada caso. La mayoría de chalés de {barrio} tienen 2 plantas, lo que cubre perfectamente la pértiga estándar sin necesidad de equipos adicionales.',
      'La pregunta que más nos hacen en chalés de {barrio} es cómo se limpia una ventana de segunda planta sin subirse a nada. La respuesta es la pértiga telescópica: llegamos hasta 6 metros de altura con cabezal de rasqueta, trabajando siempre desde el exterior y desde el suelo. Como la mayoría de chalés de la zona tienen dos plantas, la pértiga estándar cubre perfectamente todas las ventanas sin necesidad de equipos adicionales ni de acceder al interior en altura.',
      'En un chalé de dos plantas, que es lo habitual en {barrio}, limpiar las ventanas de la planta superior sin arriesgarse es el principal reto. Lo resolvemos con pértigas telescópicas de hasta 6 metros con cabezal de rasqueta, trabajando siempre desde el exterior sin necesidad de escalera. Si el chalé tiene una tercera planta o zonas de acceso más complicado, lo valoramos in situ antes de dar el presupuesto final.',
    ],
    ventanasH2: 'Limpieza de ventanales de salón y cristaleras de terraza en {barrio}',
    ventanasContent: [
      'Los ventanales grandes de los salones de chalés en {barrio} son la superficie que más se nota cuando está sucia y que más impacto visual tiene cuando está limpia. Para grandes formatos usamos el sistema profesional de mopa y rasqueta: extiende el producto en toda la superficie de una pasada y elimina el agua limpiamente sin marcas. El resultado es visiblemente diferente al de los cristales pequeños trabajados con spray y microfibra.',
      'En los chalés de {barrio}, el ventanal grande del salón es la superficie que más se nota, para bien o para mal: cuando está sucio se ve desde cualquier ángulo, y cuando está limpio, también. Para ese tipo de formato usamos mopa y rasqueta en vez de spray y microfibra —el sistema profesional que extiende el producto de una pasada y retira el agua sin dejar marcas—. El resultado se nota especialmente en superficies grandes.',
      'No todos los cristales se limpian igual, y los ventanales grandes de los chalés de {barrio} son un buen ejemplo: con spray y microfibra, como se limpia una ventana pequeña, el resultado nunca queda igual de uniforme. Usamos mopa y rasqueta, el sistema que emplean los profesionales para grandes superficies, que reparte el producto de una sola pasada y retira el agua sin dejar marcas ni vetas visibles a la luz.',
    ],
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
    speakableIntro: [
      'Las casas rurales de {barrio} son en su mayoría viviendas de piedra o construcción tradicional gallega, con marcos de madera o carpintería más antigua. El invierno húmedo de Ferrolterra, con lluvias frecuentes y poca luz directa, favorece el crecimiento de verdín y musgo en marcos exteriores y, en algunos casos, en la parte inferior del propio vidrio. Además, el polvo orgánico del entorno —prados, árboles, huertos— se deposita sobre los cristales con cada brisa. En Zentro Limpiezas limpiamos vidrio y marcos con antifúngico ecológico que no daña la madera.',
      'En {barrio}, como en buena parte del entorno rural de {municipio}, predominan las casas de piedra con carpintería de madera tradicional. El invierno húmedo, con pocas horas de luz directa, es el escenario perfecto para que aparezca verdín y musgo en los marcos exteriores —a veces incluso en la parte baja del propio cristal—. A eso se suma el polvo orgánico de prados y huertos cercanos. Tratamos vidrio y marco con antifúngico ecológico que respeta la madera.',
      'Las viviendas de {barrio} tienen un rasgo común: construcción tradicional gallega, piedra y marcos de madera que llevan años expuestos a un clima húmedo con poca luz directa. Esa combinación es la que hace aparecer verdín y musgo en los marcos, y en ocasiones en la parte inferior del cristal. El entorno rural —prados, árboles, huertos cercanos— añade además polvo orgánico constante. Nuestro tratamiento combina limpieza de vidrio y antifúngico ecológico específico para no dañar la madera.',
    ],
    problemaH2: '¿Por qué aparece verdín en los marcos de las ventanas de las casas de {barrio}?',
    problemaContent: [
      'El verdín en marcos exteriores de {barrio} es consecuencia directa de la combinación de humedad, sombra y material orgánico. La madera de las casas rurales retiene la humedad y en zonas con poco sol directo las algas y el musgo encuentran las condiciones ideales. No es un problema de suciedad sino biológico. Se elimina con biocida ecológico y se previene con una limpieza periódica que no deje humedad acumulada en las ranuras del marco.',
      'Es importante entender que el verdín de los marcos en {barrio} no es suciedad en el sentido habitual: es un problema biológico, no de higiene. La combinación de madera que retiene humedad, poca exposición directa al sol y material orgánico alrededor crea las condiciones ideales para que crezcan algas y musgo. Por eso frotar no basta —hace falta un biocida ecológico que elimine el problema de raíz, y una limpieza periódica que evite que vuelva a acumularse humedad en las ranuras.',
      'Si en tu casa de {barrio} el verdín reaparece por mucho que limpies el cristal, es porque el origen no está ahí: está en el marco, donde la madera retiene humedad y la falta de sol directo favorece el crecimiento de algas y musgo. No es un problema que se resuelva con más frotado, sino con un biocida ecológico específico, seguido de una limpieza periódica que evite que la humedad vuelva a acumularse en las ranuras.',
    ],
    ventanasH2: 'Limpieza de ventanas en casas de piedra de {barrio}: cuidados específicos',
    ventanasContent: [
      'Las ventanas de las casas de piedra de {barrio} tienen particularidades que no existen en pisos de bloque: el contorno de piedra puede acumular agua, los marcos de madera tienen más superficie expuesta, y algunos vidrios son más delgados que los modernos. Usamos productos de pH neutro o ligeramente ácido para el vidrio y antifúngico específico en base acuosa para los marcos de madera, sin dañarlos. El secado cuidadoso con microfibra evita la condensación que vuelve a generar verdín.',
      'Limpiar una ventana en una casa de piedra de {barrio} no es lo mismo que limpiar la de un piso moderno: el contorno de piedra retiene agua, el marco de madera tiene mucha más superficie expuesta y, en muchos casos, el vidrio es más fino que el actual. Por eso usamos productos de pH neutro o ligeramente ácido para el cristal, y un antifúngico en base acuosa específico para la madera. El secado con microfibra es clave: mal secada, la humedad vuelve a generar verdín en poco tiempo.',
      'Las casas de piedra de {barrio} tienen ventanas que requieren un trato distinto al de cualquier vivienda moderna: contornos que retienen agua, marcos de madera con mucha superficie expuesta y vidrios a menudo más delgados. Adaptamos el producto según la superficie —pH neutro o ligeramente ácido para el vidrio, antifúngico en base acuosa para la madera— y cuidamos especialmente el secado final con microfibra, porque un secado descuidado es la causa más habitual de que el verdín vuelva a aparecer.',
    ],
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
    metaDescAngle: 'Limpieza de cristales con desengrasantes Ecolabel de alta eficacia: eliminamos la capa de polvo industrial y grasa ambiental de viviendas y locales.',
    speakableIntro: [
      '{barrio} concentra buena parte de la actividad comercial e industrial de {municipio}, con polígonos, tráfico pesado y actividad logística que genera partículas mucho más abrasivas que el polvo doméstico. Los cristales de viviendas y locales de {barrio} acumulan una capa de polvo fino mezclado con grasa ambiental y partículas de combustión que se adhiere al vidrio con más fuerza que la suciedad convencional. En Zentro Limpiezas usamos desengrasantes Ecolabel de alta eficacia que disuelven esta capa sin necesidad de frotar fuerte.',
      'Si tienes una vivienda o un local en {barrio}, ya sabrás que los cristales se ensucian de una forma distinta a la de una zona residencial normal: la actividad comercial e industrial de la zona, con polígonos y tráfico pesado, genera partículas mucho más abrasivas que el polvo doméstico habitual. Esa mezcla de polvo fino y grasa ambiental se adhiere al vidrio con fuerza. Usamos desengrasantes Ecolabel de alta eficacia que disuelven esa capa sin necesidad de frotar con fuerza.',
      'La actividad industrial y comercial de {barrio}, con tráfico pesado y actividad logística constante, deja en el aire un tipo de partícula que no se ve en zonas residenciales tranquilas: más abrasiva, mezclada con grasa ambiental y combustión. Sobre el cristal, esa combinación forma una capa que un limpiacristales convencional no consigue disolver. Nuestro tratamiento con desengrasantes Ecolabel de alta eficacia está pensado exactamente para este tipo de suciedad.',
    ],
    problemaH2: '¿Por qué los cristales de {barrio} se ensucian más rápido que en otras zonas de {municipio}?',
    problemaContent: [
      'La cercanía a polígonos industriales y al tráfico pesado hace que el aire de {barrio} tenga mayor concentración de partículas en suspensión: polvo de caucho de neumáticos, partículas de combustión diésel, polvo de materiales de construcción. Estas partículas forman sobre el vidrio una película grasienta que no sale con limpiacristales convencional. Requiere un desengrasante previo que disuelva la grasa y luego el limpiacristales para el acabado sin rayas.',
      'El aire de {barrio} tiene una composición distinta a la de una zona puramente residencial: más partículas en suspensión por la cercanía a la actividad industrial y al tráfico pesado —caucho de neumáticos, combustión diésel, polvo de obra—. Sobre el vidrio, todo eso forma una película grasienta que el limpiacristales convencional simplemente no puede disolver. El proceso correcto tiene dos fases: primero un desengrasante que rompa esa grasa, después el limpiacristales para el acabado final sin rayas.',
      'No es casualidad que los cristales de {barrio} necesiten un tratamiento distinto al de una zona residencial tranquila: la cercanía a la actividad industrial y al tráfico pesado deja en el aire partículas más abrasivas y grasientas —caucho, combustión, polvo de construcción— que se adhieren al vidrio con fuerza. Un limpiacristales normal no las disuelve, solo las redistribuye. Por eso empezamos siempre con un desengrasante específico antes de pasar al acabado final.',
    ],
    ventanasH2: 'Limpieza de ventanas y escaparates para locales de {barrio}',
    ventanasContent: [
      'En {barrio} hay muchos locales comerciales y oficinas cuyas ventanas miran a la calle o al polígono. La imagen de un local con cristales sucios es la primera impresión que ve el cliente. El servicio de limpieza de cristales para locales en {barrio} incluye escaparates, ventanales de oficina y particiones interiores. Podemos trabajar en horario nocturno o de madrugada para no interrumpir la actividad comercial.',
      'Para los locales comerciales y oficinas de {barrio}, el estado del escaparate es la primera impresión que se lleva cualquier cliente antes de entrar. Nuestro servicio de limpieza de cristales aquí cubre escaparates, ventanales de oficina y particiones interiores, y podemos trabajar en horario nocturno o de madrugada para no interferir con la actividad del negocio durante el día.',
      'Un escaparate sucio en {barrio} transmite lo contrario de lo que cualquier negocio busca: descuido, en vez de profesionalidad. Cubrimos la limpieza de cristales de locales y oficinas de la zona —escaparates, ventanales, particiones interiores— con la posibilidad de trabajar de madrugada o en horario nocturno, para que la limpieza no interfiera nunca con tu actividad comercial.',
    ],
    faqs: [
      {
        q: '¿Hay que usar productos especiales para limpiar los cristales de locales en zonas industriales como {barrio}?',
        a: 'Sí. El polvo industrial tiene componentes grasos que el limpiacristales estándar no disuelve completamente. Aplicamos una fase de desengrase con producto neutro certificado Ecolabel antes del limpiacristales final. El resultado es visiblemente mejor, especialmente en cristales de escaparate que son la imagen del negocio.',
      },
      {
        q: '¿Cuánto tarda en volver a ensuciarse un cristal en {barrio} después de la limpieza?',
        a: 'En zonas con actividad industrial como esta, los cristales exteriores de locales se ensucian visiblemente en 3-6 semanas. Para viviendas, algo más: entre 4-8 semanas según la orientación. Lo que sí cambia con la limpieza profesional es el tipo de suciedad: una vez retirada la capa de grasa, las siguientes suciedades son más superficiales y más fáciles de eliminar.',
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
  intro: string | string[];
  particularH2: string;
  particularContent: string | string[];
  habitacionesH2: string;
  habitacionesItems: string[];
  precioItems: string[];
  faqs: { q: string; a: string }[];
};

const VIVIENDAS_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoViviendas> = {
  'bloque-obrero': {
    h1Qualifier: 'pisos de bloque · limpieza completa habitación por habitación',
    metaDesc: 'Limpieza de vivienda en {barrio}: pisos de bloque con cocinas de grasa acumulada, baños con cal y suelos de alto tráfico. Presupuesto gratis en 24h.',
    intro: [
      'La limpieza integral de una vivienda en los bloques de {barrio} incluye todo lo que la limpieza semanal deja para después: el interior de armarios y electrodomésticos, los rodapiés, la parte trasera de muebles y las juntas de azulejo del baño. En Zentro Limpiezas trabajamos habitación por habitación con un checklist cerrado: la vivienda queda en un estado de limpieza profunda que se mantiene fácil durante semanas.',
      'En los bloques de {barrio}, la limpieza integral cubre justo lo que la semanal deja pendiente: interior de armarios y electrodomésticos, rodapiés, parte trasera de muebles y juntas de azulejo del baño. Trabajamos con un checklist cerrado habitación por habitación, así que la vivienda queda en un estado que aguanta semanas antes de necesitar otra a fondo.',
      'Una limpieza integral en un piso de bloque de {barrio} no se parece a la semanal: entra en armarios, electrodomésticos, rodapiés, la parte trasera de los muebles y las juntas del baño. Trabajamos con checklist cerrado por habitación, para que el resultado dure semanas, no días.',
    ],
    particularH2: '¿Qué tienen de especial los pisos de bloque de {barrio} para la limpieza?',
    particularContent: [
      'Los pisos de bloque de {barrio} construidos entre los años 60 y 90 acumulan capas de suciedad en sitios específicos: la cal del agua de Ferrol incrusta en las griferías y en los azulejos del baño; la grasa de cocción impregna los azulejos de la cocina y la campana tras años de uso; y los suelos de gres o vinilo de época tienen juntas oscurecidas que el fregado normal no aclara. Nuestra limpieza de vivienda atiende específicamente cada uno de estos puntos.',
      'Los pisos de bloque de {barrio}, en su mayoría de los años 60 a 90, concentran suciedad en puntos muy concretos: cal incrustada en griferías y azulejos del baño por el agua de Ferrol, grasa de cocción impregnada en azulejos y campana tras años de uso, y juntas oscurecidas en suelos de gres o vinilo de época que un fregado normal no aclara. Nuestra limpieza atiende cada uno de estos puntos por separado.',
      'En {barrio}, los pisos de bloque de décadas atrás tienen la suciedad concentrada siempre en los mismos sitios: cal en griferías y azulejos del baño, grasa acumulada en la campana y los azulejos de cocina, y juntas de suelo oscurecidas que resisten al fregado habitual. Tratamos cada uno de esos puntos de forma específica, no con un repaso general.',
    ],
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
    intro: [
      'Las viviendas en los edificios históricos de {barrio} son un reto de limpieza profesional: cada sala puede tener un tipo de suelo diferente (parquet, baldosa hidráulica, mosaico, tarima), las molduras y techos tienen relieves que acumulan polvo en capas, y los materiales envejecidos exigen productos que los cuiden en lugar de dañarlos. En Zentro Limpiezas identificamos los materiales antes de empezar y adaptamos el producto y la técnica a cada superficie.',
      'Una vivienda en un edificio histórico de {barrio} es un reto distinto: cada sala puede tener un suelo diferente —parquet, baldosa hidráulica, mosaico, tarima—, las molduras acumulan polvo en sus relieves, y los materiales de época exigen productos que los cuiden, no que los ataquen. Identificamos cada material antes de empezar y adaptamos técnica y producto a cada superficie.',
      'En {barrio}, limpiar una vivienda histórica exige identificar antes de nada qué material tiene cada sala: puede ser parquet, baldosa hidráulica, mosaico o tarima, cada uno con su propio producto. Las molduras de techo acumulan polvo en relieves que una fregona no alcanza. Adaptamos la técnica a cada superficie en vez de aplicar un protocolo único.',
    ],
    particularH2: '¿Por qué la limpieza en los pisos históricos de {barrio} es diferente?',
    particularContent: [
      'El principal reto no es la suciedad sino los materiales. La baldosa hidráulica de muchos pisos históricos de {barrio} es porosa y absorbe productos inadecuados. El parquet antiguo sin tratar no admite agua en exceso. Las molduras de escayola acumulan polvo en sus relieves que una fregona no alcanza. Y los techos altos con cornisas necesitan equipos con extensión. Evaluamos todo esto antes de empezar para garantizar que ningún material resulte dañado.',
      'El reto en un piso histórico de {barrio} no es la cantidad de suciedad sino los materiales: la baldosa hidráulica es porosa y absorbe productos inadecuados, el parquet sin tratar no admite exceso de agua, las molduras de escayola atrapan polvo que la fregona no llega a tocar, y los techos altos con cornisas necesitan equipo con extensión. Evaluamos todo esto antes de empezar para no dañar nada.',
      'En {barrio}, el desafío de un piso histórico está en los materiales, no en la cantidad de suciedad: baldosa hidráulica porosa, parquet que sufre con exceso de agua, molduras de escayola con polvo en cada relieve, y techos altos que necesitan equipo específico. Antes de tocar nada, identificamos qué hay y ajustamos producto y técnica.',
    ],
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
    intro: [
      'Las viviendas de {barrio} acumulan un tipo de suciedad muy específica del ambiente marino: manchas de condensación en paredes y techos, manchas de agua en alféizares y marcos, y en algunas orientaciones, puntos de humedad en esquinas y techos de baño. La limpieza de vivienda en {barrio} incluye el tratamiento específico de estas zonas con antifúngico preventivo y productos que eliminan las manchas de condensación sin dañar la pintura.',
      'En {barrio}, las viviendas acumulan un tipo de suciedad muy propia del ambiente marino: condensación en paredes y techos, manchas de agua en alféizares y marcos, y en algunas orientaciones, humedad en esquinas y techos de baño. Tratamos todo esto con antifúngico preventivo y productos que eliminan la condensación sin dañar la pintura.',
      'Una vivienda en {barrio} tiene un tipo de suciedad que no existe tierra adentro: condensación en paredes y techos, manchas de agua en marcos y alféizares, y humedad en esquinas según la orientación. La limpieza aquí incorpora siempre antifúngico preventivo, no como extra sino como parte estándar del servicio.',
    ],
    particularH2: '¿Qué marca la diferencia en la limpieza de casas costeras de {barrio}?',
    particularContent: [
      'La humedad marina penetra por ventanas y crea condensación en las superficies más frías. Los techos de baños y cocinas, los marcos de ventanas y los muros exteriores expuestos son las zonas más afectadas. En {barrio}, cada limpieza de vivienda incorpora atención a estas superficies: tratamiento preventivo de manchas de condensación, antifúngico en juntas de baño y limpieza de marcos con neutralizador de sales. No es un extra: es parte del servicio estándar en una vivienda costera.',
      'La humedad marina entra por las ventanas y condensa en las superficies más frías de {barrio}: techos de baño y cocina, marcos de ventana y muros exteriores expuestos. Por eso cada limpieza incluye tratamiento preventivo de condensación, antifúngico en juntas de baño y limpieza de marcos con neutralizador de sales. No es un añadido: es parte del servicio estándar en una vivienda costera.',
      'En {barrio}, la humedad marina se condensa siempre en los mismos sitios: techos de baño y cocina, marcos de ventana, muros exteriores. Tratamos esas zonas en cada visita con antifúngico preventivo y neutralizador de sales en los marcos, incluido en el servicio estándar de cualquier vivienda de la costa, no como extra.',
    ],
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
    intro: [
      'Una segunda residencia en {barrio} que lleva meses cerrada acumula una suciedad diferente a la de una vivienda de uso diario: polvo de sedimentación, manchas de condensación en ventanas, moho preventivo en baños, posible olor a cerrado y en algunos casos insectos. La limpieza de vivienda que hacemos para apertura de temporada en {barrio} es un trabajo a fondo distinto de la limpieza periódica de mantenimiento.',
      'Una segunda residencia en {barrio} que lleva meses cerrada acumula una suciedad distinta a la de uso diario: polvo de sedimentación, condensación en ventanas, moho preventivo en baños, olor a cerrado y, a veces, algún insecto. La limpieza de apertura que hacemos aquí es un trabajo a fondo, no un mantenimiento periódico.',
      'En {barrio}, una vivienda de temporada cerrada varios meses no se limpia como una de uso habitual: hay polvo sedimentado, condensación en ventanas, posible moho en baños y ese olor a cerrado tan característico. La apertura de temporada es un trabajo completo, distinto de una limpieza de mantenimiento.',
    ],
    particularH2: '¿Qué necesita una segunda residencia de {barrio} para estar lista en tu llegada?',
    particularContent: [
      'Cuando una vivienda lleva meses sin uso en {barrio}, las prioridades de limpieza cambian: el polvo de sedimentación en muebles y suelos tiene que eliminarse antes que cualquier otra cosa; los baños necesitan desinfección completa y revisión de juntas; la cocina requiere limpieza de la nevera si se dejó en marcha, y del horno si quedaron restos; y los cristales acumulan manchas de condensación que en una vivienda de uso diario no aparecen. También revisamos visualmente si hay alguna filtración o problema que no haya sido notado en meses de ausencia.',
      'Cuando una vivienda de {barrio} lleva meses cerrada, las prioridades cambian: primero el polvo de sedimentación en muebles y suelos, luego los baños con desinfección completa y revisión de juntas, la cocina con nevera y horno si quedaron restos, y los cristales con las manchas de condensación que no aparecen en una vivienda de uso diario. También revisamos visualmente si hay alguna filtración que haya pasado desapercibida.',
      'En {barrio}, una vivienda cerrada durante meses exige un orden distinto de trabajo: polvo de sedimentación primero, después baños con desinfección y revisión de juntas, cocina con nevera y horno si hubo restos, y cristales con condensación que no se ve en el uso diario. De paso, revisamos visualmente si hay alguna filtración que haya pasado desapercibida en la ausencia.',
    ],
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
    intro: [
      'La limpieza a fondo de un chalé en {barrio} es uno de los servicios más completos que ofrecemos: implica trabajar en varias plantas, atender la terraza y el porche, limpiar el garaje, y dedicar tiempo a los ventanales grandes del salón y las zonas exteriores. Para un chalé de 150-200 m² enviamos un equipo de 2-3 personas para completar el trabajo en el tiempo acordado.',
      'La limpieza a fondo de un chalé en {barrio} es de los servicios más completos que hacemos: varias plantas, terraza, porche, garaje y los ventanales grandes del salón, todo en el mismo servicio. Para un chalé de 150-200 m² enviamos equipo de 2-3 personas para cumplir el tiempo acordado.',
      'Un chalé en {barrio} pide una limpieza a fondo mucho más extensa que un piso: varias plantas, terraza, porche, garaje y ventanales de salón que necesitan su propia técnica. Para propiedades de 150-200 m² trabajamos con equipo de 2-3 personas para cumplir el plazo acordado.',
    ],
    particularH2: '¿Qué hace diferente la limpieza de un chalé de {barrio} respecto a un piso?',
    particularContent: [
      'La diferencia no es solo el tamaño: en un chalé de {barrio} hay suciedad de jardín y exterior que en un piso de bloque no existe. El barro y las hojas que se traen del jardín ensucian la planta baja; la terraza tiene su propia lógica de limpieza; el garaje necesita tratamiento específico para manchas de aceite; y los ventanales del salón requieren sistema de mopa y rasqueta profesional para quedarse sin marcas. Organizamos el trabajo con un checklist por estancia para no olvidar ninguna zona.',
      'No es solo cuestión de tamaño: un chalé en {barrio} tiene suciedad de jardín y exterior que un piso de bloque no conoce. Barro y hojas ensucian la planta baja, la terraza tiene su propia lógica de limpieza, el garaje necesita tratamiento específico para manchas de aceite, y los ventanales grandes exigen mopa y rasqueta profesional. Organizamos el trabajo con checklist por estancia para no dejar ninguna zona sin cubrir.',
      'La diferencia de un chalé en {barrio} frente a un piso no es solo el tamaño: entra suciedad de jardín que un piso de bloque nunca tiene —barro, hojas en planta baja—, la terraza necesita su propio protocolo, el garaje su propio tratamiento de aceite, y los ventanales grandes su propia técnica de mopa y rasqueta. Trabajamos con checklist por estancia para cubrir todo sin excepción.',
    ],
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
    intro: [
      'Las casas rurales de {barrio} son construcciones únicas: piedra, vigas de madera, suelos de baldosa antigua o pizarra, chimeneas y en muchos casos distribuciones irregulares con techos a distintas alturas. La limpieza a fondo de una casa rural en {barrio} requiere experiencia con estos materiales y una actitud de respeto hacia la arquitectura tradicional gallega. Usamos productos Ecolabel adaptados a cada superficie y trabajamos con el cuidado que merece una vivienda con historia.',
      'Las casas rurales de {barrio} son construcciones singulares: piedra, vigas de madera, baldosa antigua o pizarra, chimenea y distribuciones irregulares con techos a distintas alturas. Limpiarlas a fondo exige experiencia con estos materiales y respeto por la arquitectura tradicional gallega. Usamos productos Ecolabel adaptados a cada superficie.',
      'En {barrio}, cada casa rural es distinta: piedra, madera, baldosa antigua o pizarra, chimenea, techos irregulares. Una limpieza a fondo aquí exige conocer estos materiales y tratarlos con cuidado, no con un protocolo genérico. Trabajamos siempre con productos Ecolabel adaptados a cada superficie de la vivienda.',
    ],
    particularH2: '¿Qué hay que tener en cuenta al limpiar una casa rural de {barrio}?',
    particularContent: [
      'Los materiales de las casas rurales de {barrio} exigen tratamientos específicos: la piedra interior y exterior no admite productos ácidos que la ataquen; la madera de vigas y suelos necesita mínima humedad y producto específico; la chimenea genera ceniza que se deposita en las superficies cercanas; y los suelos de pizarra o baldosa antigua son porosos y absorben productos equivocados. Antes de empezar, identificamos los materiales presentes y ajustamos el producto a cada zona.',
      'Cada material de una casa rural en {barrio} pide su propio tratamiento: la piedra no admite ácidos, la madera de vigas y suelos necesita mínima humedad, la chimenea genera ceniza en las superficies cercanas, y la pizarra o baldosa antigua es porosa y absorbe productos equivocados. Antes de empezar, identificamos qué hay en cada zona y ajustamos el producto en consecuencia.',
      'En una casa rural de {barrio}, ningún material se limpia igual: piedra sin ácidos, madera con mínima humedad, ceniza de chimenea en las superficies cercanas, y pizarra o baldosa antigua porosa que no tolera cualquier producto. Identificamos los materiales presentes antes de tocar nada, y ajustamos el tratamiento a cada uno.',
    ],
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
    intro: [
      'Las viviendas y locales de {barrio}, en la zona de polígono industrial de Narón, acumulan suciedad específica de la actividad industrial: capas de polvo graso de partículas de combustión y caucho que se depositan en todas las superficies exteriores y penetran por las ventanas. La limpieza completa de una vivienda en {barrio} incorpora una fase de desengrase previa en las superficies más afectadas, especialmente encimeras, alféizares y cocina.',
      'En {barrio}, cerca del polígono industrial de Narón, las viviendas acumulan una suciedad específica: polvo graso de partículas de combustión y caucho que se deposita en las superficies exteriores y entra por las ventanas. La limpieza incorpora siempre una fase de desengrase previa, sobre todo en encimeras, alféizares y cocina.',
      'La cercanía al polígono industrial deja una marca propia en las viviendas de {barrio}: polvo graso de combustión y caucho que se posa en cada superficie expuesta y entra por las ventanas. Nuestra limpieza aquí incluye siempre un desengrase previo en encimeras, alféizares y cocina, no como extra sino como paso necesario.',
    ],
    particularH2: '¿Cómo afecta el entorno industrial de {barrio} a la suciedad de las viviendas?',
    particularContent: [
      'Las viviendas de {barrio} cerca del polígono tienen una capa de suciedad fina pero persistente en todas las superficies expuestas: los alféizares se oscurecen rápido, la cocina cerca de ventanas acumula grasa ambiental además de la de cocción, y los suelos recogen partículas de combustión con el tráfico diario que dan un aspecto grisáceo incluso poco después de fregar. El desengrasante previo en estas superficies es el paso que más diferencia hace en el resultado final.',
      'Las viviendas de {barrio} cerca del polígono tienen una capa fina pero persistente de suciedad en todas las superficies expuestas: alféizares que se oscurecen rápido, cocina con grasa ambiental además de la de cocción, y suelos con aspecto grisáceo poco después de fregar por las partículas de combustión del tráfico. El desengrasante previo es el paso que más diferencia marca en el resultado.',
      'En {barrio}, la actividad industrial cercana deja una película fina en cada superficie de la vivienda: alféizares oscurecidos, cocina con grasa que no es solo de cocción, suelos que parecen sucios poco después de fregarlos por las partículas del tráfico. Sin un desengrase previo, el resultado final nunca queda del todo limpio.',
    ],
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

export type ContenidoViviendasResuelto = Omit<ContenidoViviendas, 'intro' | 'particularContent'> & {
  intro: string;
  particularContent: string;
};

export function getContenidoViviendas(
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoViviendasResuelto | null {
  const raw = VIVIENDAS_POR_ARQUETIPO[archetype];
  if (!raw) return null;
  return {
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDesc: t(raw.metaDesc, barrioNombre, municipioNombre),
    intro: tVariant(raw.intro, barrioNombre, municipioNombre),
    particularH2: t(raw.particularH2, barrioNombre, municipioNombre),
    particularContent: tVariant(raw.particularContent, barrioNombre, municipioNombre),
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
  intro: string | string[];
  contextoH2: string;
  contextoContent: string | string[];
  incluyeH2: string;
  incluyeItems: string[];
  precioItems: string[];
  faqs: { q: string; a: string }[];
};

const PISOS_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoPisos> = {
  'bloque-obrero': {
    h1Qualifier: 'pisos de bloque · limpieza eficiente de la A a la Z',
    metaDesc: 'Limpieza de pisos en {barrio}: bloques de los años 70-90, cal en baños, grasa en cocina y suelos de vinilo o gres con juntas oscurecidas. Presupuesto en 24h.',
    intro: [
      'La limpieza profesional de un piso de bloque en {barrio} marca la diferencia en las zonas que el fregado habitual nunca llega a tratar bien: las juntas del baño, la parte trasera de la campana, los rodapiés, los marcos de puerta y los rincones de la cocina. En Zentro Limpiezas trabajamos con un checklist cerrado por estancia y te entregamos el piso en un estado de limpieza real, no solo de aspecto limpio.',
      'En un piso de bloque de {barrio}, lo que marca la diferencia no es lo que se ve a simple vista, sino lo que el fregado del día a día nunca llega a tocar: juntas del baño, parte trasera de la campana, rodapiés, marcos de puerta y rincones de cocina. Trabajamos con checklist cerrado por estancia para entregar limpieza real, no solo aspecto limpio.',
      'Un piso de bloque en {barrio} puede parecer limpio y no estarlo del todo: las juntas del baño, la parte trasera de la campana, los rodapiés y los rincones de cocina son lo que el fregado habitual deja siempre pendiente. Trabajamos estancia por estancia con checklist cerrado para que el resultado sea limpieza de verdad.',
    ],
    contextoH2: '¿Qué acumula un piso de bloque de {barrio} que no sale con la limpieza del día a día?',
    contextoContent: [
      'Los pisos de bloque de {barrio} de los años 70-90 acumulan capas de cal en griferías y azulejos del baño que el limpiabaños convencional no elimina. La campana de la cocina retiene grasa en el filtro y en las superficies interiores que se endurece con el calor. Las juntas de azulejo oscurecen con el tiempo y necesitan cepillado con antihongos. Los rodapiés y los marcos de puerta acumulan suciedad de manos y polvo pegado que solo sale frotando. Todo esto lo cubrimos en la limpieza de piso.',
      'En los pisos de bloque de {barrio}, construidos entre los 70 y los 90, la cal se acumula en griferías y azulejos del baño de forma que el limpiabaños normal no resuelve. La campana retiene grasa endurecida por el calor en filtro y superficies interiores, las juntas de azulejo se oscurecen y necesitan cepillado con antihongos, y rodapiés y marcos acumulan suciedad de manos que solo sale frotando. Todo eso entra en la limpieza.',
      'Un piso de bloque de {barrio} de los años 70-90 acumula suciedad en los mismos puntos siempre: cal incrustada en baño que el limpiabaños convencional no toca, grasa endurecida en la campana, juntas de azulejo oscurecidas que piden cepillado con antihongos, y rodapiés o marcos con suciedad de manos que solo sale frotando. Cubrimos cada uno de esos puntos en la limpieza del piso.',
    ],
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
    intro: [
      'Limpiar bien un piso histórico en {barrio} implica conocer los materiales antes de empezar. El parquet antiguo se daña con agua en exceso; la baldosa hidráulica absorbe productos ácidos; las molduras de escayola acumulan polvo en relieves que una fregona no alcanza. En Zentro Limpiezas evaluamos los materiales presentes antes de aplicar ningún producto y adaptamos la técnica a cada superficie.',
      'Limpiar bien un piso histórico en {barrio} empieza por conocer los materiales: el parquet antiguo se estropea con exceso de agua, la baldosa hidráulica absorbe productos ácidos, y las molduras de escayola atrapan polvo en relieves que una fregona no toca. Evaluamos qué hay antes de aplicar cualquier producto y adaptamos la técnica a cada superficie.',
      'En {barrio}, un piso histórico exige identificar los materiales antes de tocar nada: parquet que sufre con el agua en exceso, baldosa hidráulica que no admite ácidos, molduras de escayola con polvo en cada relieve. Nunca aplicamos producto sin confirmar antes qué superficie tenemos delante.',
    ],
    contextoH2: '¿Qué materiales hay en los pisos históricos de {barrio} que exigen cuidado especial?',
    contextoContent: [
      'Los pisos en edificios históricos de {barrio} suelen combinar varios materiales en el mismo espacio: parquet o tarima de madera en dormitorios, baldosa hidráulica o mosaico en salón y cocina, y azulejo antiguo en baños. Cada material tiene su protocolo: mopa casi seca para la madera, producto neutro sin ácidos para la cerámica, y cepillo fino para las juntas. Las molduras y cornisas de escayola necesitan cepillo de extensión, no mopa. El resultado cuando se hace bien es visiblemente diferente.',
      'Los pisos históricos de {barrio} suelen combinar varios materiales en el mismo espacio: parquet o tarima en dormitorios, baldosa hidráulica o mosaico en salón y cocina, azulejo antiguo en baños. Cada uno pide su propio protocolo —mopa casi seca para la madera, producto neutro para la cerámica, cepillo fino para las juntas—, y las molduras necesitan cepillo de extensión, no mopa. El resultado bien hecho se nota.',
      'En {barrio}, un piso histórico rara vez tiene un solo material: parquet en dormitorios, baldosa hidráulica o mosaico en salón y cocina, azulejo antiguo en baños. Cada superficie exige su propio tratamiento —mopa casi seca, producto neutro, cepillo fino en juntas—, y las molduras piden cepillo de extensión en vez de fregona. Es la única forma de que el resultado se note de verdad.',
    ],
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
    intro: [
      'Los pisos en {barrio} tienen una realidad cotidiana: la humedad del ambiente marino se mete en los baños, crea condensación en ventanas y paredes, y deposita salitre en todas las superficies exteriores. La limpieza profesional de tu piso en {barrio} atiende específicamente estas zonas: antifúngico preventivo en baños, tratamiento de condensación en ventanas y neutralizador de sales en marcos, todo incluido sin suplemento.',
      'Un piso en {barrio} convive a diario con la humedad del ambiente marino: se cuela en los baños, condensa en ventanas y paredes, y deja salitre en cada superficie exterior. La limpieza aquí trata específicamente esas zonas —antifúngico en baños, tratamiento de condensación en ventanas, neutralizador de sales en marcos— siempre incluido, sin coste extra.',
      'En {barrio}, la humedad marina forma parte del día a día de cualquier piso: baños con más tendencia a moho, condensación en ventanas y paredes, salitre en todo lo exterior. Nuestra limpieza atiende cada uno de esos frentes —antifúngico, tratamiento de condensación, neutralizador de sales— como parte estándar del servicio.',
    ],
    contextoH2: '¿Qué acumula un piso costero de {barrio} que no tiene un piso del interior?',
    contextoContent: [
      'La diferencia principal entre un piso de {barrio} y uno del interior de Ferrol es el salitre y la humedad. El salitre se deposita en marcos, alféizares y superficies metálicas en capa fina pero constante. La humedad marina acelera el crecimiento de moho en juntas de baño y techos de zonas húmedas. Las ventanas acumulan manchas de condensación que en el interior apenas aparecen. La limpieza del piso en {barrio} incorpora el tratamiento de todos estos elementos como parte del servicio estándar.',
      'La diferencia entre un piso de {barrio} y uno de interior es el salitre y la humedad. El salitre se deposita en marcos y alféizares en capa fina pero constante; la humedad acelera el moho en juntas de baño y techos húmedos; las ventanas acumulan condensación que en el interior apenas se ve. Tratamos todo esto como parte del servicio estándar.',
      'Lo que distingue a un piso de {barrio} de uno de interior son dos cosas: salitre y humedad. El primero se deposita constantemente en marcos y alféizares; la segunda acelera el moho en juntas de baño y techos húmedos, y deja condensación en ventanas que en el interior casi no aparece. Incluimos el tratamiento de ambos en cada visita, no como extra.',
    ],
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
    intro: [
      'Tener un piso de segunda residencia en {barrio} que pasa meses cerrado exige un tipo de limpieza diferente a la habitual. La apertura tras el invierno gallego necesita un trabajo a fondo: polvo de sedimentación, manchas de condensación en cristales, baños sin usar durante meses y olor a cerrado. Lo hacemos antes de que llegues, con tu llave si nos la dejas, y enviamos confirmación por WhatsApp.',
      'Un piso de segunda residencia en {barrio} que pasa meses cerrado necesita otro tipo de limpieza: polvo de sedimentación, condensación en cristales, baños sin uso durante meses y olor a cerrado tras el invierno gallego. Lo dejamos listo antes de tu llegada, con tu llave si nos la dejas y confirmación por WhatsApp al terminar.',
      'En {barrio}, un piso de temporada cerrado durante el invierno pide un trabajo distinto al de una limpieza normal: polvo acumulado, condensación en cristales, baños sin usar en meses y ese olor característico a cerrado. Lo resolvemos antes de que llegues, gestionando la llave si nos la confías y avisándote por WhatsApp al terminar.',
    ],
    contextoH2: '¿En qué estado está un piso de segunda residencia de {barrio} después de meses cerrado?',
    contextoContent: [
      'Un piso cerrado en {barrio} durante el invierno acumula polvo de sedimentación en todos los muebles y superficies horizontales, manchas de condensación en los cristales por el diferencial de temperatura entre interior y exterior, y un punto de humedad en baños y cocina que puede generar moho superficial en juntas. La nevera, si se dejó encendida, puede tener olores. Y el olor a cerrado se elimina con ventilación activa durante la limpieza. Todo esto lo resolvemos en la limpieza de apertura.',
      'Tras el invierno cerrado, un piso de {barrio} tiene polvo sedimentado en muebles y superficies horizontales, condensación en los cristales por el cambio de temperatura, y humedad en baños y cocina que puede generar moho superficial en las juntas. Si la nevera quedó encendida, puede haber olores. Todo se resuelve en la limpieza de apertura, incluyendo la ventilación activa para eliminar el olor a cerrado.',
      'Un piso de {barrio} cerrado todo el invierno acumula polvo en cada superficie horizontal, condensación en los cristales por el contraste de temperatura, y a veces algo de moho superficial en las juntas de baño y cocina por la humedad. Si la nevera se dejó encendida, revisamos posibles olores. La ventilación activa durante la limpieza es lo que termina de quitar el olor a cerrado.',
    ],
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
    intro: [
      'Los pisos en chalés y adosados de {barrio} tienen superficies que no existen en los bloques de pisos: ventanales grandes de salón, terraza con suelo y mobiliario, más de un baño, y la suciedad de jardín que entra con el tráfico diario. La limpieza completa de tu chalet en {barrio} implica organizar el trabajo por plantas y estancias con un checklist que no deja ninguna zona sin atender.',
      'Un piso en chalé o adosado de {barrio} tiene superficies que un bloque de pisos no tiene: ventanales grandes de salón, terraza con suelo y mobiliario propio, más de un baño, y la suciedad de jardín que entra a diario. Organizamos el trabajo por plantas y estancias con un checklist que no deja ninguna zona sin cubrir.',
      'En {barrio}, un chalé pide una limpieza más extensa que un piso de bloque: ventanales grandes, terraza propia, varios baños y la suciedad de jardín que entra con cada paso. Trabajamos por plantas con checklist cerrado para no dejar ninguna zona a medias.',
    ],
    contextoH2: '¿Qué tiene de particular la limpieza de los pisos de chalé en {barrio}?',
    contextoContent: [
      'El chalé tiene más metros de cocina, más metros de baño y más suelos que un piso de bloque equivalente. Pero la diferencia principal es la suciedad de entrada: el jardín y el exterior traen barro, hojas y polvo orgánico que se acumula en la entrada y la planta baja. Los ventanales grandes del salón son la superficie que más impacto visual tiene cuando está sucia. Y la terraza necesita atención independiente. Todo esto lo atendemos en la misma visita.',
      'Un chalé tiene más metros de cocina, más baños y más suelos que un piso equivalente de bloque. Pero la diferencia real está en la suciedad de entrada: jardín y exterior traen barro, hojas y polvo orgánico que se acumula en planta baja. Los ventanales grandes son la superficie de más impacto visual cuando están sucios, y la terraza necesita atención aparte. Todo entra en la misma visita.',
      'Más allá de los metros, la limpieza de un piso en chalé de {barrio} se diferencia por lo que entra desde fuera: barro, hojas y polvo orgánico del jardín que se acumulan en la planta baja. Los ventanales grandes del salón marcan la diferencia visual entre sucio y limpio, y la terraza requiere su propio proceso. Todo se atiende en la misma visita.',
    ],
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
    intro: [
      'Los pisos en casas rurales de {barrio} combinan materiales que no admiten los mismos productos que un piso urbano: piedra natural, tarima de madera antigua, baldosas de barro o gres sin esmaltar, y en muchos casos chimeneas activas que generan ceniza. La limpieza a fondo de un piso rural en {barrio} requiere identificar cada material, elegir el producto correcto y trabajar con cuidado en las zonas donde la arquitectura tradicional es irreemplazable.',
      'Un piso en una casa rural de {barrio} combina materiales que un piso urbano no tiene: piedra natural, tarima antigua, baldosa de barro o gres sin esmaltar, y a veces chimeneas activas que generan ceniza. Identificamos cada material antes de elegir producto, con especial cuidado en lo que hace única a la vivienda.',
      'En {barrio}, un piso rural pide identificar el material antes que nada: piedra, madera antigua, baldosa de barro sin esmaltar, y en muchos casos chimenea activa con su propia ceniza. Elegimos el producto según cada superficie, no al revés, para no dañar lo que hace singular a la casa.',
    ],
    contextoH2: '¿Qué hace diferente la limpieza de un piso rural en {barrio}?',
    contextoContent: [
      'Los pisos rurales de {barrio} tienen suciedad que los urbanos no tienen: ceniza y hollín de la chimenea, barro y polvo orgánico del campo, manchas de verdín en marcos de madera y un nivel de humedad invernal que genera condensación y manchas en paredes. Los materiales tampoco son los mismos: la piedra y la baldosa de barro son porosas y absorben los ácidos de los productos estándar. Hay que trabajar con producto neutro y técnica específica para no dañar lo que hace única a la casa.',
      'Un piso rural en {barrio} tiene suciedad que un piso urbano no conoce: ceniza y hollín de chimenea, barro y polvo orgánico del campo, verdín en marcos de madera y humedad invernal que deja manchas en las paredes. Los materiales tampoco son iguales: piedra y baldosa de barro son porosas y absorben los ácidos de los productos estándar. Trabajamos con producto neutro y técnica específica en cada caso.',
      'En {barrio}, un piso rural acumula un tipo de suciedad muy distinta a la urbana: ceniza de chimenea, barro de campo, verdín en marcos de madera, y manchas de humedad invernal en las paredes. La piedra y la baldosa de barro, además, son porosas y no toleran los ácidos habituales. Cada superficie recibe su propio producto neutro, no un tratamiento genérico.',
    ],
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
    intro: [
      'Los pisos en {barrio}, en el entorno del polígono industrial, acumulan en sus superficies algo que no aparece en los pisos de otras zonas: una capa fina de partículas grasas procedentes de la actividad industrial y el tráfico pesado. Esta capa se deposita en alféizares, cocinas próximas a ventanas y suelos de entrada, y requiere una fase de desengrase antes del limpiahogar habitual para eliminarla de verdad.',
      'Un piso en {barrio}, cerca del polígono industrial, acumula algo que otros pisos no tienen: una capa fina de partículas grasas por la actividad industrial y el tráfico pesado. Se deposita en alféizares, cocinas próximas a ventanas y suelos de entrada, y necesita un desengrase previo antes del limpiahogar habitual para eliminarse de verdad.',
      'En {barrio}, la cercanía al polígono industrial deja una marca en cualquier piso: partículas grasas de la actividad y el tráfico que se posan en alféizares, cocina y suelo de entrada. Un limpiahogar normal no las quita del todo; hace falta un desengrase previo para que el resultado sea real.',
    ],
    contextoH2: '¿Por qué los pisos de {barrio} necesitan un producto de limpieza diferente?',
    contextoContent: [
      'Las partículas de combustión y el polvo industrial que genera el polígono de Narón tienen componentes grasos que se adhieren al vidrio, los alféizares y las encimeras con más fuerza que el polvo doméstico. Con un limpiacristales o limpiahogar estándar, estas partículas se redistribuyen en lugar de eliminarse. El desengrasante disuelve la capa grasienta antes de aplicar el producto de limpieza final. Es un paso adicional que en otras zonas no sería necesario pero que en {barrio} marca la diferencia en el resultado.',
      'El polvo industrial y las partículas de combustión del polígono de Narón tienen componentes grasos que se pegan al vidrio, los alféizares y las encimeras más que el polvo doméstico. Un limpiacristales estándar solo las redistribuye. El desengrasante disuelve esa capa antes del producto de limpieza final, un paso que en otras zonas no haría falta pero aquí marca la diferencia.',
      'En {barrio}, las partículas de combustión y polvo industrial del entorno tienen un componente graso que se adhiere al cristal, los alféizares y la encimera con más fuerza que el polvo doméstico normal. Sin desengrasante previo, cualquier limpiacristales solo las mueve de sitio. Ese paso extra es lo que aquí marca la diferencia en el resultado.',
    ],
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

export type ContenidoPisosResuelto = Omit<ContenidoPisos, 'intro' | 'contextoContent'> & {
  intro: string;
  contextoContent: string;
};

export function getContenidoPisos(
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoPisosResuelto | null {
  const raw = PISOS_POR_ARQUETIPO[archetype];
  if (!raw) return null;
  return {
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDesc: t(raw.metaDesc, barrioNombre, municipioNombre),
    intro: tVariant(raw.intro, barrioNombre, municipioNombre),
    contextoH2: t(raw.contextoH2, barrioNombre, municipioNombre),
    contextoContent: tVariant(raw.contextoContent, barrioNombre, municipioNombre),
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

// ─── LOCALES COMERCIALES ────────────────────────────────────────────────────

const LOCALES_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoArquetipo> = {
  'bloque-obrero': {
    tituloPagina: 'Limpieza de local comercial en {barrio}: bajo de bloque con tráfico intenso',
    h1Qualifier: 'bajos comerciales · tráfico de clientes diario',
    metaDescAngle: 'Limpiamos locales en bajos de bloque de {barrio}: suelos de gres con tráfico intenso, zona de mostrador y escaparates. Presupuesto en 24h.',
    speakableIntro: [
      'Los locales comerciales en los bajos de los bloques de {barrio} reciben un tráfico diario que ninguna limpieza doméstica puede gestionar. El gres del suelo acumula suciedad de calle y calzado, el mostrador recoge polvo y manipulación constante, y el baño del local necesita desinfección frecuente. Zentro Limpiezas trabaja con comerciantes de {barrio} en horario de apertura temprana o después del cierre.',
      'Si tienes un local en un bajo de bloque en {barrio}, ya conocerás el problema: el tráfico diario de clientes deja en el suelo de gres una suciedad que ninguna limpieza doméstica llega a controlar. A eso se suma el desgaste del mostrador por el manejo constante y un baño que necesita desinfección frecuente. En Zentro Limpiezas nos adaptamos al horario de apertura de los comercios de {barrio}, trabajando antes de abrir o después de cerrar.',
      'El bajo comercial de un bloque en {barrio} tiene un desgaste que no tiene un local en otro tipo de zona: el paso constante de clientes ensucia el gres del suelo con barro y polvo de calle, el mostrador acumula suciedad de uso diario, y el baño exige una limpieza más frecuente que la de cualquier vivienda. Trabajamos con comerciantes de la zona en el horario que menos interfiera con su actividad, temprano o al cierre.',
    ],
    problemaH2: '¿Qué tipo de suciedad acumula un local en los bajos de los bloques de {barrio}?',
    problemaContent: [
      'Los locales en los bajos de {barrio} comparten un problema: la entrada de suciedad de calle. El suelo de gres acumula barro, polvo y arena en los días de lluvia, especialmente en la zona de acceso. El mostrador y las estanterías de cara al público se ensucian con el manejo diario. Cada tipo de local requiere un protocolo diferente que ajustamos antes de cada visita.',
      'No todos los locales de {barrio} tienen el mismo tipo de suciedad, pero comparten un origen común: la calle. El gres de la entrada recoge barro y arena cada vez que llueve, y el mostrador y las estanterías de cara al público se ensucian con el trato diario con los clientes. Antes de cada visita ajustamos el protocolo según el tipo de negocio, porque una farmacia no se limpia igual que una cafetería.',
      'En los bajos comerciales de {barrio}, el problema no es la falta de limpieza, sino el ritmo: la suciedad de calle entra constantemente por la puerta, sobre todo en días de lluvia, y se acumula más rápido de lo que cualquier repaso diario puede controlar. El mostrador y las zonas de cara al público añaden su propio desgaste. Adaptamos el protocolo a cada tipo de negocio antes de la primera visita.',
    ],
    ventanasH2: 'Escaparates y zonas visibles del local en {barrio}: la imagen del negocio',
    ventanasContent: [
      'El escaparate es la primera impresión que tiene un cliente sobre el negocio. En {barrio}, con alta densidad de tráfico peatonal, un escaparate limpio marca una diferencia real. El servicio incluye cristales interiores y exteriores, el acceso a la entrada y la zona de mostrador que el cliente ve al entrar. Podemos trabajar antes de la apertura para que esté todo a punto a primera hora.',
      'En {barrio}, con el tráfico peatonal que tiene, el escaparate de un local dice mucho antes de que el cliente entre. Cubrimos cristales interiores y exteriores, la entrada y la zona de mostrador visible, y podemos trabajar antes de la apertura para que todo esté impecable a primera hora del día.',
      'Un escaparate sucio en {barrio} transmite justo lo contrario de lo que cualquier negocio busca. El servicio cubre cristales por dentro y por fuera, el acceso de entrada y la zona de mostrador que ve el cliente al pasar, con la opción de trabajar antes de que abra el local para que todo esté listo desde primera hora.',
    ],
    faqs: [
      { q: '¿Podéis limpiar el local en {barrio} fuera del horario comercial?', a: 'Sí. La mayoría de nuestros clientes de locales en {barrio} prefieren que trabajemos antes de la apertura o después del cierre. Adaptamos el horario a lo que mejor encaje con el funcionamiento del negocio.' },
      { q: '¿Con qué frecuencia hay que limpiar un local comercial en {barrio}?', a: 'Para un comercio con tráfico moderado en {barrio}, una limpieza semanal profesional y un mantenimiento diario básico es lo habitual. Para hostelería, se recomienda mayor frecuencia.' },
    ],
  },
  'historico': {
    tituloPagina: 'Limpieza de local en edificio histórico de {barrio}: suelos y superficies delicadas',
    h1Qualifier: 'locales históricos · suelos delicados y carpintería de época',
    metaDescAngle: 'Limpiamos locales en edificios históricos de {barrio}: suelos de tarima, parquet o mosaico hidráulico con productos neutros. Sin dañar acabados. Presupuesto en 24h.',
    speakableIntro: [
      'Los locales en los edificios históricos de {barrio} tienen características que exigen un cuidado diferente al de un local estándar. El suelo puede ser de tarima, mosaico hidráulico o parquet de época que no admite productos abrasivos. Las fachadas históricas y los marcos de carpintería de madera necesitan un tratamiento específico en los escaparates. En Zentro Limpiezas tenemos experiencia con este tipo de local y sabemos qué producto usar en cada superficie.',
      'Un local en un edificio histórico de {barrio} no se limpia como uno estándar: el suelo puede ser tarima, mosaico hidráulico o parquet de época que no admite productos abrasivos, y el escaparate suele tener marco de madera o hierro que exige un trato específico. En Zentro Limpiezas conocemos estas superficies y sabemos qué producto usar en cada una sin arriesgar el acabado original.',
      '{barrio} conserva locales en plantas bajas de edificios históricos, y eso cambia por completo cómo hay que limpiarlos: suelos de mosaico hidráulico o tarima que no toleran abrasivos, y escaparates con marcos de madera o hierro de época. Trabajamos con productos adaptados a cada superficie para no dañar ningún elemento original del local.',
    ],
    problemaH2: '¿Qué tienen de especial los locales en los edificios históricos de {barrio}?',
    problemaContent: [
      'Los locales en {barrio} que ocupan la planta baja de edificios históricos presentan desafíos concretos: suelos de décadas con materiales sensibles a los abrasivos, fachadas protegidas donde el escaparate limpio convive con la carpintería histórica, y espacios con techos altos y cornisas que acumulan polvo en zonas difíciles de acceder. Todo requiere una selección cuidadosa de productos que no dañen los elementos originales.',
      'Limpiar un local histórico en {barrio} no es como limpiar uno moderno: el suelo suele tener décadas y materiales sensibles a los productos abrasivos, la fachada está protegida y convive con el escaparate, y los techos altos con cornisas acumulan polvo en zonas difíciles de alcanzar. Cada superficie exige un producto distinto, elegido con cuidado.',
      'El principal reto de los locales históricos de {barrio} no es la cantidad de suciedad, sino la fragilidad de los materiales: suelos antiguos que no admiten abrasivos, fachadas protegidas y techos altos con cornisas que acumulan polvo fuera del alcance habitual. Seleccionamos cada producto según la superficie, no al revés.',
    ],
    ventanasH2: 'Limpieza de escaparates con marcos históricos en {barrio}',
    ventanasContent: [
      'Los escaparates de los locales en {barrio} tienen a menudo marcos de madera o hierro de época. La limpieza del cristal en este contexto requiere que el producto no gotee sobre la madera ni oxide el metal. Usamos técnica de microfibra bien escurrida y producto de pH neutro específico para escaparates que elimina la suciedad del vidrio sin afectar el marco histórico.',
      'Los escaparates de {barrio} suelen conservar marcos de madera o hierro de época, así que el producto no puede gotear sobre el marco ni oxidar el metal. Trabajamos con microfibra bien escurrida y un limpiacristales de pH neutro pensado para escaparates con carpintería histórica.',
      'Limpiar el escaparate de un local histórico en {barrio} exige más cuidado que uno moderno: el marco de madera o hierro no perdona un producto mal aplicado. Usamos siempre microfibra escurrida y un limpiacristales de pH neutro que deja el vidrio impecable sin poner en riesgo el marco original.',
    ],
    faqs: [
      { q: '¿Podéis limpiar suelos de mosaico hidráulico o tarima en los locales de {barrio}?', a: 'Sí. El mosaico hidráulico y la tarima son materiales frecuentes en los locales históricos de {barrio}. El mosaico necesita productos de pH neutro sin ácidos; la tarima, limpieza casi en seco. Tenemos experiencia en ambos materiales.' },
      { q: '¿Tenéis experiencia limpiando locales en edificios protegidos de {barrio}?', a: 'Sí. En {barrio} hemos trabajado en locales dentro de edificios catalogados. La clave está en conocer qué productos admite cada superficie y trabajar con cuidado en marcos, cornisas y elementos originales.' },
    ],
  },
  'marinero': {
    tituloPagina: 'Limpieza de local en {barrio}: salitre en escaparates y ambiente marino',
    h1Qualifier: 'zona marinera · salitre en cristales y corrosión en metales',
    metaDescAngle: 'Limpieza de locales en {barrio} con protección ante el salitre marino: cristales, marcos metálicos y suelos tratados con productos Ecolabel certificados. Presupuesto en 24h.',
    speakableIntro: [
      'Los locales en {barrio} están expuestos al ambiente marino. El salitre deposita una capa blanca en los escaparates, actúa como acelerador de la corrosión en marcos metálicos y hace que la suciedad se adhiera más rápido a las superficies. La limpieza de locales en zonas costeras como {barrio} necesita mayor frecuencia y productos específicos para neutralizar las sales marinas.',
      'Si tu local está en {barrio}, el ambiente marino se nota en el escaparate antes que en cualquier otro sitio: el salitre deja una capa blanca que se adhiere rápido y acelera la corrosión de los marcos metálicos. Por eso en zonas costeras como esta recomendamos más frecuencia de limpieza y productos específicos para neutralizar la sal, no los mismos que usaríamos en un local de interior.',
      'La cercanía al mar en {barrio} pasa factura al escaparate de cualquier negocio: el salitre forma una película blanca que un spray doméstico no disuelve, y ataca también los marcos metálicos con el tiempo. La limpieza de locales aquí necesita más frecuencia y neutralizadores de sales marinas, no el mismo tratamiento que en una zona de interior.',
    ],
    problemaH2: '¿Cómo afecta el ambiente marino de {barrio} a los locales comerciales?',
    problemaContent: [
      'En {barrio}, los locales próximos a la costa o a la ría sufren el efecto del salitre sobre dos superficies críticas: el escaparate y el suelo de acceso. El cristal del escaparate acumula salitre en días de viento formando esa capa blanca nacarada que el spray doméstico no disuelve. Los marcos de hierro o aluminio también necesitan limpieza regular para evitar que el ambiente marino los deteriore.',
      'En un local de {barrio}, el escaparate y el suelo de acceso son los que más notan el salitre. En días de viento se deposita sobre el cristal formando esa capa blanca nacarada que resiste al limpiacristales normal, y los marcos de hierro o aluminio necesitan atención regular para no deteriorarse con el ambiente marino.',
      'El salitre en {barrio} no distingue entre cristal y metal: forma una capa nacarada en el escaparate que el spray doméstico apenas toca, y acelera el deterioro de los marcos de hierro o aluminio con el paso de las semanas. Ambos frentes necesitan un tratamiento específico, no una limpieza genérica.',
    ],
    ventanasH2: 'Escaparates y entradas en {barrio}: limpieza frecuente para proteger los materiales',
    ventanasContent: [
      'En los locales de {barrio}, la limpieza del escaparate no es solo estética: es mantenimiento preventivo. Una limpieza regular con neutralizador de sales marinas en cristales y marcos reduce la velocidad a la que el salitre deteriora los materiales. El servicio incluye el escaparate exterior, el interior accesible, los marcos metálicos y la zona de entrada.',
      'Para los locales de {barrio}, mantener el escaparate limpio es también mantenimiento preventivo: retirar el salitre con regularidad frena el deterioro de cristales y marcos metálicos. Cubrimos exterior, interior accesible y los marcos, además de la zona de entrada.',
      'En zonas como {barrio}, limpiar el escaparate con frecuencia no es solo cuestión de imagen: es lo que evita que el salitre deteriore cristales y marcos antes de tiempo. El servicio cubre el escaparate por fuera y por dentro, los marcos metálicos y la entrada del local.',
    ],
    faqs: [
      { q: '¿Con qué frecuencia hay que limpiar los escaparates en los locales de {barrio}?', a: 'En zonas costeras como {barrio}, los escaparates se ensucian con salitre en 1-2 semanas en días de viento. Para locales con imagen pública cuidada, una limpieza quincenal es lo mínimo recomendable.' },
      { q: '¿El salitre marino daña los marcos de hierro de los escaparates de {barrio}?', a: 'Sí, con el tiempo. El salitre acelera la oxidación de los marcos de hierro o acero. Una limpieza regular que retire el salitre antes de que se incruste reduce significativamente el ritmo de oxidación.' },
    ],
  },
  'segunda-residencia': {
    tituloPagina: 'Limpieza de local estacional en {barrio}: apertura y cierre de temporada',
    h1Qualifier: 'negocio estacional · apertura y cierre de temporada',
    metaDescAngle: 'Limpiamos locales estacionales en {barrio} antes de abrir en temporada: eliminamos polvo acumulado, moho y condensación de meses cerrado. Listos en el día.',
    speakableIntro: [
      'Muchos locales de {barrio} abren solo en temporada de verano o festivos y pasan meses cerrados. Durante ese tiempo el polvo se asienta en todos los rincones, el local coge olor a cerrado y en las zonas con humedad del invierno gallego pueden aparecer manchas de condensación. La limpieza de apertura de temporada deja el local a punto antes del primer día de actividad.',
      'Si tu negocio en {barrio} solo abre en temporada, ya conocerás la sensación de entrar tras meses cerrado: polvo en cada rincón, olor a cerrado y, si la humedad del invierno ha sido fuerte, alguna mancha de condensación. La limpieza de apertura de temporada resuelve todo eso antes de tu primer día de actividad.',
      '{barrio} tiene varios negocios de temporada que pasan buena parte del año cerrados, y eso se nota al volver a abrir: polvo acumulado, olor a cerrado y, en los casos con peor ventilación, manchas de humedad del invierno gallego. Dejamos el local listo antes del primer día de actividad, sin que tengas que ocuparte de nada.',
    ],
    problemaH2: '¿Qué acumula un local de {barrio} cerrado durante meses?',
    problemaContent: [
      'Un local cerrado en {barrio} entre temporadas acumula polvo en estanterías y superficies, manchas de condensación en cristales y paredes, olor a cerrado en tejidos y muebles tapizados, y en casos con ventilación deficiente, manchas de humedad o moho incipiente. La limpieza de apertura no es un repaso: requiere aspirado, fregado, desinfección de baño y cocina, y limpieza de escaparates.',
      'Un local cerrado durante meses en {barrio} no acumula solo polvo: también huele a cerrado por la falta de ventilación, puede tener condensación en cristales y paredes, y si la humedad ha sido persistente, algún inicio de moho. La limpieza de apertura no es un repaso rápido, sino un proceso completo que incluye aspirado, fregado, desinfección de baño y cocina, y escaparates.',
      'Lo que se encuentra un negocio de temporada en {barrio} al reabrir depende de cuánto tiempo haya estado cerrado: polvo asentado, olor a cerrado, manchas de condensación si la ventilación fue escasa, y en el peor de los casos, moho incipiente. Tratamos todo eso en una sola visita completa: aspirado, fregado, baño, cocina y escaparate.',
    ],
    ventanasH2: 'Limpieza de cierre: cómo dejar el local de {barrio} protegido para el invierno',
    ventanasContent: [
      'Al final de la temporada, una limpieza de cierre correcta marca la diferencia en el estado del local cuando vuelvas a abrir. El servicio incluye limpiar todos los rincones antes de cerrar, ventilar bien para evitar que se instale la humedad, y desinfectar baños y cocina. Menos problemas en la apertura del año siguiente.',
      'Cerrar bien un local de {barrio} al final de temporada evita muchos problemas al reabrir: limpiamos cada rincón antes del cierre, ventilamos para que no se instale la humedad, y desinfectamos baño y cocina. El local queda protegido durante los meses sin actividad.',
      'La limpieza de cierre de temporada en {barrio} es tan importante como la de apertura: dejar el local bien limpio y ventilado antes de cerrar reduce mucho los problemas de humedad y olor que te encuentras al volver a abrir. Incluye todos los rincones, ventilación y desinfección de baño y cocina.',
    ],
    faqs: [
      { q: '¿Podéis preparar el local de {barrio} justo antes de abrir, sin que yo tenga que estar presente?', a: 'Sí. Para locales estacionales de {barrio} trabajamos habitualmente con acceso de llave. Hacemos la limpieza de apertura en el día que indiques y te avisamos por WhatsApp cuando está listo.' },
      { q: '¿La limpieza de apertura de temporada en {barrio} incluye también los cristales del escaparate?', a: 'Sí. La limpieza de apertura incluye el escaparate exterior e interior, el acceso al local y todos los espacios interiores. Si hay salitre en los cristales por el invierno, lo tratamos en la misma visita.' },
    ],
  },
  'chalet': {
    tituloPagina: 'Limpieza de local en zona residencial de {barrio}: comercio de proximidad',
    h1Qualifier: 'zona residencial · local de proximidad en entorno de chalés',
    metaDescAngle: 'Limpiamos locales comerciales en las zonas residenciales de {barrio}: suelos de alto tráfico, escaparates y zonas de servicio. Presupuesto en 24h sin visita previa.',
    speakableIntro: [
      'Los locales comerciales en las zonas de chalés y adosados de {barrio} atienden principalmente a clientes del barrio: el supermercado, la peluquería, la farmacia o la cafetería de proximidad. El tráfico es moderado pero constante, y la imagen del local refleja la identidad del barrio. Zentro Limpiezas trabaja con negocios de {barrio} con servicio periódico o puntual adaptado al horario de apertura.',
      'Los negocios de proximidad en las zonas de chalés de {barrio} —la farmacia, la peluquería, la cafetería del barrio— tienen un tráfico moderado pero constante, y su imagen importa especialmente porque los clientes son vecinos habituales. Trabajamos con negocios de {barrio} con servicio periódico o puntual, siempre adaptado a su horario de apertura.',
      'En una zona residencial como {barrio}, los locales de proximidad no compiten por volumen de tráfico sino por la fidelidad del vecindario, y eso hace que la imagen del negocio importe todavía más. Ofrecemos servicio periódico o puntual a comercios de la zona, adaptado siempre al horario de cada negocio.',
    ],
    problemaH2: '¿Qué necesita un local de proximidad en {barrio} en materia de limpieza?',
    problemaContent: [
      'Los locales en las zonas residenciales de {barrio} tienen un perfil de suciedad diferente al del centro comercial: menos tráfico pero más fidelizado, con más expectativas de imagen por parte del vecindario. El suelo de entrada acumula suciedad de calle; las zonas de mostrador, polvo y manipulación diaria; y el baño del local necesita mantenimiento regular.',
      'El desgaste de un local en {barrio} es distinto al de uno en el centro: menos tráfico, pero clientes habituales que notan cualquier detalle. El suelo de entrada acumula suciedad de calle, el mostrador se ensucia con el uso diario y el baño necesita mantenimiento regular, aunque el ritmo sea más pausado que en una zona comercial de mucho paso.',
      'En las zonas residenciales de {barrio}, un local no recibe el volumen de tráfico de una calle comercial, pero sí una clientela fiel que se fija en los detalles. El suelo de entrada, el mostrador y el baño siguen necesitando atención regular, solo que con un ritmo distinto al de un local muy transitado.',
    ],
    ventanasH2: 'Limpieza de locales con acceso exterior en {barrio}',
    ventanasContent: [
      'Algunos locales en {barrio} tienen terraza, jardín o acceso exterior que también forma parte de la imagen del negocio. El servicio puede incluir la limpieza del acceso exterior, la terraza o el aparcamiento propio si el local lo tiene. En otoño e invierno, el barro de la lluvia requiere atención especial en los accesos para evitar que entre en el local con el calzado.',
      'Algunos locales de {barrio} tienen terraza o acceso exterior propio, y eso también forma parte de su imagen. Podemos incluir la limpieza de esa zona exterior en el servicio, con especial atención en otoño e invierno, cuando el barro de la lluvia entra fácilmente con el calzado si no se cuida el acceso.',
      'Si tu local en {barrio} tiene terraza, jardín o aparcamiento propio, forma parte del servicio igual que el interior. En los meses de lluvia prestamos especial atención al acceso exterior, porque es lo que evita que el barro acabe entrando al local con cada cliente.',
    ],
    faqs: [
      { q: '¿Ofrecéis servicio periódico de limpieza para locales pequeños en {barrio}?', a: 'Sí. Trabajamos con locales de todos los tamaños en {barrio}. Para negocios pequeños, una visita semanal o quincenal es la opción más habitual. Presupuesto cerrado por visita, sin permanencia mínima.' },
      { q: '¿Podéis incluir la limpieza del acceso exterior y la terraza del local en {barrio}?', a: 'Sí. Si el local tiene acceso exterior, terraza o jardín, lo incluimos en el servicio. En zonas de chalés como {barrio}, donde los locales suelen tener más espacio exterior, esto es frecuente.' },
    ],
  },
  'rural': {
    tituloPagina: 'Limpieza de local rural en {barrio}: restaurantes, tiendas y negocios de zona',
    h1Qualifier: 'zona rural · polvo orgánico y actividad estacional',
    metaDescAngle: 'Limpiamos locales en {barrio}: restaurantes, talleres y comercios rurales con polvo de campo, humedad y barro de temporada. Presupuesto en 24h.',
    speakableIntro: [
      'Los negocios en el entorno rural de {barrio} trabajan con un tipo de suciedad diferente al de los locales urbanos. El polvo orgánico del entorno, el barro en temporada de lluvia y la humedad del invierno gallego son los problemas principales. Zentro Limpiezas trabaja con negocios rurales de Ferrolterra con servicio adaptado a la actividad y al entorno de cada local.',
      'Un negocio en el entorno rural de {barrio} se enfrenta a un tipo de suciedad distinto al de un local urbano: polvo orgánico del campo, barro en temporada de lluvia y la humedad propia del invierno gallego. Trabajamos con negocios rurales de la zona adaptando el servicio a la actividad y al entorno de cada local.',
      '{barrio} tiene negocios —restaurantes, talleres, comercios— con un desgaste muy propio del entorno rural: barro, polvo orgánico y humedad, más que la suciedad urbana habitual. Adaptamos el servicio a cada tipo de negocio y a lo que realmente necesita, no a un protocolo genérico de ciudad.',
    ],
    problemaH2: '¿Qué suciedad acumula un local rural en {barrio}?',
    problemaContent: [
      'Los locales en entornos rurales como {barrio} reciben suciedad que los de ciudad no tienen: barro y tierra de finca o campo que entra con el calzado, polvo orgánico (paja, hierba, polvo de madera), y en los restaurantes, grasa de cocina que se deposita con más intensidad al trabajar con leña o cocina de campo. El suelo necesita fregado más frecuente y con desengrasante específico.',
      'La suciedad que entra en un local rural de {barrio} es distinta a la de ciudad: tierra y barro de finca en el calzado, polvo orgánico de paja o hierba, y en los restaurantes, más grasa de cocina si se trabaja con leña. El suelo necesita fregado frecuente con desengrasante específico para ese tipo de residuo.',
      'En {barrio}, un local rural convive con suciedad que un negocio de ciudad no tiene: barro de campo, polvo orgánico y, en hostelería, grasa de cocción más intensa si hay cocina de leña. Eso exige un fregado más frecuente y un desengrasante distinto al que usaríamos en un local urbano estándar.',
    ],
    ventanasH2: 'Limpieza de restaurantes y cocinas en locales rurales de {barrio}',
    ventanasContent: [
      'Los restaurantes y negocios de hostelería de {barrio} tienen la cocina como zona crítica: grasa de cocción en campana y paredes, suelos con grasa y residuos orgánicos, y en cocinas con leña o brasa, hollín que se deposita en superficies. El servicio incluye desengrase de campana y paredes, fregado de suelos y limpieza de sala. Podemos trabajar después del cierre o en días de descanso.',
      'En los restaurantes de {barrio}, la cocina es la zona que más exige: grasa acumulada en campana y paredes, suelo con residuos orgánicos, y hollín si se trabaja con leña o brasa. Nos encargamos de campana, paredes, suelo y sala, con la opción de trabajar tras el cierre o en días de descanso.',
      'Para la hostelería rural de {barrio}, la cocina necesita un tratamiento distinto al de la sala: desengrase de campana y paredes, fregado del suelo con producto específico, y si hay leña o brasa, tratamiento del hollín acumulado. Podemos trabajar después del cierre o en el día de descanso del negocio.',
    ],
    faqs: [
      { q: '¿Limpiáis también las cocinas de los restaurantes rurales de {barrio}?', a: 'Sí. La cocina es la zona más exigente en un negocio de hostelería. El servicio incluye campana, paredes, suelos y superficies de trabajo. Para cocinas con leña o brasa, el tratamiento de hollín requiere desengrasante específico que incluimos en el servicio.' },
      { q: '¿Cuánto cuesta limpiar un restaurante rural en {barrio}?', a: 'Para un restaurante pequeño de {barrio} con sala hasta 40 m² y cocina estándar, desde 90€ por visita. Para establecimientos más grandes, lo presupuestamos en función de la superficie y el trabajo.' },
    ],
  },
  'industrial': {
    tituloPagina: 'Limpieza de local o nave en {barrio}: polígono y zona industrial',
    h1Qualifier: 'zona industrial · polvo de actividad, grasa y polígono',
    metaDescAngle: 'Limpiamos locales, talleres y naves en los polígonos de {barrio}: desengrasante industrial ecológico, tratamiento de polvo y residuos. Presupuesto sin visita.',
    speakableIntro: [
      'Los locales y naves en las zonas industriales y polígonos de {barrio} acumulan un tipo de suciedad que no admite los productos domésticos: polvo de caucho y metal, grasa de maquinaria, aceite de suelo y partículas de combustión. Zentro Limpiezas usa desengrasantes industriales ecológicos con capacidad para este tipo de residuo. Trabajamos fuera de horario de producción para no interrumpir la actividad.',
      'Un local o nave en la zona industrial de {barrio} acumula una suciedad que ningún producto doméstico resuelve: polvo de caucho y metal, grasa de maquinaria y aceite en el suelo. Usamos desengrasantes industriales ecológicos pensados para este tipo de residuo, siempre fuera del horario de producción.',
      'En los polígonos de {barrio}, la suciedad de un local o nave tiene un origen muy distinto al de un negocio de calle: grasa de maquinaria, polvo de metal y caucho, aceite acumulado en el suelo. Trabajamos con desengrasantes industriales ecológicos y fuera del horario de producción para no interrumpir la actividad.',
    ],
    problemaH2: '¿Qué tipo de limpieza necesita un local industrial en {barrio}?',
    problemaContent: [
      'La suciedad en los polígonos de {barrio} es muy diferente a la doméstica: los suelos acumulan grasa de maquinaria y aceite de vehículos, las paredes recogen polvo de caucho y metal en suspensión, y en talleres o almacenes los residuos se mezclan con la suciedad industrial. Esta combinación requiere desengrasantes de alta eficacia y fregadora industrial.',
      'La suciedad de un local en el polígono de {barrio} poco tiene que ver con la doméstica: suelos con grasa de maquinaria y aceite de vehículos, paredes con polvo de caucho y metal en suspensión, y en talleres, residuos mezclados con suciedad industrial. Hace falta desengrasante de alta eficacia y fregadora industrial, no una limpieza estándar.',
      'En {barrio}, limpiar un local industrial exige herramientas distintas a las de un negocio de calle: grasa de maquinaria y aceite en el suelo, polvo de metal y caucho en las paredes, residuos propios de cada actividad. Usamos desengrasante de alta eficacia y fregadora industrial para tratarlo de verdad, no solo taparlo.',
    ],
    ventanasH2: 'Limpieza de naves y almacenes en {barrio}: polvo sedimentado y suelos industriales',
    ventanasContent: [
      'El polvo sedimentado en naves y almacenes de {barrio} tiene partículas más pesadas y abrasivas que el doméstico. La limpieza profesional usa aspirado industrial antes del fregado para retirar el grueso del depósito, luego desengrasante diluido y fregadora con agua caliente. El resultado es un almacén con el pavimento limpio que no levanta polvo con el tráfico de carretilla.',
      'En naves y almacenes de {barrio}, el polvo sedimentado es más pesado y abrasivo que el doméstico. Empezamos con aspirado industrial para retirar el grueso, seguido de desengrasante diluido y fregadora con agua caliente. El resultado es un pavimento que no levanta polvo con el paso de las carretillas.',
      'El polvo de un almacén en {barrio} no se limpia como el de una vivienda: primero aspirado industrial para el grueso del depósito, después desengrasante diluido y fregadora con agua caliente. Así el pavimento queda limpio de verdad, sin que vuelva a levantar polvo con el tráfico de carretillas.',
    ],
    faqs: [
      { q: '¿Podéis hacer la limpieza industrial de {barrio} en horario nocturno o de fin de semana?', a: 'Sí. Para los locales y naves en el polígono de {barrio} trabajamos habitualmente en horario nocturno o los sábados para no interferir con la producción. Lo coordinamos con la empresa antes de cada servicio.' },
      { q: '¿Limpiáis también las oficinas dentro de las naves de {barrio}?', a: 'Sí. Si la nave o taller de {barrio} tiene zona de oficina, la incluimos en el mismo servicio con protocolo diferente al área industrial, en la misma visita.' },
    ],
  },
};

// ─── GARAJES ────────────────────────────────────────────────────────────────

const GARAJES_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoArquetipo> = {
  'bloque-obrero': {
    tituloPagina: 'Limpieza de garaje en bloque de {barrio}: aceite, polvo y manchas de sótano',
    h1Qualifier: 'garaje comunitario · aceite de motor y humedad de sótano',
    metaDescAngle: 'Limpiamos garajes en sótano de bloque en {barrio}: manchas de aceite, polvo de caucho y humedad. Desengrasante industrial ecológico. Presupuesto en 24h.',
    speakableIntro: [
      'Los garajes en los sótanos de los bloques de {barrio} son espacios con décadas de uso sin limpieza profesional: el pavimento acumula manchas de aceite de motor, polvo de caucho de los neumáticos, barro que entra con los vehículos y manchas de humedad en paredes y techo. Zentro Limpiezas trabaja con comunidades de vecinos y particulares de {barrio} para devolver el garaje a un estado correcto de limpieza e higiene.',
      'Un garaje de sótano en {barrio} suele tener décadas sin una limpieza profesional real: manchas de aceite acumuladas, polvo de caucho de los neumáticos, barro que entra con los coches y humedad en paredes y techo. Trabajamos con comunidades de vecinos y particulares de la zona para devolver el espacio a un estado de limpieza real, no solo de aspecto.',
      'Si el garaje de tu bloque en {barrio} lleva años sin una limpieza a fondo, lo normal es encontrar manchas de aceite fijadas al suelo, polvo de caucho, barro y humedad en paredes y techo. Trabajamos tanto con comunidades como con particulares de la zona para dejarlo en un estado de higiene real, no solo barrido por encima.',
    ],
    problemaH2: '¿Por qué los garajes de bloque en {barrio} son tan difíciles de limpiar?',
    problemaContent: [
      'Los garajes en sótano de {barrio} acumulan tres tipos de suciedad distintos: la grasa de motor (requiere desengrasante específico), el polvo de caucho de los neumáticos (aspirado antes de fregar para evitar que se extienda), y las manchas de humedad en paredes que indican filtración o condensación. Sin el producto adecuado, el fregado convencional solo redistribuye el aceite por el suelo sin eliminarlo.',
      'En los garajes de sótano de {barrio} conviven tres problemas distintos: grasa de motor que necesita desengrasante específico, polvo de caucho que hay que aspirar antes de fregar para que no se extienda por todo el suelo, y manchas de humedad en las paredes que a veces indican filtración. Fregar sin el producto adecuado solo mueve el aceite de sitio, no lo elimina.',
      'No toda la suciedad de un garaje en {barrio} se trata igual: la grasa de motor exige desengrasante específico, el polvo de caucho hay que aspirarlo antes del fregado para que no se reparta por el suelo, y las manchas de humedad en pared pueden ser síntoma de algo más que hay que señalar al cliente. Sin el producto correcto, el fregado convencional no hace más que redistribuir el aceite.',
    ],
    ventanasH2: 'Limpieza de paredes, puerta y accesos del garaje en {barrio}',
    ventanasContent: [
      'Además del suelo, el garaje de {barrio} necesita atención en paredes (manchas de rozamiento de vehículos), la puerta automática (grasa de mecanismo, polvo en guías), y el acceso a la escalera o ascensor desde el garaje. Limpiamos todo el espacio en una sola visita. Para garajes comunitarios, ofrecemos servicio periódico con precio por plaza.',
      'El garaje de {barrio} no se limpia solo por el suelo: las paredes con marcas de rozamiento, la puerta automática con grasa en el mecanismo y polvo en las guías, y el acceso a escalera o ascensor también entran en la visita. Para garajes comunitarios, el precio se calcula por plaza.',
      'Además del suelo, en un garaje de {barrio} tratamos las paredes con marcas de rozamiento de los coches, la puerta automática —grasa de mecanismo, polvo en guías— y el acceso hacia la escalera o el ascensor. Todo en la misma visita. Para comunidades, el presupuesto se calcula por plaza.',
    ],
    faqs: [
      { q: '¿Podéis eliminar las manchas de aceite de motor del suelo del garaje en {barrio}?', a: 'Sí. Usamos desengrasante industrial ecológico con capacidad específica para el aceite de motor. Para manchas antiguas e incrustadas puede necesitarse un segundo tratamiento; lo indicamos en el presupuesto antes de empezar.' },
      { q: '¿Trabajáis con comunidades de vecinos para la limpieza periódica del garaje comunitario en {barrio}?', a: 'Sí. Trabajamos con comunidades de vecinos de {barrio} para la limpieza del garaje comunitario. Ofrecemos visita puntual o servicio periódico mensual o trimestral. El presupuesto es por plaza o por metro cuadrado.' },
    ],
  },
  'historico': {
    tituloPagina: 'Limpieza de garaje antiguo en {barrio}: sin desagüe moderno, polvo y humedad',
    h1Qualifier: 'garaje histórico · sin drenaje y paredes húmedas de piedra',
    metaDescAngle: 'Limpieza de garajes en edificios históricos de {barrio}: sin desagüe estándar, paredes de piedra con humedad y pavimento antiguo. Técnica adaptada. Presupuesto en 24h.',
    speakableIntro: [
      'Los garajes en los edificios históricos de {barrio} son en muchos casos espacios originalmente no diseñados para ese uso: bajas, cocheras antiguas o sótanos reconvertidos. No tienen desagüe moderno, las paredes son de piedra o ladrillo que absorbe humedad, y el pavimento puede ser de cemento sin tratar o adoquín. Limpiar estos espacios requiere una técnica diferente a la del garaje de bloque estándar.',
      'En {barrio} muchos garajes ocupan espacios de edificios históricos que originalmente no se pensaron para esto: bajos, antiguas cocheras o sótanos reconvertidos, sin desagüe moderno y con paredes de piedra o ladrillo que absorben humedad. Limpiarlos exige una técnica distinta a la de un garaje de bloque estándar.',
      'Un garaje en un edificio histórico de {barrio} rara vez fue diseñado como tal: suele ser una antigua cochera o un sótano reconvertido, sin desagüe moderno y con paredes que absorben humedad. Eso cambia por completo la técnica de limpieza frente a un garaje de bloque normal.',
    ],
    problemaH2: '¿Cómo se limpia un garaje o cochera en {barrio} sin sistema de desagüe moderno?',
    problemaContent: [
      'Sin desagüe, en los garajes históricos de {barrio} no se puede aplicar agua en grandes cantidades. La técnica correcta es en semi-seco: aspirado profundo, desengrasante aplicado con mopa y recogida del producto con aspirador de agua. Para manchas de aceite antiguas, aplicamos el desengrasante en seco y dejamos actuar antes de retirar.',
      'Sin desagüe, no se puede echar agua en cantidad en los garajes históricos de {barrio}. Trabajamos en semi-seco: aspirado profundo, desengrasante aplicado con mopa y recogida con aspirador de agua. Las manchas de aceite antiguas se tratan aplicando el producto en seco y dejándolo actuar antes de retirarlo.',
      'La falta de desagüe en los garajes históricos de {barrio} obliga a un método distinto: nada de agua en abundancia, sino aspirado a fondo, desengrasante aplicado con mopa y recogida final con aspirador de agua. Para el aceite más antiguo, dejamos actuar el producto en seco antes de retirarlo.',
    ],
    ventanasH2: 'Humedad y moho en los muros del garaje de {barrio}',
    ventanasContent: [
      'En los garajes de piedra o ladrillo de {barrio}, la humedad que absorben los muros genera condiciones para el crecimiento de moho y verdín. El servicio incluye limpieza de paredes con producto antifúngico de base acuosa que elimina el moho superficial sin atacar la piedra. Para humedades por filtración, avisamos al cliente para que lo evalúe con un especialista.',
      'En los garajes de piedra o ladrillo de {barrio}, la humedad que absorben los muros favorece el moho y el verdín. Limpiamos las paredes con antifúngico de base acuosa que elimina el moho superficial sin dañar la piedra; si detectamos filtración, lo indicamos para que se revise por un especialista.',
      'La piedra y el ladrillo de los garajes de {barrio} retienen humedad, y eso es lo que favorece el moho o el verdín en las paredes. El tratamiento es antifúngico de base acuosa, que elimina el problema superficial sin atacar la piedra. Si el origen es una filtración, te lo hacemos saber para que lo revise un técnico.',
    ],
    faqs: [
      { q: '¿Podéis limpiar garajes o cocheras en edificios históricos de {barrio} sin causar daños?', a: 'Sí. Trabajamos en semi-seco con desengrasante aplicado con mopa y recogida por aspirado. El resultado es un espacio limpio sin riesgo de humedad residual por exceso de agua.' },
      { q: '¿Tratáis también el moho en las paredes del garaje de {barrio}?', a: 'Sí. Aplicamos antifúngico ecológico en paredes con manchas de moho o verdín superficial. Si la humedad tiene origen en filtración estructural, te avisamos para que lo revise un especialista.' },
    ],
  },
  'marinero': {
    tituloPagina: 'Limpieza de garaje en {barrio}: humedad marina y corrosión en ambiente costero',
    h1Qualifier: 'zona costera · salitre y corrosión en garaje',
    metaDescAngle: 'Limpiamos garajes en {barrio}: salitre en paredes metálicas, humedad marina y suelo con manchas de aceite. Desengrasante ecológico y neutralizador de sales. Presupuesto en 24h.',
    speakableIntro: [
      'Los garajes en las zonas costeras de {barrio} sufren un problema que los del interior no tienen: el ambiente salino marino penetra por las puertas y la ventilación, dejando salitre en los objetos metálicos del interior, acelerando la oxidación de la puerta y depositando sal y humedad en las paredes. La limpieza de un garaje en {barrio} debe incorporar neutralización de sales marinas para frenar el deterioro.',
      'El garaje en {barrio} sufre algo que uno de interior no tiene: el ambiente salino entra por puertas y ventilación, deja salitre en los objetos metálicos, acelera la oxidación de la puerta y deposita sal y humedad en las paredes. Por eso la limpieza aquí incorpora siempre neutralización de sales marinas.',
      'Un garaje en {barrio} envejece más rápido que uno de interior por el mismo motivo que todo lo demás en la zona: el ambiente salino. Entra por puertas y ventilación, deja salitre en los objetos metálicos y acelera la oxidación de la puerta. La limpieza aquí no está completa sin un tratamiento de neutralización de sales.',
    ],
    problemaH2: '¿Cómo afecta el ambiente marino de {barrio} al estado del garaje?',
    problemaContent: [
      'El salitre marino de {barrio} actúa en el garaje de varias formas: se deposita en el suelo con la humedad ambiente, se adhiere a las paredes metálicas y a la puerta automática, y penetra en las guías de la puerta acelerando su oxidación. Si el vehículo entra con sal del exterior, la mancha de sal en el suelo se une a la suciedad habitual de aceite y polvo de caucho.',
      'En {barrio}, el salitre actúa en el garaje de varias formas a la vez: se posa en el suelo con la humedad ambiente, se pega a las paredes metálicas y a la puerta, y penetra en las guías acelerando su oxidación. Si además el vehículo trae sal de la calle, esa mancha se suma a la de aceite y polvo de caucho habitual.',
      'El salitre de {barrio} no se limita a una zona del garaje: se deposita en el suelo con la propia humedad ambiente, ataca las paredes metálicas y la puerta, y se cuela en las guías acelerando la oxidación. A eso se suma la sal que el propio vehículo trae de fuera, mezclada con el aceite y el polvo habitual.',
    ],
    ventanasH2: 'Mantenimiento de la puerta de garaje y acceso en ambiente marino de {barrio}',
    ventanasContent: [
      'La puerta del garaje en {barrio} es el elemento más expuesto al ambiente marino. Las guías acumulan salitre y humedad que precipita la oxidación del mecanismo. El servicio incluye limpieza del mecanismo de guías con neutralizador de sales, además del suelo, las paredes y el interior. Para puertas de hierro o acero, la limpieza regular reduce significativamente la velocidad de oxidación.',
      'La puerta del garaje es lo más expuesto al ambiente marino en {barrio}: las guías acumulan salitre y humedad que aceleran la oxidación del mecanismo. Limpiamos ese mecanismo con neutralizador de sales, además del suelo, paredes e interior. En puertas de hierro o acero, la limpieza regular frena mucho la corrosión.',
      'En {barrio}, la parte del garaje que peor lo pasa con el ambiente marino es la puerta: guías con salitre y humedad que aceleran la oxidación del mecanismo. La tratamos con neutralizador de sales en la misma visita que el suelo, las paredes y el interior. Si la puerta es de hierro o acero, la limpieza regular hace una diferencia notable.',
    ],
    faqs: [
      { q: '¿La humedad marina de {barrio} daña los objetos que guardo en el garaje?', a: 'El ambiente salino y húmedo de {barrio} deteriora metales, cartón y tejidos guardados sin protección. Para los objetos, lo mejor es guardarlos en cajas herméticas. Para el garaje, una limpieza regular con neutralizador de sales reduce la concentración de sal en el ambiente.' },
      { q: '¿Con qué frecuencia hay que limpiar el garaje en {barrio} para evitar la corrosión?', a: 'En zonas costeras como {barrio}, una limpieza profesional cada 6 meses es lo recomendable para mantener el salitre bajo control. Si el vehículo circula a diario por zonas costeras, puede ser útil más frecuencia.' },
    ],
  },
  'segunda-residencia': {
    tituloPagina: 'Limpieza de garaje en segunda residencia de {barrio}: polvo de meses cerrado',
    h1Qualifier: 'segunda residencia · garaje sin uso, polvo acumulado y humedad',
    metaDescAngle: 'Limpiamos garajes de segunda residencia en {barrio}: polvo de meses cerrado, manchas de humedad y revitalización antes de la temporada. Presupuesto cerrado.',
    speakableIntro: [
      'El garaje de una segunda residencia en {barrio} pasa meses sin uso entre temporadas. Durante ese tiempo el polvo se asienta sobre el suelo y los objetos guardados, la humedad del invierno gallego puede dejar manchas en paredes, y los vehículos o motos que quedan acumulan polvo de óxido. La limpieza antes de la temporada deja el garaje en condiciones y permite detectar si hay problemas de humedad que hayan pasado desapercibidos.',
      'Entre temporada y temporada, el garaje de una segunda residencia en {barrio} pasa meses sin uso: el polvo se asienta sobre suelo y objetos, la humedad del invierno gallego puede dejar marca en las paredes, y cualquier vehículo o moto guardada acumula polvo y algo de óxido. La limpieza antes de la temporada lo deja listo y de paso permite detectar problemas de humedad que hayan pasado desapercibidos.',
      'Si tu garaje en {barrio} solo se usa parte del año, ya sabrás lo que te espera al volver: polvo acumulado, manchas de humedad del invierno gallego en las paredes y, si hay algún vehículo guardado, una capa de polvo y óxido superficial. La limpieza de apertura resuelve todo eso y de paso te avisa si hay algo que revisar.',
    ],
    problemaH2: '¿Qué le ocurre al garaje de {barrio} cuando lleva meses cerrado?',
    problemaContent: [
      'Durante los meses de cierre en {barrio}, el garaje acumula polvo sedimentado en todas las superficies, manchas de humedad en paredes si hay condensación, y en algunos casos insectos que buscan refugio en el invierno. El suelo donde estaba el vehículo tiene manchas de aceite y líquidos que con el tiempo se fijan al pavimento. La limpieza de apertura trata todos estos problemas en una sola visita.',
      'Durante los meses cerrado, el garaje de {barrio} acumula polvo en todas las superficies, manchas de humedad si hay condensación, y a veces algún insecto que busca refugio del frío. El suelo donde estaba el coche suele tener manchas de aceite ya fijadas al pavimento. Tratamos todo en la misma visita.',
      'Lo que se encuentra en un garaje cerrado de {barrio} tras meses sin uso depende de la humedad de la zona: polvo sedimentado siempre, manchas de condensación en paredes si la ventilación fue escasa, y en el suelo, restos de aceite que el tiempo ha terminado de fijar. Todo se trata en la misma visita de apertura.',
    ],
    ventanasH2: 'Limpieza de garaje antes de la temporada en {barrio}: en qué consiste',
    ventanasContent: [
      'La limpieza de apertura del garaje en {barrio} incluye: aspirado del polvo sedimentado, desengrase de manchas de aceite y líquidos en el suelo, limpieza de paredes y tratamiento de manchas de humedad con antifúngico si las hay, y revisión del mecanismo de la puerta. Si detectamos algún problema de filtración, avisamos al propietario para que lo evalúe.',
      'La apertura de temporada del garaje en {barrio} incluye aspirado del polvo acumulado, desengrase de las manchas de aceite del suelo, limpieza de paredes con antifúngico si hace falta, y revisión del mecanismo de la puerta. Si detectamos algún problema de filtración, te lo hacemos saber antes de terminar.',
      'Para dejar listo el garaje de temporada en {barrio}, aspiramos el polvo acumulado, tratamos las manchas de aceite del suelo con desengrasante, limpiamos las paredes con antifúngico si hay humedad, y revisamos que la puerta funcione bien. Cualquier señal de filtración te la comunicamos antes de cerrar el servicio.',
    ],
    faqs: [
      { q: '¿Podéis hacer la limpieza del garaje de {barrio} antes de que lleguemos, sin estar presentes?', a: 'Sí. Para segunda residencia de {barrio} trabajamos habitualmente con acceso de llave. Hacemos la limpieza en la fecha que indiques y te enviamos foto de confirmación por WhatsApp al terminar.' },
      { q: '¿La limpieza del garaje de {barrio} incluye también la limpieza del vehículo guardado?', a: 'No. La limpieza del garaje incluye el espacio: suelo, paredes, puerta y acceso. El vehículo guardado dentro no se incluye en el servicio estándar.' },
    ],
  },
  'chalet': {
    tituloPagina: 'Limpieza de garaje de chalé en {barrio}: manchas de aceite y polvo de jardín',
    h1Qualifier: 'chalé y adosado · garaje con jardín y barro de temporada',
    metaDescAngle: 'Limpiamos garajes de chalés y adosados en {barrio}: barro, polvo de jardín, manchas de aceite y herramientas. Presupuesto cerrado en 24h.',
    speakableIntro: [
      'Los garajes de los chalés y adosados de {barrio} tienen una particularidad respecto a los de bloque: el barro y el polvo del jardín entran con el calzado y los vehículos, las herramientas de jardinería dejan restos orgánicos, y en muchos casos el garaje sirve también de trastero o almacén. La combinación de aceite de motor, polvo de jardín y herramientas requiere una limpieza más completa que la de un garaje estándar.',
      'El garaje de un chalé en {barrio} tiene un problema añadido frente al de un bloque: el barro y el polvo del jardín entran con el calzado y los coches, las herramientas de jardinería dejan restos orgánicos, y muchas veces el espacio hace también de trastero. Eso pide una limpieza más completa que un garaje estándar.',
      'A diferencia de un garaje de bloque, el de un chalé en {barrio} suma barro y polvo de jardín a la ecuación habitual de aceite y caucho, además de restos de las herramientas de jardinería y, en muchos casos, el papel de trastero. Es un tipo de limpieza más completa por necesidad, no por elección.',
    ],
    problemaH2: '¿Por qué los garajes de chalé en {barrio} acumulan más suciedad que los de bloque?',
    problemaContent: [
      'El garaje de un chalé en {barrio} acumula más tipos de suciedad: además del aceite de motor y el polvo de caucho habituales, hay barro del jardín que entra con los vehículos y el calzado, restos de tierra y polvo orgánico de las herramientas de jardinería, y en los que también sirven de trastero, polvo sedimentado sobre cajas y muebles guardados.',
      'El garaje de un chalé en {barrio} acumula más frentes que uno de bloque: al aceite y el polvo de caucho habituales se suma el barro del jardín que entra con coches y calzado, restos orgánicos de las herramientas de jardinería, y si sirve también de trastero, polvo sobre cajas y muebles guardados.',
      'En un chalé de {barrio}, el garaje no solo recibe la suciedad típica de aceite y caucho: también entra barro de jardín con cada coche, restos de tierra de las herramientas de jardinería, y si el espacio se usa como trastero, polvo acumulado sobre lo que se guarda ahí.',
    ],
    ventanasH2: 'Limpieza de garaje y zona de herramientas de jardín en {barrio}',
    ventanasContent: [
      'En los chalés de {barrio} donde el garaje funciona también como almacén de herramientas de jardín, el servicio incluye la limpieza de la zona de herramientas: suelo con tierra y restos orgánicos, estanterías con polvo acumulado, y paredes con manchas de barro. Las herramientas se recolocan en su lugar sin moverlas si el cliente no lo solicita.',
      'Cuando el garaje de un chalé en {barrio} funciona también como almacén de herramientas de jardín, tratamos esa zona aparte: suelo con tierra y restos orgánicos, estanterías con polvo, paredes con manchas de barro. Las herramientas se recolocan en su sitio, sin moverlas si no lo pides.',
      'Si el garaje de tu chalé en {barrio} guarda también las herramientas de jardín, esa zona recibe su propio tratamiento: suelo con restos de tierra, estanterías polvorientas y paredes con manchas de barro. Nada se mueve de sitio salvo que lo pidas expresamente.',
    ],
    faqs: [
      { q: '¿Incluís también la limpieza del suelo exterior del garaje del chalé en {barrio}?', a: 'Sí. Si el acceso al garaje tiene zona exterior pavimentada, la incluimos en el servicio si el cliente lo solicita. En {barrio}, el barro y las hojas de otoño acumulan en esta zona y conviene limpiarla junto con el interior.' },
      { q: '¿Con qué frecuencia necesita limpieza un garaje de chalé en {barrio}?', a: 'Un garaje de chalé en {barrio} con uso habitual necesita limpieza profesional 2-3 veces al año. En primavera y en otoño son los momentos en que más se nota la diferencia.' },
    ],
  },
  'rural': {
    tituloPagina: 'Limpieza de garaje o cochera rural en {barrio}: barro, polvo de campo y grasa',
    h1Qualifier: 'rural · cochera con tierra, maquinaria y polvo orgánico',
    metaDescAngle: 'Limpiamos garajes, cocheras y almacenes rurales en {barrio}: tierra de campo, grasa de maquinaria agrícola y polvo sedimentado. Desengrasante ecológico.',
    speakableIntro: [
      'Las cocheras y garajes en las casas rurales de {barrio} trabajan con un tipo de suciedad que no tiene ningún garaje urbano: tierra de huerto o finca, residuos de maquinaria agrícola, paja, polvo vegetal y manchas de gasoil o aceite de tractor. Zentro Limpiezas trabaja en el entorno rural de Ferrolterra y conoce bien este tipo de espacio.',
      'La cochera de una casa rural en {barrio} tiene un tipo de suciedad que un garaje urbano no conoce: tierra de huerto o finca, restos de maquinaria agrícola, paja, polvo vegetal y manchas de gasoil o aceite de tractor. Conocemos bien este tipo de espacio por el trabajo habitual en el entorno rural de Ferrolterra.',
      'En {barrio}, una cochera rural acumula lo que ningún garaje de ciudad tiene: tierra de campo, residuos de maquinaria agrícola, paja y polvo vegetal, manchas de gasoil o aceite de tractor. Es un tipo de suciedad que trabajamos habitualmente en el entorno rural de la comarca.',
    ],
    problemaH2: '¿Qué suciedad acumula una cochera rural en {barrio}?',
    problemaContent: [
      'La cochera o garaje rural de {barrio} acumula suciedad muy diferente a la urbana: tierra y barro de finca que entra con los vehículos y el calzado, residuos de maquinaria agrícola (gasoil, aceite, grasa de rodamientos), polvo vegetal de paja, hierba cortada o leña, y en algunos casos restos de herramienta de obra. Todo requiere aspirado previo y desengrasante específico para residuos orgánicos y de maquinaria.',
      'Nada que ver con la suciedad urbana: la cochera o garaje rural de {barrio} recibe tierra y barro de finca con cada entrada de vehículo o persona, residuos de maquinaria agrícola —gasoil, aceite, grasa de rodamientos—, y polvo vegetal de paja, hierba o leña. Hace falta aspirado previo y un desengrasante pensado para residuos orgánicos y de maquinaria.',
      'La cochera rural de {barrio} pide un tratamiento distinto al de cualquier garaje urbano: tierra de finca, restos de maquinaria agrícola con gasoil y aceite, y polvo vegetal de paja o leña. Empezamos siempre con aspirado a fondo antes de aplicar un desengrasante específico para este tipo de residuo.',
    ],
    ventanasH2: 'Limpieza de almacenes y cobertizos en el rural de {barrio}',
    ventanasContent: [
      'Muchas casas rurales de {barrio} tienen además de la cochera, un almacén, una bajera o un cobertizo donde se guarda herramienta, leña o maquinaria. La limpieza de estos espacios es la que más tiempo lleva y más se pospone: el polvo se asienta en años formando capas, y en los más húmedos hay manchas de moho en paredes. El servicio incluye todos estos espacios anejos si el cliente lo solicita.',
      'Muchas casas rurales de {barrio} tienen además de la cochera un almacén, bajera o cobertizo para herramienta, leña o maquinaria. Son los espacios que más se posponen y donde el polvo lleva años acumulándose en capas, con manchas de moho si hay humedad. Los incluimos en el servicio si el cliente lo pide.',
      'Si tu casa en {barrio} tiene, además de la cochera, algún almacén o cobertizo anejo, suele ser el espacio con más años de polvo acumulado y, si hay humedad, algo de moho en las paredes. Lo tratamos en la misma visita si lo necesitas, con el mismo cuidado que la cochera principal.',
    ],
    faqs: [
      { q: '¿Podéis limpiar también los cobertizos y almacenes anejos a la casa rural en {barrio}?', a: 'Sí. En el entorno rural de {barrio} trabajamos habitualmente con varios espacios: cochera, almacén, bajera o cobertizo. Lo presupuestamos todo junto antes de empezar.' },
      { q: '¿Limpiáis también la maquinaria agrícola guardada en la cochera de {barrio}?', a: 'No limpiamos la maquinaria en sí. La limpieza incluye el espacio: suelo, paredes, techo y puerta. Si hay maquinaria guardada, trabajamos alrededor sin moverla a menos que el cliente lo solicite.' },
    ],
  },
  'industrial': {
    tituloPagina: 'Limpieza de garaje o aparcamiento en el polígono de {barrio}: grasa industrial',
    h1Qualifier: 'zona industrial · aparcamiento con grasa y polvo de producción',
    metaDescAngle: 'Limpiamos garajes y zonas de aparcamiento en los polígonos de {barrio}: grasa industrial, aceite de motor pesado y polvo de actividad. Desengrasante profesional ecológico.',
    speakableIntro: [
      'Las plazas de aparcamiento y garajes en los polígonos y zonas industriales de {barrio} acumulan el tipo de suciedad más difícil de tratar: grasa de maquinaria pesada, aceite de motor de vehículos industriales, polvo de caucho de camiones y furgonetas, y partículas metálicas en suspensión que se depositan en el suelo. Esta suciedad requiere desengrasantes industriales de alta eficacia.',
      'Las plazas de aparcamiento y garajes de los polígonos de {barrio} acumulan la suciedad más difícil de tratar: grasa de maquinaria pesada, aceite de vehículos industriales, polvo de caucho de camiones y partículas metálicas en el suelo. Requiere desengrasantes industriales de alta eficacia, no un producto estándar.',
      'En el polígono de {barrio}, un garaje o plaza de aparcamiento recibe un tipo de suciedad que un garaje residencial no conoce: grasa de maquinaria pesada, aceite de vehículos industriales, polvo de caucho de camiones. Solo un desengrasante industrial de alta eficacia consigue tratarlo de verdad.',
    ],
    problemaH2: '¿Por qué la suciedad del garaje en el polígono de {barrio} es tan difícil de eliminar?',
    problemaContent: [
      'La grasa de maquinaria industrial de {barrio} tiene una composición diferente al aceite de turismo: es más viscosa, se adhiere más al hormigón y con el tiempo forma una costra. Sin desengrasante específico y agua caliente a presión, la grasa industrial no se disuelve con el fregado habitual. Además, el polvo de caucho de camiones se incrusta en la porosidad del hormigón oscureciendo el suelo progresivamente.',
      'La grasa de maquinaria en {barrio} no se comporta como el aceite de un coche normal: es más viscosa, se adhiere al hormigón y con el tiempo forma costra. Sin desengrasante específico y agua caliente a presión no se disuelve con un fregado convencional, y el polvo de caucho de los camiones se incrusta en la porosidad del suelo.',
      'En el polígono de {barrio}, la grasa industrial es un problema distinto al del aceite doméstico: más viscosa, más adherente al hormigón, y con tendencia a formar costra si no se trata. Hace falta desengrasante específico con agua caliente a presión; de lo contrario, el polvo de caucho de los camiones acaba incrustado en el suelo.',
    ],
    ventanasH2: 'Limpieza de garajes de empresa en {barrio}: zona de carga, acceso y aparcamiento',
    ventanasContent: [
      'Los garajes y zonas de aparcamiento de las empresas del polígono de {barrio} incluyen la zona de acceso de camiones o furgonetas, el aparcamiento del personal, y en algunos casos el muelle de carga. El servicio incluye todas estas zonas adaptando el producto y la técnica a la suciedad de cada área.',
      'El garaje de una empresa en {barrio} suele incluir la zona de acceso de camiones o furgonetas, el aparcamiento del personal y, a veces, el muelle de carga. Adaptamos el producto y la técnica a cada zona dentro de la misma visita.',
      'En las empresas del polígono de {barrio}, el servicio cubre habitualmente varias zonas dentro del mismo espacio: acceso de camiones, aparcamiento de personal y, si lo hay, el muelle de carga. Cada una recibe el producto y la técnica que necesita, todo en la misma visita.',
    ],
    faqs: [
      { q: '¿Podéis limpiar las zonas de aparcamiento industriales de {barrio} en horario nocturno?', a: 'Sí. Para no interrumpir la actividad del polígono de {barrio}, trabajamos habitualmente en horario nocturno o en fin de semana. Lo coordinamos con el responsable de las instalaciones antes de cada servicio.' },
      { q: '¿Tenéis fregadora industrial para el polígono de {barrio}?', a: 'Sí. Para superficies grandes o con grasa industrial severa, trabajamos con fregadora de suelos de alta eficacia. Es el único método que da resultados visibles en pavimentos industriales con años de suciedad acumulada.' },
    ],
  },
};

// ─── MUDANZAS ───────────────────────────────────────────────────────────────

const MUDANZAS_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoArquetipo> = {
  'bloque-obrero': {
    tituloPagina: 'Limpieza de mudanza en {barrio}: salida de alquiler en piso de bloque',
    h1Qualifier: 'piso de alquiler · limpieza de salida con garantía de devolución',
    metaDescAngle: 'Limpieza de mudanza en {barrio}: dejamos el piso de alquiler en perfectas condiciones. Baños con antical, cocina desengrasada, cristales y suelos a fondo. Presupuesto cerrado.',
    speakableIntro: [
      'Cuando dejas un piso de alquiler en {barrio}, la limpieza de mudanza es el servicio que determina si recuperas la fianza o no. El propietario va a revisar la cocina, el baño, los cristales, los suelos y el estado de los electrodomésticos fijos. Una limpieza de mudanza profesional en {barrio} trata todos estos puntos con el nivel de detalle que exige la entrega.',
      'En un piso de alquiler de {barrio}, la limpieza de mudanza no es un extra: es lo que decide si el propietario devuelve la fianza entera. Va a mirar cocina, baño, cristales, suelos y electrodomésticos fijos con lupa. Por eso una limpieza de mudanza profesional en {barrio} cubre cada uno de esos puntos con el detalle que exige una entrega.',
      'Si vas a dejar un piso de alquiler en {barrio}, la fianza depende casi por completo de la limpieza de salida: el propietario revisa cocina, baño, cristales, suelos y electrodomésticos fijos uno por uno. Tratamos cada punto con el nivel de detalle que exige una entrega, no una limpieza de mantenimiento.',
    ],
    problemaH2: '¿Qué revisa el propietario al entregar un piso de alquiler en {barrio}?',
    problemaContent: [
      'La revisión de salida de un piso en {barrio} se fija especialmente en: cocina (grasa en campana y azulejos, estado de los electrodomésticos fijos), baño (cal en mampara y grifería, estado del sanitario), suelos (manchas en gres o rayaduras en tarima), cristales y estado de los marcos, y el estado de las paredes. Una limpieza de mudanza profesional cubre todos estos puntos con productos específicos.',
      'Al entregar un piso en {barrio}, el propietario se fija especialmente en la cocina (grasa en campana y azulejos, estado de electrodomésticos), el baño (cal en mampara y grifería, estado del sanitario), los suelos (manchas en gres o rayaduras en tarima), los cristales y marcos, y las paredes. Cubrimos todos esos puntos con el producto específico para cada superficie.',
      'La revisión de un piso de alquiler en {barrio} sigue casi siempre el mismo orden: cocina, baño, suelos, cristales y paredes. En la cocina se mira la grasa de campana y azulejos; en el baño, la cal de mampara y grifería; en los suelos, manchas o rayaduras. Una limpieza de mudanza que no cubra los cinco puntos deja huecos que el propietario suele encontrar.',
    ],
    ventanasH2: 'Limpieza de cocina y baño en la salida del alquiler en {barrio}',
    ventanasContent: [
      'La cocina y el baño son las dos zonas más críticas en la limpieza de mudanza de un piso en {barrio}. En la cocina: desengrase completo de campana (exterior e interior con filtros), encimera, azulejos y frontales de muebles, y horno y microondas si estaban en el piso. En el baño: descalcificación completa de grifería, mampara y sanitario con antical profesional.',
      'Cocina y baño son los dos puntos que más se revisan en la salida de un piso en {barrio}. En la cocina: desengrase completo de campana por dentro y por fuera, encimera, azulejos y frentes de muebles, además de horno y microondas si estaban incluidos. En el baño: descalcificación a fondo de grifería, mampara y sanitario con antical profesional.',
      'Si hay dos zonas que definen si se recupera la fianza en {barrio}, son la cocina y el baño. Desengrasamos la campana entera —incluidos los filtros—, encimera, azulejos y frentes de mueble; en el baño, tratamos con antical profesional la grifería, la mampara y el sanitario hasta dejarlos sin rastro de cal.',
    ],
    faqs: [
      { q: '¿La limpieza de mudanza en {barrio} garantiza la devolución de la fianza?', a: 'Garantizamos que el piso queda en el nivel de limpieza que cualquier propietario razonable puede exigir. Si el propietario detecta algo que no está correcto y nos avisa en las 48 horas siguientes, volvemos a revisarlo sin coste adicional.' },
      { q: '¿Cuánto tiempo dura una limpieza de mudanza en un piso de {barrio}?', a: 'Para un piso de 70-80 m² en {barrio} con 3 habitaciones, entre 5 y 8 horas con equipo de dos personas. Depende del estado y de cuánto tiempo lleva el piso sin limpieza a fondo. El tiempo y el precio los damos cerrados antes de empezar.' },
    ],
  },
  'historico': {
    tituloPagina: 'Limpieza de mudanza en piso histórico de {barrio}: suelos de madera y acabados',
    h1Qualifier: 'edificio histórico · tarima, parquet y detalles de época',
    metaDescAngle: 'Limpieza de mudanza en pisos históricos de {barrio}: suelos de madera tratados sin dañarlos, molduras, ventanas de guillotina y baños con cal acumulada. Presupuesto cerrado.',
    speakableIntro: [
      'La limpieza de mudanza en un piso histórico de {barrio} tiene una dificultad añadida: los suelos de madera o parquet de época que no admiten agua en exceso, los rodapiés con moldura que acumulan polvo en los recovecos, y las ventanas de guillotina con carriles que llevan años sin limpiarse en profundidad. Una limpieza de mudanza bien hecha en este tipo de piso requiere conocer qué producto usar en cada superficie.',
      'La mudanza de un piso histórico en {barrio} tiene su propia dificultad: suelos de madera o parquet que no toleran exceso de agua, rodapiés con moldura que acumulan polvo en cada recoveco, y ventanas de guillotina con carriles que llevan años sin una limpieza a fondo. Sabemos qué producto usar en cada superficie para no dañar nada de época.',
      'En {barrio}, un piso histórico exige una limpieza de mudanza distinta a la de un piso moderno: madera o parquet que sufre con el agua en exceso, molduras que atrapan polvo, y ventanas de guillotina con carriles sin limpiar en años. Cada superficie recibe el producto que le corresponde, nunca el mismo para todas.',
    ],
    problemaH2: '¿Qué tiene de especial la limpieza de mudanza en los pisos históricos de {barrio}?',
    problemaContent: [
      'En los pisos históricos de {barrio}, los puntos más revisados en la entrega son el suelo y la carpintería. Un suelo de madera o parquet mal limpiado deja marcas, o peor, se daña con el agua en exceso. Las molduras de los rodapiés acumulan polvo que solo se elimina con cepillos finos. Las ventanas de guillotina necesitan limpieza de carriles. Son detalles que la limpieza doméstica convencional raramente cubre.',
      'En los pisos históricos de {barrio}, lo que más se revisa al entregar son el suelo y la carpintería. Un suelo de madera mal tratado se marca o se hincha con exceso de agua; las molduras de los rodapiés solo se limpian bien con cepillo fino; las ventanas de guillotina necesitan limpieza de carriles. Son detalles que una limpieza doméstica normal casi nunca cubre.',
      'El suelo y la carpintería son los puntos críticos en la mudanza de un piso histórico de {barrio}: la madera se daña con agua en exceso, las molduras acumulan polvo que un paño normal no llega a sacar, y los carriles de las ventanas de guillotina llevan años sin tocarse. Es precisamente lo que una limpieza convencional suele dejar sin resolver.',
    ],
    ventanasH2: 'Cuidado de suelos de madera en la limpieza de mudanza de {barrio}',
    ventanasContent: [
      'Los suelos de tarima y parquet de los pisos históricos de {barrio} se limpian en semi-seco: mopa de microfibra muy bien escurrida, sin agua en exceso que hinche la madera. Para las manchas puntuales, producto específico para madera de pH neutro aplicado con paño. El resultado es un suelo limpio sin marcas de agua y con el brillo que tenía antes.',
      'Los suelos de tarima o parquet en {barrio} se tratan en semi-seco: mopa de microfibra bien escurrida, nada de agua en exceso que hinche la madera. Las manchas puntuales se tratan con producto de pH neutro específico para madera, aplicado con paño. El resultado es un suelo limpio sin marcas de agua ni pérdida de brillo.',
      'En un piso histórico de {barrio}, el suelo de madera se limpia casi seco: mopa de microfibra bien escurrida y, para manchas concretas, producto de pH neutro aplicado con paño, nunca a chorro. Es la única forma de que quede limpio sin marcas de agua ni riesgo de hinchar la tarima.',
    ],
    faqs: [
      { q: '¿Pueden limpiarse los suelos de parquet y tarima de {barrio} sin dañarlos en la mudanza?', a: 'Sí, con la técnica adecuada. Usamos mopa de microfibra casi seca y producto específico para madera de pH neutro. Nunca agua en exceso ni productos con amoniaco que decoloran la tarima.' },
      { q: '¿La limpieza de mudanza en {barrio} incluye también las ventanas de guillotina?', a: 'Sí. Los cristales y los carriles de las ventanas de guillotina están incluidos en el servicio. Los carriles acumulan polvo en años de uso que solo se elimina con cepillo fino, y es uno de los puntos que más se revisan en pisos históricos.' },
    ],
  },
  'marinero': {
    tituloPagina: 'Limpieza de mudanza en {barrio}: humedad marina y salitre en salida de piso',
    h1Qualifier: 'zona costera · humedad acumulada y salitre en salida',
    metaDescAngle: 'Limpieza de mudanza en {barrio}: tratamos manchas de condensación, salitre en cristales y humedad en paredes. Entrega en perfectas condiciones. Presupuesto cerrado.',
    speakableIntro: [
      'Dejar un piso en {barrio} en perfectas condiciones implica resolver problemas específicos de la zona costera: el salitre de los cristales que se acumula en semanas, las manchas de condensación en paredes y ventanas que deja el invierno marino, y en algunos casos manchas de moho incipiente en baños y cocina por la alta humedad. La limpieza de mudanza en {barrio} trata todos estos problemas antes de la entrega al propietario.',
      'En {barrio}, dejar un piso en condiciones para el propietario implica resolver problemas propios de la costa: salitre en los cristales que se acumula en pocas semanas, condensación en paredes y ventanas por el invierno marino, y a veces moho incipiente en baño y cocina por la humedad. Tratamos todos estos frentes antes de la entrega.',
      'La limpieza de mudanza en {barrio} tiene un añadido que no existe tierra adentro: el salitre de los cristales, la condensación de paredes y ventanas del invierno marino, y en los pisos más húmedos, algo de moho en baño y cocina. Ninguno de estos puntos se resuelve con una limpieza estándar de interior.',
    ],
    problemaH2: '¿Qué problemas de limpieza deja el ambiente marino en los pisos de {barrio}?',
    problemaContent: [
      'El ambiente marino de {barrio} deja en los pisos tres problemas específicos: salitre en los cristales de todas las ventanas y mamparas, manchas de condensación en paredes y techos de baño y cocina por la alta humedad, y en los pisos más expuestos, manchas de moho en juntas de azulejos y techos. Una limpieza de mudanza correcta en {barrio} debe tratar todos estos puntos con productos específicos.',
      'El ambiente marino de {barrio} deja tres marcas típicas en un piso: salitre en cristales y mamparas, condensación en paredes y techos de baño y cocina por la humedad ambiente, y en los pisos más expuestos, moho en juntas de azulejos y techos. Una limpieza de mudanza que no trate estos tres puntos deja el piso a medias.',
      'En {barrio}, un piso arrastra tres problemas típicos del ambiente marino al momento de la mudanza: salitre incrustado en el cristal, condensación acumulada en paredes de baño y cocina, y en casos de más humedad, moho en las juntas de los azulejos. Tratamos los tres con producto específico, no con limpiacristales y fregona estándar.',
    ],
    ventanasH2: 'Tratamiento de humedad y condensación en la limpieza de mudanza de {barrio}',
    ventanasContent: [
      'Las manchas de condensación en paredes y techos de {barrio} requieren antifúngico ecológico aplicado en las zonas afectadas para eliminar el moho superficial. Si hay manchas que han penetrado en la pintura, lo avisamos al propietario para que lo gestione antes de que llegue el nuevo inquilino. Para el salitre en cristales y mamparas, quitacal de pH ácido controlado que lo disuelve sin rayar.',
      'Las manchas de condensación en {barrio} se tratan con antifúngico ecológico aplicado en las zonas afectadas. Si la mancha ha penetrado en la pintura, se lo indicamos al propietario para que lo gestione antes de la entrada del nuevo inquilino. El salitre de cristales y mamparas se retira con quitacal de pH ácido controlado que no raya el vidrio.',
      'Para las manchas de humedad en paredes de {barrio} usamos antifúngico ecológico específico; si han calado en la pintura, avisamos al propietario para que lo gestione antes de la nueva entrada. El salitre de cristales y mamparas se disuelve con quitacal de pH ácido controlado, sin riesgo de rayar el vidrio.',
    ],
    faqs: [
      { q: '¿Las manchas de moho en los azulejos del baño de {barrio} se pueden eliminar en la mudanza?', a: 'El moho superficial en azulejos sí. Con antifúngico ecológico y cepillo fino, las manchas desaparecen. Si el moho ha penetrado las juntas o está en la silicona, la solución es cambiar las juntas, algo que te indicamos si lo encontramos.' },
      { q: '¿La limpieza de mudanza en {barrio} incluye el tratamiento de salitre en cristales?', a: 'Sí. El salitre en los cristales está incluido en el servicio de mudanza de {barrio}. Es uno de los puntos más visibles en la revisión de salida y requiere quitacal de pH ácido específico, no el limpiacristales convencional.' },
    ],
  },
  'segunda-residencia': {
    tituloPagina: 'Limpieza de mudanza en segunda residencia de {barrio}: venta o cambio de uso',
    h1Qualifier: 'segunda residencia · entrega para venta o nuevo propietario',
    metaDescAngle: 'Limpieza de mudanza para venta o entrega de segunda residencia en {barrio}. Eliminamos polvo de temporadas, humedad de invierno y dejamos el inmueble a punto. Presupuesto cerrado.',
    speakableIntro: [
      'Cuando se vende una segunda residencia en {barrio} o se entrega a un nuevo propietario, la limpieza de mudanza es diferente a la de un piso de alquiler habitual: hay meses de polvo acumulado entre temporadas, condensación de los inviernos sin calefacción, y a veces objetos que el propietario anterior dejó y hay que organizar. Zentro Limpiezas gestiona la limpieza de entrega de segunda residencia en {barrio} de principio a fin.',
      'Vender o entregar una segunda residencia en {barrio} pide otro tipo de limpieza de mudanza: meses de polvo acumulado entre temporadas, condensación de inviernos sin calefacción, y a veces objetos que dejó el propietario anterior por organizar. Nos encargamos de la entrega de principio a fin.',
      'La entrega de una segunda residencia en {barrio} es distinta a la de un piso de alquiler habitual: hay polvo de varios meses sin uso, humedad acumulada de inviernos sin calefacción, y en ocasiones objetos que hay que ordenar antes de limpiar. Gestionamos todo el proceso de principio a fin.',
    ],
    problemaH2: '¿Qué estado suele tener una segunda residencia de {barrio} cuando se pone a la venta?',
    problemaContent: [
      'Las segundas residencias de {barrio} con años de uso tienen polvo sedimentado en capas sobre muebles y suelos, manchas de condensación en cristales y paredes que se acumulan invierno tras invierno, la cocina y el baño con el uso intensivo del verano sin limpieza a fondo, y el olor a cerrado que se instala en los tejidos. La limpieza de mudanza para venta trata todo esto con el nivel que exige la visita de un comprador potencial.',
      'Con años de uso estacional, una segunda residencia en {barrio} suele tener polvo en capas sobre muebles y suelos, condensación acumulada invierno tras invierno en cristales y paredes, cocina y baño con el desgaste del verano sin limpieza a fondo, y olor a cerrado instalado en los tejidos. Lo tratamos todo con el nivel que exige la visita de un comprador.',
      'Una segunda residencia con años de uso en {barrio} llega a la entrega con capas de polvo acumulado, humedad de varios inviernos en cristales y paredes, cocina y baño desgastados por el uso intensivo de verano, y ese olor a cerrado tan característico. La limpieza para venta necesita cubrir cada uno de estos frentes, no solo lo visible.',
    ],
    ventanasH2: 'Limpieza de salida para poner en venta o alquiler la propiedad en {barrio}',
    ventanasContent: [
      'La limpieza previa a la venta de una segunda residencia en {barrio} tiene un objetivo claro: que la vivienda cause buena impresión en la primera visita. Cristales y ventanas sin salitre ni condensación, baños y cocina a un nivel que no genere dudas, suelos fregados y brillantes, y un olor fresco que sustituya al de cerrado. Lo conseguimos en una visita completa de entre 6 y 10 horas según la superficie.',
      'El objetivo de la limpieza previa a la venta en {barrio} es simple: que la vivienda cause buena impresión desde la primera visita. Cristales sin salitre ni condensación, baños y cocina a un nivel que no genere dudas, suelos brillantes y un olor fresco que sustituya al de cerrado. Una visita completa suele llevar entre 6 y 10 horas según la superficie.',
      'Antes de que un comprador visite una segunda residencia en {barrio}, el objetivo es que todo hable bien de la vivienda: cristales sin rastro de salitre, baño y cocina que no generen dudas, suelos brillantes y sin olor a cerrado. Calculamos entre 6 y 10 horas de trabajo según los metros de la propiedad.',
    ],
    faqs: [
      { q: '¿Podéis hacer la limpieza de la segunda residencia de {barrio} sin que el propietario esté presente?', a: 'Sí. Trabajamos habitualmente con propietarios que nos dan acceso sin estar presentes. Al terminar enviamos fotos de todas las estancias y el WhatsApp de confirmación. Si encontramos algo a valorar, avisamos en el momento.' },
      { q: '¿La limpieza incluye también los muebles o solo el espacio de la vivienda de {barrio}?', a: 'La limpieza incluye el espacio: suelos, paredes accesibles, baños, cocina, cristales y electrodomésticos fijos. Los muebles se limpian en su exterior (superficies, frentes y manillas). Si hay objetos que hay que mover, lo coordinamos previamente con el propietario.' },
    ],
  },
  'chalet': {
    tituloPagina: 'Limpieza de mudanza en chalé de {barrio}: jardín, garaje y toda la propiedad',
    h1Qualifier: 'chalé unifamiliar · limpieza a fondo de toda la propiedad',
    metaDescAngle: 'Limpieza de mudanza en chalés y adosados de {barrio}: vivienda completa, garaje, trastero y acceso exterior. Presupuesto cerrado que incluye todo sin sorpresas.',
    speakableIntro: [
      'La limpieza de mudanza en un chalé o adosado de {barrio} es considerablemente más compleja que en un piso de bloque: hay más superficie, más zonas a cubrir (garaje, trastero, jardín, acceso exterior) y a menudo más detalles acumulados en años de uso. Zentro Limpiezas da presupuesto por la propiedad completa antes de empezar, con precio cerrado que incluye todo lo acordado sin sorpresas.',
      'Un chalé o adosado de {barrio} tiene una mudanza más compleja que un piso: más superficie, más zonas —garaje, trastero, jardín, acceso exterior— y a menudo más detalles acumulados con los años. Damos presupuesto por la propiedad completa antes de empezar, con precio cerrado y sin sorpresas.',
      'La mudanza de un chalé en {barrio} no se parece a la de un piso: hay que cubrir garaje, trastero, jardín y acceso exterior además de la vivienda, con años de detalles acumulados en cada zona. Presupuestamos la propiedad completa por adelantado, sin añadidos de última hora.',
    ],
    problemaH2: '¿Qué zonas adicionales hay que limpiar en un chalé de {barrio} frente a un piso?',
    problemaContent: [
      'A diferencia de un piso de bloque, un chalé en {barrio} tiene zonas adicionales que forman parte de la entrega: el garaje con sus manchas de aceite y barro, el trastero o almacén con el polvo acumulado, el acceso exterior pavimentado con barro y hojas, y la terraza o porche cubierto con suciedad de la intemperie. La limpieza de mudanza de chalé incluye todas estas zonas en un único servicio presupuestado.',
      'Un chalé de {barrio} suma a la limpieza de un piso normal varias zonas propias: el garaje con manchas de aceite y barro, el trastero con su polvo acumulado, el acceso exterior con barro y hojas, y la terraza o porche con la suciedad de la intemperie. Todo entra en un único servicio presupuestado.',
      'Frente a un piso de bloque, un chalé en {barrio} añade zonas enteras a la limpieza de mudanza: garaje con aceite y barro, trastero con polvo de años, acceso exterior con barro y hojas de temporada, y terraza o porche con suciedad de intemperie. Todo se presupuesta como un único servicio.',
    ],
    ventanasH2: 'Limpieza de terrazas, porches y accesos en la mudanza de chalé en {barrio}',
    ventanasContent: [
      'Las terrazas y los porches de los chalés de {barrio} acumulan la suciedad más difícil de tratar: polvo orgánico depositado en años, manchas de humedad y verdín en pavimentos exteriores, moho en los techos de porches cubiertos, y barro y hojas en temporadas de lluvia. El servicio incluye el barrido y fregado de estas zonas con producto específico para pavimento exterior sin ácidos que dañen el gres de terraza.',
      'Las terrazas y porches de los chalés de {barrio} suelen ser la parte más difícil: polvo orgánico de años, humedad y verdín en el pavimento exterior, moho en techos de porches cubiertos, y barro con hojas en temporada de lluvia. Barremos y fregamos estas zonas con producto específico para exterior que no ataca el gres de terraza.',
      'En un chalé de {barrio}, terraza y porche acumulan una suciedad distinta a la del interior: polvo orgánico, verdín en el pavimento, moho en zonas cubiertas y barro estacional. Las tratamos con producto pensado para exterior, sin ácidos que dañen el gres de la terraza.',
    ],
    faqs: [
      { q: '¿La limpieza de mudanza del chalé de {barrio} incluye también el garaje y el trastero?', a: 'Sí. El presupuesto de mudanza de chalé en {barrio} incluye la vivienda completa, el garaje y el trastero en una única visita. Si hay espacios adicionales como piscina o caseta de jardín, los presupuestamos aparte.' },
      { q: '¿Cuánto tiempo dura la limpieza de mudanza de un chalé en {barrio}?', a: 'Para un chalé de 150-200 m² con garaje y trastero, entre 1 y 2 días con equipo de dos personas. Damos el tiempo y el precio cerrados antes de empezar para que puedas organizarte.' },
    ],
  },
  'rural': {
    tituloPagina: 'Limpieza de mudanza en casa rural de {barrio}: venta o entrega de vivienda',
    h1Qualifier: 'casa rural · limpieza profunda para venta o nuevo inquilino',
    metaDescAngle: 'Limpieza de mudanza en casas rurales de {barrio}: polvo acumulado, humedad, suelos de piedra y bajeras. Presupuesto cerrado para toda la propiedad.',
    speakableIntro: [
      'La limpieza de mudanza en una casa rural de {barrio} es diferente a la de un piso urbano: hay más superficie, las bajeras y los almacenes acumulan polvo de años, los suelos de piedra o cerámica antigua necesitan productos específicos, y a menudo hay que tratar manchas de humedad en paredes de piedra. Zentro Limpiezas trabaja en el rural de Ferrolterra y conoce las particularidades de este tipo de inmueble.',
      'La mudanza de una casa rural en {barrio} tiene poco que ver con la de un piso: más superficie, bajeras y almacenes con años de polvo, suelos de piedra o cerámica antigua que necesitan producto específico, y a veces humedad en paredes de piedra. Conocemos bien este tipo de inmueble por el trabajo habitual en el rural de Ferrolterra.',
      'En {barrio}, una casa rural exige otro tipo de limpieza de mudanza: más metros que cubrir, bajeras y almacenes con polvo de años, suelos de piedra o cerámica antigua que no admiten cualquier producto, y humedad frecuente en paredes de piedra. Es un tipo de inmueble que trabajamos con regularidad en el entorno rural de la comarca.',
    ],
    problemaH2: '¿Qué hace especial la limpieza de mudanza en una casa rural de {barrio}?',
    problemaContent: [
      'Las casas rurales de {barrio} que se venden o cambian de arrendatario tienen zonas que no existen en los pisos de bloque: la bajera o cuadra reconvertida en almacén, el cobertizo, y suelos de piedra natural o cerámica antigua con años de uso. Estos espacios acumulan polvo en capas gruesas, manchas de humedad y en algunos casos restos de actividad agrícola. La limpieza de mudanza rural requiere más tiempo y productos específicos para materiales no estándar.',
      'Una casa rural en venta o cambio de inquilino en {barrio} tiene zonas que un piso de bloque no tiene: bajera o cuadra reconvertida en almacén, cobertizo, y suelos de piedra natural o cerámica antigua con años de uso. Todo eso acumula polvo en capas gruesas y a veces humedad, y necesita más tiempo y productos específicos que un piso estándar.',
      'En {barrio}, la mudanza de una casa rural incluye espacios que un piso urbano nunca tiene: bajera, cobertizo y suelos de piedra o cerámica antigua con años de desgaste. Esas zonas acumulan polvo en capas gruesas y, a veces, humedad, y necesitan más tiempo y productos distintos a los de una limpieza estándar.',
    ],
    ventanasH2: 'Suelos de piedra, madera y cerámica antigua en las casas de {barrio}',
    ventanasContent: [
      'Los suelos más frecuentes en las casas rurales de {barrio} para venta son la piedra natural, la cerámica antigua y la madera. La piedra necesita producto de pH neutro sin ácidos; la cerámica antigua, cepillado cuidadoso para no dañar el esmalte; la madera, limpieza casi en seco. Sabemos qué usar en cada caso. El resultado en estos suelos singulares es lo que más valoran los compradores que buscan una casa rural auténtica.',
      'Piedra natural, cerámica antigua y madera son los suelos más habituales en las casas rurales de {barrio} en venta. La piedra pide producto de pH neutro sin ácidos; la cerámica antigua, cepillado cuidadoso para no dañar el esmalte; la madera, limpieza casi en seco. Es justo lo que más valoran los compradores que buscan una casa rural auténtica.',
      'En las casas rurales de {barrio}, cada suelo pide su propio tratamiento: pH neutro sin ácidos para la piedra, cepillado suave para no dañar el esmalte de la cerámica antigua, y limpieza casi en seco para la madera. Un suelo bien tratado es de lo primero que nota un comprador que busca una casa rural con carácter.',
    ],
    faqs: [
      { q: '¿La limpieza de mudanza de {barrio} incluye también las bajeras y almacenes rurales?', a: 'Sí. El presupuesto de mudanza rural en {barrio} puede incluir los espacios anejos: bajera, almacén, cobertizo o cualquier espacio incluido en la venta. Lo presupuestamos en función de la superficie y el estado de cada espacio.' },
      { q: '¿Cuánto cuesta una limpieza de mudanza en una casa rural de {barrio}?', a: 'Para una casa rural de 100-150 m² en {barrio} con bajera o almacén, desde 200€. El precio depende del estado general, los metros y los espacios anejos que haya que limpiar. Damos el presupuesto cerrado antes de empezar.' },
    ],
  },
  'industrial': {
    tituloPagina: 'Limpieza de cambio de inquilino en local o nave de {barrio}',
    h1Qualifier: 'local industrial · limpieza de entrega para nuevo arrendatario',
    metaDescAngle: 'Limpiamos locales y naves de {barrio} al cambiar de inquilino: grasa industrial, suelos de hormigón, paredes y aseos a fondo. Presupuesto cerrado para propietarios.',
    speakableIntro: [
      'Cuando un local o nave industrial en {barrio} cambia de arrendatario, la limpieza de entrega es más exigente que la de un piso: hay que tratar la grasa de la actividad industrial anterior, eliminar el polvo de años de producción en paredes y techos, dejar los aseos desinfectados y el suelo de hormigón lo más limpio posible. Zentro Limpiezas trabaja con propietarios de naves y locales de {barrio} para la limpieza de cambio de inquilino.',
      'Cuando un local o nave de {barrio} cambia de inquilino, la limpieza de entrega es más exigente que la de un piso: hay que tratar la grasa de la actividad anterior, retirar el polvo de años en paredes y techos, dejar los aseos desinfectados y el suelo de hormigón lo más limpio posible. Trabajamos con propietarios de naves y locales de la zona para este tipo de entrega.',
      'El cambio de inquilino en una nave o local de {barrio} exige una limpieza que un piso normal no necesita: grasa de la actividad anterior, polvo industrial acumulado en paredes y techos, aseos con años de uso y suelo de hormigón que hay que dejar presentable. Trabajamos habitualmente con propietarios de la zona en este tipo de entregas.',
    ],
    problemaH2: '¿Qué suciedad deja un inquilino industrial al abandonar una nave de {barrio}?',
    problemaContent: [
      'La actividad industrial anterior deja en los locales y naves de {barrio} una suciedad específica: grasa de maquinaria en suelo y paredes, polvo de actividad (caucho, metal, pintura según el negocio), manchas de aceite e hidrocarburos en el pavimento de hormigón, y aseos con años de uso sin limpieza a fondo. Todo hay que tratarlo antes de que entre el nuevo inquilino.',
      'La actividad anterior deja en un local o nave de {barrio} un tipo de suciedad muy específica: grasa de maquinaria en suelo y paredes, polvo de la actividad —caucho, metal, pintura, según el negocio—, manchas de aceite en el hormigón, y aseos que llevan años sin una limpieza a fondo. Todo se trata antes de que entre el nuevo inquilino.',
      'En {barrio}, lo que deja un inquilino industrial al salir no se parece a lo que deja una vivienda: grasa de maquinaria, polvo propio de la actividad —caucho, metal, pintura—, manchas de aceite en el pavimento y aseos muy desgastados por el uso. Resolvemos todo antes de la entrada del siguiente inquilino.',
    ],
    ventanasH2: 'Limpieza de naves y locales industriales para entrega a nuevo inquilino en {barrio}',
    ventanasContent: [
      'La limpieza de entrega de nave en {barrio} incluye: suelo de hormigón con desengrasante industrial y fregadora, paredes hasta media altura con la suciedad de actividad, aseos completos con desinfección a fondo, zona de oficina si la hay, y cristales y ventanas. El resultado es un local que el propietario puede mostrar al siguiente inquilino directamente. Presupuesto cerrado antes de empezar, sin sorpresas al terminar.',
      'La entrega de una nave en {barrio} incluye suelo de hormigón con desengrasante industrial y fregadora, paredes hasta media altura con la suciedad propia de la actividad, aseos con desinfección completa, zona de oficina si la hay, y cristales. El local queda listo para que el propietario lo enseñe directamente al siguiente inquilino.',
      'Para dejar lista una nave en {barrio} tratamos el suelo de hormigón con desengrasante industrial y fregadora, las paredes hasta media altura, los aseos con desinfección a fondo, la oficina si la hay, y los cristales. El resultado es un local que el propietario puede enseñar sin más trámite.',
    ],
    faqs: [
      { q: '¿Cuánto cuesta la limpieza de entrega de una nave industrial en {barrio}?', a: 'Para una nave estándar de 150-300 m² en {barrio}, desde 250€. El precio incluye el suelo, las paredes hasta media altura, los aseos y la zona de entrada. Para naves más grandes o con suciedad industrial severa, lo presupuestamos con visita previa.' },
      { q: '¿Podéis hacer la limpieza de cambio de inquilino en {barrio} en un plazo urgente?', a: 'Sí. Si hay una fecha de entrega concreta, nos adaptamos al plazo. En {barrio} y toda Ferrolterra organizamos el equipo para cumplir el plazo acordado. Avísanos con el tiempo que tienes y te confirmamos si podemos cubrirlo.' },
    ],
  },
};

// ─── TRASTEROS ──────────────────────────────────────────────────────────────

const TRASTEROS_POR_ARQUETIPO: Record<BarrioArchetype, ContenidoArquetipo> = {
  'bloque-obrero': {
    tituloPagina: 'Limpieza de trastero en bloque de {barrio}: polvo sedimentado y humedad',
    h1Qualifier: 'sótano de bloque · polvo de años y humedad acumulada',
    metaDescAngle: 'Limpiamos trasteros en sótano de bloque en {barrio}: polvo sedimentado, manchas de humedad y antifúngico. Sin mover tus cosas sin permiso. Presupuesto cerrado.',
    speakableIntro: [
      'Los trasteros en los sótanos de los bloques de {barrio} son de los espacios que más tiempo pasan sin una limpieza profesional. El polvo se asienta en capas sobre el suelo, las cajas y los objetos guardados; la humedad del sótano favorece la aparición de manchas de moho en paredes; y en los trasteros más antiguos hay telarañas en todos los rincones. Zentro Limpiezas limpia trasteros en {barrio} sin mover los objetos que no se solicite mover.',
      'Los trasteros de sótano en {barrio} son de los espacios que menos limpieza reciben con diferencia: el polvo se acumula en capas sobre suelo, cajas y objetos, la humedad favorece el moho en las paredes, y en los más antiguos hay telarañas en cada rincón. Limpiamos sin mover nada que no nos pidas mover expresamente.',
      'Si el trastero de tu sótano en {barrio} lleva años sin tocar, lo normal es encontrar polvo en capas, humedad en las paredes que favorece el moho, y telarañas por todas partes en los más antiguos. Trabajamos alrededor de lo que hay guardado, sin mover nada salvo que nos lo pidas.',
    ],
    problemaH2: '¿Por qué los trasteros en sótano de {barrio} tienen tanto polvo y humedad?',
    problemaContent: [
      'Los sótanos de los bloques de {barrio} tienen escasa ventilación y son uno de los primeros espacios donde la humedad se asienta en invierno. La condensación en paredes y techo genera manchas de moho que con el tiempo se extienden. El polvo sedimentado en el suelo del trastero es más pesado que el doméstico, con partículas de cemento y tierra que se acumulan sin que el aire lo mueva. Sin aspirado previo, el fregado solo extiende ese polvo sin eliminarlo.',
      'La escasa ventilación de los sótanos de {barrio} favorece que la humedad se instale en invierno, y esa condensación es la que genera moho en paredes y techo. Además, el polvo del suelo del trastero es más pesado que el doméstico —con partículas de cemento y tierra— y sin aspirado previo, fregar solo lo redistribuye por el suelo.',
      'Los sótanos de {barrio} apenas ventilan, así que la humedad se instala fácilmente en invierno y da lugar a manchas de moho en paredes y techo. A eso se suma un polvo más pesado que el doméstico, con partículas de cemento y tierra que no se mueven solas. Fregar sin aspirar antes solo reparte ese polvo por el suelo, no lo elimina.',
    ],
    ventanasH2: 'Limpieza de paredes y techo del trastero en {barrio}: moho y telarañas',
    ventanasContent: [
      'La limpieza de un trastero en {barrio} no es solo el suelo: las paredes y el techo acumulan telarañas en los rincones y manchas de moho en las zonas más húmedas. El servicio incluye retirada de telarañas con extensible, limpieza de paredes con antifúngico ecológico donde haya manchas de moho o humedad, y limpieza del techo accesible. Para manchas de moho que han penetrado en el revestimiento, avisamos para que lo evalúes con un especialista.',
      'En el trastero de {barrio} no basta con el suelo: paredes y techo acumulan telarañas en los rincones y moho en las zonas más húmedas. Retiramos las telarañas con extensible, tratamos el moho con antifúngico ecológico donde haga falta, y limpiamos el techo accesible. Si el moho ha calado en el revestimiento, te lo indicamos para que lo revise un especialista.',
      'Un trastero en {barrio} no se limpia solo por abajo: quitamos las telarañas de rincones y techo con extensible, tratamos las manchas de moho de las paredes con antifúngico ecológico, y limpiamos lo accesible del techo. Si el moho ha penetrado el revestimiento, te avisamos para que lo evalúe un especialista.',
    ],
    faqs: [
      { q: '¿Movéis los muebles y cajas del trastero de {barrio} para limpiar?', a: 'Solo si el cliente nos lo pide explícitamente. La limpieza estándar trabaja alrededor de los objetos, limpiando el suelo y las paredes accesibles sin mover lo que está guardado. Si hay zonas que quieres vaciar, lo coordinamos antes de la visita.' },
      { q: '¿Tratáis el moho en las paredes del trastero de {barrio}?', a: 'Sí. Aplicamos antifúngico ecológico en las paredes con manchas de moho superficial. Si el moho ha penetrado en el revestimiento o hay humedad por filtración, te lo indicamos para que lo revises con un especialista.' },
    ],
  },
  'historico': {
    tituloPagina: 'Limpieza de trastero en edificio histórico de {barrio}: sótano sin ventilación',
    h1Qualifier: 'edificio histórico · sótano de piedra con humedad y polvo de décadas',
    metaDescAngle: 'Limpiamos trasteros en edificios históricos de {barrio}: paredes de piedra con moho, suelo sin desagüe y polvo de décadas. Técnica específica para espacios antiguos.',
    speakableIntro: [
      'Los trasteros en los edificios históricos de {barrio} son a menudo las bajeras o sótanos originales del inmueble: paredes de piedra, suelo de cemento o ladrillo sin desagüe moderno, y una humedad estructural que no tienen los sótanos de los edificios modernos. El polvo que se acumula en estos espacios lleva décadas asentado en capas; el moho en las paredes de piedra es superficial pero persistente; y la limpieza en semi-seco es obligatoria por la ausencia de desagüe.',
      'En {barrio}, muchos trasteros ocupan las bajeras o sótanos originales del edificio: paredes de piedra, suelo sin desagüe moderno y una humedad estructural que no tiene un sótano actual. El polvo lleva décadas asentado, el moho de la piedra es superficial pero persistente, y la limpieza siempre es en semi-seco por la falta de desagüe.',
      'Un trastero en un edificio histórico de {barrio} suele ser la bajera o el sótano original: piedra en las paredes, sin desagüe moderno y una humedad que no existe en un sótano actual. El polvo acumulado es de décadas, el moho de la piedra es persistente aunque superficial, y trabajamos siempre en semi-seco por la falta de desagüe.',
    ],
    problemaH2: '¿Cómo se limpia un trastero en una bajera histórica de {barrio} sin desagüe?',
    problemaContent: [
      'Sin desagüe en el suelo, no se puede usar agua en grandes cantidades en los trasteros históricos de {barrio}: habría que sacarla a mano o quedaría generando más humedad. La técnica correcta es en semi-seco: aspirado profundo del polvo, limpieza de paredes con antifúngico aplicado con paño, y fregado del suelo con la mínima cantidad de agua necesaria recogida con aspirador de agua.',
      'Sin desagüe en el suelo, no se puede usar agua en cantidad en los trasteros históricos de {barrio}: habría que retirarla a mano o generaría más humedad. Trabajamos en semi-seco: aspirado profundo, paredes con antifúngico aplicado con paño, y el poco fregado necesario recogido con aspirador de agua.',
      'La falta de desagüe en los trasteros históricos de {barrio} obliga a trabajar en semi-seco: aspirado a fondo, paredes tratadas con antifúngico aplicado con paño, y el mínimo de agua imprescindible en el suelo, recogida siempre con aspirador. Es la única forma de no generar más humedad de la que ya hay.',
    ],
    ventanasH2: 'Tratamiento de paredes de piedra con moho en los trasteros de {barrio}',
    ventanasContent: [
      'El moho en las paredes de piedra de los trasteros de {barrio} es consecuencia directa de la humedad que absorbe la piedra en los meses de invierno. El tratamiento con antifúngico ecológico de base acuosa elimina el moho superficial sin atacar la piedra ni dejar residuos. Para moho profundo que ha penetrado la piedra o cuando hay filtración activa, lo avisamos: la limpieza elimina el moho visible pero el origen estructural requiere intervención de albañilería.',
      'El moho en las paredes de piedra de los trasteros de {barrio} viene de la humedad que la propia piedra absorbe en invierno. Lo tratamos con antifúngico ecológico de base acuosa, que elimina el moho superficial sin dañar la piedra. Si es un moho profundo o hay filtración activa, te lo decimos: eso ya requiere albañilería, no limpieza.',
      'En los trasteros de piedra de {barrio}, el moho aparece porque la propia piedra retiene humedad durante el invierno. El antifúngico ecológico de base acuosa lo elimina sin atacar la piedra. Si el moho está muy metido o hay filtración activa, te lo indicamos: ahí la limpieza ya no basta, hace falta intervención estructural.',
    ],
    faqs: [
      { q: '¿Podéis limpiar trasteros sin agua corriente en los edificios históricos de {barrio}?', a: 'Sí. Trabajamos en semi-seco: llevamos nuestros propios depósitos de agua si no hay toma, y recogemos el agua sucia con aspirador húmedo. No necesitamos acceso a agua corriente en el trastero, aunque facilita el trabajo si la hay.' },
      { q: '¿La limpieza del trastero histórico de {barrio} incluye también las paredes de piedra?', a: 'Sí. Las paredes de piedra accesibles se limpian con antifúngico ecológico aplicado con paño. Para paredes con moho activo por filtración, te lo indicamos para que lo revises con un técnico de humedades o restauración.' },
    ],
  },
  'marinero': {
    tituloPagina: 'Limpieza de trastero en {barrio}: humedad marina, salitre y moho costero',
    h1Qualifier: 'zona costera · trastero con humedad marina y salitre',
    metaDescAngle: 'Limpiamos trasteros en {barrio}: humedad de ambiente marino, salitre en superficies metálicas y moho por condensación. Tratamiento antifúngico certificado. Presupuesto en 24h.',
    speakableIntro: [
      'Los trasteros en las zonas costeras de {barrio} tienen un problema que no aparece en los del interior: la humedad marina que penetra en el ambiente del trastero deposita salitre en las superficies metálicas, acelera la aparición de moho en paredes y techos, y genera una humedad ambiente que deteriora lo que se guarda dentro. La limpieza del trastero en {barrio} debe incorporar tratamiento de salitre y antifúngico para que el resultado dure.',
      'En {barrio}, los trasteros tienen un problema que no existe tierra adentro: la humedad marina deposita salitre en las superficies metálicas, acelera el moho en paredes y techo, y genera una humedad ambiente que deteriora lo guardado dentro. La limpieza aquí siempre incluye tratamiento de salitre además del antifúngico.',
      'Un trastero en {barrio} envejece distinto a uno de interior: la humedad marina deja salitre en lo metálico, acelera el moho de paredes y techo, y crea un ambiente húmedo que deteriora lo que guardas. Por eso el servicio aquí combina siempre salitre y antifúngico, no uno solo.',
    ],
    problemaH2: '¿Cómo afecta el ambiente marino de {barrio} a los trasteros?',
    problemaContent: [
      'El ambiente marino de {barrio} penetra en los trasteros por las juntas de la puerta y la ventilación. El salitre que lleva el aire marino se deposita en las paredes metálicas y actúa como acelerador de la corrosión. La humedad elevada favorece el crecimiento de moho en paredes y techo, especialmente en los más fríos y sin luz. Sin tratamiento, el moho vuelve en semanas; con antifúngico ecológico correctamente aplicado, el intervalo se alarga significativamente.',
      'La humedad marina de {barrio} entra por las juntas de la puerta y la ventilación del trastero. El salitre se deposita en las paredes metálicas y acelera su corrosión, mientras la humedad favorece el moho en paredes y techo, sobre todo en las zonas más frías y sin luz. Sin tratamiento, el moho reaparece en semanas; con antifúngico bien aplicado, tarda mucho más.',
      'En {barrio}, el ambiente marino se cuela en el trastero por las juntas de la puerta y la ventilación. El salitre ataca las superficies metálicas y la humedad favorece el moho, especialmente en las zonas más frías y oscuras. Sin tratamiento, el moho vuelve en semanas; con el antifúngico correcto, el intervalo se alarga considerablemente.',
    ],
    ventanasH2: 'Protección de los objetos guardados en el trastero de {barrio}',
    ventanasContent: [
      'Un trastero limpio y tratado en {barrio} protege mejor lo que se guarda dentro. La humedad y el salitre deterioran metales, libros, ropa y electrodomésticos guardados si no se controlan. El servicio incluye, además de la limpieza del espacio, información sobre qué zonas del trastero son más húmedas para que puedas reorganizar lo que guardas según el riesgo.',
      'Un trastero bien tratado en {barrio} protege mejor lo que guardas dentro: la humedad y el salitre deterioran metales, libros, ropa y electrodomésticos si no se controlan. Además de limpiar el espacio, te decimos qué zonas son más húmedas para que reorganices según el riesgo.',
      'En {barrio}, limpiar el trastero no es solo cuestión de estética: la humedad y el salitre acaban deteriorando lo que guardas —metal, papel, ropa, electrodomésticos— si no se trata. Aparte de la limpieza, te indicamos qué zonas del trastero son las más húmedas para que decidas dónde guardar qué.',
    ],
    faqs: [
      { q: '¿Con qué frecuencia hay que limpiar el trastero en {barrio} para evitar que vuelva el moho?', a: 'En zonas costeras como {barrio}, una limpieza con antifúngico cada 6-12 meses es lo recomendable para mantener el moho bajo control. Si hay mucha humedad estructural, la frecuencia tiene que ser mayor.' },
      { q: '¿El salitre marino daña los objetos metálicos guardados en el trastero de {barrio}?', a: 'Sí. El ambiente salino acelera la oxidación de metales guardados sin protección. La limpieza del espacio reduce la concentración de sal en el ambiente, pero para los objetos en sí lo más efectivo es guardarlos en cajas herméticas o con fundas.' },
    ],
  },
  'segunda-residencia': {
    tituloPagina: 'Limpieza de trastero de segunda residencia en {barrio}: polvo de temporadas',
    h1Qualifier: 'segunda residencia · trastero cerrado meses con polvo acumulado',
    metaDescAngle: 'Limpiamos trasteros de segunda residencia en {barrio}: polvo de meses cerrado y moho de invierno gallego. Sin mover objetos sin permiso. Presupuesto en 24h.',
    speakableIntro: [
      'El trastero de una segunda residencia en {barrio} es el espacio que más polvo acumula entre temporadas: pasan meses sin que nadie entre, el invierno gallego deposita humedad en las paredes, y los objetos guardados se cubren de polvo. Cuando se abre para la temporada de verano, muchos propietarios se encuentran el trastero en un estado que no habían visto desde el año anterior. Zentro Limpiezas lo deja a punto antes de que llegues.',
      'El trastero de una segunda residencia en {barrio} es de lo que más polvo acumula entre temporadas: meses sin que nadie entre, humedad del invierno gallego en las paredes, y todo lo guardado cubierto de polvo. Al abrir para el verano, muchos propietarios se lo encuentran distinto a como lo dejaron. Lo dejamos listo antes de que llegues.',
      'Si el trastero de tu segunda residencia en {barrio} pasa meses cerrado, ya sabrás lo que te espera: polvo acumulado, humedad del invierno gallego en las paredes y todo lo guardado con una capa que no tenía cuando cerraste. Lo dejamos a punto antes de tu llegada.',
    ],
    problemaH2: '¿Qué acumula el trastero de {barrio} cerrado durante el invierno?',
    problemaContent: [
      'El trastero de una segunda residencia en {barrio} que pasa el invierno cerrado acumula: polvo sedimentado en todas las superficies horizontales, manchas de condensación en paredes y techo si hay humedad, posibles insectos que buscan refugio en el calor del interior, y en los más húmedos, moho incipiente. La limpieza de apertura trata todos estos problemas en una sola visita.',
      'Tras un invierno cerrado, el trastero de {barrio} acumula polvo sedimentado en todas las superficies, condensación en paredes y techo si hay humedad, algún insecto que busca refugio, y en los más húmedos, moho incipiente. Tratamos todo en la misma visita de apertura.',
      'Lo que se encuentra un trastero cerrado en {barrio} tras el invierno depende de la humedad de la zona: polvo siempre, condensación en paredes si la ventilación fue escasa, algún insecto ocasional, y en los casos más húmedos, moho que empieza a aparecer. Todo se resuelve en la misma visita.',
    ],
    ventanasH2: 'Limpieza de apertura del trastero de segunda residencia en {barrio}',
    ventanasContent: [
      'La limpieza de apertura del trastero en {barrio} incluye: retirada de telarañas y polvo de superficies, fregado del suelo con antifúngico si hay manchas de humedad, limpieza de paredes con tratamiento de moho si lo hay, y reorganización básica si el cliente lo solicita. Al terminar, el trastero está listo para acceder y guardar lo que se necesite en la temporada.',
      'Para dejar listo el trastero de temporada en {barrio}, retiramos telarañas y polvo de superficies, fregamos el suelo con antifúngico si hay humedad, tratamos las paredes si tienen moho, y reorganizamos si lo pides. Al terminar, el trastero está listo para usar en la temporada.',
      'La apertura del trastero en {barrio} incluye retirar telarañas y polvo, fregar el suelo con antifúngico donde haga falta, tratar las paredes con moho si las hay, y reorganizar si lo solicitas. Terminada la visita, el espacio queda listo para guardar lo que necesites en la temporada.',
    ],
    faqs: [
      { q: '¿Podéis limpiar el trastero de la segunda residencia de {barrio} antes de que lleguemos?', a: 'Sí. Para segunda residencia de {barrio} trabajamos con acceso de llave. Hacemos la limpieza del trastero en la fecha que nos indiques y te avisamos por WhatsApp al terminar. Listos para cuando llegues.' },
      { q: '¿La limpieza del trastero de {barrio} incluye reorganizar los objetos guardados?', a: 'Si el cliente lo solicita, sí. Lo estándar es no mover los objetos y limpiar alrededor. Si quieres que coloquemos las cosas de forma más organizada, lo hacemos previa indicación o con permiso explícito.' },
    ],
  },
  'chalet': {
    tituloPagina: 'Limpieza de trastero en chalé de {barrio}: polvo de jardín y almacén',
    h1Qualifier: 'chalé · trastero con herramientas, polvo orgánico y objetos sin uso',
    metaDescAngle: 'Limpiamos trasteros de chalés en {barrio}: polvo de jardín, herramientas, estanterías con tierra y manchas de humedad. Sin mover objetos sin permiso. Presupuesto en 24h.',
    speakableIntro: [
      'El trastero de un chalé en {barrio} acumula un tipo de polvo diferente al de un piso de bloque: polvo vegetal del jardín, tierra de herramientas de jardinería, y a menudo una mezcla de objetos de temporada (material de playa, herramienta de obra) que se van acumulando sin orden. El suelo concentra la mayor parte de la suciedad, pero las estanterías y las paredes también necesitan atención. Zentro Limpiezas deja el trastero limpio sin mover lo que no se solicita.',
      'El trastero de un chalé en {barrio} acumula un polvo distinto al de un piso: polvo vegetal del jardín, tierra de las herramientas, y una mezcla de objetos de temporada que se van amontonando sin orden. El suelo concentra la mayor parte, pero estanterías y paredes también lo necesitan. Trabajamos sin mover lo que no nos pidas mover.',
      'A diferencia de un piso, el trastero de un chalé en {barrio} recibe polvo vegetal de jardín, tierra de herramientas y objetos de temporada que se acumulan sin criterio. El suelo es lo más afectado, pero estanterías y paredes también necesitan atención. Todo se limpia alrededor de lo guardado, sin tocarlo salvo indicación.',
    ],
    problemaH2: '¿Por qué el trastero de los chalés de {barrio} tiene más polvo que el de un piso?',
    problemaContent: [
      'El chalé en {barrio} conecta directamente con el jardín: el barro de la finca entra con el calzado y con las herramientas, el polvo vegetal de la hierba cortada y las hojas de otoño se deposita en el trastero, y los objetos de jardinería dejan tierra y restos orgánicos. Si el trastero también hace de almacén de herramienta de obra o de material de temporada, la acumulación de polvo es mucho mayor que en un piso de bloque.',
      'El chalé de {barrio} está conectado con el jardín, y eso se nota en el trastero: barro que entra con calzado y herramientas, polvo vegetal de hierba y hojas, restos orgánicos de las tareas de jardinería. Si además guarda herramienta de obra o material de temporada, la acumulación de polvo es mucho mayor que en un piso.',
      'En {barrio}, el trastero de un chalé recibe la misma suciedad que el resto de la propiedad: barro de jardín, polvo vegetal de hierba y hojas, restos de las herramientas de jardinería. Cuando además hace de almacén de obra o de material estacional, el polvo acumulado supera con creces al de un trastero de bloque.',
    ],
    ventanasH2: 'Limpieza de trasteros y almacenes de herramientas en {barrio}',
    ventanasContent: [
      'En los chalés de {barrio} donde el trastero almacena herramientas de jardín, el servicio incluye limpieza del suelo con tierra y restos orgánicos, limpieza de estanterías, y paredes con polvo y posibles manchas de aceite de maquinaria. Las herramientas en sí no se limpian salvo que el cliente lo solicite, pero se colocan ordenadas si se indica cómo.',
      'Cuando el trastero de un chalé en {barrio} guarda herramientas de jardín, limpiamos el suelo con tierra y restos orgánicos, las estanterías y las paredes con polvo o manchas de aceite de maquinaria. Las herramientas no se limpian salvo que lo pidas, pero sí se colocan ordenadas si nos indicas cómo.',
      'Si el trastero de tu chalé en {barrio} hace también de almacén de herramientas, tratamos el suelo con tierra y restos orgánicos, las estanterías y las paredes con polvo o manchas de aceite. Las herramientas se quedan donde están salvo que nos pidas ordenarlas de otra forma.',
    ],
    faqs: [
      { q: '¿Podéis limpiar el trastero del chalé de {barrio} sin tener que vaciar todos los objetos?', a: 'Sí. Trabajamos alrededor de los objetos guardados, limpiando el suelo, las paredes accesibles y las estanterías sin mover lo que está en su sitio. Si hay zonas que quieres vaciar, lo coordinamos antes de la visita.' },
      { q: '¿La limpieza del trastero del chalé en {barrio} incluye también el garaje?', a: 'Se pueden incluir en la misma visita si el cliente lo solicita. El presupuesto cubre los espacios que se acuerden antes de empezar: trastero, garaje, almacén de herramientas o cualquier espacio anejo del chalé.' },
    ],
  },
  'rural': {
    tituloPagina: 'Limpieza de trastero o bajera en casa rural de {barrio}: polvo de años',
    h1Qualifier: 'rural · bajera y almacén con polvo de décadas',
    metaDescAngle: 'Limpiamos trasteros, bajeras y almacenes en casas rurales de {barrio}: polvo de décadas, tierra de campo y humedad de piedra. Técnica adaptada al espacio. Presupuesto en 24h.',
    speakableIntro: [
      'Los trasteros, bajeras y almacenes de las casas rurales de {barrio} son de los espacios con más polvo acumulado de toda Ferrolterra: llevan décadas sin limpieza a fondo, el suelo puede ser de tierra batida o cemento rugoso, las paredes de piedra absorben humedad todo el año, y hay polvo orgánico de campo y restos de actividad agrícola mezclados con los objetos guardados. Zentro Limpiezas trabaja en este tipo de espacio con aspirado industrial y productos específicos para materiales rústicos.',
      'Los trasteros y bajeras de las casas rurales de {barrio} están entre los espacios con más polvo acumulado de toda la comarca: décadas sin limpieza a fondo, suelo de tierra batida o cemento rugoso, paredes de piedra con humedad constante, y polvo orgánico mezclado con lo guardado. Usamos aspirado industrial y productos pensados para este tipo de material.',
      'En {barrio}, una bajera o trastero rural suele acumular más polvo que cualquier otro tipo de espacio: años sin limpieza, suelo irregular, paredes de piedra siempre húmedas y polvo orgánico de campo mezclado con lo guardado. Trabajamos con aspirado industrial, la única forma real de moverlo.',
    ],
    problemaH2: '¿Qué hace que las bajeras y almacenes rurales de {barrio} sean tan difíciles de limpiar?',
    problemaContent: [
      'Las bajeras de las casas rurales de {barrio} combinan los problemas más difíciles: el suelo puede ser irregular o de tierra batida, las paredes de piedra absorben humedad y favorecen el moho, el polvo tiene componentes orgánicos pesados que no se mueven con el aire, y a menudo hay objetos acumulados desde décadas que no se han movido. Sin aspirado industrial previo al fregado, la limpieza solo mueve el polvo de sitio sin eliminarlo.',
      'Las bajeras rurales de {barrio} combinan varios problemas a la vez: suelo irregular o de tierra batida, paredes de piedra que absorben humedad y favorecen el moho, polvo orgánico pesado que no se mueve con el aire, y objetos que llevan décadas en el mismo sitio. Sin aspirado industrial antes de fregar, la limpieza solo desplaza el polvo.',
      'En {barrio}, lo que hace difícil una bajera rural es la combinación: suelo irregular, piedra que retiene humedad y favorece el moho, y un polvo orgánico más pesado que el doméstico, acumulado durante años. Sin aspirado industrial de por medio, cualquier fregado se limita a mover el polvo de sitio.',
    ],
    ventanasH2: 'Limpieza de cobertizos y espacios anejos en las casas rurales de {barrio}',
    ventanasContent: [
      'Además de la bajera, muchas casas rurales de {barrio} tienen cobertizos, gallineros reconvertidos, cuadras que ya no se usan o pequeñas naves que acumulan todo tipo de material. El servicio puede incluir estos espacios con un presupuesto adicional según la superficie y el estado. Para espacios con polvo de décadas o restos de actividad agrícola, el trabajo requiere más tiempo y lo presupuestamos aparte.',
      'Además de la bajera, muchas casas rurales de {barrio} tienen cobertizos, antiguos gallineros o cuadras en desuso llenos de material acumulado. Se pueden incluir en el servicio con presupuesto según superficie y estado; si hay polvo de décadas o restos agrícolas, lo presupuestamos aparte por el tiempo extra que requiere.',
      'Si tu casa en {barrio} tiene, además de la bajera, cobertizos o cuadras que ya no se usan, suelen ser los espacios con más años de acumulación. Los incluimos en el servicio con presupuesto según el estado; cuando hay mucho polvo de décadas o restos de actividad agrícola, lo valoramos aparte por el tiempo que exige.',
    ],
    faqs: [
      { q: '¿Podéis limpiar también los cobertizos y cuadras de la casa rural de {barrio}?', a: 'Sí. Los espacios anejos de una casa rural de {barrio} se presupuestan junto con el trastero o bajera principal. Según el estado y la superficie, ajustamos el precio. Damos el presupuesto cerrado para todo antes de empezar.' },
      { q: '¿Cuánto cuesta limpiar una bajera rural en {barrio} con décadas de uso?', a: 'Para una bajera de 20-40 m² con polvo acumulado en años, desde 80€. Para espacios más grandes o con mucho material acumulado, lo presupuestamos con un vistazo previo del espacio. El precio es siempre cerrado antes de empezar.' },
    ],
  },
  'industrial': {
    tituloPagina: 'Limpieza de almacén o trastero en el polígono de {barrio}: polvo industrial',
    h1Qualifier: 'zona industrial · almacén con polvo de producción y grasa sedimentada',
    metaDescAngle: 'Limpiamos almacenes y trasteros en polígonos de {barrio}: polvo de actividad industrial, grasa sedimentada y desorden de años. Desengrasante ecológico. Presupuesto en 24h.',
    speakableIntro: [
      'Los almacenes y trasteros en los polígonos de {barrio} acumulan una suciedad que no tiene ningún espacio doméstico: polvo de actividad industrial mezclado con grasa sedimentada, partículas metálicas en suspensión, y restos de embalajes y materiales de producción. Sin aspirado industrial previo al fregado, este polvo se extiende sin eliminarse. Zentro Limpiezas usa aspirado industrial y fregadora de alta eficacia para este tipo de espacio.',
      'Los almacenes y trasteros del polígono de {barrio} acumulan una suciedad que ningún espacio doméstico tiene: polvo industrial mezclado con grasa sedimentada, partículas metálicas y restos de embalaje. Sin aspirado industrial previo, ese polvo se extiende en vez de eliminarse. Usamos aspirado y fregadora de alta eficacia para este tipo de espacio.',
      'En el polígono de {barrio}, un almacén o trastero tiene un tipo de suciedad muy distinto al doméstico: polvo industrial con grasa sedimentada, partículas metálicas y restos de embalaje. Trabajamos siempre con aspirado industrial antes del fregado; de lo contrario, el polvo solo se redistribuye.',
    ],
    problemaH2: '¿Qué tipo de polvo acumula un almacén en el polígono de {barrio}?',
    problemaContent: [
      'El polvo en los almacenes del polígono de {barrio} tiene partículas de caucho de los vehículos de carga, partículas metálicas de la actividad de producción o taller, polvo de embalaje (cartón, plástico) y en muchos casos grasa en suspensión que se deposita en las estanterías y el techo. Este tipo de polvo es más pesado y se adhiere mejor a las superficies que el doméstico.',
      'El polvo de los almacenes del polígono de {barrio} tiene partículas de caucho de vehículos de carga, restos metálicos de producción o taller, polvo de embalaje y, en muchos casos, grasa en suspensión que se posa en estanterías y techo. Es un polvo más pesado y adherente que el doméstico.',
      'En {barrio}, el polvo de un almacén industrial combina caucho de vehículos de carga, partículas metálicas de la actividad del taller, restos de embalaje y grasa en suspensión que acaba en estanterías y techo. Se comporta de forma muy distinta al polvo de una vivienda: más pesado y más adherido a la superficie.',
    ],
    ventanasH2: 'Organización y limpieza de estanterías en almacenes de {barrio}',
    ventanasContent: [
      'Las estanterías de los almacenes del polígono de {barrio} acumulan polvo en años de uso sin limpieza profesional. El servicio incluye limpieza de estanterías (sin mover los productos salvo indicación del cliente), suelo con desengrasante y fregadora, paredes hasta media altura y zona de acceso. Para almacenes con estanterías muy cargadas, lo coordinamos con el responsable de logística.',
      'Las estanterías de un almacén en {barrio} acumulan años de polvo sin limpieza profesional. Limpiamos las estanterías sin mover el producto salvo indicación, el suelo con desengrasante y fregadora, las paredes hasta media altura y la zona de acceso. Con estanterías muy cargadas, lo coordinamos con el responsable de logística.',
      'En un almacén del polígono de {barrio}, tratamos las estanterías —sin mover nada salvo que se indique—, el suelo con desengrasante y fregadora, las paredes hasta media altura y el acceso. Si las estanterías están muy cargadas, coordinamos el trabajo con el responsable de logística antes de empezar.',
    ],
    faqs: [
      { q: '¿Trabajáis con empresas del polígono de {barrio} para la limpieza periódica del almacén?', a: 'Sí. Ofrecemos servicio periódico para almacenes y naves del polígono de {barrio}: mensual, trimestral o semestral. El presupuesto es por superficie y frecuencia, cerrado antes de empezar.' },
      { q: '¿Podéis limpiar el almacén de {barrio} sin interrumpir la actividad logística?', a: 'Sí. Para almacenes en funcionamiento, trabajamos en horario nocturno o en los días de menor actividad para no interrumpir la operativa. Lo coordinamos con el responsable de logística de la empresa.' },
    ],
  },
};

export const CONTENIDO_BARRIO: Partial<Record<string, Record<BarrioArchetype, ContenidoArquetipo>>> = {
  'limpieza-de-cristales': CRISTALES_POR_ARQUETIPO,
  'limpieza-de-locales-comerciales': LOCALES_POR_ARQUETIPO,
  'limpieza-de-garajes': GARAJES_POR_ARQUETIPO,
  'limpieza-de-mudanzas': MUDANZAS_POR_ARQUETIPO,
  'limpieza-de-trasteros': TRASTEROS_POR_ARQUETIPO,
};

export type ContenidoArquetipoResuelto = {
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

export function getContenidoBarrio(
  servicioSlug: string,
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoArquetipoResuelto | null {
  const servicioMap = CONTENIDO_BARRIO[servicioSlug];
  if (!servicioMap) return null;
  const raw = servicioMap[archetype];
  if (!raw) return null;
  return {
    tituloPagina: t(raw.tituloPagina, barrioNombre, municipioNombre),
    h1Qualifier: t(raw.h1Qualifier, barrioNombre, municipioNombre),
    metaDescAngle: t(raw.metaDescAngle, barrioNombre, municipioNombre),
    speakableIntro: tVariant(raw.speakableIntro, barrioNombre, municipioNombre),
    problemaH2: t(raw.problemaH2, barrioNombre, municipioNombre),
    problemaContent: tVariant(raw.problemaContent, barrioNombre, municipioNombre),
    ventanasH2: t(raw.ventanasH2, barrioNombre, municipioNombre),
    ventanasContent: tVariant(raw.ventanasContent, barrioNombre, municipioNombre),
    faqs: raw.faqs.map(f => ({
      q: t(f.q, barrioNombre, municipioNombre),
      a: t(f.a, barrioNombre, municipioNombre),
    })),
  };
}

// ─── GL: Contenido por arquetipo e servizo ────────────────────────────────────

function tGL(s: string, barrio: string, municipio: string): string {
  return s.replace(/\{barrio\}/g, barrio).replace(/\{municipio\}/g, municipio);
}

export type ContenidoGLBarrio = {
  h1Qualifier: string;
  metaDesc: string;
  intro: string;
  seccion1H2: string;
  seccion1P1: string;
  seccion1P2: string;
  queIncluyeH2: string;
  queIncluyeItems: string[];
  cuandoH2: string;
  cuandoItems: string[];
  precioH2: string;
  precioItems: string[];
  faqs: { q: string; a: string }[];
};

const GL_ARQUETIPOS_RAW: Record<BarrioArchetype, {
  h1Qualifier: string;
  introBarrio: string;
  desafiosPrinc: string[];
  cuandoH2: string;
  cuandoItems: string[];
  faqArq: { q: string; a: string };
}> = {
  'bloque-obrero': {
    h1Qualifier: 'pisos de bloque · terrazo, cal e vida de barrio',
    introBarrio: 'Os pisos de bloque de {barrio} son das vivendas máis comúns de Ferrolterra: construídos nos anos 70-80, con chans de terrazo, cociñas que xa teñen historia e baños onde o cal da auga deixa marca rápido. O equipo de Zentro Limpezas traballa neste tipo de inmoble desde hai máis de 20 anos.',
    desafiosPrinc: [
      'Cal incrustado en griferías, mampara de ducha e azulexos do baño',
      'Graxa acumulada en campá extractora, frontais de mobles e encimeira',
      'Terrazo dos anos 70-80 que precisa produto neutro, sen abrasivos nin lixivia',
      'Cantos, rodapés e zonas baixas con po adherido que a limpeza diaria non alcanza',
      'Zonas altas de armarios e mobles con po sedimentado de meses',
    ],
    cuandoH2: '¿Cando é o momento de chamarnos?',
    cuandoItems: [
      'O piso leva meses sen limpeza profesional e a cal e a graxa acumuláronse',
      'Acabas de facer unha reforma ou mudanza e hai po de obras por todo',
      'A cal da grifería e da mampara non sae con produtos domésticos normais',
      'Tes persoas maiores ou con mobilidade reducida na casa que non poden facelo',
      'Queres que o mesmo equipo veña sempre e coñeza o teu piso sen ter que repetir instrucións',
    ],
    faqArq: {
      q: '¿Os vosos produtos son seguros para o terrazo dos pisos de {barrio}?',
      a: 'Si. O terrazo dos anos 70-80, frecuente en {barrio}, precisa produtos neutros sen abrasivos nin lixivia que o opacan ou raian. Usamos limpadores ecolóxicos con pH controlado que eliminan a sucidade sen danar o material.',
    },
  },
  'historico': {
    h1Qualifier: 'edificios históricos · materiais nobres coidados co produto axeitado',
    introBarrio: 'Os edificios históricos de {barrio} teñen características únicas: teitos altos con molduras de escaiola, pavimentos de madeira ou baldosa hidráulica centenaria e carpinterías de época que non admiten calquera produto. Zentro Limpezas leva décadas traballando nestas vivendas e coñece os produtos e técnicas correctos para cada material.',
    desafiosPrinc: [
      'Madeira nobre (parqué, tarima, friso) que pide produto neutro e fregado suave',
      'Baldosa hidráulica sensible a produtos ácidos ou alcalinos que lle alteran a cor',
      'Molduras de escaiola nos teitos que acumulan po en zonas de difícil acceso',
      'Cristais con marcos de madeira que non admiten produtos agresivos nin auga en exceso',
      'Paredes con grande altura onde o po sobe e nunca se limpa con medios domésticos',
    ],
    cuandoH2: '¿Cando é o momento de chamarnos?',
    cuandoItems: [
      'O inmoble leva tempo sen limpeza profesional de fondo das zonas altas',
      'Non sabes que produtos usar nos materiais históricos sen risco de danalos',
      'A moldura dos teitos e as zonas altas acumularon po e non tes como chegar',
      'Acabas de adquirir ou rehabilitar un inmoble histórico en {barrio}',
      'Buscas un equipo que coñeza os materiais e non os dañe con produtos incorrectos',
    ],
    faqArq: {
      q: '¿Que produtos usades nos inmobles históricos de {barrio}?',
      a: 'Produtos neutros con pH controlado, seguros para madeira, baldosa hidráulica e escaiola. Sen lixivia nin abrasivos. Antes de empezar revisamos as superficies e adaptamos os produtos a cada material para non danar o acabado nin alterar a cor.',
    },
  },
  'marinero': {
    h1Qualifier: 'zona costeira · salitre, humidade e cristais sen marcas de mar',
    introBarrio: 'As vivendas de {barrio} están expostas á humidade e ao salitre do mar de xeito constante. Os cristais acumulan sal e cal máis rápido que no interior, os baños mostran mofo antes e os materiais metálicos necesitan máis atención. Zentro Limpezas coñece estes problemas e ten os produtos específicos para resolvelos.',
    desafiosPrinc: [
      'Cristais con depósitos brancos de sal e cal pola brisa mariña constante',
      'Humidade en baños e cociña que acelera a aparición de fungos e mofo nas xuntas',
      'Griferías e elementos metálicos que se oxidan con máis facilidade pola salinidade',
      'Po con partículas de sal que se deposita en todas as superficies horizontais',
      'Carpinterías de madeira ou PVC que necesitan atención máis frecuente ca no interior',
    ],
    cuandoH2: '¿Cando é o momento de chamarnos?',
    cuandoItems: [
      'Os cristais están brancos de sal e cal e non saen con produtos domésticos',
      'Apareceu mofo nos cantos do baño, xuntas da ducha ou baixo as ventás',
      'A vivenda leva semanas sen limpeza e o salitre acumulouse en todo',
      'Queres abrir a segunda residencia en {barrio} e deixala en condicións',
      'Buscas un servizo periódico que manteña a casa sen salitre nin humidade acumulada',
    ],
    faqArq: {
      q: '¿Con que frecuencia recomendades limpiar en {barrio} pola humidade e o salitre?',
      a: 'En zonas costeiras como {barrio} recomendamos visita quincenal para vivendas habituais, e mensual mínimo para segundas residencias. O salitre e a humidade aceleran a acumulación de depósitos e favorecen a aparición de mofo se non hai mantemento regular.',
    },
  },
  'segunda-residencia': {
    h1Qualifier: 'segunda residencia · apertura e peche a fondo antes de cada estancia',
    introBarrio: 'As vivendas de {barrio} usadas como segunda residencia necesitan un tipo de limpeza diferente: preparación para que a casa estea en condicións ao chegar e peche correcto ao marchar. Po sedimentado, humidade acumulada e mofo en baños son os problemas máis frecuentes tras meses pechada.',
    desafiosPrinc: [
      'Po fino sedimentado en todas as superficies tras meses coa vivenda pechada',
      'Mofo en xuntas do baño, baixo ventás e en zonas con humidade acumulada',
      'Olores de pechado que hai que eliminar antes de usar a vivenda',
      'Neveira, forno e bañeira que precisan limpeza profunda en apertura de tempada',
      'Roupa de cama e armarios que absorben humidade durante os meses de peche',
    ],
    cuandoH2: '¿Cando é o momento de chamarnos?',
    cuandoItems: [
      'Antes de chegar: a vivenda leva meses pechada e queres encontrala lista',
      'Ao marchar: queres deixar a casa recollida e limpa para o vindeiro ano',
      'Apareceu mofo que non sabes eliminar correctamente sen danar as superficies',
      'Queres limpeza durante a tempada de estancia en {barrio} sen ocuparte ti',
      'Acabas de mercar ou alugar unha segunda residencia en {barrio}',
    ],
    faqArq: {
      q: '¿Cantas horas leva a limpeza de apertura dunha segunda residencia en {barrio}?',
      a: 'Para un piso de 60-80 m² pechado 6 meses calculamos entre 4 e 6 horas con equipo de dúas persoas. Para vivendas máis grandes ou en peor estado pode ser máis. O tempo e o prezo dámoscho pechados no orzamento antes de empezar.',
    },
  },
  'chalet': {
    h1Qualifier: 'chalés e adosados · limpeza a fondo de todas as plantas e exteriores',
    introBarrio: 'Os chalés e adosados de {barrio} teñen máis superficie e máis zonas críticas que un piso de bloque: escaleiras entre plantas, garaxe ou baixo, terraza ou xardín e normalmente máis baños. Zentro Limpezas traballa con chalés en toda Ferrolterra e adapta o protocolo ao volume e tipo de inmoble.',
    desafiosPrinc: [
      'Escaleiras entre plantas que acumulan po e sucidade en cada pasamáns e chanzo',
      'Terraza ou varanda con pavimento exterior, mobles e plantas que precisan atención específica',
      'Garaxe ou baixo con graxa, po e material acumulado de meses',
      'Múltiples baños con máis superficie de cal e humidade que xestionar',
      'Zonas altas con teitos a dúas augas e esquinas de difícil acceso',
    ],
    cuandoH2: '¿Cando é o momento de chamarnos?',
    cuandoItems: [
      'O chalé leva tempo sen limpeza profesional completa de todas as plantas',
      'Tes visita ou evento próximo e queres o inmoble impecable de alto a abaixo',
      'A terraza, o garaxe ou o baixo necesitan limpeza específica que non fas normalmente',
      'Buscas un servizo periódico que cubra todas as zonas, non só as principais',
      'Fixeches obra ou reforma e hai po de construción por todas as plantas',
    ],
    faqArq: {
      q: '¿Cubrís a terraza e o garaxe no servizo para chalés de {barrio}?',
      a: 'Si, se o cliente o solicita. A terraza (baldosa, pedra ou madeira exterior), o garaxe e o baixo pódense incluír no servizo. Especificámolo no orzamento para que sexa un prezo pechado sen sorpresas nin cobros extra.',
    },
  },
  'rural': {
    h1Qualifier: 'casas rurais · materiais tradicionais limpos con respecto',
    introBarrio: 'As casas rurais de {barrio} teñen características propias da arquitectura galega: pedra vista, madeira de piñeiro ou carballo, baldosa hidráulica e chemineas. Estes materiais necesitan produtos específicos e técnica axeitada para non danar o acabado. Zentro Limpezas ten experiencia con este tipo de inmoble en toda Ferrolterra.',
    desafiosPrinc: [
      'Pedra vista que acumula po entre as xuntas e nas superficies rugosas',
      'Madeira de piñeiro ou carballo que pide produto neutro e aplicación suave',
      'Baldosa hidráulica sensible a produtos ácidos ou alcalinos que lle alteran a cor',
      'Cheminea e contorna con tizne, cinsas e graxa acumulada ao longo do inverno',
      'Zonas exteriores de pedra ou granito con musgo e humidade persistente',
    ],
    cuandoH2: '¿Cando é o momento de chamarnos?',
    cuandoItems: [
      'A casa rural leva tempo sen limpeza profesional de fondo',
      'Non sabes que produtos usar nos materiais sen arriscarte a danalos',
      'A cheminea e a contorna acumularon tizne e precisan tratamento específico',
      'Queres abrir a casa rural en {barrio} en condicións para a tempada',
      'Buscas un equipo que coñeza e respecte os materiais tradicionais galegos',
    ],
    faqArq: {
      q: '¿Que produtos usades en casas de pedra e madeira en {barrio}?',
      a: 'Produtos neutros con pH controlado para madeira, e desengrasantes suaves para pedra e granito. Non usamos lixivia nin abrasivos que danen o acabado ou alteren a cor dos materiais tradicionais. Antes de empezar revisamos as superficies e adaptamos o protocolo.',
    },
  },
  'industrial': {
    h1Qualifier: 'zona de polígono · desengrase de partículas industriais incluído',
    introBarrio: 'As vivendas de {barrio}, próximas a polígonos industriais ou rúas con tráfico pesado, acumulan un tipo de po diferente: partículas grasas que flotan no aire e se pegan a todas as superficies. Esta sucidade precisa un paso previo de desengrase profesional antes da limpeza estándar.',
    desafiosPrinc: [
      'Po graxo de orixe industrial depositado en superficies horizontais e filtros de ventilación',
      'Campá extractora e filtros con graxa industrial que non sae con produtos domésticos',
      'Cristais con depósitos de partículas grasas que empeoran ao intentar limpalos sen produto correcto',
      'Rodapés e cantos con po adherido por efecto da graxa ambiental',
      'Teitos e zonas altas con po industrial que baixa ao limpar as zonas inferiores',
    ],
    cuandoH2: '¿Cando é o momento de chamarnos?',
    cuandoItems: [
      'O po e a graxa industrial acumuláronse e os produtos normais non son suficientes',
      'Os cristais están opacos con depósitos que non saen con limpadores domésticos',
      'A cociña e os filtros da campá teñen graxa industrial adherida de semanas',
      'Buscas un equipo con produtos profesionais para este tipo de sucidade específica',
      'Queres un servizo periódico que evite a acumulación de partículas industriais',
    ],
    faqArq: {
      q: '¿Por que o po dunha vivenda en {barrio} é diferente ao doutras zonas?',
      a: 'As zonas próximas a polígonos ou rúas con tráfico pesado acumulan partículas grasas que se adhiren ás superficies e non saen con produtos domésticos estándar. Usamos desengrasantes profesionais ecolóxicos que eliminan este tipo de sucidade antes de facer a limpeza xeral.',
    },
  },
};

const GL_SERVIZOS_RAW: Record<string, {
  seccion1H2: string;
  seccion1Content: string;
  queIncluyeH2: string;
  queIncluyeBase: string[];
  precioH2: string;
  precioItems: string[];
  faqServizo: { q: string; a: string };
}> = {
  'limpeza-a-fondo': {
    seccion1H2: '¿Que é a limpeza a fondo en {barrio}?',
    seccion1Content: 'A limpeza a fondo é un servizo de limpeza profunda ocasional que vai máis aló do mantemento habitual. Inclúe zonas que normalmente quedan fóra: detrás e debaixo dos mobles, interior de armarios, forno e neveira, rodapés en profundidade e todas as superficies de alto a abaixo, con produtos específicos para cada material.',
    queIncluyeH2: '¿Que inclúe a limpeza a fondo en {barrio}?',
    queIncluyeBase: [
      'Baños completos: griferías con antical, vátere, plato de ducha ou bañeira, espellos e azulexos',
      'Cociña: encimeira, campá extractora, frontais dos mobles e fregadoiro con desengrasante',
      'Interior de forno e microondas se o cliente o solicita',
      'Dormitorios, salón e corredores: po alto e baixo, detrás e debaixo dos mobles',
      'Chan de toda a vivenda con produto axeitado ao material (terrazo, parqué, porcelánico)',
      'Cristais interiores e exteriores de baixa altura',
    ],
    precioH2: '¿Canto custa a limpeza a fondo en {barrio}?',
    precioItems: [
      'Piso de 1-2 habitacións: desde 120 €',
      'Piso de 3 habitacións: desde 170 €',
      'Chalé ou vivenda grande (>100 m²): orzamento personalizado',
      'Prezo pechado que inclúe desprazamento, produtos e o tempo necesario',
    ],
    faqServizo: {
      q: '¿A limpeza a fondo inclúe os produtos en {barrio}?',
      a: 'Si. Incluímos todos os produtos Ecolabel certificados: antical para baño, desengrasante para cociña e limpador xeral para o resto. Non tes que preparar nada nin comprar nada: o equipo chega co material completo.',
    },
  },
  'limpeza-periodica': {
    seccion1H2: '¿Por que contratar limpeza periódica do fogar en {barrio}?',
    seccion1Content: 'A limpeza periódica é un servizo regular de mantemento: o mesmo equipo, nos mesmos días, cun protocolo que coñece o teu fogar. Co tempo, o equipo sabe onde se acumula máis sucidade, que produtos funcionan mellor en cada superficie e como traballar sen molestar. O prezo por visita é máis económico ca o servizo puntual.',
    queIncluyeH2: '¿Que inclúe cada visita periódica en {barrio}?',
    queIncluyeBase: [
      'Baños: griferías, vátere, plato de ducha ou bañeira e espellos',
      'Cociña: encimeira, campá exterior, fregadoiro e frontais dos mobles',
      'Dormitorios e salón: po de mobles e superficies accesibles',
      'Chan de toda a vivenda',
      'Papeleiras e bolsas de lixo',
    ],
    precioH2: '¿Canto custa a limpeza periódica en {barrio}?',
    precioItems: [
      'Piso de 1-2 habitacións: desde 50 €/visita',
      'Piso de 3 habitacións: desde 65 €/visita',
      '10 % de desconto con contrato mensual',
      'Sen permanencia mínima · Cancelación con 48 h de aviso',
    ],
    faqServizo: {
      q: '¿Sempre vén o mesmo equipo ao meu fogar en {barrio}?',
      a: 'Si. Co servizo periódico o equipo é sempre o mesmo. Coñecen o teu piso, as túas preferencias e onde se acumula máis sucidade, polo que non hai que repetir instrucións en cada visita.',
    },
  },
  'limpeza-de-vivendas': {
    seccion1H2: '¿Que inclúe a limpeza de vivendas en {barrio}?',
    seccion1Content: 'A limpeza de vivendas é un servizo completo para pisos, chalés e casas unifamiliares, puntual ou periódico. Cobre todas as zonas do inmoble con orde e método: primeiro as alturas, despois as superficies verticais e finalmente os chans, para non desfacer o xa limpado. Incluímos produtos Ecolabel certificados sen custo adicional.',
    queIncluyeH2: '¿Que inclúe o servizo de vivenda en {barrio}?',
    queIncluyeBase: [
      'Baños completos: griferías, vátere, plato de ducha ou bañeira, espellos e azulexos',
      'Cociña: encimeira, campá, frontais dos mobles e fregadoiro',
      'Dormitorios, salón e corredores: mobles, po e superficies',
      'Chan de toda a vivenda con produto axeitado ao material',
      'Papeleiras e lixo',
      'Cristais interiores de baixa altura',
    ],
    precioH2: '¿Canto custa a limpeza de vivenda en {barrio}?',
    precioItems: [
      'Piso de 50-70 m²: desde 55 €',
      'Piso de 70-100 m²: desde 75 €',
      'Vivenda grande ou chalé: orzamento personalizado',
      'Con contrato periódico, prezo por visita máis económico',
    ],
    faqServizo: {
      q: '¿Necesito estar na vivenda mentres limpades en {barrio}?',
      a: 'Non é obrigatorio. Moitos clientes facilítannos acceso sen estar presentes. Ao terminar enviamos mensaxe por WhatsApp. Se prefires estar en casa, tamén podemos organizalo así.',
    },
  },
  'limpeza-de-pisos': {
    seccion1H2: '¿Por que contratar limpeza de piso en {barrio}?',
    seccion1Content: 'Limpar un piso en bloque non é o mesmo ca limpar unha vivenda unifamiliar. As superficies máis problemáticas son os baños (cal nas griferías e mampara) e a cociña (graxa en campás, frontais e encimeira). A isto súmase o tipo de chan: o terrazo dos anos 70-80, frecuente en {barrio}, precisa produto neutro e sen abrasivos.',
    queIncluyeH2: '¿Que inclúe a limpeza do piso en {barrio}?',
    queIncluyeBase: [
      'Baños: griferías con antical, vátere, plato de ducha ou bañeira, espellos e azulexos',
      'Cociña: encimeira, campá, frontais e fregadoiro con desengrasante profesional',
      'Dormitorios, salón e corredor: po e superficies',
      'Chan con produto axeitado (terrazo, porcelánico, parqué)',
      'Papeleiras e lixo',
    ],
    precioH2: '¿Canto custa a limpeza de piso en {barrio}?',
    precioItems: [
      'Piso de 1-2 habitacións: desde 55 €',
      'Piso de 3 habitacións: desde 70 €',
      '10 % de desconto con contrato periódico',
      'Prezo pechado que inclúe produtos e desprazamento',
    ],
    faqServizo: {
      q: '¿Que facedes cos chans de terrazo en {barrio}?',
      a: 'O terrazo precisa limpeza con produto neutro, sen lixivia nin abrillantadores ácidos que o opacan. É o chan máis frecuente nos pisos dos anos 70-80 de Ferrolterra e temos experiencia con el desde hai máis de 20 anos.',
    },
  },
  'limpeza-de-apartamentos': {
    seccion1H2: '¿Como funciona a limpeza de apartamentos turísticos en {barrio}?',
    seccion1Content: 'A limpeza de apartamentos turísticos e Airbnb ten una esixencia que non ten a limpeza doméstica habitual: o próximo hóspede entra poucas horas despois do check-out, o tempo é axustado e o estado do apartamento condiciona directamente as valoracións e as reservas futuras. Zentro Limpezas traballa con propietarios de toda Ferrolterra con protocolo de rotación estandarizado.',
    queIncluyeH2: '¿Que inclúe a limpeza de rotación en {barrio}?',
    queIncluyeBase: [
      'Limpeza completa de baños e cociña',
      'Ventilación do espazo e eliminación de olores',
      'Cambio de roupa de cama e toallas se o propietario as deixa preparadas',
      'Comprobación visual de consumibles (xabón, papel, bolsas)',
      'Aviso por WhatsApp con foto ante calquera desperfecto detectado',
      'Chan e superficies de toda a vivenda',
    ],
    precioH2: '¿Canto custa a limpeza de rotación en {barrio}?',
    precioItems: [
      'Estudio ou 1 habitación: desde 45 €/rotación',
      '2 habitacións: desde 65 €/rotación',
      'Prezo pechado por rotación, sen cobros extra',
      'Coordinamos directamente co propietario segundo o calendario',
    ],
    faqServizo: {
      q: '¿Podedes xestionar as rotacións de forma autónoma en {barrio}?',
      a: 'Si. Traballamos con propietarios que nos facilitan acceso e calendario de reservas. Organizamos o servizo sen que o propietario teña que avisar cada vez. Ao terminar enviamos confirmación por WhatsApp.',
    },
  },
  'limpeza-de-cristais': {
    seccion1H2: '¿Por que é importante a limpeza de cristais en {barrio}?',
    seccion1Content: 'Os cristais son a parte dun inmoble que antes revela a falta de limpeza e que máis transforma o aspecto cando están en bo estado. Na costa de Ferrolterra o problema principal é o cal da auga e o salitre do ambiente: acumúlase no vidro formando una capa branca que co tempo é difícil de eliminar sen produtos específicos e técnica correcta.',
    queIncluyeH2: '¿Que inclúe a limpeza de cristais en {barrio}?',
    queIncluyeBase: [
      'Cristais interiores e exteriores de toda a vivenda',
      'Marcos de PVC, aluminio ou madeira limpos con produto axeitado',
      'Persianas e reixas se o cliente o solicita',
      'Quitacal profesional con pH controlado máis escuridor sen marcas nin raias',
      'Pórtiga telescópica para cristais en altura desde o chan',
    ],
    precioH2: '¿Canto custa a limpeza de cristais en {barrio}?',
    precioItems: [
      'Piso con 4-6 ventás: desde 45 €',
      'Piso con 7-10 ventás: desde 65 €',
      'Con servizo periódico de vivenda: desconto incluído',
      'Prezo pechado que inclúe produtos e desprazamento',
    ],
    faqServizo: {
      q: '¿Con que frecuencia recomendades limpar os cristais en {barrio}?',
      a: 'En zonas costeiras de Ferrolterra recomendamos cada 4-6 semanas. O salitre e o cal acumúlanse rápido, especialmente en épocas de vento e choiva. No interior, cada 2-3 meses adoita ser suficiente.',
    },
  },
  'limpeza-de-locais': {
    seccion1H2: '¿Por que a limpeza do local comercial en {barrio} require un servizo profesional?',
    seccion1Content: 'Un local comercial en {barrio} precisa máis limpeza ca un fogar: o tráfico de clientes, a exposición á rúa e a imaxe cara ao público esixen un nivel que vai máis aló do mantemento doméstico. Moitos locais contratan o servizo antes da apertura, ao pechar ou con visitas periódicas para non interromper a actividade.',
    queIncluyeH2: '¿Que inclúe a limpeza do local en {barrio}?',
    queIncluyeBase: [
      'Escaparates e cristais interiores e exteriores',
      'Chan: fregado con produto axeitado ao material (gres, vinilo, madeira)',
      'Baños ou aseos do local',
      'Zona de atención ao público: mostradores, estantes e superficies',
      'Almacén ou zona de traballo se se solicita',
      'Recollida de basura e vaciado de papeleiras',
    ],
    precioH2: '¿Canto custa a limpeza do local en {barrio}?',
    precioItems: [
      'Local ata 50 m²: desde 55 €/visita',
      'Local de 50-100 m²: desde 80 €/visita',
      'Local grande: orzamento personalizado',
      'Con contrato periódico, prezo por visita máis económico',
    ],
    faqServizo: {
      q: '¿Podedes traballar fóra do horario de apertura do local en {barrio}?',
      a: 'Si. A maioría dos clientes prefiren que entremos antes da apertura ou despois do peche para non interromper a actividade. Adaptamos o horario ao que mellor convén ao negocio.',
    },
  },
  'limpeza-de-garaxes': {
    seccion1H2: '¿Que inclúe a limpeza de garaxe en {barrio}?',
    seccion1Content: 'O garaxe acumula un tipo de sucidade diferente á do fogar: po de caucho, manchas de aceite e líquidos do vehículo, partículas de freos e terra da rúa que entra coas rodas. Esta sucidade require desengrasantes industriais ecolóxicos e, en moitos casos, auga a presión ou fregadora de alta eficacia para deixar o pavimento limpo.',
    queIncluyeH2: '¿Que inclúe o servizo de garaxe en {barrio}?',
    queIncluyeBase: [
      'Chan: eliminación de manchas de aceite e líquidos do vehículo con desengrasante industrial',
      'Paredes: eliminación de po e manchas a media altura',
      'Porta do garaxe: interior e mecanismo de apertura',
      'Recollida e retirada de residuos lixeiros',
    ],
    precioH2: '¿Canto custa a limpeza de garaxe en {barrio}?',
    precioItems: [
      'Praza de garaxe individual: desde 45 €',
      'Garaxe de chalé ou vivenda unifamiliar: desde 75 €',
      'Garaxe comunitario: orzamento personalizado segundo metros',
      'Prezo pechado que inclúe produtos e desprazamento',
    ],
    faqServizo: {
      q: '¿Podedes eliminar as manchas de aceite do chan do garaxe en {barrio}?',
      a: 'Si. Usamos desengrasantes industriais ecolóxicos con poder específico para o aceite de motor. Para manchas moi antigas e incrustadas pode ser necesario un segundo tratamento, que indicamos no orzamento.',
    },
  },
  'limpeza-de-mudanzas': {
    seccion1H2: '¿Cando se necesita limpeza de mudanza en {barrio}?',
    seccion1Content: 'A limpeza de mudanza realízase en dúas situacións: ao deixar un inmoble —para entregar ao propietario ou ao comprador en perfectas condicións— ou ao chegar a un inmoble novo, que pode ter sucidade da obra ou dos anteriores inquilinos. En ambos os casos o nivel de profundidade é maior ca nunha limpeza doméstica habitual.',
    queIncluyeH2: '¿Que inclúe a limpeza de mudanza en {barrio}?',
    queIncluyeBase: [
      'Limpeza a fondo de todos os cuartos, cociña e baños',
      'Eliminación de restos de obra: po, manchas de pintura e silicona',
      'Interior de armarios fixos e empotrados',
      'Cristais e marcos de ventás',
      'Baños: descalcificación e desinfección completa',
      'Cociña: desengrase de campá, encimeira e electrodomésticos fixos',
    ],
    precioH2: '¿Canto custa a limpeza de mudanza en {barrio}?',
    precioItems: [
      'Piso de 1-2 habitacións: desde 130 €',
      'Piso de 3 habitacións: desde 180 €',
      'Chalé ou vivenda grande: orzamento personalizado',
      'Prezo pechado inclúe produtos, tempo e desprazamento',
    ],
    faqServizo: {
      q: '¿Canto tempo leva a limpeza de mudanza dun piso en {barrio}?',
      a: 'Para un piso estándar de 70-80 m² en {barrio}, entre 4 e 7 horas con equipo de dúas persoas. Depende do estado, a antigüidade e se hai restos de obra. O tempo e o prezo dámoscho pechados antes de empezar.',
    },
  },
  'limpeza-de-trasteiros': {
    seccion1H2: '¿Por que contratar a limpeza do trasteiro en {barrio}?',
    seccion1Content: 'O trasteiro é o espazo que máis tempo pasa sen limpeza profesional e onde se acumula máis po, humidade e sucidade difícil. Unha limpeza a fondo precisa aspirado en profundidade, eliminación de po sedimentado en anos e, en moitos casos, tratamento de humidade e mofo se o espazo non está ben ventilado.',
    queIncluyeH2: '¿Que inclúe a limpeza do trasteiro en {barrio}?',
    queIncluyeBase: [
      'Eliminación de po sedimentado en chans, paredes e estantes',
      'Aspirado en profundidade antes de fregar',
      'Fregado do chan con produto antifúngico se hai humidade',
      'Paredes e teito: retirada de po e telarañas',
      'Porta e zona de acceso',
    ],
    precioH2: '¿Canto custa a limpeza do trasteiro en {barrio}?',
    precioItems: [
      'Trasteiro ata 10 m²: desde 45 €',
      'Trasteiro de 10-25 m²: desde 65 €',
      'Trasteiro grande ou baixo: orzamento personalizado',
      'Prezo pechado que inclúe produtos e desprazamento',
    ],
    faqServizo: {
      q: '¿Tratades o mofo e a humidade no trasteiro de {barrio}?',
      a: 'Si. Aplicamos produto antifúngico en paredes e chan cando hai manchas de humidade ou mofo. Para problemas estruturais de humidade (filtracións, condensación crónica) avisámoste para que o resolvas cun especialista antes de que se agrave.',
    },
  },
};

const GL_SERVIZO_SLUGS = new Set(Object.keys(GL_SERVIZOS_RAW));

export function getContenidoGLBarrio(
  servicioSlugGL: string,
  archetype: BarrioArchetype,
  barrioNombre: string,
  municipioNombre: string,
): ContenidoGLBarrio | null {
  const arqRaw = GL_ARQUETIPOS_RAW[archetype];
  const serRaw = GL_SERVIZOS_RAW[servicioSlugGL];
  if (!arqRaw || !serRaw) return null;

  const g = (s: string) => tGL(s, barrioNombre, municipioNombre);

  const intro = g(arqRaw.introBarrio);
  const metaDescBase = `${g(serRaw.seccion1Content).slice(0, 110)} Orzamento gratis en 24h.`;

  return {
    h1Qualifier: arqRaw.h1Qualifier,
    metaDesc: metaDescBase.slice(0, 158),
    intro,
    seccion1H2: g(serRaw.seccion1H2),
    seccion1P1: g(serRaw.seccion1Content),
    seccion1P2: intro,
    queIncluyeH2: g(serRaw.queIncluyeH2),
    queIncluyeItems: [
      ...serRaw.queIncluyeBase,
      ...arqRaw.desafiosPrinc.slice(0, 2),
    ],
    cuandoH2: g(arqRaw.cuandoH2),
    cuandoItems: arqRaw.cuandoItems.map(g),
    precioH2: g(serRaw.precioH2),
    precioItems: serRaw.precioItems,
    faqs: [
      { q: g(arqRaw.faqArq.q), a: g(arqRaw.faqArq.a) },
      { q: g(serRaw.faqServizo.q), a: g(serRaw.faqServizo.a) },
    ],
  };
}

export { GL_SERVIZO_SLUGS };
