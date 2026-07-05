import { Container, Row, Col } from 'react-bootstrap'
import { Download, Mail, MapPin, Smile, Award } from 'lucide-react'
import confetti from 'canvas-confetti'
import Reveal from '../components/Reveal.jsx'
import { highlights, profile } from '../data/portfolio.js'
import styles from './About.module.css'

function About() {
  const triggerConfetti = () => {
    // Shoot confetti from the bottom left/right
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    })
  }

  return (
    <section id="about" className={styles.about}>
      <Container>
        <Row className="g-5 align-items-stretch">
          {/* Left Column: Biography details */}
          <Col lg={7} md={12}>
            <div className={styles.highlightCard}>
              <Reveal className={styles.heading}>
                <span className={styles.eyebrow}>About Me</span>
                <h2 className={styles.title}>Building Modern & Scalable Web Experiences</h2>
              </Reveal>

              <Reveal delay={100}>
                <p className={styles.text}>{profile.about}</p>
              </Reveal>

              <Reveal delay={200}>
                <ul className={styles.detailsList} aria-label="Personal details">
                  <li className={styles.detailsItem}>
                    <span className={styles.detailLabel}>
                      <MapPin size={16} className="me-2 text-info" /> Location
                    </span>
                    <span className={styles.detailValue}>{profile.location}</span>
                  </li>
                  <li className={styles.detailsItem}>
                    <span className={styles.detailLabel}>
                      <Mail size={16} className="me-2 text-danger" /> Email
                    </span>
                    <span className={styles.detailValue}>
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </span>
                  </li>
                  <li className={styles.detailsItem}>
                    <span className={styles.detailLabel}>
                      <Award size={16} className="me-2 text-warning" /> Focus
                    </span>
                    <span className={styles.detailValue}>Frontend Development | React.js | Responsive UI</span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={300}>
                <a 
                  href="./Ajith_Kumaran_Frontend_Developer_Resume.pdf" 
                  download="Ajith_Kumaran_Resume.pdf"
                  onClick={triggerConfetti} 
                  className={styles.btnCv}
                  aria-label="Download Curriculum Vitae"
                >
                  <Download size={16} /> Download Resume
                </a>
              </Reveal>
            </div>
          </Col>

          {/* Right Column: Statistics highlight cells */}
          <Col lg={5} md={12} className="d-flex flex-column justify-content-between">
            <div className="h-100 d-flex flex-column justify-content-center ">
              <Reveal className={styles.heading} delay={100}>
                <span className={styles.eyebrow}>Building Modern Digital Experiences</span>
                <h2 className="h3 fw-bold text-strong">Professional Highlights</h2>
                <p className="small">Focused on responsive design, performance, scalability, and user experience.</p>
              </Reveal>


              <div className={styles.statGrid}>
                {highlights.map((item, index) => (
                  <Reveal
                    as="div"
                    key={item.label}
                    className={styles.statCard}
                    delay={150 + index * 100}
                  >
                    <span className={styles.statNumber}>{item.value}</span>
                    <span className={styles.statLabel}>{item.label}</span>
                  </Reveal>
                ))}
              </div>

              {/* Extra glass panel detail */}
              <Reveal delay={400} className="mt-2">
                <div className="d-flex align-items-center gap-3 p-3 glass-panel">
                  <div className="p-2 rounded-circle bg-success bg-opacity-10 text-success">
                    <Smile size={24} />
                  </div>
                  <div>
                    <h4 className="h6 mb-1 fw-bold text-strong">Available for Opportunities</h4>
                    <p className="mb-0 small">Open to Frontend Developer roles, React.js projects, and freelance collaborations focused on modern web development.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
