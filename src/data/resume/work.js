/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name
 * @property {string} position
 * @property {string} url
 * @property {string} startDate
 * @property {string|undefined} endDate
 * @property {string|undefined} summary
 * @property {string[]} highlights
 */
const work = [
  {
    name: 'KOKO Networks',
    position: 'Chief Architect, Head of Software Engineering, India Head',
    url: 'https://kokonetworks.com',
    startDate: '2021-07-01',
    summary:
      'I led the architecture and execution of a production platform where software met real operations. The work combined SaaS, IoT, and data systems that supported field hardware, customer journeys, payments, logistics, and internal operations. I built and led distributed teams across geographies and built a delivery cadence that held quality and reliability as first class outcomes.\n\nI spent a lot of time on platform foundations: resilient services, clean interfaces, disciplined delivery, and systems that teams could trust day after day. Data was treated as a product, with governance and privacy at the center, so business teams could make decisions with clarity. I also drove initiatives to improve cost discipline and operational efficiency without trading away reliability.',
    highlights: [
      'Built and scaled a multi pod engineering organisation across platform, data, mobile, and quality, with clear ownership, delivery accountability, and budget discipline',
      'Defined and executed a multi country platform strategy aligning SaaS, IoT, and data foundations for current operations and future expansion',
      'Modernised the hardware and IoT platform with a next generation device architecture designed for scale, reliability, repairability, and better unit economics',
      'Built a PII compliant data ecosystem and analytics layer that enabled self serve insights and practical AI assisted decision support for operations and leadership',
      'Strengthened release quality through automation, quality gates, and go no go discipline, improving confidence in production changes',
      'Delivered cloud efficiency outcomes through infrastructure optimisation, contributing to meaningful year on year cost reduction while maintaining reliability',
      'Tech footprint included AWS, Python, Flask, Kubernetes, Docker, Postgres, Celery, Vue.js, Kotlin, Firebase, AWS Glue, Redshift, SQL, and IoT telemetry and monitoring workflows',
    ],
  },
  {
    name: 'Rocket Software',
    position: 'Chief Architect, Rocket Center of Excellence, India',
    url: 'https://www.rocketsoftware.com',
    startDate: '2018-06-01',
    endDate: '2021-07-01',
    summary:
      'I served as a principal architect and people manager across teams in India and globally. The work blended product roadmap, architecture governance, and execution across enterprise scale BI and platform components. I focused on building consistency across product suites so engineering teams could move faster with fewer surprises.\n\nA major theme was building a common platform foundation: standardising runtimes, language versions, build systems, and dependency governance to address licensing changes, security posture, and long term maintainability.',
    highlights: [
      'Owned architecture and roadmap direction for the QMF BI product line, supporting an established enterprise business line',
      'Defined and governed a common platform foundation across product suites, standardising runtimes, language versions, build systems, and open source dependencies to improve security, compliance, and maintainability',
      'Worked across distributed teams and functions to align product strategy, engineering execution, and customer expectations',
      'Raised technical consistency and delivery reliability by simplifying shared foundations and reducing upgrade and integration risk',
    ],
  },
  {
    name: 'SevOne',
    position: 'India Head and Director of Engineering',
    url: 'https://www.sevone.com',
    startDate: '2015-05-01',
    endDate: '2018-05-01',
    summary:
      'I established and scaled an India development centre and led engineering execution across core product areas. The work involved enterprise customers, security and compliance expectations, and high bar delivery. I operated across hiring, org setup, engineering leadership, and customer facing technical work.\n\nThe theme was building teams and systems that delivered reliably under real constraints, while meeting demanding certification and validation needs.',
    highlights: [
      'Established the India development centre from scratch, covering hiring, team formation, and engineering execution',
      'Helped drive security and compliance outcomes including Common Criteria certifications and FIPS validation efforts',
      'Served as engineering representative in customer POVs with global enterprise partners and operators',
      'Owned architecture and engineering strategy goals and delivered meaningful cost savings through platform and execution improvements',
    ],
  },
  {
    name: 'Symantec',
    position: 'Principal Engineer',
    url: 'https://www.broadcom.com/company/symantec',
    startDate: '2008-01-01',
    endDate: '2011-01-01',
    summary:
      'I worked as a Principal Engineer on enterprise security and mobility platforms, with a strong focus on device management, application security, and platform evolution. I led development of key components of Norton’s MDM solution across Android and OSX, and contributed deeply to security architecture, performance, and reliability. This role strengthened my hands on engineering depth while also expanding my responsibilities across architecture, mentoring, and cross team leadership.',
    highlights: [
      'Led development of core MDM features for Android and OSX as part of Norton device management solutions',
      'Designed and built application security libraries to detect jailbreak, root access, and unsafe device states prior to app installation',
      'Contributed to the architecture initiative that transitioned the platform toward a microservices based design',
      'Finalist at Symantec Cyber War Games 2015 held in Mountain View',
      'Worked with autonomous vendors to clear FIPS 140 2 and Common Criteria certification requirements',
      'Trained and mentored multiple product teams on security fundamentals, encryption, digital signing, and certificates',
      'Recipient of the Symantec Standing Ovation Award for contributions to the CCS External Data Integrator product',
      'Built and scaled lab infrastructure including capacity planning, procurement, deployment, and operational readiness',
      'Hired, mentored, and coached engineers within scrum teams, driving strong delivery and quality outcomes',
      'Defined performance metrics and proof of concept tools, and helped drive test driven development and high automation coverage',
      'Supported RFPs, proof of concepts, client demos, and engineering escalations in collaboration with support teams',
    ],
  },
  {
    name: 'IBM Internet Security Systems',
    position: 'Systems Engineer, R&D',
    url: 'https://www.ibm.com/security',
    startDate: '2006-01-01',
    endDate: '2008-01-01',
    summary:
      'I worked in R&D on enterprise security products, with ownership of core components and close collaboration across product, engineering, and customer teams. This role provided early exposure to how security products are built, operated, and supported at scale, and shaped my foundation in reliability, system design, and customer driven engineering.',
    highlights: [
      'Sole owner of SiteProtector within an independent onsite team, responsible for delivery and stability',
      'Contributed to product and technical documentation for BBP, Business Continuity Plans, and OPAL process libraries',
      'Conducted training on Virtual Private Networks as part of Train the Trainers initiatives with CSI, IBM Software Labs, and academic institutions',
      'Awarded Bravo The Best of IBM on multiple occasions for delivery quality, training contributions, and successful proof of concept implementations',
      'Aligned with the Product Management track to provide early feedback and insights on upcoming product releases',
    ],
  },
];

export default work;
