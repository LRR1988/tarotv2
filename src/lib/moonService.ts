/**
 * Enhanced moon phase calculation with mystical calls to decks
 */
export const getMoonPhase = (date: Date = new Date()) => {
    const lp = 2551443;
    const now = date.getTime();
    const newMoon = new Date(1970, 0, 7, 20, 35, 0).getTime();
    const phase = ((now - newMoon) % lp) / lp;

    // Seeded random for daily deck recommendation based on date
    const dateStr = date.toISOString().split('T')[0];
    const hash = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const decks = ['nature', 'monsters', 'trades', 'emotions'];
    const recommendedDeck = decks[hash % decks.length];

    const deckCalls: Record<string, { es: string, en: string }> = {
        nature: {
            es: 'Hoy, los susurros del viento y el latido de la tierra reclaman tu atención. El Oráculo de la Naturaleza despejará tu camino.',
            en: 'Today, the whispers of the wind and the heartbeat of the earth claim your attention. The Oracle of Nature will clear your path.'
        },
        monsters: {
            es: 'Las sombras aguardan en el umbral, pidiendo ser reconocidas. Es tiempo de mirar al Bestiario y abrazar tu poder oculto.',
            en: 'The shadows wait at the threshold, asking to be recognized. It is time to look at the Bestiary and embrace your hidden power.'
        },
        trades: {
            es: 'La maestría no nace de la prisa, sino del alma vertida en el oficio. Busca hoy la guía de los Oficios Perdidos.',
            en: 'Mastery is not born of haste, but of the soul poured into the trade. Seek today the guidance of the Lost Trades.'
        },
        emotions: {
            es: 'Tu corazón es un océano cuya marea sube hoy. El Espejo de las Emociones revelará la calma bajo las olas.',
            en: 'Your heart is an ocean whose tide is rising today. The Mirror of Emotions will reveal the calm beneath the waves.'
        }
    };

    const call = deckCalls[recommendedDeck];

    if (phase < 0.0625 || phase > 0.9375) return {
        name: 'Luna Nueva', icon: '🌑',
        desc: 'Un lienzo en blanco en el firmamento. El vacío es fértil.',
        call: call
    };
    if (phase < 0.1875) return {
        name: 'Luna Creciente', icon: '🌒',
        desc: 'La primera uña de luz hiende la oscuridad. La intención germina.',
        call: call
    };
    if (phase < 0.3125) return {
        name: 'Cuarto Creciente', icon: '🌓',
        desc: 'El equilibrio perfecto entre lo que fue y lo que será.',
        call: call
    };
    if (phase < 0.4375) return {
        name: 'Gibosa Creciente', icon: '🌔',
        desc: 'La gestación está casi completa. El fruto está pesado de saber.',
        call: call
    };
    if (phase < 0.5625) return {
        name: 'Luna Llena', icon: '🌕',
        desc: 'El ojo del cielo está abierto. No hay rincón para el secreto.',
        call: call
    };
    if (phase < 0.6875) return {
        name: 'Gibosa Menguante', icon: '🌖',
        desc: 'El tiempo de soltar. La sabiduría se decanta en el silencio.',
        call: call
    };
    if (phase < 0.8125) return {
        name: 'Cuarto Menguante', icon: '🌗',
        desc: 'Media luz para medio mundo. La introspección es salud.',
        call: call
    };
    return {
        name: 'Luna Menguante', icon: '🌘',
        desc: 'El suspiro final del ciclo. Un retorno sagrado a la raíz.',
        call: call
    };
};
