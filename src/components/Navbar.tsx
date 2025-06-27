'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Renders the main navigation bar of the website.
 * It provides links to different sections of the home page and a separate link to the photo gallery.
 * Smooth scrolling is implemented for internal links.
 * @returns {JSX.Element} The Navbar component.
 */
export default function Navbar() {
  const pathname = usePathname()

  /**
   * Handles smooth scrolling to a target section on the page.
   * @param {React.MouseEvent<HTMLAnchorElement>} e - The click event.
   * @param {string} targetId - The ID of the target HTML element to scroll to.
   */
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              DH
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#projects"
                onClick={(e) => handleScroll(e, 'projects')}
                className={`text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  pathname === '/' ? 'active' : ''
                }`}
              >
                Projects
              </Link>
              <Link
                href="/#experience"
                onClick={(e) => handleScroll(e, 'experience')}
                className={`text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  pathname === '/' ? 'active' : ''
                }`}
              >
                Experience
              </Link>
              <Link
                href="/#publications"
                onClick={(e) => handleScroll(e, 'publications')}
                className={`text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  pathname === '/' ? 'active' : ''
                }`}
              >
                Publications
              </Link>
              <Link
                href="/#about"
                onClick={(e) => handleScroll(e, 'about')}
                className={`text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  pathname === '/' ? 'active' : ''
                }`}
              >
                About
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className={`text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  pathname === '/' ? 'active' : ''
                }`}
              >
                Contact
              </Link>
              <Link
                href="/photos"
                className={`text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  pathname === '/photos' ? 'active' : ''
                }`}
              >
                Photos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 