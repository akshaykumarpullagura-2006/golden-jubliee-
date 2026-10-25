import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { type Language } from '../data/invitationConfig';
import { SacredOmBadge, LotusDivider } from './TraditionalMotifs';
import { MailOpen, Sparkles, Globe, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InvitationCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const InvitationCover: React.FC<InvitationCoverProps> = ({ isOpen, onOpen }) => {
  const { language, setLanguage, config } = useLanguage();
  const [animState, setAnimState] = useState<'idle' | 'opening' | 'opened'>(isOpen ? 'opened' : 'idle');
  const [isPressed, setIsPressed] = useState(false);

  const handleOpenInvitation = (targetLang?: Language) => {
    if (animState === 'opening' || animState === 'opened') return;

    if (targetLang && targetLang !== language) {
      setLanguage(targetLang);
    }

    setIsPressed(true);
    setAnimState('opening');

    // Auspicious gold confetti burst
    try {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        confetti({
          particleCount: 35,
          spread: 70,
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

  const languageOptions = [
    {
      code: 'te' as const,
      nativeName: 'తెలుగు',
      englishName: 'Telugu',
      fontFamily: 'var(--font-telugu-serif)',
    },
    {
      code: 'kn' as const,
      nativeName: 'ಕನ್ನಡ',
      englishName: 'Kannada',
      fontFamily: 'var(--font-kannada)',
    },
    {
      code: 'en' as const,
      nativeName: 'English',
      englishName: 'English',
      fontFamily: 'var(--font-english-serif)',
    },
  ];

  const getLanguageHeaderTitle = () => {
    if (language === 'kn') return 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ • Choose Language';
    if (language === 'en') return 'Choose Your Language • భాష • ಭಾಷೆ';
    return 'భాషను ఎంచుకోండి • Choose Language';
  };

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
          maxWidth: '490px',
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
          <div style={{ marginBottom: '0.35rem' }}>
            <SacredOmBadge size={38} />
          </div>

          {/* Auspicious Mangala Vachanam */}
          <div
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--color-maroon)',
              letterSpacing: '0.08em',
              marginBottom: '0.45rem',
            }}
          >
            {config.mangalaVachanam}
          </div>

          {/* Sacred Slokam (Centerpiece with Divine Line Height) */}
          <div
            style={{
              padding: '0.55rem 0.75rem',
              backgroundColor: 'rgba(255, 249, 238, 0.75)',
              border: '1px solid rgba(197, 158, 71, 0.28)',
              borderRadius: 'var(--radius-sm)',
              width: '100%',
              marginBottom: '0.55rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(0.92rem, 2.5vw, 1.05rem)',
                fontWeight: 700,
                color: 'var(--color-maroon)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {config.slokam.line1}
              <br />
              {config.slokam.line2}
            </p>
          </div>

          <LotusDivider />

          {/* Milestone Sub-heading */}
          <div
            style={{
              fontFamily: 'var(--font-english-display)',
              fontSize: 'clamp(0.76rem, 2vw, 0.88rem)',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--color-gold-dark)',
              textTransform: 'uppercase',
              marginTop: '0.25rem',
              marginBottom: '0.15rem',
            }}
          >
            {config.yearsText}
          </div>

          {/* Title in Selected Language */}
          <h1
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: 'clamp(1.55rem, 4.8vw, 2.1rem)',
              fontWeight: 800,
              color: 'var(--color-maroon)',
              lineHeight: 1.25,
              marginBottom: '0.35rem',
            }}
          >
            {config.subHeading}
          </h1>

          {/* Mini Scalloped 50 Cartouche */}
          <div style={{ margin: '0.3rem 0 0.55rem' }}>
            <div className="auspicious-crest-50" style={{ padding: '0.5rem 1.35rem' }}>
              <span className="crest-num" style={{ fontSize: '2rem' }}>50</span>
              <span className="crest-sub" style={{ fontSize: '1.2rem' }}>Years</span>
            </div>
          </div>

          {/* Couple Names in Selected Language */}
          <div
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: 'clamp(1.05rem, 3.2vw, 1.22rem)',
              fontWeight: 800,
              color: 'var(--color-maroon)',
              lineHeight: 1.45,
              marginBottom: '0.35rem',
            }}
          >
            {config.couple.wifeHonorific} {config.couple.wifeName}
            <div style={{ color: 'var(--color-gold)', fontSize: '0.9em', margin: '0.05rem 0' }}>
              &amp;
            </div>
            {config.couple.husbandHonorific} {config.couple.husbandName}
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
              marginBottom: '0.9rem',
            }}
          >
            <span>{config.dateDetails.fullDateDisplay}</span>
            <span>•</span>
            <span>{config.venue.town}</span>
          </div>

          {/* =========================================================================
              STARTER LANGUAGE SELECTOR (Ask language Kannada, English, or Telugu)
              ========================================================================= */}
          <div
            style={{
              width: '100%',
              maxWidth: '380px',
              margin: '0.2rem 0 1rem',
              padding: '0.7rem 0.8rem',
              backgroundColor: 'rgba(255, 250, 240, 0.95)',
              border: '1.2px solid rgba(197, 158, 71, 0.45)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 4px 14px rgba(120, 17, 35, 0.06)',
            }}
          >
            {/* Language Box Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                fontFamily: 'var(--font-telugu-sans)',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: 'var(--color-gold-dark)',
                letterSpacing: '0.04em',
                marginBottom: '0.55rem',
                textTransform: 'uppercase',
              }}
            >
              <Globe size={13} color="var(--color-gold-dark)" />
              <span>{getLanguageHeaderTitle()}</span>
            </div>

            {/* 3 Language Choice Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.45rem',
              }}
            >
              {languageOptions.map((opt) => {
                const isSelected = language === opt.code;
                return (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => setLanguage(opt.code)}
                    className="lang-selector-card"
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.55rem 0.35rem',
                      borderRadius: 'var(--radius-sm)',
                      border: isSelected
                        ? '1.8px solid var(--color-gold-bright)'
                        : '1px solid rgba(197, 158, 71, 0.3)',
                      backgroundColor: isSelected
                        ? 'var(--color-maroon)'
                        : 'rgba(255, 255, 255, 0.9)',
                      color: isSelected ? '#FFFBF2' : 'var(--color-maroon)',
                      boxShadow: isSelected
                        ? '0 6px 16px rgba(120, 17, 35, 0.3), inset 0 0 10px rgba(228, 188, 94, 0.35)'
                        : '0 1px 3px rgba(0, 0, 0, 0.04)',
                      cursor: 'pointer',
                    }}
                    title={`Select ${opt.englishName}`}
                  >
                    {/* Active check pill */}
                    {isSelected && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '3px',
                          right: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '13px',
                          height: '13px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-gold-bright)',
                          color: 'var(--color-maroon)',
                        }}
                      >
                        <Check size={9} strokeWidth={3} />
                      </span>
                    )}

                    <span
                      style={{
                        fontFamily: opt.fontFamily,
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.08rem)',
                        fontWeight: 800,
                        lineHeight: 1.2,
                      }}
                    >
                      {opt.nativeName}
                    </span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        opacity: isSelected ? 0.92 : 0.75,
                        color: isSelected ? 'var(--color-gold-champagne)' : 'var(--color-text-muted)',
                        marginTop: '0.15rem',
                      }}
                    >
                      {opt.englishName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prominent Action Button: Opens the card in the chosen language */}
          <button
            id="open-invitation-btn"
            onClick={() => handleOpenInvitation()}
            disabled={animState === 'opening'}
            className="btn-divine-maroon animate-divine-pulse"
            style={{
              width: '100%',
              maxWidth: '320px',
              padding: '0.85rem 1.5rem',
              fontSize: 'clamp(1rem, 2.6vw, 1.15rem)',
              transform: isPressed ? 'scale(0.97)' : undefined,
            }}
            aria-label={`${config.coverButtonText} - Open Wedding Anniversary Invitation Card`}
          >
            <MailOpen size={20} color="var(--color-gold-champagne)" />
            <span>{config.coverButtonText}</span>
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
            {config.coverHintText}
          </div>

        </div>
      </div>
    </div>
  );
};
