import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Check, Upload } from 'lucide-react';

const SubmitWebsite = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        websiteName: '',
        websiteUrl: '',
        email: '',
        category: '',
        description: '',
        role: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Website submission:', formData);
        alert('Thank you for your submission! We will review it within 3-5 business days and send you an email confirmation.');
        setFormData({
            websiteName: '',
            websiteUrl: '',
            email: '',
            category: '',
            description: '',
            role: ''
        });
        setStep(1);
    };

    const benefits = [
        { title: 'Increase Visibility', description: 'Reach crypto enthusiasts actively searching for platforms like yours' },
        { title: 'Build Trust', description: 'Verified badge adds credibility to your platform' },
        { title: 'Targeted Traffic', description: 'Users specifically interested in your niche' },
        { title: 'Free Listing', description: 'Basic listing at no cost with optional featured upgrades' }
    ];

    return (
        <PageLayout>
            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-text-main mb-4">
                            Get Your Crypto Website Listed
                        </h1>
                        <p className="text-xl text-text-muted">
                            Join 500+ verified crypto platforms and get discovered by thousands of users
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Check className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-text-muted">{benefit.description}</p>
                            </Card>
                        ))}
                    </div>

                    <Card>
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className="flex items-center flex-1">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                                            }`}>
                                            {s}
                                        </div>
                                        {s < 3 && <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-sm text-text-muted">
                                <span>Basic Info</span>
                                <span>Details</span>
                                <span>Verification</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {step === 1 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold mb-4">Basic Information</h2>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Website Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.websiteName}
                                            onChange={(e) => setFormData({ ...formData, websiteName: e.target.value })}
                                            className="input"
                                            placeholder="e.g., Binance"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Website URL *</label>
                                        <input
                                            type="url"
                                            required
                                            value={formData.websiteUrl}
                                            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                                            className="input"
                                            placeholder="https://example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Official Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="input"
                                            placeholder="contact@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Category *</label>
                                        <select
                                            required
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="input"
                                        >
                                            <option value="">Select a category</option>
                                            <option value="exchange">Crypto Exchange</option>
                                            <option value="nft">NFT Marketplace</option>
                                            <option value="wallet">Crypto Wallet</option>
                                            <option value="defi">DeFi Platform</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <Button type="button" onClick={() => setStep(2)} className="w-full">
                                        Next Step
                                    </Button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold mb-4">Additional Details</h2>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Description *</label>
                                        <textarea
                                            required
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="input min-h-[120px]"
                                            placeholder="Describe your platform in 150-500 characters..."
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                                            Back
                                        </Button>
                                        <Button type="button" onClick={() => setStep(3)} className="flex-1">
                                            Next Step
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold mb-4">Verification</h2>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Your Role *</label>
                                        <select
                                            required
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="input"
                                        >
                                            <option value="">Select your role</option>
                                            <option value="founder">Founder</option>
                                            <option value="marketing">Marketing</option>
                                            <option value="developer">Developer</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                                        <label className="flex items-start gap-3">
                                            <input type="checkbox" required className="mt-1" />
                                            <span className="text-sm">I confirm this is an official submission</span>
                                        </label>
                                        <label className="flex items-start gap-3">
                                            <input type="checkbox" required className="mt-1" />
                                            <span className="text-sm">I agree to terms and conditions</span>
                                        </label>
                                        <label className="flex items-start gap-3">
                                            <input type="checkbox" required className="mt-1" />
                                            <span className="text-sm">I understand verification may take 3-5 business days</span>
                                        </label>
                                    </div>

                                    <div className="flex gap-3">
                                        <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                                            Back
                                        </Button>
                                        <Button type="submit" className="flex-1">
                                            Submit for Review
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </Card>

                    <Card className="mt-8 bg-primary/5">
                        <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                <div>
                                    <p className="font-medium">Submission Received</p>
                                    <p className="text-sm text-text-muted">Instant confirmation email</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                <div>
                                    <p className="font-medium">Manual Review</p>
                                    <p className="text-sm text-text-muted">1-2 days verification process</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                <div>
                                    <p className="font-medium">Listing Goes Live</p>
                                    <p className="text-sm text-text-muted">Email confirmation sent</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </PageLayout>
    );
};

export default SubmitWebsite;
