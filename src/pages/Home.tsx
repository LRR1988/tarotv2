import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Stars, LayoutGrid, ArrowRight } from 'lucide-react';
import { translations, type Language } from '../data/translations';

interface HomePageProps {
    language: Language;
}

export function HomePage({ language }: HomePageProps) {
    const t = translations[language].home;

    const sections = [
        {
            id: 'oracle',
            icon: Sparkles,
            path: '/oracle',
            title: t.cards.oracle.title,
            desc: t.cards.oracle.desc,
            button: t.cards.oracle.button,
            color: 'var(--gold)',
            delay: 0.1
        },
        {
            id: 'horoscope',
            icon: Stars,
            path: '/horoscope',
            title: t.cards.horoscope.title,
            desc: t.cards.horoscope.desc,
            button: t.cards.horoscope.button,
            color: '#8b5cf6', // Indigo/Purple
            delay: 0.2
        },
        {
            id: 'spreads',
            icon: LayoutGrid,
            path: '/spread',
            title: t.cards.spreads.title,
            desc: t.cards.spreads.desc,
            button: t.cards.spreads.button,
            color: '#10b981', // Emerald
            delay: 0.3
        }
    ];

    return (
        <main style={{ flex: 1, padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px' }}
            >
                <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                    {t.welcome_title}
                </h1>
                <p className="serif" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    {t.welcome_subtitle}
                </p>
                <div style={{ width: '100px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', margin: '2rem auto' }} />
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                width: '100%',
                maxWidth: '1200px',
                padding: '0 1rem'
            }}>
                {sections.map((section) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: section.delay, duration: 0.5 }}
                    >
                        <Link
                            to={section.path}
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                        >
                            <motion.div
                                className="glass"
                                whileHover={{ y: -10, boxShadow: `0 20px 40px ${section.color}22` }}
                                style={{
                                    padding: '2.5rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    border: `1px solid ${section.color}33`,
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Glow Effect */}
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    right: '0',
                                    height: '2px',
                                    background: `linear-gradient(90deg, transparent, ${section.color}, transparent)`,
                                    opacity: 0.5
                                }} />

                                <div style={{
                                    background: `${section.color}15`,
                                    padding: '1.5rem',
                                    borderRadius: '50%',
                                    marginBottom: '1.5rem',
                                    border: `1px solid ${section.color}33`,
                                    boxShadow: `0 0 20px ${section.color}1a`
                                }}>
                                    <section.icon size={48} style={{ color: section.color }} strokeWidth={1.5} />
                                </div>

                                <h2 className="cinzel" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                    {section.title}
                                </h2>

                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>
                                    {section.desc}
                                </p>

                                <div
                                    className="cinzel"
                                    style={{
                                        color: section.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem',
                                        borderBottom: `1px solid ${section.color}4d`,
                                        paddingBottom: '2px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {section.button} <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
