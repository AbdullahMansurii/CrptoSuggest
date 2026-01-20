# Crypto Suggest

A comprehensive frontend-only crypto website directory platform built with React and Tailwind CSS.

## 🚀 Features

- **8 Main Pages**: Home, Browse, Website Detail, Category, Submit, About, Contact, Search Results
- **100+ Mock Websites**: Comprehensive listings across 15 categories
- **Verified Listings**: Trust badges and verification indicators
- **Advanced Search & Filter**: Multi-criteria filtering and sorting
- **Responsive Design**: Mobile-first approach with perfect tablet and desktop experiences
- **Modern UI/UX**: Smooth animations, hover effects, and intuitive navigation
- **External Link Protection**: Modal confirmation before visiting external sites
- **No Backend Required**: All data is static, perfect for deployment

## 📦 Tech Stack

- **React 18+** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations
- **Vite** - Lightning-fast build tool

## 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd Crypto_Suggest

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── layout/          # Header, Footer, PageLayout
│   └── website/         # Website-specific components
├── pages/               # All page components
├── data/                # Mock data (categories, websites, reviews)
├── utils/               # Helper functions
├── hooks/               # Custom React hooks
└── App.jsx              # Main app with routing
```

## 🎨 Key Components

- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Badge**: Verified, featured, category badges
- **Card**: Hover effects and featured variants
- **Modal**: Animated modals with backdrop
- **WebsiteCard**: Grid and list view modes
- **LoadingSkeleton**: Shimmer loading states
- **EmptyState**: No results messaging

## 📊 Mock Data

The platform includes comprehensive mock data:

- **15 Categories**: Exchanges, NFT Marketplaces, Wallets, DeFi, etc.
- **20+ Websites**: Representative samples from each category
- **5+ Reviews**: User feedback examples

All data is located in `src/data/` and can be easily expanded.

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel/Netlify

1. Push your code to GitHub
2. Connect your repository to Vercel or Netlify
3. Deploy with default settings (Vite detected automatically)

## 🎯 Usage

### Browse Websites
- Visit homepage and explore featured categories
- Use the search bar to find specific platforms
- Filter by category, features, blockchain, etc.

### View Website Details
- Click "View Details" on any website card
- Explore tabs: Overview, Features, Details
- See pros/cons, trust score, and verification status

### Submit a Website
- Navigate to "Submit Your Website"
- Fill out the multi-step form
- Form data is logged to console (no backend)

## 🔒 Security Features

- External link confirmation modals
- Verified badge system
- Trust indicators throughout
- Scam-free listings promise

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (single column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns)

## 🎨 Color Palette

- **Primary**: #1F8FE5 (Blue)
- **Primary Dark**: #0B3C5D
- **Accent**: #4FC3F7 (Light Blue)
- **Background Soft**: #F5F9FC
- **Text Main**: #1F2933
- **Text Muted**: #6B7280

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Contact

For questions or feedback, visit the Contact page in the app.

---

Built with ❤️ for the crypto community
