import React, { useState, useEffect } from 'react';
import { INVITATION_CONFIG } from './data/invitationConfig';
import { InvitationCover } from './components/InvitationCover';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ScheduleSection } from './components/ScheduleSection';
import { VenueSection } from './components/VenueSection';
import { PhotoGallery } from './components/PhotoGallery';
import { FamilyMembersSection } from './components/FamilyMembersSection';
import { FamilyInvitationSection } from './components/FamilyInvitationSection';
import { TraditionalFooter } from './components/TraditionalFooter';
import { MusicPlayer } from './components/MusicPlayer';
import { PetalCanvas } from './components/PetalCanvas';
import { AdminPanel } from './components/AdminPanel';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  // Stage One: Cover is initially closed
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  // Admin Panel modal state
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Check URL query e.g. http://localhost:5173/?admin
  useEffect(() => {
    if (window.location.search.includes('admin') || window.location.hash.includes('admin')) {
      setIsAdminOpen(true);
    }
  }, []);

  // Global Keyboard Shortcut: Ctrl+Shift+A or Cmd+Shift+A to toggle Admin Panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenCover = () => {
    setIsCoverOpen(true);
    // Smooth scroll to hero
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleReopenCover = () => {
    setIsCoverOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Web Share API handler
  const handleShare = async () => {
    const shareData = {
      title: `${INVITATION_CONFIG.eventTitle} - ${INVITATION_CONFIG.couple.wifeName} & ${INVITATION_CONFIG.couple.husbandName}`,
      text: `${INVITATION_CONFIG.couple.wifeHonorific} ${INVITATION_CONFIG.couple.wifeName} & ${INVITATION_CONFIG.couple.husbandHonorific} ${INVITATION_CONFIG.couple.husbandName} - 50 వసంతాల దాంపత్య స్వర్ణోత్సవ ఆహ్వాన పత్రిక. తేదీ: ${INVITATION_CONFIG.dateDetails.fullDateDisplay}, వేదిక: ${INVITATION_CONFIG.venue.name}, ${INVITATION_CONFIG.venue.town}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('ఆహ్వాన పత్రిక లింక్ కాపీ చేయబడింది! మీరు వాట్సాప్ లేదా మెసేజ్‌లో షేర్ చేయవచ్చు.');
      } catch {
        // Fallback
      }
    }
  };

  // Apple/Outlook .ICS Calendar generator
  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Pullagura Family//Golden Jubilee Celebration//TE',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:golden-jubilee-pullagura-20261030@pullagura.family',
      'DTSTAMP:20261011T000000Z',
      'DTSTART:20261030T030000Z', // 08:30 AM IST (UTC+5:30)
      'DTEND:20261030T100000Z',   // 03:30 PM IST
      'SUMMARY:గోల్డెన్ జూబ్లీ - శ్రీమతి పుల్లగూర సుబ్బలక్షుమ్మ & శ్రీ పుల్లగూర పెద్ద గోవిందు స్వామి',
      'DESCRIPTION:50 వసంతాల దాంపత్య స్వర్ణోత్సవ వేడుక\\n\\nకార్యక్రమ వివరాలు:\\n08:30 AM - పాద పూజ\\n09:00 AM - శ్రీ సత్యనారాయణ స్వామి పూజ ప్రారంభం\\n12:00 PM - గోల్డెన్ జూబ్లీ వేడుక\\n01:00 PM - విందు భోజనం\\n\\nఆహ్వానించువారు: శ్రీ పుల్లగూర ఫ్యామిలీ',
      'LOCATION:శ్రీ వాసవి కళ్యాణ మండపం (A/C)\\, యర్రగుంట్ల\\, ఆంధ్రప్రదేశ్',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Golden_Jubilee_Pullagura_30Oct2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#C5A04B', '#780F20', '#FFF8E8'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--color-ivory)',
        color: 'var(--color-brown-dark)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Drifting Jasmine Petals & Golden Sparkles */}
      <PetalCanvas />

      {/* Floating Auspicious Music Player */}
      <MusicPlayer />

      {/* STAGE ONE: Full-Screen Cover (Displayed until visitor taps to open) */}
      {!isCoverOpen && (
        <>
          <button
            onClick={() => setIsAdminOpen(true)}
            style={{
              position: 'fixed',
              top: '12px',
              right: '12px',
              zIndex: 10001,
              background: 'rgba(255, 250, 240, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(185, 154, 85, 0.35)',
              color: 'var(--color-maroon)',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem 0.75rem',
              fontSize: '0.76rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            title="Open Admin Dashboard"
          >
            🔒 Admin
          </button>
          <InvitationCover isOpen={isCoverOpen} onOpen={handleOpenCover} />
        </>
      )}

      {/* STAGE TWO & MAIN CELEBRATION WEBSITE (Unlocked and fully scrollable) */}
      {isCoverOpen && (
        <div style={{ position: 'relative', width: '100%', zIndex: 10 }}>
          {/* Header Navigation */}
          <HeaderNav
            onReopenCover={handleReopenCover}
            onScrollTo={handleScrollToSection}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />

          {/* Main Hero: Golden Jubilee Celebration */}
          <main>
            <HeroSection
              onScrollToSchedule={() => handleScrollToSection('schedule-section')}
              onScrollToVenue={() => handleScrollToSection('venue-section')}
              onShare={handleShare}
              onAddToCalendar={handleDownloadICS}
            />

            {/* Event Date and Schedule */}
            <ScheduleSection onAddToCalendar={handleDownloadICS} />

            {/* Venue and Directions */}
            <VenueSection />

            {/* Couple and Family Photographs Gallery */}
            <PhotoGallery />

            {/* New Section: Family Invitation (మా కుటుంబం తరఫున ఆహ్వానం) */}
            <FamilyMembersSection />

            {/* Family Invitation & Blessings */}
            <FamilyInvitationSection />
          </main>

          {/* Traditional Footer */}
          <TraditionalFooter
            onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onShare={handleShare}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />
        </div>
      )}

      {/* Passcode-Protected Admin Panel */}
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
};

export default App;
