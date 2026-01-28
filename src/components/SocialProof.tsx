'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const universities = [
  { name: 'Koç University', logo: '/universities/Koc_University.svg' },
  { name: 'Sabancı University', logo: '/universities/Sabancı_University.svg' },
  { name: 'Bahçeşehir University', logo: '/universities/Bahçeşehir_University.svg' },
  { name: 'Bilgi University', logo: '/universities/İstanbul_Bilgi_Üniversitesi.svg' },
  { name: 'Özyeğin University', logo: '/universities/Ozyegin_University.svg' },
  { name: 'Altinbas University', logo: '/universities/Altinbas_University.svg' },
  { name: 'Haliç University', logo: '/universities/Haliç_University.svg' },
  { name: 'Medipol University', logo: '/universities/Istanbul_Medipol_University.svg' },
  { name: 'Atlas University', logo: '/universities/Atlas_University.svg' },
  { name: 'İstinye University', logo: '/universities/İstinye_Üniversitesi.svg' },
];

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center shrink-0" style={{ marginLeft: '40px', marginRight: '40px' }}>
      <div className="w-28 h-12 md:w-36 md:h-14 relative flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 112px, 144px"
        />
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-[#FDFBF7] overflow-hidden">
      {/* Top margin - space from hero */}
      <div className="h-12 md:h-16 lg:h-20" />

      {/* Headline */}
      <div className="w-full px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#493A77]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#493A77]">
              Trusted Community
            </span>
            <div className="w-8 h-px bg-[#493A77]" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-[#1A1625]">
            Trusted by students from top universities
          </h2>
        </motion.div>
      </div>

      {/* Space between headline and logos */}
      <div className="h-14 md:h-20 lg:h-24" />

      {/* Infinite scroll container */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex overflow-hidden">
          {/* First set - animates */}
          <div className="flex shrink-0 animate-marquee">
            {universities.map((uni) => (
              <LogoCard key={uni.name} name={uni.name} logo={uni.logo} />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 animate-marquee">
            {universities.map((uni) => (
              <LogoCard key={`${uni.name}-2`} name={uni.name} logo={uni.logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom margin - space before problem section */}
      <div className="h-20 md:h-28 lg:h-36" />
    </section>
  );
}
