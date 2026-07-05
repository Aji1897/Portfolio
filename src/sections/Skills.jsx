import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Code2, Layers, Palette, Terminal, Server, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { skillCategories } from '../data/portfolio.js'
import styles from './Skills.module.css'

const CATEGORY_STYLES = {
  'Frontend Core': {
    icon: Code2,
    class: styles.iconFrontend,
    cardClass: styles.cardFrontend,
  },
  'React Ecosystem': {
    icon: Layers,
    class: styles.iconReact,
    cardClass: styles.cardReact,
  },
  'Styling & UI': {
    icon: Palette,
    class: styles.iconStyling,
    cardClass: styles.cardStyling,
  },
  'Tools & Workflow': {
    icon: Terminal,
    class: styles.iconTools,
    cardClass: styles.cardTools,
  },
  'Backend Familiarity': {
    icon: Server,
    class: styles.iconBackend,
    cardClass: styles.cardBackend,
  },
  'Development Practices': {
    icon: CheckCircle2,
    class: styles.iconPractices,
    cardClass: styles.cardPractices,
  },
}

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <Container>
        <Reveal className={styles.heading}>
          <span className={styles.eyebrow}>EXPERTISE</span>
          <h2 className={styles.title}>Technical Expertise</h2>
        </Reveal>

        <Row className="g-4">
          {skillCategories.map((category, catIndex) => {
            const config = CATEGORY_STYLES[category.title] || { 
              icon: Code2, 
              class: styles.iconFrontend,
              cardClass: styles.cardFrontend 
            }
            const IconComponent = config.icon
            
            return (
              <Col key={category.title} lg={4} md={6} xs={12}>
                <motion.div
                  className={`${styles.skillCard} ${config.cardClass}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className={styles.cardHeader}>
                    <div className={`${styles.iconContainer} ${config.class}`}>
                      <IconComponent size={24} className={styles.icon} />
                    </div>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                  </div>
                  
                  <div className={styles.skillsWrapper}>
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className={styles.skillBadge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 100, 
                          damping: 10,
                          delay: catIndex * 0.1 + index * 0.04 
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Skills

