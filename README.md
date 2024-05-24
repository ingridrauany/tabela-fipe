# Busca de dados na Tabela FIPE

## Sumário

- [Overview](#overview)
  - [O desafio](#o-desafio)
  - [Executando a aplicação](#executando-a-aplicação)
  - [Testes](#testes)
- [Meu processo](#meu-processo)
  - [Estrutura de pastas](#estrutura-de-pastas)
  - [Construído com](#construido-com)
  - [Próximos passos](#próximos-passos)
  - [Links](#Links)

## Overview

### O desafio

Cria uma tela que busque dados da Tabela Fipe utilizando a seguinte [API](https://deividfortuna.github.io/fipe/).

### Executando a aplicação

Primeiro baixe os pacotes da aplicação:

```bash
npm install
```

Depois execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:300](http://localhost:3000) com seu navegador para ver o resultado.

### Testes

Para executar os testes automatizados:

```bash
npm run test
```

## Meu processo

### Estrutura de pastas

```
├── app
│   ├── components
│   ├── context
│   ├── hooks
│   ├── services
│   ├── types
│   ├── page.tsx
│   └── layout.tsx
├── public
├── package.json
└── README.md
```

### Construído com:

- HTML semântico
- Flexbox/Grid Layout
- React/Typescript
- [NextJS](https://nextjs.org/)
- `Editorconfig`, `prettier` e `eslint` para formatação e linter de código
- [React Query](https://tanstack.com/query/latest): para lidar com as chamadas aos endpoint (lidando melhor com loading e erros)
- [Jest](https://jestjs.io/pt-BR/) e [Testing Library](https://testing-library.com/): para escrita de teste unitários

### Próximos passos

- Escrever testes para os componentes e hooks
- Usar algum tipo de componente de `Loading` que impeça o usuário de tentar acessar o `select` enquanto eles ainda tem os dados preenchidos pela API
- Utilizar `Styled-Components` junto ao `Material UI` para deixar o estilo separado do código do componente

### Links

- [Deploy da aplicação na Vercel](https://tabela-fipe-self.vercel.app/)
