
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const BMICalculator = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    measurementSystem: 'metric',
  });
  
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateBMI = () => {
    let weight = parseFloat(formData.weight);
    let height = parseFloat(formData.height);
    
    if (formData.measurementSystem === 'imperial') {
      // Convert pounds to kg
      weight = weight * 0.453592;
      // Convert inches to meters
      height = height * 0.0254;
    } else {
      // Convert cm to m
      height = height / 100;
    }
    
    const bmi = weight / (height * height);
    setBmiResult(bmi.toFixed(1));
    
    // Determine BMI category
    if (bmi < 18.5) {
      setBmiCategory('Underweight');
      setBmiMessage('You may need to gain some weight through a balanced diet.');
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiCategory('Normal weight');
      setBmiMessage('You have a healthy weight. Keep up the good work!');
    } else if (bmi >= 25 && bmi < 30) {
      setBmiCategory('Overweight');
      setBmiMessage('You may benefit from losing some weight through diet and exercise.');
    } else {
      setBmiCategory('Obese');
      setBmiMessage('For health reasons, it is recommended that you lose weight. Consult with a healthcare professional.');
    }
    
    setShowResult(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  const resetForm = () => {
    setFormData({
      weight: '',
      height: '',
      age: '',
      gender: 'male',
      measurementSystem: 'metric',
    });
    setBmiResult(null);
    setBmiCategory('');
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BMI Calculator</h1>
          <p className="text-xl text-gray-600">
            Calculate your Body Mass Index (BMI) to determine if you're at a healthy weight
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-6">Enter Your Details</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Measurement System
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="measurementSystem"
                        value="metric"
                        checked={formData.measurementSystem === 'metric'}
                        onChange={handleChange}
                        className="form-radio text-primary focus:ring-primary"
                      />
                      <span className="ml-2">Metric (kg, cm)</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="measurementSystem"
                        value="imperial"
                        checked={formData.measurementSystem === 'imperial'}
                        onChange={handleChange}
                        className="form-radio text-primary focus:ring-primary"
                      />
                      <span className="ml-2">Imperial (lb, in)</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
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
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="age">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="2"
                    max="120"
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    placeholder="Years"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="height">
                    Height ({formData.measurementSystem === 'metric' ? 'cm' : 'inches'})
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    step="0.1"
                    min="1"
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    placeholder={formData.measurementSystem === 'metric' ? 'Centimeters' : 'Inches'}
                    value={formData.height}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="weight">
                    Weight ({formData.measurementSystem === 'metric' ? 'kg' : 'lb'})
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    step="0.1"
                    min="1"
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    placeholder={formData.measurementSystem === 'metric' ? 'Kilograms' : 'Pounds'}
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Calculate BMI
                  </button>
                  
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
            
            <div className="md:w-1/2 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold mb-6">Your Result</h2>
              
              {showResult ? (
                <div className="text-center">
                  <div className="w-36 h-36 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-6">
                    <div>
                      <div className="text-4xl font-bold text-gray-900">{bmiResult}</div>
                      <div className="text-gray-500">BMI</div>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "text-xl font-bold mb-2",
                    { 
                      'text-yellow-600': bmiCategory === 'Underweight',
                      'text-green-600': bmiCategory === 'Normal weight',
                      'text-orange-600': bmiCategory === 'Overweight',
                      'text-red-600': bmiCategory === 'Obese'
                    }
                  )}>
                    {bmiCategory}
                  </div>
                  
                  <p className="text-gray-600 mb-6">{bmiMessage}</p>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <h3 className="font-bold mb-2">BMI Categories:</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span>Underweight</span>
                        <span className="text-yellow-600 font-medium">&lt; 18.5</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Normal weight</span>
                        <span className="text-green-600 font-medium">18.5 - 24.9</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Overweight</span>
                        <span className="text-orange-600 font-medium">25 - 29.9</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Obesity</span>
                        <span className="text-red-600 font-medium">&gt; 30</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    Note: BMI is a general indicator and doesn't account for factors like muscle mass, bone density, and body composition.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-6">
                    <div className="text-gray-500">No data</div>
                  </div>
                  <p className="text-gray-600">
                    Fill in your details and click "Calculate BMI" to see your result.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Understanding BMI</h2>
          <p className="text-gray-600 mb-4">
            Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in meters squared.
          </p>
          <p className="text-gray-600 mb-4">
            BMI is an inexpensive and easy-to-perform method of screening for weight categories that may lead to health problems. However, BMI is not diagnostic and does not account for differences in body composition.
          </p>
          <p className="text-gray-600">
            For a more comprehensive assessment of your health, it's recommended to consult with a healthcare professional who can consider other factors such as waist circumference, muscle mass, and overall lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
