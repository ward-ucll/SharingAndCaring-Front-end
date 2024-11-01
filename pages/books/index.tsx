import BookItem from "@/components/Book/BookItem";
import BookOverview from "@/components/Book/BookOverview";
import Button from "@/components/General/Buttons/Button";
import Header from "@/components/Header/Header";
import { getAllBooks } from "@/services/bookservice";
import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BooksPage: React.FC = () => {
  const [isListView, setIsListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const getBooks = async () => {
    const pageToLoad = currentPage;
    const response = await getAllBooks(String(currentPage));
    const data = await response.json();
    return { data };
  };

  const { data, error, isLoading } = useSWR("api/book/all", getBooks);
  const toggleView = () => {
    setIsListView(!isListView);
  };

  useEffect(() => {
    mutate("api/book/all", { data: undefined  });
    window.scrollTo(0, 0);
    mutate("api/book/all");
  }, [currentPage]);

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
          {data?.data?.books?.length < 1 && (
            <h1 className="text-center text-red-700 text-2xl p-5">
              No books found
            </h1>
          )}
          {
            <BookOverview
              isListView={isListView}
              error={error}
              books={data?.data?.content}
              toggleView={toggleView}
            ></BookOverview>
          }
          <div className="pt-10 flex justify-center items-center space-x-4 h-full">
            {data?.data && (
              <>
                <Button
                  handleButtonClick={() => setCurrentPage(currentPage - 1)}
                  page={currentPage}
                  label=""
                  style="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
                  addStyle={
                    currentPage === 0 ? "opacity-20 pointer-events-none" : ""
                  }
                >
                  <ArrowBackIcon />
                </Button>
                <Button
                  handleButtonClick={() => setCurrentPage(0)}
                  page={currentPage}
                  label="1"
                  style=" bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
                ></Button>
                <Button
                  handleButtonClick={() =>
                    setCurrentPage(data.data.page.totalPages - 1)
                  }
                  page={currentPage}
                  label={String(currentPage + 1)}
                  style="text-black px-3 py-2"
                  addStyle=""
                ></Button>
                <Button
                  handleButtonClick={() =>
                    setCurrentPage(data.data.page.totalPages - 1)
                  }
                  page={currentPage}
                  label={data.data.page.totalPages}
                  style=" bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
                  addStyle=""
                ></Button>

                <Button
                  handleButtonClick={() => setCurrentPage(currentPage + 1)}
                  page={currentPage}
                  label=""
                  style=" bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
                  addStyle={
                    currentPage === data.data.page.totalPages - 1
                      ? "opacity-20 pointer-events-none"
                      : ""
                  }
                >
                  <ArrowForwardIcon />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
