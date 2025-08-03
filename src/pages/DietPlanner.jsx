
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const DietPlanner = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activityLevel: 'moderate',
    goal: 'maintain',
    dietType: 'balanced',
    preferences: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      lowCarb: false,
      keto: false,
    },
    allergies: [],
    excludeIngredients: '',
  });
  
  const [dietPlan, setDietPlan] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        preferences: {
          ...formData.preferences,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleAllergiesChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (isChecked) {
      setFormData({
        ...formData,
        allergies: [...formData.allergies, value],
      });
    } else {
      setFormData({
        ...formData,
        allergies: formData.allergies.filter(allergy => allergy !== value),
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, this would send data to a backend and get personalized results
    // For this demo, we'll just simulate a response with sample meal plan
    
    const sampleDietPlan = {
      dailyCalories: formData.gender === 'male' ? 2500 : 2000,
      macros: {
        protein: formData.gender === 'male' ? 188 : 150,
        carbs: formData.gender === 'male' ? 250 : 200,
        fat: formData.gender === 'male' ? 83 : 67,
      },
      mealPlan: [
        {
          type: 'Breakfast',
          meals: [
            {
              name: 'Greek Yogurt with Berries and Honey',
              calories: 350,
              protein: 20,
              carbs: 40,
              fat: 10,
              image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Avocado Toast with Eggs',
              calories: 420,
              protein: 18,
              carbs: 35,
              fat: 22,
              image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Protein Smoothie Bowl',
              calories: 380,
              protein: 25,
              carbs: 45,
              fat: 12,
              image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
          ],
        },
        {
          type: 'Lunch',
          meals: [
            {
              name: 'Grilled Chicken Salad',
              calories: 450,
              protein: 35,
              carbs: 25,
              fat: 20,
              image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Quinoa Bowl with Roasted Vegetables',
              calories: 420,
              protein: 15,
              carbs: 60,
              fat: 12,
              image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Turkey and Avocado Wrap',
              calories: 480,
              protein: 28,
              carbs: 40,
              fat: 22,
              image: 'https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
          ],
        },
        {
          type: 'Dinner',
          meals: [
            {
              name: 'Baked Salmon with Sweet Potato',
              calories: 520,
              protein: 40,
              carbs: 30,
              fat: 25,
              image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Stir Fry with Brown Rice',
              calories: 480,
              protein: 25,
              carbs: 60,
              fat: 15,
              image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Chicken with Roasted Vegetables',
              calories: 550,
              protein: 45,
              carbs: 30,
              fat: 22,
              image: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
          ],
        },
        {
          type: 'Snacks',
          meals: [
            {
              name: 'Greek Yogurt with Berries',
              calories: 150,
              protein: 15,
              carbs: 12,
              fat: 5,
              image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Apple with Almond Butter',
              calories: 200,
              protein: 5,
              carbs: 25,
              fat: 10,
              image: 'https://i.pinimg.com/736x/a4/66/0a/a4660a0373260f0681241cf8b7908d81.jpg',
            },
            {
              name: 'Protein Bar',
              calories: 220,
              protein: 20,
              carbs: 22,
              fat: 8,
              image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
          ],
        },
      ],
      tips: [
        'Stay hydrated by drinking at least 8 glasses of water daily.',
        'Try to eat every 3-4 hours to maintain stable energy levels.',
        'Include a source of protein with each meal to support muscle maintenance.',
        'Choose complex carbohydrates over simple sugars for sustained energy.',
        'Incorporate healthy fats like avocados, nuts, and olive oil into your diet.',
      ],
    };
    
    // Adjust meal plan based on dietary preferences
    if (formData.preferences.vegetarian) {
      sampleDietPlan.mealPlan[1].meals[0] = {
        name: 'Mediterranean Quinoa Salad',
        calories: 380,
        protein: 12,
        carbs: 45,
        fat: 18,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      };
      
      sampleDietPlan.mealPlan[2].meals[0] = {
        name: 'Stuffed Bell Peppers with Quinoa',
        calories: 420,
        protein: 15,
        carbs: 60,
        fat: 15,
        image: 'https://i.pinimg.com/736x/4c/11/a7/4c11a7fb9432f901cb221cbf41e4e7fc.jpg',
      };
    }
    
    if (formData.preferences.vegan) {
      sampleDietPlan.mealPlan[0].meals[0] = {
        name: 'Overnight Oats with Fruits and Nuts',
        calories: 350,
        protein: 12,
        carbs: 52,
        fat: 10,
        image: 'https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      };
      
      sampleDietPlan.mealPlan[2].meals[0] = {
        name: 'Buddha Bowl with Tofu',
        calories: 480,
        protein: 20,
        carbs: 65,
        fat: 18,
        image: 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      };
    }
    
    setDietPlan(sampleDietPlan);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Personalized Diet Planner</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a customized meal plan based on your nutritional requirements, dietary preferences, and health goals.
          </p>
        </div>
        
        {dietPlan ? (
          <div className="space-y-10 animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Your Personalized Diet Plan</h2>
                  <p className="text-gray-600">Based on your profile and preferences</p>
                </div>
                <button 
                  onClick={() => setDietPlan(null)}
                  className="mt-4 md:mt-0 bg-primary/10 text-primary px-4 py-2 rounded-md font-medium hover:bg-primary/20 transition-colors"
                >
                  Adjust Preferences
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <h3 className="text-gray-500 text-sm font-medium mb-1">Daily Calories</h3>
                  <div className="text-3xl font-bold text-gray-900">{dietPlan.dailyCalories}</div>
                  <div className="text-sm text-gray-500">kcal</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-gray-500 text-sm font-medium mb-3">Macronutrient Distribution</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Protein</span>
                        <span className="text-sm font-medium">{dietPlan.macros.protein}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Carbs</span>
                        <span className="text-sm font-medium">{dietPlan.macros.carbs}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Fat</span>
                        <span className="text-sm font-medium">{dietPlan.macros.fat}g</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-gray-500 text-sm font-medium mb-3">Nutrition Tips</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {dietPlan.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Meal Plan Sections */}
            {dietPlan.mealPlan.map((mealType, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl font-bold">{mealType.type}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mealType.meals.map((meal, mealIndex) => (
                    <div key={mealIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <img
                        src={meal.image}
                        alt={meal.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">{meal.name}</h3>
                        <div className="flex space-x-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold">{meal.calories}</div>
                            <div className="text-xs text-gray-500">kcal</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold">{meal.protein}g</div>
                            <div className="text-xs text-gray-500">protein</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold">{meal.carbs}g</div>
                            <div className="text-xs text-gray-500">carbs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold">{meal.fat}g</div>
                            <div className="text-xs text-gray-500">fat</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Create Your Personalized Diet Plan</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="18"
                      max="100"
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleChange}
                          className="form-radio text-primary focus:ring-primary"
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleChange}
                          className="form-radio text-primary focus:ring-primary"
                        />
                        <span className="ml-2">Female</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      min="40"
                      max="200"
                      step="0.1"
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                      value={formData.weight}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      min="140"
                      max="250"
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                      value={formData.height}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-1">
                      Activity Level
                    </label>
                    <select
                      id="activityLevel"
                      name="activityLevel"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                      value={formData.activityLevel}
                      onChange={handleChange}
                    >
                      <option value="sedentary">Sedentary (little or no exercise)</option>
                      <option value="light">Light (light exercise 1-3 days/week)</option>
                      <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
                      <option value="active">Active (hard exercise 6-7 days/week)</option>
                      <option value="veryActive">Very Active (very hard exercise & physical job)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                      Goal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                      value={formData.goal}
                      onChange={handleChange}
                    >
                      <option value="lose">Weight Loss</option>
                      <option value="maintain">Maintain Weight</option>
                      <option value="gain">Weight Gain</option>
                      <option value="muscle">Build Muscle</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="dietType" className="block text-sm font-medium text-gray-700 mb-1">
                      Diet Type
                    </label>
                    <select
                      id="dietType"
                      name="dietType"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                      value={formData.dietType}
                      onChange={handleChange}
                    >
                      <option value="balanced">Balanced (40% carbs, 30% protein, 30% fat)</option>
                      <option value="lowCarb">Low-Carb (20% carbs, 40% protein, 40% fat)</option>
                      <option value="highProtein">High-Protein (30% carbs, 40% protein, 30% fat)</option>
                      <option value="keto">Keto (5% carbs, 25% protein, 70% fat)</option>
                    </select>
                  </div>                                  
                </div>
                
                <div className="pt-5">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Generate Diet Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlanner;
