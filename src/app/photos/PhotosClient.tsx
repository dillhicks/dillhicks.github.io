'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  src: string;
  alt: string;
}

export default function PhotosClient({ photos }: { photos: Photo[] }) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
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
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <Image
                src={photo.src}
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
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
                onClick={() => setSelectedPhoto(null)}
              >
                Close
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedPhoto}
                  alt="Selected photo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 