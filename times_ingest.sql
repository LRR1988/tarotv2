-- INGESTA: MAZO CICLOS DEL TIEMPO (30 CARTAS COMPLETAS)
-- Este script inserta todas las cartas del mazo Ciclos del Tiempo con sus variaciones temporales.

INSERT INTO cards (
    id, deck_id, name, type, image,
    interpretation_past, interpretation_present, interpretation_future,
    question_past, question_present, question_future,
    challenge_past, challenge_present, challenge_future,
    ritual_past, ritual_present, ritual_future,
    invitation
) VALUES 
-- 1: EL ORIGEN
(
    'times-origin', 'times', 'El Origen', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo un inicio importante en tu vida: una decisión, una relación, una idea o una etapa que marcó un punto cero. Ese origen contiene todavía información valiosa sobre tu propósito actual.',
    'Estás en un momento fundacional. Algo nuevo se está gestando, aunque aún no tenga forma clara. Este es un tiempo de intención más que de acción rápida.',
    'Se abrirá una etapa que dependerá directamente de cómo siembres ahora. Lo que inicies con conciencia tendrá una base sólida y duradera.',
    '¿Qué comienzo pasado definió gran parte de tu camino actual?', '¿Qué está naciendo ahora en tu vida, aunque todavía sea frágil?', '¿Qué te gustaría que este nuevo ciclo llegara a convertirse?',
    'Reconoce un inicio antiguo y observa qué aprendiste de él.', 'Hoy, identifica claramente qué estás comenzando realmente.', 'Durante tres días, protege este nuevo inicio evitando sabotearlo con prisas o dudas.',
    'Coloca una mano en el suelo o sobre una mesa y recuerda un comienzo importante, sintiendo estabilidad bajo tu mano.',
    'Escribe o piensa una sola palabra que represente este nuevo inicio y repítela lentamente mientras respiras hondo tres veces.',
    'Cada mañana durante tres días, abre una ventana o cortina conscientemente como símbolo de abrir espacio a lo nuevo.',
    'Todo gran proceso comienza en silencio. Permítete empezar con calma, intención y respeto.'
),

-- 2: EL PRIMER PASO
(
    'times-first-step', 'times', 'El Primer Paso', 'times',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo un momento en el que te atreviste a salir de la inmovilidad. Ese primer paso, aunque pequeño, rompió una inercia que parecía eterna.',
    'Estás en el punto exacto donde pensar ya no es suficiente. Este ciclo te pide movimiento, aunque no tengas todavía todo claro.',
    'Descubrirás que avanzar un poco desbloquea mucho. El camino se irá revelando solo después de empezar a caminar.',
    '¿Qué primer paso cambió una etapa importante de tu vida?', '¿En qué área sabes que necesitas moverte, aunque te dé incertidumbre?', '¿Qué podría abrirse si te atrevieras a empezar hoy?',
    'Recuerda una vez que empezaste sin garantías y te fue mejor de lo esperado.', 'Hoy, identifica una acción mínima que puedas hacer para desbloquear algo.', 'Durante tres días, mantén un pequeño avance diario sin exigir grandes resultados.',
    'Da tres pasos lentos en cualquier dirección recordando un inicio valiente de tu pasado.',
    'Levántate de donde estés, camina hasta otro punto de la habitación y detente respirando hondo como símbolo de empezar.',
    'Cada día, marca físicamente un pequeño progreso (tachar algo, mover un objeto, cerrar una pestaña pendiente).',
    'No todos los comienzos necesitan mapas. A veces, el coraje está simplemente en moverte.'
),

-- 3: EL LLAMADO
(
    'times-calling', 'times', 'El Llamado', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo una señal, una inquietud o un deseo profundo que empezó a llamarte hace tiempo. Quizá no supiste escucharlo del todo, pero dejó huella.',
    'Ahora el llamado es más claro. Algo dentro de ti pide atención: un cambio, una vocación, una decisión que ya no puedes seguir ignorando.',
    'Responder a este llamado te llevará a una etapa más alineada con tu propósito. No será inmediata ni sencilla, pero será profundamente verdadera.',
    '¿Qué inquietud antigua ha vuelto varias veces a tu vida?', '¿Qué te está pidiendo tu interior que escuches ahora?', '¿A qué llamado te gustaría atreverte a responder?',
    'Reconoce una señal pasada que no supiste atender y observa qué te enseñó.', 'Hoy, identifica con honestidad qué te está llamando de verdad.', 'Durante tres días, haz una acción pequeña alineada con ese llamado interior.',
    'Coloca una mano en el oído y otra en el corazón unos segundos, recordando una intuición antigua importante.',
    'Busca un momento de silencio de un minuto y escucha conscientemente los sonidos más lejanos que percibas.',
    'Cada mañana, al despertar, permanece inmóvil unos segundos preguntándote: “¿Qué me llama hoy?”',
    'Los llamados no gritan: susurran con paciencia hasta que estás listo para escuchar.'
),

-- 4: LA SIEMBRA
(
    'times-sowing', 'times', 'La Siembra', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo una intención o decisión pasada que plantó una semilla invisible. Aunque no viste resultados inmediatos, ese gesto empezó a preparar un futuro posible.',
    'Ahora estás en fase de preparación. No es momento de cosechar, sino de elegir con cuidado qué ideas, hábitos o vínculos quieres plantar en esta etapa.',
    'Verás brotar consecuencias claras de lo que siembres hoy. Incluso lo pequeño tendrá impacto si lo cuidas con constancia.',
    '¿Qué semilla del pasado sigue dando frutos?', '¿Qué estás sembrando ahora?', '¿Qué te gustaría cultivar para el futuro?',
    'Reconoce una decisión antigua que hoy te esté beneficiando.', 'Hoy, elige conscientemente una intención clara para esta etapa.', 'Durante tres días, cuida una acción pequeña como si fuera una semilla frágil.',
    'Sostén algo pequeño entre los dedos y piensa qué estás plantando hoy.',
    'Ordena un pequeño espacio como símbolo de preparar la tierra interior.',
    'Cada mañana, recuerda tu intención del día mientras te lavas las manos.',
    'Nada crece sin haber sido sembrado primero. La paciencia es parte del proceso.'
),

-- 5: EL DESPERTAR
(
    'times-awakening', 'times', 'El Despertar', 'times',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo un momento en el que tomaste conciencia de algo importante: una verdad, un deseo, una necesidad que ya no pudiste ignorar.',
    'Ahora estás despertando a una nueva comprensión. Algo se vuelve más claro, más vivo, más presente en tu forma de mirar la realidad.',
    'Este despertar abrirá una etapa de mayor lucidez. Verás opciones que antes no existían y sentirás más coherencia entre lo que piensas y hagas.',
    '¿Qué comprensión pasada cambió tu vida?', '¿De qué te das cuenta ahora?', '¿Qué nueva visión podría abrirse?',
    'Reconoce una toma de conciencia importante del pasado.', 'Hoy, observa qué verdad se está volviendo evidente.', 'Durante tres días, presta atención a nuevas ideas que aparezcan.',
    'Abre lentamente los ojos después de cerrarlos, notando cómo entra la luz.',
    'Lávate la cara con agua fresca como símbolo de despejar la mirada.',
    'Cada mañana, respira hondo tres veces antes de mirar cualquier pantalla.',
    'Todo despertar comienza con una pequeña claridad.'
),

-- 6: EL BROTE
(
    'times-sprout', 'times', 'El Brote', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo un inicio frágil que casi pasa desapercibido: un primer avance, una señal de vida nueva que pedía ser cuidada.',
    'Ahora algo empieza a mostrarse. Es pequeño, vulnerable, pero real. Este brote necesita atención suave más que exigencia.',
    'Ese crecimiento inicial se fortalecerá. Si lo proteges sin forzarlo, se convertirá en una base sólida para etapas mayores.',
    '¿Qué pequeño avance pasado terminó siendo importante?', '¿Qué está empezando a crecer ahora?', '¿Qué brote te gustaría ver fuerte?',
    'Recuerda un comienzo humilde que luego dio grandes frutos.', 'Hoy, presta atención a un progreso pequeño y reconócelo.', 'Durante tres días, protege este inicio evitando críticas.',
    'Observa una planta o imagen natural un minuto sintiendo su crecimiento.',
    'Coloca tus manos juntas unos segundos como si protegieras algo delicado.',
    'Cada noche, agradece un pequeño avance del día antes de dormir.',
    'Todo gran árbol comenzó siendo un brote casi invisible.'
),

-- 7: EL APRENDIZAJE
(
    'times-learning', 'times', 'El Aprendizaje', 'times',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo errores, pruebas o maestros que te enseñaron más de lo que imaginabas. Esa etapa formó una base silenciosa de experiencia que hoy te sostiene.',
    'Ahora estás en pleno proceso de aprendizaje. No todo es cómodo, pero cada experiencia trae una lección necesaria para tu crecimiento.',
    'Integrarás este aprendizaje con madurez. Lo que hoy te cuesta entender se convertirá mañana en una de tus mayores fortalezas.',
    '¿Qué aprendizaje pasado cambió tu forma de ver la vida?', '¿Qué lección se presenta ahora?', '¿Qué sabiduría integrarás?',
    'Recuerda una equivocación que terminó enseñándote algo valioso.', 'Hoy, observa qué situación te enseña algo aunque no te guste.', 'Durante tres días, anota mentalmente una lección diaria.',
    'Abre un libro al azar y lee una frase como enseñanza para hoy.',
    'Escribe una palabra que represente tu aprendizaje y guárdala contigo.',
    'Cada noche, repasa mentalmente algo nuevo que hayas comprendido.',
    'Aprender no es señal de debilidad, sino de evolución.'
),

-- 8: LA EXPANSIÓN
(
    'times-expansion', 'times', 'La Expansión', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que te atreviste a crecer más allá de tus límites conocidos. Esa expansión abrió horizontes que antes no existían.',
    'Ahora estás en fase de crecimiento activo. Tu energía se extiende, tus posibilidades aumentan y tu influencia empieza a notarse.',
    'Llegará un periodo de mayor amplitud y prosperidad. Si sabes sostener esta expansión con equilibrio, abrirás puertas duraderas.',
    '¿Qué etapa pasada te permitió crecer decisivamente?', '¿En qué área te expandes ahora?', '¿Qué nuevas posibilidades se abrirían?',
    'Recuerda salir de tu zona cómoda y los resultados positivos.', 'Hoy, haz algo ligeramente distinto a tu rutina habitual.', 'Durante tres días, di “sí” a una oportunidad pequeña.',
    'Abre los brazos lentamente inhalando profundo sintiendo tu espacio.',
    'Mira hacia el horizonte un minuto dejando que la mirada se expanda.',
    'Cada mañana, estira el cuerpo como símbolo de abrirte al crecimiento.',
    'Expandirse es un acto de confianza.'
),

-- 9: LA CONFIANZA
(
    'times-trust', 'times', 'La Confianza', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo momentos en los que tuviste que confiar sin pruebas claras. Esa fe te permitió avanzar cuando todo parecía incierto.',
    'Ahora estás siendo invitado a confiar más: en ti, en el proceso, en el ritmo natural de las cosas. Controlar menos será clave.',
    'Desarrollarás una seguridad interna más estable. Al confiar, atraerás apoyos, sincronicidades y decisiones más alineadas.',
    '¿Qué acto de confianza pasado fue decisivo?', '¿En qué necesitas confiar ahora?', '¿Qué cambiaría si soltaras el control?',
    'Recuerda una vez que confiar te llevó a un buen resultado.', 'Hoy, delega o suelta el control en una situación pequeña.', 'Durante tres días, practica la confianza conscientemente.',
    'Coloca una mano sobre el pecho y siente tu pulso un minuto.',
    'Cierra los ojos y deja que tu cuerpo se balancee suave con equilibrio.',
    'Cada noche, agradece que todo fluyó sin forzarlo.',
    'Confiar no es renunciar al poder: es elegir una fuerza más profunda.'
),

-- 10: EL IMPULSO
(
    'times-impulse', 'times', 'El Impulso', 'times',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo una fuerza interior que te empujó a actuar sin pensarlo demasiado. Ese impulso rompió una inercia y te llevó más lejos.',
    'Ahora sientes una energía clara de avance. No es prisa caótica, sino un empuje vital que te invita a aprovechar el momento.',
    'Este impulso abrirá una etapa de gran movimiento. Si lo diriges con conciencia, acelerarás tu crecimiento sin perder equilibrio.',
    '¿Qué impulso pasado te ayudó a avanzar?', '¿Dónde sientes ganas de actuar?', '¿Qué se desbloquearía si sigues este impulso?',
    'Recuerda una vez que actuar a tiempo cambió tu rumbo.', 'Hoy, aprovecha una oportunidad pequeña sin sobreanalizar.', 'Durante tres días, inicia el día con una acción decidida.',
    'Sacude suavemente extremidades para activar tu energía corporal.',
    'Da un paso firme hacia delante como símbolo de avance consciente.',
    'Cada mañana, haz la tarea clave antes de cualquier distracción.',
    'El impulso es una chispa preciosa para encender caminos.'
),

-- 11: LA FLORACIÓN
(
    'times-flowering', 'times', 'La Floración', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que algo en ti empezó a mostrarse con más fuerza: talentos o proyectos que por fin salieron a la luz.',
    'Ahora estás entrando en una fase de expresión plena. Lo que has cultivado empieza a manifestarse de forma visible.',
    'Vivirás un periodo de reconocimiento y expansión natural. Si disfrutas sin apego, esta floración te nutrirá.',
    '¿Qué parte de ti floreció en el pasado?', '¿Qué muestra ahora su mejor versión?', '¿Qué verías florecer en el futuro?',
    'Recuerda un momento en tu mejor versión y saboréalo.', 'Hoy, permite que algo bueno de ti se muestre sin ocultarlo.', 'Durante tres días, reconoce algo que esté creciendo bien.',
    'Observa una flor un minuto notando su apertura natural.',
    'Sonríe frente al espejo reconociendo tu propio florecimiento.',
    'Cada noche, agradece algo que haya salido especialmente bien.',
    'La floración es celebración de la vida que madura.'
),

-- 12: LA ABUNDANCIA
(
    'times-abundance', 'times', 'La Abundancia', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo etapas en las que recibiste más de lo que esperabas: apoyo, recursos o amor que te sostuvieron.',
    'Ahora estás en un momento fértil. Hay recursos y afectos disponibles si sabes reconocerlos y valorarlos.',
    'Experimentarás una sensación mayor de plenitud. Al aprender a compartir, esta abundancia se volverá estable.',
    '¿Qué época pasada fue generosa?', '¿En qué área ya hay más de lo que ves?', '¿Cómo vivirás la abundancia futura?',
    'Recuerda algo recibido que fue clave para tu bienestar.', 'Hoy, reconoce algo abundante en tu vida actual.', 'Durante tres días, agradece una cosa importante diaria.',
    'Abre ambas manos frente a ti como gesto de recibir consciente.',
    'Ordena un espacio pequeño para hacer sitio simbólico a lo nuevo.',
    'Antes de empezar el día, agradece tres cosas que ya tienes.',
    'La abundancia es también tiempo, calma o compañía.'
),

-- 13: LA COSECHA
(
    'times-harvest', 'times', 'La Cosecha', 'times',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo esfuerzos pasados que finalmente dieron fruto, permitiéndote recoger resultados reales de lo sembrado.',
    'Ahora estás en un momento de recoger consecuencias. Es tiempo de evaluar y agradecer qué ha funcionado.',
    'Aprenderás a cerrar ciclos con más conciencia. Lo recogido te dará claridad para tus próximos pasos.',
    '¿Qué fruto cosechaste tras mucho esfuerzo?', '¿Qué resultados recibes ahora?', '¿Qué aprendes de esta cosecha?',
    'Recuerda un logro pasado y el proceso que hubo detrás.', 'Hoy, identifica un resultado gracias a tus acciones.', 'Durante tres días, observa qué frutos aparecen sin intervenir.',
    'Toma algo comestible y cómelo lento agradeciendo el recibimiento.',
    'Haz una lista mental de tres cosas que hoy recoges en tu vida.',
    'Cada noche, reconoce un resultado del día y agradécelo.',
    'Toda siembra termina pidiendo una cosecha justa.'
),

-- 14: LA CULMINACIÓN
(
    'times-culmination', 'times', 'La Culminación', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo metas que alcanzaste tras un largo recorrido, demostrando que podías llegar lejos.',
    'Llegas al punto más alto de un proceso. Algo importante está a punto de completarse o mostrar su forma definitiva.',
    'Este cierre traerá liberación. Al culminar con conciencia, abrirás espacio para una nueva etapa alineada.',
    '¿Qué logro pasado te dio paz de cierre?', '¿Qué proceso llega ahora a su punto máximo?', '¿Qué cerrarías con plenitud?',
    'Recuerda una meta alcanzada y tu propia perseverancia.', 'Hoy, identifica qué está a punto de completarse.', 'Durante tres días, prepara un cierre digno para algo importante.',
    'Levanta los brazos sobre la cabeza segundos como símbolo de logro.',
    'Coloca un objeto visible representando lo que estás culminando.',
    'Al terminar una tarea hoy, reconoce: “Esto está completo”.',
    'Culminar es honrar todo el camino recorrido con dignidad.'
),

-- 15: EL RECONOCIMIENTO
(
    'times-recognition', 'times', 'El Reconocimiento', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Fuiste visto y valorado en el pasado, lo que fortaleció tu confianza e identidad.',
    'Eres invitado a reconocer tu propio valor interno sin depender de la aprobación externa.',
    'Desarrollarás una autoestima estable al validarte desde dentro con honestidad.',
    '¿Qué reconocimiento pasado te marcó?', '¿Dónde necesitas reconocerte más?', '¿Qué cambiaría al darte más valor?',
    'Recuerda una vez que valoraron tu esfuerzo y saboréalo.', 'Hoy, reconoce un logro propio sin minimizarlo.', 'Durante tres días, date crédito diario por algo bien hecho.',
    'Mano sobre el pecho asintiendo como validación interna.',
    'Mírate al espejo y reconoce en silencio una cualidad tuya.',
    'Cada noche, repasa un logro pequeño y agradécetelo.',
    'El reconocimiento más poderoso nace siempre del interior.'
),

-- 16: LA DUDA
(
    'times-doubt', 'times', 'La DuDA', 'times',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Incertidumbres pasadas te obligaron a cuestionar certezas obsoletas.',
    'Atraviesas un punto de ambigüedad para revisar si tu camino sigue siendo verdadero.',
    'Aprenderás a convivir con lo incierto, naciendo una claridad más honesta de este proceso.',
    '¿Qué duda pasada llevó a una mejor decisión?', '¿Qué área te genera más incertidumbre?', '¿Qué claridad alcanzarías?',
    'Recuerda una duda antigua que finalmente ayudó a crecer.', 'Hoy, acepta no tener respuesta inmediata y espera.', 'Durante tres días, observa una duda sin intentar resolverla.',
    'Mano en frente y pecho sintiendo la tensión entre ambos.',
    'Sostén dos papeles con opciones frente a ti sin elegir.',
    'Cada noche, acepta conscientemente no saberlo todo todavía.',
    'La duda es la antesala necesaria de la verdad profunda.'
),

-- 17: LA PAUSA
(
    'times-pause', 'times', 'La Pausa', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Detenciones pasadas te enseñaron lo que el movimiento constante ocultaba.',
    'Momento de suspensión: algo se reorganiza en silencio bajo la apariencia de quietud.',
    'Esta pausa prepara un movimiento más sabio y una dirección futura más limpia.',
    '¿Qué pausa pasada fue clave para tu equilibrio?', '¿Dónde necesitas detenerte ahora?', '¿Qué movimiento nacería después?',
    'Recuerda cuando parar fue la mejor decisión posible.', 'Hoy, permite un momento de no hacer nada sin culpa.', 'Durante tres días, introduce una pausa breve en tu rutina.',
    'Siéntate con pies en el suelo inmóvil un minuto observando.',
    'Apaga pantallas cinco minutos dejando que el cuerpo se relaje.',
    'Antes de cada decisión hoy, detente tres respiraciones completas.',
    'Detenerse es también avanzar en un nivel más profundo.'
),

-- 18: LA PRUEBA
(
    'times-trial', 'times', 'La Prueba', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Desafíos pasados midieron tu carácter y resistencia, revelando tu verdadera esencia.',
    'Enfrentas una medición de crecimiento: cuánto has madurado desde la última vez.',
    'Saldrás con fortaleza nueva, marcando un antes y después en tu autoconfianza.',
    '¿Qué gran prueba pasada te hizo fuerte?', '¿Qué desafío te mide ahora?', '¿Qué versión de ti nacerá después?',
    'Recuerda una dificultad superada y tu propia capacidad.', 'Hoy, afronta una tarea difícil sin postergarla.', 'Durante tres días, mantente firme en lo que abandonarías.',
    'Aprieta puños segundos y relaja sintiendo tu fuerza interna.',
    'Camina con paso firme un minuto sintiendo tu estabilidad.',
    'Al final del día, reconoce la dificultad manejada con éxito.',
    'Las pruebas llegan para revelarte, no para destruirte.'
),

-- 19: LA CRISIS
(
    'times-crisis', 'times', 'La Crisis', 'times',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Un colapso pasado rompió estructuras antiguas que ya no podían sostenerte.',
    'Punto de tensión máxima: algo exige una transformación profunda e inmediata.',
    'Liberación necesaria que dará paso a una reorganización mucho más auténtica.',
    '¿Qué crisis pasada cambió tu camino?', '¿Qué parte está en un punto límite?', '¿Qué versión de ti nacería ahora?',
    'Recuerda una crisis que trajo algo positivo inesperado.', 'Hoy, identifica qué ya no puedes seguir sosteniendo igual.', 'Durante tres días, acepta un cambio que estabas evitando.',
    'Sacude extremidades lentamente simbolizando soltar tensión acumulada.',
    'Rompe un papel imaginando liberar una estructura antigua obsoleta.',
    'Suelta una preocupación antes de dormir respirando pausadamente.',
    'Las crisis reordenan tu vida sobre bases más verdaderas.'
),

-- 20: LA RUPTURA
(
    'times-rupture', 'times', 'La Ruptura', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Separaciones pasadas te liberaron de ataduras que ya no podían continuar.',
    'Fractura necesaria: algo debe romperse para que puedas seguir creciendo.',
    'Libertad mayor que abrirá espacio para identidades y vínculos más sanos.',
    '¿Qué ruptura pasada fue clave?', '¿Qué vínculo pide ahora un corte consciente?', '¿Qué alivio llegaría después?',
    'Recuerda una separación que terminó siendo una liberación.', 'Hoy, acepta mentalmente lo que sabes que debe terminar.', 'Durante tres días, despídete suavemente de lo que sueltas.',
    'Cierra una puerta lento y ábrela consciente: final e inicio.',
    'Deja caer un objeto pequeño al suelo como gesto de soltar.',
    'Abre manos y estira brazos antes de empezar cada mañana.',
    'Toda ruptura es una herida y una puerta al mismo tiempo.'
),

-- 21: EL DESGASTE
(
    'times-wear', 'times', 'El Desgaste', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Etapas de autoexigencia te enseñaron tus límites y la necesidad vital de cuidado.',
    'Fase de agotamiento: señal clara para reajustar ritmo, prioridades y expectativas.',
    'Resistencia más sabia al aprender a respetar tu propia energía vital hoy.',
    '¿Qué etapa pasada te dejó agotado?', '¿Dónde estás más desgastado hoy?', '¿Cómo te cuidarás mejor en el futuro?',
    'Recuerda un cansancio que enseñó algo importante.', 'Hoy, reduce una fuente de desgaste aunque sea mínimamente.', 'Durante tres días, prioriza conscientemente tu descanso.',
    'Estira cuello y hombros un minuto escuchando a tu cuerpo.',
    'Bebe agua con atención plena como recarga consciente del ser.',
    'Apaga pantallas antes de dormir permitiendo una verdadera pausa.',
    'El desgaste es sabiduría del cuerpo pidiendo respeto.'
),

-- 22: LA DESPEDIDA
(
    'times-farewell', 'times', 'La Despedida', 'times',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Cierres del pasado te enseñaron que soltar es también una forma de amor profundo.',
    'Cerrar con conciencia: despedirte con respeto para no quedar atado a lo terminado.',
    'Espacio interno liberado; el futuro llegará sin la carga de lo inconcluso.',
    '¿Qué despedida pasada sientes incompleta?', '¿Qué cerrarás ahora con más respeto?', '¿Qué entraría cuando lo dejes ir?',
    'Recuerda una despedida que finalmente te liberó de cargas.', 'Hoy, nombra con honestidad lo que necesitas soltar ya mismo.', 'Durante tres días, realiza un gesto de cierre suave diario.',
    'Aparta un objeto de una etapa terminada simbolizando su cierre.',
    'Limpia un pequeño espacio como gesto de dejar ir el pasado.',
    'Apaga una luz consciente imaginando cerrar el ciclo del día.',
    'Las despedidas con respeto traen una ligereza que es paz.'
),

-- 23: EL VACIAMIENTO
(
    'times-emptying', 'times', 'El Vaciamiento', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Momentos pasados sin fuerzas ni certezas te obligaron a rendirte a lo esencial.',
    'Soltando capas: depuración natural de roles y expectativas antes de lo nuevo.',
    'Espacio fértil: cuando sueltes lo que sobra, lo importante aparecerá con claridad.',
    '¿Qué etapa pasada te simplificó al vaciarte?', '¿Qué sueltas ahora aunque no lo hayas elegido?', '¿Qué nacería en ese espacio?',
    'Recuerda cuando perder algo te hizo ganar mucha claridad.', 'Hoy, identifica una cosa innecesaria y suéltala con decisión.', 'Durante tres días, reduce un exceso mental o material.',
    'Vacía un vaso y rellénalo lento: soltar para poder recibir.',
    'Archiva un elemento pequeño como gesto de depuración real.',
    'Cinco minutos diarios sin ningún estímulo externo de consumo.',
    'Vaciar no es perder: es preparar la tierra para lo próximo.'
),

-- 24: LA NOCHE INTERIOR
(
    'times-inner-night', 'times', 'La Noche Interior', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Avanzar a ciegas en el pasado te enseñó a sostenerte sin claridad externa.',
    'Introspección profunda: periodo de gestación silenciosa que trabaja en tu interior.',
    'Sabiduría nueva: te conocerás mejor y caminarás con calma verdadera tras esto.',
    '¿Qué noche oscura te enseñó a madurar?', '¿Qué área se siente ahora en oscuridad?', '¿Qué verdad se revelará después?',
    'Recuerda un periodo oscuro que finalmente se transformó bien.', 'Hoy, acepta estar en proceso sin exigir claridad inmediata.', 'Durante tres días, busca un momento de silencio y penumbra.',
    'Enciende una lámpara tenue minutos para acompañar tu introspección.',
    'Cierra los ojos escuchando el entorno sin intentar controlarlo.',
    'Quédate segundos en la oscuridad respirando lento antes de dormir.',
    'La noche interior es la gestación necesaria de la sabiduría.'
),

-- 25: LA MUERTE SUAVE
(
    'times-gentle-death', 'times', 'La Muerte Suave', 'times',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Finales naturales te enseñaron a soltar versiones propias que dejaron de encajar.',
    'Cierre orgánico: algo termina por sí solo y pide aceptación sin drama alguno.',
    'Renacimiento real: permitir morir lo viejo con dignidad para el nacimiento nuevo.',
    '¿Qué final pasado te enseñó a soltar con calma?', '¿Qué se apaga ahora sin que tengas que forzarlo?', '¿Qué nacerá después?',
    'Recuerda un cierre necesario y el alivio que trajo consigo.', 'Hoy, identifica qué ya no tiene vida y deja de empujarlo.', 'Durante tres días, suelta un hábito que ya no te representa.',
    'Apaga una luz con suavidad observando el silencio resultante.',
    'Guarda un objeto con cuidado como gesto de despedida digna.',
    'Exhala largo relajando el cuerpo al final del día.',
    'Los finales naturales son suspiros que abren nuevos horizontes.'
),

-- 26: EL SILENCIO FÉRTIL
(
    'times-fertile-silence', 'times', 'El Silencio Fértil', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Pausas pasadas que parecían vacías prepararon crecimientos invisibles esenciales.',
    'Espacio de gestación: por dentro se organiza hoy tu nueva estructura vital.',
    'Claridad futura: lo que hoy no tiene forma será tu nueva dirección madura.',
    '¿Qué silencio pasado trajo un cambio decisivo?', '¿Qué se gesta ahora aunque no lo veas?', '¿Qué rumbo aparecerá?',
    'Recuerda una etapa quieta que luego resultó ser decisiva.', 'Hoy, permite un espacio vacío sin llenarlo con ruido mental.', 'Durante tres días, crea un bloque diario de silencio real.',
    'Dos minutos sin ningún estímulo externo observando el ahora.',
    'Deja un espacio vacío físico como símbolo de apertura total.',
    'Permanece en quietud un minuto antes de dormir asentándote.',
    'El silencio fértil es la incubación sagrada de lo que vendrá.'
),

-- 27: LA REVELACIÓN
(
    'times-revelation', 'times', 'La Revelación', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Verdades evidentes en el pasado reorganizaron tus prioridades de golpe ayer.',
    'Insight actual: una comprensión te hace ver tu situación desde otra altura.',
    'Camino más limpio: aceptar lo que ves hoy hará tus pasos más coherentes.',
    '¿Qué revelación pasada cambió tu vida?', '¿Qué verdad es ahora imposible de ignorar?', '¿Qué decisión se hará clara?',
    'Recuerda cuando “lo viste claro” y la ayuda que eso supuso.', 'Hoy, acepta una verdad interna aunque no sea cómoda.', 'Durante tres días, observa la claridad que trae la verdad.',
    'Mira fijamente la luz de una ventana segundos al despertar.',
    'Escribe la palabra clave de tu revelación y tenla presente.',
    'Pregúntate cada mañana: “¿Qué es lo más verdadero hoy?”',
    'Aceptar la verdad hace que el tiempo empiece a guiarte mejor.'
),

-- 28: LA INTEGRACIÓN
(
    'times-integration', 'times', 'La Integración', 'times',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Aprendizajes pasados se unieron dentro de ti haciéndote un ser mucho más completo.',
    'Uniendo piezas: lo contradictorio empieza a encontrar sentido y coherencia hoy.',
    'Unidad interior profunda: caminarás con más autenticidad y estabilidad futura.',
    '¿Qué partes del pasado has integrado con sabiduría?', '¿Qué experiencias intentas unir ahora?', '¿Qué armonía consolidarás?',
    'Recuerda cuando todo encajó después de mucho caos interno.', 'Hoy, acepta una parte propia que antes rechazabas de ti.', 'Durante tres días, busca equilibrio entre tu acción y descanso.',
    'Une palmas frente al pecho respirando hondo sintiendo unión.',
    'Coloca dos objetos distintos juntos como reconciliación interna.',
    'Observa hoy un aprendizaje como parte de un todo mayor en ti.',
    'Eres la suma viva y armoniosa de todo lo que has habitado.'
),

-- 29: EL RENACER
(
    'times-rebirth', 'times', 'El Renacer', 'times',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Volver a empezar en el pasado te enseñó que siempre hay vida tras el final.',
    'Nueva versión emergente: sales de una transformación más consciente y libre.',
    'Etapa luminosa: lo que nace hoy es la base de tu ciclo más auténtico futuro.',
    '¿Qué renacer pasado te dio otra oportunidad?', '¿Qué parte nueva emerge ahora?', '¿Qué te permitirías ser en lo próximo?',
    'Recuerda empezar de nuevo con más fuerza tras una caída.', 'Hoy, haz algo simbólicamente nuevo por pequeño que sea.', 'Durante tres días, actúa desde tu versión más renovada.',
    'Lávate cara y manos con agua fresca sintiendo el nuevo inicio.',
    'Abre una puerta conscientemente dejando entrar aire nuevo.',
    'Estira el cuerpo cada mañana como si estrenases la vida entera.',
    'Renacer es avanzar desde el lugar más sabio de tu propia alma.'
),

-- 30: EL NUEVO CICLO
(
    'times-new-cycle', 'times', 'El Nuevo Ciclo', 'times',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Capítulos nuevos en tu vida redefinieron ayer quién eras y hacia dónde ibas.',
    'Entrando en una etapa distinta: un ritmo nuevo organiza ya tu realidad actual.',
    'Oportunidades inéditas: caminar con conciencia hará esta etapa significativa.',
    '¿Qué ciclo pasado te transformó más?', '¿Qué etapa nueva empiezas ahora?', '¿Qué definirá tu próximo gran ciclo?',
    'Recuerda un inicio importante y su transformación profunda.', 'Hoy, define qué quieres que sea diferente en esta nueva etapa.', 'Durante tres días, establece un hábito de inicio de ciclo.',
    'Traza un círculo con el dedo simbolizando el cierre y apertura.',
    'Coloca un objeto recién ordenado como señal física de inicio.',
    'Repite mentalmente cada mañana: “Este es un nuevo comienzo”.',
    'Honrar los ritmos de la vida hace del tiempo tu maestro fiel.'
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
