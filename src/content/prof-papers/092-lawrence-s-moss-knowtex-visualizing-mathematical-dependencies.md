---
title: "092 · KnowTeX: Visualizing Mathematical Dependencies — Lawrence S. Moss"
date: 2026-07-31
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lawrence-s-moss"
source_hash: "8f91e8ed55e0b15fffa819094a31bc601ecf0b16dc314c613f17f09bd1d41d56"
sequence: 92
generator: "outreach-garden: managed"
---

# 092 · KnowTeX: Visualizing Mathematical Dependencies

## At a glance

- **Professor:** Lawrence S. Moss
- **Institution:** Indiana University
- **Paper:** [KnowTeX: Visualizing Mathematical Dependencies](https://arxiv.org/pdf/2601.15294)
- **Authors:** Elif Uskuplu, Lawrence S. Moss, Valeria de Paiva
- **Year:** 2026

## Paper overview

KnowTeX is a standalone tool that helps visualize the logical and conceptual dependencies between mathematical statements directly from LaTeX documents. It uses simple commands embedded in the source to generate clear dependency graphs, making the structure of mathematical texts more transparent and easier to navigate for both humans and automated systems.

### Why it matters

**Research problem:** Mathematical knowledge is complex and spread across informal texts and formal proof systems, making it difficult to perceive and navigate the dependencies between definitions, theorems, and proofs. Existing tools either expose too much detail (formal systems) or rely on specific ecosystems or imperfect machine learning methods, limiting accessibility and usability.

**Why it matters:** Understanding the dependency structure in mathematics aids learning, efficient study planning, selective formalization, and the construction of high-quality machine-readable mathematical corpora. Clear visualization of dependencies supports both human comprehension and automated reasoning, which is crucial for advancing AI applications in mathematics and related sciences.

**Key contributions:**

- Development of KnowTeX, a standalone, user-friendly tool for generating dependency graphs from LaTeX sources.
- Introduction of a simple command-based system (\uses, \proves) to explicitly mark dependencies within mathematical texts.
- Compatibility with existing tools like Lean Blueprint and plasTeXdepgraph while remaining independent of formal proof systems.
- Provision of outputs in widely used formats (DOT and TikZ) enabling flexible visualization and integration.
- Demonstration of practical benefits for learning, formalization, and corpus construction through case studies.

## About the professor

**Lawrence S. Moss** — Associate Professor, Department of Management, Indiana University.

Research interests: text mining, quality control, statistics, asymmetric distributions

### Research links

- [Faculty/profile page](https://logic.indiana.edu/_archive/web/moss/index.html)
- [Identity evidence](https://iulg.sitehost.iu.edu/moss)
- [Identity evidence](https://scholar.google.com/citations?user=9XDfKqYAAAAJ&hl=en&oi=ao)
- [Identity evidence](https://www.researchgate.net/profile/Lawrence-Moss)
- [Professor website](https://www.researchgate.net/profile/Triss_Ashton)
- [Resolved homepage](https://www.researchgate.net/profile/Triss-Ashton)
- [Lab website](https://www.researchgate.net/lab/Triss-Ashton-Lab)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand KnowTeX and its contributions, start with foundational knowledge on formal and informal mathematical proof systems to grasp the context of bridging informal texts and formal proof assistants. Next, study mathematical knowledge representation to appreciate how mathematical statements and their relations can be modeled. Then, learn about dependency graphs in mathematics, which underpin the visualization of logical and conceptual dependencies. Finally, focus on the core concept of KnowTeX itself, including the authors' own presentation to gain direct insights into their approach and results.

### Formal and informal mathematical proof systems *(prerequisite)*
Understanding formal and informal proof systems provides essential context for KnowTeX's approach, which aims to bridge informal mathematical texts and formal proof assistants. This background clarifies the challenges in representing and verifying mathematical knowledge and the motivation for tools like KnowTeX.

*How the paper uses it:* KnowTeX bridges informal mathematical texts and formal proof systems, so understanding proof systems is foundational.

▶ [Patrick Massot - Formal mathematics for mathematicians and ...](https://www.youtube.com/watch?v=tp_h3vzkObo) — Institute for Pure & Applied Mathematics (IPAM) · 54:44

### Mathematical knowledge representation *(prerequisite)*
This topic covers how mathematical knowledge, including statements and their interrelations, can be formally modeled and represented. It is crucial for appreciating how KnowTeX explicitly encodes dependencies between mathematical statements to generate meaningful visualizations.

*How the paper uses it:* KnowTeX explicitly marks dependencies between mathematical statements, relying on knowledge representation principles.

▶ [Grad Course in AI (#6): Knowledge Representation, Logic and ...](https://www.youtube.com/watch?v=TUeGu--jZrc) — Mausam · 1:36:05

### Dependency graphs in mathematics *(prerequisite)*
Dependency graphs are the core data structure underlying KnowTeX's visualization of logical and conceptual dependencies. Understanding how these graphs represent relationships and support reasoning is key to grasping the tool's significance and output.

*How the paper uses it:* KnowTeX generates dependency graphs to visualize mathematical dependencies clearly.

▶ [Introduction to Causal Graphical Models: Graphs, d ...](https://www.youtube.com/watch?v=mujOFx5oZUQ) — Simons Institute for the Theory of Computing · 1:06:26

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand KnowTeX and its approach to visualizing mathematical dependencies, start by learning the basics of LaTeX since KnowTeX extends this widely used format for mathematical documents. Then, build foundational knowledge on how mathematical knowledge is represented and how dependency graphs work to visualize logical and conceptual relationships. Finally, explore the core method of KnowTeX—using explicit commands to generate dependency graphs—so you can appreciate how it bridges informal mathematical texts and formal visualization tools.

### LaTeX for mathematical documents *(prerequisite)*
LaTeX is the standard typesetting system used to write mathematical documents. Understanding how to write and structure math in LaTeX is essential because KnowTeX processes LaTeX source files and extends them with commands to mark dependencies.

*How the paper uses it:* KnowTeX extends LaTeX by adding commands like \uses and \proves to mark dependencies in mathematical texts.

▶ [Intro to LaTeX : Learn to write beautiful math equations || Part 1](https://www.youtube.com/watch?v=Jp0lPj2-DQA) — Dr. Trefor Bazett · 19:09 · 6 years ago

### Mathematical knowledge representation *(prerequisite)*
Mathematical knowledge representation studies how mathematical concepts, definitions, and theorems can be modeled and related to each other. This foundation helps understand why visualizing dependencies between statements is valuable for learning and formalization.

*How the paper uses it:* KnowTeX aims to make the structure of mathematical knowledge explicit and accessible by visualizing dependencies between statements.

▶ [Introduction to Knowledge Representation and Reasoning](https://www.youtube.com/watch?v=cckckL3uOW8) — Artificial Intelligence · 29:17

### Dependency graphs in mathematics *(prerequisite)*
Dependency graphs are visual tools that show how different elements depend on each other, such as which definitions support which theorems. Understanding these graphs is key to grasping how KnowTeX visualizes logical and conceptual dependencies in math texts.

*How the paper uses it:* KnowTeX generates dependency graphs that clearly differentiate conceptual and logical dependencies between mathematical statements.

▶ [Dependancy graphs | Compiler design |  All Universities](https://www.youtube.com/watch?v=PUytyhA48sI) — INFOSTREAM ENGINEERING · 10 months ago

### Command-based dependency visualization
This concept covers how explicit commands or annotations can be used to mark dependencies in source files, which are then processed to generate visual dependency graphs. It explains the practical workflow behind tools like KnowTeX.

*How the paper uses it:* KnowTeX uses simple LaTeX commands like \uses and \proves embedded in the source to build dependency graphs automatically.

▶ [Dependency Graph in Compiler Design || Step-by-Step ...](https://www.youtube.com/watch?v=xnQfcZWCvJI) — Sundeep Saradhi Kanthety · 15:35


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder for KnowTeX, starting from reproducing a basic dependency graph from LaTeX source, moving to implementing the core command-based dependency extraction and visualization pipeline, and culminating in extending KnowTeX with interactive visualization features to address its stated limitations. Each project builds on the previous one and ties directly to key contributions, results, or future directions of the paper, demonstrating a clear understanding of KnowTeX's design and impact.

### Beginner — Render a Simple Mathematical Dependency Graph from LaTeX
*Effort: a weekend, ~8 hours*

You build a minimal LaTeX document embedding \uses and \proves commands to mark dependencies between a few mathematical statements, then manually generate and render the corresponding DOT graph using Graphviz. This reproduces a simple dependency graph figure similar to those in the paper.

**Why it shows you understood the paper:** This project shows you understand how KnowTeX uses explicit LaTeX commands to encode dependencies and how these can be visualized as graphs, demonstrating grasp of the paper's core mechanism and output format.

**Grounded in:** Demonstrates the paper's key contribution: "Introduction of a simple command-based system (\uses, \proves) to explicitly mark dependencies within mathematical texts." and the key result: "Successful extraction and visualization of dependency graphs from complex mathematical texts."

**Tech stack:** LaTeX, Graphviz (dot)

**Data:** A small synthetic LaTeX source file you create with embedded \uses and \proves commands, inspired by examples in the paper.

**Build it:**

1. Write a minimal LaTeX document with a few definitions, lemmas, and theorems, embedding \uses and \proves commands to mark dependencies.
2. Manually extract these commands and create a DOT format graph file representing the dependency structure.
3. Use Graphviz to render the DOT file into a visual graph (e.g., PNG or SVG).
4. Include the rendered graph image back into the LaTeX document using \includegraphics.
5. Write a README explaining the process and how the commands correspond to graph edges.

**Ships as:** A GitHub repo containing the LaTeX source, the DOT graph file, the rendered graph image, and a README explaining the dependency markup and visualization.

**Stretch goal:** Automate the extraction of \uses and \proves commands from the LaTeX source using a simple script to generate the DOT file.

### Intermediate — Reimplement KnowTeX Core: Dependency Graph Extraction and Visualization
*Effort: 2 weekends, ~20 hours*

You implement a standalone tool that parses LaTeX source files with \uses and \proves commands, extracts dependency relations, and generates dependency graphs in DOT and TikZ formats. You apply it to a small public mathematical LaTeX document (or a synthetic substitute) and compare your output to that of the plasTeXdepgraph tool as a baseline.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the core method of KnowTeX independently, understand its command-based approach, and evaluate compatibility and output quality against an existing tool, reflecting deep comprehension of the paper's approach and results.

**Grounded in:** Reimplements the paper's key contribution: "Development of KnowTeX, a standalone, user-friendly tool for generating dependency graphs from LaTeX sources." and validates the key result: "Verification of compatibility with LaTeX documents prepared for other dependency graph tools without modification."

**Tech stack:** Python 3.11, regex or parsing libraries, Graphviz (dot), TikZ (LaTeX)

**Data:** A small LaTeX document with embedded dependency commands, either synthetic or adapted from public domain mathematical notes; plasTeXdepgraph GitHub repository for baseline comparison.

**Build it:**

1. Write a Python script to parse LaTeX source files and extract \uses and \proves commands with their labels.
2. Build an internal graph representation of the dependencies with nodes and edges (distinguishing conceptual vs. proof dependencies).
3. Generate output files in DOT and TikZ formats representing the dependency graph.
4. Apply your tool to a sample LaTeX document and generate visualizations.
5. Run plasTeXdepgraph on the same document to compare outputs and document differences.
6. Write a README documenting your implementation, usage instructions, and comparison results.

**Verified links from the paper:**

- <https://github.com/PatrickMassot/plastexdepgraph> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the Python extraction tool, sample LaTeX input, generated DOT and TikZ outputs, comparison notes with plasTeXdepgraph, and usage documentation.

**Stretch goal:** Add command-line options to customize output formats and edge styles (e.g., dashed vs. solid edges).

### Advanced — Interactive Visualization Extension for KnowTeX Dependency Graphs
*Effort: 3+ weeks*

You extend the static dependency graph visualization by building an interactive web-based viewer that loads DOT or TikZ-generated graphs and allows users to click nodes to view corresponding LaTeX source snippets. This addresses the paper's limitation of static visualization and explores the future direction of enhancing interactivity and linking back to source text.

**Why it shows you understood the paper:** This project shows you can identify and address a key limitation of KnowTeX, creatively integrate static graph outputs with interactive web technologies, and bridge the gap between visualization and source navigation, demonstrating research-level insight and engineering skill.

**Grounded in:** Targets the paper's stated limitation: "Visualization is currently static with limited interactivity compared to HTML-based or integrated formal proof systems." and future direction: "Enhancing interactivity and customization of visualizations, including clickable nodes linking back to source text."

**Tech stack:** TypeScript, React, D3.js or Viz.js, Node.js, Python (optional for backend)

**Data:** Use dependency graphs generated by your intermediate project or synthetic LaTeX documents with embedded dependency commands; no external dataset required.

**Build it:**

1. Build a React web app that loads DOT or JSON representations of dependency graphs.
2. Parse the graph data to render nodes and edges interactively using D3.js or Viz.js.
3. Implement clickable nodes that display the corresponding LaTeX source snippet in a side panel or popup.
4. Add UI controls to filter or highlight conceptual vs. proof dependencies (dashed vs. solid edges).
5. Integrate a simple backend or file loader to serve LaTeX source snippets linked to nodes.
6. Write documentation explaining how to use the interactive viewer and how it improves on static visualization.

**Ships as:** A GitHub repo with a React-based interactive dependency graph viewer, sample graph data and LaTeX snippets, and a README describing installation, usage, and design rationale.

**Stretch goal:** Add search functionality to locate specific statements or dependencies within the graph and source text.

_The paper's authors did not release their own code for KnowTeX, so the intermediate project requires reimplementation from the paper's description; ensure familiarity with plasTeXdepgraph as a baseline tool._
