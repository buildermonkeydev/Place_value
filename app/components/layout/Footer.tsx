"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[black] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(53, 191, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(53, 191, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <Container className="relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1 - Logo and tagline */}
          <div className="md:col-span-2">
            {/* ✅ LOGO REPLACED HERE */}
            <div className="flex items-center mb-4">
              <Image
                src="/placevaluelogo.png"
                alt="PlaceValue Logo"
                width={140}
                height={50}
                className="object-contain h-25      w-auto"
              />
            </div>

            {/* Taglines */}
            <div className="space-y-2 mb-6">
              <p className="text-gray-300 text-sm">
                Building capability.
              </p>
              <p className="text-gray-300 text-sm">
                Strengthening institutions.
              </p>
              <p className="text-gray-300 text-sm">
                Enabling futures.
              </p>
            </div>

            {/* Small text */}
            <p className="text-xs text-gray-500 max-w-xs">
              Where academic potential meets real-world capability.
            </p>
          </div>

          {/* Column 2 - Programs */}
          <div>
            <h4 className="font-bold text-sm text-[#35bfff] mb-4 tracking-wider uppercase">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Embedded Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  IoT Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Oracle Fusion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  All Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Institutions */}
          <div>
            <h4 className="font-bold text-sm text-[#35bfff] mb-4 tracking-wider uppercase">
              Institutions
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Partnership Model
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Integration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Outcomes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h4 className="font-bold text-sm text-[#35bfff] mb-4 tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#35bfff] transition text-sm"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 order-2 md:order-1 mt-4 md:mt-0">
            © 2025 PlaceValue. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs md:text-sm order-1 md:order-2">
            Where academic potential meets real-world capability.
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#35bfff]/30 to-transparent"></div>
      </Container>
    </footer>
  );
};

export default Footer;