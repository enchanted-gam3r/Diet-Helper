
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Card = ({ 
  title, 
  description, 
  imageSrc, 
  link, 
  ctaText = "Learn More",
  tags = [],
  className = "", 
  imageClassName = "" 
}) => {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm overflow-hidden card-hover", className)}>
      {imageSrc && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className={cn("w-full h-full object-cover transition-transform duration-300 hover:scale-105", imageClassName)}
          />
        </div>
      )}
      <div className="p-6">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <Link 
            to={link} 
            className="text-primary hover:underline inline-flex items-center font-medium"
          >
            {ctaText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
