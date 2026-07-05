import { useState, useEffect } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { profile, navLinks } from '../data/portfolio.js'
import { Github, Linkedin } from './SocialIcons.jsx'
import styles from './Header.module.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  // Initialize to dark theme constantly
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  // Handle transparent to blurry background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={`${styles.header} ${scrolled ? 'shadow-sm' : ''}`}
      aria-label="Main navigation"
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault()
            const heroSection = document.getElementById('home')
            if (heroSection) {
              heroSection.scrollIntoView({ behavior: 'smooth' })
            }
            setExpanded(false)
          }}
        >
          <span className={styles.logoBracket}>&lt;</span>
          <span className={styles.logoText}>AJITH</span>
          <span className={styles.logoBracket}>/&gt;</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className={styles.toggleButton}
        >
          <span className={`navbar-toggler-icon ${styles.toggleIcon}`}></span>
        </Navbar.Toggle>
 
        <Navbar.Offcanvas 
          id="basic-navbar-nav" 
          aria-labelledby="basic-navbar-nav-label"
          placement="start"
          className={styles.offcanvasContainer}
        >
          <Offcanvas.Header closeButton className={styles.offcanvasHeader}>
            <Offcanvas.Title id="basic-navbar-nav-label" className={styles.offcanvasTitle}>
              <span className={styles.logoBracket}>&lt;</span>
              <span className={styles.logoText}>AJITH</span>
              <span className={styles.logoBracket}>/&gt;</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.offcanvasBody}>
            <Nav className="ms-auto align-items-center">
              {navLinks.map((link) => (
                <Nav.Link 
                  key={link.href} 
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setExpanded(false)}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
            <div className={`mt-auto pt-4 ${styles.offcanvasFooter} d-lg-none`}>
              <div className="d-flex gap-3 justify-content-center">
                <a href="https://github.com/Aji1897" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ajith-kumaran-v-a5a745400" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
