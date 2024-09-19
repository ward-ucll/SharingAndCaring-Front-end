import { Book } from '@/types';
import React from 'react';

type Props = {
    book: Book
    isListView: Boolean
};

const BookItem: React.FC<Props> = ({isListView, book}) => {
    return (
        <div className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ${isListView ? 'flex' : ''}`}>
                        <img
                            src={book.imageUrl}
                            alt={book.title}
                            className={isListView ? 'w-24 h-24 object-cover' : 'w-full h-48 object-cover'}
                        />
                        <div className={`p-4 ${isListView ? 'pl-6' : ''}`}>
                            <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                            <p className="text-gray-600">by {book.author}</p>
                        </div>
                    </div>
    )
};
export default BookItem;
