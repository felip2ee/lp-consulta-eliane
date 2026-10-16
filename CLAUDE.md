# LP · Consulta com a Rainha do Crédito

Landing page de vendas da **consulta** (R$ 497), primeiro degrau do funil consulta → diagnóstico → consultoria. Irmã da LP do Beabá (`lp-eliane-corretores-de-credito-21-11-2026`): mesma stack, mesma identidade, mesmo deploy.

## Stack
- Vite 5 + React 18 + Tailwind 3. Ícones: lucide-react. Fontes servidas pelo próprio site via @fontsource (Montserrat 700/800, Open Sans 400/600/700), sem Google Fonts.
- `npm install` → `npm run dev` (local) → `npm run build` (gera `dist/`).
- Deploy igual ao Beabá: Dockerfile (node → nginx), workflow do GitHub publica a imagem no GHCR, `docker-stack.yml` sobe no Swarm atrás do Traefik.

## Onde mexer
- **Toda a copy e os números estão em `src/content.js`.** Preço, duração, formato, parcelamento, vagas por semana, prazo do abatimento, link de checkout, link de WhatsApp: tudo no objeto `config` no topo do arquivo. Os textos leem dessas variáveis.
- Layout e ordem dos blocos: `src/pages/ConsultaLP.jsx`.
- **Página de obrigado (`/obrigado`)**: `src/pages/Obrigado.jsx`, copy no objeto `obrigado` em `src/content.js`. É o destino do formulário de aplicação da Mentoria RMA (yayforms, link em `obrigado.formularioUrl`). Sem roteador: `src/App.jsx` escolhe a página pelo `window.location.pathname`, e o nginx devolve `index.html` pra qualquer caminho.
- **Versão upsell (`/beaba`)**: pra quem já comprou o Beabá (CTA na página 34 do manual e redirect de compra aprovada). Mesma `ConsultaLP.jsx`, com o conteúdo de `src/content-beaba.js`, que parte do objeto `conteudo` de `content.js` e troca só o que muda. Oferta é a prometida no manual ("Consulta Direta", sem relógio, pesquisa base, parecer técnico, plano de ação). **Sem preço em lugar nenhum**: a pessoa vê no checkout (`config.checkoutUrlBeaba`). Bônus Beabá some (ela já tem).
- Caixa de oferta: `src/components/lp/ConviteCard.jsx`. FAQ, comparação, barra fixa do celular e rodapé em `src/components/lp/`.
- Imagens em `public/assets/` (cutout da Eliane em alta, retrato emoldurado, chave, logo do Beabá, logo Nova Digital).

## Identidade visual (tailwind.config.js)
- primary `#063A29` · secondary `#105B41` · accent (dourado) `#DCA452` · background `#04281C` · dark `#02150E` · ivory `#F3EEE4` (texto no escuro e seções claras)
- Display: Montserrat · Corpo: Open Sans
- Objeto-assinatura da página: a "ficha de consulta" (card com filete dourado), que aparece pequena no hero e grande na oferta.

## Regras de copy
- **Sem travessão** em lugar nenhum. Vírgula, ponto, dois-pontos ou parênteses.
- **Nunca prometer aprovação.** Quem aprova é o banco. As garantias cobrem orientação (clareza, encaixe, agenda), nunca resultado.
- **Nunca atacar assessoria/consultoria.** O vilão é pedir crédito no escuro, não o serviço profissional (a consultoria é o degrau de cima deste funil).
- Vocabulário do empresário: "o banco não libera", "capital de giro", "cartão PF na empresa". Termo técnico só depois do termo popular.
- Produto é "Consulta com a Rainha do Crédito"; a Eliane é "a Rainha" nas frases curtas.

## Decisões padrão que a Eliane precisa confirmar (todas editáveis em `config`)
- Duração: 60 minutos. Formato: online, por videochamada.
- Pagamento: "à vista no Pix ou no cartão" (sem número de parcelas até definir).
- Agenda: sem número de vagas (`vagasPorSemana: null` mostra "poucos horários por semana"). Com o número real, a copy troca sozinha.
- Garantias: clareza (reembolso se não sair com caminho claro), encaixe (ela recusa e devolve antes da consulta se não puder ajudar) e agenda (uma remarcação sem custo com 24h).
- Abatimento dos R$ 497 no próximo passo em até 30 dias.
- Bônus: Beabá Vol. 1 + Comunidade da Rainha, e o checklist "o que o banco olha" (ainda precisa ser produzido como PDF).
- Resumo escrito em até 24h e 7 dias de pós-consulta por WhatsApp.
- Nota fiscal em nome do CNPJ.
- Prova: 16 anos de mercado, mais de R$ 500 milhões estruturados (a LP do Beabá ainda mostra R$ 400 milhões).

## Pendências pra publicar
- Configurar o redirect final do yayforms pra `https://<domínio>/obrigado`. Confirmar `obrigado.produto` (está "Mentoria RMA").
- `checkoutUrl` e `checkoutUrlBeaba` em `src/content.js` (links de pagamento ou agendamento). Enquanto forem `#oferta`, os botões só rolam até a oferta.
- Apontar o botão da página 34 do PDF do Beabá e o redirect de compra aprovada pra `https://<domínio>/beaba`.
- Criar o formulário pré-consulta e o fluxo de confirmação (WhatsApp + e-mail).
- Domínio no `docker-stack.yml` (está `consulta.elianearainhadocredito.com`) e nome da imagem no GHCR (repo: `felip2ee/lp-consulta-eliane`).
- Confirmar se o container GTM-W8463MHG (o mesmo do Beabá) é o certo pra esta página.
- Depoimento real, se existir, pra entrar entre "Quem é a Rainha" e a comparação.
