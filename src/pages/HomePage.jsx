import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const HomePage = () => {
  // Mock user data
  const user = {
    name: 'USER',
    avatar: 'https://i.pinimg.com/originals/54/72/d1/5472d1b09d3d724228109d381d617326.jpg',
    dailyCalories: 2100,
    dailyProtein: 150,
    dailyCarbs: 210,
    dailyFat: 70,
    waterIntake: 2.5,
    lastWeight: 78.5,
    streak: 7,
  };

  // Dashboard cards
  const dashboardCards = [
    {
      title: 'My Diet Plan',
      description: 'View and adjust your personalized diet plan based on your nutritional goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      link: '/diet-planner',
    },
    {
      title: 'BMI Calculator',
      description: 'Calculate your Body Mass Index and track changes over time.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: '/bmi',
    },
    {
      title: 'Weekly Progress',
      description: 'Track your progress and see how you\'re doing against your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      link: '/progress',
    },
    {
      title: 'Recipes',
      description: 'Discover delicious recipes that fit your dietary preferences and nutrition goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: '/recipes',
    },
    {
      title: 'Community Forum',
      description: 'Connect with others, share tips, ask questions, and stay motivated.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      link: '/forum',
    },
    {
      title: 'Nutrition Blog',
      description: 'Read the latest articles on nutrition, health tips, and success stories.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      link: '/blog',
    },
  ];

  // Recent recipes
  const recentRecipes = [
    {
      title: 'High-Protein Breakfast Bowl',
      description: 'Start your day with this protein-packed breakfast bowl featuring Greek yogurt, nuts, and berries.',
      imageSrc: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/recipes/high-protein-breakfast',
      tags: ['Breakfast', 'High-Protein'],
    },
    {
      title: 'Mediterranean Lunch Salad',
      description: 'A nutrient-rich Mediterranean salad with chickpeas, feta, and olive oil dressing.',
      imageSrc: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/recipes/mediterranean-salad',
      tags: ['Lunch', 'Vegetarian'],
    },
    {
      title: 'Lean Protein Dinner Plate',
      description: 'Grilled chicken with roasted vegetables and quinoa for a balanced dinner.',
      imageSrc: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/recipes/lean-protein-dinner',
      tags: ['Dinner', 'High-Protein'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center mb-10">
          <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}</h1>
            <p className="text-gray-600">Keep up the good work! You've been consistent for {user.streak} days.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Daily Calories</h3>
            <div className="flex items-end">
              <span className="text-2xl font-bold text-gray-900">{user.dailyCalories}</span>
              <span className="text-gray-500 ml-1">kcal</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">1,470 of 2,100 consumed</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Protein</h3>
            <div className="flex items-end">
              <span className="text-2xl font-bold text-gray-900">{user.dailyProtein}</span>
              <span className="text-gray-500 ml-1">g</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">90 of 150 consumed</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Carbs</h3>
            <div className="flex items-end">
              <span className="text-2xl font-bold text-gray-900">{user.dailyCarbs}</span>
              <span className="text-gray-500 ml-1">g</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">168 of 210 consumed</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Fat</h3>
            <div className="flex items-end">
              <span className="text-2xl font-bold text-gray-900">{user.dailyFat}</span>
              <span className="text-gray-500 ml-1">g</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">35 of 70 consumed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Meal Plan</h2>
            <div className="bg-white rounded-xl shadow-sm divide-y">
              <div className="p-4 flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-gray-500">Breakfast</span>
                  <h3 className="font-medium">Greek Yogurt with Berries and Granola</h3>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span>
              </div>
              
              <div className="p-4 flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-gray-500">Morning Snack</span>
                  <h3 className="font-medium">Apple with Almond Butter</h3>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span>
              </div>
              
              <div className="p-4 flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-gray-500">Lunch</span>
                  <h3 className="font-medium">Grilled Chicken Salad with Avocado</h3>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-4 flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-gray-500">Afternoon Snack</span>
                  <h3 className="font-medium">Protein Shake with Banana</h3>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-4 flex justify-between items-center">
                <div>
                  <span className="text-sm font-medium text-gray-500">Dinner</span>
                  <h3 className="font-medium">Baked Salmon with Quinoa and Roasted Vegetables</h3>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Link to="/diet-planner" className="text-primary hover:text-primary/80 font-medium flex items-center">
                View Full Meal Plan
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Daily Progress</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="mb-6">
                <h3 className="text-gray-500 text-sm font-medium mb-2">Water Intake</h3>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-xl font-bold text-gray-900">1.5/2.5</div>
                    <div className="text-xs text-gray-500">Liters</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-gray-500 text-sm font-medium mb-2">Weight Tracking</h3>
                <div className="flex items-center">
                  <div className="text-xl font-bold text-gray-900">{user.lastWeight} kg</div>
                  <div className="ml-2 text-xs text-green-500 flex items-center font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    0.5 kg
                  </div>
                </div>
                <div className="text-xs text-gray-500">Last updated: 2 days ago</div>
              </div>
              
              <div>
                <h3 className="text-gray-500 text-sm font-medium mb-2">Streak</h3>
                <div className="flex items-center">
                  <div className="text-xl font-bold text-gray-900">{user.streak} days</div>
                  <div className="ml-2 text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-gray-500">Keep going!</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dashboardCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
                  {card.icon}
                </div>
                <h3 className="font-bold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recipe Recommendations</h2>
            <Link to="/recipes" className="text-primary hover:text-primary/80 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentRecipes.map((recipe, index) => (
              <Card
                key={index}
                title={recipe.title}
                description={recipe.description}
                imageSrc={recipe.imageSrc}
                link={recipe.link}
                tags={recipe.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
