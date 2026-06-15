import { Navbar, Footer, WhatsAppFAB } from "./components/LayoutLayers";
import { Hero, Welcome, Stats, Features, Programs } from "./components/HomeSectionsA";
import { Philosophy, Facilities, Team, Testimonials, Gallery } from "./components/HomeSectionsB";
import { Admissions, News, FAQ, CTA, Contact } from "./components/HomeSectionsC";

export default function App() {
  return (
    <div className="relative w-full text-[#3D4F6B] font-body selection:bg-[#F4A91D] selection:text-[#0A1628]">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Stats />
        <Features />
        <Programs />
        <Philosophy />
        <Facilities />
        <Team />
        <Testimonials />
        <Gallery />
        <Admissions />
        <News />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
