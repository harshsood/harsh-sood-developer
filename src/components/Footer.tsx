import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Harsh Sood</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              FullStack Developer specializing in PHP, Laravel, ReactJS, WordPress, and Shopify. 
              Building dynamic websites and web applications with 2+ years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:soodharsh3@gmail.com" className="hover:text-primary transition-colors">
                  soodharsh3@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+918837613270" className="hover:text-primary transition-colors">
                  +91-8837613270
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Noida, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/harshsood"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2 hover:bg-primary/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/harsh-sood"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-2 hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:soodharsh3@gmail.com"
                className="glass-card p-2 hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Harsh Sood. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
