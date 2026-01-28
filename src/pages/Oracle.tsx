import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DeckSelector } from '../components/DeckSelector';
import { OracleCard } from '../components/OracleCard';
import { ChatRoom } from '../components/ChatRoom';
import { WaitPopup } from '../components/WaitPopup';
import { useDailyDraw } from '../hooks/useDailyDraw';
import { type OracleDeck } from '../data/oracles';
import { translations, type Language } from '../data/translations';
import { Sparkles, ArrowLeft, HelpCircle } from 'lucide-react';

interface OraclePageProps {
    language: Language;
    decks: OracleDeck[];
}

export function OraclePage({ language, decks }: OraclePageProps) {
    const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);
    const [showWaitPopup, setShowWaitPopup] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const location = useLocation();

    // Reset view when navigating to the root oracle page from the menu
    useEffect(() => {
        if (location.pathname === '/oracle') {
            setSelectedDeckId(null);
        }
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Force immediate cleanup when unmounting to prevent visual artifacts
    useEffect(() => {
        return () => {
            setSelectedDeckId(null);
            setShowWaitPopup(false);
            setIsDrawing(false);
        };
    }, []);

    const oracleDecks = decks.filter(d => ['nature', 'monsters', 'trades', 'emotions'].includes(d.id));
    const { currentCard, currentLens, drawnDeckId, timeLeft, drawCard } = useDailyDraw(oracleDecks);
    const t = translations[language].app;

    const handleDeckSelect = (deckId: string) => {
        // If they already drew today from COMPLEMENTING decks (Oracle)
        if (currentCard && drawnDeckId !== deckId) {
            setShowWaitPopup(true);
            return;
        }

        setSelectedDeckId(deckId);
        if (!currentCard) {
            setIsDrawing(true);
            setTimeout(() => {
                drawCard(deckId);
                setIsDrawing(false);
            }, 800);
        }
    };

    const selectedDeck = oracleDecks.find(d => d.id === selectedDeckId);

    return (
        <main style={{ flex: 1, padding: '2rem 1rem' }}>
            {!selectedDeckId ? (
                <motion.div
                    key="selector"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                            {t.title}
                        </h1>
                        <p className="serif" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '700px', margin: '0 0 1.5rem auto' }}>
                            {t.selector.subtitle}
                        </p>
                        <Link
                            to="/guide"
                            className="cinzel hover-gold"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--gold)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                opacity: 0.8,
                                borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
                                paddingBottom: '2px'
                            }}
                        >
                            <HelpCircle size={16} />
                            {language === 'es' ? '¿Cómo funciona el Oráculo?' : 'How does the Oracle work?'}
                        </Link>
                    </header>

                    <DeckSelector
                        decks={oracleDecks}
                        onSelect={handleDeckSelect}
                        language={language}
                    />
                </motion.div>
            ) : (
                <motion.div
                    key="deck-view"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxWidth: '1000px', margin: '0 auto' }}
                >
                    <button
                        onClick={() => setSelectedDeckId(null)}
                        className="cinzel hover-gold"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--gold)',
                            cursor: 'pointer',
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <ArrowLeft size={18} />
                        {language === 'es' ? 'Volver a los mazos' : 'Back to decks'}
                    </button>

                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="cinzel gold-text shimmer" style={{ fontSize: '2.5rem' }}>{selectedDeck?.name}</h2>
                        <p className="serif" style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>{selectedDeck?.description}</p>
                    </div>

                    {currentCard ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            <OracleCard
                                card={currentCard}
                                lens={currentLens || 'present'}
                                language={language}
                            />
                            <ChatRoom
                                deckId={selectedDeckId}
                                deckName={selectedDeck?.name || ''}
                                language={language}
                            />
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                            {isDrawing && (
                                <motion.div
                                    key="drawing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
                                >
                                    <div className="card-back-animation">
                                        <Sparkles size={80} className="gold-text spin-slow" />
                                    </div>
                                    <p className="cinzel gold-text shimmer" style={{ fontSize: '1.5rem' }}>
                                        {t.mixing}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    )}
                </motion.div>
            )}

            {showWaitPopup && (
                <WaitPopup
                    language={language}
                    timeLeft={timeLeft}
                    onClose={() => setShowWaitPopup(false)}
                    onGoToChat={() => {
                        if (drawnDeckId) {
                            setSelectedDeckId(drawnDeckId);
                            setShowWaitPopup(false);
                        }
                    }}
                />
            )}
        </main>
    );
}
