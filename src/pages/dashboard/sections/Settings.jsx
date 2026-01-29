import React, { useState } from 'react';
import Checkbox from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import './Settings.css';

const Settings = () => {
    const [preferences, setPreferences] = useState({
        newsletter: true,
        promotionalEmails: false,
        orderUpdates: true,
        smsNotifications: false,
        twoFactorAuth: true
    });

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setPreferences(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const handleSave = () => {
        console.log('Saved Preferences:', preferences);
        alert('Settings saved successfully');
    };

    return (
        <div className="settings-section">
            <header className="section-header">
                <h2 className="section-title">Settings</h2>
                <p className="section-subtitle">Manage your notifications and preferences</p>
            </header>

            <div className="settings-grid">
                <div className="settings-card glass-panel">
                    <h3 className="card-title">Email Notifications</h3>
                    <div className="settings-list">
                        <div className="setting-item">
                            <div>
                                <h4 className="setting-name">Newsletter</h4>
                                <p className="setting-desc">Receive updates on new collections and exclusive offers.</p>
                            </div>
                            <Checkbox
                                name="newsletter"
                                checked={preferences.newsletter}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="setting-item">
                            <div>
                                <h4 className="setting-name">Promotional Emails</h4>
                                <p className="setting-desc">Get notified about sales and special events.</p>
                            </div>
                            <Checkbox
                                name="promotionalEmails"
                                checked={preferences.promotionalEmails}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="setting-item">
                            <div>
                                <h4 className="setting-name">Order Updates</h4>
                                <p className="setting-desc">Receive email notifications about your order status.</p>
                            </div>
                            <Checkbox
                                name="orderUpdates"
                                checked={preferences.orderUpdates}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="settings-card glass-panel">
                    <h3 className="card-title">Privacy & Security</h3>
                    <div className="settings-list">
                        <div className="setting-item">
                            <div>
                                <h4 className="setting-name">SMS Notifications</h4>
                                <p className="setting-desc">Receive updates via text message.</p>
                            </div>
                            <Checkbox
                                name="smsNotifications"
                                checked={preferences.smsNotifications}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="setting-item">
                            <div>
                                <h4 className="setting-name">Two-Factor Authentication</h4>
                                <p className="setting-desc">Add an extra layer of security to your account.</p>
                            </div>
                            <Checkbox
                                name="twoFactorAuth"
                                checked={preferences.twoFactorAuth}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-action">
                    <Button onClick={handleSave}>
                        Save Preferences
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
