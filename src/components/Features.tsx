'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: 'events',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Campus Events',
    description: 'Discover events, workshops, and social gatherings. Join WhatsApp groups instantly.',
    gradient: 'from-[#493A77] to-[#6B5B9A]',
    lightBg: 'bg-[#493A77]/8',
    stats: [
      { label: 'Events Monthly', value: '200+' },
      { label: 'Universities', value: '50+' },
    ],
  },
  {
    id: 'housing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Student Housing',
    description: 'Find verified roommates and housing. Safe, student-only marketplace.',
    gradient: 'from-[#059669] to-[#34D399]',
    lightBg: 'bg-[#059669]/8',
    stats: [
      { label: 'Listings', value: '500+' },
      { label: 'Verified Users', value: '10K+' },
    ],
  },
  {
    id: 'marketplace',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    title: 'Buy & Sell',
    description: 'Trade textbooks, furniture, and more with verified students.',
    gradient: 'from-[#D97706] to-[#FBBF24]',
    lightBg: 'bg-[#D97706]/8',
    stats: [
      { label: 'Items Listed', value: '2K+' },
      { label: 'Saved', value: '$50K+' },
    ],
  },
  {
    id: 'discounts',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: 'Student Discounts',
    description: 'Exclusive deals from local businesses. Save on food and entertainment.',
    gradient: 'from-[#7C3AED] to-[#A78BFA]',
    lightBg: 'bg-[#7C3AED]/8',
    stats: [
      { label: 'Partners', value: '100+' },
      { label: 'Avg Savings', value: '30%' },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-[#F7F4ED]">
      {/* Top spacer for margin from previous section */}
      <div style={{ height: '80px' }} />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#493A77]/[0.03] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#FBBF24]/[0.04] blur-3xl" />
      </div>

      <div className="py-16 md:py-24 lg:py-32">
        <div className="editorial-container relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Features label with lines */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#493A77' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#493A77' }}>
                Features
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#493A77' }} />
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-[#1A1625] leading-[1.1]" style={{ marginBottom: '24px' }}>
              Everything Students Need,
              <br />
              <span className="text-[#493A77]">One App</span>
            </h2>

            {/* Subtitle - centered */}
            <p style={{
              fontSize: '16px',
              color: '#4A4458',
              lineHeight: 1.7,
              maxWidth: '500px',
              textAlign: 'center',
              margin: '0 auto',
            }}>
              Four powerful features designed to make student life easier, safer, and more connected.
            </p>
          </motion.div>

          {/* Spacer between subtitle and cards */}
          <div style={{ height: '60px' }} />

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(232, 228, 220, 0.6)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="hover:shadow-lg hover:-translate-y-1.5 hover:border-[#493A77]/15"
                >
                  {/* Card header with gradient */}
                  <div
                    className={`bg-gradient-to-br ${feature.gradient}`}
                    style={{
                      padding: '24px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Decorative circle */}
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />

                    {/* Icon */}
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        marginBottom: '12px',
                      }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    >
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'white',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {feature.title}
                    </h3>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Description */}
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#4A4458',
                        lineHeight: 1.6,
                        marginBottom: '16px',
                        flex: 1,
                      }}
                    >
                      {feature.description}
                    </p>

                    {/* Stats - fixed alignment */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px',
                      }}
                    >
                      {feature.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className={feature.lightBg}
                          style={{
                            padding: '12px 8px',
                            borderRadius: '10px',
                            textAlign: 'center',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '18px',
                              fontWeight: 700,
                              color: '#1A1625',
                              marginBottom: '4px',
                              fontFamily: 'system-ui, -apple-system, sans-serif',
                              letterSpacing: '-0.02em',
                              lineHeight: 1,
                            }}
                          >
                            {stat.value}
                          </div>
                          <div
                            style={{
                              fontSize: '9px',
                              color: '#6B7280',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Spacer between cards and bottom text */}
          <div style={{ height: '80px' }} />

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <p style={{ color: '#4A4458', fontSize: '16px', marginBottom: '24px' }}>
              And this is just the beginning...
            </p>
            <a
              href="https://tally.so/r/LZPJjz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: '#493A77',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(73, 58, 119, 0.25)',
                border: 'none',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              className="hover:bg-[#3D2F63] hover:shadow-lg"
            >
              Get Early Access
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacer for margin to next section */}
      <div style={{ height: '100px' }} />
    </section>
  );
}
