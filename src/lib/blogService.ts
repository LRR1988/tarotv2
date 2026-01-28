import { supabase } from './supabaseClient';

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image_url: string;
    tags: string[];
    published_at: string;
    card_id?: string;
    deck_id?: string;
}

export async function fetchBlogPosts() {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
    return data as BlogPost[];
}

export async function fetchBlogPostBySlug(slug: string) {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
    return data as BlogPost;
}
