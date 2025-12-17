# 🌹 Rosegarden Landing Page

A beautiful, modern landing page for the Rosegarden privacy-focused web browser.

## ✨ Features

### Design
- 🎨 **Modern Gradient Design** - Eye-catching purple gradient theme
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- ⚡ **Smooth Animations** - Scroll-triggered reveals and micro-interactions
- 🎭 **Interactive Elements** - Animated counters, floating browser mockup
- 🌓 **Clean Typography** - Using Inter font for maximum readability

### Sections
1. **Hero Section** - Eye-catching headline with animated browser mockup
2. **Features Grid** - 6 key features with icons and descriptions
3. **Download Section** - Platform-specific download buttons
4. **Privacy Section** - Privacy-first messaging with visual elements
5. **CTA Section** - Final conversion with gradient background
6. **Footer** - Links, social media, and site navigation

### Interactions
- ✅ Animated tracker counter in hero
- ✅ Scroll-triggered section reveals
- ✅ Mobile menu toggle
- ✅ Smooth scrolling navigation
- ✅ Download button click handlers
- ✅ OS detection for recommended downloads
- ✅ Easter egg (Konami code!)

## 🚀 Quick Start

1. **Open the landing page:**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

2. **Or serve with a local server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (npx)
   npx serve
   
   # PHP
   php -S localhost:8000
   ```

3. **Visit:** `http://localhost:8000`

## 📁 File Structure

```
rosegarden-landing/
├── index.html      # Main HTML file
├── style.css       # All styles and responsive design
├── script.js       # Interactions and animations
└── README.md       # This file
```

## 🎨 Color Palette

```css
--primary: #667eea        /* Purple */
--secondary: #764ba2      /* Deep purple */
--text-dark: #1a202c      /* Near black */
--text-light: #718096     /* Gray */
--bg-light: #f7fafc       /* Very light gray */
--gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

## 🖼️ Sections Breakdown

### Hero Section
- Animated badge with pulse effect
- Large headline with gradient text
- Two CTA buttons (primary and secondary)
- Stats counter (users, rating, data collection)
- Animated browser mockup with tracker counter

### Features Grid
- 6 feature cards in responsive grid
- Icons, titles, descriptions, and bullet points
- Hover effects with subtle lift
- Scroll-triggered fade-in animations

### Download Section
- 4 platform cards (Windows, Mac, Linux, Android)
- Auto-detection of user's OS
- "Most Popular" badge on featured platform
- Download size and version info

### Privacy Section
- Two-column layout with text and visual
- Privacy checkpoints with icons
- Animated shield with glow effect
- Call-to-action link to privacy policy

### CTA Section
- Full-width gradient background
- Large call-to-action button
- Trust indicators (Free, No Account, No Credit Card)

### Footer
- Brand logo and tagline
- 4 columns of links (Product, Company, Legal, Community)
- Social media icons
- Copyright and bottom links

## 📱 Responsive Breakpoints

```css
@media (max-width: 968px)  /* Tablet */
@media (max-width: 640px)  /* Mobile */
```

**Mobile Optimizations:**
- Hamburger menu navigation
- Single-column layouts
- Larger touch targets
- Simplified animations
- Optimized font sizes

## ⚡ Performance

- **Minimal Dependencies** - Pure HTML/CSS/JS
- **Optimized Assets** - SVG icons for crisp display
- **Lazy Loading** - Animations trigger on scroll
- **Fast Loading** - < 50KB total page size
- **Web Font** - Inter from Google Fonts CDN

## 🎯 Conversion Points

1. **Primary CTA** - "Download Free" in hero
2. **Learn More** - Scroll to features
3. **Platform Downloads** - Specific OS buttons
4. **Privacy CTA** - Build trust then convert
5. **Final CTA** - Last chance before footer

## 🛠️ Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
}
```

### Update Download Links
In `script.js`, modify the download button handler:
```javascript
button.addEventListener('click', function() {
    // Add your actual download URLs here
    window.location.href = 'https://your-download-url.com';
});
```

### Add Analytics
In `script.js`, add your tracking code:
```javascript
function trackCTAClicks() {
    // Add Google Analytics, Plausible, etc.
    gtag('event', 'click', { 'event_category': 'CTA' });
}
```

## 🎁 Easter Eggs

Try the **Konami Code**:
```
↑ ↑ ↓ ↓ ← → ← → B A
```

Or press **Alt + D** to jump to downloads!

## 🚢 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/your-username/rosegarden-landing.git
git push -u origin main
```

Enable GitHub Pages in repository settings → Pages → Source: main branch

### Netlify
1. Drag and drop the folder to netlify.com/drop
2. Or connect GitHub repo for automatic deployments

### Vercel
```bash
npm i -g vercel
vercel
```

## 📈 TODO / Future Enhancements

- [ ] Add video demo in hero section
- [ ] Integrate real download statistics
- [ ] Add testimonials/reviews section
- [ ] Create comparison table vs other browsers
- [ ] Add FAQ section
- [ ] Implement dark mode toggle
- [ ] Add blog preview section
- [ ] Integrate newsletter signup
- [ ] Add language switcher
- [ ] Create alternative landing pages for A/B testing

## 🤝 Contributing

Want to improve the landing page?

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this for your own projects!

## 💬 Questions?

Open an issue or reach out on social media!

---

Made with 💜 by the Rosegarden team
