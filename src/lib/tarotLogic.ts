import { type OracleCard } from '../data/oracles';

export type InversionState = 'none' | 'blocked' | 'excess' | 'internal' | 'release';

export interface TarotInterpretation {
    action: string;
    realm: string;
    synthesis: string;
    warning?: string;
}

export const getSuitMetadata = (suit?: string) => {
    const metadata: Record<string, { element: string, psychological: string, realm: string }> = {
        bastos: { element: 'Fuego', psychological: 'Intuición / Impulso', realm: 'Trabajo y Proyectos' },
        copas: { element: 'Agua', psychological: 'Sentimiento', realm: 'Amor y Relaciones' },
        espadas: { element: 'Aire', psychological: 'Pensamiento', realm: 'Comunicación y Mente' },
        oros: { element: 'Tierra', psychological: 'Sensopercepción', realm: 'Dinero y Recursos' }
    };
    return suit ? metadata[suit] : null;
};

export const getNumberMetadata = (num?: number) => {
    const metadata: Record<number, { title: string, concept: string }> = {
        1: { title: 'El As', concept: 'Potencial absoluto, la semilla.' },
        2: { title: 'El Dos', concept: 'Dualidad, elección y balance.' },
        3: { title: 'El Tres', concept: 'Explosión creativa y dinamismo.' },
        4: { title: 'El Cuatro', concept: 'Estabilidad y estructura.' },
        5: { title: 'El Cinco', concept: 'Crisis y desequilibrio necesario.' },
        6: { title: 'El Seis', concept: 'Armonía flexible e integración.' },
        7: { title: 'El Siete', concept: 'Individualidad y éxito persistente.' },
        8: { title: 'El Ocho', concept: 'Doble estabilidad o saturación.' },
        9: { title: 'El Nueve', concept: 'Culminación individual y madurez.' },
        10: { title: 'El Diez', concept: 'Completitud colectiva o saturación total.' }
    };
    return num ? metadata[num] : null;
};

export const getCourtRankMetadata = (rank?: string) => {
    const metadata: Record<string, { action: string, profile: string }> = {
        paje: { action: 'Traer un mensaje', profile: 'Aprendiz y explorador' },
        caballero: { action: 'Conseguir un objetivo', profile: 'Ejecutor impulsivo' },
        reina: { action: 'Cuidar y gestionar', profile: 'Protectora del mundo interno' },
        rey: { action: 'Gobernar y decidir', profile: 'Arquitecto del control' }
    };
    return rank ? metadata[rank] : null;
};

/**
 * Applying the "Master Formula": Action + Realm = Synthesis
 */
export const deriveTarotLogic = (card: OracleCard): TarotInterpretation | null => {
    if (card.card_type === 'court') {
        const rankInfo = getCourtRankMetadata(card.rank);
        const suitInfo = getSuitMetadata(card.suit);
        if (!rankInfo || !suitInfo) return null;

        return {
            action: rankInfo.action,
            realm: suitInfo.realm,
            synthesis: `${rankInfo.action} en el ámbito de ${suitInfo.realm}.`
        };
    }

    if (card.card_type === 'minor') {
        const numInfo = getNumberMetadata(card.number);
        const suitInfo = getSuitMetadata(card.suit);
        if (!numInfo || !suitInfo) return null;

        return {
            action: numInfo.concept,
            realm: suitInfo.realm,
            synthesis: `${numInfo.title} de ${card.suit?.toUpperCase()}: ${numInfo.concept} en ${suitInfo.realm}.`
        };
    }

    return null;
};
