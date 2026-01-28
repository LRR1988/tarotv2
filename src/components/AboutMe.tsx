import { motion } from 'framer-motion';
import { User, X, Sparkles } from 'lucide-react';

import { translations, type Language } from '../data/translations';

interface AboutMeProps {
    onClose: () => void;
    language: Language;
}

export const AboutMe = ({ onClose, language }: AboutMeProps) => {
    const t = translations[language].about;
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
                background: 'rgba(5, 5, 8, 0.9)',
                backdropFilter: 'blur(10px)'
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
                    padding: '4rem 3rem',
                    position: 'relative',
                    border: '1px solid var(--gold)',
                    boxShadow: '0 0 60px rgba(197, 160, 89, 0.15)',
                    lineHeight: '1.8'
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

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 1.5rem',
                        borderRadius: '50%',
                        border: '2px solid var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(197, 160, 89, 0.05)'
                    }}>
                        <User className="gold-text" size={40} strokeWidth={1} />
                    </div>
                    <h2 className="cinzel gold-text" style={{ fontSize: '2.5rem', letterSpacing: '0.1em' }}>{t.title}</h2>
                    <div style={{ width: '50px', height: '1px', background: 'var(--gold)', margin: '1rem auto', opacity: 0.5 }}></div>
                </div>

                <div className="serif" style={{ color: 'var(--text-primary)', fontSize: '1.1rem', textAlign: 'justify' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        {t.text[0]}<br />
                        {language === 'es' ? (
                            <>Mi nombre es <strong>{t.role}</strong>.<br /></>
                        ) : (
                            <>My name is <strong>{t.role}</strong>.<br /></>
                        )
                        }
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        {t.text[1]}
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        {t.text[2]}<br />
                        {t.text[3]}
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        {t.text[4]}
                    </p>

                    <p style={{ marginBottom: '2rem', fontStyle: 'italic', color: 'var(--gold-light)', textAlign: 'center', fontSize: '1.2rem' }}>
                        {t.text[5]}
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        {t.text[6]}<br />
                        <strong>{t.text[7]}</strong>.
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        {t.text[8]}
                    </p>

                    <p style={{ marginBottom: '1.5rem' }}>
                        {t.text[9]}<br />
                        {t.text[10]}
                    </p>

                    <p style={{ marginBottom: '2rem' }}>
                        {t.text[11]}<br />
                        <strong>{t.text[12]}</strong>.
                    </p>

                    <div style={{ textAlign: 'right', marginTop: '3rem' }}>
                        <span className="cinzel gold-text" style={{ fontSize: '1.4rem' }}>— {t.role}</span>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                            <Sparkles size={16} className="gold-text" style={{ opacity: 0.5 }} />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <button
                        className="oracle-button cinzel shimmer"
                        onClick={onClose}
                        style={{ padding: '1rem 3rem' }}
                    >
                        {t.back}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};
