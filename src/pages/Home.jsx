import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, TrendingUp, Users, ArrowRight, Check, Star, Zap, Globe, Lock } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import WebsiteCard from '../components/website/WebsiteCard';
import { mockCategories, mockTestimonials, getFeaturedWebsites, getRecentlyVerifiedWebsites } from '../data/mockData';

const Home = () => {
    const featuredWebsites = getFeaturedWebsites().slice(0, 6);

    const trustFactors = [
        { icon: Shield, title: 'Manual Verification', description: 'Every website is manually reviewed before listing', color: 'bg-blue-100 text-blue-600' },
        { icon: Search, title: 'Scam Detection', description: 'Continuous monitoring and community reporting', color: 'bg-red-100 text-red-600' },
        { icon: TrendingUp, title: 'Regular Updates', description: 'Listings updated daily with latest information', color: 'bg-green-100 text-green-600' },
        { icon: Users, title: 'Community Driven', description: 'Powered by user reviews and feedback', color: 'bg-purple-100 text-purple-600' }
    ];

    const getGradient = (index) => {
        const gradients = [
            'from-blue-500 to-cyan-400',
            'from-purple-500 to-indigo-500',
            'from-pink-500 to-rose-500',
            'from-orange-500 to-yellow-500',
        ];
        return gradients[index % gradients.length];
    };

    return (
        <PageLayout>
            <div className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative py-20 pb-32">
                    {/* Background decorations */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/80 via-white to-white z-0"></div>
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
                    <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-60"></div>

                    <div className="container-custom relative z-10">
                        {/* 3-Column Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Left Content */}
                            <div className="col-span-1 lg:col-span-7 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-8 animate-fade-in">
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    <span className="text-sm font-bold text-text-muted tracking-wide uppercase">Trusted by 50,000+ Users</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-main mb-8 leading-[1.1] tracking-tight">
                                    Discover Trusted <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-purple-600 inline-block">Crypto Websites</span>
                                </h1>

                                <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                    Your curated, verified directory for exchanges, DeFi, NFTs, and more. Find the tools you need without the risk.
                                </p>

                                {/* Search Bar */}
                                <div className="max-w-2xl bg-white p-2 rounded-2xl shadow-xl shadow-blue-100/50 border border-gray-100 flex flex-col sm:flex-row gap-2 mb-10 transform transition-all hover:shadow-2xl hover:scale-[1.01]">
                                    <div className="flex-1 relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search exchanges, wallets, tools..."
                                            className="w-full h-12 pl-12 pr-4 rounded-xl text-lg text-text-main placeholder-gray-400 focus:outline-none bg-transparent"
                                        />
                                    </div>
                                    <Link to="/browse">
                                        <button className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all active:scale-95 flex items-center justify-center gap-2">
                                            Search <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-text-muted">
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"><Check className="w-3 h-3 text-green-600" /></div>
                                        <span>Verified Listings</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center"><Shield className="w-3 h-3 text-blue-600" /></div>
                                        <span>Scam Protection</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center"><Star className="w-3 h-3 text-purple-600" /></div>
                                        <span>Free to Use</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image/Graphic (Abstract composition) */}
                            <div className="hidden lg:block lg:col-span-5 relative">
                                <div className="relative z-10 animate-float-slow">
                                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 opacity-20 blur-xl"></div>
                                    <div className="bg-white rounded-[2rem] p-6 shadow-2xl border border-gray-100 max-w-sm mx-auto">
                                        {/* Mock UI Card inside hero */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-blue-100"></div>
                                            <div className="space-y-2">
                                                <div className="h-4 w-32 bg-gray-100 rounded"></div>
                                                <div className="h-3 w-20 bg-gray-50 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-3 mb-6">
                                            <div className="h-20 w-full bg-gray-50 rounded-xl"></div>
                                            <div className="flex gap-2">
                                                <div className="h-8 w-1/3 bg-blue-50 rounded-lg"></div>
                                                <div className="h-8 w-1/3 bg-green-50 rounded-lg"></div>
                                            </div>
                                        </div>
                                        <div className="h-10 w-full bg-primary rounded-xl opacity-90"></div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -top-12 right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                                        <Shield className="w-8 h-8 text-green-500" />
                                    </div>
                                    <div className="absolute top-1/2 -left-12 bg-white p-4 rounded-2xl shadow-xl animate-pulse-slow">
                                        <TrendingUp className="w-8 h-8 text-blue-500" />
                                    </div>
                                    <div className="absolute -bottom-8 right-20 bg-white p-4 rounded-2xl shadow-xl">
                                        <Users className="w-8 h-8 text-purple-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Categories - Alternating BG (Slate-50) */}
                <section className="py-24 bg-slate-50 relative">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Discovery</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">Browse by Category</h2>
                            <p className="text-xl text-text-muted max-w-2xl mx-auto">Explore verified crypto websites across all categories, styled for easy discovery.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mockCategories.filter(cat => cat.featured).map((category, index) => {
                                const gradient = getGradient(index);
                                return (
                                    <Link key={category.id} to={`/category/${category.slug}`} className="group">
                                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full relative overflow-hidden">
                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-opacity group-hover:opacity-20`}></div>

                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                                {/* We'd ideally map icons dynamically, simplified here for now */}
                                                <Star className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className="text-xl font-bold text-text-main mb-2Group-hover:text-primary transition-colors">{category.name}</h3>
                                            <p className="text-text-muted font-medium mb-6">{category.websiteCount} Verified Apps</p>

                                            <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-primary transition-colors">
                                                Explore <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="text-center mt-12">
                            <Link to="/categories">
                                <button className="px-8 py-3 rounded-xl border-2 border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all">
                                    View All Categories
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Featured Websites - White BG */}
                <section className="py-24 bg-white">
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                            <div className="text-center md:text-left">
                                <h2 className="text-4xl font-bold text-text-main mb-2">Featured Websites</h2>
                                <p className="text-xl text-text-muted">Handpicked verified crypto platforms for you</p>
                            </div>
                            <Link to="/browse">
                                <Button variant="outline" className="hidden md:flex">View All</Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredWebsites.map(website => (
                                <WebsiteCard key={website.id} website={website} viewMode="grid" />
                            ))}
                        </div>

                        <Link to="/browse" className="md:hidden mt-8 block">
                            <Button variant="outline" className="w-full">View All</Button>
                        </Link>
                    </div>
                </section>

                {/* Trust & Safety - Slate-50 BG */}
                <section className="py-24 bg-slate-50 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Safety First</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">Why Trust Crypto Suggest?</h2>
                            <p className="text-xl text-text-muted max-w-2xl mx-auto">We take verification seriously so you can explore with confidence.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {trustFactors.map((factor, index) => (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${factor.color.replace('text', 'bg').replace('600', '100')}`}>
                                        <factor.icon className={`w-10 h-10 ${factor.color.split(' ')[1]}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-text-main mb-3">{factor.title}</h3>
                                    <p className="text-text-muted leading-relaxed">{factor.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works - White BG */}
                <section className="py-24 bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">How It Works</h2>
                            <p className="text-xl text-text-muted max-w-2xl mx-auto">Find trusted crypto platforms in 3 simple steps</p>
                        </div>

                        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 border-t-2 border-dashed border-gray-200 z-0"></div>

                            {[
                                { icon: Search, title: 'Browse Categories', desc: 'Explore 15+ categories including exchanges and DeFi', color: 'blue' },
                                { icon: Zap, title: 'Compare', desc: 'Review key features, fees, and community ratings', color: 'purple' },
                                { icon: Check, title: 'Select & Go', desc: 'Choose the best platform and visit securely', color: 'green' }
                            ].map((step, idx) => (
                                <div key={idx} className="relative z-10 text-center group">
                                    <div className="relative inline-block mb-8">
                                        <div className={`w-24 h-24 bg-white rounded-2xl border-4 border-${step.color}-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <step.icon className={`w-10 h-10 text-${step.color}-500`} />
                                        </div>
                                        <div className={`absolute -top-4 -right-4 w-10 h-10 rounded-full bg-${step.color}-500 text-white flex items-center justify-center font-bold text-xl border-4 border-white shadow-md`}>
                                            {idx + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-main mb-3">{step.title}</h3>
                                    <p className="text-text-muted px-4">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup - Gradient BG */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-blue-900 z-0"></div>
                    {/* Noise Pattern Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>

                    <div className="container-custom relative z-20 text-center text-white">
                        <div className="max-w-4xl mx-auto">
                            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 text-sm font-bold mb-6">Weekly Digest</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Stay Ahead of the Curve</h2>
                            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
                                Get verified listings, security alerts, and crypto insights delivered straight to your inbox.
                            </p>

                            <div className="max-w-lg mx-auto bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20 mb-10">
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all font-medium"
                                    />
                                    <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-blue-200 font-medium">
                                <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /> No Spam, ever</div>
                                <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /> Unsubscribe anytime</div>
                                <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /> Weekly Updates</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* For Website Owners CTA - White BG */}
                <section className="py-24 bg-white">
                    <div className="container-custom">
                        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                                <div>
                                    <Badge variant="category" className="bg-orange-100 text-orange-600 border-orange-200 mb-6 px-4 py-1.5">For Developers</Badge>
                                    <h2 className="text-4xl font-bold text-text-main mb-6 leading-tight">
                                        Build Trust with a <br /> Verified Listing
                                    </h2>
                                    <p className="text-xl text-text-muted mb-8 leading-relaxed">
                                        Join 500+ verified platforms. Get discovered by active users and showcase your commitment to security and transparency.
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        {[
                                            'Boost your SEO and brand visibility',
                                            'Gain a "Verified" badge for your platform',
                                            'Access detailed user analytics'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                                                    <Check className="w-3.5 h-3.5 text-orange-600" />
                                                </div>
                                                <span className="font-semibold text-text-main">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to="/submit">
                                        <button className="px-8 py-4 bg-text-main text-white font-bold rounded-xl shadow-xl hover:bg-black transition-all flex items-center gap-2 group">
                                            Submit Your Website <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-lg"></div>
                                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative">
                                        <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-6">
                                            <div>
                                                <div className="text-sm text-text-muted font-bold uppercase tracking-wider mb-1">Monthly Traffic</div>
                                                <div className="text-3xl font-bold">50,000+</div>
                                            </div>
                                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                                                <TrendingUp className="w-6 h-6 text-green-600" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <div className="text-sm text-text-muted font-bold uppercase tracking-wider mb-1">Conversion Rate</div>
                                                <div className="text-3xl font-bold">4.8%</div>
                                            </div>
                                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                                <Users className="w-6 h-6 text-blue-600" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Home;
