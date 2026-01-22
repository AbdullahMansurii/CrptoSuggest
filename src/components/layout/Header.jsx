import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronRight, Wallet, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import ConnectWalletButton from '../wallet/ConnectWalletButton';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Browse', path: '/browse' },
        { name: 'Categories', path: '/categories' },
        { name: 'Bookmarks', path: '/bookmarks' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100/50 py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo - Text Removed as requested */}
                    <Link to="/" className="flex items-center group relative z-50">
                        <motion.div
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src="/logo.png" alt="Crypto Suggest" className="h-10 w-auto" />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation - Renovated: Clean, minimal */}
                    <nav className="hidden lg:flex items-center gap-1 mx-4">
                        {navLinks.map(link => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="relative px-4 py-2 text-sm font-bold transition-colors group"
                                >
                                    <span className={`relative z-10 transition-colors ${isActive ? 'text-primary' : 'text-gray-600 hover:text-gray-900'}`}>
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full mx-4"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="absolute inset-0 bg-gray-50 rounded-lg scale-0 group-hover:scale-100 transition-transform -z-10 origin-center duration-200 opacity-50"></span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Side Actions - Standardized Sizes */}
                    <div className="hidden lg:flex items-center gap-3">
                        <ConnectWalletButton className="!h-11 !px-6 !py-0 flex items-center justify-center bg-gray-900 hover:bg-black text-white shadow-none border-0" />
                        <Link to="/submit">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="h-11 px-6 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center gap-2"
                            >
                                <Sparkles className="w-4 h-4 fill-current opacity-80" />
                                <span>Submit Website</span>
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 bg-white/50 rounded-lg backdrop-blur-sm border border-gray-200 relative z-50"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 top-0 z-40 bg-white lg:hidden flex flex-col pt-24 px-6"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center justify-between p-4 rounded-2xl text-xl font-bold transition-all ${location.pathname === link.path
                                            ? 'bg-blue-50 text-primary'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && <ChevronRight className="w-5 h-5" />}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto mb-10 space-y-4">
                            <ConnectWalletButton className="w-full justify-center h-14 text-lg" />
                            <Link to="/submit" onClick={() => setMobileMenuOpen(false)} className="block">
                                <Button className="w-full justify-center h-14 text-lg bg-gray-900 hover:bg-black text-white">
                                    Submit Your Website
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
