"use client";
import React, { useState } from "react";
import { Button, Input, TextArea } from "@heroui/react";
import { ShieldCheck, Eye, Map } from "lucide-react";

export default function Affiliate() {
  const [formData, setFormData] = useState({
    establishment_name: "",
    owner_name: "",
    establishment_type: "",
    email: "",
    phone: "",
    reason: "",
    terms_accepted: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

    try {
      const response = await fetch(`${API_URL}/affiliations/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const benefits = [
    { icon: <Eye className="w-5 h-5" />, text: "Ficha digital con tu historia, menú y fotos en la plataforma Akisito" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Sello de autenticidad cultural visible para todos los turistas" },
    { icon: <Eye className="w-5 h-5" />, text: "Visibilidad ante turistas nacionales e internacionales que usan la app" },
    { icon: <Map className="w-5 h-5" />, text: "Presencia en el mapa interactivo de lugares validados" },
  ];

  const Label = ({ children }: { children: React.ReactNode }) => (
    <label className="text-brand-gold-light text-[12px] font-inter uppercase tracking-wider mb-2 block font-semibold">
      {children}
    </label>
  );

  return (
    <section id="afiliate" className="bg-brand-green py-24 text-brand-off-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-brand-gold-light font-inter text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">
            Para establecimientos
          </span>
          <h2 className="text-brand-off-white text-4xl lg:text-[52px] font-semibold mb-6">
            ¿Tu establecimiento tiene historia?
          </h2>
          <p className="text-brand-off-white/80 text-lg max-w-2xl leading-relaxed">
            Si tu lugar transmite la cultura lojana de verdad, queremos conocerte. El sello Akisito no se compra, se gana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Benefits */}
          <div className="relative">
            <h3 className="text-2xl font-cormorant font-semibold text-brand-gold mb-10">
              Qué obtienes al ser validado
            </h3>
            
            <ul className="space-y-8 mb-16 relative z-10">
              {benefits.map((b, i) => (
                <li key={i} className="flex gap-4">
                  <div className="text-brand-gold shrink-0">{b.icon}</div>
                  <span className="text-brand-off-white font-inter text-[15px] leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 pt-10 border-t border-brand-off-white/10 mb-12">
               <div className="flex flex-col gap-1">
                 <span className="text-brand-gold font-bold text-sm">01</span>
                 <span className="text-[11px] uppercase tracking-wider">Postulas</span>
               </div>
               <div className="text-brand-gold">→</div>
               <div className="flex flex-col gap-1">
                 <span className="text-brand-gold font-bold text-sm">02</span>
                 <span className="text-[11px] uppercase tracking-wider">Te visitamos</span>
               </div>
               <div className="text-brand-gold">→</div>
               <div className="flex flex-col gap-1">
                 <span className="text-brand-gold font-bold text-sm">03</span>
                 <span className="text-[11px] uppercase tracking-wider">Obtienes el sello</span>
               </div>
            </div>

            {/* Mascot Decoration */}
            <div className="hidden lg:block opacity-40 hover:opacity-100 transition-opacity">
              <img src="/images/mascota.png" alt="Mascota Akisito" className="w-32 h-auto" />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-black/25 rounded-xl p-8 lg:p-10 border border-brand-gold/20 backdrop-blur-sm">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-brand-black" />
                </div>
                <h3 className="text-2xl font-cormorant font-semibold text-brand-gold mb-4">¡Postulación recibida!</h3>
                <p className="text-brand-off-white/80 font-inter">
                  Gracias por tu interés. Revisaremos tu postulación y nos pondremos en contacto en menos de 5 días hábiles.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-cormorant font-semibold text-brand-gold mb-8">
                  Inicia tu proceso de validación
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label>Nombre del establecimiento</Label>
                    <Input 
                      placeholder="Ej. Café del Nogal"
                      value={formData.establishment_name}
                      onChange={(e: any) => setFormData({...formData, establishment_name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label>Nombre del propietario / responsable</Label>
                    <Input 
                      placeholder="Nombre completo"
                      value={formData.owner_name}
                      onChange={(e: any) => setFormData({...formData, owner_name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label>Tipo de establecimiento</Label>
                    <select 
                      className="w-full bg-white/5 border border-brand-gold/30 rounded px-3 py-2 text-brand-off-white font-inter text-sm"
                      value={formData.establishment_type}
                      onChange={(e) => setFormData({...formData, establishment_type: e.target.value})}
                      required
                    >
                      <option value="" className="bg-brand-black">Selecciona una opción</option>
                      <option value="RESTAURANTE" className="bg-brand-black">Restaurante</option>
                      <option value="CAFETERIA" className="bg-brand-black">Cafetería</option>
                      <option value="BAR" className="bg-brand-black">Bar</option>
                      <option value="OTRO" className="bg-brand-black">Otro</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Correo electrónico</Label>
                      <Input 
                        type="email"
                        placeholder="hola@tu-restaurante.com"
                        value={formData.email}
                        onChange={(e: any) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label>Teléfono de contacto</Label>
                      <Input 
                        type="tel"
                        placeholder="099 999 9999"
                        value={formData.phone}
                        onChange={(e: any) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label>¿Por qué tu lugar es auténtico?</Label>
                    <TextArea 
                      placeholder="Cuéntanos brevemente la historia de tu negocio, qué platos lo hacen único y por qué debería tener el sello Akisito..."
                      value={formData.reason}
                      onChange={(e: any) => setFormData({...formData, reason: e.target.value})}
                      required
                      minRows={6}
                      className="w-full"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <input 
                      type="checkbox"
                      checked={formData.terms_accepted}
                      onChange={(e) => setFormData({...formData, terms_accepted: e.target.checked})}
                      className="accent-brand-gold"
                      required
                    />
                    <span className="text-[12px] text-brand-off-white/70 font-inter">
                      Entiendo que el sello Akisito requiere una visita de verificación presencial.
                    </span>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-brand-gold text-brand-black font-semibold uppercase tracking-widest py-7 rounded-none hover:bg-brand-gold-light transition-all disabled:opacity-50"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar mi postulación"}
                  </Button>

                  {status === "error" && (
                    <p className="text-red-400 text-xs text-center">Hubo un error al enviar el formulario. Intenta de nuevo.</p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
