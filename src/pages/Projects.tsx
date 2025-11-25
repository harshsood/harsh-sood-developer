import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { FolderGit2 } from 'lucide-react';

// Using a consistent project icon for all cards
const projectImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Employee Management System",
      description: "A comprehensive employee management system built with Python. This was my first major project that handles employee data, attendance tracking, leave management, and salary calculations with an intuitive user interface.",
      image: projectImage,
      technologies: ["Python", "Tkinter", "SQLite", "GUI Development"],
      githubUrl: "https://github.com/harshsood/Employee_Management_System",
      category: "python",
      featured: true
    },
    {
      title: "Restaurant Billing System", 
      description: "An efficient billing system for restaurants featuring menu management, order processing, VAT calculations, and bill generation. Built with a user-friendly interface for seamless restaurant operations.",
      image: projectImage,
      technologies: ["Python", "GUI", "Database", "Desktop App"],
      githubUrl: "#",
      category: "python"
    },
    {
      title: "Population Analysis Dashboard",
      description: "A comprehensive data analysis tool for worldwide population statistics. Features interactive charts, reports, and dataset visualization capabilities for demographic analysis and research.",
      image: projectImage,
      technologies: ["Python", "Data Analysis", "Visualization", "Statistics"],
      githubUrl: "#",
      category: "data-analysis"
    },
    {
      title: "Scientific Calculator",
      description: "A fully functional scientific calculator built with Python featuring advanced mathematical operations, trigonometric functions, logarithms, and a clean user interface.",
      image: projectImage,
      technologies: ["Python", "Tkinter", "Mathematics", "GUI"],
      githubUrl: "https://github.com/harshsood/Scientific-Calculator",
      category: "python"
    },
    {
      title: "AudioBook Converter",
      description: "A GUI-based application that converts PDF text to audio and audio files to PDF. Features text-to-speech functionality and document processing capabilities for accessibility and convenience.",
      image: projectImage,
      technologies: ["Python", "Text-to-Speech", "PDF Processing", "GUI"],
      githubUrl: "https://github.com/harshsood/AudioBook",
      category: "python"
    },
    {
      title: "Social Media Site",
      description: "A database management system project created in MS-Access 2010. Demonstrates comprehensive database design principles with user management, content organization, and relationship mapping.",
      image: projectImage,
      technologies: ["MS-Access", "Database Design", "SQL", "DBMS"],
      githubUrl: "https://github.com/harshsood/Social_Media_Site",
      category: "database"
    },
    {
      title: "Attractions of India",
      description: "A beautiful website showcasing the various attractions of India including famous monuments, cultural sites, and natural wonders. Built using HTML and CSS with responsive design principles.",
      image: projectImage,
      technologies: ["HTML", "CSS", "Web Design", "Responsive"],
      githubUrl: "https://github.com/harshsood/Attractions-of-India",
      category: "web"
    },
    {
      title: "Cafe Menu Card",
      description: "A digital menu card for cafes built with HTML and CSS. Features responsive design, attractive layouts, and easy navigation for showcasing food items and prices.",
      image: projectImage,
      technologies: ["HTML", "CSS", "Web Design", "Menu Design"],
      githubUrl: "https://github.com/harshsood/Cafe-Menu-Card",
      category: "web"
    },
    {
      title: "YouTube Clone",
      description: "A website developed using HTML, CSS and JavaScript. It is simply a kind of a look alike of the original YouTube application with responsive design and interactive features.",
      image: projectImage,
      technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
      githubUrl: "#",
      category: "web"
    },
    {
      title: "Modern React Portfolio",
      description: "A sleek, responsive portfolio website built with React and modern web technologies. Features dark/light mode, smooth animations, and optimized performance.",
      image: projectImage,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive"],
      githubUrl: "#",
      category: "web",
      featured: true
    },
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, product management, and order tracking. Built with modern React.",
      image: projectImage,
      technologies: ["React", "Chart.js", "Firebase", "Dashboard"],
      githubUrl: "#",
      category: "web"
    },
    {
      title: "Weather App PWA",
      description: "A progressive web application providing real-time weather information with location-based forecasts. Features offline capability and responsive design.",
      image: projectImage,
      technologies: ["JavaScript", "PWA", "Weather API", "Service Workers"],
      githubUrl: "#",
      category: "web"
    },
    {
      title: "Task Management SPA",
      description: "A single-page application for task and project management with drag-and-drop functionality, real-time updates, and cloud sync capabilities.",
      image: projectImage,
      technologies: ["JavaScript", "SPA", "Firebase", "Drag-Drop"],
      githubUrl: "#",
      category: "web"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'python', label: 'Python' },
    { id: 'web', label: 'Web Development' },
    { id: 'data-analysis', label: 'Data Analysis' },
    { id: 'database', label: 'Database' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects showcasing my skills in software development, 
              web design, and data analysis. Each project represents a unique challenge 
              and learning experience.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-primary text-primary-foreground glow-on-hover'
                    : 'glass-card hover:bg-primary/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className={`animate-fade-in stagger-${(index % 4) + 1}`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <section className="text-center mb-20 animate-fade-in">
            <div className="glass-card p-12 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-6">
                <FolderGit2 className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                These projects represent just a portion of my capabilities. I'm always working 
                on new and exciting projects. Let's discuss how I can help bring your ideas to life!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold glow-on-hover transition-all duration-300"
                >
                  Start a Project
                </button>
                <a
                  href="https://github.com/harshsood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 glass-card border border-primary/20 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;