import { experiencesData } from "../data/experiences";

type ExperienceProps = {
  language: "en" | "es";
};

export default function Experience({ language }: ExperienceProps) {
  const data = language === "es" ? experiencesData.es : experiencesData.en;
  const waBase = "https://wa.me/573206365719?text=";

  return (
    <section id="experiences" className="px-6 py-28" style={{ backgroundColor: "#221f1d", color: "var(--nidu-light)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]" style={{ color: "var(--nidu-light-soft)" }}>{data.section}</p>
        <h2 className="max-w-4xl text-4xl font-light leading-tight md:text-5xl">{data.title}</h2>
        <div className="mt-10 max-w-4xl space-y-6 text-lg leading-relaxed" style={{ color: "var(--nidu-light-soft)" }}>
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h3 className="mt-16 text-2xl font-light md:text-3xl">{data.nearbyTitle}</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[...data.hacienda, ...data.nearby].map((activity) => (
            <article key={activity.title} className="rounded-3xl border p-7" style={{ borderColor: "rgba(231,229,225,0.14)", backgroundColor: "rgba(231,229,225,0.04)" }}>
              <h4 className="text-2xl font-light">{activity.title}</h4>
              <p className="mt-3" style={{ color: "var(--nidu-light-soft)" }}>{activity.summary}</p>
              <div className="mt-5 space-y-2 text-sm" style={{ color: "var(--nidu-light-soft)" }}>
                <p><span style={{ color: "#bc6a48" }}>Duración:</span> {activity.duration}</p>
                <p><span style={{ color: "#bc6a48" }}>Horario:</span> {activity.schedule}</p>
                <p><span style={{ color: "#bc6a48" }}>Precio:</span> {activity.price}</p>
                <p><span style={{ color: "#bc6a48" }}>Incluye:</span> {activity.includes}</p>
                <p><span style={{ color: "#bc6a48" }}>Reserva:</span> {activity.reservation}</p>
                <p><span style={{ color: "#bc6a48" }}>Contacto:</span> {activity.contact}</p>
                <p><span style={{ color: "#bc6a48" }}>Notas:</span> {activity.notes}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={activity.url} target="_blank" className="rounded-full border px-4 py-2 text-sm transition" style={{ borderColor: "rgba(231,229,225,0.4)", color: "var(--nidu-light)" }}>Ver fuente</a>
                <a href={`${waBase}${encodeURIComponent(activity.title)}`} target="_blank" className="rounded-full px-4 py-2 text-sm text-white transition" style={{ backgroundColor: "var(--nidu-clay)" }}>{data.reserveLabel}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
