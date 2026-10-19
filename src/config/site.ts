import granelDetalhe from "@/assets/photos/A7R00447.jpg.asset.json";
import lojaInterior from "@/assets/photos/A7R00466.jpg.asset.json";
import reposicao from "@/assets/photos/A7R00488.jpg.asset.json";
import potesGranel from "@/assets/photos/A7R00446.jpg.asset.json";
import atendimento from "@/assets/photos/A7R00606.jpg.asset.json";
import clienteSuplementos from "@/assets/photos/A7R00550.jpg.asset.json";
import clienteRefrigerados from "@/assets/photos/A7R00507.jpg.asset.json";
import suplementos from "@/assets/photos/A7R00456.jpg.asset.json";
import refrigerados from "@/assets/photos/A7R00480.jpg.asset.json";
import paredeGranel from "@/assets/photos/A7R00452.jpg.asset.json";
import separacaoPedido from "@/assets/photos/A7R00614.jpg.asset.json";
import retirada from "@/assets/photos/A7R04012.jpg.asset.json";
import fachada from "@/assets/photos/A7R04009.jpg.asset.json";
import longevidadeRealista from "@/assets/longevidade-realista.jpg";
import deliveryRealista from "@/assets/delivery-realista.jpg";

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
  areaPorLoja: "[área de entrega por loja]",
  prazo: "No mesmo dia, dentro da área de entrega de cada loja.",
};

export const fotos = {
  hero: granelDetalhe.url,
  loja: lojaInterior.url,
  reposicao: reposicao.url,
  potes: potesGranel.url,
  consultora: atendimento.url,
  treina: clienteSuplementos.url,
  familia: clienteRefrigerados.url,
  longevidade: longevidadeRealista,
  granel: paredeGranel.url,
  suplementacao: suplementos.url,
  mercado: refrigerados.url,
  delivery: deliveryRealista,
  celular: separacaoPedido.url,
  retirada: retirada.url,
  fachada: fachada.url,
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
  { text: "Muito legal, bem localizado, funcionários, com excelente atendimento!!", name: "Jorge Cobucci", store: "Granja Viana" },
  { text: "Ótima variedade de excelentes produtos! Atendentes muito atenciosas!", name: "Lélia Oliva", store: "Granja Viana" },
  { text: "Estive hj na unidade de Alphaville e fui atendida por umas meninas super simpáticas, grandes na simpatia e pequenas no tamanho, uns amores! Voltarei sempre! 😍", name: "Anderson Dias", store: "Alphaville" },
  { text: "Ótimo atendimento e variedade de produtos. Fui atendida pela Laís, muito educada e prestativa. Me explicou sobre os produtos e me auxiliou na compra. Muito bom quando chegamos no lugar e somos tratadas bem, voltarei outras vezes. Parabéns pelo ambiente e pelos profissionais.", name: "Bruna Lorrayne", store: "Alphaville" },
  { text: "Loja com muita variedade de produtos! Qualidade excelente!", name: "Natália Barbieri", store: "Vila Leopoldina" },
  { text: "Lugar incrível! Produtos de qualidade, funcionárias simpáticas e educadas, que é o diferencial.", name: "Andressa Carolina de Souza", store: "Vila Leopoldina" },
  { text: "Ótimo local, produtos de qualidade, recomendo. Ótimo atendimento, funcionárias simpáticas e educadas.", name: "Adailton Coelho", store: "Chácara Klabin" },
  { text: "Ótima loja, super completa. Tem muitos itens a granel e os atendentes são bem atenciosos. Voltarei a fazer compras com certeza!", name: "Fabio Macedo", store: "Chácara Klabin" },
];

export const waLink = (n: string) => `https://wa.me/${n}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

declare global { interface Window { fbq?: (...a: unknown[]) => void } }
export function trackContact(store: string) {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "Contact", { store });
}
