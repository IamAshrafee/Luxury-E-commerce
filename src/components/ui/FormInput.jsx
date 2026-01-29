import React from 'react';
import './FormInput.css';

const FormInput = ({
    label,
    name,
    type = 'text',
    register,
    error,
    placeholder,
    ...props
}) => {
    return (
        <div className="form-group">
            {label && (
                <label htmlFor={name} className="form-label">
                    {label}
                </label>
            )}
            <div className="form-input-wrapper">
                <input
                    id={name}
                    type={type}
                    className={`form-input ${error ? 'has-error' : ''}`}
                    placeholder={placeholder}
                    {...register(name, { valueAsNumber: type === 'number' })}
                    {...props}
                />
            </div>
            {error && (
                <div className="form-error" role="alert">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 8H6.005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{error.message}</span>
                </div>
            )}
        </div>
    );
};

export default FormInput;
