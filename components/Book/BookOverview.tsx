import { Book } from "@/types";
import React from "react";
import BookItem from "./BookItem";
import { Box, CircularProgress, Skeleton } from "@mui/material";

type Props = {
  isListView: boolean;
  toggleView: () => void;
  error: string;
  books: Book[];
};

const BookOverview: React.FC<Props> = ({
  isListView,
  books,
  error,
  toggleView,
}) => {
  return (
    <div>
      {<></>}
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-5xl m-auto">
          <div className="flex justify-between items-center mb-6 p-10 ">
            <button
              onClick={toggleView}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              {isListView ? "Switch to Grid View" : "Switch to List View"}
            </button>
          </div>
          {books?.length < 1 && (
            <h1 className="text-center text-red-700 text-2xl p-5">
              No books found
            </h1>
          )}

          <div
            className={
              isListView
                ? "space-y-4"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            }
          >
            {error ? (
              // If there is an error, display the error message
              <h1 className="text-center text-red-700">
                Error loading books. Please try again later.
              </h1>
            ) : books ? (
              // If there are books, render the book list
              books.map((book, index) => (
                <BookItem key={index} book={book} isListView={isListView} />
              ))
            ) : (
              // If loading (no books and no error), show loading indicator
              <>
                <h1 className="text-center text-blue-700">
                  Books loading, please wait a second!
                </h1>
                <Box className="m-auto mt-10" sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookOverview;
