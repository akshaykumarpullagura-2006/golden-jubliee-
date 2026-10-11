import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  const stopSynth = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    oscillatorsRef.current = [];
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch {
        // ignore
      }
      audioCtxRef.current = null;
    }
  };

  const startSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.04, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Base Tanpura Drone Frequencies (Root D3 = 146.83 Hz, Pa A3 = 220 Hz, High Sa D4 = 293.66 Hz)
      const freqs = [146.83, 220.0, 293.66];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = i === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.25 + i * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.01, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain);
        lfo.start();

        oscGain.gain.setValueAtTime(0.03, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;

      // Auspicious Chimes in Raag Kalyani
      const ragaNotes = [587.33, 659.25, 739.99, 880.0, 987.77, 1174.66];
      intervalRef.current = window.setInterval(() => {
        if (!audioCtxRef.current) return;
        const chimeCtx = audioCtxRef.current;
        const chimeOsc = chimeCtx.createOscillator();
        const chimeGain = chimeCtx.createGain();

        const note = ragaNotes[Math.floor(Math.random() * ragaNotes.length)];
        chimeOsc.type = 'sine';
        chimeOsc.frequency.setValueAtTime(note, chimeCtx.currentTime);

        chimeGain.gain.setValueAtTime(0, chimeCtx.currentTime);
        chimeGain.gain.linearRampToValueAtTime(0.015, chimeCtx.currentTime + 0.12);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, chimeCtx.currentTime + 2.2);

        chimeOsc.connect(chimeGain);
        chimeGain.connect(masterGain);

        chimeOsc.start();
        chimeOsc.stop(chimeCtx.currentTime + 2.3);
      }, 3000);
    } catch {
      // safe fallback
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioElementRef.current) audioElementRef.current.pause();
      stopSynth();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      if (audioElementRef.current) {
        audioElementRef.current.play().catch(() => {
          startSynth();
        });
      } else {
        startSynth();
      }
    }
  };

  useEffect(() => {
    return () => {
      stopSynth();
      if (audioElementRef.current) audioElementRef.current.pause();
    };
  }, []);

  return (
    <>
      <audio
        ref={audioElementRef}
        src="/audio/shehnai.mp3"
        loop
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Selective Glassmorphism Floating Control */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          right: '1.25rem',
          zIndex: 9990,
        }}
      >
        <button
          onClick={toggleMusic}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.55rem 1rem',
            background: isPlaying ? 'rgba(120, 27, 42, 0.92)' : 'rgba(255, 250, 240, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            color: isPlaying ? '#FFFBF2' : 'var(--color-maroon)',
            border: isPlaying ? '1px solid rgba(216, 195, 139, 0.5)' : '1px solid rgba(185, 154, 85, 0.35)',
            borderRadius: 'var(--radius-full)',
            boxShadow: '0 8px 24px rgba(60, 48, 41, 0.1)',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
          aria-label={isPlaying ? 'సంగీతం ఆపండి (Pause Background Music)' : 'సంగీతం వినండి (Play Background Music)'}
          title={isPlaying ? 'Pause Music' : 'Play Auspicious Music'}
        >
          {isPlaying ? (
            <Volume2 size={16} color="var(--color-gold-champagne)" />
          ) : (
            <VolumeX size={16} color="var(--color-gold-dark)" />
          )}

          <span
            style={{
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.82rem',
              fontWeight: 600,
            }}
          >
            {isPlaying ? 'సంగీతం ఆపండి' : 'సంగీతం'}
          </span>

          {/* Minimal Equalizer Waveform */}
          {isPlaying && (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '12px' }}>
              <span style={{ width: '2px', height: '10px', backgroundColor: 'var(--color-gold-champagne)', borderRadius: '1px' }} />
              <span style={{ width: '2px', height: '6px', backgroundColor: 'var(--color-gold-champagne)', borderRadius: '1px' }} />
              <span style={{ width: '2px', height: '12px', backgroundColor: 'var(--color-gold-champagne)', borderRadius: '1px' }} />
            </div>
          )}
        </button>
      </div>
    </>
  );
};
