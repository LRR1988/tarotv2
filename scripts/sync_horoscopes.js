import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const OPENROUTER_API_KEY = process.env.VITE_OPENROUTER_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !OPENROUTER_API_KEY) {
    console.error('Missing environment variables. Check .env');
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

const zodiacSigns = [
    'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo',
    'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'
];

async function callOpenRouter(prompt) {
    for (const model of MODELS) {
        try {
            console.log(`Trying model: ${model}...`);
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "X-Title": "Oracle Daily Sync"
                },
                body: JSON.stringify({
                    "model": model,
                    "messages": [{ "role": "user", "content": prompt }]
                })
            });

            if (!response.ok) {
                console.warn(`Model ${model} failed: ${response.status}`);
                continue;
            }

            const result = await response.json();
            if (result.choices && result.choices.length > 0) {
                return result.choices[0].message.content;
            }
        } catch (err) {
            console.warn(`Error with ${model}: ${err.message}`);
        }
    }
    return null;
}

async function syncToday() {
    const today = new Date().toISOString().split('T')[0];
    console.log(`Syncing horoscopes for: ${today}`);

    for (const sign of zodiacSigns) {
        console.log(`Checking ${sign}...`);

        const { data: existing } = await supabase
            .from('horoscopes')
            .select('*')
            .eq('sign', sign)
            .eq('date', today)
            .maybeSingle();

        if (existing) {
            console.log(`${sign} already exists. Skipping.`);
            continue;
        }

        console.log(`Generating for ${sign}...`);
        const prompt = `Genera un horóscopo místico, profundo y detallado para el signo ${sign} para el día de hoy (${today}). 
    Es CRÍTICO que cada una de las 4 secciones (salud, dinero, amor, energía) tenga una extensión mínima de 200 caracteres.
    Utiliza un lenguaje poético y evocador, y separa el texto en al menos dos párrafos usando saltos de línea (\\n) para mejorar la lectura.
    Responde ÚNICAMENTE en formato JSON con la siguiente estructura:
    {
      "health": "explicación detallada...\\n\\ncontinuación...",
      "money": "explicación detallada...\\n\\ncontinuación...",
      "love": "explicación detallada...\\n\\ncontinuación...",
      "energy": "explicación detallada...\\n\\ncontinuación..."
    }`;

        const content = await callOpenRouter(prompt);
        if (!content) {
            console.error(`FAILED to generate horoscope for ${sign} after trying all models.`);
            continue;
        }

        try {
            const jsonMatch = content.match(/\{[\s\S]*\}/);
            const horoscopeData = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(content);

            const { error } = await supabase.from('horoscopes').insert([{
                sign,
                date: today,
                ...horoscopeData
            }]);

            if (error) throw error;
            console.log(`SUCCESS: ${sign} saved.`);
        } catch (err) {
            console.error(`Error parsing/saving ${sign}: ${err.message}`);
            console.log('Raw content:', content);
        }
    }
    console.log('Sync finished.');
}

syncToday();
