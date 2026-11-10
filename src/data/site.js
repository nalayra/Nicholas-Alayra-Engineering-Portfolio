/**
 * CUSTOMIZE HERE FIRST.
 * This is the only file you need to edit to change most of the text, links,
 * skills, and project content on the website.
 *
 * Only list experiences/results you can substantiate. Images in public/images
 * are illustrative placeholders: replace them with YOUR renders or photos.
 */
export const profile = {
  name: 'Nicholas Alayra',
  initials: 'NA',
  eyebrow: 'ENGINEERING PORTFOLIO',
  headline: 'Engineering through design, analysis, and innovation.',
  intro: 'Engineering student at Biola University and Frame Team Lead for Biola Racing. I enjoy building practical solutions through mechanical design, CAD, and computational thinking.',
  location: 'Southern California',
  email: '', // e.g. 'you@example.com' — blank hides the email button
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-profile/'
  github: '', // e.g. 'https://github.com/your-username'
  resumePdf: '', // After adding public/resume.pdf, change to '/resume.pdf'
  graduation: 'May 2027',
};

export const skills = [
  { title: 'CAD & Design', items: ['SolidWorks', 'Parametric 3D Modeling', 'Weldment Design', 'Mechanical Design'] },
  { title: 'Simulation & Computing', items: ['MATLAB', 'ANSYS (planned / learning)'] },
  { title: 'Programming', items: ['C++', 'C / Arduino', 'JavaScript', 'SQL', 'HTML & CSS'] },
  { title: 'Development Tools', items: ['React', 'Git', 'GitHub'] },
];

export const projects = [
  {
    slug: 'biola-racing',
    number: '01',
    category: 'Vehicle Structures / CAD',
    title: 'Biola Racing — Baja SAE Chassis',
    subtitle: 'Frame Team Lead · Biola University · 2026–Present',
    summary: 'Collaborative development of a tubular steel chassis for Biola Racing’s Baja SAE off-road vehicle.',
    image: '/images/baja-frame.svg',
    imageAlt: 'Illustrative line drawing of a tubular off-road racing chassis — replace with your own CAD render',
    featured: true,
    tags: ['SolidWorks', 'Frame Design', 'Weldments', 'Baja SAE'],
    challenge: 'Develop a manufacturable off-road vehicle chassis that integrates with suspension and vehicle packaging requirements while meeting the applicable Baja SAE rules.',
    role: 'Serve as Frame Team Lead while collaborating with the wider Biola Racing team on design choices, structural layout, and subsystem integration.',
    approach: [
      'Develop an editable, parametric chassis layout and weldment geometry in SolidWorks.',
      'Evaluate the position and connectivity of frame members, balancing manufacturability and packaging.',
      'Coordinate frame geometry with suspension mounting and applicable competition requirements.',
    ],
    results: 'Design and analysis are ongoing. Add verified calculations, ANSYS results, structural measurements, and test photos here as they become available.',
    gallery: ['/images/baja-frame.svg'],
  },
  {
    slug: 'teacup-ride',
    number: '02',
    category: 'Mechanisms / Mechanical Design',
    title: 'Motorized Teacup Ride Mechanism',
    subtitle: 'Mechanical Design Project · 2026',
    summary: 'A compact, multi-stage rotating mechanism using interconnected gears and independently rotating platforms.',
    image: '/images/teacup-mechanism.svg',
    imageAlt: 'Illustrative gear mechanism diagram — replace with your own SolidWorks assembly',
    featured: true,
    tags: ['SolidWorks', 'Mechanisms', '3D Printing', 'Motion Study'],
    challenge: 'Design a multi-part rotating assembly with coordinated gear motion, constrained packaging, and printable components.',
    role: 'Modeled and iterated the assembly and individual parts in SolidWorks as part of a personal mechanical design project.',
    approach: [
      'Modeled gears, supports, platforms, and bearing interfaces.',
      'Considered assembly clearances, interfaces, and additive-manufacturing constraints.',
      'Explored assembly motion to understand how the rotating components interact.',
    ],
    results: 'Add photos of the assembled prototype, a short motion-study clip, and any verified performance observations.',
    gallery: ['/images/teacup-mechanism.svg'],
  },
  {
    slug: 'mechatronics',
    number: '03',
    category: 'Robotics / Embedded Systems',
    title: 'Mechatronics & Mobile Robotics',
    subtitle: 'Engineering Coursework · 2026',
    summary: 'Coursework and experiments involving Arduino-based systems, rover kinematics, and electromechanical integration.',
    image: '/images/robotics.svg',
    imageAlt: 'Illustrative mobile robotics diagram — replace with a photo of your actual project',
    featured: false,
    tags: ['Arduino', 'C / C++', 'Kinematics', 'Prototyping'],
    challenge: 'Connect mechanical motion, embedded control, and mathematical models in a physical system.',
    role: 'Completed related engineering coursework and project exercises; expand this description with the exact scope of your contributions.',
    approach: [
      'Developed familiarity with mobile robot kinematics and motion relationships.',
      'Worked with Arduino hardware and embedded development workflows.',
      'Applied engineering calculations to understand mechanical motion.',
    ],
    results: 'Add tested code, real hardware images, and measured outcomes once project details are finalized.',
    gallery: ['/images/robotics.svg'],
  },
];

export const background = [
  {
    title: 'Biola University',
    line: 'B.S. Engineering',
    detail: 'Expected graduation: May 2027',
  },
  {
    title: 'Flatiron School',
    line: 'Software Engineering Certificate',
    detail: 'Software development foundation',
  },
];

export const experience = [
  {
    title: 'Freelance Web Designer & Developer',
    organization: 'Self-Employed',
    date: 'Mar 2022 – Dec 2025',
    text: 'Designed, developed, and maintained websites for small- and medium-sized businesses using HTML, CSS, JavaScript, and React; coordinated requirements, hosting, and deployment.',
  },
  {
    title: 'IT Support',
    organization: 'Horizon',
    date: 'Jun 2017 – Nov 2021',
    text: 'Troubleshot hardware and software problems and installed, network-configured, and tested employee timekeeping systems at client sites.',
  },
];
