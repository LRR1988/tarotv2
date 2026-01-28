-- INGESTA DE DATOS: MAZO NATURALEZA
-- CARTA: EL RÍO

INSERT INTO cards (
    id, deck_id, name, type, image,
    interpretation_past, interpretation_present, interpretation_future,
    question_past, question_present, question_future,
    challenge_past, challenge_present, challenge_future,
    ritual_past, ritual_present, ritual_future,
    invitation
) VALUES 
(
    'nature-rio',
    'nature',
    'El Río',
    'nature',
    'https://images.unsplash.com/photo-1437482012496-103b1ca4f678?q=80&w=1000&auto=format&fit=crop',
    
    -- Interpretaciones
    'Hubo un periodo en tu vida en el que aprendiste a adaptarte para sobrevivir. Como el río que encuentra su cauce entre rocas, desarrollaste resiliencia frente a circunstancias que no elegiste. Esa experiencia te dio una flexibilidad interna que hoy sigue sosteniéndote.',
    'Estás atravesando una etapa de movimiento y transición. Resistirte al cambio solo generará fricción innecesaria. Fluir no significa rendirse, sino actuar con inteligencia emocional, aceptando lo que no puedes controlar y enfocándote en lo que sí.',
    'Se aproxima una oportunidad que requerirá confianza en el proceso. Si permites que las cosas evolucionen de forma orgánica, llegarás a un lugar más fértil del que imaginas. La clave será no forzar los tiempos.',
    
    -- Preguntas
    '¿Qué experiencia pasada te enseñó a adaptarte, aunque en su momento no lo comprendieras?',
    '¿En qué área de tu vida estás luchando contra la corriente en lugar de fluir con la situación?',
    '¿Qué oportunidad futura podrías estar bloqueando por querer controlar demasiado el resultado?',
    
    -- Desafíos
    'Escribe tres aprendizajes clave que surgieron de una situación difícil de tu pasado. Reconoce cómo esos aprendizajes siguen influyendo en tus decisiones actuales.',
    'Durante las próximas 48 horas, acepta conscientemente un pequeño imprevisto sin intentar corregirlo ni justificarlo.',
    'Define una meta a medio plazo y comprométete a no tomar ninguna acción impulsiva sobre ella durante una semana.',
    
    -- Rituales
    'Enciende una vela. Recuerda una situación pasada que te fortaleció. Agradece en voz baja por la lección aprendida y apaga la vela con calma.',
    'Llena un vaso con agua. Obsérvalo durante un minuto en silencio. Respira profundamente tres veces y repite: "Confío en el proceso."',
    'Planta una semilla real o simbólica. Mientras lo haces, visualiza una intención futura y di: "Dejo que esto crezca a su debido tiempo."',
    
    -- Invitación
    'Permítete fluir. No todo requiere resistencia ni estrategia. A veces, avanzar es simplemente dejar de bloquear el curso natural de las cosas.'
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
