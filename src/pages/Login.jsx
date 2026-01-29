import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';
import AuthLayout from '../components/layout/AuthLayout';
import './Login.css'; // Reusing for consistent auth styles

// Validation Schema
const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
});

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data) => {
        // Mock API call
        console.log('Login Data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay
        alert('Login successful (See console for data)');
    };

    return (
        <AuthLayout>
            <div className="auth-header">
                <h1 className="auth-title">Welcome Back</h1>
                <p className="auth-subtitle">Sign in to your exclusive account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    register={register}
                    error={errors.email}
                />

                <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    register={register}
                    error={errors.password}
                />

                <div className="text-right -mt-2 mb-4">
                    <Link to="/forgot-password" style={{ color: '#A8A29E', fontSize: '0.8rem', textDecoration: 'none' }}>
                        Forgot Password?
                    </Link>
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                    <Button
                        type="submit"
                        fullWidth
                        loading={isSubmitting}
                    >
                        Sign In
                    </Button>
                </div>
            </form>

            <div className="auth-footer">
                Don't have an account?
                <Link to="/register" className="auth-link">Register Now</Link>
            </div>
        </AuthLayout>
    );
};

export default Login;
