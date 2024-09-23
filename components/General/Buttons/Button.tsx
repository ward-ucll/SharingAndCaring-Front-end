import React from 'react';

interface ButtonProps {
    handleButtonClick: (page: number) => void;
    label: string;
    page: number;
    children?: React.ReactNode;
    style: string;
    addStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ handleButtonClick, label, page, children, style, addStyle }) => {
    return (
        <button
            onClick={() => handleButtonClick(page)}
            className={style + " " +  addStyle}
        >
            {label}
            {children}
        </button>
    );
};

export default Button;
