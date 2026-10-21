---
title: "906 · A Diagrammatic Axiomatisation of Behavioural Distance of Nondeterministic Processes — Alexandra Silva"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alexandra-silva"
source_hash: "9146d9949ab73262add438bf56644c7717e9331c6410c3f00f34b8bbf7a7134a"
sequence: 906
generator: "outreach-garden: managed"
---

# 906 · A Diagrammatic Axiomatisation of Behavioural Distance of Nondeterministic Processes

## At a glance

- **Professor:** Alexandra Silva
- **Institution:** Cornell University
- **Paper:** [A Diagrammatic Axiomatisation of Behavioural Distance of Nondeterministic Processes](https://arxiv.org/pdf/2604.27268)
- **Authors:** Wojciech Różowski, Robin Piedeleu, Alexandra Silva, Fabio Zanasi
- **Year:** 2026

## Paper overview

This paper develops a rigorous mathematical framework to measure how different two nondeterministic computational processes are, using a graphical language called string diagrams. It provides a complete set of rules to reason about these distances, enabling precise quantitative comparisons of system behaviors beyond simple equivalence.

### Why it matters

**Research problem:** Traditional equivalence notions for computational processes are Boolean and do not capture how 'far apart' two processes are in behavior. While behavioural distances have been studied for probabilistic systems, axiomatisations for nondeterministic processes, especially using Milner's charts, remain unexplored. The problem is to develop a sound and complete axiomatic system to reason quantitatively about behavioural distances of nondeterministic processes.

**Why it matters:** Measuring behavioural distance allows for a nuanced quantitative comparison of system states, which is crucial for analyzing systems with nondeterminism and for advancing quantitative analysis of more expressive models like weighted transition systems. A complete axiomatic theory facilitates formal reasoning, automation, and implementation in verification and synthesis tools.

**Key contributions:**

- A sound and complete axiomatization of behavioural distance for nondeterministic processes modeled as Milner’s charts.
- Use of string diagrams as a rigorous, compositional syntax supporting inductive reasoning and quantitative equational reasoning.
- Instantiation of the abstract coalgebraic behavioural distance framework to charts, organizing behaviours as a symmetric monoidal category with Conway theory structure.
- Concrete characterization of behavioural distance via Hennessy and Milner’s stratification of bisimilarity.
- Development of a quantitative inference system with rules capturing metric properties and domain-specific operations like prefixing and nondeterministic choice.

## About the professor

**Alexandra Silva** — Professor, Computer Science Department, Cornell University.

Research interests: modular development of specification languages and algorithms for models of computations, coalgebra

### Research links

- [Faculty/profile page](https://alexandrasilva.org/#/main.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Category Theory for Computer Science
**The paper assumes:** category theory, traced monoidal categories, coalgebraic semantics, string diagrams, pseudometric spaces
**Already in this field?** Skip this entirely if you already have a solid understanding of category theory applied to computer science, including monoidal categories and coalgebra.

This background focuses on category theory concepts essential for understanding the categorical and coalgebraic structures used in the paper, such as traced monoidal categories, Conway theories, and string diagrams. The rigorous course option provides a deep, structured university-level introduction to category theory, ideal for building a solid foundation. The fast track offers a concise, intuition-driven series of short videos that cover key category theory concepts quickly for those with limited time or seeking a conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Category Theory](https://www.youtube.com/playlist?list=PLFW6lRTa1g83ixd-w8We4zreVrSVTGvj2) — IIT KANPUR-NPTEL · 24 videos · 33.3h across 24 episodes

**Watch only this:** Lectures 1 through 17, about 23.5 hours — covering introduction, functors, natural transformations, equivalences, Yoneda lemma, limits and colimits, adjunctions, monads, and monoidal categories, which are essential to understand the paper's categorical framework and string diagrams.

*Why it unblocks this paper:* This IIT Kanpur NPTEL course is a comprehensive university-level lecture series on category theory, covering foundational topics such as functors, natural transformations, monoidal categories, and adjunctions, which are directly relevant to the categorical semantics and constructions in the paper.

*If you want all of it:* 33.3 hours across all 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Category Theory](https://www.youtube.com/playlist?list=PL3JI_Wj02ehWvur5K_xkUPhLC2z_4O84b) — Sheafification of G · 14 videos · 4.3h across 14 episodes

**Watch only this:** Episodes 1 through 10, about 3 hours — covering monads, comonads, limits, colimits, algebraic structures, and the Yoneda lemma, which give a solid intuition for the categorical structures and reasoning employed in the paper.

*Why it unblocks this paper:* This playlist by Sheafification of G offers a concise and clear introduction to key category theory concepts, including monads, comonads, limits, colimits, adjoints, and the Yoneda lemma, providing an accessible conceptual overview suitable for quickly grasping the categorical ideas used in the paper.

*If you want all of it:* 4.3 hours across all 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Diagrammatic Axiomatisation of Behavioural Distance of Nondeterministic Processes," start by building a strong foundation in the prerequisite mathematical structures and theories it relies on, including string diagrams in category theory, traced monoidal categories, coalgebraic behavioural metrics, and bisimulation stratification. After grasping these foundational concepts, focus on the core method of behavioural distance axiomatization, culminating in the authors' own talk presenting their new framework and results.

### String diagrams in category theory *(prerequisite)*
String diagrams provide the fundamental variable-free, compositional graphical syntax used in the paper to represent nondeterministic processes and reason about their behaviours. Understanding the algebraic and categorical semantics of string diagrams is essential to follow the paper's approach to axiomatization and diagrammatic reasoning.

*How the paper uses it:* The paper adopts string diagrams as the core syntax mirroring the graphical structure of Milner’s charts for compositional reasoning.

▶ [Pawel Sobocinski: "Algebraic theories with string diagrams"](https://www.youtube.com/watch?v=rt0a84vzYrc) — Topos Institute · 1:07:31 · Streamed 5y ago

### Traced monoidal categories *(prerequisite)*
Traced monoidal categories provide the semantic universe for the regular behaviours studied in the paper, supporting feedback and recursion structures crucial for modelling process behaviours. A solid grasp of their definitions and properties is necessary to understand the categorical constructions and functorial embeddings used.

*How the paper uses it:* The paper constructs a traced monoidal category RegBeh enriched with a pseudometric structure to model regular behaviours of charts.

▶ [Chris Heunen: "Sheaf representation of monoidal categories"](https://www.youtube.com/watch?v=XHCa8vk_T00) — Topos Institute · 59:25 · Streamed 5y ago

### Coalgebraic behavioural metrics *(prerequisite)*
Coalgebraic behavioural metrics generalize classical behavioural equivalences to quantitative distances, forming the abstract framework instantiated by the paper to define behavioural distances on nondeterministic processes. Understanding this coalgebraic perspective is key to appreciating the soundness and completeness results.

*How the paper uses it:* The paper instantiates the abstract coalgebraic behavioural distance framework to Milner’s charts to define and axiomatize behavioural distances.

▶ [Barbara König: "Behavioural Metrics via Functor Lifting – A Coalgebraic Approach"](https://www.youtube.com/watch?v=VyiJn1nAANk) — Topos Institute · 1:00:06 · Streamed 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's approach to measuring behavioural distance in nondeterministic processes, start by learning the foundational syntax of string diagrams used for compositional reasoning. Then, build up to the mathematical structure of traced monoidal categories that underpin the semantic universe of behaviours. Next, grasp the coalgebraic behavioural metrics framework that generalizes behavioural equivalences to quantitative distances. Finally, study the specific axiomatization of behavioural distance and bisimulation stratification as applied in the paper.

### String diagrams in category theory *(prerequisite)*
String diagrams provide a visual and compositional syntax to represent processes and their interactions without relying on variables. They help build intuition by showing how components connect and compose, which is essential for reasoning about complex systems graphically.

*How the paper uses it:* The paper uses string diagrams as a rigorous, compositional syntax mirroring the graphical structure of Milner’s charts for nondeterministic processes.

▶ [What are…string diagrams?](https://www.youtube.com/watch?v=2qePKU3hHO0) — VisualMath · 12:05 · 4y ago

### Traced monoidal categories *(prerequisite)*
Traced monoidal categories are mathematical structures that formalize feedback loops and compositionality in processes. Understanding them is key to grasping how the paper models regular behaviours and supports operations like looping and recursion in a categorical setting.

*How the paper uses it:* The semantic universe of regular behaviours in the paper is constructed as a traced monoidal category enriched with a pseudometric structure.

▶ [What are…monoidal categories?](https://www.youtube.com/watch?v=r6_fq-heqfU) — VisualMath · 14:47 · 4y ago

### Coalgebraic behavioural metrics *(prerequisite)*
Coalgebraic behavioural metrics generalize classical notions of behavioural equivalence to quantitative distances between system states. This framework allows measuring 'how different' two processes are, rather than just whether they are equivalent or not.

*How the paper uses it:* The paper instantiates the abstract coalgebraic behavioural distance framework to nondeterministic processes modeled as Milner’s charts.

▶ [Barbara König: "Behavioural Metrics via Functor Lifting – A Coalgebraic Approach"](https://www.youtube.com/watch?v=VyiJn1nAANk) — Topos Institute · 1:00:06 · Streamed 1y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core contributions on behavioural distances of nondeterministic processes using string diagrams. The beginner project focuses on visualizing and computing behavioural distance for simple finite charts, the intermediate project implements the paper's quantitative inference system to compute distances and verify axioms on small examples, and the advanced project extends the framework toward infinite-state or weighted transition systems, addressing one of the paper's stated limitations.

### Beginner — Visualizing Behavioural Distance on Finite Charts
*Effort: a weekend, ~8 hours*

You build a small web app or script that lets you define two simple finite nondeterministic processes as Milner's charts (modeled as labeled transition graphs) and computes their behavioural distance according to the paper's characterization via bisimilarity stratification. You also visualize the two charts and highlight the largest depth at which they agree in bisimilarity.

**Why it shows you understood the paper:** This project shows you grasp the key concept of behavioural distance as a pseudometric derived from bisimilarity stratification and can concretely apply the paper's Theorem 8 to compute distances on finite examples.

**Grounded in:** Theorem 8: behavioural distance corresponds to the largest depth at which two charts agree in bisimilarity stratification.

**Tech stack:** JavaScript, React (optional), D3.js or SVG for visualization, Node.js for scripting

**Data:** You create small synthetic finite charts (graphs) as input, representing nondeterministic processes, based on examples from the paper's figures.

**Build it:**

1. Implement a data structure to represent finite charts as labeled transition graphs.
2. Implement bisimilarity stratification up to a finite depth to compare two states.
3. Compute behavioural distance as 2^-n where n is the largest depth with bisimilarity agreement.
4. Build a simple visualization to display the two charts side-by-side with highlighted bisimilar states.
5. Add UI controls to input or select example charts and display the computed distance.

**Ships as:** A GitHub repository with code and README demonstrating behavioural distance computation and visualization on example finite charts.

**Stretch goal:** Add interactive step-through of the bisimilarity stratification process to illustrate how the distance is derived.

### Intermediate — Implementing the Quantitative Inference System for Behavioural Distance
*Effort: 1-3 weekends, ~20 hours*

You implement the paper's quantitative inference system with its axioms and rules (reflexivity, symmetry, triangle inequality, prefixing contraction, nondeterministic choice) as a symbolic reasoning engine. You apply it to derive distance bounds on example finite charts, reproducing the example derivation bounding distance at 1/4 from the paper.

**Why it shows you understood the paper:** This project demonstrates you can translate the paper's abstract axiomatic system into a concrete algorithmic form and use it to reason quantitatively about behavioural distances, verifying soundness on examples.

**Grounded in:** Example 17: derivation bounding the distance between two specific charts at 1/4 using the inference rules; quantitative inference system rules in Fig. 3.

**Tech stack:** TypeScript or Python, Node.js or Python environment, Optional: a symbolic manipulation library or custom rule engine

**Data:** You use the same synthetic finite charts from the beginner project, focusing on the example charts from the paper's Figure 1 and Example 17.

**Build it:**

1. Encode the quantitative inference rules as functions or rewrite rules in your chosen language.
2. Implement a representation for string diagrams or charts to which rules apply.
3. Create a procedure to apply inference rules to derive upper bounds on behavioural distances.
4. Reproduce the example derivation bounding distance at 1/4 between two charts from the paper.
5. Validate that the inference system respects metric properties and domain-specific operations.

**Ships as:** A repository with code implementing the inference system, a README explaining the rules, and a demonstration of the example derivation from the paper.

**Stretch goal:** Extend the inference system to handle user-defined contraction factors other than 1/2 for prefixing.

### Advanced — Extending Behavioural Distance Axiomatization to Weighted Transition Systems
*Effort: a few weeks, ~40+ hours*

You develop a prototype extension of the paper's axiomatic framework to weighted transition systems, addressing one of the paper's stated future directions. This involves defining a suitable behavioural distance metric for weighted systems, adapting the inference rules, and implementing a tool to compute or approximate distances on small weighted examples.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future work, applying its categorical and coalgebraic methods to a more expressive model class, demonstrating research-level initiative.

**Grounded in:** Future direction: extension of the axiomatic framework to weighted transition systems and other more expressive models.

**Tech stack:** Python or TypeScript, Mathematical libraries (e.g., NumPy for Python), Optional: symbolic computation or theorem proving tools

**Data:** You create synthetic weighted transition systems with finite states and weighted edges to serve as test cases.

**Build it:**

1. Study the paper's axiomatic system and understand how it applies to nondeterministic charts.
2. Research weighted transition systems and existing behavioural metrics for them.
3. Define an extension of the behavioural distance metric to weighted transitions, inspired by the paper's pseudometric approach.
4. Adapt or extend the quantitative inference rules to handle weights and weighted choice.
5. Implement a prototype tool to compute or approximate behavioural distances on weighted examples.
6. Test the tool on small weighted transition systems and analyze results.

**Ships as:** A GitHub repository with code, documentation of the extended axiomatic framework, and example computations on weighted transition systems.

**Stretch goal:** Investigate soundness and completeness properties of your extended inference system experimentally or theoretically.
