type Landscape = 'forest' | 'fire' | 'water' | 'night';

class SoundManager {
    private ctx: AudioContext | null = null;
    private masterGain: GainNode | null = null;
    private activeSource: AudioBufferSourceNode | null = null;
    private currentLandscape: Landscape | null = null;

    private createNoise(type: Landscape): AudioBuffer {
        const sampleRate = 44100;
        const seconds = 5;
        const buffer = new AudioBuffer({ length: sampleRate * seconds, numberOfChannels: 1, sampleRate });
        const data = buffer.getChannelData(0);

        let lastOut = 0;
        for (let i = 0; i < data.length; i++) {
            const white = Math.random() * 2 - 1;
            // Different filtering/math for different landscapes
            if (type === 'fire') {
                data[i] = white * (Math.random() > 0.98 ? 1.5 : 0.2); // Crackling
            } else if (type === 'water') {
                data[i] = (lastOut + (0.02 * white)) / 1.02; // Brown/Pink ish
                lastOut = data[i];
            } else {
                data[i] = (lastOut + (0.01 * white)) / 1.01; // Wind
                lastOut = data[i];
            }
        }
        return buffer;
    }

    private init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.value = 0;
            this.masterGain.connect(this.ctx.destination);
        }
    }

    play(landscape: Landscape) {
        this.init();
        if (this.currentLandscape === landscape && this.activeSource) return;

        this.stop();
        this.currentLandscape = landscape;

        const buffer = this.createNoise(landscape);
        const source = this.ctx!.createBufferSource();
        source.buffer = buffer;
        source.loop = true;

        const filter = this.ctx!.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = landscape === 'fire' ? 2000 : 400;

        source.connect(filter);
        filter.connect(this.masterGain!);
        source.start();
        this.activeSource = source;

        this.masterGain!.gain.linearRampToValueAtTime(0.1, this.ctx!.currentTime + 2);
    }

    stop() {
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1);
            setTimeout(() => {
                this.activeSource?.stop();
                this.activeSource = null;
                this.currentLandscape = null;
            }, 1000);
        }
    }

    setVolume(val: number) {
        if (this.masterGain) {
            this.masterGain.gain.value = val;
        }
    }
}

export const soundManager = new SoundManager();
