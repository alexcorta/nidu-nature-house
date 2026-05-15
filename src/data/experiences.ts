export type ActivityCategory = "coffee" | "nature" | "culture" | "adventure" | "wellness";

export type Activity = {
  title: string;
  url: string;
  summary: string;
  duration: string;
  schedule: string;
  price: string;
  includes: string;
  reservation: string;
  contact: string;
  notes: string;
  category: ActivityCategory;
};

export type ExperienceContent = {
  section: string;
  title: string;
  paragraphs: string[];
  haciendaTitle: string;
  nearbyTitle: string;
  reserveLabel: string;
  hacienda: Activity[];
  nearby: Activity[];
};

const allActivities: { hacienda: Activity[]; nearby: Activity[] } = {
  hacienda: [
    { category: "coffee", title: "Tour de Café", url: "https://haciendavenecia.com/es/tour-de-cafe/", summary: "Experiencia del grano a la taza: historia, cultivo, procesamiento y degustación de café.", duration: "No visible", schedule: "No visible", price: "No visible", includes: "Taza inicial, recorrido de cafetales, análisis de grano y degustación", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Recomendado usar sombrero/protector solar y zapatos cómodos" },
    { category: "coffee", title: "Tour de Café con Aroma de Mujer", url: "https://haciendavenecia.com/es/tour-de-cafe-con-aroma-de-mujer/", summary: "Tour de café más visita a locaciones de grabación de la novela.", duration: "2 h 30 min aprox", schedule: "9:45 AM y 2:00 PM", price: "COP 165.000 adulto / COP 120.000 menor (sin IVA residentes)", includes: "Tour de café y recorrido por locaciones", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Primero se realiza el tour de café y luego locaciones" },
    { category: "coffee", title: "Catación de Café", url: "https://haciendavenecia.com/es/catacion-de-cafe/", summary: "Taller sensorial avanzado sobre perfiles, aromas y sabores.", duration: "2 h 30 min aprox", schedule: "2:00 PM", price: "COP 210.000 por persona (+ IVA residentes)", includes: "No visible", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Idiomas: inglés o español" },
    { category: "coffee", title: "Barismo", url: "https://haciendavenecia.com/es/barismo/", summary: "Métodos de preparación y variables técnicas para una taza de alta calidad.", duration: "2 h 30 min aprox", schedule: "10:00 AM y 2:30 PM", price: "COP 110.000 por persona", includes: "No visible", reservation: "Disponible", contact: "+57 320 636 5719", notes: "No incluye IVA del 19% para residentes" },
    { category: "culture", title: "Taller Artesanal de Chocolate", url: "https://haciendavenecia.com/es/taller-artesanal-de-chocolate/", summary: "Proceso del cacao al chocolate: tostar, moler y crear barra personalizada.", duration: "1 h 30 min aprox", schedule: "8:20 AM y 2:30 PM", price: "COP 110.000 adulto / COP 70.000 menor de 12 (+ IVA residentes)", includes: "Prueba de cacao, tostado y molienda en taller", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Idiomas: inglés o español" },
    { category: "nature", title: "Avistamiento de Aves", url: "https://haciendavenecia.com/es/avistamiento-de-aves/", summary: "Ruta de observación para principiantes en zona de alta biodiversidad.", duration: "No visible", schedule: "Autoguiado 6:00 AM-5:00 PM / Guiado L-V 6:30 AM-8:00 AM", price: "Autoguiado sin costo / Guiado COP 85.000", includes: "Binoculares, lista de verificación y mapa (según modalidad)", reservation: "Para guía especializado", contact: "+57 320 636 5719", notes: "Página indica enfoque para huéspedes" },
    { category: "culture", title: "Experiencia Artesanal de Ron", url: "https://haciendavenecia.com/es/experiencia-artesanal-de-fabricacion-de-ron/", summary: "Fermentación, destilación artesanal y añejamiento con degustación.", duration: "1 h 30 min aprox", schedule: "No visible", price: "COP 110.000 por persona (+ IVA residentes)", includes: "Proceso completo y degustación", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Idiomas: inglés o español" },
    { category: "culture", title: "Experiencia de Plátano", url: "https://haciendavenecia.com/es/experiencia-de-platano/", summary: "Taller culinario para preparar plátano en distintas técnicas con degustación.", duration: "1 h 30 min aprox", schedule: "3:30 PM", price: "COP 110.000 por persona (mínimo 2 personas)", includes: "No visible", reservation: "Disponible", contact: "+57 320 636 5719", notes: "No incluye IVA del 19% para residentes" },
    { category: "adventure", title: "Senderismo", url: "https://haciendavenecia.com/es/senderismo/", summary: "Rutas en montaña y cafetales con diferentes niveles de dificultad.", duration: "No visible", schedule: "Inicio en la mañana; retorno temprano", price: "COP 110.000 por persona / sin costo para huéspedes", includes: "No visible", reservation: "Consultar en recepción", contact: "+57 320 636 5719", notes: "Recomendado hidratación, ropa cómoda y app Avenza Maps" },
  ],
  nearby: [
    { category: "adventure", title: "Parque Nacional Los Nevados - Nevado del Ruiz", url: "https://haciendavenecia.com/es/parque-nacional-los-nevados-nevado-del-ruiz/", summary: "Ascenso de alta montaña y ecosistema páramo con opción de termales.", duration: "10 horas aprox", schedule: "8:00 AM", price: "No visible", includes: "Transporte, guía, seguro, entradas a parque y termales", reservation: "Reserva previa", contact: "+57 320 636 5719", notes: "Restricciones para ciertas condiciones físicas" },
    { category: "nature", title: "Salento y Valle del Cocora", url: "https://haciendavenecia.com/es/salento-y-valle-del-cocora/", summary: "Full day entre pueblo patrimonial y caminata en valle de palma de cera.", duration: "9 horas aprox", schedule: "8:00 AM", price: "Contactar para precio", includes: "Transporte, guía, seguro y entradas de caminata", reservation: "Reserva previa", contact: "+57 320 636 5719", notes: "Llevar chaqueta y protección solar" },
    { category: "culture", title: "Salamina City Tour", url: "https://haciendavenecia.com/es/salamina-city-tour-espanol/", summary: "Recorrido cultural por arquitectura patrimonial y calles tradicionales.", duration: "8 horas aprox", schedule: "8:00 AM", price: "Contactar para precio", includes: "Transporte, guianza y seguro", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Idioma: inglés o español" },
    { category: "culture", title: "Manizales City Tour", url: "https://haciendavenecia.com/es/manizales-city-tour/", summary: "Tour urbano por Chipre, catedral, plaza y cable aéreo.", duration: "4 horas aprox", schedule: "3:00 PM", price: "Contactar para precio", includes: "Transporte, guía, seguro y entradas del corredor polaco", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Salida desde zona de Hacienda Venecia" },
    { category: "nature", title: "Tour de Orquídeas - Finca Romelia", url: "https://haciendavenecia.com/es/tour-de-orquideas-finca-romelia/", summary: "Visita a vivero con cientos de especies de orquídeas y aves.", duration: "4 horas aprox", schedule: "8:00 AM o 2:00 PM", price: "No visible", includes: "Transporte, guía, seguro y entradas", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Idioma: inglés o español" },
    { category: "wellness", title: "Aguas Termales", url: "https://haciendavenecia.com/es/aguas-termales/", summary: "Opciones de termales naturales en la región para bienestar físico y mental.", duration: "No visible", schedule: "No visible", price: "No visible", includes: "Transporte ida y vuelta", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Se muestran varias opciones de termales cercanos" },
    { category: "nature", title: "Owl's Watch Ecolodge", url: "https://haciendavenecia.com/owls-watch-ecolodge/", summary: "Ecolodge en reserva con senderismo y observación de aves.", duration: "4 horas aprox", schedule: "6:00 AM", price: "Contactar para precio", includes: "Transporte, guía especializada, seguro y entradas", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Más de 500 especies reportadas en la zona" },
    { category: "nature", title: "Reserva Natural de Aves Tinamú", url: "https://haciendavenecia.com/es/reserva-natural-de-aves-tinamu/", summary: "Reserva de observación con senderos guiados y alto registro de especies.", duration: "4 horas aprox", schedule: "6:00 AM", price: "No visible", includes: "Transporte, guía especializada, seguro y entradas", reservation: "Contactar", contact: "+57 320 636 5719", notes: "Idioma: inglés o español" },
    { category: "nature", title: "Río Blanco Reserva Natural", url: "https://haciendavenecia.com/es/rio-blanco-avistamiento-de-aves/", summary: "Sitio clave de biodiversidad para aves endémicas y semi-endémicas.", duration: "6 horas aprox", schedule: "6:00 AM", price: "No visible", includes: "Transporte, guía especializada, seguro y entradas", reservation: "Disponible", contact: "+57 320 636 5719", notes: "Recorrido por puntos de observación dentro de la reserva" },
    { category: "adventure", title: "Aventura en Los Andes en motos BMW", url: "https://haciendavenecia.com/es/experiencia-en-motos/", summary: "Mototurismo guiado con rutas de alta montaña y paisaje cultural cafetero.", duration: "8 a 9.5 horas", schedule: "Inicio 7:30 AM-8:30 AM según ruta", price: "Desde USD 220 hasta USD 280 según ruta", includes: "Moto BMW, equipo, gasolina, guía bilingüe, seguro y snack", reservation: "Disponible 24 horas antes", contact: "+57 320 636 5719", notes: "Requiere licencia vigente y experiencia previa; política de 24h para reembolso" },
    { category: "adventure", title: "Experiencia Cafetera en Bicicleta", url: "https://haciendavenecia.com/es/experiencia-cafetera-en-bicicleta/", summary: "Ruta guiada en bicicleta por paisaje cafetero con vehículo de apoyo.", duration: "4.5 horas", schedule: "Inicio 7:30 AM", price: "Precio variable por tamaño de grupo (COP)", includes: "Bicicleta/E-bike, casco, kit, guía, seguro, snack y souvenir", reservation: "Reserva mínima con 24 horas", contact: "+57 320 636 5719", notes: "Posibilidad de continuar con lluvia salvo tormenta eléctrica" },
  ],
};

export const experiencesData: { en: ExperienceContent; es: ExperienceContent } = {
  es: {
    section: "Sobre NIDU",
    title: "Experiencias curadas por NIDU con información pública de operadores de la región.",
    paragraphs: [
      "NIDU actúa como curador de experiencias: algunas pueden ser propias y otras operadas por aliados locales.",
      "A continuación verás actividades en Hacienda Venecia y actividades cercanas, con datos públicos visibles como duración, horarios, precio y contacto de reserva.",
      "Para reservar, puedes usar el contacto directo del operador aliado y NIDU puede ayudarte con la coordinación.",
    ],
    haciendaTitle: "Actividades en la Hacienda",
    nearbyTitle: "Actividades cercanas",
    reserveLabel: "Reservar por WhatsApp",
    hacienda: allActivities.hacienda,
    nearby: allActivities.nearby,
  },
  en: {
    section: "About NIDU",
    title: "Curated experiences by NIDU using publicly visible information from local operators.",
    paragraphs: [
      "NIDU acts as a curator: some experiences may be in-house and others are operated by selected local partners.",
      "Below you can browse Hacienda Venecia activities and nearby experiences with visible public details.",
      "For reservations, you can contact the operator directly and NIDU can support coordination.",
    ],
    haciendaTitle: "Activities at the Hacienda",
    nearbyTitle: "Nearby activities",
    reserveLabel: "Book via WhatsApp",
    hacienda: allActivities.hacienda,
    nearby: allActivities.nearby,
  },
};