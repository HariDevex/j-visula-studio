const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.motion || {};

// Icons as SVG components
const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.673.15-.197.297-.767.964-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-458.4 1.331-2.792.218-.297 1.178-.6 1.725-.75.273-.149.471-.149.673.15.198.297.767.964.94 1.164.173.199.347.223.644.075.297-.15 1.255-.462 2.39-1.475.883-.788 1.48-1.761 1.653-2.059.173-.297.018-.458.4-2.792.219-.297 1.178-.6 1.725-.75.273-.149.471-.149.673.15zM12 22c-5.524 0-10-4.476-10-10S6.476 2 12 2s10 4.476 10 10-4.476 10-10 10zm6.5-12.5c0-3.582-2.918-6.5-6.5-6.5s-6.5 2.918-6.5 6.5c0 3.582 2.918 6.5 6.5 6.5s6.5-2.918 6.5-6.5z"/>
  </svg>
);

const InstaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.387 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Package data
const packages = [
  {
    id: "basic",
    name: "Basic Session",
    price: "₹2,999",
    description: "Perfect for quick portraits and casual photoshoots",
    features: ["1 Hour Session", "10 Edited Photos", "Online Gallery", "Digital Downloads"],
  },
  {
    id: "premium",
    name: "Premium Shoot",
    price: "₹7,999",
    description: "Ideal for portraits, couple shoots, and small events",
    features: ["2 Hours Session", "25 Edited Photos", "Online Gallery", "Digital Downloads", "Print Quality Images"],
    featured: true,
  },
  {
    id: "cinematic",
    name: "Cinematic Package",
    price: "₹15,999",
    description: "Complete coverage for events and special occasions",
    features: ["4 Hours Coverage", "50+ Edited Photos", "Online Gallery", "All Digital Files", "Photo Album", "Highlight Video"],
  },
];

// Gallery images
const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-921569e5ea80?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e3?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
];

// Testimonials
const testimonials = [
  { name: "Priya Sharma", role: "Bride", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", text: "Absolutely loved our wedding photos! The team captured every emotion perfectly. The editing was stunning!" },
  { name: "Arjun Mehta", role: "Model", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", text: "Best photo experience I've had. The team made me feel comfortable and the results exceeded my expectations." },
  { name: "Sneha Reddy", role: "Content Creator", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", text: "Professional, timely, and incredibly talented. My social media engagement has increased significantly since working with them!" },
];

// Trust stats
const stats = [
  { icon: <CheckIcon />, number: "50+", label: "Edits Completed" },
  { icon: <ClockIcon />, number: "24-48", label: "Hour Turnaround" },
  { icon: <StarIcon />, number: "4.9/5", label: "Client Rating" },
  { icon: <GlobeIcon />, number: "Online", label: "Serving Clients" },
];

// Components
function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">J VISUAL <span className="logo-accent">STUDIO</span></div>
          <ul className="nav-links">
            <li><a href="#packages">Packages</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="cta-btn">Book Now</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-orb1"></div>
      <div className="hero-orb2"></div>
      <div className="container">
        <div className="hero-content">
          <div className="tagline">
            <CameraIcon /> Professional Photography Studio
          </div>
          <h1 className="hero-title">
            Capturing Moments, <span className="hero-accent">Creating Memories</span>
          </h1>
          <p className="hero-subtitle">
            We don't just take photos — we craft visual stories that last a lifetime. Every frame, a masterpiece. Every moment, forever.
          </p>
          <div className="hero-ctas">
            <a href="#gallery" className="primary-cta">View Our Work</a>
            <a href="#contact" className="secondary-cta">Book a Session</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="section-header">
          <span className="section-label"><CameraIcon /> Photography Packages</span>
          <h2 className="section-title">Choose Your Package</h2>
        </div>
        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <div className={`package-card ${pkg.featured ? 'featured' : ''}`} key={pkg.id}>
              {pkg.featured && <span className="package-badge">Popular</span>}
              <div className="package-icon">{i === 0 ? '📷' : i === 1 ? '👥' : '💕'}</div>
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">{pkg.price}<span>/session</span></div>
              <p className="package-desc">{pkg.description}</p>
              <div className="package-features">
                {pkg.features.map((f, j) => (
                  <div className="feature" key={j}><CheckIcon /> {f}</div>
                ))}
              </div>
              <a href="#contact" className={`book-btn ${pkg.featured ? 'featured' : ''}`}>Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Wedding", "Portrait", "Couple", "Fashion"];
  
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label"><InstaIcon /> Instagram Feed</span>
          <h2 className="section-title">Latest Work</h2>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap'}}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 20px',
                background: activeCategory === cat ? 'linear-gradient(135deg, #08D9D6, #06b6b3)' : 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px'
              }}>
              {cat}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {galleryImages.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img src={src} alt={`Gallery ${i+1}`} />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustProof() {
  return (
    <section className="trust" id="trust">
      <div className="container">
        <h2 className="section-title" style={{textAlign: 'center', marginBottom: '48px'}}>Why Choose J Visual Studio</h2>
        <div className="trust-grid">
          {stats.map((stat, i) => (
            <div className="trust-card" key={i}>
              <div className="trust-icon">{stat.icon}</div>
              <div className="trust-number">{stat.number}</div>
              <div className="trust-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Client Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">{'★★★★★'}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <img src={t.image} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-desc">
              Ready to capture your special moments? Send us your image and get a quick quote today. We'd love to hear from you!
            </p>
            <div className="contact-ctas">
              <a href="https://wa.me/919677589131" className="whatsapp-btn" target="_blank">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a href="https://instagram.com" className="insta-btn" target="_blank">
                <InstaIcon /> Follow on Instagram
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We\'ll get back to you soon.'); }}>
            <h3 className="form-title">Send a Message</h3>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Tell us about your requirements..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp">
      <a href="https://wa.me/919677589131" className="whatsapp-float" target="_blank">
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">J VISUAL <span className="logo-accent">STUDIO</span></div>
            <p className="footer-desc">
              Professional photography and creative visual design. We transform ordinary images into cinematic visuals.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" className="social-link" target="_blank"><InstaIcon /></a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#packages">Photo Editing</a></li>
              <li><a href="#packages">Retouching</a></li>
              <li><a href="#packages">Poster Design</a></li>
              <li><a href="#packages">Social Media</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#contact">Get a Quote</a></li>
              <li><a href="#contact">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 J Visual Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Packages />
        <Gallery />
        <TrustProof />
        <Testimonials />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);