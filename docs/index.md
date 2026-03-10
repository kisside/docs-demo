# RatioNAI Docs Demo

This is a demonstration of **Jupyter Book** with interactive, remotely-executed
code cells. Heavy operations (e.g. loading a whole-slide image) run on a remote
Binder kernel — not on the reader's machine.

## How interactivity works

Every page that contains code cells shows a **rocket icon** in the top-right
toolbar. Readers can:

| Action | What happens |
|---|---|
| **Live Code** (Thebe) | Code cells become editable & runnable *in-place* — a Binder kernel is launched behind the scenes. |
| **Binder** | Opens the notebook in a full JupyterLab session on [mybinder.org](https://mybinder.org). |
| **JupyterHub** | (If configured) Opens the notebook on your own hub for authenticated, GPU-enabled workloads. |

```{tableofcontents}
```
