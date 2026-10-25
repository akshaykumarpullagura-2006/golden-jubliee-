import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LotusDivider } from './TraditionalMotifs';
import { Users, Heart, Sparkles } from 'lucide-react';

export const FamilyMembersSection: React.FC = () => {
  const { config } = useLanguage();

  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'sons':
        return <Users size={20} color="var(--color-maroon)" />;
      case 'daughters-in-law':
        return <Heart size={19} color="var(--color-maroon)" />;
      case 'grandchildren':
        return <Sparkles size={19} color="var(--color-maroon)" />;
      default:
        return <Users size={20} color="var(--color-maroon)" />;
    }
  };

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
            {config.familySection.badge}
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
            {config.familySection.heading}
          </h2>

          <LotusDivider />
        </div>

        {/* 3 Balanced Cards strictly in the same row on desktop / tablet, stacked on mobile */}
        <div className="family-cards-grid">
          {config.familySection.groups.map((group) => (
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
                    {getGroupIcon(group.id)}
                  </div>

                  {/* Group Title in Selected Language */}
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
                    {group.title}
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
                    {group.subtitle}
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

                {/* Natural Invitation Tag in Selected Language */}
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
                    &ldquo;{group.tag}&rdquo;
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
