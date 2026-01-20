import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/common/Card';
import { Shield, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
    return (
        <PageLayout>
            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-text-main mb-6">
                            Making Crypto Discovery Safe and Simple
                        </h1>
                        <p className="text-xl text-text-muted">
                            We're on a mission to help you find trusted crypto websites without the hassle
                        </p>
                    </div>

                    <Card className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-text-muted leading-relaxed">
                            <p>
                                In the rapidly evolving world of cryptocurrency, finding trustworthy platforms can be overwhelming. With thousands of websites claiming to offer the best services, how do you know which ones are legitimate?
                            </p>
                            <p>
                                That's why we created Crypto Suggest - a curated directory of verified crypto websites. We manually review every submission, check for security measures, and ensure that only legitimate platforms make it to our directory.
                            </p>
                            <p>
                                Whether you're looking for an exchange, a wallet, DeFi platforms, or NFT marketplaces, we've done the research so you don't have to.
                            </p>
                        </div>
                    </Card>

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">How We Verify Websites</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Security Check</h3>
                                <p className="text-text-muted">
                                    We verify SSL certificates, check domain age, and review security measures to ensure the platform is safe.
                                </p>
                            </Card>

                            <Card>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Legitimacy Verification</h3>
                                <p className="text-text-muted">
                                    We check company registration, team information, and online presence to confirm authenticity.
                                </p>
                            </Card>

                            <Card>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Ongoing Monitoring</h3>
                                <p className="text-text-muted">
                                    We continuously monitor listed websites and remove any that show signs of fraud or security issues.
                                </p>
                            </Card>

                            <Card>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Community Feedback</h3>
                                <p className="text-text-muted">
                                    We listen to user reports and reviews to maintain the quality of our directory.
                                </p>
                            </Card>
                        </div>
                    </div>

                    <Card className="bg-primary text-white text-center p-12">
                        <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            We're committed to maintaining a scam-free directory. Quality over quantity. Your safety is our priority.
                        </p>
                    </Card>
                </div>
            </div>
        </PageLayout>
    );
};

export default About;
