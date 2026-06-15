# 🧠 IAContext

IAContext is a command-line tool that generates a single Markdown file containing your project's complete context.

Its purpose is to simplify sharing your application's structure and source code with AI assistants, enabling more accurate analysis without manually selecting and uploading multiple files.

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

This command scans the current directory and generates a file named:

```text
project-context.md
```

You can also specify a custom path:

```bash
iacontext export <path>
```

Examples:

```bash
iacontext export src
```

```bash
iacontext export ../another-project
```

The generated file is always created in the directory where the command is executed.

---

## 📄 What is Generated?

The `project-context.md` file contains:

* Project file structure
* Consolidated content of detected files
* A complete project context organized in Markdown

This makes it easier to provide context to AI assistants such as ChatGPT, Claude, Gemini, and others.

---

## 💡 Use Cases

With the generated file, you can ask AI assistants for help with:

* 🐛 Bug fixing
* 🏗️ Architecture and project organization
* ✨ Refactoring
* 📚 Documentation generation
* 🔍 Code reviews
* 🚀 Feature implementation

---

## 📦 Examples

Generate context for the current project:

```bash
cd my-project

iacontext export
```

Generate context for a specific directory:

```bash
iacontext export src
```

Generate context for a specific folder:

```bash
iacontext export src/controllers
```

In this example, IAContext will analyze only the files contained within the `src/controllers` directory.

Relative paths are always resolved from the directory where the command is executed.

For example, if the command is executed from:

```text
C:/projects/my-app
```

and you run:

```bash
iacontext export src/controllers
```

IAContext will analyze:

```text
C:/projects/my-app/src/controllers
```

After the process completes, a file named:

```text
project-context.md
```

will be generated in the current working directory.

---

## ⚙️ Ignored Files and Directories

By default, IAContext ignores files and directories that usually do not contribute meaningful source-code context:

### Directories

* `node_modules`
* `dist`
* `build`
* `.git`
* `coverage`
* `bin`
* `obj`

### Environment Files

* `.env`
* `.env.*`

### Binary and Media Files

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

### Generated Files

* `project-context.md`

---

## 📜 License

ISC
