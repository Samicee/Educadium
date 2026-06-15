import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Facebook, Instagram, Twitter, Youtube, MessageCircle, Star, ShieldCheck, MapPin, Phone, Mail } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="main-nav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl flex items-center justify-between">
         
         {/* Logo */}
         <a href="#" className={`flex items-center gap-2 font-display text-2xl font-black ${scrolled ? 'text-[#0D2E6E]' : 'text-white'}`}>
            <Star className="fill-[#F4A91D] text-[#F4A91D]" size={24} />
            Educadium
         </a>
         
         {/* Desktop Nav */}
         <div className={`hidden lg:flex items-center gap-8 text-sm font-bold ${scrolled ? 'text-[#0A1628]' : 'text-white/90'}`}>
            <a href="#hero" className="hover:text-[#F4A91D] transition">Home</a>
            <a href="#about" className="hover:text-[#F4A91D] transition">About</a>
            <a href="#programs" className="hover:text-[#F4A91D] transition">Programs</a>
            <a href="#facilities" className="hover:text-[#F4A91D] transition">Facilities</a>
            <a href="#gallery" className="hover:text-[#F4A91D] transition">Gallery</a>
            <a href="#admissions" className="hover:text-[#F4A91D] transition">Admissions</a>
            <a href="#contact" className="hover:text-[#F4A91D] transition">Contact</a>
         </div>
         
         {/* CTA */}
         <div className="hidden lg:flex">
            <a href="#admissions" className="bg-[#F4A91D] text-[#0A1628] px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition transform hover:-translate-y-0.5 flex items-center gap-2">
               Apply Now <ArrowRight size={16} />
            </a>
         </div>
         
         {/* Hamburger */}
         <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`block lg:hidden ${scrolled ? 'text-[#0A1628]' : 'text-white'}`}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
         </button>
      </div>
      
      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 top-[70px] bg-white z-40 transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden overflow-y-auto`}>
         <div className="flex flex-col p-6 space-y-6 text-[#0D2E6E] font-bold text-xl">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)}>Programs</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)}>Facilities</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <a href="#admissions" onClick={() => setMobileMenuOpen(false)}>Admissions</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            <div className="pt-6 border-t border-gray-100">
               <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="bg-[#0D2E6E] text-white px-6 py-4 rounded-lg w-full text-center block">Apply Now</a>
            </div>
         </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050E1E] text-white pt-24 pb-10 border-t-4 border-[#F4A91D]">
       <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
             {/* Col 1 */}
             <div className="space-y-6">
                <div className="flex items-center gap-2 font-display text-2xl font-black">
                   <Star className="fill-[#F4A91D] text-[#F4A91D]" size={24} />
                   Educadium
                </div>
                <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">Where Brilliant Futures Begin. Providing world-class nursery and primary education in a safe, nurturing environment.</p>
                <div className="flex gap-4">
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4A91D] hover:text-[#0A1628] transition"><Facebook size={18} /></a>
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4A91D] hover:text-[#0A1628] transition"><Instagram size={18} /></a>
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4A91D] hover:text-[#0A1628] transition"><Twitter size={18} /></a>
                   <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4A91D] hover:text-[#0A1628] transition"><Youtube size={18} /></a>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mt-4 text-xs font-semibold uppercase tracking-wider">
                   <ShieldCheck size={16} className="text-[#F4A91D]" /> NERDC Accredited
                </div>
             </div>
             
             {/* Col 2 */}
             <div>
                <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
                <ul className="space-y-4 text-white/70 text-sm font-medium">
                   <li><a href="#hero" className="hover:text-[#F4A91D] transition">Home</a></li>
                   <li><a href="#about" className="hover:text-[#F4A91D] transition">About Educadium</a></li>
                   <li><a href="#programs" className="hover:text-[#F4A91D] transition">Our Programs</a></li>
                   <li><a href="#facilities" className="hover:text-[#F4A91D] transition">School Facilities</a></li>
                   <li><a href="#team" className="hover:text-[#F4A91D] transition">Meet Our Team</a></li>
                   <li><a href="#gallery" className="hover:text-[#F4A91D] transition">Gallery</a></li>
                </ul>
             </div>
             
             {/* Col 3 */}
             <div>
                <h4 className="font-display font-bold text-lg mb-6 text-white">Admissions</h4>
                <ul className="space-y-4 text-white/70 text-sm font-medium">
                   <li><a href="#admissions" className="hover:text-[#F4A91D] transition">Apply for Admission</a></li>
                   <li><a href="#contact" className="hover:text-[#F4A91D] transition">Book a School Tour</a></li>
                   <li><a href="#" className="flex hover:text-[#F4A91D] transition justify-between">Download Prospectus <ArrowRight size={16} /></a></li>
                   <li><a href="#" className="hover:text-[#F4A91D] transition">School Fees Guide</a></li>
                   <li><a href="#" className="hover:text-[#F4A91D] transition">Scholarship Programme</a></li>
                   <li><a href="#contact" className="hover:text-[#F4A91D] transition">Contact Admissions</a></li>
                </ul>
             </div>
             
             {/* Col 4 */}
             <div>
                <h4 className="font-display font-bold text-lg mb-6 text-white">Contact & Updates</h4>
                <ul className="space-y-4 text-white/70 text-sm font-medium mb-8">
                   <li className="flex items-start gap-3"><MapPin size={18} className="text-[#F4A91D] shrink-0 mt-0.5" /> 15 Education Boulevard, Abuja</li>
                   <li className="flex items-center gap-3"><Phone size={18} className="text-[#F4A91D] shrink-0" /> +234 800 EDUCADIUM</li>
                   <li className="flex items-center gap-3"><Mail size={18} className="text-[#F4A91D] shrink-0" /> admissions@educadium.edu.ng</li>
                </ul>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                   <p className="text-xs text-white/60 mb-3">Get school updates & news:</p>
                   <div className="flex">
                      <input type="email" placeholder="Email address" className="w-full bg-white/10 text-white px-3 py-2 text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-[#F4A91D]" />
                      <button className="bg-[#F4A91D] text-[#0A1628] font-bold px-4 text-sm rounded-r hover:bg-yellow-400 transition">Go</button>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
             <p>© 2026 Educadium. All Rights Reserved.</p>
             <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Use</a>
             </div>
          </div>
       </div>
    </footer>
  );
}

export function WhatsAppFAB() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/2348001234567?text=Hello%20Educadium%2C%20I%27d%20like%20to%20enquire%20about%20admission%20for%20my%20child."
      target="_blank"
      rel="noreferrer"
      title="Chat with Admissions on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#27AE60] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 transform ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}`}
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#27AE60] animate-ping opacity-50"></div>
      <MessageCircle size={32} />
    </a>
  );
}
