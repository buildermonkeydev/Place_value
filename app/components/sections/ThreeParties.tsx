import React from 'react';
import Container from '../ui/Container';

const ThreeParties: React.FC = () => {
  return (
    <section className="section-padding bg-[#091319] relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(53, 191, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(53, 191, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
      
      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white text-center">
            Three parties. One broken system.
            <br />
            <span className="bg-gradient-to-r from-[#35bfff] via-[#FF6B35] to-[#35bfff] bg-clip-text text-transparent italic">
              One fix.
            </span>
          </h2>
          
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Students leave college underprepared. Institutions struggle to prove their worth. Industry keeps lowering the bar.
            PlaceValue closes the gap between all three — permanently.
            <br></br> <span className="text-[#35bfff] font-semibold">This is not training. This is transformation.</span>
          </p>
          
          {/* Three Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* STUDENTS CARD */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-lg overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#35bfff] via-[#FF6B35] to-[#35bfff]"></div>
                <div className="absolute inset-[2px] bg-[#0A1A2F] rounded-lg"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-[#35bfff]">STUDENTS</h3>
                <p className="text-white font-medium mb-3">You don't have a knowledge problem.</p>
                <p className="text-gray-400 leading-relaxed">
                  You have an execution gap. You know the theory — but the industry needs proof. PlaceValue turns what you've learned into what you can demonstrate today. That's what gets you hired.
                </p>
              </div>
            </div>
            
            {/* INSTITUTIONS CARD */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-lg overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#35bfff] via-[#FF6B35] to-[#35bfff]"></div>
                <div className="absolute inset-[2px] bg-[#0A1A2F] rounded-lg"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-[#35bfff]">INSTITUTIONS</h3>
                <p className="text-white font-medium mb-3">Great curriculum isn't enough anymore.</p>
                <p className="text-gray-400 leading-relaxed">
                  Your students are judged not by what they were taught — but by what they can do. PlaceValue plugs into your academic framework and delivers the execution layer that turns your institution into a great university.
                </p>
              </div>
            </div>
            
            {/* INDUSTRY CARD */}
            <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-lg overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#35bfff] via-[#FF6B35] to-[#35bfff]"></div>
                <div className="absolute inset-[2px] bg-[#0A1A2F] rounded-lg"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-[#35bfff]">INDUSTRY</h3>
                <p className="text-white font-medium mb-3">The talent you need already exists.</p>
                <p className="text-gray-400 leading-relaxed">
                  It just hasn't been activated yet. PlaceValue graduates have already applied their skills to real systems, worked under real constraints, and built real outputs. They're not learning on your dime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ThreeParties;