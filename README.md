# 🧠 IAContext

IAContext é uma ferramenta de linha de comando que gera um arquivo contendo o contexto completo do seu projeto em formato Markdown.

O objetivo é facilitar o compartilhamento da estrutura e do código da aplicação com ferramentas de IA, permitindo análises mais precisas sem a necessidade de enviar arquivos manualmente.

---

## 🚀 Instalação

Instale o pacote globalmente:

```bash
npm install -g iacontext
```

---

## 📖 Uso

Abra o terminal na raiz do projeto que deseja analisar e execute:

```bash
iacontext export
```

Após a execução, será gerado automaticamente um arquivo:

```text
project-context.md
```

na raiz do projeto.

---

## 📄 O que é gerado?

O arquivo `project-context.md` contém:

* Estrutura dos arquivos do projeto.
* Conteúdo consolidado dos arquivos encontrados.
* Contexto organizado em um único documento Markdown.

Isso facilita o envio do contexto completo para ferramentas de IA como ChatGPT, Claude, Gemini e outras.

---

## 💡 Casos de uso

Com o arquivo gerado, você pode solicitar ajuda para:

* 🐛 Correção de bugs
* 🏗️ Arquitetura e organização do projeto
* ✨ Refatorações
* 📚 Geração de documentação
* 🔍 Revisão de código
* 🚀 Implementação de novas funcionalidades

---

## 📦 Exemplo

```bash
cd meu-projeto

iacontext export
```

Resultado:

```text
meu-projeto/
├── src/
├── package.json
├── README.md
└── project-context.md
```

---

## ⚙️ Arquivos ignorados

Por padrão, o IAContext ignora diretórios comuns que normalmente não fazem parte do contexto do projeto:

* `node_modules`
* `dist`
* `build`
* `.git`
* `coverage`
* `bin`
* `obj`

---

## 📜 Licença

ISC

