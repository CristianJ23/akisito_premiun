import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getBusinesses } from '@/lib/api';
import Link from 'next/link';

export default async function LocalesPage() {
  const businesses = await getBusinesses().catch(() => []);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-brand-off-white text-4xl font-semibold mb-12">
            Locales <span className="text-brand-gold">Recomendados</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.length > 0 ? (
              businesses.map((business) => (
                <Link 
                  href={`/locales/${business.id}`} 
                  key={business.id}
                  className="group bg-brand-dark-gray/30 border border-brand-gold/10 p-6 rounded-lg hover:border-brand-gold/40 transition-all"
                >
                  {business.image_url && (
                    <div className="aspect-video mb-4 overflow-hidden rounded">
                      <img 
                        src={business.image_url} 
                        alt={business.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <h2 className="text-brand-off-white text-xl font-semibold mb-2 group-hover:text-brand-gold transition-colors">
                    {business.name}
                  </h2>
                  <p className="text-brand-medium-gray text-sm line-clamp-2">
                    {business.description}
                  </p>
                </Link>
              ))
            ) : (
              <p className="text-brand-medium-gray col-span-full text-center py-20">
                Próximamente más locales...
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
