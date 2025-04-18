import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Book from '../Book/Book';
import { BookContext } from '../context/BookProdiver';

function Books() {
   const {books} = useContext(BookContext)
    
  return (
    <div className='container mx-auto mt-8'>
         <h1 className='text-6xl text-center '>Books </h1>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                books.map((book) => <Book book={book} key={book.bookId} />)
            }
         </div>
    </div>
  )
}

export default Books;