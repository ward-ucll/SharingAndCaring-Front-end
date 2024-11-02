import BookOverview from "@/components/Book/BookOverview";
import Header from "@/components/Header/Header";
import { Book } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

const searchText: React.FC = () => {
  const [isListView, setIsListView] = useState(false);

  const router = useRouter();
  const { searchText } = router.query;

  const fetchSearchedBooks = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/book/search?searchText=" + searchText,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return { data };
  };

  const { data, isLoading, error } = useSWR(
    searchText ? "api/book/search" : null,
    fetchSearchedBooks
  );
  const toggleView = () => {
    setIsListView(!isListView);
  };

  
  return (
    <>
      <Header></Header>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="mb-5 mt-10 ">
          <button
            onClick={toggleView}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            {isListView ? "Switch to Grid View" : "Switch to List View"}
          </button>
        </div>
        <div>
            
          <BookOverview
            isListView={isListView}
            error={error}
            books={data?.data.content}
            toggleView={toggleView}
          ></BookOverview>
        </div>
      </div>
    </>
  );
};

export default searchText;
