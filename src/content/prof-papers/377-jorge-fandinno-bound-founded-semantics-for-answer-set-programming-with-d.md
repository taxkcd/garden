---
title: "377 · Bound-Founded Semantics for Answer Set Programming with Difference Constraints: Preliminary Report — Jorge Fandinno"
date: 2026-08-12
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jorge-fandinno"
source_hash: "014dbb76e3cd964a8853a35a96b2d237d60272f57535700afd244d3e1e6e9d82"
sequence: 377
generator: "outreach-garden: managed"
---

# 377 · Bound-Founded Semantics for Answer Set Programming with Difference Constraints: Preliminary Report

## At a glance

- **Professor:** Jorge Fandinno
- **Institution:** University of Nebraska - Omaha
- **Paper:** [Bound-Founded Semantics for Answer Set Programming with Difference Constraints: Preliminary Report](https://arxiv.org/abs/2607.21201)
- **Authors:** Pedro Cabalar, Jorge Fandinno, Nicolas Rühling, Torsten Schaub, Sebastian Schellhorn, Philipp Wanko
- **Year:** 2026

## Paper overview

This paper introduces a many-sorted variant of the Bound-founded Logic of Here-and-There (HTb) to provide a unified logical foundation for Answer Set Programming (ASP) extended with difference constraints. It formalizes the semantics of existing hybrid ASP systems like clingo[DL], clingcon, and flingo, explaining their differing behaviors through varying notions of foundedness and ordered domains. The framework enables rigorous semantic analysis, program simplifications, and integration of diverse semantic principles in a single setting.

### Why it matters

**Research problem:** Existing hybrid ASP solvers that integrate linear or difference constraints rely on disparate semantic foundations lacking a unified logical characterization. This gap hinders understanding and comparison of their behaviors and limits the development of generalized semantic frameworks.

**Why it matters:** Answer Set Programming with linear constraints has broad applications in scheduling, planning, and optimization. A unified semantic foundation facilitates better understanding, comparison, and extension of hybrid ASP systems, improving their reliability and expressiveness.

**Key contributions:**

- Introduction of a many-sorted variant of HTb to unify semantics of ASP with difference constraints.
- Formal semantic characterization of clingo[DL]'s two-step computation as equilibrium models in HTb.
- Embedding of the Logic of Here-and-There with Constraints (HTc) into many-sorted HTb.
- Demonstration that clingcon, flingo, and clingo[DL] semantics can be captured and unified in HTb.
- Proposal of a general founded semantics for ASP with difference constraints treating all constraint atoms as founded.

## About the professor

**Jorge Fandinno** — University of Nebraska - Omaha.

### Research links

- [Faculty/profile page](https://www.unomaha.edu/college-of-information-science-and-technology/about/faculty-staff/jorge-fandinno.php)
- [Identity evidence](https://dblp.org/pid/136/1503)
- [Google Scholar](https://scholar.google.com/scholar)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Answer Set Programming semantics
**The paper assumes:** Answer Set Programming semantics, stable model theory, and Logic of Here-and-There
**Already in this field?** Skip this entirely if you already understand the formal semantics of Answer Set Programming, including stable models and the Logic of Here-and-There.

To understand the semantics foundations of Answer Set Programming (ASP) and the many-sorted Bound-founded Logic of Here-and-There (HTb) introduced in the paper, it is essential to grasp the core concepts of ASP semantics, equilibrium models, and logic programming foundations. The rigorous course offers a deep dive into programming language semantics including operational and denotational semantics, which underpin the formal reasoning in the paper. The fast track provides a concise, focused introduction to logic programming and Prolog basics, giving a practical intuition of logic programming that supports understanding ASP semantics quickly.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Prolog - Logic Programming (English)](https://www.youtube.com/playlist?list=PLHbIZiLIDu-qbXqhvgkIjyIK0SbqYNcU8) — LernenInVerschiedenenFormen · 15 videos · 1.2h across 15 episodes

**Watch only this:** Episodes 1-7 ("Prolog 01: Introduction" through "Prolog 07: Cut operator"), about 30 minutes — these provide a solid conceptual grounding in logic programming relevant to ASP semantics.

*Why it unblocks this paper:* This concise Prolog - Logic Programming series introduces the basics of logic programming, including key concepts like Horn clauses, backtracking, and resolution, which are foundational to understanding ASP semantics and the logic of Here-and-There. It is a well-structured, short series ideal for quickly gaining intuition about logic programming.

*If you want all of it:* All 15 episodes, about 1.2 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on many-sorted Bound-founded Logic of Here-and-There (HTb) for ASP with difference constraints, start by building a solid foundation in the prerequisite topics: the Logic of Here-and-There as the underlying logic, Answer Set Programming semantics focusing on stable models, difference constraints in logic programming, and many-sorted logic as the technical basis for typed domains. After establishing these foundations, conclude with the core concept of the paper itself, featuring the authors' own talk if available, to grasp the novel unified semantic framework and its implications.

### Answer Set Programming semantics *(prerequisite)*
Stable model semantics is essential to understand ASP and its extensions. The chosen video is a research-level conference talk from the KR conference series that provides a gentle but rigorous introduction to stable model semantics, suitable for an advanced reader to understand the semantic basis of the paper.

*How the paper uses it:* The paper builds on stable model semantics to extend ASP with difference constraints under a unified logical framework.

▶ [A Gentle Introduction to the Stable Model Semantics for Logic Programs](https://www.youtube.com/watch?v=5e4igPZEPu0) — KR conference series · 15:01 · 1 year ago

### Difference constraints in logic programming *(prerequisite)*
Difference constraints are the core numeric constraints integrated into ASP in the paper. The selected talk from the Simons Institute provides an advanced overview of modern constraint programming, including difference constraints, suitable for understanding the constraint types the paper formalizes within ASP.

*How the paper uses it:* The paper formalizes difference constraints within ASP semantics using many-sorted HTb logic.

▶ [Modern Constraint Programming, For People Who Know SAT](https://www.youtube.com/watch?v=2mVMXOCSCKw) — Simons Institute for the Theory of Computing · 49:30

### Many-sorted logic *(prerequisite)*
Many-sorted logic introduces typed domains, which is a key technical extension enabling the many-sorted HTb semantics in the paper. The Stanford CS221 lecture on first-order logic covers many-sorted logic in a rigorous university-level setting, making it suitable for an advanced reader.

*How the paper uses it:* The paper extends HTb with many-sorted logic to handle propositional and integer sorts with ordered domains.

▶ [Logic 2 - First-order Logic | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=_Iz83hfkFds) — Stanford Online · 1:19:55

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's unified semantics framework for Answer Set Programming (ASP) with difference constraints. It starts with the basics of logic programming and ASP semantics, then covers difference constraints and many-sorted logic as key technical tools, and concludes with the core logic of Here-and-There (HT) and its many-sorted bound-founded extension central to the paper.

### Answer Set Programming semantics *(prerequisite)*
Answer Set Programming (ASP) is a form of declarative programming based on logic programs and their stable model semantics. Understanding stable model semantics is essential because the paper extends these semantics to incorporate numeric difference constraints. This section introduces the intuition behind stable models and how ASP defines solutions to logic programs.

*How the paper uses it:* The paper builds on stable model semantics to extend ASP with difference constraints and unify existing solver semantics.

▶ [A Gentle Introduction to the Stable Model Semantics for Logic Programs](https://www.youtube.com/watch?v=5e4igPZEPu0) — KR conference series · 15:01 · 1 year ago

### Difference constraints in logic programming *(prerequisite)*
Difference constraints express inequalities between variables, such as x - y ≤ c, and are widely used in scheduling and optimization. In logic programming, integrating these constraints allows richer numeric reasoning. This section explains what difference constraints are and their role in constraint logic programming.

*How the paper uses it:* The paper focuses on ASP extended with difference constraints and formalizes their semantics within a unified framework.

▶ [Lecture 18 Shortest Paths II_ Bellman-Ford, Linear Programming, Difference Constraints.mp4](https://www.youtube.com/watch?v=YXXcS_inGPA) — Rameshwar Gupta · 13 years ago

### Many-sorted logic *(prerequisite)*
Many-sorted logic extends classical logic by introducing multiple sorts (types) for variables and functions, enabling more structured and typed reasoning. This concept is key to the paper's approach, which uses many-sorted logic to handle propositional and integer domains distinctly.

*How the paper uses it:* The paper introduces a many-sorted variant of the Bound-founded Logic of Here-and-There to unify semantics for ASP with difference constraints.

▶ [3a Predicate Logic 2022](https://www.youtube.com/watch?v=MgQif8-GKTg) — William Farmer · 18:06

### Logic of Here-and-There *(the paper's own talk)*
The Logic of Here-and-There (HT) is an intermediate logic between classical and intuitionistic logic, foundational for defining stable model semantics in ASP. Understanding HT helps grasp how the paper extends it with bounds and sorts to capture difference constraints.

*How the paper uses it:* The paper extends HT to a many-sorted bound-founded variant (HTb) to provide a unified semantic foundation for hybrid ASP systems.

▶ ["Syntax and Semantics: the difference" - Q&A](https://www.youtube.com/watch?v=PbmsOTKtlno) — ORBITS - Luciano Floridi · 9 years ago

### Paper authors talk
This section provides a direct introduction to Answer Set Programming with a simple example, helping to ground the abstract concepts in concrete logic programs and their answer sets. It serves as a gentle entry point before tackling the paper's advanced semantics.

*How the paper uses it:* The paper builds on ASP concepts introduced here and extends them with difference constraints and unified semantics.

▶ [Easy answer set programming, introduction, first example](https://www.youtube.com/watch?v=kDjmqycSy_o) — Potassco · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the many-sorted Bound-founded Logic of Here-and-There (HTb) framework introduced in the paper. Starting with a beginner-level implementation of a simple translation of difference constraints into HTb formulas, progressing to an intermediate reimplementation and semantic comparison of clingo[DL]-style stable models, and culminating in an advanced extension addressing one of the paper's stated limitations by exploring program transformations for external difference constraint atoms.

### Beginner — Translate Simple Difference Constraints into Many-Sorted HTb Formulas
*Effort: a weekend, ~8 hours*

You build a small tool or script that takes a handful of simple logic program rules with difference constraints and translates them into the many-sorted HTb theory formulas as described in the paper. This will include representing propositional and integer sorts with ordered domains and encoding difference constraints as HTb atoms.

**Why it shows you understood the paper:** This project shows you understand the core semantic translation τb from logic programs with difference constraints into the many-sorted HTb framework, a foundational contribution of the paper.

**Grounded in:** The translation τb from programs to HTb theories preserves clingo[DL]-stable models.

**Tech stack:** Python 3.11

**Data:** You create a small synthetic set of example logic program rules with difference constraints, inspired by examples in the paper.

**Build it:**

1. Read the paper sections describing the many-sorted HTb signature and the translation τb.
2. Define data structures to represent logic program rules with difference constraints (propositional atoms, integer variables, difference constraints).
3. Implement the translation of these rules into HTb formulas with propositional and integer sorts and ordered domains.
4. Write a few example input programs and output their translated HTb formulas.
5. Document the translation process and how it corresponds to the paper's definitions.

**Ships as:** A GitHub repository containing the translation script, example inputs and outputs, and a README explaining the translation and its relation to the paper.

**Stretch goal:** Add support for external difference constraint atoms in rule bodies and demonstrate the translation preserving stable models for head-only difference constraints.

### Intermediate — Reimplement Clingo[DL]-Style Stable Model Computation via Many-Sorted HTb
*Effort: 2 weekends, ~20 hours*

You implement a prototype system that computes stable models of logic programs with difference constraints by encoding them into the many-sorted HTb framework and searching for equilibrium models. You compare your results on small benchmark programs against clingo[DL]'s known stable models to verify correctness.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core method of characterizing clingo[DL]'s two-step computation as equilibrium models in many-sorted HTb and validates the semantic correspondence experimentally.

**Grounded in:** The many-sorted HTb framework captures the canonical stable models of clingo[DL]. The translation τb from programs to HTb theories preserves clingo[DL]-stable models.

**Tech stack:** Python 3.11, Z3 SMT solver (for integer constraints)

**Data:** You use small synthetic logic programs with difference constraints, similar to those in the paper's examples, to test and compare stable models.

**Build it:**

1. Implement the many-sorted HTb semantics for propositional and integer sorts with ordered domains.
2. Encode difference constraints and logic program rules as HTb formulas suitable for SMT solving.
3. Implement an equilibrium model search procedure using Z3 to find minimal integer assignments satisfying the HTb theory.
4. Run your implementation on example programs and compare the stable models found with clingo[DL]'s documented behavior.
5. Write a report summarizing the semantic correspondence and any differences observed.

**Ships as:** A GitHub repository with the implementation, test cases, comparison results, and a README explaining the approach and findings.

**Stretch goal:** Extend the implementation to handle programs with external difference constraint atoms in bodies and analyze when founded and clingo[DL]-stable models diverge.

### Advanced — Extend Many-Sorted HTb Framework to Automate Program Transformations for External Difference Constraint Atoms
*Effort: 3+ weeks*

You develop a tool that formalizes and automates the translation of logic programs containing external difference constraint atoms in rule bodies into equivalent head-only forms, preserving stable models as proposed in the paper. This addresses a stated limitation and future direction by implementing program simplification techniques based on the unified semantics.

**Why it shows you understood the paper:** This project tackles a concrete limitation and future direction from the paper, demonstrating deep comprehension of the many-sorted HTb semantics and their application to program transformations that preserve stable models.

**Grounded in:** Techniques to translate programs with external difference constraint atoms in bodies into head-only form preserving stable models. The proposed founded semantics treating all difference constraint atoms as founded does not always coincide with clingo[DL]-stable models when external atoms appear in bodies.

**Tech stack:** Python 3.11, Z3 SMT solver, TypeScript (optional for UI)

**Data:** Synthetic logic programs with external difference constraint atoms in bodies, constructed based on examples and scenarios described in the paper.

**Build it:**

1. Study the paper's discussion on external difference constraint atoms and the proposed translation to head-only forms.
2. Design a formal representation for logic programs with external difference constraint atoms.
3. Implement the translation algorithm that rewrites such programs into head-only difference constraint programs preserving stable models.
4. Integrate the translation with your many-sorted HTb equilibrium model computation from the intermediate project.
5. Validate correctness by comparing stable models before and after transformation on test programs.
6. Document the tool, its theoretical basis, and experimental results.

**Ships as:** A GitHub repository containing the transformation tool, integration with HTb model computation, test cases, and detailed documentation linking the implementation to the paper's semantic framework.

**Stretch goal:** Explore extending the framework and tool to handle more general linear constraints beyond difference constraints as a step toward broader applicability.
