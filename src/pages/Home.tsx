import React from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/Footer';
import { Code2, Palette, Database, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description:
        'Building dynamic websites and applications using PHP, Laravel, ReactJS, WordPress, and Shopify with responsive design.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Creating engaging and interactive web interfaces using HTML, CSS, and JavaScript for optimal user experience.'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and managing robust databases with SQL and MongoDB for scalable applications.'
    },
    {
      icon: Rocket,
      title: 'SEO Optimization',
      description:
        'Implementing on-page and off-page SEO strategies to improve organic search rankings and drive traffic.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="gradient-text">Practice</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development services to help bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`glass-card p-6 hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in stagger-${index + 1}`}
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-primary/10 mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Choose Me</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Experienced', description: '2+ years working with leading companies on diverse projects' },
              { title: 'Full-Stack Skills', description: 'Proficient in both frontend and backend development technologies' },
              { title: 'SEO Focused', description: 'Every project optimized for search engines and performance' }
            ].map((item, index) => (
              <div key={item.title} className={`glass-card p-6 text-center hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-fade-in stagger-${index + 1}`}>
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Let's collaborate to create something amazing. Whether you need a new website, web application, or SEO optimization, I'm here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="glow-on-hover bg-gradient-primary"><a href="/contact">Get In Touch</a></Button>
              <Button variant="outline" size="lg" asChild className="glow-on-hover"><a href="/projects">View My Work</a></Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
