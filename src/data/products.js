// Product catalog data for Zipway Global
export const products = [
  // ASSESSMENTS
  {
    id: 'psychometric-assessment',
    name: 'Psychometric Assessment',
    category: 'Assessments',
    price: 1999,
    currency: 'INR',
    description: 'Scientific map of cognitive patterns and personality traits to identify natural strengths.',
    whoItIsFor: 'Students in Grades 8-10 looking for early direction.',
    whatItUnlocks: 'Access to Foundation Programs and Career Discovery Sessions.',
    timeRequired: '45-60 Minutes',
    outcome: 'Detailed Strength Analysis Report (PDF)',
    features: [
      'Personality profiling',
      'Cognitive pattern mapping',
      'Initial career field suggestions',
      'Downloadable PDF analysis'
    ],
    image: 'https://picsum.photos/seed/assessment1/400/300'
  },
  {
    id: 'career-interest-mapping',
    name: 'Career Interest Mapping',
    category: 'Assessments',
    price: 2999,
    currency: 'INR',
    description: 'Technical alignment of academic interests with industry domains and future study paths.',
    whoItIsFor: 'High schoolers (Grades 11-12) finalizing career paths.',
    whatItUnlocks: 'Access to specialized Bootcamps and Pathway Packages.',
    timeRequired: '90 Minutes',
    outcome: 'Career Domain Alignment Report',
    features: [
      'Interest-to-industry mapping',
      'Subject selection guidance',
      'University major recommendations',
      'Industry trend alignment'
    ],
    image: 'https://picsum.photos/seed/assessment2/400/300'
  },

  // BOOTCAMPS
  {
    id: 'global-career-blueprint',
    name: 'Global Career Blueprint',
    category: 'Bootcamps',
    price: 14999,
    currency: 'INR',
    description: 'Intensive 4-week accelerator designed to build a solid profile for international admissions.',
    whoItIsFor: 'Students targeting Top 100 Global Universities.',
    whatItUnlocks: 'Profile Audit and Alumni Access.',
    duration: '4 Weeks',
    mode: 'Hybrid',
    features: [
      'Profile building strategy',
      'Extracurricular optimization',
      'Academic goal setting',
      'Global university landscape overview'
    ],
    image: 'https://picsum.photos/seed/bootcamp1/400/300'
  },

  // PROGRAMS
  {
    id: 'foundation-readiness',
    name: 'Foundation Readiness Program',
    category: 'Programs',
    price: 24999,
    currency: 'INR',
    description: 'A 3-month structured engagement focused on building core competencies for transition.',
    whoItIsFor: 'Students in early transition stages (Grade 10/11).',
    whatItUnlocks: 'Quarterly Progress Audits.',
    duration: '3 Months',
    deliveryModel: 'Fortnightly Sessions',
    features: [
      'Skill gap analysis',
      'Soft skill development',
      'Academic tracking',
      'Parent alignment sessions'
    ],
    image: 'https://picsum.photos/seed/program1/400/300'
  },

  // FULL PATHWAY PACKAGES
  {
    id: 'elite-university-pathway',
    name: 'Elite University Pathway',
    category: 'Pathways',
    price: 149999,
    currency: 'INR',
    description: 'End-to-end guided journey from assessment to enrollment in top-tier global institutions.',
    whoItIsFor: 'High-commitment students seeking comprehensive guidance.',
    whatItUnlocks: 'Unlimited Advisor Support & Milestone Access.',
    duration: '1-2 Years',
    advisorInvolvement: 'High - Dedicated Mentor',
    features: [
      'Comprehensive profile management',
      'Standardized test strategy',
      'Application & SOP guidance',
      'Visa & transition support'
    ],
    image: 'https://picsum.photos/seed/pathway1/400/300'
  }
];

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Helper function to format currency
export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Subscriptions (Coming Soon) Data Structure Preview
export const upcomingSubscriptions = [
  {
    id: 'mentorship-plus',
    name: 'Mentorship Plus',
    description: 'Continuous advisory and resource access for long-term growth.',
    features: [
      'Monthly expert check-ins',
      'Content library access',
      'Priority event booking'
    ]
  }
];

