'use client'

import ProjectCard from './ProjectCard'

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

export interface MediaItem {
  type: 'image' | 'video'
  url: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

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