import { Suspense } from 'react';
import fs from 'fs';
import path from 'path';
import PhotosClient from './PhotosClient';
import Loading from './loading';

interface Photo {
  src: string;
  alt: string;
}

// Function to get all photos from the public/photos directory
async function getPhotos(): Promise<Photo[]> {
  const photosDirectory = path.join(process.cwd(), 'public/photos');
  const files = fs.readdirSync(photosDirectory);
  
  return files
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({
      src: `/photos/${file}`,
      alt: file.split('.')[0].replace(/-/g, ' ').replace(/_/g, ' ')
    }));
}

export default async function PhotosPage() {
  const photos = await getPhotos();
  
  return (
    <Suspense fallback={<Loading />}>
      <PhotosClient photos={photos} />
    </Suspense>
  );
} 