import React from 'react';
import Quiz from '../assets/quiz.jpg'
const EventCard = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex max-w-6xl mx-auto">
        <img
          src={Quiz}
          alt="Gaming Event"
          className="w-1/2 h-auto object-cover"
        />
        <div className="p-8 flex flex-col justify-between w-1/2">
          <div>
            <h2 className="text-4xl font-bold mb-6">Life Extension</h2>
            <p className="text-lg mb-8">
              The rise of gaming has sparked a massive wave of interest and now
              hundreds of gamers are participating in the craze. This event offers a
              unique opportunity for gamers to polish their abilities and challenge
              themselves against top-tier talent in college.
            </p>
          </div>
          <button className="bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-700">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
