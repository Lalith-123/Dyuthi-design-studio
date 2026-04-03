import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { images } from "./images";

export interface GalleryImage {
  id: string | number;
  url: string;
  thumbnail: string;
  title: string;
}

export default function Gallery() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Build galleryImages from the images map using the route param
  const key = name as keyof typeof images;
  const rawImages = images[key] ?? [];

  const galleryImages: GalleryImage[] = rawImages.map((url, i) => ({
    id: i,
    url,
    thumbnail: url,
    title: `${name} ${i + 1}`,
  }));

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev! - 1,
      );
    }
  }, [selectedIndex, galleryImages.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev! + 1,
      );
    }
  }, [selectedIndex, galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // If the name param doesn't match any key, show a not found state
  if (!name || !images[key]) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <p className="text-2xl font-bold uppercase tracking-widest">
          Gallery not found
        </p>
        <button
          onClick={() => navigate(-1)}
          className="text-zinc-400 hover:text-white uppercase tracking-widest text-sm underline underline-offset-4"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-md p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between reveal">
          {/* Back button */}
          {/* <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm"
          >
            <ChevronLeft size={18} />
            Back
          </button> */}

          <h1 className="text-2xl md:text-5xl font-bold tracking-tighter uppercase">
            {name.replace(/_/g, " ")}
          </h1>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto p-6 reveal">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className={`break-inside-avoid relative group cursor-pointer overflow-hidden bg-zinc-900 rounded-sm reveal stagger-${(index % 3) + 1}`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.thumbnail}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-black p-4 rounded-full shadow-2xl">
                  <Maximize2 size={24} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 text-zinc-400 hover:text-white transition-colors bg-black/50 hover:bg-white/10 rounded-full backdrop-blur-sm"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-8 z-50 p-4 text-zinc-400 hover:text-white transition-colors bg-black/50 hover:bg-white/10 rounded-full backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-8 z-50 p-4 text-zinc-400 hover:text-white transition-colors bg-black/50 hover:bg-white/10 rounded-full backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full h-full flex items-center justify-center p-4 md:p-16"
              onClick={closeLightbox}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={galleryImages[selectedIndex].url}
                  alt={galleryImages[selectedIndex].title}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>

              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 tracking-widest text-sm font-mono bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
