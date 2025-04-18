import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react';


export const BookContext = createContext();

function BookProdiver({children}) {
    const [books, setBook] = useState([]);

    useEffect(() => {
        fetch("/bookData.json")
        .then((res) => res.json())
        .then((data) => setBook(data))
    }, []);

    return (
        <BookContext.Provider value={{ books }}>
            {children}
        </BookContext.Provider>
    );
}

export default BookProdiver