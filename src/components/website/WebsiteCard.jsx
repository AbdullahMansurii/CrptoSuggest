import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, ArrowRight, Layers } from 'lucide-react';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { useCompare } from '../../contexts/CompareContext';

const WebsiteCard = ({ website, viewMode = 'grid', className = '' }) => {
    const logoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(website.name)}&size=128&background=0D6EFD&color=fff&bold=true`;

    const getCategoryColor = (category) => {
        // Simple hash to pick a color
        const colors = [
            'bg-blue-50 text-blue-600 border-blue-100',
            'bg-purple-50 text-purple-600 border-purple-100',
            'bg-indigo-50 text-indigo-600 border-indigo-100',
            'bg-pink-50 text-pink-600 border-pink-100',
            'bg-orange-50 text-orange-600 border-orange-100',
        ];
        return colors[category.length % colors.length];
    };

    const { addToCompare, removeFromCompare, isInCompare } = useCompare();
    const isSelected = isInCompare(website.id);

    const handleCompareClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isSelected) {
            removeFromCompare(website.id);
        } else {
            addToCompare(website);
        }
    };

    if (viewMode === 'list') {
        return (
            <div className={`bg-slate-50 rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col md:flex-row gap-6 group ${className}`}>
                <img
                    src={logoUrl}
                    alt={website.name}
                    className="w-24 h-24 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />

                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">{website.name}</h3>
                            {website.featured && (
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-sm flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> Featured
                                </span>
                            )}
                        </div>
                        <span className={`px-3 py-1 rounded-lg text-sm font-semibold border ${getCategoryColor(website.category)}`}>
                            {website.category}
                        </span>
                    </div>

                    <p className="text-text-muted mb-4 line-clamp-2">{website.shortDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {website.features.mobileApp && <span className="text-xs px-2.5 py-1 bg-white text-gray-600 rounded-md font-medium border border-gray-200">📱 Mobile App</span>}
                        {!website.features.kycRequired && <span className="text-xs px-2.5 py-1 bg-green-50 text-green-700 rounded-md font-medium border border-green-200">🔓 No KYC</span>}
                        {website.features.fiatSupport && <span className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md font-medium border border-indigo-200">💳 Fiat</span>}
                    </div>

                    <div className="flex gap-4">
                        <Link to={`/website/${website.slug}`} className="btn btn-outline btn-sm rounded-lg hover:shadow-md bg-white border-gray-200">
                            Details
                        </Link>
                        <a
                            href={website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm rounded-lg shadow-blue-200 shadow-lg hover:shadow-xl hover:shadow-blue-300/50 inline-flex items-center gap-2"
                        >
                            Visit Site <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    // Grid View
    return (
        <Link to={`/website/${website.slug}`} className={`group block h-full bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
            <div className="p-6 h-full flex flex-col relative">
                {/* Selection Overlay Effect */}
                {isSelected && (
                    <div className="absolute inset-0 border-2 border-primary rounded-3xl pointer-events-none z-10 bg-primary/5"></div>
                )}

                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={logoUrl}
                            alt={website.name}
                            className="w-12 h-12 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                        />
                        <div>
                            <h3 className="font-bold text-lg text-text-main group-hover:text-primary transition-colors">{website.name}</h3>
                            <div className="flex items-center gap-1 text-xs font-medium text-text-muted">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span>{website.rating}</span>
                                <span className="mx-1">•</span>
                                <span>{website.reviewCount} reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-text-muted text-sm mb-4 line-clamp-2 flex-grow group-hover:text-text-main transition-colors">
                    {website.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className={getCategoryColor(website.category)}>{website.category}</Badge>
                    {website.featured && (
                        <div className="relative">
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-sm relative z-10">
                                Featured
                            </span>
                            <span className="absolute top-0 right-0 -mr-1 -mt-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></span>
                        </div>
                    )}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-100">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCompareClick}
                        className={`flex-1 flex items-center justify-center gap-2 border-slate-200 hover:bg-slate-100 ${isSelected ? 'bg-primary/10 text-primary border-primary/30' : 'text-text-muted'}`}
                    >
                        <Layers className={`w-4 h-4 ${isSelected ? 'fill-current' : ''}`} />
                        {isSelected ? 'Added' : 'Compare'}
                    </Button>
                    <Button size="sm" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 group-hover:from-primary group-hover:to-accent transition-all duration-300 shadow-md group-hover:shadow-primary/30">
                        Details <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </Link>
    );
};

export default WebsiteCard;
