import React from 'react';
import PropTypes from 'prop-types';

const GalleryCard = ({ image, onClick }) => {
  // Add null check and fallback
  if (!image || !image.src) {
    return (
      <div className="gallery-card-error">
        <img 
          src="/fallback-image.jpg" 
          alt="Image not available"
          className="gallery-image"
        />
      </div>
    );
  }

  return (
    <div className="gallery-card" onClick={() => onClick(image)}>
      <img
        src={image.src}
        alt={image.alt || 'Gallery image'}
        className="gallery-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/fallback-image.jpg';
        }}
      />
    </div>
  );
};

GalleryCard.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  onClick: PropTypes.func
};

export default GalleryCard;