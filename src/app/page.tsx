import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import AnimatedSection from '@/components/AnimatedSection'
import PublicationsSection from '@/components/PublicationsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection, { Project, MediaItem } from '@/components/ProjectsSection'

/**
 * Renders the main home page of the portfolio website.
 * This component aggregates various sections like Navbar, Hero, Projects, Experience, Publications, About, and Contact.
 * It also defines the data for projects, experiences, and publications.
 * @returns A React element representing the home page.
 */
export default function Home() {
  const projects: Project[] = [
    {
      title: 'DilDesigns3D',
      description: 'An Etsy shop specializing in retro handheld gaming accessories. Designed and 3D printed custom accessories for classic gaming consoles, open sourcing designs on Printables for the community.',
      shortDescription: '3D printed retro gaming accessories company.',
      cardImage: '/cropped_dildesigns.jpg',
      media: [
        { type: 'image', url: '/dildesigns_etsy.png' },
        { type: 'image', url: '/dildesigns_8bitdo.webp' },
        { type: 'image', url: '/dildesigns_brick.webp' },
        { type: 'image', url: '/dildesigns_retroid.webp' },
      ],
      technologies: ['CAD Design', '3D Printing'],
      githubUrl: 'https://www.printables.com/@dildesigns',
      demoUrl: 'https://www.etsy.com/shop/DilDesigns3D',
    },
    {
      title: 'GearLab chat',
      description: 'A full-stack RAG Chatbot for product reccomendations. Includes chat moderation, multiple LLM integrations (Llama, Gemini), Chromadb, and local transformer-based scraping with a Vite React frontend with a FastAPI backend.',
      shortDescription: 'Full-stack AI Chatbot for product recommendations.',
      cardImage: '/gearlabchat.png',
      media: [
        { type: 'image', url: '/gearlabchat1.png' },
        { type: 'image', url: '/gearlabchat2.png' },
        { type: 'video', url: 'https://www.youtube.com/embed/L3foCTn1b-U' },
      ],
      technologies: ['LangChain', 'LLMs', 'RAG', 'Web Scraping', 'ChromaDB', 'FastAPI', 'Vite', 'Typescript', 'Python'],
    },
    {
      title: 'Resuminer',
      description: 'An AI-powered resume editor and cover letter generator using Retrieval-Augmented Generation (RAG), Gemini, and GCP.',
      shortDescription: 'LLM-powered resume and cover letter generator.',
      cardImage: '/resuminer_logo.png',
      media: [
        { type: 'image', url: '/resuminer_front.jpg' },
        { type: 'image', url: '/resuminer_bullets.jpg' },
        { type: 'image', url: '/resuminer_cover.jpg' },
      ],
      technologies: ['RAG', 'Gemini', 'GCP', 'Streamlit', 'Python'],
      githubUrl: 'https://github.com/dillhicks/resuminer',
    },

  ]

  const experiences = [
    {
      company: 'Trilogy Innovations, Inc.',
      position: 'Deep Learning Engineer',
      period: '2023 - 2025',
      summary: 'I created AI-powered solutions for radio signal processing deployed on Edge devices and automation of financial document processing with LLMS and AWS. Classification, semi-supervised learning, denoising, anomaly detection, and more!',
      technologies: ['PyTorch', 'AWS', 'ONNX', 'Docker', 'MLflow', 'DVC', 'CUDA','PostgreSQL'],
      logoUrl: '/logos/trilogy.png',
    },
    {
      company: 'NASA Ames Research Center',
      position: 'Graduate AI Researcher',
      period: '2021 - 2023',
      summary: 'I made and researched AI solutions for UAV traffic management, developing scalable data processing pipelines that enhanced airspace efficiency and safety integrating it all into a Unity based simulation platform.',
      technologies: ['Keras', 'TensorFlow', 'AWS', 'Docker', 'Unity', 'Kafka', 'PySpark', 'Scikit-learn', 'PostgreSQL'],
      logoUrl: '/logos/nasa.jpg',
    },
    {
      company: 'Engineers for Exploration - Kastner Research Group',
      position: 'Graduate Research Assistant',
      period: '2018 - 2023',
      summary: 'I led a multidisciplinary team in developing ML-based solutions for environmental conservation, and developed ML models for mangrove ecosystem monitoring to influence government carbon policies. I flew drones, recorded data, and made insights to conserve these awesome ecosystems.',
      technologies: ['Keras', 'TensorFlow', 'AWS', 'Azure', 'Dash', 'Plotly', 'XGBoost', 'Geospatial Analysis', 'Drones', 'QGIS'],
      logoUrl: '/logos/e4e.png',
    },
    {
      company: 'Thermo Fisher Scientific',
      position: 'Software Engineering and Machine Learning Intern',
      period: '2019',
      summary: 'Implemented NLP and sentiment analysis systems that automated internal processes, and developed an iOS app for internal wayfinding, essentially a Google Maps for Thermo Fisher!',
      technologies: ['Scikit-learn', 'NLTK', 'AWS Lambda','SQL Server', 'iOS Development'],
      logoUrl: '/logos/thermo.png',
    },
  ]

  const publications = [
    {
      title: 'Remote Sensing of Mangroves Using Machine Learning Based on Satellite and Aerial Imagery',
      authors: 'S.D. Hicks',
      venue: 'University of California, San Diego',
      year: '2023',
      type: 'thesis' as const,
      role: 'Author',
      imageUrl: '/images/thesis.jpg',
      paperUrl: 'https://escholarship.org/content/qt4pf2f7tr/qt4pf2f7tr.pdf',
    },
    {
      title: 'Distributed Decision Contextualization via Machine Learning based Reverse Parametrization',
      authors: 'S.D. Hicks, A.N. Das, H.R. Idris',
      venue: 'AIAA AVIATION 2023 Forum, 3686',
      year: '2023',
      type: 'conference' as const,
      role: 'Primary Author',
      imageUrl: '/images/rppaper.jpg',
      paperUrl: 'https://ntrs.nasa.gov/api/citations/20230006645/downloads/20230006645_Manuscript_AIAA_Aviation_2023_DHicks_FINAL.pdf',
    },
    {
      title: 'A 3D Simulation Platform for Decentralized Decision-Making in Advanced Air Mobility',
      authors: 'A.N. Das, S.D. Hicks',
      venue: 'AIAA AVIATION 2022 Forum, 3761',
      year: '2022',
      type: 'conference' as const,
      role: 'Coauthor',
      imageUrl: '/images/simulationpaper.jpg',
      paperUrl: 'https://ntrs.nasa.gov/api/citations/20220006279/downloads/20220006279_AIAA_Aviation_2022_Das_FINAL.pdf',
    },
    {
      title: 'Mangrove Ecosystem Detection using Mixed-Resolution Imagery with a Hybrid-Convolutional Neural Network',
      authors: 'D. Hicks, R. Kastner, C. Schurgers, A. Hsu, O. Aburto',
      venue: 'NeurIPS 2020: Tackling Climate Change with Machine Learning',
      year: '2020',
      type: 'conference' as const,
      role: 'Primary Author',
      imageUrl: '/images/neuripspaper.jpg',
      paperUrl: 'https://s3.us-east-1.amazonaws.com/climate-change-ai/papers/neurips2020/23/paper.pdf',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Projects Section */}
      <AnimatedSection>
        <ProjectsSection projects={projects} />
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection>
        <ExperienceSection experiences={experiences} />
      </AnimatedSection>

      {/* Publications Section */}
      <AnimatedSection>
        <PublicationsSection publications={publications} />
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection>
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-100 mb-12">About Me</h2>
            
            {/* Image and Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Left Column - Education */}
              <div className="bg-gray-800 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-900/50">
                <h3 className="text-xl font-semibold text-gray-50 mb-6 transition-colors duration-300 hover:text-gray-100">Education</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-50 font-medium">University of California, San Diego</p>
                    <p className="text-gray-200">M.S. in Machine Learning and Data Science</p>
                    <p className="text-gray-400 text-sm mb-3">2021 - 2023</p>
                    <div className="pl-4 border-l-2 border-gray-700 space-y-2">
                      <p className="text-gray-300 text-sm">
                        • Teaching Assistant for ECE 196: Rapid Prototyping
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-50 font-medium">University of California, San Diego</p>
                    <p className="text-gray-200">B.S. in Electrical Engineering</p>
                    <p className="text-gray-400 text-sm mb-3">2017 - 2021</p>
                    <div className="pl-4 border-l-2 border-gray-700 space-y-2">
                      <p className="text-gray-300 text-sm">
                        • President of UC San Diego IEEE Student Chapter (2nd largest in the nation)
                      </p>
                      <p className="text-gray-300 text-sm">
                        • Creator and Leader of ECE Reverse Career Fair
                      </p>
                      <p className="text-gray-300 text-sm">
                        • Creator and Leader of ML Bootcamp
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column - Profile Image */}
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                  <img 
                    src="/profile2.jpg" 
                    alt="Dillon Hicks" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>

              {/* Right Column - Expertise and Interests */}
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-900/50">
                  <h3 className="text-xl font-semibold text-gray-50 mb-4 transition-colors duration-300 hover:text-gray-100">Expertise</h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Deep Learning
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Computer Vision
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      NLP
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Cloud Computing
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Geospatial Analysis
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-900/50">
                  <h3 className="text-xl font-semibold text-gray-50 mb-4 transition-colors duration-300 hover:text-gray-100">Personal Interests</h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Rock Climbing
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Hiking
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Backpacking
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Snowboarding
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Gaming
                    </li>
                    <li className="flex items-center transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-gray-400 mr-2">•</span>
                      Photography
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About Text Below */}
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-gray-200 text-lg leading-relaxed">
                I am a passionate Machine Learning Engineer with expertise in the AI space. I love engineering cool systems that solve real-world problems and improve people's lives!
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 section-bg">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Get in Touch</h2>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-gray-400 text-lg leading-relaxed italic">
                Need help with developing AI solutions? Want to know how I design and engineer things? Do you just want to chat about rock climbing or snowboarding? Shoot me a message below.
              </p>
            </div>
            <div className="max-w-xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
