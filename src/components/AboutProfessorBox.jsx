import React from "react";

const PresidentBy = (Props) => {
    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto my-6">
            <h2 className="text-lg font-bold text-blue-300 mb-4">{Props.title}</h2>
            <p className="text-md mb-2">{Props.name}</p>
            <p className="text-sm text-gray-400">{Props.designation}</p>
            <p className="text-sm text-gray-400">{Props.place}</p>
        </div>
    );
};

export default PresidentBy;
