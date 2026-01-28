-- INGESTA DE CARTAS: LOTE 2 (NATURALEZA)
-- Cartas: El Árbol, La Montaña, El Viento

INSERT INTO cards (
    id, deck_id, name, type, image,
    interpretation_past, interpretation_present, interpretation_future,
    question_past, question_present, question_future,
    challenge_past, challenge_present, challenge_future,
    ritual_past, ritual_present, ritual_future,
    invitation
) VALUES 
-- CARTA 2: EL ÁRBOL
(
    'nature-arbol', 'nature', 'El Árbol', 'nature', 
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop', -- Placeholder: Sustituir por URL de Storage
    'Hubo un periodo en tu vida en el que tuviste que aprender a sostenerte sin apoyo externo. Como un árbol joven expuesto al viento, desarrollaste raíces internas más profundas de lo que parecía necesario en su momento. Esa etapa te dio una fortaleza silenciosa que hoy sigue siendo tu base.',
    'Estás en una fase de consolidación. No todo crecimiento es visible de inmediato. Ahora mismo, lo más importante ocurre bajo la superficie: hábitos, decisiones pequeñas, estructuras que estás reforzando. Este no es un tiempo de prisa, sino de afirmación.',
    'Se aproxima una expansión estable y sostenida. Si sigues cuidando lo esencial sin distraerte con atajos, tu vida tomará una forma más sólida, más alineada con quien realmente eres.',
    '¿Qué experiencia te obligó a madurar antes de lo que estabas preparado?',
    '¿Qué parte de tu vida necesita ahora estabilidad más que impulso?',
    '¿Qué estás construyendo hoy que sostendrá tu vida dentro de cinco años?',
    'Escribe una carta breve a tu “yo” del pasado agradeciéndole por haber resistido cuando todo parecía inestable.',
    'Durante siete días, refuerza conscientemente una rutina básica que sabes que te hace bien.',
    'Define una meta a largo plazo y da hoy un paso pequeño y concreto hacia ella.',
    'Dobla la carta que escribiste y colócala bajo una piedra o una planta, simbolizando tus raíces internas.',
    'Enciende una vela al iniciar tu rutina diaria y apágala al terminar, marcando tu compromiso con la constancia.',
    'Escribe el primer paso de tu meta en un papel y entiérralo en una maceta o jardín.',
    'Crecer no siempre es avanzar rápido. A veces es permanecer firme.'
),
-- CARTA 3: LA MONTAÑA
(
    'nature-montana', 'nature', 'La Montaña', 'nature', 
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop', -- Placeholder: Sustituir por URL de Storage
    'Hubo un desafío en tu vida que parecía demasiado grande para ti. Lo atravesaste con miedo, con dudas, con cansancio… pero lo atravesaste. Esa experiencia redefinió tu percepción de tus propios límites.',
    'Estás frente a un reto que exige constancia, no heroicidad. No se trata de hacerlo todo hoy, sino de subir un metro cada día. La impaciencia ahora sería tu mayor enemiga.',
    'Al coronar esta etapa, obtendrás una perspectiva que transformará tu rumbo. No solo habrás resuelto un problema: habrás cambiado tu manera de verte a ti mismo.',
    '¿Qué obstáculo superaste que hoy subestimas?',
    '¿Qué reto estás evitando afrontar por parecer demasiado grande?',
    '¿Qué logro cambiaría radicalmente tu visión de ti?',
    'Enumera tres victorias personales que rara vez reconoces.',
    'Divide un problema grande en tres pasos accionables y comienza hoy por el primero.',
    'Visualiza tu “cima” y escribe cómo se siente haber llegado.',
    'Lee en voz alta tus tres victorias y guarda el papel bajo una piedra.',
    'Coloca una piedra en tu escritorio como recordatorio diario del primer paso.',
    'Coloca el texto de tu visualización dentro de un libro o cuaderno especial.',
    'No todo reto se vence rápido. Algunos se honran con constancia.'
),
-- CARTA 4: EL VIENTO
(
    'nature-viento', 'nature', 'El Viento', 'nature', 
    'https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=1000&auto=format&fit=crop', -- Placeholder: Sustituir por URL de Storage
    'Cambios inesperados te obligaron a soltar planes que dabas por seguros. Aunque al principio sentiste pérdida o confusión, hoy puedes ver que esas rupturas abrieron caminos que antes no existían.',
    'Algo se está moviendo a tu alrededor aunque todavía no puedas nombrarlo con claridad. Estás en una antesala de cambio. Resistirte ahora solo retrasaría lo inevitable.',
    'Una nueva dirección emergerá si permaneces abierto a lo imprevisto. No será exactamente lo que imaginabas, pero será más honesta con tu evolución real.',
    '¿Qué cambio te incomodó pero terminó liberándote?',
    '¿Qué señales estás ignorando por miedo a cambiar?',
    '¿Qué posibilidad surgiría si aceptaras lo inesperado?',
    'Escribe qué ganaste al perder algo importante.',
    'Cambia conscientemente una rutina por un día.',
    'Di sí a una oportunidad inesperada esta semana.',
    'Quema o rompe el papel donde escribiste tu pérdida, simbolizando liberación.',
    'Al realizar tu nueva rutina, repite: “Acepto el cambio”.',
    'Escribe “Sí” en un papel y colócalo en tu cartera o móvil.',
    'No todo lo importante llega con ruido. Algunas cosas llegan como una brisa.'
)
ON CONFLICT (id) DO UPDATE SET
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
