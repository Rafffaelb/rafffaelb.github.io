# Rafael A. Batista - Personal Portfolio Website

A modern, professional personal portfolio website showcasing academic research, projects, and professional achievements in signal processing, reconfigurable computing, and quantum physics.

## 🌟 Features

### Content Sections
- **Hero Section** with professional photo, tagline, and key statistics
- **About** - Comprehensive background and research interests
- **Education** - Complete academic timeline with PhD, Master's, and Bachelor's degrees
- **Research Experience** - Detailed postdoctoral positions at UFCG and TU Dresden
- **Projects** - Three main research areas with dedicated detail pages
- **Publications** - Academic publications with DOI links
- **Skills** - Technical skills with visual progress bars and expertise areas
- **Contact** - Multiple contact methods and social links

### Design Highlights
- 🎨 **Modern Dark Theme** with clean, professional aesthetics
- ✨ **Smooth Animations** including fade-in effects and hover transitions
- 📊 **Interactive Timeline** for education and research experience
- 📈 **Animated Skill Bars** showing proficiency levels
- 🎯 **Accent Colors** using subtle blue highlights for visual interest
- 📱 **Fully Responsive** design optimized for all screen sizes
- 🚀 **Performance Optimized** with efficient CSS and JavaScript

### Technical Features
- ✅ **SEO Optimized** with comprehensive meta tags
- 🔍 **Open Graph Tags** for social media sharing
- 📋 **Schema.org Markup** for enhanced search results
- ♿ **Accessibility** with semantic HTML and ARIA labels
- 🎯 **Smooth Scrolling** navigation with active section highlighting
- 💫 **Intersection Observer** for scroll-triggered animations
- ⌨️ **Keyboard Navigation** support (H for home, C for contact)

## 📁 File Structure

```
Personal_page/
├── index.html                          # Main homepage
├── styles.css                          # Complete stylesheet
├── script.js                           # Interactive functionality
├── project_radio_astronomy_dsp.html    # BINGO project details
├── project_drones_robotics.html        # Drone fault detection project
├── project_quantum_transport.html      # Quantum physics research
├── my_photo.jpg                        # Profile photo
├── Curriculum_vitae.pdf                # CV without publications
├── Curriculum_vitae_publications.pdf   # CV with publications
└── README.md                           # This file
```

## 🎯 Academic Career Highlighted

### Current Position
- **Postdoctoral Researcher** at Federal University of Campina Grande (UFCG)
- Working on BINGO radiotelescope project
- Focus: FPGA-based DSP for radio astronomy

### Previous Position
- **Postdoctoral Researcher** at Technische Universität Dresden (TU Dresden)
- AI-based fault detection in drones using FPGA
- Published at DATE 2024 conference

### Education
- **PhD in Physics** (2019-2023) - UFPB
  - Thesis: Altland-Zirnbauer classification in mesoscopic systems
- **Master's in Physics** (2017-2019) - UFPB
  - Thesis: Chaos-mediated entanglement in quantum dots
- **Bachelor's in Physics** (2013-2017) - UFPB

## 🚀 Projects Featured

### 1. Radio Astronomy DSP
- FPGA-based signal processing for BINGO radiotelescope
- Real-time cosmological signal analysis
- Technologies: FPGA, Vivado, DSP, Radio Astronomy

### 2. AI-based Fault Detection in Drones
- Embedded system for UAV failure diagnosis
- Chaos theory and machine learning on FPGA
- Published at DATE 2024 conference
- Technologies: FPGA, AI/ML, Chaos Theory, Embedded Systems

### 3. Quantum Transport Simulations
- PhD research on mesoscopic quantum systems
- Altland-Zirnbauer symmetry classification
- Random matrix theory and statistical analysis
- Technologies: C++, Python, Statistical Analysis

## 📚 Publications Included

1. **LUCENA, I. R. A. C.; BATISTA, R. A.; RAMOS, J. G. G. S.**
   - "Thermodynamic uncertainty relations in mesoscopic devices"
   - *Physical Review E*, vol. 107, p. 064104, 2023
   - [DOI: 10.1103/PhysRevE.107.064104](https://doi.org/10.1103/PhysRevE.107.064104)

2. **BATISTA, R. A.; et al.**
   - "Towards an Embedded System for Failure Diagnosis in Drones Using AI and SAC-DM on FPGA"
   - *DATE 2024*, Valencia, Spain, 2024

3. **PhD Thesis**
   - "Unveiling the universal class categorization of Altland-Zirnbauer in mesoscopic systems"
   - Federal University of Paraíba, 2023

## 💻 Technologies & Skills

### Programming Languages
- Python (90% proficiency)
- C/C++ (85% proficiency)
- MATLAB (80% proficiency)
- VHDL/Verilog (75% proficiency)

### Tools & Frameworks
- Xilinx Vivado
- MATLAB/Simulink
- Git/GitHub
- LaTeX

### Technical Expertise
- FPGA Design & Implementation
- Digital Signal Processing
- Real-time Systems
- Hardware Acceleration
- Scientific Computing
- Statistical Analysis
- Numerical Simulations
- Embedded Systems

### Languages
- Portuguese (Native)
- English (Advanced)
- Spanish (Intermediate)
- German (Basic)
- Italian (Basic)

## 🎨 Design System

### Color Palette
- **Background:** Dark greys (#1a1a1a, #2a2a2a, #333333)
- **Text:** White (#ffffff) and light greys (#e0e0e0, #b0b0b0)
- **Accent:** Blue (#60a5fa, #3b82f6)
- **Borders:** Medium grey (#555555)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** 600-700 weight
- **Body:** 400-500 weight
- **Line Height:** 1.6 for readability

### Components
- Timeline with animated markers
- Project cards with hover effects
- Skill bars with animated progress
- Publication cards with metadata
- Responsive navigation with smooth scrolling

## 🌐 Deployment Options

### GitHub Pages (Recommended)
1. Create a repository named `yourusername.github.io`
2. Push all files to the main branch
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io`

### Other Options
- **Netlify:** Drag and drop deployment with automatic builds
- **Vercel:** Fast deployment with edge network
- **Traditional Hosting:** Upload to any web hosting service

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lightweight CSS (~10KB)
- Optimized JavaScript (~5KB)
- Fast initial load time
- Smooth 60fps animations
- Efficient Intersection Observer usage

## 🔧 Customization

### Updating Content
1. **Personal Info:** Edit `index.html` hero section
2. **Projects:** Modify project cards and detail pages
3. **Publications:** Add to publications section in `index.html`
4. **Skills:** Update skill bars and expertise lists

### Changing Colors
All colors are defined as CSS variables in `styles.css`:
```css
:root {
  --color-accent: #60a5fa;  /* Change this for different accent color */
  --color-bg-dark: #1a1a1a; /* Background color */
  /* ... more variables */
}
```

### Adding Sections
Follow the existing pattern:
```html
<section id="new-section" class="max-w-6xl mx-auto px-6 py-24">
  <h3 class="section-title">
    <span class="section-icon">🆕</span>
    New Section
  </h3>
  <!-- Content here -->
</section>
```

## 📞 Contact Information

- **Email:** rafael.alves.batista@gmail.com
- **GitHub:** [github.com/Rafffaelb](https://github.com/Rafffaelb)
- **LinkedIn:** [rafael-alves-845470149](https://linkedin.com/in/rafael-alves-845470149)
- **ORCID:** [0000-0002-7906-1505](https://orcid.org/0000-0002-7906-1505)

## 📄 License

This website template is free to use for personal purposes. Please credit the original design if you use it.

## 🙏 Acknowledgments

- Design inspired by modern portfolio best practices
- Inter font family by Rasmus Andersson
- Icons from Unicode emoji set

---

**Built with ❤️ using HTML, CSS, and vanilla JavaScript**

*Last updated: January 2026*