import React from "react";
import { Button } from "@heroui/react";

export default function Gallery() {
  const places = [
    { name: "Café del Nogal", type: "Cafetería", dist: "A 400m de ti" },
    { name: "La Brisa Lojana", type: "Restaurante", dist: "A 1.2km de ti" },
    { name: "El Tambo Real", type: "Restaurante", dist: "A 800m de ti" },
    { name: "Casa del Repe", type: "Hueca Tradicional", dist: "A 2.1km de ti" },
    { name: "El Molino Artesanal", type: "Panadería", dist: "A 500m de ti" },
    { name: "Bar El Vigía", type: "Bar / Vista", dist: "A 3.5km de ti" },
  ];

  return (
    <section id="lugares" className="bg-brand-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-inter text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">
            El sello Akisito
          </span>
          <h2 className="text-brand-off-white text-4xl lg:text-[52px] font-semibold mb-6">
            Lugares que llevan la cultura de Loja en cada plato.
          </h2>
          <p className="text-brand-medium-gray text-lg max-w-2xl mx-auto">
            Estos establecimientos pasaron por nuestro proceso de validación cultural. Son auténticos, son lojanos, son Akisito.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {places.map((place, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-brand-black to-brand-green/30 border border-brand-gold/10 group-hover:shadow-[0_12px_40px_rgba(201,168,76,0.15)] transition-shadow">
                {/* Badge Akisito */}
                <div className="absolute top-4 right-4 z-10 bg-brand-gold text-brand-black text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                  ✦ Akisito
                </div>
                {/* Image Placeholder */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center" />
              </div>
              <h3 className="text-brand-off-white text-xl font-semibold font-cormorant mb-1">
                {place.name}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-brand-medium-gray text-xs font-inter">{place.type}</span>
                <span className="text-brand-medium-gray/60 text-[11px] font-inter">{place.dist}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="border-brand-gold/30 text-brand-gold text-[12px] font-inter font-semibold uppercase tracking-wider px-10 py-6 border" 
          >
            Ver todos los lugares
          </Button>
        </div>
      </div>
    </section>
  );
}
