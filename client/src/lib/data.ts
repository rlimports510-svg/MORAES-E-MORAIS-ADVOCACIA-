// MORAES & MORAIS ADVOGADOS — Dados centralizados
// Precision Law Design System

export const WHATSAPP_NUMBER = "5531998188723";
export const PHONE_NUMBER = "(11) 9999-9999";
export const EMAIL = "contato@moraesmorais.adv.br";
export const ADDRESS = "Av. Paulista, 1000 — Conjunto 101, São Paulo — SP";
export const WORKING_HOURS = "Segunda a Sexta: 8h às 18h | Sábado: 9h às 13h";

export interface Lawyer {
  id: string;
  name: string;
  oab: string;
  specialty: string;
  specialtyId: string;
  role: string;
  formation: string;
  experience: string;
  areas: string[];
  bio: string;
  photo: string;
  photoFull: string;
  email: string;
  linkedin?: string;
}

export interface Specialty {
  id: string;
  title: string;
  shortTitle: string;
  lawyerId: string;
  color: string;
  bgColor: string;
  icon: string;
  description: string;
  longDescription: string;
  problems: { title: string; description: string }[];
  howWeWork: string[];
  faq: { question: string; answer: string }[];
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorId: string;
  specialtyId: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  tags: string[];
}

export const lawyers: Lawyer[] = [
  {
    id: "frederico-moraes",
    name: "Dr. Frederico Moraes",
    oab: "",
    specialty: "Direito Civil",
    specialtyId: "civil",
    role: "Sócio Fundador",
    formation: "Direito — USP | Especialização em Direito Civil — PUC-SP",
    experience: "12 anos de experiência",
    areas: ["Contratos", "Indenizações", "Responsabilidade Civil", "Conflitos Patrimoniais", "Direito de Família"],
    bio: "Especialista em Direito Civil com mais de 12 anos de atuação. Formado pela USP com especialização pela PUC-SP, Dr. Frederico Moraes construiu uma trajetória sólida na resolução de conflitos civis complexos, sempre priorizando estratégias que protejam os interesses de seus clientes.",
    photo: "/frederico_moraes.jpg",
    photoFull: "/frederico_moraes.jpg",
    email: "frederico@moraesmorais.adv.br",
    linkedin: "https://linkedin.com",
  },
  {
    id: "eduarda-morais",
    name: "Dra. Eduarda Morais",
    oab: "",
    specialty: "Direito Digital",
    specialtyId: "digital",
    role: "Sócia Fundadora",
    formation: "Direito — FGV | LLM em Direito Digital — IDP",
    experience: "10 anos de experiência",
    areas: ["Golpes Bancários", "Crimes Virtuais", "LGPD", "Reputação Online", "ECA Digital", "Alvará para Contas de Menores"],
    bio: "Pioneira em Direito Digital no Brasil, Dra. Eduarda Morais atua na interseção entre tecnologia e direito há 10 anos. Formada pela FGV com LLM em Direito Digital pelo IDP, é referência em casos envolvendo crimes virtuais, proteção de dados e reputação online.",
    photo: "/eduarda_morais.jpg",
    photoFull: "/eduarda_morais.jpg",
    email: "eduarda@moraesmorais.adv.br",
    linkedin: "https://linkedin.com",
  },
  {
    id: "vladimir-morais",
    name: "Dr. Vladimir Morais",
    oab: "",
    specialty: "Direito do Executado",
    specialtyId: "executado",
    role: "Sócio",
    formation: "Direito — Mackenzie | Especialização em Direito Processual — FAAP",
    experience: "9 anos de experiência",
    areas: ["Defesa em Execuções", "Bloqueios Judiciais", "Penhoras", "Proteção Patrimonial", "Desconstituição de Dívidas"],
    bio: "Especialista em defesa de executados, Dr. Vladimir Morais atua há 9 anos protegendo o patrimônio de pessoas físicas e jurídicas em processos de execução. Formado pelo Mackenzie com especialização em Direito Processual pela FAAP.",
    photo: "/vladimir_morais.jpg",
    photoFull: "/vladimir_morais.jpg",
    email: "vladimir@moraesmorais.adv.br",
  },
  {
    id: "rodrigo-moraes",
    name: "Dr. Rodrigo Moraes",
    oab: "",
    specialty: "Direito Criminal",
    specialtyId: "criminal",
    role: "Sócio",
    formation: "Direito — UFMG | Especialização em Direito Penal e Execução Penal",
    experience: "8 anos de experiência",
    areas: ["Defesa Criminal", "Execução Penal", "Habeas Corpus", "Audiência de Custódia", "Progressão de Regime"],
    bio: "Com 8 anos dedicados ao direito criminal, Dr. Rodrigo Moraes é especialista em garantir os direitos de seus clientes com ética e rigor técnico. Atua de forma próxima e humana em todas as etapas do processo penal.",
    photo: "/rodrigo_moraes.jpg",
    photoFull: "/rodrigo_moraes.jpg",
    email: "rodrigo@moraesmorais.adv.br",
  },
  {
    id: "raissa-moraes",
    name: "Dra. Raissa Moraes",
    oab: "",
    specialty: "Direito Previdenciário",
    specialtyId: "previdenciario",
    role: "Sócia",
    formation: "Direito — PUC-SP | Especialização em Previdência Social — IBET",
    experience: "11 anos de experiência",
    areas: ["Aposentadorias", "Benefícios por Incapacidade", "Revisões de Benefícios", "Planejamento Previdenciário", "Pensão por Morte"],
    bio: "Com 11 anos de experiência em Direito Previdenciário, Dra. Raissa Moraes já ajudou centenas de clientes a conquistar e revisar benefícios junto ao INSS. Formada pela PUC-SP com especialização pelo IBET, é referência na área.",
    photo: "/raissa_moraes.jpg",
    photoFull: "/raissa_moraes.jpg",
    email: "raissa@moraesmorais.adv.br",
  },
  {
    id: "vinicius-morais",
    name: "Dr. Vinicius Morais",
    oab: "",
    specialty: "Direito Trabalhista",
    specialtyId: "trabalhista",
    role: "Sócio",
    formation: "Direito — Universidade Federal de Minas Gerais | Especialização em Direito e Processo do Trabalho",
    experience: "10 anos de experiência",
    areas: ["Direito do Trabalho", "Processo do Trabalho", "Defesa Patronal", "Ações Trabalhistas", "Consultoria Preventiva"],
    bio: "Com ampla atuação na área trabalhista, Dr. Vinicius Morais atua de forma estratégica na defesa dos direitos trabalhistas de empregados e no planejamento preventivo para empresas. Formado pela UFMG com especialização em Direito do Trabalho.",
    photo: "/vinicius_morais.jpg",
    photoFull: "/vinicius_morais.jpg",
    email: "vinicius@moraesmorais.adv.br",
  },
];

export const specialties: Specialty[] = [
  {
    id: "civil",
    title: "Direito Civil",
    shortTitle: "Civil",
    lawyerId: "frederico-moraes",
    color: "#1E40AF",
    bgColor: "#EFF6FF",
    icon: "FileText",
    description: "Contratos, indenizações, responsabilidade civil e conflitos patrimoniais.",
    longDescription: "O Direito Civil abrange as relações entre pessoas físicas e jurídicas no âmbito privado. Nossa atuação inclui desde a elaboração e revisão de contratos até a defesa em ações de indenização, responsabilidade civil e conflitos patrimoniais complexos.",
    problems: [
      { title: "Contratos descumpridos", description: "Fornecedor ou prestador de serviço não cumpriu o contrato? Atuamos na rescisão e cobrança de perdas e danos." },
      { title: "Acidentes e indenizações", description: "Sofreu danos materiais ou morais? Buscamos a reparação integral do seu prejuízo." },
      { title: "Conflitos de herança", description: "Disputas sobre bens, inventário ou partilha de herança entre familiares." },
      { title: "Problemas com imóveis", description: "Vícios construtivos, rescisão de compra e venda, usucapião e outros conflitos imobiliários." },
    ],
    howWeWork: [
      "Análise detalhada do caso e documentação existente",
      "Elaboração de estratégia jurídica personalizada",
      "Tentativa de solução extrajudicial quando vantajosa",
      "Atuação judicial com acompanhamento próximo do cliente",
      "Relatórios periódicos sobre o andamento do processo",
    ],
    faq: [
      { question: "Quanto tempo leva um processo civil?", answer: "O prazo varia conforme a complexidade do caso e a vara judicial. Em média, ações de conhecimento levam de 1 a 3 anos. Mantemos você informado em cada etapa." },
      { question: "Preciso ir ao escritório para contratar?", answer: "Não. Oferecemos atendimento online completo, com assinatura digital de documentos e reuniões por videoconferência." },
      { question: "Qual o valor dos honorários?", answer: "Os honorários são definidos após análise do caso, podendo ser fixos, por êxito ou combinados. Prezamos pela transparência total." },
    ],
    slug: "direito-civil",
  },
  {
    id: "executado",
    title: "Direito do Executado",
    shortTitle: "Executado",
    lawyerId: "vladimir-morais",
    color: "#0F2044",
    bgColor: "#F0F4FF",
    icon: "Shield",
    description: "Defesa em execuções, bloqueios judiciais, penhoras e proteção patrimonial.",
    longDescription: "Quando você é alvo de uma execução judicial, cada hora conta. Nossa equipe especializada atua com rapidez para proteger seu patrimônio, contestar bloqueios indevidos e construir a melhor estratégia de defesa.",
    problems: [
      { title: "Bloqueio judicial de conta", description: "Sua conta bancária foi bloqueada por ordem judicial? Atuamos para desbloqueio imediato quando indevido." },
      { title: "Penhora de bens", description: "Bens penhorados indevidamente ou acima do valor da dívida? Contestamos e buscamos a liberação." },
      { title: "Execução fiscal", description: "Dívidas com a Receita Federal, Estadual ou Municipal? Defendemos seus direitos em execuções fiscais." },
      { title: "Dívidas bancárias", description: "Bancos executando contratos com juros abusivos? Revisamos e defendemos sua posição." },
    ],
    howWeWork: [
      "Análise urgente da execução e dos bens envolvidos",
      "Identificação de irregularidades e nulidades processuais",
      "Interposição imediata de embargos e impugnações",
      "Negociação de parcelamentos e acordos vantajosos",
      "Proteção do patrimônio mínimo necessário à subsistência",
    ],
    faq: [
      { question: "Minha conta foi bloqueada, o que faço?", answer: "Entre em contato imediatamente. Analisamos o bloqueio e, se indevido, buscamos o desbloqueio em caráter de urgência." },
      { question: "Posso parcelar uma dívida em execução?", answer: "Sim. Negociamos parcelamentos e acordos que preservem seu patrimônio e encerrem a execução." },
      { question: "Quais bens são impenhoráveis?", answer: "Salário, bem de família, ferramentas de trabalho e outros bens têm proteção legal. Identificamos e protegemos esses ativos." },
    ],
    slug: "direito-do-executado",
  },
  {
    id: "criminal",
    title: "Direito Criminal",
    shortTitle: "Criminal",
    lawyerId: "rodrigo-moraes",
    color: "#065F46",
    bgColor: "#ECFDF5",
    icon: "BookOpen",
    description: "Defesa criminal, execução penal, progressão de regime e habeas corpus.",
    longDescription: "Atuação especializada na defesa criminal em todas as instâncias, desde o inquérito policial até recursos nos tribunais superiores, além de acompanhamento detalhado em execução penal e progressão de regime.",
    problems: [
      { title: "Prisão ou flagrante", description: "Atuação imediata em audiências de custódia e pedidos de liberdade provisória ou revogação de prisão." },
      { title: "Inquérito policial", description: "Acompanhamento e defesa técnica estratégica desde as investigações preliminares." },
      { title: "Processo criminal", description: "Defesa técnica robusta com apresentação de respostas, recursos e sustentações orais." },
      { title: "Execução penal", description: "Garantia de direitos como progressão de regime, remição de pena e livramento condicional." },
    ],
    howWeWork: [
      "Análise completa da situação processual e dos documentos",
      "Definição de estratégia defensiva personalizada",
      "Peticionamento e atuação nos tribunais em caráter de urgência",
      "Acompanhamento próximo de audiências e decisões",
      "Comunicação transparente com familiares sobre o andamento",
    ],
    faq: [
      { question: "Como funciona o atendimento de urgência?", answer: "Oferecemos atendimento de plantão para casos de prisão ou urgências criminais 24 horas por dia." },
      { question: "O atendimento pode ser feito à distância?", answer: "Sim. Atendemos familiares de forma online e realizamos visitas presenciais aos estabelecimentos prisionais quando necessário." },
      { question: "Qual a importância de um advogado no inquérito?", answer: "A atuação precoce pode evitar o indiciamento, garantir a legalidade das provas e construir uma defesa robusta desde o início." },
    ],
    slug: "direito-criminal",
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    shortTitle: "Previdenciário",
    lawyerId: "raissa-moraes",
    color: "#7C3AED",
    bgColor: "#F5F3FF",
    icon: "Heart",
    description: "Aposentadorias, benefícios, revisões e planejamento previdenciário.",
    longDescription: "O INSS frequentemente nega ou subestima benefícios a que os segurados têm direito. Nossa equipe especializada analisa cada caso com precisão para garantir que você receba o benefício correto, no momento certo.",
    problems: [
      { title: "Aposentadoria negada pelo INSS", description: "Teve sua aposentadoria negada? Analisamos os motivos e buscamos a concessão administrativa ou judicial." },
      { title: "Benefício com valor incorreto", description: "Suspeita que seu benefício está sendo pago com valor menor do que deveria? Fazemos o cálculo correto e buscamos a revisão." },
      { title: "Auxílio-doença negado", description: "Está incapacitado para o trabalho mas o INSS negou o auxílio? Atuamos para garantir seu direito." },
      { title: "Pensão por morte", description: "Perdeu um ente querido e o INSS negou a pensão? Defendemos seu direito ao benefício." },
    ],
    howWeWork: [
      "Análise do histórico contributivo e extrato do CNIS",
      "Identificação do melhor benefício disponível",
      "Requerimento administrativo junto ao INSS",
      "Recurso ao CRPS em caso de negativa",
      "Ação judicial quando necessário para garantir o direito",
    ],
    faq: [
      { question: "Posso me aposentar mesmo com períodos sem contribuição?", answer: "Depende da situação. Analisamos seu histórico completo para identificar a melhor estratégia de aposentadoria." },
      { question: "Quanto tempo leva para conseguir a aposentadoria?", answer: "Via administrativa, o INSS tem 45 dias para decidir. Se necessária ação judicial, o prazo médio é de 1 a 2 anos." },
      { question: "Trabalho informal conta para aposentadoria?", answer: "Pode contar, desde que comprovado. Orientamos sobre como regularizar contribuições e comprovar tempo de serviço." },
    ],
    slug: "direito-previdenciario",
  },
  {
    id: "digital",
    title: "Direito Digital",
    shortTitle: "Digital",
    lawyerId: "eduarda-morais",
    color: "#0891B2",
    bgColor: "#ECFEFF",
    icon: "Monitor",
    description: "Golpes bancários, crimes virtuais, LGPD, reputação online e proteção digital.",
    longDescription: "No mundo digital, novos crimes e violações surgem a cada dia. Nossa especialista em Direito Digital atua na vanguarda da proteção jurídica online, desde golpes financeiros até violações de privacidade e danos à reputação.",
    problems: [
      { title: "Golpe bancário ou PIX fraudulento", description: "Caiu em um golpe e perdeu dinheiro? Atuamos para responsabilizar o banco e recuperar os valores." },
      { title: "Fake news e difamação online", description: "Sua reputação está sendo destruída na internet? Buscamos a remoção de conteúdo e indenização pelos danos." },
      { title: "Vazamento de dados pessoais", description: "Seus dados foram vazados por uma empresa? Atuamos com base na LGPD para garantir seus direitos." },
      { title: "Crimes virtuais", description: "Vítima de estelionato digital, extorsão ou outros crimes online? Orientamos e representamos você." },
      { title: "Novo ECA Digital", description: "Defesa e proteção de crianças e adolescentes no ambiente online contra exposição e abusos." },
      { title: "Alvará para Contas de Menores", description: "Regularização jurídica e liberação de alvará para contas digitais e canais monetizados de menores." },
    ],
    howWeWork: [
      "Análise e preservação das provas digitais",
      "Identificação dos responsáveis e das plataformas envolvidas",
      "Notificações extrajudiciais e pedidos de remoção de conteúdo",
      "Ações judiciais para indenização e responsabilização",
      "Orientação sobre proteção digital preventiva",
    ],
    faq: [
      { question: "O banco é responsável por golpes no PIX?", answer: "Em muitos casos, sim. Os bancos têm obrigação de prevenir fraudes. Analisamos cada caso para identificar a responsabilidade." },
      { question: "Como remover conteúdo negativo da internet?", answer: "Através de notificações extrajudiciais, decisões judiciais de remoção e acionamento das plataformas com base na legislação vigente." },
      { question: "O que é a LGPD e como ela me protege?", answer: "A Lei Geral de Proteção de Dados garante seus direitos sobre dados pessoais. Empresas que violam a LGPD podem ser responsabilizadas." },
    ],
    slug: "direito-digital",
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista",
    shortTitle: "Trabalhista",
    lawyerId: "vinicius-morais",
    color: "#D97706",
    bgColor: "#FEF3C7",
    icon: "Briefcase",
    description: "Rescisões, horas extras, assédio, vínculo empregatício e consultoria patronal.",
    longDescription: "As relações de trabalho exigem acompanhamento técnico rigoroso. Nossa equipe atua na defesa dos direitos dos trabalhadores e na assessoria consultiva e contenciosa de empresas, visando mitigar riscos e solucionar conflitos de forma justa.",
    problems: [
      { title: "Verbas rescisórias incorretas", description: "Foi demitido e não recebeu o valor correto da rescisão? Calculamos seus direitos e buscamos o pagamento imediato." },
      { title: "Horas extras não pagas", description: "Trabalhou além da jornada contratual sem receber a devida compensação? Cobramos as horas extras com os devidos reflexos." },
      { title: "Vínculo empregatício sem registro", description: "Trabalhou sem carteira assinada? Buscamos o reconhecimento do vínculo de emprego e todos os direitos correspondentes." },
      { title: "Assédio moral ou sexual", description: "Sofreu constrangimento ou humilhação no ambiente de trabalho? Atuamos para rescisão indireta do contrato e indenização." },
    ],
    howWeWork: [
      "Análise minuciosa de contratos, holerites e cartões de ponto",
      "Cálculo detalhado e preciso das verbas devidas",
      "Tentativa de conciliação amigável e extrajudicial",
      "Ajuizamento de ação trabalhista com acompanhamento integral",
      "Defesa patronal preventiva e contenciosa estruturada",
    ],
    faq: [
      { question: "Qual o prazo para entrar com ação trabalhista?", answer: "O trabalhador tem o prazo limite de até 2 anos após o término do contrato de trabalho para entrar com a ação na Justiça." },
      { question: "O que é a rescisão indireta?", answer: "É a 'justa causa' dada pelo empregado ao empregador quando este descumpre a lei ou o contrato (ex: atraso de salário, falta de depósito de FGTS)." },
      { question: "Como provar horas extras?", answer: "Pode ser provada por cartões de ponto, testemunhas, e-mails, mensagens de WhatsApp, relatórios de sistemas e rotas de GPS." },
    ],
    slug: "direito-trabalhista",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Responsabilidade do banco em golpes de PIX: o que você precisa saber",
    excerpt: "Entenda quando o banco pode ser responsabilizado por fraudes no PIX e como agir para recuperar seu dinheiro.",
    content: "",
    author: "Dra. Eduarda Morais",
    authorId: "eduarda-morais",
    specialtyId: "digital",
    date: "2024-01-15",
    readTime: "5 min",
    slug: "responsabilidade-banco-golpes-pix",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop",
    tags: ["Direito Digital", "PIX", "Golpes Bancários"],
  },
  {
    id: "2",
    title: "Direitos do Acusado no Processo Penal: guia prático",
    excerpt: "Conheça os principais direitos garantidos a quem responde a um processo criminal e a importância da defesa técnica.",
    content: "",
    author: "Dr. Rodrigo Moraes",
    authorId: "rodrigo-moraes",
    specialtyId: "criminal",
    date: "2024-01-10",
    readTime: "7 min",
    slug: "direitos-acusado-processo-penal-guia",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop",
    tags: ["Direito Criminal", "Defesa Técnica", "Direitos"],
  },
  {
    id: "3",
    title: "Aposentadoria por tempo de contribuição: mudanças após a reforma",
    excerpt: "Entenda as principais mudanças trazidas pela reforma da previdência e como planejar sua aposentadoria.",
    content: "",
    author: "Dra. Raissa Moraes",
    authorId: "raissa-moraes",
    specialtyId: "previdenciario",
    date: "2024-01-05",
    readTime: "6 min",
    slug: "aposentadoria-reforma-previdencia",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop",
    tags: ["Previdenciário", "Aposentadoria", "INSS"],
  },
  {
    id: "4",
    title: "Bloqueio judicial de conta: como agir imediatamente",
    excerpt: "Sua conta foi bloqueada por ordem judicial? Saiba quais são seus direitos e como agir nas primeiras horas.",
    content: "",
    author: "Dr. Vladimir Morais",
    authorId: "vladimir-morais",
    specialtyId: "executado",
    date: "2023-12-28",
    readTime: "4 min",
    slug: "bloqueio-judicial-conta-como-agir",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=450&fit=crop",
    tags: ["Direito do Executado", "Bloqueio Judicial", "Proteção Patrimonial"],
  },
  {
    id: "5",
    title: "Danos morais: quando você tem direito e como calcular o valor",
    excerpt: "Nem todo aborrecimento gera direito à indenização. Entenda os critérios e como o valor é calculado.",
    content: "",
    author: "Dr. Frederico Moraes",
    authorId: "frederico-moraes",
    specialtyId: "civil",
    date: "2023-12-20",
    readTime: "8 min",
    slug: "danos-morais-quando-tem-direito",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop",
    tags: ["Direito Civil", "Danos Morais", "Indenização"],
  },
  {
    id: "6",
    title: "LGPD na prática: seus direitos sobre dados pessoais",
    excerpt: "A Lei Geral de Proteção de Dados garante direitos importantes. Saiba como exercê-los.",
    content: "",
    author: "Dra. Eduarda Morais",
    authorId: "eduarda-morais",
    specialtyId: "digital",
    date: "2023-12-15",
    readTime: "5 min",
    slug: "lgpd-seus-direitos-dados-pessoais",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
    tags: ["Direito Digital", "LGPD", "Privacidade"],
  },
];

export const stats = [
  { value: "12+", label: "Anos de Experiência" },
  { value: "2.500+", label: "Casos Atendidos" },
  { value: "6", label: "Especialistas Dedicados" },
  { value: "98%", label: "Clientes Satisfeitos" },
];

export const differentials = [
  {
    icon: "Users",
    title: "Especialistas Dedicados",
    description: "Cada área do Direito tem um advogado exclusivamente dedicado, com profundo conhecimento técnico e prático.",
  },
  {
    icon: "Target",
    title: "Estratégias Individualizadas",
    description: "Nenhum caso é igual. Desenvolvemos estratégias jurídicas personalizadas para cada situação.",
  },
  {
    icon: "Globe",
    title: "Atendimento Online e Presencial",
    description: "Você escolhe como quer ser atendido. Oferecemos reuniões presenciais e online com a mesma qualidade.",
  },
  {
    icon: "MessageSquare",
    title: "Comunicação Transparente",
    description: "Mantemos você informado em cada etapa do processo, em linguagem clara e acessível.",
  },
  {
    icon: "TrendingUp",
    title: "Atualização Constante",
    description: "Nossa equipe acompanha diariamente as mudanças legislativas e jurisprudenciais para oferecer as melhores estratégias.",
  },
  {
    icon: "Award",
    title: "Atendimento Personalizado",
    description: "Você terá um advogado de referência que conhece seu caso em detalhes e está sempre disponível.",
  },
];
