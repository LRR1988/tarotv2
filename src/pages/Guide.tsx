import { motion } from 'framer-motion';
import { HelpCircle, ArrowLeft, Sparkles, Clock, Eye, Leaf, Skull, Hammer, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations, type Language } from '../data/translations';

interface GuidePageProps {
    language: Language;
}

export const GuidePage = ({ language }: GuidePageProps) => {
    const t = translations[language].userGuide;
    const navigate = useNavigate();

    return (
        <main style={{ flex: 1, padding: '2rem 1rem' }}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ maxWidth: '850px', margin: '0 auto' }}
            >
                <button
                    onClick={() => navigate('/')}
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
                    {language === 'es' ? 'Volver al Oráculo' : 'Back to Oracle'}
                </button>

                <div className="glass" style={{ padding: '4rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <HelpCircle className="gold-text shimmer" size={60} style={{ marginBottom: '1.5rem' }} />
                        <h1 className="cinzel gold-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t.title}</h1>
                        <p className="serif" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                            {language === 'es' ? 'Como navegar por los misterios de Luz Rey.' : 'How to navigate the mysteries of Luz Rey.'}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        <section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Sparkles className="gold-text" size={24} />
                                <h3 className="uncial" style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>{t.usage}</h3>
                            </div>
                            <div className="glass" style={{ padding: '2rem', background: 'rgba(197, 160, 89, 0.05)', borderRadius: '20px' }}>
                                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {t.text1}
                                </p>
                                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem', marginTop: '1rem' }}>
                                    {t.text2}
                                </p>
                            </div>
                        </section>

                        <section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Eye className="gold-text" size={24} />
                                <h3 className="uncial" style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>{t.lenses.title}</h3>
                            </div>
                            <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                {t.lenses.intro}
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                                <div className="glass" style={{ padding: '1.5rem', borderColor: '#8b5cf6', background: 'rgba(139, 92, 246, 0.03)' }}>
                                    <h4 style={{ color: '#8b5cf6', marginBottom: '0.8rem', fontSize: '1.2rem' }} className="cinzel">{t.lenses.past.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{t.lenses.past.desc}</p>
                                </div>
                                <div className="glass" style={{ padding: '1.5rem', borderColor: 'var(--gold)', background: 'rgba(197, 160, 89, 0.03)' }}>
                                    <h4 style={{ color: 'var(--gold)', marginBottom: '0.8rem', fontSize: '1.2rem' }} className="cinzel">{t.lenses.present.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{t.lenses.present.desc}</p>
                                </div>
                                <div className="glass" style={{ padding: '1.5rem', borderColor: '#10b981', background: 'rgba(16, 185, 129, 0.03)' }}>
                                    <h4 style={{ color: '#10b981', marginBottom: '0.8rem', fontSize: '1.2rem' }} className="cinzel">{t.lenses.future.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{t.lenses.future.desc}</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <Sparkles className="gold-text" size={24} />
                                <h3 className="uncial" style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>{t.paths.title}</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                <div className="glass" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}>
                                    <div style={{ color: 'var(--gold)' }}><Leaf size={32} /></div>
                                    <div>
                                        <h4 className="cinzel" style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t.paths.nature.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{t.paths.nature.desc}</p>
                                    </div>
                                </div>
                                <div className="glass" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}>
                                    <div style={{ color: 'var(--gold)' }}><Skull size={32} /></div>
                                    <div>
                                        <h4 className="cinzel" style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t.paths.monsters.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{t.paths.monsters.desc}</p>
                                    </div>
                                </div>
                                <div className="glass" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}>
                                    <div style={{ color: 'var(--gold)' }}><Hammer size={32} /></div>
                                    <div>
                                        <h4 className="cinzel" style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t.paths.trades.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{t.paths.trades.desc}</p>
                                    </div>
                                </div>
                                <div className="glass" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}>
                                    <div style={{ color: 'var(--gold)' }}><Heart size={32} /></div>
                                    <div>
                                        <h4 className="cinzel" style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t.paths.emotions.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{t.paths.emotions.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Clock className="gold-text" size={24} />
                                <h3 className="uncial" style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>{t.action.title}</h3>
                            </div>
                            <div className="glass" style={{ padding: '2rem', borderLeft: '4px solid var(--gold)' }}>
                                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {t.action.desc}
                                </p>
                            </div>
                        </section>
                    </div>

                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <button
                            className="oracle-button cinzel shimmer"
                            onClick={() => navigate('/')}
                            style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}
                        >
                            {language === 'es' ? 'Comenzar Consulta' : 'Begin Consultation'}
                        </button>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};
