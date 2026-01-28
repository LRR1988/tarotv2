-- INGESTA DE CARTAS: LOTE 3 (NATURALEZA)
-- Cartas: La Semilla, El Bosque, La Tormenta

INSERT INTO cards (
    id, deck_id, name, type, image,
    interpretation_past, interpretation_present, interpretation_future,
    question_past, question_present, question_future,
    challenge_past, challenge_present, challenge_future,
    ritual_past, ritual_present, ritual_future,
    invitation
) VALUES 
-- CARTA 5: LA SEMILLA
(
    'nature-semilla', 'nature', 'La Semilla', 'nature', 
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop',
    'Una pequeña decisión que tomaste casi sin darle importancia terminó teniendo un impacto profundo en tu vida. En aquel momento no podías ver su alcance, pero hoy esa elección sigue dando frutos silenciosos.',
    'Estás en un punto fértil. Hay una idea, un vínculo o una intención que puede crecer si le das atención constante. No necesita perfección; necesita presencia.',
    'Lo que siembres ahora definirá tu próximo ciclo vital. No se trata de resultados inmediatos, sino de comprometerte con un proceso que madurará a su tiempo.',
    '¿Qué pequeña elección pasada terminó cambiando más de lo que imaginabas?',
    '¿Qué idea o intención merece ahora tu cuidado diario?',
    '¿Qué quieres ver crecer dentro de un año?',
    'Recuerda conscientemente una decisión pasada que hoy agradeces y nómbrala en voz alta.',
    'Durante tres días, dedica cinco minutos diarios a cuidar algo concreto (una planta, una relación, una tarea pendiente).',
    'Elige una intención futura y repítela cada mañana durante una semana.',
    'Coloca tu mano sobre el corazón al nombrar esa decisión y respira profundo tres veces.',
    'Al cuidar aquello que elegiste, di en silencio: “Estoy alimentando lo que importa”.',
    'Mira al cielo o por una ventana y repite tu intención una vez más.',
    'Nada grande empieza grande.'
),
-- CARTA 6: EL BOSQUE
(
    'nature-bosque', 'nature', 'El Bosque', 'nature', 
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    'Hubo una etapa en tu vida en el que no tenías respuestas claras. Te movías entre dudas, miedos y señales confusas. Aun así, seguiste avanzando. Ese periodo te enseñó a confiar más en tu intuición que en la certeza.',
    'Estás explorando una fase incierta pero rica en aprendizajes. No todo tiene que entenderse ahora. Algunas verdades solo aparecen cuando dejas de buscarlas con ansiedad.',
    'Salirás de esta etapa con una comprensión más profunda de ti mismo. Lo que hoy parece desorden será mañana una estructura interna más sabia.',
    '¿Qué confusión pasada terminó enseñándote algo valioso?',
    '¿Qué estás descubriendo de ti en esta etapa incierta?',
    '¿Qué claridad interior estás empezando a construir?',
    'Recuerda una época de confusión y nombra en voz alta una lección que surgió de ella.',
    'Dedica diez minutos hoy a estar en silencio sin distracciones.',
    'Elige una pregunta importante y convive con ella durante tres días sin buscar respuesta.',
    'Cierra los ojos y toca el suelo o una superficie natural mientras nombras tu lección.',
    'Enciende una vela o una luz suave durante tu momento de silencio.',
    'Antes de dormir, repite tu pregunta una vez y deja que repose.',
    'No temas perderte. Ahí nacen las respuestas.'
),
-- CARTA 7: LA TORMENTA
(
    'nature-tormenta', 'nature', 'La Tormenta', 'nature', 
    'https://images.unsplash.com/photo-1456348830199-698e6c46957a?q=80&w=1000&auto=format&fit=crop',
    'Atravesaste una crisis que removió estructuras que creías inamovibles. Aunque fue caótica y dolorosa, limpió capas de tu vida que ya no tenían sentido.',
    'Estás en medio de una tensión emocional o vital que no puedes seguir evitando. Resistirte solo prolongará el desgaste. Afrontarla ahora te dará alivio.',
    'Tras esta tormenta llegará una claridad que no habrías alcanzado sin ella. Lo que hoy parece destrucción será mañana espacio libre.',
    '¿Qué crisis pasada terminó liberándote de algo que ya no necesitabas?',
    '¿Qué conflicto estás posponiendo enfrentar?',
    '¿Qué espacio nuevo se abrirá cuando esta tensión termine?',
    'Recuerda una crisis pasada y nombra en voz alta qué ganaste gracias a ella.',
    'Haz hoy una acción concreta para enfrentar un conflicto pendiente (una conversación, un mensaje, una decisión).',
    'Después de resolver algo tenso, permítete un momento consciente de descanso.',
    'Respira hondo tres veces imaginando que sueltas una carga.',
    'Después de tu acción valiente, lávate las manos como símbolo de liberación.',
    'Siéntate en silencio dos minutos agradeciendo el espacio creado.',
    'Después de toda tormenta, el aire es más limpio.'
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
