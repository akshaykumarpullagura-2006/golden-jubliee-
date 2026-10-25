import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LotusDivider } from './TraditionalMotifs';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const { config } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    const fullAddress = `${config.venue.name}, ${config.venue.town}, ${config.venue.districtState}`;
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  return (
    <section
      id="venue-section"
      className="relative w-full"
      style={{
        paddingTop: 'clamp(1.75rem, 4vw, 2.75rem)',
        paddingBottom: 'clamp(1.75rem, 4vw, 2.75rem)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="divine-container" style={{ maxWidth: '640px' }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: 'var(--color-gold-dark)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {config.venue.sectionBadge}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: 'clamp(1.75rem, 4.2vw, 2.25rem)',
              fontWeight: 800,
              color: 'var(--color-maroon)',
              marginTop: '0.2rem',
              marginBottom: '0.2rem',
            }}
          >
            {config.venue.label}
          </h2>
          <LotusDivider />
        </div>

        {/* DIVINE VENUE CARD */}
        <div className="divine-card">
          <div className="divine-border-inner" style={{ textAlign: 'center' }}>
            
            {/* Venue Photo Display */}
            {config.venue.photoSrc && (
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                  border: '1.5px solid var(--color-gold)',
                  backgroundColor: '#FFFBF2',
                  boxShadow: '0 8px 24px rgba(120, 17, 35, 0.12)',
                }}
              >
                <img
                  src={config.venue.photoSrc}
                  alt={config.venue.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            )}

            {/* Subtle Map Pin Medallion */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(120, 17, 35, 0.06)',
                border: '1.5px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                boxShadow: '0 4px 12px rgba(120, 17, 35, 0.08)',
              }}
            >
              <MapPin size={24} color="var(--color-maroon)" />
            </div>

            {/* Venue Name */}
            <h3
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(1.4rem, 4vw, 1.85rem)',
                fontWeight: 800,
                color: 'var(--color-maroon)',
                lineHeight: 1.3,
                marginBottom: '0.25rem',
              }}
            >
              {config.venue.name}
            </h3>

            {/* Town Name */}
            <div
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)',
                fontWeight: 700,
                color: 'var(--color-text-main)',
                marginBottom: '0.2rem',
              }}
            >
              {config.venue.town}
            </div>

            {/* District & State */}
            <p
              style={{
                fontFamily: 'var(--font-telugu-sans)',
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                color: 'var(--color-text-muted)',
                marginBottom: '1.5rem',
              }}
            >
              {config.venue.districtState}
            </p>

            {/* Prominent Mobile-Friendly Directions Action */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <a
                id="google-maps-directions-link"
                href={config.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-divine-maroon"
                style={{
                  fontSize: 'clamp(0.92rem, 2.2vw, 1rem)',
                  padding: '0.75rem 2rem',
                  width: '100%',
                  maxWidth: '340px',
                }}
                aria-label={`${config.venue.buttonText} - View directions in Google Maps`}
              >
                <Navigation size={17} color="var(--color-gold-champagne)" />
                <span>{config.venue.buttonText}</span>
                <ExternalLink size={14} color="var(--color-gold-champagne)" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="btn-divine-outline"
                style={{ fontSize: '0.82rem', padding: '0.45rem 1.15rem' }}
              >
                {copied ? <Check size={14} color="green" /> : <Copy size={14} />}
                <span>{copied ? config.venue.copiedText : config.venue.copyAddressText}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
