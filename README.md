# 📚 Trilha do Saber — Plataforma Educacional Web

> **Plataforma Educacional Completa & Gamificada de Aprendizagem Escolar (100% Web / PWA)**  
> *"Aprenda. Pratique. Evolua."*

O **Trilha do Saber** é uma plataforma educacional moderna, interativa e responsiva, desenvolvida em **React 19, TypeScript, Vite 6, Tailwind CSS e Node.js/Express**. Funciona diretamente pelo navegador em qualquer dispositivo — computadores, notebooks, tablets e smartphones (Android e iOS) — com suporte completo a instalação como Web App (PWA) e notificações em segundo plano via Firebase Cloud Messaging (FCM).

---

## 🚀 1. Tecnologias Utilizadas

- **Frontend Core**: React 19, TypeScript 5.8, Vite 6.
- **Estilização & Design**: Tailwind CSS v4 (design responsivo adaptável para celulares e computadores, com suporte a modo claro e escuro).
- **Gamificação & Animações**: Canvas Confetti, Motion, Web Audio API para síntese sonora e efeitos táteis.
- **Inteligência Artificial**: Google Gemini API (`@google/genai` e endpoints no backend seguro Node/Express).
- **Visualização de Dados**: Recharts (gráficos de evolução semanal de XP, taxas de acerto e histórico de estudos).
- **Persistência em Nuvem**: Firebase Cloud Firestore e LocalStorage para sincronização resiliente.
- **Notificações Web & Cronograma**: Firebase Cloud Messaging (FCM) e Web Notifications API com Service Worker em segundo plano.
- **Formato de Distribuição**: **Aplicação Web (SPA/Full-Stack)** com suporte a Progressive Web App (PWA) para acesso instantâneo sem necessidade de download em lojas.

---

## 📁 2. Estrutura do Projeto

```text
/
├── src/
│   ├── components/                      # Componentes visuais e interativos
│   │   ├── modes/                       # Modos de estudo (Jornada, IA Tutor, Provas por Foto, Jogos, etc.)
│   │   ├── Header.tsx                   # Topo com nível, XP, ofensiva e avatar
│   │   ├── BottomNavBar.tsx             # Navegação adaptativa para mobile e desktop
│   │   ├── InstallAppModal.tsx          # Guia de instalação do Web App (PWA no navegador)
│   │   ├── FCMForegroundBanner.tsx      # Alertas de cronograma em tempo real
│   │   └── StudyRemindersModal.tsx      # Gestão de horários e lembretes de estudo
│   ├── data/                            # Conteúdo curricular (BNCC, matérias, questões, xadrez)
│   │   ├── curriculumData.ts            # Matérias, unidades e exercícios estruturados
│   │   └── trophiesAndBadges.ts         # Conquistas desbloqueáveis
│   ├── hooks/                           # Custom React hooks (adaptação de tela, áudio)
│   ├── services/                        # Camada de serviços modular
│   │   ├── geminiService.ts             # Professor e explicador IA
│   │   ├── firebaseService.ts           # Sincronização em nuvem Firestore
│   │   ├── fcmReminderService.ts        # Lembretes push via FCM
│   │   ├── notificationService.ts       # Agendamento e disparos de rotina
│   │   ├── soundEffects.ts              # Sintetizador sonoro Web Audio
│   │   └── pwaService.ts                # Gestão de Service Worker e instalação web
│   ├── types/                           # Definições completas TypeScript
│   ├── App.tsx                          # Orquestrador principal da plataforma
│   ├── index.css                        # Estilos globais Tailwind CSS
│   └── main.tsx                         # Ponto de entrada React
│
├── public/                              # Arquivos públicos e estáticos
│   ├── icon.svg                         # Ícone vetorial da plataforma
│   ├── app-logo.png                     # Logo oficial
│   ├── manifest.json                    # Web App Manifest
│   ├── sw.js                            # Service Worker principal
│   └── firebase-messaging-sw.js         # Service Worker para Push FCM
│
├── server.ts                            # Servidor Node.js / Express (Proxy seguro para APIs e FCM)
├── package.json                         # Dependências e scripts de execução
├── vite.config.ts                       # Configuração de empacotamento Vite
├── tsconfig.json                        # Configurações do TypeScript
└── README.md                            # Documentação da plataforma
```

---

## 💻 3. Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js**: Versão 18 ou superior instalada
- **npm** instalado

### Instalação e Execução
```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse a aplicação no navegador em: `http://localhost:3000`

---

## 🏗️ 4. Build de Produção

Para compilar a versão otimizada de produção da aplicação Web:

```bash
npm run build
```

O comando compilará os assets web estáticos na pasta `dist/` e gerará o bundle do servidor em `dist/server.cjs`.

Para iniciar o servidor em modo de produção:
```bash
npm run start
```

---

## 🌐 5. Publicação e Hospedagem Web

Por ser uma aplicação 100% Web moderna, a **Trilha do Saber** pode ser hospedada em qualquer serviço de nuvem para sites:

- **Google Cloud Run** (hospedagem nativa em container com suporte completo a Node.js e SPA)
- **Vercel / Netlify / Render / Railway**
- **Servidores VPS com Nginx ou Docker**

---

## 📱 6. Acesso em Celulares e Computadores

1. **Pelo Celular**: Basta abrir o navegador (Google Chrome no Android, Safari no iPhone/iPad) e acessar a URL da plataforma.
   - O design se adapta dinamicamente com navegação touch inferior, alta legibilidade e suporte a instalação direta na tela inicial (PWA).
2. **Pelo Computador**: Navegação expandida com menus completos, atalhos de teclado e aproveitamento do monitor.

---

**Trilha do Saber** — Transformando o aprendizado em uma jornada memorável, motivadora e transformadora! 🎓✨
