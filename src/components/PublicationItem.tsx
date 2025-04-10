interface PublicationItemProps {
  title: string
  authors: string[]
  venue: string
  year: string
  doi?: string
  pdfUrl?: string
  abstract?: string
  type?: 'conference' | 'thesis'
  role?: string
}

export default function PublicationItem({
  title,
  authors,
  venue,
  year,
  doi,
  pdfUrl,
  abstract,
  type = 'conference',
  role,
}: PublicationItemProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
      <div className="flex flex-col gap-1">
        <p className="text-gray-300">
          {authors.join(', ')}
        </p>
        <p className="text-gray-400">
          {venue}, {year}
          {role && <span className="ml-2 text-blue-400">({role})</span>}
        </p>
        {type === 'thesis' && (
          <p className="text-gray-400 italic">Master's Thesis</p>
        )}
      </div>
      {abstract && (
        <p className="text-gray-300 mt-4">
          {abstract}
        </p>
      )}
      <div className="flex gap-4 mt-4">
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            PDF
          </a>
        )}
        {doi && (
          <a
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            DOI
          </a>
        )}
      </div>
    </div>
  )
} 