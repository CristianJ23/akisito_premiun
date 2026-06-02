import React from "react";

export default function Download() {
  return (
    <section id="descarga" className="bg-brand-black py-24 relative overflow-hidden">
      {/* Decorative Leaf SVG Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg width="800" height="800" viewBox="0 0 24 24" fill="currentColor" className="text-brand-gold">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-[600px]">
        {/* Logo Icon */}
        <div className="w-[100px] h-[100px] bg-brand-green rounded-full flex items-center justify-center mx-auto mb-10 border-2 border-brand-gold shadow-2xl overflow-hidden">
          <img src="/images/akisito_chat.png" alt="Akisito" className="w-16 h-16 object-contain" />
        </div>

        <h2 className="text-brand-off-white text-4xl lg:text-[56px] font-semibold mb-6">
          Descarga Akisito.
        </h2>
        <p className="text-brand-medium-gray text-lg mb-12">
          Gratis. Sin registro previo. Lista para usar en menos de 30 segundos.
        </p>

        {/* QR Code Placeholder */}
        <div className="mb-12">
          <div className="w-[160px] h-[160px] bg-white rounded-lg mx-auto border-2 border-brand-gold p-2 flex items-center justify-center mb-4">
            {/* QR Placeholder */}
            <div className="w-full h-full bg-black/10 flex items-center justify-center">
              <span className="text-black text-[10px] font-bold">QR CODE</span>
            </div>
          </div>
          <p className="text-brand-medium-gray text-xs uppercase tracking-widest">
            Escanea para descargar
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
           <div className="w-32 h-10 border border-brand-gold/30 rounded flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer hover:bg-black/60 transition-colors">
            <span className="text-[10px] text-brand-gold font-semibold">GOOGLE PLAY</span>
          </div>
          <div className="w-32 h-10 border border-brand-gold/30 rounded flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer hover:bg-black/60 transition-colors">
            <span className="text-[10px] text-brand-gold font-semibold">APP STORE</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-brand-medium-gray text-xs">
          <span>Android 10+</span>
          <span className="text-brand-gold">·</span>
          <span>Español & English</span>
        </div>
      </div>
    </section>
  );
}
