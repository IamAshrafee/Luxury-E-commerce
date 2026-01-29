import React from 'react';
import './Checkbox.css';

const Checkbox = ({ label, checked, onChange, name, ...props }) => {
    return (
        <label className="checkbox-wrapper">
            <input
                type="checkbox"
                name={name}
                className="checkbox-input"
                checked={checked}
                onChange={onChange}
                {...props}
            />
            <span className="checkbox-visual"></span>
            {label && <span className="checkbox-label">{label}</span>}
        </label>
    );
};

export default Checkbox;
