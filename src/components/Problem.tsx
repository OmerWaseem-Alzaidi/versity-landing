'use client';

import { motion } from 'framer-motion';

const painPoints = [
  {
    number: '01',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Missing Events',
    description: "Campus events pass you by because word never reached you in time.",
  },
  {
    number: '02',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Housing Struggles',
    description: 'Safe, affordable student housing feels impossible without the right connections.',
  },
  {
    number: '03',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Trust Issues',
    description: "Trading with strangers online when you can't verify who they really are.",
  },
  {
    number: '04',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: 'Missing Discounts',
    description: "Student discounts exist everywhere, but finding them feels like a treasure hunt.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="pt-24 md:pt-32 lg:pt-40 pb-32 md:pb-40 lg:pb-52 relative overflow-hidden bg-[#FDFBF7]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#493A77]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#FBBF24]/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="editorial-container relative">
        {/* Section Header - Centered */}
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
          {/* The Problem label with lines */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#493A77' }} />
            <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#493A77' }}>
              The Problem
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#493A77' }} />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-[#1A1625] leading-[1.1]" style={{ marginBottom: '24px' }}>
            Student Life <span className="text-[#493A77]">Shouldn&apos;t Be</span>
            <br />
            <span className="relative inline-block">
              This Hard
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-3 bg-[#FBBF24]/40 -z-10 origin-left"
              />
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#4A4458] max-w-lg leading-relaxed">
            Every day, students face unnecessary friction. We&apos;re building something better.
          </p>
        </motion.div>

        {/* Spacer between subtitle and cards */}
        <div className="h-8 md:h-12" />

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Card */}
              <div
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  backgroundColor: 'white',
                  border: '1px solid #E8E4DC',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                }}
                className="hover:shadow-xl hover:-translate-y-2 hover:border-[#493A77]/20"
              >
                {/* Large Background Number */}
                <span
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '24px',
                    fontSize: '120px',
                    fontFamily: 'var(--font-display)',
                    color: 'rgba(73, 58, 119, 0.06)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {point.number}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(73, 58, 119, 0.08)',
                    color: '#493A77',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                  className="group-hover:scale-110 transition-transform duration-500"
                >
                  {point.icon}
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#1A1625',
                    marginBottom: '12px',
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4A4458',
                    lineHeight: 1.7,
                  }}
                >
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spacer between cards and bottom text */}
        <div style={{ height: '100px' }} />

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p className="text-[#4A4458] text-lg">
            Sound familiar? <span className="text-[#493A77] font-semibold">There&apos;s a better way.</span>
          </p>
        </motion.div>

        {/* Spacer before next section */}
        <div style={{ height: '100px' }} />
      </div>
    </section>
  );
}
