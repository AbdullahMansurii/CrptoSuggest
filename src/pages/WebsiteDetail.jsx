import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Share2, Check, X } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import Breadcrumb from '../components/common/Breadcrumb';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { getWebsiteBySlug } from '../data/mockData';

const WebsiteDetail = () => {
    const { slug } = useParams();
    const website = getWebsiteBySlug(slug);
    const [activeTab, setActiveTab] = useState('overview');
    const [showExternalModal, setShowExternalModal] = useState(false);

    if (!website) {
        return (
            <PageLayout>
                <div className="container-custom py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Website Not Found</h1>
                    <Link to="/browse"><Button>Browse All Websites</Button></Link>
                </div>
            </PageLayout>
        );
    }

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: website.category, href: `/category/${website.category.toLowerCase().replace(/ /g, '-')}` },
        { label: website.name }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'features', label: 'Features' },
        { id: 'details', label: 'Details' }
    ];

    return (
        <PageLayout>
            <div className="container-custom py-12">
                <Breadcrumb items={breadcrumbItems} />

                {/* Header Card */}
                <Card className="mb-8">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-4xl font-bold text-primary flex-shrink-0">
                            {website.name.charAt(0)}
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <h1 className="text-3xl font-bold text-text-main">{website.name}</h1>
                                {website.verified && <Badge variant="verified">Verified</Badge>}
                                {website.featured && <Badge variant="featured">Featured</Badge>}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="category">{website.category}</Badge>
                                <span className="text-sm text-text-muted">Verified on {website.verifiedDate}</span>
                            </div>

                            <p className="text-text-muted mb-4">{website.shortDescription}</p>

                            <div className="flex gap-3">
                                <Button
                                    onClick={() => setShowExternalModal(true)}
                                    className="inline-flex items-center gap-2"
                                >
                                    Visit Website <ExternalLink className="w-4 h-4" />
                                </Button>
                                <Button variant="outline">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Tabs */}
                <div className="border-b mb-8">
                    <div className="flex gap-8">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 font-medium transition-colors relative ${activeTab === tab.id
                                        ? 'text-primary'
                                        : 'text-text-muted hover:text-text-main'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                <Card>
                                    <h2 className="text-2xl font-bold mb-4">About {website.name}</h2>
                                    <p className="text-text-muted leading-relaxed">{website.longDescription}</p>
                                </Card>

                                <Card>
                                    <h2 className="text-2xl font-bold mb-4">Pros & Cons</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                                <Check className="w-5 h-5" /> Pros
                                            </h3>
                                            <ul className="space-y-2">
                                                {website.pros.map((pro, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm">
                                                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span>{pro}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                                                <X className="w-5 h-5" /> Cons
                                            </h3>
                                            <ul className="space-y-2">
                                                {website.cons.map((con, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm">
                                                        <X className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                                        <span>{con}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}

                        {activeTab === 'features' && (
                            <Card>
                                <h2 className="text-2xl font-bold mb-6">Features</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {Object.entries(website.features).map(([key, value]) => (
                                        <div key={key} className="flex items-center gap-3">
                                            {value ? (
                                                <Check className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <X className="w-5 h-5 text-gray-300" />
                                            )}
                                            <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {activeTab === 'details' && (
                            <Card>
                                <h2 className="text-2xl font-bold mb-6">Details</h2>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b">
                                        <span className="text-text-muted">Founded</span>
                                        <span className="font-medium">{website.details.founded}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b">
                                        <span className="text-text-muted">Headquarters</span>
                                        <span className="font-medium">{website.details.headquarters}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b">
                                        <span className="text-text-muted">Supported Countries</span>
                                        <span className="font-medium">{website.details.supportedCountries}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b">
                                        <span className="text-text-muted">Languages</span>
                                        <span className="font-medium">{website.details.languages.join(', ')}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 pb-4 border-b">
                                        <span className="text-text-muted">Blockchains</span>
                                        <span className="font-medium">{website.details.blockchains.join(', ')}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <span className="text-text-muted">Fees</span>
                                        <span className="font-medium">{website.details.fees}</span>
                                    </div>
                                </div>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <h3 className="font-bold mb-4">Quick Info</h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <span className="text-text-muted">Category:</span>
                                    <div className="mt-1"><Badge variant="category">{website.category}</Badge></div>
                                </div>
                                <div>
                                    <span className="text-text-muted">Status:</span>
                                    <div className="mt-1"><Badge variant="verified">Verified</Badge></div>
                                </div>
                                <div>
                                    <span className="text-text-muted">Added:</span>
                                    <div className="mt-1 font-medium">{website.dateAdded}</div>
                                </div>
                                <div>
                                    <span className="text-text-muted">Last Updated:</span>
                                    <div className="mt-1 font-medium">{website.lastUpdated}</div>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="font-bold mb-4">Official Website</h3>
                            <a
                                href={website.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline break-all"
                            >
                                {website.url}
                            </a>
                        </Card>
                    </div>
                </div>
            </div>

            {/* External Link Modal */}
            <Modal
                isOpen={showExternalModal}
                onClose={() => setShowExternalModal(false)}
                title="You're Leaving Crypto Suggest"
            >
                <div className="text-center py-4">
                    <p className="text-text-muted mb-6">
                        You are about to visit an external website. Crypto Suggest is not responsible for the content or security of external sites.
                    </p>
                    <p className="font-medium mb-6">{website.url}</p>
                    <div className="flex gap-3 justify-center">
                        <Button variant="outline" onClick={() => setShowExternalModal(false)}>
                            Cancel
                        </Button>
                        <a href={website.url} target="_blank" rel="noopener noreferrer">
                            <Button>Continue to Website</Button>
                        </a>
                    </div>
                </div>
            </Modal>
        </PageLayout>
    );
};

export default WebsiteDetail;
