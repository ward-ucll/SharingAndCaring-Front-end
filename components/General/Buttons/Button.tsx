import React from 'react';

interface ButtonProps {
    handleButtonClick?: () => void;
    label: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ handleButtonClick, label, children }) => {
    return (
        <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
        >
            {label}
            {children}
        </button>
    );
};

export default Button;
