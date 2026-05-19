"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  altEs: string;
  altEn: string;
  captionEs: string;
  captionEn: string;
  span?: "wide" | "tall" | "normal";
};

const items: GalleryItem[] = [
  {
    src: "/images/gallery/vista_1.png",
    altEs: "Atardecer sobre el Valle del Eje Cafetero",
    altEn: "Sunset over the Coffee Region valley",
    captionEs: "El Eje Cafetero regala este espectáculo cada tarde desde NIDU.",
    captionEn: "The Coffee Region gifts this spectacle every evening from NIDU.",
    span: "wide",
  },
  {
    src: "/images/gallery/fachada_casa.png",
    altEs: "Fachada de NIDU Nature House",
    altEn: "NIDU Nature House facade",
    captionEs: "Arquitectura contemporánea que abraza la selva cafetera.",
    captionEn: "Contemporary architecture embracing the coffee jungle.",
    span: "tall",
  },
  {
    src: "/images/gallery/salon_ppal.png",
    altEs: "Salón principal al caer la noche",
    altEn: "Main living room at nightfall",
    captionEs: "Hamaca, madera y arte local para un descanso auténtico.",
    captionEn: "Hammock, wood, and local art for authentic rest.",
  },
  {
    src: "/images/gallery/terraza_1.png",
    altEs: "Terraza con vista a los cerros",
    altEn: "Terrace overlooking the hills",
    captionEs: "Siéntate y deja que el paisaje de montaña lo diga todo.",
    captionEn: "Sit back and let the mountain landscape speak for itself.",
  },
  {
    src: "/images/gallery/terraza_jacuzzi.png",
    altEs: "Jardín y zona de jacuzzi",
    altEn: "Garden and jacuzzi area",
    captionEs: "Espacio exterior íntimo rodeado de vegetación viva.",
    captionEn: "Intimate outdoor space surrounded by living vegetation.",
  },
  {
    src: "/images/gallery/vista_balcon.png",
    altEs: "Vista desde el balcón a los jardines",
    altEn: "Balcony view over the gardens",
    captionEs: "Los jardines escalonados descienden hacia el paisaje cafetero.",
    captionEn: "Terraced gardens descend toward the coffee landscape below.",
  },
  {
    src: "/images/gallery/casa_montana.png",
    altEs: "NIDU entre los cafetales",
    altEn: "NIDU among the coffee fields",
    captionEs: "La casa se integra al verde del Eje Cafetero.",
    captionEn: "The house blends into the lush Coffee Region landscape.",
    span: "wide",
  },
  {
    src: "/images/gallery/aves_naturaleza.png",
    altEs: "Aves tropicales en el jardín",
    altEn: "Tropical birds in the garden",
    captionEs: "La biodiversidad del Eje Cafetero llega hasta tu ventana.",
    captionEn: "The region's biodiversity reaches right to your window.",
  },
  {
    src: "/images/gallery/bicicleta.png",
    altEs: "Bicicleta vintage en la sala",
    altEn: "Vintage bicycle in the living area",
    captionEs: "Cada rincón de NIDU cuenta una historia propia.",
    captionEn: "Every corner of NIDU tells its own story.",
  },
  {
    src: "/images/gallery/fachada_noche.png",
    altEs: "Fachada de NIDU iluminada de noche",
    altEn: "NIDU facade lit up at night",
    captionEs: "La noche transforma la casa en un refugio de luz cálida.",
    captionEn: "Night transforms the house into a refuge of warm light.",
    span: "wide",
  },
  {
    src: "/images/gallery/comedor_salon.png",
    altEs: "Comedor y salón integrados",
    altEn: "Integrated dining and living room",
    captionEs: "Espacios abiertos para compartir momentos únicos.",
    captionEn: "Open spaces to share unforgettable moments.",
  },
  {
    src: "/images/gallery/sala.png",
    altEs: "Sala de estar de NIDU",
    altEn: "NIDU living room",
    captionEs: "Un espacio diseñado para el descanso y la conversación.",
    captionEn: "A space designed for rest and good conversation.",
  },
  {
    src: "/images/gallery/frente.png",
    altEs: "Vista frontal de NIDU Nature House",
    altEn: "Front view of NIDU Nature House",
    captionEs: "La bienvenida comienza desde la entrada.",
    captionEn: "The welcome begins from the entrance.",
  },
  {
    src: "/images/gallery/atardecer.png",
    altEs: "Atardecer desde NIDU",
    altEn: "Sunset from NIDU",
    captionEs: "El cielo del Eje Cafetero pinta colores únicos cada tarde.",
    captionEn: "The Coffee Region sky paints unique colors every evening.",
    span: "wide",
  },
  {
    src: "/images/gallery/atardecer2.png",
    altEs: "Segundo atardecer desde los cerros",
    altEn: "Another sunset from the hills",
    captionEs: "Dos atardeceres iguales no existen en NIDU.",
    captionEn: "No two sunsets are alike at NIDU.",
  },
  {
    src: "/images/gallery/v.fachada_lateral.png",
    altEs: "Vista lateral de la fachada",
    altEn: "Lateral view of the facade",
    captionEs: "La arquitectura de NIDU se revela desde todos los ángulos.",
    captionEn: "NIDU's architecture reveals itself from every angle.",
  },
  {
    src: "/images/gallery/v_paneles.jpeg",
    altEs: "Paneles solares y azotea",
    altEn: "Solar panels and rooftop",
    captionEs: "Energía limpia para una experiencia sostenible.",
    captionEn: "Clean energy for a sustainable experience.",
  },
  {
    src: "/images/gallery/v_trasera_1.png",
    altEs: "Vista trasera de NIDU entre la vegetación",
    altEn: "Rear view of NIDU amid the vegetation",
    captionEs: "La naturaleza rodea cada fachada de la casa.",
    captionEn: "Nature surrounds every side of the house.",
  },
];

type GalleryProps = {
  language: "en" | "es";
};

export default function Gallery({ language }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 py-28" style={{ backgroundColor: "#161514", color: "var(--nidu-light)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]" style={{ color: "var(--nidu-light-soft)" }}>
          {language === "es" ? "Galería" : "Gallery"}
        </p>
        <h2 className="mb-12 max-w-xl text-4xl font-light leading-tight md:text-5xl">
          {language === "es" ? "Un vistazo a NIDU Nature House." : "A glimpse of NIDU Nature House."}
        </h2>

        {/* Masonry-style grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "220px",
          }}
        >
          {items.map((item, i) => (
            <button
              key={item.src}
              className="relative overflow-hidden rounded-xl focus:outline-none group"
              style={{
                gridColumn: item.span === "wide" ? "span 2" : "span 1",
                gridRow: item.span === "tall" ? "span 2" : "span 1",
              }}
              onClick={() => setActive(i)}
              aria-label={language === "es" ? item.altEs : item.altEn}
            >
              <Image
                src={item.src}
                alt={language === "es" ? item.altEs : item.altEn}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }}>
                <div className="text-left">
                  <p className="text-sm font-medium text-white leading-snug">
                    {language === "es" ? item.altEs : item.altEn}
                  </p>
                  <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {language === "es" ? item.captionEs : item.captionEn}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setActive(null)}
        >
          <div className="relative max-h-[90vh] max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
              <Image
                src={items[active].src}
                alt={language === "es" ? items[active].altEs : items[active].altEn}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-base font-light text-white">
                {language === "es" ? items[active].altEs : items[active].altEn}
              </p>
              <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {language === "es" ? items[active].captionEs : items[active].captionEn}
              </p>
            </div>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:opacity-70 transition-opacity"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <button
              onClick={() => setActive((active - 1 + items.length) % items.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:opacity-70 px-3"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={() => setActive((active + 1) % items.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:opacity-70 px-3"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
