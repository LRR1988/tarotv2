import { useState } from 'react'
import { motion } from 'framer-motion'
import { getHistory, type HistoryEntry } from '../lib/historyService'
import { type Language } from '../data/translations'
import { Clock, Calendar } from 'lucide-react'

interface HistoryPageProps {
    language: Language;
}

export function HistoryPage({ language }: HistoryPageProps) {
    const [history] = useState<HistoryEntry[]>(() => getHistory());



    return (
        <main style={{ flex: 1, padding: '2rem 1rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {language === 'es' ? 'Diario de Sombras' : 'Shadow Journal'}
                </h1>
                <p className="serif" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    {language === 'es' ? 'El rastro de tu camino a través de los espejos del alma.' : 'The trail of your path through the mirrors of the soul.'}
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                {history.length > 0 ? history.map((entry, index) => (
                    <motion.div
                        key={entry.date}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass"
                        style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center', borderLeft: '4px solid var(--gold)' }}
                    >
                        <div style={{ width: '80px', height: '120px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                            <img src={entry.image} alt={entry.cardName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 className="cinzel gold-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{entry.cardName}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                                <Calendar size={14} /> {new Date(entry.date).toLocaleDateString()}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.7 }}>
                                <Clock size={14} /> {entry.lens.toUpperCase()}
                            </div>
                        </div>
                    </motion.div>
                )) : (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '4rem', opacity: 0.5 }} className="serif">
                        {language === 'es' ? 'Aún no has caminado por el oráculo hoy.' : 'You haven\'t walked the oracle today yet.'}
                    </div>
                )}
            </div>
        </main>
    );
}
