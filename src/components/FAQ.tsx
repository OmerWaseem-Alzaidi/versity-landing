'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'Who can use Versity?',
    answer: 'Versity is exclusively for university students. You need a valid .edu email address to verify your student status and create an account.',
  },
  {
    question: 'How does verification work?',
    answer: "Simply sign up with your university email address. We'll send a verification link to confirm you're a real student. The process takes less than a minute, and you'll have full access immediately after verification.",
  },
  {
    question: 'Is Versity free?',
    answer: 'Yes! Versity is completely free for all verified students. There are no hidden fees, premium features, or subscription costs. We believe every student should have access to their campus community.',
  },
  {
    question: 'How do I contact other students?',
    answer: 'Versity integrates seamlessly with WhatsApp for safe, direct communication. You can join group chats for events or message students directly about housing and marketplace listings.',
  },
  {
    question: 'Which universities are supported?',
    answer: 'We support universities worldwide. If your university provides you with a .edu email address, you can join Versity and connect with verified students from your campus.',
  },
  {
    question: 'Is my data safe with Versity?',
    answer: 'Absolutely. We take data privacy seriously. Your information is encrypted and never shared with third parties. We only collect what is necessary to verify your student status and provide our services.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#F7F4ED]">
      {/* Top spacer */}
      <div style={{ height: '60px' }} />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-[#493A77]/[0.02] blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#FBBF24]/[0.03] blur-3xl" />
      </div>

      <div className="py-20 md:py-28 lg:py-32">
        <div className="editorial-container relative z-10">
          {/* Centered Header */}
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
                FAQ
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#493A77' }} />
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-[#1A1625] leading-[1.1]" style={{ marginBottom: '24px' }}>
              Frequently Asked <span className="text-[#493A77]">Questions</span>
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '16px',
              color: '#4A4458',
              lineHeight: 1.7,
              maxWidth: '500px',
              textAlign: 'center',
            }}>
              Everything you need to know about Versity. Can&apos;t find the answer? Reach out to our team.
            </p>
          </motion.div>

          {/* Spacer */}
          <div style={{ height: '60px' }} />

          {/* FAQ Accordion */}
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{ marginBottom: '16px' }}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    border: openIndex === index ? '1px solid #493A77' : '1px solid #E8E4DC',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: openIndex === index ? '0 4px 20px rgba(73, 58, 119, 0.1)' : '0 2px 8px rgba(0,0,0,0.03)',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '24px 28px',
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                    }}
                    className="hover:bg-[#F7F4ED]/50 transition-colors duration-300"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      {/* Question number */}
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: openIndex === index ? '#493A77' : '#9CA3AF',
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Question text */}
                      <span
                        style={{
                          fontSize: '17px',
                          fontWeight: 600,
                          color: '#1A1625',
                          paddingRight: '16px',
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle icon */}
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: openIndex === index ? '#493A77' : 'rgba(73, 58, 119, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={openIndex === index ? 'white' : '#493A77'}
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: '0 28px 24px 28px',
                            marginLeft: '46px',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '15px',
                              color: '#4A4458',
                              lineHeight: 1.8,
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Spacer */}
          <div style={{ height: '60px' }} />

          {/* Contact support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                padding: '32px 48px',
                backgroundColor: 'white',
                borderRadius: '20px',
                border: '1px solid #E8E4DC',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(73, 58, 119, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#493A77',
                }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>

              <div>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#1A1625', marginBottom: '4px' }}>
                  Still have questions?
                </p>
                <p style={{ fontSize: '14px', color: '#4A4458' }}>
                  Our team is here to help
                </p>
              </div>

              <a
                href="mailto:support@versityapp.com"
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
                  transition: 'all 0.3s ease',
                }}
                className="hover:bg-[#3D2F63] hover:shadow-lg"
              >
                Contact Support
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
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
