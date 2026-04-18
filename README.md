# 🚀 Cypress Automation Portfolio

## 📌 Sobre o projeto
Este projeto tem como objetivo demonstrar automação de testes End-to-End (E2E) utilizando Cypress, aplicando boas práticas utilizadas no mercado.

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

## ⚠️ Observação

O sistema utilizado (SauceDemo) não possui API real para listagem de produtos.  
Por esse motivo, as validações foram realizadas via interface (UI), e o uso de intercept foi aplicado apenas para fins de aprendizado.

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
