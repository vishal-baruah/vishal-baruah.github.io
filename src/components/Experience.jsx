import { Calendar, Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Career</span>
          <h2 className="section-title">Experience</h2>
        </div>
      </ScrollReveal>

      <div className={styles.timeline}>
        {experience.map((job, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`${styles.item} ${isLeft ? styles.left : styles.right}`}>
              <div className={styles.dot} />
              
              <ScrollReveal 
                direction={isLeft ? 'left' : 'right'} 
                className={styles.cardWrapper}
              >
                <div className={`glass-card ${styles.card}`}>
                  <div className={styles.period}>
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                  
                  <h3 className={styles.role}>{job.role}</h3>
                  
                  <div className={styles.company}>
                    <Briefcase size={14} />
                    <span>{job.company}</span>
                  </div>
                  
                  <ul className={styles.points}>
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  
                  <div className={styles.tags}>
                    {job.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
