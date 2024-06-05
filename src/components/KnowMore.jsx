import React from 'react';

const EventDetails = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex max-w-5xl mx-auto">
        <img
          src="path_to_your_image.png"
          alt="Byte Surge"
          className="w-1/2 h-auto object-cover"
        />
        <div className="p-8 flex flex-col justify-between w-1/2">
          <div>
            <h2 className="text-4xl font-bold mb-4">Byte Surge</h2>
            <div className="text-lg mb-4">
              <p className="font-bold">Rules:</p>
              <ul className="list-disc list-inside">
                <li>2 members per team.</li>
                <li>Participants must code in either C or C++</li>
              </ul>
            </div>
            <p className="text-lg mb-4">
              <span className="font-bold">Venue:</span> Rohini Computer Center, CSE Dept
            </p>
            <p className="text-lg mb-4">
              <span className="font-bold">Registration fees:</span> ₹100.00
            </p>
            <div className="text-lg mb-4">
              <p className="font-bold">Faculty Co-ordinator:</p>
              <p>Dr. Srinivasa K</p>
              <p>Phone: 9845399083</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-bold">Student Co-ordinators:</p>
              <p>J Ekeshwar</p>
              <p>Phone: 9353753183</p>
              <p>Deekshit Vaishnav</p>
              <p>Phone: 9353582173</p>
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
