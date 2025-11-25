import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';
import { 
  Code2, 
  Database, 
  Globe, 
  Palette, 
  Terminal,
  FileCode,
  Layers,
  Server,
  ShoppingCart,
  Search
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 95, icon: Globe, category: "Frontend" },
        { name: "JavaScript", level: 90, icon: Code2, category: "Frontend" },
        { name: "PHP", level: 90, icon: FileCode, category: "Backend" },
        { name: "ReactJS", level: 85, icon: Layers, category: "Frontend" },
      ]
    },
    {
      title: "Frameworks & CMS",
      skills: [
        { name: "Laravel", level: 85, icon: Server, category: "Backend" },
        { name: "WordPress", level: 90, icon: Globe, category: "CMS" },
        { name: "Shopify", level: 85, icon: ShoppingCart, category: "E-commerce" },
        { name: "Django", level: 80, icon: Server, category: "Backend" },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85, icon: Code2, category: "Backend" },
        { name: "Java", level: 80, icon: FileCode, category: "Backend" },
        { name: "C++", level: 75, icon: Terminal, category: "System" },
        { name: "C", level: 75, icon: Terminal, category: "System" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "SQL", level: 85, icon: Database, category: "Database" },
        { name: "MongoDB", level: 80, icon: Database, category: "Database" },
        { name: "MS Access", level: 75, icon: Database, category: "Database" },
        { name: "AWS", level: 75, icon: Server, category: "Cloud" },
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        { name: "SEO", level: 90, icon: Search, category: "Marketing" },
        { name: "NodeJS", level: 80, icon: Server, category: "Backend" },
        { name: "Digital Marketing", level: 85, icon: Palette, category: "Marketing" },
        { name: "Web Design", level: 85, icon: Palette, category: "Design" },
      ]
    }
  ];

  const certifications = [
    {
      title: "Front End Development Libraries",
      issuer: "Free Code Camp (via Class Central)",
      year: "2023"
    },
    {
      title: "Responsive Web Design",
      issuer: "Free Code Camp (via Class Central)",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise spanning web development, 
              programming, and digital marketing.
            </p>
          </div>

          {/* Skills by Category */}
          {skillCategories.map((category, categoryIndex) => (
            <section key={category.title} className="mb-16">
              <h2 className={`text-2xl font-bold mb-8 text-center animate-fade-in stagger-${categoryIndex + 1}`}>
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className={`animate-fade-in stagger-${skillIndex + 1}`}
                  >
                    <SkillCard {...skill} />
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Technologies Grid */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center animate-fade-in">
              Technologies & Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "ReactJS",
                "WordPress", "Shopify", "Python", "Django", "NodeJS", "SQL",
                "MongoDB", "AWS", "Git", "SEO", "Digital Marketing", "MS-Access"
              ].map((tech, index) => (
                <div 
                  key={tech} 
                  className={`glass-card p-4 text-center hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in stagger-${(index % 4) + 1}`}
                >
                  <div className="text-lg font-semibold">{tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-12 text-center animate-fade-in">
              Professional Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    period: "11/2024 - Present",
                    title: "FullStack Developer",
                    company: "Snapping Turtles Pvt. Ltd., Greater Noida",
                    description: "Developing dynamic websites with PHP, ReactJS, WordPress, and Shopify. Implementing SEO strategies and website performance optimization."
                  },
                  {
                    period: "04/2024 - 10/2024",
                    title: "PHP Developer",
                    company: "VRCYN, New Delhi",
                    description: "Built dynamic websites and applications with focus on responsive design and SEO optimization."
                  },
                  {
                    period: "09/2023 - 04/2024",
                    title: "PHP Developer",
                    company: "Digital Brand Crafters, Gurgaon",
                    description: "Developed websites using PHP, ReactJS, Python and Django with emphasis on client satisfaction."
                  },
                  {
                    period: "02/2023 - 05/2023",
                    title: "Web Developer Intern",
                    company: "Skillhollistic, New Delhi",
                    description: "Created engaging web interfaces using HTML, CSS, JavaScript, and PHP."
                  }
                ].map((item, index) => (
                  <div 
                    key={item.period} 
                    className={`glass-card p-6 animate-fade-in stagger-${index + 1}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-40 flex-shrink-0">
                        <span className="text-primary font-semibold">{item.period}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-primary/80 mb-2">{item.company}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center animate-fade-in">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title} 
                  className={`glass-card p-6 animate-fade-in stagger-${index + 1}`}
                >
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-primary">{cert.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center animate-fade-in">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  degree: "M.C.A in Computer Application",
                  institution: "Lovely Professional University, Phagwara",
                  period: "2021 - 2023",
                  cgpa: "8.0"
                },
                {
                  degree: "B.C.A in Computer Applications",
                  institution: "GGNIMT, Ludhiana",
                  period: "2018 - 2021",
                  cgpa: "8.4"
                }
              ].map((edu, index) => (
                <div 
                  key={edu.degree} 
                  className={`glass-card p-6 animate-fade-in stagger-${index + 1}`}
                >
                  <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">{edu.period}</span>
                    <span className="text-muted-foreground">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-20 animate-fade-in">
            <div className="glass-card p-12 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                With 2+ years of experience and expertise across multiple technologies, 
                I'm ready to help bring your project to life!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold glow-on-hover transition-all duration-300"
                >
                  Hire Me
                </button>
                <a 
                  href="/Resume_Harsh_Sood.pdf" 
                  download
                  className="px-8 py-3 glass-card border border-primary/20 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Download Resume
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

export default Skills;