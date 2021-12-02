import React from 'react';

export const Input = ({ classList, type, placeholder, onChange, value, onBlur,name }) => {
    return <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={classList}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
    />
}

export default Input;