'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const footerLinks = {
  product: [
    { label: 'Download', href: '#download' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: 'mailto:support@versityapp.com' },
  ],
};

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/versity.app/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/versityapp/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1625] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#493A77]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] rounded-full bg-[#493A77]/5 blur-3xl" />
      </div>

      <div className="editorial-container relative z-10">
        {/* Main footer content */}
        <div style={{ paddingTop: '80px', paddingBottom: '60px' }}>
          {/* Top section - Logo and Links */}
          <div
            style={{
              display: 'grid',
              gap: '60px',
            }}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Brand column */}
            <div className="lg:col-span-2">
              <motion.a
                href="/"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
              >
                <Image
                  src="/logos/logo_white_only.png"
                  alt="Versity"
                  width={56}
                  height={56}
                  className="h-11 w-auto"
                />
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Versity
                </span>
              </motion.a>

              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: '320px',
                  lineHeight: 1.8,
                  fontSize: '15px',
                  marginBottom: '32px',
                }}
              >
                Your all-in-one hub for student life. Events, housing, deals, and more.
              </p>

              {/* Social links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.6)',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:bg-[#493A77] hover:text-white"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Product column */}
            <div>
              <h4
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '24px',
                }}
              >
                Product
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '15px',
                        transition: 'color 0.3s ease',
                      }}
                      className="hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h4
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '24px',
                }}
              >
                Company
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '15px',
                        transition: 'color 0.3s ease',
                      }}
                      className="hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom bar - Professional startup style */}
        <div
          style={{
            paddingTop: '24px',
            paddingBottom: '24px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {/* Copyright - Left */}
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '0.01em',
            }}
          >
            © 2026 Versity. All rights reserved.
          </p>

          {/* Made with love - Right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            <span>Made with</span>
            <svg className="w-4 h-4 text-[#EF4444]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>for students</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
