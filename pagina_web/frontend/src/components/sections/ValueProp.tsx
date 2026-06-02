import React from "react";
import { Leaf, MessageSquare, MapPin } from "lucide-react";

export default function ValueProp() {
  const cards = [
    {
      icon: <Leaf className="w-8 h-8 text-brand-gold" />,
      title: "Solo lugares validados",
      text: "Nuestro equipo visita, verifica y certifica cada establecimiento antes de aparecer en Akisito. Sin algoritmos de popularidad. Solo autenticidad.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-gold" />,
      title: "Pregunta como hablas",
      text: "Escribe en lenguaje natural. Akisito entiende lo que buscas, filtra por tus preferencias y te responde en segundos sin alucinaciones ni datos inventados.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-gold" />,
      title: "Loja en el bolsillo",
      text: "Mapa interactivo, fichas culturales, historia del lugar, menú con precios. Todo lo que necesitas para explorar Loja con confianza, incluso sin conexión.",
    },
  ];

  return (
    <section className="bg-brand-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-gold font-inter text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">
            La diferencia
          </span>
          <h2 className="text-brand-off-white text-4xl lg:text-[52px] font-semibold mb-6">
            No es una app de reseñas. Es tu guía cultural.
          </h2>
          <p className="text-brand-medium-gray text-lg max-w-3xl mx-auto leading-relaxed">
            Cada lugar que Akisito te recomienda fue visitado, probado y validado por nuestro equipo. Solo lo auténtico lleva el sello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-brand-off-white text-2xl font-semibold mb-4 font-cormorant">
                {card.title}
              </h3>
              <p className="text-brand-medium-gray text-[15px] leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex items-center gap-8 w-full max-w-4xl mx-auto opacity-20">
          <div className="h-[1px] flex-1 bg-brand-gold" />
          <span className="text-brand-gold text-xs">◆</span>
          <div className="h-[1px] flex-1 bg-brand-gold" />
        </div>
      </div>
    </section>
  );
}
