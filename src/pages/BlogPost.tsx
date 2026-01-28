import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { fetchBlogPostBySlug, type BlogPost } from '../lib/blogService';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { type Language } from '../data/translations';

interface BlogPostPageProps {
    language: Language;
}

export function BlogPostPage({ language }: BlogPostPageProps) {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        const loadPost = async () => {
            const data = await fetchBlogPostBySlug(slug);
            setPost(data);
            setIsLoading(false);
        };
        loadPost();
    }, [slug]);

    if (isLoading) {
        return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="gold-text cinzel">Cargando sabiduría...</div>;
    }

    if (!post) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center' }}>
                <h2 className="cinzel gold-text">Post no encontrado</h2>
                <Link to="/blog" className="cinzel" style={{ color: 'var(--text-secondary)', marginTop: '2rem', display: 'block' }}>Volver</Link>
            </div>
        );
    }

    return (
        <article style={{ flex: 1, position: 'relative' }}>
            {/* Hero Image */}
            <div style={{ height: '50vh', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--background-dark), transparent)', zIndex: 1 }} />
                {post.image_url && (
                    <img
                        src={post.image_url}
                        alt={post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                )}

                <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    padding: '4rem 1rem',
                    zIndex: 2,
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {post.tags && (
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                {post.tags.map(tag => (
                                    <span key={tag} className="cinzel" style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                                        #{tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        )}
                        <h1 className="cinzel gold-text shimmer" style={{ fontSize: '3.5rem', lineHeight: '1.2', maxWidth: '1000px', margin: '0 auto' }}>
                            {post.title}
                        </h1>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} />
                                {new Date(post.published_at).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { dateStyle: 'long' })}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Content */}
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1rem', position: 'relative', zIndex: 2 }}>
                <Link
                    to="/blog"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        color: 'var(--gold)', textDecoration: 'none', marginBottom: '3rem',
                        opacity: 0.8
                    }}
                >
                    <ArrowLeft size={18} /> {language === 'es' ? 'Volver al Diario' : 'Back to Journal'}
                </Link>

                <div className="markdown-content">
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h2 className="cinzel gold-text" style={{ fontSize: '2.2rem', marginTop: '3rem', marginBottom: '1.5rem' }} {...props} />,
                            h2: ({ node, ...props }) => <h3 className="cinzel gold-text" style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.2rem' }} {...props} />,
                            h3: ({ node, ...props }) => <h4 className="cinzel" style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }} {...props} />,
                            p: ({ node, ...props }) => <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.9)', textAlign: 'justify' }} {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--gold-light)' }} {...props} />,
                            li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem', lineHeight: '1.6' }} {...props} />,
                            strong: ({ node, ...props }) => <strong style={{ color: 'var(--gold)', fontWeight: 'bold' }} {...props} />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(197, 160, 89, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="glass" style={{ padding: '0.8rem 1.5rem', border: '1px solid rgba(197, 160, 89, 0.3)', color: 'var(--gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Share2 size={16} /> Compartir
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
