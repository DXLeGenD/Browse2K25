import React from 'react';

const EventDetails = (props) => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex max-w-5xl mx-auto">
        <img
          src={props.src}
          alt="Byte Surge"
          className="w-1/2 h-auto object-cover"
        />
        <div className="p-8 flex flex-col justify-between w-1/2">
          <div>
            <h2 className="text-4xl font-bold mb-4">{props.title}</h2>
            <div className="text-lg mb-4">
              <p className="font-bold">Rules:</p>
              <ul className="list-disc list-inside">
                <li>{props.rule1}</li>
                <li>{props.rule2}</li>
              </ul>
            </div>
            <p className="text-lg mb-4">
              <span className="font-bold">Venue:</span>{props.venue}</p>
            <p className="text-lg mb-4">
              <span className="font-bold">Registration fees:</span> ₹{props.prize}</p>
            <div className="text-lg mb-4">
              <p className="font-bold">Faculty Co-ordinator:</p>
              <p>{props.facultyName}</p>
              <p>Phone: {props.facultyNumber}</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-bold">Student Co-ordinators:</p>
              <p>{props.s1}</p>
              <p>Phone: {props.s1p}</p>
              <p>{props.s2}</p>
              <p>Phone: {props.s2p}</p>
            </div>
          </div>
          <button className="bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-700 mt-4">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
