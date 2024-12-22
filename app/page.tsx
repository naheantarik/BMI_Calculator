"use client";
import React, { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBmi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (weight === 0 || height === 0 || weight === null || height === null) {
      alert("Please enter a valid value");
    } else {
      const bmi = weight / ((height / 100) * (height / 100));
      setBmi(bmi.toFixed(2));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you have a normal weight");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  const reset = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-mono font-extrabold text-center text-gray-800 mb-6">
          BMI Calculator
        </h2>
        <form onSubmit={calculateBmi} className="space-y-6">
          <div className="flex flex-col gap-6">
            <input
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="number"
              placeholder="Enter Your Weight"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
            <input
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type="number"
              placeholder="Enter Your Height"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
            />
          </div>
          <div className="text-center flex justify-center gap-4 *:font-mono">
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200"
              type="submit"
            >
              Calculate BMI
            </button>
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200"
              type="button"
              onClick={reset}
            >
              Reset
            </button>
          </div>
          {bmi && (
            <div className="text-center mt-6 *:font-mono">
              <h3 className="text-2xl font-bold text-gray-800">
                Your BMI is: {bmi}
              </h3>
              <p className="text-gray-600 mt-2">{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
