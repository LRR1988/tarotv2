import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Send, User, MessageCircle, Info, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, type Language } from '../data/translations';
import { useRef } from 'react';

interface Message {
    id: string;
    deck_id: string;
    content: string;
    user_name: string;
    created_at: string;
}

interface ChatRoomProps {
    deckId: string;
    deckName: string;
    language: Language;
    title?: string;
    subtitle?: string;
}

export const ChatRoom = ({ deckId, deckName, language, title, subtitle }: ChatRoomProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [userName, setUserName] = useState(() => localStorage.getItem('oracle_user_name') || '');
    const [isSettingName, setIsSettingName] = useState(!localStorage.getItem('oracle_user_name'));
    const [timeLeftToMidnight, setTimeLeftToMidnight] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const t = translations[language].chat;


    useEffect(() => {
        // Fetch today's messages
        const fetchMessages = async () => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const { data, error } = await supabase
                .from('messages')
                .select('*')
                .eq('deck_id', deckId)
                .gte('created_at', today.toISOString())
                .order('created_at', { ascending: true });

            if (error) {
                console.error('Error fetching messages:', error);
            } else {
                setMessages(data || []);
            }
        };

        fetchMessages();

        // Subscribe to real-time changes
        const channel = supabase
            .channel(`deck-chat-${deckId}`)
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'messages',
                    filter: `deck_id=eq.${deckId}`
                },
                (payload) => {
                    const newMsg = payload.new as Message;
                    setMessages((prev) => [...prev, newMsg]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [deckId]);

    useEffect(() => {
        // Scroll solo si hay mensajes nuevos, pero usando scrollTop para evitar mover la ventana principal
        const chatContainer = document.querySelector('.chat-messages');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        let lastDay = new Date().getDate();

        const updateTimer = () => {
            const now = new Date();

            // Check for day change (Midnight Reset)
            if (now.getDate() !== lastDay) {
                lastDay = now.getDate();
                setMessages([]); // Clear chat visually
                // Optionally re-fetch to get any new messages from the new day (likely 0)
            }

            const midnight = new Date();
            midnight.setHours(24, 0, 0, 0);
            const diff = midnight.getTime() - now.getTime();

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            setTimeLeftToMidnight(`${hours}h ${minutes}m`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    // Auto-scroll to bottom when messages change (only within chat container)
    useEffect(() => {
        const chatContainer = document.querySelector('.chat-messages');
        if (chatContainer && messagesEndRef.current) {
            // Scroll only the chat container, not the whole page
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || !userName) return;

        const content = newMessage.trim();

        // 1. Length validation (max 500 characters)
        if (content.length > 500) {
            alert(language === 'es'
                ? 'El mensaje es demasiado largo. Máximo 500 caracteres.'
                : 'Message is too long. Maximum 500 characters.');
            return;
        }

        // 2. URL/Link detection and blocking
        const urlPattern = /(https?:\/\/|www\.|http:\/\/|\.com|\.net|\.org|\.io|\.es|\.co)/i;
        if (urlPattern.test(content)) {
            alert(language === 'es'
                ? 'No se permiten enlaces en el chat.'
                : 'Links are not allowed in the chat.');
            return;
        }

        // 3. Rate limiting (3 seconds between messages)
        const lastMessageTime = localStorage.getItem('last_message_time');
        const now = Date.now();
        if (lastMessageTime) {
            const timeSinceLastMessage = now - parseInt(lastMessageTime);
            if (timeSinceLastMessage < 3000) {
                const waitTime = Math.ceil((3000 - timeSinceLastMessage) / 1000);
                alert(language === 'es'
                    ? `Por favor espera ${waitTime} segundos antes de enviar otro mensaje.`
                    : `Please wait ${waitTime} seconds before sending another message.`);
                return;
            }
        }

        // 4. Duplicate message detection (check last 3 messages)
        const recentMessages = messages.slice(-3);
        const isDuplicate = recentMessages.some(msg =>
            msg.user_name === userName && msg.content.toLowerCase() === content.toLowerCase()
        );
        if (isDuplicate) {
            alert(language === 'es'
                ? 'No puedes enviar el mismo mensaje repetidamente.'
                : 'You cannot send the same message repeatedly.');
            return;
        }

        // 5. Spam words filter
        const spamWords = [
            'viagra', 'casino', 'lottery', 'winner', 'click here',
            'buy now', 'limited offer', 'act now', 'free money',
            'bitcoin', 'crypto', 'investment', 'profit', 'earn money'
        ];
        const containsSpam = spamWords.some(word =>
            content.toLowerCase().includes(word.toLowerCase())
        );
        if (containsSpam) {
            alert(language === 'es'
                ? 'Tu mensaje contiene contenido no permitido.'
                : 'Your message contains prohibited content.');
            return;
        }

        // All validations passed - send message
        const { error } = await supabase.from('messages').insert([
            {
                deck_id: deckId,
                content: content,
                user_name: userName
            }
        ]);

        if (error) {
            console.error('Error sending message:', error);
            alert(language === 'es'
                ? 'Error al enviar el mensaje. Intenta de nuevo.'
                : 'Error sending message. Please try again.');
        } else {
            setNewMessage('');
            localStorage.setItem('last_message_time', now.toString());
        }
    };

    const handleSetName = (e: React.FormEvent) => {
        e.preventDefault();
        if (userName.trim()) {
            localStorage.setItem('oracle_user_name', userName.trim());
            setIsSettingName(false);
        }
    };

    return (
        <div className="chat-container">
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', opacity: 0.8 }}>
                    <MessageCircle size={18} />
                    <h3 className="cinzel" style={{ fontSize: '1.2rem', margin: 0 }}>
                        {title || `${t.title} ${deckName}`}
                    </h3>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', opacity: 0.7 }}>
                    {subtitle || t.subtitle}
                </p>
            </div>

            <div className="glass" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <AnimatePresence mode="wait">
                    {isSettingName ? (
                        <motion.form
                            key="name-form"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSetName}
                            style={{
                                padding: '3rem 2rem',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: 'rgba(197, 160, 89, 0.1)',
                                border: '1px solid rgba(197, 160, 89, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '0.5rem'
                            }}>
                                <User size={28} className="gold-text" />
                            </div>

                            <div>
                                <h4 className="cinzel gold-text shimmer" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{t.identity_title}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t.identity_text}</p>
                            </div>

                            <div className="chat-input-area" style={{
                                maxWidth: '350px',
                                width: '100%',
                                margin: '0 auto',
                                padding: '0.4rem',
                                display: 'flex',
                                background: 'rgba(0, 0, 0, 0.4)',
                                border: '1px solid var(--gold)',
                                borderRadius: '50px',
                                boxShadow: '0 0 20px rgba(197, 160, 89, 0.1)'
                            }}>
                                <input
                                    className="chat-input"
                                    placeholder={t.placeholder_name}
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    autoFocus
                                    style={{
                                        paddingLeft: '1.5rem',
                                        fontSize: '1rem',
                                        color: 'var(--gold-light)'
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="oracle-button"
                                    style={{
                                        padding: '0.6rem 1.8rem',
                                        borderRadius: '30px',
                                        fontSize: '0.9rem',
                                        margin: '2px',
                                        border: 'none',
                                        background: 'var(--gold)',
                                        color: '#000',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {t.join}
                                </button>
                            </div>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="chat-box"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <div className="chat-messages">
                                {messages.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '3rem', opacity: 0.4 }}>
                                        <p className="serif italic">{t.empty_state}</p>
                                    </div>
                                ) : (
                                    messages.map((msg) => (
                                        <div key={msg.id} className={`message-bubble ${msg.user_name === userName ? 'own' : ''}`}>
                                            <span className="message-user">{msg.user_name}</span>
                                            <p className="message-text">{msg.content}</p>
                                            <div className="message-time">
                                                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    ))
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <form onSubmit={handleSendMessage} className="chat-input-area" style={{ marginTop: '1rem' }}>
                                <input
                                    className="chat-input"
                                    placeholder={`${t.placeholder_msg} ${deckName}...`}
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="oracle-button"
                                    disabled={!newMessage.trim()}
                                    style={{ cursor: newMessage.trim() ? 'pointer' : 'not-allowed' }}
                                >
                                    <Send size={18} />
                                </button>
                            </form>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', padding: '0 0.5rem' }}>
                                <div className="mandala-status">
                                    <Clock size={14} />
                                    {t.dissolution} {timeLeftToMidnight}
                                </div>
                                <button
                                    onClick={() => setIsSettingName(true)}
                                    style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: '0.7rem', cursor: 'pointer', opacity: 0.5 }}
                                >
                                    {t.change_nick} ({userName})
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mandala-info">
                <Info size={12} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
                {t.mandala_info}
            </div>
        </div>
    );
};
