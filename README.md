# 🚗 API de Estacionamento – SENAI

API REST desenvolvida para o gerenciamento de um estacionamento, permitindo o controle de usuários, veículos, acessos e vagas. O projeto foi criado com foco em aprendizado e aplicação prática de backend com Node.js e banco de dados relacional.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- JavaScript
- Dotenv
- CORS

---

## 📦 Funcionalidades

- Cadastro e autenticação de usuários
- Cadastro de veículos vinculados a usuários
- Registro de entrada e saída de veículos
- Controle de vagas disponíveis e ocupadas
- Relacionamentos entre tabelas (Usuários, Veículos, Acessos e Vagas)

---

## 🗂️ Modelos Principais

- **Usuarios**
- **Veiculos**
- **Acessos**
- **Vagas**

Todos os modelos utilizam Sequelize com relacionamentos bem definidos (One-to-Many e Foreign Keys).
