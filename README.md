# TechieMindz Website

A modern, professional website for TechieMindz - a tech education platform focused on educating and motivating young minds through innovative technology learning.

## 🚀 Features

- **Modern React Architecture** - Built with React 18 and Vite for optimal performance
- **Beautiful Dark Theme UI** - Professional tech-themed design with gradient accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Intersection Observer API for scroll-triggered animations
- **Interactive Components** - Engaging user experience with hover effects and transitions
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Home** - Hero section with call-to-action buttons
2. **About** - Introduction to TechieMindz with skills display
3. **Projects** - Showcase of featured projects with image galleries
4. **Media Gallery** - YouTube video embeds and photo gallery
5. **Learning** - Learning resources and tutorials
6. **Contact** - Contact form with validation and social links
7. **Footer** - Quick links and social media integration

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Navigation (if needed)
- **React Icons** - Icon library
- **CSS Modules** - Scoped styling
- **Intersection Observer API** - Scroll animations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sahillpawar/TechieMindz-Website.git
cd TechieMindz-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🚀 Deployment to GitHub Pages

The project is configured for GitHub Pages deployment.

1. Install gh-pages package (already in package.json):
```bash
npm install
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the production version
- Deploy to the `gh-pages` branch
- Make your site available at `https://sahillpawar.github.io/TechieMindz-Website/`

## ⚙️ Configuration

### Updating Base Path

The base path is configured in `vite.config.js`:
```javascript
base: '/TechieMindz-Website/',
```

If your repository name is different, update this path accordingly.

### Customizing Content

- **Projects**: Edit `src/components/Projects/Projects.jsx`
- **Media**: Update video IDs and image URLs in `src/components/MediaGallery/MediaGallery.jsx`
- **Learning Topics**: Modify `src/components/Learning/Learning.jsx`
- **Contact Info**: Update `src/components/Contact/Contact.jsx`
- **Colors & Styling**: Modify CSS variables in `src/styles/global.css`

## 📝 Project Structure

```
TechieMindz-Website/
├── public/
│   └── assets/          # Static assets (images, videos)
├── src/
│   ├── components/      # React components
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Learning/
│   │   ├── MediaGallery/
│   │   └── Projects/
│   ├── hooks/           # Custom React hooks
│   │   └── useIntersectionObserver.js
│   ├── styles/          # Global styles
│   │   └── global.css
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --bg-primary: #0a0e27;
  --accent-primary: #00d4ff;
  --accent-secondary: #7c3aed;
  /* ... more variables */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Header/Header.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sahil Pawar**
- GitHub: [@sahillpawar](https://github.com/sahillpawar)
- Website: [TechieMindz](https://sahillpawar.github.io/TechieMindz-Website/)

## 🙏 Acknowledgments

- Built with React and Vite
- Icons from React Icons
- Images from Unsplash (replace with your own)
- Design inspired by modern tech websites
