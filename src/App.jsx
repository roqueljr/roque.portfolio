import React, { useState, useEffect } from 'react';
import { Code2, Terminal, Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

export default function ProgrammerPortfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with payment integration and inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management API",
      description: "RESTful API with JWT authentication and real-time updates",
      tech: ["Express", "PostgreSQL", "Socket.io", "Docker"],
      link: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard with real-time data processing",
      tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript", "Python", "React", "Node.js", 
    "SQL", "Git", "Docker", "AWS"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-emerald-400">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">&lt;DevName /&gt;</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`hover:text-emerald-400 transition-colors ${activeSection === section ? 'text-emerald-400' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
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
              {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
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
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors"
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
              I'm a passionate programmer who loves turning complex problems into elegant solutions. 
              With a strong foundation in computer science and hands-on experience in full-stack development, 
              I specialize in building robust, scalable applications.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">Technical Support Specialist</h3>
                  <p className="text-slate-300">Company Name</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Provided technical support for web applications and software products</li>
                <li>Troubleshot and resolved customer issues via email, chat, and phone</li>
                <li>Documented technical issues and created knowledge base articles</li>
                <li>Collaborated with development team to identify and fix bugs</li>
                <li>Maintained 95% customer satisfaction rating</li>
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-emerald-400 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">Junior Developer / Support</h3>
                  <p className="text-slate-300">Previous Company</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 md:mt-0">2021 - 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Assisted in developing and maintaining web applications</li>
                <li>Provided first-line technical support to clients</li>
                <li>Performed system diagnostics and troubleshooting</li>
                <li>Created user guides and technical documentation</li>
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
                  <ExternalLink className="w-5 h-5 text-slate-400 hover:text-emerald-400 cursor-pointer" />
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
                <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-emerald-400 mb-2">University Name</p>
                <p className="text-slate-400">2018 - 2022</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-10">
              <li>Graduated with Honors</li>
              <li>Focus on Software Engineering and Web Development</li>
              <li>Relevant coursework: Data Structures, Algorithms, Database Systems, Web Technologies</li>
            </ul>
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
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com"
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

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-400">
          <p className="mb-2">$ exit</p>
          <p>&copy; 2024 Your Name. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}