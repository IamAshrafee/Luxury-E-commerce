import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';
import AuthLayout from '../components/layout/AuthLayout';
import './Register.css';

// Validation Schema
const registerSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Error will show on this field
});

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data) => {
        // Mock API call
        console.log('Register Data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay
        alert('Registration successful (See console for data)');
    };

    return (
        <AuthLayout mode="register">
            <div className="auth-header">
                <h1 className="auth-title">Create Account</h1>
                <p className="auth-subtitle">Join the world of exclusive luxury</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                <FormInput
                    label="Full Name"
                    name="name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.name}
                />

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

                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    register={register}
                    error={errors.confirmPassword}
                />

                <div style={{ marginTop: '1rem' }}>
                    <Button
                        type="submit"
                        fullWidth
                        loading={isSubmitting}
                    >
                        Create Account
                    </Button>
                </div>
            </form>

            <div className="auth-footer">
                Already have an account?
                <Link to="/login" className="auth-link">Sign In</Link>
            </div>
        </AuthLayout>
    );
};

export default Register;
