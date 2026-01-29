import React from 'react';
import './AccordionItem.css';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div
            className={`accordion-item ${isOpen ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className="accordion-header">
                <span className="accordion-question">{question}</span>
                <span className="accordion-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </span>
            </div>
            <div
                className={`accordion-body ${isOpen ? 'open' : ''}`}
            >
                <div className="accordion-content">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
