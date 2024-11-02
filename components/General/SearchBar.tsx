import searchText from '@/pages/books/[searchText]';
import { useRouter } from 'next/router';
import { useState } from 'react';


const SearchBar: React.FC = () => {
    const router = useRouter()

    const [searchText, setsearchText] = useState('');

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            router.push(`/forwarder/${searchText}`);
        }
    };

    const handleSearchClick = () => {
        onSearch(searchText);
    };

    const onSearch = (searchText: string) => {
        if (searchText === '') {
            router.push(`/books`);
        }
        
        router.push(`/forwarder/${searchText}`);
        
    }

    return (
        <div className="relative w-1/3">
            <input
                type="text"
                placeholder="Zoek een boek..."
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-transparent text-black focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 shadow-sm"
                value={searchText}
                onChange={(e) => setsearchText(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearchClick} className="absolute right-3 top-2.5">
                <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                </svg>
            </button>
        </div>
    );
}

export default SearchBar;
