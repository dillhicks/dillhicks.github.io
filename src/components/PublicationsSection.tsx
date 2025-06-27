'use client'

import PublicationCard from './PublicationCard'

/**
 * Interface for a Publication object.
 * @property {string} title - The title of the publication.
 * @property {string} authors - The authors of the publication.
 * @property {string} venue - The venue where the publication was presented or published.
 * @property {string} year - The year of publication.
 * @property {'conference' | 'thesis'} type - The type of publication (conference or thesis).
 * @property {string} role - The role of the author in the publication.
 * @property {string} imageUrl - The URL of the image associated with the publication.
 * @property {string} [paperUrl] - Optional URL to the full paper.
 */
interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  type: 'conference' | 'thesis'
  role: string
  imageUrl: string
  paperUrl?: string
}

/**
 * Props for the PublicationsSection component.
 * @property {Publication[]} publications - An array of Publication objects to display.
 */
interface PublicationsSectionProps {
  publications: Publication[]
}

/**
 * Renders a section displaying a horizontally scrollable list of publication cards.
 * It includes navigation buttons for scrolling.
 * @param {PublicationsSectionProps} props - The component props.
 * @returns {JSX.Element} The PublicationsSection component.
 */
export default function PublicationsSection({ publications }: PublicationsSectionProps) {
  return (
    <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 section-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-8">Publications & Papers</h2>
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
            {publications.map((publication, index) => (
              <div key={index} className="flex-none w-[350px]">
                <PublicationCard {...publication} />
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <button
              onClick={() => {
                const container = document.querySelector('#publications .scrollbar-hide');
                if (container) {
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <button
              onClick={() => {
                const container = document.querySelector('#publications .scrollbar-hide');
                if (container) {
                  container.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 