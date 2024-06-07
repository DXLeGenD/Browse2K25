import React from 'react';
import { Link } from 'react-router-dom';
const EventCard = (props) => {
  return (
    <div className="bg-gray-800 mt-14 text-white rounded-lg shadow-lg overflow-hidden max-w-6xl flex mx-auto flex-wrap">
      <img
        src={props.src}
        alt="Gaming Event"
        className="w-1/2 h-auto object-cover"
      />
      <div className="p-8 flex flex-col justify-between w-1/2">
        <div>
          <h2 className="text-4xl font-bold mb-6">{props.title}</h2>
          <p className="text-lg mb-8">{props.desc}</p>
        </div>
        <Link to={props.href} className="bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-700">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
