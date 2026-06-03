import React from "react";
import { Button } from "@heroui/react";
import { Users, Sparkles, MapPin } from "lucide-react";

export default function JoinCommunity() {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Sé un pionero",
      description: "Únete a la primera comunidad que protege y promueve la verdadera esencia de Loja."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "IA con Identidad",
      description: "Nuestra tecnología no solo responde, entiende la cultura y tradiciones locales."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Sin Filtros",
      description: "Recomendaciones honestas basadas en calidad y autenticidad, no en publicidad."
    }
  ];

  return (
    <section className="bg-brand-dark-gray py-24 border-y border-brand-gold/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <span className="text-brand-gold font-inter text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">
              Próximo paso
            </span>
            <h2 className="text-brand-off-white text-4xl lg:text-[52px] font-semibold mb-8 leading-tight">
              Únete al movimiento que está <span className="text-brand-gold">redefiniendo</span> el turismo en Loja.
            </h2>
            <p className="text-brand-medium-gray text-lg mb-10 leading-relaxed max-w-xl">
              Akisito está creciendo. Estamos construyendo la red más grande de establecimientos auténticos para que nadie se pierda de lo que hace a nuestra ciudad única.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-brand-gold text-brand-black px-10 py-7 font-inter font-semibold text-[13px] uppercase rounded-none hover:bg-brand-gold-light transition-all"
              >
                Sé parte de la comunidad
              </Button>
              <Button 
                variant="bordered"
                className="border-brand-gold/30 text-brand-off-white px-10 py-7 font-inter font-semibold text-[13px] uppercase rounded-none hover:bg-brand-gold/10 transition-all"
              >
                Conoce más
              </Button>
            </div>
          </div>

          {/* Right Side: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div 
                key={i} 
                className={`p-8 border border-brand-gold/10 rounded-lg bg-brand-black/20 hover:border-brand-gold/30 transition-all ${i === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div className="text-brand-gold mb-4">{v.icon}</div>
                <h3 className="text-brand-off-white text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-brand-medium-gray text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
