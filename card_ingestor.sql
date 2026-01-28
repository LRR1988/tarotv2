-- PLANTILLA DE INGESTA MASIVA (EJEMPLO PARA EL MAZO DE NATURALEZA)
-- Copia y pega esto en el SQL Editor de Supabase cuando tengas los datos de las 30 cartas.

INSERT INTO cards (
    id, deck_id, name, type, image,
    interpretation_past, interpretation_present, interpretation_future,
    question_past, question_present, question_future,
    challenge_past, challenge_present, challenge_future,
    ritual_past, ritual_present, ritual_future,
    invitation
) VALUES 
-- CARTA 1
(
    'nature-1', -- ID único (slug-numero)
    'nature',   -- ID del mazo
    'El Río',   -- Nombre
    'nature',   -- Tipo
    'https://images.unsplash.com/photo-1437482012496-103b1ca4f678?q=80&w=1000&auto=format&fit=crop',
    
    -- Interpretaciones
    'Tus aguas pasadas tallaron el cauce que hoy habitas.', -- Pasado
    'El Río te enseña a fluir alrededor de obstáculos.',    -- Presente
    'Nuevas corrientes te llevarán a océanos desconocidos.', -- Futuro
    
    -- Preguntas
    '¿Qué antigua resistencia lograste disolver?', -- Pasado
    '¿Qué obstáculo podrías rodear hoy?',          -- Presente
    '¿Qué nuevas direcciones estás permitiendo?',  -- Futuro
    
    -- Desafíos (Acción)
    'Honra una lección aprendida en crisis.',      -- Pasado
    'Cambia tu rutina para probar fluidez.',       -- Presente
    'Prepara un plan con flexibilidad.',           -- Futuro
    
    -- Rituales
    'Vierte agua vieja en una planta.',            -- Pasado
    'Siente el agua en tus manos.',                -- Presente
    'Escribe un deseo y déjalo flotar.',           -- Futuro
    
    '¿Hacia dónde fluye tu corazón hoy? 💧'         -- Invitación (General)
),

-- CARTA 2
(
    'nature-2',
    'nature',
    'El Roble',
    'nature',
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop',
    'La fuerza de ayer es el tronco sólido de hoy.',
    'La fuerza no siempre es movimiento. Crece en silencio.',
    'Tus ramas darán sombra a las generaciones futuras.',
    '¿Qué raíces profundizaste en las tormentas?',
    '¿Priorizas tus raíces sobre tus ramas?',
    '¿Qué legado de estabilidad estás construyendo?',
    'Visita un lugar que te recuerde tus orígenes.',
    'Pasa tiempo en silencio sin producir nada.',
    'Planta algo que tarde años en madurar.',
    'Entierra un viejo peso emocional.',
    'Toca la tierra o un árbol para anclarte.',
    'Visualiza tu crecimiento lento y seguro.',
    '¿Qué tan profundas son tus raíces hoy? 🌳'
)
-- ... Repetir hasta las 30 cartas
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
