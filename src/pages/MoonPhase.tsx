import { motion } from 'framer-motion'
import { getMoonPhase } from '../lib/moonService'
import { type Language } from '../data/translations'
import { Sparkles, Compass } from 'lucide-react'

interface MoonPhasePageProps {
    language: Language;
}

export function MoonPhasePage({ language }: MoonPhasePageProps) {
    const moon = getMoonPhase();

    return (
        <main style={{ flex: 1, padding: '2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="glass"
                style={{
                    maxWidth: '800px',
                    width: '100%',
                    padding: '5rem 3rem',
                    borderRadius: '60px',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    textAlign: 'center',
                    position: 'relative',
                    background: 'radial-gradient(circle at center, rgba(197, 160, 89, 0.08) 0%, rgba(5, 5, 8, 0.6) 100%)',
                    boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                }}
            >
                <div style={{ position: 'absolute', top: '10%', left: '10%', opacity: 0.1 }}><Sparkles size={40} className="gold-text" /></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '10%', opacity: 0.1 }}><Sparkles size={40} className="gold-text" /></div>

                <motion.div
                    animate={{
                        rotate: [0, 5, -5, 0],
                        filter: ['drop-shadow(0 0 20px rgba(197, 160, 89, 0.1))', 'drop-shadow(0 0 40px rgba(197, 160, 89, 0.5))', 'drop-shadow(0 0 20px rgba(197, 160, 89, 0.1))']
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ fontSize: '12rem', marginBottom: '0rem', lineHeight: 1 }}
                >
                    {moon.icon}
                </motion.div>

                <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', letterSpacing: '0.4em' }}>
                    {moon.name}
                </h1>

                <p className="serif" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '4rem', opacity: 0.8 }}>
                    {moon.desc}
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    style={{
                        padding: '3rem',
                        borderTop: '1px solid rgba(197, 160, 89, 0.2)',
                        background: 'linear-gradient(to bottom, rgba(197, 160, 89, 0.03), transparent)'
                    }}
                >
                    <Compass size={32} className="gold-text" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
                    <h2 className="cinzel gold-text" style={{ fontSize: '1rem', letterSpacing: '0.3em', marginBottom: '1.5rem', opacity: 0.7 }}>
                        {language === 'es' ? 'EL LLAMAMIENTO DEL DÍA' : 'THE DAILY CALLING'}
                    </h2>
                    <p className="serif" style={{
                        color: 'var(--text-primary)',
                        fontSize: '1.6rem',
                        lineHeight: '1.5',
                        fontStyle: 'italic',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        {language === 'es' ? moon.call.es : moon.call.en}
                    </p>
                </motion.div>

                <div style={{ marginTop: '4rem', opacity: 0.4, fontSize: '0.8rem', letterSpacing: '0.2em' }} className="cinzel">
                    {new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}
                </div>
            </motion.div>
        </main>
    );
}
