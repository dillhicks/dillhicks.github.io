import { Metadata } from 'next'

/**
 * Metadata for the Next.js application.
 * This object defines the title, description, and various favicons/icons for the website.
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: 'Dillon Hicks',
  description: 'Personal website of Dillon Hicks - Machine Learning Engineer and Maker',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
} 