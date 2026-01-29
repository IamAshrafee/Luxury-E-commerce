import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FormInput from '../../../components/ui/FormInput';
import Button from '../../../components/ui/Button';
import './AccountInfo.css';

// Schema for Personal Details
const profileSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").optional().or(z.literal('')),
    address: z.string().optional(),
    city: z.string().optional(),
    zipCode: z.string().optional(),
    country: z.string().optional(),
});

// Schema for Password Change
const passwordSchema = z.object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    confirmNewPassword: z.string()
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
});

const AccountInfo = () => {
    // Profile Form
    const {
        register: registerProfile,
        handleSubmit: handleProfileSubmit,
        formState: { errors: profileErrors, isSubmitting: isProfileSubmitting }
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            fullName: 'Alex Morgan',
            email: 'alex.morgan@example.com',
            phone: '+1 (555) 123-4567',
            address: '123 Luxury Lane',
            city: 'Beverly Hills',
            country: 'USA',
            zipCode: '90210'
        }
    });

    // Password Form
    const {
        register: registerPassword,
        handleSubmit: handlePasswordSubmit,
        formState: { errors: passwordErrors, isSubmitting: isPasswordSubmitting }
    } = useForm({
        resolver: zodResolver(passwordSchema)
    });

    const onProfileSubmit = async (data) => {
        console.log('Profile Update:', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Profile updated successfully');
    };

    const onPasswordSubmit = async (data) => {
        console.log('Password Update:', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Password updated successfully');
    };

    return (
        <div className="account-info-section">
            <header className="section-header">
                <h2 className="section-title">Account Information</h2>
                <p className="section-subtitle">Manage your personal details and security</p>
            </header>

            <div className="account-grid">
                {/* Personal Details Form */}
                <div className="form-card glass-panel">
                    <h3 className="card-title">Personal Details</h3>
                    <form onSubmit={handleProfileSubmit(onProfileSubmit)}>
                        <div className="form-row">
                            <FormInput
                                label="Full Name"
                                name="fullName"
                                register={registerProfile}
                                error={profileErrors.fullName}
                            />
                            <FormInput
                                label="Email Address"
                                name="email"
                                type="email"
                                register={registerProfile}
                                error={profileErrors.email}
                            />
                        </div>

                        <FormInput
                            label="Phone Number"
                            name="phone"
                            register={registerProfile}
                            error={profileErrors.phone}
                        />

                        <FormInput
                            label="Address"
                            name="address"
                            register={registerProfile}
                            error={profileErrors.address}
                        />

                        <div className="form-row three-col">
                            <FormInput
                                label="City"
                                name="city"
                                register={registerProfile}
                                error={profileErrors.city}
                            />
                            <FormInput
                                label="Zip Code"
                                name="zipCode"
                                register={registerProfile}
                                error={profileErrors.zipCode}
                            />
                            <FormInput
                                label="Country"
                                name="country"
                                register={registerProfile}
                                error={profileErrors.country}
                            />
                        </div>

                        <div className="form-action">
                            <Button type="submit" loading={isProfileSubmitting}>
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Password Change Form */}
                <div className="form-card glass-panel">
                    <h3 className="card-title">Security</h3>
                    <form onSubmit={handlePasswordSubmit(onPasswordSubmit)}>
                        <FormInput
                            label="Current Password"
                            name="currentPassword"
                            type="password"
                            placeholder="••••••••"
                            register={registerPassword}
                            error={passwordErrors.currentPassword}
                        />

                        <FormInput
                            label="New Password"
                            name="newPassword"
                            type="password"
                            placeholder="••••••••"
                            register={registerPassword}
                            error={passwordErrors.newPassword}
                        />

                        <FormInput
                            label="Confirm New Password"
                            name="confirmNewPassword"
                            type="password"
                            placeholder="••••••••"
                            register={registerPassword}
                            error={passwordErrors.confirmNewPassword}
                        />

                        <div className="form-action">
                            <Button type="submit" variant="outline" loading={isPasswordSubmitting}>
                                Update Password
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
