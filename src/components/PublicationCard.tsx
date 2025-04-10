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
    <div className="card">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden border border-gray-800">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 text-sm rounded-full bg-gray-900 text-gray-300 border border-gray-800">
          {type === 'conference' ? 'Conference Paper' : 'Thesis'}
        </span>
        <span className="px-3 py-1 text-sm rounded-full bg-gray-900 text-gray-300 border border-gray-800">
          {role}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-2">{authors}</p>
      <p className="text-gray-400 mb-4">{venue} • {year}</p>
      {paperUrl && (
        <a
          href={paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Read Paper
        </a>
      )}
    </div>
  )
} 