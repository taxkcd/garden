---
title: "113 · MEDFORD IN A BOX: IMPROVEMENTS AND FUTURE DIRECTIONS FOR A METADATA DESCRIPTION LANGUAGE — Alva L. Couch"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alva-l-couch"
source_hash: "93c676c8aa986ed3e361cb03662fee46fb51d8f5ca48554c3090fb9f419a97f7"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Research Data Management
**The paper assumes:** fundamentals of research data management and metadata standards
**Already in this field?** Skip this entirely if you already understand research data management concepts, metadata standards, and FAIR data principles.

To understand the improvements and context of MEDFORD-in-a-Box for metadata creation and research data management, it is essential to grasp core concepts of research data management including metadata standards, FAIR principles, and data packaging. The rigorous course offers a structured, university-level introduction to these topics, while the fast track provides a concise, practical overview suitable for quick comprehension and immediate application.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [TU Delft - Research Data Management 101 (RDM101)](https://www.youtube.com/playlist?list=PLdHnT1NHNDE-A9wLpAfho_Wum9Xw6Q0_E) — Data Stewardship TU Delft · 13 videos · 0.5h across 13 episodes

**Watch only this:** Episodes 6-9: 'RDM101- Module3: Key Elements of FAIR - Documentation and Metadata', 'Interoperability', 'Access to Data', and 'Persistent Identifiers' — about 8 minutes total. These cover the FAIR principles and metadata essentials needed to understand MEDFORD's role.

*Why it unblocks this paper:* This TU Delft Research Data Management 101 course is directly focused on research data management fundamentals, including metadata and FAIR principles, which are central to the paper's contributions on metadata usability and packaging.

*If you want all of it:* All 13 episodes, about 30 minutes total, for a complete foundational overview of research data management concepts relevant to the paper.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Data Management Courses - Fast Track Learning](https://www.youtube.com/playlist?list=PLmEqVh8_i9736qJR_zTl1sRQ9rYI8ii3h) — Global Data Store LLC · 11 videos · 2.0h across 11 episodes

**Watch only this:** Episodes 1-3: 'Introduction to Data Management (Online Course - Preview)', 'Data Management - Introduction', and 'Data Management - Metadata Management' — about 30 minutes total, covering core concepts and metadata basics.

*Why it unblocks this paper:* This Global Data Store LLC playlist provides a concise, practical introduction to data management topics including metadata management and data governance, which align well with the paper's focus on simplifying metadata creation and validation.

*If you want all of it:* All 11 episodes, about 2 hours total, for a broader but still accessible overview of data management principles.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the MEDFORD-in-a-Box (MIAB) improvements. The beginner project focuses on reproducing and validating MEDFORD syntax highlighting and validation in a VS Code extension context, leveraging your frontend and TypeScript skills. The intermediate project involves reimplementing the MEDFORD parser's enhanced validation and BagIt packaging capabilities in Python, applying them to a small synthetic metadata dataset to show correctness and packaging integrity. The advanced project tackles a future direction from the paper by developing a prototype import plugin to extract metadata from image EXIF data into MEDFORD format, addressing the paper's limitation on metadata import plugins and extending MEDFORD usability to a new domain.

### Beginner — MEDFORD Syntax Highlighting and Validation in VS Code
*Effort: a weekend, ~8 hours*

You build a Visual Studio Code extension that provides syntax highlighting, tab completions, and background validation for MEDFORD metadata files (.mfd). This reproduces the paper's improvements to the VS Code extension, focusing on user-friendly feedback for non-programmers writing MEDFORD metadata.

**Why it shows you understood the paper:** This project shows you understand the MEDFORD language's syntax and token validation improvements, and how editor tooling can improve metadata usability, a core contribution of the paper.

**Grounded in:** VS Code extension provides syntax highlighting, tab completions, and background validation improving user experience

**Tech stack:** TypeScript, Visual Studio Code Extension API, JSON, Node.js

**Data:** You create small example MEDFORD metadata files based on the paper's syntax examples to test highlighting and validation.

**Build it:**

1. Study the MEDFORD language syntax and token types as described in the paper.
2. Set up a VS Code extension project using TypeScript and the VS Code Extension API.
3. Implement syntax highlighting rules for MEDFORD keywords, tokens, and comments.
4. Add a language server or background validation that checks token types and reports errors inline.
5. Implement tab completions for common MEDFORD tokens and metadata fields.
6. Test the extension on example MEDFORD files and document usage in the README.

**Ships as:** A VS Code extension repository with installation instructions, example MEDFORD files demonstrating syntax highlighting and validation, and a README explaining how the extension improves metadata authoring.

**Stretch goal:** Add interactive hover tooltips explaining MEDFORD tokens and validation errors to further assist non-programmers.

### Intermediate — Reimplement MEDFORD Parser with Validation and BagIt Packaging
*Effort: 2 weekends, ~20 hours*

You build a Python tool that parses MEDFORD metadata files, validates token data types including user-defined tokens via YAML rules, and packages metadata with referenced data files into a BagIt archive. You apply this to a small synthetic dataset simulating scientific metadata and data files.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core method: enhanced validation routines and BagIt export for metadata integrity and transport, showing you can implement and test these improvements from the paper's descriptions.

**Grounded in:** Updated MEDFORD parser with enhanced validation routines and BagIt packaging for data transport

**Tech stack:** Python 3.11, PyYAML, bagit-python, pytest

**Data:** Synthetic MEDFORD metadata files and dummy data files you create to simulate a research dataset with metadata references.

**Build it:**

1. Design a MEDFORD parser that reads metadata files and tokenizes lines according to the paper's syntax.
2. Implement validation routines for major token data types (e.g., dates, strings, numbers) and support user-defined tokens and validation rules loaded from YAML files.
3. Integrate BagIt packaging to bundle the validated MEDFORD metadata files with referenced data files into a BagIt archive with checksums.
4. Create a small synthetic dataset of MEDFORD metadata files and dummy data files to test parsing, validation, and packaging.
5. Write tests to verify correct parsing, validation error detection, and BagIt archive integrity.
6. Document usage and how this tool improves metadata correctness and data transport.

**Ships as:** A Python package repository with a command-line tool to parse, validate, and package MEDFORD metadata and data files, including tests and example datasets.

**Stretch goal:** Add support for cross-file referencing of metadata objects as per the paper's new MEDFORD language features.

### Advanced — Prototype MEDFORD Import Plugin for EXIF Metadata Extraction
*Effort: 3-4 weeks*

You develop a MEDFORD import plugin that extracts metadata from image EXIF data and converts it into MEDFORD metadata format, integrating with the MEDFORD parser tool. This addresses the paper's limitation that import plugins for metadata extraction from native file formats are under development.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction by extending MEDFORD's usability to a new domain (image metadata), demonstrating your ability to apply and extend the paper's ecosystem practically.

**Grounded in:** Development of tools to import metadata from native file formats like EXIF in images; limitation that import plugins are still under development

**Tech stack:** Python 3.11, exifread or Pillow, PyYAML, bagit-python, pytest

**Data:** A collection of sample images with EXIF metadata (public domain or your own photos) used to extract metadata for conversion.

**Build it:**

1. Research EXIF metadata structure and extraction libraries in Python (e.g., exifread, Pillow).
2. Design a mapping from EXIF tags to MEDFORD metadata tokens based on MEDFORD language extensions.
3. Implement a plugin that reads EXIF data from images and generates corresponding MEDFORD metadata files.
4. Integrate this plugin with the MEDFORD parser and BagIt packaging tool from the intermediate project.
5. Test the plugin on a variety of sample images, verifying correct metadata extraction and packaging.
6. Document the plugin usage, limitations, and how it extends MEDFORD's metadata import capabilities.

**Ships as:** A Python plugin repository that extracts EXIF metadata into MEDFORD format and packages it with images, with tests and documentation.

**Stretch goal:** Extend the plugin to support other file types such as genomic data or PDF metadata, as envisioned in the paper's future directions.
