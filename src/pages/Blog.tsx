import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Tag, BookOpen } from 'lucide-react';
import { fetchBlogPosts, type BlogPost } from '../lib/blogService';
import { type Language } from '../data/translations';

interface BlogPageProps {
    language: Language;
}

export function BlogPage({ language }: BlogPageProps) {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchBlogPosts();
            setPosts(data);
            setIsLoading(false);
        };
        loadPosts();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <main style={{ flex: 1, padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {language === 'es' ? 'Bitácora del Oráculo' : 'Oracle Journal'}
                </h1>
                <p className="serif" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    {language === 'es'
                        ? 'Reflexiones semanales, simbología y sabiduría arcana.'
                        : 'Weekly reflections, symbology, and arcane wisdom.'}
                </p>
                <div style={{ width: '60px', height: '2px', background: 'var(--gold)', margin: '2rem auto' }} />
            </motion.div>

            {isLoading ? (
                <div className="serif gold-text" style={{ fontSize: '1.2rem', opacity: 0.7 }}>
                    {language === 'es' ? 'Recuperando pergaminos...' : 'Retrieving scrolls...'}
                </div>
            ) : posts.length === 0 ? (
                <div className="glass" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <BookOpen size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <p>{language === 'es' ? 'La biblioteca está silenciosa por ahora.' : 'The library is silent for now.'}</p>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2.5rem',
                    width: '100%',
                    maxWidth: '1200px',
                    padding: '0 1rem'
                }}>
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                            >
                                <motion.div
                                    className="glass"
                                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(197, 160, 89, 0.15)' }}
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(197, 160, 89, 0.15)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {post.image_url && (
                                        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                            <div style={{
                                                position: 'absolute', inset: 0,
                                                background: 'linear-gradient(to top, rgba(5,5,8,0.8), transparent)'
                                            }} />
                                            <img
                                                src={post.image_url}
                                                alt={post.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                            {post.deck_id && (
                                                <div style={{
                                                    position: 'absolute', top: '1rem', right: '1rem',
                                                    background: 'rgba(5,5,8,0.7)', backdropFilter: 'blur(5px)',
                                                    padding: '0.4rem 0.8rem', borderRadius: '20px',
                                                    fontSize: '0.7rem', color: 'var(--gold)', border: '1px solid rgba(197, 160, 89, 0.3)'
                                                }}>
                                                    {post.deck_id.toUpperCase()}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <Calendar size={14} />
                                                <span>{formatDate(post.published_at)}</span>
                                            </div>
                                        </div>

                                        <h2 className="cinzel gold-text" style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                                            {post.title}
                                        </h2>

                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem', flex: 1, marginBottom: '2rem' }}>
                                            {post.excerpt}
                                        </p>

                                        {post.tags && post.tags.length > 0 && (
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                                {post.tags.slice(0, 3).map(tag => (
                                                    <span key={tag} style={{
                                                        background: 'rgba(197, 160, 89, 0.1)',
                                                        padding: '0.3rem 0.8rem',
                                                        borderRadius: '15px',
                                                        fontSize: '0.75rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.3rem',
                                                        color: 'var(--gold-light)'
                                                    }}>
                                                        <Tag size={12} /> {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            )}
        </main>
    );
}
