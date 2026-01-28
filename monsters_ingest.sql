-- INGESTA COMPLETA: MAZO BESTIARIO MÍTICO (30 CARTAS)
-- Este script inserta las 30 cartas del Bestiario Mítico con sus variaciones temporales.

INSERT INTO cards (
    id, deck_id, name, type, image,
    interpretation_past, interpretation_present, interpretation_future,
    question_past, question_present, question_future,
    challenge_past, challenge_present, challenge_future,
    ritual_past, ritual_present, ritual_future,
    invitation
) VALUES 
-- 1: EL DRAGÓN
(
    'monsters-dragon', 'monsters', 'El Dragón', 'monsters', 
    'https://images.unsplash.com/photo-1577493322601-3ae1f35c7d67?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en tu vida en la que despertaste una fuerza interior que no sabías que tenías. Tal vez asumiste una responsabilidad grande o enfrentaste un desafío que te obligó a crecer rápido. Esa experiencia encendió un fuego interno que aún hoy te sostiene.',
    'Estás en contacto con tu poder personal. Hay una energía creativa, vital o ambiciosa pidiendo expresión. Ignorarla ahora sería apagar una parte esencial de tu identidad.',
    'Se abrirá una fase de liderazgo consciente. Si sabes usar tu fuerza con sabiduría y no desde el ego, podrás transformar no solo tu camino, sino también el de otros.',
    '¿Cuándo descubriste por primera vez tu propia fuerza?', '¿En qué área de tu vida estás listo para asumir más poder?', '¿Qué podrías transformar si confiaras plenamente en tu potencial?',
    'Recuerda una situación en la que fuiste más fuerte de lo que creías y reconoce en voz alta esa victoria.', 'Haz hoy una acción valiente que normalmente pospondrías.', 'Durante tres días, actúa cada día desde tu confianza interior.',
    'Coloca una mano sobre el pecho y respira profundo diciendo: “Reconozco mi fuego”.', 'Antes de tu acción valiente, di en silencio: “Activo mi poder”.', 'Cada día, al terminar tu acción, di: “Uso mi fuerza con sabiduría”.',
    'Tu poder no es un accidente ni una amenaza: es una responsabilidad sagrada. No estás aquí para esconder tu fuego, sino para aprender a dirigirlo con conciencia. Permítete ocupar tu lugar sin miedo.'
),
-- 2: EL FÉNIX
(
    'monsters-fenix', 'monsters', 'El Fénix', 'monsters', 
    'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1000&auto=format&fit=crop',
    'Hubo una caída importante en tu vida. Algo terminó, se rompió o se perdió de una forma que te obligó a reconstruirte desde cero. Ese dolor marcó el inicio de una transformación profunda.',
    'Estás en pleno proceso de renacimiento. Aunque aún queden restos de lo antiguo, ya no eres quien eras. Algo nuevo está emergiendo desde tus propias cenizas.',
    'Vivirás una renovación consciente. No solo te recuperarás: te reinventarás con más claridad, más fuerza y más coherencia.',
    '¿Qué caída pasada terminó transformándote?', '¿Qué parte de ti está renaciendo ahora?', '¿Qué versión nueva de ti estás listo para habitar?',
    'Recuerda una pérdida importante y reconoce qué te permitió reconstruirte.', 'Haz hoy algo que simbolice un nuevo comienzo.', 'Durante tres días, repite una acción alineada con tu renovación.',
    'Exhala profundo tres veces diciendo: “Sobreviví y me transformé”.', 'Al hacer tu gesto nuevo, di: “Renazco de mis cenizas”.', 'Cada día, repite: “Me permito ser nuevo”.',
    'No temas a tus finales ni a tus ruinas. Dentro de cada caída vive una semilla de renovación esperando ser encendida. Tu alma sabe renacer mejor de lo que tu mente imagina.'
),
-- 3: EL TITÁN
(
    'monsters-titan', 'monsters', 'El Titán', 'monsters', 
    'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?q=80&w=1000&auto=format&fit=crop',
    'Cargaste durante mucho tiempo con responsabilidades que no te correspondían del todo. Asumiste pesos heredados, expectativas familiares o estructuras antiguas que moldearon tu carácter a base de resistencia.',
    'Estás sosteniendo mucho más de lo que reconoces. Tu fortaleza es real, pero también lo es tu cansancio. Ha llegado el momento de revisar qué cargas sigues llevando por costumbre.',
    'Aprenderás a soltar pesos antiguos. Tu verdadera fuerza emergerá cuando elijas qué sostener y qué dejar caer.',
    '¿Qué carga heredada te hizo más fuerte?', '¿Qué peso sigues sosteniendo que ya no te corresponde?', '¿Qué cambiaría en tu vida si soltaras esa carga?',
    'Recuerda una gran responsabilidad pasada y agradécete por haberla sostenido.', 'Hoy, delega, pospone o suelta conscientemente una carga pequeña.', 'Durante tres días, observa qué cargas puedes aliviar.',
    'Coloca ambas manos sobre los hombros y respira diciendo: “Fui fuerte”.', 'Al soltar tu pequeña carga, di: “No todo me pertenece”.', 'Cada día, di: “Elijo una fuerza más ligera”.',
    'No confundas fortaleza con sacrificio eterno. Ser fuerte no significa cargar con todo ni demostrar resistencia infinita. Hay una forma más sabia de poder.'
),
-- 4: EL LEVIATÁN
(
    'monsters-leviatan', 'monsters', 'El Leviatán', 'monsters', 
    'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en tu vida en la que entraste en aguas emocionales muy profundas. Enfrentaste miedos, pérdidas o sentimientos que parecían demasiado grandes para contenerlos.',
    'Estás en contacto con emociones intensas o inconscientes. Algo profundo se está moviendo dentro de ti. Ignorarlo ahora podría generar más confusión o desgaste.',
    'Aprenderás a dominar tus profundidades internas. Lo que hoy parece abrumador se convertirá en una fuente de sabiduría y poder emocional.',
    '¿Qué emoción profunda te enseñó a ser más fuerte?', '¿Qué sentimiento intenso estás intentando evitar?', '¿Qué poder interior nacerá cuando aceptes tus profundidades?',
    'Recuerda una emoción muy intensa que atravesaste y reconoce en voz alta que sobreviviste.', 'Permítete hoy sentir una emoción sin huir de ella durante al menos un minuto.', 'Durante tres días, observa qué emociones profundas aparecen sin juzgarlas.',
    'Coloca una mano sobre el vientre y respira diciendo: “Sobreviví a mis mares”.', 'Al permitirte sentir, di: “No me hundo, me conozco”.', 'Cada vez que observes una emoción, repite: “Aquí hay sabiduría”.',
    'No temas a tus profundidades. Dentro de tus mares internos no solo habitan miedos, también viven tesoros antiguos de comprensión.'
),
-- 5: EL BEHEMOTH
(
    'monsters-behemoth', 'monsters', 'El Behemoth', 'monsters', 
    'https://images.unsplash.com/photo-1541014524410-67451319082f?q=80&w=1000&auto=format&fit=crop',
    'Hubo un periodo en el que tu instinto de supervivencia tomó el control. Tuviste que resistir, protegerte y seguir adelante sin espacio para la delicadeza.',
    'Estás en modo de resistencia. Tal vez no por peligro real, sino por costumbre. Tu cuerpo y tu mente siguen tensos aunque la amenaza ya no sea tan clara.',
    'Aprenderás a sobrevivir sin endurecerte. Tu fuerza instintiva se volverá más consciente y menos reactiva.',
    '¿Qué etapa de pura supervivencia marcó tu carácter?', '¿Dónde sigues luchando aunque ya no sea necesario?', '¿Cómo sería tu vida si pudieras relajarte sin miedo?',
    'Recuerda una etapa dura y agradécete por haber resistido.', 'Hoy, relaja conscientemente tu cuerpo durante cinco minutos.', 'Durante tres días, nota cuándo reaccionas desde el instinto y elige pausar.',
    'Coloca ambas manos sobre el abdomen y respira diciendo: “Sobreviví”.', 'Durante tu relajación, repite: “Ahora estoy a salvo”.', 'Cada vez que pauses, di: “Elijo calma”.',
    'Tu instinto te salvó cuando fue necesario, pero no está hecho para gobernar toda tu vida. No necesitas vivir siempre en guardia.'
),
-- 6: LA ESFINGE
(
    'monsters-esfinge', 'monsters', 'La Esfinge', 'monsters', 
    'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop',
    'Hubo un momento en tu vida en el que te enfrentaste a una pregunta decisiva. Una elección, un dilema o una prueba interior que definió una parte esencial de tu identidad.',
    'Estás ante un enigma vital. Algo te pide reflexión profunda antes de avanzar. Las respuestas rápidas ahora serían engañosas.',
    'Al resolver este enigma interior, accederás a un nivel más alto de comprensión y madurez.',
    '¿Qué pregunta crucial cambió tu vida?', '¿Qué dilema importante estás enfrentando ahora?', '¿Qué sabiduría nacerá cuando resuelvas este enigma?',
    'Recuerda una decisión difícil y reconoce cómo te transformó.', 'Dedica hoy diez minutos a reflexionar sin buscar soluciones rápidas.', 'Durante tres días, formula cada mañana una pregunta consciente.',
    'Cierra los ojos y di: “Elegí y crecí”.', 'Durante tu reflexión, repite: “Escucho antes de actuar”.', 'Cada mañana, al formular tu pregunta, di: “Estoy listo para comprender”.',
    'No todas las respuestas se conquistan con prisa. Hay verdades que solo se revelan cuando aprendes a habitar la pregunta sin ansiedad.'
),
-- 7: EL GRIFO
(
    'monsters-grifo', 'monsters', 'El Grifo', 'monsters', 
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en tu vida en la que asumiste un rol de vigilancia o protección. Cuidaste algo valioso incluso cuando eso implicaba renunciar a parte de tu libertad.',
    'Estás actuando como guardián de algo importante. Puede ser un límite, un valor, una relación o tu propia integridad.',
    'Aprenderás a proteger sin encerrarte. Tu vigilancia se volverá sabia y flexible, permitiéndote custodiar lo esencial sin vivir en tensión constante.',
    '¿Qué protegiste en el pasado incluso a costa de ti mismo?', '¿Qué valor o vínculo estás custodiando ahora?', '¿Cómo puedes proteger sin perder libertad?',
    'Recuerda algo que defendiste con lealtad y agradécete por tu compromiso.', 'Refuerza hoy un límite o una protección consciente.', 'Durante tres días, observa cuándo proteges por amor y cuándo por miedo.',
    'Coloca una mano sobre el pecho y di: “Cuidé lo sagrado”.', 'Al marcar tu límite, repite: “Protejo lo que amo”.', 'Cada vez que detectes miedo, di: “Protejo con sabiduría”.',
    'No toda vigilancia nace de la desconfianza. A veces, proteger es una forma profunda de amor y responsabilidad.'
),
-- 8: EL CERBERO
(
    'monsters-cerbero', 'monsters', 'El Cerbero', 'monsters', 
    'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1000&auto=format&fit=crop',
    'Hubo un límite importante que aprendiste a respetar. Tal vez atravesaste una frontera emocional que cambió tu relación con la pérdida y el final.',
    'Estás frente a una frontera interior. Algo no puede seguir igual. Hay una puerta que debes cerrar o un umbral que estás listo para cruzar.',
    'Te convertirás en guardián de tus propios límites. Aprenderás a decidir quién entra y quién no en tu mundo interior.',
    '¿Qué frontera pasada marcó un antes y un después en tu vida?', '¿Qué límite necesitas establecer ahora?', '¿Qué paz nacerá al proteger mejor tus fronteras?',
    'Recuerda un cierre importante y reconoce cómo te protegió.', 'Hoy, di “no” de forma clara a algo que invade tu espacio.', 'Durante tres días, observa cuándo alguien cruza tus límites.',
    'Exhala profundo diciendo: “Cerré una puerta y sané”.', 'Al decir “no”, toca tu pecho y repite: “Aquí mando yo”.', 'Cada vez que marques un límite, di: “Protejo mi umbral”.',
    'Tus límites no son muros de rechazo: son puertas sagradas que enseñan a otros cómo tratarte.'
),
-- 9: EL NAGA
(
    'monsters-naga', 'monsters', 'El Naga', 'monsters', 
    'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=1000&auto=format&fit=crop',
    'Hubo un despertar energético o vital que marcó tu historia. Tal vez una pasión o fuerza creativa que te sorprendió por su intensidad.',
    'Tu energía vital está activa. Hay un movimiento interno de transformación, deseo o crecimiento que pide ser canalizado con conciencia.',
    'Integrarás tu energía de forma más armónica. Lo que hoy parece desbordante se convertirá en una fuente estable de poder interior y sanación.',
    '¿Qué despertar vital transformó tu manera de sentir?', '¿Dónde estás sintiendo más intensidad ahora?', '¿Cómo puedes canalizar tu energía con más conciencia?',
    'Recuerda una etapa de gran energía vital y agradécete por haberla vivido.', 'Hoy, mueve tu cuerpo conscientemente durante unos minutos.', 'Durante tres días, dirige tu energía a algo creativo o sanador.',
    'Coloca una mano sobre el abdomen y respira diciendo: “Honro mi energía”.', 'Al moverte, repite: “Dejo fluir mi fuerza”.', 'Cada día, di: “Canalizo mi poder con amor”.',
    'Tu energía vital no es un peligro ni un exceso: es una corriente sagrada de transformación.'
),
-- 10: EL LAMASSU
(
    'monsters-lamassu', 'monsters', 'El Lamassu', 'monsters', 
    'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en tu vida en la que alguien o algo te protegió cuando estabas vulnerable. Esa protección te permitió crecer sin romperte.',
    'Estás en un momento en el que el orden y la estabilidad son fundamentales. Tu alma te pide estructura, límites claros y una base firme.',
    'Construirás una protección interior más sólida. Aprenderás a ser tu propio guardián, sosteniéndote con equilibrio y dignidad.',
    '¿Quién o qué te protegió cuando más lo necesitabas?', '¿Qué te da ahora sensación de estabilidad y orden?', '¿Qué estructura interior quieres fortalecer?',
    'Recuerda un momento en el que te sentiste protegido y agradécelo en silencio.', 'Hoy, ordena conscientemente un pequeño espacio de tu entorno.', 'Durante tres días, refuerza un hábito que te dé estabilidad.',
    'Coloca una mano sobre el pecho y di: “Fui cuidado”.', 'Al ordenar tu espacio, repite: “Creo orden dentro de mí”.', 'Cada día, di: “Soy mi propio guardián”.',
    'La verdadera protección no viene de muros externos, sino de la estabilidad que construyes dentro de ti.'
),
-- 11: LA MEDUSA
(
    'monsters-medusa', 'monsters', 'La Medusa', 'monsters', 
    'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop',
    'Hubo una experiencia que te hizo sentir vergüenza, miedo o rechazo. Algo te congeló emocionalmente y te llevó a esconder una parte de ti.',
    'Estás frente a un miedo que te paraliza. No es el monstruo lo que te detiene, sino tu propia mirada sobre él.',
    'Aprenderás a mirar tu miedo sin petrificarte. Lo que hoy te inmoviliza se transformará en una fuente de fuerza y autocompasión.',
    '¿Qué experiencia te hizo esconder una parte de ti?', '¿Qué miedo te está paralizando ahora?', '¿Qué libertad nacerá cuando enfrentes ese miedo?',
    'Recuerda un momento de vergüenza pasada y agradécete por haber sobrevivido.', 'Hoy, nombra en voz baja un miedo que evitas mirar.', 'Durante tres días, observa cuándo te paralizas y respira antes de huir.',
    'Coloca una mano sobre los ojos y di: “Sobreviví a lo que dolía”.', 'Al nombrar tu miedo, repite: “Puedo mirarte”.', 'Cada vez que respires antes de huir, di: “Recupero mi movimiento”.',
    'No huyas de lo que te asusta dentro de ti. La Medusa vive en las partes de ti que aprendieron a congelarse para no sufrir.'
),
-- 12: EL MINOTAURO
(
    'monsters-minotauro', 'monsters', 'El Minotauro', 'monsters', 
    'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa de confusión profunda. Te sentías perdido dentro de tus propios impulsos o deseos, atrapado en un laberinto interior.',
    'Estás enfrentando pulsiones contradictorias. Una parte de ti quiere avanzar, otra quiere huir. Negarlas ahora solo te hará girar en círculos.',
    'Aprenderás a integrar tus impulsos. Saldrás del laberinto con una comprensión más madura de tu deseo y tu sombra.',
    '¿Cuándo te sentiste perdido dentro de ti mismo?', '¿Qué impulso contradictorio estás viviendo ahora?', '¿Qué claridad nacerá al integrar tus deseos?',
    'Recuerda una decisión confusa y reconoce qué te enseñó.', 'Hoy, detente un momento antes de actuar desde un impulso fuerte.', 'Durante tres días, observa tus deseos sin juzgarlos.',
    'Respira profundo diciendo: “Aprendí del caos”.', 'Antes de pausar, di: “Elijo conciencia”.', 'Cada vez que observes un deseo, di: “Puedo comprenderte”.',
    'No eres un monstruo por tener impulsos contradictorios. Dentro de cada laberinto hay un centro esperando ser encontrado.'
),
-- 13: ÍNCUBO / SÚCUBO
(
    'monsters-incubo', 'monsters', 'Íncubo / Súcubo', 'monsters', 
    'https://images.unsplash.com/photo-1549464677-4df6c56f7096?q=80&w=1000&auto=format&fit=crop',
    'Hubo una relación o deseo que te atrapó con intensidad. Esa experiencia te enseñó cómo algo atractivo puede también drenarte.',
    'Estás frente a una tentación emocional o energética. Algo te seduce, pero no sabes si te nutre o te consume.',
    'Aprenderás a distinguir entre deseo que expande y deseo que vacía. Tu relación con el placer se volverá más consciente.',
    '¿Qué deseo pasado terminó drenándote más de lo que te dio?', '¿Qué te atrae hoy pero te deja dudas?', '¿Cómo sería un deseo que te nutra de verdad?',
    'Recuerda una relación intensa y reconoce qué aprendiste de ella.', 'Hoy, observa conscientemente qué te da energía y qué te la quita.', 'Durante tres días, elige un pequeño placer que te cuide.',
    'Coloca una mano sobre el vientre y di: “Aprendí del deseo”.', 'Al notar una tentación, repite: “Elijo lo que me nutre”.', 'Cada día, al disfrutar algo sano, di: “Este placer me fortalece”.',
    'El deseo no es tu enemigo, pero tampoco es tu amo. Hay pasiones que despiertan vida y otras que se alimentan de tu energía.'
),
-- 14: EL WENDIGO
(
    'monsters-wendigo', 'monsters', 'El Wendigo', 'monsters', 
    'https://images.unsplash.com/photo-1502472591609-9a7ae600d444?q=80&w=1000&auto=format&fit=crop',
    'Hubo una carencia profunda: hambre de amor o seguridad. Intentaste llenarla desde fuera sin lograr saciarla.',
    'Estás frente a un deseo insaciable. Esta hambre no se calma acumulando, sino escuchando lo que realmente falta.',
    'Aprenderás a reconocer tu verdadera necesidad. Al nutrirte desde dentro, romperás el ciclo de la insatisfacción.',
    '¿Qué vacío intentaste llenar sin éxito?', '¿Dónde sientes que nunca es suficiente?', '¿Qué necesidad real estás listo para atender?',
    'Recuerda una etapa de carencia y agradécete por haberla atravesado.', 'Hoy, detente antes de buscar algo compulsivamente.', 'Durante tres días, date algo que realmente necesites.',
    'Coloca una mano sobre el estómago y di: “Sobreviví al vacío”.', 'Al frenar un impulso, repite: “Escucho mi verdadera hambre”.', 'Cada vez que te cuides, di: “Me nutro de verdad”.',
    'No todo hambre se calma comiendo más. Hay vacíos que piden ternura, descanso o verdad.'
),
-- 15: EL BASILISCO
(
    'monsters-basilisco', 'monsters', 'El Basilisco', 'monsters', 
    'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=1000&auto=format&fit=crop',
    'Hubo una mirada o juicio que te hirió profundamente, dejándote marcado durante mucho tiempo.',
    'Estás siendo muy duro contigo o con otros. Hay un juicio rápido que congela tu movimiento y bloquea tu crecimiento.',
    'Aprenderás a mirar sin destruir. Tu capacidad de ver con compasión transformará una antigua rigidez.',
    '¿Qué juicio pasado te dejó marcado?', '¿Dónde estás juzgando sin darte tiempo a comprender?', '¿Qué libertad nacerá cuando suavices tu mirada?',
    'Recuerda un juicio recibido y agradécete por no haberte rendido.', 'Hoy, detén un pensamiento crítico hacia ti.', 'Durante tres días, practica una mirada más compasiva.',
    'Coloca una mano sobre los ojos y di: “Sobreviví a esa mirada”.', 'Al frenar un juicio, repite: “Elijo comprender”.', 'Cada vez que seas compasivo, di: “Libero mi mirada”.',
    'No conviertas tu conciencia en una piedra que te inmoviliza. Permítete ver con más ternura.'
),
-- 16: EL UNICORNIO
(
    'monsters-unicornio', 'monsters', 'El Unicornio', 'monsters', 
    'https://images.unsplash.com/photo-1550747528-cdb45925b3f7?q=80&w=1000&auto=format&fit=crop',
    'Hubo un momento en tu vida en el que confiaste con inocencia, sin defensas. Esa pureza dejó en ti una huella de autenticidad.',
    'Estás en una etapa de alineación con tu propósito más elevado. No es tiempo de máscaras, sino de honestidad interior.',
    'Se abre una fase de curación profunda. Recuperarás partes de ti que creías perdidas y reconectarás con tu versión más íntegra.',
    '¿Cuándo confiaste con total inocencia por última vez?', '¿En qué área de tu vida necesitas más honestidad contigo mismo?', '¿Qué parte de ti estás listo para sanar ahora?',
    'Recuerda un acto de confianza pasada y agradécete por haber sido auténtico.', 'Hoy, actúa de una forma completamente coherente con tus valores.', 'Durante tres días, regálate un gesto diario de autocuidado.',
    'Coloca una mano sobre el corazón y di: “Fui verdadero”.', 'Antes de tu acción coherente, repite: “Honro mi verdad”.', 'Cada día, al cuidarte, di: “Me permito sanar”.',
    'Lo puro que hay en ti no es ingenuidad: es una memoria profunda de quién eres cuando no te defiendes.'
),
-- 17: LA DAMA DEL LAGO
(
    'monsters-dama', 'monsters', 'La Dama del Lago', 'monsters', 
    'https://images.unsplash.com/photo-1502759683299-cdcd6974244f?q=80&w=1000&auto=format&fit=crop',
    'Hubo un encuentro con el destino que marcó una dirección silenciosa en tu vida por su naturaleza intuitiva.',
    'Estás siendo guiado por tu intuición. Hay señales o coincidencias que merecen atención ahora mismo.',
    'Recibirás un don oculto que alineará tu camino con tu propósito de forma inesperada.',
    '¿Qué encuentro pasado parecía casual pero no lo fue?', '¿Qué señal o intuición estás recibiendo ahora?', '¿Qué don inesperado podrías recibir?',
    'Recuerda una coincidencia significativa y agradécete por haberla seguido.', 'Hoy, presta atención consciente a una señal pequeña.', 'Durante tres días, confía en una intuición diaria.',
    'Coloca una mano sobre el vientre y di: “Escuché al destino”.', 'Al notar una señal, repite: “Recibo este mensaje”.', 'Cada vez que sigas tu intuición, di: “Acepto el don”.',
    'La magia no siempre llega en milagros visibles. A veces aparece como una intuición suave.'
),
-- 18: EL ENT
(
    'monsters-ent', 'monsters', 'El Ent', 'monsters', 
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que aprendiste el valor de la paciencia, esperando sin ver resultados inmediatos.',
    'Estás en un proceso que no puede acelerarse. Forzarlo ahora solo rompería su ritmo natural.',
    'Verás frutos sólidos y duraderos. Lo que hoy crece despacio se convertirá en una base firme.',
    '¿Qué espera pasada fortaleció tu carácter?', '¿Dónde necesitas más paciencia ahora?', '¿Qué fruto duradero estás cultivando?',
    'Recuerda algo que tardó en llegar y agradécete por no rendirte.', 'Hoy, elige no apresurar conscientemente algo importante.', 'Durante tres días, honra un proceso lento.',
    'Coloca tus manos sobre una superficie sólida y di: “Supe esperar”.', 'Al frenar tu prisa, repite: “Todo tiene su ritmo”.', 'Cada día, di: “Confío en el crecimiento lento”.',
    'No todo lo valioso crece deprisa. Hay raíces que necesitan tiempo para sostener árboles inmensos.'
),
-- 19: EL KELPIE
(
    'monsters-kelpie', 'monsters', 'El Kelpie', 'monsters', 
    'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=1000&auto=format&fit=crop',
    'Hubo una situación o relación que parecía hermosa pero escondía un riesgo que no supiste ver a tiempo.',
    'Estás frente a algo atractivo, pero hay una promesa seductora que merece más atención antes de entregarte.',
    'Aprenderás a reconocer las falsas promesas. Tu intuición se afinará y elegirás con más discernimiento.',
    '¿Qué ilusión pasada terminó siendo peligrosa para ti?', '¿Qué situación atractiva te genera dudas?', '¿Cómo cambiaría tu vida si eligieras con más discernimiento?',
    'Recuerda una experiencia engañosa y reconoce qué te enseñó.', 'Hoy, antes de aceptar algo tentador, escucha tu intuición.', 'Durante tres días, observa qué promesas te generan inquietud.',
    'Exhala profundo diciendo: “Aprendí de la ilusión”.', 'Al detenerte ante la tentación, repite: “Miro más allá de la forma”.', 'Cada vez que detectes una falsa promesa, di: “Elijo claridad”.',
    'Hay encantos que sedueen para enseñarte a escuchar tu voz interior. Elige con conciencia.'
),
-- 20: EL FAUNO
(
    'monsters-fauno', 'monsters', 'El Fauno', 'monsters', 
    'https://images.unsplash.com/photo-1502472591609-9a7ae600d444?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que reprimiste tu parte más instintiva o alegre para encajar o sobrevivir.',
    'Tu naturaleza salvaje pide espacio. Hay una energía de disfrute que quiere volver a moverse libremente.',
    'Aprenderás a reconciliarte con tu instinto sin perder conciencia. Tu placer se volverá más sano.',
    '¿Qué parte instintiva de ti aprendiste a esconder?', '¿Dónde necesitas permitirte más disfrute ahora?', '¿Cómo sería una relación más libre con tu placer?',
    'Recuerda un momento de gozo espontáneo y agradécete por haberlo vivido.', 'Hoy, permítete un gesto pequeño de disfrute.', 'Durante tres días, escucha tu cuerpo antes de tomar una decisión.',
    'Coloca una mano sobre el vientre y di: “Honro mi gozo”.', 'Al disfrutar tu gesto, repite: “Me permito sentir”.', 'Cada día, di: “Mi placer es sabio”.',
    'Tu instinto no es un enemigo de tu espíritu: es una de sus voces más antiguas.'
),
-- 21: EL PEGASO
(
    'monsters-pegaso', 'monsters', 'El Pegaso', 'monsters', 
    'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop',
    'Hubo un momento en tu vida en el que una inspiración te elevó más allá de tus límites habituales.',
    'Estás en una fase de expansión. Tu espíritu pide aire y nuevas perspectivas. Atarse ahora te haría daño.',
    'Vivirás una liberación importante. Tu creatividad o vocación alcanzará un nivel más alto y auténtico.',
    '¿Qué inspiración pasada te hizo sentir más grande?', '¿Dónde necesitas más libertad ahora?', '¿Qué versión más elevada de ti estás listo para habitar?',
    'Recuerda un sueño antiguo y agradécete por haberlo tenido.', 'Hoy, haz algo que te haga sentir más libre.', 'Durante tres días, dedica minutos a una idea inspiradora.',
    'Respira profundo diciendo: “Soñé y crecí”.', 'Al sentir libertad, repite: “Me elevo”.', 'Cada día, di: “Puedo volar más alto”.',
    'Dentro de ti hay una fuerza creativa que pide cielo y espacio. Atrévete a elevarte.'
),
-- 22: EL HIPOGRIFO
(
    'monsters-hipogrifo', 'monsters', 'El Hipogrifo', 'monsters', 
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en tu vida en la que tuviste que unir dos partes muy distintas de ti para avanzar.',
    'Estás viviendo una alianza interior. Dos fuerzas opuestas piden cooperación en lugar de lucha.',
    'Lograrás una armonía poderosa. La unión de tus opuestos te dará una capacidad nueva para crear.',
    '¿Qué contradicción pasada aprendiste a reconciliar?', '¿Qué dos partes de ti necesitan colaborar ahora?', '¿Qué fuerza nueva nacerá al integrar tus opuestos?',
    'Recuerda una decisión difícil en la que integraste dos lados y agradécete.', 'Hoy, elige una acción que una razón y emoción.', 'Durante tres días, observa cuándo integras en vez de dividir.',
    'Coloca una mano en el pecho y otra en el abdomen y di: “Uní mis partes”.', 'Antes de tu acción, repite: “Honro ambos lados”.', 'Cada día, di: “Mi unión me fortalece”.',
    'No eres una sola cosa. Dentro de ti conviven fuerzas distintas que deben complementarse.'
),
-- 23: LA QUIMERA
(
    'monsters-quimera', 'monsters', 'La Quimera', 'monsters', 
    'https://images.unsplash.com/photo-1549464677-4df6c56f7096?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en la que no sabías quién eras, cambiando de rol varias veces buscando encajar.',
    'Estás viviendo un conflicto interno. Hay partes de ti que quieren cosas distintas. Escúchalas todas.',
    'Aprenderás a integrar tus múltiples facetas. Tu complejidad será fuente de creatividad.',
    '¿Cuándo te sentiste dividido entre varias identidades?', '¿Qué parte de ti estás intentando negar ahora?', '¿Qué fuerza nacerá al aceptar toda tu complejidad?',
    'Recuerda etapas de confusión y agradécete por seguir buscando.', 'Hoy, reconoce dos rasgos tuyos que parecen opuestos.', 'Durante tres días, actúa desde una parte que sueles ocultar.',
    'Respira profundo diciendo: “Sobreviví a no saber quién era”.', 'Al reconocer tus rasgos, repite: “Todo esto soy yo”.', 'Cada día, di: “Honro mi multiplicidad”.',
    'Eres una sinfonía de voces interiores. Tu complejidad no es un defecto, es una riqueza.'
),
-- 24: EL SIMURGH
(
    'monsters-simurgh', 'monsters', 'El Simurgh', 'monsters', 
    'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1000&auto=format&fit=crop',
    'Hubo una búsqueda espiritual importante que sembró en ti una sabiduría silenciosa tras una crisis.',
    'Estás en un momento de visión elevada, empezando a comprender patrones más amplios de tu vida.',
    'Accederás a una guía profunda. Tu camino se alineará con un propósito más grande.',
    '¿Qué búsqueda espiritual marcó tu camino?', '¿Qué patrón de tu vida estás empezando a comprender?', '¿En qué propósito mayor te estás alineando?',
    'Recuerda una pregunta existencial y agradécete por haberla sostenido.', 'Hoy, observa tu vida desde una visión más amplia.', 'Durante tres días, escucha una intuición mayor.',
    'Coloca una mano sobre el corazón y di: “Busqué mi verdad”.', 'Al ampliar tu visión, repite: “Veo más alto”.', 'Cada día, di: “Confío en mi guía interior”.',
    'Cada experiencia tenía un lugar exacto en tu destino. Confía en la inteligencia de la vida.'
),
-- 25: EL BAKU
(
    'monsters-baku', 'monsters', 'El Baku', 'monsters', 
    'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1000&auto=format&fit=crop',
    'Hubo noches de miedo o ansiedad que te enseñaron el valor de la calma interior tras mucha lucha.',
    'Estás cargando preocupaciones que se filtran en tu descanso. Tu alma pide alivio y soltura mental.',
    'Encontrarás una paz más profunda al aprender a soltar miedos antiguos sin culpa.',
    '¿Qué miedo nocturno o ansiedad marcó tu pasado?', '¿Qué preocupación te está robando tranquilidad?', '¿Cómo sería tu vida con un descanso profundo?',
    'Recuerda etapas de insomnio y agradécete por haberlas superado.', 'Hoy, antes de dormir, apaga una preocupación.', 'Durante tres días, crea un ritual de descanso.',
    'Respira profundo diciendo: “Sobreviví a mis miedos”.', 'Antes de dormir, di: “Entrego mis cargas al descanso”.', 'Cada noche, repite: “Merezco paz”.',
    'No estás hecho para vivir en vigilia eterna. Suelta tus pesadillas y vuelve a casa.'
),
-- 26: LA BANSHEE
(
    'monsters-banshee', 'monsters', 'La Banshee', 'monsters', 
    'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1000&auto=format&fit=crop',
    'Hubo una pérdida emocional profunda que te enseñó la fragilidad de los vínculos humanos.',
    'Hay una emoción no llorada o despedida pendiente. Ignorarla solo prolongará la herida.',
    'Al permitirte llorar conscientemente, sanarás una parte antigua de tu corazón herido.',
    '¿Qué duelo pasado no terminaste de cerrar?', '¿Qué emoción necesita ser llorada ahora?', '¿Qué paz nacerá cuando sueltes ese dolor?',
    'Recuerda despedidas importantes y agradécete por seguir viviendo.', 'Hoy, expresa tristeza sin contenela.', 'Durante tres días, honra una pérdida.',
    'Coloca una mano sobre el corazón y di: “Sobreviví al dolor”.', 'Al llorar, repite: “Me permito sentir”.', 'Cada día, di: “Honro y libero”.',
    'El llanto es un lenguaje del alma. Despídete de lo que perdiste con ternura.'
),
-- 27: EL BARGHEST
(
    'monsters-barghest', 'monsters', 'El Barghest', 'monsters', 
    'https://images.unsplash.com/photo-1541014524410-67451319082f?q=80&w=1000&auto=format&fit=crop',
    'Hubo un peligro que te obligó a volverte feroz para protegerte, forjando tu instinto protector.',
    'Estás en modo vigilancia por algo que percibes como riesgo. Atención, no paranoia.',
    'Desarrollarás una protección más consciente, sabiendo cuándo luchar y cuándo descansar.',
    '¿Qué amenaza pasada despertó tu lado protector?', '¿De qué te estás defendiendo ahora?', '¿Qué paz nacerá al confiar más?',
    'Recuerda una vez que te defendiste bien y agradécete.', 'Hoy, distingue entre peligro real e imaginado.', 'Durante tres días, relaja tu vigilancia.',
    'Respira profundo diciendo: “Supe protegerme”.', 'Al notar tensión, di: “Ahora estoy a salvo”.', 'Cada día, di: “Confío en mi guardia interior”.',
    'Tu instinto guardián te salvó, pero permítete bajar la guardia cuando ya no hay batalla.'
),
-- 28: EL ANKOU
(
    'monsters-ankou', 'monsters', 'El Ankou', 'monsters', 
    'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop',
    'Viviste un final importante que marcó el cierre definitivo de una etapa vital de tu historia.',
    'Estás ante un ciclo que se está cerrando ahora. Aceptarlo es parte del tránsito natural.',
    'Tras este final llegará una transformación sarena y necesaria para tu evolución.',
    '¿Qué final pasado te transformó?', '¿Qué ciclo está terminando ahora?', '¿Qué renacer nacerá de este cierre?',
    'Recuerda un final y agradécete por haber seguido adelante.', 'Despídete hoy de algo que termina.', 'Durante tres días, honra el nuevo comienzo.',
    'Exhala diciendo: “Cerré y seguí”.', 'Di en voz baja: “Acepto este final”.', 'Cada día, di: “Confío en el tránsito”.',
    'La muerte muchas veces es cambio. Cada final es una puerta hacia una vida más verdadera.'
),
-- 29: EL NAHUAL
(
    'monsters-nahual', 'monsters', 'El Nahual', 'monsters', 
    'https://images.unsplash.com/photo-1577493322601-3ae1f35c7d67?q=80&w=1000&auto=format&fit=crop',
    'Hubo una doble vida o una máscara que tuviste que sostener para protegerte en el pasado.',
    'Estás mostrando solo una parte de ti. Hay algo auténtico que aún escondes por miedo o hábito.',
    'Integrarás tus identidades ocultas, siendo mucho más libre al mostrarte tal cual eres.',
    '¿Qué parte de ti ocultaste para sobrevivir?', '¿Qué estás escondiendo ahora?', '¿Qué libertad nacerá al mostrarte?',
    'Recuerda una máscara pasada y agradécete por protegerte.', 'Hoy, muestra una parte auténtica de ti.', 'Durante tres días, actúa desde tu verdad.',
    'Respira diciendo: “Me protegí”.', 'Al mostrarte, repite: “Me revelo con amor”.', 'Cada día, di: “Soy uno conmigo”.',
    'No naciste para vivir dividido. Tu poder deja de fragmentarse cuando te habitas completo.'
),
-- 30: EL HOMBRE POLILLA
(
    'monsters-mothman', 'monsters', 'El Hombre Polilla', 'monsters', 
    'https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop',
    'Hubo señales que ignoraste antes de un cambio importante que marcó un hito en tu vida.',
    'Estás recibiendo advertencias sutiles ahora mismo. Tu sensibilidad está aumentada por una razón.',
    'Reconocerás a tiempo una señal clave que cambiará tu rumbo de forma decisiva muy pronto.',
    '¿Qué señal pasada no supiste escuchar?', '¿Qué presagio estás percibiendo ahora?', '¿Qué cambio se avecina en tu vida?',
    'Recuerda una advertencia ignorada y agradécete por haber aprendido.', 'Hoy, presta atención especial a una señal pequeña.', 'Durante tres días, anota una intuición diaria.',
    'Respira diciendo: “Aprendí de las señales”.', 'Al notar una intuición, repite: “Escucho el aviso”.', 'Cada día, di: “Confío en los presagios”.',
    'La vida te avisa antes de los grandes cambios para prepararte. Escucha los susurros del destino.'
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
