import React from "react";
import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="bg-brand-deep-black pt-20 pb-10 border-t border-brand-gold/15">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
               <img src="/images/akisito_dorado.png" alt="Akisito" className="h-30 w-auto" />
            </div>
            <p className="text-brand-medium-gray text-[13px] font-inter mb-8">
              Loja auténtica, en tu bolsillo.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-brand-medium-gray hover:text-brand-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="text-brand-medium-gray hover:text-brand-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="text-brand-medium-gray hover:text-brand-gold transition-colors">
                <span className="font-bold text-sm">𝕏</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Nav */}
          <div>
            <h4 className="text-brand-gold text-[11px] font-semibold uppercase tracking-widest mb-8">
              Navegación
            </h4>
            <ul className="space-y-4">
              {["Inicio", "Cómo funciona", "Lugares validados", "Nosotros", "Afíliate"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-brand-medium-gray text-[13px] hover:text-brand-off-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-brand-gold text-[11px] font-semibold uppercase tracking-widest mb-8">
              Contacto
            </h4>
            <div className="space-y-4 text-brand-medium-gray text-[13px] font-inter">
              <p>akisito.kriss@gmail.com</p>
              <p>+593 961239706</p>
              <p>Loja, Ecuador</p>
              <p className="mt-8 pt-8 border-t border-brand-gold/10 leading-relaxed italic opacity-60">
                {/* Akisito es el nombre comercial de la plataforma Sendai, desarrollada en la Universidad Nacional de Loja. */}
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-gold/5 text-center">
          <p className="text-brand-medium-gray text-[11px] font-inter">
            © 2026 Akisito · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
