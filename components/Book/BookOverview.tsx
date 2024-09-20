import { Book } from "@/types";
import React from "react";
import BookItem from "./BookItem";
import { Box, CircularProgress, Skeleton } from "@mui/material";
import GradientButton from "../General/Buttons/Button";
import Button from "../General/Buttons/Button";

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
      

          {error ? (
            // If there is an error, display the error message
              <h1 className="text-center  text-red-700">
                Error loading books. Please try again later.
              </h1>

          ) : books ? (
            <div
              className={
                isListView
                  ? "space-y-4"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              }
            > 
              {books.map((book, index) => (
                <BookItem key={index} book={book} isListView={isListView} />
              ))}
            </div>
          ) : (
            // If loading (no books and no error), show loading indicator
            <>
              <h1 className="text-center m-auto text-blue-700">
                Books loading, please wait a second!
              </h1>
              <Box className="text-center mt-7">
                <CircularProgress />
              </Box>
            </>
          )}
        </div>

  );
};
export default BookOverview;
