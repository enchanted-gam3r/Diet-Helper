// src/pages/Blog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'recipes', name: 'Recipes' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'success', name: 'Success Stories' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: '10 Foods That Boost Your Metabolism',
      excerpt: 'Discover the top metabolism-boosting foods that can help you burn more calories throughout the day.',
      category: 'nutrition',
      author: 'Dr. Sarah Johnson',
      date: 'April 12, 2025',
      readTime: '5 min read',
      image: 'https://i.pinimg.com/736x/4c/c9/49/4cc94941d6df46fe1798a89b1b6ee444.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'How to Create a Balanced Meal Plan on a Budget',
      excerpt: 'Learn how to eat healthy without breaking the bank with these practical tips and budget-friendly meal ideas.',
      category: 'nutrition',
      author: 'Michael Chen',
      date: 'April 8, 2025',
      readTime: '8 min read',
      image: 'https://i.pinimg.com/736x/a9/da/eb/a9daeb724e9ae12cd7044c8db9990d3c.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'The Science Behind Intermittent Fasting',
      excerpt: 'Explore the research and benefits of intermittent fasting for weight management and metabolic health.',
      category: 'nutrition',
      author: 'Dr. Emma Wilson',
      date: 'April 5, 2025',
      readTime: '10 min read',
      image: 'https://dailytrust.com/wp-content/uploads/2020/05/fasting.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'My Journey to Losing 50 Pounds with NutriTrack',
      excerpt: 'Read about James\'s inspiring weight loss journey and how our app helped him achieve his health goals.',
      category: 'success',
      author: 'James Rodriguez',
      date: 'April 2, 2025',
      readTime: '7 min read',
      image: 'https://i.pinimg.com/736x/56/35/6b/56356beddb1d0ac54913b577b5678cf1.jpg',
      featured: false
    },
    {
      id: 5,
      title: '5 Quick HIIT Workouts to Boost Your Metabolism',
      excerpt: 'These high-intensity interval training routines can be completed in 20 minutes or less and help burn fat all day.',
      category: 'fitness',
      author: 'Tasha Williams',
      date: 'March 28, 2025',
      readTime: '6 min read',
      image: 'https://i.pinimg.com/736x/23/2a/93/232a93acfd9803c5cde42093788e099a.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Understanding Macros vs. Calories for Weight Loss',
      excerpt: 'Should you count macros or calories? Learn the differences and find out which approach might work better for you.',
      category: 'nutrition',
      author: 'Dr. Sarah Johnson',
      date: 'March 25, 2025',
      readTime: '9 min read',
      image: 'https://health.mil/-/media/Images/MHS/Infographics/July-2022/Performance-Nutrition/HPRC-Infographic_6-Micronutrients.ashx?h=735&w=1194&hash=DA0DF2F5FC5C0650B421DE0BE3A4A68AD8047422',
      featured: false
    },
    {
      id: 7,
      title: 'The Benefits of Mindful Eating Practices',
      excerpt: 'Discover how mindful eating can improve your relationship with food and support your health goals.',
      category: 'wellness',
      author: 'Lisa Chen',
      date: 'March 22, 2025',
      readTime: '7 min read',
      image: 'https://i.pinimg.com/736x/11/9d/25/119d2514c98fa5f0c827b95f92479fb6.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'Easy Meal Prep for Busy Professionals',
      excerpt: 'Save time and stay on track with your nutrition goals using these simple meal prep strategies.',
      category: 'recipes',
      author: 'Alex Thompson',
      date: 'March 18, 2025',
      readTime: '8 min read',
      image: 'https://i.pinimg.com/736x/b9/cd/bf/b9cdbfc115fe6ceac05ba04fc97bad86.jpg',
      featured: false
    }
  ];
  
  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'all' || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">Nutrition Blog</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 absolute right-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        {featuredPosts.length > 0 && searchTerm === '' && activeCategory === 'all' && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">{post.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{post.author}</span>
                      <div className="flex items-center">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.id ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No articles found matching your criteria.</p>
            <button 
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={() => {setActiveCategory('all'); setSearchTerm('');}}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-lg font-bold mt-2 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                    <span>{post.author}</span>
                    <div className="flex items-center">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-green-600 font-medium hover:text-green-700 flex items-center text-sm"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="py-2 px-4 bg-white text-gray-500 rounded-l-md border border-gray-300 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="py-2 px-4 bg-green-600 text-white border border-green-600">
              1
            </a>
            <a href="#" className="py-2 px-4 bg-white text-gray-500 border border-gray-300 hover:bg-gray-50">
              2
            </a>
            <a href="#" className="py-2 px-4 bg-white text-gray-500 border border-gray-300 hover:bg-gray-50">
              3
            </a>
            <a href="#" className="py-2 px-4 bg-white text-gray-500 rounded-r-md border border-gray-300 hover:bg-gray-50">
              Next
            </a>
          </nav>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-4">Stay up to date with our latest articles, recipes and nutrition tips delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
      
    </div>
  );
};

export default Blog;