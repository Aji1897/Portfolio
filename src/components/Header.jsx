import { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { profile, navLinks } from '../data/portfolio.js'
import styles from './Header.module.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

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
 
        <Navbar.Collapse id="basic-navbar-nav" className={styles.collapseContainer}>
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.href} 
                href={link.href}
                className={styles.navLink}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
