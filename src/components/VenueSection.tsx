import React, { useState } from 'react';
import { INVITATION_CONFIG } from '../data/invitationConfig';
import { LotusDivider } from './TraditionalMotifs';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    const fullAddress = `${INVITATION_CONFIG.venue.name}, ${INVITATION_CONFIG.venue.town}, ${INVITATION_CONFIG.venue.districtState}`;
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
            కళ్యాణ వేదిక &amp; చిరునామా
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
            {INVITATION_CONFIG.venue.label}
          </h2>
          <LotusDivider />
        </div>

        {/* DIVINE VENUE CARD */}
        <div className="divine-card">
          <div className="divine-border-inner" style={{ textAlign: 'center' }}>
            
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
              {INVITATION_CONFIG.venue.name}
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
              {INVITATION_CONFIG.venue.town}
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
              {INVITATION_CONFIG.venue.districtState}
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
                href={INVITATION_CONFIG.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-divine-maroon"
                style={{
                  fontSize: 'clamp(0.92rem, 2.2vw, 1rem)',
                  padding: '0.75rem 2rem',
                  width: '100%',
                  maxWidth: '340px',
                }}
                aria-label="Google Mapsలో మార్గం చూడండి - View directions in Google Maps"
              >
                <Navigation size={17} color="var(--color-gold-champagne)" />
                <span>{INVITATION_CONFIG.venue.buttonText}</span>
                <ExternalLink size={14} color="var(--color-gold-champagne)" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="btn-divine-outline"
                style={{ fontSize: '0.82rem', padding: '0.45rem 1.15rem' }}
              >
                {copied ? <Check size={14} color="green" /> : <Copy size={14} />}
                <span>{copied ? 'చిరునామా కాపీ చేయబడింది!' : 'చిరునామా కాపీ చేయండి'}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
