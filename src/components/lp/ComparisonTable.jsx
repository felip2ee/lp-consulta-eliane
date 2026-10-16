import React from 'react';
import { Crown } from 'lucide-react';

export default function ComparisonTable({ comparacao }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-8">
      {/* Sozinho */}
      <div className="rounded-3xl border border-ivory/10 bg-dark/40 p-6 sm:p-8">
        <h3 className="font-display text-xl font-bold text-ivory/60">{comparacao.colunaA}</h3>
        <dl className="mt-6 space-y-5">
          {comparacao.linhas.map((l) => (
            <div key={l.rotulo} className="border-b border-ivory/10 pb-4 last:border-0 last:pb-0">
              <dt className="text-xs font-semibold text-ivory/45">{l.rotulo}</dt>
              <dd className="mt-1 text-ivory/75">{l.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Com a Rainha */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-accent bg-primary p-6 shadow-gold sm:p-8">
        <Crown size={120} className="absolute -right-6 -top-6 text-accent/10" aria-hidden="true" />
        <h3 className="relative font-display text-xl font-bold text-accent">{comparacao.colunaB}</h3>
        <dl className="relative mt-6 space-y-5">
          {comparacao.linhas.map((l) => (
            <div key={l.rotulo} className="border-b border-accent/20 pb-4 last:border-0 last:pb-0">
              <dt className="text-xs font-semibold text-accent/80">{l.rotulo}</dt>
              <dd className="mt-1 font-semibold text-white">{l.b}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
