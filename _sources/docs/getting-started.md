# Getting Started

## Installation

```bash
pip install jupyter-book
```

## Building the docs

```bash
jupyter-book build .
```

The generated HTML is in `_build/html/`. Open `_build/html/index.html` in a
browser to preview locally.

## Making cells interactive

The interactivity is driven by two things:

1. **`_config.yml`** — sets `launch_buttons.thebe: true` and configures the
   Binder repository.
2. **`requirements.txt`** (or a Binder-compatible environment file at the repo
   root) — tells Binder which packages to install in the remote kernel.

When a reader clicks the **Live Code** button, [Thebe](https://thebe.readthedocs.io)
requests a kernel from mybinder.org (or your own BinderHub/JupyterHub), then
connects every code cell on the page to that kernel. Readers can edit and re-run
cells without leaving the documentation.
