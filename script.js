// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Smooth Scroll to Download Section
function scrollToDownload() {
    document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
}

// Animate Counter in Hero
function animateCounter() {
    const counter = document.getElementById('blockedCounter');
    let count = 0;
    const target = 1247;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target.toLocaleString();
        }
    };
    
    // Start animation when element is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCounter();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(counter);
}

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = 'none';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Feature cards animation on scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.feature-card, .download-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => observer.observe(card));
}

// Download buttons functionality
function setupDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.btn-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.download-card');
            const platform = card.querySelector('h3').textContent;
            
            // In production, this would trigger actual downloads
            alert(`Download for ${platform} will start soon!\n\nNote: This is a demo. In production, this would download the actual installer.`);
            
            // Analytics would go here
            console.log(`Download initiated for ${platform}`);
        });
    });
}

// Parallax effect for hero background
function setupParallax() {
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${parallax}px)`;
        }
    });
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Create confetti effect
    const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4', '#ffe66d'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 30);
    }
    
    // Show message
    setTimeout(() => {
        alert('🎉 You found the Easter egg! Welcome to the Rosegarden family!');
    }, 500);
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.opacity = '1';
    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    confetti.style.transition = 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.style.top = window.innerHeight + 'px';
        confetti.style.opacity = '0';
        confetti.style.transform = 'rotate(' + (Math.random() * 360 + 360) + 'deg)';
    }, 50);
    
    setTimeout(() => {
        confetti.remove();
    }, 2100);
}

// Smooth reveal animation for sections
function setupSectionReveals() {
    const sections = document.querySelectorAll('.features, .download, .privacy, .cta');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => observer.observe(section));
}

// Auto-detect user's OS and highlight appropriate download
function detectAndHighlightOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const downloadCards = document.querySelectorAll('.download-card');
    
    let targetOS = '';
    
    if (userAgent.includes('windows')) {
        targetOS = 'Windows';
    } else if (userAgent.includes('mac')) {
        targetOS = 'macOS';
    } else if (userAgent.includes('linux')) {
        targetOS = 'Linux';
    } else if (userAgent.includes('android')) {
        targetOS = 'Android';
    }
    
    downloadCards.forEach(card => {
        const cardTitle = card.querySelector('h3').textContent;
        if (cardTitle === targetOS) {
            card.classList.add('featured');
            const badge = document.createElement('div');
            badge.className = 'featured-badge';
            badge.textContent = 'Recommended for You';
            card.appendChild(badge);
        }
    });
}

// Performance monitoring
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page loaded in ${pageLoadTime}ms`);
        });
    }
}

// Track CTA button clicks
function trackCTAClicks() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log('CTA clicked:', buttonText);
            // In production, send to analytics
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateCounter();
    animateOnScroll();
    setupDownloadButtons();
    setupSectionReveals();
    detectAndHighlightOS();
    logPerformance();
    trackCTAClicks();
    
    console.log('%c🌹 Welcome to Rosegarden!', 'color: #667eea; font-size: 24px; font-weight: bold;');
    console.log('%cInterested in contributing? Check out our GitHub!', 'color: #764ba2; font-size: 14px;');
});

// Handle link clicks in footer
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add loading state to buttons
function addButtonLoadingState(button) {
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite;">⏳</span> Loading...';
    
    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalText;
    }, 2000);
}

// Keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
    
    // Alt + D to go to download section
    if (e.altKey && e.key === 'd') {
        e.preventDefault();
        scrollToDownload();
    }
});

// Add CSS for spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
