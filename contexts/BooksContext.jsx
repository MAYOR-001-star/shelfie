import { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
import useUser from "../hooks/useUser";
import { ID, Permission, Query, Role } from "appwrite";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const DATABASE_ID = "6926ca4a002d08d73d5c";
  const COLLECTION_ID = "books";

  const [books, setBooks] = useState([]);
  const { user } = useUser();

  // ---------------------------
  // Fetch all books for logged-in user
  // ---------------------------
  const fetchBooks = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("userId", user.$id),
      ]);

      setBooks(res.documents);
    } catch (err) {
      console.log("FetchBooks Error:", err);
    }
  };

  // ---------------------------
  // Fetch single book by ID
  // ---------------------------
  const fetchBookById = async (id) => {
    try {
      const res = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);
      return res;
    } catch (err) {
      console.log("FetchBookById Error:", err);
      return null;
    }
  };

  // ---------------------------
  // Create Book
  // ---------------------------
  const createBook = async (data) => {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          ...data,
          userId: user.$id,
        },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );

      setBooks((prev) => [...prev, newBook]);
      return newBook;
    } catch (err) {
      console.log("CreateBook Error:", err);
    }
  };

  // ---------------------------
  // Delete Book
  // ---------------------------
  const deleteBook = async (id) => {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);

      // Update local state
      setBooks((prev) => prev.filter((book) => book.$id !== id));
    } catch (err) {
      console.log("DeleteBook Error:", err);
    }
  };

  useEffect(()=>{
    if(user){   
        fetchBooks();
    }else{
        setBooks([]);
    }
  },[user])

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        fetchBookById,
        createBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
