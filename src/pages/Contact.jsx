import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'general',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Thank you for contacting us! We will respond within 24-48 hours.');
        setFormData({ name: '', email: '', subject: 'general', message: '' });
    };

    const faqs = [
        {
            question: 'How do I submit my website?',
            answer: 'Visit our Submit Website page, fill out the form with your website details, and our team will review it within 3-5 business days.'
        },
        {
            question: 'How long does verification take?',
            answer: 'Verification typically takes 3-5 business days. We manually review each submission to ensure quality and legitimacy.'
        },
        {
            question: 'Is listing free?',
            answer: 'Yes! Basic listing is completely free. We also offer featured listing options for increased visibility.'
        },
        {
            question: 'How do I report a scam website?',
            answer: 'Use the contact form above with subject "Report Website" or click the "Report Issue" link on any website detail page.'
        },
        {
            question: 'Can I edit my listing?',
            answer: 'Yes, contact us with your website details and the changes you\'d like to make. We\'ll update your listing after verification.'
        }
    ];

    return (
        <PageLayout>
            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-text-main mb-4">Get in Touch</h1>
                        <p className="text-xl text-text-muted">
                            Have questions, feedback, or want to report an issue? We're here to help.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <Card>
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="input"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="input"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject *</label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="input"
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="report">Report Website</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="technical">Technical Issue</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Message *</label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="input min-h-[150px]"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <Button type="submit" className="w-full">Send Message</Button>

                                <p className="text-sm text-text-muted text-center">
                                    We typically respond within 24-48 hours
                                </p>
                            </form>
                        </Card>

                        <div className="space-y-6">
                            <Card>
                                <h3 className="text-xl font-bold mb-4">Other Ways to Reach Us</h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="font-medium">Email:</span>
                                        <p className="text-primary">hello@cryptosuggest.com</p>
                                    </div>
                                    <div>
                                        <span className="font-medium">Response Time:</span>
                                        <p className="text-text-muted">24-48 hours</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="bg-primary/5">
                                <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="/submit" className="text-primary hover:underline">Submit Your Website</a></li>
                                    <li><a href="/about" className="text-primary hover:underline">About Us</a></li>
                                    <li><a href="/browse" className="text-primary hover:underline">Browse Directory</a></li>
                                </ul>
                            </Card>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Card key={index}>
                                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                    <p className="text-text-muted">{faq.answer}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Contact;
