import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserFriends, FaRegCalendarAlt } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

function ReadList({ book }) {
    const {
        bookId,
        bookName,
        author,
        image,
        tags,
        yearOfPublishing,
        totalPages,
        category,
        publisher,
        rating,
    } = book;

    return (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl p-5 gap-6 items-center mb-6 border border-gray-200">
            
            {/* Book Image */}
            <div className="w-[120px] h-[170px] overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                <img src={image} alt={bookName} className="w-full h-full object-contain" />
            </div>

            {/* Book Info */}
            <div className="flex-1 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">{bookName}</h2>
                <p className="text-sm text-gray-600">By : {author}</p>

                {/* Tags and Year */}
                <div className="flex flex-wrap items-center gap-2 text-sm mt-2">
                    {tags?.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                            #{tag}
                        </span>
                    ))}
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <GoLocation className="text-base" />
                        Year of Publishing: {yearOfPublishing}
                    </span>
                </div>

                {/* Publisher & Page */}
                <div className="flex items-center gap-6 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                        <FaUserFriends /> Publisher: {publisher}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaRegCalendarAlt /> Page: {totalPages}
                    </span>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center flex-wrap gap-4 mt-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        Category: {category}
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        Rating: {rating}
                    </span>
                    <NavLink
                        to={`/book/${bookId}`}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 text-sm font-medium rounded-full"
                    >
                        View Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default ReadList;
