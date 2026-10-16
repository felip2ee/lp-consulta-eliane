import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ itens }) {
  const [aberto, setAberto] = useState(null);

  return (
    <div className="divide-y divide-ivory/10 border-y border-ivory/10">
      {itens.map((item, i) => {
        const isOpen = aberto === i;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={item.pergunta}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setAberto(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <span className="font-display text-base font-bold text-white sm:text-lg">{item.pergunta}</span>
              <ChevronDown
                size={20}
                aria-hidden="true"
                className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div id={panelId} className="acc-panel" data-open={isOpen}>
              <div>
                <p className="pb-5 pr-8 leading-relaxed text-ivory/80">{item.resposta}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
