import React from 'react';
import { LotusDivider } from './TraditionalMotifs';
import { Users, Heart, Sparkles } from 'lucide-react';

interface FamilyGroup {
  id: string;
  titleTelugu: string;
  titleEnglish: string;
  tagTelugu: string;
  icon: React.ReactNode;
  names: string[];
}

const FAMILY_GROUPS: FamilyGroup[] = [
  {
    id: 'sons',
    titleTelugu: 'కుమారులు',
    titleEnglish: 'Sons',
    tagTelugu: 'మా అమ్మా నాన్నల గోల్డెన్ జూబ్లీ వేడుకకి తప్పకుండా రండి!',
    icon: <Users size={20} color="var(--color-maroon)" />,
    names: [
      'ASHOK KUMAR',
      'MURALI KRISHNA MURTHY',
      'RAJESH KUMAR',
      'PRAVEEN KUMAR',
    ],
  },
  {
    id: 'daughters-in-law',
    titleTelugu: 'కోడళ్ళు',
    titleEnglish: 'Daughters-in-law',
    tagTelugu: 'మా మామయ్య, అత్తమ్మల గోల్డెన్ జూబ్లీ వేడుకకి తప్పకుండా రండి!',
    icon: <Heart size={19} color="var(--color-maroon)" />,
    names: [
      'MAHA LAKSHMI',
      'PRASHANTHI',
      'SAI LAKSHMI',
    ],
  },
  {
    id: 'grandchildren',
    titleTelugu: 'మనుమలు & మనుమరాళ్ళు',
    titleEnglish: 'Grandchildren',
    tagTelugu: 'మా అబ్బా నానమ్మల వేడుకకి తప్పకుండా రండి!',
    icon: <Sparkles size={19} color="var(--color-maroon)" />,
    names: [
      'AKSHAY KUMAR',
      'ADITHYA',
      'AMRUTHA',
      'HARSHA SASI NIKETHAN',
      'HITHASVI',
    ],
  },
];

export const FamilyMembersSection: React.FC = () => {
  return (
    <section
      id="family-members-section"
      className="relative w-full"
      style={{
        paddingTop: 'clamp(1.75rem, 4vw, 2.75rem)',
        paddingBottom: 'clamp(1.75rem, 4vw, 2.75rem)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="divine-container" style={{ maxWidth: '1040px' }}>
        
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
            ఆత్మీయ ఆహ్వానం • Family Cordial Invite
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: 'clamp(1.75rem, 4.2vw, 2.3rem)',
              fontWeight: 800,
              color: 'var(--color-maroon)',
              marginTop: '0.2rem',
              marginBottom: '0.2rem',
            }}
          >
            మా కుటుంబం తరఫున ఆహ్వానం
          </h2>

          <LotusDivider />
        </div>

        {/* 3 Balanced Cards strictly in the same row on desktop / tablet, stacked on mobile */}
        <div className="family-cards-grid">
          {FAMILY_GROUPS.map((group) => (
            <div
              key={group.id}
              className="divine-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="divine-border-inner"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: 'calc(100% - 12px)',
                  textAlign: 'center',
                }}
              >
                {/* Group Top Info */}
                <div>
                  {/* Icon Medallion */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(120, 17, 35, 0.06)',
                      border: '1.2px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.75rem',
                      boxShadow: '0 2px 8px rgba(120, 17, 35, 0.06)',
                    }}
                  >
                    {group.icon}
                  </div>

                  {/* Group Title in Telugu */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-telugu-serif)',
                      fontSize: 'clamp(1.25rem, 2.6vw, 1.45rem)',
                      fontWeight: 800,
                      color: 'var(--color-maroon)',
                      lineHeight: 1.25,
                      marginBottom: '0.1rem',
                    }}
                  >
                    {group.titleTelugu}
                  </h3>

                  {/* English Subtitle */}
                  <div
                    style={{
                      fontFamily: 'var(--font-english-display)',
                      fontSize: '0.74rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-gold-dark)',
                      textTransform: 'uppercase',
                      marginBottom: '0.95rem',
                    }}
                  >
                    {group.titleEnglish}
                  </div>

                  {/* Names List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      padding: '0.85rem 0',
                      borderTop: '1px solid rgba(197, 158, 71, 0.2)',
                      borderBottom: '1px solid rgba(197, 158, 71, 0.2)',
                      marginBottom: '1rem',
                    }}
                  >
                    {group.names.map((name, idx) => (
                      <div
                        key={idx}
                        style={{
                          fontFamily: 'var(--font-english-serif)',
                          fontSize: 'clamp(0.92rem, 2vw, 1rem)',
                          fontWeight: 600,
                          color: 'var(--color-text-main)',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Natural Telugu Invitation Tag */}
                <div
                  style={{
                    padding: '0.65rem 0.85rem',
                    backgroundColor: 'rgba(252, 246, 232, 0.9)',
                    border: '1px dashed rgba(197, 158, 71, 0.5)',
                    borderRadius: 'var(--radius-sm)',
                    marginTop: 'auto',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-telugu-serif)',
                      fontSize: 'clamp(0.84rem, 1.8vw, 0.92rem)',
                      fontWeight: 700,
                      color: 'var(--color-maroon)',
                      lineHeight: 1.45,
                    }}
                  >
                    &ldquo;{group.tagTelugu}&rdquo;
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
