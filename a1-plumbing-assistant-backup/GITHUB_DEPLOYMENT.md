# GitHub Pages Deployment Instructions for A-1 Plumbing Assistant

## Quick Setup Guide

### Step 1: Create GitHub Repository
1. Go to https://github.com and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name the repository: `a1-plumbing-assistant`
4. Make sure it's set to "Public" (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Upload Files
1. In your new repository, click "uploading an existing file"
2. Upload all files from the `/home/ubuntu/a1-plumbing-github-pages/` directory:
   - `index.html`
   - `logo.png`
   - `favicon.ico`
   - `README.md`
   - `assets/` folder (with all contents)

### Step 3: Enable GitHub Pages
1. In your repository, click on "Settings" tab
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Site
- Your site will be available at: `https://[your-username].github.io/a1-plumbing-assistant/`
- It may take a few minutes for the site to become available

## File Structure
```
a1-plumbing-assistant/
├── index.html          # Main HTML file
├── logo.png           # A-1 Plumbing logo
├── favicon.ico        # Website icon
├── README.md          # Repository documentation
└── assets/
    ├── index-DSHZlcD5.css    # Stylesheet
    └── index-nifpJJ4m.js     # JavaScript application
```

## Important Notes
- The repository must be public for free GitHub Pages hosting
- Changes to files will automatically update the live site
- Custom domains can be configured in the Pages settings
- SSL is automatically provided by GitHub

## Backup URL Structure
Once deployed, your backup assistant will be available at:
`https://[your-github-username].github.io/a1-plumbing-assistant/`

This provides a reliable backup that you control completely through your GitHub account.

