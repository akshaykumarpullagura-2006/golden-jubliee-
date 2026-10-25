import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { type GalleryItem } from '../data/invitationConfig';
import { LotusDivider } from './TraditionalMotifs';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const { config } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'couple' | 'family' | 'traditional'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredPhotos = config.gallery.filter((photo) => {
    if (activeFilter === 'all') return true;
    return photo.category === activeFilter;
  });

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  const filterTabs = [
    { id: 'all', label: config.gallerySection.filterAll },
    { id: 'couple', label: config.gallerySection.filterCouple },
    { id: 'family', label: config.gallerySection.filterFamily },
    { id: 'traditional', label: config.gallerySection.filterTraditional },
  ];

  return (
    <section
      id="gallery-section"
      className="relative w-full"
      style={{
        paddingTop: 'clamp(1.75rem, 4vw, 2.75rem)',
        paddingBottom: 'clamp(1.75rem, 4vw, 2.75rem)',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="divine-container">
        
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
            {config.gallerySection.sectionBadge}
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
            {config.gallerySection.heading}
          </h2>
          <LotusDivider />
        </div>

        {/* Clean Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '1.5rem',
          }}
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              style={{
                padding: '0.35rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                border: activeFilter === tab.id ? '1.2px solid var(--color-maroon)' : '1px solid rgba(197, 158, 71, 0.35)',
                backgroundColor: activeFilter === tab.id ? 'var(--color-maroon)' : 'rgba(252, 246, 232, 0.85)',
                color: activeFilter === tab.id ? '#FFFBF2' : 'var(--color-text-main)',
                fontFamily: 'var(--font-telugu-sans)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Divine Photo Masonry Grid - Fits each photo according to its natural aspect ratio */}
        <div className="divine-gallery-masonry">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedImage(photo);
              }}
              className="gallery-masonry-card"
            >
              {/* Photo Image Container - Fits natural dimensions without forced crop or dark bars */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  backgroundColor: '#FFFDF7',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('original_reference_invitation')) {
                      target.src = '/images/original_reference_invitation.jpg';
                    }
                  }}
                />

                {/* Subtle Hover Enlarge Icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(52, 34, 23, 0.75)',
                    color: '#FFFFFF',
                    borderRadius: 'var(--radius-full)',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 5,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <Maximize2 size={13} />
                </div>
              </div>

              {/* Caption */}
              <div style={{ padding: '0.75rem 0.95rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-telugu-serif)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--color-maroon)',
                    marginBottom: '0.15rem',
                  }}
                >
                  {photo.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-telugu-sans)',
                    fontSize: '0.78rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.4,
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MINIMAL LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(30, 22, 18, 0.94)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
            aria-label="Close image modal"
          >
            <X size={20} />
          </button>

          {/* Navigation Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '88vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              style={{
                maxWidth: '92vw',
                maxHeight: '75vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75)',
                border: '2px solid var(--color-gold)',
              }}
            />
            
            <div style={{ marginTop: '0.85rem', textAlign: 'center', color: '#FFF8E8', maxWidth: '640px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-telugu-serif)',
                  fontSize: '1.15rem',
                  color: 'var(--color-gold-champagne)',
                  marginBottom: '0.2rem',
                }}
              >
                {selectedImage.title}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-telugu-sans)',
                  fontSize: '0.88rem',
                  color: '#D4C9BC',
                }}
              >
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
