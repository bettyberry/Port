'use client';

import HeroSection from '@/components/‎HeroSection‎';
import { AboutSection } from '@/components/about-section';
import {Portfolio} from '@/components/portfolio';
import { MyServices } from '@/components/services';
import {ContactSection} from '@/components/contact';
export default function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Portfolio />
      <MyServices />
      <ContactSection />
    </div>

    
    
  );
}