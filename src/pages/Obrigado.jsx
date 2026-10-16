import React, { useEffect } from 'react';
import { Crown, MessageCircle, ScanSearch, ClipboardList } from 'lucide-react';
import { obrigado, obrigadoWhatsappHref } from '../content';
import { Container, Button } from '../components/lp/ui';
import Footer from '../components/lp/Footer';

const entregaIcones = [ScanSearch, ClipboardList];

export default function Obrigado() {
  useEffect(() => {
    document.title = `Quase lá | ${obrigado.produto} com a Rainha do Crédito`;
  }, []);

  return (
    <div className="min-h-screen bg-background text-ivory">
      <div className="noise-overlay" aria-hidden="true" />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-secondary/40 blur-[140px]" aria-hidden="true" />

        <Container>
          <header className="flex items-center justify-between py-5 sm:py-6">
            <p className="flex items-center gap-2 font-display text-sm font-bold text-white sm:text-base">
              <Crown size={18} className="text-accent" aria-hidden="true" />
              Rainha do Crédito
            </p>
            <p className="text-sm font-semibold text-accent">{obrigado.produto}</p>
          </header>

          <div className="mx-auto max-w-3xl pb-16 pt-6 text-center md:pt-10">
            <div className="hero-photo relative mx-auto w-40 sm:w-52">
              <div className="gold-halo absolute -inset-10 -z-10 rounded-full" aria-hidden="true" />
              <img
                src="/assets/eliane-rainha.webp"
                alt="Eliane Moreira, a Rainha do Crédito, de coroa e faixa"
                width="820"
                height="1000"
                className="w-full"
                fetchpriority="high"
              />
            </div>

            <p className="hero-in mt-8 font-display text-2xl font-extrabold uppercase tracking-wide text-accent sm:text-3xl">{obrigado.eyebrow}</p>
            <h1 className="hero-in mt-2 font-display text-[2.1rem] font-extrabold leading-[1.06] text-white sm:text-[2.6rem] md:text-[3.2rem]">
              {obrigado.titulo}
            </h1>

            <div className="hero-in-2 mt-8 space-y-4 text-base leading-relaxed text-ivory/80 sm:text-lg">
              {obrigado.atencao.map((a) => (
                <p key={a.forte}>
                  {a.antes}
                  <strong className="font-bold text-white">{a.forte}</strong>
                </p>
              ))}
              <p>{obrigado.furarFila}</p>
            </div>

            <div className="hero-in-3 mt-8">
              <Button href={obrigadoWhatsappHref} size="lg" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={22} aria-hidden="true" />
                {obrigado.cta}
              </Button>
              <p className="mt-3 text-sm text-ivory/55">{obrigado.vagasPorSemana} vagas por semana, avaliadas uma a uma</p>
            </div>
          </div>
        </Container>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />
      </section>

      {/* ========================== PROMESSA ========================== */}
      <section className="bg-primary py-14 md:py-20">
        <Container>
          <h2 className="mx-auto max-w-2xl text-center font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {obrigado.promessaTitulo}
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {obrigado.entregas.map((e, i) => {
              const Icone = entregaIcones[i];
              return (
                <article key={e.titulo} className="rounded-2xl border border-accent/30 bg-background/60 p-6 sm:p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-dark">
                    <Icone size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-extrabold text-white sm:text-2xl">{e.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-ivory/80">{e.texto}</p>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ivory/55">{obrigado.aviso}</p>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
