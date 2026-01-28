import { useState, useEffect } from 'react';
import { type OracleCard, type OracleDeck } from '../data/oracles';
import { saveToHistory } from '../lib/historyService';

const DRAW_KEY = 'daily_draw_data';

interface DrawData {
    cardId: string;
    deckId: string;
    timestamp: number;
    lens: 'past' | 'present' | 'future';
}

export const useDailyDraw = (decks: OracleDeck[]) => {
    const [currentCard, setCurrentCard] = useState<OracleCard | null>(null);
    const [currentLens, setCurrentLens] = useState<DrawData['lens'] | null>(null);
    const [drawnDeckId, setDrawnDeckId] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [isInitializing, setIsInitializing] = useState(true);

    useEffect(() => {
        if (decks.length > 0) {
            checkDraw();
        }
    }, [decks]);

    const checkDraw = () => {
        const stored = localStorage.getItem(DRAW_KEY);
        if (stored) {
            const data: DrawData = JSON.parse(stored);
            const lastDrawDate = new Date(data.timestamp);
            const now = new Date();

            // Check if draw was today (same calendar day)
            const isToday = lastDrawDate.getDate() === now.getDate() &&
                lastDrawDate.getMonth() === now.getMonth() &&
                lastDrawDate.getFullYear() === now.getFullYear();

            if (isToday) {
                // Find the card specifically in the deck it was drawn from
                const deck = decks.find(d => d.id === data.deckId);
                const foundCard = deck?.cards.find(c => c.id === data.cardId);

                if (foundCard) {
                    setCurrentCard({ ...foundCard, deck_id: data.deckId });
                    setCurrentLens(data.lens);
                    setDrawnDeckId(data.deckId);

                    // Calculate time left until tomorrow midnight
                    const tomorrow = new Date(now);
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    tomorrow.setHours(0, 0, 0, 0);
                    setTimeLeft(tomorrow.getTime() - now.getTime());
                }
            } else {
                // It's a new day, clear the storage so we don't carry over old data unnecessarily
                // although keeping it might be fine, effectively we unlock the draw.
                // We'll just reset state to allow drawing.
                setCurrentCard(null);
                setCurrentLens(null);
                setDrawnDeckId(null);
                setTimeLeft(null);
            }
        }
        setIsInitializing(false);
    };

    const drawCard = (deckId: string) => {
        const deck = decks.find(d => d.id === deckId);
        if (!deck) return;

        const randomIndex = Math.floor(Math.random() * deck.cards.length);
        const card = deck.cards[randomIndex];

        // Weighted Lens Selection
        const rand = Math.random();
        let lens: DrawData['lens'] = 'present';
        if (rand > 0.5 && rand <= 0.75) lens = 'past';
        else if (rand > 0.75) lens = 'future';

        const now = new Date();
        const data: DrawData = {
            cardId: card.id,
            deckId: deck.id,
            timestamp: now.getTime(),
            lens: lens
        };

        localStorage.setItem(DRAW_KEY, JSON.stringify(data));

        const cardToSave = { ...card, deck_id: deck.id };
        saveToHistory(cardToSave, lens);

        setCurrentCard(cardToSave);
        setCurrentLens(lens);
        setDrawnDeckId(deck.id);

        // Calculate time left until tomorrow midnight immediately
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        setTimeLeft(tomorrow.getTime() - now.getTime());
    };

    // Countdown timer effect
    useEffect(() => {
        if (timeLeft === null) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev === null || prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 60000; // Update every minute to be less aggressive than every second
            });
        }, 60000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    return { currentCard, currentLens, drawnDeckId, timeLeft, drawCard, isInitializing };
};
