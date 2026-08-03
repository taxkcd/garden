---
title: "113 · MEDFORD IN A BOX: IMPROVEMENTS AND FUTURE DIRECTIONS FOR A METADATA DESCRIPTION LANGUAGE — Alva L. Couch"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alva-l-couch"
source_hash: "c189b8682a2f151edaa421211b16939fcfe5e6d436b3437439581d8a2b61f97a"
sequence: 113
generator: "outreach-garden: managed"
---

# 113 · MEDFORD IN A BOX: IMPROVEMENTS AND FUTURE DIRECTIONS FOR A METADATA DESCRIPTION LANGUAGE

## At a glance

- **Professor:** Alva L. Couch
- **Institution:** Tufts University
- **Paper:** [MEDFORD IN A BOX: IMPROVEMENTS AND FUTURE DIRECTIONS FOR A METADATA DESCRIPTION LANGUAGE](https://arxiv.org/pdf/2601.15432)
- **Authors:** Polina Shpilker, Benjamin Stubbs, Michael Sayers, Lenore Cowen, Yumin Lee, Donna Slonim, Shaun Wallace, Alva Couch, Noah M. Daniels
- **Year:** 2026

## Paper overview

This paper presents MEDFORD-in-a-Box (MIAB), an improved ecosystem for the MEDFORD metadata language designed to help researchers, especially non-programmers, create and maintain metadata describing their scientific research. The improvements include enhanced validation, better data packaging, and a user-friendly Visual Studio Code extension, all aimed at making metadata creation easier, more accurate, and more reusable to improve research reproducibility.

### Why it matters

**Research problem:** Existing metadata standards and tools are often complex and not user-friendly for non-programmers, leading to delayed or incomplete metadata documentation. MEDFORD aimed to simplify metadata creation but still faced usability barriers such as limited validation, difficulty in data transport, and unfamiliarity with text file editing.

**Why it matters:** Accurate, findable, accessible, interoperable, and reusable (FAIR) metadata is critical for validating scientific research, enabling data reuse, and reducing costs. Without easy-to-use tools, researchers delay metadata creation, which harms reproducibility and data quality.

**Key contributions:**

- Updated MEDFORD parser with enhanced validation routines and BagIt packaging for data transport
- Improved Visual Studio Code extension supporting syntax highlighting, validation, and interactive feedback
- Decoupling of parser, bagIT utilities, and language server for modular development and broader editor support
- Extensions to MEDFORD language enabling metadata inter-connectivity and cross-file referencing
- Proposed new syntax for naming metadata objects to avoid collisions and improve referencing

## About the professor

**Alva L. Couch** — Computer Science Department, Tufts University.

Research interests: science education, networking and information infrastructure, computers and personal privacy, ethics of technical professions, and general political issues of the Democratic party

### Research links

- [Faculty/profile page](http://www.cs.tufts.edu/~couch)
- [Resolved homepage](http://www.cs.tufts.edu/~couch/personal.html)
- [Contact](http://www.cs.tufts.edu/~couch/contact.html)
- [Teaching](http://www.cs.tufts.edu/~couch/teaching.html)
- [Publications](http://www.cs.tufts.edu/~couch/publications.html)
- [Research](http://www.cs.tufts.edu/~couch/ongoing.html)
- [Software](http://www.cs.tufts.edu/~couch/software.html)
- [Arts](http://www.cs.tufts.edu/~couch/art.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MEDFORD-in-a-Box paper, start with foundational concepts including the FAIR data principles that motivate the need for reusable metadata, the BagIt packaging standard used for data integrity and transport, and the Language Server Protocol which underpins the improved editor support. Then, focus on the core concept of MEDFORD metadata language improvements, which are central to the paper's contributions. Finally, conclude with the authors' own talk on MEDFORD-in-a-Box to gain direct insights into their improvements and future directions.

### FAIR data principles *(prerequisite)*
Understanding the FAIR principles is essential as they provide the motivation for creating accurate, findable, accessible, interoperable, and reusable metadata, which MEDFORD-in-a-Box aims to facilitate. The selected video is a university-level explanation that covers the principles in depth, suitable for advanced readers.

*How the paper uses it:* FAIR principles motivate the need for accurate, reusable metadata as addressed by MEDFORD-in-a-Box.

▶ [The FAIR principles explained](https://www.youtube.com/watch?v=5OeCrQE3HhE) — Maastricht University · 6 years ago

### BagIt packaging standard *(prerequisite)*
BagIt is a key technology used in MEDFORD-in-a-Box to package metadata alongside data files ensuring integrity and ease of transfer. The chosen video is a tutorial from a reputable archive institution explaining BagIt in detail, appropriate for an advanced audience.

*How the paper uses it:* BagIt is used in MEDFORD-in-a-Box for packaging metadata and data files to ensure integrity and transportability.

▶ [BagIt Tutorial #1: Introduction (1 of 10)](https://www.youtube.com/watch?v=14ZPtYLtUYA) — State Archives of North Carolina · 15 years ago

### Language Server Protocol for editors *(prerequisite)*
The Language Server Protocol (LSP) is fundamental to understanding the improved Visual Studio Code extension features in MEDFORD-in-a-Box, such as syntax highlighting and validation. The selected video is a concise, technical explanation suitable for developers and researchers familiar with programming tools.

*How the paper uses it:* Understanding LSP helps explain the improved VS Code extension features for MEDFORD metadata authoring.

▶ [LSP Explained (in 5 Minutes)](https://www.youtube.com/watch?v=LaS32vctfOY) — TJ DeVries · 5:06 · 2 years ago

### MEDFORD metadata language improvements
This concept covers the core enhancements in MEDFORD-in-a-Box, including validation, syntax improvements, and cross-file referencing that directly address usability and metadata quality. The chosen video is a research group session on metadata, providing a substantive academic context.

*How the paper uses it:* Core concept describing the enhancements in validation, syntax, and cross-file referencing introduced by MEDFORD-in-a-Box.

▶ [Metadata Session](https://www.youtube.com/watch?v=eeCMN_5Nj_0) — IQSS at Harvard University · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential to understanding the MEDFORD-in-a-Box paper, starting with what metadata is and why FAIR data principles matter. It then covers the BagIt packaging standard and the Language Server Protocol to explain key technical components used in MEDFORD-in-a-Box. Finally, it culminates with an explanation of metadata description languages to build intuition on MEDFORD's role and innovations.

### Metadata description languages *(prerequisite)*
Metadata description languages provide structured ways to describe data and its context, making datasets easier to find, understand, and reuse. Understanding these languages helps grasp why MEDFORD was designed and how it improves metadata creation.

*How the paper uses it:* MEDFORD is a metadata description language enhanced by MEDFORD-in-a-Box to simplify metadata creation and improve interoperability.

▶ [What is metadata (and why does it matter)?](https://www.youtube.com/watch?v=fZWg0ClQkYQ) — Canto · 5 years ago

### FAIR data principles *(prerequisite)*
FAIR principles ensure data is Findable, Accessible, Interoperable, and Reusable, which is critical for scientific reproducibility and data sharing. Knowing these principles explains the motivation behind MEDFORD-in-a-Box's focus on accurate and reusable metadata.

*How the paper uses it:* The paper emphasizes FAIR metadata as essential for validating research and enabling data reuse, which MEDFORD-in-a-Box supports.

▶ [The FAIR principles explained](https://www.youtube.com/watch?v=5OeCrQE3HhE) — Maastricht University · 6 years ago

### BagIt packaging standard *(prerequisite)*
BagIt is a packaging format that bundles data files with metadata and checksums to ensure integrity during transfer. Understanding BagIt clarifies how MEDFORD-in-a-Box packages metadata and associated data securely and reliably.

*How the paper uses it:* MEDFORD-in-a-Box uses BagIt to export metadata and data files together, ensuring error-free data transport.

▶ [BagIt Tutorial #1: Introduction (1 of 10)](https://www.youtube.com/watch?v=14ZPtYLtUYA) — State Archives of North Carolina · 15 years ago

### Language Server Protocol for editors *(prerequisite)*
The Language Server Protocol (LSP) standardizes communication between code editors and language-specific tools, enabling features like syntax highlighting and error checking. This explains how the MEDFORD VS Code extension provides interactive feedback to users.

*How the paper uses it:* The improved MEDFORD VS Code extension uses LSP to offer syntax highlighting, validation, and tab completions for easier metadata authoring.

▶ [LSP Explained (in 5 Minutes)](https://www.youtube.com/watch?v=LaS32vctfOY) — TJ DeVries · 5:06 · 2 years ago
