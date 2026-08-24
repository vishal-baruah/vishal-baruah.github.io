import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          
          {/* Brand Col */}
          <div className={styles.col}>
            <a href="#" className={styles.logo} onClick={scrollToTop}>
              <span className={styles.logoText}>VB</span>
              <span className={styles.logoName}>{personalInfo.name}</span>
            </a>
            <p className={styles.bio}>{personalInfo.title}</p>
          </div>

          {/* Links Col */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Col */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul className={styles.links}>
              <li><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={`mailto:${personalInfo.email}`}>Email Me</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className={styles.madeWith}>
            Built with <Heart size={14} className={styles.heart} /> in React
          </div>

          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
