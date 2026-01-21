import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import WebsiteDetail from './pages/WebsiteDetail';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import SubmitWebsite from './pages/SubmitWebsite';
import Compare from './pages/Compare';
import { CompareProvider } from './contexts/CompareContext';
import { WalletProvider } from './contexts/WalletContext';
import CompareBar from './components/common/CompareBar';

function App() {
    return (
        <WalletProvider>
            <CompareProvider>
                <Router>
                    <div className="min-h-screen bg-background-soft font-sans text-text-main">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/browse" element={<Browse />} />
                            <Route path="/category/:category" element={<Browse />} />
                            <Route path="/website/:slug" element={<WebsiteDetail />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/submit" element={<SubmitWebsite />} />
                            <Route path="/compare" element={<Compare />} />
                        </Routes>
                        <CompareBar />
                    </div>
                </Router>
            </CompareProvider>
        </WalletProvider>
    );
}

export default App;
