import { motion } from "motion/react";
import { data } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Target, Leaf, Users, Quote, Linkedin, ShieldCheck } from "lucide-react";
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

const ICONS: any = { Target, Leaf, Users };

export function Philosophy() {
  return (
    <section className="py-32 relative bg-[#0D2E6E] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#FFFFFF 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <div className="inline-block bg-[#F4A91D] text-[#0A1628] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">{data.philosophy.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.philosophy.headline} 
                className="text-[#FDE047] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 pb-2" 
              />
              <p className="text-white/80 text-lg lg:text-xl">{data.philosophy.subcopy}</p>
            </FadeIn>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {data.philosophy.items.map((item, i) => {
               const Icon = ICONS[item.icon] || Target;
               return (
                 <FadeIn key={i} delay={i * 0.1}>
                    <div className="text-center">
                       <div className="w-16 h-16 rounded-full bg-white/10 text-[#F4A91D] flex items-center justify-center mx-auto mb-6">
                          <Icon size={32} />
                       </div>
                       <h3 className="text-2xl font-display text-[#F4A91D] font-bold mb-4 pb-1">{item.title}</h3>
                       <p className="text-white/80 leading-relaxed">{item.text}</p>
                    </div>
                 </FadeIn>
               )
            })}
         </div>
      </div>
    </section>
  );
}

export function Facilities() {
  return (
    <section id="facilities" className="py-32 bg-[#EEF3FB] relative mt-16">
      <div className="w-full absolute top-0 -translate-y-[99%] left-0 z-0 leading-none flex" style={{ fontSize: 0 }}>
        <svg viewBox="0 0 1440 80" className="w-full h-[80px]" fill="#EEF3FB" preserveAspectRatio="none">
           <path d="M0,80 C320,80 420,0 720,0 C1020,0 1120,80 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
         <div className="max-w-3xl mb-16">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.facilities.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.facilities.headline} 
                className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
              />
              <p className="text-[#3D4F6B] text-lg">{data.facilities.subcopy}</p>
            </FadeIn>
         </div>
         <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {data.facilities.items.map((fac, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.1} className="break-inside-avoid">
                 <div className="relative group rounded-[32px] overflow-hidden shadow-sm">
                    <img src={fac.image} alt={fac.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                       <h3 className="text-xl font-display text-white font-bold mb-2">{fac.title}</h3>
                       <p className="text-white/80 text-sm">{fac.text}</p>
                    </div>
                 </div>
              </FadeIn>
            ))}
         </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="py-24 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.team.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.team.headline} 
                className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
              />
              <p className="text-[#3D4F6B] text-lg lg:text-xl">{data.team.subcopy}</p>
            </FadeIn>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.team.members.map((member, i) => (
               <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center group">
                     <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#EEF3FB] group-hover:border-[#F4A91D] transition-colors duration-300">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                     </div>
                     <h3 className="text-xl font-display font-bold text-[#0D2E6E] mb-1">{member.name}</h3>
                     <div className="text-[#F4A91D] text-xs font-bold uppercase tracking-wider mb-4">{member.title}</div>
                     <p className="text-[#3D4F6B] text-sm leading-relaxed mb-4">{member.bio}</p>
                     <a href="#" className="inline-flex text-[#0D2E6E]/40 hover:text-[#0D2E6E] transition-colors">
                        <Linkedin size={20} />
                     </a>
                  </div>
               </FadeIn>
            ))}
         </div>
         <FadeIn className="text-center mt-12">
            <a href="#contact" className="text-[#F4A91D] font-bold hover:underline">Meet the full team →</a>
         </FadeIn>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-[#FAFCF8] relative overflow-hidden">
      <div className="absolute top-10 left-10 text-[#F4A91D]/10 z-0">
         <Quote size={240} />
      </div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.testimonials.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.testimonials.headline} 
                className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
              />
              <p className="text-[#3D4F6B] text-lg">{data.testimonials.subcopy}</p>
            </FadeIn>
         </div>
         
         <FadeIn delay={0.2}>
            <Swiper
               modules={[Autoplay, Pagination, Navigation]}
               spaceBetween={24}
               slidesPerView={1}
               loop={true}
               autoplay={{ delay: 5000, disableOnInteraction: false }}
               pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
               breakpoints={{
                 768: { slidesPerView: 2 },
                 1024: { slidesPerView: 2 }
               }}
               className="pb-12"
            >
               {data.testimonials.items.map((testimonial, i) => (
                  <SwiperSlide key={i}>
                     <div className="bg-white rounded-[32px] shadow-[0_4px_24px_rgba(13,46,110,0.06)] p-8 lg:p-10 h-full border border-gray-50 flex flex-col">
                        <div className="text-[#F4A91D] text-lg mb-6">★★★★★</div>
                        <p className="text-[#3D4F6B] text-lg italic leading-relaxed mb-8 flex-grow">"{testimonial.text}"</p>
                        <div>
                           <div className="font-display font-bold text-[#0D2E6E] text-xl">{testimonial.name}</div>
                           <div className="text-[#7A8FA8] text-sm mt-1">{testimonial.role}</div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            
            <div className="swiper-pagination-custom flex justify-center gap-2 mt-4"></div>
            
            <div className="bg-[#0D2E6E]/5 rounded-3xl p-4 mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 border border-[#0D2E6E]/10">
               <div className="flex text-[#F4A91D] text-xl">★★★★★</div>
               <span className="text-[#0A1628] font-medium text-sm">4.9 out of 5 · Based on 247 verified parent reviews</span>
               <span className="hidden sm:inline text-gray-300">|</span>
               <span className="text-gray-500 text-sm flex items-center gap-1">Google Reviews <ShieldCheck size={14}/> Verified by Parents</span>
            </div>
         </FadeIn>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.gallery.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.gallery.headline} 
                className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
              />
              <p className="text-[#3D4F6B] text-lg">{data.gallery.subcopy}</p>
            </FadeIn>
         </div>
         
         <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {data.gallery.images.map((img, i) => (
               <FadeIn key={i} delay={(i % 3) * 0.1} className="break-inside-avoid">
                  <div className="relative group rounded-[32px] overflow-hidden shadow-sm cursor-pointer">
                     <img src={img.image} alt={img.caption} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                     <div className="absolute inset-0 bg-[#0D2E6E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                        <p className="text-white font-medium text-sm lg:text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                           {img.caption}
                        </p>
                     </div>
                  </div>
               </FadeIn>
            ))}
         </div>
         
         <FadeIn className="mt-16 text-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block border-2 border-[#0D2E6E] text-[#0D2E6E] px-8 py-4 rounded-full font-semibold hover:bg-[#0D2E6E] hover:text-white transition">
               See More on Instagram @EducadiumSchool
            </a>
         </FadeIn>
      </div>
    </section>
  );
}
