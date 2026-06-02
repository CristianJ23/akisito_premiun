"use client";
import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-black/60 z-10" />

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-brand-gold" />
              <span className="text-brand-gold font-inter text-[11px] font-semibold tracking-[0.15em] uppercase">
                Loja · Ecuador
              </span>
              <div className="h-[1px] w-8 bg-brand-gold" />
            </div>

            <h1 className="text-brand-off-white text-5xl lg:text-[72px] leading-tight font-semibold mb-6">
              Descubre la <span className="text-brand-gold">Loja</span> <br />
              que los locales aman.
            </h1>

            <p className="text-brand-medium-gray text-lg lg:text-xl font-inter max-w-xl mb-10 leading-relaxed">
              Akisito es tu guía gastronómica inteligente. Conversacional, auténtica y validada por quienes conocen Loja de verdad.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <Button 
                className="bg-brand-gold text-brand-black px-8 py-7 font-inter font-semibold text-[13px] uppercase rounded-none hover:bg-brand-gold-light transition-all"
              >
                Descarga Akisito — es gratis
              </Button>
              <button className="text-brand-medium-gray font-inter text-sm border-b border-dotted border-brand-gold pb-1 hover:text-brand-gold transition-colors">
                Soy dueño de un restaurante →
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                {/* Badges Placeholders */}
                <div className="w-32 h-10 border border-brand-gold/30 rounded flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer">
                  <span className="text-[10px] text-brand-gold font-semibold">GOOGLE PLAY</span>
                </div>
                <div className="w-32 h-10 border border-brand-gold/30 rounded flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer">
                  <span className="text-[10px] text-brand-gold font-semibold">APP STORE</span>
                </div>
              </div>
              <p className="text-[11px] text-[#555550] font-inter">
                Disponible para Android 10+
              </p>
            </div>
          </motion.div>

          {/* Right Column: App Mockup (Visual presentation) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 15 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block -mt-54 -ml-150"
            style={{ perspective: "1000px" }}
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-black border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden">
               {/* App Screen Content */}
               <div className="p-4 pt-12">
                 <div className="flex flex-col gap-4">
                   <div className="bg-brand-dark-gray/50 p-3 rounded-2xl rounded-bl-none max-w-[80%]">
                     <p className="text-[12px] text-brand-off-white font-inter italic">"¿Dónde desayuno algo típico cerca del parque?"</p>
                   </div>
                   <div className="bg-brand-green/20 p-4 rounded-2xl rounded-br-none border border-brand-green/30 ml-auto max-w-[90%]">
                     <div className="flex items-center gap-2 mb-2">
                       <img src="/images/akisito_chat.png" alt="Akisito" className="w-6 h-6 object-contain" />
                       <span className="text-[10px] font-semibold text-brand-gold">Akisito</span>
                     </div>
                     <p className="text-[11px] text-brand-off-white mb-2 font-inter leading-tight">
                       Te recomiendo <strong>Café del Nogal</strong>. Es famoso por su tamal lojano y café de altura.
                     </p>
                     <div className="border border-brand-gold/20 rounded-lg p-2 bg-brand-black/40">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-bold text-brand-off-white">Café del Nogal</span>
                          <span className="text-[8px] bg-brand-gold text-brand-black px-1 rounded font-bold">✦ Akisito</span>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Status Bar */}
               <div className="absolute top-0 w-full h-8 flex justify-center items-center">
                 <div className="w-16 h-4 bg-[#1a1a1a] rounded-full" />
               </div>
            </div>

            {/* Float Icon */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 right-100 w-20 h-20 bg-brand-green rounded-full shadow-lg border-2 border-brand-gold flex items-center justify-center overflow-hidden"
            >
              <img src="/images/akisito_chat.png" alt="Icono" className="w-12 h-12 object-contain" />
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-brand-green/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>

        </div>
      </div>

      {/* Hero Separator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 w-full max-w-4xl px-6 opacity-30">
        <div className="h-[1px] flex-1 bg-brand-gold" />
        <span className="text-brand-gold text-xs">◆</span>
        <div className="h-[1px] flex-1 bg-brand-gold" />
      </div>
    </section>
  );
}
