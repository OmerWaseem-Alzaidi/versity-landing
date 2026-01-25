'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-[#FDFBF7]">
      {/* Top spacer */}
      <div style={{ height: '80px' }} />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#493A77]/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#493A77]/[0.02] blur-3xl" />
      </div>

      <div className="py-20 md:py-28 lg:py-32">
        <div className="editorial-container relative z-10">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            style={{
              backgroundColor: '#493A77',
              borderRadius: '32px',
              padding: '80px 40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Card background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Large gradient circles */}
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-white/[0.05] blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-white/[0.03] blur-2xl" />

              {/* Decorative dots */}
              <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute top-40 right-32 w-3 h-3 rounded-full bg-white/10" />
              <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-white/15" />
              <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-white/20" />
            </div>

            {/* Content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 10,
              }}
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '32px',
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </motion.div>

              {/* Heading */}
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-white leading-[1.1]"
                style={{ marginBottom: '20px' }}
              >
                Ready to Join Your
                <br />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Campus Community?</span>
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.7,
                  maxWidth: '480px',
                  marginBottom: '40px',
                }}
              >
                Download Versity and connect with verified students today. It&apos;s free, fast, and secure.
              </p>

              {/* App Store Badges */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                style={{ marginBottom: '40px' }}
              >
                <a href="https://tally.so/r/LZPJjz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
                  <Image
                    src="/badges/app-store.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="w-[150px] sm:w-[120px] h-auto sm:h-[40px] object-contain"
                  />
                </a>

                <a href="https://tally.so/r/LZPJjz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
                  <Image
                    src="/badges/google-play.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="w-[150px] sm:w-[135px] h-auto sm:h-[40px] object-contain"
                  />
                </a>
              </div>

              {/* Trust indicators */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Free forever</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>No credit card</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg className="w-5 h-5 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Verified students only</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: '80px' }} />
    </section>
  );
}
