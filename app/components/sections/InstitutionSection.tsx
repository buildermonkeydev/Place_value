import React from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const InstitutionSection: React.FC = () => {
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
          {/* Two column layout - Left column with cards, Right column with content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Four vertical boxes with icons */}
            <div className="space-y-6">
              {/* Box 1 - with ◎ icon */}
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                    <span className="text-xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">◎</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">
                      Seamless academic integration
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Programs designed to complement your curriculum, not compete with it.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Box 2 - with ⬡ icon */}
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                    <span className="text-xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">⬡</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">
                      Measurable student outcomes
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Track capability growth with data your institution can stand behind.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Box 3 - with ◈ icon */}
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                    <span className="text-xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">◈</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">
                      Institutional reputation uplift
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Graduates who perform become your most powerful marketing asset.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Box 4 - with ⊕ icon */}
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                    <span className="text-xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">⊕</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">
                      A partner, not a vendor
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We're invested in your outcomes — because they are our outcomes too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Text content */}
            <div>
              {/* Section header - FOR INSTITUTIONS small and blue */}
              <div className="mb-4">
                <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
                  FOR INSTITUTIONS
                </span>
              </div>
              
              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Your reputation is built
                <br />
                by what your <span className="text-[#FF6B35] italic">graduates do.</span>
              </h2>
              
              {/* Description text */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Not by what they were taught. PlaceValue partners with colleges to deliver structured, execution-focused programs that sit seamlessly within your academic calendar — and dramatically improve the professional readiness of every student who goes through them. When your graduates thrive, your institution's credibility grows. We make that happen.
              </p>
              
              {/* Gradient Button */}
              <Button 
                variant="primary" 
                size="lg" 
                href="#partner" 
                className="bg-gradient-to-r from-[#35bfff] to-[#FF6B35] hover:from-[#2aa5dd] hover:to-[#e05a2e] text-white px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Partner With PlaceValue →
              </Button>
            </div>
          </div>
          
          {/* Decorative bottom line */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#35bfff]/30 to-transparent"></div>
        </div>
      </Container>
    </section>
  );
};

export default InstitutionSection;