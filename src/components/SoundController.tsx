import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export const SoundController = () => {
    const [isMuted, setIsMuted] = useState(true);
    const audioContextRef = useRef<AudioContext | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);
    const oscillatorsRef = useRef<OscillatorNode[]>([]);
    const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);

    const createBrownNoise = (ctx: AudioContext): AudioBuffer => {
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = buffer.getChannelData(0);
        let lastOut = 0;

        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; // Amplify
        }
        return buffer;
    };

    const initAudio = () => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }

        const ctx = audioContextRef.current;

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.value = 0;
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Brown noise for wind-like texture
        const brownNoise = createBrownNoise(ctx);
        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = brownNoise;
        noiseSource.loop = true;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.value = 200; // Very low, like distant wind

        const noiseGain = ctx.createGain();
        noiseGain.gain.value = 0.015; // Very subtle

        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(masterGain);
        noiseSource.start();
        noiseNodeRef.current = noiseSource;

        // Tibetan Bowl-like tones (using triangle waves for warmth)
        const createBowl = (freq: number, detune: number, pan: number, gainVal: number) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const panner = ctx.createStereoPanner();
            const filter = ctx.createBiquadFilter();

            osc.type = 'triangle'; // Warmer than sine
            osc.frequency.value = freq;
            osc.detune.value = detune;

            // Add subtle vibrato (like a real bowl)
            const lfo = ctx.createOscillator();
            lfo.frequency.value = 0.08 + Math.random() * 0.04; // Very slow
            const lfoGain = ctx.createGain();
            lfoGain.gain.value = 0.5;
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            lfo.start();

            // Low-pass filter for warmth
            filter.type = 'lowpass';
            filter.frequency.value = 800 + Math.random() * 200;
            filter.Q.value = 0.5;

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(panner);
            panner.connect(masterGain);

            gain.gain.value = gainVal;
            panner.pan.value = pan;

            osc.start();
            oscillatorsRef.current.push(osc, lfo);
        };

        // Deep fundamental (like a large bowl)
        createBowl(55, 0, 0, 0.03);      // A1
        createBowl(82.5, 2, -0.3, 0.025); // E2 slightly detuned

        // Mid harmonics (smaller bowls)
        createBowl(110, -1, 0.3, 0.02);   // A2
        createBowl(165, 1, -0.2, 0.015);  // E3

        // High shimmer (very quiet, like distant bells)
        createBowl(220, 3, 0.2, 0.008);   // A3
        createBowl(330, -2, 0, 0.005);    // E4

        return ctx;
    };

    const toggleSound = async () => {
        if (isMuted) {
            if (!audioContextRef.current) {
                initAudio();
            }
            if (audioContextRef.current?.state === 'suspended') {
                await audioContextRef.current.resume();
            }

            const now = audioContextRef.current!.currentTime;
            gainNodeRef.current?.gain.cancelScheduledValues(now);
            gainNodeRef.current?.gain.linearRampToValueAtTime(0.08, now + 3); // Slower fade in

            setIsMuted(false);
        } else {
            const now = audioContextRef.current!.currentTime;
            gainNodeRef.current?.gain.cancelScheduledValues(now);
            gainNodeRef.current?.gain.linearRampToValueAtTime(0, now + 2);

            setIsMuted(true);
        }
    };

    useEffect(() => {
        return () => {
            oscillatorsRef.current.forEach(osc => osc.stop());
            noiseNodeRef.current?.stop();
            audioContextRef.current?.close();
        };
    }, []);

    return (
        <motion.button
            onClick={toggleSound}
            className="hover-gold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                background: 'transparent',
                border: '1px solid var(--gold)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isMuted ? 'var(--text-secondary)' : 'var(--gold)',
                cursor: 'pointer',
                opacity: isMuted ? 0.6 : 1,
                marginRight: '1rem'
            }}
            title={isMuted ? "Activar sonido ambiental" : "Silenciar"}
        >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </motion.button>
    );
};
