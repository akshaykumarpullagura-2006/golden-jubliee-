import React, { useState, useEffect } from 'react';
import { INVITATION_CONFIG } from '../data/invitationConfig';
import { LotusDivider } from './TraditionalMotifs';
import { Calendar, Clock, Download, ExternalLink } from 'lucide-react';

interface ScheduleSectionProps {
  onAddToCalendar: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onAddToCalendar }) => {
  // Live Countdown to 30 October 2026, 08:30 AM IST
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(INVITATION_CONFIG.dateDetails.isoDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent('గోల్డెన్ జూబ్లీ - శ్రీమతి పుల్లగూర సుబ్బలక్షమ్మ & శ్రీ పుల్లగూర పెద్ద గోవిందస్వామి');
    const details = encodeURIComponent(
      '50 వసంతాల దాంపత్య స్వర్ణోత్సవం (Golden Jubilee Celebration)\n\nకార్యక్రమ వివరాలు:\n• ఉదయం 8:30 — పాద పూజ\n• ఉదయం 9:00 — సత్యనారాయణ స్వామి పూజ ప్రారంభం\n• మధ్యాహ్నం 12:00 — గోల్డెన్ జూబ్లీ ఫంక్షన్\n• మధ్యాహ్నం 1:00 — విందు భోజనం\n\nఆహ్వానించువారు: శ్రీ పుల్లగూర ఫ్యామిలీ'
    );
    const location = encodeURIComponent('శ్రీ వాసవి కళ్యాణ మండపం (A/C), యర్రగుంట్ల, ఆంధ్రప్రదేశ్');
    const dates = '20261030T030000Z/20261030T100000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section
      id="schedule-section"
      className="relative w-full"
      style={{
        paddingTop: 'clamp(1.75rem, 4vw, 2.75rem)',
        paddingBottom: 'clamp(1.75rem, 4vw, 2.75rem)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="divine-container" style={{ maxWidth: '680px' }}>
        
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
            శుభ ముహూర్తం &amp; సమయాలు
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
            తేదీ &amp; కార్యక్రమ వివరాలు
          </h2>
          <LotusDivider />
        </div>

        {/* DIVINE UNIFIED SCHEDULE CARD */}
        <div className="divine-card">
          <div className="divine-border-inner">
            {/* Top Date & Countdown Row */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                paddingBottom: '1.35rem',
                borderBottom: '1px solid rgba(197, 158, 71, 0.28)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-telugu-serif)',
                  fontSize: 'clamp(1.9rem, 5vw, 2.6rem)',
                  fontWeight: 900,
                  color: 'var(--color-maroon)',
                  lineHeight: 1.15,
                }}
              >
                {INVITATION_CONFIG.dateDetails.dateDisplay}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-telugu-serif)',
                  fontSize: 'clamp(1.1rem, 2.8vw, 1.35rem)',
                  fontWeight: 700,
                  color: 'var(--color-gold-dark)',
                  marginTop: '0.15rem',
                }}
              >
                {INVITATION_CONFIG.dateDetails.dayDisplay}
              </div>

              {/* Compact Countdown Bar */}
              <div
                style={{
                  display: 'flex',
                  gap: 'clamp(0.4rem, 1.8vw, 0.75rem)',
                  marginTop: '1rem',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                {[
                  { label: 'రోజులు', val: timeLeft.days },
                  { label: 'గంటలు', val: timeLeft.hours },
                  { label: 'నిమిషాలు', val: timeLeft.minutes },
                  { label: 'సెకన్లు', val: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(252, 246, 232, 0.9)',
                      border: '1px solid rgba(197, 158, 71, 0.35)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.4rem clamp(0.45rem, 1.8vw, 0.75rem)',
                      minWidth: 'clamp(52px, 14vw, 68px)',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-english-display)',
                        fontSize: 'clamp(1.05rem, 2.6vw, 1.3rem)',
                        fontWeight: 800,
                        color: 'var(--color-maroon)',
                        lineHeight: 1,
                      }}
                    >
                      {String(item.val).padStart(2, '0')}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-telugu-sans)',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        color: 'var(--color-text-muted)',
                        marginTop: '0.15rem',
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Calendar Actions */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  marginTop: '1.1rem',
                }}
              >
                <a
                  href={createGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-divine-outline"
                  style={{ fontSize: '0.82rem', padding: '0.45rem 1rem' }}
                >
                  <Calendar size={14} />
                  <span>Google Calendar</span>
                  <ExternalLink size={12} />
                </a>

                <button
                  onClick={onAddToCalendar}
                  className="btn-divine-outline"
                  style={{ fontSize: '0.82rem', padding: '0.45rem 1rem' }}
                >
                  <Download size={14} />
                  <span>.ICS డౌన్‌లోడ్</span>
                </button>
              </div>
            </div>

            {/* Ceremony Timeline List */}
            <div
              style={{
                marginTop: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {INVITATION_CONFIG.schedule.map((event, idx) => (
                <div
                  key={event.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    paddingBottom: idx !== INVITATION_CONFIG.schedule.length - 1 ? '0.95rem' : '0',
                    borderBottom: idx !== INVITATION_CONFIG.schedule.length - 1 ? '1px dashed rgba(197, 158, 71, 0.22)' : 'none',
                  }}
                >
                  {/* Time Indicator Badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 'clamp(92px, 26vw, 120px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.35rem 0.6rem',
                      backgroundColor: 'rgba(120, 17, 35, 0.06)',
                      border: '1px solid rgba(197, 158, 71, 0.35)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-maroon)',
                      fontFamily: 'var(--font-telugu-serif)',
                      fontWeight: 700,
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                    }}
                  >
                    <Clock size={13} color="var(--color-gold-dark)" />
                    <span>{event.timeDisplay}</span>
                  </div>

                  {/* Ceremony Text */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-telugu-serif)',
                        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                        fontWeight: 800,
                        color: 'var(--color-maroon)',
                        lineHeight: 1.3,
                        marginBottom: '0.15rem',
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-telugu-sans)',
                        fontSize: 'clamp(0.82rem, 1.9vw, 0.92rem)',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.45,
                      }}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
