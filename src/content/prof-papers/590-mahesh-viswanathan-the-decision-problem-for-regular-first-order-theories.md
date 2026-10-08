---
title: "590 · The Decision Problem for Regular First Order Theories — Mahesh Viswanathan"
date: 2026-08-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mahesh-viswanathan"
source_hash: "7efe00ab16b4b809895ed28b9b91fa4cf90a6a49deb13432701059512e2e8520"
sequence: 590
generator: "outreach-garden: managed"
---

# 590 · The Decision Problem for Regular First Order Theories

## At a glance

- **Professor:** Mahesh Viswanathan
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [The Decision Problem for Regular First Order Theories](https://doi.org/10.1145/3704870)
- **Authors:** Umang Mathur, David Mestel, Mahesh Viswanathan
- **Year:** 2025

## Paper overview

This paper studies the classical decision problem of satisfiability and validity for infinite sets of first-order logic formulae called regular theories, which are represented by tree automata. It extends classical results on decidability of single formulae to these infinite sets and identifies which fragments remain decidable or become undecidable. The work connects to program verification, synthesis, and logic learning by showing how these problems reduce to satisfiability of regular theories.

### Why it matters

**Research problem:** Determining when the satisfiability (conjunctive and disjunctive) problems for infinite regular sets of first-order logic formulae (regular theories) are decidable, extending the classical decision problem from single formulae to infinite sets represented by tree automata.

**Why it matters:** The decision problem for first-order logic is fundamental in logic and computer science with applications in verification, synthesis, and learning. Extending this to regular theories models infinite sets of formulae arising naturally in program analysis and synthesis. Understanding decidability boundaries enables automated reasoning tools for these applications.

**Key contributions:**

- Definition of weak and strong bounded model properties for classes of formulae to establish decidability of satisfiability problems for regular theories.
- Proof that conjunctive satisfiability is decidable for classes with weak bounded model property and disjunctive satisfiability is decidable for classes with strong bounded model property.
- Undecidability results for regular theories in the EPR (Bernays-Schönfinkel) and Gurevich classes, which are classically decidable for single formulae.
- Identification of subclasses of these classes where satisfiability remains decidable.
- Introduction of a semantic class of coherent existential formulae with decidable disjunctive satisfiability, generalizing prior automata-theoretic verification results.

## About the professor

**Mahesh Viswanathan** — Siebel School of Computing and Data Science, Univ. of Illinois at Urbana-Champaign.

Research interests: algorithm design, automata theory, and logic with applications to algorithmic verification of systems

### Research links

- [Faculty/profile page](http://vmahesh.cs.illinois.edu)
- [Resolved homepage](http://vmahesh.cs.illinois.edu/index.html)
- [Google Scholar](https://scholar.google.com/citations?user=nztNRM0AAAAJ&hl=en)
- [DBLP](https://dblp.uni-trier.de/pers/hd/v/Viswanathan_0001:Mahesh)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Automata Theory and Logic
**The paper assumes:** automata theory, tree automata, first-order logic, logic decidability, model checking
**Already in this field?** Skip this entirely if you already have a solid understanding of automata theory, especially tree automata, and their applications to logic and model checking.

To understand this paper on decision problems for regular first-order theories, it is crucial to grasp the interplay between automata theory (especially tree automata) and logic, as well as classical decision problems in logic. The rigorous course provides a structured university-level foundation in automata and formal languages, while the fast track offers a concise, intuition-driven introduction to automata theory concepts relevant to model checking and logic, suitable for a quicker but solid background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Theory of Automata & Formal Languages Full Course | University CS Lectures](https://www.youtube.com/playlist?list=PLqvTXzSSDlqiI1pbqFURFo5tq-VXuusqA) — FacultyLearn | University CS Lectures · 8 videos

**Watch only this:** Episodes 1-6: 'Transition Graph to Regular Expression Conversion', 'EQUAL is Non-Regular Using Closure Properties', 'Regular Expression to CFG Conversion', 'CFG for Non-regular Languages', 'a^n b^n Variations Explained', and 'Design a PDA for a^n b^(2n)' — about 1.8 hours total. These cover finite automata, regular languages, and pushdown automata concepts foundational for understanding tree automata and logic fragments.

*Why it unblocks this paper:* This university lecture series covers core theoretical foundations of automata and formal languages, including finite automata, regular expressions, and context-free grammars, which underpin the paper's use of tree automata to represent regular theories and reason about decidability.

*If you want all of it:* All 8 episodes, about 2.4 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Automata Theory](https://www.youtube.com/playlist?list=PLiOHRovVkGIIVFlbFpMRfDBngp6gbkyhw) — Computer Science on Paper · 6 videos · 1.0h across 6 episodes

**Watch only this:** Episodes 1-5: '01 - Automata Theory - Alphabets, Words & Languages', '02 - Automata Theory - Operations on Words', '03 - Automata Theory - Operations on Languages', '04 - Automata Theory - Kleene star, Kleene plus and the definition of a language', and '05 - Automata Theory - Introduction to Finite Automata' — about 50 minutes total.

*Why it unblocks this paper:* This concise playlist provides a clear and focused introduction to automata theory basics such as alphabets, words, languages, and finite automata, which are essential to understanding the automata-theoretic approach to regular theories in the paper.

*If you want all of it:* All 6 episodes, about 1 hour total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To understand the paper on the decision problem for regular first-order theories, start with foundational knowledge of first-order logic decidability and tree automata theory, as these underpin the paper's formalization of regular theories. Next, study bounded model properties and automata-theoretic model checking, which are key technical tools used to prove decidability results. Finally, focus on the paper's core concept of decidability of satisfiability for regular theories, including the authors' own talk if available, to grasp their novel contributions and results.

### First-order logic decidability *(prerequisite)*
First-order logic decidability is foundational to the paper since it extends classical decision problems from single formulae to infinite regular sets. Understanding classical decidability and undecidability results for first-order logic is essential to appreciate the paper's contributions and the significance of their extensions.

*How the paper uses it:* The paper builds on classical decision problems for first-order logic to study infinite regular theories.

▶ [[CS188 SP24] LEC09 - Logic: First Order Logic](https://www.youtube.com/watch?v=fiE-oT3FPms) — CS 188 (Artificial Intelligence) at UC Berkeley · 1:20:25 · 2y ago

### Tree automata theory *(prerequisite)*
Tree automata theory is crucial because the paper represents regular theories as tree automata accepting parse trees of formulae. A solid understanding of tree automata and their properties is necessary to follow the paper's formalization and technical approach.

*How the paper uses it:* Regular theories are defined via tree automata accepting parse trees of formulae in the paper.

▶ [Fibred Categories of Tree Automata](https://www.youtube.com/watch?v=YSoN7F987ng) — Simons Institute for the Theory of Computing · 31:26 · 9y ago

### Bounded model property *(prerequisite)*
The paper introduces weak and strong bounded model properties to establish decidability results. Understanding the concept of bounded model properties and their role in logic and model theory is important to grasp the paper's main technical contributions.

*How the paper uses it:* The paper defines weak and strong bounded model properties to prove decidability of satisfiability problems for regular theories.

▶ [Lecture 3](https://www.youtube.com/watch?v=9PgfKzyGLBM) — metamathematicslectures · 1:00:43 · 6y ago

### Automata-theoretic model checking *(prerequisite)*
Automata-theoretic model checking is a key technique used in the paper to prove decidability results for regular theories. Familiarity with model checking, especially its automata-theoretic foundations, is essential to understand the methodology and proofs presented.

*How the paper uses it:* The paper uses automata-theoretic model checking to establish decidability results for classes of regular theories.

▶ [CERIAS Seminar: The role of automata theory in software verification](https://www.youtube.com/watch?v=alXgw0p5nw0) — Christiaan008 · 58:02 · 15y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk would provide the most direct and precise explanation of their work, including motivation, technical approach, and results. It is the best resource for an advanced reader to understand the paper in depth.

*How the paper uses it:* Direct presentation by the authors on their research about decision problems for regular first-order theories.

▶ [Did Turing Prove the Halting Problem? His 1936 Proof vs. the Modern Proof](https://www.youtube.com/watch?v=jhzatuCUfC8) — Qingdu Hong · 43:56 · 2w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the decision problem for regular first-order theories, starting with the basics of first-order logic and decidability, then covering tree automata theory and bounded model properties, and finally explaining automata-theoretic model checking. The path builds intuition step-by-step, focusing on clear, concise videos that connect directly to the paper's methods and results.

### First-order logic decidability *(prerequisite)*
First-order logic is a formal system used to express statements about objects and their relationships. Understanding its decidability means knowing which logical statements can be algorithmically determined to be true or false. This foundation is essential to grasp the classical decision problems that the paper extends to infinite sets of formulae.

*How the paper uses it:* The paper extends classical decidability results from single first-order formulae to infinite regular sets of formulae.

▶ [Introduction to First Order Logic](https://www.youtube.com/watch?v=ARywou8HLQk) — Neso Academy · 5:20 · 6y ago

### Tree automata theory *(prerequisite)*
Tree automata are computational models that accept tree structures rather than strings, allowing representation of hierarchical data like parse trees of formulae. Understanding tree automata helps in grasping how infinite sets of formulae (regular theories) are represented and manipulated in the paper.

*How the paper uses it:* Regular theories in the paper are represented by tree automata accepting parse trees of formulae.

▶ [Trees | Theory of Automata | CS402_Lecture32](https://www.youtube.com/watch?v=6YquBIai22E) — Virtual University of Pakistan · 56:05 · 10mo ago

### Bounded model property *(prerequisite)*
The bounded model property is a logical property that restricts the size of models needed to check satisfiability, making decision problems more tractable. The paper defines weak and strong bounded model properties to establish decidability for classes of regular theories.

*How the paper uses it:* The paper introduces weak and strong bounded model properties as key tools to prove decidability results.

▶ [Lecture 3](https://www.youtube.com/watch?v=9PgfKzyGLBM) — metamathematicslectures · 1:00:43 · 6y ago

### Automata-theoretic model checking *(prerequisite)*
Automata-theoretic model checking uses automata to verify whether a model satisfies a given specification, enabling algorithmic reasoning about infinite structures. This technique is central to the paper's approach to proving decidability for regular theories.

*How the paper uses it:* The paper uses automata-theoretic model checking to prove decidability results for satisfiability problems.

▶ [Tutorial - An introduction to model checking](https://www.youtube.com/watch?v=qJpYpyZz9L8) — Brazilian Symposium on Formal Methods · 56:47 · 5y ago

## Already in your library

- [Logic 7 - First Order Logic | Stanford CS221: AI (Autumn 2021)](https://www.youtube.com/watch?v=Z-O0Q3_oTJM) — also for: Dynamic Reasoning Systems (Daniel Schwartz)
- [Logic 2 - First-order Logic | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=_Iz83hfkFds) — also for: Bound-Founded Semantics for Answer Set Programming with Difference Constraints: Preliminary Report (Jorge Fandinno)
- [1. Introduction, Finite Automata, Regular Expressions](https://www.youtube.com/watch?v=9syvZr-9xwk) — also for: On Signifiable Computability: Part III: A Note on Unnameable Functions on Natural Numbers (Vladimir A. Kulyukin)
- [Lecture 19 - UPPAAL Model Checking Tutorial [PoM-CPS]](https://www.youtube.com/watch?v=9aCyigaQ_W0) — also for: Architectural Modeling and Analysis for Safety Engineering (Mats Per Erik Heimdahl)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from implementing foundational concepts of the paper to applying its core decision procedures, and finally extending its theoretical boundaries. The beginner project grounds you in representing regular theories as tree automata and basic model checking, the intermediate project has you implement and test the paper's bounded model property decision method on a simplified example, and the advanced project challenges you to explore decidability beyond the coherent class, addressing an open future direction of the paper.

### Beginner — Tree Automata Representation and Basic Model Checking for Regular Theories
*Effort: a weekend, ~8 hours*

You build a small prototype that encodes a simple regular theory as a tree automaton accepting parse trees of first-order formulae, and implement a basic model checking algorithm to decide if a given finite model satisfies the theory. This reproduces the paper's foundational formalization of regular theories and the decidability of model checking.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's key representation of infinite sets of formulae via tree automata and the decidability of model checking finite models against these sets, reflecting the core definitions and Lemma 4.2.

**Grounded in:** Section 3.3 defines regular theories via tree automata; Lemma 4.2 and Corollary 4.3 prove decidability of model checking.

**Tech stack:** Python 3.11, networkx (for tree structures), anytree (optional, for tree manipulation)

**Data:** You simulate a small set of first-order formulae parse trees manually, representing a toy regular theory; no external dataset is needed.

**Build it:**

1. Implement a parser to convert simple first-order formulae into parse trees (e.g., using nested tuples or custom tree nodes).
2. Define a tree automaton that accepts these parse trees representing a regular theory (hardcode a small example).
3. Implement a finite model representation (domain and interpretation of predicates/functions).
4. Implement a model checking algorithm that verifies if the finite model satisfies all formulae accepted by the tree automaton.
5. Test the implementation on the toy regular theory and a few finite models, showing acceptance or rejection.

**Ships as:** A GitHub repository with code and README demonstrating the tree automaton construction, model checking algorithm, and example runs on toy data.

**Stretch goal:** Add visualization of the tree automaton and parse trees to better illustrate the representation.

### Intermediate — Implementing Decidability via Weak Bounded Model Property for Regular Theories
*Effort: 2 weekends, ~20 hours*

You implement the decision procedure for conjunctive satisfiability of regular theories in classes with the weak bounded model property as described in Theorem 1.1. You create a small framework to encode such classes, enumerate finite models up to the bounded size, and check satisfiability. You compare this approach against naive enumeration without bounding to demonstrate efficiency gains.

**Why it shows you understood the paper:** This project shows you can operationalize the paper's main decidability result by implementing the bounded model property concept and automata-theoretic model checking, reproducing the core method of Theorem 1.1 on a concrete example.

**Grounded in:** Theorem 1.1: Decidability of conjunctive satisfiability for classes with weak bounded model property; Definition 4.1 defining the property.

**Tech stack:** Python 3.11, Z3 SMT solver (for finite model checking), networkx or anytree for tree structures

**Data:** You simulate a small regular theory class with weak bounded model property by generating parse trees for formulae with bounded quantifiers; no external dataset is needed.

**Build it:**

1. Implement or reuse the tree automaton representation of a regular theory class with weak bounded model property.
2. Implement enumeration of finite models up to the bounded size defined by the property.
3. Integrate a finite model checker (e.g., Z3) to verify satisfiability of formulae in each model.
4. Implement the conjunctive satisfiability decision procedure by combining enumeration and model checking.
5. Compare runtime and correctness against a naive unbounded enumeration baseline on the toy theory.
6. Document the approach, results, and limitations.

**Ships as:** A GitHub repository with code, README, and a report comparing bounded vs naive satisfiability checking on a toy regular theory class.

**Stretch goal:** Extend the implementation to handle disjunctive satisfiability for classes with strong bounded model property.

### Advanced — Exploring Decidability Beyond Coherent Formulae: Semantic Subclasses for Regular Theories
*Effort: 3-4 weeks*

You investigate and implement an extension of the paper's semantic class of coherent existential formulae with decidable disjunctive satisfiability (Theorem 1.6). You propose and test a new semantic subclass that generalizes coherence, implement its decision procedure, and evaluate decidability on synthetic regular theories. This addresses the paper's open future direction on extending semantic classes admitting decidability.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's semantic decidability results and limitations, and your ability to extend theoretical concepts into new decidable subclasses, engaging with open research questions.

**Grounded in:** Theorem 1.6: Decidability of disjunctive satisfiability for regular coherent existential theories; Future direction: Extend semantic classes beyond coherence.

**Tech stack:** Python 3.11, Z3 SMT solver, networkx or anytree, Jupyter Notebook for experimentation and documentation

**Data:** You generate synthetic regular theories by constructing tree automata for formulae in the new semantic subclass; no external dataset is needed.

**Build it:**

1. Study the paper's definition and properties of coherent existential formulae and their decision procedure.
2. Formulate a candidate semantic subclass generalizing coherence with decidability conjecture.
3. Implement tree automata representations for formulae in this subclass.
4. Implement the decision procedure for disjunctive satisfiability based on automata-theoretic model checking and bounded model properties.
5. Generate synthetic examples of regular theories in the new subclass and test satisfiability.
6. Analyze results, document the subclass definition, decision procedure, and experimental findings.

**Ships as:** A GitHub repository with code, Jupyter notebooks, and a detailed README discussing the new semantic subclass, implementation, and experimental evaluation.

**Stretch goal:** Attempt to integrate the new subclass decision procedure into a simple verification or synthesis tool prototype.
