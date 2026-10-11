import React from 'react';
import { INVITATION_CONFIG } from '../data/invitationConfig';
import { LotusDivider } from './TraditionalMotifs';
import { ChevronUp, Share2 } from 'lucide-react';

interface TraditionalFooterProps {
  onScrollToTop: () => void;
  onShare: () => void;
  onOpenAdmin: () => void;
}

export const TraditionalFooter: React.FC<TraditionalFooterProps> = ({ onScrollToTop, onShare, onOpenAdmin }) => {
  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#32050D',
        color: '#FFFBF2',
        borderTop: '2px solid var(--color-gold)',
        padding: '2.25rem 1.25rem 2rem',
        textAlign: 'center',
      }}
    >
      <div className="divine-container" style={{ maxWidth: '640px' }}>
        
        {/* Sacred Om */}
        <div style={{ marginBottom: '0.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--color-gold-bright)',
            }}
          >
            ॐ
          </span>
        </div>

        {/* Sacred Blessing */}
        <p
          style={{
            fontFamily: 'var(--font-telugu-serif)',
            fontSize: '0.98rem',
            fontWeight: 700,
            color: 'var(--color-gold-champagne)',
            marginBottom: '0.4rem',
          }}
        >
          సర్వేజనాః సుఖినోభవంతు • మంగళం మహత్
        </p>

        <LotusDivider color="rgba(243, 232, 205, 0.45)" />

        {/* Family Name */}
        <div
          style={{
            fontFamily: 'var(--font-telugu-serif)',
            fontSize: 'clamp(1.25rem, 3.4vw, 1.65rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginTop: '0.6rem',
            marginBottom: '0.2rem',
          }}
        >
          {INVITATION_CONFIG.invitationSignOff.invitedByName}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-telugu-sans)',
            fontSize: '0.82rem',
            color: 'var(--color-gold-champagne)',
            marginBottom: '1.35rem',
          }}
        >
          శ్రీ వాసవి కళ్యాణ మండపం, యర్రగుంట్ల • 30-10-2026
        </p>

        {/* Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
          }}
        >
          <button
            onClick={onShare}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 1.15rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(197, 158, 71, 0.4)',
              borderRadius: 'var(--radius-full)',
              color: '#FFFBF2',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Share2 size={13} color="var(--color-gold-champagne)" />
            <span>ఆహ్వానం షేర్ చేయండి</span>
          </button>

          <button
            onClick={onScrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 1.15rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              borderRadius: 'var(--radius-full)',
              color: '#FFFBF2',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.82rem',
              cursor: 'pointer',
            }}
          >
            <ChevronUp size={13} />
            <span>పైకి వెళ్ళండి</span>
          </button>

          {/* Discreet Admin Access */}
          <button
            onClick={onOpenAdmin}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.45rem 0.95rem',
              backgroundColor: 'rgba(197, 158, 71, 0.18)',
              border: '1px solid rgba(197, 158, 71, 0.4)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-gold-champagne)',
              fontFamily: 'var(--font-telugu-sans)',
              fontSize: '0.78rem',
              cursor: 'pointer',
            }}
            title="Open Admin Dashboard"
          >
            <span>🔒 అడ్మిన్ (Admin)</span>
          </button>
        </div>

        {/* Tribute line */}
        <div
          style={{
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            fontFamily: 'var(--font-telugu-sans)',
            fontSize: '0.74rem',
            color: 'rgba(255, 251, 242, 0.65)',
          }}
        >
          50 Years of Togetherness (1976 – 2026) • Pullagura Family
        </div>

      </div>
    </footer>
  );
};
