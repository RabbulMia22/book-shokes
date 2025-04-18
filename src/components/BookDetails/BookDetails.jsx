import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { BookContext } from '../context/BookProdiver';
import {addToLocalDB} from '../../utilitis/addToDB';


function BookDetails() {
  const { bookId } = useParams();

  const { books } = useContext(BookContext);
  const book = books.find((b) => b.bookId === parseInt(bookId));

  if (!book) {
    return <div>Book not found</div>
  };
  const { bookName, author, image, review, tags, yearOfPublishing, totalPages, category, publisher, rating } = book;
  const id = bookId;
 const handleReadList = (id) =>{
  addToLocalDB(id)
 }
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 p-6 bg-white shadow-xl rounded-xl">
      <div className="bg-gray-100 rounded-xl px-10 py-12 ">
        <img src={image} alt={bookName} className="w-[435px] h-[570px] object-contain " />
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{bookName}</h1>
        <h2 className="text-xl text-gray-600 font-medium border-b border-gray-300 mb-4 pb-4">by {author}</h2>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
       <div className='border-t border-gray-300 mt-4 pt-4'> 
       <p className="text-gray-700 text-base leading-relaxed mt-4">Review {review}</p>
       </div>
        <div className='border-t border-gray-300 mt-4 pt-4'>
        <p className="text-gray-700 text-base leading-relaxed mt-4">Total page: {totalPages}</p>
        <p className="text-gray-700 text-base leading-relaxed mt-4">Publish year: {yearOfPublishing}</p>
        <p className="text-gray-700 text-base leading-relaxed mt-4">Rating: {rating}</p>
        <p className="text-gray-700 text-base leading-relaxed mt-4">Category: {category}</p>
        </div>
       <div className='flex items-center gap-4 mt-4'>
       <button className="btn btn-neutral btn-outline" onClick={() => handleReadList(id)}>Read</button>
       <button className="btn btn-active btn-info bg-[#50B1C9]">Wishlist</button>
       </div>
      </div>
    </div>

  );
};

export default BookDetails