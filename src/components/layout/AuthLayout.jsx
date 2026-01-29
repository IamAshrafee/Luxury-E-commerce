import React from 'react';
import './AuthLayout.css';

const AuthLayout = ({ children, mode = 'default' }) => {
    return (
        <div className={`auth-layout ${mode === 'register' ? 'register-mode' : ''}`}>
            <div className="auth-page-content">
                <div className="auth-card-shared">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
