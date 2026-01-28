-- Ingest script for Tarot Maestro: Major Arcana (7-21)

INSERT INTO cards (id, deck_id, name, type, image, card_type, number, interpretation_past, interpretation_present, interpretation_future, question_past, question_present, question_future, challenge_past, challenge_present, challenge_future, ritual_past, ritual_present, ritual_future, invitation)
VALUES 
('tarot_6_enamorados', 'tarot_master', 'Los Enamorados', 'vínculo', 'https://images.unsplash.com/photo-1518131336184-783df8e762b6?w=800&q=80', 'major', 6, 
'La encrucijada que definió tu corazón.', 'Momento de elección consciente y alineación.', 'Encontrarás la armonía que buscas.', 
'¿Qué elegiste por amor?', '¿Qué valores guían tu decisión hoy?', '¿Qué unión estás llamando?', 
'No dudes por miedo.', 'Elige desde tu verdad.', 'Confía en tu afinidad.', 
'Pon dos cuarzos juntos.', 'Escribe dos caminos y elige uno.', 'Mírate al espejo y sonríe.', 'Comparte una elección difícil que tomaste.'),

('tarot_7_carro', 'tarot_master', 'El Carro', 'avance', 'https://images.unsplash.com/photo-1534774592507-48888037f95b?w=800&q=80', 'major', 7, 
'La victoria que lograste con determinación.', 'Toma las riendas y avanza con propósito.', 'El éxito está asegurado si mantienes el rumbo.', 
'¿Qué obstáculos superaste ayer?', '¿Hacia dónde diriges tu voluntad ahora?', '¿Cuál es tu próximo destino?', 
'No pierdas el control.', 'Mantén la dirección firme.', 'Domina tus impulsos opuestos.', 
'Camina con paso firme 10 minutos.', 'Dibuja una flecha hacia arriba.', 'Limpia los cristales de tu casa.', '¿Qué victoria celebras hoy?'),

('tarot_8_justicia', 'tarot_master', 'La Justicia', 'equilibrio', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80', 'major', 8, 
'La verdad que salió a la luz.', 'Actúa con objetividad, rigor y equilibrio.', 'Se hará justicia en tu situación.', 
'¿Qué peso soltaste al ser justo?', '¿Qué dice la balanza de tus actos hoy?', '¿Qué equilibrio necesitas pactar?', 
'Evita el juicio severo.', 'Sé honesto contigo mismo.', 'Busca la equidad.', 
'Haz una lista de pros y contras.', 'Escribe una carta de perdón.', 'Mantén el orden en tu mesa.', 'Reflexiona sobre lo que es justo para ti.'),

('tarot_9_ermitaño', 'tarot_master', 'El Ermitaño', 'sabiduría', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', 'major', 9, 
'El tiempo que pasaste en soledad fértil.', 'Retírate hacia adentro para encontrar tu luz.', 'Hallarás la respuesta en la introspección.', 
'¿Qué aprendiste en el silencio?', '¿Tu luz interna está encendida?', '¿Qué guía estás siguiendo?', 
'No te aisles por amargura.', 'Camina tu propio sendero.', 'Ten paciencia con el proceso.', 
'Apaga todas las luces y respira.', 'Escribe en tu diario en silencio.', 'Camina despacio por la casa.', 'Comparte una verdad que encontraste solo.'),

('tarot_10_rueda', 'tarot_master', 'La Rueda', 'cambio', 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80', 'major', 10, 
'El giro del destino que no esperabas.', 'Todo cambia, acepta el movimiento cíclico.', 'Un nuevo ciclo de fortuna comienza.', 
'¿Qué ciclo terminaste el año pasado?', '¿En qué punto de la rueda estás hoy?', '¿Qué cambio estás provocando?', 
'No te resistas al giro.', 'Acepta lo inevitable.', 'Fluye con el ritmo de la vida.', 
'Gira sobre ti mismo tres veces.', 'Mueve un mueble de lugar.', 'Observa el flujo del agua.', '¿Qué quieres que cambie hoy?'),

('tarot_11_fuerza', 'tarot_master', 'La Fuerza', 'dominio', 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80', 'major', 11, 
'Cuando dominaste tus miedos más profundos.', 'Usa la compasión y la suavidad, no la fuerza bruta.', 'Tu coraje te llevará a la victoria.', 
'¿A qué fiera domesticaste en tu pasado?', '¿Qué pasión necesita tu caricia hoy?', '¿Dónde reside tu verdadero poder?', 
'No caigas en la tiranía.', 'Sé paciente con tu instinto.', 'Confía en tu resistencia suave.', 
'Acaricia a un animal o planta.', 'Rugí con fuerza en privado.', 'Siente los latidos de tu corazón.', '¿Cuál es tu mayor fortaleza interna?'),

('tarot_12_colgado', 'tarot_master', 'El Colgado', 'pausa', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80', 'major', 12, 
'El sacrificio que valió la pena.', 'Cambia tu perspectiva y acepta la espera.', 'La iluminación llegará tras el reposo.', 
'¿Qué dejaste de ver de la forma habitual?', '¿Qué pasaría si miras todo del revés?', '¿A qué te estás rindiendo?', 
'No te estanques por pereza.', 'Acepta la inmovilidad temporal.', 'Sacrifica lo viejo por lo nuevo.', 
'Pon las piernas en la pared.', 'Mira un cuadro de cabeza.', 'Quédate quieto 2 minutos.', '¿Qué paradigma estás cuestionando?'),

('tarot_13_muerte', 'tarot_master', 'La Muerte', 'transmutación', 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d1?w=800&q=80', 'major', 13, 
'El final necesario que te liberó.', 'Corta con lo viejo para que nazca lo nuevo.', 'Un renacimiento profundo es inminente.', 
'¿Qué parte de ti murió para que hoy seas esto?', '¿Qué necesitas soltar definitivamente?', '¿Qué está naciendo de las cenizas?', 
'No te aferres al pasado.', 'Permite que lo marchito caiga.', 'Transforma tu dolor en abono.', 
'Tira algo viejo que no uses.', 'Quema un papel con un peso escrito.', 'Corta una rama seca.', '¿A qué le dices adiós hoy?'),

('tarot_14_templanza', 'tarot_master', 'La Templanza', 'alquimia', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', 'major', 14, 
'La sanación que integró tus partes.', 'Mezcla tus opuestos con paciencia y arte.', 'El equilibrio emocional traerá paz.', 
'¿Cómo encontraste la calma tras la tormenta?', '¿Qué aguas estás trasvasando hoy?', '¿Cuál es tu medicina interna?', 
'Evita los extremos.', 'Busca el punto medio.', 'Ten paciencia infinita.', 
'Pasa agua de un vaso a otro 7 veces.', 'Bebe una infusión lentamente.', 'Respira alternando fosas nasales.', '¿Qué partes de ti necesitan reconciliarse?'),

('tarot_15_diablo', 'tarot_master', 'El Diablo', 'atadura', 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80', 'major', 15, 
'La sombra que te atrapó en el pasado.', 'Reconoce tus deseos, adicciones y cadenas.', 'Tu sombra tiene un mensaje de poder oculto.', 
'¿De qué cadena te liberaste antes?', '¿A qué deseo le entregas tu poder hoy?', '¿Qué fuego te consume o te ilumina?', 
'No te dejes engañar por el ego.', 'Mira tu sombra a los ojos.', 'Usa tu energía creativa.', 
'Dibuja un laberinto.', 'Baila con intensidad.', 'Grita tus secretos al aire.', '¿Qué atadura estás rompiendo hoy?'),

('tarot_16_torre', 'tarot_master', 'La Torre', 'ruptura', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', 'major', 16, 
'El rayo que destruyó tus falsas verdades.', 'Liberación repentina de lo que no era real.', 'Un cambio brusco traerá claridad final.', 
'¿Qué estructura se derrumbó antes?', '¿Qué verdad te está sacudiendo hoy?', '¿Qué estás reconstruyendo desde cero?', 
'No luches contra el cambio.', 'Deja que caiga lo que no tiene base.', 'Acepta la crisis como liberación.', 
'Rompe algo viejo con intención.', 'Ordena un cajón caótico.', 'Observa una tormenta.', '¿Qué falsa seguridad estás soltando?'),

('tarot_17_estrella', 'tarot_master', 'La Estrella', 'esperanza', 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?w=800&q=80', 'major', 17, 
'La guía que te mostró el camino en la noche.', 'Confía en tu estrella y entrégate al cosmos.', 'La inspiración y la paz te envuelven.', 
'¿Quién fue tu luz en la oscuridad?', '¿Qué te hace sentir infinito hoy?', '¿Qué sueño estás regando?', 
'No te pierdas en fantasías.', 'Mantén la fe desnuda.', 'Comparte tu brillo sin miedo.', 
'Observa las estrellas de noche.', 'Vierte agua fresca en la tierra.', 'Mira tu reflejo en el agua.', '¿En qué crees con todo tu ser?'),

('tarot_18_luna', 'tarot_master', 'La Luna', 'misterio', 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80', 'major', 18, 
'El laberinto de miedos que atravesaste.', 'Explora tu inconsciente y tus sueños.', 'Confía en tu percepción, más allá de la vista.', 
'¿Qué sombras te persiguieron antes?', '¿Qué te dice tu instinto en la penumbra?', '¿Hacia qué profundidad te diriges?', 
'No te pierdas en el engaño.', 'Escucha a tus sueños.', 'Acepta lo cíclico.', 
'Báñate a la luz de la luna.', 'Escribe tus sueños al despertar.', 'Aulla si lo necesitas.', '¿Qué secreto susurra tu alma?'),

('tarot_19_sol', 'tarot_master', 'El Sol', 'éxito', 'https://images.unsplash.com/photo-1470252649358-969e0075d947?w=800&q=80', 'major', 19, 
'La alegría radiante que compartiste.', 'Brilla con fuerza, claridad y vitalidad.', 'La victoria y la felicidad son tuyas.', 
'¿Cuál fue tu día más solar?', '¿Qué te hace irradiar hoy?', '¿A quién iluminas con tu presencia?', 
'No te quemes por orgullo.', 'Comparte tu calidez.', 'Disfruta de la vida simple.', 
'Toma el sol 5 minutos.', 'Viste algo de color amarillo.', 'Aplaude con fuerza.', '¿Qué te hace brillar hoy?'),

('tarot_20_juicio', 'tarot_master', 'El Juicio', 'llamado', 'https://images.unsplash.com/photo-1470252649358-969e0075d947?w=800&q=80', 'major', 20, 
'El despertar que cambió tu vida.', 'Es momento de perdón, redención y llamado.', 'Una nueva etapa de vida comienza ahora.', 
'¿A qué llamado respondiste antes?', '¿Qué parte de ti está despertando hoy?', '¿Qué juicio estás soltando?', 
'No ignores la llamada.', 'Perdónate profundamente.', 'Acepta tu propósito.', 
'Toca una campana o haz sonar un cuenco.', 'Haz una declaración de intenciones.', 'Lávate la cara con agua fría.', '¿A qué te llama la vida hoy?'),

('tarot_21_mundo', 'tarot_master', 'El Mundo', 'plenitud', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', 'major', 21, 
'La etapa que cerraste con éxito total.', 'Has llegado a la meta, todo está integrado.', 'Plenitud, realización y expansión global.', 
'¿Qué gran logro celebraste antes?', '¿En qué danza estás participando hoy?', '¿Hacia dónde se expande tu mundo?', 
'No te detengas, sigue viajando.', 'Celebra tu completitud.', 'Siéntete parte del todo.', 
'Dibuja un círculo y ponte en el centro.', 'Mira un mapa del mundo.', 'Baila una canción que ames.', '¿Qué significa para ti estar completo?');
