import Image from 'next/image'

interface ExperienceItemProps {
  company: string
  position: string
  period: string
  summary: string
  technologies: string[]
  logoUrl: string
}

export default function ExperienceItem({
  company,
  position,
  period,
  summary,
  technologies,
  logoUrl,
}: ExperienceItemProps) {
  return (
    <div className="relative pl-32 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="timeline-line" />
      
      {/* Timeline dot */}
      <div className="timeline-dot" />
      
      {/* Date on timeline */}
      <div className="absolute left-0 top-0 w-24 text-right pr-4">
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      
      <div className="card">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 relative flex-shrink-0">
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{company}</h3>
            <p className="text-lg text-gray-400 mb-2">{position}</p>
            <p className="text-gray-300 mb-4">{summary}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="tech-tag"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 