import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Download
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "soodharsh3@gmail.com",
      href: "mailto:soodharsh3@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8837613270",
      href: "tel:+918837613270"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/harshsood",
      username: "@harshsood"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      username: "Harsh Sood"
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? I'd love to hear about your ideas 
              and discuss how we can work together to bring them to life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            {/* Contact Information Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`glass-card p-8 text-center hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in stagger-${index + 1}`}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-primary/10 mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                  <div className="font-semibold text-lg">{item.value}</div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center">Connect With Me</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors duration-300">
                      <social.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{social.label}</div>
                      <div className="font-medium text-lg">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Work Experience Summary */}
            <div className="glass-card p-8 rounded-2xl mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center">Professional Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-sm text-primary font-semibold mb-1">11/2024 – Present</div>
                  <h4 className="text-lg font-bold mb-2">FullStack Developer</h4>
                  <p className="text-muted-foreground mb-2">Snapping Turtles Pvt. Ltd. - Greater Noida</p>
                  <p className="text-sm text-muted-foreground">
                    Developing dynamic websites and applications using PHP, ReactJS, WordPress, and Shopify. 
                    Implementing SEO strategies and analyzing website performance.
                  </p>
                </div>
                <div className="border-l-2 border-primary/50 pl-6">
                  <div className="text-sm text-primary/70 font-semibold mb-1">04/2024 – 10/2024</div>
                  <h4 className="text-lg font-bold mb-2">PHP Developer</h4>
                  <p className="text-muted-foreground mb-2">VRCYN - New Delhi</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-6">
                  <div className="text-sm text-primary/50 font-semibold mb-1">09/2023 - 04/2024</div>
                  <h4 className="text-lg font-bold mb-2">PHP Developer</h4>
                  <p className="text-muted-foreground mb-2">Digital Brand Crafters - Gurgaon</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-8 rounded-2xl mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-bold mb-1">M.C.A in Computer Application</h4>
                  <p className="text-muted-foreground mb-1">Lovely Professional University, Phagwara</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">2021 - 2023</span>
                    <span className="text-muted-foreground">CGPA: 8.0</span>
                  </div>
                </div>
                <div className="border-l-2 border-primary/50 pl-6">
                  <h4 className="text-lg font-bold mb-1">B.C.A in Computer Applications</h4>
                  <p className="text-muted-foreground mb-1">GGNIMT, Ludhiana</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary/70">2018 - 2021</span>
                    <span className="text-muted-foreground">CGPA: 8.4</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in">
              <div className="glass-card p-12 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5">
                <h2 className="text-3xl font-bold mb-4">Let's Start a Conversation</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you have a project in mind or just want to connect, feel free to reach out. 
                  I'm always open to discussing new opportunities and ideas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="glow-on-hover bg-gradient-primary">
                    <a href="mailto:soodharsh3@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="glow-on-hover">
                    <a href="/Resume_Harsh_Sood.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;