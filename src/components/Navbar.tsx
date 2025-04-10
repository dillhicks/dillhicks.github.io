import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-100">
              DH
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#projects"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                Experience
              </Link>
              <Link
                href="#publications"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                Publications
              </Link>
              <Link
                href="#about"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 