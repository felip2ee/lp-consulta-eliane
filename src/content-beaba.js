// =====================================================================
// VERSÃO /beaba: upsell pra quem já comprou o Beabá do Crédito Vol. 1.
// Chega pelo CTA no fim do manual ou pelo redirect de compra aprovada.
// Parte do conteúdo da LP principal e troca só o que muda. Sem preço: a
// pessoa descobre no checkout. Vocabulário: "encontro com a Rainha".
// A consulta entrega diagnóstico da empresa, parecer técnico e a linha
// indicada. Nada de travessão.
// =====================================================================
import { conteudo as base, config as cfg, hrefDoCheckout, agendaFrase } from './content';

const config = { ...cfg, precoFormatado: null, precoCheio: null, checkoutUrl: cfg.checkoutUrlBeaba };
const ctaHref = hrefDoCheckout(config.checkoutUrl);
const cta = 'Quero meu encontro com a Rainha';
const semRelogio = 'Encontro individual com a Eliane, sem relógio';
const escassez = `Condição especial de ${config.promocaoMes} pra quem já tem o Beabá. O valor você vê no checkout.`;

const hero = {
  eyebrow: 'Você já tem o mapa. Agora, uma pergunta honesta.',
  headline: 'Quer percorrer o caminho sozinho, ou ter um encontro com a Rainha e sair com ele claro?',
  sub: 'A Consulta Direta com a Rainha do Crédito é um encontro com Eliane Moreira, olhando só para a sua empresa. Você sai com o diagnóstico da empresa, o parecer técnico e a linha de crédito indicada pro seu momento.',
  cta,
  ctaNota: semRelogio,
  fatos: base.hero.fatos,
  cardTitulo: 'Consulta Direta',
  cardLinha: 'Encontro individual, sem relógio: dura o tempo que o seu caso precisar.',
  cardNota: `Condição de ${config.promocaoMes}. Agenda limitada.`,
};

const dor = {
  perguntas: ['Leu o manual e ficou a pergunta: "e no meu caso?"'],
  intro: 'É normal. Interpretar os próprios números é a parte mais difícil quando a empresa analisada é a sua:',
  situacoes: [
    'Você sabe o que o banco olha, mas não sabe como a sua empresa aparece pra ele hoje.',
    'Sabe que existem várias linhas, mas não sabe qual pedir pro seu objetivo e pro seu momento.',
    'Tem o plano de 90 dias na mão, mas um erro na execução custa meses e mais um não no histórico.',
  ],
};

const mecanismo = {
  ...base.mecanismo,
  paragrafos: [
    'Você viu no manual: o banco analisa sua empresa por critérios. Faturamento no extrato, tempo de CNPJ, histórico de pagamento, dívidas, garantias, qual linha foi pedida e como.',
    'O que o manual não consegue fazer é olhar a sua empresa. Quem lê os próprios números de dentro tende a ver o que quer ver, e cada pedido no escuro deixa registro.',
    `Na consulta, a Rainha faz a leitura de fora, como o banco faz, há ${config.anosMercado} anos: vê o que trava, o que ajustar, e indica a linha certa pro seu momento.`,
  ],
};

const produto = {
  titulo: 'A Consulta Direta com a Rainha do Crédito',
  paragrafos: [
    'É um encontro entre você e Eliane Moreira, olhando só para a sua empresa.',
    `Não é aula. A aula você já teve no manual. É o seu caso, com os seus números, na frente de quem estrutura crédito empresarial há ${config.anosMercado} anos.`,
    'Você conta a situação e o objetivo. Ela faz o diagnóstico da sua empresa como o banco enxerga, te dá o parecer do que fortalece e do que limita o seu acesso ao crédito, e indica a linha certa pro seu momento.',
  ],
};

const comoFunciona = {
  ...base.comoFunciona,
  passos: [
    { titulo: 'Você garante a sua consulta', texto: 'Pelo botão desta página. Leva dois minutos.' },
    { titulo: 'Recebe a confirmação na hora', texto: 'Por WhatsApp e e-mail, com data, horário e o link da videochamada.' },
    { titulo: 'Responde um formulário curto', texto: 'Sobre a empresa e o objetivo. A Rainha chega conhecendo o seu cenário.' },
    { titulo: 'O encontro com a Rainha', texto: 'Individual, sem relógio: dura o tempo que o seu caso precisar.' },
    { titulo: 'Parecer por escrito', texto: `Em até ${config.resumoPrazoHoras} horas, você recebe por WhatsApp o parecer técnico com a leitura do seu caso e a linha indicada.` },
  ],
  saiSabendo: [
    'Como o banco enxerga a sua empresa hoje.',
    'O que fortalece e o que limita o seu acesso ao crédito.',
    'Qual linha de crédito pedir pro seu momento. E qual não pedir.',
    'Se é hora de pedir agora ou o que ajustar antes.',
    'Se o seu caso pede um trabalho acompanhado, você vai ouvir isso com clareza. E decide ali, sem pressão.',
  ],
  cta,
  ctaNota: semRelogio,
};

const praQuem = {
  ...base.praQuem,
  sim: [
    'Tem empresa aberta e um objetivo concreto pro crédito.',
    'Já tomou um não, ou tem medo de tomar.',
    'Leu o Beabá e quer aplicar no seu caso sem errar a ordem.',
    'Prefere um encontro com quem sabe a mais meses tentando sozinho.',
  ],
};

const rainha = {
  ...base.rainha,
  paragrafos: [base.rainha.paragrafos[0], base.rainha.paragrafos[2]],
};

const comparacao = {
  titulo: 'Seguir o manual sozinho ou ter um encontro com a Rainha',
  colunaA: 'Seguir o manual sozinho',
  colunaB: 'Um encontro com a Rainha',
  linhas: [
    { rotulo: 'Caminho', a: 'Interpreta os próprios números e escolhe a linha por conta', b: 'A Rainha lê os seus números e indica a linha' },
    { rotulo: 'Tempo', a: 'Um erro na execução do plano de 90 dias custa meses', b: 'Um encontro e você sai sabendo o que pedir e quando' },
    { rotulo: 'Risco', a: 'Mais um "não" registrado no histórico', b: 'Você sabe antes se é hora de pedir' },
    { rotulo: 'Custo', a: 'Juros da linha errada, capital parado, cartão PF na empresa', b: 'O valor da consulta, abatido se você decidir seguir com a Rainha ainda no encontro' },
  ],
};

const oferta = {
  ...base.oferta,
  titulo: 'Consulta Direta com a Rainha do Crédito',
  subtitulo: 'Um encontro com a Eliane, olhando só para a sua empresa',
  incluso: [
    'Encontro individual com Eliane Moreira, sem relógio: dura o tempo que o seu caso precisar.',
    'Diagnóstico da sua empresa, como o banco enxerga hoje.',
    'Parecer técnico com a leitura do que fortalece e do que limita o seu acesso ao crédito.',
    'A linha de crédito indicada pro seu momento, e o que ajustar antes de pedir.',
    `${config.posConsultaDias} dias de pós-consulta: ficou uma dúvida sobre o parecer, você manda por WhatsApp e recebe a resposta.`,
  ],
  bonus: base.oferta.bonus.filter((b) => b.imagem !== '/assets/logo-beaba.webp'),
  cta: 'Quero meu encontro',
  // Sem preço: entra esta chamada no lugar dele. O valor aparece no checkout.
  precoLabel: null,
  precoCheio: null,
  preco: null,
  pagamento: null,
  chamada: 'Sua empresa, os seus números, e a Rainha do outro lado da tela.',
  escassez,
  abatimento: {
    titulo: 'O valor da consulta não é dinheiro perdido',
    texto: 'Se você decidir seguir com a Rainha no próximo passo (o acompanhamento da operação), o valor da consulta é abatido. Vale pra decisão tomada ainda no encontro.',
  },
  porque: {
    titulo: 'Por que uma consulta, se eu já tenho o manual?',
    texto: 'O manual te dá o mapa. A consulta olha o seu terreno: a sua empresa, os seus números, o seu momento. Você sai com o caminho claro, em vez de meses de erro na execução.',
  },
  depois: [
    'Pagamento seguro, no Pix ou no cartão.',
    'Confirmação na hora por WhatsApp e e-mail, com o formulário pré-consulta.',
    'Você escolhe o horário na agenda da Rainha.',
  ],
};

const objecoes = {
  ...base.objecoes,
  itens: [
    {
      pergunta: '"Vou pagar pra ouvir o que já li no manual?"',
      resposta: 'Não. O manual fala da regra do jogo. A consulta olha o seu caso: o faturamento da sua empresa, o tempo de CNPJ, as dívidas que você tem, o que já pediu e onde negaram. "Qual linha eu peço pra comprar estoque com um ano de CNPJ?" é pergunta que só se responde olhando o caso. É isso que você compra.',
    },
    ...base.objecoes.itens.slice(1),
  ],
};

const faq = {
  ...base.faq,
  itens: base.faq.itens
    .filter((item) => item.pergunta !== 'Até quando vale esse valor?')
    .map((item) => {
      if (item.pergunta === 'Quanto tempo dura?') {
        return { ...item, resposta: 'Não tem relógio. O encontro dura o tempo que o seu caso precisar. Com o formulário pré-consulta respondido antes, esse tempo é todo usado no seu caso.' };
      }
      if (item.pergunta === 'E se eu seguir com a Rainha depois da consulta?') {
        return { ...item, resposta: 'O valor da consulta é abatido do próximo passo, se você decidir ainda no encontro. A consulta nunca vira custo a mais.' };
      }
      return item;
    }),
};

const ctaFinal = {
  titulo: 'Você já tem o mapa. Quer o caminho claro pro seu caso?',
  linhas: [
    `${agendaFrase} Cada consulta é com um empresário de cada vez.`,
    'Você entra com a sua situação e sai com o diagnóstico e o parecer. Se não sair com um caminho claro, devolvemos o valor. Se decidir seguir com a Rainha ainda no encontro, o valor da consulta vira crédito.',
    escassez,
  ],
  cta,
  nota: semRelogio,
};

export const conteudoBeaba = {
  ...base,
  tituloDocumento: 'Consulta Direta com a Rainha do Crédito | Eliane Moreira',
  config, ctaHref, hero, dor, mecanismo, produto, comoFunciona, praQuem,
  rainha, comparacao, oferta, objecoes, faq, ctaFinal,
};
