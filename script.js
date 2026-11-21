// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Calculate offset to account for fixed header
                const headerOffset = 65;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            // If it's an external link, allow normal navigation
            window.location.href = targetId;
        }
    });
});

// Add active class to navigation when scrolling to sections
let activeSection = '';
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

let isScrolling = false;

window.addEventListener('scroll', function () {
    if (!isScrolling) {
        window.requestAnimationFrame(function () {
            updateActiveSection();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

function updateActiveSection() {
    let current = '';
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= (sectionTop - 150)) { // Adjusted offset for better mobile experience
            current = section.getAttribute('id');
        }
    });

    // Only update if the active section has changed
    if (current && current !== activeSection) {
        activeSection = current;

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections and cards
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.project-card, .timeline-item, .publication-item, .skill-category').forEach(element => {
    observer.observe(element);
});

// Function to handle scroll position for fixed header
function adjustScrollPosition() {
    if (window.location.hash) {
        const hash = window.location.hash;
        const element = document.querySelector(hash);
        if (element) {
            setTimeout(() => {
                const headerOffset = 65;
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo(0, offsetPosition);
            }, 1);
        }
    }
}

// Run on page load
window.addEventListener('load', adjustScrollPosition);

// Animate skill bars when they come into view
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-level');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Animate stats counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Observe stats and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const numMatch = text.match(/\d+/);
                if (numMatch) {
                    const target = parseInt(numMatch[0]);
                    stat.dataset.suffix = text.replace(/\d+/, '');
                    animateCounter(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsContainer = document.querySelector('.stats-container');
if (statsContainer) {
    statsObserver.observe(statsContainer);
}

// Mobile menu toggle (hamburger)
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

function setMobileMenu(open) {
    if (!menuToggle || !mobileMenu) return;
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
        setMobileMenu(!mobileMenu.classList.contains('open'));
    });

    // Close the menu after tapping a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            setMobileMenu(false);
        });
    });

    // Close with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            setMobileMenu(false);
            menuToggle.focus();
        }
    });

    // Close when clicking outside the header
    document.addEventListener('click', function (e) {
        if (mobileMenu.classList.contains('open') && !e.target.closest('.site-header')) {
            setMobileMenu(false);
        }
    });

    // Close automatically when widening to desktop layout
    window.addEventListener('resize', function () {
        if (window.innerWidth > 900 && mobileMenu.classList.contains('open')) {
            setMobileMenu(false);
        }
    });
}

// Add copy email functionality
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('contextmenu', function (e) {
        // Allow right-click context menu
    });
});

// Parallax effect for hero section (subtle, desktop only)
let ticking = false;
const heroSection = document.querySelector('.min-h-screen');

window.addEventListener('scroll', function () {
    // Disable on mobile to prevent freeze/jank
    if (window.innerWidth < 768) return;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            const scrolled = window.pageYOffset;

            if (heroSection && scrolled < window.innerHeight) {
                heroSection.style.transform = `translateY(${scrolled * 0.3}px)`; // Reduced speed
                heroSection.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }

            ticking = false;
        });

        ticking = true;
    }
});

// Add tooltip functionality for tech items
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function (e) {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        if (!e.target.matches('input, textarea')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Press 'C' to scroll to contact
    if (e.key === 'c' || e.key === 'C') {
        if (!e.target.matches('input, textarea')) {
            const contact = document.querySelector('#contact');
            if (contact) {
                contact.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// Add loading state
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Lazy load images if needed
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Console message for developers
console.log('%c👋 Hello Developer!', 'color: #60a5fa; font-size: 20px; font-weight: bold;');
console.log('%cInterested in how this site was built?', 'color: #888888; font-size: 14px;');
console.log('%cFeel free to reach out: rafael.alves.batista@gmail.com', 'color: #888888; font-size: 14px;');

// Track scroll depth for analytics (if needed)
let maxScroll = 0;

window.addEventListener('scroll', function () {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // You can send this to analytics
        if (maxScroll > 25 && maxScroll < 26) {
            console.log('User scrolled 25% of the page');
        }
        if (maxScroll > 50 && maxScroll < 51) {
            console.log('User scrolled 50% of the page');
        }
        if (maxScroll > 75 && maxScroll < 76) {
            console.log('User scrolled 75% of the page');
        }
        if (maxScroll > 95) {
            console.log('User scrolled to the bottom of the page');
        }
    }
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('Personal website loaded successfully!');

    // Add any initialization code here

    // Example: Log page view (you can replace this with actual analytics)
    console.log('Page view logged:', new Date().toISOString());
});