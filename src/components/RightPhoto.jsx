import React from 'react';
import Quiz from '../assets/quiz.jpg'
const EventCard = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex max-w-6xl mx-auto">
        
        <div className="p-8 flex flex-col justify-between w-1/2">
          <div>
            <h2 className="text-4xl font-bold mb-6">Technical Quiz</h2>
            <p className="text-lg mb-8">
            A quiz contest tests teams expertise in technology, programming, and technical concepts. Teams compete to showcase their understanding of programming languages, tools, and other aspects of the field.
            </p>
          </div>
          <button className="bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-700">
            Know More
          </button>
        </div>
        <img
          src={Quiz}
          alt="Gaming Event"
          className="w-1/2 h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default EventCard;
