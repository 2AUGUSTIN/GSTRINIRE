import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const GalleryCard = ({ image, onClick }) => {
  // Function to create Google Drive image URL from file ID
  const getGoogleImageUrl = (fileId, width = 800) => {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
  };

  // Fallback image in case of error
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
    e.target.alt = 'Fallback image';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onClick(image)}
      role="button"
      tabIndex={0}
      aria-label={`View ${image.alt} in full size`}
      onKeyDown={(e) => e.key === 'Enter' && onClick(image)}
    >
      {/* Image Container */}
      <div className="aspect-w-4 aspect-h-3 bg-gray-100">
        <img
          src={image.src.startsWith('http') ? image.src : getGoogleImageUrl(image.src)}
          alt={image.alt || 'Gallery image'}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={handleImageError}
          width={800}
          height={600}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-medium text-lg line-clamp-1">{image.alt || 'Untitled'}</h3>
          <p className="text-sm opacity-0 group-hover:opacity-80 transition-opacity duration-500">
            Click to view full size
          </p>
        </div>
      </div>

      {/* Category Badge (optional) */}
      {image.category && (
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
          {image.category}
        </span>
      )}
    </motion.div>
  );
};

GalleryCard.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    category: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default GalleryCard;