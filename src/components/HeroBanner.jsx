
import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = ({ title, subtitle, ctaText, ctaLink, imageSrc }) => {
  return (
    <div className="hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
            <p className="text-xl text-gray-500 max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to={ctaLink} 
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
              >
                {ctaText}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                to="/learn-more" 
                className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={imageSrc || "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} 
                 alt="Healthy food" 
                 className="rounded-lg shadow-xl animate-fade-in" 
                 style={{animationDelay: '0.3s'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
