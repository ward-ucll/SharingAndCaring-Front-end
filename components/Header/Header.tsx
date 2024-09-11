import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="w-full h-16 flex fixed bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg z-50 items-center px-8">
            <nav className="w-full flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-extrabold text-white tracking-wider">
                        BrandLogo
                    </div>
                    <a href="/" className="text-white text-md font-medium hover:text-gray-200 transition duration-300">
                        Home
                    </a>
                    <Link href="/books" className="text-white text-md font-medium hover:text-gray-200 transition duration-300">books</Link>
                </div>

                {/* Zoekbalk */}
                <div className="relative w-1/3">
                    <input
                        type="text"
                        placeholder="Zoek iets..."
                        className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 shadow-sm"
                    />
                    <svg
                        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                        />
                    </svg>
                </div>

                {/* Login-knop */}
                <div>
                    <button className="bg-white text-indigo-500 px-5 py-2 rounded-full hover:bg-gray-100 transition duration-300 shadow-md">
                        Inloggen
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
