export const personalInfo = {
  name: "Puspendra Chawla",
  email: "puspendrachawlax@gmail.com",
  phone: "+91 9828219407",
  location: "Rajasthan, India",
  github: "https://github.com/Flack74",
  linkedin: "https://linkedin.com/in/puspendra-chawla",
  role: "DevOps & Cloud Enthusiast",
  tagline: "Building scalable cloud infrastructure and automating the future",
  bio: "Passionate DevOps engineer with curiosity in cloud technologies, infrastructure automation, and backend development. I specialize in building robust, scalable systems using modern DevOps practices and cloud-native technologies."
};

export const skills = {
  "Programming Languages": [
    { name: "Go", level: 80, icon: "🐹" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "JavaScript", level: 60, icon: "⚡" },
    { name: "Bash", level: 85, icon: "💻" },
    { name: "C/C++", level: 65, icon: "⚙️" }
  ],
  "Cloud Services": [
    { name: "AWS Lambda", level: 85, icon: "⚡" },
    { name: "EC2", level: 90, icon: "🖥️" },
    { name: "S3", level: 85, icon: "🗄️" },
    { name: "EKS", level: 80, icon: "⚙️" },
    { name: "ECS", level: 65, icon: "📦" },
    { name: "CloudWatch", level: 75, icon: "📊" },
    { name: "Elastic Beanstalk", level: 65, icon: "🌱" },
    { name: "Virtual Private Cloud", level: 60, icon: "🔒" },
    { name: "CloudFront", level: 65, icon: "🌐" }
  ],
  "DevOps Tools": [
    { name: "Docker", level: 90, icon: "🐳" },
    { name: "Kubernetes", level: 85, icon: "☸️" },
    { name: "Terraform", level: 80, icon: "🏗️" },
    { name: "GitHub Actions", level: 85, icon: "🔄" },
    { name: "Jenkins", level: 75, icon: "🔧" },
    { name: "Ansible", level: 70, icon: "📋" },
    { name: "Prometheus", level: 65, icon: "📊" },
    { name: "Grafana", level: 65, icon: "📈" }
  ],
  "Databases": [
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "PostgreSQL", level: 85, icon: "🐘" },
    { name: "Redis", level: 75, icon: "🔴" },
    { name: "MySQL", level: 70, icon: "🗃️" },
    { name: "SQLite", level: 80, icon: "💾" }
  ]
};

export const projects = [
  {
    id: 'auth-system',
    title: 'Authentication System',
    description: 'Enterprise-grade Go authentication API with comprehensive security features',
    longDescription: 'Production-ready authentication system built with Go featuring enterprise-grade security including bcrypt hashing, JWT tokens, rate limiting, account lockout protection, CSRF protection, and email verification. Implements clean architecture with repository pattern and comprehensive middleware stack.',
    technologies: ['Go', 'PostgreSQL', 'Redis', 'JWT', 'Docker', 'NGINX', 'GitHub Actions'],
    features: [
      'Enterprise-grade security with bcrypt hashing',
      'JWT authentication with token rotation',
      'Rate limiting and account lockout protection',
      'CSRF and XSS protection',
      'Email verification and password reset',
      'Production-ready with Docker containerization',
      'Comprehensive health checks and monitoring',
      'Clean architecture with repository pattern'
    ],
    deployment: 'EC2 + Docker + NGINX with SSL',
    githubUrl: 'https://github.com/Flack74/Authentication-System',
    liveUrl: 'https://flack74.site/health',
    image: '/projects/auth-system.jpg',
    category: 'Backend/DevOps',
    highlights: [
      '99.3% Go codebase',
      'Type-safe SQL with sqlc',
      'Production deployment with CI/CD',
      'Enterprise security standards'
    ]
  },
  {
    id: 'autosnapper',
    title: 'AutoSnapper',
    description: 'Enterprise screenshot service with auto-scaling and Redis caching',
    longDescription: 'Full-stack screenshot service built with Go and React, featuring enterprise-grade DevOps practices including auto-scaling, Redis caching, structured logging, and real-time monitoring. Deployed on AWS ECS with Terraform infrastructure as code.',
    technologies: ['Go', 'React', 'Docker', 'AWS ECS', 'Redis', 'Terraform'],
    features: [
      'Automated screenshot capture',
      'Redis caching for performance',
      'Structured logging with monitoring',
      'Auto-scaling configuration',
      'Real-time performance tracking',
      'Infrastructure as Code with Terraform'
    ],
    deployment: 'AWS ECS with auto-scaling',
    githubUrl: 'https://github.com/Flack74/AutoSnapper',
    liveUrl: '#',
    image: '/projects/autosnapper.jpg',
    category: 'Full-Stack/DevOps',
    highlights: [
      'Auto-scaling architecture',
      'Enterprise monitoring',
      'Cloud-native deployment',
      'Performance optimized'
    ]
  },
  {
    id: 'animeverse',
    title: 'AnimeVerse',
    description: 'Full-stack anime platform with real-time search and modern UI',
    longDescription: 'Comprehensive anime management platform built with Go backend and modern frontend technologies. Features real-time search capabilities, RESTful API design, anime tracking and filtering systems with responsive design.',
    technologies: ['Go', 'MongoDB', 'HTMX', 'Tailwind CSS'],
    features: [
      'Real-time search functionality',
      'RESTful API architecture',
      'Anime tracking and filtering',
      'Import and export capabilities',
      'Responsive modern UI',
      'MongoDB integration'
    ],
    deployment: 'Full-stack cloud deployment',
    githubUrl: 'https://github.com/Flack74/AnimeVerse',
    liveUrl: '#',
    image: '/projects/animeverse.jpg',
    category: 'Full-Stack',
    highlights: [
      'Real-time capabilities',
      'Modern UI/UX',
      'Scalable architecture',
      'Database optimization'
    ]
  },
  {
    id: 'iac-vpro',
    title: 'IAC-Vpro',
    description: 'Scalable EKS Infrastructure as Code with automated CI/CD',
    longDescription: 'Production-ready EKS infrastructure provisioning using Terraform with comprehensive CI/CD automation. Features multi-AZ VPC architecture, private subnets, GitOps-based deployment, and cost optimization strategies.',
    technologies: ['Terraform', 'AWS EKS', 'GitHub Actions', 'Kubernetes', 'VPC'],
    features: [
      'Multi-AZ VPC architecture',
      'Private subnet configuration',
      'Full automation with GitOps',
      'Cost optimization strategies',
      'Security best practices',
      'Monitoring and logging setup'
    ],
    deployment: 'AWS EKS with GitHub Actions CI/CD',
    githubUrl: 'https://github.com/Flack74/IAC-Vpro',
    liveUrl: '#',
    image: '/projects/iac-vpro.jpg',
    category: 'DevOps/Infrastructure',
    highlights: [
      'Infrastructure as Code',
      'Production-ready EKS',
      'Automated CI/CD',
      'Cost optimized'
    ]
  },
  {
    id: 'gopher-tales',
    title: 'GopherTales',
    description: 'Interactive Adventure Game with user authentication and progress tracking',
    longDescription: 'Production-ready interactive storytelling platform with 6 unique Gopher adventures, 106+ story arcs, user authentication with MongoDB persistence, smart bookmark system, and fully responsive design.',
    technologies: ['Go', 'MongoDB', 'HTML/CSS', 'JavaScript', 'Docker', 'Kubernetes', 'AWS EKS'],
    features: [
      '6 unique Gopher adventures with 106+ story arcs',
      'User authentication with secure sessions',
      'Real-time progress tracking with MongoDB',
      'Smart bookmark system with server persistence',
      'Fully responsive design for all devices',
      'AWS EKS ready with Kubernetes configurations'
    ],
    deployment: 'Docker + Kubernetes (AWS EKS ready), Render',
    githubUrl: 'https://github.com/Flack74/GopherTales',
    liveUrl: 'https://gophertales.onrender.com/',
    image: '/projects/gopher-tales.jpg',
    category: 'Full-Stack/DevOps',
    highlights: [
      'Production-ready with 6 adventures',
      'Clean Go architecture',
      'AWS EKS deployment ready',
      'Comprehensive CI/CD pipeline'
    ]
  },
  {
    id: 'pom-timer',
    title: 'Pom',
    description: 'Advanced Pomodoro timer with CLI and Web UI, featuring AI insights and multi-profiles',
    longDescription: 'Advanced productivity tool combining CLI and modern web interface with AI-powered suggestions, multi-profile system, calendar heatmap visualization, and cloud sync capabilities.',
    technologies: ['Go', 'HTML/JS', 'CSS', 'REST API', 'SQLite', 'GitHub Actions'],
    features: [
      'Modern Web UI with space theme',
      'Multi-profile support (work, study, custom)',
      'AI-powered productivity suggestions',
      'Calendar heatmap visualization',
      'Export/Import functionality (JSON/CSV)',
      'Cloud sync with GitHub/Dropbox'
    ],
    deployment: 'Cross-platform binary, AUR package',
    githubUrl: 'https://github.com/Flack74/pom',
    liveUrl: '#',
    image: '/projects/pom-timer.jpg',
    category: 'CLI/Productivity',
    highlights: [
      'Web UI in single binary',
      'AI-powered insights',
      'Available on Arch Linux AUR',
      'Cross-platform daemon mode'
    ]
  },
  {
    id: 'blogzy-k8s',
    title: 'Blogzy-k8s',
    description: 'Flask blog platform with Kubernetes deployment and Jenkins CI/CD automation',
    longDescription: 'Complete blog management platform built with Flask featuring user authentication, CRUD operations, responsive Bootstrap design, and comprehensive Kubernetes deployment with Jenkins CI/CD pipeline.',
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'Bootstrap', 'Docker', 'Kubernetes', 'Jenkins'],
    features: [
      'User authentication and authorization',
      'Complete CRUD operations for blog posts',
      'Responsive Bootstrap design',
      'RESTful API for blog management',
      'Docker containerization',
      'Kubernetes deployment manifests'
    ],
    deployment: 'Kubernetes with Jenkins CI/CD, Render',
    githubUrl: 'https://github.com/Flack74/blogzy-k8s',
    liveUrl: 'https://blogzy-1.onrender.com/',
    image: '/projects/blogzy-k8s.jpg',
    category: 'Full-Stack/DevOps',
    highlights: [
      'Complete K8s deployment config',
      'Jenkins CI/CD pipeline',
      'Production Flask app',
      'Docker Hub integration'
    ]
  },
  {
    id: 'cinematch',
    title: 'CineMatch',
    description: 'AI-powered movie recommendation system using Content-Based Filtering',
    longDescription: 'Modern movie recommendation platform leveraging advanced content-based filtering algorithms to provide personalized movie suggestions with React.js frontend and Flask backend.',
    technologies: ['React.js', 'Tailwind CSS', 'Flask', 'MongoDB', 'Docker', 'Kubernetes', 'ML'],
    features: [
      'AI-powered content-based recommendations',
      'Personalized movie suggestions',
      'Advanced filtering by genres and actors',
      'Quick search functionality',
      'Modern React.js interface',
      'MongoDB database integration'
    ],
    deployment: 'Vercel frontend + Flask backend, Docker + K8s',
    githubUrl: 'https://github.com/Flack74/CineMatch',
    liveUrl: '#',
    image: '/projects/cinematch.jpg',
    category: 'Full-Stack/AI',
    highlights: [
      'Machine Learning recommendations',
      'Modern React + Tailwind design',
      'Full-stack Flask API',
      'Kubernetes deployment ready'
    ]
  }
];

export const experience = [
  {
    title: "DevOps & Cloud Enthusiast",
    company: "Self-Learning & Projects",
    period: "2023 - Present",
    description: "Building and deploying cloud-native applications with focus on automation, scalability, and security.",
    achievements: [
      "Deployed 10+ production applications on AWS",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
      "Built infrastructure as code using Terraform",
      "Achieved 99.9% uptime for critical applications"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "University",
    period: "2021 - 2025",
    cgpa: "7.8/10",
    description: "Focused on software engineering, data structures, algorithms, and Cloud Computing."
  }
];

export const certifications = [
  {
    name: "IBM DevOps, Cloud, and Agile Foundations",
    issuer: "Coursera",
    year: "2024",
    credentialId: "IBM-DEVOPS-2024"
  },
  {
    name: "DevOps: Beginner to Advanced with Projects",
    issuer: "Udemy",
    year: "2025",
    credentialId: "UDEMY-DEVOPS-2025"
  }
];