import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Coins, Activity, Zap, Loader2, X, Sparkles, Compass, Clock, HelpCircle, MessageCircle, Mail } from 'lucide-react'
import { type Language } from '../data/translations'
import { fetchDailyHoroscope, type Horoscope, generateExpansionSynthesis, syncAllMissingHoroscopes } from '../lib/horoscopeService'
import { type OracleDeck, type OracleCard as IOracleCard } from '../data/oracles'
import { OracleCard } from '../components/OracleCard'
import { WaitPopup } from '../components/WaitPopup'
import { ChatRoom } from '../components/ChatRoom'
import { translations } from '../data/translations'

interface HoroscopePageProps {
    language: Language;
    decks: OracleDeck[];
}

const zodiacSignsInfo = [
    { name: 'Aries', date: 'Mar 21 - Apr 19', icon: '♈' },
    { name: 'Tauro', date: 'Apr 20 - May 20', icon: '♉' },
    { name: 'Géminis', date: 'May 21 - Jun 20', icon: '♊' },
    { name: 'Cáncer', date: 'Jun 21 - Jul 22', icon: '♋' },
    { name: 'Leo', date: 'Jul 23 - Aug 22', icon: '♌' },
    { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: '♍' },
    { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎' },
    { name: 'Escorpio', date: 'Oct 23 - Nov 21', icon: '♏' },
    { name: 'Sagitario', date: 'Nov 22 - Dec 21', icon: '♐' },
    { name: 'Capricornio', date: 'Dec 22 - Jan 19', icon: '♑' },
    { name: 'Acuario', date: 'Jan 20 - Feb 18', icon: '♒' },
    { name: 'Piscis', date: 'Feb 19 - Mar 20', icon: '♓' },
];

const MAJOR_ARCANA_NAMES = [
    'El Loco', 'El Mago', 'La Sacerdotisa', 'La Emperatriz', 'El Emperador',
    'El Hierofante', 'Los Enamorados', 'El Carro', 'La Justicia', 'El Ermitaño',
    'La Rueda', 'La Fuerza', 'El Colgado', 'La Muerte', 'La Templanza',
    'El Diablo', 'La Torre', 'La Estrella', 'La Luna', 'El Sol',
    'El Juicio', 'El Mundo'
];

export function HoroscopePage({ language, decks }: HoroscopePageProps) {
    const [selectedSign, setSelectedSign] = useState<string | null>(null);
    const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
    const [loading, setLoading] = useState(false);
    const [selectedArea, setSelectedArea] = useState<{ title: string, content: string, color: string } | null>(null);
    const [expansionCard, setExpansionCard] = useState<IOracleCard | null>(null);
    const [aiSynthesis, setAiSynthesis] = useState<string | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isSynthesizing, setIsSynthesizing] = useState(false);
    const [dailyDraw, setDailyDraw] = useState<{ areaTitle: string, cardId: string, synthesis: string, sign: string } | null>(() => {
        const today = new Date().toISOString().split('T')[0];
        const saved = localStorage.getItem(`horoscope_expansion_${today}`);
        return saved ? JSON.parse(saved) : null;
    });
    const [showWaitPopup, setShowWaitPopup] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const midnight = new Date();
            midnight.setHours(24, 0, 0, 0);
            setTimeLeft(midnight.getTime() - now.getTime());
        };

        updateTimer();
        const interval = setInterval(updateTimer, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        syncAllMissingHoroscopes();
    }, []);

    // Force cleanup of modals and overlays when unmounting
    useEffect(() => {
        return () => {
            setShowWaitPopup(false);
            setExpansionCard(null);
            setIsDrawing(false);
            setIsSynthesizing(false);
            setSelectedArea(null);
            setShowChat(false);
        };
    }, []);

    useEffect(() => {
        if (selectedSign) {
            const loadHoroscope = async () => {
                setLoading(true);
                const data = await fetchDailyHoroscope(selectedSign);
                setHoroscope(data);
                setLoading(false);
            };
            loadHoroscope();
        }
    }, [selectedSign]);

    const handleApplyTarot = async (area: { title: string, content: string, color: string }) => {
        if (dailyDraw) {
            setShowWaitPopup(true);
            return;
        }

        setSelectedArea(area);
        setAiSynthesis(null);
        setIsDrawing(true);

        const tarotDeck = decks.find(d => d.id === 'tarot_master');
        if (tarotDeck) {
            // Strictly filter for the 22 Major Arcana names
            const majorArcana = tarotDeck.cards.filter(c =>
                MAJOR_ARCANA_NAMES.includes(c.name)
            );

            if (majorArcana.length === 0) {
                console.error("No Major Arcana found for expansion");
                setIsDrawing(false);
                return;
            }

            const randomIndex = Math.floor(Math.random() * majorArcana.length);
            const card = majorArcana[randomIndex];

            // Wait for dramatic effect
            await new Promise(resolve => setTimeout(resolve, 2000));
            setExpansionCard(card);
            setIsDrawing(false);

            setIsSynthesizing(true);
            try {
                const synthesis = await generateExpansionSynthesis(
                    selectedSign || '',
                    area.title,
                    area.content,
                    card.name,
                    card.interpretation_present
                );

                setAiSynthesis(synthesis);

                // Save for the rest of the day
                const today = new Date().toISOString().split('T')[0];
                const drawData = {
                    areaTitle: area.title,
                    cardId: card.id,
                    synthesis: synthesis || '',
                    sign: selectedSign || ''
                };
                localStorage.setItem(`horoscope_expansion_${today}`, JSON.stringify(drawData));
                setDailyDraw(drawData);
            } catch (error) {
                console.error("Synthesis failed:", error);
            } finally {
                setIsSynthesizing(false);
            }
        } else {
            setIsDrawing(false);
        }
    };

    const handleViewExistingDraw = async () => {
        if (!dailyDraw) return;

        let currentHoroscope = horoscope;

        // If we need to change signs or load data
        if (selectedSign !== dailyDraw.sign || !horoscope) {
            setLoading(true);
            currentHoroscope = await fetchDailyHoroscope(dailyDraw.sign);
            setSelectedSign(dailyDraw.sign);
            setHoroscope(currentHoroscope);
            setLoading(false);
        }

        if (!currentHoroscope) return;

        const tarotDeck = decks.find(d => d.id === 'tarot_master');
        const card = tarotDeck?.cards.find(c => c.id === dailyDraw.cardId);
        if (card) {
            // Identify original area color and field
            let color = '#10b981';
            let contentKey = 'health';
            const isEs = language === 'es';

            if (dailyDraw.areaTitle === (isEs ? 'Dinero' : 'Money')) {
                color = '#f59e0b';
                contentKey = 'money';
            } else if (dailyDraw.areaTitle === (isEs ? 'Amor' : 'Love')) {
                color = '#ef4444';
                contentKey = 'love';
            } else if (dailyDraw.areaTitle === (isEs ? 'Energía' : 'Energy')) {
                color = '#8b5cf6';
                contentKey = 'energy';
            }

            setSelectedArea({
                title: dailyDraw.areaTitle,
                content: (currentHoroscope as any)[contentKey] || '',
                color
            });
            setExpansionCard(card);
            setAiSynthesis(dailyDraw.synthesis);
        }
    };

    return (
        <main style={{ flex: 1, padding: '2rem 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    {language === 'es' ? 'Horóscopo Celestial' : 'Celestial Horoscope'}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 1.5rem', fontStyle: 'italic' }}>
                    {language === 'es'
                        ? 'Las estrellas susurran los secretos del cosmos. Encuentra tu guía estelar para hoy.'
                        : 'The stars whisper the secrets of the cosmos. Find your stellar guide for today.'}
                </p>
                <Link
                    to="/horoscope/guide"
                    className="cinzel hover-gold"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--gold)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        opacity: 0.8,
                        borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
                        paddingBottom: '2px'
                    }}
                >
                    <HelpCircle size={16} />
                    {language === 'es' ? 'Cómo funciona esta sección' : 'How this section works'}
                </Link>
            </motion.div>

            {!selectedSign ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem',
                    padding: '0 1rem'
                }}>
                    {zodiacSignsInfo.map((sign, index) => (
                        <motion.div
                            key={sign.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="glass"
                            whileHover={{ y: -10, borderColor: 'var(--gold)' }}
                            onClick={() => setSelectedSign(sign.name)}
                            style={{
                                padding: '2rem',
                                borderRadius: '20px',
                                textAlign: 'center',
                                border: '1px solid rgba(197, 160, 89, 0.1)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>{sign.icon}</div>
                            <h3 className="cinzel gold-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{sign.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{sign.date}</p>
                            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', opacity: 0.3, margin: '1rem 0' }}></div>
                            <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', opacity: 0.7 }}>
                                {language === 'es' ? 'Click para revelar tu destino' : 'Click to reveal your destiny'}
                            </p>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}
                >
                    <button
                        onClick={() => { setSelectedSign(null); setHoroscope(null); }}
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
                        {language === 'es' ? '← Volver a los signos' : '← Back to signs'}
                    </button>

                    <div className="glass" style={{ padding: '3rem', borderRadius: '32px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                                {zodiacSignsInfo.find(s => s.name === selectedSign)?.icon}
                            </div>
                            <h2 className="cinzel gold-text shimmer" style={{ fontSize: '3rem' }}>{selectedSign}</h2>
                            <p className="serif" style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>
                                {new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>

                        {loading ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem' }}>
                                <Loader2 size={48} className="gold-text spin" />
                                <p className="serif gold-text" style={{ marginTop: '2rem' }}>
                                    {language === 'es' ? 'Consultando a los astros...' : 'Consulting the stars...'}
                                </p>
                            </div>
                        ) : horoscope ? (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '2rem'
                            }}>
                                <StatCard
                                    icon={<Activity size={20} />}
                                    title={language === 'es' ? 'Salud' : 'Health'}
                                    content={horoscope.health}
                                    color="#10b981"
                                    language={language}
                                    onSelect={() => handleApplyTarot({ title: language === 'es' ? 'Salud' : 'Health', content: horoscope.health, color: '#10b981' })}
                                    isLocked={dailyDraw !== null && !(dailyDraw?.areaTitle === (language === 'es' ? 'Salud' : 'Health') && dailyDraw?.sign === selectedSign)}
                                    hasDrawn={dailyDraw?.areaTitle === (language === 'es' ? 'Salud' : 'Health') && dailyDraw?.sign === selectedSign}
                                    onLockedClick={() => setShowWaitPopup(true)}
                                    onViewDrawn={handleViewExistingDraw}
                                />
                                <StatCard
                                    icon={<Coins size={20} />}
                                    title={language === 'es' ? 'Dinero' : 'Money'}
                                    content={horoscope.money}
                                    color="#f59e0b"
                                    language={language}
                                    onSelect={() => handleApplyTarot({ title: language === 'es' ? 'Dinero' : 'Money', content: horoscope.money, color: '#f59e0b' })}
                                    isLocked={dailyDraw !== null && !(dailyDraw?.areaTitle === (language === 'es' ? 'Dinero' : 'Money') && dailyDraw?.sign === selectedSign)}
                                    hasDrawn={dailyDraw?.areaTitle === (language === 'es' ? 'Dinero' : 'Money') && dailyDraw?.sign === selectedSign}
                                    onLockedClick={() => setShowWaitPopup(true)}
                                    onViewDrawn={handleViewExistingDraw}
                                />
                                <StatCard
                                    icon={<Heart size={20} />}
                                    title={language === 'es' ? 'Amor' : 'Love'}
                                    content={horoscope.love}
                                    color="#ef4444"
                                    language={language}
                                    onSelect={() => handleApplyTarot({ title: language === 'es' ? 'Amor' : 'Love', content: horoscope.love, color: '#ef4444' })}
                                    isLocked={dailyDraw !== null && !(dailyDraw?.areaTitle === (language === 'es' ? 'Amor' : 'Love') && dailyDraw?.sign === selectedSign)}
                                    hasDrawn={dailyDraw?.areaTitle === (language === 'es' ? 'Amor' : 'Love') && dailyDraw?.sign === selectedSign}
                                    onLockedClick={() => setShowWaitPopup(true)}
                                    onViewDrawn={handleViewExistingDraw}
                                />
                                <StatCard
                                    icon={<Zap size={20} />}
                                    title={language === 'es' ? 'Energía' : 'Energy'}
                                    content={horoscope.energy}
                                    color="#8b5cf6"
                                    language={language}
                                    onSelect={() => handleApplyTarot({ title: language === 'es' ? 'Energía' : 'Energy', content: horoscope.energy, color: '#8b5cf6' })}
                                    isLocked={dailyDraw !== null && !(dailyDraw?.areaTitle === (language === 'es' ? 'Energía' : 'Energy') && dailyDraw?.sign === selectedSign)}
                                    hasDrawn={dailyDraw?.areaTitle === (language === 'es' ? 'Energía' : 'Energy') && dailyDraw?.sign === selectedSign}
                                    onLockedClick={() => setShowWaitPopup(true)}
                                    onViewDrawn={handleViewExistingDraw}
                                />
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <p>{language === 'es' ? 'Las nubes ocultan las estrellas hoy. Reintenta más tarde.' : 'Clouds hide the stars today. Try again later.'}</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            <AnimatePresence>
                {showWaitPopup && (
                    <WaitPopup
                        language={language}
                        timeLeft={timeLeft}
                        onClose={() => setShowWaitPopup(false)}
                        onGoToChat={() => { setShowWaitPopup(false); setShowChat(true); }}
                        onSeeCard={handleViewExistingDraw}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {(isDrawing || expansionCard) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 2000,
                            background: 'rgba(5, 5, 8, 0.98)',
                            backdropFilter: 'blur(20px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '6rem 1rem 2rem', // Increased top padding for the fixed X button
                            overflowY: 'auto'
                        }}
                    >
                        <button
                            onClick={() => { setExpansionCard(null); setIsDrawing(false); setSelectedArea(null); }}
                            className="glass"
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                padding: '1rem',
                                borderRadius: '50%',
                                border: '1px solid var(--gold)',
                                color: 'var(--gold)',
                                cursor: 'pointer',
                                zIndex: 10
                            }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', margin: 'auto 0' }}>
                            {isDrawing ? (
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                                    <motion.div
                                        animate={{
                                            rotateY: [0, 360],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Compass size={120} className="gold-text" style={{ opacity: 0.5 }} />
                                    </motion.div>
                                    <h3 className="cinzel gold-text shimmer" style={{ fontSize: '2rem' }}>
                                        {language === 'es' ? 'Sincronizando Destino...' : 'Synchronizing Destiny...'}
                                    </h3>
                                    <p className="serif" style={{ color: selectedArea?.color, fontSize: '1.4rem' }}>
                                        {selectedSign} • {selectedArea?.title}
                                    </p>
                                </div>
                            ) : expansionCard && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div style={{ marginBottom: '3rem', borderBottom: '1px solid rgba(197, 160, 89, 0.2)', paddingBottom: '2rem' }}>
                                        <h3 className="cinzel gold-text" style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
                                            {selectedSign} <span style={{ opacity: 0.5, fontSize: '1.5rem', margin: '0 0.5rem' }}>•</span> {selectedArea?.title}
                                        </h3>
                                        <p className="serif" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                            {language === 'es' ? 'Expansión de Destino' : 'Destiny Expansion'}
                                        </p>
                                    </div>

                                    <div style={{ textAlign: 'left' }}>
                                        <OracleCard
                                            card={expansionCard}
                                            lens="present"
                                            language={language}
                                            simplified={true}
                                        />
                                    </div>

                                    {/* AI Synthesis Section */}
                                    <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(197, 160, 89, 0.05)', borderRadius: '20px', border: '1px solid rgba(197, 160, 89, 0.1)' }}>
                                        <h4 className="cinzel gold-text" style={{ marginBottom: '1.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'center' }}>
                                            <Sparkles size={18} />
                                            {language === 'es' ? 'Consejo Práctico de la Carta' : 'Practical Card Advice'}
                                            <Sparkles size={18} />
                                        </h4>

                                        {isSynthesizing ? (
                                            <div style={{ padding: '1rem', textAlign: 'center' }}>
                                                <motion.div
                                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    style={{ color: 'var(--text-secondary)', fontStyle: 'italic', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                                                >
                                                    <Loader2 className="spin" size={24} style={{ color: 'var(--gold)' }} />
                                                    {language === 'es' ? 'Viendo qué te aconseja esta carta para tu día...' : 'Seeing what this card advises for your day...'}
                                                </motion.div>
                                            </div>
                                        ) : aiSynthesis ? (
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)', textAlign: 'center', fontStyle: 'italic' }}
                                            >
                                                "{aiSynthesis}"
                                            </motion.p>
                                        ) : null}
                                    </div>

                                    <button
                                        onClick={() => { setExpansionCard(null); setSelectedArea(null); }}
                                        className="oracle-button cinzel"
                                        style={{ marginTop: '3rem', padding: '1rem 3rem' }}
                                    >
                                        {language === 'es' ? 'Volver al horóscopo' : 'Back to horoscope'}
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Email Consultation Section */}
            {selectedSign && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        maxWidth: '900px',
                        margin: '4rem auto 0',
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        borderTop: '1px solid rgba(197, 160, 89, 0.2)',
                        background: 'linear-gradient(to bottom, transparent, rgba(197, 160, 89, 0.05))',
                        borderRadius: '32px'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        <a
                            href={`mailto:hola@luzrey.com?subject=${translations[language].horoscopeGuide.email_subject}: ${selectedSign}&body=${translations[language].horoscopeGuide.email_body} ${selectedSign}...`}
                            className="oracle-button cinzel shimmer"
                            style={{
                                padding: '1.2rem 2.5rem',
                                fontSize: '1rem',
                                letterSpacing: '0.1em',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center'
                            }}
                        >
                            <Mail size={20} style={{ marginRight: '0.8rem' }} />
                            {translations[language].card.email_button}
                        </a>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                            {translations[language].card.email_text}
                        </p>
                    </div>
                </motion.div>
            )}

            {/* General Horoscope Chat */}
            <div style={{ maxWidth: '900px', margin: '6rem auto 2rem', padding: '0 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <button
                        onClick={() => setShowChat(!showChat)}
                        className="oracle-button cinzel"
                        style={{ padding: '1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
                    >
                        <MessageCircle size={20} />
                        {showChat
                            ? (language === 'es' ? 'Ocultar Círculo de los Astros' : 'Hide Circle of Stars')
                            : (language === 'es' ? 'Unirse al Círculo de los Astros' : 'Join Circle of Stars')
                        }
                    </button>
                </div>

                <AnimatePresence>
                    {showChat && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{ overflow: 'hidden' }}
                        >
                            <ChatRoom
                                deckId="general_horoscope"
                                deckName={language === 'es' ? 'Horóscopo' : 'Horoscope'}
                                language={language}
                                title={translations[language].chat.horoscope_title}
                                subtitle={translations[language].chat.horoscope_subtitle}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

function StatCard({ icon, title, content, color, onSelect, language, isLocked, hasDrawn, onViewDrawn, onLockedClick }: {
    icon: React.ReactNode,
    title: string,
    content: string,
    color: string,
    onSelect: () => void,
    language: Language,
    isLocked?: boolean,
    hasDrawn?: boolean,
    onViewDrawn?: () => void,
    onLockedClick?: () => void
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, background: 'rgba(197, 160, 89, 0.05)' }}
            className="glass"
            onClick={() => {
                if (hasDrawn) onViewDrawn?.();
                else if (isLocked) onLockedClick?.();
            }}
            style={{
                padding: '2rem',
                borderLeft: `4px solid ${color}`,
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ color }}>{icon}</div>
                <h4 className="cinzel" style={{ fontSize: '1.2rem', color: 'var(--gold-light)' }}>{title}</h4>
            </div>
            <div style={{ lineHeight: '1.6', color: 'var(--text-primary)', fontStyle: 'italic', flex: 1 }}>
                {content.split('\n').map((paragraph, i) => (
                    <p key={i} style={{ marginBottom: i === content.split('\n').length - 1 ? 0 : '1rem' }}>
                        {paragraph}
                    </p>
                ))}
            </div>

            {hasDrawn ? (
                <button
                    onClick={(e) => { e.stopPropagation(); onViewDrawn?.(); }}
                    className="cinzel hover-gold"
                    style={{
                        marginTop: '2rem',
                        background: 'rgba(197, 160, 89, 0.1)',
                        border: `1px solid ${color}`,
                        color: 'var(--gold)',
                        padding: '0.8rem',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        fontSize: '0.8rem'
                    }}
                >
                    <Sparkles size={14} />
                    <span>{language === 'es' ? 'Ver Consejo de Hoy' : 'View Today\'s Advice'}</span>
                </button>
            ) : isLocked ? (
                <button
                    onClick={(e) => { e.stopPropagation(); onLockedClick?.(); }}
                    className="cinzel hover-gold"
                    style={{
                        marginTop: '2rem',
                        background: 'rgba(5, 5, 8, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-secondary)',
                        padding: '0.8rem',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        fontSize: '0.8rem'
                    }}
                >
                    <Clock size={14} style={{ color }} />
                    <span>{language === 'es' ? 'Límite alcanzado' : 'Limit reached'}</span>
                </button>
            ) : (
                <button
                    onClick={(e) => { e.stopPropagation(); onSelect(); }}
                    className="cinzel hover-gold shimmer"
                    style={{
                        marginTop: '2rem',
                        background: 'rgba(5, 5, 8, 0.4)',
                        border: `1px solid ${color}80`,
                        color: '#fff',
                        padding: '0.8rem',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        fontSize: '0.8rem',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <Sparkles size={14} style={{ color }} />
                    <span>{language === 'es' ? 'Ampliar con Tarot' : 'Expand with Tarot'}</span>
                </button>
            )}
        </motion.div>
    );
}
