import React from 'react';
import './Button.css';

const Button = ({name}) => {
    return (
        <button className="btn hover:text-white tracking-widest">{name}</button>
    );
};

export default Button;