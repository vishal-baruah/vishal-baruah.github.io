import { useState } from 'react';
import { skills } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import styles from './Skills.module.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section container">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
      </ScrollReveal>

      <div className={styles.container}>
        <ScrollReveal delay={100}>
          <div className={styles.tabs}>
            {skills.map((category, index) => (
              <button
                key={category.category}
                className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
                aria-selected={activeTab === index}
                role="tab"
              >
                {category.category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className={styles.content} role="tabpanel">
          {skills[activeTab].items.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 50}>
              <div className={`glass-card ${styles.skillCard}`}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
                <div className={styles.dots} aria-label={`Skill level ${skill.level} out of 4`}>
                  {[1, 2, 3, 4].map((dot) => (
                    <div
                      key={dot}
                      className={`${styles.dot} ${dot <= skill.level ? styles.filled : ''}`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
