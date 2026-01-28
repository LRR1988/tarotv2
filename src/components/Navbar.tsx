import { Link, useLocation } from 'react-router-dom'
import { Sparkles, HelpCircle, User, Moon, Layout, Menu, X, Image, CloudMoon, Compass, BookOpen, Layers, Feather } from 'lucide-react'
import { useState } from 'react'
import { SoundController } from './SoundController'
import { translations, type Language } from '../data/translations'

interface NavbarProps {
    language: Language;
    setLanguage: (lang: Language | ((l: Language) => Language)) => void;
}

export function Navbar({ language, setLanguage }: NavbarProps) {
    const t = translations[language];
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const isActive = (path: string) => location.pathname === path;
    const isSpreadChildActive = location.pathname.startsWith('/spread/');

    const navItemStyle = (active: boolean) => ({
        color: active ? 'var(--gold-light)' : 'var(--text-secondary)',
        backgroundColor: active ? 'rgba(197, 160, 89, 0.15)' : 'transparent',
        boxShadow: active ? '0 0 15px rgba(197, 160, 89, 0.1)' : 'none',
        fontWeight: active ? 'bold' : 'normal',
    });

    return (
        <aside style={{
            width: collapsed ? '80px' : '280px',
            height: '100vh',
            position: 'sticky',
            top: 0,
            borderRight: '1px solid rgba(197, 160, 89, 0.2)',
            background: 'rgba(5, 5, 8, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1rem',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 100,
            flexShrink: 0
        }}>
            {/* Logo area */}
            <div style={{ marginBottom: '3rem', padding: '0 0.5rem' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
                    <Sparkles className="gold-text shimmer" size={32} style={{ flexShrink: 0 }} />
                    {!collapsed && (
                        <span className="cinzel gold-text" style={{ fontSize: '1.2rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                            {t.app.title.replace('ORÁCULO DE ', '').replace('ORACLE OF ', '')}
                        </span>
                    )}
                </Link>
            </div>

            {/* Navigation links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <Link to="/oracle" className="cinzel hover-gold" style={{
                        ...navItemStyle(isActive('/oracle') || isActive('/moon') || location.pathname.startsWith('/archive') || isActive('/guide')),
                        display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s'
                    }}>
                        <Layout size={20} />
                        {!collapsed && <span>{t.app.nav.decks}</span>}
                    </Link>

                    {!collapsed && (isActive('/oracle') || isActive('/moon') || location.pathname.startsWith('/archive') || isActive('/guide')) && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginLeft: '1rem', borderLeft: '1px solid rgba(197, 160, 89, 0.1)', paddingLeft: '1rem' }}>
                            <Link to="/moon" className="cinzel hover-gold" style={{
                                ...navItemStyle(isActive('/moon')),
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                padding: '0.6rem 1rem',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                fontSize: '0.85rem'
                            }}>
                                <CloudMoon size={16} />
                                <span>{t.app.nav.moon}</span>
                            </Link>

                            <Link to="/archive" className="cinzel hover-gold" style={{
                                ...navItemStyle(location.pathname.startsWith('/archive')),
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                padding: '0.6rem 1rem',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                fontSize: '0.85rem'
                            }}>
                                <Image size={16} />
                                <span>{t.app.nav.archive}</span>
                            </Link>

                            <Link to="/guide" className="cinzel hover-gold" style={{
                                ...navItemStyle(isActive('/guide')),
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                padding: '0.6rem 1rem',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                fontSize: '0.85rem'
                            }}>
                                <HelpCircle size={16} />
                                <span>{t.app.nav.guide}</span>
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/horoscope" className="cinzel hover-gold" style={{ ...navItemStyle(isActive('/horoscope') || location.pathname.startsWith('/horoscope/')), display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s' }}>
                    <Moon size={20} />
                    {!collapsed && <span>{t.app.nav.card}</span>}
                </Link>

                {!collapsed && (isActive('/horoscope') || location.pathname.startsWith('/horoscope/')) && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginLeft: '1rem', borderLeft: '1px solid rgba(197, 160, 89, 0.1)', paddingLeft: '1rem' }}>
                        <Link to="/horoscope/guide" className="cinzel hover-gold" style={{
                            ...navItemStyle(isActive('/horoscope/guide')),
                            display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1rem', borderRadius: '10px', textDecoration: 'none', fontSize: '0.8rem'
                        }}>
                            <HelpCircle size={14} />
                            <span>{language === 'es' ? 'Guía del Horóscopo' : 'Horoscope Guide'}</span>
                        </Link>
                    </div>
                )}

                <Link to="/spread/knowledge" className="cinzel hover-gold" style={{ ...navItemStyle(isActive('/spread') || isSpreadChildActive), display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s' }}>
                    <Compass size={20} />
                    {!collapsed && <span>{t.app.nav.spreads}</span>}
                </Link>

                {!collapsed && (isSpreadChildActive || isActive('/spread') || isActive('/spread/knowledge')) && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginLeft: '1rem', borderLeft: '1px solid rgba(197, 160, 89, 0.1)', paddingLeft: '1rem' }}>
                        <Link to="/spread/knowledge" className="cinzel hover-gold" style={{
                            ...navItemStyle(isActive('/spread/knowledge') || isActive('/spread')),
                            display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1rem', borderRadius: '10px', textDecoration: 'none', fontSize: '0.8rem'
                        }}>
                            <BookOpen size={14} />
                            <span>{t.spreads.tabs.knowledge}</span>
                        </Link>
                        <Link to="/spread/consult" className="cinzel hover-gold" style={{
                            ...navItemStyle(isActive('/spread/consult')),
                            display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1rem', borderRadius: '10px', textDecoration: 'none', fontSize: '0.8rem'
                        }}>
                            <Compass size={14} />
                            <span>{t.spreads.tabs.consult}</span>
                        </Link>
                        <Link to="/spread/archive" className="cinzel hover-gold" style={{
                            ...navItemStyle(isActive('/spread/archive')),
                            display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1rem', borderRadius: '10px', textDecoration: 'none', fontSize: '0.8rem'
                        }}>
                            <Layers size={14} />
                            <span>{t.spreads.tabs.archive}</span>
                        </Link>
                    </div>
                )}

                <Link to="/about" className="cinzel hover-gold" style={{ ...navItemStyle(isActive('/about')), display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s' }}>
                    <User size={20} />
                    {!collapsed && <span>{t.app.nav.about}</span>}
                </Link>

                <Link to="/blog" className="cinzel hover-gold" style={{ ...navItemStyle(isActive('/blog') || location.pathname.startsWith('/blog/')), display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s' }}>
                    <Feather size={20} />
                    {!collapsed && <span>{t.app.nav.blog}</span>}
                </Link>

                <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.15)', margin: '1rem 0' }} />

            </nav>

            {/* Bottom controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: 'auto', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: collapsed ? 'center' : 'flex-start', padding: '0 0.5rem' }}>
                    <SoundController />
                    {!collapsed && (
                        <button
                            onClick={() => setLanguage((l: Language) => l === 'es' ? 'en' : 'es')}
                            className="cinzel hover-gold"
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--gold)',
                                borderRadius: '20px',
                                padding: '0.2rem 0.8rem',
                                color: 'var(--gold)',
                                cursor: 'pointer',
                                fontSize: '0.8rem'
                            }}
                        >
                            {language.toUpperCase()}
                        </button>
                    )}
                </div>

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        background: 'rgba(197, 160, 89, 0.1)',
                        border: 'none',
                        color: 'var(--gold)',
                        padding: '0.8rem',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    {collapsed ? <Menu size={20} /> : <X size={20} />}
                </button>
            </div>
        </aside >
    )
}
