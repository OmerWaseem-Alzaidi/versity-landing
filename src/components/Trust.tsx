'use client';

import { motion, useSpring, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: '.edu Email Required',
    description: 'Only valid university email addresses can register. Your academic identity is verified.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Verified Students Only',
    description: 'Every user is a real, verified university student. No fake accounts or strangers.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'WhatsApp Integration',
    description: 'Safe, direct communication through WhatsApp. Connect with students securely.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'No In-App Payments',
    description: 'Meet and transact safely, outside the app. You control your transactions.',
  },
];

// Animated Counter Component
function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });

  const displayValue = useTransform(springValue, (latest) => {
    if (target >= 1000) {
      // Format as K+ (e.g., 10K+)
      const kValue = Math.round(latest / 1000);
      return `${prefix}${kValue}K${suffix}`;
    }
    return `${prefix}${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  return (
    <motion.span ref={ref}>
      {target === 0 ? '0' : <motion.span>{displayValue}</motion.span>}
    </motion.span>
  );
}

export default function Trust() {
  return (
    <section id="trust" className="relative overflow-hidden bg-[#FDFBF7]">
      {/* Top spacer */}
      <div style={{ height: '100px' }} />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-[#493A77]/[0.03] blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[#493A77]/[0.02] blur-3xl" />
      </div>

      <div className="py-20 md:py-28 lg:py-32">
        <div className="editorial-container relative z-10">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              {/* Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#493A77',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#493A77' }}>
                  Trust & Safety
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl lg:text-[56px] font-[family-name:var(--font-display)] text-[#1A1625] leading-[1.1]"
                style={{ marginBottom: '24px' }}
              >
                Your Safety is
                <br />
                <span className="text-[#493A77]">Our Priority</span>
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: '18px',
                  color: '#4A4458',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                  maxWidth: '480px',
                }}
              >
                We&apos;ve built Versity from the ground up with security in mind. Every feature is designed to protect students and create a trusted community.
              </p>

              {/* Stats Row */}
              <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                <div>
                  <div
                    style={{
                      fontSize: '40px',
                      fontWeight: 700,
                      color: '#493A77',
                      lineHeight: 1,
                      marginBottom: '8px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                  >
                    <AnimatedCounter target={100} suffix="%" duration={2} />
                  </div>
                  <div style={{ fontSize: '14px', color: '#6B7280' }}>Verified Students</div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '40px',
                      fontWeight: 700,
                      color: '#493A77',
                      lineHeight: 1,
                      marginBottom: '8px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                  >
                    <AnimatedCounter target={10000} suffix="+" duration={2} />
                  </div>
                  <div style={{ fontSize: '14px', color: '#6B7280' }}>Active Users</div>
                </div>
                              </div>
            </motion.div>

            {/* Right Column - Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {trustPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="group"
                  >
                    <div
                      style={{
                        padding: '28px',
                        borderRadius: '20px',
                        backgroundColor: 'white',
                        border: '1px solid #E8E4DC',
                        height: '100%',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                      className="hover:shadow-lg hover:-translate-y-1 hover:border-[#493A77]/20"
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          backgroundColor: '#F3F0FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#493A77',
                          marginBottom: '20px',
                        }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      >
                        {point.icon}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#1A1625',
                          marginBottom: '8px',
                        }}
                      >
                        {point.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#6B7280',
                          lineHeight: 1.6,
                        }}
                      >
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: '100px' }} />
    </section>
  );
}
