import React, { useState } from 'react';

const ProgressTracker = () => {
  // Sample data for the charts
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const [selectedWeek, setSelectedWeek] = useState('current');
  
  const weightData = {
    current: [78.5, 78.3, 78.0, 77.8, 77.5, 77.2, 77.0],
    previous: [79.2, 79.0, 78.8, 78.7, 78.5, 78.4, 78.5],
  };
  
  const caloriesData = {
    current: [2150, 2050, 2200, 2100, 2250, 2300, 2150],
    previous: [2300, 2250, 2400, 2350, 2250, 2500, 2400],
  };
  
  const proteinData = {
    current: [145, 150, 155, 140, 160, 165, 150],
    previous: [135, 140, 135, 130, 145, 150, 145],
  };
  
  const carbsData = {
    current: [220, 200, 230, 210, 225, 240, 215],
    previous: [240, 235, 250, 245, 230, 255, 245],
  };
  
  const fatData = {
    current: [65, 60, 70, 65, 75, 72, 68],
    previous: [75, 72, 80, 78, 70, 82, 75],
  };
  
  const waterData = {
    current: [1.8, 2.2, 2.5, 2.3, 2.0, 2.7, 2.5],
    previous: [1.5, 1.8, 2.0, 1.7, 1.9, 2.2, 2.0],
  };
  
  const currentData = {
    weight: weightData[selectedWeek],
    calories: caloriesData[selectedWeek],
    protein: proteinData[selectedWeek],
    carbs: carbsData[selectedWeek],
    fat: fatData[selectedWeek],
    water: waterData[selectedWeek],
  };
  
  // Calculate averages and differences
  const calculateAverage = (data) => {
    return data.reduce((sum, val) => sum + val, 0) / data.length;
  };
  
  const calculateChange = (current, previous) => {
    const currentAvg = calculateAverage(current);
    const previousAvg = calculateAverage(previous);
    return currentAvg - previousAvg;
  };
  
  const weightChange = calculateChange(weightData.current, weightData.previous);
  const caloriesChange = calculateChange(caloriesData.current, caloriesData.previous);
  const proteinChange = calculateChange(proteinData.current, proteinData.previous);
  const carbsChange = calculateChange(carbsData.current, carbsData.previous);
  const fatChange = calculateChange(fatData.current, fatData.previous);
  const waterChange = calculateChange(waterData.current, waterData.previous);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Weekly Progress Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your nutrition and health metrics over time to stay on track with your goals.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm mb-10 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-2xl font-bold">Your Weekly Progress</h2>
            
            <div className="mt-4 md:mt-0">
              <select
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              >
                <option value="current">Current Week</option>
                <option value="previous">Previous Week</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-gray-500 text-sm font-medium mb-1">Weight</div>
              <div className="text-2xl font-bold">{weightData.current[weightData.current.length - 1]} kg</div>
              <div className={`text-sm flex items-center justify-center ${weightChange < 0 ? 'text-green-500' : 'text-red-500'}`}>
                {weightChange < 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
                {Math.abs(weightChange).toFixed(1)} kg
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-gray-500 text-sm font-medium mb-1">Calories</div>
              <div className="text-2xl font-bold">{Math.round(calculateAverage(caloriesData.current))}</div>
              <div className={`text-sm flex items-center justify-center ${caloriesChange < 0 ? 'text-green-500' : 'text-red-500'}`}>
                {caloriesChange < 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
                {Math.abs(Math.round(caloriesChange))} kcal
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-gray-500 text-sm font-medium mb-1">Protein</div>
              <div className="text-2xl font-bold">{Math.round(calculateAverage(proteinData.current))}g</div>
              <div className={`text-sm flex items-center justify-center ${proteinChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {proteinChange > 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
                {Math.abs(Math.round(proteinChange))}g
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-gray-500 text-sm font-medium mb-1">Carbs</div>
              <div className="text-2xl font-bold">{Math.round(calculateAverage(carbsData.current))}g</div>
              <div className={`text-sm flex items-center justify-center ${carbsChange < 0 ? 'text-green-500' : 'text-red-500'}`}>
                {carbsChange < 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
                {Math.abs(Math.round(carbsChange))}g
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-gray-500 text-sm font-medium mb-1">Fat</div>
              <div className="text-2xl font-bold">{Math.round(calculateAverage(fatData.current))}g</div>
              <div className={`text-sm flex items-center justify-center ${fatChange < 0 ? 'text-green-500' : 'text-red-500'}`}>
                {fatChange < 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
                {Math.abs(Math.round(fatChange))}g
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-gray-500 text-sm font-medium mb-1">Water</div>
              <div className="text-2xl font-bold">{calculateAverage(waterData.current).toFixed(1)}L</div>
              <div className={`text-sm flex items-center justify-center ${waterChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {waterChange > 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
                {Math.abs(waterChange).toFixed(1)}L
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Weight Tracking</h2>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between px-4">
                {weekDays.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-primary rounded-t w-8 transition-all duration-300" 
                      style={{ 
                        height: `${(currentData.weight[index] - Math.min(...currentData.weight)) / 
                                (Math.max(...currentData.weight) - Math.min(...currentData.weight)) * 180 + 20}px` 
                      }}
                    ></div>
                    <div className="mt-2 text-xs text-gray-500">{day.substring(0, 3)}</div>
                    <div className="mt-1 text-xs font-medium">{currentData.weight[index]} kg</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="bg-primary/10 text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-colors">
                Log Weight
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Calorie Intake</h2>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between px-4">
                {weekDays.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-blue-500 rounded-t w-8 transition-all duration-300" 
                      style={{ 
                        height: `${(currentData.calories[index] - Math.min(...currentData.calories)) / 
                                (Math.max(...currentData.calories) - Math.min(...currentData.calories)) * 180 + 20}px` 
                      }}
                    ></div>
                    <div className="mt-2 text-xs text-gray-500">{day.substring(0, 3)}</div>
                    <div className="mt-1 text-xs font-medium">{currentData.calories[index]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <div className="text-sm text-gray-500">Weekly Average</div>
                <div className="font-medium">{Math.round(calculateAverage(currentData.calories))} kcal</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Goal</div>
                <div className="font-medium">2100 kcal</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Macronutrients Distribution</h2>
            <div className="h-64 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="mb-8">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Protein</span>
                    <span className="text-sm font-medium">{Math.round(calculateAverage(currentData.protein))}g / 150g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-blue-500 h-4 rounded-full" 
                      style={{ width: `${(calculateAverage(currentData.protein) / 150) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Carbs</span>
                    <span className="text-sm font-medium">{Math.round(calculateAverage(currentData.carbs))}g / 210g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-yellow-500 h-4 rounded-full" 
                      style={{ width: `${(calculateAverage(currentData.carbs) / 210) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Fat</span>
                    <span className="text-sm font-medium">{Math.round(calculateAverage(currentData.fat))}g / 70g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-red-500 h-4 rounded-full" 
                      style={{ width: `${(calculateAverage(currentData.fat) / 70) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              Based on your weekly average consumption
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Water Intake</h2>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between px-4">
                {weekDays.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-blue-400 rounded-t w-8 transition-all duration-300" 
                      style={{ 
                        height: `${(currentData.water[index] / 3) * 180 + 20}px` 
                      }}
                    ></div>
                    <div className="mt-2 text-xs text-gray-500">{day.substring(0, 3)}</div>
                    <div className="mt-1 text-xs font-medium">{currentData.water[index]}L</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <div className="text-sm text-gray-500">Weekly Average</div>
                <div className="font-medium">{calculateAverage(currentData.water).toFixed(1)}L</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Daily Target</div>
                <div className="font-medium">2.5L</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
          <h2 className="text-xl font-bold mb-6">Weekly Nutrition Summary</h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Diet Consistency</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Meals logged</span>
                    <span className="font-medium">18/21</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-xs text-right mt-1 text-gray-500">85% adherence</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Calorie Goal</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Weekly average</span>
                    <span className="font-medium">{Math.round(calculateAverage(currentData.calories))}/2100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${Math.round(calculateAverage(currentData.calories)) <= 2100 ? 'bg-primary' : 'bg-yellow-500'}`}
                      style={{ width: `${Math.min((calculateAverage(currentData.calories) / 2100) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-right mt-1 text-gray-500">
                    {Math.round(calculateAverage(currentData.calories)) <= 2100 
                      ? `${Math.round((calculateAverage(currentData.calories) / 2100) * 100)}% of target` 
                      : `${Math.round((calculateAverage(currentData.calories) / 2100) * 100 - 100)}% over target`
                    }
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Protein Goal</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Weekly average</span>
                    <span className="font-medium">{Math.round(calculateAverage(currentData.protein))}/150g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${Math.min((calculateAverage(currentData.protein) / 150) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-right mt-1 text-gray-500">
                    {Math.round((calculateAverage(currentData.protein) / 150) * 100)}% of target
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Weekly Insights</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You're consistently meeting your protein goal, which is great for muscle maintenance.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your weight is trending in the right direction, showing a loss of 1.5kg over the past 3 weeks.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Your water intake is slightly below target. Try increasing by at least 0.5L per day.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Your weekend calorie intake tends to be higher. Consider planning your weekend meals ahead of time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Download Weekly Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;