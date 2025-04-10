import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import ExperienceItem from '@/components/ExperienceItem'
import PublicationCard from '@/components/PublicationCard'
import ContactLinks from '@/components/ContactForm'
import AnimatedSection from '@/components/AnimatedSection'

export default function Home() {
  const projects = [
    {
      title: 'DilDesigns3D',
      description: 'An Etsy shop specializing in retro handheld gaming accessories. Designed and 3D printed custom accessories for classic gaming consoles, open sourcing designs on Printables for the community.',
      imageUrl: '/dildesigns.jpg',
      technologies: ['CAD Design', '3D Printing'],
      githubUrl: 'https://www.printables.com/@dildesigns',
      demoUrl: 'https://www.etsy.com/shop/DilDesigns3D',
    },
    {
      title: 'Resuminer',
      description: 'An AI-powered resume editor and cover letter generator using Retrieval-Augmented Generation (RAG), Gemini, and GCP.',
      imageUrl: '/resuminer.jpg',
      technologies: ['RAG', 'Gemini', 'GCP'],
      githubUrl: 'https://github.com/dillhicks/resuminer',
    },
  ]

  const experiences = [
    {
      company: 'Trilogy Innovations, Inc.',
      position: 'Deep Learning Engineer',
      period: '2023 - 2025',
      summary: 'I created AI-powered solutions for radio signal processing deployed on Edge devices and automation of financial document processing with LLMS and AWS. Classification, semi-supervised learning, anomaly detection, and more!',
      technologies: ['PyTorch', 'AWS', 'ONNX', 'Docker', 'MLflow', 'DVC'],
      logoUrl: '/logos/trilogy.png',
    },
    {
      company: 'NASA Ames Research Center',
      position: 'Graduate AI Researcher',
      period: '2021 - 2023',
      summary: 'I made AI solutions for UAV traffic management, developing scalable data processing pipelines that enhanced airspace efficiency and safety integrating it all into a Unity based simulation platform.',
      technologies: ['Keras', 'TensorFlow', 'AWS', 'Docker', 'Unity'],
      logoUrl: '/logos/nasa.jpg',
    },
    {
      company: 'Engineers for Exploration - Kastner Research Group',
      position: 'Graduate Research Assistant',
      period: '2018 - 2023',
      summary: 'I led a multidisciplinary team in developing ML-based solutions for environmental conservation, and developed ML models for mangrove ecosystem monitoring to influence government carbon policies. I flew drones, recorded data, and made insights to conserve these awesome ecosystems.',
      technologies: ['Keras', 'TensorFlow', 'AWS', 'Azure', 'Dash', 'Plotly', 'XGBoost'],
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
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 section-bg">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection>
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-100 mb-12">Experience</h2>
            <div className="relative">
              {experiences.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Publications Section */}
      <AnimatedSection>
        <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 section-bg">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Publications & Papers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publications.map((publication, index) => (
                <PublicationCard key={index} {...publication} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection>
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">About Me</h2>
            <div className="prose max-w-3xl">
              <p className="text-gray-300 mb-4">
                I am a passionate Machine Learning Engineer with expertise in deep learning,
                computer vision, and natural language processing. My goal is to create
                cool systems that solve real-world problems and improve people's lives.
              </p>
              <p className="text-gray-300">
                I also love the outdoors, and I love rock climbing, hiking, backpacking, snowboarding, really anything that gets me outside! 
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
            <div className="max-w-xl">
              <ContactLinks />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
