import React, { useEffect, useState } from 'react';
import { Crown, X } from 'lucide-react';
import { rodape } from '../../content';
import { Container } from './ui';

export default function Footer() {
  const [modal, setModal] = useState(null); // null | 'termos' | 'privacidade'

  useEffect(() => {
    if (!modal) return undefined;
    const onKey = (e) => e.key === 'Escape' && setModal(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal]);

  const conteudo = modal ? rodape[modal] : null;

  return (
    <footer className="border-t border-accent/15 bg-dark pb-28 pt-14 md:pb-10">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <Crown size={18} className="text-accent" aria-hidden="true" />
              {rodape.marca}
            </p>
            <p className="mt-2 text-sm text-ivory/60">{rodape.descricao}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivory/60" aria-label="Documentos">
            <button type="button" onClick={() => setModal('termos')} className="hover:text-accent">
              {rodape.termos.titulo}
            </button>
            <button type="button" onClick={() => setModal('privacidade')} className="hover:text-accent">
              {rodape.privacidade.titulo}
            </button>
          </nav>
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ivory/45">{rodape.aviso}</p>

        <div className="mt-8 flex flex-col gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eliane Moreira. Todos os direitos reservados.</p>
          <a
            href="https://www.instagram.com/novadigital.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-ivory/80"
          >
            <span>Desenvolvido por</span>
            <img src="/assets/logo-novadigital.webp" alt="Nova Digital" className="relative top-[2px] h-6 w-auto opacity-90" loading="lazy" />
          </a>
        </div>
      </Container>

      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-titulo"
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-accent/30 bg-background p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h4 id="modal-titulo" className="font-display text-2xl font-bold text-white">{conteudo.titulo}</h4>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-full p-2 text-ivory/60 hover:text-white"
                aria-label="Fechar"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <p className="mt-5 leading-relaxed text-ivory/80">{conteudo.texto}</p>
            <button
              type="button"
              onClick={() => setModal(null)}
              className="mt-8 w-full rounded-full bg-accent py-3 font-display font-bold text-dark hover:bg-accentHover"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
