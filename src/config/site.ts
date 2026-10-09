// Edite aqui todos os textos variáveis, números de WhatsApp, @ e fotos.
export const META_PIXEL_ID = "SEU_PIXEL_ID";
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site e quero fazer um pedido";
export const INSTAGRAM_URL = "https://www.instagram.com/cereallinaturalmarket";
export const VIDEO_EMBED_URL = ""; // ex.: "https://www.youtube.com/embed/ID?autoplay=1"

export const stores = [
  { id: "alphaville", name: "Alphaville", address: "Shopping Flamingo", instagram: "cerealli_alphaville", whatsapp: "55XXXXXXXXXXX" },
  { id: "granja-viana", name: "Granja Viana", address: "The Square Open Mall", instagram: "cerealli_granjaviana", whatsapp: "55XXXXXXXXXXX" },
  { id: "vila-leopoldina", name: "Vila Leopoldina", address: "Rua Carlos Weber, 375", instagram: "cerealli_vilaleopoldina", whatsapp: "55XXXXXXXXXXX" },
  { id: "chacara-klabin", name: "Chácara Klabin", address: "COMVEM Chácara Klabin", instagram: "cerealli_klabin", whatsapp: "55XXXXXXXXXXX" },
];

export const placeholders = {
  prazoArea: "[prazo e área de entrega]",
  pagamento: "[formas de pagamento]",
  areaPorLoja: "[área de entrega por loja]",
  prazo: "[prazo de entrega]",
};

export const fotos = {
  hero: "/fotos/hero-castanhas.webp",
  loja: "/fotos/loja-interior.webp",
  inspecao: "/fotos/inspecao-castanhas.webp",
  potes: "/fotos/potes-granel.webp",
  consultora: "/fotos/consultora-atendimento.webp",
  treina: "/fotos/para-quem-treina.webp",
  familia: "/fotos/para-familia.webp",
  longevidade: "/fotos/para-longevidade.webp",
  suplementacao: "/fotos/suplementacao.webp",
  mercado: "/fotos/mercado-snacks.webp",
  delivery: "/fotos/delivery-porta.webp",
  celular: "/fotos/pedido-celular.webp",
  folha: "/fotos/folha.webp",
};

export const partners = [
  { name: "Pura Vida", src: "/logos/pura-vida.svg" },
  { name: "Essential Nutrition", src: "/logos/essential-nutrition.png", tall: true },
  { name: "Pacco", src: "/logos/pacco.webp" },
  { name: "Super Coffee", src: "/logos/super-coffee.png", tall: true },
  { name: "Optimum Nutrition", src: "/logos/optimum-nutrition.svg" },
  { name: "Bold", src: "/logos/bold.png" },
  { name: "True Source", src: "/logos/true-source.svg" },
];

export const testimonials = [
  { text: "[depoimento]", name: "[nome]", store: "[loja]", avatar: fotos.consultora },
  { text: "[depoimento]", name: "[nome]", store: "[loja]", avatar: fotos.familia },
  { text: "[depoimento]", name: "[nome]", store: "[loja]", avatar: fotos.longevidade },
];

export const waLink = (n: string) => `https://wa.me/${n}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

declare global { interface Window { fbq?: (...a: unknown[]) => void } }
export function trackContact(store: string) {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "Contact", { store });
}
