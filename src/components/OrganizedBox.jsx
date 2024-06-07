// src/components/ImageWithCaption.js
import React from 'react';
const OrganizedBox = (props) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm mx-auto hover:relative hover:bottom-3">
            <img
                src={props.src}
                alt="Department of Computer Science and Engineering"
                className="rounded-t-lg w-full h-1/4"
            />
            <div className="bg-gray-900 p-4 rounded-b-lg text-center">
                <p className="text-blue-400 font-medium">{props.title}</p>
            </div>
        </div>
    );
}

export default OrganizedBox;
