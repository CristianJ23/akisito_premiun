"use client";
import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Cómo funciona", href: "/#como-funciona" },
    { name: "Locales", href: "/locales" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Afíliate", href: "/#afiliate" },
  ];

  const buttonBase = "inline-flex items-center justify-center text-[12px] font-inter font-semibold uppercase tracking-wider h-10 px-6 transition-all";

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-gold/15">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img src="/images/akisito_dorado.png" alt="Akisito" className="h-8 md:h-40 w-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                className="text-brand-medium-gray text-[13px] font-inter hover:text-brand-gold transition-colors no-underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Link 
            href="#descarga"
            className={`${buttonBase} border border-brand-gold text-brand-gold hover:bg-brand-gold/10 no-underline`}
          >
            Descarga la app
          </Link>
          <Link 
            href="#afiliate"
            className={`${buttonBase} bg-brand-green text-brand-off-white hover:bg-brand-green/90 no-underline`}
          >
            Afíliate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-black border-b border-brand-gold/15 p-6 absolute w-full left-0 top-20 shadow-2xl">
          <ul className="flex flex-col gap-6 mb-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-off-white text-lg font-inter no-underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Link 
              href="#descarga"
              className={`${buttonBase} border border-brand-gold text-brand-gold w-full no-underline`}
            >
              Descarga la app
            </Link>
            <Link 
              href="#afiliate"
              className={`${buttonBase} bg-brand-green text-brand-off-white w-full no-underline`}
            >
              Afíliate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
