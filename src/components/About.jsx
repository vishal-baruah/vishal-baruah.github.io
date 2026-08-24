import { MapPin, GraduationCap, Code2, Shield } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section container">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        <ScrollReveal direction="left" delay={100}>
          <div className={styles.bioContent}>
            <h3 className={styles.greeting}>
              Hello! I'm <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>.
            </h3>
            <p className={styles.bioText}>{personalInfo.bio}</p>
            <div className={styles.highlightCards}>
              <div className={`glass-card ${styles.miniCard}`}>
                <Code2 className={styles.icon} />
                <span>Full-Stack Dev</span>
              </div>
              <div className={`glass-card ${styles.miniCard}`}>
                <Shield className={styles.icon} />
                <span>Cybersecurity</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={200}>
          <div className={styles.infoCards}>
            <div className={`glass-card ${styles.infoCard}`}>
              <MapPin className={styles.cardIcon} />
              <div>
                <h4 className={styles.cardTitle}>Location</h4>
                <p className={styles.cardText}>{personalInfo.location}</p>
              </div>
            </div>
            
            <div className={`glass-card ${styles.infoCard}`}>
              <GraduationCap className={styles.cardIcon} />
              <div>
                <h4 className={styles.cardTitle}>Education</h4>
                <p className={styles.cardText}>B.Tech CSE, BVEC</p>
              </div>
            </div>

            <div className={`glass-card ${styles.infoCard} ${styles.focusCard}`}>
              <Shield className={styles.cardIcon} />
              <div>
                <h4 className={styles.cardTitle}>Core Focus</h4>
                <p className={styles.cardText}>Secure Systems, RBAC & AI/CV</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
