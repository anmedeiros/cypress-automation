# 🚀 Cypress Automation - E2E Tests

## 📌 Sobre o Projeto

Este projeto foi desenvolvido para praticar automação de testes end-to-end utilizando o Cypress.

Os testes simulam o comportamento real de um usuário no site SauceDemo, validando funcionalidades essenciais como login e manipulação do carrinho de compras.

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

* JavaScript
* Cypress

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

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/anmedeiros/cypress-automation.git
```

### 2. Acessar a pasta

```bash
cd cypress-automation
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Executar os testes

```bash
npx cypress open
```

---

## 📸 Demonstração

👉 <img width="1263" height="1023" alt="image" src="https://github.com/user-attachments/assets/6e29e6ee-11be-4548-a884-cf84445c3614" />


---

## 💡 Objetivo

Este projeto tem como objetivo consolidar conhecimentos em automação de testes e aplicar práticas utilizadas no mercado de QA.

---

## 👨‍💻 Autor

Ananias Medeiros
