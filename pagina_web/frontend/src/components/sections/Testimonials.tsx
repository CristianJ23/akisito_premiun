import React from "react";

export default function Testimonials() {
  const touristTestimonials = [
    {
      text: "Llevaba dos días en Loja sin saber dónde desayunar algo que no fuera para turistas. Akisito me llevó al Café del Nogal en cuatro minutos de conversación. Fue la mejor decisión del viaje.",
      author: "María T.",
      role: "Quito",
    },
    {
      text: "Como viajero extranjero, la diferencia es enorme. El chat me respondió en inglés, entendió mis restricciones alimentarias y me recomendó tres lugares que jamás habría encontrado solo.",
      author: "James W.",
      role: "Estados Unidos",
    },
  ];

  const ownerTestimonials = [
    {
      text: "Tenemos 40 años haciendo el mismo café de olla. Akisito nos ayudó a contarle esa historia al mundo. Ahora vienen turistas que ya saben quiénes somos antes de entrar.",
      author: "Carmen P.",
      role: "Café del Nogal",
    },
    {
      text: "El proceso de validación fue serio. Vinieron, probaron, preguntaron. Eso me dijo que el sello significa algo de verdad.",
      author: "Roberto M.",
      role: "El Tambo Real",
    },
  ];

  const TestimonialCard = ({ text, author, role }: any) => (
    <div className="relative mb-12">
      <span className="absolute -top-6 -left-4 text-brand-gold text-6xl font-serif opacity-30">“</span>
      <p className="text-brand-off-white text-xl italic font-cormorant leading-relaxed relative z-10 mb-6">
        {text}
      </p>
      <div>
        <span className="text-brand-off-white font-inter text-[13px] font-bold block">{author}</span>
        <span className="text-brand-medium-gray font-inter text-[12px]">{role}</span>
      </div>
    </div>
  );

  return (
    <section className="bg-brand-dark-gray py-24">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-brand-gold font-inter text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">
            Voces reales
          </span>
          <h2 className="text-brand-off-white text-4xl lg:text-[52px] font-semibold">
            Lo que dicen quienes ya lo vivieron.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-brand-gold/50 font-inter text-xs uppercase tracking-widest mb-10 pb-2 border-b border-brand-gold/10">
              Turistas y Viajeros
            </h3>
            {touristTestimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div>
            <h3 className="text-brand-gold/50 font-inter text-xs uppercase tracking-widest mb-10 pb-2 border-b border-brand-gold/10">
              Propietarios de Establecimientos
            </h3>
            {ownerTestimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
