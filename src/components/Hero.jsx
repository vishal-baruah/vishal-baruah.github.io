import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, MeshTransmissionMaterial, RoundedBox } from '@react-three/drei';
import { ArrowRight, Briefcase, FileText, Award, Mail, Sparkles, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';
import styles from './Hero.module.css';

// Calibrated Deep Obsidian Liquid Glass Transmission (Zero Glare, Maximum Contrast)
const liquidTransmissionConfig = {
  backside: true,
  backsideThickness: 0.8,
  thickness: 0.7,
  chromaticAberration: 0.04,
  anisotropy: 0.15,
  distortion: 0.15,
  distortionScale: 0.2,
  temporalDistortion: 0.02,
  iridescence: 0.35,
  iridescenceIOR: 1.4,
  iridescenceThicknessRange: [100, 800],
  color: "#e2e8f0",
  clearcoat: 0.8,
  roughness: 0.06,
  transmission: 0.95,
  ior: 1.45,
  attenuationDistance: 1.5,
  attenuationColor: "#ffffff"
};

// 3D LiquidGL Centered Floating Crystal Viewport & Ambient Fluid Elements
function LiquidGLViewport() {
  const group = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    
    // Smooth, cinematic lerp towards cursor tilt
    const targetRotX = (mousePosition.y * 0.12) + Math.sin(t * 0.3) * 0.025;
    const targetRotY = (mousePosition.x * 0.15) + Math.cos(t * 0.25) * 0.025;
    
    group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.05;
    group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.05;
  });

  return (
    <group ref={group}>
      {/* Primary Centerpiece Liquid Glass Stage */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3} position={[0, 0, 0]}>
        <mesh>
          <RoundedBox args={[5.8, 3.5, 0.2]} radius={0.22} smoothness={5} />
          <MeshTransmissionMaterial {...liquidTransmissionConfig} />
        </mesh>
      </Float>

      {/* Top-Right Ambient Liquid Glass Pill */}
      <Float speed={2.0} rotationIntensity={0.5} floatIntensity={0.8} position={[3.2, 1.4, 0.4]}>
        <mesh rotation={[0, 0, Math.PI / 6]}>
          <capsuleGeometry args={[0.3, 0.9, 16, 32]} />
          <MeshTransmissionMaterial {...liquidTransmissionConfig} thickness={0.9} chromaticAberration={0.06} />
        </mesh>
      </Float>

      {/* Bottom-Left Luminous Glass Squircle */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9} position={[-3.0, -1.3, 0.5]}>
        <mesh rotation={[0.15, 0.2, 0]}>
          <RoundedBox args={[1.0, 1.0, 0.25]} radius={0.3} smoothness={4} />
          <MeshTransmissionMaterial {...liquidTransmissionConfig} thickness={0.8} chromaticAberration={0.05} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero() {
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* 3D Liquid WebGL Stage Canvas in the background */}
      <div className={styles.webglCanvasWrapper} aria-hidden="true">
        {!prefersReducedMotion && (
          <Canvas camera={{ position: [0, 0, 5.5], fov: 46 }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[8, 8, 4]} intensity={1.2} color="#00F0FF" />
            <directionalLight position={[-8, -8, -4]} intensity={1.0} color="#6366F1" />
            <directionalLight position={[0, 6, 2]} intensity={0.8} color="#8B5CF6" />
            
            <LiquidGLViewport />
            
            <ContactShadows position={[0, -2.2, 0]} opacity={0.4} scale={12} blur={2.0} far={4} />
            <Environment preset="city" />
          </Canvas>
        )}
      </div>

      <div className={`container ${styles.heroContainer}`}>
        {/* Centered Deep Crystal Glass Stage Card */}
        <div className={styles.stageCard}>
          <ScrollReveal delay={100}>
            <div className={styles.badgePill}>
              <span className={styles.pulseDot}></span>
              <Sparkles size={14} className={styles.sparkleIcon} />
              <span>AI & COMPUTER VISION RESEARCHER</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className={styles.heroTitle}>
              <span className={styles.glitchText}>{personalInfo.name}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className={styles.heroRole}>
              <Terminal size={18} className={styles.roleIcon} />
              <span>AI/ML Systems & Computer Vision Specialist</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className={styles.heroPitch}>
              Specializing in high-precision <span className={styles.highlight}>YOLOv8 computer vision</span>, real-time ML pipelines, and secure enterprise software architectures. Former Industrial Intern at <strong className={styles.nrlHighlight}>Numaligarh Refinery Limited (NRL, July 2026)</strong>.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className={styles.heroActions}>
              <MagneticButton href="#projects" className="btn btn-primary" onClick={scrollToSection('#projects')}>
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </MagneticButton>
              
              <MagneticButton href="#experience" className="btn btn-secondary" onClick={scrollToSection('#experience')}>
                <Briefcase size={16} />
                <span>NRL & Experience</span>
              </MagneticButton>

              <MagneticButton href={personalInfo.resumeFile} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" download>
                <FileText size={16} />
                <span>Resume (PDF)</span>
              </MagneticButton>

              <MagneticButton href={personalInfo.cvFile || personalInfo.resumeFile} className="btn btn-secondary" target="_blank" rel="noopener noreferrer" download>
                <Award size={16} />
                <span>Full CV</span>
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className={styles.socialBar}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub Profile">
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <span className={styles.socialDivider}>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn Profile">
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <span className={styles.socialDivider}>•</span>
              <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Email Vishal">
                <Mail size={20} />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Bento Stats Ribbon below the stage */}
        <div className={styles.statsRibbon}>
          <ScrollReveal delay={700} direction="up">
            <div className={`glass-card ${styles.bentoStatCard}`}>
              <span className={styles.statChip}>July 2026</span>
              <span className={styles.statMainVal}>NRL Industrial Intern</span>
              <span className={styles.statDesc}>MIS Digitization & Enterprise RBAC</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800} direction="up">
            <div className={`glass-card ${styles.bentoStatCard}`}>
              <span className={styles.statChip}>Computer Vision</span>
              <span className={styles.statMainVal}>92.3% mAP@0.5</span>
              <span className={styles.statDesc}>Real-Time Intrusion Detection System</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={900} direction="up">
            <div className={`glass-card ${styles.bentoStatCard}`}>
              <span className={styles.statChip}>B.Tech CSE</span>
              <span className={styles.statMainVal}>3+ Core Domains</span>
              <span className={styles.statDesc}>AI/ML, Systems & Cyber Security</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
