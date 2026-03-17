"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { useActiveSection } from "../../hooks/useActiveSection";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "programs", label: "Programs" },
    { href: "institutions", label: "Institutions" },
    { href: "modules", label: "Modules" },
    { href: "contact", label: "Contact" },
  ];

  const sections = navItems.map((item) => item.href);
  const activeSection = useActiveSection(sections);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.getElementById(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleButtonScroll = (
    e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`bg-black text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-gray-800 shadow-lg" : ""
      }`}
    >
      <Container
        className={`transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <nav className="flex items-center justify-between">
          {/* ✅ LOGO ADDED HERE */}
          <Link
            href="/"
            className="flex items-center group"
            onClick={handleLogoClick}
          >
            <Image
              src="/placevaluelogo.png"
              alt="PlaceValue Logo"
              width={180}
              height={140}
              className="object-contain h-25 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) =>
                  handleSmoothScroll(e, item.href)
                }
                className={`transition-colors duration-300 text-sm font-medium relative group ${
                  activeSection === item.href
                    ? "text-[#35bfff]"
                    : "text-white hover:text-[#35bfff]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#35bfff] to-[#FF6B35] transition-all duration-300 ${
                    activeSection === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              href="#partner"
              onClick={(e: any) =>
                handleButtonScroll(e, "partner")
              }
            >
              Partner with Us
            </Button>
            <Button
              variant="primary"
              size="sm"
              href="#explore"
              onClick={(e: any) =>
                handleButtonScroll(e, "explore")
              }
            >
              Explore Programs
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white hover:text-[#35bfff]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-800 mt-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`block py-2 text-sm font-medium border-l-2 pl-2 ${
                  activeSection === item.href
                    ? "text-[#35bfff] border-[#35bfff]"
                    : "text-white hover:text-[#35bfff]"
                }`}
                onClick={(e) =>
                  handleSmoothScroll(e, item.href)
                }
              >
                {item.label}
              </a>
            ))}

            <div className="space-y-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                href="#partner"
                onClick={(e: any) =>
                  handleButtonScroll(e, "partner")
                }
              >
                Partner with Us
              </Button>

              <Button
                variant="primary"
                size="sm"
                className="w-full"
                href="#explore"
                onClick={(e: any) =>
                  handleButtonScroll(e, "explore")
                }
              >
                Explore Programs
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;