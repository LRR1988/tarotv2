import { supabase } from '../lib/supabaseClient';

export interface OracleCard {
  id: string;
  name: string;
  type: string;
  image: string;

  // Dynamic temporal variations
  interpretation_past: string;
  interpretation_present: string;
  interpretation_future: string;

  question_past: string;
  question_present: string;
  question_future: string;

  challenge_past: string;
  challenge_present: string;
  challenge_future: string;

  ritual_past: string;
  ritual_present: string;
  ritual_future: string;

  invitation: string;
  daily_description?: string;
  deck_id?: string;

  // Tarot System Metadata
  card_type?: 'major' | 'minor' | 'court';
  rank?: 'paje' | 'caballero' | 'reina' | 'rey';
  suit?: 'bastos' | 'copas' | 'espadas' | 'oros';
  number?: number; // 0-22 for major, 1-10 for minor
}

export interface OracleDeck {
  id: string;
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  cards: OracleCard[];
}

export const fetchOracleDecks = async (): Promise<OracleDeck[]> => {
  try {
    const { data: decksData, error: decksError } = await supabase
      .from('decks')
      .select('*');

    if (decksError) throw decksError;

    // Mazos que queremos mostrar ahora mismo
    const activeDeckIds = ['nature', 'monsters', 'trades', 'emotions'];

    const { data: cardsData, error: cardsError } = await supabase
      .from('cards')
      .select('*');

    if (cardsError) throw cardsError;

    return (decksData || [])
      .filter(deck => {
        // Si la columna is_active existe, la respetamos. 
        // Si no existe (todavía), usamos nuestra lista manual por defecto.
        if (deck.is_active !== undefined) return deck.is_active;
        return activeDeckIds.includes(deck.id);
      })
      .map(deck => ({
        ...deck,
        isActive: deck.is_active ?? activeDeckIds.includes(deck.id),
        name: deck.id === 'trades' ? 'Oficios Perdidos' : deck.name,
        cards: (cardsData || []).filter(card => card.deck_id === deck.id)
      }));
  } catch (error) {
    console.error('Error fetching oracle data from Supabase, falling back to static data:', error);
    return ORACLE_DECKS.filter(d => d.isActive);
  }
};

export const ORACLE_DECKS: OracleDeck[] = [
  {
    id: 'tarot_master',
    name: 'Tarot Maestro',
    description: 'El sistema completo de 78 Arcanos y Sabiduría Universal.',
    icon: 'Compass',
    isActive: true, // Set to true to make it visible
    cards: []
  },
  {
    id: 'nature',
    name: 'Oráculo de la Naturaleza',
    description: 'Sabiduría de los bosques, ríos y montañas.',
    icon: 'Leaf',
    isActive: true,
    cards: []
  },
  {
    id: 'monsters',
    name: 'Bestiario Mítico',
    description: 'Enfréntate a tus sombras personificadas.',
    icon: 'Skull',
    isActive: true,
    cards: []
  },
  {
    id: 'home',
    name: 'Oráculo del Hogar',
    description: 'La magia se oculta en lo cotidiano.',
    icon: 'Home',
    isActive: false,
    cards: []
  },
  {
    id: 'trades',
    name: 'Oficios Perdidos',
    description: 'La maestría en el hacer y el propósito.',
    icon: 'Hammer',
    isActive: true,
    cards: []
  },
  {
    id: 'times',
    name: 'Ciclos del Tiempo',
    description: 'Navega las estaciones del alma.',
    icon: 'Watch',
    isActive: false,
    cards: []
  },
  {
    id: 'emotions',
    name: 'Espejo de Emociones',
    description: 'Explora el paisaje de tu mundo interno.',
    icon: 'Heart',
    isActive: true,
    cards: []
  }
];
