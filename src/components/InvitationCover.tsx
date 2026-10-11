import React, { useState } from 'react';
import { INVITATION_CONFIG } from '../data/invitationConfig';
import { SacredOmBadge, LotusDivider } from './TraditionalMotifs';
import { MailOpen, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InvitationCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const InvitationCover: React.FC<InvitationCoverProps> = ({ isOpen, onOpen }) => {
  const [animState, setAnimState] = useState<'idle' | 'opening' | 'opened'>(isOpen ? 'opened' : 'idle');
  const [isPressed, setIsPressed] = useState(false);

  const handleOpenInvitation = () => {
    if (animState === 'opening' || animState === 'opened') return;

    setIsPressed(true);
    setAnimState('opening');

    // Auspicious gold confetti burst
    try {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        confetti({
          particleCount: 30,
          spread: 65,
          origin: { y: 0.6 },
          colors: ['#C59E47', '#E4BC5E', '#781123', '#FFF9EE'],
          disableForReducedMotion: true,
          scalar: 0.95,
        });
      }
    } catch {
      // fallback
    }

    setTimeout(() => {
      setAnimState('opened');
      onOpen();
    }, 2200);
  };

  if (animState === 'opened' && isOpen) {
    return null;
  }

  return (
    <div
      id="invitation-cover-viewport"
      role="region"
      aria-label="Golden Jubilee Invitation Cover"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg)',
        backgroundImage: 'radial-gradient(circle at 50% 30%, #FFFDF7 0%, #FFF9EE 65%, #FBF2DE 100%)',
        overflowY: 'auto',
        minHeight: '100dvh',
        padding: 'clamp(1rem, 3vw, 1.5rem) 1rem',
        transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: animState === 'opening' ? 0 : 1,
        transform: animState === 'opening' ? 'scale(1.03)' : 'scale(1)',
        pointerEvents: animState === 'opening' ? 'none' : 'auto',
      }}
    >
      {/* Divine Mobile-First Invitation Card */}
      <div
        className="divine-card"
        style={{
          width: '100%',
          maxWidth: '480px',
          margin: 'auto 0',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid var(--color-gold)',
          boxShadow: '0 16px 45px rgba(120, 17, 35, 0.14), 0 0 25px rgba(197, 158, 71, 0.15)',
        }}
      >
        {/* Inner Auspicious Double Gold Border */}
        <div
          className="divine-border-inner"
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Sacred Om at Top */}
          <div style={{ marginBottom: '0.45rem' }}>
            <SacredOmBadge size={38} />
          </div>

          {/* Auspicious Mangala Vachanam */}
          <div
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--color-maroon)',
              letterSpacing: '0.08em',
              marginBottom: '0.55rem',
            }}
          >
            శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు
          </div>

          {/* Sacred Slokam (Centerpiece with Divine Line Height) */}
          <div
            style={{
              padding: '0.55rem 0.75rem',
              backgroundColor: 'rgba(255, 249, 238, 0.75)',
              border: '1px solid rgba(197, 158, 71, 0.28)',
              borderRadius: 'var(--radius-sm)',
              width: '100%',
              marginBottom: '0.65rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(0.92rem, 2.5vw, 1.08rem)',
                fontWeight: 700,
                color: 'var(--color-maroon)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {INVITATION_CONFIG.slokam.line1}
              <br />
              {INVITATION_CONFIG.slokam.line2}
            </p>
          </div>

          <LotusDivider />

          {/* Milestone Sub-heading */}
          <div
            style={{
              fontFamily: 'var(--font-english-display)',
              fontSize: 'clamp(0.76rem, 2vw, 0.88rem)',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--color-gold-dark)',
              textTransform: 'uppercase',
              marginTop: '0.35rem',
              marginBottom: '0.15rem',
            }}
          >
            50 Years of Togetherness
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: 'clamp(1.65rem, 5vw, 2.15rem)',
              fontWeight: 800,
              color: 'var(--color-maroon)',
              lineHeight: 1.25,
              marginBottom: '0.45rem',
            }}
          >
            స్వర్ణోత్సవ ఆహ్వాన పత్రిక
          </h1>

          {/* Mini Scalloped 50 Cartouche */}
          <div style={{ margin: '0.4rem 0 0.65rem' }}>
            <div className="auspicious-crest-50" style={{ padding: '0.55rem 1.4rem' }}>
              <span className="crest-num" style={{ fontSize: '2.1rem' }}>50</span>
              <span className="crest-sub" style={{ fontSize: '1.25rem' }}>Years</span>
            </div>
          </div>

          {/* Couple Names */}
          <div
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: 'clamp(1.05rem, 3.2vw, 1.25rem)',
              fontWeight: 800,
              color: 'var(--color-maroon)',
              lineHeight: 1.45,
              marginBottom: '0.35rem',
            }}
          >
            {INVITATION_CONFIG.couple.wifeHonorific} {INVITATION_CONFIG.couple.wifeName}
            <div style={{ color: 'var(--color-gold)', fontSize: '0.9em', margin: '0.05rem 0' }}>
              &amp;
            </div>
            {INVITATION_CONFIG.couple.husbandHonorific} {INVITATION_CONFIG.couple.husbandName}
          </div>

          {/* Date & Venue Preview Ribbon */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
              fontWeight: 600,
              backgroundColor: 'rgba(243, 232, 205, 0.4)',
              padding: '0.25rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(197, 158, 71, 0.25)',
              marginBottom: '1.15rem',
            }}
          >
            <span>{INVITATION_CONFIG.dateDetails.fullDateDisplay}</span>
            <span>•</span>
            <span>యర్రగుంట్ల</span>
          </div>

          {/* Prominent Action Button */}
          <button
            id="open-invitation-btn"
            onClick={handleOpenInvitation}
            disabled={animState === 'opening'}
            className="btn-divine-maroon animate-divine-pulse"
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '0.85rem 1.5rem',
              fontSize: 'clamp(1rem, 2.6vw, 1.15rem)',
              transform: isPressed ? 'scale(0.97)' : undefined,
            }}
            aria-label="ఆహ్వాన పత్రిక తెరవండి - Open Wedding Anniversary Invitation Card"
          >
            <MailOpen size={20} color="var(--color-gold-champagne)" />
            <span>{INVITATION_CONFIG.coverButtonText}</span>
            <Sparkles size={16} color="var(--color-gold-bright)" />
          </button>

          {/* Subtle Mobile Hint */}
          <div
            style={{
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.78rem',
              color: 'var(--color-text-light)',
              marginTop: '0.55rem',
            }}
          >
            {INVITATION_CONFIG.coverHintText}
          </div>

        </div>
      </div>
    </div>
  );
};
