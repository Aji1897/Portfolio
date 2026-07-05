import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRight, Code2, Palette, Laptop, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import webDevImage from '../assets/images/web_development.png'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/portfolio.js'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative Blur Backgrounds */}
      <div className={styles.glowingBlob1}></div>
      <div className={styles.glowingBlob2}></div>

      <Container className={styles.contentWrapper}>
        <Row className="align-items-center g-5">
          {/* Left Text details */}
          <Col lg={7} md={12}>
            <div className="d-flex flex-column gap-3 align-items-start">
              <Reveal delay={100}>
                <span className={styles.eyebrow}>
                  <Sparkles size={14} className="me-1 text-warning" /> Welcome to my space
                </span>
              </Reveal>
              
              <Reveal delay={200}>
                <h1 className={styles.title}>
                  Hi, I'm <br />
                  <span className={styles.gradientText}>{profile.name}</span>
                </h1>
              </Reveal>
              
              <Reveal delay={300}>
                <h2 className="h4 text-light-strong fw-semibold mb-2">
                  {profile.role}
                </h2>
              </Reveal>
              
              <Reveal delay={400}>
                <p className={styles.subtitle}>
                  {profile.summary}
                </p>
              </Reveal>

              <Reveal delay={500} className={styles.actions}>
                <a className={styles.btnPrimary} href="#projects">
                  Explore Projects <ArrowRight size={16} className="ms-2" />
                </a>
                <a className={styles.btnSecondary} href="#contact">
                  Let's Connect
                </a>
              </Reveal>
            </div>
          </Col>

          {/* Right graphics area */}
          <Col lg={5} md={12} className="d-flex justify-content-center">
            <Reveal delay={300} className={styles.illustrationContainer}>
              {/* Floating Orbit Rings */}
              <div className={`${styles.orbitRing} ${styles.ring1}`}></div>
              <div className={`${styles.orbitRing} ${styles.ring2}`}></div>

              {/* Floating badges */}
              <motion.div 
                className={`${styles.floatingBadge} ${styles.badgeReact}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Laptop size={16} className="text-info" />
                <span>React.js</span>
              </motion.div>

              <motion.div 
                className={`${styles.floatingBadge} ${styles.badgeCode}`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Code2 size={16} className="text-warning" />
                <span>Modern JS</span>
              </motion.div>

              <motion.div 
                className={`${styles.floatingBadge} ${styles.badgeDesign}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Palette size={16} className="text-danger" />
                <span>UI Design</span>
              </motion.div>

              {/* Central Web Development Showcase Mockup */}
              <div className={styles.mockupWindow}>
                <div className={styles.windowHeader}>
                  <span className={`${styles.dot} ${styles.dotRed}`}></span>
                  <span className={`${styles.dot} ${styles.dotYellow}`}></span>
                  <span className={`${styles.dot} ${styles.dotGreen}`}></span>
                  <span className={styles.windowTitle}>ajith_kumaran ~ creative_developer</span>
                </div>
                <div className={styles.windowBody}>
                  <img
                    src={webDevImage}
                    alt="Web Development Illustration"
                    className={styles.webDevImage}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&fit=crop'
                    }}
                  />
                </div>
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
