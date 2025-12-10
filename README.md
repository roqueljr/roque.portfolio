# 🚀 Personal Portfolio - Roque Longgakit

A modern, responsive portfolio website showcasing my skills as a Full Stack Developer and Technical Support Specialist. Built with React, Vite, and Tailwind CSS, featuring a sleek dark theme with terminal-inspired design elements.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF?style=for-the-badge&logo=vite)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections](#sections)
- [Installation](#installation)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek slate design with emerald and cyan accents
- 💻 **Terminal-Inspired UI** - Code brackets, monospace fonts, and programmer aesthetics
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop screens
- 🎯 **Smooth Navigation** - Auto-detecting scroll spy with animated indicators
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Interactive Animations** - Hover effects, transitions, and pulse animations
- 📊 **Section Highlights** - Projects, skills, experience, education, and certifications
- 🌐 **Easy Deployment** - Ready to deploy on Render, Vercel, or Netlify

## 🛠️ Technologies Used

### Frontend
- **React 18.2.0** - UI component library
- **Vite 4.3.9** - Fast build tool and dev server
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Lucide React 0.263.1** - Beautiful icon library

### Tools & Utilities
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing
- **Git** - Version control

## 📑 Sections

### 1. **Hero Section**
Eye-catching introduction with call-to-action buttons

### 2. **About Me**
Professional summary and personal introduction

### 3. **Technical Skills**
- **Development**: JavaScript, Python, React, Node.js, SQL, Git, Docker, AWS
- **Technical Support**: Customer Support, Troubleshooting, Ticketing Systems, System Diagnostics, JIRA/Zendesk, Network Support, Active Directory, VPN/RDP

### 4. **Work Experience**
- Technical Support Specialist (2022 - Present)
- Junior Developer / Support (2021 - 2022)

### 5. **Featured Projects**
- E-Commerce Platform
- Task Management API
- Data Visualization Dashboard

### 6. **Education**
Bachelor of Science in Computer Science (2018 - 2022)

### 7. **Certifications**
- CompTIA A+ Certification
- ITIL Foundation Certificate
- AWS Certified Cloud Practitioner
- Microsoft Certified: Azure Fundamentals

### 8. **Contact**
Email, GitHub, and LinkedIn integration

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:5173`

### Build Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy on Render

1. Push your code to GitHub
2. Go to [Render.com](https://render.com)
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
6. Click "Create Static Site"

Your portfolio will be live at `https://your-site.onrender.com`

### Alternative Platforms
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` branch

## 📁 Project Structure

```
portfolio/
├── public/
│   └── logo.png
├── src/
│   ├── App.jsx          # Main portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── README.md            # This file
```

## 🎨 Customization

### Update Personal Information

Edit `src/App.jsx` and modify:

```javascript
// Your name
<span className="text-xl font-bold">&lt;YourName /&gt;</span>

// Skills arrays
const skills = ["Your", "Skills", "Here"];
const supportSkills = ["Your", "Support", "Skills"];

// Projects
const projects = [/* Your projects */];

// Certificates
const certificates = [/* Your certificates */];

// Contact links
href="mailto:your.email@example.com"
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
```

### Change Theme Colors

Edit `src/App.jsx` or `tailwind.config.js`:
- Primary: `emerald-400` / `emerald-500`
- Secondary: `cyan-400` / `cyan-500`
- Background: `slate-950` / `slate-900`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Roque Longgakit**

- 📧 Email: rja.longgakit@gmail.com
- 💼 LinkedIn: [linkedin.com/in/roqueljr](https://linkedin.com/in/roqueljr)
- 🐙 GitHub: [github.com/roqueljr](https://github.com/roqueljr)
- 🌐 Portfolio: [roque-portfolio.onrender.com](https://roque-portfolio.onrender.com/)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

Made with ❤️ and ☕ by Roque Longgakit

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=yourusername.portfolio)

</div>

---

## 🙏 Acknowledgments

- Icons by [Lucide Icons](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [React](https://react.dev/)

## 📝 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add project filtering by technology
- [ ] Include testimonials section
- [ ] Add downloadable resume button
- [ ] Integrate contact form with backend
- [ ] Add analytics tracking

---

**Last Updated**: December 2025
---

**Last Updated**: December 2025
