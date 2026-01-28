import { motion } from 'framer-motion';
import { HelpCircle, ArrowLeft, Sparkles, Clock, Activity, Coins, Heart, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations, type Language } from '../data/translations';

interface HoroscopeGuideProps {
    language: Language;
}

export const HoroscopeGuidePage = ({ language }: HoroscopeGuideProps) => {
    const t = translations[language].horoscopeGuide;
    const navigate = useNavigate();

    return (
        <main style={{ flex: 1, padding: '2rem 1rem' }}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ maxWidth: '850px', margin: '0 auto' }}
            >
                <button
                    onClick={() => navigate('/horoscope')}
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
                    {t.back}
                </button>

                <div className="glass" style={{ padding: '4rem', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <CompassIcon className="gold-text shimmer" size={60} style={{ marginBottom: '1.5rem' }} />
                        <h1 className="cinzel gold-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t.title}</h1>
                        <p className="serif" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                            {t.subtitle}
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        <section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Clock className="gold-text" size={24} />
                                <h3 className="uncial" style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>{t.sections.daily.title}</h3>
                            </div>
                            <div className="glass" style={{ padding: '2rem', background: 'rgba(197, 160, 89, 0.05)', borderRadius: '20px' }}>
                                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {t.sections.daily.desc}
                                </p>
                            </div>
                        </section>

                        <section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--gold)' }}>
                                    <Activity size={20} /> <Coins size={20} /> <Heart size={20} /> <Zap size={20} />
                                </div>
                                <h3 className="uncial" style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>{t.sections.areas.title}</h3>
                            </div>
                            <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                {t.sections.areas.desc}
                            </p>
                        </section>

                        <section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Sparkles className="gold-text" size={24} />
                                <h3 className="uncial" style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>{t.sections.expansion.title}</h3>
                            </div>
                            <div className="glass" style={{ padding: '2rem', background: 'rgba(197, 160, 89, 0.05)', borderRadius: '20px', borderLeft: '4px solid var(--gold)' }}>
                                <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                    {t.sections.expansion.desc}
                                </p>
                            </div>
                        </section>

                        <section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <HelpCircle className="gold-text" size={24} />
                                <h3 className="uncial" style={{ fontSize: '1.8rem', color: 'var(--gold-light)' }}>{t.sections.synthesis.title}</h3>
                            </div>
                            <p style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                {t.sections.synthesis.desc}
                            </p>
                        </section>

                        <section style={{ textAlign: 'center', padding: '2rem', background: 'rgba(197, 160, 89, 0.03)', borderRadius: '32px', border: '1px dashed rgba(197, 160, 89, 0.3)' }}>
                            <p style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.1rem' }}>
                                {t.limit}
                            </p>
                        </section>
                    </div>

                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <button
                            className="oracle-button cinzel shimmer"
                            onClick={() => navigate('/horoscope')}
                            style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}
                        >
                            {language === 'es' ? 'Consultar Astros' : 'Consult Stars'}
                        </button>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

// Internal icon component for consistent styling
function CompassIcon({ size, className, style }: { size: number, className?: string, style?: any }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={style}
        >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
    );
}
