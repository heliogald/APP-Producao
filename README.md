# Projeto Admin

Este projeto é uma aplicação de administração utilizando React-admin no front-end e Node.js com Express.js, Sequelize e banco de dados MySQL no back-end.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Licença](#licença)

## Tecnologias Utilizadas

- **Front-end:**
  - React
  - React-admin

- **Back-end:**
  - Node.js
  - Express.js
  - Sequelize
  - MySQL

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Instalação

1. Clone este repositório:

    ```sh
    git clone  https://github.com/heliogald/APP-Producao
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd Front\teste-admin
    ```

3. Instale as dependências do back-end:

    ```sh
    cd backend
    npm install
    ```

4. Instale as dependências do front-end:

    ```sh
    cd Front\teste-admin
    npm install
    ```

## Configuração

### Back-end

1. Renomeie o arquivo `.env.example` para `.env` e atualize as variáveis de ambiente com suas configurações do MySQL.

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=sua-senha
    DB_NAME=nome-do-banco
    ```

2. Execute as migrações do banco de dados para criar as tabelas necessárias:

    ```sh
    cd backend
    npx sequelize-cli db:migrate
    ```

### Front-end

1. Renomeie o arquivo `.env.example` para `.env` e atualize a URL da API, se necessário.

    ```env
    REACT_APP_API_URL=http://localhost:4000/
    ```

## Uso

### Back-end

Inicie o servidor Node.js:

```sh
cd backend
npm start

O servidor estará disponível em http://localhost:4000.

Front-end
Inicie o servidor de desenvolvimento React:

sh
Copiar código
cd frontend
npm start
A aplicação estará disponível em http://localhost:5173/.

Scripts Disponíveis
Back-end
npm start: Inicia o servidor em modo de produção.
npm run dev: Inicia o servidor em modo de desenvolvimento.
npx sequelize-cli db:migrate: Executa as migrações do banco de dados.
npx sequelize-cli db:seed:all: Popula o banco de dados com dados de exemplo (se houver).
Front-end
npm start: Inicia o servidor de desenvolvimento.
npm run build: Compila a aplicação para produção.
Estrutura do Projeto
Back-end
bash
Copiar código
backend/
├── config/          # Configurações do banco de dados
│   ├── config.json  # Configuração do Sequelize
│   ├── database.js  # Inicialização do banco de dados
├── controllers/     # Lógica dos controladores
│   ├── userController.js  # Controlador de usuário
├── migrations/      # Migrações do banco de dados
│   ├── 20230516123456-create-user.js  # Exemplo de migração de criação de usuário
├── models/          # Modelos Sequelize
│   ├── index.js     # Inicialização dos modelos
│   ├── user.js      # Modelo de usuário
├── routes/          # Definição das rotas da API
│   ├── userRoutes.js  # Rotas de usuário
├── seeders/         # Dados para popular o banco de dados
│   ├── 20230516123456-demo-user.js  # Exemplo de seeder de usuário
└── server.js        # Arquivo principal do servidor
Front-end
csharp
Copiar código
frontend/
├── public/          # Arquivos públicos
├── src/
│   ├── components/  # Componentes React
│   ├── pages/       # Páginas da aplicação
│   ├── App.js       # Componente principal
│   ├── dataProvider.js # Configuração do React-admin para integração com a API
│   ├── index.js     # Ponto de entrada do React
│   ├── layouts/     # Layouts da aplicação
│   ├── views/       # Views da aplicação
│   ├── styles/      # Arquivos de estilo
│   ├── utils/       # Utilitários
└── └── services/    # Serviços de integração com a API
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

csharp
Copiar código

Este README fornece todas as informações necessárias para que um desenvolvedor configure, instale, configure e execute a aplicação, além de oferecer uma visão clara da estrutura do projeto.







