import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LotusDivider } from './TraditionalMotifs';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

interface ScheduleSectionProps {
  onAddToCalendar?: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = () => {
  const { config, language } = useLanguage();

  // Live Countdown to target date
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(config.dateDetails.isoDate).getTime();

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
  }, [config.dateDetails.isoDate]);

  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent(config.calendar.title);
    const details = encodeURIComponent(config.calendar.details);
    const location = encodeURIComponent(`${config.venue.name}, ${config.venue.town}, ${config.venue.districtState}`);
    const dates = '20261030T033000Z/20261030T100000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const getSectionSub = () => {
    if (language === 'kn') return 'ಶುಭ ಮುಹೂರ್ತ & ಸಮಯ';
    if (language === 'en') return 'Auspicious Timings & Schedule';
    return 'శుభ ముహూర్తం & సమయాలు';
  };

  const getSectionHeading = () => {
    if (language === 'kn') return 'ದಿನಾಂಕ & ಕಾರ್ಯಕ್ರಮದ ವಿವರ';
    if (language === 'en') return 'Date & Program Details';
    return 'తేదీ & కార్యక్రమ వివరాలు';
  };

  const countdownUnits = [
    { label: config.dateDetails.countdownLabels.days, val: timeLeft.days },
    { label: config.dateDetails.countdownLabels.hours, val: timeLeft.hours },
    { label: config.dateDetails.countdownLabels.minutes, val: timeLeft.minutes },
    { label: config.dateDetails.countdownLabels.seconds, val: timeLeft.seconds },
  ];

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
            {getSectionSub()}
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
            {getSectionHeading()}
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
                {config.dateDetails.dateDisplay}
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
                {config.dateDetails.dayDisplay}
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
                {countdownUnits.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(252, 246, 232, 0.9)',
                      border: '1px solid rgba(197, 158, 71, 0.35)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.4rem clamp(0.45rem, 1.8vw, 0.75rem)',
                      minWidth: 'clamp(54px, 14vw, 70px)',
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
              {config.schedule.map((event, idx) => (
                <div
                  key={event.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    paddingBottom: idx !== config.schedule.length - 1 ? '0.95rem' : '0',
                    borderBottom: idx !== config.schedule.length - 1 ? '1px dashed rgba(197, 158, 71, 0.22)' : 'none',
                  }}
                >
                  {/* Time Indicator Badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 'clamp(112px, 28vw, 134px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.38rem 0.6rem',
                      backgroundColor: 'rgba(120, 17, 35, 0.06)',
                      border: '1px solid rgba(197, 158, 71, 0.35)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--color-maroon)',
                      fontFamily: 'var(--font-telugu-serif)',
                      fontWeight: 700,
                      fontSize: 'clamp(0.82rem, 2vw, 0.92rem)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Clock size={13} color="var(--color-gold-dark)" style={{ flexShrink: 0 }} />
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
