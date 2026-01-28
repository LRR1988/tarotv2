
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

// Configuración de Supabase
const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
);

const OPENROUTER_API_KEY = process.env.VITE_OPENROUTER_API_KEY;
const MODEL = 'google/gemini-2.0-flash-exp:free';

async function generateDescription(cardName, interpretation) {
    const prompt = `Actúa como un sabio místico y filósofo. Escribe un "Tratado de Sabiduría" para la carta "${cardName}".
Interpretación base: "${interpretation}"

Extensión: ~1500 caracteres (unos 3 párrafos).
Tono: Poético, místico, arquetípico, profundo, NO PREDICTIVO.
Estructura: Párrafos profundos. No uses listas ni frases hechas.
Enfoque: Explica la fenomenología del arquetipo y cómo afecta al alma.

Responde ÚNICAMENTE con el texto de la descripción.`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "model": MODEL,
                "messages": [{ "role": "user", "content": prompt }]
            })
        });

        const result = await response.json();

        if (result.error) {
            console.error("OpenRouter API Error:", result.error);
            return null;
        }

        if (!result.choices || !result.choices[0]) {
            console.error("Respuesta inesperada de OpenRouter:", result);
            return null;
        }

        return result.choices[0].message.content.trim();
    } catch (err) {
        console.error("Error en la petición a OpenRouter:", err);
        return null;
    }
}

async function processNextCard() {
    console.log(`\n[${new Date().toLocaleTimeString()}] --- Buscando próxima carta ---`);

    const { data: card, error } = await supabase
        .from('cards')
        .select('id, name, interpretation_present')
        .or('daily_description.is.null,daily_description.eq.""')
        .limit(1)
        .maybeSingle();

    if (error) {
        console.error('Error al consultar Supabase:', error);
        return;
    }

    if (!card) {
        console.log('✨ ¡Todas las cartas están completas!');
        process.exit(0);
    }

    console.log(`🔮 Generando sabiduría para: "${card.name}"...`);
    const description = await generateDescription(card.name, card.interpretation_present);

    if (description) {
        const { error: updateError } = await supabase
            .from('cards')
            .update({ daily_description: description })
            .eq('id', card.id);

        if (updateError) {
            console.error(`❌ Error al actualizar "${card.name}":`, updateError);
        } else {
            console.log(`✅ "${card.name}" actualizada con éxito.`);
            console.log(`⏳ Esperando 5 minutos para la siguiente...`);
        }
    } else {
        console.log(`⚠️ No se pudo generar descripción para "${card.name}". Reintentando en 5 min.`);
    }
}

console.log('🚀 Sistema de Población de Sabiduría Iniciado');
console.log('Intervalo: 1 carta cada 5 minutos');

// Primera ejecución inmediata
processNextCard();

// Intervalo
setInterval(processNextCard, 5 * 60 * 1000);
