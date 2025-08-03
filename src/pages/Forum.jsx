// src/pages/Forum.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Forum = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [newPostVisible, setNewPostVisible] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  
  const categories = [
    { id: 'popular', name: 'Popular' },
    { id: 'recipes', name: 'Recipe Sharing' },
    { id: 'tips', name: 'Nutrition Tips' },
    { id: 'support', name: 'Support & Motivation' },
    { id: 'progress', name: 'Progress Stories' }
  ];
  
  const posts = [
    {
      id: 1,
      title: 'How to stay motivated during weight loss plateau?',
      author: 'Mr.Fit',
      avatar: 'https://i.pinimg.com/736x/e9/9f/64/e99f6475d7821a4e854d404637e6afeb.jpg',
      category: 'support',
      content: 'I\'ve been stuck at the same weight for 3 weeks now despite following my meal plan. Any advice on how to overcome this plateau?',
      likes: 24,
      comments: 8,
      date: '2 days ago',
      popular: true
    },
    {
      id: 2,
      title: 'My favorite high-protein breakfast recipes',
      author: 'FitnessFan',
      avatar: 'https://i.pinimg.com/736x/e9/9f/64/e99f6475d7821a4e854d404637e6afeb.jpg',
      category: 'recipes',
      content: 'I\'ve compiled a list of my top 5 high-protein breakfasts that keep me full until lunch. Would love to hear your favorites too!',
      likes: 36,
      comments: 15,
      date: '5 days ago',
      popular: true
    },
    {
      id: 3,
      title: 'Lost 20kg in 6 months - Here\'s what worked for me',
      author: 'HealthyLife',
      avatar: 'https://i.pinimg.com/736x/e9/9f/64/e99f6475d7821a4e854d404637e6afeb.jpg',
      category: 'progress',
      content: 'After struggling with my weight for years, I finally found a sustainable approach. Here\'s my journey and the lessons I learned along the way.',
      likes: 89,
      comments: 42,
      date: '1 week ago',
      popular: true
    },
    {
      id: 4,
      title: 'Understanding macros: A beginner\'s guide',
      author: 'NutritionNerd',
      avatar: 'https://i.pinimg.com/736x/e9/9f/64/e99f6475d7821a4e854d404637e6afeb.jpg',
      category: 'tips',
      content: 'Confused about macros? Let me break it down for you in simple terms and explain how to adjust them for your specific goals.',
      likes: 56,
      comments: 23,
      date: '3 days ago',
      popular: true
    },
    {
      id: 5,
      title: 'Quick and easy meal prep ideas for busy professionals',
      author: 'WorkingFoodie',
      avatar: 'https://i.pinimg.com/736x/e9/9f/64/e99f6475d7821a4e854d404637e6afeb.jpg',
      category: 'recipes',
      content: 'As someone who works 50+ hours a week, I\'ve developed some efficient meal prep strategies that save me time without sacrificing nutrition.',
      likes: 45,
      comments: 17,
      date: '4 days ago',
      popular: false
    },
    {
      id: 6,
      title: 'How to properly track your water intake',
      author: 'HydrationHero',
      avatar: 'https://i.pinimg.com/736x/e9/9f/64/e99f6475d7821a4e854d404637e6afeb.jpg',
      category: 'tips',
      content: 'Staying hydrated is crucial for health and weight management. Here are some practical tips to ensure you\'re getting enough water throughout the day.',
      likes: 28,
      comments: 12,
      date: '6 days ago',
      popular: false
    },
  ];
  
  const filteredPosts = posts.filter(post => 
    activeCategory === 'popular' ? post.popular : post.category === activeCategory
  );
  
  const handleSubmitPost = (e) => {
    e.preventDefault();
    // Logic to submit new post would go here
    alert('Post submitted successfully! (This is a dummy action)');
    setPostTitle('');
    setPostContent('');
    setNewPostVisible(false);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">Community Forum</h1>
          <button 
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={() => setNewPostVisible(!newPostVisible)}
          >
            {newPostVisible ? 'Cancel' : 'New Post'}
          </button>
        </div>
        
        {newPostVisible && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
            <form onSubmit={handleSubmitPost}>
              <div className="mb-4">
                <label htmlFor="post-title" className="block text-gray-700 font-medium mb-2">Title</label>
                <input 
                  type="text" 
                  id="post-title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="post-category" className="block text-gray-700 font-medium mb-2">Category</label>
                <select 
                  id="post-category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select a category</option>
                  {categories.filter(cat => cat.id !== 'popular').map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="post-content" className="block text-gray-700 font-medium mb-2">Content</label>
                <textarea 
                  id="post-content"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 min-h-32"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Post
              </button>
            </form>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeCategory === category.id ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600 hover:text-green-600'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="font-medium">{post.author}</h3>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex space-x-4">
                  <button className="flex items-center hover:text-green-600">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                    </svg>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center hover:text-green-600">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <span>{post.comments}</span>
                  </button>
                </div>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  {categories.find(cat => cat.id === post.category)?.name || post.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Forum;