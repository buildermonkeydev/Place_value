import React from 'react';
import Container from '../ui/Container';

const WhyDifferent: React.FC = () => {
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
          {/* Section header - WHY PLACEVALUE IS DIFFERENT small and blue */}
          <div className="mb-4 text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
              WHY PLACEVALUE IS DIFFERENT
            </span>
          </div>
          
          {/* Main heading with gradient */}
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-white">
            The industry doesn't hire knowledge. It hires{' '}
            <span className="bg-gradient-to-r from-[#35bfff] to-[#FF6B35] bg-clip-text text-transparent italic">
              capability.
            </span>
          </p>
          
          {/* Three horizontal cards attached */}
          <div className="flex flex-col md:flex-row gap-0 md:divide-x divide-white/10 border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
            {/* Card 1 */}
            <div className="flex-1 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center">
                {/* Strikethrough text */}
                <div className="relative inline-block mb-4">
                  <span className="text-xl font-bold text-gray-400 relative">
                    Not another training institute
                    <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] transform -translate-y-1/2"></span>
                  </span>
                </div>
                
                {/* Orange text */}
                <div className="text-2xl md:text-3xl font-bold text-[#FF6B35] mb-4">
                  A capability partner
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  We don't measure success by enrolments or completions. We measure it by what our students can do when they walk out — and whether the industry agrees.
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="flex-1 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center">
                {/* Strikethrough text */}
                <div className="relative inline-block mb-4">
                  <span className="text-xl font-bold text-gray-400 relative">
                    Not certificate-first
                    <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] transform -translate-y-1/2"></span>
                  </span>
                </div>
                
                {/* Orange text */}
                <div className="text-2xl md:text-3xl font-bold text-[#FF6B35] mb-4">
                  Execution-first
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  Certificates are the outcome of demonstrating capability — not a substitute for it. Every PlaceValue program is built around outputs, not hours. Proof, not paper.
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="flex-1 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center">
                {/* Strikethrough text */}
                <div className="relative inline-block mb-4">
                  <span className="text-xl font-bold text-gray-400 relative">
                    Not just for students
                    <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] transform -translate-y-1/2"></span>
                  </span>
                </div>
                
                {/* Orange text */}
                <div className="text-2xl md:text-3xl font-bold text-[#FF6B35] mb-4">
                  An ecosystem play
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  PlaceValue creates value at every node. Students get careers. Institutions get reputation. Industry gets professionals. When all three win — that's a system that actually works.
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom line */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#35bfff]/30 to-transparent"></div>
        </div>
      </Container>
    </section>
  );
};

export default WhyDifferent;