# 🧠 IAContext

IAContext is a command-line tool that generates a single Markdown file containing the complete context of your project.

Its purpose is to simplify sharing your application's structure and source code with AI tools, enabling more accurate analysis without the need to manually upload multiple files.

---

## 🚀 Installation

Install the package globally:

```bash
npm install -g iacontext
```

---

## 📖 Usage

Open a terminal in the root directory of the project you want to analyze and run:

```bash
iacontext export
```

After execution, a file named:

```text
project-context.md
```

will be automatically generated in the project's root directory.

---

## 📄 What is generated?

The `project-context.md` file contains:

* Project file structure
* Consolidated content of the detected files
* A complete project context organized in Markdown format

This makes it easier to provide your project context to AI tools such as ChatGPT, Claude, Gemini, and others.

---

## 💡 Use Cases

With the generated file, you can ask AI assistants for help with:

* 🐛 Bug fixing
* 🏗️ Project architecture and organization
* ✨ Refactoring
* 📚 Documentation generation
* 🔍 Code review
* 🚀 New feature implementation

---

## 📦 Example

```bash
cd my-project

iacontext export
```

Result:

```text
my-project/
├── src/
├── package.json
├── README.md
└── project-context.md
```

---

## ⚙️ Ignored Directories

By default, IAContext ignores common directories that usually do not contribute to the project's source context:

* `node_modules`
* `dist`
* `build`
* `.git`
* `coverage`
* `bin`
* `obj`
* `.env`
* `.png`
* `.jpg`
* `.jpeg`
* `.gif`
* `.mp4`
* `.svg`
* `.webp`
* `.ico`
* `.pdf`
* `.zip`
* `.rar`
* `.7z`

---

## 📜 License

ISC
