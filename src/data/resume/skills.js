const skills = [
  // Management first
  { title: 'Technology strategy and platform roadmap', competency: 5, category: ['Management'] },
  { title: 'Engineering organisation design', competency: 5, category: ['Management'] },
  { title: 'Distributed team leadership', competency: 5, category: ['Management'] },
  { title: 'Hiring and capability building', competency: 5, category: ['Management'] },
  { title: 'Delivery governance', competency: 5, category: ['Management'] },
  { title: 'Budget ownership and cost discipline', competency: 4, category: ['Management'] },
  { title: 'Stakeholder management', competency: 4, category: ['Management'] },
  { title: 'Operational risk management', competency: 4, category: ['Management'] },

  // Technology next, clean buckets
  { title: 'Platform architecture', competency: 5, category: ['Engineering'] },
  { title: 'Microservices architecture', competency: 5, category: ['Engineering'] },
  { title: 'API design and integration', competency: 5, category: ['Engineering'] },
  { title: 'Event driven systems', competency: 4, category: ['Engineering'] },
  { title: 'Systems reliability and resilience', competency: 5, category: ['Engineering'] },
  { title: 'Observability and incident response', competency: 4, category: ['Engineering'] },
  { title: 'Python', competency: 5, category: ['Engineering'] },
  { title: 'Flask', competency: 4, category: ['Engineering'] },
  { title: 'PostgreSQL', competency: 5, category: ['Engineering'] },
  { title: 'Celery', competency: 4, category: ['Engineering'] },
  { title: 'AWS', competency: 5, category: ['Engineering'] },
  { title: 'Kubernetes', competency: 4, category: ['Engineering'] },
  { title: 'Docker', competency: 5, category: ['Engineering'] },
  { title: 'Vue.js', competency: 4, category: ['Engineering'] },
  { title: 'CI and CD pipelines', competency: 4, category: ['Engineering'] },
  { title: 'Quality engineering and test automation', competency: 5, category: ['Engineering'] },
  { title: 'Test driven development', competency: 4, category: ['Engineering'] },
  { title: 'API automation', competency: 4, category: ['Engineering'] },
  { title: 'Robot Framework', competency: 4, category: ['Engineering'] },
  { title: 'Selenium', competency: 4, category: ['Engineering'] },
  { title: 'Appium', competency: 3, category: ['Engineering'] },

  // Data and AI together
  { title: 'Data strategy', competency: 5, category: ['Data and AI'] },
  { title: 'Data governance and privacy', competency: 4, category: ['Data and AI'] },
  { title: 'SQL', competency: 5, category: ['Data and AI'] },
  { title: 'Data modelling', competency: 5, category: ['Data and AI'] },
  { title: 'AWS Glue', competency: 4, category: ['Data and AI'] },
  { title: 'Amazon Redshift', competency: 4, category: ['Data and AI'] },
  { title: 'Analytics enablement', competency: 5, category: ['Data and AI'] },
  { title: 'ML foundations', competency: 3, category: ['Data and AI'] },
  { title: 'Applied AI decision support', competency: 3, category: ['Data and AI'] },

  // IoT and operations
  { title: 'IoT telemetry and monitoring', competency: 4, category: ['IoT and Operations'] },
  { title: 'Fleet operations tooling', competency: 4, category: ['IoT and Operations'] },
  { title: 'Device fleet reliability', competency: 4, category: ['IoT and Operations'] },

  // Mobile unified
  { title: 'Android engineering', competency: 3, category: ['Mobile'] },
  { title: 'Kotlin', competency: 3, category: ['Mobile'] },
  { title: 'Java', competency: 3, category: ['Mobile'] },
  { title: 'Firebase', competency: 3, category: ['Mobile'] },

  // Security as one coherent bucket
  { title: 'Security by design', competency: 4, category: ['Security'] },
  { title: 'Application security fundamentals', competency: 4, category: ['Security'] },
  { title: 'Threat modelling and secure review', competency: 3, category: ['Security'] },
  { title: 'Compliance mindset and audit readiness', competency: 3, category: ['Security'] },
];

const categories = [
  { name: 'Management', color: '#2f4f4f' },
  { name: 'Engineering', color: '#3b6ea5' },
  { name: 'Data and AI', color: '#4b6b44' },
  { name: 'IoT and Operations', color: '#2f5f6f' },
  { name: 'Mobile', color: '#6b4f5f' },
  { name: 'Security', color: '#5f3f3f' },
];

export { skills, categories };
export default skills;
