import Image from "next/image";
import { roomsByLanguage } from "../data/rooms";

type RoomsProps = {
  language: "en" | "es";
};

export default function Rooms({ language }: RoomsProps) {
  const t = roomsByLanguage[language];

  return (
    <section id="rooms" className="px-6 py-28" style={{ backgroundColor: "#1d1b1a", color: "var(--nidu-light)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]" style={{ color: "var(--nidu-light-soft)" }}>
          {t.section}
        </p>

        <h2 className="text-4xl font-light md:text-5xl">
          {t.title}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {t.rooms.map((room) => (
            <div
              key={room.name}
              className="overflow-hidden rounded-[2rem] border"
              style={{ borderColor: "rgba(231,229,225,0.15)", backgroundColor: "rgba(231,229,225,0.05)" }}
            >
              <div className="relative h-[300px]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-light">
                  {room.name}
                </h3>

                <p className="mt-4" style={{ color: "var(--nidu-light-soft)" }}>
                  {room.description}
                </p>

                <button className="mt-8 text-sm uppercase tracking-[0.2em]" style={{ color: "var(--nidu-clay-soft)" }}>
                  {t.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
