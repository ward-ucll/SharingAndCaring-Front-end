import React from 'react';
import Link from 'next/link';
import SearchBar from '../General/SearchBar';

const Header: React.FC = () => {
    return (
        <header className="w-full h-16 flex fixed bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg z-50 items-center px-8">
            <nav className="w-full flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-extrabold text-white tracking-wider">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
                    </div>
                    <a href="/" className="text-white text-md font-medium hover:text-gray-200 transition duration-300">
                        Home
                    </a>
                    <Link href="/books" className="text-white text-md font-medium hover:text-gray-200 transition duration-300">books</Link>
                </div>

                {/* Zoekbalk */}
                <SearchBar></SearchBar>

                {/* Login-knop
                <div>
                    <button className="bg-white text-indigo-500 px-5 py-2 rounded-full hover:bg-gray-100 transition duration-300 shadow-md">
                        Inloggen
                    </button>
                </div> */}
            </nav>
        </header>
    );
};

export default Header;
