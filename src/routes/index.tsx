import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, Video, Cuidado, ParaQuem, Linhas, Parceiros, ComoFunciona, Depoimentos, ComoReceber, Lojas, Faq, Footer, FloatingWhats } from "@/components/landing/Sections";

const title = "Cerealli Natural Market | Granel, suplementação e alimentação saudável";
const description = "Granel, suplementação e alimentação saudável com rigor de cozinha profissional. Fale com uma consultora Cerealli pelo WhatsApp e receba em casa em São Paulo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero /><Video /><Cuidado /><ParaQuem /><Linhas /><Parceiros /><ComoFunciona /><Depoimentos /><ComoReceber /><Lojas /><Faq />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  );
}
