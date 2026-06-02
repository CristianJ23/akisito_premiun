import React from "react";
import { MessageSquare, ShieldCheck, MapPinned, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <MessageSquare className="w-6 h-6 text-brand-gold" />,
      title: "Cuéntale qué quieres",
      text: "Escribe lo que buscas como si le preguntaras a un amigo lojano. Akisito entiende tu idioma, tu presupuesto y tus preferencias.",
    },
    {
      num: "02",
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      title: "Akisito filtra y valida",
      text: "El sistema recupera únicamente lugares certificados con el sello Akisito y los presenta según tu contexto, idioma y ubicación.",
    },
    {
      num: "03",
      icon: <MapPinned className="w-6 h-6 text-brand-gold" />,
      title: "Disfruta y descubre",
      text: "Accede a la ficha cultural del lugar, el menú, la historia y la ruta para llegar. Todo en la misma pantalla, sin salir de la app.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-brand-dark-gray py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-brand-gold font-inter text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">
            Para el turista
          </span>
          <h2 className="text-brand-off-white text-4xl lg:text-[52px] font-semibold">
            Tu experiencia en Loja, en tres pasos.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative pt-12">
              {/* Background Number */}
              <span className="absolute top-0 left-0 text-[96px] font-cormorant font-bold text-brand-gold/10 leading-none -z-0">
                {step.num}
              </span>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-brand-gold font-bold text-sm">{step.num}</span>
                  {step.icon}
                </div>
                <h3 className="text-brand-off-white text-[26px] font-semibold mb-4 font-cormorant">
                  {step.title}
                </h3>
                <p className="text-brand-medium-gray text-[15px] leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-20 -right-6 text-brand-gold/30">
                  <ArrowRight className="w-6 h-6 stroke-[1px] border-b border-dotted border-brand-gold w-12" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
