const skills = [
  // Architecture and leadership
  { title: 'Platform architecture', competency: 5, category: ['Leadership', 'Architecture'] },
  { title: 'Distributed team leadership', competency: 5, category: ['Leadership'] },
  { title: 'Delivery governance', competency: 4, category: ['Leadership', 'Execution'] },
  { title: 'Quality engineering culture', competency: 4, category: ['Leadership', 'Quality'] },

  // Backend and cloud
  { title: 'Python', competency: 5, category: ['Backend', 'Languages'] },
  { title: 'Flask', competency: 4, category: ['Backend'] },
  { title: 'PostgreSQL', competency: 5, category: ['Databases'] },
  { title: 'Celery', competency: 4, category: ['Backend'] },
  { title: 'AWS', competency: 5, category: ['Cloud'] },
  { title: 'Kubernetes', competency: 4, category: ['Cloud', 'Infrastructure'] },
  { title: 'Docker', competency: 5, category: ['Cloud', 'Infrastructure'] },

  // Frontend
  { title: 'Vue.js', competency: 4, category: ['Frontend'] },

  // Data and AI
  { title: 'SQL', competency: 5, category: ['Data'] },
  { title: 'Data modelling', competency: 5, category: ['Data'] },
  { title: 'AWS Glue', competency: 4, category: ['Data', 'Pipelines'] },
  { title: 'Amazon Redshift', competency: 4, category: ['Data', 'Warehousing'] },
  { title: 'Analytics enablement', competency: 4, category: ['Data', 'Business'] },
  { title: 'ML foundations', competency: 3, category: ['AI', 'ML'] },
  { title: 'AI decision support patterns', competency: 3, category: ['AI', 'Applied'] },

  // IoT and operations
  { title: 'IoT telemetry and monitoring', competency: 4, category: ['IoT'] },
  { title: 'Fleet operations tooling', competency: 4, category: ['IoT', 'Operations'] },

  // Mobile
  { title: 'Kotlin', competency: 3, category: ['Mobile', 'Android'] },
  { title: 'Java', competency: 3, category: ['Mobile', 'Android'] },
  { title: 'Firebase', competency: 3, category: ['Mobile', 'Android'] },
  { title: 'CircleCI', competency: 3, category: ['CI/CD'] },

  // Quality automation
  { title: 'Robot Framework', competency: 4, category: ['Quality'] },
  { title: 'Selenium', competency: 4, category: ['Quality'] },
  { title: 'Appium', competency: 3, category: ['Quality', 'Mobile'] },
  { title: 'API automation', competency: 4, category: ['Quality'] },
  { title: 'Test driven development', competency: 4, category: ['Quality', 'Engineering'] },
];

const categories = [
  { name: 'Leadership', color: '#2f4f4f' },
  { name: 'Architecture', color: '#3b6ea5' },
  { name: 'Execution', color: '#3e6f59' },
  { name: 'Quality', color: '#6b4c3b' },
  { name: 'Backend', color: '#375a7f' },
  { name: 'Languages', color: '#2f6f7e' },
  { name: 'Databases', color: '#5c6e91' },
  { name: 'Cloud', color: '#4a6fa5' },
  { name: 'Infrastructure', color: '#3b5a6f' },
  { name: 'Frontend', color: '#7a5f2a' },
  { name: 'Data', color: '#4b6b44' },
  { name: 'Pipelines', color: '#3d6b63' },
  { name: 'Warehousing', color: '#6a5f7a' },
  { name: 'Business', color: '#6b5a3b' },
  { name: 'AI', color: '#5a4b7a' },
  { name: 'ML', color: '#4b5a7a' },
  { name: 'Applied', color: '#5a6b7a' },
  { name: 'IoT', color: '#2f5f6f' },
  { name: 'Operations', color: '#4f6f5f' },
  { name: 'Mobile', color: '#6b4f5f' },
  { name: 'Android', color: '#4f6b4f' },
  { name: 'CI/CD', color: '#6f4f3f' },
  { name: 'Engineering', color: '#3f5f6f' },
];

export { skills, categories };
export default skills;
