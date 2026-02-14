import React from "react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "Mono Residence",
    category: "Residential",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Aesop Store",
    category: "Commercial",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1595558013260-530475b7318b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Void Museum",
    category: "Cultural",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1518005052357-e98719aabdff?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Concrete Pavilion",
    category: "Public",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "White Tower",
    category: "Residential",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Library of Light",
    category: "Cultural",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=1000&auto=format&fit=crop",
  },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="w-full pt-32 px-6 md:px-20 pb-20 min-h-screen bg-black text-white">
      <div className="flex justify-between items-end mb-24 reveal">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase">
          Works.
        </h1>
        <div className="hidden md:flex gap-4 text-sm font-mono uppercase tracking-widest">
          <button className="text-white underline underline-offset-4 decoration-white">
            All
          </button>
          <button className="text-neutral-500 hover:text-white transition-colors">
            Residential
          </button>
          <button className="text-neutral-500 hover:text-white transition-colors">
            Commercial
          </button>
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`group break-inside-avoid cursor-pointer reveal stagger-${(idx % 3) + 1}`}
          >
            <div className="relative overflow-hidden mb-4 bg-neutral-900">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              {/* Overlay info on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="bg-white text-black px-6 py-3 uppercase tracking-widest text-xs font-bold">
                  View Project
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div className="flex justify-between items-baseline border-b border-neutral-800 pb-2 group-hover:border-white transition-colors duration-500">
              <h3 className="text-lg font-medium group-hover:translate-x-2 transition-transform">
                {project.title}
              </h3>
              <span className="text-xs text-neutral-500 font-mono">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-neutral-400 mt-1 uppercase tracking-wider text-xs">
              {project.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
