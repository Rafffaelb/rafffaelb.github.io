# Deployment Guide for rafffaelb.github.io

## ✅ Repository Successfully Deployed!

Your personal website has been successfully pushed to GitHub at:
**https://github.com/Rafffaelb/rafffaelb.github.io**

---

## 🌐 Enabling GitHub Pages

To make your website live on the internet, follow these steps:

### Step 1: Go to Repository Settings
1. Visit: https://github.com/Rafffaelb/rafffaelb.github.io
2. Click on **"Settings"** tab (top right of repository)

### Step 2: Navigate to Pages Section
1. In the left sidebar, scroll down and click **"Pages"**

### Step 3: Configure GitHub Pages
1. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
2. Click **"Save"**

### Step 4: Wait for Deployment
1. GitHub will process your site (takes 1-5 minutes)
2. You'll see a message: "Your site is live at https://rafffaelb.github.io/"
3. Refresh the page after a minute to see the deployment status

---

## 🎉 Your Website Will Be Live At:

**https://rafffaelb.github.io/**

---

## 📁 Repository Structure

Your repository now contains:

```
rafffaelb.github.io/
├── index.html                          # Main homepage
├── styles.css                          # All styling
├── script.js                           # Interactive features
├── my_photo.jpg                        # Profile photo
├── Curriculum_vitae.pdf                # CV without publications
├── Curriculum_vitae_publications.pdf   # CV with publications
├── project_radio_astronomy_dsp.html    # BINGO project details
├── project_drones_robotics.html        # Drone fault detection project
├── project_quantum_transport.html      # Quantum physics research
├── README.md                           # Documentation
├── .gitignore                          # Git ignore rules
└── .git/                               # Git repository data
```

---

## 🔄 Making Updates to Your Website

Whenever you want to update your website:

### Option 1: Using Git Commands (Recommended)

```powershell
# Navigate to your repository
cd c:\Users\rafam\Documents\Personal_page\rafffaelb.github.io

# Make your changes to files (edit index.html, styles.css, etc.)

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Updated about section" 

# Push to GitHub
git push
```

Your changes will be live in 1-5 minutes!

### Option 2: GitHub Web Interface

1. Go to https://github.com/Rafffaelb/rafffaelb.github.io
2. Click on the file you want to edit
3. Click the pencil icon (✏️) to edit
4. Make your changes
5. Scroll down and click "Commit changes"

---

## 📝 Common Updates You Might Want to Make

### Update Your CV
```powershell
# Replace the PDF file
Copy-Item "path\to\new\CV.pdf" "c:\Users\rafam\Documents\Personal_page\rafffaelb.github.io\Curriculum_vitae.pdf" -Force

# Commit and push
cd c:\Users\rafam\Documents\Personal_page\rafffaelb.github.io
git add Curriculum_vitae.pdf
git commit -m "Updated CV"
git push
```

### Add a New Publication
1. Edit `index.html`
2. Find the Publications section
3. Add your new publication in the same format
4. Commit and push

### Update Project Details
1. Edit the corresponding project HTML file
2. Commit and push

---

## 🔍 SEO & Discoverability

Your website is already optimized with:
- ✅ Meta tags for search engines
- ✅ Open Graph tags for social media
- ✅ Schema.org structured data
- ✅ Semantic HTML

### How to Get Indexed by Google

1. **Google Search Console**:
   - Visit: https://search.google.com/search-console
   - Add your property: `https://rafffaelb.github.io`
   - Verify ownership (GitHub Pages is automatically verified)
   - Submit your sitemap (optional)

2. **Share Your Website**:
   - Add to your LinkedIn profile
   - Include in email signatures
   - Share on academic networks
   - Include in conference presentations

---

## 🎨 Custom Domain (Optional)

If you want to use a custom domain like `rafaelbatista.com`:

1. **Buy a domain** from a registrar (Namecheap, Google Domains, etc.)

2. **Add CNAME file** to your repository:
   ```powershell
   echo "rafaelbatista.com" > c:\Users\rafam\Documents\Personal_page\rafffaelb.github.io\CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. **Configure DNS** at your domain registrar:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `rafffaelb.github.io`

4. **Enable in GitHub Settings**:
   - Go to Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

---

## 📊 Analytics (Optional)

To track visitors, add Google Analytics:

1. **Create Google Analytics account**:
   - Visit: https://analytics.google.com
   - Create a new property

2. **Get tracking code**

3. **Add to index.html** (before `</head>`):
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR-GA-ID');
   </script>
   ```

4. **Commit and push**

---

## 🐛 Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after enabling GitHub Pages
- Check Settings → Pages for deployment status
- Clear browser cache (Ctrl + Shift + R)

### Images Not Showing?
- Verify file names match exactly (case-sensitive)
- Check that images are in the repository root

### Changes Not Appearing?
- Verify git push was successful
- Wait 1-5 minutes for GitHub Pages to rebuild
- Clear browser cache

### 404 Error?
- Ensure `index.html` is in the root directory
- Check GitHub Pages is enabled
- Verify branch is set to `main`

---

## 💡 Tips

1. **Test Locally**: Always open `index.html` locally to test before pushing
2. **Descriptive Commits**: Use clear commit messages for tracking changes
3. **Regular Updates**: Keep publications and CV up-to-date
4. **Backup**: Your local copy in `Personal_page` folder is your backup
5. **Social Sharing**: Share your new website on LinkedIn and academic networks!

---

## 📞 Repository Information

- **Repository URL**: https://github.com/Rafffaelb/rafffaelb.github.io
- **Live Site** (once enabled): https://rafffaelb.github.io/
- **Local Path**: `c:\Users\rafam\Documents\Personal_page\rafffaelb.github.io`
- **Branch**: main
- **Files Deployed**: 11 files (HTML, CSS, JS, PDFs, images)

---

## ✅ Next Steps

1. ⬜ Enable GitHub Pages in repository settings
2. ⬜ Wait for deployment (1-5 minutes)
3. ⬜ Visit https://rafffaelb.github.io/ to see your live site
4. ⬜ Add website link to your LinkedIn profile
5. ⬜ Share with colleagues and on academic networks
6. ⬜ Submit to Google Search Console for indexing

---

**Congratulations! Your professional portfolio website is now on GitHub!** 🎉

*Last Updated: January 27, 2026*
