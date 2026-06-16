import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { data } from "../data";
import { ShieldCheck, Heart, BookOpen, Palette, Monitor, Home as HomeIcon, Award, Users, BookMarked, Smile } from "lucide-react";
import { useEffect, useRef } from "react";
import { AnimatedText } from "./AnimatedText";
import heroBg from "../assets/images/Background_image.png";
import aboutUsImg from "../assets/images/about_us.jpg";

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

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { mass: 1, stiffness: 50, damping: 20 });
  
  useEffect(() => {
    if (inView) count.set(value);
  }, [inView, value, count]);
  
  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [spring]);
  
  return <span ref={ref}>0</span>;
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-48 overflow-visible">
      {/* Full Bleed Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
           src={heroBg} 
           alt="Joyful children learning in classroom" 
           className="absolute inset-0 w-full h-full object-cover"
           fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0A1628]/60 backdrop-blur-[2px]"></div>
        
        {/* Soft Wave Divider at the bottom overflowing into the next section */}
        <div className="absolute bottom-0 left-0 w-full leading-none flex" style={{ fontSize: 0, transform: 'translateY(1px)' }}>
           <svg viewBox="0 0 1440 120" className="w-full h-[60px] md:h-[120px]" fill="#FFFFFF" preserveAspectRatio="none">
             <path d="M0,120 C320,120 420,0 720,0 C1020,0 1120,120 1440,120 L1440,120 L0,120 Z" />
           </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center w-full max-w-5xl mt-12 mb-20">
         <FadeIn>
           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full p-1.5 pr-4 shadow-sm border border-white/20 mb-8">
             <span className="bg-[#F4A91D] text-[#0A1628] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">New</span>
             <span className="text-white text-sm font-semibold">{data.hero.badge}</span>
           </div>
           
           <AnimatedText 
             as="h1"
             text={data.hero.headline}
             className="text-5xl md:text-7xl lg:text-[80px] font-black leading-[1.1] mb-6 whitespace-pre-line font-display tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
             style={{ color: '#FDE047' }}
             delay={0}
           />
           
           <p className="text-white/90 text-xl md:text-2xl max-w-[700px] mx-auto mb-10 leading-relaxed font-body font-light">
             {data.hero.subheadline}
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
             <a href="#admissions" className="bg-[#F4A91D] text-[#0A1628] px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-[0_8px_20px_rgba(244,169,29,0.3)]">
               Apply for Admission 2025/2026
             </a>
             <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition transform hover:-translate-y-1 shadow-[0_8px_20px_rgba(37,211,102,0.3)]">
               Chat Us on WhatsApp
             </a>
           </div>
           
           <div className="text-sm font-medium text-white/90 flex flex-col sm:flex-row items-center justify-center gap-3">
             <span className="flex text-[#F4A91D] gap-0.5">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
             </span>
             <span>Rated 4.9/5 by 247 parents &nbsp;·&nbsp; No application fee</span>
           </div>
         </FadeIn>
      </div>
      
      {/* Overlapping stat card bar at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-6 lg:px-8 mx-auto w-full max-w-7xl">
         <div className="bg-white rounded-[32px] shadow-[0_10px_40px_rgba(13,46,110,0.08)] p-8 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 border border-gray-100">
            {data.hero.stats.map((stat, i) => (
              <div key={i} className="text-center relative">
                {i !== 0 && <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-100"></div>}
                <div className="text-5xl font-display font-black text-[#0D2E6E] mb-2 leading-tight">
                   <AnimatedCounter value={stat.value} />{stat.suffix}
                </div>
                <div className="text-sm font-bold text-[#7A8FA8] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}

export function Welcome() {
  return (
    <section id="about" className="pt-48 pb-32 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.about.label}</div>
          <AnimatedText 
            as="h2" 
            text={data.about.headline} 
            className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
          />
          <div className="text-[#3D4F6B] space-y-4 mb-10 whitespace-pre-line text-lg leading-relaxed">
            {data.about.body}
          </div>
          <a href="#gallery" className="text-[#0D2E6E] font-bold hover:text-[#0D2E6E]/80 transition group relative inline-flex items-center gap-2">
            Meet Our School Story <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </FadeIn>
        <FadeIn delay={0.2} className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,#F4A91D_0%,transparent_50%)] opacity-10 blur-3xl rounded-full z-0"></div>
          <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto">
            <img src={aboutUsImg} alt="About Us" className="w-full h-full object-cover rounded-[32px] shadow-2xl relative z-10" loading="lazy" />
            <div className="absolute top-[40%] left-[-15%] bg-white p-4 rounded-[24px] shadow-[0_4px_24px_rgba(13,46,110,0.15)] flex items-center gap-3 animate-bounce z-30">
               <span className="text-3xl">🏆</span>
               <div className="font-bold text-[#0D2E6E] text-sm leading-tight">School of<br/>Excellence 2024</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-[#0D2E6E] relative z-10">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
            {data.hero.stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`text-center ${i > 1 ? 'pt-8 lg:pt-0' : ''} ${i === 1 ? 'pt-8 lg:pt-0' : ''}`}> {/* Mobile grid formatting handled via css but just using standard grid */}
                <div className="text-5xl lg:text-6xl font-display font-bold text-[#F4A91D] mb-3">
                   <AnimatedCounter value={stat.value} />{stat.suffix}
                </div>
                <div className="text-base text-white/80 font-medium">{stat.label}</div>
              </FadeIn>
            ))}
         </div>
      </div>
    </section>
  );
}

const ICONS:any = { ShieldCheck, Heart, BookOpen, Palette, Monitor, Home: HomeIcon };

export function Features() {
  return (
    <section id="features" className="pt-40 pb-32 bg-[#FAFCF8] relative mt-16">
      <div className="w-full absolute top-0 -translate-y-[99%] left-0 z-0 leading-none flex" style={{ fontSize: 0 }}>
        <svg viewBox="0 0 1440 80" className="w-full h-[80px]" fill="#FAFCF8" preserveAspectRatio="none">
           <path d="M0,80 C320,80 420,0 720,0 C1020,0 1120,80 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.features.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.features.headline} 
                className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
              />
              <p className="text-[#3D4F6B] text-lg lg:text-xl">{data.features.subcopy}</p>
            </FadeIn>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.items.map((feat, i) => {
               const Icon = ICONS[feat.icon] || Heart;
               return (
                 <FadeIn key={i} delay={i * 0.1}>
                    <div className="bg-white rounded-[32px] p-8 h-full shadow-[0_4px_24px_rgba(13,46,110,0.06)] hover:-translate-y-2 transition-transform duration-300 border border-gray-50 group">
                       <div className="w-14 h-14 rounded-full bg-[#F4A91D]/15 text-[#F4A91D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Icon size={28} />
                       </div>
                       <h3 className="text-xl font-display text-[#0D2E6E] font-bold mb-4">{feat.title}</h3>
                       <p className="text-[#3D4F6B] leading-relaxed">{feat.text}</p>
                    </div>
                 </FadeIn>
               )
            })}
         </div>
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <section id="programs" className="py-32 bg-[#FFFFFF] relative mt-16">
      <div className="w-full absolute top-0 -translate-y-[99%] left-0 z-0 leading-none flex" style={{ fontSize: 0 }}>
        <svg viewBox="0 0 1440 80" className="w-full h-[80px]" fill="#FFFFFF" preserveAspectRatio="none">
           <path d="M0,80 C320,0 420,0 720,40 C1020,80 1120,80 1440,0 L1440,80 L0,80 Z" />
        </svg>
      </div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <div className="inline-block text-[#F4A91D] text-sm font-bold uppercase tracking-wider mb-4">{data.programs.label}</div>
              <AnimatedText 
                as="h2" 
                text={data.programs.headline} 
                className="text-[#0D2E6E] text-4xl lg:text-5xl font-display font-bold leading-tight mb-6" 
              />
              <p className="text-[#3D4F6B] text-lg lg:text-xl">{data.programs.subcopy}</p>
            </FadeIn>
         </div>
         
         <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 pb-8 snap-x snap-mandatory hide-scroll">
            {data.programs.items.map((prog, i) => {
               // Map color aliases to literal hex classes since strict Tailwind might not parse arbitrary variable mapping securely
               let colorHex = "#FFFFFF";
               if(prog.color === "emerald-green") colorHex = "#27AE60";
               if(prog.color === "warm-gold") colorHex = "#F4A91D";
               if(prog.color === "royal-blue") colorHex = "#0D2E6E";
               
               return (
                 <FadeIn key={i} delay={i * 0.1} className="min-w-[85vw] md:min-w-[400px] lg:min-w-0 snap-start">
                    <div className="bg-white rounded-[32px] shadow-[0_4px_24px_rgba(13,46,110,0.06)] overflow-hidden h-full flex flex-col group border border-gray-100">
                       <div className="relative h-64 overflow-hidden">
                          <img src={prog.image} alt={prog.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                          <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: colorHex }}></div>
                       </div>
                       <div className="p-8 flex-grow flex flex-col">
                          <div className="text-sm font-bold tracking-wider mb-2" style={{ color: colorHex }}>{prog.age}</div>
                          <h3 className="text-2xl font-display font-bold text-[#0D2E6E] mb-6">{prog.name}</h3>
                          <ul className="space-y-3 mb-8 flex-grow">
                             {prog.highlights.map((hlt, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-[#3D4F6B]">
                                   <ShieldCheck size={18} className="mt-0.5 shrink-0" style={{ color: colorHex }} />
                                   <span className="leading-snug text-sm font-medium">{hlt}</span>
                                </li>
                             ))}
                          </ul>
                          <a href="#contact" className="inline-block font-semibold hover:opacity-80 transition-opacity" style={{ color: colorHex }}>Learn More →</a>
                       </div>
                    </div>
                 </FadeIn>
               )
            })}
         </div>
         
         <FadeIn delay={0.4} className="mt-12">
            <div className="bg-[#EEF3FB] rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
               <h4 className="text-xl font-bold font-display text-[#0D2E6E] text-center md:text-left">Not sure which class is right for your child? Talk to our admissions team.</h4>
               <div className="flex gap-4">
                 <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer" className="bg-[#27AE60] text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition shadow-lg text-sm text-center">Chat on WhatsApp</a>
                 <a href="tel:+2348001234567" className="bg-white text-[#0D2E6E] px-8 py-4 rounded-full font-semibold border hover:bg-gray-50 transition text-sm text-center line-clamp-1">Call Us</a>
               </div>
            </div>
         </FadeIn>
      </div>
    </section>
  );
}
