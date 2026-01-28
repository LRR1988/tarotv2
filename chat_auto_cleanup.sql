-- ============================================
-- LIMPIEZA AUTOMÁTICA DE MENSAJES
-- ============================================
-- Este script configura una función que se ejecuta automáticamente
-- cada día a medianoche para borrar mensajes antiguos

-- ============================================
-- PASO 1: Crear la función de limpieza
-- ============================================

CREATE OR REPLACE FUNCTION cleanup_old_messages()
RETURNS void AS $$
BEGIN
  -- Borra mensajes con más de 1 día de antigüedad
  DELETE FROM messages 
  WHERE created_at < NOW() - INTERVAL '1 day';
  
  -- Opcional: Log de cuántos se borraron
  RAISE NOTICE 'Mensajes antiguos eliminados correctamente';
END;
$$ LANGUAGE plpgsql;


-- ============================================
-- PASO 2: Programar la ejecución automática
-- ============================================
-- NOTA: Supabase Free Tier NO incluye pg_cron por defecto
-- Si tienes plan Pro, descomenta las siguientes líneas:

/*
-- Habilitar la extensión pg_cron
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Programar limpieza diaria a las 00:00 UTC
SELECT cron.schedule(
  'cleanup-old-messages',           -- nombre del job
  '0 0 * * *',                      -- cron: cada día a medianoche
  'SELECT cleanup_old_messages();'  -- función a ejecutar
);

-- Ver jobs programados
SELECT * FROM cron.job;

-- Para CANCELAR la limpieza automática (si la necesitas):
-- SELECT cron.unschedule('cleanup-old-messages');
*/


-- ============================================
-- ALTERNATIVA: Limpieza manual programada
-- ============================================
-- Si no tienes pg_cron, puedes ejecutar esto manualmente
-- cada semana o cuando veas que hay muchos mensajes

-- Ejecuta esta query cuando quieras limpiar:
SELECT cleanup_old_messages();


-- ============================================
-- VERIFICACIÓN
-- ============================================

-- Ver cuántos mensajes hay actualmente
SELECT 
  deck_id,
  COUNT(*) as total,
  MAX(created_at) as mas_reciente
FROM messages 
GROUP BY deck_id;

-- Ver el mensaje más antiguo que existe
SELECT MIN(created_at) as mensaje_mas_antiguo FROM messages;
