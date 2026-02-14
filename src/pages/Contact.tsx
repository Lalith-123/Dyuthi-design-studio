import React, { useState } from "react";
// import { generateDesignConcept } from "../services/geminiService";
import { Sparkles, Send, MapPin, Phone, Mail } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Dyuthi Design Studio translated our vision into a beautifully refined space. The attention to detail and quality of execution truly stood out.",
    client: "Private Client",
    project: "Residential",
  },
];

export const Contact: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [concept, setConcept] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    // const result = await generateDesignConcept(prompt);
    // setConcept(result);
    setLoading(false);
  };

  return (
    <div className="w-full pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: Contact Info & Form */}
        <div className="px-6 md:px-20 pb-20 reveal">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 uppercase text-white">
            Start Here.
          </h1>
          <p className="text-xl font-light mb-16 max-w-md text-neutral-400">
            Let us create a space that reflects your vision, lifestyle, and
            aspirations.
          </p>

          <form
            className="space-y-12 max-w-lg mb-20"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <input
                type="text"
                className="peer w-full border-b border-neutral-700 py-4 outline-none focus:border-white bg-transparent transition-colors placeholder-transparent text-white"
                id="name"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-neutral-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-neutral-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
              >
                YOUR NAME
              </label>
            </div>
            <div className="relative group">
              <input
                type="email"
                className="peer w-full border-b border-neutral-700 py-4 outline-none focus:border-white bg-transparent transition-colors placeholder-transparent text-white"
                id="email"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 text-neutral-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-neutral-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
              >
                EMAIL ADDRESS
              </label>
            </div>
            <div className="relative group">
              <textarea
                rows={1}
                className="peer w-full border-b border-neutral-700 py-4 outline-none focus:border-white bg-transparent transition-colors resize-none placeholder-transparent text-white"
                id="message"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-4 text-neutral-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-neutral-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs"
              >
                TELL US ABOUT YOUR PROJECT
              </label>
            </div>
            <button className="group relative px-8 py-4 bg-white text-black overflow-hidden transition-all hover:bg-gray-200 w-full md:w-auto">
              <span className="relative z-10 text-xs font-bold tracking-[0.2em] uppercase">
                Send Request
              </span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-300/50"></div>
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-800 pt-12">
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <Phone size={16} className="text-neutral-500" />
                <h3 className="text-xs font-bold tracking-widest uppercase text-white">
                  Contact
                </h3>
              </div>
              <p className="font-light text-neutral-400 hover:text-white transition-colors cursor-pointer">
                +91 [Your Number]
              </p>
              <p className="font-light text-neutral-400 hover:text-white transition-colors cursor-pointer">
                hello@dyuthidesign.com
              </p>
            </div>
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={16} className="text-neutral-500" />
                <h3 className="text-xs font-bold tracking-widest uppercase text-white">
                  Studio
                </h3>
              </div>
              <p className="font-light text-neutral-400">
                [Your Office Address]
              </p>
              <p className="font-light text-neutral-400">
                Hyderabad / Bangalore
              </p>
            </div>
          </div>
        </div>

        {/* Right: AI Assistant & Testimonials */}
        <div className="bg-neutral-900 text-white px-6 md:px-20 py-20 flex flex-col justify-between reveal delay-200 border-l border-neutral-800">
          {/* AI Feature */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-6 text-white/90">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-sm font-bold tracking-widest uppercase text-white">
                AI Concept Generator
              </h2>
            </div>
            <p className="text-sm text-neutral-400 mb-8 font-light leading-relaxed max-w-sm">
              Not sure where to begin? Describe your ideal atmosphere, and let
              our AI sketch a verbal concept for you.
            </p>
            <div className="relative mb-8 group">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                placeholder="E.g., A minimalist living room with warm wood and natural light..."
                className="w-full bg-transparent border-b border-neutral-700 py-4 pr-12 outline-none focus:border-white transition-colors placeholder-neutral-600 text-white"
              />
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>

            {loading && (
              <div className="flex space-x-2 my-8">
                <div className="h-1 w-1 bg-white rounded-full animate-bounce"></div>
                <div className="h-1 w-1 bg-white rounded-full animate-bounce delay-100"></div>
                <div className="h-1 w-1 bg-white rounded-full animate-bounce delay-200"></div>
              </div>
            )}

            {concept && (
              <div className="bg-white/5 p-8 border-l border-white/20 animate-fade-in backdrop-blur-sm">
                <p className="font-serif italic text-lg leading-relaxed text-neutral-200">
                  "{concept}"
                </p>
              </div>
            )}
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase mb-8 text-neutral-500">
              What Clients Say
            </h2>
            <div className="space-y-8">
              {testimonials.map((t) => (
                <div key={t.id} className="group cursor-default">
                  <p className="font-light text-2xl mb-6 text-neutral-200 leading-snug group-hover:text-white transition-colors">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-neutral-600 group-hover:w-12 transition-all"></div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400">
                      {t.client}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
