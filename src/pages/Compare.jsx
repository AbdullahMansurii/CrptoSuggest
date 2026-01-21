import React from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ArrowRight, Star, ExternalLink, Shield } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { useCompare } from '../contexts/CompareContext';


const Compare = () => {
    const { selectedWebsites, removeFromCompare, clearCompare } = useCompare();

    if (selectedWebsites.length === 0) {
        return (
            <PageLayout>
                <div className="container-custom py-20 text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ArrowRight className="w-12 h-12 text-gray-400" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">No Websites to Compare</h1>
                    <p className="text-text-muted mb-8 max-w-md mx-auto">
                        Select up to 3 websites from the browse page to see how they stack up against each other.
                    </p>
                    <Link to="/browse">
                        <Button size="lg">Browse Websites</Button>
                    </Link>
                </div>
            </PageLayout>
        );
    }

    const sections = [
        { id: 'overview', title: 'Overview' },
        { id: 'ratings', title: 'Ratings & Trust' },
        { id: 'features', title: 'Features' },
        { id: 'details', title: 'Platform Details' }
    ];

    return (
        <PageLayout>
            <div className="container-custom py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Compare Platforms</h1>
                        <p className="text-text-muted">Comparing {selectedWebsites.length} items side by side</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={clearCompare}>
                            Clear All
                        </Button>
                        <Link to="/browse">
                            <Button>Add More</Button>
                        </Link>
                    </div>
                </div>

                <div className="overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="min-w-[800px] space-y-8">
                        {/* Header Row */}
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-1 border-r border-gray-100 pr-4 flex items-end pb-4">
                                <span className="font-bold text-lg text-text-muted">Platform</span>
                            </div>
                            {selectedWebsites.map(site => (
                                <div key={site.id} className="col-span-1 relative bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                    <button
                                        onClick={() => removeFromCompare(site.id)}
                                        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(site.name)}&size=64&background=random`}
                                        alt={site.name}
                                        className="w-16 h-16 rounded-xl mb-3 shadow-sm mx-auto"
                                    />
                                    <h3 className="text-xl font-bold text-center mb-1">{site.name}</h3>
                                    <div className="flex justify-center mb-3">
                                        <Badge variant="category">{site.category}</Badge>
                                    </div>
                                    <Link to={`/website/${site.slug}`} className="block">
                                        <Button size="sm" variant="outline" className="w-full">View Details</Button>
                                    </Link>
                                </div>
                            ))}
                            {/* Empty Placeholders */}
                            {[...Array(3 - selectedWebsites.length)].map((_, i) => (
                                <div key={`empty-${i}`} className="col-span-1 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center min-h-[200px] bg-slate-50/50">
                                    <div className="text-center text-gray-400">
                                        <p className="text-sm font-medium">Add another</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Ratings & Trust */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Star className="w-5 h-5 text-primary" />
                                <h3 className="font-bold text-lg">Ratings & Trust</h3>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 divide-y divide-gray-100">
                                <div className="grid grid-cols-4 gap-4 py-3">
                                    <div className="font-medium text-text-muted">User Rating</div>
                                    {selectedWebsites.map(site => (
                                        <div key={site.id} className="text-center font-bold text-lg flex items-center justify-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500 fill-current" /> {site.rating}/5
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-4 gap-4 py-3">
                                    <div className="font-medium text-text-muted">Checks Passed</div>
                                    {selectedWebsites.map(site => (
                                        <div key={site.id} className="text-center font-bold text-green-600 flex items-center justify-center gap-1">
                                            <Shield className="w-4 h-4" /> 4/4
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-4 gap-4 py-3">
                                    <div className="font-medium text-text-muted">Status</div>
                                    {selectedWebsites.map(site => (
                                        <div key={site.id} className="flex justify-center">
                                            <Badge variant="verified">Verified</Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <ExternalLink className="w-5 h-5 text-primary" />
                                <h3 className="font-bold text-lg">Key Details</h3>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 divide-y divide-gray-100">
                                <div className="grid grid-cols-4 gap-4 py-3">
                                    <div className="font-medium text-text-muted">Fees</div>
                                    {selectedWebsites.map(site => (
                                        <div key={site.id} className="text-center font-medium">{site.details.fees}</div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-4 gap-4 py-3">
                                    <div className="font-medium text-text-muted">Founded</div>
                                    {selectedWebsites.map(site => (
                                        <div key={site.id} className="text-center">{site.details.founded}</div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-4 gap-4 py-3">
                                    <div className="font-medium text-text-muted">Headquarters</div>
                                    {selectedWebsites.map(site => (
                                        <div key={site.id} className="text-center">{site.details.headquarters}</div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Feature Comparison */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Check className="w-5 h-5 text-primary" />
                                <h3 className="font-bold text-lg">Features</h3>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                {['staking', 'mobileApp', 'api', 'support247'].map((feature) => (
                                    <div key={feature} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors rounded-lg px-2 -mx-2">
                                        <div className="font-medium text-text-muted capitalize">{feature.replace(/([A-Z])/g, ' $1').trim()}</div>
                                        {selectedWebsites.map(site => (
                                            <div key={site.id} className="flex justify-center">
                                                {site.features[feature] ? (
                                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                                        <Check className="w-5 h-5 text-green-600" />
                                                    </div>
                                                ) : (
                                                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                                                        <X className="w-4 h-4 text-red-300" />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Compare;
