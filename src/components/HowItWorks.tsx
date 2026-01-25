'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: 1,
    title: 'Download the App',
    description: 'Get Versity from the App Store or Google Play.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Verify with .edu Email',
    description: 'Confirm your student status with your university email.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Join Your Community',
    description: 'Connect with verified students from your campus.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Unlock Full Experience',
    description: 'Everything you need for university life, from day one.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#FDFBF7]">
      {/* Top spacer */}
      <div style={{ height: '60px' }} />

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#493A77]/[0.02] blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#FBBF24]/[0.03] blur-3xl" />
      </div>

      <div className="py-20 md:py-28 lg:py-32">
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
            {/* Label with lines */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#493A77' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#493A77' }}>
                Getting Started
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#493A77' }} />
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-[#1A1625] leading-[1.1]" style={{ marginBottom: '20px' }}>
              Get Started in <span className="text-[#493A77]">4 Steps</span>
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '16px',
              color: '#4A4458',
              lineHeight: 1.7,
              maxWidth: '450px',
              textAlign: 'center',
            }}>
              Join thousands of students already using Versity. It only takes a minute.
            </p>
          </motion.div>

          {/* Spacer */}
          <div style={{ height: '70px' }} />

          {/* Steps Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 24px',
            }}
          >
            {/* Horizontal Timeline - Desktop */}
            <div
              className="hidden lg:block absolute"
              style={{
                top: '52px',
                left: '100px',
                right: '100px',
                height: '2px',
                backgroundColor: '#E8E4DC',
                zIndex: 0,
              }}
            >
              {/* Timeline dots at each step position */}
              <div style={{ position: 'absolute', left: '0%', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#493A77' }} />
              <div style={{ position: 'absolute', left: '33.33%', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#493A77' }} />
              <div style={{ position: 'absolute', left: '66.66%', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#493A77' }} />
              <div style={{ position: 'absolute', right: '0%', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#493A77' }} />
            </div>

            {/* Cards Grid */}
            <div
              style={{
                display: 'grid',
                gap: '24px',
                position: 'relative',
                zIndex: 1,
                justifyContent: 'center',
              }}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  {/* Card */}
                  <div
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '20px',
                      padding: '32px 24px',
                      boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                      border: '1px solid #E8E4DC',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flex: 1,
                      minHeight: '240px',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="hover:shadow-xl hover:-translate-y-2"
                  >
                    {/* Icon container with number - Centered */}
                    <div style={{ position: 'relative', marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                      {/* Icon box */}
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '16px',
                          backgroundColor: '#FAFAFA',
                          border: '1px solid #E8E4DC',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#493A77',
                        }}
                      >
                        {step.icon}
                      </div>

                      {/* Number badge - Consistent position */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: '#493A77',
                          color: 'white',
                          fontSize: '13px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 2px 8px rgba(73, 58, 119, 0.3)',
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content - Vertically aligned */}
                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#1A1625',
                        marginBottom: '12px',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#4A4458',
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Vertical connector - Mobile only */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center" style={{ paddingTop: '20px', paddingBottom: '8px' }}>
                      <div
                        style={{
                          width: '2px',
                          height: '24px',
                          backgroundColor: '#E8E4DC',
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div style={{ height: '70px' }} />

          {/* App store badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <p style={{ fontSize: '15px', color: '#4A4458' }}>
              Available on iOS and Android
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* App Store Badge */}
              <a href="https://tally.so/r/LZPJjz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/badges/app-store.svg"
                  alt="Download on the App Store"
                  width={150}
                  height={45}
                  className="w-[150px] sm:w-[135px] h-auto sm:h-[45px] object-contain"
                />
              </a>

              {/* Google Play Badge */}
              <a href="https://tally.so/r/LZPJjz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/badges/google-play.svg"
                  alt="Get it on Google Play"
                  width={150}
                  height={45}
                  className="w-[150px] sm:w-[152px] h-auto sm:h-[45px] object-contain"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: '80px' }} />
    </section>
  );
}
