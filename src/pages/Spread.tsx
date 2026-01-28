import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Compass, BookOpen, Sparkles, Sword, Trophy, Coins, Flame, User, Image, Info, X, Zap, ArrowRight, RefreshCw, LayoutTemplate, Layers, MessageSquare, Brain, Mail, Clock } from 'lucide-react';
import { type Language, translations } from '../data/translations';
import { type OracleDeck, type OracleCard } from '../data/oracles';
import { callOpenRouter } from '../lib/horoscopeService';
import { WaitPopup } from '../components/WaitPopup';

interface SpreadPageProps {
    language: Language;
    decks: OracleDeck[];
}

type Tab = 'knowledge' | 'consult' | 'archive';
type SpreadId = 'formula' | 'celta' | 'roles' | null;

export function SpreadPage({ language, decks }: SpreadPageProps) {
    const t = translations[language];
    const navigate = useNavigate();
    const location = useLocation();

    // Derive active tab from URL subpath
    const activeTab = useMemo<Tab>(() => {
        const parts = location.pathname.split('/').filter(Boolean);
        if (parts.includes('consult')) return 'consult';
        if (parts.includes('archive')) return 'archive';
        return 'knowledge';
    }, [location.pathname]);

    // Handle card ID from URL
    const { "*": splat } = useParams();
    const urlCardId = useMemo(() => {
        const parts = (splat || '').split('/');
        return parts.length > 1 && parts[0] === 'archive' ? parts[1] : null;
    }, [splat]);

    useEffect(() => {
        if (urlCardId) {
            setSelectedCardId(urlCardId);
        } else if (activeTab === 'archive') {
            setSelectedCardId(null);
        }
    }, [urlCardId, activeTab]);

    // Redirect to default subpath if none specified
    useEffect(() => {
        if (location.pathname === '/spread' || location.pathname === '/spread/') {
            navigate('/spread/knowledge', { replace: true });
        }
    }, [location.pathname, navigate]);

    const [activeSpread, setActiveSpread] = useState<SpreadId>(null);
    const [selectedCards, setSelectedCards] = useState<OracleCard[]>([]);
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [revealedCount, setRevealedCount] = useState(0);
    const [userQuery, setUserQuery] = useState('');
    const [aiInterpretation, setAiInterpretation] = useState<string | null>(null);
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [showWaitPopup, setShowWaitPopup] = useState(false);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    const hasDrawnToday = useMemo(() => {
        const today = new Date().toISOString().split('T')[0];
        return localStorage.getItem('last_master_spread_date') === today;
    }, []);

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

    // Force cleanup when unmounting to prevent visual artifacts
    useEffect(() => {
        return () => {
            setShowWaitPopup(false);
            setActiveSpread(null);
            setSelectedCardId(null);
            setIsDrawing(false);
            setIsAiLoading(false);
        };
    }, []);

    // Use only tarot_master cards for all Master Spreads logic
    const allCards = useMemo(() => {
        const tarotDeck = decks.find(d => d.id === 'tarot_master');
        return tarotDeck ? tarotDeck.cards.map(c => ({ ...c, deck_id: 'tarot_master' })) : [];
    }, [decks]);

    const foundations = {
        reinos: [
            { id: 'bastos', icon: Flame, color: '#f59e0b', title: language === 'es' ? 'Bastos' : 'Wands', element: language === 'es' ? 'Fuego / Voluntad' : 'Fire / Will', psychological: language === 'es' ? 'Intuición / Impulso' : 'Intuition / Impulses', practical: language === 'es' ? 'Trabajo y Proyectos' : 'Work and Projects', desc: language === 'es' ? 'Permite medir el flujo de pasión, carisma y capacidad ejecutiva.' : 'Measures the flow of passion, charisma, and executive capacity.' },
            { id: 'copas', icon: Trophy, color: '#3b82f6', title: language === 'es' ? 'Copas' : 'Cups', element: language === 'es' ? 'Agua / Emociones' : 'Water / Emotions', psychological: language === 'es' ? 'Sentimiento' : 'Feelings', practical: language === 'es' ? 'Amor y Relaciones' : 'Love and Relationships', desc: language === 'es' ? 'Revela el estado de los vínculos, la nutrición interna y la empatía.' : 'Reveals the state of bonds, inner nourishment, and empathy.' },
            { id: 'espadas', icon: Sword, color: '#6366f1', title: language === 'es' ? 'Espadas' : 'Swords', element: language === 'es' ? 'Aire / Lógica' : 'Air / Logic', psychological: language === 'es' ? 'Pensamiento' : 'Thought', practical: language === 'es' ? 'Comunicación y Mente' : 'Communication and Mind', desc: language === 'es' ? 'Es vital para identificar conflictos, clarificar ideas y ejercer la palabra.' : 'Vital for identifying conflicts, clarifying ideas, and exercising communication.' },
            { id: 'oros', icon: Coins, color: '#10b981', title: language === 'es' ? 'Oros' : 'Pentacles', element: language === 'es' ? 'Tierra / Materia' : 'Earth / Material', psychological: language === 'es' ? 'Sensopercepción' : 'Sensation', practical: language === 'es' ? 'Dinero y Recursos' : 'Money and Resources', desc: language === 'es' ? 'Facilita la gestión de la estabilidad física, los ahorros y la salud.' : 'Facilitates managing physical stability, savings, and health.' },
        ],
        corte: [
            { id: 'paje', title: language === 'es' ? 'Sota (Paje)' : 'Page', func: language === 'es' ? 'Traer un mensaje' : 'Bring a message', logic: language === 'es' ? 'Mensaje' : 'Message', desc: language === 'es' ? 'El umbral del potencial. Detecta oportunidades o inicia aprendizajes.' : 'The threshold of potential. Detects opportunities or initiates learning.' },
            { id: 'caballero', title: language === 'es' ? 'Caballero' : 'Knight', func: language === 'es' ? 'Conseguir un objetivo' : 'Reach a goal', logic: language === 'es' ? 'Objetivo' : 'Objective', desc: language === 'es' ? 'El ejecutor de la voluntad. Impulsividad dirigida hacia la conquista.' : 'The executor of will. Impulsivity directed towards conquest.' },
            { id: 'reina', title: language === 'es' ? 'Reina' : 'Queen', func: language === 'es' ? 'Cuidar y gestionar' : 'Care and Manage', logic: language === 'es' ? 'Cuidado' : 'Care', desc: language === 'es' ? 'La guardiana de la coherencia interna. Administra, nutre y protege.' : 'The guardian of inner coherence. Administers, nurtures, and protects.' },
            { id: 'rey', title: language === 'es' ? 'Rey' : 'King', func: language === 'es' ? 'Gobernar y decidir' : 'Rule and Decide', logic: language === 'es' ? 'Control' : 'Control', desc: language === 'es' ? 'El arquitecto del control absoluto. Ejerce la autoridad final.' : 'The architect of absolute control. Exercises final authority.' },
        ],
        numerologia: [
            { n: 1, title: language === 'es' ? 'El As: Semilla' : 'The Ace: Seed', desc: language === 'es' ? 'Potencial absoluto. Aún no es, pero puede ser.' : 'Absolute potential. It is not yet, but it can be.' },
            { n: 2, title: language === 'es' ? 'El Dos: Dualidad' : 'The Two: Duality', desc: language === 'es' ? 'Elección, balance o aparición del "Otro".' : 'Choice, balance, or appearance of the "Other".' },
            { n: 3, title: language === 'es' ? 'El Tres: Expansión' : 'The Three: Expansion', desc: language === 'es' ? 'Primer fruto, creatividad y dinamismo real.' : 'First fruit, creativity, and real dynamism.' },
            { n: 4, title: language === 'es' ? 'El Cuatro: Estabilidad' : 'The Four: Stability', desc: language === 'es' ? 'Orden, seguridad y descanso. Riesgo de estancamiento.' : 'Order, security, and rest. Risk of stagnation.' },
            { n: 5, title: language === 'es' ? 'El Cinco: Crisis' : 'The Five: Crisis', desc: language === 'es' ? 'Desequilibrio necesario para la evolución.' : 'Necessary imbalance for evolution.' },
            { n: 6, title: language === 'es' ? 'El Seis: Armonía' : 'The Six: Harmony', desc: language === 'es' ? 'Equilibrio maduro y flexible tras la crisis.' : 'Mature and flexible balance after the crisis.' },
            { n: 7, title: language === 'es' ? 'El Siete: Éxito' : 'The Seven: Success', desc: language === 'es' ? 'Individualidad y perseverancia frente a presiones.' : 'Individuality and perseverance against pressures.' },
            { n: 8, title: language === 'es' ? 'El Ocho: Dominio' : 'The Eight: Mastery', desc: language === 'es' ? 'Poder absoluto o saturación técnica densa.' : 'Absolute power or dense technical saturation.' },
            { n: 9, title: language === 'es' ? 'El Nueve: Culminación' : 'The Nine: Culmination', desc: language === 'es' ? 'Madurez individual antes del cierre final.' : 'Individual maturity before final closure.' },
            { n: 10, title: language === 'es' ? 'El Diez: Completitud' : 'The Ten: Completion', desc: language === 'es' ? 'Final de camino. Exige transformación obligatoria.' : 'End of the road. Mandatory transformation required.' }
        ]
    };

    const celtaPositions = [
        { label: language === 'es' ? 'Momento Actual (Base)' : 'Current Moment (Base)', pos: { x: 0, y: 0 } },
        { label: language === 'es' ? 'Lo que Cruza (Desafío)' : 'What Crosses (Challenge)', pos: { x: 0, y: 0, rotate: 90, layer: 2 } },
        { label: language === 'es' ? 'La Raíz (Pasado)' : 'The Root (Past)', pos: { x: 0, y: 220 } },
        { label: language === 'es' ? 'La Corona (Meta)' : 'The Crown (Goal)', pos: { x: 0, y: -220 } },
        { label: language === 'es' ? 'Pasado Cercano' : 'Near Past', pos: { x: -220, y: 0 } },
        { label: language === 'es' ? 'Futuro Cercano' : 'Near Future', pos: { x: 220, y: 0 } },
        { label: language === 'es' ? 'El Yo (Consultante)' : 'The Self (Consultant)', pos: { x: 450, y: 220, column: true } },
        { label: language === 'es' ? 'El Entorno' : 'Environment', pos: { x: 450, y: 80, column: true } },
        { label: language === 'es' ? 'Miedos/Esperanzas' : 'Fears/Hopes', pos: { x: 450, y: -60, column: true } },
        { label: language === 'es' ? 'El Resultado' : 'Outcome', pos: { x: 450, y: -200, column: true } },
    ];

    const generateAIInterpretation = async (cards: OracleCard[], query: string) => {
        if (!query) return;
        setIsAiLoading(true);
        const cardDetails = cards.map((c, i) => `${i + 1}. ${c.name}: ${c.interpretation_present}`).join('\n');

        const prompt = language === 'es'
            ? `Actúa como Luz Rey, una consejera mística sabia y directa. 
               El consultante pregunta: "${query}"
               Las cartas que han salido en la tirada son:
               ${cardDetails}
               
               Instrucciones:
               - Integra el significado de las cartas con la pregunta específica del usuario.
               - Usa un tono místico pero muy práctico y terrenal.
               - No uses muletillas como "Esta carta simboliza". Ve al grano.
               - Máximo 3 párrafos cortos y evocadores.`
            : `Act as Luz Rey, a wise and direct mystical counselor.
               The user asks: "${query}"
               The cards drawn in the spread are:
               ${cardDetails}
               
               Instructions:
               - Integrate the meaning of the cards with the user's specific question.
               - Use a mystical yet very practical and grounded tone.
               - Don't use filler phrases like "This card symbolizes". Get to the point.
               - Maximum 3 short, evocative paragraphs.`;

        try {
            const response = await callOpenRouter(prompt);
            setAiInterpretation(response);
        } catch (err) {
            console.error("AI Interpretation Error:", err);
        } finally {
            setIsAiLoading(false);
        }
    };

    const handleDraw = async (count: number) => {
        if (hasDrawnToday) {
            setShowWaitPopup(true);
            return;
        }

        setIsDrawing(true);
        setRevealedCount(0);
        setAiInterpretation(null);
        await new Promise(r => setTimeout(r, 1000));
        const shuffled = [...allCards].sort(() => Math.random() - 0.5);
        const draw = shuffled.slice(0, count);
        setSelectedCards(draw);
        setIsDrawing(false);

        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('last_master_spread_date', today);

        if (userQuery) {
            generateAIInterpretation(draw, userQuery);
        }
    };

    const getCardLogic = (card: OracleCard) => {
        const suit = foundations.reinos.find(r => r.id === card.suit);
        const rank = foundations.corte.find(c => c.id === card.rank);
        const num = foundations.numerologia.find(n => n.n === card.number);

        if (card.card_type === 'court' && rank && suit) {
            return {
                formula: `${rank.logic} + ${suit.practical.split(' ')[0]}`,
                sintesis: language === 'es'
                    ? `Acción de ${rank.logic} en el ámbito de ${suit.practical}.`
                    : `${rank.logic} action in the domain of ${suit.practical}.`
            };
        }
        if (card.card_type === 'minor' && num && suit) {
            const numLabel = num.title.includes(':') ? num.title.split(':')[1].trim() : num.title;
            return {
                formula: `${numLabel} + ${suit.practical.split(' ')[0]}`,
                sintesis: language === 'es'
                    ? `Etapa de ${numLabel} en ${suit.practical}.`
                    : `Stage of ${numLabel} in ${suit.practical}.`
            };
        }
        return null;
    };

    return (
        <main style={{ flex: 1, padding: '2rem 1rem', maxWidth: '1400px', margin: '0 auto', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
            {/* Header section with Tabs */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="cinzel gold-text shimmer"
                    style={{ fontSize: '3rem', marginBottom: '1rem' }}
                >
                    {t.spreads.knowledge.title}
                </motion.h1>
                <p className="serif" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                    {t.spreads.knowledge.subtitle}
                </p>

                <div style={{ display: 'inline-flex', background: 'rgba(197, 160, 89, 0.05)', padding: '0.4rem', borderRadius: '15px', border: '1px solid rgba(197, 160, 89, 0.1)' }}>
                    <button
                        onClick={() => { navigate('/spread/knowledge'); setActiveSpread(null); setSelectedCards([]); setUserQuery(''); setAiInterpretation(null); }}
                        className="cinzel"
                        style={{
                            padding: '0.8rem 2rem', border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s',
                            background: activeTab === 'knowledge' ? 'var(--gold)' : 'transparent',
                            color: activeTab === 'knowledge' ? '#000' : 'var(--text-secondary)',
                            display: 'flex', alignItems: 'center', gap: '0.8rem'
                        }}
                    >
                        <BookOpen size={18} />
                        {t.spreads.tabs.knowledge}
                    </button>
                    <button
                        onClick={() => { navigate('/spread/consult'); setActiveSpread(null); setAiInterpretation(null); }}
                        className="cinzel"
                        style={{
                            padding: '0.8rem 2rem', border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s',
                            background: activeTab === 'consult' ? 'var(--gold)' : 'transparent',
                            color: activeTab === 'consult' ? '#000' : 'var(--text-secondary)',
                            display: 'flex', alignItems: 'center', gap: '0.8rem'
                        }}
                    >
                        <Compass size={18} />
                        {t.spreads.tabs.consult}
                    </button>
                    <button
                        onClick={() => { navigate('/spread/archive'); setActiveSpread(null); setAiInterpretation(null); }}
                        className="cinzel"
                        style={{
                            padding: '0.8rem 2rem', border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s',
                            background: activeTab === 'archive' ? 'var(--gold)' : 'transparent',
                            color: activeTab === 'archive' ? '#000' : 'var(--text-secondary)',
                            display: 'flex', alignItems: 'center', gap: '0.8rem'
                        }}
                    >
                        <Layers size={18} />
                        {t.spreads.tabs.archive}
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'knowledge' ? (
                    <motion.div
                        key="knowledge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}
                    >
                        {/* Section: Los 4 Reinos */}
                        <section>
                            <h2 className="cinzel gold-text" style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Sparkles size={24} />
                                {t.spreads.knowledge.reinos}
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                {foundations.reinos.map((reino) => (
                                    <motion.div
                                        key={reino.id}
                                        whileHover={{ y: -5, boxShadow: `0 10px 30px ${reino.color}15` }}
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(197, 160, 89, 0.1)',
                                            padding: '2rem', borderRadius: '20px', position: 'relative', overflow: 'hidden'
                                        }}
                                    >
                                        <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1 }}>
                                            <reino.icon size={100} color={reino.color} />
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                            <div style={{ padding: '0.8rem', background: `${reino.color}15`, borderRadius: '12px' }}>
                                                <reino.icon size={24} color={reino.color} />
                                            </div>
                                            <h3 className="cinzel" style={{ fontSize: '1.4rem', color: reino.color }}>{reino.title}</h3>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            <div>
                                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--gold)', letterSpacing: '0.1em' }}>Elemento / Psique</span>
                                                <p className="serif" style={{ fontSize: '1.1rem' }}>{reino.element} • {reino.psychological}</p>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--gold)', letterSpacing: '0.1em' }}>Ámbito Práctico</span>
                                                <p className="serif" style={{ fontSize: '1.1rem' }}>{reino.practical}</p>
                                            </div>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginTop: '0.5rem' }}>{reino.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Section: La Corte */}
                        <section>
                            <h2 className="cinzel gold-text" style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <User size={24} />
                                {t.spreads.knowledge.corte}
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                {foundations.corte.map((role) => (
                                    <motion.div
                                        key={role.id}
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(197, 160, 89, 0.05) 0%, rgba(197, 160, 89, 0) 100%)',
                                            border: '1px solid rgba(197, 160, 89, 0.2)', padding: '2rem', borderRadius: '20px'
                                        }}
                                    >
                                        <h3 className="cinzel gold-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{role.title}</h3>
                                        <p style={{ color: 'var(--gold-light)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>{role.logic}</p>
                                        <p className="serif" style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{role.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Section: Numerologia */}
                        <section style={{ marginBottom: '4rem' }}>
                            <h2 className="cinzel gold-text" style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <RefreshCw size={24} />
                                {t.spreads.knowledge.numerology}
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
                                {foundations.numerologia.map((item) => (
                                    <div key={item.n} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(197,160,89,0.1)', borderRadius: '15px' }}>
                                        <span className="cinzel gold-text" style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>{item.n}.</span>
                                        <h4 className="cinzel" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </motion.div>
                ) : activeTab === 'consult' ? (
                    <motion.div
                        key="consult"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        style={{ textAlign: 'center' }}
                    >
                        {!activeSpread ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                                {/* Spread Selector Cards */}
                                {[
                                    { id: 'formula', title: t.spreads.consult.formula, icon: Sparkles, desc: language === 'es' ? 'El arte de interpretar combinando la esencia del número y el palo.' : 'The art of interpreting by combining number and suit essence.' },
                                    { id: 'celta', title: t.spreads.consult.celta, icon: LayoutTemplate, desc: language === 'es' ? 'La estructura clásica para mapear presente, bloqueos y desenlace.' : 'The classic structure to map present, blocks, and outcome.' },
                                    { id: 'roles', title: t.spreads.consult.roles, icon: Layers, desc: language === 'es' ? 'Descubre qué roles están operando en tu entorno dinámico.' : 'Discover which roles are operating in your dynamic environment.' }
                                ].map(spread => (
                                    <motion.button
                                        key={spread.id}
                                        onClick={() => { setActiveSpread(spread.id as SpreadId); setSelectedCards([]); setUserQuery(''); setAiInterpretation(null); }}
                                        whileHover={{ y: -10 }}
                                        className="glass"
                                        style={{
                                            padding: '3rem 2rem', borderRadius: '24px', border: '1px solid rgba(197, 160, 89, 0.2)',
                                            cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
                                            width: '100%', background: 'rgba(197, 160, 89, 0.02)'
                                        }}
                                    >
                                        <div style={{ padding: '1.5rem', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', color: 'var(--gold)' }}>
                                            <spread.icon size={32} />
                                        </div>
                                        <h3 className="cinzel gold-text" style={{ fontSize: '1.8rem' }}>{spread.title}</h3>
                                        <p className="serif" style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '250px' }}>{spread.desc}</p>
                                        <div className="oracle-button cinzel" style={{ marginTop: '1rem', fontSize: '0.8rem', padding: '0.8rem 1.5rem' }}>
                                            {t.spreads.consult.draw}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ display: 'flex', width: '100%', borderBottom: '1px solid rgba(197, 160, 89, 0.1)', paddingBottom: '1.5rem', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px' }}>
                                    <button onClick={() => setActiveSpread(null)} className="cinzel hover-gold" style={{ background: 'transparent', border: 'none', color: 'var(--gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
                                        {language === 'es' ? 'Volver' : 'Back'}
                                    </button>
                                    <h2 className="cinzel gold-text" style={{ fontSize: '2rem' }}>{t.spreads.consult[activeSpread]}</h2>
                                    <button onClick={() => { setSelectedCards([]); setUserQuery(''); setAiInterpretation(null); }} className="cinzel hover-gold" style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                                        {t.spreads.consult.reset}
                                    </button>
                                </div>

                                {/* Consultation Input Field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ width: '100%', maxWidth: '800px', marginBottom: '1rem' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', justifyContent: 'center' }}>
                                        <MessageSquare className="gold-text" size={20} />
                                        <span className="cinzel gold-text" style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}>{t.spreads.consult.query_label}</span>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <textarea
                                            value={userQuery}
                                            onChange={(e) => setUserQuery(e.target.value)}
                                            placeholder={t.spreads.consult.query_placeholder}
                                            className="serif"
                                            style={{
                                                width: '100%', padding: '1.5rem', background: 'rgba(197, 160, 89, 0.05)',
                                                border: '1px solid rgba(197, 160, 89, 0.2)', borderRadius: '20px',
                                                color: 'white', fontSize: '1.1rem', resize: 'none', minHeight: '100px',
                                                transition: 'all 0.3s', outline: 'none'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                                            onBlur={(e) => e.target.style.borderColor = 'rgba(197, 160, 89, 0.2)'}
                                        />
                                    </div>
                                </motion.div>

                                {selectedCards.length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        style={{ padding: '6rem 2rem', background: 'rgba(197,160,89,0.03)', border: '2px dashed rgba(197,160,89,0.2)', borderRadius: '30px', width: '100%', maxWidth: '1000px' }}>
                                        <p className="cinzel gold-text" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>{language === 'es' ? 'El mazo espera tu intención...' : 'The deck awaits your intention...'}</p>
                                        <button
                                            disabled={isDrawing}
                                            onClick={() => handleDraw(activeSpread === 'formula' ? 1 : activeSpread === 'celta' ? 10 : 4)}
                                            className="oracle-button cinzel shimmer"
                                            style={{ padding: '1.2rem 3rem', fontSize: '1rem' }}
                                        >
                                            {isDrawing ? t.app.mixing : t.spreads.consult.draw}
                                        </button>
                                    </motion.div>
                                ) : (
                                    <div style={{ width: '100%', maxWidth: '1200px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                                        {/* Spread Specific Layouts */}
                                        {activeSpread === 'formula' && (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
                                                <motion.div
                                                    initial={{ rotateY: 180, opacity: 0 }}
                                                    animate={{ rotateY: 0, opacity: 1 }}
                                                    className="oracle-card"
                                                    style={{ width: '300px', height: '450px', position: 'relative' }}
                                                >
                                                    <img src={selectedCards[0].image} alt={selectedCards[0].name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', border: '1px solid var(--gold)' }} />
                                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '2rem 1rem', borderRadius: '0 0 15px 15px' }}>
                                                        <h4 className="cinzel gold-text">{selectedCards[0].name}</h4>
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="glass"
                                                    style={{ padding: '3rem', width: '100%', maxWidth: '900px', borderRadius: '24px', textAlign: 'left', border: '1px solid rgba(197, 160, 89, 0.3)' }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                                        <Zap className="gold-text" />
                                                        <h3 className="cinzel gold-text" style={{ fontSize: '1.5rem' }}>{language === 'es' ? 'Desglose Crítico' : 'Critical Breakdown'}</h3>
                                                    </div>

                                                    {getCardLogic(selectedCards[0]) ? (
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                                            <div style={{ padding: '1.5rem', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '15px' }}>
                                                                <span className="serif" style={{ color: 'var(--gold)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Fórmula</span>
                                                                <p className="cinzel" style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>{getCardLogic(selectedCards[0])?.formula}</p>
                                                            </div>
                                                            <div>
                                                                <span className="serif" style={{ color: 'var(--gold)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Síntesis</span>
                                                                <p className="serif" style={{ fontSize: '1.2rem', marginTop: '0.5rem', fontStyle: 'italic' }}>"{getCardLogic(selectedCards[0])?.sintesis}"</p>
                                                            </div>
                                                            <div style={{ height: '1px', background: 'rgba(197,160,89,0.2)' }} />
                                                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{selectedCards[0].interpretation_present}</p>
                                                        </div>
                                                    ) : (
                                                        <p className="serif" style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                                                            {language === 'es' ? 'Este arcano mayor absorbe la energía de toda la reflexión.' : 'This major arcanum absorbs the energy of the entire reflection.'}
                                                            <br /><br />
                                                            {selectedCards[0].interpretation_present}
                                                        </p>
                                                    )}
                                                </motion.div>
                                            </div>
                                        )}

                                        {activeSpread === 'celta' && (
                                            <div style={{ position: 'relative', height: '850px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
                                                {selectedCards.map((card, i) => {
                                                    const pos = celtaPositions[i].pos;
                                                    return (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: i * 0.2 }}
                                                            onViewportEnter={() => setRevealedCount(i + 1)}
                                                            className="oracle-card-small"
                                                            style={{
                                                                position: 'absolute',
                                                                width: '120px',
                                                                height: '180px',
                                                                left: `calc(50% + ${pos.x}px - 60px)`,
                                                                top: `calc(50% + ${pos.y}px - 90px)`,
                                                                transform: `rotate(${pos.rotate || 0}deg)`,
                                                                zIndex: pos.layer || 1,
                                                                boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
                                                            }}
                                                        >
                                                            <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--gold)' }} />
                                                            <div style={{
                                                                position: 'absolute', top: '-25px', left: 0, right: 0,
                                                                fontSize: '0.65rem', color: 'var(--gold)', textTransform: 'uppercase',
                                                                whiteSpace: 'nowrap', textAlign: 'center', pointerEvents: 'none',
                                                                transform: `rotate(-${pos.rotate || 0}deg)`
                                                            }}>
                                                                {celtaPositions[i].label}
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {activeSpread === 'roles' && (
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', padding: '2rem' }}>
                                                {selectedCards.map((card, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.3 }}
                                                        className="glass"
                                                        style={{ padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(197,160,89,0.2)' }}
                                                    >
                                                        <div style={{ position: 'relative', width: '100%', height: '240px', marginBottom: '1rem' }}>
                                                            <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                                                        </div>
                                                        <h4 className="cinzel gold-text" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{card.name}</h4>
                                                        <div style={{ height: '1px', background: 'rgba(197,160,89,0.1)', marginBottom: '1rem' }} />
                                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{card.interpretation_present}</p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        {/* AI Interpretation Result */}
                                        {(isAiLoading || aiInterpretation) && (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="glass shimmer-gold"
                                                    style={{
                                                        padding: '3rem', width: '100%', maxWidth: '900px',
                                                        borderRadius: '30px', border: '1px solid var(--gold)', background: 'rgba(0,0,0,0.4)',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                                        <Brain className="gold-text" size={32} />
                                                        <h3 className="cinzel gold-text" style={{ fontSize: '1.8rem' }}>{t.spreads.consult.ai_title}</h3>
                                                    </div>

                                                    {isAiLoading ? (
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                                            <p className="serif italic gold-text" style={{ fontSize: '1.2rem' }}>{t.spreads.consult.ai_loading}</p>
                                                            <div style={{ height: '4px', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                                                                <motion.div
                                                                    animate={{ x: ['-100%', '100%'] }}
                                                                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                                                                    style={{ width: '50%', height: '100%', background: 'var(--gold)' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="serif" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
                                                            {aiInterpretation}
                                                        </div>
                                                    )}
                                                </motion.div>

                                                {!isAiLoading && aiInterpretation && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        style={{
                                                            width: '100%',
                                                            maxWidth: '900px',
                                                            padding: '3rem 2rem',
                                                            textAlign: 'center',
                                                            borderTop: '1px solid rgba(197, 160, 89, 0.2)',
                                                            background: 'linear-gradient(to bottom, transparent, rgba(197, 160, 89, 0.05))',
                                                            borderRadius: '32px'
                                                        }}
                                                    >
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                                                            <a
                                                                href={`mailto:hola@luzrey.com?subject=${translations[language].card.email_subject}: Alta Consulta&body=${translations[language].card.email_body} ${selectedCards.map(c => c.name).join(', ')}...`}
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
                                                                <Mail size={20} style={{ marginRight: '0.8rem' }} /> {translations[language].card.email_button}
                                                            </a>
                                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', opacity: 0.7 }}>
                                                                {translations[language].card.email_text}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="archive"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                            {allCards.filter(c => c.deck_id === 'tarot_master').sort((a, b) => {
                                if (a.card_type === 'major' && b.card_type !== 'major') return -1;
                                if (a.card_type !== 'major' && b.card_type === 'major') return 1;
                                const suitsOrder = ['bastos', 'copas', 'espadas', 'oros'];
                                if (a.suit !== b.suit) return suitsOrder.indexOf(a.suit || '') - suitsOrder.indexOf(b.suit || '');
                                return (a.number || 0) - (b.number || 0);
                            }).map((card, index) => (
                                <motion.div
                                    key={card.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.01 }}
                                    className="glass"
                                    whileHover={{ y: -10, borderColor: 'var(--gold)' }}
                                    onClick={() => navigate(`/spread/archive/${card.id}`)}
                                    style={{
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: '1px solid rgba(197, 160, 89, 0.1)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{ aspectRatio: '2/3', overflow: 'hidden' }}>
                                        <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '1rem' }}>
                                        <h4 className="cinzel gold-text" style={{ fontSize: '0.9rem' }}>{card.name}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Archive Detail View */}
                        <AnimatePresence>
                            {selectedCardId && (() => {
                                const card = allCards.find(c => c.id === selectedCardId);
                                if (!card) return null;
                                const logic = getCardLogic(card);
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            position: 'fixed', inset: 0, zIndex: 1000,
                                            background: 'rgba(5, 5, 8, 0.98)', backdropFilter: 'blur(15px)',
                                            display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'
                                        }}
                                    >
                                        <div style={{ maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
                                            <div style={{ display: 'flex', gap: '3rem', padding: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                                <div style={{ width: '300px', flexShrink: 0 }}>
                                                    <img src={card.image} alt={card.name} style={{ width: '100%', borderRadius: '15px', border: '1px solid var(--gold)', boxShadow: '0 0 50px rgba(197, 160, 89, 0.2)' }} />
                                                </div>
                                                <div style={{ flex: 1, minWidth: '300px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                                        <h2 className="cinzel gold-text" style={{ fontSize: '2.5rem' }}>{card.name}</h2>
                                                        <button onClick={() => navigate('/spread/archive')} className="hover-gold" style={{ background: 'transparent', border: 'none', color: 'var(--gold)', cursor: 'pointer' }}>
                                                            <X size={40} />
                                                        </button>
                                                    </div>

                                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                                        <div className="glass" style={{ padding: '0.6rem 1.2rem', border: '1px solid var(--gold)', borderRadius: '30px', color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                                                            {card.card_type === 'major' ? (language === 'es' ? 'GRAN ARCANO' : 'MAJOR ARCANA') : card.card_type?.toUpperCase()}
                                                        </div>
                                                        {card.suit && (
                                                            <div className="glass" style={{ padding: '0.6rem 1.2rem', border: '1px solid var(--gold)', borderRadius: '30px', color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                                                                {card.suit.toUpperCase()}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="glass" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                                                        {logic ? (
                                                            <div style={{ marginBottom: '2rem' }}>
                                                                <p className="cinzel gold-text" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{logic.formula}</p>
                                                                <p className="serif italic" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>"{logic.sintesis}"</p>
                                                            </div>
                                                        ) : (
                                                            <div style={{ marginBottom: '2rem' }}>
                                                                <p className="cinzel gold-text" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{language === 'es' ? 'FUERZA ARQUETÍPICA' : 'ARCHETYPAL FORCE'}</p>
                                                            </div>
                                                        )}
                                                        <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.1)', marginBottom: '2rem' }} />
                                                        <p className="serif" style={{ lineHeight: '1.8', fontSize: '1.15rem', color: 'var(--text-primary)' }}>{card.interpretation_present}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })()}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showWaitPopup && (
                    <WaitPopup
                        language={language}
                        timeLeft={timeLeft}
                        onClose={() => setShowWaitPopup(false)}
                        onGoToChat={() => {
                            // Master spreads don't have a specific chat yet, but we can send them to the general circle
                            navigate('/horoscope');
                            // Small delay to allow navigation then scroll? Or just leave it.
                        }}
                        onSeeCard={() => setShowWaitPopup(false)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}
