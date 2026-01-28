-- ============================================
-- LIMPIEZA DE MENSAJES DEL CHAT
-- ============================================
-- Este archivo contiene varias opciones para limpiar mensajes

-- ============================================
-- OPCIÓN 1: Borrar TODOS los mensajes
-- ============================================
-- ⚠️ CUIDADO: Esto eliminará TODOS los mensajes de TODOS los mazos
-- Ejecuta esto solo si quieres resetear completamente el chat

DELETE FROM messages;

-- Verificar que se borraron todos
SELECT COUNT(*) as total_mensajes_restantes FROM messages;


-- ============================================
-- OPCIÓN 2: Borrar mensajes de un mazo específico
-- ============================================
-- Reemplaza 'nature' con el ID del mazo que quieras limpiar
-- Opciones: 'nature', 'monsters', 'trades', 'emotions'

DELETE FROM messages 
WHERE deck_id = 'nature';

-- Verificar mensajes restantes por mazo
SELECT deck_id, COUNT(*) as total_mensajes 
FROM messages 
GROUP BY deck_id;


-- ============================================
-- OPCIÓN 3: Borrar mensajes antiguos (más de X días)
-- ============================================
-- Borra mensajes con más de 7 días de antigüedad
-- Cambia '7 days' por el período que prefieras: '1 day', '30 days', etc.

DELETE FROM messages 
WHERE created_at < NOW() - INTERVAL '7 days';

-- Ver cuántos mensajes quedan
SELECT 
  deck_id,
  COUNT(*) as total_mensajes,
  MAX(created_at) as mensaje_mas_reciente
FROM messages 
GROUP BY deck_id;


-- ============================================
-- OPCIÓN 4: Borrar mensajes de días anteriores (dejar solo hoy)
-- ============================================
-- Esto borra todo excepto los mensajes de hoy
-- Útil para limpiar manualmente lo que el sistema debería limpiar automáticamente

DELETE FROM messages 
WHERE DATE(created_at) < CURRENT_DATE;

-- Verificar que solo quedan mensajes de hoy
SELECT 
  deck_id,
  COUNT(*) as mensajes_hoy,
  MIN(created_at) as primer_mensaje,
  MAX(created_at) as ultimo_mensaje
FROM messages 
GROUP BY deck_id;


-- ============================================
-- OPCIÓN 5: Borrar mensajes de un usuario específico
-- ============================================
-- Útil si detectas spam de un usuario concreto
-- Reemplaza 'nombre_usuario' con el nombre exacto

DELETE FROM messages 
WHERE user_name = 'nombre_usuario';


-- ============================================
-- OPCIÓN 6: Borrar mensajes que contengan ciertas palabras
-- ============================================
-- Útil para limpiar spam que pasó los filtros

DELETE FROM messages 
WHERE content ILIKE '%spam%' 
   OR content ILIKE '%viagra%'
   OR content ILIKE '%casino%';

-- Ver si quedan mensajes sospechosos
SELECT * FROM messages 
WHERE content ILIKE '%http%' 
   OR content ILIKE '%www.%'
LIMIT 10;


-- ============================================
-- OPCIÓN 7: Mantener solo los últimos N mensajes por mazo
-- ============================================
-- Esto mantiene los 100 mensajes más recientes de cada mazo
-- y borra el resto

DELETE FROM messages 
WHERE id NOT IN (
  SELECT id 
  FROM (
    SELECT id, 
           ROW_NUMBER() OVER (PARTITION BY deck_id ORDER BY created_at DESC) as rn
    FROM messages
  ) ranked
  WHERE rn <= 100
);

-- Verificar cuántos mensajes quedan por mazo
SELECT deck_id, COUNT(*) FROM messages GROUP BY deck_id;


-- ============================================
-- ESTADÍSTICAS ÚTILES (solo consulta, no borra nada)
-- ============================================

-- Ver total de mensajes por mazo
SELECT 
  deck_id,
  COUNT(*) as total_mensajes,
  MIN(created_at) as primer_mensaje,
  MAX(created_at) as ultimo_mensaje
FROM messages 
GROUP BY deck_id 
ORDER BY total_mensajes DESC;

-- Ver usuarios más activos
SELECT 
  user_name,
  COUNT(*) as total_mensajes,
  MAX(created_at) as ultimo_mensaje
FROM messages 
GROUP BY user_name 
ORDER BY total_mensajes DESC 
LIMIT 20;

-- Ver mensajes por día
SELECT 
  DATE(created_at) as fecha,
  COUNT(*) as mensajes
FROM messages 
GROUP BY DATE(created_at) 
ORDER BY fecha DESC 
LIMIT 30;
