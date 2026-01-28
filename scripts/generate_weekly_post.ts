import dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY; // Using anon key, hope RLS allows insert or Service Role is needed?
// Actually, for a backend script running in GitHub Actions, we usually need the SERVICE ROLE key to bypass RLS for inserts if RLS is strict.
// But sync_horoscopes.js used VITE_SUPABASE_ANON_KEY.
// If RLS allows insert for anon, it's fine. 
// My SQL was: create policy "Service role can insert..." but I didn't create a policy for Anon to insert.
// Wait, I created: create policy "Public can view..." -> Select only.
// So inserting with Anon key will FAIL unless I add a policy or use Service Role Key.
// The existing workflow uses VITE_SUPABASE_ANON_KEY.
// I should probably use VITE_SUPABASE_SERVICE_ROLE_KEY if available in secrets.
// Or I can add a policy to allow Anon insert (insecure for public, but maybe OK if we trust the key isn't leaked? No, Anon key IS public).
// I should check if secrets.SUPABASE_SERVICE_ROLE_KEY exists in the repo. I can't check secrets directly.
// But usually for backend jobs we use Service Role.
// However, the `sync_horoscopes.js` worked with `VITE_SUPABASE_ANON_KEY`.
// Let's check `sync_horoscopes.js` again. It inserts into `horoscopes`.
// Does `horoscopes` have RLS? 
// List tables output said `rls_enabled: true` for `horoscopes`.
// If it worked, maybe there is a policy "Enable insert for everyone"? Or `sync_horoscopes.js` is failing silently?
// The log said "SUCCESS: ... saved."
// So likely there is an insert policy.
// I will start by using VITE_SUPABASE_ANON_KEY and if it fails I'll ask user to add Service Role or update policy.
// BETTER: I will add a policy to allow Insert from Anon for now (unsafe) OR assume the environment has the right key.
// Actually, I'll stick to VITE_SUPABASE_ANON_KEY matches existing pattern.
// AND I will add an SQL policy to allow insert for now. Or better, rely on the fact that I can execute SQL here to add the policy!

const OPENROUTER_API_KEY = process.env.VITE_OPENROUTER_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !OPENROUTER_API_KEY) {
    console.error('Missing environment variables.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const MODELS = [
    'z-ai/glm-4.5-air:free',
    'tngtech/deepseek-tng-r1t2-chimera:free',
    'tngtech/deepseek-r1t-chimera:free',
    'deepseek/deepseek-r1-0528:free',
    'tngtech/tng-r1t-chimera:free',
    'nvidia/nemotron-3-nano-30b-a3b:free',
    'meta-llama/llama-3.3-70b-instruct:free',
    'google/gemma-3-27b:free',
    'arcee-ai/trinity-large-preview:free',
    'qwen/qwen3-coder-480b-a35b:free',
    'openai/gpt-oss-120b:free',
    'google/gemini-2-0-flash-experimental:free',
    'arcee-ai/trinity-mini:free',
    'openai/gpt-oss-20b:free',
    'upstage/solar-pro-3:free'
];

async function callOpenRouter(prompt: string) {
    for (const model of MODELS) {
        try {
            console.log(`Trying model: ${model}...`);
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "X-Title": "Oracle Blog Generator"
                },
                body: JSON.stringify({
                    "model": model,
                    "messages": [{ "role": "user", "content": prompt }]
                })
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error(`Model ${model} failed: ${response.status} - ${errText}`);
                continue;
            }

            const result = await response.json();
            if (result.choices?.length > 0) {
                return result.choices[0].message.content;
            }
        } catch (e) {
            console.error(e);
        }
    }
    return null;
}

async function generatePost() {
    console.log('Starting blog post generation...');

    // 1. Get recent posts to avoid repetition (last 12 posts ~ 3 months)
    const { data: recentPosts } = await supabase
        .from('blog_posts')
        .select('title')
        .order('published_at', { ascending: false })
        .limit(12);

    const avoidTopics = recentPosts?.map(p => p.title).join(', ') || 'Ninguno';
    console.log('Avoiding recent topics:', avoidTopics);

    // 2. Get a random card
    const { data: cards, error: cardError } = await supabase
        .from('cards')
        .select('*');

    if (cardError || !cards || cards.length === 0) {
        console.error('Error fetching cards:', cardError);
        return;
    }

    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    console.log(`Selected card: ${randomCard.name} (${randomCard.deck_id})`);

    // 3. Generate Content
    const prompt = `Actúa como un experto redactor de contenido esotérico y SEO.
    Tu objetivo es escribir un artículo de blog viral y profundo para atraer tráfico a la web.
    
    Inspiración visual: Carta "${randomCard.name}" del mazo ${randomCard.deck_id}.
    Interpretación base (referencia): ${randomCard.interpretation_present || randomCard.interpretation_future || 'Sin data'}.

    INSTRUCCIONES:
    1. TEMA: No te limites a describir la carta. Usa la carta como excusa para hablar de un TEMA ESOTÉRICO GENERAL, interesante y buscado (ej: Astrología, Numerología, Tipos de Predicciones, Historia de la Magia, Simbología, Rituales de Poder, etc.).
    2. RESTRICCIÓN: NO repitas estos temas recientes: [${avoidTopics}].
    3. LONGITUD: Artículo EXTENSO (mínimo 800 palabras/5000 caracteres de contenido markdown). Queremos retención de lectura.
    4. ESTRUCTURA SEO:
       - H1 Atractivo (Clickbait elegante).
       - Introducción que enganche (Hook).
       - Varios H2 y H3 rompiendo el texto.
       - Uso de listas (bullets) para fácil lectura.
       - Negritas en palabras clave.
       - Conclusión práctica o ritual sencillo.
    
    5. Formato JSON OBLIGATORIO:
    {
       "title": "Título SEO Optimizado",
       "slug": "titulo-seo-kebab-case",
       "excerpt": "Meta descripción atractiva para Google (max 160 caracteres)",
       "content": "El artículo completo en Markdown...",
       "tags": ["tag1", "tag2", "tag3", "tag4"],
       "visual_prompt": "Descripción visual de la escena para generar imagen (en inglés, detallado, estilo místico/cinemático)"
    }
    
    Importante: El campo 'content' debe contener TODO el artículo formateado en Markdown. Profundiza en el tema.`;

    const rawContent = await callOpenRouter(prompt);
    if (!rawContent) {
        console.error('Failed to generate content');
        return;
    }

    try {
        const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
        const postData = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(rawContent);

        // 3. Generate AI Image URL (Fallback to Card Image)
        let finalImageUrl = randomCard.image;
        if (postData.visual_prompt) {
            try {
                // Use Pollinations.ai (Free, High Quality)
                const safePrompt = encodeURIComponent(`${postData.visual_prompt} mystical tarot style, cinematic lighting, 8k, detailed`);
                finalImageUrl = `https://image.pollinations.ai/prompt/${safePrompt}?width=1280&height=720&seed=${Date.now()}&nologo=true&model=flux`;
                console.log('Generated AI Image URL:', finalImageUrl);
            } catch (imgErr) {
                console.error('Error constructing AI image URL, using fallback:', imgErr);
            }
        }

        // 4. Insert into DB
        const { error: insertError } = await supabase
            .from('blog_posts')
            .insert([{
                title: postData.title,
                slug: `${postData.slug}-${Date.now()}`, // Ensure uniqueness
                excerpt: postData.excerpt,
                content: postData.content,
                tags: postData.tags,
                image_url: finalImageUrl,
                card_id: randomCard.id,
                deck_id: randomCard.deck_id,
                published_at: new Date().toISOString()
            }]);

        if (insertError) {
            console.error('Error saving post:', insertError);
        } else {
            console.log('Successfully generated and saved blog post:', postData.title);
        }

    } catch (e) {
        console.error('Error parsing JSON:', e);
        console.log('Raw:', rawContent);
    }
}

generatePost();
