import React, { useState, useEffect } from 'react';
import { Code2, Terminal, Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

export default function ProgrammerPortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'certificates', 'contact'];
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the middle of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navigation height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "PEFCarbon Sink Database",
      description: "Database management system for tracking carbon sink data.",
      tech: ["PHP", "Laravel", "MySQL", "HTML/CSS"],
      link: "#"
    },
    {
      title: "Tigo: Tricycle Ride - Booking Mobile Application",
      description: "Online booking platform for tricycle rides with real-time tracking.",
      tech: ["Kotlin", "Firebase", "Google Cloud", "PHP", "MySQL", "HTML/CSS"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", 
    "SQL", "Git", "PHP", "HTML/CSS",
    "TypeScript", "Laravel"
  ];

  const supportSkills = [
    "Customer Support", "Troubleshooting", "Ticketing Systems", "Remote Desktop",
    "System Diagnostics", "Documentation", "Network Support",
    "Windows/Linux", "CCTV Monitoring"
  ];

  const certificates = [
    {
      title: "Visual Graphic Design | NC III",
      issuer: "TESDA",
      date: "October 2018",
      description: "Creating professional visual materials for print and digital media, including layout, illustration, and photo editing using industry-standard tools."
    },
    {
      title: "Omada Certificate Network Administrator (OCNA) Wireless",
      issuer: "OMADA by tp-link",
      date: "May 2025",
      description: "OCNA Wireless certifies skills in configuring, managing, and optimizing TP-Link Omada wireless networks, focusing on access point deployment, network security, and performance troubleshooting."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-emerald-400">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">&lt;Roque /&gt;</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['about', 'skills', 'experience', 'projects', 'education', 'certificates', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative hover:text-emerald-400 transition-all duration-300 ${
                  activeSection === section ? 'text-emerald-400' : 'text-slate-300'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 animate-pulse"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-emerald-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="flex flex-col gap-4 px-6 py-4">
              {['about', 'skills', 'experience', 'projects', 'education', 'certificates', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left hover:text-emerald-400 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6 text-emerald-400 text-sm animate-pulse">
            $ whoami
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8">
            Building scalable web applications with clean code and modern technologies
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 rounded-lg transition-colors"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 rounded-lg transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-slate-500">//</span> About Me
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              I'm an enthusiastic coder that enjoys creating sophisticated solutions for 
              challenging issues. I have a solid background in information technology 
              and practical development experience, and my area of expertise 
              is creating scalable, reliable apps.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I like to explore new technologies, contribute to open-source projects, and 
              share my expertise with the developer community when I'm not developing.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-slate-500">//</span> Technical Skills
          </h2>
          
          {/* Development Skills */}
          <h3 className="text-xl font-semibold mb-4 text-slate-300">Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center hover:border-emerald-400 transition-colors"
              >
                <span className="text-emerald-400">&lt;</span>
                {skill}
                <span className="text-emerald-400">/&gt;</span>
              </div>
            ))}
          </div>

          {/* Technical Support Skills */}
          <h3 className="text-xl font-semibold mb-4 text-slate-300">Technical Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supportSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center hover:border-cyan-400 transition-colors"
              >
                <span className="text-cyan-400">{'{'}</span>
                <span className="text-sm">{skill}</span>
                <span className="text-cyan-400">{'}'}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-slate-500">//</span> Work Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-emerald-400 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">Junior Software Developer</h3>
                  <p className="text-slate-300">Philippine Eagle Foundation</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">July-December 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Assisted in developing and maintaining database web applications</li>
                <li>Provided first-line technical support to clients</li>
                <li>Performed system diagnostics and troubleshooting</li>
                <li>Created user guides and technical documentation</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-emerald-400 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">Technical Support Specialist</h3>
                  <p className="text-slate-300">Decoart Marketing Incorporated - Citihardware</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">April 2024 - July 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Provided technical support for web applications and software products</li>
                <li>Troubleshot and resolved customer issues via email, chat, and phone</li>
                <li>Documented technical issues and created knowledge base articles</li>
                <li>Collaborated with development team to identify and fix bugs</li>
                <li>Maintained 95% customer satisfaction rating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-slate-500">//</span> Featured Projects
          </h2>
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-400/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-emerald-400">{project.title}</h3>
                  {/* <ExternalLink className="w-5 h-5 text-slate-400 hover:text-emerald-400 cursor-pointer" /> */}
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-emerald-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-slate-500">//</span> Education
          </h2>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <Code2 className="w-6 h-6 text-emerald-400 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Bachelor of Science in Information Technology - Major in Inforamtion Security</h3>
                <p className="text-emerald-400 mb-2">University of Southeastern Philippines</p>
                <p className="text-slate-400">2019 - 2023</p>
              </div>
            </div>
            {/* <ul className="list-disc list-inside space-y-2 text-slate-300 ml-10">
              <li>Graduated with Honors</li>
              <li>Focus on Software Engineering and Web Development</li>
              <li>Relevant coursework: Data Structures, Algorithms, Database Systems, Web Technologies</li>
            </ul> */}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-slate-500">//</span> Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-400/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-emerald-500/10 p-2 rounded-lg">
                    <Code2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">{cert.date}</span>
                </div>
                <h3 className="text-lg font-bold text-emerald-400 mb-2">{cert.title}</h3>
                <p className="text-slate-300 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-sm text-slate-400 mb-3">{cert.description}</p>
                {/* <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono">ID:</span>
                  <span className="font-mono">{cert.credentialId}</span>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-emerald-400">
            <span className="text-slate-500">//</span> Get In Touch
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Interested in working together? Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="mailto:rja.longgakit@gmail.com"
              className="flex items-center gap-2 px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://github.com/roqueljr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/roqueljr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />


      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-400">
          <p className="mb-2">$ exit</p>
          <p>&copy; 2025 Roque Longgakit. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}