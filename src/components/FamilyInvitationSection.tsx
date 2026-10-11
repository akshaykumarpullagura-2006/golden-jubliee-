import React, { useState, useEffect } from 'react';
import { INVITATION_CONFIG } from '../data/invitationConfig';
import { LotusDivider } from './TraditionalMotifs';
import { subscribeToBlessings, addBlessing, type BlessingItem } from '../services/firebase';
import { Heart, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FamilyInvitationSection: React.FC = () => {
  const [blessings, setBlessings] = useState<BlessingItem[]>([]);
  const [guestName, setGuestName] = useState('');
  const [guestCity, setGuestCity] = useState('');
  const [guestText, setGuestText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Real-time listener for Firebase Firestore / Local sync
    const unsubscribe = subscribeToBlessings((items) => {
      setBlessings(items);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmitBlessing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestText.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await addBlessing(guestName.trim(), guestCity.trim() || 'ఆత్మీయులు', guestText.trim());

      setGuestName('');
      setGuestCity('');
      setGuestText('');
      setSubmitted(true);

      try {
        confetti({
          particleCount: 25,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#B99A55', '#E9DDBF', '#781B2A'],
        });
      } catch {
        // ignore
      }

      setTimeout(() => setSubmitted(false), 3500);
    } catch (err) {
      console.error("Error submitting blessing:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="family-invitation-section"
      className="relative w-full"
      style={{
        paddingTop: 'clamp(1.75rem, 4vw, 2.75rem)',
        paddingBottom: 'clamp(1.75rem, 4vw, 2.75rem)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="divine-container" style={{ maxWidth: '720px' }}>
        
        {/* RESTRAINED ROYAL MAROON-AND-GOLD PANEL */}
        <div
          style={{
            position: 'relative',
            background: 'linear-gradient(155deg, #781123 0%, #4A0A16 100%)',
            border: '2px solid var(--color-gold)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 16px 40px rgba(74, 10, 22, 0.35)',
            padding: 'clamp(1.8rem, 4.5vw, 2.8rem) clamp(1.2rem, 3.5vw, 2.2rem)',
            color: '#FFFBF2',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Corner Accents */}
          <div
            style={{
              position: 'absolute',
              inset: '6px',
              border: '1px dashed rgba(228, 188, 94, 0.45)',
              borderRadius: 'calc(var(--radius-lg) - 6px)',
              pointerEvents: 'none',
            }}
          />

          {/* Exact Line 1: ఆహ్వానించువారు */}
          <div style={{ marginBottom: '1.25rem', position: 'relative', zIndex: 1 }}>
            <span
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
                fontWeight: 600,
                color: 'var(--color-gold-champagne)',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              {INVITATION_CONFIG.invitationSignOff.invitedByLabel}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(1.65rem, 4.4vw, 2.25rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.25,
              }}
            >
              {INVITATION_CONFIG.invitationSignOff.invitedByName}
            </h3>
          </div>

          {/* Minimal Clean Divider */}
          <div style={{ margin: '1rem auto', maxWidth: '240px', position: 'relative', zIndex: 1 }}>
            <LotusDivider color="rgba(243, 232, 205, 0.55)" />
          </div>

          {/* Exact Line 2: శుభాశీస్సులతో */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
                fontWeight: 600,
                color: 'var(--color-gold-champagne)',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '0.35rem',
              }}
            >
              {INVITATION_CONFIG.invitationSignOff.blessingsLabel}
            </span>

            <div
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: 'clamp(1.25rem, 3.4vw, 1.65rem)',
                fontWeight: 800,
                color: '#FFF8E8',
                lineHeight: 1.4,
              }}
            >
              {INVITATION_CONFIG.couple.wifeHonorific} {INVITATION_CONFIG.couple.wifeName}
              <div
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-gold-champagne)',
                  margin: '0.1rem 0',
                }}
              >
                &amp;
              </div>
              {INVITATION_CONFIG.couple.husbandHonorific} {INVITATION_CONFIG.couple.husbandName}
            </div>
          </div>
        </div>

        {/* DIVINE GUEST BLESSINGS FORM & WISHES */}
        <div className="divine-card" style={{ marginTop: '1.75rem' }}>
          <div className="divine-border-inner">
            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-maroon)' }}>
                <Heart size={17} fill="var(--color-maroon)" color="var(--color-maroon)" />
                <h4
                  style={{
                    fontFamily: 'var(--font-telugu-serif)',
                    fontSize: 'clamp(1.15rem, 2.8vw, 1.35rem)',
                    fontWeight: 800,
                    color: 'var(--color-maroon)',
                  }}
                >
                  దంపతులకు మీ ఆశీస్సులు తెలపండి
                </h4>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-telugu-sans)',
                  fontSize: '0.82rem',
                  color: 'var(--color-text-muted)',
                  marginTop: '0.15rem',
                }}
              >
                గోల్డెన్ జూబ్లీ స్వర్ణ దంపతులకు మీ ఆత్మీయ సందేశాన్ని అందించండి
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitBlessing} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
                <input
                  type="text"
                  placeholder="మీ పేరు (Your Name)"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  required
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(197, 158, 71, 0.45)',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'var(--font-telugu-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--color-text-main)',
                    outline: 'none',
                  }}
                />
                <input
                  type="text"
                  placeholder="మీ ఊరు / బంధుత్వం (City / Relation)"
                  value={guestCity}
                  onChange={(e) => setGuestCity(e.target.value)}
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(197, 158, 71, 0.45)',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'var(--font-telugu-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--color-text-main)',
                    outline: 'none',
                  }}
                />
              </div>

              <textarea
                placeholder="మీ శుభాశీస్సుల సందేశం (Your blessing message...)"
                value={guestText}
                onChange={(e) => setGuestText(e.target.value)}
                required
                rows={2}
                style={{
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(197, 158, 71, 0.45)',
                  backgroundColor: '#FFFFFF',
                  fontFamily: 'var(--font-telugu-sans)',
                  fontSize: '0.88rem',
                  color: 'var(--color-text-main)',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.2rem' }}>
                <button
                  type="submit"
                  className="btn-divine-maroon"
                  style={{ padding: '0.6rem 1.7rem', fontSize: '0.9rem' }}
                >
                  <Send size={14} />
                  <span>ఆశీర్వాదం పంపండి</span>
                </button>
              </div>

              {submitted && (
                <p
                  style={{
                    fontFamily: 'var(--font-telugu-serif)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'green',
                    textAlign: 'center',
                    marginTop: '0.25rem',
                  }}
                >
                  🙏 మీ ఆశీస్సులు కుటుంబానికి చేరాయి, ధన్యవాదాలు!
                </p>
              )}
            </form>

            {/* Clean Blessings List */}
            {blessings.length > 0 && (
              <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {blessings.slice(0, 3).map((b) => (
                  <div
                    key={b.id}
                    style={{
                      padding: '0.65rem 0.85rem',
                      backgroundColor: 'rgba(252, 246, 232, 0.8)',
                      border: '1px solid rgba(197, 158, 71, 0.25)',
                      borderRadius: 'var(--radius-sm)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.15rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-telugu-serif)',
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          color: 'var(--color-maroon)',
                        }}
                      >
                        {b.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-telugu-sans)',
                          fontSize: '0.7rem',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {b.relationOrCity}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-telugu-sans)',
                        fontSize: '0.82rem',
                        color: 'var(--color-text-main)',
                        lineHeight: 1.4,
                      }}
                    >
                      &ldquo;{b.message}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
