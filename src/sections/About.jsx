import { Container, Row, Col } from "react-bootstrap";
import {
  Download,
  Mail,
  MapPin,
  Smile,
  Award,
  Phone,
  GraduationCap,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";
import Reveal from "../components/Reveal.jsx";
import { highlights, profile } from "../data/portfolio.js";
import styles from "./About.module.css";

function About() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
    });
  };

  return (
    <section id="about" className={styles.about}>
      <Container>
        <Row className="g-5 align-items-stretch">
          {/* Left Column: Biography details */}
          <Col lg={7} md={12}>
            <div className={styles.highlightCard}>
              <Reveal className={styles.heading}>
                <span className={styles.eyebrow}>About Me</span>
                <h2 className={styles.title}>
                  Scalable Full-Stack Engineering with MERN
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <div className={styles.textWrapper}>
                  {profile.about.split("\n\n").map((paragraph, index) => (
                    <p key={index} className={styles.text}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <ul
                  className={styles.detailsList}
                  aria-label="Personal details"
                >
                  <li className={styles.detailsItem}>
                    <span className={styles.detailLabel}>
                      <MapPin size={16} className="me-2 text-info" /> Location
                    </span>
                    <span className={styles.detailValue}>
                      {profile.location}
                    </span>
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
                      <Phone size={16} className="me-2 text-success" /> Phone
                    </span>
                    <span className={styles.detailValue}>
                      <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
                    </span>
                  </li>
                  <li className={styles.detailsItem}>
                    <span className={styles.detailLabel}>
                      <GraduationCap size={16} className="me-2 text-purple" />{" "}
                      Education
                    </span>
                    <span className={styles.detailValue}>
                      {profile.education.degree} —{" "}
                      {profile.education.institution}
                    </span>
                  </li>
                  <li className={styles.detailsItem}>
                    <span className={styles.detailLabel}>
                      <Award size={16} className="me-2 text-warning" /> Focus
                    </span>
                    <span className={styles.detailValue}>
                      MERN Stack | React.js | Node.js | MongoDB | REST APIs
                    </span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={300}>
                <a
                  href="./Ajith-Resume.pdf"
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
          <Col
            lg={5}
            md={12}
            className="d-flex flex-column justify-content-between"
          >
            <div className="h-100 d-flex flex-column justify-content-center">
              <Reveal className={styles.heading} delay={100}>
                <span className={styles.eyebrow}>Professional Snapshot</span>
                <h2 className="h3 fw-bold text-strong">Key Highlights</h2>
                <p className="small text-muted">
                  Dedicated to full-stack architecture, clean code, robust
                  authentication, and optimal user experiences.
                </p>
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
              <Reveal delay={400} className="mt-3">
                <div className="d-flex align-items-center gap-3 p-3 glass-panel rounded-3 border border-white border-opacity-10">
                  <div className="p-2 rounded-circle bg-success bg-opacity-10 text-success">
                    <Smile size={24} />
                  </div>
                  <div>
                    <h4 className="h6 mb-1 fw-bold text-strong">
                      Immediate Joiner • Ready to Contribute
                    </h4>
                    <p className="mb-0 small text-muted">
                      Open to Full Stack, MERN Stack, and React.js Developer
                      roles. Ready to deliver scalable, high-performance web
                      applications from day one.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
