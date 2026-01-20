import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import WebsiteDetail from './pages/WebsiteDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import SubmitWebsite from './pages/SubmitWebsite';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/website/:slug" element={<WebsiteDetail />} />
                <Route path="/category/:slug" element={<Browse />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/submit" element={<SubmitWebsite />} />
                <Route path="/categories" element={<Browse />} />
            </Routes>
        </Router>
    );
}

export default App;
