import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LiveProjectCardProps {
  title: string;
  url: string;
  description: string;
  image: string;
}

const LiveProjectCard = ({ title, url, description, image }: LiveProjectCardProps) => {
  return (
    <div className="group relative glass-card overflow-hidden rounded-xl h-[400px] flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden h-64 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-foreground">
            Live
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Action Button */}
        <Button
          size="sm"
          className="w-full glow-on-hover bg-gradient-primary"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Website
          </a>
        </Button>
      </div>
    </div>
  );
};

export default LiveProjectCard;
