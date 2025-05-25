import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import GalleryCard from './GalleryCard';
import ImageModal from './ImageModal';
import PropTypes from 'prop-types';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const galleryCategories = [
    {
      id: 1,
      title: "Graduation Ceremonies",
      images: [
        { id: 1, src: "/images/graduation1.jpg", alt: "2025 Graduation Ceremony" },
        { id: 2, src: "/images/graduation2.jpg", alt: "Valedictorian Speech" },
        { id: 3, src: "/images/graduation3.jpg", alt: "Award Presentation" }
      ]
    },
    {
      id: 2,
      title: "Sports Competitions",
      images: [
        { id: 4, src: "/images/sports1.jpg", alt: "Annual Sports Day" },
        { id: 5, src: "/images/sports2.jpg", alt: "Football Tournament" },
        { id: 6, src: "/images/sports3.jpg", alt: "Athletics Competition" }
      ]
    },
    {
      id: 3,
      title: "Science Fairs",
      images: [
        { id: 7, src: "/images/science1.jpg", alt: "Science Fair 2025" },
        { id: 8, src: "/images/science2.jpg", alt: "Student Projects" },
        { id: 9, src: "/images/science3.jpg", alt: "Judges Evaluation" }
      ]
    },
    {
      id: 4,
      title: "Cultural Week Celebrations",
      images: [
        { id: 10, src: "/images/cultural1.jpg", alt: "Traditional Dance" },
        { id: 11, src: "/images/cultural2.jpg", alt: "Drama Performance" },
        { id: 12, src: "/images/cultural3.jpg", alt: "Art Exhibition" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            GS Trinie Moments
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Browse through our gallery to relive memorable events and achievements
          </p>
        </header>

        {/* Gallery Navigation */}
        <nav className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="tablist">
            {galleryCategories.map((category) => (
              <a
                key={category.id}
                href={`#category-${category.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                aria-label={`View ${category.title} photos`}
              >
                {category.title}
              </a>
            ))}
          </div>
        </nav>

        {/* Gallery Content */}
        <main className="space-y-16">
          {galleryCategories.map((category) => (
            <section 
              key={category.id} 
              id={`category-${category.id}`} 
              className="space-y-6"
              aria-labelledby={`category-heading-${category.id}`}
            >
              <h2 
                id={`category-heading-${category.id}`}
                className="text-2xl font-bold text-gray-900 border-b pb-2"
              >
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image) => (
                  <GalleryCard 
                    key={image.id} 
                    image={{...image, category: category.title}}
                    onClick={handleImageClick}
                  />
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h3 className="text-lg font-medium text-gray-900">
            Have photos to share?
          </h3>
          <p className="mt-2 text-gray-600">
            Contact the school administration to contribute to our gallery
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              aria-label="Contact us to share photos"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={handleModalClose} 
        />
      )}
    </div>
  );
};

Gallery.propTypes = {
  // Add any props if this component receives any
};

export default Gallery;