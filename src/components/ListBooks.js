import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";

export default function ListBooks() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios

      .get("https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a")
      .then((response) => {
        setBookList(response.data.items);
      })
      .catch((error) => console.log(error));
  }, [bookList]);

  return (
    <div>
      {bookList.map((item) => (
        <Book item={item} key={item.id}></Book>
      ))}
    </div>
  );
}
