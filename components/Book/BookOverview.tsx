import { Book } from '@/types';
import React from 'react';
import BookItem from './BookItem';

type Props = {
    books: Book[]
    isListView: Boolean
    toggleView: () => void
};

const BookOverview: React.FC<Props> = ({isListView, books, toggleView}) => {
    return (
        <div>
        <div className="min-h-screen bg-gray-100 p-8">
              
            <div className='max-w-5xl m-auto'>
            <div className="flex justify-between items-center mb-6 p-10 ">
                <button
                    onClick={toggleView}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
                    >
                    {isListView ? 'Switch to Grid View' : 'Switch to List View'}
                </button>
            </div>
                    {books.length < 1 && (<h1 className="text-center text-red-700 text-2xl p-5">No books found</h1>)}

            
            <div className={isListView ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
                {books.map((book, index) => (
                    <BookItem book={book} index={index} isListView={isListView}></BookItem>
                ))}
            </div>
            </div>
        </div>
        </div>
    )
};
export default BookOverview;
