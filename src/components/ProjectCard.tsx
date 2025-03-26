
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  link?: string;
  className?: string;
}

const ProjectCard = ({ title, description, image, technologies = [], link, className }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "card-hover rounded-lg overflow-hidden bg-white shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered && "scale-110"
          )}
        />
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-sm py-2"
            >
              View Project
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 text-balance">{description}</p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-secondary rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
