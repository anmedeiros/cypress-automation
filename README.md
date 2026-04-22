![Cypress](https://img.shields.io/badge/Cypress-Testing-green)
![Status](https://img.shields.io/badge/Status-Concluído-success)
![GitHub repo size](https://img.shields.io/github/repo-size/anmedeiros/cypress-automation)
![Cypress Tests](https://github.com/anmedeiros/cypress-automation/actions/workflows/cypress.yml/badge.svg)
# 🚀 Cypress Automation | Testes E2E

## 📌 Sobre o projeto

Projeto de automação de testes End-to-End (E2E) utilizando Cypress, com foco em boas práticas aplicadas no mercado de QA.

A automação foi construída sobre o site SauceDemo, simulando fluxos reais de usuário como login, manipulação de produtos e validação de carrinho.

---

## 🧪 Cenários automatizados

### 🔐 Login
- Login com credenciais válidas
- Login com credenciais inválidas
- Validação de mensagem de erro

### 🛒 Produtos
- Adicionar produto ao carrinho
- Remover produto do carrinho
- Validação da quantidade no carrinho

### 🛍️ Carrinho
- Acessar carrinho com produto
- Validar carrinho vazio

---

## 🧠 Boas práticas aplicadas

- Page Object Model (POM)
- Custom Commands (reutilização de código)
- Fixtures (dados externos)
- Organização por domínio (login, produtos, carrinho)
- Testes independentes

---
## 💡 Diferenciais

- Pipeline CI/CD com execução automática
- Estrutura escalável para novos cenários
- Projeto alinhado com boas práticas de mercado

---

## 📸 Execução dos testes

Exemplo da execução dos testes automatizados no Cypress:

<img width="1917" height="1017" alt="Execução Cypress" src="https://github.com/user-attachments/assets/3ae68e7a-be69-48c8-9531-126f17bfca7b" />

---

## ⚠️ Observação

O sistema utilizado (SauceDemo) não possui API real para listagem de produtos.  
Por esse motivo, as validações foram realizadas via interface (UI), e o uso de intercept foi aplicado apenas para fins de aprendizado.

---

## 🛠️ Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- GitHub Actions (CI/CD)

---

## ▶️ Como executar o projeto

1. Clonar o repositório:
```bash
git clone https://github.com/anmedeiros/cypress-automation.git
```

2. Instalar dependências:
```bash
npm install
```

3. Executar o Cypress:
```bash
npx cypress open
```
---

## 📊 Objetivo

Demonstrar conhecimento prático em automação de testes E2E utilizando Cypress, com foco em organização, reutilização de código e boas práticas adotadas no mercado.

---
## 👨‍💻 Autor

Projeto desenvolvido por Ananias Medeiros
