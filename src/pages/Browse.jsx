import React, { useState } from 'react';
import { Grid, List } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import WebsiteGrid from '../components/website/WebsiteGrid';
import Button from '../components/common/Button';
import { mockWebsites } from '../data/mockData';

const Browse = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('popular');

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Browse Websites' }
    ];

    return (
        <PageLayout>
            <div className="container-custom py-12">
                <Breadcrumb items={breadcrumbItems} />

                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-text-main mb-2">Browse All Crypto Websites</h1>
                    <p className="text-text-muted">Showing {mockWebsites.length} verified websites</p>
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div className="flex gap-2">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="input py-2"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="newest">Newest First</option>
                            <option value="az">A-Z</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Website Grid */}
                <WebsiteGrid websites={mockWebsites} viewMode={viewMode} />
            </div>
        </PageLayout>
    );
};

export default Browse;
