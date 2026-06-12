# 🧠 IAContext

IAContext é uma ferramenta que analisa e organiza os arquivos do seu projeto em um único arquivo Markdown, gerando um contexto consolidado da aplicação.

O objetivo é facilitar o compartilhamento do contexto completo do projeto com uma IA, evitando a necessidade de enviar múltiplos arquivos manualmente e permitindo respostas mais precisas sobre a estrutura, código e funcionamento da aplicação.

---

# 🚀 Como utilizar

Primeiro, instale as dependências do projeto:

```bash
npm install
```

Em seguida, gere a versão compilada da aplicação:

```bash
npm run build
```

Após o build, uma pasta chamada `dist` será criada.

Copie a pasta `dist` para a raiz do projeto que deseja analisar.

Com o terminal aberto na raiz desse projeto, execute:

```bash
node dist export
```

Ao finalizar a execução, será gerado automaticamente um arquivo chamado:

```text
project-context.md
```

na raiz do projeto analisado.

---

# 📄 Resultado

O arquivo `project-context.md` conterá uma visão consolidada dos arquivos do projeto, servindo como contexto para ferramentas de IA.

Com ele, você pode fornecer uma visão muito mais completa da aplicação para obter ajuda com:

* 🐛 Correção de bugs.
* 🏗️ Arquitetura e estrutura do projeto.
* ✨ Refatorações.
* 📚 Documentação.
* 🔍 Análise de código.
* 🚀 Implementação de novas funcionalidades.

Pronto! Agora você possui um único arquivo contendo o contexto do projeto para compartilhar com qualquer IA.

