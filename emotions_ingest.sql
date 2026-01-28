-- INGESTA: MAZO ESPEJO DE EMOCIONES (30 CARTAS COMPLETAS)
-- Este script inserta las 30 cartas del Mazo de Emociones con sus variaciones temporales.

INSERT INTO cards (
    id, deck_id, name, type, image,
    interpretation_past, interpretation_present, interpretation_future,
    question_past, question_present, question_future,
    challenge_past, challenge_present, challenge_future,
    ritual_past, ritual_present, ritual_future,
    invitation
) VALUES 
-- 1: LA CALMA
(
    'emotions-calm', 'emotions', 'La Calma', 'emotions',
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000&auto=format&fit=crop',
    'Hubo un periodo en el que encontraste serenidad en medio de la presión, o aprendiste a crear silencio interno cuando el entorno era ruidoso. Esa experiencia te enseñó que la calma no llega por casualidad: se construye.',
    'Tu sistema interno te pide bajar revoluciones. No se trata de parar el mundo, sino de ordenar tu energía para decidir con claridad. La calma ahora es una estrategia: te devuelve el control sin necesidad de forzarlo.',
    'Si sostienes esta calma, llegarás a una etapa de mayor estabilidad emocional y foco. Verás soluciones con más nitidez y tu presencia influirá positivamente en lo que te rodea.',
    '¿Cuándo fue la última vez que sentiste calma de verdad y qué la hace posible?', 
    '¿Qué ruido interno necesitas bajar hoy para escucharte mejor?', 
    '¿Qué cambiaría en tu vida si protegieras tu calma como un recurso sagrado?',
    'Recuerda una situación reciente que te aceleró y practica hoy una pausa breve antes de responder o actuar.', 
    'Durante el día, detecta tres momentos de tensión y elige conscientemente suavizar el cuerpo (hombros, mandíbula, respiración).', 
    'Durante tres días, reserva un micro-espacio fijo de calma (5 minutos) y cúmplelo como un compromiso contigo.',
    'Haz una “pausa de ancla”: pon una mano en el pecho y respira 6 veces, lento, sin hacer nada más.', 
    'Cada vez que detectes tensión, exhala largo y repite en silencio: “Ahora vuelvo a mí”.', 
    'En tu micro-espacio diario, siéntate sin pantalla y termina diciendo: “Mi calma guía mis decisiones”.',
    'La calma no es ausencia de problemas; es presencia de ti. No necesitas tener todo resuelto para estar centrado.'
),

-- 2: LA CONFIANZA
(
    'emotions-trust', 'emotions', 'La Confianza', 'emotions',
    'https://images.unsplash.com/photo-1520975958225-43b36b25f4f3?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que confiaste y eso te sostuvo: en una persona, en tu criterio o en la vida misma. También puede que la confianza se rompiera y aprendieras a reconstruirla con más madurez y límites.',
    'Ahora estás en un punto donde la duda puede frenarte. La confianza que necesitas no es ciega; es interna: confiar en tu capacidad de gestionar lo que venga, incluso si el resultado no es perfecto.',
    'La confianza crecerá si la practicas como un músculo. Te verás tomando decisiones más firmes, eligiendo con menos ansiedad y atrayendo relaciones más claras y equilibradas.',
    '¿En qué momento aprendiste a confiar en ti, aunque tuvieras miedo?', 
    '¿Qué decisión se aclararía hoy si confiaras un 10% más en tu criterio?', 
    '¿Qué área de tu vida mejoraría si construyeras confianza de forma constante?',
    'Identifica una situación pasada en la que te sostuviste y reconoce qué hiciste bien para llegar hasta aquí.', 
    'Toma hoy una decisión pequeña sin pedir validación externa y sosténla con calma.', 
    'Durante tres días, elige una acción diaria que refuerce tu autoconfianza (cumplir una promesa, terminar algo, decir un “no”).',
    'Coloca una mano en el pecho y di: “He podido antes. Puedo ahora”. Luego respira profundo tres veces.', 
    'Antes de ejecutar tu decisión, di: “Confío en mi criterio”. Hazlo y no lo revises mentalmente después.', 
    'Al final de cada día, toca tu muñeca como “sello” y di: “Cumplí conmigo”.',
    'La confianza no es una emoción perfecta; es una postura interna. No necesitas certeza absoluta para avanzar.'
),

-- 3: LA GRATITUD
(
    'emotions-gratitude', 'emotions', 'La Gratitud', 'emotions',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que algo o alguien te sostuvo: un gesto pequeño, una ayuda inesperada, una oportunidad. La gratitud nace cuando reconoces que no todo lo hiciste solo.',
    'Ahora tienes margen para reconocer lo que sí funciona. La gratitud no niega los problemas; los pone en perspectiva para que tu energía no se quede atrapada en la queja o la exigencia constante.',
    'Si cultivas gratitud, entrarás en un ciclo más fértil: más claridad, más motivación y mejores vínculos. Tu atención deja de buscar solo fallos y empieza a ver recursos.',
    '¿Qué te sostuvo en el pasado cuando pensaste que no podrías?', 
    '¿Qué estás pasando por alto hoy que en realidad te está ayudando?', 
    '¿Qué cambiaría si tuvieras el hábito de agradecer incluso lo pequeño?',
    'Recuerda un apoyo que recibiste y dedica hoy un minuto a reconocerlo internamente sin prisa.', 
    'Hoy, identifica tres cosas concretas que te han facilitado el día y detente a notarlas con presencia.', 
    'Durante tres días, expresa gratitud en una acción simple (un mensaje, un gesto, una devolución positiva).',
    'Pon ambas manos juntas (gesto de respeto) y di: “Gracias por lo que me sostuvo”. Respira lento.', 
    'Cada vez que identifiques una de las tres cosas, toca suavemente el pecho y di: “Lo veo”.', 
    'Al expresar tu gratitud, acompáñala con una exhalación larga y repite: “Reconozco y honro”.',
    'La gratitud no es conformismo: es inteligencia emocional. Te devuelve perspectiva y te reordena por dentro.'
),

-- 4: LA ESPERANZA
(
    'emotions-hope', 'emotions', 'La Esperanza', 'emotions',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo un momento en el que, incluso con incertidumbre, elegiste seguir adelante. Puede que no tuvieras pruebas de que todo saldría bien, pero tu esperanza te sostuvo cuando la lógica no alcanzaba.',
    'Ahora tu esperanza puede estar baja o dispersa. No porque no haya salida, sino porque estás cansado. La esperanza, en este punto, no es optimismo ingenuo: es la decisión de mantener una luz encendida mientras avanzas paso a paso.',
    'Se abrirá una ventana de oportunidad. Si mantienes la esperanza en forma de acciones pequeñas y constantes, lo que hoy parece bloqueado empezará a moverse con más fluidez.',
    '¿Qué te ayudó a no rendirte en una etapa difícil del pasado?', '¿Qué pequeño hilo de esperanza puedes sostener hoy, aunque sea mínimo?', '¿Qué posibilidad se abriría si recuperaras confianza en el proceso?',
    'Recuerda una etapa dura que superaste y reconoce qué te mantuvo en pie.', 'Elige hoy una acción pequeña que apoye tu futuro.', 'Durante tres días, repite una acción pequeña diaria orientada a lo que deseas construir.',
    'Respira profundo tres veces y di: “He salido antes. Puedo avanzar ahora”.', 'Antes de tu acción pequeña, repite: “Hoy sostengo la luz”. Luego ejecútala sin negociar.', 'Cada día, al terminar tu acción, mira al frente (literalmente) y di: “Sigo”.',
    'La esperanza no exige garantías: exige presencia. No es negar lo difícil, es negarte a abandonar tu camino.'
),

-- 5: LA ALEGRÍA
(
    'emotions-joy', 'emotions', 'La Alegría', 'emotions',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo un tiempo en el que la alegría fue natural: surgía sin esfuerzo, como una señal de que estabas alineado. Esa memoria emocional existe, aunque hoy parezca lejana.',
    'Ahora la alegría puede estar presente en pequeñas cosas, pero quizá la estás minimizando o postergando. La alegría no es un premio final: es un indicador de vida. Te señala lo que te nutre y te devuelve energía.',
    'Si te permites más alegría consciente, entrarás en un ciclo de mayor creatividad, ligereza y conexión. Tu ánimo se volverá un motor, no una consecuencia.',
    '¿Qué te daba alegría de forma simple en el pasado?', '¿Qué te está pidiendo tu cuerpo o tu corazón para sentirse más vivo hoy?', '¿Qué cambiaría si protegieras tu alegría como parte de tu bienestar?',
    'Recuerda un momento alegre del pasado y permite que tu cuerpo lo sienta unos segundos.', 'Haz hoy una micro-acción que te dé alegría (música, paseo, conversación, juego).', 'Durante tres días, repite una micro-acción diaria de alegría sin justificarla.',
    'Sonríe conscientemente 20 segundos mientras recuerdas ese momento y respira suave.', 'Al hacer tu micro-acción, repite: “Me permito disfrutar”.', 'Cada día, al terminar, di: “La alegría también es medicina”.',
    'No le pidas a la vida permiso para sonreír. La alegría no te quita profundidad; te devuelve energía.'
),

-- 6: LA COMPASIÓN
(
    'emotions-compassion', 'emotions', 'La Compasión', 'emotions',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
    'Hubo un momento en el que alguien te miró con humanidad: te entendió, te perdonó o te sostuvo cuando estabas roto. Esa experiencia te mostró que la compasión cura donde la dureza solo endurece.',
    'Ahora la compasión es una habilidad clave: contigo y con los demás. No se trata de justificarlo todo, sino de bajar la violencia interna. La compasión te permite corregir sin castigarte y poner límites sin odio.',
    'Tu vida se volverá más ligera cuando practiques compasión con consistencia. Sanarás culpas antiguas, mejorarás vínculos y desarrollarás una fortaleza más madura: la que no necesita endurecerse para sostenerse.',
    '¿Quién fue compasivo contigo cuando más lo necesitabas?', '¿En qué aspecto estás siendo demasiado duro contigo o con alguien?', '¿Qué cambiaría si pudieras corregir sin castigarte?',
    'Recuerda un gesto compasivo recibido y reconoce cómo te ayudó.', 'Hoy, cuando cometas un error o te equivoques, háblate con respeto en lugar de reproche.', 'Durante tres días, elige un acto diario de amabilidad concreta.',
    'Pon una mano en el pecho y di: “Merezco humanidad”. Respira lento.', 'En el momento de dureza, exhala largo y repite: “Puedo aprender sin dañarme”.', 'Después de tu acto amable, di: “Esto también me fortalece”.',
    'La compasión no es debilidad; es liderazgo emocional. Te permite mirar el error sin destruirte.'
),

-- 7: EL MIEDO
(
    'emotions-fear', 'emotions', 'El Miedo', 'emotions',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que el miedo te protegió. Te hizo dudar, frenar o alejarte de algo que aún no estabas preparado para enfrentar. Aunque incómodo, ese miedo evitó daños mayores.',
    'Ahora el miedo está intentando tomar el control. No viene a destruirte, sino a señalar una zona vulnerable. Escucharlo sin obedecerlo ciegamente es la clave de este momento.',
    'Aprenderás a convivir con el miedo sin que dirija tus decisiones. Descubrirás que muchas de las barreras que temías eran más mentales que reales.',
    '¿Qué miedo del pasado terminó enseñándote algo valioso?', '¿Qué estás evitando ahora por miedo más que por prudencia?', '¿Qué harías diferente si el miedo dejara de gobernar tus decisiones?',
    'Recuerda un miedo antiguo que superaste y reconoce cómo creciste gracias a ello.', 'Hoy, da un paso pequeño hacia algo que te intimida ligeramente.', 'Durante tres días, identifica un miedo diario y escríbelo mentalmente sin huir de él.',
    'Coloca una mano sobre el pecho y di: “Gracias por protegerme, ahora puedo elegir”.', 'Antes de tu pequeño paso, respira hondo y repite: “Puedo con esto”.', 'Cada vez que nombres un miedo, di: “No eres mi dueño”.',
    'El miedo no es tu enemigo: es una señal. Pero no todo lo que advierte es una amenaza real.'
),

-- 8: LA CULPA
(
    'emotions-guilt', 'emotions', 'La Culpa', 'emotions',
    'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1000&auto=format&fit=crop',
    'Hubo una acción o decisión que te dejó una sensación de deuda interna. Tal vez hiciste lo que pudiste con los recursos que tenías, pero te quedaste juzgándote más de lo necesario.',
    'Ahora la culpa aparece como un peso invisible. No siempre señala un error real: muchas veces nace de exigencias imposibles o responsabilidades que no eran solo tuyas.',
    'Podrás transformar la culpa en aprendizaje. Al perdonarte con honestidad, liberarás una energía enorme que hoy está atrapada en el reproche.',
    '¿Qué situación pasada sigues juzgándote sin darte tregua?', '¿De qué te estás culpando hoy que quizá no te corresponde del todo?', '¿Qué cambiaría si usaras la culpa como aprendizaje?',
    'Recuerda un error pasado y reconoce qué aprendiste de él.', 'Hoy, detecta un reproche interno y reformúlalo en una frase de aprendizaje.', 'Durante tres días, cuando aparezca culpa, pregúntate: “¿Esto me ayuda o me hiere?”',
    'Pon una mano sobre el corazón y di: “Hice lo que pude con lo que sabía”.', 'Al reformular el reproche, repite: “Aprendo sin condenarme”.', 'Cada día, di: “Me libero del castigo inútil”.',
    'La culpa puede enseñarte, pero no está hecha para vivir contigo. Perdonarte te devuelve el futuro.'
),

-- 9: LA VERGÜENZA
(
    'emotions-shame', 'emotions', 'La Vergüenza', 'emotions',
    'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1000&auto=format&fit=crop',
    'Hubo una experiencia en la que te sentiste expuesto, juzgado o insuficiente. Esa herida te enseñó a esconder partes de ti para no volver a sentirte vulnerable.',
    'Ahora la vergüenza puede estar limitando tu expresión. No te deja mostrarte completo ni pedir lo que necesitas. No nace de quién eres, sino de una herida antigua.',
    'Aprenderás a mirarte con más dignidad. Al integrar tu vulnerabilidad, recuperarás autenticidad y fuerza emocional.',
    '¿Qué situación pasada te hizo sentir que no eras suficiente?', '¿Qué parte de ti escondes hoy por miedo al juicio?', '¿Qué libertad nacería si te permitieras mostrarte más auténtico?',
    'Recuerda una situación de vergüenza pasada y reconoce que sobreviviste a ella.', 'Hoy, comparte algo pequeño y auténtico con alguien de confianza.', 'Durante tres días, detecta cuándo te escondes y elige suavemente no hacerlo.',
    'Respira profundo y di: “No soy mi herida”.', 'Antes de mostrarte, repite: “Puedo ser visto sin romperme”.', 'Cada vez que elijas autenticidad, di: “Me honro”.',
    'La vergüenza no define quién eres: solo señala una herida que pide cuidado y respeto.'
),

-- 10: LA TRISTEZA
(
    'emotions-sadness', 'emotions', 'La Tristeza', 'emotions',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo una pérdida, una decepción o un cambio que te hizo sentir profundamente triste. Esa emoción te permitió reconocer lo que realmente te importaba.',
    'Ahora la tristeza puede estar visitándote como una señal de que algo necesita ser llorado, aceptado o despedido. No es debilidad: es un proceso natural de integración.',
    'Si permites que la tristeza fluya, abrirás espacio para una comprensión más suave y una serenidad más honesta. Lo que hoy duele se transformará en madurez emocional.',
    '¿Qué pérdida pasada te enseñó algo sobre tu corazón?', '¿Qué estás necesitando llorar o aceptar ahora?', '¿Qué paz podría nacer después de permitirte sentir esta tristeza?',
    'Recuerda una tristeza pasada y reconoce qué te ayudó a superarla.', 'Hoy, permítete un momento consciente de sentir sin distraerte.', 'Durante tres días, observa qué emoción aparece cuando te das permiso para bajar el ritmo.',
    'Coloca una mano sobre el pecho y di: “Puedo sostener esta emoción”.', 'Al sentir tristeza, respira lento y repite: “Esto también pasará”.', 'Cada día, al terminar, di: “Honro lo que sentí”.',
    'La tristeza no viene a romperte, viene a mostrarte lo que amas. Honra tu dolor con ternura.'
),

-- 11: LA IRA
(
    'emotions-anger', 'emotions', 'La Ira', 'emotions',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
    'Hubo una injusticia, un límite cruzado o una herida que despertó tu ira. Esa fuerza te mostró dónde necesitabas protegerte o defender tu dignidad.',
    'Ahora la ira aparece como una señal de que algo no está siendo respetado. No viene a destruirte, sino a darte energía para marcar un límite o reclamar un cambio.',
    'Aprenderás a transformar la ira en acción consciente. Tu fuego interior se convertirá en claridad, firmeza y capacidad de defenderte sin perder control.',
    '¿Qué situación pasada despertó tu ira con razón?', '¿Dónde sientes ahora que tus límites están siendo cruzados?', '¿Qué cambio positivo podría nacer si canalizaras bien tu ira?',
    'Recuerda una vez que tu ira te ayudó a protegerte y agradécete por ello.', 'Hoy, identifica una molestia y exprésala de forma clara y respetuosa.', 'Durante tres días, observa cuándo surge tu ira y qué te está intentando decir.',
    'Aprieta suavemente los puños y di: “Mi fuerza me protege”. Luego suelta despacio.', 'Antes de hablar desde la ira, exhala largo y repite: “Elijo claridad”.', 'Cada vez que canalices bien tu enojo, di: “Uso mi fuego con sabiduría”.',
    'La ira no es un defecto: es una energía de protección. Cuando la transformas en conciencia, recuperas tu poder.'
),

-- 12: LA ENVIDIA
(
    'emotions-envy', 'emotions', 'La Envidia', 'emotions',
    'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1000&auto=format&fit=crop',
    'Hubo momentos en los que compararte te hizo sentir menos. Tal vez miraste el camino de otros y dudaste del tuyo. Esa experiencia te mostró deseos que aún no sabías nombrar.',
    'Ahora la envidia aparece como una señal de anhelo. No habla de maldad, sino de algo que deseas para ti y aún no te permites construir.',
    'Aprenderás a usar la envidia como brújula. En lugar de compararte, empezarás a inspirarte y a crear tu propio camino con más claridad.',
    '¿Qué deseabas en el pasado cuando sentías envidia?', '¿A quién o qué estás comparándote ahora?', '¿Qué podrías empezar a construir si usaras la envidia como inspiración?',
    'Recuerda una comparación pasada y reconoce qué deseo auténtico había detrás.', 'Hoy, cuando surja envidia, tradúcela en una meta concreta para ti.', 'Durante tres días, celebra un logro ajeno sin restarte valor.',
    'Respira profundo y di: “Esto muestra lo que deseo”.', 'Al transformar la comparación, repite: “Mi camino es único”.', 'Cada vez que celebres a otro, di: “Hay lugar para todos”.',
    'La envidia no te hace pequeño: te revela tus sueños ocultos. Conviértela en motor creativo.'
),

-- 13: EL VACÍO
(
    'emotions-void', 'emotions', 'El Vacío', 'emotions',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que sentiste una ausencia profunda: de sentido, de amor o de dirección. Ese vacío te obligó a mirarte por dentro cuando ya no había apoyos externos.',
    'Ahora el vacío aparece como una pausa existencial. No es falta: es espacio. Algo viejo se ha ido y algo nuevo aún no ha llegado. Este silencio es fértil si no intentas llenarlo con distracciones.',
    'Descubrirás que el vacío es una puerta. Dejará de doler cuando empieces a escuchar qué quiere nacer en ese espacio nuevo dentro de ti.',
    '¿Qué ausencia pasada te obligó a crecer por dentro?', '¿Qué estás intentando llenar ahora sin escuchar lo que falta realmente?', '¿Qué podría nacer en tu vida si confiaras en este espacio vacío?',
    'Recuerda un momento de vacío y reconoce qué te permitió descubrir de ti.', 'Hoy, pasa unos minutos sin estímulos y observa cómo te sientes.', 'Durante tres días, dedica un momento breve a no hacer nada y escuchar tu interior.',
    'Coloca ambas manos sobre el abdomen y di: “Este espacio es seguro”. Respira lento.', 'Durante tu pausa, repite: “Aquí algo nuevo se está formando”.', 'Cada día, al terminar tu silencio, di: “Confío en lo que viene”.',
    'El vacío no es un error: es un umbral. Cuando dejas de huir del vacío, empiezas a descubrir quién eres.'
),

-- 14: LA SOLEDAD
(
    'emotions-loneliness', 'emotions', 'La Soledad', 'emotions',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo un tiempo en el que te sentiste solo incluso estando acompañado. Esa experiencia te mostró la diferencia entre estar rodeado de gente y sentirte verdaderamente visto.',
    'Ahora la soledad puede estar invitándote a reconectar contigo. No siempre es abandono: a veces es un espacio necesario para escucharte, sanar o redefinir vínculos.',
    'Aprenderás a transformar la soledad en compañía interior. Construirás relaciones más auténticas, empezando por la que tienes contigo mismo.',
    '¿Cuándo te sentiste solo aunque no lo estuvieras físicamente?', '¿Qué tipo de compañía estás necesitando ahora realmente?', '¿Qué relación contigo podría fortalecerse gracias a esta soledad?',
    'Recuerda una etapa de soledad y reconoce qué te enseñó sobre ti.', 'Hoy, dedica un momento a hacer algo solo pero de forma consciente y amable contigo.', 'Durante tres días, busca un pequeño gesto diario de conexión.',
    'Coloca una mano sobre el corazón y di: “No estoy abandonado por mí”.', 'Durante tu momento a solas, repite: “Puedo acompañarme”.', 'Cada vez que conectes con alguien, di: “Elijo vínculos verdaderos”.',
    'La soledad no siempre es ausencia de otros: a veces es presencia de ti. Aprende a acompañarte con respeto.'
),

-- 15: LA NOSTALGIA
(
    'emotions-nostalgia', 'emotions', 'La Nostalgia', 'emotions',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo un tiempo, una persona o una etapa que marcó profundamente tu corazón. Esa memoria se quedó contigo como una huella de algo que fue importante y verdadero.',
    'Ahora la nostalgia aparece como un puente entre lo que fuiste y lo que eres. No viene a atraparte en el pasado, sino a recordarte valores, sueños o partes tuyas que siguen vivos.',
    'Aprenderás a honrar tu pasado sin quedarte en él. La nostalgia se transformará en gratitud y en inspiración para construir un presente más alineado.',
    '¿Qué etapa del pasado recuerdas con más emoción?', '¿Qué parte de ti estás echando de menos ahora?', '¿Qué podrías recuperar de tu pasado para enriquecer tu presente?',
    'Recuerda un momento hermoso del pasado y agradécete por haberlo vivido.', 'Hoy, elige un objeto o música que te conecte con algo valioso de tu historia.', 'Durante tres días, rescata una cualidad tuya del pasado y exprésala conscientemente.',
    'Sonríe suavemente y di: “Honro lo que fui”. Respira con calma.', 'Al conectar con tu recuerdo, repite: “Esto sigue viviendo en mí”.', 'Cada día, di: “Integro mi historia con amor”.',
    'La nostalgia no es una cadena: es una memoria viva de lo que te hizo crecer. Honra tu pasado con ternura.'
),

-- 16: EL DUELO
(
    'emotions-grief', 'emotions', 'El Duelo', 'emotions',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo una pérdida que marcó un antes y un después en tu vida. No solo perdiste algo o a alguien: perdiste una versión de ti que ya no podía existir igual.',
    'Ahora el duelo puede seguir activo de formas sutiles. No todo duelo es reciente: a veces sigues llorando lo que nunca pudiste despedir del todo.',
    'Aprenderás a integrar la pérdida sin que te defina. El dolor se transformará en memoria amorosa y en una nueva capacidad de valorar lo que llega.',
    '¿Qué pérdida pasada sigue teniendo eco en tu interior?', '¿Qué parte de tu duelo aún no ha sido expresada del todo?', '¿Qué nueva etapa podrá abrirse cuando este duelo se suavice?',
    'Recuerda una pérdida importante y reconoce cómo te transformó.', 'Hoy, dedica unos minutos a nombrar internamente aquello que perdiste y agradécele.', 'Durante tres días, honra esa pérdida con un gesto consciente.',
    'Coloca una mano en el corazón y di: “Honro lo que fue”. Respira lento.', 'Al nombrar tu pérdida, repite: “Puedo soltar sin olvidar”.', 'Cada día, di: “Sigo viviendo con amor”.',
    'El duelo es prueba de que amaste de verdad. Honra lo que perdiste y abre espacio para amar de nuevas formas.'
),

-- 17: LA DECEPCIÓN
(
    'emotions-disappointment', 'emotions', 'La Decepción', 'emotions',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo una expectativa que no se cumplió y te dejó una sensación de caída. Tal vez confiaste demasiado o idealizaste una situación que no pudo sostenerse.',
    'Ahora la decepción puede estar nublando tu mirada. No es falta de esperanza: es una invitación a ajustar expectativas y a ver la realidad con más claridad y menos fantasía.',
    'Aprenderás a confiar de una forma más madura. Dejarás de idealizar para empezar a elegir con más conciencia y menos autoengaño.',
    '¿Qué expectativa pasada te dejó una gran decepción?', '¿Dónde estás esperando algo que quizá no puede darse así?', '¿Qué relación o proyecto mejorará si ajustas tus expectativas?',
    'Recuerda una decepción pasada y reconoce qué te enseñó sobre tus límites.', 'Hoy, revisa una expectativa que tengas sobre alguien o algo y ajústala a la realidad.', 'Durante tres días, practica aceptar una situación tal como es, sin forzar.',
    'Respira profundo y di: “Puedo ver con claridad”.', 'Al ajustar tu expectativa, repite: “Elijo realidad antes que fantasía”.', 'Cada día, di: “Acepto lo que es para elegir mejor”.',
    'La decepción no llega para castigarte, sino para devolverte a la verdad. Suelta ilusiones rígidas.'
),

-- 18: LA MELANCOLÍA
(
    'emotions-melancholy', 'emotions', 'La Melancolía', 'emotions',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa de tu vida marcada por una sensibilidad profunda. Tal vez no era tristeza pura, sino una mezcla de belleza, pérdida y reflexión silenciosa.',
    'Ahora la melancolía aparece como una emoción suave pero persistente. No te hunde, pero te vuelve más introspectivo. Te invita a comprender tu mundo interior con más delicadeza.',
    'Aprenderás a transformar la melancolía en sabiduría creativa. Esta sensibilidad se convertirá en una fuente de profundidad, empatía y expresión auténtica.',
    '¿Qué recuerdo o etapa te trae esta sensación melancólica?', '¿Qué emoción sutil estás sintiendo ahora?', '¿Qué creatividad o comprensión puede nacer de esta melancolía?',
    'Recuerda un momento melancólico del pasado y reconoce qué te hizo más sensible.', 'Hoy, contempla en silencio una emoción suave sin intentar cambiarla.', 'Durante tres días, expresa esta emoción de forma creativa.',
    'Respira lento y di: “Honro mi sensibilidad”.', 'Al contemplar tu emoción, repite: “Esto también tiene belleza”.', 'Cada día, di: “Mi profundidad es un don”.',
    'La melancolía es una luz suave que ilumina lo oculto. Escucha esta emoción con respeto y ternura.'
),

-- 19: LA ANSIEDAD
(
    'emotions-anxiety', 'emotions', 'La Ansiedad', 'emotions',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo un periodo de tu vida en el que viviste anticipando peligros o problemas que aún no existían. Esa hipervigilancia te ayudó a sobrevivir, pero también te agotó.',
    'Ahora tu mente se adelanta constantemente al futuro. La ansiedad no viene a castigarte, sino a avisarte de que estás cargando más de lo que puedes sostener en este momento.',
    'Aprenderás a vivir con más presencia. Cuando confíes más en tu capacidad de respuesta, la ansiedad se suavizará y tu energía volverá a estabilizarse.',
    '¿Qué miedo del pasado te enseñó a estar siempre alerta?', '¿Qué futuro intentas controlar ahora sin poder hacerlo?', '¿Qué cambiaría si confiaras en tu capacidad de adaptarte?',
    'Recuerda una situación que resolviste mejor de lo esperado ante tu propia preocupación.', 'Hoy, nombra en voz baja tres cosas que sí están bajo tu control real.', 'Durante tres días, practica detenerte antes de anticipar el peor escenario.',
    'Coloca una mano en el pecho y otra en el abdomen y di: “Ahora estoy a salvo”.', 'Cuando tu mente se acelere, repite: “Vuelvo al presente”.', 'Cada día, di: “Confío en mi capacidad de responder”.',
    'La ansiedad es una alarma que pide descanso, orden y confianza. Habita el presente y el futuro dejará de perseguirte.'
),

-- 20: LA FRUSTRACIÓN
(
    'emotions-frustration', 'emotions', 'La Frustración', 'emotions',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo un esfuerzo que no dio los frutos esperados. Esa frustración te enseñó que no todo depende de tu voluntad y que a veces el ritmo de la vida es distinto al tuyo.',
    'Ahora la frustración señala un bloqueo entre lo que deseas y lo que ocurre. No es fracaso: es información sobre qué necesita ser cambiado o replanteado.',
    'Aprenderás a ajustar tus estrategias sin perder tu propósito. La frustración se transformará en claridad y en una nueva forma de avanzar con más eficacia.',
    '¿Qué intento pasado te dejó una gran frustración?', '¿Dónde te esfuerzas sin obtener el resultado esperado?', '¿Qué cambio de enfoque abriría una nueva vía?',
    'Recuerda un obstáculo superado y cómo te adaptaste para seguir.', 'Hoy, identifica un punto donde puedas cambiar tu forma de intentar algo.', 'Durante tres días, acepta un límite sin interpretarlo como derrota.',
    'Aprieta suavemente las manos y di: “Puedo intentar de otra manera”.', 'Antes de insistir, repite: “Busco otra vía”.', 'Cada día, di: “Mi flexibilidad es mi fuerza”.',
    'La frustración te redirige; no es un muro infranqueable. Cambia de estrategia sin dudar de tu valor.'
),

-- 21: LA CONFUSIÓN
(
    'emotions-confusion', 'emotions', 'La Confusión', 'emotions',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que no sabías qué decisión tomar ni qué camino elegir. Esa confusión te obligó a detenerte y escuchar más profundamente tus valores.',
    'Ahora estás en un cruce interno. La confusión no es un error: es una señal de que estás creciendo y que tus antiguas respuestas ya no son suficientes.',
    'Aprenderás a confiar en la claridad gradual. Las piezas empezarán a ordenarse y tomarás decisiones más alineadas contigo.',
    '¿Qué decisión pasada te generó mucha confusión?', '¿Qué elección te resulta difícil ahora mismo?', '¿Qué claridad aparecería si te dieras tiempo?',
    'Recuerda una etapa confusa que terminó por aclararse y cómo se dio.', 'Hoy, acepta no decidir algo importante de inmediato y date espacio.', 'Durante tres días, escribe una pregunta clave y obsérvala sin forzar respuesta.',
    'Respira lento y di: “No necesito saberlo todo ahora”.', 'Cuando dudes, repite: “La claridad llegará”.', 'Cada día, di: “Confío en el proceso de comprender”.',
    'La confusión es la antesala de la comprensión. Respeta tus tiempos internos y la verdad se asomará.'
),

-- 22: LA IMPACIENCIA
(
    'emotions-impatience', 'emotions', 'La Impaciencia', 'emotions',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo momentos en los que apresurarte te llevó a errores o a perder procesos valiosos. Esa experiencia te enseñó que no todo madura al ritmo que deseas.',
    'Ahora la impaciencia señala un deseo legítimo de avance, pero también una dificultad para tolerar la espera. Forzar ahora podría romper algo que aún se está formando.',
    'Aprenderás a usar la paciencia como estrategia. Descubrirás que esperar con conciencia acelera más que empujar sin dirección.',
    '¿Qué situación pasada empeoró por falta de paciencia?', '¿Dónde quieres resultados demasiado rápidos ahora?', '¿Qué cambiaría si confiaras más en los tiempos del proceso?',
    'Recuerda algo que llegó mejor cuando supiste esperar con calma.', 'Hoy, elige conscientemente no acelerar una situación determinada.', 'Durante tres días, practica esperar segundos extra antes de reaccionar.',
    'Respira profundo y di: “Todo tiene su ritmo”.', 'Cuando quieras apresurarte, repite: “Puedo esperar”.', 'Cada día, di: “La paciencia me fortalece”.',
    'La impaciencia ignora el ritmo de la vida. Aprende a esperar para construir resultados mucho más sólidos.'
),

-- 23: LA RESISTENCIA
(
    'emotions-resistance', 'emotions', 'La Resistencia', 'emotions',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
    'Hubo cambios que rechazaste porque dolían o daban miedo. Esa resistencia te protegió cuando aún no estabas preparado para soltar.',
    'Ahora estás oponiéndote a un cambio necesario. No por rebeldía, sino por apego a una versión antigua de seguridad.',
    'Aprenderás a soltar con más suavidad. Al aceptar lo inevitable, liberarás energía para crear algo nuevo y más alineado.',
    '¿Qué cambio pasado te costó mucho aceptar?', '¿Qué resistes ahora aunque sabes que es necesario?', '¿Qué alivio nacerá cuando dejes de luchar?',
    'Recuerda un cambio positivo que al principio te resististe a aceptar.', 'Hoy, acepta conscientemente una pequeña cosa que no puedes controlar.', 'Durante tres días, observa tus emociones cuando sueltas un poco.',
    'Respira y di: “Puedo soltar sin romperme”.', 'Al aceptar algo difícil, repite: “Me adapto con respeto”.', 'Cada día, di: “Confío en la transformación”.',
    'La resistencia es apego a lo conocido. Fluye con lo nuevo y recupera tu libertad interna.'
),

-- 24: EL REMORDIMIENTO
(
    'emotions-remorse', 'emotions', 'El Remordimiento', 'emotions',
    'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1000&auto=format&fit=crop',
    'Hubo una decisión o acción que dejó una huella de dolor interno. No solo fue culpa: fue el deseo profundo de haber actuado de otra manera.',
    'Ahora el remordimiento aparece como una voz que te recuerda algo pendiente de reparar o perdonar. No viene a castigarte, sino a pedir cierre.',
    'Aprenderás a transformar el remordimiento en reconciliación contigo. Al reparar o perdonarte, cerrarás un ciclo que hoy sigue abierto.',
    '¿Qué decisión pasada sigues lamentando en silencio?', '¿Qué parte de ese remordimiento necesita hoy ser escuchada?', '¿Qué paz nacería si te permitieras reparar o perdonarte?',
    'Recuerda una acción lamentada y reconoce qué aprendizaje te dejó.', 'Hoy, da un pequeño paso hacia la reparación interna o externa.', 'Durante tres días, practica perdonarte conscientemente ante ese pasado.',
    'Coloca una mano en el corazón y di: “Puedo aprender y sanar”.', 'Al elegir reparar, repite: “Elijo cerrar este ciclo”.', 'Cada día, di: “Me libero del pasado con amor”.',
    'El remordimiento te pide conciencia en el presente. Repara lo posible, perdona lo imposible y descansa en paz.'
),

-- 25: LA ACEPTACIÓN
(
    'emotions-acceptance', 'emotions', 'La Aceptación', 'emotions',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo una situación que no pudiste cambiar y que te obligó a rendirte a la realidad. Esa aceptación te enseñó que soltar no siempre es perder.',
    'Ahora estás ante algo que pide ser aceptado tal como es. No significa resignarte, sino dejar de negar lo que ya existe para poder actuar.',
    'Aprenderás a vivir con más ligereza. La aceptación te abrirá caminos nuevos que antes no veías por estar resistiendo.',
    '¿Qué situación pasada te enseñó el valor de aceptar?', '¿Qué realidad te cuesta aceptar ahora?', '¿Qué libertad nacería si dejaras de luchar?',
    'Recuerda algo aceptado que terminó por traerte paz.', 'Hoy, nombra una cosa inalterable y decide dejar de pelear con ella.', 'Durante tres días, practica decir “esto es así” sin juicios añadidos.',
    'Respira profundo y di: “Acepto este momento”.', 'Al soltar la lucha, repite: “Me libero de resistir”.', 'Cada día, di: “La paz empieza cuando acepto”.',
    'Aceptar es dejar de pelear con lo inevitable. Descansa de la lucha y ábrete a lo nuevo con conciencia.'
),

-- 26: EL PERDÓN
(
    'emotions-forgiveness', 'emotions', 'El Perdón', 'emotions',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo una herida que marcó tu corazón. Tal vez guardaste rencor como forma de protección, atándote inconscientemente al pasado.',
    'Ahora el perdón se presenta como una opción de liberación. No es justificar ni olvidar: es elegir no seguir cargando el peso del daño ajeno.',
    'Aprenderás a soltar viejas heridas. Al perdonar, recuperarás energía, ligereza y una nueva forma de relacionarte con el mundo.',
    '¿Qué herida pasada sigue pesando en tu interior?', '¿A quién o a qué te cuesta más perdonar ahora?', '¿Qué cambiaría si soltaras este rencor?',
    'Recuerda una vez que perdonaste y reconoce el alivio que sentiste.', 'Hoy, nombra internamente a quien necesitas perdonar para liberarte tú.', 'Durante tres días, practica una frase diaria de liberación emocional profunda.',
    'Coloca una mano en el corazón y di: “Me libero del rencor”.', 'Al nombrar la herida, repite: “No cargo más con esto”.', 'Cada día, di: “Elijo paz antes que resentimiento”.',
    'El perdón te devuelve la libertad. No lo haces por el otro, sino para que tu propio corazón pueda descansar.'
),

-- 27: LA SERENIDAD
(
    'emotions-serenity', 'emotions', 'La Serenidad', 'emotions',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que aprendiste a estar en paz incluso en medio de dificultades. Esa serenidad te mostró tu fuerza interior inalterable.',
    'Ahora la serenidad está disponible si bajas el ruido interior. Es una postura elegida ante los problemas, un refugio que tú mismo creas.',
    'Construirás una estabilidad emocional sólida. Tu presencia se volverá un ancla para ti y para quienes te rodean en tiempos inciertos.',
    '¿Cuándo sentiste serenidad incluso en tiempos difíciles?', '¿Qué ruido interno necesitas silenciar ahora?', '¿Qué vida construirías desde más serenidad?',
    'Recuerda un momento sereno y deja que tu cuerpo lo reviva.', 'Hoy, responde con calma elegida a una situación tensa cotidiana.', 'Durante tres días, practica una pausa conscientemente silenciosa cada día.',
    'Respira lento y di: “Aquí estoy en paz”.', 'Antes de responder, repite: “Elijo serenidad”.', 'Cada día, di: “Mi calma es mi hogar”.',
    'La serenidad abraza el mundo sin perderse en él. Cultiva esta calma y ordena tu vida desde adentro.'
),

-- 28: LA CLARIDAD
(
    'emotions-clarity', 'emotions', 'La Claridad', 'emotions',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo un momento en el que todo se ordenó dentro de ti y supiste qué hacer. Esa claridad te mostró el poder de la intuición y la verdad.',
    'Estás cerca de una comprensión importante. La claridad llega cuando dejas de huir de lo evidente y escuchas tu propia honestidad.',
    'Tomarás decisiones más limpias y coherentes. Tu mente dejará de ser un campo de batalla para ser un aliado de tu propósito.',
    '¿Qué decisión pasada se aclaró de pronto para ti?', '¿Qué verdad evitas mirar ahora?', '¿Qué elegirías si tuvieras claridad total?',
    'Recuerda una revelación pasada y reconoce el cambio de rumbo que trajo.', 'Hoy, escucha tu primera respuesta sincera ante una duda interna.', 'Durante tres días, presta atención a tus intuiciones más claras sin juzgarlas.',
    'Respira y di: “Puedo ver con honestidad”.', 'Al escuchar tu verdad, repite: “Acepto lo que sé”.', 'Cada día, di: “La claridad me guía”.',
    'La claridad es liberadora aunque incomode al principio. Mira tu verdad y construye una vida alineada con ella.'
),

-- 29: LA ENTREGA
(
    'emotions-surrender', 'emotions', 'La Entrega', 'emotions',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo una situación en la que tuviste que soltar el control porque ya no podías más. Esa entrega te enseñó otra forma de fortaleza.',
    'Estás invitado a dejar de controlar en exceso. Confiar no es abandonar, es permitir que la vida haga su parte en armonía contigo.',
    'Aprenderás a fluir con más confianza. Al soltar la rigidez, verás soluciones y apoyos que antes te resultaban invisibles.',
    '¿Cuándo tuviste que rendirte para poder seguir adelante?', '¿Qué intentas controlar ahora innecesariamente?', '¿Qué alivio nacería si confiaras más?',
    'Recuerda cuando soltar te trajo una paz inesperada.', 'Hoy, permite conscientemente que algo pequeño no salga perfecto.', 'Durante tres días, practica la confianza en un aspecto cotidiano de tu vida.',
    'Respira y di: “Puedo soltar”.', 'Al renunciar al control, repite: “Confío en el proceso”.', 'Cada día, di: “La vida también me sostiene”.',
    'La entrega te devuelve poder en forma de paz. Lucha menos y confía más; la vida te mostrará el camino.'
),

-- 30: LA PAZ INTERIOR
(
    'emotions-inner-peace', 'emotions', 'La Paz Interior', 'emotions',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo momentos breves de paz profunda a pesar de que tu vida no era perfecta. Esa memoria es tu brújula hacia la serenidad actual.',
    'La paz interior es una elección diaria de cómo habitarte a ti mismo, sin importar que todo esté resuelto o no hacia afuera.',
    'Construirás una base emocional inamovible. Tu paz se convertirá en tu centro estable frente a cualquier marea o cambio externo.',
    '¿Cuándo sentiste verdadera paz en el pasado?', '¿Qué te roba más paz ahora mismo?', '¿Qué vida crearías desde un estado de paz profunda?',
    'Recuerda un instante de paz y deja que tu cuerpo lo reviva.', 'Hoy, elige hacer una cosa concreta que proteja tu paz interna.', 'Durante tres días, termina cada jornada con un gesto de cierre consciente.',
    'Respira profundo y di: “Aquí hay paz”.', 'Al proteger tu calma, repite: “Mi paz es prioridad”.', 'Cada día, di: “Habito mi centro”.',
    'La paz interior es un estado que cultivas hoy mismo. Vuelve a tu eje, suelta el exceso y habítate con amor.'
)
ON CONFLICT (id) DO UPDATE SET
    deck_id = EXCLUDED.deck_id,
    name = EXCLUDED.name,
    type = EXCLUDED.type,
    image = EXCLUDED.image,
    interpretation_past = EXCLUDED.interpretation_past,
    interpretation_present = EXCLUDED.interpretation_present,
    interpretation_future = EXCLUDED.interpretation_future,
    question_past = EXCLUDED.question_past,
    question_present = EXCLUDED.question_present,
    question_future = EXCLUDED.question_future,
    challenge_past = EXCLUDED.challenge_past,
    challenge_present = EXCLUDED.challenge_present,
    challenge_future = EXCLUDED.challenge_future,
    ritual_past = EXCLUDED.ritual_past,
    ritual_present = EXCLUDED.ritual_present,
    ritual_future = EXCLUDED.ritual_future,
    invitation = EXCLUDED.invitation;
