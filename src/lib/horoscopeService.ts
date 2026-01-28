import { supabase } from '../lib/supabaseClient';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

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

export async function callOpenRouter(prompt: string): Promise<string | null> {
    if (!OPENROUTER_API_KEY) return null;

    for (const model of MODELS) {
        try {
            console.log(`Trying OpenRouter model: ${model}...`);
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": window.location.origin,
                    "X-Title": "Oracle of Luz Rey"
                },
                body: JSON.stringify({
                    "model": model,
                    "messages": [{ "role": "user", "content": prompt }]
                })
            });

            if (!response.ok) {
                const errorBody = await response.json().catch(() => ({}));
                console.warn(`Model ${model} failed with status ${response.status}:`, errorBody);
                continue; // Try next model
            }

            const result = await response.json();
            if (result.choices && result.choices.length > 0 && result.choices[0].message?.content) {
                console.log(`Success with model: ${model}`);
                return result.choices[0].message.content;
            } else {
                console.warn(`Model ${model} returned empty choices:`, result);
                continue;
            }
        } catch (err) {
            console.warn(`Error calling model ${model}:`, err);
            continue;
        }
    }
    return null;
}

export interface Horoscope {
    sign: string;
    health: string;
    money: string;
    love: string;
    energy: string;
    date: string;
}

export const zodiacSigns = [
    'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo',
    'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'
];

export async function fetchDailyHoroscope(sign: string): Promise<Horoscope | null> {
    const today = new Date().toISOString().split('T')[0];

    if (!OPENROUTER_API_KEY) {
        console.error("VITE_OPENROUTER_API_KEY stays missing in environment variables.");
        return null;
    }

    // 1. Try to get from database first
    const { data } = await supabase
        .from('horoscopes')
        .select('*')
        .eq('sign', sign)
        .eq('date', today)
        .maybeSingle();

    if (data) return data;

    // 2. If not in DB, generate via OpenRouter
    try {
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
        if (!content) throw new Error("All fallback models failed to generate content.");

        // Extract JSON in case the model returns markdown
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        const horoscopeData = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(content);

        const newHoroscope = {
            sign,
            date: today,
            ...horoscopeData
        };

        // 3. Save to database for other users
        await supabase.from('horoscopes').insert([newHoroscope]);

        return newHoroscope;
    } catch (err) {
        console.error("Error generating horoscope:", err);
        return null;
    }
}

export async function syncAllMissingHoroscopes(): Promise<void> {
    const today = new Date().toISOString().split('T')[0];

    // 1. Get existing signs for today
    const { data: existing } = await supabase
        .from('horoscopes')
        .select('sign')
        .eq('date', today);

    const existingSigns = existing?.map(h => h.sign) || [];
    const missingSigns = zodiacSigns.filter(sign => !existingSigns.includes(sign));

    if (missingSigns.length === 0) {
        console.log("All horoscopes are up to date for today.");
        return;
    }

    console.log(`Missing ${missingSigns.length} horoscopes. Starting background sync...`);

    // 2. Generate missing signs one by one (to avoid saturating API)
    for (const sign of missingSigns) {
        try {
            await fetchDailyHoroscope(sign);
        } catch (err) {
            console.error(`Failed background sync for ${sign}:`, err);
        }
    }
}

export async function generateExpansionSynthesis(
    sign: string,
    area: string,
    horoscopeContent: string,
    cardName: string,
    cardInterpretation: string
): Promise<string | null> {
    if (!OPENROUTER_API_KEY) return null;

    const prompt = `Actúa como un consejero sabio, amable y muy directo.
Para el signo ${sign} en el área de "${area}", el horóscopo de hoy dice: 
"${horoscopeContent}"

La carta del Tarot que va a influir en esto es: "${cardName}".
Significado sencillo de la carta: "${cardInterpretation}"

Tarea: Explica de forma MUY CLARA y NATURAL cómo esta carta afecta al horóscopo de hoy.
Instrucciones:
- Usa un lenguaje cotidiano, como si se lo explicaras a un amigo. Evita palabras raras o demasiado místicas.
- Sé práctico: Dile al usuario qué pasos dar o qué actitud tomar HOY mismo basándose en esta carta.
- Tono: Cercano, útil y motivador.
- Extensión: Un párrafo de unos 400 caracteres que sea fácil de leer de un vistazo.
- Prohibido: Usar frases como "Esta carta simboliza..." o "El arcano dicta...". Ve directo al consejo práctico.
- Objetivo: Que el lector entienda al segundo qué tiene que hacer hoy con esta información.`;

    try {
        const content = await callOpenRouter(prompt);
        return content ? content.trim() : null;
    } catch (err) {
        console.error("Error generating synthesis:", err);
        return null;
    }
}
