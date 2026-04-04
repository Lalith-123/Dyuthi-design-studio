import React from "react";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Design from "../assets/Designs/Elevation.webp";
import Nandakam from "../assets/Nandakam/IMG_6008.webp";
import { useNavigate } from "react-router-dom";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    // text: "Dyuthi Design Studio transformed our vision into a breathtaking reality. Their attention to detail is unmatched.",
    text: "So greatful to my interior designers for bringing my vision to life🤍. Every single corner of my room feels throughtfully designed and truly me. From the vanity mirror I love, the butterfly handles (my favourite 🦋), to the perfect place for my artworks, trophies, and memories.<br/><br/>The colour combinations, spacious wardrode, and throughtful use of space make the room feel calm and composed. Even though I usually don't choose pink, the pink-and-white theme turned out beautiful and soothing. The cozy sit-out area and bay window make it my happy place.<br/><br/>Absolutely in love with my room🤍✨",
    author: "<Name Needed>",
    role: "<Role Needed>",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 2,
    text: "Working with Dyuthi Design Studio was a wonderful experience. From start to finish, the entire process was smooth, professional, and stress free.<br/><br/>The team truly understood our vision and transformed it into a beautiful space. Every detail, form design elements to color choices, was throughtfully planned and perfectly executed. I couldn't have achieved this without them.",
    author: "Pratima Brahma Reddy",
    role: "<Role Needed>",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 3,
    text: "Thank you for wonderful design for my house... I can't recommend Dyuthi studios enough for their increadible interior work! They completely transformed our outdated living space into a modern, functional dream home. From custom cabinetry that maximizes every inch to flawless lighting and color schemes that perfectly match our vibe, every detail was spot-on.<br/><br/>The team was professional, timely, and listened to our ideas while suggesting brilliant upgrades we hadn't considered. Our home feels luxurious yet cozy, and we've gotten endless compliments from guests. Worth every penny-five stars all the way!",
    author: "Kranthi Kumar Reddy",
    role: "<Role Needed>",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 4,
    text: "The team's ability to work with natural light and materials created a sanctuary we never want to leave.",
    author: "David Wright",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 5,
    text: "Exceptional service from concept to execution. They pushed boundaries while respecting our budget.",
    author: "Priya Patel",
    role: "Founder, Zenith",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 6,
    text: "Their minimalist approach brought a sense of calm and clarity to our chaotic office environment.",
    author: "James Wilson",
    role: "CTO, Nexus",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
  },
];

interface TestimonialItem {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => (
  <div className="w-[350px] md:w-[450px] bg-neutral-900 border border-neutral-800 p-8 mx-4 shrink-0 hover:border-neutral-600 transition-colors duration-300 group/card">
    <Quote className="w-8 h-8 text-neutral-600 mb-6 group-hover/card:text-white transition-colors" />
    <p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
      "
      {item.text.split("<br/>").map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
      "
    </p>
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.author}
        className="w-12 h-12 rounded-full object-cover grayscale group-hover/card:grayscale-0 transition-all"
      />
      <div>
        <h4 className="text-white font-medium">{item.author}</h4>
        <p className="text-neutral-500 text-sm">{item.role}</p>
      </div>
    </div>
  </div>
);

export const Home: React.FC = () => {
  const [isTopRowHovered, setIsTopRowHovered] = React.useState(false);
  const [isBottomRowHovered, setIsBottomRowHovered] = React.useState(false);
  const navigate = useNavigate();
  const openGallery = (name: string) => {
    navigate(`/gallery/${name}`);
  };

  const marqueeContent = (
    <>
      <span>Architecture</span> <span>•</span>
      <span>Interior</span> <span>•</span>
      <span>Engineering</span> <span>•</span>
      <span>Landscape</span> <span>•</span>
      <span>Planning</span> <span>•</span>
      <span>Architecture</span> <span>•</span>
      <span>Interior</span> <span>•</span>
      <span>Engineering</span> <span>•</span>
      <span>Landscape</span> <span>•</span>
      <span>Planning</span> <span>•</span>
    </>
  );

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="w-full h-full animate-scale-slow">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
              alt="Architecture Background"
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2000ms]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-6xl z-10">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase text-white reveal">
            Timeless Design. <br />
            <span className="text-neutral-400">Refined Living.</span>
          </h1>
          <p className="text-lg md:text-xl font-normal text-gray-300 max-w-xl leading-relaxed mb-12 reveal stagger-1 border-l-2 border-white/20 pl-6">
            At Dyuthi Design Studio, we craft elegant, functional spaces that
            reflect refined taste. Where design excellence meets precise
            execution.
          </p>
          <div className="flex flex-col md:flex-row gap-6 reveal stagger-2">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white border border-white transition-all duration-300"
            >
              Request Consultation
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white text-xs font-bold tracking-[0.2em] uppercase border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="py-32 px-6 md:px-20 bg-black text-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-serif">Selected Works</h2>
          <Link
            to="/portfolio"
            className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:opacity-50 transition-opacity mt-6 md:mt-0"
          >
            See All Works
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group cursor-pointer reveal stagger-1" onClick={() => openGallery("Design")}>
            <div className="overflow-hidden mb-6 aspect-[4/5] relative bg-neutral-900">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
              <img
                src={Design}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100"
                alt="Project 1"
              />
            </div>
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4 group-hover:border-white transition-colors">
              <h3 className="text-2xl font-light group-hover:pl-4 transition-all duration-300">
                Designs
              </h3>
              <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore
              </span>
            </div>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
              Location Needed
            </p>
          </div>

          <div className="group cursor-pointer md:mt-32 reveal stagger-2" onClick={() => openGallery("Nandakam")}>
            <div className="overflow-hidden mb-6 aspect-[4/5] relative bg-neutral-900">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
              <img
                src={Nandakam}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100"
                alt="Project 2"
              />
            </div>
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4 group-hover:border-white transition-colors">
              <h3 className="text-2xl font-light group-hover:pl-4 transition-all duration-300">
                Nandakam
              </h3>
              <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore
              </span>
            </div>
            <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
              Location Needed
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="px-6 md:px-20 mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            What Our Customers Say
          </h2>
          <div className="h-px w-24 bg-white/30"></div>
        </div>

        {/* Testimonials Content with Blur Effect */}
        <div className="relative w-full">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          {/* Top Row - Moves Right (Reverse Marquee) */}
          <div
            className="flex mb-8 relative z-20"
            onMouseEnter={() => setIsTopRowHovered(true)}
            onMouseLeave={() => setIsTopRowHovered(false)}
          >
            <div
              className="flex animate-marquee-reverse"
              style={{
                animationPlayState: isTopRowHovered ? "paused" : "running",
              }}
            >
              {testimonials.map((item) => (
                <TestimonialCard key={`row1-1-${item.id}`} item={item} />
              ))}
              {testimonials.map((item) => (
                <TestimonialCard key={`row1-2-${item.id}`} item={item} />
              ))}
            </div>
            <div
              className="flex animate-marquee-reverse"
              aria-hidden="true"
              style={{
                animationPlayState: isTopRowHovered ? "paused" : "running",
              }}
            >
              {testimonials.map((item) => (
                <TestimonialCard key={`row1-3-${item.id}`} item={item} />
              ))}
              {testimonials.map((item) => (
                <TestimonialCard key={`row1-4-${item.id}`} item={item} />
              ))}
            </div>
          </div>

          {/* Bottom Row - Moves Left (Standard Marquee) */}
          <div
            className="flex relative z-20"
            onMouseEnter={() => setIsBottomRowHovered(true)}
            onMouseLeave={() => setIsBottomRowHovered(false)}
          >
            <div
              className="flex animate-marquee"
              style={{
                animationPlayState: isBottomRowHovered ? "paused" : "running",
              }}
            >
              {testimonials.map((item) => (
                <TestimonialCard key={`row2-1-${item.id}`} item={item} />
              ))}
              {testimonials.map((item) => (
                <TestimonialCard key={`row2-2-${item.id}`} item={item} />
              ))}
            </div>
            <div
              className="flex animate-marquee"
              aria-hidden="true"
              style={{
                animationPlayState: isBottomRowHovered ? "paused" : "running",
              }}
            >
              {testimonials.map((item) => (
                <TestimonialCard key={`row2-3-${item.id}`} item={item} />
              ))}
              {testimonials.map((item) => (
                <TestimonialCard key={`row2-4-${item.id}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee / Text Strip */}
      <div className="w-full overflow-hidden bg-neutral-900 py-6 reveal border-y border-neutral-800 flex">
        <div className="animate-marquee whitespace-nowrap flex space-x-12 items-center text-white/50 text-sm font-mono uppercase tracking-widest shrink-0 min-w-full pr-12">
          {marqueeContent}
        </div>
        <div className="animate-marquee whitespace-nowrap flex space-x-12 items-center text-white/50 text-sm font-mono uppercase tracking-widest shrink-0 min-w-full pr-12">
          {marqueeContent}
        </div>
      </div>
    </div>
  );
};
