import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Recipes = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const recipeCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Desserts'];
  
  const recipes = [
    {
      id: 1,
      title: 'Greek Yogurt with Berries and Granola',
      category: 'Breakfast',
      image: 'https://i.pinimg.com/474x/8e/63/8b/8e638b3bcded8e4c302ea656947b57a7.jpg',
      time: '5 mins',
      calories: 320,
      protein: 18,
      carbs: 45,
      fat: 9,
      ingredients: ['Greek yogurt', 'Mixed berries', 'Granola', 'Honey'],
      featured: true
    },
    {
      id: 2,
      title: 'Grilled Chicken Salad with Avocado',
      category: 'Lunch',
      image: 'https://i.pinimg.com/474x/43/da/e5/43dae5a24ae573bbaea6f48b3deb8165.jpg',
      time: '20 mins',
      calories: 450,
      protein: 35,
      carbs: 15,
      fat: 28,
      ingredients: ['Chicken breast', 'Mixed greens', 'Avocado', 'Cherry tomatoes', 'Olive oil'],
      featured: true
    },
    {
      id: 3,
      title: 'Baked Salmon with Quinoa and Roasted Vegetables',
      category: 'Dinner',
      image: 'https://i.pinimg.com/736x/4c/43/a2/4c43a2ddb68dc4318a5a9442e45b26ad.jpg',
      time: '35 mins',
      calories: 520,
      protein: 42,
      carbs: 38,
      fat: 22,
      ingredients: ['Salmon fillet', 'Quinoa', 'Bell peppers', 'Zucchini', 'Olive oil', 'Lemon'],
      featured: true
    },
    {
      id: 4,
      title: 'Protein Shake with Banana',
      category: 'Snacks',
      image: 'https://i.pinimg.com/236x/2f/6f/ad/2f6fade5732e0dab80c86949e6a0b0e5.jpg',
      time: '5 mins',
      calories: 250,
      protein: 25,
      carbs: 20,
      fat: 5,
      ingredients: ['Protein powder', 'Banana', 'Almond milk', 'Ice cubes'],
      featured: false
    },
    {
      id: 5,
      title: 'Mediterranean Chickpea Bowl',
      category: 'Lunch',
      image: 'https://i.pinimg.com/236x/91/f7/67/91f7678c2de523c16cdcc1ecf85e4132.jpg',
      time: '15 mins',
      calories: 380,
      protein: 15,
      carbs: 50,
      fat: 12,
      ingredients: ['Chickpeas', 'Cucumber', 'Cherry tomatoes', 'Feta cheese', 'Olive oil', 'Lemon'],
      featured: false
    },
    {
      id: 6,
      title: 'Avocado Toast with Poached Egg',
      category: 'Breakfast',
      image: 'https://i.pinimg.com/474x/ac/47/02/ac470244b8624b5b5c68c5398c487192.jpg',
      time: '12 mins',
      calories: 340,
      protein: 14,
      carbs: 30,
      fat: 18,
      ingredients: ['Whole grain bread', 'Avocado', 'Egg', 'Red pepper flakes', 'Salt', 'Pepper'],
      featured: false
    },
  ];
  
  const filteredRecipes = recipes
    .filter(recipe => filter === 'all' || recipe.category === filter)
    .filter(recipe => 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">Healthy Recipes</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search recipes..."
              className="py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 absolute right-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setFilter('all')}
          >
            All Recipes
          </button>
          {recipeCategories.map(category => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${filter === category ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No recipes found matching your criteria.</p>
            <button 
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={() => {setFilter('all'); setSearchTerm('');}}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">{recipe.category}</span>
                    <span className="text-gray-500 text-sm">{recipe.time}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{recipe.calories} cal</span>
                    <span>{recipe.protein}g protein</span>
                    <span>{recipe.carbs}g carbs</span>
                    <span>{recipe.fat}g fat</span>
                  </div>
                  <Link 
                    to={`/recipes/${recipe.id}`} 
                    className="block w-full text-center py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

    </div>
  );
};

export default Recipes;