export const getAllBooks = async (page: string) => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + "/book/all?page=" + page +"&size=25", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
}