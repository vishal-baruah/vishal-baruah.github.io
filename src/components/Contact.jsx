import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section container">
      <ScrollReveal>
        <div className="section-header">
          <span className="section-label">Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        <ScrollReveal direction="left" delay={100}>
          <div className={`glass-card ${styles.infoCard}`}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <p className={styles.infoText}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.infoList}>
              <a href={`mailto:${personalInfo.email}`} className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <span>{personalInfo.email}</span>
              </a>
              
              <a href={`tel:${personalInfo.phone}`} className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <span>{personalInfo.phone}</span>
              </a>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={200}>
          <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onBlur={() => {
                  if (errors.name) validate();
                }}
                disabled={status === 'submitting'}
              />
              {errors.name && (
                <span className={styles.errorMsg} id="name-error">
                  <AlertCircle size={14} /> {errors.name}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onBlur={() => {
                  if (errors.email) validate();
                }}
                disabled={status === 'submitting'}
              />
              {errors.email && (
                <span className={styles.errorMsg}>
                  <AlertCircle size={14} /> {errors.email}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                rows="5"
                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onBlur={() => {
                  if (errors.message) validate();
                }}
                disabled={status === 'submitting'}
              ></textarea>
              {errors.message && (
                <span className={styles.errorMsg}>
                  <AlertCircle size={14} /> {errors.message}
                </span>
              )}
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'submitting' || status === 'success'}
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={18} /> Sent Successfully
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
