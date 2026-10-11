import React from 'react';

interface ToranHeaderProps {
  className?: string;
}

export const ToranHeader: React.FC<ToranHeaderProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full flex flex-col items-center justify-center pointer-events-none select-none ${className}`}
      style={{
        paddingTop: '0.75rem',
        paddingBottom: '0.5rem',
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          width: '100%',
          maxWidth: '520px',
        }}
      >
        {/* Left Fine Gold Flourish */}
        <div 
          style={{ 
            flex: 1, 
            height: '1px', 
            background: 'linear-gradient(90deg, transparent, rgba(185, 154, 85, 0.5))' 
          }} 
        />

        {/* Center Auspicious Sacred Om & Miniature Leaf Pair */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.2rem 0.8rem',
          }}
        >
          {/* Subtle stylized mango leaf vector */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" opacity="0.75">
            <path d="M12 2C8 6 6 12 12 22C18 12 16 6 12 2Z" fill="#2E5A18" />
          </svg>

          <span
            style={{
              fontFamily: 'var(--font-telugu-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--color-maroon)',
              lineHeight: 1,
            }}
            aria-label="Om"
          >
            ॐ
          </span>

          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" opacity="0.75">
            <path d="M12 2C8 6 6 12 12 22C18 12 16 6 12 2Z" fill="#2E5A18" />
          </svg>
        </div>

        {/* Right Fine Gold Flourish */}
        <div 
          style={{ 
            flex: 1, 
            height: '1px', 
            background: 'linear-gradient(90deg, rgba(185, 154, 85, 0.5), transparent)' 
          }} 
        />
      </div>
    </div>
  );
};
