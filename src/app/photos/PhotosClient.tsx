'use client';

import React, { useState, useRef, TouchEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  src: string;
  alt: string;
}

/**
 * PhotosClient component for displaying a photo gallery with a modal viewer.
 * It handles image selection, navigation, and touch-based swiping.
 * @param {Object} props - The component props.
 * @param {Photo[]} props.photos - An array of photo objects to display.
 * @returns {JSX.Element} The PhotosClient component.
 */
export default function PhotosClient({ photos }: { photos: Photo[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedPhoto) return;
    
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'Escape') {
      setSelectedPhoto(null);
    }
  };

  const handleNext = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % photos.length;
      setSelectedPhoto(photos[nextIndex].src);
      return nextIndex;
    });
  };

  const handlePrevious = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) => {
      const prevIndex2 = (prevIndex - 1 + photos.length) % photos.length;
      setSelectedPhoto(photos[prevIndex2].src);
      return prevIndex2;
    });
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // minimum distance for swipe

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe left, go to next
        handleNext();
      } else {
        // Swipe right, go to previous
        handlePrevious();
      }
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getPreviewImages = () => {
    const prev2Index = (currentIndex - 2 + photos.length) % photos.length;
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    const nextIndex = (currentIndex + 1) % photos.length;
    const next2Index = (currentIndex + 2) % photos.length;
    
    return [
      { index: prev2Index, photo: photos[prev2Index] },
      { index: prevIndex, photo: photos[prevIndex] },
      { index: currentIndex, photo: photos[currentIndex] },
      { index: nextIndex, photo: photos[nextIndex] },
      { index: next2Index, photo: photos[next2Index] }
    ];
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  const openPhoto = (photo: Photo, index: number) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setSelectedPhoto(photo.src);
  };
  
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="w-full px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-100">Photo Gallery</h1>
          <Link 
            href="/"
            className="text-gray-300 hover:text-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            ← Back to Home
          </Link>
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden"
              onClick={() => openPhoto(photo, index)}
            >
              <Image
                src={photo.src.replace('.webp', '-preview.webp')}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl w-full">
              <div 
                className="relative aspect-[4/3] w-full mb-4"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <button
                  className="absolute top-0 right-0 text-white text-2xl hover:text-gray-300 z-50 p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPhoto(null);
                  }}
                >
                  Close
                </button>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <Image
                  src={selectedPhoto}
                  alt="Selected photo"
                  fill
                  className="object-contain"
                  onLoadingComplete={() => setIsLoading(false)}
                  priority
                />
                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Preview Carousel */}
              <div className="flex justify-center gap-4 mt-4">
                {getPreviewImages().map(({ index, photo }) => (
                  <div
                    key={index}
                    className={`relative w-24 h-24 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex ? 'ring-2 ring-white scale-110' : 'opacity-50 hover:opacity-75'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openPhoto(photo, index);
                    }}
                  >
                    <Image
                      src={photo.src.replace('.webp', '-preview.webp')}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 