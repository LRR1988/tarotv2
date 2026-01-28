import { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { type OracleDeck, type OracleCard as IOracleCard } from '../data/oracles'
import { type Language } from '../data/translations'
import { X, Info } from 'lucide-react'
import { deriveTarotLogic, getSuitMetadata } from '../lib/tarotLogic'

interface ArchivePageProps {
    language: Language;
    decks: OracleDeck[];
}

export function ArchivePage({ language, decks }: ArchivePageProps) {
    const { cardId } = useParams();
    const navigate = useNavigate();
    const oracleDecks = decks.filter(d => ['nature', 'monsters', 'trades', 'emotions'].includes(d.id));

    const allCards = useMemo(() => {
        return oracleDecks.flatMap(d => d.cards.map(c => ({ ...c, deck_id: d.id, deckName: d.name })));
    }, [oracleDecks]);

    const slugify = (text: string) => {
        return text
            .toString()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-');
    };

    const selectedCard = useMemo(() => {
        if (!cardId) return null;
        return allCards.find(c => slugify(c.name) === cardId) || null;
    }, [cardId, allCards]);

    const handleSelectCard = (card: IOracleCard) => {
        navigate(`/archive/${slugify(card.name)}`);
    };

    const handleClose = () => {
        navigate('/archive');
    };

    const filteredCards = allCards;

    // Force cleanup when unmounting to close modals


    return (
        <main style={{ flex: 1, padding: '2rem 1rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {language === 'es' ? 'El Archivo del Oráculo' : 'Oracle Archive'}
                </h1>
                <p className="serif" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    {language === 'es' ? 'Una biblioteca visual de todos los arquetipos y símbolos.' : 'A visual library of all archetypes and symbols.'}
                </p>
            </div>



            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                {filteredCards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.02 }}
                        className="glass"
                        whileHover={{ y: -10, borderColor: 'var(--gold)' }}
                        onClick={() => handleSelectCard(card)}
                        style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            border: '1px solid rgba(197, 160, 89, 0.1)'
                        }}
                    >
                        <div style={{ aspectRatio: '2/3', overflow: 'hidden' }}>
                            <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: '1rem', textAlign: 'center' }}>
                            <h4 className="cinzel gold-text" style={{ fontSize: '1rem' }}>{card.name}</h4>
                            <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', opacity: 0.6, marginTop: '0.3rem' }}>{card.deckName}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        key="archive-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="glass"
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 1000,
                            background: 'rgba(5, 5, 8, 0.95)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem',
                            overflowY: 'auto'
                        }}
                    >
                        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '2rem auto' }}>
                            <img src={selectedCard.image} alt={selectedCard.name} style={{ width: '200px', borderRadius: '12px', marginBottom: '2rem', boxShadow: '0 0 30px rgba(197, 160, 89, 0.2)' }} />
                            <h2 className="cinzel gold-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{selectedCard.name}</h2>

                            {/* Symbolic Metadata */}
                            {selectedCard.card_type === 'major' && (
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                    <div className="glass" style={{ padding: '0.5rem 1.5rem', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                                        <span className="cinzel">{language === 'es' ? 'GRAN ARCANO' : 'MAJOR ARCANA'}</span>
                                    </div>
                                </div>
                            )}

                            {(selectedCard.card_type === 'minor' || selectedCard.card_type === 'court') && (() => {
                                const logic = deriveTarotLogic(selectedCard);
                                const suitMeta = getSuitMetadata(selectedCard.suit);
                                if (!logic || !suitMeta) return null;
                                return (
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                        <div className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '0.8rem' }}>
                                            <Info size={14} />
                                            <span className="cinzel">{suitMeta.element.toUpperCase()}</span>
                                        </div>
                                        <div className="glass" style={{ padding: '0.5rem 1rem', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '0.8rem' }}>
                                            <span className="cinzel">{logic.realm.toUpperCase()}</span>
                                        </div>
                                    </div>
                                );
                            })()}

                            <div className="glass" style={{ padding: '2rem', textAlign: 'justify', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '3rem' }}>
                                {selectedCard.daily_description ? (
                                    selectedCard.daily_description.split('\n').map((p, i) => <p key={i} style={{ marginBottom: '1rem' }}>{p}</p>)
                                ) : (
                                    <p style={{ fontStyle: 'italic', opacity: 0.7, textAlign: 'center' }}>
                                        {language === 'es' ? 'Esta carta aún no tiene un tratado de sabiduría generado.' : 'This card does not have a wisdom treatise generated yet.'}
                                    </p>
                                )}
                            </div>

                            <button
                                className="oracle-button cinzel shimmer"
                                style={{ display: 'inline-flex', padding: '1rem 2rem' }}
                                onClick={handleClose}
                            >
                                {language === 'es' ? 'Volver al Archivo' : 'Back to Archive'}
                            </button>
                        </div>
                        <button
                            onClick={handleClose}
                            style={{ position: 'fixed', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: 'var(--gold)', cursor: 'pointer', zIndex: 1100 }}
                        >
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
