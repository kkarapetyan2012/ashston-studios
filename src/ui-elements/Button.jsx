// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Button = ({ children, icon, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {icon && <img src={icon} alt="icon" />}
            {children}
        </button>
    );
};

export default Button;