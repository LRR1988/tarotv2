-- Create decks table
CREATE TABLE IF NOT EXISTS decks (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true, -- Permite ocultar/mostrar mazos
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create cards table with Full Temporal Personalization
CREATE TABLE IF NOT EXISTS cards (
    id TEXT PRIMARY KEY,
    deck_id TEXT REFERENCES decks(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    image TEXT NOT NULL,
    
    -- Temporal Interpretations
    interpretation_past TEXT NOT NULL,
    interpretation_present TEXT NOT NULL,
    interpretation_future TEXT NOT NULL,
    
    -- Temporal Questions
    question_past TEXT NOT NULL,
    question_present TEXT NOT NULL,
    question_future TEXT NOT NULL,
    
    -- Temporal Challenges
    challenge_past TEXT NOT NULL,
    challenge_present TEXT NOT NULL,
    challenge_future TEXT NOT NULL,
    
    -- Temporal Rituals
    ritual_past TEXT NOT NULL,
    ritual_present TEXT NOT NULL,
    ritual_future TEXT NOT NULL,
    
    -- General Invitation
    invitation TEXT NOT NULL,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE decks ENABLE ROW LEVEL SECURITY;
ALTER TABLE cards ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on decks" ON decks FOR SELECT USING (true);
CREATE POLICY "Allow public read access on cards" ON cards FOR SELECT USING (true);
