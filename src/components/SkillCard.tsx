import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: LucideIcon;
  category: string;
}

const SkillCard = ({ name, level, icon: Icon, category }: SkillCardProps) => {
  return (
    <div className="glass-card p-6 group hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-lg bg-gradient-primary/10 group-hover:bg-gradient-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Proficiency</span>
          <span className="text-primary font-medium">{level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="h-2 rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;