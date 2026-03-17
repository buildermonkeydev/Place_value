import React from 'react';
import Container from '../ui/Container';

const Philosophy: React.FC = () => {
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
        <div className="max-w-5xl mx-auto">
          {/* Section header with small text */}
          <div className="mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#35bfff] uppercase">
              OUR PHILOSOPHY
            </span>
          </div>
          
          {/* Main statement */}
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            We don't teach. <span className="bg-gradient-to-r from-[#35bfff] via-[#FF6B35] to-[#35bfff] bg-clip-text text-transparent italic">We activate.</span>
          </p>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-16 max-w-3xl leading-relaxed">
            Knowledge doesn't need more delivery. It needs application. PlaceValue builds structured programs that force students to do the work – to build, fail, iterate, and deliver. That's the process that creates capability. And capability is the only thing the industry has ever truly hired for.
          </p>
          
          {/* Three horizontal boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              <div className="text-center relative">
                <div className="text-gray-400 text-lg font-medium mb-4 relative">
                  Passive learning
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#35bfff] transform -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                <div className="text-[#35bfff] text-4xl mb-4 animate-bounce">↓</div>
                <div className="text-white text-xl font-bold bg-gradient-to-r from-[#35bfff] to-[#FF6B35] bg-clip-text text-transparent">Active execution</div>
                
                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            
            {/* Box 2 */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              <div className="text-center relative">
                <div className="text-gray-400 text-lg font-medium mb-4 relative">
                  Understanding concepts
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#35bfff] transform -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                <div className="text-[#35bfff] text-4xl mb-4 animate-bounce">↓</div>
                <div className="text-white text-xl font-bold bg-gradient-to-r from-[#35bfff] to-[#FF6B35] bg-clip-text text-transparent">Demonstrable capability</div>
                
                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            
            {/* Box 3 */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#35bfff] transition-all duration-300 overflow-hidden">
              <div className="text-center relative">
                <div className="text-gray-400 text-lg font-medium mb-4 relative">
                  Graduating with a degree
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#35bfff] transform -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                <div className="text-[#35bfff] text-4xl mb-4 animate-bounce">↓</div>
                <div className="text-white text-xl font-bold bg-gradient-to-r from-[#35bfff] to-[#FF6B35] bg-clip-text text-transparent">Entering as a professional</div>
                
                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#35bfff]/30 to-transparent"></div>
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;