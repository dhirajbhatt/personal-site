const data = [
  {
    title: 'KOKO Systems Platform',
    subtitle: 'A production platform where hardware, logistics, software, data, and AI came together',
    link: 'https://kokonetworks.com',
    image: '/images/projects/koko.jpg',
    date: '2026',
    desc:
      'KOKO was a team effort and I am proud of what we built as a full platform fabric for the business. It blended field hardware, IoT telemetry, operations tooling, payments, logistics workflows, and data products into one reliable system. The platform ran 11 microservices with Postgres as the primary database and an event driven architecture for operational workflows. It also supported 14 production applications including Android apps, operator tools, internal dashboards, and partner integrations. We built a KOKO UI library on top of Vuetify to keep frontends consistent and faster to ship. A full IoT stack enabled real time monitoring and alerting, supporting NOC and operations with live visibility into device fleets, sensors, and network health. We treated quality and reliability as first class, with disciplined delivery, strong automation, and cost conscious architecture that stayed stable under real world constraints.',
  },
  {
    title: 'B2C Platform',
    subtitle: 'A community project to help farmers access expert guidance and timely information',
    link: 'https://github.com/dhirajbhatt/B2C-Platform',
    image: '/images/projects/farmers.jpg',
    date: '2021',
    desc:
      'This was a community giving effort I led while at Rocket Software. We partnered with the Baba Amte Foundation to build a self hosted platform aimed at improving access to practical agricultural knowledge. Farmers often do not get timely updates on science, weather context, government offerings, or trusted guidance. We built a system that helped farmers discover relevant updates and also connect with agriculture experts and professors across Indian universities. The platform supported chat and calling, and enabled farmers to share photos and context to get better advice. We mentored and worked with three interns from Cummins College, and the goal was to deliver something usable, maintainable, and easy for the foundation to run long term.',
  },
  {
    title: 'Log Parser',
    subtitle: 'A fast way to find patterns across large log sets that later became a product offering',
    link: 'https://github.com/dhirajbhatt/Log-Parser',
    image: '/images/projects/logs.jpg',
    date: '2018',
    desc:
      'While working on a large scale network monitoring system, troubleshooting often meant searching for one signal across a massive volume of logs spread across many folders and owners. Different components logged differently, which made consistent diagnosis slow and frustrating. I built this log parser to run regex based searches across large directory trees and return matches quickly and cleanly. It reduced time to identify patterns during incidents and escalations, and it later evolved into a formal product offering because the need was consistent and high impact.',
  },
];

export default data;
