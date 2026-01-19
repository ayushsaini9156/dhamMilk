# DairyDelight - Milk Products Website

A modern React + Vite website for DairyDelight milk products, built with Tailwind CSS, React Router, and Framer Motion.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server (runs on http://localhost:3000)
npm run dev
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library

## 📁 Project Structure

```
dham/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Features

- ✅ Responsive navigation with mobile menu
- ✅ Smooth page transitions with Framer Motion
- ✅ Modern UI with Tailwind CSS
- ✅ Client-side routing with React Router
- ✅ Custom color scheme for dairy products
- ✅ Reusable component structure
- ✅ Contact form with state management
- ✅ Product showcase with animations

## 🎯 Available Routes

- `/` - Home page
- `/products` - Products listing
- `/about` - About us
- `/contact` - Contact form

## 🛠️ Customization

### Colors

Custom colors are defined in `tailwind.config.js`:
- Primary blue shades (50-900)
- Dairy-themed colors (cream, milk, butter)

### Fonts

The project uses:
- Inter - For body text
- Poppins - For headings

To change fonts, update the `fontFamily` section in `tailwind.config.js`.

## 📝 License

This project is open source and available for personal and commercial use.
