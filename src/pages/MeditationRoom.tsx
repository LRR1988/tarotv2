import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { type Language } from '../data/translations'
import { Wind, Flame, Waves, Moon, Sparkles, Volume2, VolumeX } from 'lucide-react'
import { soundManager } from '../lib/soundManager'

interface MeditationPageProps {
    language: Language;
}

const landscapes = [
    { id: 'forest', icon: Wind, label_es: 'Viento en el Bosque', label_en: 'Forest Wind', color: '#10b981' },
    { id: 'fire', icon: Flame, label_es: 'Fuego Sagrado', label_en: 'Sacred Fire', color: '#f59e0b' },
    { id: 'water', icon: Waves, label_es: 'Arroyo Infinito', label_en: 'Infinite Stream', color: '#3b82f6' },
    { id: 'night', icon: Moon, label_es: 'Silencio Estelar', label_en: 'Stellar Silence', color: '#8b5cf6' },
] as const;

export function MeditationPage({ language }: MeditationPageProps) {
    const [activeLandscape, setActiveLandscape] = useState<typeof landscapes[number]['id'] | null>(null);

    const toggleLandscape = (id: typeof landscapes[number]['id']) => {
        if (activeLandscape === id) {
            soundManager.stop();
            setActiveLandscape(null);
        } else {
            soundManager.play(id);
            setActiveLandscape(id);
        }
    };

    useEffect(() => {
        return () => {
            // Option: keep playing or stop on unmount? 
            // User might want to keep it while browsing. Let's keep it.
        };
    }, []);

    return (
        <main style={{ flex: 1, padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    {language === 'es' ? 'Cámara de Meditación' : 'Meditation Room'}
                </h1>
                <p className="serif" style={{ color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '1.2rem' }}>
                    {language === 'es' ? 'Sintoniza tu entorno para una conexión profunda.' : 'Tune your surroundings for a deep connection.'}
                </p>
            </div>

            <section style={{ marginBottom: '4rem' }}>
                <h2 className="cinzel gold-text" style={{ fontSize: '1.5rem', marginBottom: '3rem', textAlign: 'center', letterSpacing: '0.2em' }}>
                    {language === 'es' ? 'PAISAJES SONOROS' : 'SOUNDSCAPES'}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem' }}>
                    {landscapes.map(land => (
                        <motion.button
                            key={land.id}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleLandscape(land.id)}
                            className="glass"
                            style={{
                                padding: '3rem 1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem',
                                border: activeLandscape === land.id ? `2px solid ${land.color}` : '1px solid rgba(197, 160, 89, 0.1)',
                                cursor: 'pointer',
                                background: activeLandscape === land.id ? `${land.color}15` : 'rgba(5, 5, 8, 0.4)',
                                boxShadow: activeLandscape === land.id ? `0 0 30px ${land.color}33` : 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ position: 'relative' }}>
                                <land.icon size={48} style={{ color: activeLandscape === land.id ? land.color : 'var(--text-secondary)', opacity: activeLandscape === land.id ? 1 : 0.5 }} />
                                {activeLandscape === land.id && (
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={{ position: 'absolute', inset: -10, border: `2px solid ${land.color}`, borderRadius: '50%' }}
                                    />
                                )}
                            </div>
                            <span style={{ fontSize: '0.8rem', color: activeLandscape === land.id ? '#fff' : 'var(--text-secondary)', fontWeight: activeLandscape === land.id ? 'bold' : 'normal' }} className="cinzel">
                                {language === 'es' ? land.label_es : land.label_en}
                            </span>
                            {activeLandscape === land.id ? <Volume2 size={16} style={{ color: land.color }} /> : <VolumeX size={16} style={{ opacity: 0.3 }} />}
                        </motion.button>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }} className="glass">
                    <div style={{ padding: '2rem' }}>
                        <Sparkles size={24} className="gold-text" style={{ marginBottom: '1rem' }} />
                        <p className="serif" style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                            {language === 'es'
                                ? "Cierra los ojos, respira profundamente y deja que el sonido limpie tu espacio antes de consultar el destino."
                                : "Close your eyes, breathe deeply and let the sound clear your space before consulting destiny."}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
