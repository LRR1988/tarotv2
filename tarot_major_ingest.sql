-- Ingest script for Tarot Maestro: Major Arcana (22 cards)

INSERT INTO cards (id, deck_id, name, type, image, card_type, number, interpretation_past, interpretation_present, interpretation_future, question_past, question_present, question_future, challenge_past, challenge_present, challenge_future, ritual_past, ritual_present, ritual_future, invitation)
VALUES 
('tarot_0_loco', 'tarot_master', 'El Loco', 'espíritu', 'https://images.unsplash.com/photo-1590013330452-944a30e87900?w=800&q=80', 'major', 0, 
'Un salto al vacío del que aprendiste.', 'Momento de libertad absoluta y nuevos comienzos.', 'Una oportunidad inesperada se vislumbra.', 
'¿Qué dejaste atrás en aquel entonces?', '¿A qué le temes si saltas hoy?', '¿Qué aventura estás gestando?', 
'Evita la imprudencia.', 'Acepta la incertidumbre.', 'Prepárate para lo desconocido.', 
'Mira una foto antigua y ríe.', 'Cubre tus ojos y siente el vacío.', 'Observa el horizonte al amanecer.', 'Comparte tu momento de mayor locura.'),

('tarot_1_mago', 'tarot_master', 'El Mago', 'acción', 'https://images.unsplash.com/photo-1601050638911-c30207efda6d?w=800&q=80', 'major', 1, 
'Cuando tomaste las herramientas por primera vez.', 'Tienes todos los recursos necesarios para manifestar.', 'La maestría está en camino.', 
'¿Cuál fue tu primera gran creación?', '¿Sabes qué herramientas tienes en la mesa?', '¿Qué deseas manifestar?', 
'No malgastes tu voluntad.', 'Enfoca tu energía.', 'Confía en tu habilidad.', 
'Organiza tu espacio de trabajo.', 'Enciende una vela y visualiza tu meta.', 'Dibuja un ocho infinito.', '¿Qué vas a crear hoy?'),

('tarot_2_sacerdotisa', 'tarot_master', 'La Sacerdotisa', 'conciencia', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', 'major', 2, 
'Un secreto que guardaste y te protegió.', 'Escucha tu intuición profunda en el silencio.', 'Un misterio será revelado pronto.', 
'¿Qué susurros ignoraste en el pasado?', '¿Qué te dice tu voz interior ahora?', '¿Hacia qué misterio te diriges?', 
'No reveles tus planes todavía.', 'Confía en lo que no se ve.', 'Mantén el silencio fértil.', 
'Lee un fragmento de un libro sagrado.', 'Medita en la oscuridad 5 minutos.', 'Bebe agua pensando en un sueño.', 'Comparte un sueño que te haya marcado.'),

('tarot_3_emperatriz', 'tarot_master', 'La Emperatriz', 'fluir', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', 'major', 3, 
'La abundancia que gestaste con amor.', 'Momento de creatividad, placer y nutrición.', 'La cosecha será generosa.', 
'¿Qué cuidaste tanto que floreció?', '¿Cómo estás nutriendo tu cuerpo hoy?', '¿Qué quieres ver crecer?', 
'No seas posesivo con tu creación.', 'Disfruta de la belleza sin culpa.', 'Confía en la fertilidad de la vida.', 
'Toca la tierra con tus manos.', 'Date un baño aromático.', 'Regala una flor.', '¿Qué estás gestando en tu alma?'),

('tarot_4_emperador', 'tarot_master', 'El Emperador', 'poder', 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80', 'major', 4, 
'La autoridad que tuviste que ejercer.', 'Es tiempo de estructura, orden y límites claros.', 'Lograrás consolidar tus planes.', 
'¿Qué cimientos construiste para tu vida?', '¿Qué necesita orden inmediato en tu mundo?', '¿Qué imperio estás construyendo?', 
'Cuidado con la rigidez excesiva.', 'Define tu territorio.', 'Ejerce tu poder con justicia.', 
'Dibuja un cuadrado y ponle nombre.', 'Escribe una lista de metas concretas.', 'Siéntate con la espalda recta.', 'Define tus propios límites.'),

('tarot_5_hierofante', 'tarot_master', 'El Hierofante', 'maestría', 'https://images.unsplash.com/photo-1543315582-76348c3f4e2f?w=800&q=80', 'major', 5, 
'La tradición que te dio seguridad.', 'Busca guía en la sabiduría ancestral o el rito.', 'Una lección importante está por llegar.', 
'¿Quién fue tu gran maestro?', '¿Qué ritual da sentido a tu presente?', '¿Qué enseñanza deseas legar?', 
'No te pierdas en el dogma.', 'Escucha al consejo sabio.', 'Mantén la fe en los procesos.', 
'Limpia un objeto valioso para ti.', 'Recuerda una enseñanza de un ancestro.', 'Visita un lugar con historia.', 'Comparte un consejo que te salvó.');

-- (Continúa con el resto de arcanos en lotes si es necesario, 
-- pero para este paso inicial insertamos los primeros 6 pilares)
