import React, { useEffect, useState } from 'react';

// Barra fixa no rodapé do celular. Aparece depois que a pessoa passa do hero
// e some quando a caixa de oferta ou o CTA final estão na tela.
// `preco` vazio (versão /beaba) mostra só o rótulo.
export default function StickyBar({ rotulo, preco, href }) {
  const [visivel, setVisivel] = useState(false);
  const [escondida, setEscondida] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 560);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const alvos = ['oferta', 'cta-final'].map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => setEscondida(entries.some((e) => e.isIntersecting)),
      { threshold: 0.15 },
    );
    alvos.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  const mostrar = visivel && !escondida;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-accent/30 bg-dark/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        mostrar ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!mostrar}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          {preco ? (
            <>
              <p className="text-xs text-ivory/60">{rotulo}</p>
              <p className="font-display text-xl font-extrabold text-accent">{preco}</p>
            </>
          ) : (
            <p className="font-display text-sm font-bold text-white">{rotulo}</p>
          )}
        </div>
        <a
          href={href}
          tabIndex={mostrar ? 0 : -1}
          className="rounded-full bg-accent px-6 py-3 font-display text-sm font-bold text-dark shadow-lg shadow-accent/25"
        >
          Agendar consulta
        </a>
      </div>
    </div>
  );
}
