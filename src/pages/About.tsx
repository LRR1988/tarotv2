import { motion } from 'framer-motion'
import { translations, type Language } from '../data/translations'

interface AboutPageProps {
    language: Language;
}

export function AboutPage({ language }: AboutPageProps) {
    const t = translations[language];
    const about = t.about;

    return (
        <main style={{ flex: 1, padding: '2rem 0' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="glass"
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '4rem',
                    borderRadius: '32px',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{about.title}</h1>
                    <p className="serif gold-text" style={{ fontSize: '1.2rem', opacity: 0.8, letterSpacing: '0.2em' }}>{about.role}</p>
                    <div style={{
                        height: '2px',
                        width: '100px',
                        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                        margin: '2rem auto'
                    }}></div>
                </div>

                <div className="serif" style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {about.text.map((paragraph: string, index: number) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            style={{
                                marginBottom: '1.5rem',
                                fontStyle: paragraph.startsWith('"') ? 'italic' : 'normal',
                                color: paragraph.startsWith('"') ? 'var(--gold-light)' : 'var(--text-primary)',
                                textAlign: paragraph.startsWith('"') ? 'center' : 'justify',
                                fontSize: paragraph.startsWith('"') ? '1.3rem' : '1.1rem'
                            }}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
