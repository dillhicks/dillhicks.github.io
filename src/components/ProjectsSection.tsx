'use client'

import ProjectCard from './ProjectCard'

/**
 * Interface for a Project object.
 * @property {string} title - The title of the project.
 * @property {string} description - A detailed description of the project.
 * @property {string} shortDescription - A brief, one-line description of the project.
 * @property {string[]} technologies - An array of technologies used in the project.
 * @property {string} cardImage - The URL of the image to display on the project card.
 * @property {MediaItem[]} media - An array of media items (images/videos) for the project details.
 * @property {string} [githubUrl] - Optional URL to the project's GitHub repository or similar platform.
 * @property {string} [demoUrl] - Optional URL to a live demo or external project page.
 */
export interface Project {
  title: string
  description: string
  shortDescription: string
  technologies: string[]
  cardImage: string
  media: MediaItem[]
  githubUrl?: string
  demoUrl?: string
}

/**
 * Interface for a MediaItem within a project.
 * @property {'image' | 'video'} type - The type of media (image or video).
 * @property {string} url - The URL of the media.
 */
export interface MediaItem {
  type: 'image' | 'video'
  url: string
}

/**
 * Props for the ProjectsSection component.
 * @property {Project[]} projects - An array of Project objects to display.
 */
interface ProjectsSectionProps {
  projects: Project[]
}

/**
 * Renders a section displaying a grid of project cards.
 * @param {ProjectsSectionProps} props - The component props.
 * @returns {JSX.Element} The ProjectsSection component.
 */
export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 section-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-100 mb-8">What I'm Building</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
} 