import { addBook } from "@/services/Bookservice";
import React, { useState } from "react";

// Enum for languages (mapped to readable format)
const allLanguages = [
  "English", "Spanish", "French", "German", "Mandarin", "Hindi", "Japanese", "Korean", "Italian", 
  "Portuguese", "Russian", "Arabic", "Bengali", "Urdu", "Indonesian", "Malay", "Vietnamese", 
  "Thai", "Turkish", "Persian", "Polish", "Romanian", "Swahili", "Greek", "Hebrew", "Dutch", 
  "Czech", "Swedish", "Finnish", "Norwegian", "Danish", "Hungarian", "Tamil", "Telugu", "Marathi", 
  "Malayalam", "Punjabi", "Burmese", "Serbian", "Croatian", "Bosnian", "Bulgarian", "Slovak", 
  "Ukrainian", "Lithuanian", "Latvian", "Estonian", "Georgian", "Armenian", "Kazakh", "Uzbek", 
  "Azerbaijani", "Pashto", "Amharic", "Somali", "Zulu", "Xhosa", "Shona", "Maori", "Samoan", "Other"
];

interface BookInputFormProps {
  onClose: () => void;
}

const BookInputForm: React.FC<BookInputFormProps> = ({ onClose }) => {
  // State for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState(allLanguages);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitButtonText, setSubmitButtonText] = useState("Add Book");
  const [isbn, setIsbn] = useState("");

  // Error messages for form validation
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [imageurlError, setimageurlError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [isbnError, setIsbnError] = useState("");

  // Function to handle input change and filter the language list
  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setLanguage(input);

    // Filter the languages based on user input
    const matchingLanguages = allLanguages.filter((lang) =>
      lang.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredLanguages(matchingLanguages);
    setShowLanguagesDropdown(true);
  };

  // Function to handle the blur event, setting the language to "Other" if not in the list
  const handleLanguageBlur = () => {
    if (!allLanguages.some((lang) => lang.toLowerCase() === language.toLowerCase())) {
      setLanguage("Other");
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (title.trim() === "") {
      setTitleError("Title is required");
      isValid = false;
    } else {
      setTitleError("");
    }
    if (description.trim() === "") {
      setDescriptionError("Description is required");
      isValid = false;
    } else {
      setDescriptionError("");
    }
    if (imageurl.trim() === "") {
      setimageurlError("Image URL is required");
      isValid = false;
    } else {
      setimageurlError("");
    }
    if (author.trim() === "") {
      setAuthorError("Author is required");
      isValid = false;
    } else {
      setAuthorError("");
    }
    if (language.trim() === "") {
      setLanguageError("Language is required");
      isValid = false;
    } else {
      setLanguageError("");
    }
    if (isbn.trim() === "") {
      setIsbnError("ISBN is required");
      isValid = false;
    } else {
      const isbnRegex = /^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$/;
      if (!isbnRegex.test(isbn)) {
        setIsbnError("Invalid ISBN format. Please enter a valid 10 or 13-digit ISBN.");
        isValid = false;
      } else {
        setIsbnError("");
      }
    }

    return isValid;
  }

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const response = await addBook({ title, description, imageurl, author, language, isbn });
    const data = await response.json();
    if (!response.ok) {
      setErrorMessage(data.message);
      return;
    }
    onClose();  // Close the popup after submission
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg text-black">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add a new Book</h2>
      <div className="max-h-[70vh] overflow-y-auto p-3">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Book Title */}
          <div>
            <label htmlFor="title" className="block text-m font-medium">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-red-500 text-sm">{titleError}</p>
          </div>

          {/* Book Description */}
          <div>
            <label htmlFor="description" className="block text-m font-medium">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-red-500 text-sm">{descriptionError}</p>
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="imageurl" className="block text-m font-medium">Image URL</label>
            <input
              type="text"
              id="imageurl"
              value={imageurl}
              onChange={(e) => setimageurl(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-red-500 text-sm">{imageurlError}</p>
          </div>

          {imageurl && (
            <div className="flex justify-center mt-4">
              <img
                src={imageurl}
                alt="Book cover preview"
                className="max-h-48 rounded-md shadow-md"
              />
            </div>
          )}

          {/* Language */}
          <div>
            <label htmlFor="language" className="block text-m font-medium">Language</label>
            <input
              type="text"
              id="language"
              value={language}
              onChange={handleLanguageChange}
              onBlur={handleLanguageBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {filteredLanguages.length > 0 && language && showLanguagesDropdown && (
              <ul className="mt-2 border border-gray-300 rounded-md bg-white text-black max-h-48 overflow-y-auto">
                {filteredLanguages.map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {setLanguage(lang); setShowLanguagesDropdown(false)}}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
            <p className="text-red-500 text-sm">{languageError}</p>
          </div>

          {/* ISBN Input */}
          <div>
            <label htmlFor="isbn" className="block text-m font-medium">ISBN</label>
            <input
              type="text"
              id="isbn"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-red-500 text-sm">{isbnError}</p>
          </div>
          {/* Author Input */}
          <div>
            <label htmlFor="isbn" className="block text-m font-medium">Author</label>
            <input
              type="text"
              id="isbn"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-red-500 text-sm">{isbnError}</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
            {submitButtonText}
          </button>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookInputForm;
