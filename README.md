<h1 align="center">
<a href="https://jojimathew.xyz">
  jojimathew.xyz
</a>
</h1>

<p align="center">
  Personal website built with Gatsby
</p>

![Node.js](https://img.shields.io/badge/node-20.18.0-brightgreen.svg)
![Gatsby](https://img.shields.io/badge/gatsby-5.13.0-663399.svg)
![React](https://img.shields.io/badge/react-18.0.0-61dafb.svg)

## Prerequisites

**Node.js 20+ Required** - This project uses Gatsby 5 which requires Node.js 20 or higher.

First, ensure you have Node.js 20+ installed. Recommended to use nvm:

```bash
# Install and use the project's Node version
nvm install && nvm use

# Verify Node version
node --version  # Should show v20.18.0
```

Then check if you have Yarn:

```bash
yarn --version
```

If you see a version number, you're good to go. If not, install Yarn:

```bash
npm install -g yarn
```

## 🚀 Quick Start

**Important**: Always use the correct Node version before running any commands:

```bash
nvm use  # Switches to Node 20.18.0 as specified in .nvmrc
```

1. **Install dependencies**

```bash
yarn
```

2. **Start development server**

```bash
yarn develop
```

Your site will be running at `http://localhost:8000`

## 🚢 Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment process:

1. **Node 20 Environment**: GitHub Actions now uses Node.js 20 for faster builds
2. **Gatsby 5 Build**: Enhanced build process with improved caching
3. **Asset Optimization**: Modern image formats and optimizations
4. **Deploy to GitHub Pages**: Automatic deployment with trailing slashes

You can view the deployment status in the Actions tab of the repository.

### Manual Deployment

```bash
nvm use               # Ensure correct Node version
yarn build            # Build with Gatsby 5
yarn deploy           # Deploy to GitHub Pages
```

## 🛠️ Development

### Project Structure
- Edit pages in `src/pages/`
- Styles are in `src/pages/style/`
- Images and other static assets go in `src/images/`

### Technology Stack
- **Framework**: Gatsby 5.13.0
- **React**: 18.0.0 with concurrent features
- **Node.js**: 20.18.0 LTS (Active until April 2029)
- **Styling**: SCSS with modern CSS features
- **Images**: gatsby-plugin-image v3 with enhanced optimization

### Available Scripts

```bash
yarn develop    # Start development server (with React 18 features)
yarn build      # Production build (with prefix-paths)
yarn serve      # Serve production build locally
yarn clean      # Clean Gatsby cache
yarn deploy     # Deploy to GitHub Pages
```

## 📝 License

This project is licensed under the MIT License.
