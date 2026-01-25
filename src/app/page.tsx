import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero/Hero';
import SocialProof from '@/components/SocialProof';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Trust from '@/components/Trust';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navigation />
      <Hero />
      <SocialProof />
      <Problem />
      <Features />
      <HowItWorks />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
