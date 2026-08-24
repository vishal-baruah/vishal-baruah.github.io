export const personalInfo = {
  name: 'Vishal Baruah',
  title: 'Computer Science Student & Developer',
  taglines: [
    'B.Tech CSE Student',
    'AI/ML Enthusiast',
    'Full-Stack Developer',
    'Cybersecurity Learner',
  ],
  email: 'vishalbaruahghy@gmail.com',
  phone: '+91-9531183857',
  location: 'Guwahati, Assam, India',
  github: 'https://github.com/vishal-baruah',
  linkedin: 'https://www.linkedin.com/in/vishalbaruah/',
  resumeFile: '/resume_vishal.pdf',
  cvFile: '/cv_vishal.pdf',
  bio: `Dynamic and motivated Computer Engineering graduate with a specialized interest in networking, cybersecurity, and AI/ML. Adept at applying theoretical knowledge to practical challenges, with a keen focus on developing secure and efficient solutions. Currently pursuing B.Tech in Computer Science and Engineering while building real-world projects in computer vision and full-stack development.`,
};

export const stats = [
  { label: 'Projects', value: '3+' },
  { label: 'Certifications', value: '4+' },
  { label: 'Years Experience', value: '1+' },
];

export const skills = [
  {
    category: 'Programming',
    items: [
      { name: 'Python', level: 4 },
      { name: 'C/C++', level: 4 },
      { name: 'JavaScript', level: 3 },
      { name: 'C#', level: 3 },
      { name: 'PHP', level: 3 },
      { name: 'Java', level: 2 },
    ],
  },
  {
    category: 'AI & Computer Vision',
    items: [
      { name: 'YOLOv8', level: 4 },
      { name: 'OpenCV', level: 4 },
      { name: 'NumPy', level: 3 },
      { name: 'Machine Learning', level: 3 },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'HTML/CSS', level: 4 },
      { name: 'React', level: 3 },
      { name: 'ASP.NET MVC', level: 3 },
      { name: 'SQL Server', level: 3 },
      { name: 'MySQL', level: 3 },
      { name: 'Bootstrap', level: 3 },
    ],
  },
  {
    category: 'Systems & Tools',
    items: [
      { name: 'Linux', level: 4 },
      { name: 'Windows Server', level: 4 },
      { name: 'Git', level: 3 },
      { name: 'LAN/IP Config', level: 4 },
      { name: 'System Administration', level: 3 },
    ],
  },
];

export const experience = [
  {
    role: 'Industrial Intern — MIS Digitization',
    company: 'Numaligarh Refinery Limited (NRL)',
    location: 'Numaligarh, Assam',
    period: 'July 2026',
    points: [
      'Engineered an enterprise Employee Task Management & MIS Digitization System using ASP.NET MVC 5 and SQL Server',
      'Architected secure role-based access control (RBAC), multi-stage draft/final workflows, and automated reporting',
      'Streamlined internal refinery operational tracking, reducing manual logging overhead across departments',
    ],
    tags: ['ASP.NET MVC 5', 'C#', 'SQL Server', 'MIS Systems', 'Enterprise Security'],
  },
  {
    role: 'Summer Intern — IEEE Programme',
    company: 'Department of ECE, Gauhati University',
    location: 'Guwahati, Assam',
    period: 'July 2025',
    points: [
      'Developed an AI-based real-time detection system using computer vision',
      'Applied machine learning workflows in a guided academic environment',
    ],
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Machine Learning'],
  },
  {
    role: 'Technician Apprentice (NATS)',
    company: 'Trans Virtual Pvt. Ltd.',
    location: 'Kamrup Metro, Assam',
    period: 'Sept 2023 – Aug 2024',
    points: [
      'Managed hardware systems and network infrastructure in a production environment',
      'Troubleshot broadband and server connectivity issues',
      'Performed LAN configuration, IP management, and system administration tasks',
      'Customer service representative',
    ],
    tags: ['Networking', 'System Admin', 'BSNL', 'Hardware'],
  },
  {
    role: 'Industrial Intern — Data Center',
    company: 'Assam Power Distribution Company Ltd. (APDCL)',
    location: 'Guwahati, Assam',
    period: 'March 2023',
    points: [
      'Contributed to CRM system design including UML modeling and database schema analysis',
      'Gained exposure to real-world software engineering workflows in a government data center',
    ],
    tags: ['UML', 'Database Design', 'Software Engineering', 'CRM'],
  },
  {
    role: 'Academic Intern — Web Technology',
    company: 'GIMT',
    location: 'Guwahati, Assam',
    period: 'Sept – Oct 2022',
    points: [
      'Completed web technology training program',
      'Built a web application using HTML, CSS, and JavaScript',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'Trainee — Database Management',
    company: 'NSIC',
    location: 'Guwahati, Assam',
    period: 'March 2022',
    points: [
      'Performed detailed analysis of Student Database Software Management',
      'Received Grade A1 certification',
    ],
    tags: ['Database', 'Software Management'],
  },
];

export const projects = [
  {
    title: 'AI-Powered Real-Time Intrusion Detection',
    description:
      'A real-time object detection system for friend/foe classification using live camera feed. Trained on a custom dataset with data augmentation, featuring an automated alert mechanism for security applications.',
    tags: ['YOLOv8', 'Python', 'OpenCV', 'Machine Learning'],
    metrics: [
      { label: 'Accuracy', value: '>90%' },
      { label: 'mAP@0.5', value: '92.3%' },
      { label: 'FPS', value: '30+' },
    ],
    category: 'ai',
    github: null,
    live: null,
  },
  {
    title: 'NRL MIS Task Management System',
    description:
      'An Employee Task Management System developed during an industrial internship at Numaligarh Refinery Limited (NRL). Digitizes MIS reporting workflows with role-based authentication, task assignment, draft/final submission workflow, and historical record keeping.',
    tags: ['C#', 'ASP.NET MVC 5', '.NET Framework', 'SQL Server', 'Bootstrap 5', 'jQuery'],
    metrics: [
      { label: 'Architecture', value: 'MVC' },
      { label: 'Auth', value: 'Role-Based' },
      { label: 'DB', value: 'SQL Server' },
    ],
    category: 'web',
    github: 'https://github.com/vishal-baruah/NRL-MIS-Task-Management',
    live: null,
  },
  {
    title: 'Food Corner — Online Ordering System',
    description:
      'A full-stack web application for online food ordering with an admin panel supporting complete CRUD operations, authentication, session management, order tracking, and auto-generated receipt system.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    metrics: [
      { label: 'Stack', value: 'Full-Stack' },
      { label: 'Features', value: 'Admin Panel' },
      { label: 'DB', value: 'MySQL' },
    ],
    category: 'web',
    github: null,
    live: null,
  },
];

export const education = [
  {
    institution: 'Barak Valley Engineering College',
    location: 'Nirala, Shribhumi, Assam',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2024 – Present',
    grade: null,
  },
  {
    institution: 'Assam Engineering Institute',
    location: 'Chandmari, Guwahati, Assam',
    degree: 'Diploma in Computer Engineering',
    period: '2020 – 2023',
    grade: 'CGPA: 6.5',
  },
  {
    institution: 'Nilachal Jaiya Vidyalaya',
    location: 'Guwahati, Assam',
    degree: 'Class 10 (HSLC)',
    period: '2020',
    grade: '59.17%',
  },
];

export const certifications = [
  {
    name: 'Computer Hardware & Networking',
    issuer: 'NIELIT, Guwahati',
  },
  {
    name: 'Student Database Software Management',
    issuer: 'NSIC',
    grade: 'Grade A1',
  },
  {
    name: 'Web Technology Internship',
    issuer: 'GIMT',
  },
  {
    name: 'Diploma in Computer Application',
    issuer: 'Institute of Professional Studies and Business, Guwahati',
    grade: 'Grade A',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
