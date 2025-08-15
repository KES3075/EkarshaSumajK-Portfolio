export const portfolioData = {
  personalInfo: {
    name: "Ekarshak Sumaj Kotikalapoodi",
    title: "Software Engineer",
    bio: "Passionate software engineer with expertise in modern web technologies, cloud platforms, and AI/ML integration. Currently working at Fixity Learning Pad, building scalable educational solutions.",
    phone: "+91 9419418611099",
    email: "ekarshaksumaj@gmail.com",
    github: "https://github.com/maxckes",
    linkedin: "https://www.linkedin.com/in/ekarsha-sumaj/",
    portfolio: "https://ekarshak.dev"
  },
  skills: [
    { id: "1", name: "React.js", category: "Frontend" },
    { id: "2", name: "Next.js", category: "Frontend" },
    { id: "3", name: "TypeScript", category: "Programming" },
    { id: "4", name: "JavaScript", category: "Programming" },
    { id: "5", name: "Python", category: "Programming" },
    { id: "6", name: "Java", category: "Programming" },
    { id: "7", name: "Node.js", category: "Backend" },
    { id: "8", name: "Express.js", category: "Backend" },
    { id: "9", name: "FastAPI", category: "Backend" },
    { id: "10", name: "Django", category: "Backend" },
    { id: "11", name: "Flask", category: "Backend" },
    { id: "12", name: "PostgreSQL", category: "Database" },
    { id: "13", name: "MongoDB", category: "Database" },
    { id: "14", name: "MySQL", category: "Database" },
    { id: "15", name: "AWS", category: "Cloud" },
    { id: "16", name: "Azure", category: "Cloud" },
    { id: "17", name: "Docker", category: "DevOps" },
    { id: "18", name: "Kubernetes", category: "DevOps" },
    { id: "19", name: "Git", category: "DevOps" },
    { id: "20", name: "CI/CD", category: "DevOps" }
  ],
  experience: [
    {
      id: "1",
      company: "Fixity Learning Pad",
      position: "Full Stack Web Developer",
      period: "August 2024 - Present",
      description: "Developed production-grade APIs using FastAPI with AI service integration for predictive analytics and automated workflows, supporting scalable full-stack educational solutions. Built responsive UI/UX interfaces using React, Next.js, and Tailwind CSS.",
      technologies: ["TypeScript", "Node.js", "React", "Next.js", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Azure", "Firebase", "AWS"]
    }
  ],
  projects: [
    {
      id: "1",
      name: "Agentic-AI-SaaS-Website-Builder",
      description: "Developed AI-driven SaaS platform using Next.js 15.3.3, React 19, TypeScript, tRPC, and Google Gemini, automating code generation with real-time execution in E2B sandboxes. Engineered scalable tech stack with shadcn/ui, Tailwind CSS, Prisma ORM, PostgreSQL, and Clerk for supporting real-time chat and persistent storage.",
      technologies: ["Next.js 15.3", "React 19", "TypeScript", "Tailwind CSS", "ShadowUI", "tRPC", "Prisma ORM", "PostgreSQL", "Clerk", "Google Gemini", "E2B"],
      github: "https://github.com/maxckes/SaaS-Agentic-AI-Website-Builder",
      demo: "https://saa-s-agentic-ai-website-builder-yv.vercel.app/"
    },
    {
      id: "2",
      name: "MCP-MONGO",
      description: "Built MCP server for standardized MongoDB operations with more than 25 tools for connection, CRUD, and admin tasks using TypeScript and MongoDB driver. Implemented clean architecture with separated interface and MongoDB layer, including lazy connections, Zod validation, and robust error handling.",
      technologies: ["TypeScript", "MongoDB", "Node.js", "Zod", "MCP Protocol", "Clean Architecture"],
      github: "https://github.com/maxckes/MCP-MONGO",
      demo: null
    },
    {
      id: "3",
      name: "Certificate-Generator",
      description: "Built in-browser certificate generator using Next.js 15, React 19, TypeScript, Konva, and Clerk, enabling CSV data mapping and bulk PNG export via ZIP, generating 1,000+ certificates per batch. Integrated Tailwind CSS 4, Zustand, Prisma ORM, and jszip for responsive UI, in-memory state management, and scalable certificate generation with 100% data accuracy.",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Konva", "Clerk", "Tailwind CSS 4", "Zustand", "Prisma ORM", "jszip"],
      github: "https://github.com/maxckes/Certificate-Generator",
      demo: null
    }
  ],
  education: [
    {
      id: "1",
      institution: "Vellore Institute of Technology, Amaravathi",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "September 2022 - June 2026",
      cgpa: "8.78",
      location: "Andhra Pradesh"
    }
  ],
  certifications: [
    {
      id: "1",
      name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      issuer: "Microsoft",
      url: "https://drive.google.com/file/d/19DH5a-q7EmfPjkmp8uzF5Mz-toZINHxC/view?pli=1"
    },
    {
      id: "2",
      name: "Meta Front-End Developer",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/SJQLCVMEKEK4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
    },
    {
      id: "3",
      name: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
      issuer: "Oracle",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4765029D192E6D504F5F3A22F9AC5F732EF488B77E579C6262F5256A4EFC9A34"
    },
    {
      id: "4",
      name: "MongoDB Certified DBA Associate (C100DBA)",
      issuer: "MongoDB",
      url: "https://www.mongodb.com/certification"
    }
  ]
};