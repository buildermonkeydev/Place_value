"use client"

import React from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CTASection: React.FC = () => {
  return (
    <section className="relative section-padding bg-[#091319] overflow-hidden min-h-[800px] flex items-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(53, 191, 255, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(53, 191, 255, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* MAIN PV Watermark - MASSIVE - positioned from bottom to 80% */}
      <div className="absolute right-0 bottom-[5%] md:bottom-[0%] opacity-15 pointer-events-none select-none">
        <div className="relative">
          <span className="text-[40vw] md:text-[38rem] lg:text-[44rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#55bfff]/20 to-[#FF6B56]/20 leading-[0.8] block transform translate-x-[20%]">
            PV
          </span>
         
        </div>
      </div>
      
      
      
      <Container className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cohort badge - small and blue */}
          <div className="mb-8 animate-fade-in">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#35bfff] border border-[#35bfff]/30 px-6 py-3 rounded-full inline-block bg-[#35bfff]/5 backdrop-blur-sm hover:bg-[#35bfff]/10 transition-all duration-300">
              PLACEVALUE — COHORT 01 OPEN
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white animate-slide-up relative">
            The gap is real.
            <br />
            <span className="bg-gradient-to-r from-[#35bfff] to-[#FF6B35] bg-clip-text text-transparent italic">
              So is the bridge.
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Whether you're a student who's done waiting to be ready, or an institution that's done watching great students fall short — PlaceValue is where that changes. The first cohort is forming now. This is your window.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <Button 
              variant="primary" 
              size="lg" 
              href="#programs" 
              className="bg-gradient-to-r from-[#35bfff] to-[#FF6B35] hover:from-[#2aa5dd] hover:to-[#e05a2e] text-white px-8 py-4 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Programs
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="#partner" 
              className="border-2 border-[#35bfff] text-[#35bfff] hover:bg-[#35bfff] hover:text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#35bfff]/50 to-transparent"></div>
      
      {/* Add animation delays */}
      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </section>
  );
};

export default CTASection;