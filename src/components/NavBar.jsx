// src/components/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold">Browse</div>
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="/" className="hover:text-blue-600">About</Link>
                    <Link to="/events" className="hover:text-blue-600">Events</Link>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-4 p-4">
                        <a href="#about" className="hover:text-blue-600">About</a>
                        <a href="#events" className="hover:text-blue-600">Events</a>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
