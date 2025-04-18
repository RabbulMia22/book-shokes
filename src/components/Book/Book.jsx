import React from 'react';
import { FaRegStar } from "react-icons/fa";
import {  NavLink } from 'react-router-dom';

function Book({ book }) {
  const { bookId, bookName, author, image, tags, genre, rating } = book;

  return (
    <NavLink to={`/book/${bookId}`}>
      <div className="w-[374px] mx-auto bg-white rounded-2xl shadow-md border p-4 mt-6 hover:shadow-lg transition-shadow">
        <div className="bg-gray-100 rounded-xl p-4">
          <img src={image} alt={bookName} className="w-full h-48 object-contain mx-auto" />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-semibold mt-3 text-gray-800">{bookName}</h2>
        <p className="text-sm text-gray-500 mb-2">By : {author}</p>

        {/* Genre, Rating */}
        <div className="flex justify-between items-center border-t border-dashed pt-2 mt-2 text-sm text-gray-600">
          <span>{genre}</span>
          <span className="flex items-center gap-1">
            {rating}
            <FaRegStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </span>
        </div>
      </div>
      </NavLink>
  );
}

export default Book;
