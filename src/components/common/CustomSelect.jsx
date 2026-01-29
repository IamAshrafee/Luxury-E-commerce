import React, { useState, useRef, useEffect } from 'react'
import './CustomSelect.css'

const CustomSelect = ({ label, options, placeholder, value, onChange, required }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(value);
    const dropdownRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const handleSelect = (option) => {
        setSelected(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select-group" ref={dropdownRef}>
            {label && <label className="select-label">{label}</label>}

            <div
                className={`select-trigger ${isOpen ? 'active' : ''} ${!selected ? 'placeholder' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selected || placeholder}
                <span className="select-arrow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </span>
            </div>

            <div className={`select-options ${isOpen ? 'open' : ''}`}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`select-option ${selected === option ? 'selected' : ''}`}
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                        {selected === option && (
                            <span className="option-check">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Hidden Input for Form Submission compliance if needed */}
            <input
                type="hidden"
                value={selected || ''}
                required={required}
            />
        </div>
    )
}

export default CustomSelect
