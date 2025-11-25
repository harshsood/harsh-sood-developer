import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/Footer';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "I believe in writing clean, maintainable, and efficient code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Combining technical skills with creative vision to build beautiful and functional user experiences."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients and teams to understand needs and deliver exceptional results."
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate software developer with a love for creating innovative solutions
              and bringing ideas to life through code.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl font-bold">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Harsh Sood, a Website Developer with 2 years of hands-on experience in 
                  designing dynamic websites and web applications. My journey in technology 
                  has been driven by a commitment to continuous learning and embracing new 
                  technologies for personal growth.
                </p>
                <p>
                  My expertise includes Website Development using HTML, CSS, JS, PHP, Laravel, 
                  ReactJS, WordPress and Shopify. I also create Web Applications using Python 
                  and Django, with strong skills in On-Page and Off-Page SEO Optimization, 
                  Website Performance Analysis and Client Engagement.
                </p>
                <p>
                  I firmly believe that consistency is the cornerstone of success. Currently 
                  working as a FullStack Developer at Snapping Turtles Pvt. Ltd., I've had 
                  the privilege of working with multiple companies and diverse projects that 
                  have shaped my technical expertise.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">13+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">4+</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="glass-card p-4 rounded-2xl">
                  <img
                    src={profilePhoto}
                    alt="Harsh Sood"
                    className="w-80 h-80 rounded-xl object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animate-bounce-gentle"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-accent rounded-full opacity-40 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <section className="mb-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">My Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide my work and define my approach to software development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className={`glass-card p-6 text-center hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in stagger-${index + 1}`}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-20 animate-fade-in">
            <div className="glass-card p-12 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on interesting projects. 
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold glow-on-hover transition-all duration-300 inline-flex items-center justify-center"
                >
                  Get In Touch
                </a>
                <a 
                  href="/projects"
                  className="px-8 py-3 glass-card border border-primary/20 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  View My Work
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

export default About;