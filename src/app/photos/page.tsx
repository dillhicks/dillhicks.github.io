import { Suspense } from 'react';
import fs from 'fs';
import path from 'path';
import PhotosClient from './PhotosClient';
import Loading from './loading';

/**
 * Interface for a Photo object.
 * @property {string} src - The source URL of the photo.
 * @property {string} alt - The alt text for the photo.
 */
interface Photo {
  src: string;
  alt: string;
}

/**
 * Retrieves a list of photo objects from the public/photos directory.
 * It reads all .webp files, excluding those with '-preview' in their name.
 * @returns {Promise<Photo[]>} A promise that resolves to an array of Photo objects.
 */
async function getPhotos(): Promise<Photo[]> {
  const photosDirectory = path.join(process.cwd(), 'public/photos');
  const files = fs.readdirSync(photosDirectory);
  
  return files
    .filter(file => file.endsWith('.webp') && !file.includes('-preview'))
    .map(file => ({
      src: `/photos/${file}`,
      alt: file.split('.')[0].replace(/-/g, ' ').replace(/_/g, ' ')
    }));
}

/**
 * Renders the Photos page.
 * This component fetches photo data and displays them using the PhotosClient component,
 * with a Suspense fallback for loading states.
 * @returns {Promise<JSX.Element>} The Photos page component.
 */
export default async function PhotosPage() {
  const photos = await getPhotos();
  
  return (
    <Suspense fallback={<Loading />}>
      <PhotosClient photos={photos} />
    </Suspense>
  );
} 