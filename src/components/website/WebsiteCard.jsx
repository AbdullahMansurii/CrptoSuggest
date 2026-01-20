import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const WebsiteCard = ({ website, viewMode = 'grid' }) => {
    if (viewMode === 'list') {
        return (
            <Card hover className="flex items-start gap-6">
                <img
                    src={`https://via.placeholder.com/80?text=${website.name.charAt(0)}`}
                    alt={website.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />

                <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-xl font-bold text-text-main">{website.name}</h3>
                                {website.verified && <Badge variant="verified">Verified</Badge>}
                                {website.featured && <Badge variant="featured">Featured</Badge>}
                            </div>
                            <Badge variant="category">{website.category}</Badge>
                        </div>
                    </div>

                    <p className="text-text-muted mb-4">{website.shortDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {website.features.mobileApp && <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">Mobile App</span>}
                        {!website.features.kycRequired && <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">No KYC</span>}
                        {website.features.fiatSupport && <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded">Fiat Support</span>}
                    </div>

                    <div className="flex gap-3">
                        <Link to={`/website/${website.slug}`} className="btn btn-outline btn-sm">
                            View Details
                        </Link>
                        <a
                            href={website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm inline-flex items-center gap-2"
                        >
                            Visit Website <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </Card>
        );
    }

    // Grid view
    return (
        <Card hover featured={website.featured} className="relative">
            {website.featured && (
                <div className="absolute top-4 right-4">
                    <Badge variant="featured">Featured</Badge>
                </div>
            )}

            <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                    <img
                        src={`https://via.placeholder.com/64?text=${website.name.charAt(0)}`}
                        alt={website.name}
                        className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-text-main">{website.name}</h3>
                            {website.verified && <Badge variant="verified">✓</Badge>}
                        </div>
                        <Badge variant="category">{website.category}</Badge>
                    </div>
                </div>

                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-1">
                    {website.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {website.features.mobileApp && <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">📱 Mobile App</span>}
                    {!website.features.kycRequired && <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">🔓 No KYC</span>}
                    {website.features.fiatSupport && <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded">💳 Fiat</span>}
                </div>

                <div className="flex gap-2">
                    <Link to={`/website/${website.slug}`} className="flex-1">
                        <button className="w-full btn btn-outline btn-sm">View Details</button>
                    </Link>
                    <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                    >
                        <button className="w-full btn btn-primary btn-sm inline-flex items-center justify-center gap-1">
                            Visit <ExternalLink className="w-3 h-3" />
                        </button>
                    </a>
                </div>
            </div>
        </Card>
    );
};

export default WebsiteCard;
