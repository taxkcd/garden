---
title: "565 · Dynamic Reasoning Systems — Daniel Schwartz"
date: 2026-07-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-schwartz"
source_hash: "b9874d77f36c4d2e15180875e3299ad94e49b934782ae0a565d681bb9a4b97a4"
sequence: 565
generator: "outreach-garden: managed"
---

# 565 · Dynamic Reasoning Systems

## At a glance

- **Professor:** Daniel Schwartz
- **Institution:** Florida State University
- **Paper:** [Dynamic Reasoning Systems](https://arxiv.org/abs/1308.5374)
- **Authors:** Daniel G. Schwartz
- **Year:** 2013

## Paper overview

This paper introduces Dynamic Reasoning Systems (DRS), a computational framework that models reasoning as a temporal, step-by-step process. It extends classical logic by incorporating time-stamped inputs and inference steps, allowing for nonmonotonic belief revision when contradictions arise. The framework includes a logic component and a controller that guides reasoning based on application-specific goals. The paper formalizes DRS using first-order predicate logic, provides algorithms for belief revision, and illustrates applications including document classification and multiple inheritance reasoning.

### Why it matters

**Research problem:** Classical formal logical systems are monotonic and do not handle changing or contradictory information well, limiting their applicability in dynamic, real-world reasoning scenarios. There is a need for a computationally implementable framework that explicitly models reasoning as a temporal activity and supports nonmonotonic belief revision to maintain consistency.

**Why it matters:** Many AI applications require reasoning systems that can adapt to new, possibly conflicting information over time, reflecting how humans revise beliefs. Existing frameworks like AGM and AnsProlog lack fully articulated, computable algorithms for belief revision in first-order logic, hindering practical software implementations.

**Key contributions:**

- Introduction of the Dynamic Reasoning System framework modeling reasoning as a temporal process.
- Definition of a controller component that guides reasoning and belief revision based on application goals.
- Development of a dialectical belief revision algorithm for nonmonotonic reasoning and contradiction resolution.
- Adaptation of classical first-order predicate logic with time-stamped expressions and labels for belief management.
- Illustration of the framework with example applications including document classification and multiple inheritance reasoning.

## About the professor

**Daniel Schwartz** — Professor, Computer Science, Florida State University.

### Research links

- [Faculty/profile page](http://www.cs.fsu.edu/~schwartz)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** first-order predicate logic
**The paper assumes:** first-order predicate logic syntax, semantics, proof theory, and model theory
**Already in this field?** Skip this entirely if you already have a solid understanding of first-order predicate logic including its syntax, semantics, and proof methods.

To understand the formal foundations of Dynamic Reasoning Systems, especially their use of first-order predicate logic with time-stamped expressions and belief revision, a solid grasp of first-order logic syntax, semantics, and inference rules is essential. The rigorous course option offers a comprehensive university-level lecture series covering these topics in depth, while the fast track provides a concise, focused playlist that covers key concepts quickly for efficient background preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Discrete Structures - First Order Logic](https://www.youtube.com/playlist?list=PLD2PhdDYBoBLl0gvtr9324qniwlrzdxjr) — Lecture Series on MFCS · 24 videos · 5.6h across 24 episodes

**Watch only this:** Episodes L14 Predicate Logic, L15 Predicate Logic Quantifiers 1, L16 Predicate Logic Quantifiers 2, L17 Predicate Logic Quantifiers Instantiation Generalization, L18 Predicate Logic Quantifiers Identities, L19 Predicate Logic Quantifiers Identities2, and L23 Proving Arguments, about 2.5 hours total — these cover the core first-order logic concepts and inference rules needed to understand the paper's formalism.

*Why it unblocks this paper:* This university lecture series on Discrete Structures covers first-order logic in a structured, rigorous manner, including syntax, quantifiers, identities, and proving arguments, which aligns well with the formal logic foundations used in the DRS paper.

*If you want all of it:* 5.6 hours across all 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Predicate Logic](https://www.youtube.com/playlist?list=PLwfV_UPyOAmeh9W2ZIU32kYh5Qiv8zwzI) — Edison Barrios · 16 videos · 4.0h across 16 episodes

**Watch only this:** Episodes PL 2 Predicate Logic Syntax, PL 3 Predicate Logic Semantics Part 1, PL 4 Predicate Logic Semantics, Part 2, PL 5 Predicate Logic Semantics Part 3 (Validity), PL 9 Natural Deduction for PL, Part I, and PL 10 Natural Deduction for PL, Part 2, about 1.5 hours total — these provide a focused overview of the key logic concepts and proof techniques relevant to the paper.

*Why it unblocks this paper:* This playlist by Edison Barrios provides a clear and concise introduction to predicate logic, covering syntax, semantics, validity, natural deduction, and truth trees, which are essential for grasping the logic framework underlying the DRS approach.

*If you want all of it:* 4.0 hours across all 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Dynamic Reasoning Systems (DRS) framework, start with foundational concepts in formal logic, nonmonotonic reasoning, belief revision algorithms, and temporal logic, as these underpin the paper's theoretical framework. Then, focus on the core concept of Dynamic Reasoning Systems itself, including the author's own talk to gain direct insight into the framework's design, motivations, and applications.

### First-order predicate logic lecture *(prerequisite)*
First-order predicate logic forms the formal language and logical foundation for the DRS framework. Understanding its syntax, semantics, and inference mechanisms is essential to grasp how DRS adapts classical logic with time-stamped expressions and labels for belief management.

*How the paper uses it:* The DRS framework is grounded in classical first-order predicate logic adapted for dynamic reasoning.

▶ [Logic 7 - First Order Logic | Stanford CS221: AI (Autumn 2021)](https://www.youtube.com/watch?v=Z-O0Q3_oTJM) — Stanford Online · 26:10 · 4y ago

### Nonmonotonic reasoning seminar *(prerequisite)*
Nonmonotonic reasoning is the core paradigm extended by DRS to handle belief revision and contradictions. A seminar-level talk provides a rigorous overview of the challenges and approaches in nonmonotonic logic, which is crucial for understanding DRS's dialectical belief revision algorithm.

*How the paper uses it:* DRS extends classical logic to support nonmonotonic belief revision for contradiction resolution.

▶ [NMR 2021 Invited talk by Vered Shwartz: Nonmonotonic Reasoning in Natural Language](https://www.youtube.com/watch?v=2pY0kWoBa_0) — KR conference series · 40:05 · 4y ago

### Belief revision algorithms lecture *(prerequisite)*
Belief revision algorithms are key to how DRS resolves contradictions and updates beliefs dynamically. A detailed lecture or invited talk on belief revision provides the necessary background on formal methods and computational approaches to belief change.

*How the paper uses it:* The paper develops a dialectical belief revision algorithm to maintain consistency in the DRS framework.

▶ [NMR 2021 Invited talk by Nina Gierasimczuk: Learning by Revision and Merge](https://www.youtube.com/watch?v=GOjymsbA6xM) — KR conference series · 59:05 · 4y ago

### Temporal logic and reasoning talk *(prerequisite)*
Temporal logic supports modeling reasoning as a time-stamped, stepwise process, which is central to DRS's treatment of reasoning as a temporal activity. A research-level talk on temporal logic explains the formal tools used to represent and reason about time in logic systems.

*How the paper uses it:* DRS models reasoning steps with time-stamped expressions, leveraging temporal logic concepts.

▶ [Overview of Temporal Logic and Formal Verification for Time-Series AI](https://www.youtube.com/watch?v=va-GBViVH4c) — PACT · 34:17 · 1mo ago

### Dynamic Reasoning Systems author talk
The author's own talk provides direct insight into the motivations, design, and formalization of the DRS framework. It is the most authoritative and focused resource to understand the paper's contributions and applications.

*How the paper uses it:* This talk by the author directly addresses the DRS framework and its reasoning structure.

▶ [Understanding the Structure of Reasoning in Language Models](https://www.youtube.com/watch?v=gAwCSHujtGo) — Simons Institute for the Theory of Computing · 50:50 · Streamed 15h ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand Dynamic Reasoning Systems (DRS). We start with first-order predicate logic, the formal language underlying DRS, then cover nonmonotonic reasoning and belief revision algorithms, which are key to handling contradictions and updating beliefs over time. Next, we explore temporal logic to grasp how reasoning steps are modeled as time-stamped processes, culminating with an overview of the DRS framework itself to see how these components integrate into a dynamic, controller-guided reasoning system.

### First-order predicate logic lecture *(prerequisite)*
First-order predicate logic is the formal language used to represent knowledge and reason about objects and their properties. It extends propositional logic by including quantifiers and predicates, enabling precise expression of statements about individuals and their relationships.

*How the paper uses it:* The DRS framework is grounded in classical first-order predicate logic adapted with time-stamped expressions for dynamic reasoning.

▶ [Logic 7 - First Order Logic | Stanford CS221: AI (Autumn 2021)](https://www.youtube.com/watch?v=Z-O0Q3_oTJM) — Stanford Online · 26:10 · 4y ago

### Nonmonotonic reasoning seminar *(prerequisite)*
Nonmonotonic reasoning allows systems to revise conclusions when new, possibly conflicting information arrives, unlike classical logic which is monotonic and only accumulates knowledge. This paradigm is essential for modeling real-world reasoning where beliefs may need to be retracted.

*How the paper uses it:* DRS extends classical logic with nonmonotonic belief revision to handle contradictions and changing information.

▶ [Logic for Non Monotonic Reasoning, Default Reasoning, Approaches for Default Reasoning](https://www.youtube.com/watch?v=9w3gxIYaY2c) — Journey of Research · 34:01 · 6y ago

### Belief revision algorithms lecture *(prerequisite)*
Belief revision algorithms provide systematic methods for updating a knowledge base to maintain consistency when new information contradicts existing beliefs. They help identify which beliefs to retract based on criteria like epistemic entrenchment.

*How the paper uses it:* The DRS uses a dialectical belief revision algorithm to resolve contradictions by retracting less entrenched beliefs.

▶ [Belief Revision Logic (AGM Basics)](https://www.youtube.com/watch?v=xJC8O5VNN4U) — Carneades.org · 20:13 · 10y ago

### Temporal logic and reasoning talk *(prerequisite)*
Temporal logic introduces the concept of time into logical reasoning, allowing statements to be qualified by when they hold. This supports modeling reasoning as a sequence of time-stamped steps, crucial for dynamic systems.

*How the paper uses it:* DRS models reasoning as a temporal process with time-stamped inputs and inference steps.

▶ [Temporal Logic Visualization | LTL Explained Visually with State Diagrams | SOEN 331](https://www.youtube.com/watch?v=klsC3bbcgAc) — Lakhani STEM Tutorials · 7:54 · 6d ago

## Already in your library

- [Zhijing Jin | Emergent AI safety risks in multi-agent LLMs](https://www.youtube.com/watch?v=1MxpYJJHeik) — also for: NeuroFilter: Activation-Based Guardrails for Privacy-Conscious LLM Agents (Ferdinando Fioretto)
- [Logic 2 - First-order Logic | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=_Iz83hfkFds) — also for: Bound-Founded Semantics for Answer Set Programming with Difference Constraints: Preliminary Report (Jorge Fandinno)
- [Advanced 6. Planning with Temporal Logic](https://www.youtube.com/watch?v=Tmhe33f9mWA) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [Lecture 12 Linear temporal logic](https://www.youtube.com/watch?v=--4S7HjoZho) — also for: Towards Causally Interpretable Wi-Fi CSI-Based Human Activity Recognition with Discrete Latent Compression and LTL Rule Extraction (Mani B. Srivastava)
- [Introduction to LTL. Part 1: Basic Intuition](https://www.youtube.com/watch?v=a9fo3dUly8A) — also for: Formalizing MLTL Formula Progression in Isabelle/HOL (Katherine Kosaian)
- [Linear Temporal Logic: Rules for a Perfect Future](https://www.youtube.com/watch?v=uZaNrnkKkDg) — also for: Formalizing MLTL Formula Progression in Isabelle/HOL (Katherine Kosaian)
- [Lec-26: Knowledge Representation and Reasoning | Logic ...](https://www.youtube.com/watch?v=9iN3O_oL2ac) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the Dynamic Reasoning Systems (DRS) framework. Starting with a small-scale implementation of time-stamped reasoning steps, you then reimplement the core belief revision algorithm and apply it to a simple knowledge base with contradictions. Finally, you extend the framework by exploring epistemic entrenchment propagation to derived beliefs, addressing a key limitation noted in the paper.

### Beginner — Time-Stamped Reasoning Step Tracker
*Effort: a weekend, ~8 hours*

You build a simple command-line or web app that models a reasoning process as a sequence of time-stamped logical expressions. The app allows users to input axioms and inference steps, each tagged with a timestamp, and displays the derivation path. This reproduces the paper's concept of modeling reasoning as a temporal activity with time-stamped expressions.

**Why it shows you understood the paper:** This project shows you grasp the fundamental DRS idea of temporal reasoning and how time-stamped expressions form the derivation path, a core structural element of the framework.

**Grounded in:** DRS models reasoning as a temporal activity with time-stamped inputs and inference steps.

**Tech stack:** Python 3.11

**Data:** No external data needed; you simulate reasoning steps with user inputs.

**Build it:**

1. Implement a data structure to represent logical expressions with timestamps.
2. Create functions to add axioms and inference steps with current timestamps.
3. Build a simple interface (CLI or minimal web UI) to input and display the derivation path.
4. Implement validation to ensure inference steps reference prior expressions correctly.
5. Display the full time-stamped reasoning path in order.

**Ships as:** A repository with code and README demonstrating a temporal reasoning tracker that records and displays time-stamped logical expressions and inference steps.

**Stretch goal:** Add basic contradiction detection by identifying conflicting expressions in the derivation path.

### Intermediate — Belief Revision Algorithm Reimplementation
*Effort: 2 weekends, ~20 hours*

You implement the dialectical belief revision algorithm described in the paper to detect and resolve contradictions in a small knowledge base of first-order logic expressions. You simulate a scenario with conflicting axioms and apply the algorithm to retract less entrenched beliefs, comparing the system's consistency before and after revision.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the core nonmonotonic belief revision mechanism of DRS, showing comprehension of how contradictions are resolved by backtracking and epistemic entrenchment.

**Grounded in:** Dialectical Belief Revision algorithm resolves contradictions by retracting less entrenched beliefs.

**Tech stack:** Python 3.11

**Data:** You create a small synthetic knowledge base with contradictory axioms and inference steps to test belief revision.

**Build it:**

1. Define data structures for expressions, timestamps, and epistemic entrenchment values.
2. Implement the derivation path with from-lists to track inference dependencies.
3. Code the contradiction detection mechanism to identify conflicting expressions.
4. Implement the dialectical belief revision algorithm to backtrack and retract beliefs based on entrenchment.
5. Test the system on example contradictions inspired by the paper's puzzles (e.g., Nixon Diamond).
6. Compare system consistency before and after belief revision.

**Ships as:** A repository with code and README showing a working belief revision system that maintains consistency by retracting less entrenched beliefs in a time-stamped reasoning path.

**Stretch goal:** Add a simple controller component that manages inputs and triggers belief revision automatically.

### Advanced — Epistemic Entrenchment Propagation Extension
*Effort: 3+ weeks, ~60 hours*

You extend the DRS framework by implementing a mechanism to propagate epistemic entrenchment values from axioms to derived expressions, addressing a limitation noted in the paper. You design and evaluate heuristics for entrenchment propagation, integrate them into the belief revision algorithm, and demonstrate the impact on belief retraction decisions in a dynamic reasoning scenario.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep engagement with the framework and the ability to innovate on its core algorithms for more nuanced belief management.

**Grounded in:** The epistemic entrenchment values are assigned only to axioms and not propagated to derived expressions, limiting nuanced belief management.

**Tech stack:** Python 3.11

**Data:** You create or simulate a dynamic knowledge base with axioms and derived expressions to test entrenchment propagation and belief revision.

**Build it:**

1. Review the existing belief revision algorithm and entrenchment assignment to axioms.
2. Design a method to propagate entrenchment values from axioms to derived expressions (e.g., minimum, average, or weighted schemes).
3. Modify the data structures to store entrenchment values on all expressions.
4. Integrate the propagation method into the belief revision algorithm to influence retraction choices.
5. Create test cases with complex derivation paths to evaluate the effect of propagation on belief revision outcomes.
6. Document the design decisions, implementation details, and evaluation results.

**Ships as:** A repository with extended DRS belief revision code, demonstrating entrenchment propagation and its effect on contradiction resolution, accompanied by a detailed README and example scenarios.

**Stretch goal:** Explore integration of the extended DRS with a simple agent-oriented programming framework to automate reasoning control.
