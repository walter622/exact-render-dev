import { useEffect, useState } from "react";
import { fotos, partners, stores, testimonials, placeholders, waLink, trackContact, INSTAGRAM_URL, VIDEO_EMBED_URL } from "@/config/site";
import { Cta, Reveal, Leaf, Tag, Icon, IconBox, goToStores } from "./ui";

const wrap = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const section = "py-24 md:py-32";
const h2 = "text-[2rem] font-semibold leading-[1.15] tracking-tight md:text-5xl";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""}`}>
      <div className={`${wrap} flex h-[72px] items-center justify-between`}>
        <a href="#topo" aria-label="Cerealli — início"><img src="/logos/cerealli.png" alt="Cerealli" width={473} height={115} className="logo-white h-7 w-auto md:h-8" /></a>
        <a href="#lojas" onClick={goToStores} className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:bg-primary-glow">Fazer pedido</a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="topo" className="grain glow-tr relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <Leaf className="-left-10 top-24 w-28 rotate-[-30deg] opacity-80 blur-[3px] md:w-40" />
      <Leaf className="-right-6 bottom-6 w-24 rotate-[120deg] opacity-70 blur-[5px] md:w-36" />
      <div className={`${wrap} grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]`}>
        <Reveal>
          <p className="eyebrow">Cerealli Natural Market</p>
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight md:text-[4.5rem]">
            Cuidado que dá pra <em className="kw text-primary-glow">provar</em>.
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted-foreground">
            Granel, suplementação e alimentação saudável escolhidos com o rigor de uma cozinha profissional e entregues na sua casa. Fale com uma consultora Cerealli e monte seu pedido pelo WhatsApp.
          </p>
          <Cta className="mt-10">Quero fazer meu pedido</Cta>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-8 text-sm text-foreground">
            <li className="flex items-center gap-3"><IconBox>{Icon.check}</IconBox>10 anos</li>
            <li className="flex items-center gap-3"><IconBox>{Icon.store}</IconBox>4 lojas em São Paulo</li>
            <li className="flex items-center gap-3"><IconBox>{Icon.hands}</IconBox>Atendimento por consultoras</li>
          </ul>
        </Reveal>
        <Reveal delay={150} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] border border-line md:-inset-6" aria-hidden />
          <img src={fotos.hero} alt="Mix de castanhas, amêndoas e nozes em tigela escura sobre pedra" width={1200} height={1440} fetchPriority="high" className="relative aspect-[5/6] w-full rounded-[1.75rem] object-cover" />
          <div className="absolute -bottom-5 left-6"><Tag /></div>
        </Reveal>
      </div>
    </section>
  );
}

export function Video() {
  const [play, setPlay] = useState(false);
  return (
    <section className={`grain ${section}`}>
      <div className={wrap}>
        <Reveal><h2 className={`${h2} mx-auto max-w-4xl text-center`}>Assista e veja o <em className="kw text-primary-glow">cuidado</em> que acontece antes de qualquer produto chegar até você</h2></Reveal>
        <Reveal delay={100} className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute -inset-3 rounded-[2rem] border border-line md:-inset-5" aria-hidden />
          <div className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-card">
            {play && VIDEO_EMBED_URL ? (
              <iframe src={VIDEO_EMBED_URL} title="Vídeo Cerealli" allow="autoplay; encrypted-media" allowFullScreen className="h-full w-full" />
            ) : (
              <button onClick={() => setPlay(true)} className="group absolute inset-0" aria-label="Reproduzir vídeo">
                <img src={fotos.loja} alt="Interior de loja Cerealli com potes de granel" width={1600} height={912} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-background/40" />
                <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_0_12px_color-mix(in_oklab,var(--primary)_25%,transparent)] transition-transform group-hover:scale-110 md:h-24 md:w-24">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
                </span>
              </button>
            )}
          </div>
        </Reveal>
        <Reveal className="mx-auto mt-14 max-w-3xl text-center text-lg text-muted-foreground">
          <p>Há dez anos, famílias, atletas e quem leva a saúde a sério escolhem a Cerealli para abastecer a casa com produto de verdade. Castanhas frescas, suplementos das marcas referência do mercado e opções sem glúten, sem lactose e low carb, num só lugar.</p>
          <p className="mt-5">Nossas consultoras te ajudam a escolher o que faz sentido para o seu objetivo, e o pedido chega na sua porta.</p>
          <Cta className="mt-10">Quero falar com a atendente</Cta>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  { i: Icon.eye, t: "Caixa de inspeção no recebimento: cheiro, sabor, crocância, tamanho e pureza avaliados um a um" },
  { i: Icon.ret, t: "Produto fora do padrão volta para o fornecedor" },
  { i: Icon.snow, t: "72 horas de congelamento para cereais, castanhas e derivados antes de entrar no estoque", big: true },
  { i: Icon.thermo, t: "Estoque climatizado para preservar a qualidade" },
  { i: Icon.jar, t: "Potes menores de propósito, para reposição mais frequente e produto sempre fresco" },
  { i: Icon.check, t: "Nova inspeção a cada reposição" },
  { i: Icon.clip, t: "Conferência de todos os potes, todos os dias, antes de a loja abrir" },
  { i: Icon.doc, t: "Data de embalo, data de reposição, lote e fornecedor registrados em cada pote" },
];

function Step({ n, s }: { n: number; s: (typeof steps)[number] }) {
  if (s.big)
    return (
      <Reveal className="rounded-3xl bg-ink p-8 text-primary-foreground md:p-12">
        <div className="flex items-start justify-between">
          <span className="font-serif text-2xl italic text-primary-glow">0{n}</span>
          <IconBox className="h-7 w-7">{s.i}</IconBox>
        </div>
        <p className="mt-4 font-serif text-[6rem] font-bold italic leading-none text-primary-glow md:text-[9rem]">72h</p>
        <p className="mt-4 max-w-md text-lg">{s.t}</p>
      </Reveal>
    );
  return (
    <Reveal className="flex gap-6 border-t border-ink/15 py-7">
      <span className="w-14 shrink-0 font-serif text-4xl font-bold italic leading-none text-primary">0{n}</span>
      <div className="flex-1">
        <IconBox className="mb-3 !text-primary">{s.i}</IconBox>
        <p className="text-lg text-ink">{s.t}</p>
      </div>
    </Reveal>
  );
}

export function Cuidado() {
  const img = (src: string, alt: string) => (
    <Reveal className="py-6"><img src={src} alt={alt} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" /></Reveal>
  );
  return (
    <section className={`bg-cream text-ink ${section}`}>
      <div className={wrap}>
        <Reveal className="max-w-3xl">
          <p className="eyebrow !text-primary">O cuidado que você não vê</p>
          <h2 className={`${h2} mt-5`}>O que acontece com cada produto antes de ele chegar à sua <em className="kw text-primary">mesa</em></h2>
          <p className="mt-6 text-lg text-ink-soft">No granel, o produto vem da natureza, sem embalagem de fábrica para esconder nada. Por isso, a Cerealli criou um processo próprio de qualidade, que acompanha cada item do recebimento até o pote.</p>
        </Reveal>
        <div className="mt-16 grid gap-x-16 lg:grid-cols-2">
          <div>
            <Step n={1} s={steps[0]} /><Step n={2} s={steps[1]} />
            {img(fotos.inspecao, "Mãos com luvas inspecionando castanhas-de-caju em bandeja de inox")}
            <Step n={4} s={steps[3]} /><Step n={5} s={steps[4]} />
          </div>
          <div className="lg:pt-24">
            <Step n={3} s={steps[2]} />
            <div className="h-6" />
            <Step n={6} s={steps[5]} /><Step n={7} s={steps[6]} />
            {img(fotos.potes, "Potes de vidro com granola, aveia, sementes e frutas secas organizados na prateleira")}
            <Step n={8} s={steps[7]} />
          </div>
        </div>
        <Reveal className="mt-16 grid overflow-hidden rounded-[1.75rem] border border-border bg-card text-card-foreground md:grid-cols-2">
          <img src={fotos.consultora} alt="Consultora Cerealli atendendo cliente no balcão" width={1200} height={912} loading="lazy" className="h-full min-h-72 w-full object-cover" />
          <div className="p-8 md:p-14">
            <h3 className="text-3xl font-semibold md:text-4xl">E no <em className="kw text-primary-glow">atendimento</em>:</h3>
            <ul className="mt-8 space-y-6 text-lg text-muted-foreground">
              <li className="flex gap-4"><IconBox>{Icon.check}</IconBox>Consultoras treinadas pela Cerealli e pelos próprios fabricantes</li>
              <li className="flex gap-4"><IconBox>{Icon.heart}</IconBox>Orientação para escolher o produto certo para o seu objetivo, sempre ao lado do seu nutricionista ou médico, nunca no lugar deles</li>
            </ul>
            <Cta className="mt-10">Quero receber em casa</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ParaQuem() {
  const cards = [
    { t: "Para quem treina", d: "Whey, creatina, pré-treino e snacks proteicos com reposição rápida, sem esperar dias pela entrega e sem dúvida sobre a procedência.", img: fotos.treina, alt: "Homem treinando com kettlebell ao ar livre no pôr do sol" },
    { t: "Para quem cuida da casa inteira", d: "Castanhas, granola, mel, lanche saudável das crianças e o suplemento da família, resolvidos numa única conversa.", img: fotos.familia, alt: "Mãe e filha montando lancheira saudável com frutas e castanhas" },
    { t: "Para quem investe em longevidade", d: "As marcas premium de suplementação e orientação séria para quem quer viver mais e melhor.", img: fotos.longevidade, alt: "Casal maduro caminhando em trilha na floresta" },
  ];
  return (
    <section className={`grain glow-bl relative overflow-hidden ${section}`}>
      <Leaf className="-right-8 top-16 w-28 rotate-45 opacity-70 blur-[4px]" />
      <div className={wrap}>
        <Reveal><h2 className={`${h2} max-w-4xl`}>Para quem não abre mão de cuidar da saúde e não quer <em className="kw text-primary-glow">perder tempo</em> com isso</h2></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 100} className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary">
              <div className="overflow-hidden"><img src={c.img} alt={c.alt} width={960} height={1200} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-7">
                <h3 className="text-xl font-semibold">{c.t}</h3>
                <p className="mt-3 text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Linhas() {
  const Card = ({ title, d, items, img, alt, main }: { title: string; d: string; items: string[]; img: string; alt: string; main?: boolean }) => (
    <div className={`group relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${main ? "border-primary md:min-h-[620px]" : "border-border hover:border-primary"}`}>
      <img src={img} alt={alt} width={1200} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/10" />
      <div className="relative p-7 md:p-10">
        {main && <span className="mb-5 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground">PROTAGONISTA</span>}
        <h3 className={`font-semibold tracking-[0.12em] ${main ? "text-4xl md:text-5xl" : "text-2xl"}`}>{title}</h3>
        <p className="mt-3 max-w-md text-foreground/90">{d}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {items.map((it) => <li key={it} className="rounded-full border border-line px-3 py-1 text-sm text-foreground/90">{it}</li>)}
        </ul>
      </div>
    </div>
  );
  return (
    <section className={`grain ${section} pt-0 md:pt-0`}>
      <div className={wrap}>
        <Reveal><h2 className={`${h2} max-w-3xl`}>Tudo o que a sua rotina saudável pede, com a mesma <em className="kw text-primary-glow">curadoria</em></h2></Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="h-full"><Card main title="GRANEL" img={fotos.loja} alt="Parede de dispensers e potes de granel na loja" d="O coração da Cerealli. Você leva a quantidade que quiser e pode provar antes." items={["Castanhas e oleaginosas", "Frutas desidratadas", "Cereais, grãos e farinhas", "Granolas e mix", "Chás"]} /></Reveal>
          <div className="grid gap-6">
            <Reveal delay={100}><Card title="SUPLEMENTAÇÃO" img={fotos.suplementacao} alt="Dosador com whey protein e creatina sobre pedra escura" d="As marcas que são referência no mercado, com orientação de quem entende." items={["Whey protein", "Creatina", "Ômegas", "Vitaminas e minerais", "Pré-treino", "Géis, repositores e isotônicos para endurance"]} /></Reveal>
            <Reveal delay={200}><Card title="MERCADO E REFRIGERADOS" img={fotos.mercado} alt="Snacks saudáveis, barras de proteína e chocolate amargo sobre madeira" d="Para completar a despensa sem precisar de outra parada." items={["Sem glúten, sem lactose e sem açúcar", "Low carb e diet", "Opções veganas", "Snacks saudáveis para as crianças", "Doces fit"]} /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  const list = [...partners, ...partners];
  return (
    <div className="marquee-mask pause-on-hover overflow-hidden" tabIndex={0}>
      <div className={`flex w-max items-center gap-20 pr-20 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {list.map((p, i) => (
          <img key={i} src={p.src} alt={i < partners.length ? p.name : ""} aria-hidden={i >= partners.length} loading="lazy" className={`logo-white ${"tall" in p && p.tall ? "h-16" : "h-11"} w-auto max-w-[180px] object-contain opacity-60 transition-all duration-300 hover:scale-105 hover:opacity-100`} />
        ))}
      </div>
    </div>
  );
}

export function Parceiros() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches), []);
  return (
    <section className={`grain border-y border-border ${section}`}>
      <div className={wrap}><Reveal><h2 className={`${h2} text-center`}>Marcas que você encontra na <em className="kw text-primary-glow">Cerealli</em></h2></Reveal></div>
      {reduced ? (
        <div className={`${wrap} mt-14 grid grid-cols-2 items-center justify-items-center gap-10 md:grid-cols-4`}>
          {partners.map((p) => <img key={p.name} src={p.src} alt={p.name} className="logo-white h-11 w-auto max-w-[160px] object-contain opacity-70" />)}
        </div>
      ) : (
        <div className="mt-14 space-y-10">
          <LogoRow />
          <div className="hidden md:block"><LogoRow reverse /></div>
        </div>
      )}
    </section>
  );
}

export function ComoFunciona() {
  const s = [
    ["Fale com uma consultora.", "Clique no botão, escolha a loja mais perto de você e conte o que precisa."],
    ["Monte seu pedido com orientação.", "A consultora tira suas dúvidas, indica o que combina com o seu objetivo e separa cada item com o mesmo cuidado da loja."],
    ["Receba em casa.", "O pedido sai da loja e chega até você."],
  ];
  return (
    <section className={`grain glow-tr relative overflow-hidden ${section}`}>
      <div className={`${wrap} grid items-center gap-16 lg:grid-cols-2`}>
        <div>
          <Reveal><h2 className={h2}>Do WhatsApp à sua porta em <em className="kw text-primary-glow">três passos</em></h2></Reveal>
          <ol className="relative mt-12 space-y-10 before:absolute before:left-[1.4rem] before:top-4 before:bottom-4 before:w-px before:bg-line">
            {s.map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <li className="relative flex gap-6">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary bg-background font-serif text-2xl font-bold italic text-primary-glow">{i + 1}</span>
                  <div><p className="text-xl font-semibold">{t}</p><p className="mt-2 text-muted-foreground">{d}</p></div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12 rounded-3xl border border-line p-7">
            <p className="text-lg"><span className="font-semibold text-primary-glow">Resultado:</span> a despensa abastecida com produto que você confia, sem fila, sem rótulo enganoso e sem perder o seu tempo.</p>
          </Reveal>
          <Reveal><Cta className="mt-10">Quero fazer meu pedido agora</Cta></Reveal>
        </div>
        <Reveal delay={150} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] border border-line" aria-hidden />
          <img src={fotos.celular} alt="Mão segurando celular com conversa aberta, cozinha ao fundo" width={1008} height={1200} loading="lazy" className="relative aspect-[5/6] w-full rounded-[1.75rem] object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

export function Depoimentos() {
  return (
    <section className={`bg-cream text-ink ${section}`}>
      <div className={wrap}>
        <Reveal><h2 className={`${h2} text-center`}>O que dizem os <em className="kw text-primary">clientes</em> Cerealli</h2></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="flex flex-col rounded-3xl border border-ink/10 bg-background/0 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
              <span className="font-serif text-7xl font-bold italic leading-none text-primary" aria-hidden>“</span>
              <p className="mt-2 flex-1 text-lg">{t.text}</p>
              <div className="mt-8 flex items-center gap-4">
                <img src={t.avatar} alt={`Foto de ${t.name}`} width={56} height={56} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
                <div><p className="font-semibold">{t.name}</p><p className="text-sm text-ink-soft">cliente da unidade {t.store}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComoReceber() {
  const c = [
    { i: Icon.moto, t: "Delivery", d: `Seu pedido entregue em casa, separado pelas nossas consultoras. ${placeholders.prazoArea}`, img: fotos.delivery, alt: "Sacola de compras entregue na porta de casa" },
    { i: Icon.bag, t: "Retirada na loja", d: "Peça pelo WhatsApp e passe só para buscar.", img: fotos.consultora, alt: "Balcão de atendimento da loja Cerealli" },
    { i: Icon.store, t: "Visita à loja", d: "Venha conhecer, provar o granel e conversar pessoalmente com as consultoras.", img: fotos.loja, alt: "Interior da loja de granel Cerealli" },
  ];
  return (
    <section className={`grain ${section}`}>
      <div className={wrap}>
        <Reveal><h2 className={`${h2} max-w-3xl`}>Escolha o jeito que funciona melhor para a sua <em className="kw text-primary-glow">rotina</em></h2></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {c.map((x, i) => (
            <Reveal key={x.t} delay={i * 100} className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary">
              <div className="overflow-hidden"><img src={x.img} alt={x.alt} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-7">
                <IconBox className="h-8 w-8">{x.i}</IconBox>
                <h3 className="mt-4 text-xl font-semibold">{x.t}</h3>
                <p className="mt-2 text-muted-foreground">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-muted-foreground"><span className="font-semibold text-foreground">Pagamento:</span> {placeholders.pagamento}</p>
          <Cta>Quero receber em casa</Cta>
        </Reveal>
      </div>
    </section>
  );
}

export function Lojas() {
  return (
    <section id="lojas" className="scroll-mt-20 bg-primary p-3 md:p-5">
      <div className="relative overflow-hidden rounded-[2rem] py-20 md:py-28">
        <img src={fotos.loja} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <Leaf className="-left-8 top-10 w-28 rotate-[-20deg] opacity-80 blur-[3px] md:w-36" />
        <Leaf className="-right-8 bottom-10 w-24 rotate-[150deg] opacity-70 blur-[5px] md:w-32" />
        <div className={`${wrap} relative`}>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Encontre a unidade mais próxima:</p>
            <h2 className={`${h2} mt-5`}>Fale agora com uma consultora da Cerealli mais <em className="kw text-primary-glow">perto de você</em></h2>
            <p className="mt-5 text-lg text-muted-foreground">Toque na sua unidade e o WhatsApp abre direto com a equipe da loja.</p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stores.map((s, i) => (
              <Reveal key={s.id} delay={i * 80} className="flex flex-col rounded-3xl border border-border bg-card/90 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-primary">
                <IconBox className="h-8 w-8">{Icon.pin}</IconBox>
                <h3 className="mt-5 font-serif text-3xl font-bold italic">{s.name}</h3>
                <p className="mt-2 text-muted-foreground">{s.address}</p>
                <a href={`https://www.instagram.com/${s.instagram}`} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm text-primary-glow hover:underline">@{s.instagram}</a>
                <a
                  href={waLink(s.whatsapp)} target="_blank" rel="noopener noreferrer" data-store={s.id}
                  onClick={() => trackContact(s.id)}
                  className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:bg-primary-glow"
                >
                  <span className="h-5 w-5 [&>svg]:h-full [&>svg]:w-full" aria-hidden>{Icon.wa}</span>Chamar no WhatsApp
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const items = [
    ["Vocês entregam no meu endereço?", `Cada loja atende a sua região. Ao tocar na unidade mais próxima, a consultora confirma a entrega no seu endereço. ${placeholders.areaPorLoja}`],
    ["Em quanto tempo o pedido chega?", placeholders.prazo],
    ["Posso provar os produtos do granel?", "Pode. Na loja, é só pedir para uma consultora e provar o que tiver vontade antes de levar."],
    ["As consultoras substituem um nutricionista ou médico?", "Não. Elas orientam sobre produtos, combinações e formas de consumo. Para dieta, dosagem e tratamento, a referência é sempre o seu profissional de saúde."],
    ["Vocês têm produtos sem glúten, sem lactose e veganos?", "Temos uma linha completa de produtos para restrições alimentares, além de opções low carb, diet e sem açúcar."],
    ["Por que o granel da Cerealli é diferente?", "Porque cada produto passa por inspeção no recebimento, congelamento de 72 horas no caso de cereais e castanhas, estoque climatizado, potes menores para reposição frequente e conferência diária antes de a loja abrir."],
    ["Quais marcas de suplemento vocês trabalham?", "As marcas que são referência no mercado, nacionais e importadas. Pergunte pela sua marca à consultora."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={`bg-cream text-ink ${section}`}>
      <div className={`${wrap} max-w-4xl`}>
        <Reveal><h2 className={`${h2} text-center`}>Dúvidas <em className="kw text-primary">frequentes</em></h2></Reveal>
        <div className="mt-12">
          {items.map(([q, a], i) => (
            <div key={q} className="border-b border-ink/15">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium">
                {q}
                <span className={`text-3xl font-light leading-none text-primary transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} aria-hidden>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden text-ink-soft">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="grain glow-bl pb-28 pt-20 md:pb-16">
      <div className={`${wrap} flex flex-col items-center text-center`}>
        <Tag />
        <p className="mt-10 font-medium">Cerealli Natural Market • Granel, suplementação e alimentação saudável</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-x-3 text-muted-foreground" aria-label="Unidades">
          {stores.map((s, i) => (
            <span key={s.id}>{i > 0 && <span className="mr-3" aria-hidden>·</span>}<a href={`https://www.instagram.com/${s.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow">{s.name}</a></span>
          ))}
        </nav>
        <p className="mt-12 text-4xl font-semibold md:text-5xl">Cuidado que dá pra <em className="kw text-primary-glow">provar</em>.</p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Cerealli" className="mt-10 flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary-glow transition-colors hover:border-primary"><span className="h-6 w-6 [&>svg]:h-full [&>svg]:w-full">{Icon.insta}</span></a>
        <p className="mt-10 text-sm text-muted-foreground">© 2026 – Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export function FloatingWhats() {
  return (
    <a href="#lojas" onClick={goToStores} aria-label="Falar no WhatsApp — escolher loja" className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_-8px_var(--primary)] transition-transform hover:scale-105 md:hidden">
      <span className="h-8 w-8 [&>svg]:h-full [&>svg]:w-full">{Icon.wa}</span>
    </a>
  );
}
