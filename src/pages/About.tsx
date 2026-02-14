import React from "react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Neehara Dyuthi Dasari",
    role: "Founder & Principal Architect",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    description:
      "Leading the practice with a clear architectural vision. With a deep understanding of spatial planning, aesthetics, and buildability, she approaches every project as a carefully curated composition.",
  },
  {
    name: "Sai Kumar B",
    role: "Co-Founder & Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    description:
      "Responsible for structural coordination and execution oversight. His expertise bridges design and construction, maintaining quality control and technical excellence.",
  },
];

const whyUsPoints = [
  "Bespoke, client-focused design approach",
  "Refined material and finish selection",
  "Transparent and professional process",
  "Strong execution and site control",
  "Attention to detail at every stage",
  "Enduring design and construction value",
];

export const About: React.FC = () => {
  return (
    <div className="w-full pt-32">
      {/* Introduction */}
      <section className="px-6 md:px-20 mb-32 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-sans font-bold mb-16 uppercase tracking-tighter reveal text-white">
          The Studio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-xl md:text-2xl leading-relaxed font-light text-neutral-300 space-y-8 reveal stagger-1">
            <p>
              <span className="font-semibold text-white">
                Dyuthi Design Studio
              </span>{" "}
              is a design-led architectural and interior practice specializing
              in premium residential and commercial spaces.
            </p>
            <p className="text-neutral-500">
              We believe luxury lies not in excess, but in balance—where form,
              function, and craftsmanship coexist effortlessly.
            </p>
          </div>
          <div className="aspect-square bg-neutral-900 overflow-hidden reveal stagger-2 group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
              alt="Studio Interior"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-80 group-hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* Vision, Mission, Ethos */}
      <section className="bg-neutral-900/50 text-white py-32 px-6 md:px-20 reveal border-y border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Vertical Lines */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-white/5"></div>
          <div className="hidden md:block absolute top-0 bottom-0 right-1/3 w-px bg-white/5"></div>

          <div className="group hover:-translate-y-2 transition-transform duration-500">
            <h3 className="text-lg font-mono uppercase tracking-widest text-neutral-500 mb-6 group-hover:text-white transition-colors">
              Our Vision
            </h3>
            <p className="text-xl font-light leading-relaxed text-neutral-300">
              To create timeless spaces that embody elegance, comfort, and
              lasting value.
            </p>
          </div>
          <div className="group hover:-translate-y-2 transition-transform duration-500">
            <h3 className="text-lg font-mono uppercase tracking-widest text-neutral-500 mb-6 group-hover:text-white transition-colors">
              Our Mission
            </h3>
            <p className="text-xl font-light leading-relaxed text-neutral-300">
              To deliver bespoke architectural solutions through thoughtful
              design and uncompromising execution.
            </p>
          </div>
          <div className="group hover:-translate-y-2 transition-transform duration-500">
            <h3 className="text-lg font-mono uppercase tracking-widest text-neutral-500 mb-6 group-hover:text-white transition-colors">
              Ethos
            </h3>
            <p className="text-xl font-light leading-relaxed text-neutral-300">
              Focusing on proportion, light, texture, and precision—ensuring
              each project reflects individuality.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-black py-32 px-6 md:px-20 reveal">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif text-white">Why Dyuthi?</h2>
            <div className="h-1 w-20 bg-white mt-6"></div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 gap-8">
            {whyUsPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center group border-b border-neutral-900 pb-6 hover:border-white transition-colors duration-300 cursor-default"
              >
                <span className="mr-8 text-sm font-mono text-neutral-600 group-hover:text-white transition-colors">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <p className="text-xl font-light text-neutral-400 group-hover:text-white transition-colors">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 md:px-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-20 text-center reveal text-white">
            The Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-neutral-900 p-8 hover:bg-neutral-800 transition-all duration-500 reveal stagger-1 border border-neutral-800/50"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="text-3xl font-serif mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-neutral-300 font-bold uppercase tracking-widest mb-6 border-b border-neutral-700 pb-4 inline-block">
                  {member.role}
                </p>
                <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
