'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

interface MediaItem {
  type: 'image' | 'video'
  url: string
}

interface ProjectCardProps {
  title: string
  description: string
  shortDescription: string
  technologies: string[]
  cardImage: string
  media: MediaItem[]
  githubUrl?: string
  demoUrl?: string
}

export default function ProjectCard({
  title,
  description,
  shortDescription,
  technologies,
  cardImage,
  media,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  const isDildesigns = title === 'DilDesigns3D'
  const [showPopup, setShowPopup] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  let backgroundColor = ''
  if (title === 'GearLabChat') {
    backgroundColor = '#2f783f'
  } else if (title === 'Resuminer') {
    backgroundColor = '#0e1117'
  }

  useEffect(() => {
    if (showPopup) {
      setModalVisible(true)
      document.body.style.overflow = 'hidden'
      const timer = setTimeout(() => setIsAnimating(true), 10)
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
      document.body.style.overflow = 'unset'
      const timer = setTimeout(() => setModalVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [showPopup])

  return (
    <>
      <div className="card flex flex-col h-full">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden border border-gray-800" style={{ backgroundColor }}>
          <Image
            src={cardImage}
            alt={title}
            fill
            className="object-contain p-4 relative z-10"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto justify-end">
          <button
            onClick={() => setShowPopup(true)}
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 hover:bg-gray-700 hover:text-gray-100 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
          >
            Read More
          </button>
        </div>
      </div>

      {modalVisible &&
        ReactDOM.createPortal(
          <div
            className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className={`bg-gray-900 p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl max-w-7xl w-full relative max-h-[95vh] overflow-y-auto transform transition-transform duration-300 ease-out ${isAnimating ? 'scale-100' : 'scale-95'}`}>
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl font-light transition-colors duration-200 leading-none focus:outline-none"
              >
                &times;
              </button>
              <h2 className="text-4xl font-extrabold text-white mb-6 md:hidden text-center">{title}</h2>
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                <div className="w-full md:w-2/3 flex flex-col items-center">
                  <div className="relative w-full h-80 sm:h-96 lg:h-[450px] mb-4 md:mb-6 rounded-lg overflow-hidden border border-gray-700 flex-shrink-0 shadow-lg">
                    {media[currentSlide].type === 'image' ? (
                      <Image
                        src={media[currentSlide].url}
                        alt={title}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <iframe
                        src={media[currentSlide].url}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    )}
                    {media.length > 0 && (
                      <>
                        <button
                          onClick={() =>
                            setCurrentSlide((prev) =>
                              prev === 0 ? media.length - 1 : prev - 1
                            )
                          }
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 focus:outline-none transition-colors duration-200"
                        >
                          &#10094;
                        </button>
                        <button
                          onClick={() =>
                            setCurrentSlide((prev) =>
                              prev === media.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 focus:outline-none transition-colors duration-200"
                        >
                          &#10095;
                        </button>
                      </>
                    )}
                  </div>
                  {media.length > 1 && (
                    <div className="flex justify-center gap-3 mb-6 flex-wrap">
                      {media.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-20 sm:w-24 h-14 sm:h-16 rounded-md overflow-hidden border-2 ${index === currentSlide ? 'border-blue-500 shadow-md' : 'border-gray-700'} focus:outline-none transition-all duration-300 transform hover:scale-105 relative`}
                        >
                          {item.type === 'image' ? (
                            <Image
                              src={item.url}
                              alt={`Thumbnail ${index + 1}`}
                              width={96}
                              height={64}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold">
                              Video
                            </div>
                          )}
                          {index === currentSlide && (
                            <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-full md:w-1/3 flex flex-col">
                  <h2 className="text-4xl font-extrabold text-white mb-6 hidden md:block">{title}</h2>
                  <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed flex-grow pr-0 sm:pr-4">
                    {description}
                  </p>
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                    {technologies.map((tech, index) => (
                      <span key={index} className="tech-tag text-sm sm:text-base">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-auto justify-center md:justify-start">
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-lg px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
                      >
                        {isDildesigns ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.471.083.684-.23.684-.516 0-.256-.009-.933-.014-1.82-2.784.606-3.376-1.353-3.376-1.353-.455-1.152-1.11-1.465-1.11-1.465-.908-.619.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.087 2.91.832.091-.644.348-1.086.635-1.336-2.224-.253-4.555-1.118-4.555-4.943 0-1.091.39-1.984 1.029-2.684-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025.799-.222 1.65-.333 2.5-.337.85.004 1.701.115 2.5.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.397.099 2.65.64.7 1.028 1.593 1.028 2.684 0 3.833-2.335 4.687-4.566 4.935.359.309.678.922.678 1.855 0 1.336-.012 2.417-.012 2.747 0 .289.208.601.688.513C21.137 20.198 24 16.442 24 12.017 24 6.484 19.522 2 14 2h-2Z" clipRule="evenodd" /></svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.471.083.684-.23.684-.516 0-.256-.009-.933-.014-1.82-2.784.606-3.376-1.353-3.376-1.353-.455-1.152-1.11-1.465-1.11-1.465-.908-.619.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.89 1.529 2.342 1.087 2.91.832.091-.644.348-1.086.635-1.336-2.224-.253-4.555-1.118-4.555-4.943 0-1.091.39-1.984 1.029-2.684-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025.799-.222 1.65-.333 2.5-.337.85.004 1.701.115 2.5.337 1.908-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.397.099 2.65.64.7 1.028 1.593 1.028 2.684 0 3.833-2.335 4.687-4.566 4.935.359.309.678.922.678 1.855 0 1.336-.012 2.417-.012 2.747 0 .289.208.601.688.513C21.137 20.198 24 16.442 24 12.017 24 6.484 19.522 2 14 2h-2Z" clipRule="evenodd" /></svg>
                        )}
                        {isDildesigns ? 'Printables' : 'GitHub'}
                      </a>
                    )}
                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-lg px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
                      >
                        {isDildesigns ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.5 12.5c0 1.1-.9 2-2 2h-2v2c0 1.1-.9 2-2 2h-2v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2h-2c-1.1 0-2-.9-2-2v-2H1.5c-1.1 0-2-.9-2-2V9.5c0-1.1.9-2 2-2h2V5.5c0-1.1.9-2 2-2h2V1.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2h2c1.1 0 2 .9 2 2v2h2c1.1 0 2 .9 2 2v2z"/></svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.5 12.5c0 1.1-.9 2-2 2h-2v2c0 1.1-.9 2-2 2h-2v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2h-2c-1.1 0-2-.9-2-2v-2H1.5c-1.1 0-2-.9-2-2V9.5c0-1.1.9-2 2-2h2V5.5c0-1.1.9-2 2-2h2V1.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2h2c1.1 0 2 .9 2 2v2h2c1.1 0 2 .9 2 2v2z"/></svg>
                        )}
                        {isDildesigns ? 'Etsy' : 'Demo'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
} 