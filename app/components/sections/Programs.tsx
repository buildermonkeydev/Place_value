import React from 'react';
import Container from '../ui/Container';

const Programs: React.FC = () => {
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
          {/* Section header - PROGRAMS small and blue */}
          <div className="mb-4 text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
              PROGRAMS
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">
            Built for the industries <span className="text-[#FF6B35] italic">hiring right now.</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-4xl mx-auto text-center leading-relaxed">
            Each PlaceValue program is architected around what the industry actually needs — not what it needed five years ago. Every module is co-designed with domain practitioners and updated continuously.
          </p>
          
          {/* Three cards in grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Embedded Systems */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                  <span className="text-3xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">⚙</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#35bfff] transition-colors duration-300">
                  Embedded Systems
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  From microcontroller architecture to real-time operating systems — this program takes students from theory to fully functional hardware-software systems. Built for the engineers industry can trust with mission-critical work.
                </p>
                <div className="text-xs font-bold tracking-wider text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300 uppercase">
                  Hardware Engineering
                </div>
              </div>
              
              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
            </div>
            
            {/* Card 2 - IoT Engineering */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                  <span className="text-3xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">◈</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#35bfff] transition-colors duration-300">
                  IoT Engineering
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  End-to-end connected systems — from edge devices and protocols to cloud integration and data pipelines. Students build and deploy real IoT solutions that work in the physical world, not just presentations.
                </p>
                <div className="text-xs font-bold tracking-wider text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300 uppercase">
                  Connected Systems
                </div>
              </div>
              
              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
            </div>
            
            {/* Card 3 - Oracle Fusion */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                  <span className="text-3xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">⬡</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#35bfff] transition-colors duration-300">
                  Oracle Fusion
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  One of the most in-demand enterprise skill sets in India — and one of the most underprepared for. Our Oracle Fusion program covers Finance, Supply Chain, and HCM with hands-on configuration and real business process execution.
                </p>
                <div className="text-xs font-bold tracking-wider text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300 uppercase">
                  Enterprise Applications
                </div>
              </div>
              
              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
          
          {/* Quote section */}
          <div className="relative max-w-3xl mx-auto">
            {/* Decorative quotation marks */}
            <div className="absolute -top-6 left-0 text-6xl text-[#35bfff]/20 font-serif">"</div>
            <div className="absolute -bottom-12 right-0 text-6xl text-[#35bfff]/20 font-serif">"</div>
            
            {/* Quote content */}
            <div className="relative z-10 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed">
                "Each program ends with demonstrated work — not a participation certificate. Our students graduate with proof, not just credentials."
              </p>
              
              {/* Decorative line */}
              <div className="mt-6 w-20 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] rounded-full mx-auto"></div>
            </div>
          </div>
          
          {/* Decorative bottom line */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#35bfff]/30 to-transparent"></div>
        </div>
      </Container>
    </section>
  );
};

export default Programs;