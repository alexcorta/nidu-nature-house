"use client";

import { useState } from "react";
import { experiencesData } from "../data/experiences";
import type { ActivityCategory } from "../data/experiences";

type ExperienceProps = {
  language: "en" | "es";
};

const categoryMeta: Record<ActivityCategory, { label: string; labelEs: string; gradient: string; icon: string }> = {
  coffee:    { label: "Coffee",    labelEs: "Café",       gradient: "from-amber-900 to-yellow-800",   icon: "☕" },
  nature:    { label: "Nature",    labelEs: "Naturaleza", gradient: "from-green-900 to-emerald-700",  icon: "🌿" },
  culture:   { label: "Culture",   labelEs: "Cultura",    gradient: "from-rose-900 to-orange-700",    icon: "🏺" },
  adventure: { label: "Adventure", labelEs: "Aventura",   gradient: "from-slate-800 to-stone-700",    icon: "🏔️" },
  wellness:  { label: "Wellness",  labelEs: "Bienestar",  gradient: "from-teal-900 to-cyan-800",      icon: "♨️" },
};

export default function Experience({ language }: ExperienceProps) {
  const data = language === "es" ? experiencesData.es : experiencesData.en;
  const waBase = "https://wa.me/573206365719?text=";
  const [expanded, setExpanded] = useState<string | null>(null);
  const all = [...data.hacienda, ...data.nearby];

  return (
    <section id="experiences" className="px-6 py-28" style={{ backgroundColor: "#221f1d", color: "var(--nidu-light)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]" style={{ color: "var(--nidu-light-soft)" }}>{data.section}</p>
        <h2 className="max-w-3xl text-4xl font-light leading-tight md:text-5xl">{data.title}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--nidu-light-soft)" }}>{data.paragraphs[0]}</p>

        <h3 className="mt-16 text-2xl font-light md:text-3xl">{data.nearbyTitle}</h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((activity) => {
            const meta = categoryMeta[activity.category];
            const isOpen = expanded === activity.title;
            const catLabel = language === "es" ? meta.labelEs : meta.label;

            return (
              <article
                key={activity.title}
                className="flex flex-col overflow-hidden rounded-2xl"
                style={{ backgroundColor: "rgba(231,229,225,0.04)", border: "1px solid rgba(231,229,225,0.10)" }}
              >
                {/* Visual header */}
                <div className={`relative flex items-end bg-gradient-to-br ${meta.gradient} p-6 h-36`}>
                  <span className="absolute top-4 right-4 text-2xl">{meta.icon}</span>
                  <div>
                    <span className="inline-block rounded-full px-2.5 py-0.5 text-xs uppercase tracking-widest mb-2"
                      style={{ backgroundColor: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.75)" }}>
                      {catLabel}
                    </span>
                    <h4 className="text-lg font-light leading-snug text-white">{activity.title}</h4>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 gap-3">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--nidu-light-soft)" }}>{activity.summary}</p>

                  <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--nidu-light-soft)" }}>
                    {activity.duration !== "No visible" && (
                      <span><span style={{ color: "#bc6a48" }}>⏱</span> {activity.duration}</span>
                    )}
                    {activity.price !== "No visible" && (
                      <span><span style={{ color: "#bc6a48" }}>💰</span> {activity.price}</span>
                    )}
                  </div>

                  {isOpen && (
                    <div className="mt-1 space-y-1 text-xs" style={{ color: "var(--nidu-light-soft)" }}>
                      {activity.schedule !== "No visible" && <p><span style={{ color: "#bc6a48" }}>Horario: </span>{activity.schedule}</p>}
                      {activity.includes !== "No visible" && <p><span style={{ color: "#bc6a48" }}>Incluye: </span>{activity.includes}</p>}
                      {activity.notes !== "No visible" && <p><span style={{ color: "#bc6a48" }}>Notas: </span>{activity.notes}</p>}
                    </div>
                  )}

                  <button
                    onClick={() => setExpanded(isOpen ? null : activity.title)}
                    className="mt-1 text-xs text-left underline-offset-2"
                    style={{ color: "rgba(231,229,225,0.45)" }}
                  >
                    {isOpen
                      ? (language === "es" ? "Ver menos" : "Show less")
                      : (language === "es" ? "Ver detalles" : "See details")}
                  </button>

                  <div className="mt-auto pt-3 flex gap-2">
                    <a
                      href={activity.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border py-2 text-center text-xs transition hover:bg-white/5"
                      style={{ borderColor: "rgba(231,229,225,0.25)", color: "var(--nidu-light)" }}
                    >
                      {language === "es" ? "Ver fuente" : "View source"}
                    </a>
                    <a
                      href={`${waBase}${encodeURIComponent(activity.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full py-2 text-center text-xs text-white transition hover:opacity-90"
                      style={{ backgroundColor: "var(--nidu-clay)" }}
                    >
                      {data.reserveLabel}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
