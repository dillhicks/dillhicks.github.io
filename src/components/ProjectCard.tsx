import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  demoUrl?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  const isDildesigns = title === 'DilDesigns3D'

  return (
    <div className="card">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden border border-gray-800">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="tech-tag"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          {isDildesigns ? 'Printables' : 'GitHub'}
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {isDildesigns ? 'Etsy' : 'Demo'}
          </a>
        )}
      </div>
    </div>
  )
} 