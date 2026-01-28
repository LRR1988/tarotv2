import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, RefreshCw } from 'lucide-react'
import { OracleCard } from '../components/OracleCard'
import { type OracleDeck } from '../data/oracles'
import { type Language } from '../data/translations'
import { useDailyDraw } from '../hooks/useDailyDraw'
import { WaitPopup } from '../components/WaitPopup'

interface DailyCardPageProps {
    language: Language;
    decks: OracleDeck[];
}

export function DailyCardPage({ language, decks }: DailyCardPageProps) {
    const oracleDecks = decks.filter(d => ['nature', 'monsters', 'trades', 'emotions'].includes(d.id));
    const { currentCard, currentLens, timeLeft, drawCard, isInitializing } = useDailyDraw(oracleDecks);
    const [isRolling, setIsRolling] = useState(false);
    const [showWaitPopup, setShowWaitPopup] = useState(false);
    const [hasDrawnInSession, setHasDrawnInSession] = useState(false);
    const [userWantsToSeeCard, setUserWantsToSeeCard] = useState(false);

    useEffect(() => {
        if (isInitializing) return;

        // If no card is drawn yet, start the roll animation
        if (!currentCard && oracleDecks.length > 0 && !hasDrawnInSession) {
            setIsRolling(true);
            const timer = setTimeout(() => {
                const randomDeck = oracleDecks[Math.floor(Math.random() * oracleDecks.length)];
                drawCard(randomDeck.id);
                setIsRolling(false);
                setHasDrawnInSession(true);
            }, 1500);
            return () => clearTimeout(timer);
        }

        // If a card was already drawn today (found in localStorage)
        // and we haven't shown the popup yet in this page load
        if (currentCard && !hasDrawnInSession && !userWantsToSeeCard && !showWaitPopup) {
            setShowWaitPopup(true);
        }
    }, [isInitializing, currentCard, oracleDecks.length, hasDrawnInSession, userWantsToSeeCard, showWaitPopup]);

    // Force cleanup when unmounting
    useEffect(() => {
        return () => {
            setShowWaitPopup(false);
            setIsRolling(false);
        };
    }, []);

    return (
        <main style={{ flex: 1, padding: '2rem 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    {language === 'es' ? 'Carta del Día' : 'Card of the Day'}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    {language === 'es'
                        ? 'Una chispa de sabiduría para iluminar tu jornada.'
                        : 'A spark of wisdom to illuminate your day.'}
                </p>
            </motion.div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                <button
                    onClick={() => setShowWaitPopup(true)}
                    className="oracle-button cinzel shimmer"
                    style={{
                        padding: '0.8rem 1.5rem',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem'
                    }}
                >
                    <RefreshCw size={20} />
                    {language === 'es' ? 'El Oráculo Reposa' : 'The Oracle Rests'}
                </button>
            </div>

            <AnimatePresence mode="wait">
                {isRolling ? (
                    <motion.div
                        key="rolling"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ textAlign: 'center', padding: '4rem' }}
                    >
                        <Sparkles size={60} className="gold-text spin-slow" />
                        <h2 className="serif gold-text" style={{ marginTop: '2rem' }}>
                            {language === 'es' ? 'Consultando al Oráculo...' : 'Consulting the Oracle...'}
                        </h2>
                    </motion.div>
                ) : currentCard && (hasDrawnInSession || userWantsToSeeCard) ? (
                    <motion.div
                        key={currentCard.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <OracleCard card={currentCard} lens={currentLens || 'present'} language={language} simplified={true} />
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <AnimatePresence>
                {showWaitPopup && (
                    <WaitPopup
                        language={language}
                        timeLeft={timeLeft}
                        onClose={() => setShowWaitPopup(false)}
                        onGoToChat={() => { }}
                        onSeeCard={currentCard ? () => setUserWantsToSeeCard(true) : undefined}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}
