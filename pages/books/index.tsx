import BookItem from '@/components/Book/BookItem';
import BookOverview from '@/components/Book/BookOverview';
import Header from '@/components/Header/Header';
import { getAllBooks } from '@/services/bookservice';
import React, { useState } from 'react';
import useSWR from 'swr';

const getBooks = async () => {
    const response = await getAllBooks();
    const books = await response.json()
    return { books }
} 

const BooksPage: React.FC = () => {
    const [isListView, setIsListView] = useState(false);
    
    const {data, error, isLoading} = useSWR("api/book/all", getBooks);
    const toggleView = () => {
        setIsListView(!isListView);
    };

    return (
        <div>
            <Header></Header>
            {data && !error && ( <BookOverview isListView={isListView} books={data?.books} toggleView={toggleView}></BookOverview>)}
           
        </div>
    );
};

export default BooksPage;
