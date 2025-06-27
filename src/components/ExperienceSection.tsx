'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * Interface for an Experience object.
 * @property {string} company - The name of the company.
 * @property {string} position - The position held at the company.
 * @property {string} period - The duration of the experience (e.g., "2023 - 2025").
 * @property {string} summary - A brief summary of the experience.
 * @property {string[]} technologies - An array of technologies used in this experience.
 * @property {string} logoUrl - The URL of the company's logo.
 */
interface Experience {
  company: string
  position: string
  period: string
  summary: string
  technologies: string[]
  logoUrl: string
}

/**
 * Props for the ExperienceSection component.
 * @property {Experience[]} experiences - An array of Experience objects to display.
 */
interface ExperienceSectionProps {
  experiences: Experience[]
}

/**
 * Renders a section displaying a list of professional experiences.
 * It includes a horizontally scrollable list of experience cards with navigation buttons.
 * @param {ExperienceSectionProps} props - The component props.
 * @returns {JSX.Element} The ExperienceSection component.
 */
export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  useEffect(() => {
    const container = document.querySelector('#experience .scrollbar-hide')
    if (!container) return

    const updateButtonVisibility = () => {
      setShowLeftButton(container.scrollLeft > 0)
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }

    container.addEventListener('scroll', updateButtonVisibility)
    updateButtonVisibility() // Initial check

    return () => {
      container.removeEventListener('scroll', updateButtonVisibility)
    }
  }, [])

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-12">Experience</h2>
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
            {experiences.map((experience, index) => (
              <div key={index} className="flex-none w-[380px] flex flex-col">
                <div className="card flex-1">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image
                        src={experience.logoUrl}
                        alt={`${experience.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-1">{experience.company}</h3>
                      <p className="text-lg text-gray-400 mb-1">{experience.position}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-300 mb-3 text-sm">{experience.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="tech-tag text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Timeline dot and date */}
                <div className="flex flex-col items-center mt-4 relative">
                  <div className="w-3 h-3 rounded-full bg-gray-500 mb-2 z-10" />
                  <span className="text-sm text-gray-500 whitespace-nowrap">{experience.period}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Horizontal timeline line */}
          <div className="absolute left-0 right-0 top-[calc(100%-3rem)] h-0.5 bg-gray-800" />
          
          {/* Navigation buttons */}
          {showLeftButton && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
              <button
                onClick={() => {
                  const container = document.querySelector('#experience .scrollbar-hide');
                  if (container) {
                    container.scrollBy({ left: -450, behavior: 'smooth' });
                  }
                }}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          )}
          {showRightButton && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
              <button
                onClick={() => {
                  const container = document.querySelector('#experience .scrollbar-hide');
                  if (container) {
                    container.scrollBy({ left: 450, behavior: 'smooth' });
                  }
                }}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 