// src/pages/About.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Emily Chen',
      role: 'Founder & CEO',
      bio: 'Dr. Chen is a certified nutritionist with over 15 years of experience helping people achieve their health goals through personalized nutrition plans.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Technology',
      bio: 'Michael is a software engineer with a passion for creating technology that makes healthy living more accessible to everyone.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Williams',
      role: 'Chief Nutritionist',
      bio: 'Sarah specializes in creating balanced meal plans for various dietary needs and health conditions. She believes that good nutrition should be delicious.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Rodriguez',
      role: 'Fitness Director',
      bio: 'As a certified personal trainer, David helps our users complement their nutrition plans with appropriate exercise regimens for maximum results.',
      image: '/api/placeholder/300/300'
    }
  ];
  
  const testimonials = [
    {
      name: 'Jessica L.',
      text: 'NutriTrack changed my relationship with food completely. I\'ve lost 30 pounds and maintained it for over a year now!',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Robert T.',
      text: 'As someone with specific dietary requirements, I\'ve always struggled to find a meal tracking app that works for me. NutriTrack is perfectly customizable.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Amanda K.',
      text: 'The recipe suggestions and meal planning features save me so much time every week. Eating healthy has never been this easy!',
      image: '/api/placeholder/80/80'
    }
  ];
  
  const milestones = [
    {
      year: '2018',
      title: 'NutriTrack Founded',
      description: 'Started with a simple meal tracking app focused on accurate nutrition data.'
    },
    {
      year: '2019',
      title: 'Recipe Database Launch',
      description: 'Added over 1,000 healthy recipes to help users plan meals easily.'
    },
    {
      year: '2020',
      title: 'Community Forum Integration',
      description: 'Introduced community features to connect users for support and motivation.'
    },
    {
      year: '2022',
      title: 'AI Meal Recommendations',
      description: 'Implemented smart technology to suggest personalized meal plans based on user preferences and goals.'
    },
    {
      year: '2024',
      title: 'Mobile App Redesign',
      description: 'Completely revamped our mobile experience with intuitive features and improved tracking capabilities.'
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About NutriTrack</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're on a mission to help people make healthier food choices and achieve their wellness goals through personalized nutrition tracking and guidance.
            </p>
          </div>
        </section>
       
        
        {/* Our Values */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Scientific Accuracy</h3>
                <p className="text-gray-600">
                  We're committed to providing nutrition data that's backed by science, regularly updated, and verified by our team of nutrition experts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalization</h3>
                <p className="text-gray-600">
                  We believe that nutrition isn't one-size-fits-all. Our approach is tailored to individual needs, preferences, and health goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-600">
                  We foster a supportive community where users can share experiences, recipes, and motivate each other on their health journeys.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Milestones */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-green-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2"></div>
                    <div className="mx-auto md:mx-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold shadow-md">
                      {milestone.year}
                    </div>
                    <div className="md:w-1/2 pt-4 md:pt-0 px-4">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Join Us */}
        <section className="py-16 bg-green-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Ready to transform your relationship with food and take control of your health? Start your journey with NutriTrack today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
                Sign Up Free
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default About;