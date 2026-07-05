import { ExternalLink, FolderGit2 } from 'lucide-react'
import { Github } from './SocialIcons.jsx'
import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  // Find project code repository and live links
  const gitHubLink = project.links.find(l => l.label.toLowerCase().includes('source') || l.label.toLowerCase().includes('github'))
  const demoLink = project.links.find(l => l.label.toLowerCase().includes('live') || l.label.toLowerCase().includes('demo'))

  return (
    <div className={styles.card}>
      {/* Simulated Preview graphic */}
      <div className={styles.imageWrapper}>
        <div className={styles.placeholderImage}></div>
        <div className={styles.cardGlowOverlay}></div>
        <FolderGit2 className={styles.cardIcon} size={40} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        {/* Technology tags */}
        <ul className={styles.techList} aria-label={`${project.title} tech stack`}>
          {project.tech.map((item) => (
            <li key={item} className={styles.techBadge}>{item}</li>
          ))}
        </ul>

        {/* Action Link anchors */}
        <div className={styles.links}>
          {gitHubLink && (
            <a 
              href={gitHubLink.href} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
              aria-label={`View ${project.title} code repository on GitHub`}
            >
              <Github size={16} /> Code
            </a>
          )}
          {demoLink && (
            <a 
              href={demoLink.href} 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
              aria-label={`Launch ${project.title} live demo`}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
