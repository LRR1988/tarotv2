import { type OracleDeck } from '../data/oracles';
import { TreeDeciduous, Eye, Key, Moon, Hourglass, Castle, Sparkles, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { translations, type Language } from '../data/translations';

const iconMap: Record<string, any> = {
    Leaf: TreeDeciduous,
    Skull: Eye,
    Home: Castle,
    Sparkles: Sparkles,
    Clock: Hourglass,
    Cloud: Cloud,
    Watch: Hourglass,
    Hammer: Key,
    Heart: Moon,
};

interface DeckSelectorProps {
    decks: OracleDeck[];
    onSelect: (deckId: string) => void;
    disabled?: boolean;
    onDisabledClick?: () => void;
    language: Language;
}

export const DeckSelector = ({ decks, onSelect, disabled, onDisabledClick, language }: DeckSelectorProps) => {
    const t = translations[language].deckSelector;
    return (
        <div className="deck-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(280px, 1fr))',
            gap: '2rem',
            padding: '1rem',
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            {decks.map((deck, index) => {
                const Icon = iconMap[deck.icon] || Sparkles;
                return (
                    <motion.div
                        key={deck.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={!disabled ? {
                            y: -10,
                            scale: 1.02,
                            boxShadow: '0 0 30px rgba(197, 160, 89, 0.2)'
                        } : {
                            scale: 1.01,
                            backgroundColor: 'rgba(255, 255, 255, 0.03)'
                        }}
                        whileTap={!disabled ? { scale: 0.95 } : {}}
                        className={`glass deck-card ${disabled ? 'disabled-interactive' : ''}`}
                        onClick={() => disabled ? onDisabledClick?.() : onSelect(deck.id)}
                        style={{
                            cursor: disabled ? 'pointer' : 'pointer',
                            opacity: disabled ? 0.7 : 1,
                            border: '1px solid rgba(197, 160, 89, 0.3)',
                            textAlign: 'center',
                            padding: '3rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.2rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Decorative corner */}
                        <div style={{ position: 'absolute', top: 5, right: 5, width: 20, height: 20, borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', opacity: 0.5 }}></div>

                        <div style={{ color: 'var(--gold)', marginBottom: '0.5rem', filter: 'drop-shadow(0 0 10px rgba(197, 160, 89, 0.3))' }}>
                            <Icon size={48} strokeWidth={1} />
                        </div>
                        <h3 className="cinzel gold-text shimmer" style={{ fontSize: '1.6rem', letterSpacing: '0.1em' }}>
                            {deck.id === 'monsters' || deck.id === 'trades' ? (
                                deck.name.split(' ').map((word, i) => (
                                    <span key={i} style={{ display: 'block' }}>{word}</span>
                                ))
                            ) : (
                                deck.name
                            )}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                            {deck.description}
                        </p>

                        <div style={{
                            marginTop: '0.5rem',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'var(--gold)',
                            opacity: 0.7
                        }}>
                            {t.cards_count}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
