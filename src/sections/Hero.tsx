import { heroByLanguage } from "../data/hero";

type HeroProps = {
  language: "en" | "es";
};

export default function Hero({ language }: HeroProps) {
  const t = heroByLanguage[language];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-5xl px-6 text-center" style={{ color: "var(--nidu-light)" }}>
        <p className="mb-6 text-sm uppercase tracking-[0.4em]" style={{ color: "var(--nidu-light-soft)" }}>
          {t.tag}
        </p>

        <h1 className="text-5xl font-light leading-tight md:text-7xl">
          {t.title}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg" style={{ color: "var(--nidu-light-soft)" }}>
          {t.subtitle}
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#rooms" className="rounded-full px-8 py-4 text-sm font-medium text-white transition" style={{ backgroundColor: "var(--nidu-clay)" }}>
            {t.ctaPrimary}
          </a>

          <a href="#experiences" className="rounded-full border px-8 py-4 text-sm transition" style={{ borderColor: "var(--nidu-light-soft)", color: "var(--nidu-light)" }}>
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
