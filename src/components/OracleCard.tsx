import { motion } from 'framer-motion';
import type { OracleCard as IOracleCard } from '../data/oracles';
import { Mail } from 'lucide-react';
import { ChatRoom } from './ChatRoom';
import { useEffect } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { translations, type Language } from '../data/translations';

const DECK_NAMES: Record<string, string> = {
    'nature': 'Naturaleza',
    'monsters': 'Bestiario Mítico',
    'trades': 'Oficios Perdidos',
    'emotions': 'Espejo de Emociones',
    'home': 'Oráculo del Hogar',
    'times': 'Ciclos del Tiempo',
};

interface OracleCardProps {
    card: IOracleCard;
    lens: 'past' | 'present' | 'future' | null;
    language: Language;
    onClose?: () => void;
    simplified?: boolean;
    isInverted?: boolean;
}

const lensConfig = {
    past: {
        label: 'La Raíz',
        prefix: 'Mirando hacia atrás...',
        color: '#8b5cf6' // Purple for past/depth
    },
    present: {
        label: 'El Ahora',
        prefix: 'En tu presente...',
        color: 'var(--gold)'
    },
    future: {
        label: 'La Semilla',
        prefix: 'Como preparación...',
        color: '#10b981' // Green for growth/future
    }
};

export const OracleCard = ({ card, lens, language, simplified, isInverted }: OracleCardProps) => {
    const config = lens ? lensConfig[lens] : null;
    const t = translations[language].card;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="card-reveal-view" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="cinzel gold-text shimmer"
                    style={{
                        fontSize: '4.5rem',
                        marginBottom: '0.2rem',
                        letterSpacing: '0.2em',
                        textShadow: '0 0 30px rgba(197, 160, 89, 0.4)'
                    }}
                >
                    {card.name}
                </motion.h2>

                {/* NOTE: config.label is still hardcoded in Spanish in lensConfig. 
                    Ideally lensConfig should be dynamic or translated too. 
                    For now, focusing on the UI text requested. 
                */}
                {config && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass"
                        style={{
                            padding: '0.4rem 1.2rem',
                            border: `1px solid ${config.color}`,
                            color: config.color,
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontWeight: 'bold',
                            boxShadow: `0 0 15px ${config.color}33`,
                            borderRadius: '20px'
                        }}
                    >
                        {config.label}
                    </motion.div>
                )}

                {!simplified && (
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', opacity: 0.8 }}>
                        <button
                            onClick={() => scrollToSection('contact-section')}
                            style={{ background: 'transparent', border: 'none', color: 'var(--gold)', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                            className="hover-gold"
                        >
                            <Mail size={16} /> {t.contact}
                        </button>
                        <span style={{ color: 'var(--gold)', opacity: 0.3 }}>|</span>
                        <button
                            onClick={() => scrollToSection('chat-section')}
                            style={{ background: 'transparent', border: 'none', color: 'var(--gold)', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                            className="hover-gold"
                        >
                            <MessageCircle size={16} /> {t.circle} <ChevronDown size={14} />
                        </button>
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {/* 1. Full-width Interpretation */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
                >
                    <h4 className="serif gold-text" style={{ marginBottom: '1rem', opacity: 0.8, fontSize: '1.2rem' }}>{t.interpretation}</h4>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#e5e7eb', fontStyle: 'italic' }}>
                        {lens === 'past' ? card.interpretation_past :
                            lens === 'future' ? card.interpretation_future :
                                card.interpretation_present}
                    </p>
                </motion.section>

                {simplified && card.daily_description && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass"
                        style={{ padding: '2.5rem', borderLeft: isInverted ? '4px solid var(--accent)' : '4px solid var(--gold)', background: isInverted ? 'rgba(76, 29, 149, 0.05)' : 'rgba(197, 160, 89, 0.05)' }}
                    >
                        <h4 className="cinzel gold-text" style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: isInverted ? 'var(--accent)' : 'var(--gold)' }}>
                            {isInverted
                                ? (language === 'es' ? 'Fenomenología de la Inversión (Sombra)' : 'Phenomenology of Inversion (Shadow)')
                                : (language === 'es' ? 'Esencia y Simbolismo de la Carta' : 'Card Essence & Symbolism')}
                        </h4>
                        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)', textAlign: 'justify' }}>
                            {isInverted && (
                                <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', opacity: 0.8 }}>
                                    {language === 'es'
                                        ? 'Esta energía encuentra obstáculos. Puede tratarse de un bloqueo, un exceso o un proceso que ocurre exclusivamente en tu mundo interno.'
                                        : 'This energy encounters obstacles. It may be a blockage, an excess, or a process occurring exclusively in your internal world.'}
                                </p>
                            )}
                            {card.daily_description.split('\n').map((paragraph, i) => (
                                <p key={i} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* 2. Side-by-side: Image and Practical Content */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10, rotateZ: isInverted ? 180 : 0 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0, rotateZ: isInverted ? 180 : 0 }}
                        className="glass"
                        style={{
                            padding: '1.5rem',
                            border: `2px solid ${config?.color || 'var(--gold)'}`,
                            boxShadow: `0 0 50px ${config?.color ? config.color + '33' : 'rgba(197, 160, 89, 0.25)'}`,
                            position: 'sticky',
                            top: '2rem',
                            background: 'rgba(5, 5, 8, 0.6)'
                        }}
                    >
                        {/* Sacred Frame Inner Border */}
                        <div style={{
                            position: 'absolute',
                            inset: '5px',
                            border: `1px solid ${config?.color ? config.color + '4d' : 'rgba(197, 160, 89, 0.3)'}`,
                            pointerEvents: 'none'
                        }}></div>

                        <img
                            src={card.image}
                            alt={card.name}
                            style={{
                                width: '100%',
                                borderRadius: '4px',
                                aspectRatio: '2/3',
                                objectFit: 'cover',
                                filter: 'sepia(0.3) contrast(1.1) brightness(0.9)'
                            }}
                        />
                        {isInverted && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '-1rem',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--accent)',
                                    color: '#fff',
                                    padding: '0.2rem 1rem',
                                    borderRadius: '10px',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.1em',
                                    zIndex: 10
                                }}
                            >
                                {language === 'es' ? 'EN SOMBRA' : 'IN SHADOW'}
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Content Column (Question, Challenge, Ritual) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        {!simplified && (
                            <section className="glass" style={{ padding: '1.5rem', borderLeft: `3px solid ${config?.color || 'var(--gold)'}` }}>
                                <h4 className="serif" style={{ marginBottom: '0.5rem', color: config?.color || 'var(--gold)' }}>{t.question}</h4>
                                <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                                    {lens === 'past' ? card.question_past :
                                        lens === 'future' ? card.question_future :
                                            card.question_present}
                                </p>
                            </section>
                        )}

                        {!simplified && (
                            <section>
                                <h4 className="serif gold-text" style={{ marginBottom: '1rem' }}>{t.challenge_ritual}</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    <div className="glass" style={{
                                        padding: '1.2rem',
                                        background: config?.color ? `${config.color}0d` : 'rgba(212, 175, 55, 0.05)',
                                        border: `1px solid ${config?.color ? config.color + '1a' : 'rgba(212, 175, 55, 0.1)'}`
                                    }}>
                                        <p style={{ fontSize: '0.8rem', color: config?.color || 'var(--gold)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.action}</p>
                                        <p style={{ lineHeight: '1.5' }}>
                                            {lens === 'past' ? card.challenge_past :
                                                lens === 'future' ? card.challenge_future :
                                                    card.challenge_present}
                                        </p>
                                    </div>
                                    <div className="glass" style={{
                                        padding: '1.2rem',
                                        background: config?.color ? `${config.color}0d` : 'rgba(212, 175, 55, 0.05)',
                                        border: `1px solid ${config?.color ? config.color + '1a' : 'rgba(212, 175, 55, 0.1)'}`
                                    }}>
                                        <p style={{ fontSize: '0.8rem', color: config?.color || 'var(--gold)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.ritual}</p>
                                        <p style={{ lineHeight: '1.5' }}>
                                            {lens === 'past' ? card.ritual_past :
                                                lens === 'future' ? card.ritual_future :
                                                    card.ritual_present}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        )}
                    </motion.div>
                </div>

                {/* 3. Full-width Final Invitation & Share */}
                {!simplified && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            marginTop: '1rem',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            borderTop: '1px solid rgba(197, 160, 89, 0.2)',
                            background: 'linear-gradient(to bottom, transparent, rgba(197, 160, 89, 0.05))',
                            borderRadius: '0 0 32px 32px'
                        }}
                    >
                        <p className="serif" style={{
                            marginBottom: '2.5rem',
                            color: 'var(--gold-light)',
                            fontSize: '1.4rem',
                            maxWidth: '650px',
                            margin: '0 auto 2.5rem',
                            lineHeight: '1.6',
                            fontStyle: 'italic',
                            letterSpacing: '0.02em',
                            opacity: 0.9
                        }}>
                            {card.invitation}
                        </p>
                        <div id="contact-section" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            <a
                                href={`mailto:hola@luzrey.com?subject=${t.email_subject}: ${card.name}&body=${t.email_body} "${card.name}"...`}
                                className="oracle-button cinzel shimmer"
                                style={{
                                    padding: '1.2rem 2.5rem',
                                    fontSize: '1rem',
                                    letterSpacing: '0.1em',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Mail size={20} style={{ marginRight: '0.8rem' }} /> {t.email_button}
                            </a>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', opacity: 0.7 }}>
                                {t.email_text}
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* 4. Mandala Chat */}
                {!simplified && card.deck_id && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <div id="chat-section">
                            <ChatRoom
                                deckId={card.deck_id}
                                deckName={DECK_NAMES[card.deck_id] || 'Este Mazo'}
                                language={language}
                            />
                        </div>
                    </motion.div>
                )}
            </div>

        </div>
    );
};


