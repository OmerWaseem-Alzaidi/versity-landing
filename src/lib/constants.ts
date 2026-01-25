// Versity Brand Tokens

export const colors = {
  primary: '#493A77',
  primaryLight: 'rgba(73, 58, 119, 0.1)',
  secondary: '#FBBF24',
  background: '#FFFFFF',
  backgroundAlt: '#F9FAFB',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  stroke: '#E5E7EB',
  success: '#22C55E',
  error: '#EF4444',
} as const;

export const typography = {
  fontFamily: "'Inter', sans-serif",
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const animation = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.7,
  },
  easing: 'easeOut',
  staggerChildren: 0.1,
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Framer Motion animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Navigation
export const navLinks = {
  logo: 'Versity',
  cta: 'Download App',
};

// Hero Section
export const heroContent = {
  headline: 'Your University Community, Verified',
  subheadline: 'Connect with verified students. Find events, housing, and deals - exclusively for university students.',
  primaryCta: 'Get Started',
  secondaryCta: 'Learn More',
};

// Social Proof
export const socialProof = {
  headline: 'Trusted by students from top universities',
  universities: [
    // Placeholder - will be replaced with actual university logos
  ],
};

// Problem Section
export const problemContent = {
  headline: "Student Life Shouldn't Be This Hard",
  painPoints: [
    {
      icon: 'calendar',
      text: "Missing out on campus events because you didn't hear about them",
    },
    {
      icon: 'home',
      text: 'Struggling to find safe, affordable student housing',
    },
    {
      icon: 'shield',
      text: 'Buying from strangers with no way to verify who they are',
    },
  ],
};

// Features Section
export const featuresContent = {
  headline: 'Everything Students Need, One App',
  features: [
    {
      icon: 'calendar',
      title: 'Campus Events',
      description: 'Discover free events, workshops, and social gatherings. Join WhatsApp groups instantly.',
    },
    {
      icon: 'home',
      title: 'Student Housing',
      description: 'Find verified roommates and housing listings. Safe, student-only marketplace.',
    },
    {
      icon: 'shopping',
      title: 'Buy & Sell',
      description: 'Trade textbooks, furniture, and more with verified students from your university.',
    },
  ],
};

// How It Works
export const howItWorksContent = {
  headline: 'Get Started in 3 Steps',
  steps: [
    {
      number: 1,
      title: 'Download the App',
      description: 'Get Versity from the App Store or Google Play',
    },
    {
      number: 2,
      title: 'Verify with .edu Email',
      description: 'Confirm your student status with your university email',
    },
    {
      number: 3,
      title: 'Join Your Community',
      description: 'Connect with verified students from your campus',
    },
  ],
};

// Trust Section
export const trustContent = {
  headline: 'Built for Student Safety',
  points: [
    '.edu email verification required',
    'Every user is a real, verified student',
    'WhatsApp integration for safe communication',
    'No payments in app - meet and transact safely',
  ],
};

// FAQ
export const faqContent = {
  headline: 'Frequently Asked Questions',
  questions: [
    {
      question: 'Who can use Versity?',
      answer: 'Versity is exclusively for university students. You need a valid .edu email address to verify your student status.',
    },
    {
      question: 'How does verification work?',
      answer: 'Simply sign up with your university email address. We\'ll send a verification link to confirm you\'re a real student.',
    },
    {
      question: 'Is Versity free?',
      answer: 'Yes! Versity is completely free for all verified students. There are no hidden fees or premium features.',
    },
    {
      question: 'How do I contact other students?',
      answer: 'Versity integrates with WhatsApp for safe, direct communication. You can join group chats or message students directly.',
    },
    {
      question: 'Which universities are supported?',
      answer: 'We support universities worldwide. If your university provides you with a .edu email address, you can join Versity.',
    },
  ],
};

// Final CTA
export const finalCtaContent = {
  headline: 'Ready to Join Your Campus Community?',
  subtext: 'Download Versity and connect with verified students today.',
};

// Footer
export const footerContent = {
  logo: 'Versity',
  links: ['About', 'Privacy Policy', 'Terms of Service', 'Contact'],
  social: ['Instagram', 'Twitter'],
  copyright: '© 2025 Versity. All rights reserved.',
};
