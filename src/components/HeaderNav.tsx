import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { type Language } from '../data/invitationConfig';
import { Mail, Calendar, MapPin, Image, Heart, Users, Globe } from 'lucide-react';

interface HeaderNavProps {
  onReopenCover: () => void;
  onScrollTo: (id: string) => void;
  onOpenAdmin: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onReopenCover, onScrollTo, onOpenAdmin }) => {
  const { language, setLanguage, config } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languagePills: { code: Language; label: string }[] = [
    { code: 'te', label: 'తె' },
    { code: 'kn', label: 'ಕ' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9000,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(255, 249, 238, 0.96)' : 'rgba(255, 249, 238, 0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(197, 158, 71, 0.28)',
        boxShadow: isScrolled ? '0 4px 16px rgba(74, 10, 22, 0.08)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          padding: '0.45rem clamp(0.75rem, 3vw, 1.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
        }}
      >
        {/* Top Row: Brand, Language Switcher, and Cover/Admin Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '0.5rem',
          }}
        >
          {/* Brand Link */}
          <div
            onClick={() => onScrollTo('hero-section')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-maroon)',
                border: '1.2px solid var(--color-gold-bright)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-champagne)',
                fontFamily: 'var(--font-english-display)',
                fontWeight: 800,
                fontSize: '0.75rem',
                boxShadow: '0 2px 6px rgba(120, 17, 35, 0.25)',
              }}
            >
              50
            </div>
            <span
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontWeight: 800,
                fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
                color: 'var(--color-maroon)',
              }}
            >
              {config.eventTitle}
            </span>
          </div>

          {/* Center/Right: Language Toggle + Cover & Admin Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            
            {/* Quick 3-Way Language Toggle Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                border: '1.2px solid rgba(197, 158, 71, 0.45)',
                borderRadius: 'var(--radius-full)',
                padding: '2px',
                boxShadow: '0 1px 4px rgba(120, 17, 35, 0.06)',
              }}
              title="Change Language (Telugu / Kannada / English)"
            >
              <Globe size={11} color="var(--color-gold-dark)" style={{ marginLeft: '4px', marginRight: '2px' }} />
              {languagePills.map((pill) => {
                const isActive = language === pill.code;
                return (
                  <button
                    key={pill.code}
                    type="button"
                    onClick={() => setLanguage(pill.code)}
                    className="lang-pill-btn"
                    style={{
                      border: 'none',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.2rem 0.5rem',
                      fontSize: '0.72rem',
                      fontWeight: isActive ? 800 : 600,
                      backgroundColor: isActive ? 'var(--color-maroon)' : 'transparent',
                      color: isActive ? '#FFF9EE' : 'var(--color-maroon)',
                      cursor: 'pointer',
                      lineHeight: 1.2,
                    }}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>

            {/* Reopen Cover */}
            <button
              onClick={onReopenCover}
              className="btn-divine-outline"
              style={{
                padding: '0.25rem 0.55rem',
                fontSize: '0.74rem',
                fontWeight: 700,
              }}
              title="View Invitation Cover"
            >
              <Mail size={11} />
              <span>{config.headerNav.cover}</span>
            </button>

            {/* Admin */}
            <button
              onClick={onOpenAdmin}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
                backgroundColor: 'rgba(120, 17, 35, 0.08)',
                border: '1px solid rgba(197, 158, 71, 0.35)',
                color: 'var(--color-maroon)',
                borderRadius: 'var(--radius-full)',
                padding: '0.25rem 0.55rem',
                fontSize: '0.74rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
              title="Open Admin Dashboard"
            >
              <span>🔒 Admin</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Pills (Smooth horizontal scroll on mobile, flex on desktop) */}
        <nav
          className="no-scrollbar"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            overflowX: 'auto',
            paddingBottom: '0.2rem',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <button
            onClick={() => onScrollTo('schedule-section')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'rgba(252, 246, 232, 0.85)',
              border: '1px solid rgba(197, 158, 71, 0.3)',
              color: 'var(--color-maroon)',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '0.28rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <Calendar size={12} color="var(--color-gold-dark)" />
            <span>{config.headerNav.schedule}</span>
          </button>

          <button
            onClick={() => onScrollTo('venue-section')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'rgba(252, 246, 232, 0.85)',
              border: '1px solid rgba(197, 158, 71, 0.3)',
              color: 'var(--color-maroon)',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '0.28rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <MapPin size={12} color="var(--color-gold-dark)" />
            <span>{config.headerNav.venue}</span>
          </button>

          <button
            onClick={() => onScrollTo('gallery-section')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'rgba(252, 246, 232, 0.85)',
              border: '1px solid rgba(197, 158, 71, 0.3)',
              color: 'var(--color-maroon)',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '0.28rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <Image size={12} color="var(--color-gold-dark)" />
            <span>{config.headerNav.gallery}</span>
          </button>

          <button
            onClick={() => onScrollTo('family-members-section')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'rgba(252, 246, 232, 0.85)',
              border: '1px solid rgba(197, 158, 71, 0.3)',
              color: 'var(--color-maroon)',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '0.28rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <Users size={12} color="var(--color-gold-dark)" />
            <span>{config.headerNav.family}</span>
          </button>

          <button
            onClick={() => onScrollTo('family-invitation-section')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              background: 'rgba(252, 246, 232, 0.85)',
              border: '1px solid rgba(197, 158, 71, 0.3)',
              color: 'var(--color-maroon)',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '0.28rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            <Heart size={12} color="var(--color-gold-dark)" />
            <span>{config.headerNav.wishes}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
