# API REST - Curso de JavaScript e TypeScript

Este projeto é uma API RESTful desenvolvida durante o **Curso de JavaScript e TypeScript do professor Luiz Otávio Miranda**. O objetivo principal é o gerenciamento de alunos e usuários, incluindo upload de fotos e autenticação via JWT.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção da API.
- **Sequelize (ORM)**: Para manipulação do banco de dados SQL.
- **MariaDB/MySQL**: Banco de dados relacional.
- **JWT (JSON Web Token)**: Para autenticação e controle de sessão.
- **Bcrypt**: Para hash de senhas.
- **Multer**: Para upload de arquivos (fotos dos alunos).
- **ESLint/Prettier**: Para padronização e formatação de código.

## ⚙️ Funcionalidades

- **CRUD de Usuários**: Criação, leitura, atualização e exclusão de usuários.
- **CRUD de Alunos**: Gerenciamento completo de dados dos alunos.
- **Upload de Fotos**: Possibilidade de adicionar fotos ao perfil do aluno.
- **Autenticação**: Login com geração de Token JWT.
- **Controle de Acesso**: Rotas protegidas que exigem login (Token).

## 🛠️ Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- Banco de dados MariaDB ou MySQL rodando.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Mattiiyyah/API_REST
   cd API_REST
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Renomeie o arquivo `.env.example` (se houver) ou crie um arquivo `.env` na raiz do projeto com as configurações do banco de dados e segredos da aplicação:
   ```env
   DATABASE=nome_do_banco
   DATABASE_HOST=localhost
   DATABASE_PORT=3306
   DATABASE_USERNAME=seu_usuario
   DATABASE_PASSWORD=sua_senha
   TOKEN_SECRET=seu_segredo_jwt
   TOKEN_EXPIRATION=7d
   APP_URL=http://localhost:3001
   ```

4. **Prepare o Banco de Dados:**
   Esta API usa Migrations do Sequelize. Execute o comando para criar as tabelas:
   ```bash
   npx sequelize db:migrate
   ```

5. **Inicie o Servidor:**
   ```bash
   npm run dev
   ```
   O servidor iniciará na porta definida (padrão costuma ser 3001).

## 🔗 Rotas Principais

- **Token**: `/tokens` (POST) - Login e geração de token.
- **Usuários**: `/users` - Cadastro e gerenciamento de administradores/usuários do sistema.
- **Alunos**: `/alunos` - Gerenciamento dos alunos.
- **Fotos**: `/fotos` - Upload de fotos para alunos.

## 🎓 Créditos

Projeto desenvolvido como parte do curso de JavaScript e TypeScript do **Luiz Otávio Miranda** (Udemy).

---
Feito com 💜 por Matheus.
