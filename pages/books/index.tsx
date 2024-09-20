import BookItem from "@/components/Book/BookItem";
import BookOverview from "@/components/Book/BookOverview";
import Button from "@/components/General/Buttons/Button";
import Header from "@/components/Header/Header";
import { getAllBooks } from "@/services/bookservice";
import React, { useState } from "react";
import useSWR from "swr";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const getBooks = async () => {
  const response = await getAllBooks();
  const data = await response.json();
  return { data };
};

const BooksPage: React.FC = () => {
  const [isListView, setIsListView] = useState(false);

  const { data, error, isLoading } = useSWR("api/book/all", getBooks);
  const toggleView = () => {
    setIsListView(!isListView);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <Header></Header>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-5xl m-auto">
          <div className="mb-5 mt-10 ">
            <button
              onClick={toggleView}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              {isListView ? "Switch to Grid View" : "Switch to List View"}
            </button>
          </div>
          {data?.data.books?.length < 1 && (
            <h1 className="text-center text-red-700 text-2xl p-5">
              No books found
            </h1>
          )}
          {
            <BookOverview
              isListView={isListView}
              error={error}
              books={data?.data.content}
              toggleView={toggleView}
            ></BookOverview>
          }
          <div className="pt-10 flex justify-center items-center space-x-4 h-full">
            {data?.data.page.number > 0 && (
              <Button handleButtonClick={handleButtonClick} label="">
                <ArrowBackIcon />
              </Button>
            )}
            {data && (
              <>
                <Button
                  handleButtonClick={handleButtonClick}
                  label="1"
                ></Button>
                <Button
                  handleButtonClick={handleButtonClick}
                  label={data.data.page.totalPages}
                ></Button>
                <Button handleButtonClick={handleButtonClick} label="">
                  <ArrowForwardIcon />
                </Button>
              </>
            )}
          </div>
        </div>
        <svg data-testid="ArrowForward"></svg>
      </div>
    </div>
  );
};

export default BooksPage;
