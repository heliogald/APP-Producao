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
