![Cypress](https://img.shields.io/badge/Cypress-Testing-green)
![Status](https://img.shields.io/badge/Status-Concluído-success)
![GitHub repo size](https://img.shields.io/github/repo-size/anmedeiros/cypress-automation)
# 🚀 Cypress Automation | Testes E2E

## 📊 Objetivo

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

- Organização por domínio (login, produtos, carrinho)
- Reutilização com commands customizados
- Uso de dados externos com fixtures

---

## ⚠️ Observação

O sistema utilizado (SauceDemo) não possui API real para listagem de produtos.  
Por esse motivo, as validações foram realizadas via interface (UI), e o uso de intercept foi aplicado apenas para fins de aprendizado.

---

## 📸 Execução dos testes

Exemplo da execução dos testes automatizados no Cypress:

<img width="1917" height="1017" alt="Execução Cypress" src="https://github.com/user-attachments/assets/3ae68e7a-be69-48c8-9531-126f17bfca7b" />

---


## 🛠️ Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js

---

## ▶️ Como executar o projeto

1. Clonar o repositório:
```bash
git clone https://github.com/anmedeiros/cypress-automation.git
