---
title: "543 · Using Counterexample Generation and Theory Exploration to Suggest Missing Hypotheses — Ruben A. Gamboa"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ruben-a-gamboa"
source_hash: "52b140d26661a7d217fcac952c6fd1fda32c67e8607a37519e4873ec7de3091e"
sequence: 543
generator: "outreach-garden: managed"
---

# 543 · Using Counterexample Generation and Theory Exploration to Suggest Missing Hypotheses

## At a glance

- **Professor:** Ruben A. Gamboa
- **Institution:** University of Wyoming
- **Paper:** [Using Counterexample Generation and Theory Exploration to Suggest Missing Hypotheses](https://doi.org/10.4204/EPTCS.393.8)
- **Authors:** Ruben Gamboa, Panagiotis Manolios, Eric Smith, Kyle Thompson
- **Year:** 2023

## Paper overview

This paper presents DrLA, a tool designed to help users of the ACL2 theorem prover by suggesting missing hypotheses in theorems that fail to prove. DrLA uses counterexample generation and theory exploration techniques to identify hypotheses that, when added, make the theorem true. It aims to improve the user experience in formal verification by automating the detection of forgotten assumptions.

### Why it matters

**Research problem:** Users of ACL2 often encounter failed proof attempts because theorems lack necessary hypotheses. Identifying these missing hypotheses manually is challenging and error-prone. The problem is how to automatically suggest missing hypotheses that make a theorem provable without changing its intended meaning.

**Why it matters:** Formal verification relies on precise theorems. Missing hypotheses can cause proofs to fail or produce incorrect results. Automating hypothesis suggestion can save time, reduce errors, and improve the accessibility and effectiveness of theorem proving, especially for newcomers.

**Key contributions:**

- Introduction of DrLA, a tool that suggests missing hypotheses for ACL2 theorems using counterexample generation and theory exploration.
- A novel method to generate candidate hypotheses based on functions and predicates in the theorem and their definitions.
- Heuristics based on subsumption and syntactic complexity to filter and prioritize hypothesis suggestions.
- Empirical evaluation on ACL2 Community Books demonstrating DrLA's ability to recover missing hypotheses in many cases.
- Discussion of challenges such as combinatorial explosion and false witnesses, and strategies to mitigate them.

## About the professor

**Ruben A. Gamboa** — Department of Electrical Engineering and Computer Science, University of Wyoming.

Research interests: modern power grid data analysis and modeling, AI/ML and HPC, visual and interactive computer and cybersecurity

### Research links

- [Faculty/profile page](https://www.uwyo.edu/eecs/faculty-staff/faculty/ruben-gamboa)
- [Identity evidence](https://www.uwyo.edu/cosc/cosc-directory/ruben/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** automated theorem proving
**The paper assumes:** automated theorem proving, formal logic, counterexample generation, theory exploration
**Already in this field?** Skip this entirely if you already have experience with automated theorem proving and formal methods in computer science.

To understand the methods and challenges in the paper on DrLA, a tool for suggesting missing hypotheses in ACL2 theorem proving, a solid grasp of automated theorem proving and theory of computation is essential. The rigorous course option offers a deep, structured university-level lecture series on theory of computation, covering foundational concepts that underpin automated reasoning. The fast track provides a concise, accessible playlist focusing on automata theory and related topics, suitable for quickly gaining intuition and core ideas without the full depth of a formal course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.404J Theory of Computation, Fall 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP60_JNv2MmK3wkOt9syvfQWY) — MIT OpenCourseWare · 25 videos · 32.3h across 25 episodes

**Watch only this:** Lectures 1-11 (Introduction through Recursion Theorem and Logic), about 14 hours — these cover the core computational models and logic foundations relevant to theorem proving.

*Why it unblocks this paper:* This MIT OpenCourseWare series on Theory of Computation covers foundational topics such as automata, Turing machines, logic, and decidability, which are crucial for understanding the theoretical basis of automated theorem proving and counterexample generation used in DrLA.

*If you want all of it:* All 25 lectures, about 32.3 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Theory of Computation & Automata](https://www.youtube.com/playlist?list=PLfvuiiJ4Iz1HVeTV7rFCNsqqIgTvQ2MSy) — Sagar Choudhary · 37 videos · 8.3h across 37 episodes

**Watch only this:** Episodes 1-10 (Introduction to Automata through NFA to DFA Conversion Explained), about 2 hours — these episodes cover essential automata concepts and conversions important for understanding the computational aspects of theorem proving.

*Why it unblocks this paper:* This playlist by Sagar Choudhary offers clear, concise explanations of automata theory and related concepts, providing a quick yet solid introduction to the computational models and formal languages that underpin automated theorem proving techniques like those in DrLA.

*If you want all of it:* All 37 episodes, about 8.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Using Counterexample Generation and Theory Exploration to Suggest Missing Hypotheses," start by building foundational knowledge on automated theorem proving with ACL2, counterexample generation techniques, theory exploration in formal methods, and subsumption heuristics for hypothesis selection. After establishing these prerequisites, focus on the core concept of automated suggestion of missing hypotheses, culminating with the authors' own presentation of their tool DrLA, which directly explains their approach and results.

### automated theorem proving with ACL2 *(prerequisite)*
This section introduces the environment and prover context in which DrLA operates. Understanding ACL2 and its theorem proving capabilities is essential to grasp how DrLA integrates with and enhances the ACL2 system.

*How the paper uses it:* DrLA is designed specifically to assist users of the ACL2 theorem prover.

▶ [Specification and verification of x86 machine-level code](https://www.youtube.com/watch?v=Fze1DD5-cvY) — Imperial College London · 27:05 · 10 years ago

### counterexample generation in theorem proving *(prerequisite)*
Counterexample generation is a central technique used by DrLA to find witnesses and counterexamples that guide hypothesis suggestion. A solid understanding of how counterexamples are used in theorem proving will clarify DrLA's methodology.

*How the paper uses it:* DrLA leverages counterexample generation from ACL2s to identify missing hypotheses.

▶ [Counterexamples (Intro to Logic)](https://www.youtube.com/watch?v=fqy2hs5MtF0) — Philologick · 10:29 · 7y ago

### theory exploration in formal methods *(prerequisite)*
Theory exploration techniques generate candidate hypotheses from related functions and predicates. This foundational knowledge explains how DrLA systematically proposes hypotheses based on the theorem's context.

*How the paper uses it:* DrLA uses theory exploration to generate candidate hypotheses from function symbols and predicates related to the theorem.

▶ [The TPTP World ΓÇô Infrastructure for Automated Reasoning](https://www.youtube.com/watch?v=7YClggl44Fk) — Microsoft Research · 1:01:24 · 10 years ago

### subsumption heuristics in hypothesis selection *(prerequisite)*
Subsumption heuristics help filter and prioritize more general hypotheses, reducing redundancy and focusing on the most useful suggestions. Understanding these heuristics is key to appreciating DrLA's candidate filtering approach.

*How the paper uses it:* DrLA applies subsumption heuristics to prefer more general hypotheses when filtering suggestions.

▶ [Josef Urban | AI and Theorem Proving](https://www.youtube.com/watch?v=UnYrWuOzOlc) — Harvard CMSA · 1:22:59 · 5 years ago

### automated suggestion of missing hypotheses
This concept covers the core idea of the paper: improving proof success by automatically suggesting missing hypotheses. It situates DrLA within the broader context of automated hypothesis generation in formal verification.

*How the paper uses it:* The paper's main contribution is DrLA, a tool that suggests missing hypotheses to improve theorem proving in ACL2.

▶ [Dr. Rafael Batista Generating, Refining and Validating Hypotheses](https://www.youtube.com/watch?v=dL493Zenj_M) — DEB Seminar · 1:06:14 · 1 day ago

### DrLA missing hypotheses tool talk *(the paper's own talk)*
The authors' own talk provides the most direct and detailed explanation of DrLA, its design, heuristics, and empirical evaluation. Watching this talk offers the clearest insight into the paper's contributions and challenges.

*How the paper uses it:* This is the authors' presentation of their tool DrLA and its approach to suggesting missing hypotheses.

▶ [Sam Eisenstat - Concepts, information, and objectivity - IPAM at UCLA](https://www.youtube.com/watch?v=OIVbeVGppxA) — Institute for Pure & Applied Mathematics (IPAM) · 44:15 · 20 hours ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how DrLA suggests missing hypotheses in ACL2 theorem proving. We start with the basics of counterexamples in logic to build intuition, then explore theory exploration and subsumption heuristics as key methods for hypothesis generation and filtering. Finally, we focus on the core idea of automated suggestion of missing hypotheses, tying all concepts back to the paper's approach.

### counterexample generation in theorem proving *(prerequisite)*
Counterexamples are specific examples that show a statement or theorem is false. Understanding how to find and use counterexamples is crucial in theorem proving to identify why a proof fails and what assumptions might be missing.

*How the paper uses it:* DrLA uses counterexample generation to find witnesses and counterexamples that guide the suggestion of missing hypotheses.

▶ [Counterexamples (Intro to Logic)](https://www.youtube.com/watch?v=fqy2hs5MtF0) — Philologick · 10:29 · 7y ago

### theory exploration in formal methods *(prerequisite)*
Theory exploration is the automated process of generating and testing new conjectures or hypotheses based on existing functions and predicates. It helps discover useful properties and assumptions that might be missing in formal proofs.

*How the paper uses it:* DrLA leverages theory exploration to generate candidate hypotheses from functions and predicates related to the theorem.

▶ [The TPTP World ΓÇô Infrastructure for Automated Reasoning](https://www.youtube.com/watch?v=7YClggl44Fk) — Microsoft Research · 1:01:24 · 10 years ago

### subsumption heuristics in hypothesis selection *(prerequisite)*
Subsumption heuristics help filter and prioritize hypotheses by preferring more general statements that imply others. This reduces redundancy and focuses on the most useful assumptions for proving theorems.

*How the paper uses it:* DrLA applies subsumption heuristics to filter candidate hypotheses, favoring more general ones to improve suggestion quality.

▶ [🔵 Heuristic - Heuristics Meaning - Heuristic - Examples - Heuristic Definition - C2 Vocabulary](https://www.youtube.com/watch?v=uZ2Hjucv1UA) — iswearenglish · 6:25 · 5 years ago

## Already in your library

- [Lec-15: What is Heuristic in AI | Why we use Heuristic | How to Calculate Heuristic | Must Watch](https://www.youtube.com/watch?v=5F9YzkpnaRw) — also for: GPU-accelerated Parallel Solutions to the Quadratic Assignment Problem (Apan Qasem)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of DrLA, the tool for suggesting missing hypotheses in ACL2 theorems using counterexample generation and theory exploration. Starting with a small-scale implementation of counterexample-based hypothesis suggestion, you then reimplement the core DrLA method on simplified executable formulas, and finally extend the approach to address a stated limitation by handling non-executable formulas via defattach. Each project builds on your existing software engineering skills while introducing formal methods concepts progressively.

### Beginner — Simple Counterexample-Based Hypothesis Suggestion
*Effort: a weekend, ~8 hours*

You build a small tool that takes simple executable logical formulas (expressed in a subset of ACL2-like syntax) and a set of candidate predicates, then generates counterexamples and witnesses by random testing. Using these, your tool suggests missing hypotheses that distinguish counterexamples from witnesses. This reproduces the core idea of DrLA's use of counterexample generation to identify missing assumptions.

**Why it shows you understood the paper:** This project shows you understand how counterexample generation can guide hypothesis suggestion and the basic filtering of candidate hypotheses by their truth on witnesses and falsity on counterexamples.

**Grounded in:** DrLA uses the counterexample generation engine (cgen) originally developed in ACL2s to provide counterexamples and witnesses, then uses theory exploration techniques to suggest missing hypotheses.

**Tech stack:** Python 3.11, pytest

**Data:** You simulate simple executable logical formulas and candidate predicates as input; no external dataset is needed.

**Build it:**

1. Implement a parser for a small subset of ACL2-like executable formulas and predicates.
2. Implement random testing to generate counterexamples (inputs falsifying the formula) and witnesses (inputs satisfying the formula).
3. Generate candidate hypotheses from a fixed set of predicates related to the formula.
4. Filter candidate hypotheses by checking which hold on witnesses and fail on counterexamples.
5. Rank and output the most general hypotheses that separate witnesses from counterexamples.

**Ships as:** A command-line Python tool with example formulas and predicates, showing suggested missing hypotheses with explanations in the README.

**Stretch goal:** Add a simple subsumption heuristic to filter out redundant or overly specific hypotheses.

### Intermediate — Reimplementation of DrLA's Hypothesis Suggestion on Executable ACL2 Theorems
*Effort: 1-3 weekends*

You reimplement the core DrLA method described in the paper: using ACL2s counterexample generation to find counterexamples and witnesses for broken theorems, then performing theory exploration to generate candidate hypotheses from function symbols and predicates in the theorem. You implement subsumption-based filtering and evaluate candidates by their truth on witnesses and falsity on counterexamples. You test your implementation on a small set of standard ACL2 list theorems with removed hypotheses and compare your suggestions to the original hypotheses.

**Why it shows you understood the paper:** This project demonstrates you can apply the paper's core method end-to-end, including counterexample generation, theory exploration, and heuristic filtering, and reproduce key results such as recovering missing hypotheses like (consp x).

**Grounded in:** DrLA successfully suggested missing hypotheses like (consp x) and (atom x) in standard ACL2 list theorems after removing original hypotheses.

**Tech stack:** ACL2s, Python 3.11, shell scripting

**Data:** You use a small curated set of standard ACL2 list theorems with original hypotheses removed to simulate missing hypothesis scenarios.

**Build it:**

1. Set up ACL2s environment and learn to run its counterexample generation engine (cgen).
2. Implement a script to extract function symbols and predicates from a given ACL2 theorem and its definitions.
3. Generate candidate hypotheses by combining these predicates using simple templates.
4. Use ACL2s cgen to generate counterexamples and witnesses for the broken theorem.
5. Filter and rank candidate hypotheses using subsumption heuristics and evaluation on counterexamples and witnesses.
6. Compare suggested hypotheses to the original ones and report results.

**Ships as:** A documented pipeline that takes ACL2 theorems with missing hypotheses and outputs suggested hypotheses, with example runs and comparison in the README.

**Stretch goal:** Add a simple user interface to allow users to provide additional predicates to improve suggestions when missing predicates are not in the theorem.

### Advanced — Extending Hypothesis Suggestion to Non-Executable Formulas Using defattach
*Effort: several weeks*

You extend the DrLA approach to handle non-executable ACL2 formulas that include encapsulates or other constructs blocking counterexample generation. You integrate the defattach mechanism to provide executable counterparts for such functions, enabling counterexample generation. You adapt theory exploration and hypothesis suggestion to work with these extended formulas. You evaluate your extension on examples involving encapsulated functions and report on effectiveness and complexity trade-offs.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep understanding of DrLA's reliance on executability and how to overcome it by integrating defattach, thus advancing the state of automated hypothesis suggestion.

**Grounded in:** DrLA relies on counterexample generation, so it can only be used on formulas that are fully executable, i.e., no encapsulates. Extending DrLA to handle non-executable formulas using techniques like defattach is a future direction.

**Tech stack:** ACL2s, Python 3.11, shell scripting

**Data:** You use ACL2 theorems involving encapsulated functions or non-executable constructs to test your extension.

**Build it:**

1. Study ACL2's defattach mechanism and how it enables execution of encapsulated functions.
2. Modify your intermediate DrLA reimplementation to detect non-executable formulas and apply defattach to provide executable counterparts.
3. Adapt counterexample generation to work with defattached functions.
4. Test your extended tool on non-executable theorems and compare hypothesis suggestions to manual expectations.
5. Analyze performance and complexity impacts of defattach integration.
6. Document challenges and potential improvements.

**Ships as:** An extended DrLA prototype capable of suggesting missing hypotheses for non-executable ACL2 theorems, with evaluation examples and detailed README discussion.

**Stretch goal:** Incorporate machine learning techniques to cluster predicates and guide hypothesis generation for better scalability.
