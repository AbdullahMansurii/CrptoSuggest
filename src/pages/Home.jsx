import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, TrendingUp, Users, ArrowRight, Check } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import CategoryIcon from '../components/common/CategoryIcon';
import { mockCategories, getFeaturedWebsites } from '../data/mockData';

const Home = () => {
    const featuredWebsites = getFeaturedWebsites().slice(0, 6);

    const stats = [
        { label: 'Verified Websites', value: '500+' },
        { label: 'Categories', value: '15+' },
        { label: 'Monthly Visitors', value: '50K+' },
        { label: 'New Listings', value: '25+' }
    ];

    const trustFactors = [
        { icon: Shield, title: 'Manual Verification', description: 'Every website is manually reviewed before listing' },
        { icon: Search, title: 'Scam Detection', description: 'Continuous monitoring and community reporting' },
        { icon: TrendingUp, title: 'Regular Updates', description: 'Listings updated daily with latest information' },
        { icon: Users, title: 'Community Driven', description: 'Powered by user reviews and feedback' }
    ];

    return (
        <PageLayout>
            <div className="zebra-sections">
                {/* Hero Section */}
                <section className="py-20">
                    <div className="container-custom">
                        {/* 3-Column Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left Image - Hidden on mobile, 3 cols on desktop */}
                            <div className="hidden lg:block lg:col-span-3">
                                <img
                                    src="/hero-left.png"
                                    alt="Bitcoin Growth"
                                    className="w-full h-auto animate-fade-in"
                                />
                            </div>

                            {/* Center Content - Full width on mobile, 6 cols on desktop */}
                            <div className="col-span-1 lg:col-span-6 text-center">
                                <Badge variant="category" className="mb-6 bg-accent/10 text-accent border-accent/20">
                                    Trusted by 50,000+ Crypto Enthusiasts
                                </Badge>

                                <h1 className="text-5xl md:text-6xl font-bold text-text-main mb-6">
                                    Discover Trusted <span className="text-gradient">Crypto Websites</span> in One Place
                                </h1>

                                <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto">
                                    Your curated directory for exchanges, DeFi, NFTs, wallets, and more. Find verified crypto platforms quickly and safely.
                                </p>

                                {/* Search Bar */}
                                <div className="max-w-2xl mx-auto mb-8">
                                    <div className="flex gap-2">
                                        <div className="flex-1 relative">
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Search crypto websites..."
                                                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none text-lg"
                                            />
                                        </div>
                                        <Button size="lg">Search</Button>
                                    </div>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-accent" />
                                        <span>500+ Verified Websites</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-accent" />
                                        <span>15+ Categories</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-accent" />
                                        <span>Scam-Free Listings</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-accent" />
                                        <span>Updated Daily</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image - Hidden on mobile, 3 cols on desktop */}
                            <div className="hidden lg:block lg:col-span-3">
                                <img
                                    src="/hero-right.png"
                                    alt="Bitcoin Trading"
                                    className="w-full h-auto animate-fade-in"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Categories */}
                <section className="py-20">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-text-main mb-4">Browse by Category</h2>
                            <p className="text-xl text-text-muted">Explore verified crypto websites across all categories</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockCategories.filter(cat => cat.featured).map((category, index) => {
                                // Alternate subtle color tints for visual interest
                                const bgColors = ['bg-blue-50/50', 'bg-sky-50/50', 'bg-cyan-50/50', 'bg-indigo-50/50'];
                                const bgColor = bgColors[index % bgColors.length];

                                return (
                                    <Link key={category.id} to={`/category/${category.slug}`}>
                                        <Card hover className={`text-center ${bgColor} border border-gray-100/50`}>
                                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CategoryIcon iconName={category.icon} className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold text-text-main mb-2">{category.name}</h3>
                                            <p className="text-sm text-text-muted mb-4">{category.websiteCount} websites</p>
                                            <Button variant="outline" size="sm" className="w-full">Browse</Button>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="text-center mt-8">
                            <Link to="/browse">
                                <Button variant="outline" size="lg">View All Categories</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Websites */}
                <section className="py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-text-main mb-4">Featured Websites</h2>
                            <p className="text-xl text-text-muted">Handpicked verified crypto platforms</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredWebsites.map(website => (
                                <Card key={website.id} hover featured className="relative">
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="featured">Featured</Badge>
                                    </div>

                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-primary">
                                            {website.name.charAt(0)}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-lg font-bold text-text-main">{website.name}</h3>
                                                <Badge variant="verified">✓</Badge>
                                            </div>
                                            <Badge variant="category">{website.category}</Badge>
                                        </div>
                                    </div>

                                    <p className="text-text-muted text-sm mb-4">{website.shortDescription}</p>

                                    <Link to={`/website/${website.slug}`}>
                                        <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust & Safety */}
                <section className="py-24">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-text-main mb-4">Why Trust Crypto Suggest?</h2>
                            <p className="text-xl text-text-muted">We take verification seriously</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {trustFactors.map((factor, index) => (
                                <Card key={index} className="text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <factor.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-text-main mb-2">{factor.title}</h3>
                                    <p className="text-sm text-text-muted">{factor.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Statistics */}
                <section className="py-24 bg-gradient-to-br from-primary-dark to-primary text-white">
                    <div className="container-custom">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-5xl md:text-6xl font-bold mb-3 text-white">{stat.value}</div>
                                    <div className="text-white/90 text-lg">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="container-custom">
                        <Card className="bg-gradient-primary text-white text-center p-12">
                            <h2 className="text-4xl font-bold mb-4">List Your Crypto Website</h2>
                            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                                Get discovered by thousands of crypto enthusiasts. Join 500+ verified platforms on Crypto Suggest.
                            </p>
                            <Link to="/submit">
                                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                                    Submit Your Website <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </Card>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Home;
