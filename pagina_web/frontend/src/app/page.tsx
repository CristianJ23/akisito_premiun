import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ValueProp from "@/components/sections/ValueProp";
import HowItWorks from "@/components/sections/HowItWorks";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Download from "@/components/sections/Download";
import Affiliate from "@/components/sections/Affiliate";
import Allies from "@/components/sections/Allies";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      <Hero />
      <ValueProp />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <Download />
      <Affiliate />
      <Allies />
      <Footer />
    </main>
  );
}
