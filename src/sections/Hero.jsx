import { Container, Row, Col } from "react-bootstrap";
import {
  ArrowRight,
  Sparkles,
  Mail,
  FileDown,
  GitBranch,
  Zap,
  Smartphone,
  ChevronDown,
  Monitor,
  Server,
  Database,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "../components/SocialIcons.jsx";
import ajithPortrait from "../assets/images/ajith-portrait.png";
import Reveal from "../components/Reveal.jsx";
import { profile } from "../data/portfolio.js";
import styles from "./Hero.module.css";

// Predefined static particle configurations for render purity
const PARTICLES = [
  {
    size: 3.5,
    duration: 22,
    delay: -2,
    left: 12,
    top: 25,
    color: "rgba(0, 242, 254, 0.4)",
    drift: 18,
  },
  {
    size: 4.2,
    duration: 28,
    delay: -8,
    left: 82,
    top: 15,
    color: "rgba(181, 23, 158, 0.3)",
    drift: -15,
  },
  {
    size: 2.8,
    duration: 19,
    delay: -4,
    left: 45,
    top: 60,
    color: "rgba(0, 242, 254, 0.35)",
    drift: 10,
  },
  {
    size: 5.0,
    duration: 25,
    delay: -12,
    left: 25,
    top: 75,
    color: "rgba(181, 23, 158, 0.3)",
    drift: -22,
  },
  {
    size: 3.0,
    duration: 20,
    delay: -6,
    left: 68,
    top: 85,
    color: "rgba(0, 242, 254, 0.4)",
    drift: 14,
  },
  {
    size: 4.5,
    duration: 26,
    delay: -14,
    left: 90,
    top: 50,
    color: "rgba(181, 23, 158, 0.25)",
    drift: -12,
  },
  {
    size: 2.5,
    duration: 18,
    delay: -1,
    left: 8,
    top: 90,
    color: "rgba(0, 242, 254, 0.3)",
    drift: 8,
  },
  {
    size: 3.8,
    duration: 24,
    delay: -10,
    left: 55,
    top: 30,
    color: "rgba(181, 23, 158, 0.35)",
    drift: 16,
  },
  {
    size: 4.0,
    duration: 27,
    delay: -5,
    left: 35,
    top: 10,
    color: "rgba(0, 242, 254, 0.4)",
    drift: -18,
  },
  {
    size: 2.9,
    duration: 21,
    delay: -9,
    left: 78,
    top: 70,
    color: "rgba(181, 23, 158, 0.3)",
    drift: 12,
  },
  {
    size: 3.6,
    duration: 23,
    delay: -3,
    left: 18,
    top: 45,
    color: "rgba(0, 242, 254, 0.35)",
    drift: -10,
  },
  {
    size: 4.8,
    duration: 29,
    delay: -11,
    left: 62,
    top: 40,
    color: "rgba(181, 23, 158, 0.3)",
    drift: 20,
  },
];

function Hero() {
  // Define floating cards metadata tailored for MERN Stack Developer
  const floatingCards = [
    {
      text: "React.js",
      icon: <Monitor size={16} className="text-info" />,
      className: styles.cardReact,
      delay: 0,
    },
    {
      text: "Node.js & Express",
      icon: <Server size={16} className="text-success" />,
      className: styles.cardJs,
      delay: 0.4,
    },
    {
      text: "MongoDB Database",
      icon: <Database size={16} className="text-warning" />,
      className: styles.cardResponsive,
      delay: 0.8,
    },
    {
      text: "REST APIs & JWT",
      icon: <Zap size={16} className="text-primary" />,
      className: styles.cardClean,
      delay: 1.2,
    },
    {
      text: "Git & GitHub",
      icon: <GitBranch size={16} className="text-danger" />,
      className: styles.cardGit,
      delay: 1.6,
    },
    {
      text: "Responsive UI",
      icon: <Smartphone size={16} className="text-info" />,
      className: styles.cardPerf,
      delay: 2.0,
    },
  ];

  // Define technology pills
  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript (ES6+)",
    "REST APIs",
    "Bootstrap",
    "Git & GitHub",
  ];

  return (
    <section id="home" className={styles.hero}>
      {/* Decorative Grid Pattern Background */}
      <div className={styles.gridPattern}></div>

      {/* Decorative Blur Backgrounds */}
      <div className={styles.glowingBlob1}></div>
      <div className={styles.glowingBlob2}></div>
      <div className={styles.glowingBlob3}></div>

      {/* Floating Particles */}
      <div className={styles.particleContainer}>
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: particle.color,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, particle.drift, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <Container className={styles.contentWrapper}>
        <Row className="align-items-center g-5">
          {/* Left Text details */}
          <Col lg={7} md={12}>
            <div className="d-flex flex-column gap-3 align-items-center align-items-lg-start text-center text-lg-start">
              <Reveal delay={100}>
                <span className={styles.eyebrow}>
                  <Sparkles size={14} className="me-1 text-warning" /> Immediate
                  Joiner • 1.5+ Years Experience
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
                  {profile.role}{" "}
                  <span className="text-secondary opacity-75">|</span>{" "}
                  {profile.subtitle}
                </h2>
              </Reveal>

              <Reveal delay={400}>
                <p className={styles.description}>{profile.summary}</p>
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
                  href="./Ajith-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown size={16} className="me-2" /> Download Resume
                </a>
              </Reveal>

              {/* Minimalist Outline Social Links */}
              <Reveal delay={600}>
                <div className={styles.socialLinks}>
                  <a
                    href="https://github.com/Aji1897"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ajith-kumaran-v-a5a745400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className={styles.socialIcon}
                    aria-label="Email Ajith"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={`tel:${profile.phoneRaw}`}
                    className={styles.socialIcon}
                    aria-label="Call Ajith"
                  >
                    <Phone size={18} />
                  </a>
                  <a
                    href="./Ajith-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Resume PDF"
                  >
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
                    <span
                      className={`${styles.dot} ${styles.dotYellow}`}
                    ></span>
                    <span className={`${styles.dot} ${styles.dotGreen}`}></span>
                  </div>
                  <span className={styles.windowTitle}>
                    ajith_kumaran ~ mern_dev.js
                  </span>
                </div>
                <div className={styles.windowBody}>
                  <pre className={styles.codeSnippet}>
                    <code>
                      <span className={styles.keyword}>const</span>{" "}
                      <span className={styles.variable}>developer</span> =
                      &#123;{"\n"}
                      {"  "}
                      <span className={styles.property}>name</span>:{" "}
                      <span className={styles.string}>"Ajith Kumaran V"</span>,
                      {"\n"}
                      {"  "}
                      <span className={styles.property}>role</span>:{" "}
                      <span className={styles.string}>
                        "MERN Stack Developer"
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className={styles.property}>experience</span>:{" "}
                      <span className={styles.string}>"1.5+ Years"</span>,{"\n"}
                      {"  "}
                      <span className={styles.property}>status</span>:{" "}
                      <span className={styles.string}>"Immediate Joiner"</span>,
                      {"\n"}
                      {"  "}
                      <span className={styles.property}>stack</span>: [
                      <span className={styles.string}>"React.js"</span>,
                      <span className={styles.string}>"Node.js"</span>,
                      <span className={styles.string}>"MongoDB"</span>]{"\n"}
                      &#125;
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
                  alt="Ajith Kumaran V - MERN Stack Developer"
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
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.delay,
                    },
                    opacity: {
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                    },
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
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.03 }}
              >
                <span className={styles.badgeIndicator}>🟢</span>
                <span>Immediate Joiner</span>
              </motion.div>

              <motion.div
                className={`${styles.statusBadge} ${styles.badgeProjects}`}
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                whileHover={{ scale: 1.03 }}
              >
                <span>🚀</span>
                <span>1.5+ Yrs Full Stack Exp</span>
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
  );
}

export default Hero;
