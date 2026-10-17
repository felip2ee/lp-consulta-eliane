import React, { useEffect } from 'react';
import { Crown, ShieldCheck, UserCheck, CalendarClock } from 'lucide-react';
import { conteudo as conteudoPadrao } from '../content';
import { Container, Button, H2, CheckItem, XItem } from '../components/lp/ui';
import ConviteCard from '../components/lp/ConviteCard';
import ComparisonTable from '../components/lp/ComparisonTable';
import FAQ from '../components/lp/FAQ';
import StickyBar from '../components/lp/StickyBar';
import Footer from '../components/lp/Footer';

const garantiaIcones = { clareza: ShieldCheck, encaixe: UserCheck, agenda: CalendarClock };

// `conteudo` é o objeto com todos os blocos de copy. O padrão é a LP principal;
// a versão /beaba passa o dela (src/content-beaba.js).
export default function ConsultaLP({ conteudo = conteudoPadrao }) {
  const {
    config, ctaHref, hero, dor, mecanismo, produto, comoFunciona, praQuem,
    rainha, comparacao, oferta, garantias, objecoes, faq, ctaFinal, tituloDocumento,
  } = conteudo;

  useEffect(() => {
    if (tituloDocumento) document.title = tituloDocumento;
  }, [tituloDocumento]);

  return (
    <div className="min-h-screen bg-background text-ivory">
      <div className="noise-overlay" aria-hidden="true" />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden">
        {/* luz de fundo */}
        <div className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[32rem] w-[32rem] rounded-full bg-secondary/40 blur-[140px]" aria-hidden="true" />

        <Container>
          <header className="flex items-center justify-between py-5 sm:py-6">
            <p className="flex items-center gap-2 font-display text-sm font-bold text-white sm:text-base">
              <Crown size={18} className="text-accent" aria-hidden="true" />
              Rainha do Crédito
            </p>
            <a href={ctaHref} className="hidden text-sm font-semibold text-accent hover:text-white sm:inline">
              Agendar consulta
            </a>
          </header>

          <div className="grid items-end pb-10 md:grid-cols-[1.1fr_0.9fr] md:gap-6 md:pb-0 md:pt-10">
            {/* Texto (no celular sobe por cima do degradê da foto) */}
            <div className="relative z-10 -mt-20 text-center md:mt-0 md:pb-20 md:text-left">
              <p className="hero-in text-base text-accent sm:text-lg">{hero.eyebrow}</p>
              <h1 className="hero-in mt-3 font-display text-[2.1rem] font-extrabold leading-[1.06] text-white sm:text-[2.6rem] md:text-[3rem] lg:text-[3.5rem]">
                {hero.headline}
              </h1>
              <p className="hero-in-2 mx-auto mt-6 max-w-prose text-base leading-relaxed text-ivory/80 sm:text-lg md:mx-0 md:text-xl">{hero.sub}</p>

              <div className="hero-in-3 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 md:justify-start">
                <Button href={ctaHref} size="lg">{hero.cta}</Button>
                <p className="text-sm leading-tight text-ivory/70">
                  {config.precoFormatado && (
                    <span className="block font-display text-xl font-extrabold text-white">
                      {config.precoCheio && <s className="mr-2 text-sm font-semibold text-ivory/50">{config.precoCheio}</s>}
                      {config.precoFormatado}
                    </span>
                  )}
                  {hero.ctaNota}
                </p>
              </div>

              <ul className="hero-in-3 mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ivory/65 md:justify-start">
                {hero.fatos.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Foto: primeiro no celular, à direita no desktop */}
            <div className="relative order-first mx-auto w-full max-w-[22rem] sm:max-w-md md:order-none md:max-w-none">
              <div className="gold-halo absolute inset-x-[-10%] bottom-0 top-[15%] -z-10 rounded-full" aria-hidden="true" />
              <picture className="hero-photo block">
                <source media="(max-width: 767px)" srcSet="/assets/eliane-hero-sm.webp" />
                <img
                  src="/assets/eliane-hero.webp"
                  alt="Eliane Moreira, a Rainha do Crédito, de braços abertos"
                  className="mx-auto w-full object-contain md:max-h-[31rem] lg:max-h-[34rem]"
                  width="1446"
                  height="1400"
                  fetchpriority="high"
                />
              </picture>
              {/* Degradê que funde a base da foto com o fundo (só no celular) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/80 to-transparent md:hidden" aria-hidden="true" />

              {/* Ficha da consulta, sobre a foto (só no desktop; no celular o preço já está sob o botão) */}
              <div className="hero-in-3 absolute bottom-12 -left-6 hidden w-60 rounded-2xl border border-accent/60 bg-primary/95 p-4 shadow-gold backdrop-blur md:block">
                <p className="flex items-center gap-2 font-display text-sm font-bold text-accent">
                  <Crown size={15} aria-hidden="true" />
                  {hero.cardTitulo}
                </p>
                <p className="mt-2 text-xs leading-snug text-ivory/80 md:text-sm">{hero.cardLinha}</p>
                {config.precoFormatado && (
                  <p className="mt-2 font-display text-2xl font-extrabold text-white">
                    {config.precoCheio && <s className="mr-2 text-sm font-semibold text-ivory/50">{config.precoCheio}</s>}
                    {config.precoFormatado}
                  </p>
                )}
                <p className="mt-2 text-xs text-ivory/60">{hero.cardNota}</p>
              </div>
            </div>
          </div>
        </Container>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />
      </section>

      {/* ============================ DOR ============================ */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            {dor.perguntas.map((p, i) => (
              <h2
                key={p}
                className={`font-display font-extrabold leading-[1.1] ${
                  i === 0 ? 'text-3xl text-white sm:text-4xl md:text-[2.75rem]' : 'mt-4 text-2xl text-ivory/70 sm:text-3xl md:text-[2rem]'
                }`}
              >
                {p}
              </h2>
            ))}
            <p className="mt-8 text-lg text-ivory/80">{dor.intro}</p>
          </div>
          <ul className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {dor.situacoes.map((s) => (
              <li key={s} className="border-l-2 border-accent/70 pl-4 text-base leading-relaxed text-ivory/90 sm:text-lg">
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ========================= MECANISMO ========================= */}
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <H2>{mecanismo.titulo}</H2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ivory/85 sm:text-lg">
                {mecanismo.paragrafos.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            {/* Ficha de análise: o que o banco olha e não mostra */}
            <div className="relative mx-auto w-full max-w-md md:mr-0">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-dark/50" aria-hidden="true" />
              <div className="relative -rotate-1 rounded-2xl bg-ivory p-6 text-primary shadow-2xl sm:p-8 md:-rotate-2">
                <div className="flex items-baseline justify-between border-b border-primary/15 pb-3">
                  <p className="font-display text-sm font-extrabold sm:text-base">{mecanismo.ficha.titulo}</p>
                  <p className="text-xs font-semibold text-primary/50">{mecanismo.ficha.subtitulo}</p>
                </div>
                <ul className="mt-4 space-y-3">
                  {mecanismo.ficha.criterios.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-sm sm:text-base">
                      <span className="h-4 w-4 shrink-0 rounded-[3px] border-2 border-primary/45" aria-hidden="true" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-end">
                  <span className="stamp inline-block text-[0.7rem] text-primary/70 sm:text-xs">{mecanismo.ficha.carimbo}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================== PRODUTO ========================== */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
            <div className="max-w-2xl">
              <H2>{produto.titulo}</H2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ivory/85 sm:text-lg">
                {produto.paragrafos.map((p, i) => (
                  <p key={p} className={i === 0 ? 'text-xl font-semibold text-white sm:text-2xl' : ''}>{p}</p>
                ))}
              </div>
            </div>
            <div className="relative mx-auto hidden w-full max-w-[16rem] md:block lg:max-w-xs">
              <div className="gold-halo absolute -inset-8 -z-10 rounded-full" aria-hidden="true" />
              <img
                src="/assets/chave.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                width="692"
                height="724"
                className="w-full rotate-[-14deg]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ======================= COMO FUNCIONA ======================= */}
      <section className="bg-ivory py-16 text-primary md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <div>
              <H2 tone="dark">{comoFunciona.titulo}</H2>
              <ol className="mt-8 space-y-6">
                {comoFunciona.passos.map((p, i) => (
                  <li key={p.titulo} className="flex gap-5">
                    <span className="font-display text-4xl font-extrabold leading-none text-accent sm:text-5xl" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="font-display text-lg font-bold">
                        <span className="sr-only">Passo {i + 1}: </span>
                        {p.titulo}
                      </p>
                      <p className="mt-1 leading-relaxed text-primary/80">{p.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="md:pt-2">
              <div className="rounded-3xl border border-primary/15 bg-white/60 p-6 sm:p-8">
                <h3 className="font-display text-2xl font-extrabold">{comoFunciona.saiSabendoTitulo}</h3>
                <ul className="mt-6 space-y-4">
                  {comoFunciona.saiSabendo.map((s) => (
                    <CheckItem key={s} tone="dark">{s}</CheckItem>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button href={ctaHref}>{comoFunciona.cta}</Button>
                <p className="text-sm text-primary/70">{comoFunciona.ctaNota}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================= PRA QUEM É ========================= */}
      <section className="py-16 md:py-24">
        <Container>
          <H2 className="max-w-2xl">{praQuem.titulo}</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
            <div className="rounded-3xl border border-accent/40 bg-primary p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-accent">{praQuem.simTitulo}</h3>
              <ul className="mt-5 space-y-4">
                {praQuem.sim.map((s) => <CheckItem key={s}>{s}</CheckItem>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-ivory/10 p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-ivory/70">{praQuem.naoTitulo}</h3>
              <ul className="mt-5 space-y-4">
                {praQuem.nao.map((s) => <XItem key={s}>{s}</XItem>)}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================== A RAINHA ========================== */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative mx-auto w-40 sm:w-52">
              <div className="gold-halo absolute -inset-10 -z-10 rounded-full" aria-hidden="true" />
              <img
                src="/assets/eliane-rainha.webp"
                alt="Eliane Moreira com coroa e faixa, em moldura dourada"
                className="w-full"
                loading="lazy"
                width="820"
                height="1000"
              />
            </div>
            <H2 className="mt-8">{rainha.titulo}</H2>
            <div className="mx-auto mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-ivory/85 sm:text-lg">
              {rainha.paragrafos.map((p) => <p key={p}>{p}</p>)}
            </div>
            <dl className="mx-auto mt-10 flex max-w-xl justify-center gap-x-12 gap-y-6 border-t border-accent/20 pt-8 sm:gap-x-20">
              {rainha.numeros.map((n) => (
                <div key={n.valor}>
                  <dt className="font-display text-3xl font-extrabold text-accent sm:text-4xl">{n.valor}</dt>
                  <dd className="mt-1 text-sm text-ivory/65">{n.rotulo}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ========================= COMPARAÇÃO ========================= */}
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <H2 className="mx-auto max-w-3xl text-center">{comparacao.titulo}</H2>
          <div className="mt-10 md:mt-14">
            <ComparisonTable comparacao={comparacao} />
          </div>
        </Container>
      </section>

      {/* =========================== OFERTA =========================== */}
      <section id="oferta" className="scroll-mt-6 py-16 md:py-24">
        <Container>
          <ConviteCard oferta={oferta} href={ctaHref} />
        </Container>
      </section>

      {/* ========================== GARANTIAS ========================== */}
      <section className="bg-ivory py-16 text-primary md:py-24">
        <Container>
          <H2 tone="dark" className="max-w-3xl">{garantias.titulo}</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {garantias.itens.map((g) => {
              const Icon = garantiaIcones[g.icone] || ShieldCheck;
              return (
                <div key={g.titulo} className="rounded-3xl border border-primary/15 bg-white/60 p-6 sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">{g.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-primary/80">{g.texto}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-primary/75 sm:text-lg">{garantias.naoGarantimos}</p>
        </Container>
      </section>

      {/* ====================== OBJEÇÕES E FAQ ====================== */}
      <section className="py-16 md:py-24">
        <Container>
          <H2 className="max-w-3xl">{objecoes.titulo}</H2>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {objecoes.itens.map((o) => (
              <div key={o.pergunta}>
                <h3 className="font-display text-lg font-bold text-accent sm:text-xl">{o.pergunta}</h3>
                <p className="mt-3 leading-relaxed text-ivory/85">{o.resposta}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl md:mt-20">
            <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{faq.titulo}</h3>
            <div className="mt-6">
              <FAQ itens={faq.itens} />
            </div>
          </div>
        </Container>
      </section>

      {/* ========================== CTA FINAL ========================== */}
      <section id="cta-final" className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />
        <Container className="relative text-center">
          <Crown size={36} className="mx-auto text-accent" aria-hidden="true" />
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl md:text-5xl">
            {ctaFinal.titulo}
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-ivory/80 sm:text-lg">
            {ctaFinal.linhas.map((l) => <p key={l}>{l}</p>)}
          </div>
          <div className="mt-9 flex flex-col items-center gap-3">
            <Button href={ctaHref} size="lg">{ctaFinal.cta}</Button>
            <p className="text-sm text-ivory/60">{ctaFinal.nota}</p>
          </div>
        </Container>
      </section>

      <Footer />
      <StickyBar rotulo={hero.cardTitulo} preco={config.precoFormatado} precoCheio={config.precoCheio} href={ctaHref} />
    </div>
  );
}
