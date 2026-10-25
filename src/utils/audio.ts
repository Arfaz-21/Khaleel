// Web Audio API ambient & chime synthesizer for luxury interactive experience
class AudioManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientTimer: number | null = null;
  private isAmbientPlaying: boolean = false;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Heavenly opening chime chord (pentatonic crystal tones)
  playEnvelopeChime() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      // Elegant C-Major / F-Major celestial intervals (F4, A4, C5, E5, G5, C6)
      const frequencies = [349.23, 440.0, 523.25, 659.25, 783.99, 1046.5];

      frequencies.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Soft sine wave for glass/celeste bell quality
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        // Gentle envelope
        const startTime = now + idx * 0.08;
        const duration = 2.4;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.08 / (idx + 1), startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    } catch {
      // Audio autoplay policy handled silently
    }
  }

  // Subtle single harp note on interaction
  playSoftNote(freq = 523.25) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    } catch {
      // Audio handled safely
    }
  }

  toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAmbient();
    }
    return this.isMuted;
  }

  getMuted(): boolean {
    return this.isMuted;
  }

  // Ambient gentle music generator
  startAmbient() {
    if (this.isMuted || this.isAmbientPlaying) return;
    this.init();
    this.isAmbientPlaying = true;
    const pentatonicScale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];

    const playRandomChime = () => {
      if (!this.isAmbientPlaying || this.isMuted) return;
      const note = pentatonicScale[Math.floor(Math.random() * pentatonicScale.length)];
      this.playSoftNote(note);
      const nextDelay = 2500 + Math.random() * 3500;
      this.ambientTimer = window.setTimeout(playRandomChime, nextDelay);
    };

    playRandomChime();
  }

  stopAmbient() {
    this.isAmbientPlaying = false;
    if (this.ambientTimer) {
      clearTimeout(this.ambientTimer);
      this.ambientTimer = null;
    }
  }

  toggleAmbient(): boolean {
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }
}

export const audio = new AudioManager();
