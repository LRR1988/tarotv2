-- 1. Crear la tabla de mensajes
CREATE TABLE IF NOT EXISTS public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deck_id TEXT REFERENCES decks(id) ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL,
    user_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Habilitar seguridad (RLS)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 3. Permitir acceso público (lectura y escritura para el chat anónimo)
CREATE POLICY "Allow public read access on messages" ON messages FOR SELECT USING (true);
CREATE POLICY "Allow public insert access on messages" ON messages FOR INSERT WITH CHECK (true);

-- 4. Habilitar Tiempo Real (Realtime) para que los mensajes lleguen al instante
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'messages'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE messages;
  END IF;
END $$;

-- 5. (Opcional) Función para limpiar mensajes antiguos manualmente si se desea
-- SELECT delete_old_messages();
CREATE OR REPLACE FUNCTION delete_old_messages() RETURNS void AS $$
BEGIN
  DELETE FROM messages WHERE created_at < current_date;
END;
$$ LANGUAGE plpgsql;
