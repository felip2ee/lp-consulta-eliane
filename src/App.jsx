import React from 'react';
import ConsultaLP from './pages/ConsultaLP';
import Obrigado from './pages/Obrigado';
import { conteudoBeaba } from './content-beaba';

// Sem roteador: três páginas. O nginx devolve index.html pra qualquer
// caminho, então /obrigado e /beaba funcionam em produção e no `vite dev`.
function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/obrigado') return <Obrigado />;
  // Upsell pra quem já comprou o Beabá (CTA do manual e redirect de compra aprovada).
  if (path === '/beaba') return <ConsultaLP conteudo={conteudoBeaba} />;
  return <ConsultaLP />;
}

export default App;
