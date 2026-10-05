import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowUp, Mail, Phone } from 'lucide-react'
import { Github, Linkedin } from './SocialIcons.jsx'
import { profile, socials } from '../data/portfolio.js'
import styles from './Footer.module.css'

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  // Track window scroll height to show/hide back-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const githubUrl = socials.find((s) => s.label.toLowerCase() === 'github')?.href || 'https://github.com/Aji1897'
  const linkedinUrl = socials.find((s) => s.label.toLowerCase() === 'linkedin')?.href || 'https://www.linkedin.com/in/ajith-kumaran-v-a5a745400'

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} {profile.name} • {profile.role}. All rights reserved.
        </p>

        <ul className={styles.links} aria-label="Social connections">
          <li>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
          </li>
          <li>
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </li>
          <li>
            <a 
              href={`mailto:${profile.email}`} 
              className={styles.link}
              aria-label="Email Ajith"
            >
              <Mail size={18} />
            </a>
          </li>
          <li>
            <a 
              href={`tel:${profile.phoneRaw}`} 
              className={styles.link}
              aria-label="Call Ajith"
            >
              <Phone size={18} />
            </a>
          </li>
        </ul>
      </Container>

      {/* Scroll to Top floating arrow */}
      <button
        onClick={scrollToTop}
        className={`${styles.topButton} ${showTopBtn ? styles.showBtn : ''}`}
        aria-label="Scroll back to top of the page"
        title="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}

export default Footer
