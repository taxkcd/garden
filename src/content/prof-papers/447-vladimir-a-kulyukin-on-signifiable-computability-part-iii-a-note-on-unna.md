---
title: "447 · On Signifiable Computability: Part III: A Note on Unnameable Functions on Natural Numbers — Vladimir A. Kulyukin"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vladimir-a-kulyukin"
source_hash: "5870ced8104423f4e6fbae7cab08651999a9176855d64d5d3ca5dfb76edf9402"
sequence: 447
generator: "outreach-garden: managed"
---

# 447 · On Signifiable Computability: Part III: A Note on Unnameable Functions on Natural Numbers

## At a glance

- **Professor:** Vladimir A. Kulyukin
- **Institution:** Utah State University
- **Paper:** [On Signifiable Computability: Part III: A Note on Unnameable Functions on Natural Numbers](https://mdpi-res.com/d_attachment/computers/computers-15-00146/article_deploy/computers-15-00146-v2.pdf?version=1772616187)
- **Authors:** Vladimir A. Kulyukin
- **Year:** 2026

## Paper overview

This paper investigates the concept of nameability of functions on natural numbers by finite writing systems. It shows that while some functions can be named and computed by finite texts (programs), there exist many functions that cannot be named by any finite writing system, termed unnameable functions. This reveals a hierarchy among computable, partially computable, nameable, and all functions, highlighting fundamental limits of formal reasoning and computability grounded in finite written representations.

### Why it matters

**Research problem:** The paper addresses the problem of characterizing which functions on natural numbers can be named (represented uniquely) by finite writing systems and establishes the existence of functions that are unnameable by any such system.

**Why it matters:** Understanding the limits of nameability is crucial because naming functions via finite texts underpins formal reasoning, program construction, and computability theory. It clarifies foundational boundaries beyond classical computability and Gödelian incompleteness, impacting how we understand formal systems, semantics, and the nature of computation.

**Key contributions:**

- Formal definition of writing systems as spatiotemporally finite rule-governed mechanisms generating texts on alphabets.
- Proof of existence of functions on natural numbers that are unnameable by any writing system.
- Establishment of a computability-theoretic hierarchy: computable ⊊ partially computable ⊊ nameable ⊊ all functions.
- Clarification of the distinction between uncomputable and unnameable functions and their implications for formal reasoning.
- Discussion of the limits of externalization of truth and provability in relation to nameability.

## About the professor

**Vladimir A. Kulyukin** — Professor, School of Computing, Utah State University.

Research interests: Artificial Intelligence

### Research links

- [Faculty/profile page](https://engineering.usu.edu/directory/soc/faculty/kulyukin-vladimir)
- [Identity evidence](https://cs.usu.edu/people/faculty/kulyukin-vladimir)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computability Theory
**The paper assumes:** computability theory, recursive function theory, Gödel numbering, cardinality of function sets
**Already in this field?** Skip this entirely if you already have a solid understanding of computability theory including Turing machines, recursive functions, and Gödel numbering.

This background focuses on computability theory, which is essential for understanding the paper's core concepts such as computable and unnameable functions, Gödel numbering, and cardinality arguments. The rigorous course option offers a deep, structured university-level introduction to computability and related foundational topics, while the fast track provides a concise, intuition-driven overview suitable for quickly grasping the main ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.404J Theory of Computation, Fall 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP60_JNv2MmK3wkOt9syvfQWY) — MIT OpenCourseWare · 25 videos

**Watch only this:** Lectures 1-10, covering foundational definitions, computability, Turing machines, and undecidability results, about 10 hours — this subset covers the core theory needed to understand the paper's formal framework and cardinality arguments.

*Why it unblocks this paper:* MIT's '18.404J Theory of Computation' is a rigorous, university-level course directly covering computability theory, formal languages, and foundational results like undecidability and Gödel's theorems, which underpin the paper's arguments about nameability and unnameability of functions.

*If you want all of it:* Approximately 25 lectures, totaling about 20-25 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [computability theory](https://www.youtube.com/playlist?list=PL0wXpxSD7pqX33nknSJxI8A9fzEd0jEnR) — GCET Elearning · 8 videos · 1.9h across 8 episodes

**Watch only this:** Episodes 1-4, about 1 hour — these cover decidability, universal Turing machines, and the halting problem, giving a fast yet solid foundation for the paper's main results.

*Why it unblocks this paper:* The 'computability theory' playlist by GCET Elearning provides clear, concise explainers on key topics such as decidability, the halting problem, and undecidability, which are crucial for quickly grasping the main computability concepts relevant to the paper.

*If you want all of it:* All 8 episodes, about 1.9 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on unnameable functions and the limits of finite writing systems, begin with foundational concepts in cardinality and countability to grasp the core proof technique. Next, study computability theory hierarchy and Gödel numbering as they provide the theoretical framework and technical tools used in the paper. Then, explore formal models of writing systems to understand the paper's formalization of nameability. Finally, engage with the author's own talk or closely related advanced lectures to directly connect these foundations to the paper's novel contributions.

### Cardinality and countability in computation *(prerequisite)*
Cardinality and countability form the mathematical backbone for the paper's argument that the set of all functions on natural numbers is uncountable, while the set of nameable functions is countable. Understanding these concepts is essential to appreciate the existence proof of unnameable functions.

*How the paper uses it:* The paper's key results rely on cardinality arguments to prove the existence of unnameable functions.

▶ [Lecture 2: Cantor's Theory of Cardinality (Size)](https://www.youtube.com/watch?v=9_xG0AGRa-w) — MIT OpenCourseWare · 1:25:07 · 4 years ago

### Computability theory hierarchy *(prerequisite)*
The paper situates nameability within the hierarchy of computable and partially computable functions. Learning about partial recursive functions and undecidability provides the necessary context to understand how nameability extends beyond classical computability.

*How the paper uses it:* The paper establishes a hierarchy: computable ⊊ partially computable ⊊ nameable ⊊ all functions.

▶ [Partial Recursive Functions 5: Minimisation](https://www.youtube.com/watch?v=bFkU-qV2Ioo) — Hackers at Cambridge · 18:29 · 8 years ago

### Gödel numbering and pairing functions *(prerequisite)*
Gödel numbering and pairing functions are key encoding techniques used in the paper to formalize writing systems and their generated texts. A solid grasp of these concepts clarifies how functions and texts are represented finitely within formal systems.

*How the paper uses it:* The paper uses Gödel numbering and pairing functions to encode functions and texts in writing systems.

▶ [Lecture 2 (Part 1): Gödel numbering, Universal Turing Machines](https://www.youtube.com/watch?v=HgmJIVjeAt0) — ArtificialLifeEPFL · 42:55 · 5 months ago

### Writing systems and nameability *(prerequisite)*
Understanding formal models of writing systems is crucial to grasp the paper's formal definition of nameability as spatiotemporally finite rule-governed text generation. This section bridges abstract computability with the paper's novel structural approach.

*How the paper uses it:* The paper formalizes writing systems as finite mechanisms generating texts, foundational to defining nameability.

▶ [1. Introduction, Finite Automata, Regular Expressions](https://www.youtube.com/watch?v=9syvZr-9xwk) — MIT OpenCourseWare · 1:00:34 · 4 years ago

### Author's talk on unnameable functions *(the paper's own talk)*
The author's own talk provides direct insight into the motivations, technical details, and implications of the paper's results on unnameable functions. This is the most precise and authoritative resource to understand the paper's contributions in context.

*How the paper uses it:* This talk is by the paper's author and focuses specifically on the paper's main results and motivations.

▶ [0.0 The Natural Numbers | IUM](https://www.youtube.com/watch?v=03BcxTLhBIU) — Oxford Mathematics Plus · 10:42 · 10 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper on unnameable functions, starting with the basics of cardinality and countability to grasp why some functions cannot be named. Then it covers computability theory hierarchy to position nameability among computable functions, followed by Gödel numbering and pairing functions as technical tools for encoding. Finally, it explains the formal notion of writing systems and nameability, culminating in the paper's core concept of unnameable functions on natural numbers.

### Cardinality and countability in computation *(prerequisite)*
Learn what it means for sets to be countable or uncountable, and how these concepts help us understand the size of infinite sets. This is crucial for appreciating why the set of all functions on natural numbers is uncountable, while nameable functions are countable.

*How the paper uses it:* The paper uses cardinality arguments to prove the existence of unnameable functions by showing the countability of nameable functions versus the uncountability of all functions.

▶ [Lecture 2: Cantor's Theory of Cardinality (Size)](https://www.youtube.com/watch?v=9_xG0AGRa-w) — MIT OpenCourseWare · 1:25:07 · 4 years ago

### Computability theory hierarchy *(prerequisite)*
Understand the hierarchy of functions: computable, partially computable, and beyond. This helps situate the concept of nameability within classical computability theory and clarifies the structural boundaries the paper discusses.

*How the paper uses it:* The paper establishes a hierarchy where computable functions are strictly contained in partially computable, which are strictly contained in nameable functions, which in turn are strictly contained in all functions.

▶ [Partial Recursive Functions 1: What's a function?](https://www.youtube.com/watch?v=yaDQrOUK-KY) — Hackers at Cambridge · 6:14 · 8 years ago

### Gödel numbering and pairing functions *(prerequisite)*
Learn how Gödel numbering encodes mathematical objects as natural numbers, and how pairing functions combine numbers into single numbers. These tools are essential for formalizing writing systems and encoding functions as texts.

*How the paper uses it:* The paper uses Gödel numbering and pairing functions to encode functions and texts within writing systems, enabling cardinality arguments about nameability.

▶ [What is a Gödel Number? (Arithmatization)](https://www.youtube.com/watch?v=F8KGidsuxgY) — Carneades.org · 15:04 · 10 years ago

### Writing systems and nameability
Explore what formal writing systems are—finite sets of rules generating texts—and how they define the notion of nameability of functions. This concept is key to understanding how functions can be represented by finite texts or programs.

*How the paper uses it:* The paper formalizes writing systems as finite rule-governed mechanisms generating texts, which in turn name functions, forming the basis for defining nameability.

▶ [1. Introduction, Finite Automata, Regular Expressions](https://www.youtube.com/watch?v=9syvZr-9xwk) — MIT OpenCourseWare · 1:00:34 · 4 years ago

### Author's talk on unnameable functions *(the paper's own talk)*
Gain direct insight from the author on the motivations, main results, and implications of the paper regarding unnameable functions. This talk ties together the foundational concepts and highlights the significance of the findings.

*How the paper uses it:* This video provides the author's perspective on the existence and nature of unnameable functions and their impact on formal reasoning and computability.

▶ [0.0 The Natural Numbers | IUM](https://www.youtube.com/watch?v=03BcxTLhBIU) — Oxford Mathematics Plus · 10:42 · 10 months ago

## Already in your library

- [Lec-26: Knowledge Representation and Reasoning | Logic ...](https://www.youtube.com/watch?v=9iN3O_oL2ac) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)
- [Hierarchical Cluster Analysis [Simply explained]](https://www.youtube.com/watch?v=8QCBl-xdeZI) — also for: From Overload to Insight: Scaffolding Creative Ideation through Structuring Inspiration (Aniket Kittur)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from a foundational demonstration of the paper's core cardinality argument to an applied reimplementation of its formal writing system concept, culminating in an advanced exploration of the paper's proposed future direction on approximation theory constrained by nameability. Each project leverages your existing software engineering and AI skills while deepening your understanding of the theoretical limits of finite writing systems and unnameable functions.

### Beginner — Cardinality Visualization of Nameable vs All Functions
*Effort: a weekend, ~8 hours*

You build a small interactive web app that visualizes the cardinality difference between the set of all functions on natural numbers and the set of nameable functions by finite writing systems. The app uses simple combinatorial calculations and diagrams to illustrate countability vs uncountability, helping concretize the paper's key cardinality argument.

**Why it shows you understood the paper:** This project shows you grasp the fundamental set-theoretic basis of the paper's proof that unnameable functions exist, by concretely representing countable vs uncountable sets and the hierarchy of nameability.

**Grounded in:** Key result: "The set of all functions on natural numbers is uncountable (cardinality 2^ℵ0). Therefore, there exist functions that no writing system can name (unnameable functions)."

**Tech stack:** TypeScript, React, D3.js

**Data:** No external data needed; uses combinatorial calculations and set cardinality concepts from the paper.

**Build it:**

1. Implement a React app with a simple UI explaining countable vs uncountable sets.
2. Create visualizations showing finite texts and countable sets (e.g., natural numbers, programs).
3. Visualize the uncountable set of all functions on natural numbers using a Cantor diagonalization illustration.
4. Add interactive elements to toggle between sets and highlight the hierarchy: computable ⊊ partially computable ⊊ nameable ⊊ all functions.
5. Write a README explaining how the visualization relates to the paper's cardinality argument.

**Ships as:** An interactive web visualization with explanatory text demonstrating the cardinality difference and the existence of unnameable functions.

**Stretch goal:** Add a small module that simulates Gödel numbering and shows how finite texts encode computable functions.

### Intermediate — Reimplementation of Writing Systems and Nameability Checker
*Effort: 2 weekends, ~20 hours*

You implement a simplified formal model of a writing system as defined in the paper, including finite alphabets, text formation rules, and rule application mechanisms. Then you build a tool that enumerates nameable functions by generating finite texts and associating them with functions on natural numbers. You compare the count of generated nameable functions against a baseline of computable functions enumerated by a simple Turing machine simulator.

**Why it shows you understood the paper:** This project demonstrates your ability to operationalize the paper's formal definition of writing systems and nameability, reproducing the countability argument through enumeration and comparison with computable functions.

**Grounded in:** Key contribution: "Formal definition of writing systems as spatiotemporally finite rule-governed mechanisms generating texts on alphabets." Key result: "Each writing system can name at most countably many functions on natural numbers."

**Tech stack:** Python 3.11, Jupyter Notebook, TypeScript (optional for UI)

**Data:** No external dataset; you simulate finite alphabets and text generation rules as per the paper's formalism.

**Build it:**

1. Implement a Python module modeling a finite alphabet and text formation rules as per the paper's writing system definition.
2. Create a generator that enumerates finite texts produced by the writing system.
3. Define a mapping from texts to functions on natural numbers (e.g., via Gödel numbering or pairing functions).
4. Implement a simple Turing machine simulator to enumerate computable functions as a baseline.
5. Compare the count and properties of nameable functions vs computable functions and document findings.
6. Write a detailed README explaining the formalism, implementation, and how it reflects the paper's hierarchy.

**Ships as:** A Jupyter Notebook and/or Python package that models writing systems, enumerates nameable functions, and compares them to computable functions with explanatory documentation.

**Stretch goal:** Add a visualization component (e.g., with matplotlib or React) to show the enumeration process and hierarchy.

### Advanced — Exploring Signifiable Korovkin-type Approximation Theorems
*Effort: 3-4 weeks*

You develop a research prototype exploring the paper's proposed future direction of signifiable (nameable) functions in approximation theory. Specifically, you investigate how classical Korovkin-type theorems behave when restricted to functions that can be named by finite writing systems. This involves formalizing a notion of signifiable functions in a computational setting, implementing approximation operators, and empirically testing approximation quality on a subset of nameable functions.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's future directions by extending its foundational theory into a concrete mathematical domain, bridging computability, nameability, and approximation theory, which could spark meaningful academic discussion.

**Grounded in:** Future direction: "Explore a notion of signifiable Korovkin-type theorems in approximation theory constrained by finite nameability."

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, SciPy, Matplotlib

**Data:** Synthetic data generated from nameable functions on natural numbers as per your writing system model; no external dataset.

**Build it:**

1. Review classical Korovkin-type approximation theorems and identify key operators and test functions.
2. Define a computational model of signifiable (nameable) functions based on your writing system implementation.
3. Implement approximation operators constrained to act on signifiable functions only.
4. Generate synthetic datasets of nameable functions and test approximation quality and convergence.
5. Analyze and document how restricting to signifiable functions affects approximation properties.
6. Write a comprehensive report linking your findings back to the paper's theoretical framework and implications for computability and formal reasoning.

**Ships as:** A research prototype with code, experiments, and a detailed report exploring signifiable approximation theory, demonstrating an original extension of the paper's theory.

**Stretch goal:** Explore implications for automated program synthesis or neural code generation constrained by finite nameability.
