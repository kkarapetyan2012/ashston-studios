// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Input = ({ textarea, type, onChange, className }) => {
    return (
        <>
            {textarea ? <textarea className={className} onChange={onChange} /> : <input className={className} type={type} onChange={onChange} />}
        </>
    );
};

export default Input;