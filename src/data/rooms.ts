export type RoomItem = {
  name: string;
  description: string;
  image: string;
};

export type RoomsContent = {
  section: string;
  title: string;
  cta: string;
  rooms: RoomItem[];
};

export const roomsByLanguage: { en: RoomsContent; es: RoomsContent } = {
  en: {
    section: "Rooms",
    title: "Spaces inspired by birds and mountain calm.",
    cta: "Explore Room",
    rooms: [
      {
        name: "Mirla",
        description: "A warm and peaceful space with a direct view of the mountain sunset. Designed for slow rest, listening to the forest, and enjoying NIDU’s natural calm.",
        image: "/images/mirla.jpg",
      },
      {
        name: "Cardenal",
        description: "A bright room open to the landscape, ideal for watching sunset colors across the mountains with coffee and silence. A refuge designed to disconnect from the daily pace.",
        image: "/images/cardenal.png",
      },
      {
        name: "Azulejo",
        description: "NIDU’s most private room. Surrounded by nature and tranquility, it offers an intimate and serene experience for those seeking silence, deep rest, and personal connection with the mountains.",
        image: "/images/azulejo.jpg",
      },
    ],
  },
  es: {
    section: "Habitaciones",
    title: "Espacios inspirados en aves y en la calma de la montaña.",
    cta: "Explorar habitación",
    rooms: [
      {
        name: "Mirla",
        description: "Un espacio cálido y tranquilo con vista directa al atardecer de montaña. Diseñada para descansar lentamente, escuchar el sonido del bosque y disfrutar la calma natural de NIDU.",
        image: "/images/mirla.jpg",
      },
      {
        name: "Cardenal",
        description: "Habitación luminosa y abierta hacia el paisaje, ideal para contemplar los colores del atardecer entre montañas, café y silencio. Un refugio pensado para desconectarse del ritmo cotidiano.",
        image: "/images/cardenal.png",
      },
      {
        name: "Azulejo",
        description: "La habitación más privada de NIDU. Rodeada de naturaleza y tranquilidad, ofrece una experiencia íntima y serena para quienes buscan silencio, descanso profundo y conexión personal con la montaña.",
        image: "/images/azulejo.jpg",
      },
    ],
  },
};