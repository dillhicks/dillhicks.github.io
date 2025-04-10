export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
        >
          Return Home
        </a>
      </div>
    </div>
  )
} 