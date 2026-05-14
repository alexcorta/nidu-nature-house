export type HeroContent = {
  tag: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const heroByLanguage: { en: HeroContent; es: HeroContent } = {
  en: {
    tag: "Nature • Silence • Mountains",
    title: "A hidden retreat designed for rest and reconnection.",
    subtitle: "Immersed in the mountains of Colombia, NIDU Nature House blends slow living, birdwatching and premium nature hospitality.",
    ctaPrimary: "Reserve Your Stay",
    ctaSecondary: "Discover NIDU",
  },
  es: {
    tag: "Naturaleza • Silencio • Montañas",
    title: "Un refugio escondido diseñado para el descanso y la reconexión.",
    subtitle: "Inmersa en las montañas de Colombia, NIDU Nature House combina vida lenta, observación de aves y hospitalidad natural premium.",
    ctaPrimary: "Reserva tu estadía",
    ctaSecondary: "Descubre NIDU",
  },
};