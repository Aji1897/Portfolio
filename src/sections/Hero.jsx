import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRight, Code2, Palette, Laptop, Sparkles, Mail, FileDown, GitBranch, Zap, Smartphone, ChevronDown, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from '../components/SocialIcons.jsx'
import ajithPortrait from '../assets/images/ajith-portrait.png'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/portfolio.js'
import styles from './Hero.module.css'

function Hero() {
  // Define floating cards metadata
  const floatingCards = [
    { text: 'React.js', icon: <Monitor size={16} className="text-info" />, className: styles.cardReact, delay: 0 },
    { text: 'JavaScript ES6+', icon: <Code2 size={16} className="text-warning" />, className: styles.cardJs, delay: 0.4 },
    { text: 'Responsive UI', icon: <Smartphone size={16} className="text-success" />, className: styles.cardResponsive, delay: 0.8 },
    { text: 'Clean Code', icon: <Sparkles size={16} className="text-primary" />, className: styles.cardClean, delay: 1.2 },
    { text: 'Git & GitHub', icon: <GitBranch size={16} className="text-danger" />, className: styles.cardGit, delay: 1.6 },
    { text: 'Performance Focused', icon: <Zap size={16} className="text-warning" />, className: styles.cardPerf, delay: 2.0 },
  ]

  // Define technology pills
  const techStack = [
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'PHP',
    'MySQL',
    'Git'
  ]

  return (
    <section id="home" className={styles.hero}>
      {/* Decorative Grid Pattern Background */}
      <div className={styles.gridPattern}></div>

      {/* Decorative Blur Backgrounds */}
      <div className={styles.glowingBlob1}></div>
      <div className={styles.glowingBlob2}></div>
      <div className={styles.glowingBlob3}></div>

      {/* Floating Particles (Framer Motion driven) */}
      <div className={styles.particleContainer}>
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 3 + 2; // 2px to 5px
          const duration = Math.random() * 15 + 15; // 15s to 30s
          const delay = Math.random() * -15;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className={styles.particle}
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                background: Math.random() > 0.5 ? 'rgba(0, 242, 254, 0.4)' : 'rgba(181, 23, 158, 0.3)',
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.1, 0.8, 0.1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
              }}
            />
          )
        })}
      </div>

      <Container className={styles.contentWrapper}>
        <Row className="align-items-center g-5">
          {/* Left Text details */}
          <Col lg={7} md={12}>
            <div className="d-flex flex-column gap-3 align-items-center align-items-lg-start">
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
                <h2 className={styles.subtitle}>
                  Frontend Developer | React.js Developer
                </h2>
              </Reveal>
              
              <Reveal delay={400}>
                <p className={styles.description}>
                  I build fast, scalable, and responsive web applications using React.js, JavaScript, Bootstrap, and modern frontend technologies. Passionate about creating clean user experiences with performance-driven frontend development.
                </p>
              </Reveal>

              {/* Technology Pills */}
              <Reveal delay={450}>
                <div className={styles.techStack}>
                  {techStack.map((tech) => (
                    <span key={tech} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
 
              {/* CTA Action Buttons */}
              <Reveal delay={500} className={styles.actions}>
                <a className={styles.btnPrimary} href="#projects">
                  View Projects <ArrowRight size={16} className="ms-2" />
                </a>
                <a 
                  className={styles.btnSecondary} 
                  href="./Ajith_Kumaran_Frontend_Developer_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Reveal>

              {/* Minimalist Outline Social Links */}
              <Reveal delay={600}>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/Aji1897" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/ajith-kumaran-v-a5a745400" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="mailto:ajikumar1218@zohomail.in" className={styles.socialIcon} aria-label="Email">
                    <Mail size={18} />
                  </a>
                  <a href="./Ajith_Kumaran_Frontend_Developer_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Resume">
                    <FileDown size={18} />
                  </a>
                </div>
              </Reveal>
            </div>
          </Col>

          {/* Right graphics area */}
          <Col lg={5} md={12} className="d-flex justify-content-center">
            <div className={styles.visualContainer}>
              
              {/* Subtle blue/purple glow behind portrait */}
              <div className={styles.portraitGlow}></div>

              {/* Glassmorphism VS Code Window */}
              <motion.div 
                className={styles.vscodeWindow}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className={styles.windowHeader}>
                  <div className={styles.windowControls}>
                    <span className={`${styles.dot} ${styles.dotRed}`}></span>
                    <span className={`${styles.dot} ${styles.dotYellow}`}></span>
                    <span className={`${styles.dot} ${styles.dotGreen}`}></span>
                  </div>
                  <span className={styles.windowTitle}>ajith_kumaran ~ developer.js</span>
                </div>
                <div className={styles.windowBody}>
                  <pre className={styles.codeSnippet}>
                    <code>
                      <span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> = &#123;{"\n"}
                      {"  "}<span className={styles.property}>name</span>: <span className={styles.string}>"Ajith Kumaran"</span>,{"\n"}
                      {"  "}<span className={styles.property}>role</span>: <span className={styles.string}>"Frontend Developer"</span>,{"\n"}
                      {"  "}<span className={styles.property}>experience</span>: <span className={styles.string}>"1.5+ Years"</span>,{"\n"}
                      {"  "}<span className={styles.property}>stack</span>: [
                      <span className={styles.string}>"React"</span>, 
                      <span className={styles.string}>"JavaScript"</span>, 
                      <span className={styles.string}>"Bootstrap"</span>
                      ]{"\n"}&#125;
                    </code>
                  </pre>
                </div>
              </motion.div>

              {/* Portrait Container */}
              <motion.div 
                className={styles.portraitContainer}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={ajithPortrait}
                  alt="Ajith Kumaran Portrait"
                  className={styles.portraitImage}
                />
              </motion.div>

              {/* Floating Glass Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`${styles.floatingCard} ${card.className}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -10, 0] 
                  }}
                  transition={{ 
                    y: {
                      duration: 4 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.delay
                    },
                    opacity: {
                      duration: 0.6,
                      delay: 0.4 + index * 0.1
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className={styles.cardIcon}>{card.icon}</span>
                  <span className={styles.cardText}>{card.text}</span>
                </motion.div>
              ))}

              {/* Small Premium Status Badges */}
              <motion.div 
                className={`${styles.statusBadge} ${styles.badgeOpportunities}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
              >
                <span className={styles.badgeIndicator}>🟢</span>
                <span>Open to Opportunities</span>
              </motion.div>

              <motion.div 
                className={`${styles.statusBadge} ${styles.badgeProjects}`}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <span>🚀</span>
                <span>15+ Projects Delivered</span>
              </motion.div>

            </div>
          </Col>
        </Row>
      </Container>

      {/* Animated Scroll Down Indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll Down</span>
        <motion.div
          className={styles.scrollMouse}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className={styles.scrollArrow} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
