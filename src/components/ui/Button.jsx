import React from 'react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    fullWidth = false,
    loading = false,
    className = '',
    disabled,
    ...props
}) => {
    const btnClass = `
    btn-${variant} 
    ${fullWidth ? 'btn-full' : ''} 
    ${loading ? 'btn-loading' : ''} 
    ${className}
  `.trim();

    return (
        <button
            className={btnClass}
            disabled={disabled || loading}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
