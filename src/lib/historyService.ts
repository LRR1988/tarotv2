import type { OracleCard } from '../data/oracles';

export interface HistoryEntry {
    cardId: string;
    cardName: string;
    image: string;
    date: string;
    deckId: string;
    lens: string;
}

const STORAGE_KEY = 'oracle_shadow_journal';

export const saveToHistory = (card: OracleCard, lens: string) => {
    const history = getHistory();
    const entry: HistoryEntry = {
        cardId: card.id,
        cardName: card.name,
        image: card.image,
        date: new Date().toISOString(),
        deckId: card.deck_id || 'unknown',
        lens
    };

    // Keep only last 20 entries
    const newHistory = [entry, ...history.filter(e => e.cardId !== card.id)].slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
};

export const getHistory = (): HistoryEntry[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};
