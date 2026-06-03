import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getBusiness } from '@/lib/api';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function BusinessDetailPage({ params }: Props) {
  const { id } = params;
  
  const business = await getBusiness(id).catch(() => null);
  
  if (!business) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {business.image_url && (
              <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden border border-brand-gold/20">
                <img 
                  src={business.image_url} 
                  alt={business.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <h1 className="text-brand-off-white text-5xl font-bold mb-6">
              {business.name}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-10 text-brand-gold font-medium">
              <div className="flex items-center gap-2">
                <span>📍 {business.address}</span>
              </div>
              {business.phone && (
                <div className="flex items-center gap-2">
                  <span>📞 {business.phone}</span>
                </div>
              )}
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-brand-medium-gray text-xl leading-relaxed">
                {business.description}
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-brand-gold/10">
              <button className="bg-brand-gold text-brand-black px-10 py-4 font-semibold rounded hover:bg-brand-gold-light transition-all">
                Visitar Local
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
