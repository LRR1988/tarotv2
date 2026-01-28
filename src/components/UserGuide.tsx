import { motion } from 'framer-motion';
import { HelpCircle, X, Sparkles, Clock, Eye, Leaf, Skull, Hammer, Heart } from 'lucide-react';

import { translations, type Language } from '../data/translations';

interface UserGuideProps {
    onClose: () => void;
    language: Language;
}

export const UserGuide = ({ onClose, language }: UserGuideProps) => {
    const t = translations[language].userGuide;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                background: 'rgba(5, 5, 8, 0.85)',
                backdropFilter: 'blur(8px)'
            }}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="glass"
                style={{
                    maxWidth: '700px',
                    width: '100%',
                    maxHeight: '85vh',
                    overflowY: 'auto',
                    padding: '3rem',
                    position: 'relative',
                    border: '1px solid var(--gold)',
                    boxShadow: '0 0 50px rgba(197, 160, 89, 0.15)'
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--gold)',
                        cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <HelpCircle className="gold-text shimmer" size={40} style={{ marginBottom: '1rem' }} />
                    <h2 className="cinzel gold-text" style={{ fontSize: '2.2rem' }}>{t.title}</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <section>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <Sparkles className="gold-text" size={20} />
                            <h3 className="uncial" style={{ fontSize: '1.4rem', color: 'var(--gold-light)' }}>{t.usage}</h3>
                        </div>
                        <p style={{ color: 'var(--text-primary)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                            {t.text1} {t.text2}
                        </p>
                    </section>

                    <section>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <Eye className="gold-text" size={20} />
                            <h3 className="uncial" style={{ fontSize: '1.4rem', color: 'var(--gold-light)' }}>{t.lenses.title}</h3>
                        </div>
                        <p style={{ color: 'var(--text-primary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            {t.lenses.intro}
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div className="glass" style={{ padding: '1.2rem', borderColor: '#8b5cf6' }}>
                                <h4 style={{ color: '#8b5cf6', marginBottom: '0.5rem' }}>{t.lenses.past.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.lenses.past.desc}</p>
                            </div>
                            <div className="glass" style={{ padding: '1.2rem', borderColor: 'var(--gold)' }}>
                                <h4 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>{t.lenses.present.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.lenses.present.desc}</p>
                            </div>
                            <div className="glass" style={{ padding: '1.2rem', borderColor: '#10b981' }}>
                                <h4 style={{ color: '#10b981', marginBottom: '0.5rem' }}>{t.lenses.future.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.lenses.future.desc}</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Sparkles className="gold-text" size={20} />
                            <h3 className="uncial" style={{ fontSize: '1.4rem', color: 'var(--gold-light)' }}>{t.paths.title}</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ color: 'var(--gold)' }}><Leaf size={24} /></div>
                                <div>
                                    <h4 className="cinzel" style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{t.paths.nature.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t.paths.nature.desc}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ color: 'var(--gold)' }}><Skull size={24} /></div>
                                <div>
                                    <h4 className="cinzel" style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{t.paths.monsters.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t.paths.monsters.desc}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ color: 'var(--gold)' }}><Hammer size={24} /></div>
                                <div>
                                    <h4 className="cinzel" style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{t.paths.trades.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t.paths.trades.desc}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ color: 'var(--gold)' }}><Heart size={24} /></div>
                                <div>
                                    <h4 className="cinzel" style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{t.paths.emotions.title}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t.paths.emotions.desc}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <Clock className="gold-text" size={20} />
                            <h3 className="uncial" style={{ fontSize: '1.4rem', color: 'var(--gold-light)' }}>{t.action.title}</h3>
                        </div>
                        <p style={{ color: 'var(--text-primary)', lineHeight: '1.7' }}>
                            {t.action.desc}
                        </p>
                    </section>
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <button
                        className="oracle-button cinzel shimmer"
                        onClick={onClose}
                        style={{ padding: '1rem 2.5rem' }}
                    >
                        {t.button}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};
