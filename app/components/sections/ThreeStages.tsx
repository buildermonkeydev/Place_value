import React from 'react';
import Container from '../ui/Container';

const ThreeStages: React.FC = () => {
  return (
    <section className="section-padding bg-[#091319] relative overflow-hidden">
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
          {/* Section header - The PlaceValue Method small and blue */}
          <div className="mb-4 text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
              THE PLACEVALUE METHOD
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">
            Three stages. <span className="text-[#FF6B35] italic">One transformation.</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto text-center leading-relaxed">
            Most programs teach you what to know. We take you through what it feels like to use that knowledge in the real world — under real conditions, with real outputs that prove what you can do.
          </p>
          
          {/* Three cards in flex row */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Stage 01 */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              {/* Background number */}
              <div className="text-8xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[#35bfff]/10 transition-colors duration-300">
                01
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                  <span className="text-3xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">◈</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Stage indicator */}
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
                    STAGE 01
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#35bfff] transition-colors duration-300">
                  Foundation
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  Close the clarity gap. We ensure every student has a razor-sharp understanding of the core principles and how they actually function inside industry — not just in textbooks.
                </p>
              </div>
              
              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
            </div>
            
            {/* Card 2 - Stage 02 */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              {/* Background number */}
              <div className="text-8xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[#35bfff]/10 transition-colors duration-300">
                02
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                  <span className="text-3xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">⬡</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Stage indicator */}
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
                    STAGE 02
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#35bfff] transition-colors duration-300">
                  Application
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  Theory meets reality. Students work on real systems and tackle real problems — with guidance, accountability, and the productive pressure of doing work that actually matters.
                </p>
              </div>
              
              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
            </div>
            
            {/* Card 3 - Stage 03 */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              {/* Background number */}
              <div className="text-8xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-[#35bfff]/10 transition-colors duration-300">
                03
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                  <span className="text-3xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">✦</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Stage indicator */}
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
                    STAGE 03
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#35bfff] transition-colors duration-300">
                  Capability
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  From student to professional. By this stage, execution has become instinct. Students emerge with the confidence, competence, and proof of work that the industry has always been looking for.
                </p>
              </div>
              
              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
          
          {/* Decorative bottom line */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#35bfff]/30 to-transparent"></div>
        </div>
      </Container>
    </section>
  );
};

export default ThreeStages;