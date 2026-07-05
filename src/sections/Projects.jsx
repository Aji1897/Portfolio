import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/portfolio.js'
import styles from './Projects.module.css'

function Projects() {
  const [filter, setFilter] = useState('all')

  const filterCategories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Apps', value: 'apps' },
    { label: 'Static Websites', value: 'design' },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <Reveal className={styles.heading}>
          <span className={styles.eyebrow}>Portfolio</span>
          <h2 className={styles.title}>Featured Projects</h2>
        </Reveal>

        {/* Filter buttons */}
        <Reveal delay={100} className={styles.filterWrapper}>
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`${styles.filterBtn} ${filter === cat.value ? styles.activeFilter : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        {/* Responsive Grid layout */}
        <div className={styles.projectsGrid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}

export default Projects
