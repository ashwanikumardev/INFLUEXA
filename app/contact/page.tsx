'use client';

import { useState } from 'react';
import TerminalWindow from '@/components/Terminal/TerminalWindow';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        userType: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (submitted) {
        return (
            <div className="fade-in">
                <TerminalWindow title="contact-confirmation.txt">
                    <pre style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--terminal-accent)' }}>
                        {`$ contact --submit

[OK] Message sent successfully!

SUBMISSION DETAILS:
-------------------
Name:      ${formData.name}
Email:     ${formData.email}
Type:      ${formData.userType}
Subject:   ${formData.subject}
Timestamp: ${new Date().toISOString()}

[✓] Confirmation email sent to ${formData.email}
[✓] Ticket created: #${Math.floor(Math.random() * 10000)}
[✓] Expected response time: <24 hours

Our team will review your inquiry and respond shortly.

→ Return to homepage or explore other sections.`}
                    </pre>

                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setFormData({ name: '', email: '', userType: '', subject: '', message: '' });
                        }}
                        className="terminal-button"
                        style={{ marginTop: 'var(--spacing-md)' }}
                    >
                        [SEND ANOTHER MESSAGE]
                    </button>
                </TerminalWindow>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <TerminalWindow title="contact.sh">
                <div className="command-prompt" style={{ marginBottom: 'var(--spacing-md)' }}>
                    contact --new-inquiry
                </div>

                <h1>CONTACT FORM</h1>
                <div style={{ borderBottom: '2px solid var(--terminal-text)', marginBottom: 'var(--spacing-lg)' }} />

                <form onSubmit={handleSubmit} style={{ maxWidth: '700px' }}>
                    {/* Name */}
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                        <label style={{ display: 'block', marginBottom: '8px' }}>
                            <span style={{ color: 'var(--terminal-accent)' }}>$</span> Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="terminal-input"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                        <label style={{ display: 'block', marginBottom: '8px' }}>
                            <span style={{ color: 'var(--terminal-accent)' }}>$</span> Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="terminal-input"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>

                    {/* User Type */}
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                        <label style={{ display: 'block', marginBottom: '8px' }}>
                            <span style={{ color: 'var(--terminal-accent)' }}>$</span> User Type:
                        </label>
                        <select
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                            className="terminal-input"
                            required
                            style={{ cursor: 'pointer' }}
                        >
                            <option value="">-- Select Type --</option>
                            <option value="brand">Brand / Business</option>
                            <option value="creator">Creator / Influencer</option>
                            <option value="agency">Agency / Partner</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Subject */}
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                        <label style={{ display: 'block', marginBottom: '8px' }}>
                            <span style={{ color: 'var(--terminal-accent)' }}>$</span> Subject:
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="terminal-input"
                            placeholder="Brief subject line"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                        <label style={{ display: 'block', marginBottom: '8px' }}>
                            <span style={{ color: 'var(--terminal-accent)' }}>$</span> Message:
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="terminal-input"
                            placeholder="Type your message here..."
                            rows={8}
                            required
                            style={{
                                resize: 'vertical',
                                fontFamily: 'var(--font-terminal)',
                                fontSize: '14px'
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
                        <button type="submit" className="terminal-button">
                            [SUBMIT]
                        </button>
                        <span style={{ fontSize: '12px', color: 'var(--terminal-muted)' }}>
                            Press ENTER to submit or ESC to cancel
                        </span>
                    </div>
                </form>

                {/* Contact Information */}
                <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-md)', border: '1px solid var(--terminal-text)' }}>
                    <h2 style={{ marginBottom: 'var(--spacing-sm)' }}>ALTERNATIVE CONTACT METHODS</h2>
                    <div style={{ fontSize: '13px', lineHeight: '1.8' }}>
                        <p>
                            <strong>Email:</strong> contactinfluexa@gmail.com<br />
                            <strong>Business Inquiries:</strong> contactinfluexa@gmail.com<br />
                            <strong>Creator Support:</strong> contactinfluexa@gmail.com<br />
                            <strong>Technical Support:</strong> contactinfluexa@gmail.com<br />
                            <strong>Security Issues:</strong> contactinfluexa@gmail.com
                        </p>
                        <p style={{ marginTop: 'var(--spacing-sm)', color: 'var(--terminal-muted)', fontSize: '12px' }}>
                            → Response time: &lt;24 hours for all inquiries<br />
                            → Business hours: Mon-Fri, 9AM-6PM EST<br />
                            → Emergency support: Available 24/7 for active campaigns
                        </p>
                    </div>
                </div>

                {/* FAQ */}
                <div style={{ marginTop: 'var(--spacing-lg)' }}>
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    <div style={{ borderBottom: '1px solid var(--terminal-muted)', marginBottom: 'var(--spacing-sm)' }} />

                    <div style={{ fontSize: '13px' }}>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <strong style={{ color: 'var(--terminal-accent)' }}>Q: How long does the matching process take?</strong>
                            <p style={{ marginTop: '4px' }}>A: Typically 48-72 hours for initial creator recommendations.</p>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <strong style={{ color: 'var(--terminal-accent)' }}>Q: What are your fees?</strong>
                            <p style={{ marginTop: '4px' }}>A: We charge a transparent 15% platform fee on campaign budgets. No hidden costs.</p>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <strong style={{ color: 'var(--terminal-accent)' }}>Q: How do I join as a creator?</strong>
                            <p style={{ marginTop: '4px' }}>A: Submit your application through this form (select "Creator" as user type). We'll review and respond within 5 business days.</p>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <strong style={{ color: 'var(--terminal-accent)' }}>Q: What's the minimum campaign budget?</strong>
                            <p style={{ marginTop: '4px' }}>A: We recommend a minimum of $5,000 for effective campaigns, but can discuss custom solutions.</p>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <strong style={{ color: 'var(--terminal-accent)' }}>Q: Do you offer performance guarantees?</strong>
                            <p style={{ marginTop: '4px' }}>A: Yes, we provide performance-based guarantees with clear SLAs. Details discussed during onboarding.</p>
                        </div>
                    </div>
                </div>
            </TerminalWindow>
        </div>
    );
}
