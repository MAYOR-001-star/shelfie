import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const useBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used eithin a BooksProvider");
  }
  return context;
};


export default useBooks
