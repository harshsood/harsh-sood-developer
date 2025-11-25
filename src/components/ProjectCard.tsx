import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl,
  featured = false 
}: ProjectCardProps) => {
  return (
    <div className={`group glass-card p-6 hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {githubUrl && githubUrl !== '#' && (
              <Button size="sm" variant="secondary" asChild className="glow-on-hover">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-muted/50 hover:bg-primary/20 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons (removed "View Code" per request) */}
      </div>
    </div>
  );
};

export default ProjectCard;