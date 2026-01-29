import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';
import AuthLayout from '../components/layout/AuthLayout';
import './ForgotPassword.css';

// --- Validation Schemas ---
const emailSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
});

const otpSchema = z.object({
    otp: z.string().length(6, 'Please enter the 6-digit code'),
});

const resetSchema = z.object({
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must include an uppercase letter')
        .regex(/[0-9]/, 'Must include a number'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // --- Step 1: Email ---
    const { register: regEmail, handleSubmit: subEmail, formState: { errors: errEmail } } = useForm({
        resolver: zodResolver(emailSchema)
    });

    // --- Step 2: OTP ---
    const { register: regOtp, handleSubmit: subOtp, formState: { errors: errOtp } } = useForm({
        resolver: zodResolver(otpSchema)
    });

    // --- Step 3: Reset ---
    const { register: regReset, handleSubmit: subReset, formState: { errors: errReset } } = useForm({
        resolver: zodResolver(resetSchema)
    });

    const onEmailSubmit = async (data) => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log('OTP sent to:', data.email);
            setEmail(data.email);
            setLoading(false);
            setStep(2);
        }, 1500);
    };

    const onOtpSubmit = async (data) => {
        setLoading(true);
        // Simulate OTP verification
        setTimeout(() => {
            if (data.otp === '123456') { // Mock verification
                setLoading(false);
                setStep(3);
            } else {
                alert('Invalid Code (Try 123456)');
                setLoading(false);
            }
        }, 1500);
    };

    const onResetSubmit = async (data) => {
        setLoading(true);
        // Simulate Password Reset
        setTimeout(() => {
            console.log('Password reset for:', email, 'New Pwd:', data.password);
            setLoading(false);
            alert('Password successfully reset! Please login.');
            navigate('/login');
        }, 1500);
    };

    return (
        <AuthLayout>
            {/* Step Indicators */}
            <div className="step-indicator">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`} />
                <div className={`step-dot ${step >= 2 ? 'active' : ''}`} />
                <div className={`step-dot ${step >= 3 ? 'active' : ''}`} />
            </div>

            {/* Step 1: Email Input */}
            {step === 1 && (
                <div className="step-content">
                    <header className="auth-header">
                        <h1 className="auth-title">Forgot Password?</h1>
                        <p className="auth-subtitle">Enter your email address and we'll send you a verification code.</p>
                    </header>
                    <form onSubmit={subEmail(onEmailSubmit)} className="auth-form">
                        <FormInput
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            error={errEmail.email}
                            register={regEmail}
                        />
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? 'Sending Code...' : 'Send Verification Code'}
                        </Button>
                    </form>
                </div>
            )}

            {/* Step 2: OTP Verification */}
            {step === 2 && (
                <div className="step-content">
                    <header className="auth-header">
                        <h1 className="auth-title">Verify Code</h1>
                        <p className="auth-subtitle">We sent a 6-digit code to <strong>{email}</strong></p>
                    </header>
                    <form onSubmit={subOtp(onOtpSubmit)} className="auth-form">
                        <FormInput
                            label="Verification Code (Try 123456)"
                            name="otp"
                            type="text"
                            placeholder="123456"
                            error={errOtp.otp}
                            register={regOtp}
                            style={{ letterSpacing: '0.25em', textAlign: 'center', fontSize: '1.5rem' }}
                        />
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? 'Verifying...' : 'Verify Code'}
                        </Button>
                        <button
                            type="button"
                            className="text-xs text-center text-gray-400 hover:text-white mt-2 transition-colors"
                            onClick={() => alert(`Resent code to ${email}`)}
                        >
                            Didn't receive code? Resend
                        </button>
                    </form>
                </div>
            )}

            {/* Step 3: New Password */}
            {step === 3 && (
                <div className="step-content">
                    <header className="auth-header">
                        <h1 className="auth-title">Reset Password</h1>
                        <p className="auth-subtitle">Create a new secure password for your account.</p>
                    </header>
                    <form onSubmit={subReset(onResetSubmit)} className="auth-form">
                        <FormInput
                            label="New Password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            error={errReset.password}
                            register={regReset}
                        />
                        <FormInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            error={errReset.confirmPassword}
                            register={regReset}
                        />
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? 'Updating...' : 'Reset Password'}
                        </Button>
                    </form>
                </div>
            )}

            <Link to="/login" className="back-link">
                ← Back to a Login
            </Link>
        </AuthLayout>
    );
};

export default ForgotPassword;
