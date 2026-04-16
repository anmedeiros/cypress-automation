# 🚀 Cypress Automation Project

Este repositório contém um projeto de automação de testes End-to-End (E2E) desenvolvido com **Cypress**. O objetivo é garantir a qualidade e o funcionamento das principais funcionalidades do sistema.
---

## 🧪 Cenários Automatizados

### 🔐 Login

* ✅ Login com sucesso
* ❌ Login inválido
* 🔒 Usuário bloqueado

### 🛒 Produtos

* ➕ Adicionar produto ao carrinho
* ➖ Remover produto do carrinho
* ✔️ Validação de itens exibidos na tela

---

## 🛠️ Tecnologias Utilizadas

* **Cypress**: Framework de automação de testes.
* **JavaScript**: Linguagem de programação utilizada nos scripts.
* **Page Objects**: Padrão de projeto utilizado para melhorar a manutenção e organização do código.
* **Intercept & Mocking**: Estratégias para monitorar e manipular chamadas de API durante os testes.

---

## 📂 Estrutura do Projeto

```bash
cypress/
  e2e/
    login.cy.js
    products.cy.js
  pages/
    loginPage.js
    productsPage.js
  fixtures/
    login.json
  support/
    commands.js
    e2e.js
```

---

## ⚙️ Boas Práticas Aplicadas

* ✔️ Page Object Model (POM)
* ✔️ Comandos customizados (`cy.login`)
* ✔️ Uso de fixtures para dados de teste
* ✔️ Organização por responsabilidades
* ✔️ Reutilização de código com `beforeEach`

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo 1: Instalar as dependências
No terminal, dentro da pasta do projeto, execute:
```bash
npm install

## 📸 Demonstração

 <img width="1263" height="1023" alt="image" src="https://github.com/user-attachments/assets/6e29e6ee-11be-4548-a884-cf84445c3614" />


---

## 💡 Objetivo

Este projeto tem como objetivo consolidar conhecimentos em automação de testes e aplicar práticas utilizadas no mercado de QA.

---

## 👨‍💻 Autor

Ananias Medeiros
