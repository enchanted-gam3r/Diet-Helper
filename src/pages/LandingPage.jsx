
import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import FeatureSection from '../components/FeatureSection';
import Card from '../components/Card';

const LandingPage = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Personalized Diet Plans",
      description: "Get customized nutrition plans based on your body type, goals, and dietary preferences."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      title: "Macro Tracking",
      description: "Easily track your carbs, fats, and proteins with our intuitive interface."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Progress Tracking",
      description: "Monitor your health journey with weekly tracking and visualized progress."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "BMI Assessment",
      description: "Calculate your BMI and get recommendations based on your health metrics."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Recipe Library",
      description: "Explore thousands of delicious, nutritious recipes that match your diet plan."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Community Support",
      description: "Join our community forum to share tips, ask questions, and stay motivated."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Weight Loss Success",
      content: "NutriTrack completely changed my approach to dieting. The personalized meal plans and macro tracking made all the difference in my weight loss journey.",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      content: "As someone focused on building muscle, the protein-focused meal plans have been fantastic. I've seen significant improvements in my strength and recovery.",
      avatar: "https://i.pravatar.cc/150?img=69"
    },
    {
      name: "Jessica Williams",
      role: "Busy Professional",
      content: "The meal prep suggestions and quick recipes have made healthy eating possible despite my hectic schedule. I've never felt better!",
      avatar: "https://i.pravatar.cc/150?img=47"
    }
  ];

  const blogPosts = [
    {
      title: "The Science Behind Macronutrients",
      description: "Learn how carbs, fats, and proteins affect your body and why balanced nutrition matters.",
      imageSrc: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/macronutrients",
      tags: ["Nutrition", "Science"]
    },
    {
      title: "Vegetarian Diets: Getting Enough Protein",
      description: "Discover plant-based protein sources that can help you meet your nutritional needs.",
      imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/vegetarian-protein",
      tags: ["Vegetarian", "Protein"]
    },
    {
      title: "Meal Prep Strategies for Busy Weeks",
      description: "Time-saving techniques to prepare healthy meals even with a packed schedule.",
      imageSrc: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "/blog/meal-prep",
      tags: ["Meal Prep", "Time-Saving"]
    }
  ];

  return (
    <div>
      <HeroBanner
        title="Your Personal Nutrition Journey Starts Here"
        subtitle="Discover the perfect balance of nutrition tailored just for you, based on your goals, preferences, and lifestyle."
        ctaText="Get Started"
        ctaLink="/register"
        imageSrc="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />

      <FeatureSection
        title="Nutrition Made Simple"
        subtitle="Everything you need to achieve your health goals through balanced nutrition"
        features={features}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how NutriTrack has helped people transform their relationship with food and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover nutrition tips, recipes, and success stories from our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                title={post.title}
                description={post.description}
                imageSrc={post.imageSrc}
                link={post.link}
                tags={post.tags}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="bg-white text-primary border border-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors inline-flex items-center justify-center"
            >
              View All Articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Nutrition Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have already improved their health with NutriTrack's personalized nutrition guidance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/register"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
