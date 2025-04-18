import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../components/context/BookProdiver';
import { getFromLocalStore } from '../utilitis/addToDB';
import ReadList from '../components/ReadList/ReadList';

function ListedBook() {
  const { books } = useContext(BookContext);
  const [readList, setReadList] = useState([]);
  const [filter, setFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("read");

  useEffect(() => {
    const storedIds = getFromLocalStore(); 
    const parsedIds = storedIds.map((id) => parseInt(id));
    const matchedBooks = books.filter((book) => parsedIds.includes(book.bookId));
    setReadList(matchedBooks);
  }, [books]);

  const filterBooks = (book) => {
    if (filter === "All") return true;
    if (filter === "Pages") return book.totalPages > 300;
    if (filter === "Rating") return book.rating >= 4;
    return true;
  };

  const filteredReadList = readList.filter(filterBooks);

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="mb-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pages">Pages</option>
          <option value="Rating">Rating</option>
        </select>
      </div>

      <div className="tabs tabs-lifted mb-6">
        <button
          className={`tab ${activeTab === "read" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("read")}
        >
          Read Books
        </button>
        <button
          className={`tab ${activeTab === "wishlist" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist Books
        </button>
      </div>

      {activeTab === "read" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReadList.length > 0 ? (
            filteredReadList.map((book) => (
              <ReadList key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-gray-500">No books found in the read list.</p>
          )}
        </div>
      )}

      {activeTab === "wishlist" && (
        <div className="text-gray-500 text-center">
          Wishlist books coming soon...
        </div>
      )}
    </div>
  );
}

export default ListedBook;
