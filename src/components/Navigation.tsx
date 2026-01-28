'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#FDFBF7] backdrop-blur-md border-b border-[#E8E4DC]'
            : 'bg-transparent'
        }`}
      >
        <div className="editorial-container">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/logos/logo_purple_only.svg"
                alt="Versity"
                width={56}
                height={56}
                className="h-9 md:h-11 w-auto"
                priority
              />
              <span
                className="text-xl md:text-2xl font-[family-name:var(--font-display)] text-[#1A1625]"
                style={{ fontWeight: 600 }}
              >
                Versity
              </span>
            </a>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-sm font-medium text-[#4A4458] hover:text-[#493A77] transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-[#4A4458] hover:text-[#493A77] transition-colors duration-300"
              >
                How it Works
              </a>
              <a
                href="https://tally.so/r/LZPJjz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 24px',
                  backgroundColor: '#493A77',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '50px',
                  border: 'none',
                  outline: 'none',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(73, 58, 119, 0.25)',
                }}
                className="hover:bg-[#3D2F63] transition-all duration-300"
              >
                Download App
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-[#1A1625] origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-[#1A1625]"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-[#1A1625] origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FDFBF7] md:hidden"
            style={{ paddingTop: '100px' }}
          >
            <div className="editorial-container flex flex-col gap-6" style={{ paddingTop: '20px' }}>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-[family-name:var(--font-display)] text-[#1A1625]"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-[family-name:var(--font-display)] text-[#1A1625]"
              >
                How it Works
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-[family-name:var(--font-display)] text-[#1A1625]"
              >
                FAQ
              </a>
              <div className="pt-8">
                <a
                  href="https://tally.so/r/LZPJjz"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '16px 32px',
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
                  className="hover:bg-[#3D2F63] transition-colors duration-300"
                >
                  Download App
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
