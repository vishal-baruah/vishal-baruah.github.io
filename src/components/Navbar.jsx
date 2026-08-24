import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, FileText, ChevronDown, Award } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [resumeDropdown, setResumeDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResumeDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* Scroll spy */
  useEffect(() => {
    const sections = navLinks.map((l) =>
      document.querySelector(l.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => sections.forEach((s) => s && observer.unobserve(s));
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={`container ${styles.inner}`} aria-label="Main navigation">
        <a href="#" className={styles.logo} aria-label="Home">
          <span className={styles.logoText}>VB</span>
          <span className={styles.logoName}>{personalInfo.name.split(' ')[0]}</span>
        </a>

        {/* Desktop nav */}
        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.navLink} ${activeSection === link.href ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {/* Smart Resume & CV Dropdown (Desktop) */}
          <div 
            className={styles.resumeDropdownWrapper} 
            ref={dropdownRef}
            onMouseEnter={() => setResumeDropdown(true)}
            onMouseLeave={() => setResumeDropdown(false)}
          >
            <button
              className={`btn btn-primary ${styles.resumePillBtn}`}
              onClick={() => setResumeDropdown(!resumeDropdown)}
              aria-expanded={resumeDropdown}
              aria-haspopup="true"
              aria-label="Resume and CV options"
            >
              <Download size={16} />
              <span>Resume / CV</span>
              <ChevronDown size={14} className={`${styles.chevron} ${resumeDropdown ? styles.chevronOpen : ''}`} />
            </button>

            {resumeDropdown && (
              <div className={styles.dropdownMenu} role="menu">
                <a
                  href={personalInfo.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={styles.dropdownItem}
                  role="menuitem"
                  onClick={() => setResumeDropdown(false)}
                >
                  <div className={styles.dropdownIconBox}>
                    <FileText size={18} />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>1-Page Resume</span>
                    <span className={styles.dropdownItemDesc}>Fast Industry Summary (PDF)</span>
                  </div>
                </a>

                <a
                  href={personalInfo.cvFile || personalInfo.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className={styles.dropdownItem}
                  role="menuitem"
                  onClick={() => setResumeDropdown(false)}
                >
                  <div className={styles.dropdownIconBox}>
                    <Award size={18} />
                  </div>
                  <div className={styles.dropdownItemContent}>
                    <span className={styles.dropdownItemTitle}>Comprehensive CV</span>
                    <span className={styles.dropdownItemDesc}>Full Academic & Project Vitae</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.drawerLink} ${activeSection === link.href ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Resume & CV Options */}
        <div className={styles.mobileResumeGroup}>
          <a
            href={personalInfo.resumeFile}
            className={`btn btn-primary ${styles.mobileResumeBtn}`}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => setMobileOpen(false)}
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>
          <a
            href={personalInfo.cvFile || personalInfo.resumeFile}
            className={`btn btn-secondary ${styles.mobileResumeBtn}`}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => setMobileOpen(false)}
          >
            <Award size={16} />
            <span>Download Full CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}
