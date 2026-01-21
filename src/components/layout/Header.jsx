import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Button from '../common/Button';
import ConnectWalletButton from '../wallet/ConnectWalletButton';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Browse', path: '/browse' },
        { name: 'Categories', path: '/categories' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className="sticky top-0 z-30 bg-white shadow-sm">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/logo.png" alt="Crypto Suggest" className="h-14" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-text-main hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Wallet & CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ConnectWalletButton />
                        <Link to="/submit">
                            <Button variant="primary">Submit Your Website</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(link => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-text-main hover:text-primary font-medium transition-colors py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/submit" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="primary" className="w-full">Submit Your Website</Button>
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
