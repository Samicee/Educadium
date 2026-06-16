import playgroupImg from "./assets/images/playgroup.jpg";
import nursery1Img from "./assets/images/nursery_1.jpg";
import nursery2Img from "./assets/images/nursery_2.jpg";
import nursery3Img from "./assets/images/nursery_3.jpg";
import primary1Img from "./assets/images/primary_1.jpg";
import primary6Img from "./assets/images/primary_6.jpg";
import principalImg from "./assets/images/african_principal_1781538820073.jpg";
import deputyImg from "./assets/images/african_deputy_1781538841401.jpg";
import nurseryTeacherImg from "./assets/images/african_nursery_1781538859590.jpg";
import ictTeacherImg from "./assets/images/african_ict_1781538883394.jpg";
import libraryImg from "./assets/images/school_library.jpg";
import classroomImg from "./assets/images/modern_classroom.jpg";
import playgroundImg from "./assets/images/outdoor_playground.jpg";
import scienceLabImg from "./assets/images/science_lab.jpg";
import graduationImg from "./assets/images/Graduation_day.jpg";
import sportImg from "./assets/images/Inter_house_sport.jfif";
import culturalDayImg from "./assets/images/cultural_day.jfif";
import culturalDay2Img from "./assets/images/cultural_day_2.jfif";
import ictLabImg from "./assets/images/ict_lab.jfif";
import creativityImg from "./assets/images/creativity_class.jfif";
import assemblyImg from "./assets/images/assembly_ground.jfif";
import awardDayImg from "./assets/images/award_day.jfif";
import admissionOpenImg from "./assets/images/admission_open.jfif";

export const data = {
  hero: {
    badge: "NERDC Accredited · Established 2008",
    headline: "Where Brilliant\nFutures Begin.",
    subheadline: "Your child has one childhood. Give them a school that honours every single day of it — with world-class teachers, joyful learning, and a community that feels like family.",
    stats: [
      { value: 500, label: "Learners", suffix: "+" },
      { value: 25, label: "Educators", suffix: "+" },
      { value: 97, label: "Parent Satisfaction", suffix: "%" },
      { value: 15, label: "Years of Excellence", suffix: "+" },
    ]
  },
  about: {
    label: "About Our School",
    headline: "A Place Where Every Child is Known, Loved, and Challenged to Excel",
    body: `Choosing a school for your child may be the most important decision you make this year. You need to know: Will they be safe? Will they be seen — not just as a student, but as a person? Will they fall in love with learning, or dread Monday mornings?

At Educadium, we built our school around one belief: that every child is born brilliant. Our job is simply to make sure nothing dims that brilliance.

For over 15 years, we have shaped confident, curious, and compassionate children — young people who don't just pass exams, but genuinely love learning. Our classrooms are alive with questions, creativity, and joy. And our parents? They tell us Educadium changed their family's life.

We would love for your child to be next.`
  },
  features: {
    label: "Why Educadium?",
    headline: "The 6 Things That Make Educadium Different",
    subcopy: "Every school says they care. Here is how we prove it, every single day.",
    items: [
      { title: "Safe & Fully Secured", icon: "ShieldCheck", text: "Your child's safety is our first curriculum. 24-hour CCTV, gated premises, signed-in visitors only, and a dedicated sick bay with a qualified nurse on standby every school day." },
      { title: "Teachers Who Truly Care", icon: "Heart", text: "Our educators hold B.Ed and NCE qualifications and go through our in-house 'Educadium Method' training. But beyond credentials, we hire for one non-negotiable quality: a genuine love for children." },
      { title: "NERDC-Aligned Curriculum", icon: "BookOpen", text: "We follow the Federal Government's approved curriculum with an enriched layer of 21st-century skills — critical thinking, digital literacy, and emotional intelligence — woven into every lesson." },
      { title: "Holistic Development", icon: "Palette", text: "Academics are just one part of your child's story. Music, art, sports, drama, and cultural activities ensure your child develops not just a sharp mind, but a whole person." },
      { title: "Technology-Integrated Learning", icon: "Monitor", text: "From our fully equipped ICT lab to interactive smart boards in every classroom, Educadium prepares children for a digital world — without ever losing the magic of human connection." },
      { title: "A True Second Home", icon: "Home", text: "Our 1:15 teacher-to-student ratio means no child ever gets lost in the crowd. From the moment your child walks in, every teacher knows their name, their strengths, and what makes them smile." },
    ]
  },
  programs: {
    label: "Our Programs",
    headline: "The Right Programme for Every Stage of Your Child's Journey",
    subcopy: "From their very first day in our nursery to the confident Primary 6 pupil ready to conquer secondary school — we walk every step with them.",
    items: [
      { name: "Playgroup / Baby Class", color: "emerald-green", age: "2 – 3 years", image: playgroupImg, highlights: ["Sensory play & early motor development", "Introduction to letters, numbers, and colours", "Songs, storytelling, and creative play", "Safe ratio of 1 teacher to 8 children"] },
      { name: "Nursery 1", color: "warm-gold", age: "3 – 4 years", image: nursery1Img, highlights: ["Phonics and early reading foundations", "Number recognition and basic counting", "Social skills and emotional regulation", "Daily outdoor playtime & structured activities"] },
      { name: "Nursery 2", color: "royal-blue", age: "4 – 5 years", image: nursery2Img, highlights: ["Reading readiness and sight words", "Basic mathematics and logical reasoning", "ICT introduction with tablets and apps", "Public speaking, drama, and confidence building"] },
      { name: "Nursery 3 / Kindergarten", color: "emerald-green", age: "5 – 6 years", image: nursery3Img, highlights: ["Full literacy and numeracy readiness", "Science exploration and curiosity labs", "Introduction to state languages", "Smooth transition preparation into Primary 1"] },
      { name: "Primary 1 – 3 (Lower Primary)", color: "warm-gold", age: "6 – 9 years", image: primary1Img, highlights: ["Full NERDC primary curriculum", "English Language, Maths, Basic Science", "Weekly computer classes and library time", "Inter-house sports, cultural day, and arts"] },
      { name: "Primary 4 – 6 (Upper Primary)", color: "royal-blue", age: "9 – 12 years", image: primary6Img, highlights: ["NERDC curriculum with exam preparation", "Weekly debates, essay competitions, STEM", "School prefect leadership training", "Graduation & valedictory ceremony"] },
    ]
  },
  philosophy: {
    label: "Our Philosophy",
    headline: "We Don't Just Teach Children. We Shape People.",
    subcopy: "Behind every lesson at Educadium is a philosophy that has guided us for 15 years: children learn best when they feel safe, seen, and inspired. Everything we do flows from that truth.",
    items: [
      { title: "Child-Centred Learning", icon: "Target", text: "Your child is not a vessel to be filled with information. They are a fire to be kindled. Our teachers come prepared not to lecture, but to guide, explore, and discover alongside each student at their own pace." },
      { title: "Character Before Certificates", icon: "Leaf", text: "Grades matter. Character matters more. At Educadium, we intentionally build honesty, empathy, respect, and resilience into our daily routine — because the world needs great humans, not just great students." },
      { title: "Partnership With Parents", icon: "Users", text: "You are not handing your child to us. You are joining a team. We believe parents and teachers must work as one, which is why we maintain an open-door policy, weekly progress updates, and a dedicated parent portal." },
    ]
  },
  facilities: {
    label: "Our Facilities",
    headline: "A Space Designed to Inspire Curiosity at Every Corner",
    subcopy: "Walk through our gates and you will understand immediately: every inch of Educadium was designed with one person in mind — your child.",
    items: [
      { title: "Modern Classrooms", text: "Smart boards, colourful learning walls, child-sized furniture, natural light", image: classroomImg },
      { title: "ICT / Computer Lab", text: "30 HP desktop computers, high-speed internet, coding & digital literacy curriculum", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" },
      { title: "School Library", text: "2,000+ books, reading nooks, weekly library hour for every class", image: libraryImg },
      { title: "Outdoor Playground", text: "Age-appropriate equipment, rubberized flooring, supervised at all times", image: playgroundImg },
      { title: "Science & Discovery Lab", text: "Hands-on experiments for Primary 3 and above", image: scienceLabImg },
      { title: "School Hall / Assembly Ground", text: "Covered hall for assemblies, events, drama, and celebrations", image: "https://images.unsplash.com/photo-1577896851231-70efbf5186ad?w=800&q=80" },
      { title: "Cafeteria", text: "Nutritious, Nigerian-approved school meals. Allergy-aware menu.", image: "https://images.unsplash.com/photo-1587847427847-19cefb35b62e?w=800&q=80" },
      { title: "Sick Bay", text: "Qualified nurse present daily. First aid trained staff across all classes.", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80" },
      { title: "Security System", text: "Gated entrance, biometric visitor log, 24-hour CCTV across all zones", image: "https://images.unsplash.com/photo-1555861496-faa3e1174f4a?w=800&q=80" },
    ]
  },
  team: {
    label: "Our Team",
    headline: "The Hearts Behind Every Brilliant Mind at Educadium",
    subcopy: "We don't hire people who can teach. We hire people who love children — and then make sure they are exceptional teachers too.",
    members: [
      { name: "Mrs. Adaeze Okonkwo, M.Ed", title: "Head of School / Principal", bio: "15 years in early childhood education. Former education consultant for UNICEF Nigeria. Believes every child deserves a teacher who believes in them first.", image: principalImg },
      { name: "Mr. Chukwuemeka Eze, B.Ed", title: "Deputy Principal & Head of Primary", bio: "Passionate about turning reluctant readers into bookworms. Coach for our inter-school debate team. 3× Regional Best Teacher Award.", image: deputyImg },
      { name: "Miss Fatimah Al-Hassan, NCE", title: "Head of Nursery Department", bio: "10 years nurturing our youngest learners. Certified Montessori practitioner. Fluent in three Nigerian languages.", image: nurseryTeacherImg },
      { name: "Mr. Babatunde Olatunji, B.Sc, PGDE", title: "ICT & STEM Coordinator", bio: "Former software developer turned teacher. On a mission to make every Educadium child digitally confident before age 12.", image: ictTeacherImg },
    ]
  },
  testimonials: {
    label: "Parent Stories",
    headline: "Don't Take Our Word for It. Listen to the Parents.",
    subcopy: "Over 247 families have trusted Educadium with what matters most to them. Here is what some of them say.",
    items: [
      { name: "Mrs. Ngozi Adeleke", role: "Parent of Temi (Primary 3)", text: "I was nervous enrolling my son in a new school after we relocated from the UK. By his third week at Educadium, he told me he didn't want school holidays because he'd miss his teacher. I cried happy tears. This school is something special." },
      { name: "Engr. Femi & Mrs. Kemi Adeyemi", role: "Parents of Zara (Nursery 2)", text: "The level of communication from Educadium is unlike any school I've experienced in Nigeria. Weekly updates, WhatsApp reports, open days — they make you feel like a partner, not just a fee-paying parent. Our daughter has blossomed here." },
      { name: "Dr. Amaka Obi", role: "Parent of David (Primary 5)", text: "My son struggled with reading in his previous school. Within one term at Educadium, he was reading chapter books on his own. Their teachers are extraordinary people. I recommend this school to every parent I meet." },
      { name: "Alhaji Musa & Hajiya Aisha Ibrahim", role: "Parents of Fatima (Primary 1)", text: "The security alone is worth everything. I drop my daughter off and I go to work with peace of mind. The CCTV, the gate system, the communication — Educadium parents don't worry. We trust." },
      { name: "Mrs. Toyin Ogundimu", role: "Parent of Twins (Nursery 1 & 3)", text: "Having two children in the same school and getting two individual, personalised reports for each of them every week? Educadium sees my children as individuals, not numbers. That says everything." },
      { name: "Mr. Chidi Nwosu", role: "Parent of Prince (Primary 6)", text: "Prince graduated from Educadium at the top of his class and entered one of the best junior secondary schools in Abuja. His teachers prepared him for life, not just exams. I tell everyone: this school changes children." },
    ]
  },
  gallery: {
    label: "School Life",
    headline: "A Day at Educadium — Told in Pictures",
    subcopy: "From morning assembly to afternoon clubs, every hour at Educadium is designed to light something up in your child.",
    images: [
      { caption: "Science Fair Day — exploring, discovering, creating", image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80" },
      { caption: "Graduation Day 2024 — we are so proud of these stars", image: graduationImg },
      { caption: "Reading Hour — because every great mind starts with a great book", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80" },
      { caption: "Inter-House Sports — teamwork, fitness, and pure joy", image: sportImg },
      { caption: "Cultural Day — celebrating Nigeria's rich heritage", image: culturalDayImg },
      { caption: "ICT Lab — our future digital leaders at work", image: ictLabImg },
      { caption: "Art & Creativity Class — expression has no limits here", image: creativityImg },
      { caption: "Morning Assembly — values, discipline, and community", image: assemblyImg },
    ]
  },
  admissions: {
    label: "Admissions",
    headline: "Your Child's Journey to Educadium Starts With One Simple Step",
    subcopy: "We have made our admission process clear, fast, and welcoming — because we know how much is riding on this decision for your family.",
    steps: [
      { title: "Submit Your Application", text: "Fill out our simple online application form below. It takes less than 5 minutes. No application fee required." },
      { title: "Book a School Tour", text: "Visit Educadium and experience the school firsthand. Meet our principal, see the facilities, and ask every question on your mind. We love school tours." },
      { title: "Entrance Assessment", text: "A brief, friendly assessment to help us understand your child's current level and place them in the class where they will thrive most." },
      { title: "Welcome to the Educadium Family!", text: "Once a place is confirmed, we send your welcome pack, school uniform guide, timetable, and your personal parent portal login. Your child's brilliant future begins here." },
    ]
  },
  news: {
    label: "News & Events",
    headline: "What's Happening at Educadium",
    items: [
      { date: "June 5, 2025", category: "Event", title: "Educadium Wins 3rd Consecutive Regional Science Fair Trophy", excerpt: "Our Primary 5 and 6 students dominated this year's Abuja Regional Science Fair, taking home gold in three categories...", image: awardDayImg },
      { date: "May 20, 2025", category: "School Life", title: "Cultural Day 2025: A Celebration of Nigeria's Colours", excerpt: "Over 400 students and parents gathered for our annual Cultural Day celebration — a sea of adire, aso-oke, and pure Nigerian joy...", image: culturalDay2Img },
      { date: "May 8, 2025", category: "Admissions", title: "2025/2026 Admissions Now Open — Apply Before July 31", excerpt: "We are now accepting applications for the upcoming academic year. Spaces fill quickly — book your school tour and secure your child's place today...", image: admissionOpenImg },
    ]
  },
  faqs: {
    label: "FAQs",
    headline: "Questions Every Parent Asks Before Choosing Educadium",
    subcopy: "We believe transparency builds trust. So here are honest answers to the questions that matter most to you.",
    items: [
      { q: "What age can my child start at Educadium?", a: "We welcome children from age 2 (Playgroup) through to age 12 (Primary 6). The right starting age depends on your child's readiness, which our team can assess during a free consultation visit." },
      { q: "Is Educadium accredited by the government?", a: "Yes. Educadium is fully accredited by the Federal Ministry of Education and aligns with the NERDC (Nigerian Educational Research and Development Council) approved curriculum for nursery and primary education." },
      { q: "What are your school fees?", a: "Our fees are structured per term and vary by class level. We believe in fee transparency — contact our admissions team or book a tour and we will provide a full, no-surprise fee schedule. We also offer an early-payment discount and sibling discounts." },
      { q: "What is the school's security arrangement?", a: "We take security very seriously. Our premises include a controlled entrance with biometric visitor logging, 24-hour CCTV across all areas, trained security personnel, and a strict child-release policy — no child is released to any adult not pre-approved by the parent." },
      { q: "Do you have a school bus?", a: "Yes. We operate a safe, air-conditioned school bus service across major routes within [City]. Each bus has a dedicated bus attendant. Route details and fees are available from our admissions office." },
      { q: "What is your teacher-to-student ratio?", a: "We maintain a maximum ratio of 1 teacher to 15 students, with teaching assistants in all nursery classes. This ensures every child receives individual attention and no child is overlooked." },
      { q: "How do you keep parents informed about their child's progress?", a: "Through weekly class reports, our digital parent portal, a termly parent-teacher conference, and our active school WhatsApp group for parents. You will always know how your child is doing." },
      { q: "Do you serve food? Can I send my child's own lunch?", a: "Our school canteen serves freshly prepared, nutritionist-approved meals daily. Parents are also welcome to send packed lunches. We do not allow sweets, carbonated drinks, or junk food on the premises." },
      { q: "What happens if my child is sick during school hours?", a: "We have a fully equipped sick bay with a qualified nurse on-site every school day. In the event of illness, we contact parents immediately and administer only first aid until you arrive." },
      { q: "Can I visit the school before deciding?", a: "Absolutely — we encourage it. A school tour is the best way to experience Educadium. You will meet our principal, see the classrooms, and get a true feel for our environment. Book your free tour today — no obligation, no pressure." },
    ]
  }
};
