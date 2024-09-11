export const getAllBooks = async () => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + "/book/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
}