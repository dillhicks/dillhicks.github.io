'use client'

import { useState } from 'react'

/**
 * Renders the contact links section, including an email display toggle and a LinkedIn link.
 * @returns {JSX.Element} The ContactForm component.
 */
export default function ContactForm() {
  const [showEmail, setShowEmail] = useState(false)
  const email = 'hicksdillon56@gmail.com'

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {showEmail ? (
            <a
              href={`mailto:${email}`}
              className="text-gray-300 hover:text-gray-100 transition-all duration-300"
            >
              {email}
            </a>
          ) : (
            <button
              onClick={() => setShowEmail(true)}
              className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              Click to show email
            </button>
          )}
        </div>
        <a
          href="https://www.linkedin.com/in/sdillonhicks/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in-up [animation-delay:0.7s]"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  )
}