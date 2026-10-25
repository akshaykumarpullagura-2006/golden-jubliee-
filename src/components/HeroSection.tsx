import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SacredOmBadge, LotusDivider } from './TraditionalMotifs';
import { Calendar, MapPin, Share2, Heart } from 'lucide-react';

interface HeroSectionProps {
  onScrollToSchedule: () => void;
  onScrollToVenue: () => void;
  onShare: () => void;
  onAddToCalendar: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToSchedule,
  onScrollToVenue,
  onShare,
  onAddToCalendar,
}) => {
  const { config, language } = useLanguage();
  return (
    <section
      id="hero-section"
      className="relative w-full"
      style={{
        paddingTop: 'clamp(1.5rem, 4vw, 2.5rem)',
        paddingBottom: 'clamp(2rem, 5vw, 3.5rem)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="divine-container" style={{ maxWidth: '680px' }}>
        
        {/* Main Divine Card Container */}
        <div
          className="divine-card"
          style={{
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            className="divine-border-inner"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Top Sacred Om & Slokam */}
            <div style={{ marginBottom: '0.4rem' }}>
              <SacredOmBadge size={34} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(0.82rem, 2.3vw, 0.94rem)',
                color: 'var(--color-maroon)',
                fontWeight: 700,
                lineHeight: 1.6,
                padding: '0.35rem 0.85rem',
                backgroundColor: 'rgba(255, 249, 238, 0.85)',
                border: '1px solid rgba(197, 158, 71, 0.25)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '0.65rem',
                width: '100%',
                maxWidth: '480px',
              }}
            >
              {config.slokam.line1}
              <br />
              {config.slokam.line2}
            </div>

            {/* Couple/Family Photograph in Royal Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '360px',
                margin: '0.5rem auto 1.35rem',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  padding: '5px',
                  background: 'linear-gradient(135deg, #E4BC5E 0%, #C59E47 50%, #8C6A21 100%)',
                  borderRadius: '18px',
                  boxShadow: '0 12px 32px rgba(120, 17, 35, 0.16)',
                }}
              >
                <div
                  style={{
                    borderRadius: '14px',
                    overflow: 'hidden',
                    backgroundColor: '#FFFDF7',
                    position: 'relative',
                  }}
                >
                  <img
                    src={config.couple.photoSrc}
                    alt={config.couple.altText}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '480px',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                      borderRadius: '13px',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('original_reference_invitation')) {
                        target.src = '/images/original_reference_invitation.jpg';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Overlapping Grand 50 Emblem */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 20,
                }}
              >
                <div className="auspicious-crest-50" style={{ padding: '0.5rem 1.4rem' }}>
                  <span className="crest-num" style={{ fontSize: '2.2rem' }}>50</span>
                  <span className="crest-sub" style={{ fontSize: '1.25rem' }}>Years</span>
                </div>
              </div>
            </div>

            {/* Event Title & Subtitles */}
            <div style={{ marginTop: '1.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-english-display)',
                  fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--color-gold-dark)',
                  textTransform: 'uppercase',
                  marginBottom: '0.15rem',
                }}
              >
                {config.yearsText}
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-telugu-serif)',
                  fontSize: 'clamp(1.9rem, 5.5vw, 2.7rem)',
                  fontWeight: 800,
                  color: 'var(--color-maroon)',
                  lineHeight: 1.15,
                  margin: '0.1rem 0',
                }}
              >
                {config.eventTitle}
              </h1>
            </div>

            <LotusDivider />

            {/* MAIN FOCAL POINT: The Couple's Names in Grand Typography */}
            <div style={{ margin: '0.75rem 0 1rem', width: '100%' }}>
              <div
                style={{
                  fontFamily: 'var(--font-telugu-serif)',
                  fontSize: 'clamp(1.35rem, 4.2vw, 1.95rem)',
                  fontWeight: 800,
                  color: 'var(--color-maroon)',
                  lineHeight: 1.35,
                }}
              >
                {config.couple.wifeHonorific} {config.couple.wifeName}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-telugu-serif)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  margin: '0.1rem 0',
                }}
              >
                &amp;
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-telugu-serif)',
                  fontSize: 'clamp(1.35rem, 4.2vw, 1.95rem)',
                  fontWeight: 800,
                  color: 'var(--color-maroon)',
                  lineHeight: 1.35,
                }}
              >
                {config.couple.husbandHonorific} {config.couple.husbandName}
              </div>
            </div>

            {/* Heartfelt Quote Banner */}
            <p
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(0.92rem, 2.4vw, 1.08rem)',
                color: 'var(--color-text-main)',
                fontWeight: 600,
                lineHeight: 1.55,
                maxWidth: '480px',
                padding: '0.55rem 0.95rem',
                backgroundColor: 'rgba(243, 232, 205, 0.45)',
                border: '1px dashed rgba(197, 158, 71, 0.5)',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.25rem',
              }}
            >
              &ldquo;{config.couple.inviteQuote}&rdquo;
            </p>

            {/* 1976 - 2026 Milestone Ribbon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.3rem 0.9rem',
                backgroundColor: 'var(--color-maroon)',
                color: '#FFFDF5',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '1.4rem',
              }}
            >
              <Heart size={13} fill="var(--color-gold-bright)" color="var(--color-gold-bright)" />
              <span>
                {language === 'kn'
                  ? '1976 — 2026 : 50 ವರ್ಷಗಳ ಸ್ವರ್ಣ ದಾಂಪತ್ಯ ಸಂಭ್ರಮ'
                  : language === 'en'
                  ? '1976 — 2026 : 50 Glorious Years of Togetherness'
                  : '1976 — 2026 : అర్థ శతాబ్దపు అపురూప దాంపత్యం'}
              </span>
              <Heart size={13} fill="var(--color-gold-bright)" color="var(--color-gold-bright)" />
            </div>

            {/* Quick Action Navigation Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
              }}
            >
              <button
                onClick={onScrollToSchedule}
                className="btn-divine-maroon"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
              >
                <Calendar size={16} />
                <span>{config.headerNav.schedule}</span>
              </button>

              <button
                onClick={onScrollToVenue}
                className="btn-divine-outline"
                style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
              >
                <MapPin size={16} />
                <span>{language === 'kn' ? 'ಸ್ಥಳದ ದಾರಿ' : language === 'en' ? 'Directions' : 'వేదిక మార్గం'}</span>
              </button>

              <button
                onClick={onAddToCalendar}
                className="btn-divine-outline"
                style={{ padding: '0.65rem 1.15rem', fontSize: '0.88rem' }}
                title="Add to calendar"
              >
                <Calendar size={16} />
                <span>{language === 'kn' ? 'ಕ್ಯಾಲೆಂಡರ್' : language === 'en' ? 'Calendar' : 'క్యాలెండర్'}</span>
              </button>

              <button
                onClick={onShare}
                className="btn-divine-outline"
                style={{ padding: '0.65rem 1.15rem', fontSize: '0.88rem' }}
                title="Share digital invitation"
              >
                <Share2 size={16} />
                <span>{language === 'kn' ? 'ಆಹ್ವಾನ ಹಂಚಿಕೊಳ್ಳಿ' : language === 'en' ? 'Share Invite' : 'షేర్ చేయండి'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
