import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import './Contact.css'
import CustomSelect from '../components/common/CustomSelect'

// Define Zod Schema
const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(1, { message: "Please select a subject" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

const Contact = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Request sent successfully!");
    };

    return (
        <div className="contact-page">
            <div className="contact-bg"></div>
            <div className="container contact-container">
                <div className="contact-card glass-panel">
                    <div className="contact-info">
                        <h2 className="contact-title">Private <span className="gold-text">Concierge</span></h2>
                        <p className="contact-desc">
                            Our dedicated team is at your disposal for any inquiries,
                            appointments, or bespoke requests. Experience the
                            luxury of personalized service.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <h3>Maison Luxe</h3>
                                <p>12 Avenue Montaigne,<br />75008 Paris, France</p>
                            </div>
                            <div className="detail-item">
                                <h3>Direct Line</h3>
                                <p>+33 1 42 68 89 00</p>
                            </div>
                            <div className="detail-item">
                                <h3>Email</h3>
                                <p>concierge@luxe.com</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                {...register("name")}
                            />
                            {errors.name && <span className="error-message">{errors.name.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                {...register("email")}
                            />
                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <Controller
                                name="subject"
                                control={control}
                                render={({ field }) => (
                                    <CustomSelect
                                        label="Subject"
                                        placeholder="Select an option"
                                        options={[
                                            "General Inquiry",
                                            "Book Appointment",
                                            "Private Viewing",
                                            "Order Support"
                                        ]}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                            {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="How may we assist you?"
                                {...register("message")}
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message.message}</span>}
                        </div>
                        <button type="submit" className="cta-button primary" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Request"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
