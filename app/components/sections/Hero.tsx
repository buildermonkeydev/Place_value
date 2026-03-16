import React from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Marquee from '../ui/Marquee';

const Hero: React.FC = () => {
  const marqueeItems = [
    "EMBEDDED SYSTEMS",
    "IOT ENGINEERING",
    "ORACLE FUSION",
    "EXECUTION-FIRST LEARNING",
    "INSTITUTIONAL PARTNERSHIPS",
    "INDUSTRY ALIGNMENT"
  ];

  return (
    <section className="relative bg-[#0A1A2F] text-white overflow-hidden">
      {/* Background pattern/grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(53, 191, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(53, 191, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      <Container className="relative z-10 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main hero content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your degree opened the door.
              <br />
            <span className="bg-gradient-to-r from-[#35bfff] via-[#4da8ff] to-[#FF6B35] bg-clip-text text-transparent italic font-serif font-black tracking-tight drop-shadow-lg"
      style={{ fontFamily: 'var(--font-playfair), Georgia, Times New Roman, serif' }}>
  We get you through it.
</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed relative">
  {/* Decorative opening quote */}
  <span className="absolute -top-4 -left-8 text-6xl text-[#35bfff]/20 font-serif">"</span>
  
  <span className="relative z-10 block">
    Every year, thousands of graduates enter the job market armed with knowledge — and stopped at the gate by a single question:{" "}
    <span className="relative inline-block">
      <span className="text-white font-semibold italic bg-gradient-to-r from-[#35bfff]/20 to-[#FF6B35]/20 px-2 py-1 rounded-lg">
        "Can you actually do the work?"
      </span>
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] rounded-full"></span>
    </span>
  </span>
  
  {/* Decorative closing quote */}
  <span className="absolute -bottom-8 -right-8 text-6xl text-[#FF6B35]/20 font-serif rotate-180">"</span>
</p>
            
            <p className="text-xl md:text-2xl text-[#35bfff] mb-10 font-medium">
              PlaceValue answers that question — before you're ever asked.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
  variant="primary" 
  size="lg" 
  href="#programs"
  className="bg-gradient-to-r from-[#35bfff] to-[#FF6B35] hover:from-[#2aa5dd] hover:to-[#e05a2e] text-white px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
>
  Explore Programs
</Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="#partner"
                className="border-2 border-[#35bfff] text-[#35bfff] hover:bg-[#35bfff] hover:text-white px-8 py-3 text-lg font-semibold rounded-md transition-colors"
              >
                Partner With Us
              </Button>
            </div>
          </div>

          {/* Three cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* FOR STUDENTS */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-[#35bfff] transition-all duration-300 group">
              <h3 className="text-[#35bfff] text-sm font-bold mb-3 tracking-wider">FOR STUDENTS</h3>
              <h4 className="text-white text-xl font-bold mb-2">Stop preparing. Start executing.</h4>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Real capability that shows up in real work — not just interviews
              </p>
            </div>

            {/* FOR INSTITUTIONS */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-[#35bfff] transition-all duration-300 group">
              <h3 className="text-[#35bfff] text-sm font-bold mb-3 tracking-wider">FOR INSTITUTIONS</h3>
              <h4 className="text-white text-xl font-bold mb-2">Your outcomes. Our systems.</h4>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                We deliver the execution layer your curriculum was always missing
              </p>
            </div>

            {/* FOR INDUSTRY */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-[#35bfff] transition-all duration-300 group">
              <h3 className="text-[#35bfff] text-sm font-bold mb-3 tracking-wider">FOR INDUSTRY</h3>
              <h4 className="text-white text-xl font-bold mb-2">Hire people who hit the ground running.</h4>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Graduates who've already done the work — before day one
              </p>
            </div>
          </div>

          {/* Marquee Slider */}
          <div className="relative pt-8 border-t border-gray-800">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0A1A2F] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0A1A2F] to-transparent z-10"></div>
            <Marquee items={marqueeItems} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;