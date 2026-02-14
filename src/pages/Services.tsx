import React from "react";
import { Plus } from "lucide-react";

const services = [
  {
    title: "Architecture",
    description:
      "Bespoke residential and commercial architecture. Concept design, master planning, detailed working drawings, statutory approvals, elevation and façade design.",
  },
  {
    title: "Interior Design",
    description:
      "Luxury residential and premium commercial interiors. Custom-designed kitchens, wardrobes, and furniture. Material, lighting, and finish curation.",
  },
  {
    title: "Civil Execution",
    description:
      "High-quality construction services with dedicated site supervision, superior craftsmanship, and detailing.",
  },
  {
    title: "Turnkey Solutions",
    description:
      "Complete design-to-execution delivery. Single point of accountability ensuring timely and seamless project completion.",
  },
  {
    title: "Renovation",
    description:
      "Luxury home transformations, interior refurbishments, space enhancement, and reconfiguration.",
  },
  {
    title: "3D Visualization",
    description:
      "High-end interior renders, architectural visualizations, and walkthrough experiences.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    desc: "Understanding lifestyle, aspirations, and project vision.",
  },
  {
    number: "02",
    title: "Concept",
    desc: "Spatial narratives, layouts, and overall design direction.",
  },
  {
    number: "03",
    title: "Refinement",
    desc: "Detailed drawings, curated material palettes, and approvals.",
  },
  {
    number: "04",
    title: "Execution",
    desc: "Quality-driven site execution with close coordination.",
  },
  {
    number: "05",
    title: "Handover",
    desc: "A finished space delivered with precision and care.",
  },
];

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-32">
      <section className="px-6 md:px-20 mb-32 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-24 reveal text-white">
          EXPERTISE.
        </h1>

        <div className="flex flex-col border-t border-neutral-800 reveal stagger-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-b border-neutral-800 py-12 hover:bg-white hover:text-black transition-colors duration-500 px-4 md:px-8 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex items-center gap-8">
                <span className="text-xs font-mono text-neutral-600 group-hover:text-black/50 transition-colors">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h2 className="text-3xl md:text-5xl font-light group-hover:translate-x-4 transition-transform duration-500">
                  {service.title}
                </h2>
              </div>
              <div className="mt-4 md:mt-0 md:max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-sm font-light leading-relaxed text-neutral-400 group-hover:text-neutral-600">
                  {service.description}
                </p>
              </div>
              <Plus className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 py-32 px-6 md:px-20 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-24 items-end">
            <h2 className="text-4xl font-serif text-white">The Process</h2>
            <p className="max-w-md text-neutral-400 mt-4 md:mt-0">
              A rigorous methodology ensuring design excellence and peace of
              mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-black border border-neutral-800 hover:bg-white hover:text-black transition-colors duration-500 group h-full flex flex-col justify-between"
              >
                <span className="text-6xl font-black text-neutral-800 group-hover:text-neutral-200 transition-colors absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="mt-12 relative z-10">
                  <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                  <p className="text-sm text-neutral-500 group-hover:text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
