import React from 'react';
import '../index.css'

const Navbar = () => {
    return (
        <nav className="bg-blue-900 text-white p-4 flex flex-wrap justify-between items-center">
            <div className="text-2xl font-bold">
                <span className="text-gray-300">B</span>ROWSE
            </div>
            <div className="space-x-4 mt-2 md:mt-0">
                <a href="#about" className="hover:text-gray-400">About</a>
                <a href="#events" className="hover:text-gray-400">Events</a>
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
                    Register
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
