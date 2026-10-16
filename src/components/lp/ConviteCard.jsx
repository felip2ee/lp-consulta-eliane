import React from 'react';
import { Crown, Gift, ShieldCheck, Lock, FileText, UserCheck, Check } from 'lucide-react';
import { Button } from './ui';

const selosIcones = [ShieldCheck, Lock, FileText, UserCheck];

export default function ConviteCard({ oferta, href }) {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Halo */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="rounded-[1.75rem] border border-accent/70 bg-primary p-1.5 shadow-gold sm:p-2">
        {/* Filete interno, como um convite */}
        <div className="rounded-[1.4rem] border border-accent/25 p-4 sm:p-8 md:p-10">
          <header className="flex flex-col items-center text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 text-accent">
              <Crown size={22} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-white">{oferta.titulo}</h3>
            <p className="mt-1 text-ivory/70">{oferta.subtitulo}</p>
          </header>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
            {/* Incluso + bônus */}
            <div>
              <h4 className="font-display text-lg font-bold text-white">{oferta.inclusoTitulo}</h4>
              <ul className="mt-4 space-y-3">
                {oferta.incluso.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-dark">
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed text-ivory/90">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="mt-8 flex items-center gap-2 font-display text-lg font-bold text-white">
                <Gift size={18} className="text-accent" aria-hidden="true" />
                {oferta.bonusTitulo}
              </h4>
              <ul className="mt-4 space-y-4">
                {oferta.bonus.map((b) => (
                  <li key={b.nome} className="flex items-start gap-4 rounded-2xl border border-accent/20 bg-background/60 p-4 sm:gap-5 sm:p-5">
                    {b.imagem ? (
                      <img src={b.imagem} alt="" className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24" loading="lazy" />
                    ) : (
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/40 text-accent">
                        <FileText size={20} aria-hidden="true" />
                      </span>
                    )}
                    <div>
                      <p className="font-display font-bold text-white">{b.nome}</p>
                      <p className="mt-1 text-sm text-ivory/70">{b.texto}</p>
                      {b.itens && (
                        <ul className="mt-3 space-y-1.5">
                          {b.itens.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ivory/80">
                              <Check size={14} strokeWidth={3} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preço + botão */}
            <div className="flex flex-col rounded-2xl bg-dark/60 p-5 sm:p-7">
              {oferta.preco ? (
                <>
                  <p className="text-sm text-ivory/60">{oferta.precoLabel}</p>
                  <p className="mt-1 font-display text-5xl font-extrabold leading-none text-accent sm:text-6xl">{oferta.preco}</p>
                  <p className="mt-2 text-ivory/75">{oferta.pagamento}</p>
                </>
              ) : (
                <p className="font-display text-xl font-extrabold leading-snug text-white sm:text-2xl">{oferta.chamada}</p>
              )}

              <Button href={href} size="block" className="mt-6 w-full">
                {oferta.cta}
              </Button>

              <p className="mt-4 text-sm leading-relaxed text-ivory/65">{oferta.agenda}</p>

              <ul className="mt-6 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-ivory/10 pt-5">
                {oferta.selos.map((selo, i) => {
                  const Icon = selosIcones[i] || ShieldCheck;
                  return (
                    <li key={selo} className="flex items-center gap-2 text-xs font-semibold text-ivory/80">
                      <Icon size={16} className="shrink-0 text-accent" aria-hidden="true" />
                      <span>{selo}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 border-t border-ivory/10 pt-5">
                <h4 className="font-display text-sm font-bold text-white">{oferta.depoisTitulo}</h4>
                <ol className="mt-3 space-y-2">
                  {oferta.depois.map((d, i) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-ivory/75">
                      <span className="font-display font-extrabold text-accent">{i + 1}.</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Abatimento e por quê */}
          <div className="mt-10 grid gap-6 border-t border-accent/20 pt-8 md:grid-cols-2 md:gap-10">
            <div>
              <h4 className="font-display text-base font-bold text-accent">{oferta.abatimento.titulo}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ivory/80 sm:text-base">{oferta.abatimento.texto}</p>
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-accent">{oferta.porque.titulo}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ivory/80 sm:text-base">{oferta.porque.texto}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
