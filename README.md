# 🐝 ColmeiaBee

Plataforma voltada para apicultores de pequeno e médio porte, focada em produtividade e gestão de colmeias. Controle de manejos, produção de mel, floradas, sanidade e financeiro — tudo em um só lugar.

## Sobre o Projeto

O ColmeiaBee nasceu da necessidade de apicultores com poucas colmeias terem uma ferramenta simples e prática para organizar seu apiário. O objetivo é facilitar o dia a dia do produtor com registros de manejo, acompanhamento de produção e alertas importantes.

## Tecnologias

### Front-end

- Vue 3 (Composition API + `<script setup>`)
- TypeScript
- Vite
- Tailwind CSS 4
- Pinia (gerenciamento de estado)
- Vue Router
- VeeValidate + Zod (validação de formulários)
- Axios

### Back-end

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT (autenticação)
- Passport
- Bcrypt

## Como Rodar

### Pré-requisitos

- Node.js 20+
- PostgreSQL rodando localmente ou em nuvem

### Back-end

```bash
cd back-end
npm install
```

Crie um arquivo `.env` baseado no `.env.example` e configure a conexão com o banco.

```bash
npm run prisma:migrate
npm run start:dev
```

### Front-end

```bash
cd front-end
npm install
npm run dev
```

O front roda em `http://localhost:3001` por padrão.

## Scripts Úteis

| Comando                  | Descrição                                    |
| ------------------------ | -------------------------------------------- |
| `npm run dev`            | Inicia o front em modo desenvolvimento       |
| `npm run build`          | Build de produção do front                   |
| `npm run start:dev`      | Inicia o back em modo watch                  |
| `npm run prisma:studio`  | Abre o Prisma Studio para visualizar o banco |
| `npm run prisma:migrate` | Roda as migrações do banco                   |
| `npm run lint`           | Verifica o código com ESLint                 |

## Funcionalidades

- Autenticação (login/registro com JWT)
- Dashboard com visão geral do apiário
- Controle de colmeias
- Registro de produção de mel
- Manejos (revisão, alimentação, colheita)
- Calendário de floradas
- Controle de sanidade
- Gestão financeira
- Controle de estoque
- Relatórios

## Licença

Projeto privado — uso interno.
