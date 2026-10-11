import React from 'react';

// Minimalist Fine Gold Lotus Divider
export const LotusDivider: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', 
  color = 'rgba(197, 158, 71, 0.45)' 
}) => {
  return (
    <div 
      className={`flex items-center justify-center gap-2 ${className}`}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.65rem 0', gap: '0.65rem' }}
    >
      <div 
        style={{ 
          height: '1px', 
          width: 'clamp(30px, 10vw, 65px)', 
          background: `linear-gradient(90deg, transparent, ${color})` 
        }} 
      />
      {/* Clean, minimalist gold lotus accent */}
      <svg width="22" height="16" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C10 7 10 12 12 15C14 12 14 7 12 2Z" fill="var(--color-gold)" opacity="0.95" />
        <path d="M10 6C6 8 5 13 9 16C10 13 11 10 10 6Z" fill="var(--color-gold)" opacity="0.75" />
        <path d="M14 6C18 8 19 13 15 16C14 13 13 10 14 6Z" fill="var(--color-gold)" opacity="0.75" />
      </svg>
      <div 
        style={{ 
          height: '1px', 
          width: 'clamp(30px, 10vw, 65px)', 
          background: `linear-gradient(90deg, ${color}, transparent)` 
        }} 
      />
    </div>
  );
};

// Sacred Om Badge with Gold Halo
export const SacredOmBadge: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 249, 238, 0.95)',
        border: '1.5px solid var(--color-gold)',
        boxShadow: '0 2px 10px rgba(120, 17, 35, 0.12)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-telugu-serif)',
          fontSize: `${size * 0.55}px`,
          fontWeight: 700,
          color: 'var(--color-maroon)',
          lineHeight: 1,
          marginTop: '-2px',
        }}
        aria-label="Om"
      >
        ॐ
      </span>
    </div>
  );
};
