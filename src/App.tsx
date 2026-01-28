import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

import { fetchOracleDecks, type OracleDeck } from './data/oracles'
import { translations, type Language } from './data/translations'
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'

// Pages
import { HomePage } from './pages/Home'
import { OraclePage } from './pages/Oracle'
import { HoroscopePage } from './pages/Horoscope'
import { DailyCardPage } from './pages/DailyCard'
import { AboutPage } from './pages/About'
import { MoonPhasePage } from './pages/MoonPhase'
import { HistoryPage } from './pages/History'
import { ArchivePage } from './pages/Archive'
import { MeditationPage } from './pages/MeditationRoom'
import { SpreadPage } from './pages/Spread'
import { GuidePage } from './pages/Guide'
import { HoroscopeGuidePage } from './pages/HoroscopeGuide'
import { BlogPage } from './pages/Blog'
import { BlogPostPage } from './pages/BlogPost'
import './App.css'

function App() {
  const [decks, setDecks] = useState<OracleDeck[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<Language>('es');

  const t = translations[language];

  useEffect(() => {
    const loadDecks = async () => {
      const data = await fetchOracleDecks();
      setDecks(data);
      setIsLoading(false);
    };
    loadDecks();
  }, []);

  if (isLoading) {
    return (
      <div className="app-container mystical-gradient" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="gold-text serif"
          style={{ fontSize: '1.5rem' }}
        >
          {t.app.loading}
        </motion.div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-layout">
        <div className="mystical-background"></div>
        <ParticleBackground />

        <Navbar
          language={language}
          setLanguage={setLanguage}
        />

        <div className="app-container">
          <ScrollToTop />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <AppRoutes language={language} decks={decks} />
          </div>

          <footer style={{
            textAlign: 'center',
            padding: '4rem 0 2rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(197, 160, 89, 0.1)',
            marginTop: '4rem',
            position: 'relative',
            zIndex: 10
          }}>
            <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
              <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {language === 'es'
                  ? 'Este Oráculo interactivo es totalmente gratuito.'
                  : 'This interactive Oracle is completely free.'}
              </p>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {language === 'es'
                  ? 'Si deseas contribuir para que este espacio permanezca vivo y pueda ayudar a otras personas, puedes realizar una donación voluntaria.'
                  : 'If you wish to contribute so that this space remains alive and can help other people, you can make a voluntary donation.'}
              </p>

              <a
                href="https://www.paypal.com/paypalme/luzreyoraculo"
                target="_blank"
                rel="noopener noreferrer"
                className="glass"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '30px',
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(197, 160, 89, 0.1)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(197, 160, 89, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Heart size={16} fill="currentColor" style={{ opacity: 0.8 }} />
                <span className="cinzel" style={{ letterSpacing: '0.1em' }}>
                  {language === 'es' ? 'Contribuir con PayPal' : 'Contribute with PayPal'}
                </span>
              </a>
            </div>

            <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>
              &copy; 2026 Oráculo de Luz Rey • Reflexión y Autoconocimiento
            </p>
          </footer>

        </div>
      </div>
    </Router>
  )
}

function AppRoutes({ language, decks }: { language: Language, decks: OracleDeck[] }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage language={language} />} />
      <Route path="/oracle" element={<OraclePage language={language} decks={decks} />} />
      <Route path="/horoscope" element={<HoroscopePage language={language} decks={decks} />} />
      <Route path="/horoscope/guide" element={<HoroscopeGuidePage language={language} />} />
      <Route path="/daily-card" element={<DailyCardPage language={language} decks={decks} />} />
      <Route path="/about" element={<AboutPage language={language} />} />
      <Route path="/moon" element={<MoonPhasePage language={language} />} />
      <Route path="/history" element={<HistoryPage language={language} />} />
      <Route path="/archive/:cardId?" element={<ArchivePage language={language} decks={decks} />} />
      <Route path="/spread/*" element={<SpreadPage language={language} decks={decks} />} />
      <Route path="/meditation" element={<MeditationPage language={language} />} />
      <Route path="/guide" element={<GuidePage language={language} />} />
      <Route path="/blog" element={<BlogPage language={language} />} />
      <Route path="/blog/:slug" element={<BlogPostPage language={language} />} />
    </Routes>
  );
}

export default App
