// Services data for Zipway Global

export const serviceCategories = [
  {
    id: 'consultancy',
    name: 'Consultancy Services',
    services: ['global-education-consulting', 'career-guidance', 'visa-assistance']
  },
  {
    id: 'readiness',
    name: 'Readiness & Accelerators',
    services: ['for-parents', 'for-schools', 'career-assessments', 'bootcamps', 'school-programs']
  }
];

export const consultancyServices = [
  {
    id: 'global-education-consulting',
    name: 'Global Education Consulting',
    icon: null,
    shortDescription: 'University shortlisting and admission support',
    description: 'We guide students at every stage of their study abroad journey — from selecting the right universities to preparing standout SOPs and LORs, coaching for exams like IELTS, SAT, GRE, and TOEFL, helping secure scholarships, and managing visa applications.',
    features: [
      'University shortlisting based on profile',
      'Application strategy and planning',
      'SOP and LOR preparation',
      'Exam coaching (IELTS, SAT, GRE, TOEFL)',
      'Scholarship guidance',
      'Visa application support'
    ],
    pricing: 'Custom',
    link: '/contact'
  },
  {
    id: 'career-guidance',
    name: 'Career Guidance',
    icon: null,
    shortDescription: '1-on-1 personalized strategy sessions',
    description: 'Personalized career counseling to help you discover your strengths, clarify your goals, and create an actionable roadmap for studying abroad.',
    features: [
      'One-on-one counseling sessions',
      'Career pathway analysis',
      'Goal setting and planning',
      'Profile evaluation',
      'Course and university recommendations'
    ],
    pricing: 'Custom',
    link: '/contact'
  },
  {
    id: 'visa-assistance',
    name: 'Visa Assistance',
    icon: null,
    shortDescription: 'End-to-end documentation and filing support',
    description: 'Complete visa support including documentation review, application filing, interview preparation, and follow-up assistance.',
    features: [
      'Visa eligibility assessment',
      'Document preparation and review',
      'Application filing assistance',
      'Interview preparation',
      'Follow-up and tracking'
    ],
    pricing: 'Custom',
    link: '/contact'
  }
];

export const supportServices = [
  {
    id: 'for-parents',
    name: 'For Parents',
    icon: null,
    shortDescription: 'Safety and clarity for families.',
    description: 'Comprehensive orientation and support programs designed to help parents navigate the global education landscape with confidence.',
    longDescription: 'Studying abroad is a major family decision. We provide parents with the tools, information, and emotional support needed to ensure their child\'s safety, financial clarity, and academic success in a foreign land. Our sessions cover everything from choosing safe destinations to managing finances and cultural transitions.',
    features: [
      'Safety & destination audits',
      'Financial planning & forex guidance',
      'Regular student progress reports',
      'Emergency support protocols',
      'Parental community access'
    ],
    benefits: [
      { title: 'Peace of Mind', description: 'Know your child is in safe hands with vetted destinations and local support.' },
      { title: 'Financial Roadmap', description: 'Clear visibility into total cost of education and living expenses.' },
      { title: 'Better Alignment', description: 'Bridging the communication gap between student ambitions and family expectations.' }
    ],
    faq: [
      { question: 'How do you ensure student safety?', answer: 'We only partner with accredited universities in safe locations and provide 24/7 on-ground support.' },
      { question: 'Do you help with student housing?', answer: 'Yes, we assist in finding safe, university-approved or verified private accommodation.' }
    ],
    link: '/services/parents'
  },
  {
    id: 'for-schools',
    name: 'For Schools',
    icon: null,
    shortDescription: 'Institutional success and global exposure.',
    description: 'Strategic partnerships with schools to provide students with global career pathways and institutional growth opportunities.',
    longDescription: 'We partner with K-12 institutions to integrate global education readiness into their curriculum. From set-up of international wings to organizing global immersion programs and counselor training, we help schools become global hubs for student excellence.',
    features: [
      'International Wing setup consulting',
      'Professional development for teachers',
      'Global university fairs on campus',
      'Curriculum alignment for global prep',
      'Student profile building workshops'
    ],
    benefits: [
      { title: 'Institutional Prestige', description: 'Enhance your school brand with a strong global education department.' },
      { title: 'Student Success', description: 'Higher college placement rates in top-tier global universities.' },
      { title: 'Teacher Growth', description: 'Exposing educators to global standards and teaching methodologies.' }
    ],
    faq: [
      { question: 'How do we start a partnership?', answer: 'Contact our institutional relations team for a discovery session and audit.' },
      { question: 'Is there a cost for the school?', answer: 'We offer both subsidized and premium partnership models based on school requirements.' }
    ],
    link: '/services/schools'
  },
  {
    id: 'career-assessments',
    name: 'Career & Assessments',
    icon: null,
    shortDescription: 'Scientific path to career clarity.',
    description: 'In-depth psychometric tests and cognitive mapping to discover the ideal academic and career path.',
    longDescription: 'Our scientific assessments go beyond simple tests. We analyze personality traits, cognitive strengths, and interest patterns to map out a personalized success roadmap for students from Grade 8 onwards.',
    features: [
      'AI-powered psychometric testing',
      'One-on-one discovery sessions',
      'Detailed 20-page strength report',
      'Parent-student alignment feedback',
      'Grade-wise academic planning'
    ],
    benefits: [
      { title: 'Scientific Clarity', description: 'Evidence-based career decisions rather than peer pressure.' },
      { title: 'Minimized Risk', description: 'Reduce the chance of student burnout or course switching later.' },
      { title: 'Early Identification', description: 'Spot natural talents early to build a competitive edge.' }
    ],
    faq: [
      { question: 'At what age should the test be taken?', answer: 'Ideal for students in Grades 8-12, but useful even for college graduates.' },
      { question: 'How long does the assessment take?', answer: 'The test takes 45-60 minutes, followed by a 45-minute counseling session.' }
    ],
    link: '/services/assessments'
  },
  {
    id: 'bootcamps',
    name: 'Bootcamps',
    icon: null,
    shortDescription: 'Intensive profile-building accelerators.',
    description: 'High-impact, short-term programs designed to build specific skills and professional profiles.',
    longDescription: 'Our bootcamps are intensive accelerators where students work on real-world projects, build portfolios, and interact with industry experts. Whether it\'s tech, business, or design, we provide the platform to go from concept to creation.',
    features: [
      'Industry-expert mentorship',
      'Real-world project publication',
      'Skill certification',
      'Peer-to-peer collaboration',
      'Portfolio submission support'
    ],
    benefits: [
      { title: 'Portfolio Punch', description: 'Gain unique achievements that stand out on college applications.' },
      { title: 'Domain Expertise', description: 'Deep dive into a specific field beyond textbook knowledge.' },
      { title: 'Social Proof', description: 'Work with recognized brands and experts in the field.' }
    ],
    faq: [
      { question: 'Are bootcamps online or offline?', answer: 'We offer both hybrid and fully online bootcamps to suit global schedules.' },
      { question: 'Will I get a certificate?', answer: 'Yes, all successful graduates receive a globally recognized Zipway certificate.' }
    ],
    link: '/services/bootcamps'
  },
  {
    id: 'school-programs',
    name: 'School Programs',
    icon: null,
    shortDescription: 'Structured institutional engagements.',
    description: 'Long-term programs integrated with the school calendar for holistic student development.',
    longDescription: 'Zipway school programs are designed to be part of the academic ecosystem. We provide year-long guidance and activities that transform students from passive learners to global leaders.',
    features: [
      'Quarterly readiness audits',
      'Guest lectures from global alumni',
      'University application workshops',
      'Leadership & soft-skills training',
      'Global immersion tours'
    ],
    benefits: [
      { title: 'Holistic Growth', description: 'Balance academic goals with global readiness and life skills.' },
      { title: 'Stress-free Planning', description: 'Spreading the career discovery process over 2-3 years.' },
      { title: 'Community Effect', description: 'Students grow together in a culture of global ambition.' }
    ],
    faq: [
      { question: 'How do these programs fit into the timetable?', answer: 'We work with the school administration to schedule sessions during non-academic or co-curricular hours.' }
    ],
    link: '/services/school-programs'
  }
];

// Get service by ID
export const getServiceById = (id) => {
  return consultancyServices.find(service => service.id === id) || 
         supportServices.find(service => service.id === id);
};

export const getAllServices = () => {
  return [...consultancyServices, ...supportServices];
};
