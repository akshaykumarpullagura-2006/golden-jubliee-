import React, { useState, useEffect } from 'react';
import { Mail, Calendar, MapPin, Image, Heart, Users } from 'lucide-react';

interface HeaderNavProps {
  onReopenCover: () => void;
  onScrollTo: (id: string) => void;
  onOpenAdmin: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onReopenCover, onScrollTo, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 9000,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(255, 249, 238, 0.94)' : 'rgba(255, 249, 238, 0.88)',
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
          padding: '0.5rem clamp(0.75rem, 3vw, 1.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
        }}
      >
        {/* Top Row: Brand & Quick Cover/Admin Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
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
              గోల్డెన్ జూబ్లీ
            </span>
          </div>

          {/* Quick Actions (Cover & Admin) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <button
              onClick={onReopenCover}
              className="btn-divine-outline"
              style={{
                padding: '0.25rem 0.55rem',
                fontSize: '0.74rem',
                fontWeight: 700,
              }}
              title="View Cover"
            >
              <Mail size={11} />
              <span>కవర్</span>
            </button>

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
              <span>🔒 అడ్మిన్</span>
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
            <span>కార్యక్రమాలు</span>
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
            <span>వేదిక</span>
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
            <span>ఫోటోలు</span>
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
            <span>కుటుంబం</span>
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
            <span>ఆశీస్సులు</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
