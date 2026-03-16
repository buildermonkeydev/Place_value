import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import HardTruth from './components/sections/HardTruth';
import Philosophy from './components/sections/Philosophy';
import StudentSection from './components/sections/StudentSection';
import InstitutionSection from './components/sections/InstitutionSection';
import ThreeStages from './components/sections/ThreeStages';
import Programs from './components/sections/Programs';
import WhyDifferent from './components/sections/WhyDifferent';
import PartnershipModel from './components/sections/PartnershipModel';
import ThreeParties from './components/sections/ThreeParties';
import CTASection from './components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
      
        <Hero />
        
        {/* Three Parties Section */}
        <section id="three-parties">
          <ThreeParties />
        </section>
        
        {/* Hard Truth Section */}
        <section id="hard-truth">
          <HardTruth />
        </section>
        
        {/* Philosophy Section */}
        <section id="philosophy">
          <Philosophy />
        </section>
        
        {/* Students Section */}
        <section id="students">
          <StudentSection />
        </section>
        
        {/* Institutions Section - matches nav item */}
        <section id="institutions">
          <InstitutionSection />
        </section>
        
        {/* Modules/Three Stages Section - matches nav item */}
        <section id="modules">
          <ThreeStages />
        </section>
        
        {/* Programs Section - matches nav item */}
        <section id="programs">
          <Programs />
        </section>
        
        {/* Why Different Section */}
        <section id="why-different">
          <WhyDifferent />
        </section>
        
        {/* Partnership Model Section */}
        <section id="partnership">
          <PartnershipModel />
        </section>
        
        {/* CTA/Contact Section - matches nav item */}
        <section id="contact">
          <CTASection />
        </section>
        
        {/* Hidden sections for button navigation */}
        <div id="partner" className="scroll-mt-20"></div>
        <div id="explore" className="scroll-mt-20"></div>
      </main>
      <Footer />
    </>
  );
}