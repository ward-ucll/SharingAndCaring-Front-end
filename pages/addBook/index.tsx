import React, { useState, useEffect } from "react";

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

const BookInputForm = () => {
  // State for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState(allLanguages);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(true)

  // Function to handle input change and filter the language list
  const handleLanguageChange = (e: any) => {
    const input = e.target.value;
    setLanguage(input);
    
    // Filter the languages based on user input
    const matchingLanguages = allLanguages.filter((lang) =>
      lang.toLowerCase().includes(input.toLowerCase())
  );
  setFilteredLanguages(matchingLanguages);
  setShowLanguagesDropdown(true)
  };

  // Function to handle the blur event, setting the language to "Other" if not in the list
  const handleLanguageBlur = () => {
    if (!allLanguages.some((lang) => lang.toLowerCase() === language.toLowerCase())) {
      setLanguage("Other");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-black">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Input Form</h2>
      <form className="space-y-6">
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
        </div>

        {/* Book Description */}
        <div>
          <label htmlFor="description" className="block text-m font-medium ">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="imageUrl" className="block text-m font-medium ">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            
          />
        </div>

        {imageUrl && (
          <div className="flex justify-center mt-4">
            <img
              src={imageUrl}
              alt="Book cover preview"
              className="max-h-48 rounded-md shadow-md"
            />
          </div>
        )}

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
          {filteredLanguages.length > 0 && language && showLanguagesDropdown === true && (
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
        </div>

        <div>
          <label htmlFor="author" className="block text-m font-medium">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookInputForm;
