import React from "react";
import { Project } from "../types";
import Cafeteria from "../assets/Cafeteria/Cafeteria_2.jpeg";
import Design from "../assets/Designs/Elevation.jpg";
import Happy_Clients from "../assets/Happy_clients/Happy_clients_6.jpeg";
import Kranthi_reddy_residence from "../assets/Kranthi_reddy_residence/IMG_2840.jpeg";
import Krishna_residence from "../assets/Krishna_residence/IMG_9177.jpg";
import Nandakam from "../assets/Nandakam/IMG_6008.jpg";
import Renuka_nilayam from "../assets/Renuka_nilayam/IMG_0284.jpeg";
import RR_mansion from "../assets/RR_mansion/IMG_4606.jpeg";
import Sri_devi_residence from "../assets/Sri_devi_residence/IMG_1963.jpg";
import Sri_sunitha_nilayam from "../assets/Sri_sunitha_nilayam/IMG_8648.jpg";
import Sudha_nilayam from "../assets/Sudha_nilayam/IMG_9022.jpeg";
import { useNavigate } from "react-router-dom";

const projects: Project[] = [
  {
    id: 1,
    title: "Cafeteria",
    category: "Residential",
    year: "2023",
    image: Cafeteria,
    name: "Cafeteria",
  },
  {
    id: 2,
    title: "Designs",
    category: "Commercial",
    year: "2023",
    image: Design,
    name: "Design",
  },
  {
    id: 3,
    title: "Happy clients",
    category: "Cultural",
    year: "2022",
    image: Happy_Clients,
    name: "Happy_clients",
  },
  {
    id: 4,
    title: "Kranthi Reddy Residence",
    category: "Public",
    year: "2022",
    image: Kranthi_reddy_residence,
    name: "Kranthi_reddy_residence",
  },
  {
    id: 5,
    title: "Krishna Residence",
    category: "Residential",
    year: "2021",
    image: Krishna_residence,
    name: "Krishna_residence",
  },
  {
    id: 6,
    title: "Nandakam",
    category: "Cultural",
    year: "2021",
    image: Nandakam,
    name: "Nandakam",
  },
  {
    id: 7,
    title: "Renuka Nilayam",
    category: "Residential",
    year: "2023",
    image: Renuka_nilayam,
    name: "Renuka_nilayam",
  },
  {
    id: 8,
    title: "R R Mansion",
    category: "Commercial",
    year: "2023",
    image: RR_mansion,
    name: "RR_mansion",
  },
  {
    id: 9,
    title: "Sri Devi Residence",
    category: "Cultural",
    year: "2022",
    image: Sri_devi_residence,
    name: "Sri_devi_residence",
  },
  {
    id: 10,
    title: "Sri Sunitha Nilayam",
    category: "Public",
    year: "2022",
    image: Sri_sunitha_nilayam,
    name: "Sri_sunitha_nilayam",
  },
  {
    id: 11,
    title: "Sudha Nilayam",
    category: "Residential",
    year: "2021",
    image: Sudha_nilayam,
    name: "Sudha_nilayam",
  },
];

export const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const openGallery = (name: string) => {
    navigate(`/gallery/${name}`);
  };
  return (
    <div className="w-full pt-32 px-6 md:px-20 pb-20 min-h-screen bg-black text-white">
      <div className="flex justify-between items-end mb-24 reveal">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase">
          Works.
        </h1>
        {/* <div className="hidden md:flex gap-4 text-sm font-mono uppercase tracking-widest">
          <button className="text-white underline underline-offset-4 decoration-white">
            All
          </button>
          <button className="text-neutral-500 hover:text-white transition-colors">
            Residential
          </button>
          <button className="text-neutral-500 hover:text-white transition-colors">
            Commercial
          </button>
        </div> */}
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`group break-inside-avoid cursor-pointer reveal stagger-${(idx % 3) + 1}`}
            onClick={() => openGallery(project.name)}
          >
            <div className="relative overflow-hidden mb-4 bg-neutral-900">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              {/* Overlay info on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="bg-white text-black px-6 py-3 uppercase tracking-widest text-xs font-bold">
                  View Project
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
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
