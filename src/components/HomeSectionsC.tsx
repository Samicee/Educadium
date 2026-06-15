import { motion, AnimatePresence } from "motion/react";
import { data } from "../data";
import { useState } from "react";
import { ChevronDown, MapPin, Phone, Mail, Clock } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

const FadeIn = ({ children, delay = 0, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export function Admissions() {
  return (
    <section id="admissions" className="py-32 bg-[#0D2E6E] relative mt-16">
      <div className="w-full absolute top-0 -translate-y-[99%] left-0 z-0 leading-none flex" style={{ fontSize: 0 }}>
        <svg viewBox="0 0 1440 80" className="w-full h-[80px]" fill="#0D2E6E" preserveAspectRatio="none">
           <path d="M0,80 C320,0 420,0 720,40 C1020,80 1120,80 1440,0 L1440,80 L0,80 Z" />
        </svg>
      </div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <div className="inline-block bg-[#F4A91D] text-[#0A1628] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">{data.admissions.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.admissions.headline} 
                className="text-white text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
              />
              <p className="text-white/80 text-lg lg:text-xl">{data.admissions.subcopy}</p>
            </FadeIn>
         </div>
         
         <div className="relative">
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-[#F4A91D]/50 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
               {data.admissions.steps.map((step, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="relative flex flex-col items-center text-center">
                     <div className="w-24 h-24 rounded-full bg-white text-[#0D2E6E] flex items-center justify-center text-3xl font-display font-bold shadow-[0_0_0_8px_rgba(244,169,29,0.2)] mb-8">
                        {i + 1}
                     </div>
                     <h3 className="text-xl font-display font-bold text-white mb-4">{step.title}</h3>
                     <p className="text-white/80 text-sm leading-relaxed">{step.text}</p>
                  </FadeIn>
               ))}
            </div>
         </div>
         
         <FadeIn delay={0.4} className="mt-20 text-center">
            <p className="text-white font-medium mb-6">Spaces are limited each term — don't wait.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <a href="#contact" className="bg-[#F4A91D] text-[#0A1628] px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition w-full sm:w-auto text-center transform hover:-translate-y-1">Apply for 2025/2026 Admission →</a>
               <a href="#" className="text-white font-semibold flex items-center gap-2 hover:text-[#F4A91D] transition">Download Our Prospectus</a>
            </div>
         </FadeIn>
      </div>
    </section>
  );
}

export function News() {
  return (
    <section className="py-32 bg-[#FAFCF8] relative mt-16">
      <div className="w-full absolute top-0 -translate-y-[99%] left-0 z-0 leading-none flex" style={{ fontSize: 0 }}>
        <svg viewBox="0 0 1440 80" className="w-full h-[80px]" fill="#FAFCF8" preserveAspectRatio="none">
           <path d="M0,80 C320,80 420,0 720,0 C1020,0 1120,80 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
         <div className="text-left mb-16">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.news.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.news.headline} 
                className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight" 
              />
            </FadeIn>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.news.items.map((item, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
                     <div className="relative h-56 overflow-hidden">
                        <img src={item.image + "&auto=format,compress"} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                     </div>
                     <div className="p-8 flex-grow flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-[#7A8FA8] font-bold uppercase tracking-wider mb-4">
                           <span>{item.date}</span>
                           <span className="w-1 h-1 rounded-full bg-[#F4A91D]"></span>
                           <span className="text-[#27AE60]">{item.category}</span>
                        </div>
                        <h3 className="text-xl font-display font-bold text-[#0D2E6E] mb-4 group-hover:text-[#F4A91D] transition-colors">{item.title}</h3>
                        <p className="text-[#3D4F6B] text-sm leading-relaxed mb-6 flex-grow">{item.excerpt}</p>
                        <a href="#" className="font-semibold text-[#F4A91D] flex items-center gap-1 group-hover:gap-2 transition-all">
                           Read More <span>→</span>
                        </a>
                     </div>
                  </div>
               </FadeIn>
            ))}
         </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
         <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.faqs.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.faqs.headline} 
                className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
              />
              <p className="text-[#3D4F6B] text-lg">{data.faqs.subcopy}</p>
            </FadeIn>
         </div>
         
         <div className="space-y-4">
            {data.faqs.items.map((item, i) => {
               const isOpen = openIndex === i;
               return (
                  <FadeIn key={i} delay={i * 0.05}>
                     <div className="border border-gray-200 rounded-[24px] bg-white overflow-hidden transition-shadow hover:shadow-md">
                        <button
                           className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                           onClick={() => setOpenIndex(isOpen ? null : i)}
                        >
                           <span className={`font-display font-bold text-lg ${isOpen ? 'text-[#0D2E6E]' : 'text-[#0A1628]'}`}>{item.q}</span>
                           <ChevronDown className={`shrink-0 transition-transform duration-300 text-[#F4A91D] ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                           {isOpen && (
                              <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: "auto", opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 transition={{ duration: 0.3 }}
                              >
                                 <div className="px-6 pb-6 text-[#3D4F6B] leading-relaxed border-t border-gray-100 pt-4">
                                    {item.a}
                                 </div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </div>
                  </FadeIn>
               )
            })}
         </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="bg-[#FFFFFF] p-6 lg:p-12">
       <div className="container mx-auto max-w-7xl rounded-[40px] overflow-hidden shadow-2xl relative flex flex-col md:flex-row bg-[#0D2E6E]">
          <div className="w-full md:w-1/2 p-12 lg:p-20 relative z-10 flex flex-col justify-center">
             <div className="inline-block bg-[#F4A91D] text-[#0A1628] text-xs font-bold uppercase px-3 py-1 rounded-full mb-8 self-start">
               LIMITED SPACES AVAILABLE — 2025/2026
             </div>
             <h2 className="text-white text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
               Give Your Child the<br/>Best Start in Life.
             </h2>
             <p className="text-white/80 text-lg leading-relaxed mb-8">
               Every brilliant adult you know was once a curious child who needed the right environment to thrive. Educadium could be that environment for your child.
               <br/><br/>
               Don't let this year's enrollment close before you've secured your child's place.
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#F4A91D] text-[#0A1628] px-8 py-4 rounded-full font-bold text-center hover:bg-white transition transform hover:-translate-y-1">Apply Now — It's Free</a>
                <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-center hover:bg-[#20bd5a] transition transform hover:-translate-y-1 shadow-[0_8px_20px_rgba(37,211,102,0.3)]">Chat Us on WhatsApp</a>
             </div>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[400px]">
             <div className="absolute inset-0 bg-[#0D2E6E] w-1/4 -left-[1px] skew-x-[-12deg] origin-top hidden md:block z-10"></div>
             <img src="https://images.unsplash.com/photo-1544322891-b3b3e64b73fd?auto=format,compress&w=800&q=80" alt="Smiling student" className="w-full h-full object-cover absolute inset-0 z-0" loading="lazy" />
          </div>
       </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAFCF8]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">Contact Us</div>
              <h2 className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">We Would Love to Hear From You</h2>
              <p className="text-[#3D4F6B] text-lg">Whether you have a question, want to book a tour, or are ready to begin your child's Educadium journey — we are here.</p>
            </FadeIn>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn delay={0.1}>
               <div className="bg-white p-8 lg:p-10 rounded-[32px] shadow-xl border border-gray-100">
                  <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-semibold text-[#0A1628] mb-2">Your Full Name</label>
                           <input type="text" className="w-full px-4 py-3 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#0D2E6E] focus:ring-1 focus:ring-[#0D2E6E] transition" placeholder="John Doe" />
                        </div>
                        <div>
                           <label className="block text-sm font-semibold text-[#0A1628] mb-2">Email Address</label>
                           <input type="email" className="w-full px-4 py-3 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#0D2E6E] focus:ring-1 focus:ring-[#0D2E6E] transition" placeholder="john@example.com" />
                        </div>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-semibold text-[#0A1628] mb-2">Phone Number</label>
                           <input type="tel" className="w-full px-4 py-3 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#0D2E6E] focus:ring-1 focus:ring-[#0D2E6E] transition" placeholder="+234 ..." />
                           <label className="flex items-center gap-2 mt-2 cursor-pointer">
                              <input type="checkbox" className="rounded text-[#0D2E6E] focus:ring-[#0D2E6E]" />
                              <span className="text-sm text-gray-500">Contact me via WhatsApp</span>
                           </label>
                        </div>
                        <div>
                           <label className="block text-sm font-semibold text-[#0A1628] mb-2">Child's Class of Interest</label>
                           <select className="w-full px-4 py-3 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#0D2E6E] focus:ring-1 focus:ring-[#0D2E6E] transition bg-white">
                              <option>Playgroup (2-3 yrs)</option>
                              <option>Nursery 1-3 (3-6 yrs)</option>
                              <option>Lower Primary 1-3</option>
                              <option>Upper Primary 4-6</option>
                           </select>
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-semibold text-[#0A1628] mb-2">Your Message / Question</label>
                        <textarea rows={4} className="w-full px-5 py-4 rounded-[20px] border border-gray-200 focus:outline-none focus:border-[#0D2E6E] focus:ring-1 focus:ring-[#0D2E6E] transition resize-none" placeholder="How can we help you?"></textarea>
                     </div>
                     <button className="w-full bg-[#0D2E6E] text-white py-4 rounded-full font-bold hover:bg-[#0D2E6E]/90 transition transform hover:-translate-y-1">Send Message →</button>
                     <p className="text-xs text-gray-400 text-center mt-4">We respect your privacy. Your information will never be shared with third parties.</p>
                  </form>
               </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col gap-8">
               <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="bg-[#EEF3FB] text-[#0D2E6E] p-3 rounded-full shrink-0"><MapPin size={24} /></div>
                  <div>
                     <h4 className="text-lg font-display font-bold text-[#0D2E6E] mb-1">Address</h4>
                     <p className="text-[#3D4F6B]">Educadium — 15 Education Boulevard<br/>Abuja, FCT, Nigeria</p>
                  </div>
               </div>
               
               <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="bg-[#EEF3FB] text-[#0D2E6E] p-3 rounded-full shrink-0"><Phone size={24} /></div>
                  <div>
                     <h4 className="text-lg font-display font-bold text-[#0D2E6E] mb-1">Phone</h4>
                     <p className="text-[#3D4F6B] font-medium">+234 800 EDUCADIUM</p>
                     <p className="text-sm text-gray-400 mt-1">Monday–Friday, 7:30am–4:00pm</p>
                  </div>
               </div>
               
               <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="bg-[#EEF3FB] text-[#0D2E6E] p-3 rounded-full shrink-0"><Mail size={24} /></div>
                  <div>
                     <h4 className="text-lg font-display font-bold text-[#0D2E6E] mb-1">Email & WhatsApp</h4>
                     <p className="text-[#3D4F6B] mb-3">admissions@educadium.edu.ng</p>
                     <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer" className="inline-block bg-[#27AE60] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-600 transition">Chat on WhatsApp</a>
                  </div>
               </div>
               
               <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="bg-[#EEF3FB] text-[#0D2E6E] p-3 rounded-full shrink-0"><Clock size={24} /></div>
                  <div>
                     <h4 className="text-lg font-display font-bold text-[#0D2E6E] mb-1">School Hours</h4>
                     <p className="text-[#3D4F6B]">Monday – Friday: 7:30am – 3:30pm</p>
                     <p className="text-sm text-[#F4A91D] font-semibold mt-1">After-School Care: Available until 5:00pm</p>
                  </div>
               </div>
            </FadeIn>
         </div>
      </div>
    </section>
  );
}
