import Header from "@/components/Header/Header";

import React, { useState } from "react";
import Link from "next/link";
import BookInputForm from "@/components/Book/BookInputFrom";
import { Snackbar } from "@mui/material";

const HomePage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Open-Source Book Sharing Platform
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          This is an open-source platform where you can share and lend books
          with anyone you know. Feel free to add your books and let your friends
          borrow them!
        </p>
        <div className="flex space-x-4">
          <Link
            href="/books"
            className="bg-indigo-500 text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            View Books
          </Link>
          <button
            onClick={openPopup}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
          >
            Add a Book
          </button>
        </div>
      </div>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000} // Dismiss after 3 seconds
        onClose={handleCloseSnackbar}
        message="Book added successfully!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto ">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <BookInputForm onClose={closePopup} setIsSnackbarOpen={setIsSnackbarOpen}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
