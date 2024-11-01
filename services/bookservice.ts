import { Book } from "@/types";

export const getAllBooks = async (page: string) => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + "/book/all?page=" + page +"&size=25", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
}

export const addBook = async (book: any) => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + "/book/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
}