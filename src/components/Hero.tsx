import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 slide-in-bottom">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium animate-fade-in stagger-1">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in stagger-2">
                <span className="gradient-text">Harsh Sood</span>
              </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary animate-fade-in stagger-3">
                Full Stack Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in stagger-4">
              Website Developer with 2 years of hands-on experience in designing dynamic websites 
              and web applications. Proficient in various technologies for Website Development. 
              Committed to continuous learning and embracing new technologies for personal growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-4">
              <Button size="lg" asChild className="glow-on-hover bg-gradient-primary border-0 shadow-primary">
                <a href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="glow-on-hover">
                <a href="/Resume_Harsh_Sood.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in stagger-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">13+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110 animate-glow"></div>
              
              {/* Profile image */}
              <div className="relative glass-card p-2 rounded-full">
                <img
                  src={profilePhoto}
                  alt="Harsh Sood"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full opacity-60 animate-bounce-gentle"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-accent rounded-full opacity-40 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;