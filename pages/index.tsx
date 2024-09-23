import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header/Header";

import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
    return (
      <div>
        <Header></Header>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Open-Source Book Sharing Platform</h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-8">
                This is an open-source platform where you can share and lend books with anyone you know. 
                Feel free to add your books and let your friends borrow them!
            </p>
            <div className="flex space-x-4">
                <Link href="/books" className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition duration-300">
                    View Books
                </Link>
                <Link href="/addBook" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
                    Add a Book
                </Link>
            </div>
        </div>
        </div>
    );
};

export default HomePage;
