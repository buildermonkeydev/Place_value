import React from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const StudentSection: React.FC = () => {
  return (
    <section className="section-padding bg-[black] relative overflow-hidden">
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
          {/* Two column layout - Left content and Right vertical boxes */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text content */}
            <div>
              {/* Section header - FOR STUDENTS small and blue */}
              <div className="mb-4">
                <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
                  FOR STUDENTS
                </span>
              </div>
              
              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Stop preparing for work.
                <br />
                <span className="text-[#FF6B35] italic">Start doing it.</span>
              </h2>
              
              {/* Description text */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                The interview isn't the hardest part. The first 90 days on the job are. PlaceValue prepares you for both — by putting you through the real thing before you ever walk through a company's doors. You'll work on actual systems, solve actual problems, and emerge with the kind of confidence that only comes from having already done it.
              </p>
              
              {/* Gradient Button */}
              <Button 
                variant="primary" 
                size="lg" 
                href="#journey" 
                className="bg-gradient-to-r from-[#35bfff] to-[#FF6B35] hover:from-[#2aa5dd] hover:to-[#e05a2e] text-white px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey →
              </Button>
            </div>
            
            {/* Right Column - Four vertical boxes with icons */}
            <div className="space-y-6">
              {/* Box 1 */}
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                    <span className="text-xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">◈</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">
                      Real systems, not simulations
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Work on live projects that mirror what industry actually runs
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Box 2 */}
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                    <span className="text-xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">⊕</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">
                      Industry operating models
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Understand how organisations think, decide, and execute
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Box 3 */}
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                    <span className="text-xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">✦</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">
                      Execution under pressure
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Build the resilience and speed that separates professionals from students
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Box 4 */}
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                    <span className="text-xl text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">⬪</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">
                      Prepared for beyond the interview
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Not just hired — effective, impactful, and irreplaceable from day one
                    </p>
                  </div>
                </div>
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

export default StudentSection;