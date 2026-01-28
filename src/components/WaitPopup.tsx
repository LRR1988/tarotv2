import { motion } from 'framer-motion';
import { Clock, X, MessageCircle, Mail, Sparkles } from 'lucide-react';

import { translations, type Language } from '../data/translations';

interface WaitPopupProps {
    onClose: () => void;
    timeLeft: number | null;
    onGoToChat: () => void;
    language: Language;
    onSeeCard?: () => void;
}

export const WaitPopup = ({ onClose, timeLeft, onGoToChat, language, onSeeCard }: WaitPopupProps) => {
    const t = translations[language].wait;
    const formatTimeLeft = (ms: number) => {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 200,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '2rem 1rem',
                background: 'rgba(5, 5, 8, 0.85)',
                backdropFilter: 'blur(5px)',
                overflowY: 'auto'
            }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="glass"
                onClick={(e) => e.stopPropagation()}
                style={{
                    maxWidth: '500px',
                    width: '100%',
                    padding: '2.5rem',
                    position: 'relative',
                    textAlign: 'center',
                    border: '1px solid var(--gold)',
                    boxShadow: '0 0 40px rgba(197, 160, 89, 0.2)',
                    margin: 'auto'
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                    }}
                >
                    <X size={20} />
                </button>

                <div style={{ color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    <Clock size={48} strokeWidth={1} />
                </div>

                <h3 className="cinzel gold-text" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
                    {t.title}
                </h3>

                <p style={{ color: 'var(--text-primary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {t.text}
                </p>

                {timeLeft && (
                    <div style={{
                        background: 'rgba(197, 160, 89, 0.1)',
                        padding: '0.8rem',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                        display: 'inline-block',
                        border: '1px solid rgba(197, 160, 89, 0.2)'
                    }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--gold-light)' }}>
                            {t.next_consult} <strong>{formatTimeLeft(timeLeft)}</strong>
                        </span>
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {onSeeCard && (
                        <button
                            onClick={() => {
                                onSeeCard();
                                onClose();
                            }}
                            className="oracle-button cinzel shimmer"
                            style={{ justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}
                        >
                            <Sparkles size={20} /> {t.see_card}
                        </button>
                    )}

                    <button
                        onClick={() => {
                            onGoToChat();
                            onClose();
                        }}
                        className="oracle-button"
                        style={{ justifyContent: 'center', fontSize: '0.95rem' }}
                    >
                        <MessageCircle size={18} /> {t.chat_button}
                    </button>

                    <a
                        href="mailto:hola@oraculoluzrey.com?subject=Consulta%20Oráculo&body=Hola%20Luz,%20deseo%20hacer%20una%20consulta%20personal..."
                        className="glass"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.8rem',
                            borderRadius: '30px',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <Mail size={16} /> {t.email_button}
                    </a>
                </div>

            </motion.div>
        </motion.div>
    );
};
