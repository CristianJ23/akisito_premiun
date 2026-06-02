import React from "react";

export default function Allies() {
  const allies = [
    "Universidad Técnica particular de Loja",
    "Prendho",
  ];

  return (
    <section className="bg-brand-black py-24 border-t border-brand-gold/10">
      <div className="container mx-auto px-6 text-center">
        <span className="text-brand-gold font-inter text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">
          Respaldo
        </span>
        <h2 className="text-brand-off-white text-3xl lg:text-[42px] font-semibold mb-6">
          Construido desde y para Loja.
        </h2>
        <p className="text-brand-medium-gray text-lg max-w-2xl mx-auto mb-16">
          Akisito nace desde el corazón de Loja con el objetivo de preservar y proyectar la identidad gastronómica lojana a través de la tecnología.
        </p>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {allies.map((ally, i) => (
            <div 
              key={i} 
              className="px-8 py-6 border border-brand-gold/20 rounded opacity-60 hover:opacity-100 hover:border-brand-gold/50 transition-all cursor-default flex items-center justify-center bg-brand-dark-gray/30"
            >
              <span className="text-brand-off-white font-inter text-sm font-semibold tracking-wide uppercase">
                {ally}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
