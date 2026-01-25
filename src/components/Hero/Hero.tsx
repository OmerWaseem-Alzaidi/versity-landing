'use client';

import { motion } from 'framer-motion';
import GradientOrbs from './GradientOrbs';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#FDFBF7]" />

      {/* Animated Gradient Orbs - main visual */}
      <div className="absolute inset-0">
        <GradientOrbs />
      </div>

      {/* Subtle overlay gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(73,58,119,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.03),transparent_50%)]" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-50" />

      {/* Decorative lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-32 left-8 md:left-16 w-px h-32 bg-gradient-to-b from-transparent via-[#493A77]/30 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-32 right-8 md:right-16 w-px h-48 bg-gradient-to-b from-transparent via-[#493A77]/30 to-transparent"
      />

      {/* Content */}
      <div className="editorial-container relative z-10 pt-32 pb-28 md:pt-40 md:pb-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-[#493A77]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#493A77]">
              For Students Everywhere
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-display)] text-[#1A1625] leading-[0.95]"
            style={{ marginBottom: '40px' }}
          >
            Your University
            <br />
            <span className="text-[#493A77]">Community,</span>
            <br />
            <em className="not-italic relative inline-block">
              Verified
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 200 20"
                fill="none"
              >
                <motion.path
                  d="M5 15 Q 50 5, 100 12 T 195 10"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.svg>
            </em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-[#4A4458] max-w-xl leading-relaxed"
            style={{ marginBottom: '48px' }}
          >
            Connect with verified students. Find events, housing, and deals —
            <span className="text-[#1A1625] font-medium"> exclusively for university students.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            {/* Primary CTA */}
            <a
              href="https://tally.so/r/LZPJjz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 32px',
                backgroundColor: '#493A77',
                color: 'white',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '50px',
                border: 'none',
                outline: 'none',
                textDecoration: 'none',
                boxShadow: '0 6px 24px rgba(73, 58, 119, 0.3)',
              }}
              className="hover:bg-[#3D2F63] transition-all duration-300"
            >
              Get Started
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Secondary CTA */}
            <a
              href="#problem"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 32px',
                color: '#493A77',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '50px',
                border: 'none',
                outline: 'none',
                textDecoration: 'none',
                backgroundColor: 'transparent',
              }}
              className="hover:bg-[#493A77]/5 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
