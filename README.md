# 🧑‍💻 Portfólio - Eric Dellai Camargo

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19.2.0"/>
  <img src="https://img.shields.io/badge/styled--components-6.0.7-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-components 6.0.7"/>
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.9.3"/>
  <img src="https://img.shields.io/badge/Vite-7.1.10-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7.1.10"/>
</div>

<div align="center">
  <h3>✨ Portfólio moderno e responsivo desenvolvido em React + TypeScript + Vite ✨</h3>
  <p>Apresentação profissional, projetos, habilidades e formas de contato — tudo em uma experiência rápida e fluida.</p>
</div>

---

## 📜 Índice

- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Principais Funcionalidades](#-principais-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar Localmente](#-como-executar-localmente)
- [📞 Contato](#-contato)
- [📄 Licença](#-licença)

---

## 📖 Sobre o Projeto

O **Portfólio - Eric Dellai Camargo** foi criado para apresentar de forma clara e moderna minha trajetória profissional, principais projetos e competências como **desenvolvedor full stack**.

O projeto é uma **Single Page Application (SPA)** desenvolvida com **React + TypeScript + Vite**, com atenção especial à **performance**, **responsividade** e **experiência do usuário**.

A arquitetura do código é modular, utilizando componentes reutilizáveis (`styled-components`) e hooks customizados para manter a aplicação escalável e de fácil manutenção.

---

## ✨ Principais Funcionalidades

- 🧑‍💻 **Apresentação profissional** — Introdução sobre mim, carreira e áreas de atuação.
- 🧩 **Seção de projetos** — Destaque para os principais sistemas e aplicações desenvolvidas.
- 🌎 **Suporte multilíngue (PT-BR / EN)** — Alternância de idioma com `i18next`.
- 📱 **Layout responsivo** — Design adaptado para desktop, tablet e mobile.
- 📬 **Contato direto** — Links diretos para WhatsApp, LinkedIn e E-mail.
- ⚡ **Animações suaves** — Efeitos de scroll (`ScrollReveal`) e componentes dinâmicos (`Lottie`).
- 🧠 **Organização modular** — Estrutura de arquivos limpa e de fácil manutenção.

---

## 🛠️ Tecnologias Utilizadas

| Categoria               | Tecnologia                 | Ícone                                                                                                  | Notas                                        |
| :---------------------- | :------------------------- | :----------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| **Framework**           | React.js (v19.2.0)         | <img src="https://skillicons.dev/icons?i=react" alt="React Icon" width="20px"/>                        | Construção da interface de usuário.          |
| **Linguagem**           | TypeScript (v5.9.3)        | <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript Icon" width="20px"/>                      | Garante tipagem e código mais robusto.       |
| **Build Tool**          | Vite (v7.1.10)             | <img src="https://skillicons.dev/icons?i=vite" alt="Vite Icon" width="20px"/>                          | Ambiente de desenvolvimento rápido.          |
| **Estilização**         | Styled-Components (v6.0.7) | <img src="https://skillicons.dev/icons?i=styledcomponents" alt="Styled-Components Icon" width="20px"/> | Componentização do CSS.                      |
| **Internacionalização** | i18next (v25.6.0)          | <img src="https://flagpedia.net/data/flags/w1160/us.webp" alt="US - Flag" width="22px"/>               | Suporte para múltiplos idiomas (PT-BR, EN).  |
| **Animações**           | Lottie / ScrollReveal      | <img src="https://skillicons.dev/icons?i=lottie" alt="Lottie Icon" width="20px"/>                      | Animações e efeitos de entrada de elementos. |

## 📁 Estrutura do Projeto

```bash
src/
├── components/           # Componentes React da SPA
│   ├── about/              # Seção sobre
│   ├── contact/            # Seção de contato
│   ├── experience/         # Experiência profissional
│   ├── footer/             # Rodapé
│   ├── mainSection/        # Componente principal e introdução
│   ├── navBar/             # Cabeçalho e navegação
│   └── project/            # Seção de listagem dos projetos
│
├── pages/                # Componente principal
│   └── home/               # Agrupa todos os componentes de seção da página
│
├── routes/               # Gerenciamento de rotas com React Router DOM
│   ├── index.tsx           # Configura o BrowserRouter
│   └── routes.tsx          # Define as rotas principais
│
└── shared/               # Módulos, configurações e lógicas reutilizáveis
    ├── components/         # Elementos de UI genéricos e reutilizáveis (botões, layout)
    ├── helpers/            # Constantes de dados (experiências, projetos)
    ├── hooks/              # Hooks customizados para lógica de interface
    ├── locales/            # Arquivos de tradução e configuração do i18next
    ├── themes/             # Definições de cores, fontes e estilos globais
    ├── types/              # Definições globais de tipos TypeScript
    └── utils/              # Funções utilitárias (cálculo de idade, scroll suave)
```

---

## 🚀 Como Executar Localmente

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- [Git](https://git-scm.com/)

### ⚙️ Passos

```bash
# 1. Clone o repositório
git clone https://github.com/EricDCamargo/portifolio.git

# 2. Acesse o repositório clonado
cd portifolio

# 3. Instale as dependências
yarn install

# 4. Inicie o servidor de desenvolvimento
yarn dev
```

Acesse o projeto em **[http://localhost:5173](http://localhost:5173)** (ou na porta indicada pelo Vite).

---

## 📄 Scripts Disponíveis

```bash
yarn dev          # Servidor de desenvolvimento
yarn build        # Build de produção
yarn preview      # Visualiza o build de produção localmente
yarn start        # Executa build e inicia preview do build
yarn format       # Formata o código com Prettier
```

---

## 📞 Contato

**Eric Dellai Camargo** — Desenvolvedor Full Stack

- 🌐 **Site**: [ericdellai.com.br](https://ericdellai.com.br)
- 📧 **Email**: [ericdcamargo@gmail.com](mailto:ericdcamargo@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/ericdellaicamargo](https://www.linkedin.com/in/ericdellaicamargo)
- 📲 **WhatsApp**: [Clique aqui para conversar](https://wa.me/15997284066)

---

## 📄 Licença

Este projeto está licenciado sob a **[Licença MIT](LICENSE)** acesse e veja em detalhes.

---

<div align="center">
  <p>⭐ Leu até aqui? Deixe uma estrela! ⭐</strong></p>
</div>
