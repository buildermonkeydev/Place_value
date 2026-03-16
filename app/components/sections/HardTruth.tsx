import React from 'react';
import Container from '../ui/Container';

const HardTruth: React.FC = () => {
  return (
    <section className="section-padding bg-[#0A1A2F] relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(53, 191, 255, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(53, 191, 255, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
      
      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header with very small text */}
          <div className="mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
              THE HARD TRUTH
            </span>
          </div>
          
          {/* Main content with two columns */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left column - Main statement */}
            <div>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                A degree proves<br />
                you can <span className="italic text-[#FF6B35] font-bold">learn.</span><br />
                It doesn't prove<br />
                you can <span className="italic text-[#FF6B35] font-bold">work.</span>
              </p>
              
              {/* Optional subtle accent line */}
              <div className="mt-8 w-20 h-1 bg-gradient-to-r from-[#FF6B35] to-[#35bfff] rounded-full"></div>
            </div>
            
            {/* Right column - Three vertical cards with hover animations */}
            <div className="space-y-6">
              {/* Card 1 - WHAT STUDENTS FACE */}
              <div className="group relative bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[bff#FF6B35]/0 to-[#35bfff]/0 group-hover:from-[#FF6B35]/20 group-hover:to-[#35bfff]/20 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center">
                    <span className="w-1 h-5 bg-[#FF6B35] rounded-full mr-3"></span>
                    WHAT STUDENTS FACE
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Four years of rigorous study. A degree with your name on it. And then an interview room where the first question isn't about your GPA — it's about whether you can solve a real problem, right now, under pressure. Most graduates aren't ready for that moment. Not because they aren't smart. Because nobody taught them how.
                  </p>
                </div>
              </div>
              
              {/* Card 2 - WHAT INSTITUTIONS FACE */}
              <div className="group relative bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#35bfff]/0 to-[#FF6B35]/0 group-hover:from-[#35bfff]/20 group-hover:to-[#FF6B35]/20 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center">
                    <span className="w-1 h-5 bg-[#35bfff] rounded-full mr-3"></span>
                    WHAT INSTITUTIONS FACE
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You've built strong academic programs. Your faculty are experienced. Your curriculum is current. But the gap between academic knowledge and industrial execution is widening — and your placement numbers are the ones that pay the price. Institutions need an execution partner, not just another training vendor.
                  </p>
                </div>
              </div>
              
              {/* Card 3 - WHERE PLACEVALUE LIVES */}
              <div className="group relative bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/0 to-[#35bfff]/0 group-hover:from-[#FF6B35]/20 group-hover:to-[#35bfff]/20 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white mb-3 flex items-center">
                    <span className="w-1 h-5 bg-[#FF6B35] rounded-full mr-3"></span>
                    WHERE PLACEVALUE LIVES
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Right here — in the space between what education gives and what industry demands. We exist because this gap is real, it's costing opportunities, and it's time to close it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative element - subtle gradient line */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#35bfff]/30 to-transparent"></div>
        </div>
      </Container>
    </section>
  );
};

export default HardTruth;