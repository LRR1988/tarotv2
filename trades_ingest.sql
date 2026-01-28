-- INGESTA: MAZO OFICIOS PERDIDOS (30 CARTAS COMPLETAS)
-- Este script inserta todas las cartas del mazo Oficios Perdidos con sus variaciones temporales.

INSERT INTO cards (
    id, deck_id, name, type, image,
    interpretation_past, interpretation_present, interpretation_future,
    question_past, question_present, question_future,
    challenge_past, challenge_present, challenge_future,
    ritual_past, ritual_present, ritual_future,
    invitation
) VALUES 
-- 1: EL TEJEDOR DE SUEÑOS
(
    'trades-dreamweaver', 'trades', 'El Tejedor de Sueños', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en tu vida en la que tus sueños, ilusiones o proyectos fueron una fuente central de sentido. Tal vez imaginaste un futuro distinto o te aferraste a una visión que te ayudó a atravesar momentos difíciles.',
    'Estás tejiendo activamente tu realidad con pensamientos, deseos e intenciones. No todo es consciente, pero tus imágenes internas están influyendo más de lo que crees en tus decisiones actuales.',
    'Aprenderás a soñar de una forma más lúcida. Podrás crear con mayor intención, alineando tus deseos profundos con acciones concretas que empiecen a materializarlos.',
    '¿Qué sueño antiguo marcó una etapa importante de tu vida?', '¿Qué estás imaginando o deseando con más fuerza en este momento?', '¿Qué realidad te gustaría empezar a tejer conscientemente?',
    'Recuerda un sueño pasado y reconoce qué te enseñó, aunque no se cumpliera.', 'Hoy, dedica unos minutos a visualizar con calma algo que deseas construir.', 'Durante tres días, toma una pequeña acción diaria alineada con ese sueño.',
    'Antes de dormir esta noche, toca suavemente tu frente con dos dedos y recuerda durante unos segundos un sueño antiguo que fue importante para ti.',
    'Cierra los ojos durante un minuto y visualiza una imagen clara de lo que deseas crear. Luego abre los ojos lentamente y escribe mentalmente una sola palabra que lo represente.',
    'Cada día, justo antes de tu pequeña acción, haz una inhalación profunda y da el primer paso con plena atención, sin multitarea.',
    'Tus sueños no son fantasías inútiles: son bocetos de realidades posibles. Permítete imaginar sin miedo y actuar sin desprecio por lo invisible. Cuando te conviertes en tejedor consciente de tus sueños, dejas de esperar el futuro y empiezas a crearlo con delicadeza y verdad.'
),

-- 2: EL GUARDIÁN DE RECUERDOS
(
    'trades-memory-guardian', 'trades', 'El Guardián de Recuerdos', 'trades',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo recuerdos que te protegieron: momentos de amor, aprendizajes o figuras que te sostuvieron cuando lo necesitabas. También hubo memorias que dolieron, pero que te enseñaron quién eras.',
    'Estás en contacto con una memoria importante. Algo del pasado pide ser mirado con más conciencia: no para quedarte allí, sino para integrar una lección que aún está viva.',
    'Aprenderás a custodiar tu historia con más sabiduría. Tu relación con el pasado se volverá más ligera y podrás elegir qué recuerdos te acompañan y cuáles ya no necesitas cargar.',
    '¿Qué recuerdo ha sido un refugio importante para ti?', '¿Qué memoria vuelve una y otra vez a tu mente últimamente?', '¿Qué recuerdo estás listo para transformar o soltar?',
    'Recuerda un momento valioso del pasado y agradécete por haberlo vivido.', 'Hoy, observa qué recuerdo aparece con más fuerza y no lo juzgues.', 'Durante tres días, elige conscientemente qué recuerdo quieres alimentar.',
    'Busca un objeto cercano que te recuerde a alguien o a un momento importante. Tócalo unos segundos y permítete sentir gratitud sin analizarlo.',
    'Cuando aparezca un recuerdo hoy, detente un instante, lleva una mano al pecho y observa la emoción sin intentar cambiarla.',
    'Al final de cada día, elige conscientemente un recuerdo agradable del día y repásalo lentamente antes de dormir.',
    'Tu memoria es un archivo sagrado. No todo lo que recuerdas necesita seguir gobernando tu presente. Permítete custodiar tu historia con ternura...'
),

-- 3: EL CARTÓGRAFO DEL DESTINO
(
    'trades-fate-cartographer', 'trades', 'El Cartógrafo del Destino', 'trades',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo decisiones que marcaron rumbos importantes en tu vida. Tal vez no sabías adónde llevaban, pero cada elección fue dibujando un mapa silencioso de quién eres hoy.',
    'Estás en un punto de orientación vital. Algo en tu interior busca dirección, sentido o propósito. No necesitas todas las respuestas, pero sí empezar a leer las señales de tu propio camino.',
    'Desarrollarás una visión más clara de tu rumbo. Aprenderás a trazar tu destino con mayor conciencia, eligiendo no solo hacia dónde vas, sino desde dónde caminas.',
    '¿Qué decisión pasada cambió profundamente tu trayectoria?', '¿En qué cruce vital te encuentras ahora?', '¿Qué dirección quieres empezar a dibujar conscientemente?',
    'Recuerda una elección clave y reconoce cómo te trajo hasta aquí.', 'Hoy, identifica una decisión pendiente y escríbela mentalmente con claridad.', 'Durante tres días, toma una micro-decisión diaria alineada con tu rumbo deseado.',
    'Camina unos pasos despacio recordando una decisión importante que tomaste, sintiendo cómo cada paso te trajo hasta aquí.',
    'Dibuja con el dedo índice una línea imaginaria en el aire, como si trazases un camino, y detente al final respirando hondo una vez.',
    'Cada día, al tomar tu micro-decisión, gira ligeramente el cuerpo hacia una nueva dirección antes de actuar.',
    'No estás perdido: estás en proceso de cartografiarte. Tu destino no es una línea fija, sino un mapa que se dibuja con cada elección consciente.'
),

-- 4: EL FORJADOR DE PROMESAS
(
    'trades-promise-forger', 'trades', 'El Forjador de Promesas', 'trades',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop',
    'Hubo un compromiso que te marcó: una promesa que hiciste, a otros o a ti mismo, y que definió una etapa de tu vida. Puede que la cumplieras con honor o que aprendieras el peso real de la palabra.',
    'Ahora estás en un punto donde tu palabra tiene impacto estratégico. Prometer de más te desgasta; prometer con intención te construye. Es momento de alinear lo que dices con lo que puedes sostener.',
    'Entrarás en una fase de coherencia creciente. Al cuidar tus promesas, ganarás confianza, foco y reputación interna. Tu futuro se fortalece cuando tu palabra se vuelve un activo sólido.',
    '¿Qué promesa pasada te definió o te cambió?', '¿Qué compromiso estás sosteniendo ahora y cómo te está afectando?', '¿Qué promesa contigo mismo te gustaría cumplir de verdad?',
    'Recuerda una promesa cumplida y reconoce qué la hizo posible.', 'Hoy, revisa un compromiso actual y ajusta lo que sea necesario para poder sostenerlo sin desgaste.', 'Durante tres días, cumple una micro-promesa diaria contigo.',
    'Toma un objeto pequeño. Llévalo un momento en la mano y decide una promesa pasada que sí honraste, sintiendo su peso y su valor.',
    'Escribe en una nota una micro-promesa realista para hoy. Colócala visible y, al cumplirla, táchala con un gesto lento y consciente.',
    'Cada día, al cumplir tu micro-promesa, guarda ese mismo objeto en un lugar fijo como “sello” físico de coherencia.',
    'Tu palabra es un contrato energético: contigo y con la vida. No se trata de prometer más, sino de prometer mejor.'
),

-- 5: EL JARDINERO DE ALMAS
(
    'trades-soul-gardener', 'trades', 'El Jardinero de Almas', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que cuidaste a alguien o algo con paciencia: una relación, un proyecto, una parte frágil de ti. Ese cuidado silencioso sembró en ti una capacidad profunda de sostener vida.',
    'Ahora estás en un momento de cultivo. Hay algo en ti que necesita atención constante, no grandes gestos. Tu crecimiento actual depende más de la constancia que de la intensidad.',
    'Verás resultados fértiles y estables. Lo que hoy cuidas con paciencia se convertirá en un soporte real para tu futuro: vínculos más sanos, hábitos más sólidos, una vida más habitable.',
    '¿Qué cuidaste en el pasado con paciencia?', '¿Qué necesita hoy tu atención constante?', '¿Qué fruto te gustaría recoger si mantienes este cuidado?',
    'Recuerda algo que creció gracias a tu constancia y reconocértelo.', 'Hoy, dedica 10 minutos a cuidar algo concreto sin prisa.', 'Durante tres días, repite un gesto simple de cuidado diario y observa el efecto.',
    'Riega una planta. Mientras lo haces, piensa: “Así se sostiene lo vivo”.',
    'Elige un “rincón de cultivo” (mesa, estantería). Ordénalo 2-3 minutos como símbolo de cuidar tu vida interna.',
    'Cada día, al hacer tu gesto de cuidado, coloca una pequeña marca física en un lugar fijo para ver tu constancia crecer.',
    'Lo que se cuida, florece. No necesitas hacerlo perfecto; necesitas hacerlo sostenido.'
),

-- 6: EL AFINADOR DE EMOCIONES
(
    'trades-emotion-tuner', 'trades', 'El Afinador de Emociones', 'trades',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo momentos en los que tu sensibilidad te obligó a aprender a regularte. Quizá pasaste por etapas de intensidad emocional y descubriste cómo encontrar tu propio “tono” interno.',
    'Ahora estás afinando tu estado emocional. No se trata de apagar lo que sientes, sino de regularlo para que no te arrastre. Pequeños ajustes cambian toda la música de tu día.',
    'Desarrollarás una autorregulación más estable. Al aprender a afinarte, podrás sostener más sin agotarte y conectar con otros sin perder tu centro.',
    '¿Qué emoción intensa te enseñó a regularte?', '¿Qué emoción está “desafinada” ahora?', '¿Qué cambiaría si pudieras volver a tu centro con más facilidad?',
    'Recuerda una vez que recuperaste tu equilibrio emocional y reconoce qué te ayudó.', 'Hoy, detecta tu emoción dominante y nómbrala mentalmente sin juicio.', 'Durante tres días, practica un ajuste diario para volver a tu centro.',
    'Pon una canción suave durante un minuto y ajusta tu respiración al ritmo, notando cómo tu cuerpo se acomoda.',
    'Haz un “reset corporal” de 30 segundos: suelta hombros, relaja mandíbula, estira cuello y manos lentamente.',
    'Cada día, elige un gesto de ajuste y repítelo a la misma hora para entrenar tu regulación.',
    'Tus emociones no son un problema: son información. Afinarlas no significa controlarlas con dureza, sino escucharlas con inteligencia.'
),

-- 7: EL CUSTODIO DEL TIEMPO
(
    'trades-time-custodian', 'trades', 'El Custodio del Tiempo', 'trades',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que tuviste que aprender a esperar o a acelerar. El tiempo te enseñó que no todo se controla y que cada proceso tiene su ritmo secreto.',
    'Ahora estás gestionando un ciclo importante. Puede que sientas prisa o estancamiento, pero el mensaje es claro: aprender a habitar este momento sin forzarlo.',
    'Desarrollarás una relación más sabia con el tiempo. Sabrás cuándo avanzar y cuándo sostener, evitando desgastes innecesarios y decisiones prematuras.',
    '¿Qué espera del pasado fue especialmente difícil?', '¿En qué área sientes que el tiempo te presiona ahora?', '¿Qué ritmo más sano podrías adoptar?',
    'Recuerda una espera que terminó dando buen resultado.', 'Hoy, identifica una cosa que puedas hacer más despacio de lo habitual.', 'Durante tres días, respeta un ritmo más humano en una tarea diaria.',
    'Observa un reloj durante un minuto sin hacer nada más, sintiendo cómo cada segundo pasa sin controlarlo.',
    'Reduce deliberadamente la velocidad de una acción cotidiana y presta atención a cada gesto.',
    'Elige una hora fija del día para hacer una pausa consciente de dos minutos, sin móvil ni estímulos.',
    'El tiempo no es un enemigo ni una carrera: es un aliado silencioso. Permítete aprender su lenguaje, respetar sus ciclos y confiar.'
),

-- 8: EL MENSAJERO DEL VIENTO
(
    'trades-wind-messenger', 'trades', 'El Mensajero del Viento', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo palabras, noticias o señales que cambiaron tu rumbo. Mensajes que llegaron en el momento justo y abrieron nuevas posibilidades.',
    'Ahora algo quiere ser comunicado. Puede ser una verdad que necesitas expresar o una señal que debes aprender a escuchar con más atención.',
    'Desarrollarás una comunicación más clara y honesta. Al aprender a decir y a escuchar mejor, desbloquearás caminos que hoy parecen cerrados.',
    '¿Qué mensaje pasado cambió tu vida?', '¿Qué necesitas expresar ahora y estás postergando?', '¿Qué señal deberías aprender a escuchar mejor?',
    'Recuerda una conversación que te trajo claridad y agradécela.', 'Hoy, expresa algo pequeño que normalmente callarías, con respeto y calma.', 'Durante tres días, practica escuchar sin interrumpir al menos una vez al día.',
    'Abre una ventana y deja que el aire toque tu rostro unos segundos, sintiendo que algo nuevo puede llegar.',
    'Escribe una sola frase que necesites decir y léela en voz baja antes de guardarla o borrarla.',
    'Cada día, presta atención consciente a un sonido del entorno y sigue su recorrido con la mente durante unos segundos.',
    'La vida siempre está enviando mensajes. Permítete hablar con verdad y escuchar con presencia.'
),

-- 9: EL ARQUITECTO DE REALIDADES
(
    'trades-reality-architect', 'trades', 'El Arquitecto de Realidades', 'trades',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo decisiones estructurales que definieron tu forma de vivir: hábitos, relaciones, creencias. Sin saberlo, empezaste a construir una realidad que hoy habitas.',
    'Ahora estás diseñando activamente tu entorno interno o externo. Pequeños cambios de estructura pueden transformar profundamente tu experiencia cotidiana.',
    'Aprenderás a crear una realidad más alineada contigo. Al rediseñar tus bases, tu futuro se volverá más estable y coherente.',
    '¿Qué elección pasada definió gran parte de tu vida actual?', '¿Qué parte de tu realidad estás construyendo ahora mismo?', '¿Qué estructura nueva te gustaría empezar a diseñar?',
    'Recuerda una decisión que cambió tu forma de vivir.', 'Hoy, modifica conscientemente un pequeño hábito o espacio que ya no te represente.', 'Durante tres días, construye una micro-rutina nueva que apoye tu bienestar.',
    'Reordena un objeto de tu entorno como símbolo de rediseñar tu realidad.',
    'Dibuja con el dedo un cuadrado en una superficie y visualiza dentro de ella la vida que quieres habitar.',
    'Cada día, al iniciar tu micro-rutina, colócate de pie con postura firme durante 30 segundos.',
    'Tu realidad no es un accidente: es una arquitectura viva que se ajusta con cada elección.'
),

-- 10: EL TALLADOR DE SOMBRAS
(
    'trades-shadow-carver', 'trades', 'El Tallador de Sombras', 'trades',
    'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?q=80&w=1000&auto=format&fit=crop',
    'Hubo partes de ti que preferiste esconder: miedos, errores, impulsos. Al hacerlo, aprendiste a protegerte, pero también a fragmentarte un poco.',
    'Ahora una sombra interna pide ser reconocida. No viene a dañarte, sino a devolverte una parte de tu poder que quedó atrapada en el rechazo.',
    'Aprenderás a integrar tus sombras con más compasión. Al aceptarlas, ganarás autenticidad y una fuerza interior más completa.',
    '¿Qué parte de ti aprendiste a ocultar?', '¿Qué aspecto tuyo estás evitando mirar?', '¿Qué libertad nacería si aceptaras esta sombra?',
    'Recuerda una vez que aceptaste un defecto y eso te liberó.', 'Hoy, reconoce mentalmente una emoción que sueles rechazar.', 'Durante tres días, observa sin juzgar cuándo aparece esa parte de ti.',
    'Mírate brevemente en un espejo y suaviza tu expresión, como si dieras permiso a todo lo que ves.',
    'Apaga una luz unos segundos y observa cómo tu cuerpo reacciona, luego vuelve a encenderla con calma.',
    'Cada día, toca ligeramente tu pecho cuando notes esa sombra y respira hondo tres veces.',
    'Tus sombras no son fallos: son zonas no escuchadas de tu alma.'
),

-- 11: EL BIBLIOTECARIO DE VIDAS
(
    'trades-life-librarian', 'trades', 'El Bibliotecario de Vidas', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo historias que marcaron tu forma de entender el mundo: relatos familiares, experiencias ajenas, ejemplos que adoptaste como propios.',
    'Ahora estás revisando tu narrativa personal. Algo en tu historia pide ser reinterpretado para que puedas avanzar con más verdad.',
    'Aprenderás a escribir una versión más consciente de tu vida. Al cambiar la historia que te cuentas, cambiará también tu rumbo.',
    '¿Qué historia influyó más en tu identidad?', '¿Qué relato sobre ti mismo estás repitiendo?', '¿Qué nueva historia te gustaría escribir?',
    'Recuerda un relato que te inspiró y reconoce su huella.', 'Hoy, detecta una frase interna que uses para definirte y cuestiónala.', 'Durante tres días, cuenta tu día desde un enfoque más amable.',
    'Abre un libro al azar y lee una frase lentamente, como si fuera un mensaje para ti.',
    'Escribe una palabra clave que defina cómo te ves hoy y guárdala en un bolsillo.',
    'Cada noche, repasa un momento del día y cámbiale el final hacia algo más compasivo.',
    'Tu vida es una biblioteca viva. No estás obligado a leer siempre el mismo capítulo.'
),

-- 12: EL RELOJERO DEL INFINITO
(
    'trades-infinite-clockmaker', 'trades', 'El Relojero del Infinito', 'trades',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo etapas en las que sentiste que el tiempo se detenía o se aceleraba. Esos momentos te enseñaron que no todo se mide en relojes.',
    'Ahora estás aprendiendo a percibir el tiempo interno. Hay procesos que no pueden apresurarse y otros que ya están listos para avanzar.',
    'Desarrollarás una relación más profunda con los ciclos. Comprenderás mejor cuándo esperar, cuándo cerrar y cuándo empezar de nuevo.',
    '¿Qué momento del pasado cambió tu percepción del tiempo?', '¿Qué proceso pide paciencia ahora?', '¿Qué ciclo nuevo se está preparando?',
    'Recuerda una etapa que maduró a su propio ritmo.', 'Hoy, observa durante un minuto tu respiración sin modificarla.', 'Durante tres días, identifica un comienzo y un final cada día.',
    'Escucha el tic-tac de un reloj durante 30 segundos con atención plena.',
    'Marca una pausa exacta de un minuto en tu día solo para no hacer nada.',
    'Cada noche, cierra los ojos y visualiza cómo termina un ciclo y comienza otro.',
    'El tiempo no es una línea rígida: es una espiral viva que te enseña a madurar.'
),

-- 13: EL ALQUIMISTA DE NOMBRES
(
    'trades-name-alchemist', 'trades', 'El Alquimista de Nombres', 'trades',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo palabras que te marcaron profundamente: etiquetas, títulos, nombres que definieron cómo te veías a ti mismo.',
    'Ahora estás revisando cómo te nombras. Las palabras que usas están moldeando tu identidad más de lo que imaginas.',
    'Aprenderás a transformar tu diálogo interno. Al elegir nuevos nombres para tus procesos, abrirás una percepción más amable.',
    '¿Qué palabra influyó en cómo te definías?', '¿Qué etiqueta te pones ahora sin darte cuenta?', '¿Qué nuevo nombre le darías a tu proceso?',
    'Recuerda una palabra que te marcó y reconoce su impacto.', 'Hoy, detecta una etiqueta negativa y cámbiala por una más justa.', 'Durante tres días, nombra tus estados internos con respeto.',
    'Escribe una palabra que te defina hoy y rómpela lentamente, observando cómo se disuelve.',
    'Elige un objeto pequeño y asígnale un nombre nuevo que represente cómo quieres sentirte.',
    'Cada día, al mirarte al espejo, piensa un nombre simbólico para tu estado actual.',
    'Las palabras crean mundos. Permítete renombrarte con conciencia y ternura.'
),

-- 14: EL INTÉRPRETE DE PRESAGIOS
(
    'trades-omen-interpreter', 'trades', 'El Intérprete de Presagios', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo señales que no supiste leer: intuiciones, coincidencias que más tarde cobraron sentido.',
    'Ahora la vida te habla en símbolos pequeños. No necesitas predecir el futuro, sino aprender a leer el presente con sensibilidad.',
    'Desarrollarás una intuición más fina. Aprenderás a confiar en señales sutiles y a orientarte en momentos de incertidumbre.',
    '¿Qué señal pasada entendiste con el tiempo?', '¿Qué coincidencia estás viviendo ahora?', '¿Qué mensaje intenta mostrarte la vida?',
    'Recuerda una intuición acertada y agradécetelo.', 'Hoy, presta atención a un detalle aparentemente menor.', 'Durante tres días, anota una señal diaria sin interpretarla de inmediato.',
    'Elige un objeto que llame tu atención y obsérvalo un minuto preguntándote qué simboliza.',
    'Sigue con la mirada el movimiento de una nube o una hoja, notando su recorrido.',
    'Cada día, al final de la jornada, identifica una “señal” y agradécele internamente.',
    'No todo es azar, ni todo es destino: hay un diálogo silencioso entre tú y la vida.'
),

-- 15: EL HILANDERO DEL KARMA
(
    'trades-karma-spinner', 'trades', 'El Hilandero del Karma', 'trades',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo acciones pasadas que sembraron consecuencias invisibles: aprendizajes duros o recompensas no reconocidas.',
    'Ahora recoges hilos de decisiones antiguas. Nada es castigo: todo es resultado de procesos que buscan equilibrio.',
    'Aprenderás a sembrar con más conciencia. Al actuar desde mayor claridad, crearás un futuro más armonioso.',
    '¿Qué situación actual viene de una decisión pasada?', '¿Qué patrón se repite ahora?', '¿Qué nueva semilla plantarías para tu futuro?',
    'Recuerda una consecuencia importante y reconoce su enseñanza.', 'Hoy, elige una acción pequeña que repare algo pendiente.', 'Durante tres días, observa el efecto de tus decisiones cotidianas.',
    'Ata suavemente un hilo a tu muñeca y recuerda que todo gesto deja huella.',
    'Desenreda conscientemente un cable o una cadena, simbolizando liberar un patrón antiguo.',
    'Cada noche, revisa una acción del día y observa qué hilo estás tejiendo.',
    'Tu vida es un telar silencioso donde cada gesto deja un trazo.'
),

-- 16: EL PINTOR DE DESTINOS
(
    'trades-destiny-painter', 'trades', 'El Pintor de Destinos', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo momentos en los que imaginaste versiones distintas de tu vida que influyeron en tus decisiones.',
    'Ahora coloreas tu destino con actitudes y elecciones. No todo está escrito: mucho depende del tono con el que miras.',
    'Desarrollarás una capacidad mayor de crear conscientemente tu rumbo eligiendo colores más honestos.',
    '¿Qué imagen del pasado influyó en tu rumbo?', '¿Qué “color emocional” domina ahora tu forma de vivir?', '¿Qué versión de tu futuro te gustaría pintar?',
    'Recuerda una decisión creativa que cambió tu camino.', 'Hoy, realiza una acción pequeña que acerque tu día a la vida deseada.', 'Durante tres días, observa cómo tus pensamientos colorean tus experiencias.',
    'Dibuja mentalmente una escena futura y elige un color representativo.',
    'Toma un objeto de color cercano y úsalo como recordatorio de la emoción a cultivar.',
    'Cada noche, cambia el “color interno” de un momento hacia uno más amable.',
    'Tu destino no es un boceto cerrado: es un lienzo vivo.'
),

-- 17: EL NAVEGANTE DE SUEÑOS
(
    'trades-dream-navigator', 'trades', 'El Navegante de Sueños', 'trades',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Hubo etapas en las que te dejaste guiar por deseos profundos. Esos viajes te enseñaron a confiar en lo invisible.',
    'Ahora atraviesas una zona de incertidumbre creativa. Tu intuición sabe hacia dónde orientarte si escuchas.',
    'Desarrollarás una brújula interior más fina para moverte con confianza incluso sin mapa.',
    '¿Qué intuición te llevó a buen puerto?', '¿En qué área te mueves ahora sin mapa?', '¿Qué destino interior explorarías?',
    'Recuerda una decisión intuitiva valiosa.', 'Hoy, sigue una pequeña intuición sin analizarla.', 'Durante tres días, anota una corazonada diaria.',
    'Visualiza que navegas en un mar tranquilo y deja que aparezca una dirección.',
    'Camina unos minutos sin rumbo fijo dejando que tu cuerpo elija.',
    'Al despertar, presta atención al primer pensamiento como señal.',
    'No todo camino se traza con mapas: algunos se descubren navegando.'
),

-- 18: EL HERRERO DE VOLUNTADES
(
    'trades-will-forger', 'trades', 'El Herrero de Voluntades', 'trades',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Hubo pruebas que templaron tu carácter, fortaleciendo tu determinación bajo presión.',
    'Ahora forjas tu voluntad con decisiones pequeñas que entrenan tu constancia diaria.',
    'Desarrollarás una disciplina más serena y eficaz para sostener procesos largos.',
    '¿Qué dificultad fortaleció más tu carácter?', '¿Dónde necesitas ahora más constancia?', '¿Qué meta requerirá voluntad firme?',
    'Recuerda una vez que no te rendiste y agradécelo.', 'Hoy, completa una tarea breve que sueles posponer.', 'Durante tres días, mantén un compromiso pequeño sin negociar.',
    'Aprieta suavemente los puños segundos y relájalos sintiendo la fuerza.',
    'Golpea suavemente una superficie tres veces simbolizando forjar tu decisión.',
    'Cada día, al cumplir tu compromiso, permanece firme 20 segundos sintiendo tu determinación.',
    'Tu voluntad se construye golpe a golpe, gesto a gesto.'
),

-- 19: EL RECOLECTOR DE SUSPIROS
(
    'trades-sigh-collector', 'trades', 'El Recolector de Suspiros', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Hubo emociones guardadas en silencios y gestos no dichos para sobrevivir.',
    'Cargas emociones suaves: brumas, nostalgias o deseos que piden ser reconocidos.',
    'Aprenderás a liberar con ligereza lo que callas, aclarando tu energía.',
    '¿Qué emoción pasada nunca expresaste?', '¿Qué contienes ahora en silencio?', '¿Qué alivio llegaría si soltaras?',
    'Recuerda cuando el silencio calló algo importante.', 'Hoy, exhala una vez largo y consciente ante la tensión.', 'Durante tres días, nombra internamente una emoción suave.',
    'Exhala por la boca tres veces imaginando soltar un peso.',
    'Abre y cierra las manos varias veces imaginando dejar caer lo que sostienes.',
    'Antes de dormir, suelta un suspiro profundo y relaja hombros.',
    'No todo lo que pesa grita: algunas cargas solo suspiran.'
),

-- 20: EL GUARDAFUEGOS INTERIOR
(
    'trades-inner-firekeeper', 'trades', 'El Guardafuegos Interior', 'trades',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Una pasión o convicción pasada fue tu refugio cuando todo parecía apagarse.',
    'Cuidas tu energía vital: no arder más fuerte, sino proteger tu llama del descuido.',
    'Desarrollarás una relación sabia con tu motivación, sabiendo cuándo avivar o descansar.',
    '¿Qué pasión te dio fuerza?', '¿Qué alimenta o apaga tu energía ahora?', '¿Qué llama cuidarías mejor?',
    'Recuerda una etapa donde tu motivación fue clave.', 'Hoy, protege un límite para no desgastar tu energía.', 'Durante tres días, realiza un gesto que alimente tu vitalidad.',
    'Mira una fuente de luz segundos imaginando cuidar tu llama interior.',
    'Coloca una mano en el abdomen y respira profundo tres veces sintiendo el calor.',
    'Sustituye hoy una actividad que te drene por una que te recargue.',
    'Tu fuego interior es precioso. Permítete cuidarlo con respeto.'
),

-- 21: EL SANADOR DE HERIDAS INVISIBLES
(
    'trades-invisible-healer', 'trades', 'El Sanador de Heridas Invisibles', 'trades',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Dolores que nadie vio forjaron una sensibilidad y fortaleza únicas en ti.',
    'Una herida interna pide cuidado y ternura más que soluciones rápidas.',
    'Aprenderás a sanar con suavidad, recuperando integridad y calma.',
    '¿Qué herida sanaste casi solo?', '¿Qué parte de ti necesita cuidado emocional?', '¿Qué bienestar nacería de la compasión?',
    'Recuerda una etapa difícil superada con fortaleza.', 'Hoy, haz un gesto de autocuidado sin justificarlo.', 'Durante tres días, practica la amabilidad contigo.',
    'Apoya manos en corazón y abdomen respirando lento un minuto.',
    'Aplica agua o crema en tus manos como símbolo de cuidado interno.',
    'Agradece a tu cuerpo y mente al final del día por lo sostenido.',
    'No todas las heridas sangran: algunas solo piden ser vistas.'
),

-- 22: EL TEJEDOR DE SILENCIOS
(
    'trades-silence-weaver', 'trades', 'El Tejedor de Silencios', 'trades',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'En silencios pasados aprendiste a escuchar más allá de las palabras.',
    'El silencio es hoy un espacio fértil para escucharte y ordenar el ruido.',
    'Descubrirás respuestas en la quietud que no llegan en el bullicio.',
    '¿Cuándo te protegió el silencio?', '¿Qué ruido interno acallarías?', '¿Qué verdad aparecería al escuchar?',
    'Recuerda un silencio que te enseñó algo.', 'Hoy, regálate cinco minutos sin ningún estímulo externo.', 'Durante tres días, busca un momento diario de quietud.',
    'Apaga sonidos un minuto y escucha solo tu respiración.',
    'Coloca un dedo en los labios y permanece inmóvil segundos.',
    'Siéntate en silencio un minuto antes de dormir sin pensar en nada.',
    'El silencio es presencia profunda. Habítalo sin miedo.'
),

-- 23: EL DOMADOR DE MIEDOS
(
    'trades-fear-tamer', 'trades', 'El Domador de Miedos', 'trades',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Temores pasados te enseñaron protección, aunque algunos te limitaron.',
    'Un miedo pide ser mirado de frente para comprender qué protege en ti.',
    'Descubrirás valentía tranquila no desde la lucha, sino desde la comprensión.',
    '¿Qué miedo te hizo más fuerte?', '¿Qué temor influye ahora?', '¿Qué libertad ganarías al soltarlo?',
    'Recuerda un miedo superado y reconoce tu valentía.', 'Hoy, acércate un poco a algo que te incomoda.', 'Durante tres días, observa un miedo sin huir.',
    'Presiona pies contra el suelo segundos sintiendo estabilidad.',
    'Mano en pecho y abdomen respirando hasta calmar el cuerpo.',
    'Da hoy un paso mínimo hacia algo que sueles evitar.',
    'El miedo es un guardián torpe. Escúchalo sin obedecerlo ciegamente.'
),

-- 24: EL CUSTODIO DE UMBRALES
(
    'trades-threshold-keeper', 'trades', 'El Custodio de Umbrales', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'En cada umbral de transición pasado aprendiste a soltar versiones de ti.',
    'Estás frente a un límite: algo termina y algo nuevo pide permiso para comenzar.',
    'Cruzarás los cambios con conciencia; los umbrales serán portales de crecimiento.',
    '¿Qué transición te transformó más?', '¿Qué cambio atraviesas ahora?', '¿Qué nueva etapa se prepara?',
    'Recuerda un cierre que abrió algo mejor.', 'Hoy, identifica algo que dejas atrás.', 'Durante tres días, haz un pequeño gesto de despedida o bienvenida.',
    'Cruza un umbral de tu casa con plena atención consciente.',
    'Limpia un objeto viejo como símbolo de cerrar una etapa.',
    'Respira hondo antes de cada nuevo comienzo hoy.',
    'Los umbrales son puertas de transformación generosa.'
),

-- 25: EL SEMBRADOR DE ESPERANZA
(
    'trades-hope-sower', 'trades', 'El Sembrador de Esperanza', 'trades',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Una pequeña esperanza pasada te sostuvo cuando todo era incierto.',
    'Siembras hoy gestos que influirán directamente en tu ánimo futuro.',
    'Confianza y paciencia se convertirán en estabilidad optimista real.',
    '¿Qué esperanza te ayudó a no rendirte?', '¿Qué siembras hoy emocionalmente?', '¿Qué fruto recogerías?',
    'Recuerda cuando la esperanza fue clave para seguir.', 'Hoy, realiza un gesto que mejore el día de alguien.', 'Durante tres días, elige una actitud de confianza al despertar.',
    'Planta una semilla o nota de intención y obsérvala diario.',
    'Mira un objeto verde un minuto como símbolo de crecimiento.',
    'Abre cortinas lentamente dando la bienvenida a la luz.',
    'La esperanza es una semilla práctica. Cuídala con paciencia.'
),

-- 26: EL ORFEBRE DE RECUERDOS
(
    'trades-memory-goldsmith', 'trades', 'El Orfebre de Recuerdos', 'trades',
    'https://images.unsplash.com/photo-1520975867597-0f1d4b44c6d9?q=80&w=1000&auto=format&fit=crop',
    'Transformaste dolor en aprendizaje, puliendo recuerdos con el tiempo.',
    'Refinas hoy el significado de tu historia forjando tu identidad actual.',
    'Conservarás lo esencial; tus recuerdos serán joyas que no pesan.',
    '¿Qué recuerdo transformaste con sabiduría?', '¿Qué memoria reinterpretas?', '¿Qué recuerdo es tu tesoro?',
    'Recuerda una experiencia dura con la sabiduría de hoy.', 'Hoy, busca un aprendizaje dentro de un recuerdo elegido.', 'Durante tres días, guarda un recuerdo agradable diario.',
    'Limpia un objeto brillante imaginando pulir un recuerdo.',
    'Observa una foto buscando un detalle hermoso inadvertido.',
    'Agradece un recuerdo del día antes de dormir.',
    'Tu memoria es un taller para transformar pasado en sabiduría.'
),

-- 27: EL COSECHADOR DE INTUICIONES
(
    'trades-intuition-harvester', 'trades', 'El Cosechador de Intuiciones', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Corazonadas pasadas te enseñaron que no toda sabiduría es mental.',
    'Tu intuición está activa hoy intentando orientarte con sensaciones.',
    'Confiarás más en tu percepción sutil tomando decisiones alineadas.',
    '¿Qué intuición fue muy acertada?', '¿Qué señal interna recibes?', '¿Qué cambiaría al confiar más?',
    'Recuerda cuando seguir tu intuición fue positivo.', 'Hoy, toma una decisión pequeña por sensación pura.', 'Durante tres días, anota tu primera impresión ante algo.',
    'Mano en vientre notando qué sensación aparece ante una pregunta.',
    'Camina lento notando qué dirección te atrae sin pensar.',
    'Escucha la primera sensación del día al despertar segundos.',
    'Tu intuición es una cosecha silenciosa. Escúchala con confianza.'
),

-- 28: EL VIGILANTE DE LOS SUEÑOS
(
    'trades-dream-vigilant', 'trades', 'El Vigilante de los Sueños', 'trades',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
    'Protegiste deseos frágiles en silencio conservando tu esencia.',
    'Custodias un sueño actual; protégelo con atención para que no se diluya.',
    'Sostendrás aspiraciones con firmeza si las cuidas sin exponerlas pronto.',
    '¿Qué sueño protegiste contra todo pronóstico?', '¿Qué aspiración cuidas hoy con discreción?', '¿Qué sueño protegerás mejor?',
    'Recuerda mantener vivo un deseo valiente.', 'Hoy, piensa en un sueño sin contárselo a nadie.', 'Durante tres días, haz un pequeño gesto por un proyecto.',
    'Cubre ojos segundos visualizando tu sueño protegido.',
    'Coloca un objeto cerca de tu cama como símbolo protector.',
    'Recuerda una intención antes de levantarte cada mañana.',
    'Tus sueños son semillas delicadas. Vigílalos con ternura.'
),

-- 29: EL PORTADOR DE SECRETOS
(
    'trades-secret-bearer', 'trades', 'El Portador de Secretos', 'trades',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
    'Confidencias pasadas te enseñaron el valor real de la discreción.',
    'Guardas una verdad o emoción que aún no es momento de compartir.',
    'Tus secretos serán sabiduría cuando sepas cuándo revelarlos.',
    '¿Qué secreto pasado te enseñó algo?', '¿Qué verdad guardas ahora?', '¿Qué secreto se revelará después?',
    'Recuerda cuando el silencio fue la mejor decisión.', 'Hoy, observa si un silencio te protege o limita.', 'Durante tres días, distingue silencio sano de miedo.',
    'Toma un objeto secreto segundos como símbolo de lo guardado.',
    'Escribe y dobla cuidadosamente una palabra del secreto.',
    'Revisa antes de dormir si un secreto aún debe ser guardado.',
    'Hay secretos que protegen procesos y silencios que cuidan corazones.'
),

-- 30: EL CONSTRUCTOR DE CAMINOS
(
    'trades-path-builder', 'trades', 'El Constructor de Caminos', 'trades',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    'Abriste paso sin referencias; cada decisión fue una piedra en tu sendero.',
    'Trazas hoy una dirección propia con cada gesto consciente.',
    'Serás referencia sólida; el camino que construyes hoy te sostendrá siempre.',
    '¿Qué camino abriste sin saber adónde iba?', '¿Qué sendero construyes ahora?', '¿Qué ruta dejas trazada?',
    'Recuerda un inicio difícil que terminó en buen puerto.', 'Hoy, da un paso pequeño hacia una meta real.', 'Durante tres días, mantén una acción diaria consolidada.',
    'Camina unos metros notando cada pisada como construcción.',
    'Coloca tres objetos en línea representando tus etapas vitales.',
    'Cada mañana, decide un primer paso claro y cúmplelo.',
    'Tu destino nace bajo tus pies con cada elección valiente.'
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
