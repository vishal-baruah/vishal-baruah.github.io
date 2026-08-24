import { BookOpen, Award } from 'lucide-react';
import { education, certifications } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className="section container">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">Education & Certifications</h2>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {/* Education Column */}
        <div className={styles.column}>
          <ScrollReveal delay={100}>
            <div className={styles.columnHeader}>
              <BookOpen className={styles.icon} />
              <h3>Education</h3>
            </div>
          </ScrollReveal>

          <div className={styles.list}>
            {education.map((item, index) => (
              <ScrollReveal key={index} delay={150 + index * 50}>
                <div className={`glass-card ${styles.card}`}>
                  <div className={styles.period}>{item.period}</div>
                  <h4 className={styles.title}>{item.degree}</h4>
                  <div className={styles.institution}>{item.institution}</div>
                  {item.grade && (
                    <div className={styles.grade}>{item.grade}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className={styles.column}>
          <ScrollReveal delay={200}>
            <div className={styles.columnHeader}>
              <Award className={styles.icon} />
              <h3>Certifications</h3>
            </div>
          </ScrollReveal>

          <div className={styles.list}>
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} delay={250 + index * 50}>
                <div className={`glass-card ${styles.card}`}>
                  <h4 className={styles.title}>{cert.name}</h4>
                  <div className={styles.institution}>{cert.issuer}</div>
                  {cert.grade && (
                    <div className={styles.grade}>{cert.grade}</div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
