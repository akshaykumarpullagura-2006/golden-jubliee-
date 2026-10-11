import React, { useState, useEffect } from 'react';
import { 
  subscribeToBlessings, 
  deleteBlessing, 
  isFirebaseConfigured, 
  firebaseConfig,
  type BlessingItem 
} from '../services/firebase';
import { 
  ShieldCheck, 
  Lock, 
  X, 
  Trash2, 
  Download, 
  Database, 
  Search, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [blessings, setBlessings] = useState<BlessingItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Default Passcode: 1976 (the wedding year) or 2026 (golden jubilee year)
  const CORRECT_PINS = ['1976', '2026', '50years'];

  useEffect(() => {
    if (isAuthenticated) {
      const unsubscribe = subscribeToBlessings((items) => {
        setBlessings(items);
      });
      return () => unsubscribe();
    }
  }, [isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (CORRECT_PINS.includes(pinInput.trim())) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (window.confirm(`"${name}" వారి ఆశీర్వాద సందేశాన్ని ఖచ్చితంగా తొలగించాలనుకుంటున్నారా?`)) {
      await deleteBlessing(id);
      setStatusMessage('సందేశం విజయవంతంగా తొలగించబడింది.');
      setTimeout(() => setStatusMessage(null), 3000);
    }
  };

  // Export blessings to CSV for family keepsake
  const handleExportCSV = () => {
    const headers = ['ID', 'పేరు (Name)', 'ఊరు/సంబంధం (City/Relation)', 'సందేశం (Blessing Message)'];
    const rows = blessings.map((b) => [
      `"${b.id}"`,
      `"${b.name.replace(/"/g, '""')}"`,
      `"${b.relationOrCity.replace(/"/g, '""')}"`,
      `"${b.message.replace(/"/g, '""')}"`,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Pullagura_50th_Anniversary_Blessings_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredBlessings = blessings.filter((b) => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.relationOrCity.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isConnected = isFirebaseConfigured();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(30, 18, 22, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: isAuthenticated ? '760px' : '400px',
          maxHeight: '90vh',
          backgroundColor: 'rgba(255, 252, 245, 0.96)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(185, 154, 85, 0.4)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(185, 154, 85, 0.25)',
            backgroundColor: 'var(--color-maroon)',
            color: '#FFFBF2',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ShieldCheck size={22} color="var(--color-gold-champagne)" />
            <h2
              style={{
                fontFamily: 'var(--font-telugu-serif)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#FFFBF2',
              }}
            >
              అడ్మిన్ డాష్‌బోర్డ్ (Admin Panel)
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-gold-champagne)',
              cursor: 'pointer',
              padding: '0.25rem',
            }}
            aria-label="Close Admin Panel"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
          
          {/* LOGIN SCREEN */}
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(120, 27, 42, 0.08)',
                  border: '1px solid var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}
              >
                <Lock size={26} color="var(--color-maroon)" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-telugu-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--color-maroon)',
                  marginBottom: '0.35rem',
                }}
              >
                అడ్మిన్ యాక్సెస్ పిన్ (Enter Passcode)
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-telugu-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '1.5rem',
                }}
              >
                ఆశీర్వాద సందేశాలు &amp; డేటాబేస్ నిర్వహణ కోసం పిన్ నమోదు చేయండి (Default: 1976 లేదా 2026)
              </p>

              <input
                type="password"
                placeholder="పాస్‌కోడ్ (e.g. 1976)"
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                autoFocus
                style={{
                  width: '100%',
                  maxWidth: '260px',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: pinError ? '1.5px solid red' : '1px solid rgba(185, 154, 85, 0.5)',
                  textAlign: 'center',
                  fontSize: '1.1rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.2em',
                  outline: 'none',
                  marginBottom: '1rem',
                }}
              />

              {pinError && (
                <p style={{ color: 'red', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                  తప్పు పిన్! దయచేసి సరైన పాస్‌కోడ్ నమోదు చేయండి (1976).
                </p>
              )}

              <div>
                <button
                  type="submit"
                  className="btn-primary-maroon"
                  style={{ padding: '0.75rem 2rem', fontSize: '0.95rem' }}
                >
                  ప్రవేశించండి (Unlock)
                </button>
              </div>
            </form>
          ) : (
            /* AUTHENTICATED DASHBOARD */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Firebase Connection Status Banner */}
              <div
                style={{
                  padding: '0.9rem 1.15rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isConnected ? 'rgba(34, 197, 94, 0.08)' : 'rgba(234, 179, 8, 0.1)',
                  border: isConnected ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(234, 179, 8, 0.35)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                {isConnected ? (
                  <CheckCircle2 size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                ) : (
                  <Database size={20} color="#ca8a04" style={{ flexShrink: 0, marginTop: '2px' }} />
                )}

                <div style={{ flex: 1, fontSize: '0.85rem' }}>
                  <div style={{ fontWeight: 700, color: isConnected ? '#15803d' : '#a16207' }}>
                    {isConnected 
                      ? `Firebase Firestore కనెక్ట్ అయింది (Project: ${firebaseConfig.projectId})`
                      : 'Firebase డేటాబేస్ కనెక్ట్ చేయడానికి సిద్ధంగా ఉంది'}
                  </div>
                  <p style={{ color: 'var(--color-text-muted)', marginTop: '0.2rem', lineHeight: 1.45 }}>
                    {isConnected ? (
                      'అతిథులు సమర్పించే ఆశీర్వాదాలు నేరుగా మీ క్లౌడ్ Firestore డేటాబేస్‌కు రియల్-టైమ్‌లో సింక్ అవుతున్నాయి.'
                    ) : (
                      <>
                        ప్రస్తుతం లోకల్ మోడ్‌లో నడుస్తోంది. మీ Firebase కీలను <code>src/services/firebase.ts</code> లేదా <code>.env</code> లో పేస్ట్ చేయగానే ఇది ఆటోమేటిక్‌గా లైవ్ క్లౌడ్ డేటాబేస్‌కి కనెక్ట్ అవుతుంది!
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Action Bar (Search & Export) */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
                  <Search
                    size={15}
                    color="var(--color-text-muted)"
                    style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    type="text"
                    placeholder="సందేశాలను వెతకండి (Search wishes)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.55rem 0.75rem 0.55rem 2rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(185, 154, 85, 0.35)',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={handleExportCSV}
                    className="btn-glass"
                    style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                    title="Export wishes to CSV file"
                  >
                    <Download size={14} />
                    <span>CSV ఎక్స్‌పోర్ట్ ({blessings.length})</span>
                  </button>
                </div>
              </div>

              {statusMessage && (
                <div
                  style={{
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#15803d',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  {statusMessage}
                </div>
              )}

              {/* Blessings List */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  maxHeight: '380px',
                  overflowY: 'auto',
                }}
              >
                {filteredBlessings.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)' }}>
                    <AlertCircle size={28} style={{ margin: '0 auto 0.5rem', opacity: 0.5 }} />
                    <p>సందేశాలు ఏవీ కనుగొనబడలేదు.</p>
                  </div>
                ) : (
                  filteredBlessings.map((b) => (
                    <div
                      key={b.id}
                      style={{
                        padding: '0.85rem 1rem',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(185, 154, 85, 0.25)',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: '1rem',
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-telugu-serif)',
                              fontWeight: 700,
                              fontSize: '0.92rem',
                              color: 'var(--color-maroon)',
                            }}
                          >
                            {b.name}
                          </span>
                          <span
                            style={{
                              fontSize: '0.72rem',
                              color: 'var(--color-text-muted)',
                              backgroundColor: 'rgba(233, 221, 191, 0.4)',
                              padding: '0.1rem 0.45rem',
                              borderRadius: '4px',
                            }}
                          >
                            {b.relationOrCity}
                          </span>
                          {b.timestampDisplay && (
                            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-light)' }}>
                              • {b.timestampDisplay}
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: '0.86rem', color: 'var(--color-text-main)', lineHeight: 1.45 }}>
                          &ldquo;{b.message}&rdquo;
                        </p>
                      </div>

                      {/* Delete Action */}
                      <button
                        onClick={() => handleDelete(b.id, b.name)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#dc2626',
                          cursor: 'pointer',
                          padding: '0.35rem',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          opacity: 0.75,
                        }}
                        title="ఈ సందేశాన్ని తొలగించండి"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
