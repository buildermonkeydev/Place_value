import React from 'react';
import Container from '../ui/Container';

const PartnershipModel: React.FC = () => {
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
          {/* Section header - PARTNERSHIP MODEL small and blue */}
          <div className="mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
              PARTNERSHIP MODEL
            </span>
          </div>
          
          {/* Two column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main content */}
            <div>
              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                We don't replace your system.
                <br />
                <span className="text-[#FF6B35] italic">We complete it.</span>
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                PlaceValue is built to integrate – not disrupt. We work inside your academic calendar, alongside your faculty, and in service of your students. The result is a more capable graduate, a stronger placement record, and an institution that the industry trusts.
              </p>
              
              {/* Four vertical boxes with icons */}
              <div className="space-y-4">
                {/* Box 1 */}
                <div className="group bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                      <span className="text-sm text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">◈</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#35bfff] mb-1 group-hover:text-[#FF6B35] transition-colors duration-300">
                        Designed around your academic calendar
                      </h4>
                      <p className="text-sm text-gray-400">
                        No disruption to existing schedules or faculty workflows
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Box 2 */}
                <div className="group bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                      <span className="text-sm text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">⬡</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#35bfff] mb-1 group-hover:text-[#FF6B35] transition-colors duration-300">
                        Structured for measurable outcomes
                      </h4>
                      <p className="text-sm text-gray-400">
                        Clear milestones, assessments, and capability benchmarks throughout
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Box 3 */}
                <div className="group bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                      <span className="text-sm text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">✦</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#35bfff] mb-1 group-hover:text-[#FF6B35] transition-colors duration-300">
                        Your students carry your name forward
                      </h4>
                      <p className="text-sm text-gray-400">
                        Every capable graduate is a statement about your institution's quality
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Box 4 */}
                <div className="group bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:border-[#35bfff] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-[#35bfff]/30 group-hover:to-[#FF6B35]/30 transition-all duration-300">
                      <span className="text-sm text-[#35bfff] group-hover:text-[#FF6B35] transition-colors duration-300">◎</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#35bfff] mb-1 group-hover:text-[#FF6B35] transition-colors duration-300">
                        Long-term partnership, not a one-time program
                      </h4>
                      <p className="text-sm text-gray-400">
                        We grow with you — refining, improving, and staying aligned with industry as it evolves
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Quote box */}
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 rounded-full blur-2xl"></div>
              
              {/* Quote box */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                {/* Decorative quotation marks */}
                <div className="absolute -top-3 left-6 text-6xl text-[#35bfff]/30 font-serif">"</div>
                
                {/* Quote text - different font */}
                <p className="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed font-serif relative z-10 pl-4">
                  The question was never whether our students were smart enough. It was whether they had been given the chance to prove it.
                </p>
                
                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] rounded-full mb-6"></div>
                
                {/* The PlaceValue Belief - different font */}
                <div>
                  <h4 className="text-lg font-bold text-[#FF6B35] mb-3 tracking-wide">
                    The PlaceValue Belief
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    Academic potential is everywhere. What's rare is the system that converts it — deliberately, consistently, and at scale. That system is what we're building. Institution by institution. Student by student.
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 text-4xl text-[#FF6B35]/20 font-serif">"</div>
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

export default PartnershipModel;