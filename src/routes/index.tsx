import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

// SVG Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.[...]
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.[...]
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07[...]
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.[...]
  </svg>
)

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const CheckCircle = () => (
  <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
  </svg>
)

export default function Home() {
  const videos = [
    { id: '2G8i7NL5q9g', title: 'Featured Interior Project' },
    { id: 'GK1VK_bS56Q', title: 'Interior Showcase' },
    { id: '7D_hRUhZUSQ', title: 'Design Highlights' },
  ]

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          Interior <span>Worlds</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Our Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem' }}>
            Get in Touch
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=1920&q=80"
            alt="Luxury interior design living room"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-tag">Premium Interior Design</div>
          <h1>
            Spaces That Tell<br />
            <em>Your Story</em>
          </h1>
          <p>
            We craft interiors that are an expression of you — blending
            aesthetics with function to create spaces that feel effortlessly
            refined and deeply personal. From concept to completion, we bring
            your vision to life.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Book Consultation <ArrowRight />
            </a>
            <a href="#work" className="btn-outline">
              View Our Work
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="scroll-line" />
          Scroll to explore
        </div>
      </section>

      <div className="divider-wave" />

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-grid">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Elegant interior design project"
            />
            <div className="about-badge">
              <span className="num">8+</span>
              <span className="label">Years of Excellence</span>
            </div>
          </div>
          <div className="about-content">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              Design is the Silent<br />
              <em>Ambassador</em> of Your Space
            </h2>
            <p className="section-desc" style={{ marginBottom: '1rem' }}>
              Interior Worlds is a boutique design studio dedicated to
              transforming residential and commercial spaces into timeless
              environments. We visit you, understand your vision, and craft
              designs that resonate with your personality and lifestyle.
            </p>
            <p className="section-desc">
              Every project is a unique collaboration — no two spaces are alike.
              We travel across <strong>India and the UAE</strong> to bring
              world-class design sensibilities right to your doorstep.
            </p>
            <div className="about-features">
              {[
                { title: 'Home Interiors', desc: 'Living rooms, bedrooms, kitchens & more' },
                { title: 'Office Spaces', desc: 'Productive, inspiring work environments' },
                { title: 'Custom Furniture', desc: 'Bespoke pieces tailored to your space' },
                { title: 'On-Site Service', desc: 'We come to you — India & UAE' },
              ].map((f) => (
                <div className="feature-item" key={f.title}>
                  <CheckCircle />
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="services-header">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">
            Comprehensive Design <em>Services</em>
          </h2>
          <p className="section-desc">
            From initial consultation to final styling, every step is handled
            with precision, care, and creative passion.
          </p>
        </div>
        <div className="services-grid">
          {[
            { n: '01', title: 'Space Planning', desc: 'Thoughtful layout design that optimises flow, functionality, and the relationship between spaces — making every square foot count.' },
            { n: '02', title: 'Concept & Mood Boards', desc: 'Visual storytelling that captures the feel of your future space before a single piece is moved — clarity from day one.' },
            { n: '03', title: 'Material & Finish Selection', desc: 'Expert guidance on textures, colours, fabrics, and surfaces that work in harmony with your lifestyle and preferences.' },
            { n: '04', title: 'Furniture Curation', desc: 'Sourcing and arranging furniture that is beautiful, functional, and perfectly scaled to your rooms.' },
            { n: '05', title: 'Lighting Design', desc: 'Layered lighting solutions — ambient, task, and accent — that set the mood and elevate every corner of your space.' },
            { n: '06', title: 'Project Management', desc: 'End-to-end coordination with contractors and vendors so you enjoy a seamless, stress-free transformation.' },
          ].map((s) => (
            <div className="service-card" key={s.n}>
              <div className="service-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS / PORTFOLIO */}
      <section className="videos-section" id="work">
        <div className="videos-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Watch Our <em>Work in Action</em>
          </h2>
          <p className="section-desc">
            Browse our curated video portfolio showcasing real transformations
            and design journeys across India and the UAE.
          </p>
        </div>

        <div className="videos-grid">
          <div className="video-card featured">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1&mute=1&loop=1&playlist=${videos[0].id}&rel=0&modestbranding=1`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {videos.slice(1).map((v) => (
            <div className="video-card" key={v.id}>
              <iframe
                src={`https://www.youtube.com/embed/${v.id}?autoplay=1&mute=1&loop=1&playlist=${v.id}&rel=0&modestbranding=1`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>

        <div className="youtube-subscribe">
          <a
            href="https://youtube.com/@interiorworldss?si=H15NVKO8oZypPoJg"
            target="_blank"
            rel="noopener noreferrer"
            className="subscribe-btn"
          >
            <YouTubeIcon />
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <div className="section-label">Get in Touch</div>
            <h2>
              Ready to Transform<br />
              <em>Your Space?</em>
            </h2>
            <p>
              Reach out via WhatsApp for a quick conversation about your project.
              We serve clients across <strong>India</strong> and the{' '}
              <strong>UAE</strong> — wherever you are, we will come to you.
            </p>

            <div className="whatsapp-cards">
              {/* India */}
              <a
                href="https://wa.me/917012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-card"
              >
                <div className="whatsapp-icon">
                  <WhatsAppIcon />
                </div>
                <div className="whatsapp-info">
                  <div className="whatsapp-label">
                    <span className="flag">🇮🇳</span>
                    <span className="country">India</span>
                  </div>
                  <span className="whatsapp-number">+91 70123 45678</span>
                  <span className="whatsapp-sub">Available 9 AM – 8 PM IST</span>
                </div>
                <svg className="whatsapp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              {/* UAE */}
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-card"
              >
                <div className="whatsapp-icon">
                  <WhatsAppIcon />
                </div>
                <div className="whatsapp-info">
                  <div className="whatsapp-label">
                    <span className="flag">🇦🇪</span>
                    <span className="country">UAE</span>
                  </div>
                  <span className="whatsapp-number">+971 50 123 4567</span>
                  <span className="whatsapp-sub">Available 9 AM – 8 PM GST</span>
                </div>
                <svg className="whatsapp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="social-section">
              <h3>Follow Our Journey</h3>
              <div className="social-links">
                <a
                  href="https://youtube.com/@interiorworldss?si=H15NVKO8oZypPoJg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link youtube"
                >
                  <YouTubeIcon /> YouTube
                </a>
                <a
                  href="https://www.instagram.com/hindu_pintoopaswan?igsh=NnNtYTg2ODUzaWhw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                >
                  <InstagramIcon /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/hindupintoo?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                >
                  <FacebookIcon /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <p className="logo">Interior <span>Worlds</span></p>
              <p>
                Boutique interior design studio serving clients across India and
                the UAE. We transform spaces into lived-in works of art — one
                room at a time.
              </p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Space Planning</a></li>
                <li><a href="#services">Furniture Curation</a></li>
                <li><a href="#services">Lighting Design</a></li>
                <li><a href="#services">Project Management</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://youtube.com/@interiorworldss" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://www.instagram.com/hindu_pintoopaswan" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.facebook.com/hindupintoo" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="#contact">WhatsApp (India)</a></li>
                <li><a href="#contact">WhatsApp (UAE)</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Interior Worlds. All rights reserved.</span>
            <span>Designed with passion for beautiful spaces.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
