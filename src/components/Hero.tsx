'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-gray-700 animate-fade-in">
            <Image
              src="/profile.jpg"
              alt="Dillon Hicks"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4 transition-transform duration-300 hover:scale-105 origin-left">
              Dillon Hicks
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-300 mb-8">
              <TypeAnimation
                sequence={[
                  'Machine Learning Engineer',
                  4000,
                  'Maker',
                  4000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mb-8">
              <TypeAnimation
                sequence={[
                  'A maker and machine learning engineer with a passion for building cool things and solving complex problems.',
                  1000,
                ]}
                wrapper="span"
                speed={90}
                cursor={false}
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-105 animate-fade-in-up [animation-delay:0.5s]"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 animate-fade-in-up [animation-delay:0.7s]"
              >
                View Resume
              </a>
              <Link
                href="/photos"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 animate-fade-in-up [animation-delay:0.9s]"
              >
                Photo Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 