-- Semillas para los Mazos (Decks)
INSERT INTO decks (id, name, description, icon, is_active) VALUES
('nature', 'Oráculo de la Naturaleza', 'Sabiduría de los bosques, ríos y montañas.', 'Leaf', true),
('monsters', 'Bestiario Mítico', 'Enfréntate a tus sombras personificadas.', 'Skull', true),
('home', 'Oráculo del Hogar', 'La magia se oculta en lo cotidiano.', 'Home', false),
('trades', 'Oficios Perdidos', 'La maestría en el hacer y el propósito.', 'Hammer', true),
('times', 'Ciclos del Tiempo', 'Navega las estaciones del alma.', 'Watch', false),
('emotions', 'Espejo de Emociones', 'Explora el paisaje de tu mundo interno.', 'Heart', true)
ON CONFLICT (id) DO UPDATE SET
name = EXCLUDED.name,
description = EXCLUDED.description,
icon = EXCLUDED.icon,
is_active = EXCLUDED.is_active;

-- Semillas para las Cartas (Cards) con Interpretaciones Temporales
INSERT INTO cards (id, deck_id, name, type, image, interpretation_past, interpretation_present, interpretation_future, question, challenge, ritual, invitation) VALUES
-- Naturaleza
('nature-1', 'nature', 'El Río', 'nature', 'https://images.unsplash.com/photo-1437482012496-103b1ca4f678?q=80&w=1000&auto=format&fit=crop', 
'Mirando hacia atrás, el río te recuerda que cada obstáculo sorteado te ha dado la forma que tienes hoy.', 
'En tu presente, el río te enseña a fluir. No luches contra la corriente, encuentra la grieta por donde el agua siempre pasa.', 
'Como preparación para lo que viene, empieza a suavizar tus aristas; la fluidez será tu mayor aliada mañana.',
'¿Qué "piedra" en tu vida podrías rodear hoy en lugar de intentar moverla?', 'Escribe tu obstáculo en una pequeña piedra y llévala a una fuente de agua o simplemente déjala bajo el grifo.', 'Deja que el agua corra sobre la piedra y repite: "Elijo fluir".', '¿Qué palabra se llevó el río hoy? Cuéntame. 💧'),

('nature-2', 'nature', 'El Roble', 'nature', 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop', 
'Tus raíces pasadas son las que sostienen tu estructura actual; agradece la profundidad alcanzada en silencio.',
'Hoy no necesitas moverte con prisa. El Roble crece en silencio, nutriendo su centro antes de tocar el cielo.',
'Lo que plantas hoy en calma será la sombra bajo la que otros descansarán en el futuro.',
'¿Estás nutriendo tus raíces o solo te preocupas por las ramas?', 'Pasa cinco minutos con los pies descalzos sobre la tierra o toca la corteza de un árbol.', 'Cierra los ojos y visualiza raíces saliendo de tus pies hacia el centro de la tierra.', '¿Qué tan profundo llegaste hoy? 🌳'),

-- Monstruos
('monsters-1', 'monsters', 'El Fénix', 'monsters', 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1000&auto=format&fit=crop', 
'Aceptar las cenizas del pasado fue el sacrificio necesario para la luz que hoy empiezas a ver.',
'El fuego de hoy no viene a destruirte, sino a purificar lo que ya no te sirve para tu siguiente etapa.',
'De las brasas actuales surgirá una versión más brillante y ligera de ti mismo; mantén la fe en el proceso.',
'¿Qué parte de ti está lista para ser consumida por el fuego del cambio?', 'Escribe un hábito que quieras dejar en un papel y quémalo con cuidado.', 'Esparce las cenizas al viento y di: "De lo viejo, surge lo nuevo".', '¿Cómo se siente el calor del renacimiento? 🔥')
-- (Agregando solo algunas como ejemplo, el resto se cargarán con el ingestor)
ON CONFLICT (id) DO UPDATE SET
deck_id = EXCLUDED.deck_id,
name = EXCLUDED.name,
type = EXCLUDED.type,
image = EXCLUDED.image,
interpretation_past = EXCLUDED.interpretation_past,
interpretation_present = EXCLUDED.interpretation_present,
interpretation_future = EXCLUDED.interpretation_future,
question = EXCLUDED.question,
challenge = EXCLUDED.challenge,
ritual = EXCLUDED.ritual,
invitation = EXCLUDED.invitation;
