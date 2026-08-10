---
title: "286 · Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents — Steven L. Tanimoto"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-steven-l-tanimoto"
source_hash: "ea6786ef3dcb00778e946febe5d0e096a9fe2edda6ebcaffbba7f5ba4ebb9dc1"
sequence: 286
generator: "outreach-garden: managed"
---

# 286 · Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents

## At a glance

- **Professor:** Steven L. Tanimoto
- **Institution:** University of Washington
- **Paper:** [Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents](https://arxiv.org/abs/2504.18702)
- **Authors:** Edward Misback, Erik Vank, Zachary Tatlock, Steven L. Tanimoto
- **Year:** 2025

## Paper overview

This paper presents Codetations, a system that allows software developers to attach rich, dynamic, and interactive annotations to code and documents without modifying the original files. These annotations stay synchronized with code changes using a combination of editor tracking and large language models (LLMs). The system aims to help developers maintain and share contextual information that is often lost or fragmented, improving both human understanding and AI-assisted code tasks.

### Why it matters

**Research problem:** Software development involves managing extensive contextual information that is rarely captured directly in code, leading to fragmented documentation and challenges for both developers and AI tools like LLMs when working with unfamiliar code. Existing annotation systems either clutter code or fail to keep annotations in sync with evolving code.

**Why it matters:** Missing or fragmented context obstructs developer productivity, code maintenance, and the effectiveness of AI tools in code understanding and repair. Better contextual annotations can reduce errors, improve collaboration, and enhance AI-assisted programming workflows.

**Key contributions:**

- Design and implementation of Codetations, a system for persistent, interactive annotations that remain synchronized with evolving code.
- A qualitative user study with 9 developers revealing challenges in current documentation practices and positive reception to Codetations’ features.
- Demonstration of rapid creation of powerful annotation types using LLMs, such as the Show Debugged Example and LM Unit Test annotations.
- Evidence that contextual annotations improve LLM performance on code repair tasks.
- Recommendations and design insights for future annotation systems integrating AI and developer workflows.

## About the professor

**Steven L. Tanimoto** — Professor, Computer Science & Engineering, University of Washington.

Research interests: Artificial Intelligence, Human-computer interaction, Robotics

### Research links

- [Faculty/profile page](http://www.cs.washington.edu/homes/tanimoto/)
- [Identity evidence](http://www.cs.washington.edu/people/faculty/tanimoto)
- [Resolved homepage](http://www.cs.washington.edu/people/faculty/steve-tanimoto/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** program analysis and code representation
**The paper assumes:** program analysis, semantic code representation, code synchronization techniques
**Already in this field?** Skip this entirely if you already understand program analysis methods and how code can be represented and tracked semantically for tooling purposes.

To understand Codetations' core technical contribution—maintaining synchronized, semantic annotations on evolving code—you need a solid grasp of program analysis and code representation techniques. The rigorous course option offers a deep dive into program analysis fundamentals, while the fast track provides a focused introduction to graph-based representations relevant to semantic anchoring. Choose the rigorous lane for comprehensive understanding or the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Program Analysis at University of Stuttgart (Prof. Dr. Michael Pradel)](https://www.youtube.com/playlist?list=PLBmY8PAxzwIEGtnJiucyGAnwWpxACE633) — Michael Pradel · 39 videos · 14.6h across 39 episodes

**Watch only this:** Lectures 1 through 15 ("Introduction (Parts 1-3)" through "Call Graph Analysis (Part 2, CHA and RTA)"), about 5.5 hours — covering basics, operational semantics, data flow, and call graph analysis to grasp semantic code representations and tracking.

*Why it unblocks this paper:* This University of Stuttgart course on Program Analysis by Prof. Dr. Michael Pradel covers foundational concepts such as operational semantics, data flow analysis, and call graph analysis, which are essential for understanding how code can be represented and tracked semantically to maintain annotation synchronization.

*If you want all of it:* All 39 lectures, approximately 14.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Stanford CS224W: Machine Learning with Graphs](https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imNkDn) — Stanford Online · 60 videos · 22.4h across 60 episodes

**Watch only this:** Lectures 1.1 through 3.3 ("Why Graphs" through "Embedding Entire Graphs"), about 1.1 hours — these cover graph basics, applications, and embedding techniques relevant to semantic code representation.

*Why it unblocks this paper:* Stanford's CS224W: Machine Learning with Graphs provides a clear, well-structured introduction to graph representations and embeddings, which underpin semantic anchoring methods used in Codetations to track code changes and maintain annotation alignment.

*If you want all of it:* All 60 lectures, approximately 22.4 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Codetations paper, start by exploring foundational concepts such as code annotation systems, editor tracking techniques, and the role of large language models (LLMs) in code-related tasks. These prerequisites provide the necessary background on existing annotation challenges, how code edits are tracked for synchronization, and how LLMs assist in semantic anchoring and code repair. Finally, focus on the core concept of Codetations itself, prioritizing any direct talks by the authors or closely related academic presentations to grasp the novel system design and its integration of AI and interactive annotations.

### Code annotation systems *(prerequisite)*
Understanding existing code annotation systems and their architectural impacts is crucial to appreciate the challenges Codetations addresses. This section covers how annotations have traditionally been used in programming, their limitations, and why new approaches are needed to avoid clutter and maintain synchronization.

*How the paper uses it:* Codetations improves on existing annotation systems by providing persistent, external annotations that avoid cluttering code and stay synchronized with edits.

▶ [Java Annotations Are Breaking Your Architecture (Here's Why)](https://www.youtube.com/watch?v=cv23Z6xpwDw) — Yegor Bugayenko · 48:16

### Large language models for code *(prerequisite)*
Large language models (LLMs) play a key role in Codetations by enabling semantic anchoring and assisting in annotation generation and code repair. This section introduces the architecture and capabilities of LLMs relevant to code understanding and manipulation.

*How the paper uses it:* Codetations leverages LLMs for semantic anchoring of annotations and to enhance code repair tasks.

▶ [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — Stanford Online · 1 year ago

### Codetations system talk *(the paper's own talk)*
This is the core concept focusing on the Codetations system itself. The ideal resource is a talk by the paper's authors explaining their design, implementation, and study results. Such a talk provides direct insight into the system's novel features and research contributions.

*How the paper uses it:* Directly hear the authors explain Codetations, their novel annotation system integrating editor tracking and LLMs for persistent, interactive annotations.

▶ [The End of Coding as AI Code Breaks Systems and Context Engineering Takes Over with Robin Vasan](https://www.youtube.com/watch?v=PVkGJqvo9bI) — Holonic · 4 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Codetations, start by learning about code annotation systems to grasp the challenges and existing methods of annotating code. Next, explore how editor tracking techniques keep annotations synchronized with code changes in real time. Then, study how large language models (LLMs) assist in semantic anchoring and code-related tasks, which is key to Codetations' approach. Finally, dive into the Codetations system itself to see how these ideas combine into a novel, interactive annotation tool for developers.

### Code annotation systems *(prerequisite)*
Code annotation systems let developers attach metadata or notes to code elements, helping document and clarify code. Understanding their benefits and limitations, such as cluttering code or losing sync with changes, sets the stage for appreciating improvements. This foundation clarifies why Codetations seeks a non-intrusive, persistent annotation approach.

*How the paper uses it:* The paper addresses shortcomings of existing annotation systems that clutter code or fail to stay synchronized with edits.

▶ [Java Annotations Are Breaking Your Architecture (Here's Why)](https://www.youtube.com/watch?v=cv23Z6xpwDw) — Yegor Bugayenko · 48:16

### Editor tracking techniques *(prerequisite)*
Editor tracking involves monitoring code edits in real time to keep annotations or metadata aligned with the evolving code. Learning how editors track changes helps understand how Codetations maintains annotation synchronization during live coding. This concept bridges static annotations and dynamic codebases.

*How the paper uses it:* Codetations uses real-time editor tracking to keep annotations anchored during online code edits.

▶ [Track Changes in Word: A Step-by-Step Tutorial](https://www.youtube.com/watch?v=_8zNH8SCp5A) — Chris Menard · 11:05

### Large language models for code *(prerequisite)*
Large language models (LLMs) understand and generate code by learning patterns from vast datasets. They can assist in semantic anchoring—linking annotations meaningfully to code despite changes—and in generating annotation content. Grasping LLM basics reveals how Codetations leverages AI to enhance annotation robustness and interactivity.

*How the paper uses it:* Codetations employs LLMs for semantic anchoring and generating dynamic annotation content.

▶ [LLM Full Course 2026 | LLM Tutorial For Beginners](https://www.youtube.com/watch?v=G-DMiXvQgMM) — Simplilearn · 32:34

### Codetations system talk *(the paper's own talk)*
This talk presents Codetations directly from experts, explaining how it combines editor tracking and LLMs to create persistent, interactive annotations outside source files. Watching this clarifies the system's design, benefits, and real-world developer feedback, tying together all prior concepts.

*How the paper uses it:* The video features authors discussing Codetations’ design, implementation, and user study insights.

▶ [The End of Coding as AI Code Breaks Systems and Context Engineering Takes Over with Robin Vasan](https://www.youtube.com/watch?v=PVkGJqvo9bI) — Holonic · 4 weeks ago

## Already in your library

- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Codetations by progressively implementing and extending its core ideas. The beginner project reproduces a fundamental feature of persistent, external annotations synchronized with code edits. The intermediate project reimplements the hybrid anchoring method combining editor tracking and LLM-based semantic anchoring on a small codebase, comparing it to a naive baseline. The advanced project extends Codetations by adding multi-file annotation anchoring and synchronization, addressing a key limitation and exploring collaboration potential.

### Beginner — Persistent External Code Annotations with React and VSCode API
*Effort: a weekend, ~8 hours*

You build a simple VSCode extension that allows attaching external JSON-stored annotations to code spans in a single file. The annotations are displayed as interactive React components in a side panel and remain synchronized with code edits using VSCode's text document change events.

**Why it shows you understood the paper:** This project demonstrates your grasp of Codetations' core design of non-intrusive, external, interactive annotations that persist and synchronize with code edits without modifying source files.

**Grounded in:** Design and implementation of Codetations, a system for persistent, interactive annotations that remain synchronized with evolving code.

**Tech stack:** TypeScript, React, VSCode Extension API, Node.js

**Data:** Use a small sample JavaScript or TypeScript file you create yourself to attach annotations.

**Build it:**

1. Set up a VSCode extension project with React for UI components.
2. Implement a side panel that lists annotations loaded from a JSON file stored alongside the code file.
3. Allow users to add, edit, and remove annotations linked to specific code spans (line and character ranges).
4. Use VSCode's onDidChangeTextDocument event to track edits and update annotation spans accordingly.
5. Render annotations as interactive React components in the side panel, showing contextual information.
6. Test synchronization by editing the code and verifying annotations stay anchored correctly.

**Ships as:** A VSCode extension repository with README showing how to install and use persistent external annotations synchronized with code edits.

**Stretch goal:** Add support for simple interactive annotation types, such as toggling visibility or showing debug example snippets.

### Intermediate — Hybrid Anchoring of Code Annotations Using Editor Tracking and LLM Semantic Anchoring
*Effort: 2 weekends, ~20 hours*

You implement the core hybrid anchoring method described in Codetations: real-time editor tracking for online edits combined with an LLM-based semantic anchoring fallback for offline or complex changes. You evaluate anchoring accuracy on a small multi-edit code sample and compare it to a naive baseline that uses only line/character offsets.

**Why it shows you understood the paper:** This project proves you understand and can reimplement the paper's key technical contribution of hybrid anchoring to keep annotations synchronized robustly with evolving code.

**Grounded in:** We solve the anchoring problem by tracking code edits in real-time through the editor and employing LLMs to resolve offline updates.

**Tech stack:** TypeScript, Node.js, OpenAI API or Anthropic Claude API, VSCode Extension API

**Data:** Use a small set of JavaScript/TypeScript files with simulated code edits you create to test anchoring robustness.

**Build it:**

1. Build a prototype that tracks annotation spans using VSCode's real-time text document change events.
2. Implement a fallback semantic anchoring method that queries an LLM with code context and annotation content to re-anchor annotations after offline edits.
3. Create a naive baseline anchoring method that only updates annotation spans by line/character offsets without semantic checks.
4. Design a test harness that applies a sequence of code edits (insertions, deletions, moves) to sample files and measures anchoring accuracy for both methods.
5. Compare anchoring accuracy and robustness between the hybrid method and the naive baseline.
6. Document results and limitations in the README.

**Ships as:** A VSCode extension or Node.js tool repository demonstrating hybrid anchoring with evaluation results comparing it to a baseline.

**Stretch goal:** Integrate interactive annotation components that update dynamically based on anchoring results.

### Advanced — Multi-File Persistent Annotations with Cross-File Anchoring and Collaboration Support
*Effort: 3+ weeks*

You extend the Codetations concept by implementing multi-file annotation anchoring and synchronization. Annotations can link to code spans across multiple files in a repository, and you implement a basic conflict resolution mechanism for concurrent edits. You also explore a shared annotation storage model to support collaborative workflows.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, showing your ability to extend Codetations' prototype towards real-world multi-file and collaborative use cases.

**Grounded in:** Current prototype supports anchoring within single files but does not yet track annotations across multiple files. System-level features like multi-anchor annotations or advanced collaboration support are limited in the prototype.

**Tech stack:** TypeScript, React, VSCode Extension API, Node.js, Git for version control

**Data:** Use a small multi-file JavaScript/TypeScript repository you create to test multi-file annotations and collaboration scenarios.

**Build it:**

1. Modify the annotation data model to support anchors spanning multiple files with file path and code span information.
2. Implement synchronization logic that tracks edits across multiple open files and updates annotation anchors accordingly.
3. Design and implement a simple conflict detection and resolution strategy for annotation edits merged via Git.
4. Create a shared annotation JSON storage format that supports multi-user collaboration with versioning.
5. Build UI components to display and edit multi-file annotations within the VSCode extension.
6. Test the system with simulated concurrent edits and multi-file navigation, documenting challenges and solutions.

**Ships as:** A VSCode extension repository with multi-file persistent annotations, conflict resolution, and collaboration support documented in the README.

**Stretch goal:** Integrate live LLM-powered annotation generation and automated code repair suggestions leveraging multi-file context.
