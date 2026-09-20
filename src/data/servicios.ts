export type ServicioFAQ = { q: string; a: string };

export type Servicio = {
  slug: string;
  slugGL: string;
  nombre: string;
  nombreGL: string;
  icono: string;
  precioDesde: string | null;
  precioSchema?: string;       // precio mínimo publicado en las páginas combo, solo para datos estructurados
  descripcionCorta: string;
  descripcion?: string;        // párrafo largo específico del servicio para combo pages
  faqsServicio?: ServicioFAQ[]; // FAQs propias del servicio (no genéricas de localización)
  faqsServicioGL?: ServicioFAQ[];
  tier: 1 | 2 | 3;
  municipiosCombo: string[];
  tituloMeta?: string;
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
    descripcion: 'La limpieza de viviendas abarca pisos en bloque, casas unifamiliares, chalets y viviendas rurales, y cada tipo de inmueble tiene su propio ritmo y sus propias zonas críticas. En Zentro Limpiezas trabajamos con un orden sistemático: empezamos siempre por las alturas —luminarias, cornisas, parte superior de armarios y muebles— y terminamos por los suelos, para no deshacer lo ya hecho. Baños y cocina son las zonas que más tiempo requieren: cal acumulada en griferías, grasa en encimeras y campanas, juntas de azulejo. Las dejamos para el tramo final de tiempo intensivo.\n\nDistinguimos entre limpieza puntual y periódica porque son servicios distintos. La puntual —para mudanzas, post-obras, vuelta de vacaciones o vivienda que lleva tiempo cerrada— requiere más tiempo y un nivel de atención diferente. La periódica es de mantenimiento: el nivel de suciedad es bajo, el equipo ya conoce la vivienda y los puntos que más se ensucian, y el resultado es más consistente con el tiempo.',
    faqsServicio: [
      { q: '¿Qué incluye una limpieza completa de vivienda?', a: 'Baños completos (griferías, inodoro, plato de ducha o bañera, espejos, cal en azulejos), cocina (encimera, campana, frontales de muebles, fregadero), dormitorios, salón, pasillos y escaleras interiores. Los cristales interiores y los suelos se incluyen siempre. Los interiores de armarios o nevera solo si se solicita expresamente al hacer el presupuesto.' },
      { q: '¿Necesito estar en casa mientras limpiáis?', a: 'No es obligatorio. Muchos clientes periódicos nos facilitan acceso sin estar presentes. Trabajamos con total discreción y al terminar te enviamos un mensaje por WhatsApp. Si prefieres estar, sin problema.' },
      { q: '¿Cuántas personas vienen a limpiar la vivienda?', a: 'Normalmente una o dos personas, según el tamaño del inmueble y el tiempo disponible. El equipo es siempre el mismo en los servicios periódicos, lo que permite conocer bien la casa y trabajar con más eficiencia en cada visita.' },
      { q: '¿Cuál es la diferencia entre limpieza de vivienda y limpieza a fondo?', a: 'La limpieza de vivienda es el servicio estándar, puntual o de mantenimiento. La limpieza a fondo va más allá: incluye zonas habitualmente ignoradas como detrás de muebles, interior de horno y nevera, armarios interiores y rodapiés en profundidad. Está pensada para situaciones especiales o como "reseteo" antes de empezar con el servicio periódico.' },
      { q: '¿Limpiáis casas rurales de piedra o viviendas con materiales especiales?', a: 'Sí. Tenemos experiencia con viviendas rurales en el interior de Ferrolterra y A Coruña: suelos de baldosa hidráulica, piedra vista, madera de pino o roble, terrazos de distintas épocas. Usamos productos neutros certificados que no atacan ni oxidan estos materiales.' },
    ],
    faqsServicioGL: [
      { q: 'Que inclúe unha limpeza completa de vivenda?', a: 'Baños completos (billas, inodoro, prato de ducha ou bañeira, espellos, cal nos azulexos), cociña (encimeira, campá, frontais de moble, pía), dormitorios, salón, corredores e escaleiras interiores. Os cristais interiores e os chans inclúense sempre. Os interiores de armarios ou neveira só se se solicita expresamente ao facer o orzamento.' },
      { q: 'Necesito estar na casa mentres limpades?', a: 'Non é obrigatorio. Moitos clientes periódicos facilítannos o acceso sen estar presentes. Traballamos con total discreción e ao rematar envíámosche unha mensaxe por WhatsApp. Se prefires estar, sen problema.' },
      { q: 'Cantas persoas veñen limpar a vivenda?', a: 'Normalmente unha ou dúas persoas, segundo o tamaño do inmoble e o tempo dispoñible. O equipo é sempre o mesmo nos servizos periódicos, o que permite coñecer ben a casa e traballar con máis eficiencia en cada visita.' },
      { q: 'Cal é a diferenza entre limpeza de vivenda e limpeza a fondo?', a: 'A limpeza de vivenda é o servizo estándar, puntual ou de mantemento. A limpeza a fondo vai máis alá: inclúe zonas habitualmente ignoradas como detrás dos mobles, interior de forno e neveira, armarios interiores e rodapés en profundidade. Está pensada para situacións especiais ou como "reseteo" antes de comezar co servizo periódico.' },
      { q: 'Limpades casas rurais de pedra ou vivendas con materiais especiais?', a: 'Si. Temos experiencia con vivendas rurais no interior de Ferrolterra e A Coruña: chans de baldosa hidráulica, pedra á vista, madeira de piñeiro ou carballo, terrazos de distintas épocas. Usamos produtos neutros certificados que non atacan nin oxidan estes materiais.' },
    ],
    tier: 1,
    municipiosCombo: ['ferrol', 'a-coruna', 'naron', 'valdovino', 'fene', 'neda', 'mugardos', 'ares', 'pontedeume', 'cedeira', 'moeche', 'san-sadurnino', 'cabanas', 'ortigueira', 'cerdido', 'culleredo', 'arteixo', 'cambre', 'oleiros', 'sada'],
  },
  {
    slug: 'limpieza-de-pisos',
    slugGL: 'limpeza-de-pisos',
    nombre: 'Limpieza de pisos',
    nombreGL: 'Limpeza de pisos',
    icono: 'buildings',
    precioDesde: '55€',
    descripcionCorta: 'Limpieza profesional de pisos en bloque. Puntual para ocasiones especiales o periódica.',
    descripcion: 'Limpiar un piso en bloque no es lo mismo que limpiar una casa unifamiliar. Las superficies más problemáticas suelen ser los baños —cal acumulada en griferías, mamparas y azulejos— y la cocina, donde la grasa se instala en campanas, frontales de muebles y encimeras. A eso se suma el tipo de suelo: el terrazo de los años 70-80, frecuente en pisos de Ferrolterra, requiere producto neutro y sin abrasivos; el porcelánico o el mármol, técnicas distintas.\n\nEn Zentro Limpiezas trabajamos con método: primero las alturas, después las superficies verticales y finalmente los suelos. Así evitamos que el polvo removido en techos y cornisas caiga sobre lo ya limpiado. Para el servicio periódico, el equipo aprende los hábitos de la casa, los puntos que más se ensucian y los productos que mejor funcionan en cada superficie, lo que hace que el resultado mejore con el tiempo.',
    faqsServicio: [
      { q: '¿Cuál es la diferencia entre limpieza puntual y periódica en un piso?', a: 'La puntual es una limpieza a fondo, sin restricciones de tiempo: ideal cuando el piso lleva meses sin limpieza profesional, hay una mudanza o hay que dejarlo en perfecto estado. La periódica (semanal, quincenal o mensual) es de mantenimiento: más rápida porque el nivel de suciedad es bajo y el equipo ya conoce el piso y sus particularidades.' },
      { q: '¿Qué hacéis con los suelos de terrazo?', a: 'El terrazo requiere fregona con producto neutro, sin lejía ni abrillantadores ácidos que lo queman y lo dejan opaco con el tiempo. Es el suelo más frecuente en pisos de los años 70-80 en Ferrol, Narón o Fene. Tenemos experiencia con él y sabemos exactamente qué producto usar según su estado.' },
      { q: '¿Limpiáis también terrazas y balcones?', a: 'Sí. Los balcones y terrazas con suelo de baldosa o terrazo se incluyen si el cliente lo solicita. Para suelos de madera exterior o composite usamos productos específicos. Lo indicamos en el presupuesto.' },
      { q: '¿Puedo estar en el piso mientras limpiáis?', a: 'Sí, sin problema. Muchos clientes están en casa. El equipo trabaja de forma ordenada y discreta, zona a zona, sin interferir en el resto del piso.' },
      { q: '¿Limpiáis el interior de la nevera y el horno?', a: 'En la limpieza puntual o a fondo sí, si el cliente lo solicita. En la periódica de mantenimiento solo si se acuerda expresamente, ya que añade tiempo de servicio. Lo aclaramos siempre en el presupuesto.' },
    ],
    faqsServicioGL: [
      { q: 'Cal é a diferenza entre limpeza puntual e periódica nun piso?', a: 'A puntual é unha limpeza a fondo, sen restricións de tempo: ideal cando o piso leva meses sen limpeza profesional, hai unha mudanza ou hai que deixalo en perfecto estado. A periódica (semanal, quincenal ou mensual) é de mantemento: máis rápida porque o nivel de sucidade é baixo e o equipo xa coñece o piso e as súas particularidades.' },
      { q: 'Que facedes cos chans de terrazo?', a: 'O terrazo require fregona con produto neutro, sen lixivia nin abrillantadores ácidos que o queiman e o deixan opaco co tempo. É o chan máis frecuente en pisos dos anos 70-80 en Ferrol, Narón ou Fene. Temos experiencia con el e sabemos exactamente que produto usar segundo o seu estado.' },
      { q: 'Limpades tamén terrazas e balcóns?', a: 'Si. Os balcóns e terrazas con chan de baldosa ou terrazo inclúense se o cliente o solicita. Para chans de madeira exterior ou composite usamos produtos específicos. Indicámolo no orzamento.' },
      { q: 'Podo estar no piso mentres limpades?', a: 'Si, sen problema. Moitos clientes están na casa. O equipo traballa de forma ordenada e discreta, zona a zona, sen interferir no resto do piso.' },
      { q: 'Limpades o interior da neveira e o forno?', a: 'Na limpeza puntual ou a fondo si, se o cliente o solicita. Na periódica de mantemento só se se acorda expresamente, xa que engade tempo de servizo. Aclarámolo sempre no orzamento.' },
    ],
    tier: 1,
    municipiosCombo: ['a-coruna', 'ferrol', 'naron', 'neda', 'fene', 'mugardos', 'valdovino', 'ares', 'moeche', 'san-sadurnino', 'cabanas', 'pontedeume', 'cedeira', 'ortigueira', 'cerdido'],
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
    descripcion: 'La limpieza de un local comercial tiene una lógica distinta a la de una vivienda: el tráfico de personas es constante, las zonas de alta exigencia son otras —mostradores, escaparates, baños de público, suelos de entrada— y el horario debe encajar con la actividad del negocio sin interferir en ella. Trabajamos antes de apertura, después del cierre o en días de descanso.\n\nPara bares y restaurantes la zona más crítica es la cocina: grasa acumulada en campanas, filtros, suelos y superficies de preparación. Usamos desengrasantes profesionales con certificación ecológica válidos para uso en entornos alimentarios. Para tiendas y despachos, la prioridad son los suelos, cristales y zonas de atención al público. Cada tipo de local tiene sus zonas críticas y adaptamos el protocolo en consecuencia.',
    faqsServicio: [
      { q: '¿A qué horas trabajáis para no molestar al negocio?', a: 'Nos adaptamos completamente al horario del local: antes de apertura (desde las 6-7h si hace falta), después del cierre o en días de descanso del negocio. Es el punto de partida de cualquier presupuesto: cuándo podemos entrar sin interrumpir la actividad.' },
      { q: '¿Con qué frecuencia se recomienda limpiar un local comercial?', a: 'Depende del tipo de negocio y el volumen de clientes. Un bar o restaurante necesita limpieza diaria o cada dos días. Una tienda o despacho puede funcionar bien con limpieza semanal o quincenal. Te orientamos según tu caso y el volumen de tráfico.' },
      { q: '¿Limpiáis cocinas de bares y restaurantes con grasa acumulada?', a: 'Sí. Es uno de los trabajos más exigentes: campanas, filtros de acero, suelos de cocina y superficies de acero inoxidable con meses de grasa acumulada. Usamos desengrasantes profesionales ecológicos certificados para entornos de manipulación de alimentos.' },
      { q: '¿Emitís factura para autónomos y empresas?', a: 'Sí. Facturamos con IVA. La limpieza de un local es un gasto deducible para autónomos y empresas siempre que el local esté vinculado a la actividad económica.' },
      { q: '¿Podéis incluir la limpieza de escaparates y cristales del local?', a: 'Sí. La limpieza de cristales exteriores e interiores se puede añadir al contrato de mantenimiento o contratar por separado. Para escaparates con vinilo o rotulación tenemos especial cuidado de no dañarlos.' },
    ],
    faqsServicioGL: [
      { q: 'A que horas traballades para non molestar ao negocio?', a: 'Adaptámonos completamente ao horario do local: antes da apertura (desde as 6-7h se fai falta), despois do peche ou en días de descanso do negocio. É o punto de partida de calquera orzamento: cando podemos entrar sen interromper a actividade.' },
      { q: 'Con que frecuencia se recomenda limpar un local comercial?', a: 'Depende do tipo de negocio e do volume de clientes. Un bar ou restaurante precisa limpeza diaria ou cada dous días. Unha tenda ou despacho pode funcionar ben con limpeza semanal ou quincenal. Orientámoste segundo o teu caso e o volume de tráfico.' },
      { q: 'Limpades cociñas de bares e restaurantes con graxa acumulada?', a: 'Si. É un dos traballos máis esixentes: campás, filtros de aceiro, chans de cociña e superficies de aceiro inoxidable con meses de graxa acumulada. Usamos desengraxantes profesionais ecolóxicos certificados para contornos de manipulación de alimentos.' },
      { q: 'Emitides factura para autónomos e empresas?', a: 'Si. Facturamos con IVE. A limpeza dun local é un gasto deducible para autónomos e empresas sempre que o local estea vinculado á actividade económica.' },
      { q: 'Podedes incluír a limpeza de escaparates e cristais do local?', a: 'Si. A limpeza de cristais exteriores e interiores pódese engadir ao contrato de mantemento ou contratar por separado. Para escaparates con vinilo ou rotulación temos especial coidado de non danalos.' },
    ],
    tier: 2,
    municipiosCombo: ['a-coruna', 'ferrol', 'naron', 'neda', 'fene', 'mugardos', 'valdovino', 'ares', 'moeche', 'san-sadurnino', 'cabanas', 'pontedeume', 'cedeira', 'ortigueira', 'cerdido'],
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
    municipiosCombo: ['ferrol', 'naron', 'a-coruna', 'fene', 'culleredo', 'arteixo', 'cambre', 'oleiros'],
  },
  {
    slug: 'limpieza-a-fondo',
    slugGL: 'limpeza-a-fondo',
    tituloMeta: 'Limpieza a fondo · gran limpieza de pisos y viviendas',
    nombre: 'Limpieza a fondo',
    nombreGL: 'Limpeza a fondo',
    icono: 'sparkle',
    precioDesde: null,
    precioSchema: '120',
    descripcionCorta: 'Limpieza profunda ocasional. Ideal para mudanzas, post-verano o gran limpieza anual.',
    tier: 2,
    municipiosCombo: ['ferrol', 'naron', 'a-coruna', 'neda', 'fene', 'mugardos', 'valdovino', 'ares', 'pontedeume', 'cedeira', 'culleredo', 'arteixo', 'cambre', 'oleiros'],
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
    precioSchema: '60',
    descripcionCorta: 'Limpieza entre huéspedes de alojamientos turísticos y Airbnb. Rápida y completa.',
    descripcion: 'La limpieza de apartamentos turísticos y alojamientos Airbnb tiene una exigencia que no tiene la limpieza doméstica habitual: el siguiente huésped entra pocas horas después del check-out, el tiempo disponible es ajustado y el estado del apartamento condiciona directamente la valoración y las reservas futuras. En Zentro Limpiezas trabajamos con propietarios y gestores de toda la costa de Ferrolterra y el área metropolitana de A Coruña con un protocolo de rotación estandarizado.\n\nEl servicio incluye limpieza completa de baños y cocina, ventilación del espacio, cambio de ropa de cama y toallas si el propietario las deja preparadas, comprobación visual de consumibles (jabón, papel, bolsas) y aviso por WhatsApp con foto ante cualquier desperfecto detectado. Coordinamos los horarios directamente con el propietario o gestor para garantizar que el apartamento esté listo antes del check-in marcado.',
    faqsServicio: [
      { q: '¿Podéis gestionar las rotaciones de forma autónoma según el calendario de reservas?', a: 'Sí. Trabajamos con propietarios que nos facilitan acceso y calendario. Nos coordinamos para saber los días de check-out y check-in y organizamos el servicio sin que el propietario tenga que avisar cada vez.' },
      { q: '¿Avisáis si hay desperfectos o falta algo en el apartamento?', a: 'Sí. Enviamos mensaje por WhatsApp al propietario si detectamos roturas, manchas difíciles de quitar, consumibles agotados o cualquier incidencia relevante. Si hace falta, adjuntamos foto.' },
      { q: '¿Hacéis el cambio de ropa de cama y toallas?', a: 'Sí, si el propietario deja la ropa limpia preparada en el apartamento. No incluimos servicio de lavandería, pero gestionamos el cambio in situ: retiramos la usada y ponemos la limpia.' },
      { q: '¿Cuánto tarda la limpieza de un apartamento turístico?', a: 'Un estudio o apartamento de 1 habitación suele estar listo en 45-60 minutos. Uno de 2 habitaciones, entre 75 y 90 minutos. Para apartamentos más grandes o con mayor grado de suciedad, calculamos el tiempo en el presupuesto.' },
      { q: '¿Trabajáis en temporada alta con muchas rotaciones seguidas?', a: 'Sí. La temporada alta en la costa gallega —junio a septiembre— es nuestra época de mayor actividad en este servicio, especialmente en Valdoviño, Cedeira, Ares y A Coruña. Recomendamos fijar el calendario con antelación para garantizar disponibilidad.' },
    ],
    faqsServicioGL: [
      { q: 'Podedes xestionar as rotacións de forma autónoma segundo o calendario de reservas?', a: 'Si. Traballamos con propietarios que nos facilitan acceso e calendario. Coordinámonos para saber os días de check-out e check-in e organizamos o servizo sen que o propietario teña que avisar cada vez.' },
      { q: 'Avisades se hai desperfectos ou falta algo no apartamento?', a: 'Si. Enviamos mensaxe por WhatsApp ao propietario se detectamos roturas, manchas difíciles de quitar, consumibles esgotados ou calquera incidencia relevante. Se fai falta, adxuntamos foto.' },
      { q: 'Facedes o cambio de roupa de cama e toallas?', a: 'Si, se o propietario deixa a roupa limpa preparada no apartamento. Non incluímos servizo de lavandaría, pero xestionamos o cambio in situ: retiramos a usada e poñemos a limpa.' },
      { q: 'Canto tarda a limpeza dun apartamento turístico?', a: 'Un estudo ou apartamento dun cuarto adoita estar listo en 45-60 minutos. Un de 2 cuartos, entre 75 e 90 minutos. Para apartamentos máis grandes ou con maior grao de sucidade, calculamos o tempo no orzamento.' },
      { q: 'Traballades en tempada alta con moitas rotacións seguidas?', a: 'Si. A tempada alta na costa galega —de xuño a setembro— é a nosa época de maior actividade neste servizo, especialmente en Valdoviño, Cedeira, Ares e A Coruña. Recomendamos fixar o calendario con antelación para garantir dispoñibilidade.' },
    ],
    tier: 2,
    municipiosCombo: ['a-coruna', 'ferrol', 'naron', 'neda', 'fene', 'mugardos', 'valdovino', 'ares', 'moeche', 'san-sadurnino', 'cabanas', 'pontedeume', 'cedeira', 'ortigueira', 'cerdido', 'sada', 'oleiros'],
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
    municipiosCombo: ['ferrol', 'naron', 'a-coruna', 'neda', 'fene', 'mugardos', 'valdovino', 'ares', 'pontedeume', 'cedeira', 'moeche', 'san-sadurnino', 'cabanas', 'ortigueira', 'cerdido', 'culleredo', 'arteixo', 'cambre', 'oleiros'],
  },
  {
    slug: 'limpieza-de-cristales',
    slugGL: 'limpeza-de-cristais',
    nombre: 'Limpieza de cristales',
    nombreGL: 'Limpeza de cristais',
    icono: 'window',
    precioDesde: null,
    precioSchema: '45',
    descripcionCorta: 'Limpieza profesional de cristales y ventanales. Interior y exterior. Alturas.',
    descripcion: 'Los cristales son la parte de un inmueble que más rápido revela la falta de limpieza y que más transforma el aspecto cuando están en buen estado. En la costa de Ferrolterra el problema principal es la cal del agua y la salinidad del ambiente: se acumula en el vidrio formando una capa blanquecina que con el tiempo resulta difícil de eliminar sin productos específicos. Usamos quitacales profesionales con ph controlado y técnica de escurridor para un acabado sin rayas y sin rastro de agua.\n\nTrabajamos tanto en interiores como en exteriores, incluidas alturas que requieren pértiga telescópica o acceso con escalera. La limpieza de cristales se contrata de forma independiente o como añadido al servicio de vivienda, local o comunidad. En espacios con grandes ventanales, fachadas acristaladas o negocios con escaparates la recomendación es limpiarlos cada 4-6 semanas para mantener el aspecto y evitar que la cal penetre el vidrio.',
    faqsServicio: [
      { q: '¿Limpiáis cristales por fuera si hay altura o difícil acceso?', a: 'Sí. Usamos pértigas telescópicas para alcanzar ventanas en altura desde el suelo, sin necesidad de andamios ni escalas de gran altura. Para accesos más complejos valoramos in situ y lo indicamos en el presupuesto.' },
      { q: '¿Qué productos usáis en la limpieza de cristales?', a: 'Quitacales profesionales con ph neutro o ácido controlado según el grado de incrustación, seguidos de limpiacristales estándar y secado con escurridor de goma para evitar rayas y marcas de agua. Son productos ecológicos certificados y seguros para marcos de PVC, aluminio o madera.' },
      { q: '¿Con qué frecuencia hay que limpiar los cristales en la costa?', a: 'En la costa gallega la salinidad y la humedad aceleran la acumulación de cal y suciedad. En viviendas frente al mar o en municipios como Valdoviño, Cedeira o Ares, recomendamos limpiar cada 4-6 semanas. En el interior, cada 2-3 meses suele ser suficiente.' },
      { q: '¿Limpiáis también marcos, persianas y rejas?', a: 'Sí. La limpieza de marcos de PVC o aluminio, persianas enrollables y rejas se puede incluir en el servicio. En el presupuesto especificamos qué elementos están incluidos para que no haya dudas.' },
      { q: '¿Se puede incluir la limpieza de cristales en el contrato de limpieza del local o la vivienda?', a: 'Sí. Muchos clientes periódicos tienen una visita de cristales cada 4-6 semanas combinada con la limpieza general. Es la opción más cómoda y sale a mejor precio que contratarlo por separado.' },
    ],
    faqsServicioGL: [
      { q: 'Limpades cristais por fóra se hai altura ou difícil acceso?', a: 'Si. Usamos pértigas telescópicas para alcanzar fiestras en altura desde o chan, sen necesidade de andamios nin escaleiras de gran altura. Para accesos máis complexos valoramos in situ e indicámolo no orzamento.' },
      { q: 'Que produtos usades na limpeza de cristais?', a: 'Quitacales profesionais con pH neutro ou ácido controlado segundo o grao de incrustación, seguidos de limpacristais estándar e secado con rasqueta de goma para evitar raias e marcas de auga. Son produtos ecolóxicos certificados e seguros para marcos de PVC, aluminio ou madeira.' },
      { q: 'Con que frecuencia hai que limpar os cristais na costa?', a: 'Na costa galega a salinidade e a humidade aceleran a acumulación de cal e sucidade. En vivendas fronte ao mar ou en concellos como Valdoviño, Cedeira ou Ares, recomendamos limpar cada 4-6 semanas. No interior, cada 2-3 meses adoita ser suficiente.' },
      { q: 'Limpades tamén marcos, persianas e reixas?', a: 'Si. A limpeza de marcos de PVC ou aluminio, persianas enrolables e reixas pódese incluír no servizo. No orzamento especificamos que elementos están incluídos para que non haxa dúbidas.' },
      { q: 'Pódese incluír a limpeza de cristais no contrato de limpeza do local ou da vivenda?', a: 'Si. Moitos clientes periódicos teñen unha visita de cristais cada 4-6 semanas combinada coa limpeza xeral. É a opción máis cómoda e sae a mellor prezo que contratalo por separado.' },
    ],
    tier: 2,
    municipiosCombo: ['a-coruna', 'ferrol', 'naron', 'neda', 'fene', 'mugardos', 'valdovino', 'ares', 'moeche', 'san-sadurnino', 'cabanas', 'pontedeume', 'cedeira', 'ortigueira', 'cerdido'],
  },
  {
    slug: 'limpieza-de-pazos-y-eventos',
    slugGL: 'limpeza-de-pazos',
    tituloMeta: 'Limpieza de pazos y eventos en Galicia',
    nombre: 'Limpieza de pazos y eventos',
    nombreGL: 'Limpeza de pazos e eventos',
    icono: 'castle',
    precioDesde: null,
    descripcionCorta: 'Preparación y post-evento de pazos, fincas y espacios para bodas y celebraciones.',
    descripcion: 'Un pazo, una finca o un espacio para eventos es un inmueble con características muy concretas: superficies de piedra granítica, suelos de madera noble o baldosa hidráulica centenaria, grandes volúmenes de espacio y —tras una boda o celebración— un nivel de suciedad que no tiene nada que ver con la limpieza doméstica habitual. En Zentro Limpiezas diferenciamos dos fases del servicio: la preparación pre-evento, para recibir a los invitados con el espacio en perfectas condiciones, y la limpieza post-evento, donde la prioridad es la velocidad y la recuperación del espacio.\n\nLos materiales nobles de un pazo o finca histórica exigen productos específicos: no todos los desengrasantes son válidos en piedra vista, ni todos los productos de suelo sirven en tarima de castaño o en baldosa hidráulica. Hacemos siempre una visita previa para valorar superficies, volumen de trabajo y tiempo necesario antes de dar el presupuesto definitivo.',
    faqsServicio: [
      { q: '¿Hacéis limpieza pre-evento y post-evento?', a: 'Sí. La limpieza pre-evento se hace el día antes o la mañana del evento, para que el espacio esté impecable en el momento de recibir a los invitados. La post-evento se organiza para el día siguiente al cierre, cuando queda el grueso de la suciedad: restos de comida, cristalería, manchas en suelo.' },
      { q: '¿Limpiáis suelos de madera, piedra y baldosa hidráulica?', a: 'Sí. Son los materiales más frecuentes en pazos y fincas históricas de Ferrolterra y el entorno rural de A Coruña. Usamos productos específicos para cada uno: neutros para la baldosa hidráulica, jabón natural para la madera, y desengrasante con pH controlado para la piedra granítica.' },
      { q: '¿Cuánto tiempo se tarda en limpiar un pazo tras una boda?', a: 'Depende del tamaño del espacio y del número de invitados. Un espacio para 100-150 personas suele requerir entre 6 y 10 horas con un equipo de 2-3 personas. Para bodas grandes o espacios de más de 1000 m², hacemos visita previa y damos presupuesto específico.' },
      { q: '¿Trabajáis en municipios del interior de Ferrolterra como San Sadurniño o Moeche?', a: 'Sí. Cubrimos todos los municipios de Ferrolterra, incluidos los del interior donde se concentran buena parte de los pazos y fincas de celebraciones: San Sadurniño, Moeche, Neda, As Somozas y alrededores. El desplazamiento se valora en el presupuesto.' },
      { q: '¿Necesitáis hacer visita previa antes de dar precio?', a: 'Para eventos grandes o espacios con características especiales, sí. La visita es gratuita y nos permite valorar los materiales, el acceso, el volumen de trabajo y el tiempo necesario. Para eventos estándar en espacios conocidos, damos orientación por WhatsApp antes de la visita.' },
    ],
    faqsServicioGL: [
      { q: 'Facedes limpeza pre-evento e post-evento?', a: 'Si. A limpeza pre-evento faise o día antes ou a mañá do evento, para que o espazo estea impecable no momento de recibir os convidados. A post-evento organízase para o día seguinte ao peche, cando queda o groso da sucidade: restos de comida, cristalería, manchas no chan.' },
      { q: 'Limpades chans de madeira, pedra e baldosa hidráulica?', a: 'Si. Son os materiais máis frecuentes en pazos e fincas históricas de Ferrolterra e o contorno rural da Coruña. Usamos produtos específicos para cada un: neutros para a baldosa hidráulica, xabón natural para a madeira, e desengraxante con pH controlado para a pedra granítica.' },
      { q: 'Canto tempo se tarda en limpar un pazo tras unha voda?', a: 'Depende do tamaño do espazo e do número de convidados. Un espazo para 100-150 persoas adoita requirir entre 6 e 10 horas cun equipo de 2-3 persoas. Para vodas grandes ou espazos de máis de 1000 m², facemos visita previa e damos orzamento específico.' },
      { q: 'Traballades en concellos do interior de Ferrolterra como San Sadurniño ou Moeche?', a: 'Si. Cubrimos todos os concellos de Ferrolterra, incluídos os do interior onde se concentra boa parte dos pazos e fincas de celebracións: San Sadurniño, Moeche, Neda, As Somozas e arredores. O desprazamento valórase no orzamento.' },
      { q: 'Precisades facer visita previa antes de dar prezo?', a: 'Para eventos grandes ou espazos con características especiais, si. A visita é gratuíta e permítenos valorar os materiais, o acceso, o volume de traballo e o tempo necesario. Para eventos estándar en espazos coñecidos, damos orientación por WhatsApp antes da visita.' },
    ],
    tier: 2,
    municipiosCombo: ['ferrol', 'a-coruna', 'naron', 'neda', 'fene', 'mugardos', 'valdovino', 'ares', 'moeche', 'san-sadurnino', 'cabanas', 'pontedeume', 'cedeira', 'ortigueira', 'cerdido'],
  },
  {
    slug: 'limpieza-de-garajes',
    slugGL: 'limpeza-de-garaxes',
    nombre: 'Limpieza de garajes',
    nombreGL: 'Limpeza de garaxes',
    icono: 'garage',
    precioDesde: null,
    precioSchema: '45',
    descripcionCorta: 'Limpieza a fondo de garajes particulares y zonas de aparcamiento en comunidades.',
    tier: 3,
    municipiosCombo: ['ferrol', 'a-coruna', 'naron'],
  },
  {
    slug: 'limpieza-de-tapicerias',
    slugGL: 'limpeza-de-tapizarias',
    nombre: 'Limpieza de tapicerías',
    nombreGL: 'Limpeza de tapizarías',
    icono: 'sofa',
    precioDesde: null,
    descripcionCorta: 'Limpieza y desinfección de sofás, sillas, colchones y tapicería de vehículos.',
    tier: 3,
    municipiosCombo: ['ferrol', 'a-coruna', 'naron'],
  },
  {
    slug: 'limpieza-de-trasteros',
    slugGL: 'limpeza-de-trasteiros',
    nombre: 'Limpieza de trasteros',
    nombreGL: 'Limpeza de trasteiros',
    icono: 'box',
    precioDesde: null,
    precioSchema: '45',
    descripcionCorta: 'Vaciado, organización y limpieza a fondo de trasteros y almacenes.',
    tier: 3,
    municipiosCombo: ['ferrol', 'naron', 'a-coruna', 'culleredo'],
  },
  {
    slug: 'desinfeccion-profesional',
    slugGL: 'desinfeccion-profesional',
    tituloMeta: 'Desinfección de viviendas y locales en Ferrol y A Coruña',
    nombre: 'Desinfección profesional',
    nombreGL: 'Desinfección profesional',
    icono: 'shield',
    precioDesde: null,
    descripcionCorta: 'Tratamiento de desinfección con biocidas certificados para hogares, oficinas y locales.',
    tier: 3,
    municipiosCombo: ['ferrol', 'a-coruna', 'naron'],
  },
  {
    slug: 'limpieza-de-mudanzas',
    slugGL: 'limpeza-de-mudanzas',
    nombre: 'Limpieza de mudanzas',
    nombreGL: 'Limpeza de mudanzas',
    icono: 'truck',
    precioDesde: null,
    precioSchema: '130',
    descripcionCorta: 'Limpieza completa antes y después de una mudanza. Pisos entrantes y salientes.',
    tier: 3,
    municipiosCombo: ['ferrol', 'a-coruna', 'naron', 'culleredo'],
  },
];

export function getServicioBySlug(slug: string): Servicio | undefined {
  return SERVICIOS.find(s => s.slug === slug);
}

export const SERVICIOS_TIER1 = SERVICIOS.filter(s => s.tier === 1);

// Enlace a la página servicio × municipio si existe; si no, a la del servicio.
export function hrefServicioMunicipio(servicio: Servicio, municipioSlug: string, lang: 'es' | 'gl' = 'es'): string {
  const existe = servicio.municipiosCombo.includes(municipioSlug);
  if (lang === 'gl') return existe ? `/gl/servizos/${servicio.slugGL}/${municipioSlug}/` : `/gl/servizos/${servicio.slugGL}/`;
  return existe ? `/servicios/${servicio.slug}/${municipioSlug}/` : `/servicios/${servicio.slug}/`;
}
