// src/components/ImageWithCaption.js
import React from 'react';
import TempImage from '../assets/temp.jpeg'
const OrganizedBox = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm mx-auto hover:relative hover:bottom-3">
            <img
                src={TempImage}
                alt="Department of Computer Science and Engineering"
                className="rounded-t-lg w-full"
            />
            <div className="bg-gray-900 p-4 rounded-b-lg text-center">
                <p className="text-blue-400 font-medium">
                    Department of Computer Science and Engineering (and AI & ML)
                </p>
            </div>
        </div>
    );
}

export default OrganizedBox;
