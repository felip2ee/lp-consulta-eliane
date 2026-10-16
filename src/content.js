// =====================================================================
// CONTEÚDO DA PÁGINA
// Tudo que é texto ou número da LP mora aqui. Pra trocar copy, preço,
// duração, link de checkout etc., edite este arquivo. Nada de travessão.
// =====================================================================

export const config = {
  // Oferta
  precoFormatado: 'R$ 497',
  pagamento: 'à vista no Pix ou em 12x de R$ 51,34 no cartão',
  duracaoMinutos: 60,
  formato: 'online, por videochamada',
  vagasPorSemana: null, // coloque o número real (ex.: 6). null mostra "poucos horários por semana"
  prazoAbatimentoDias: 30,
  remarcacaoAntecedenciaHoras: 24,
  resumoPrazoHoras: 24,
  posConsultaDias: 7,

  // Autoridade
  anosMercado: 16,
  volumeEstruturado: 'R$ 500 milhões',

  // Links
  // TROCAR: link de pagamento ou agendamento. Enquanto for "#oferta", os botões
  // rolam até a caixa de oferta.
  checkoutUrl: 'https://pay.cakto.com.br/fyrt9di_980820',
  // Checkout da versão /beaba (upsell pra quem já comprou o Beabá). Hoje é o
  // mesmo produto; se virar outro no gateway, troca aqui.
  checkoutUrlBeaba: 'https://pay.cakto.com.br/fyrt9di_980820',
  // Opcional: link do WhatsApp pra quem tem dúvida antes de agendar.
  // ex.: 'https://wa.me/5563999999999?text=Quero%20saber%20mais%20sobre%20a%20consulta'
  whatsappUrl: '',
};

export const hrefDoCheckout = (url) => (url && !url.startsWith('#') ? url : '#oferta');
export const ctaHref = hrefDoCheckout(config.checkoutUrl);

export const agendaFrase = config.vagasPorSemana
  ? `A Rainha abre só ${config.vagasPorSemana} consultas por semana.`
  : 'A Rainha abre poucos horários por semana.';

// ---------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------
export const hero = {
  eyebrow: 'Empresário, essa conversa é pra você.',
  headline: `Antes de pedir crédito de novo e tomar mais um não, converse com quem estrutura crédito há ${config.anosMercado} anos.`,
  sub: 'A Consulta com a Rainha do Crédito é uma conversa reservada com Eliane Moreira sobre a situação da sua empresa. Você sai sabendo qual crédito faz sentido pro seu objetivo, se é hora de pedir e o que ajustar antes.',
  cta: 'Agendar minha consulta',
  ctaNota: `${config.duracaoMinutos} minutos, só você e a Rainha`,
  fatos: [
    `${config.anosMercado} anos de mercado`,
    `Mais de ${config.volumeEstruturado} em crédito estruturado`,
    'Atendida pela própria Eliane',
  ],
  cardTitulo: 'Consulta reservada',
  cardLinha: `${config.duracaoMinutos} minutos, ${config.formato}`,
  cardNota: 'Agenda limitada',
};

// ---------------------------------------------------------------------
// DOR
// ---------------------------------------------------------------------
export const dor = {
  perguntas: [
    'Precisa de crédito pra sua empresa, mas não sabe qual caminho seguir?',
    'Já tentou e não entende por que não consegue?',
  ],
  intro: 'Se alguma dessas situações é a sua, continue lendo:',
  situacoes: [
    'Sua empresa fatura, mas o banco não libera. E ninguém explica o motivo.',
    'Você já pediu, mandou documento, esperou semanas e ouviu "não" sem saber o que faltou.',
    'O gerente diz que vai analisar e some.',
    'Só te oferecem linha com garantia, aval do sócio e juros que não fecham a conta.',
    'Precisa de capital de giro, estoque ou pagar fornecedor, e não sabe qual linha pedir.',
    'Está tocando a empresa com o cartão ou o limite da pessoa física.',
  ],
};

// ---------------------------------------------------------------------
// MECANISMO
// ---------------------------------------------------------------------
export const mecanismo = {
  titulo: 'O banco não decide no chute.',
  paragrafos: [
    'Ele analisa sua empresa por critérios: como o faturamento aparece no extrato, tempo de CNPJ, histórico de pagamento da empresa e dos sócios, quanto já está comprometido com dívida, garantias, qual linha você pediu e como pediu.',
    'O problema é que ninguém te mostra essa análise. Você pede no escuro, recebe o não e tenta de novo do mesmo jeito. Cada tentativa no escuro deixa registro e pesa na próxima análise.',
    `Quem conhece os critérios faz o contrário: olha a empresa antes, vê o que trava, ajusta, e só então pede. Na linha certa, na hora certa. É assim que a Rainha do Crédito trabalha há ${config.anosMercado} anos.`,
  ],
  ficha: {
    titulo: 'Análise de crédito da empresa',
    subtitulo: 'Uso interno',
    criterios: [
      'Faturamento e como ele aparece no extrato',
      'Tempo de CNPJ',
      'Histórico de pagamento da empresa',
      'Histórico de pagamento dos sócios',
      'Dívidas já comprometidas',
      'Garantias disponíveis',
      'Linha pedida e forma do pedido',
    ],
    carimbo: 'Não compartilhado com o cliente',
  },
};

// ---------------------------------------------------------------------
// PRODUTO
// ---------------------------------------------------------------------
export const produto = {
  titulo: 'A Consulta com a Rainha do Crédito',
  paragrafos: [
    'É um momento reservado entre você e Eliane Moreira pra falar da situação da sua empresa.',
    `Não é aula. Não é conteúdo genérico. É o seu caso, com os seus números, na frente de quem estrutura crédito empresarial há ${config.anosMercado} anos.`,
    'Você conta a situação e o objetivo: capital de giro, expansão, equipamento, trocar uma dívida cara por uma mais barata. Ela te mostra as alternativas de crédito que fazem sentido pro seu caso, o que provavelmente está travando hoje e qual decisão tomar primeiro.',
  ],
};

// ---------------------------------------------------------------------
// COMO FUNCIONA
// ---------------------------------------------------------------------
export const comoFunciona = {
  titulo: 'Como funciona a consulta',
  passos: [
    {
      titulo: 'Você agenda e paga',
      texto: 'Pelo botão desta página. Leva dois minutos.',
    },
    {
      titulo: 'Recebe a confirmação na hora',
      texto: `Por WhatsApp e e-mail, com data, horário e o link da videochamada.`,
    },
    {
      titulo: 'Responde um formulário curto',
      texto: 'Sobre a empresa e o objetivo. A Rainha chega conhecendo o seu cenário, e a hora é usada em orientação, não em explicação.',
    },
    {
      titulo: 'A consulta',
      texto: `${config.duracaoMinutos} minutos, só você e a Rainha.`,
    },
    {
      titulo: 'Resumo escrito',
      texto: `Em até ${config.resumoPrazoHoras} horas, você recebe por WhatsApp um resumo com os caminhos e os próximos passos combinados.`,
    },
  ],
  saiSabendoTitulo: 'O que você sai sabendo',
  saiSabendo: [
    'Quais caminhos de crédito fazem sentido pro seu objetivo. E quais não fazem.',
    'Se é hora de pedir agora ou o que ajustar antes.',
    'O que, na sua empresa, tende a pesar contra na análise.',
    'Qual a próxima decisão, e em que ordem fazer o resto.',
    'Se o seu caso pede uma análise mais profunda ou um trabalho acompanhado, você vai ouvir isso com clareza. E decide depois, sem pressão.',
  ],
  cta: 'Agendar minha consulta',
  ctaNota: `${config.precoFormatado}, ${config.pagamento}`,
};

// ---------------------------------------------------------------------
// PRA QUEM É
// ---------------------------------------------------------------------
export const praQuem = {
  titulo: 'Pra quem é essa consulta',
  simTitulo: 'É pra você se',
  sim: [
    'Tem empresa aberta e um objetivo concreto pro crédito.',
    'Já tomou um não, ou tem medo de tomar.',
    'Quer entender a regra do jogo antes de pedir de novo.',
    'Prefere uma conversa com quem sabe a mais meses tentando sozinho.',
  ],
  naoTitulo: 'Não é pra você se',
  nao: [
    'Quer "limpar o nome" sem resolver a dívida. Isso não existe, e a Rainha não trabalha assim.',
    'Precisa do dinheiro amanhã. A consulta é orientação; crédito tem análise e prazo.',
    'Está procurando empréstimo. Isto não é empréstimo: a Rainha orienta você a buscar crédito do jeito certo, quem libera é a instituição.',
    'Quer alguém que prometa aprovação. Quem aprova é o banco. Quem promete isso está mentindo.',
  ],
};

// ---------------------------------------------------------------------
// QUEM É A RAINHA
// ---------------------------------------------------------------------
export const rainha = {
  titulo: 'Quem é a Rainha do Crédito',
  paragrafos: [
    `Eliane Moreira trabalha com crédito há ${config.anosMercado} anos e já participou da estruturação de mais de ${config.volumeEstruturado} em operações de crédito aprovadas.`,
    'Ela não estuda o sistema de fora. Opera dentro dele: sabe como o banco analisa, o que pesa, o que derruba uma operação e o que faz uma operação passar.',
    'Na consulta, é ela quem te atende. Não é equipe, não é roteiro.',
  ],
  numeros: [
    { valor: `${config.anosMercado} anos`, rotulo: 'de mercado de crédito' },
    { valor: `+ ${config.volumeEstruturado}`, rotulo: 'em operações estruturadas' },
  ],
};

// ---------------------------------------------------------------------
// SOZINHO VS COM A RAINHA
// ---------------------------------------------------------------------
export const comparacao = {
  titulo: 'Tentar de novo sozinho ou sentar com a Rainha',
  colunaA: 'Tentar de novo sozinho',
  colunaB: 'Uma consulta com a Rainha',
  linhas: [
    {
      rotulo: 'Caminho',
      a: 'Pede no escuro, na linha que o gerente ofereceu',
      b: 'Pede na linha certa pro seu objetivo',
    },
    {
      rotulo: 'Tempo',
      a: 'Semanas esperando resposta, sem saber o que faltou',
      b: `${config.duracaoMinutos} minutos e você sai com a próxima decisão`,
    },
    {
      rotulo: 'Risco',
      a: 'Mais um "não" registrado no histórico',
      b: 'Você sabe antes se é hora de pedir',
    },
    {
      rotulo: 'Custo',
      a: 'Juros da linha errada, capital parado, cartão PF na empresa',
      b: `${config.precoFormatado}, que viram crédito se você seguir com a Rainha`,
    },
  ],
};

// ---------------------------------------------------------------------
// OFERTA
// ---------------------------------------------------------------------
export const oferta = {
  titulo: 'Consulta com a Rainha do Crédito',
  subtitulo: 'Um momento reservado com Eliane Moreira',
  inclusoTitulo: 'O que está incluso',
  incluso: [
    `${config.duracaoMinutos} minutos de conversa reservada com Eliane Moreira, ${config.formato}.`,
    'Formulário pré-consulta: a Rainha chega conhecendo o seu caso.',
    `Resumo escrito em até ${config.resumoPrazoHoras} horas, por WhatsApp, com os caminhos e os próximos passos.`,
    `${config.posConsultaDias} dias de pós-consulta: ficou uma dúvida sobre o que foi combinado, você manda por WhatsApp e recebe a resposta.`,
  ],
  bonusTitulo: 'Bônus',
  bonus: [
    {
      nome: 'Beabá do Crédito Vol. 1 + Comunidade da Rainha',
      texto: 'O manual da Rainha, em 8 módulos, pra você chegar na consulta já entendendo a regra do jogo:',
      itens: [
        'Qual tipo de crédito serve pra giro, expansão e investimento',
        'Os erros que derrubam a aprovação de empresa boa',
        'Como o banco avalia a sua empresa de verdade',
        'Quanto a sua empresa consegue captar hoje',
        'Como estruturar a empresa pra reduzir o risco aos olhos do banco',
        'Plano de captação em 90 dias, do diagnóstico à negociação',
      ],
      imagem: '/assets/logo-beaba.webp',
    },
    {
      nome: 'Checklist Pedido Perfeito',
      texto: 'O que o banco olha antes de liberar crédito pra empresa, pra você conferir o pedido antes de mandar. Chega junto com a confirmação.',
      imagem: '/assets/beaba-mockup.webp',
    },
  ],
  precoLabel: 'Valor',
  preco: config.precoFormatado,
  pagamento: config.pagamento,
  cta: 'Agendar minha consulta',
  agenda: `${agendaFrase} Ela também toca as operações dos clientes de consultoria, por isso a agenda é limitada de verdade.`,
  selos: [
    'Garantia de clareza',
    'Pagamento seguro',
    'Nota fiscal pro seu CNPJ',
    'Atendida pela própria Eliane',
  ],
  abatimento: {
    titulo: `Os ${config.precoFormatado} não são dinheiro perdido`,
    texto: `Se em até ${config.prazoAbatimentoDias} dias você decidir seguir com a Rainha no próximo passo (a análise completa ou o acompanhamento), o valor da consulta é abatido.`,
  },
  porque: {
    titulo: `Por que ${config.precoFormatado}?`,
    texto: 'É o preço de uma hora na agenda de quem estrutura operações de milhões. Compare com o que custa mais um pedido negado: meses parado, estoque sem comprar, capital de giro no cartão da pessoa física.',
  },
  depoisTitulo: 'Depois do clique',
  depois: [
    'Pagamento seguro, no Pix ou no cartão.',
    'Confirmação na hora por WhatsApp e e-mail, com o formulário pré-consulta e os bônus.',
    'Você escolhe o horário na agenda da Rainha.',
  ],
};

// ---------------------------------------------------------------------
// GARANTIAS
// ---------------------------------------------------------------------
export const garantias = {
  titulo: 'Você não corre risco nessa consulta. A Rainha corre.',
  itens: [
    {
      icone: 'clareza',
      titulo: 'Garantia de clareza',
      texto: 'Se você chegar ao fim da consulta e sentir que não saiu com um caminho claro pro seu caso, fala na hora. Devolvemos 100% do valor, sem perguntas.',
    },
    {
      icone: 'encaixe',
      titulo: 'Garantia de encaixe',
      texto: 'Depois que você responde o formulário, a Rainha olha o seu caso antes do horário. Se ela vir que a consulta não vai te ajudar agora, você é avisado antes e recebe o valor de volta. Você não paga pra ouvir "não dá".',
    },
    {
      icone: 'agenda',
      titulo: 'Garantia de agenda',
      texto: `Imprevisto acontece. Você pode remarcar uma vez, sem custo, avisando com ${config.remarcacaoAntecedenciaHoras} horas de antecedência.`,
    },
  ],
  naoGarantimos: 'O que não garantimos, e ninguém sério garante: aprovação. Quem aprova é o banco. O que a consulta garante é que você vai chegar lá sabendo o que está fazendo.',
};

// ---------------------------------------------------------------------
// OBJEÇÕES (respondidas de frente) E DÚVIDAS PRÁTICAS (acordeão)
// ---------------------------------------------------------------------
export const objecoes = {
  titulo: 'O que todo empresário pergunta antes de agendar',
  itens: [
    {
      pergunta: `"Vou pagar ${config.precoFormatado} pra ouvir o que já vi de graça no Instagram?"`,
      resposta: 'Não. O conteúdo gratuito fala de casos em geral. A consulta olha o seu caso: o faturamento da sua empresa, o tempo de CNPJ, as dívidas que você tem, o que já pediu e onde negaram. "Qual linha eu peço pra comprar estoque com um ano de CNPJ e uma restrição no nome do sócio?" é pergunta que só se responde olhando o caso. É isso que você compra.',
    },
    {
      pergunta: '"Vão tentar me vender outra coisa cara?"',
      resposta: 'A consulta vale por si. Você paga por orientação e sai com ela. Se a Rainha enxergar que o seu caso pede um trabalho mais completo, ela vai te dizer com clareza, e a decisão é sua. Ninguém sai da consulta com uma proposta que não pediu.',
    },
    {
      pergunta: '"E se não tiver jeito pro meu caso agora?"',
      resposta: 'Então você vai saber disso antes de gastar mais um pedido. Saber que não é hora, e o que fazer pra ser daqui a alguns meses, já evita mais um não no histórico. Isso também é resultado.',
    },
    {
      pergunta: '"A consulta garante que vou conseguir o crédito?"',
      resposta: 'Não. Quem aprova é o banco. O que a consulta faz é você chegar lá do jeito que o banco quer ver. Não existe aprovação garantida. Existe pedido bem preparado e pedido no escuro.',
    },
  ],
};

export const faq = {
  titulo: 'Dúvidas práticas',
  itens: [
    {
      pergunta: 'É online ou presencial?',
      resposta: 'Online, por videochamada, de onde você estiver. O link chega na confirmação.',
    },
    {
      pergunta: 'Quanto tempo dura?',
      resposta: `${config.duracaoMinutos} minutos, só você e a Rainha. Com o formulário pré-consulta, esse tempo é todo usado no seu caso.`,
    },
    {
      pergunta: 'Preciso preparar alguma coisa?',
      resposta: 'Responder o formulário pré-consulta e ter em mãos o básico: faturamento dos últimos meses, dívidas atuais e o que já foi pedido e negado. Não precisa de balanço pronto.',
    },
    {
      pergunta: 'Minha empresa é pequena ou nova. Vale a pena?',
      resposta: 'Vale, desde que tenha CNPJ e um objetivo claro pro crédito. Se for cedo demais pra pedir, a Rainha te diz isso e o que fazer até lá. Isso também é orientação.',
    },
    {
      pergunta: 'Como funciona a garantia?',
      resposta: 'Três formas. Se a consulta não te deixar com um caminho claro, devolvemos o valor. Se a Rainha vir pelo formulário que não vai conseguir te ajudar agora, avisa antes e devolve. E você pode remarcar uma vez sem custo.',
    },
    {
      pergunta: 'Recebo nota fiscal?',
      resposta: 'Sim, em nome do CNPJ. A consulta é despesa da empresa.',
    },
    {
      pergunta: 'E se eu seguir com a Rainha depois da consulta?',
      resposta: `Os ${config.precoFormatado} são abatidos do próximo passo, se você decidir em até ${config.prazoAbatimentoDias} dias. A consulta nunca vira custo a mais.`,
    },
    {
      pergunta: 'Posso remarcar?',
      resposta: `Uma vez, sem custo, avisando com ${config.remarcacaoAntecedenciaHoras} horas de antecedência.`,
    },
    {
      pergunta: 'Quando tem horário?',
      resposta: `Os horários disponíveis aparecem na agenda logo depois do pagamento. ${agendaFrase} Por isso o mais próximo pode ser daqui a alguns dias.`,
    },
  ],
};

// ---------------------------------------------------------------------
// CTA FINAL
// ---------------------------------------------------------------------
export const ctaFinal = {
  titulo: 'Quer ter esse momento com a Rainha?',
  linhas: [
    `${agendaFrase} Cada consulta é com um empresário de cada vez.`,
    `Você entra com a sua situação e sai com um caminho. Se não sair, devolvemos o valor. Se seguir com a Rainha, os ${config.precoFormatado} viram crédito.`,
  ],
  cta: 'Quero meu momento com a Rainha',
  nota: `${config.precoFormatado}, ${config.pagamento}`,
};

// Tudo que a página lê, num objeto só. A versão /beaba (content-beaba.js)
// parte deste objeto e troca só o que muda.
export const conteudo = {
  config, ctaHref, hero, dor, mecanismo, produto, comoFunciona, praQuem,
  rainha, comparacao, oferta, garantias, objecoes, faq, ctaFinal,
};

// ---------------------------------------------------------------------
// RODAPÉ
// ---------------------------------------------------------------------
export const rodape = {
  marca: 'Rainha do Crédito',
  descricao: 'Consulta de orientação em crédito empresarial com Eliane Moreira.',
  aviso: 'Esta página não é de um banco, não concede empréstimos e não garante aprovação de crédito. Quem decide é a instituição financeira. A consulta é orientação profissional sobre o seu caso.',
  termos: {
    titulo: 'Termos de uso',
    texto: `A Consulta com a Rainha do Crédito é um serviço de orientação em crédito empresarial prestado por Eliane Moreira. Não constitui concessão de crédito, intermediação com resultado garantido nem promessa de aprovação: a decisão é sempre da instituição financeira. As garantias de clareza, encaixe e agenda valem conforme descritas nesta página. Remarcação sem custo uma vez, com ${config.remarcacaoAntecedenciaHoras} horas de antecedência. O abatimento do valor da consulta vale pra contratação do próximo passo em até ${config.prazoAbatimentoDias} dias.`,
  },
  privacidade: {
    titulo: 'Política de privacidade',
    texto: 'Os dados que você informa (nome, contato e as informações da empresa enviadas no formulário pré-consulta) são usados apenas pra preparar e realizar a consulta e pra emitir a nota fiscal. Não compartilhamos seus dados com terceiros. O pagamento é processado por plataforma segura; não armazenamos dados de cartão.',
  },
};

// ---------------------------------------------------------------------
// OBRIGADO (página /obrigado, destino do formulário de aplicação da RMA)
// Tela única, no modelo "quase lá": agradece, manda confirmar no WhatsApp,
// avisa que sem confirmação a vaga vai pra outro, botão de WhatsApp e a
// promessa do que a Rainha entrega. Preencher não garante vaga nem crédito.
// ---------------------------------------------------------------------
export const obrigado = {
  produto: 'Mentoria RMA',
  vagasPorSemana: 8, // igual ao formulário
  formularioUrl: 'https://yayforms.link/m3kXj2l',
  whatsappNumero: '556381089024',
  whatsappMensagem: 'Olá, acabei de me aplicar pra Mentoria RMA e quero adiantar a confirmação do meu horário.',

  eyebrow: 'Quase lá!',
  titulo: 'Sua aplicação foi enviada.',
  atencao: [
    { antes: 'Atenção: fique de olho no seu WhatsApp, pois ', forte: 'você vai precisar confirmar o seu horário com o nosso time.' },
    { antes: 'Se não confirmar, ', forte: 'a vaga pode ir pra outro empresário.' },
  ],
  furarFila: 'Pra furar a fila e falar com o time o quanto antes, clique no botão abaixo:',
  cta: 'Quero falar com o time',

  promessaTitulo: 'O que a Rainha vai entregar na sua consulta',
  entregas: [
    {
      titulo: 'Análise 360° da sua empresa',
      texto: 'A Rainha olha a empresa do jeito que o banco olha: faturamento, tempo de CNPJ, histórico de pagamento da empresa e dos sócios, dívidas, garantias e o que já foi pedido e negado.',
    },
    {
      titulo: 'Plano de ação personalizado',
      texto: 'O que ajustar, em que ordem e qual linha pedir pra ser bem visto no banco e ter acesso aos melhores créditos, com o teto que a sua empresa sustenta.',
    },
  ],

  aviso: 'Preencher o formulário não garante uma das vagas e não é promessa de crédito. Quem aprova é o banco. As vagas são limitadas, por isso cada interessado é avaliado com cuidado.',
};

export const obrigadoWhatsappHref = obrigado.whatsappNumero
  ? `https://wa.me/${obrigado.whatsappNumero}?text=${encodeURIComponent(obrigado.whatsappMensagem)}`
  : '#';
