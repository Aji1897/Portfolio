import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, ShieldCheck, Database, Layers, GitBranch } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { experiences, educationList } from '../data/portfolio.js'
import styles from './Experience.module.css'

function Experience() {
  const coreCompetencies = [
    {
      icon: ShieldCheck,
      title: 'Authentication & Authorization',
      desc: 'Implemented secure role-based login systems with JWT & OTP verification.'
    },
    {
      icon: Database,
      title: 'Backend & CRUD Integration',
      desc: 'Engineered REST APIs using Node.js, Express.js & MongoDB database operations.'
    },
    {
      icon: Layers,
      title: 'Frontend Architecture',
      desc: 'Built responsive UIs in React.js with dynamic validations & reusable components.'
    },
    {
      icon: GitBranch,
      title: 'Collaborative Version Control',
      desc: 'Leveraged Git & GitHub workflows for structured code review and deployment.'
    }
  ]

  return (
    <section id="experience" className={styles.experienceSection}>
      {/* Subtle Background Glow */}
      <div className={styles.bgGlow}></div>

      <Container>
        <Reveal className={styles.heading}>
          <span className={styles.eyebrow}>CAREER TIMELINE</span>
          <h2 className={styles.title}>Experience & Education</h2>
          <p className={styles.subtitle}>
            1.5+ years of hands-on industry experience building scalable full-stack and React applications.
          </p>
        </Reveal>

        <Row className="g-5">
          {/* Work Experience Timeline */}
          <Col lg={7} md={12}>
            <div className={styles.timelineWrapper}>
              <div className={styles.sectionHeader}>
                <div className={styles.headerIconWrapper}>
                  <Briefcase size={20} className={styles.headerIcon} />
                </div>
                <h3 className={styles.sectionTitle}>Work Experience</h3>
              </div>

              <div className={styles.timeline}>
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.company}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <div className={styles.timelineDot}>
                      {exp.current && <span className={styles.pulseDot}></span>}
                    </div>

                    <div className={styles.timelineCard}>
                      <div className={styles.cardTop}>
                        <div>
                          <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                            <h4 className={styles.roleTitle}>{exp.role}</h4>
                            {exp.current && (
                              <span className={styles.currentBadge}>
                                <span className={styles.activeDot}></span> Current Role
                              </span>
                            )}
                          </div>
                          <h5 className={styles.companyName}>{exp.company}</h5>
                        </div>

                        <div className={styles.metaInfo}>
                          <span className={styles.periodBadge}>
                            <Calendar size={13} className="me-1" /> {exp.period}
                          </span>
                          <span className={styles.locationBadge}>
                            <MapPin size={13} className="me-1" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className={styles.expDescription}>{exp.description}</p>

                      <div className={styles.skillTags}>
                        {exp.skills.map((skill) => (
                          <span key={skill} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Col>

          {/* Education & Core Competencies */}
          <Col lg={5} md={12}>
            <div className="d-flex flex-column gap-4">
              {/* Education Block */}
              <div className={styles.eduWrapper}>
                <div className={styles.sectionHeader}>
                  <div className={styles.headerIconWrapperEdu}>
                    <GraduationCap size={20} className={styles.headerIcon} />
                  </div>
                  <h3 className={styles.sectionTitle}>Education</h3>
                </div>

                {educationList.map((edu, idx) => (
                  <motion.div
                    key={edu.institution}
                    className={styles.eduCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h4 className={styles.degreeTitle}>{edu.degree}</h4>
                      <span className={styles.periodBadge}>{edu.period}</span>
                    </div>
                    <div className={styles.institutionName}>{edu.institution}</div>
                    <div className={styles.eduLocation}>
                      <MapPin size={13} className="me-1" /> {edu.location}
                    </div>
                    <p className={styles.eduDesc}>{edu.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Core Competencies Card */}
              <div className={styles.competenciesCard}>
                <h4 className={styles.compHeader}>
                  <Sparkles size={16} className="text-warning me-2" /> Key Capabilities
                </h4>
                <div className={styles.compList}>
                  {coreCompetencies.map((comp, idx) => {
                    const IconComponent = comp.icon
                    return (
                      <div key={idx} className={styles.compItem}>
                        <div className={styles.compIcon}>
                          <IconComponent size={16} />
                        </div>
                        <div>
                          <div className={styles.compTitle}>{comp.title}</div>
                          <div className={styles.compDesc}>{comp.desc}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience
