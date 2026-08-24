import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import styles from './Projects.module.css';

// Project image mapping (placeholders for now, generated later)
const imageMap = {
  'AI-Powered Real-Time Intrusion Detection': '/project-ai.webp',
  'NRL MIS Task Management System': '/project-nrl.webp',
  'Food Corner — Online Ordering System': '/project-food.webp'
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section container">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'ai' ? styles.active : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI/ML
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'web' ? styles.active : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Dev
          </button>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 100}>
            <div className={`glass-card ${styles.card}`}>
              <div className={styles.imageWrapper}>
                {/* Fallback pattern if image is missing */}
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderText}>{project.title.charAt(0)}</div>
                </div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.metrics}>
                  {project.metrics.map(m => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {project.github && (
                    <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={16} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
