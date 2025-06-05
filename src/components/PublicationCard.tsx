import Image from 'next/image'

interface PublicationCardProps {
  title: string
  authors: string
  venue: string
  year: string
  type: 'conference' | 'thesis'
  role: string
  imageUrl: string
  paperUrl?: string
}

export default function PublicationCard({
  title,
  authors,
  venue,
  year,
  type,
  role,
  imageUrl,
  paperUrl,
}: PublicationCardProps) {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative h-40 mb-3 rounded-lg overflow-hidden border border-gray-800">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2 py-0.5 text-xs rounded-full bg-gray-900 text-gray-300 border border-gray-800">
          {type === 'conference' ? 'Conference' : 'Thesis'}
        </span>
        <span className="px-2 py-0.5 text-xs rounded-full bg-gray-900 text-gray-300 border border-gray-800">
          {role}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-1 line-clamp-1">{authors}</p>
      <p className="text-xs text-gray-400 mb-3">{venue} • {year}</p>
      {paperUrl && (
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-sm mt-auto"
        >
          Read Paper
        </a>
      )}
    </div>
  )
} 