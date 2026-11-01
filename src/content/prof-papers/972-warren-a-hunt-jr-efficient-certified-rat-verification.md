---
title: "972 · Efficient Certified RAT Verification — Warren A. Hunt Jr."
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-warren-a-hunt-jr"
source_hash: "4a46da989cd0d98dc55bd15c3b8eb3a7809cab83c2e1d0c3bf4778e870aae1a7"
sequence: 972
generator: "outreach-garden: managed"
---

# 972 · Efficient Certified RAT Verification

## At a glance

- **Professor:** Warren A. Hunt Jr.
- **Institution:** University of Texas at Austin
- **Paper:** [Efficient Certified RAT Verification](https://arxiv.org/pdf/1612.02353)
- **Authors:** Luís Cruz-Filipe, Marijn Heule, Warren Hunt, Matt Kaufmann, Peter Schneider-Kamp
- **Year:** 2016

## Paper overview

This paper introduces LRAT, a new proof format that extends the widely used DRAT format for validating unsatisfiability proofs produced by SAT solvers. LRAT includes hints that enable simpler and faster proof checking, which can be certified using trusted theorem proving systems like Coq and ACL2. The authors implement certified checkers in both systems, demonstrating that certified checking can be done efficiently with reasonable overhead.

### Why it matters

**Research problem:** Validating clausal proofs of unsatisfiability produced by modern SAT solvers is computationally expensive and challenging to certify with high trust, especially for proofs in the DRAT format that support advanced solver techniques beyond resolution proofs.

**Why it matters:** SAT solvers are widely used to verify hardware and software correctness, so bugs in solvers or their proofs can lead to invalid correctness claims. Efficient and certified proof checking increases trust in solver results, which is critical for safety and correctness in many applications.

**Key contributions:**

- Introduction of the LRAT proof format that supports efficient certified checking of RAT proofs.
- Certified LRAT proof checker implementation in Coq with formal soundness proofs.
- Certified LRAT proof checker implementation in ACL2 with formal verification.
- Integration of LRAT proof emission into the DRAT-trim proof checker.
- Demonstration of efficient certified checking of large proofs, including the Boolean Pythagorean Triples problem proof.

## About the professor

**Warren A. Hunt Jr.** — Professor, Department of Computer Sciences, University of Texas at Austin.

Research interests: My research involves the use of formal mathematics to write specifications for computer hardware and software and to use proof techniques to determine the validity of such specifications. Specifications of both high-level intent and low-level implementations are possible, and mechanical proof techniques can determine whether implementations satisfy their specifications. Over the years, I have verified properties of a number of different microprocessor designs of increasing complexity. I am also interested in computer architecture, low-power computing, garbage collection, and biological-inspired computing. Currently, I am working on rapid, single-flux quantum (RSFQ) computing, specifying computer memory models, and extending our ACL2-based x86 specification.

### Research links

- [Faculty/profile page](https://www.cs.utexas.edu/users/hunt)
- [Professor website](http://www.cs.utexas.edu/users/hunt/index.html)
- [Google Scholar](https://scholar.google.com/citations?user=D6fp6_cAAAAJ&hl=en&citsig=AMstHGQctsgfI7mT43E0LQO2RlCgew5ULw)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** propositional satisfiability and proof systems
**The paper assumes:** propositional logic, SAT solving algorithms, resolution proof systems, clausal proof formats
**Already in this field?** Skip this entirely if you already understand propositional satisfiability, SAT solver proof formats, and resolution-based proof checking.

To understand the verification of unsatisfiability proofs in SAT solvers, especially the LRAT and DRAT formats discussed in the paper, a solid grasp of propositional satisfiability, clause learning, resolution, and proof systems is essential. The rigorous course provides a deep, university-level foundation on SAT solving and proof systems, while the fast track offers a concise, visual introduction to propositional logic fundamentals that underpin these concepts. Choose the rigorous course for comprehensive understanding and the fast track for a quick, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [FSTTCS SAT/SMT Winter School - 08 to 10 Dec 2019](https://www.youtube.com/playlist?list=PL_uaeekrhGzIOyI1MvUd_uXYZ2cnPbXZC) — Studio IIT Bombay · 16 videos · 15.6h across 16 episodes

**Watch only this:** Episodes 7 to 9 (FSTTCS2019 S007 SAT Solving and CDCL(T), FSTTCS2019 S008 SAT Solvers are Search-Directed Proof Systems, FSTTCS2019 S009 SAT Solving and CDCL(T) Hands On), about 3 hours — these cover the core SAT solving algorithms and proof systems needed to understand the paper's context.

*Why it unblocks this paper:* This FSTTCS SAT/SMT Winter School playlist covers SAT solving, CDCL, and proof systems in depth, directly relevant to understanding the DRAT and LRAT proof formats and certified checking techniques presented in the paper.

*If you want all of it:* All 16 episodes, about 15.6 hours — for a comprehensive grounding in SAT/SMT theory and applications.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Propositional Logic | Chapter 1 | Discrete Mathematics](https://www.youtube.com/playlist?list=PLBlnK6fEyqRjZU477sHY1rUFlNZO0_Q9x) — Neso Academy · 31 videos · 3.7h across 31 episodes

**Watch only this:** Episodes 1 to 10 (Introduction to Discrete Mathematics through Logical Operators − Biconditional Operator), about 1.2 hours — covers the essential propositional logic concepts needed to follow the paper's technical content.

*Why it unblocks this paper:* This Neso Academy playlist offers a clear, concise introduction to propositional logic, the foundation of SAT solving and proof checking, making it a suitable quick primer for readers new to the topic.

*If you want all of it:* All 31 episodes, about 3.7 hours — for a thorough overview of propositional logic basics.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Efficient Certified RAT Verification," start by building foundational knowledge on SAT solver proof formats, formal verification with Coq and ACL2, and unit clause propagation in SAT, as these underpin the paper's contributions. Then, explore the core concept of RAT proofs to grasp the theoretical basis of the LRAT format. Finally, conclude with the authors' own presentation to directly engage with their novel LRAT proof format and certified checking implementations.

### SAT Solver Proof Formats *(prerequisite)*
Understanding common SAT proof formats like DRAT is essential because LRAT extends these formats to enable efficient certified checking. This section provides insights into how SAT solvers produce proofs and how these proofs can be checked formally.

*How the paper uses it:* LRAT is an extension of the DRAT proof format, so knowledge of SAT proof formats is foundational to understanding the paper's approach.

▶ [A Modular Integration of SAT/SMT Solvers to Coq through Proof Witnesses](https://www.youtube.com/watch?v=Zrho5lDJ67o) — Microsoft Research · 58:33 · 10y ago

### Formal Verification with Coq and ACL2 *(prerequisite)*
The paper implements certified checkers in Coq and ACL2, so familiarity with formal verification techniques and tools like Coq and ACL2 is crucial. This section introduces formal methods and verification concepts relevant to the certified checking implementations.

*How the paper uses it:* The certified LRAT proof checkers in Coq and ACL2 are central contributions of the paper.

▶ [Interactive Formal Verification, Lecture 1: Introduction](https://www.youtube.com/watch?v=5I5XuBzpmwQ) — Lawrence Paulson · 53:06 · 3y ago

### Unit Clause Propagation in SAT *(prerequisite)*
Unit clause propagation is a key technique used in SAT solving and is leveraged in the LRAT format through hints to guide efficient proof checking. Understanding this concept helps in grasping how LRAT improves checking performance.

*How the paper uses it:* LRAT includes hints that guide unit clause propagation to enable simpler and faster proof checking.

▶ [Validating SAT Refutations](https://www.youtube.com/watch?v=Uc2_n3YtIwQ) — Microsoft Research · 42:11 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Efficient Certified RAT Verification, start by learning the basics of SAT solver proof formats, especially DRAT, since LRAT extends it. Next, grasp the concept of unit clause propagation, which LRAT uses for efficient checking. Then, build foundational knowledge of formal verification with Coq and ACL2, as the paper implements certified checkers in these systems. Finally, study the core concept of Resolution Asymmetric Tautology (RAT) proofs to fully appreciate the LRAT format and its verification approach.

### SAT Solver Proof Formats *(prerequisite)*
SAT solvers produce proofs of unsatisfiability in specific formats like DRAT, which encode how the solver derived contradictions. Understanding these formats is essential because LRAT extends DRAT by adding hints for efficient certified checking.

*How the paper uses it:* LRAT is introduced as an extension of the DRAT proof format to enable efficient certified checking.

▶ [Validating SAT Refutations](https://www.youtube.com/watch?v=Uc2_n3YtIwQ) — Microsoft Research · 42:11 · 10y ago

### Formal Verification with Coq and ACL2 *(prerequisite)*
Formal verification uses proof assistants like Coq and ACL2 to rigorously prove the correctness of algorithms and software. The paper implements certified LRAT proof checkers in both Coq and ACL2, ensuring soundness through formal proofs.

*How the paper uses it:* Certified LRAT checkers are implemented and formally verified in Coq and ACL2.

▶ [Basics of specification and verification: Lecture 0, Pre- and postconditions](https://www.youtube.com/watch?v=oLS_y842fMc) — Verification Corner · 19:08 · 8y ago

### Resolution Asymmetric Tautology Proofs
RAT proofs are an advanced proof format that generalizes resolution proofs, enabling modern SAT solvers to produce more expressive proofs. Understanding RAT is central to grasping how LRAT extends DRAT and supports certified checking.

*How the paper uses it:* LRAT extends DRAT to support RAT proofs with added hints for efficient certified checking.

▶ [Tautology, Contradiction, Contingency & Satisfiability](https://www.youtube.com/watch?v=yo7aULLUz_0) — Neso Academy · 5:05 · 8y ago

### Efficient Certified RAT Verification Paper Talk *(paper-talk search result; attribution unverified)*
Hearing the authors present their work provides direct insight into the motivation, design, and results of the LRAT format and certified checkers. This talk complements the foundational concepts with concrete implementation details and performance outcomes.

*How the paper uses it:* The authors explain their LRAT format and certified checking approach in this presentation.

▶ [Trust but Verify Applies to AI Too | Elizabeth Ferrell](https://www.youtube.com/watch?v=SuKe5g9_qRE) — Roske AI · 56:04 · 1mo ago

## Already in your library

- [Rules of Inference - Definition & Types of Inference Rules](https://www.youtube.com/watch?v=HcS4lqXxrV4) — also for: Troubleshooting with human-readable automated reasoning (Alva L. Couch)
- [The Resolution Principle (Preliminaries)](https://www.youtube.com/watch?v=SjEQNOV5FMk) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [4. SAT I](https://www.youtube.com/watch?v=x-Ik9YAFAPo) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [Z3 Explained - Satisfiability Modulo Theories & SMT Solvers](https://www.youtube.com/watch?v=EacYNe7moSs) — also for: Understanding CDCL Solvers via Scalability Studies and Proofdoors (Vijay Ganesh)
- [Specification and verification of x86 machine-level code](https://www.youtube.com/watch?v=Fze1DD5-cvY) — also for: Using Counterexample Generation and Theory Exploration to Suggest Missing Hypotheses (Ruben A. Gamboa)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the LRAT proof format and certified RAT verification from the paper. The beginner project familiarizes you with the basics of DRAT and LRAT proof formats and simple proof validation. The intermediate project involves reimplementing a core LRAT proof checking algorithm to verify small unsatisfiability proofs, illustrating certified checking efficiency. The advanced project tackles a stated limitation by exploring direct LRAT proof generation from SAT solvers, aiming to reduce overhead and extend the paper's approach.

### Beginner — Simple LRAT Proof Validator
*Effort: a weekend, ~8 hours*

You build a command-line tool that parses small DRAT and LRAT proof files and validates the unsatisfiability proofs by simulating unit clause propagation and clause addition steps. The tool will highlight the difference between DRAT and LRAT formats by using the hints in LRAT to speed up checking.

**Why it shows you understood the paper:** This project shows you understand the structure of DRAT and LRAT proofs and the role of hints in LRAT for efficient checking, a key contribution of the paper.

**Grounded in:** The LRAT format extends DRAT with hints to enable efficient certified checking.

**Tech stack:** Python 3.11

**Data:** Use small example DRAT and LRAT proof snippets synthesized based on the paper's description, as no official datasets are provided.

**Build it:**

1. Implement a parser for DRAT proof format clauses and steps.
2. Extend the parser to handle LRAT format with hints for clause addition and deletion.
3. Implement unit clause propagation to simulate proof checking.
4. Compare checking runtime and steps between DRAT and LRAT inputs on small examples.
5. Write a README explaining the difference between DRAT and LRAT and how hints improve checking.

**Ships as:** A Python CLI tool that validates small DRAT and LRAT proofs with example inputs and a README explaining the formats and checking process.

**Stretch goal:** Add a simple visualization of proof steps showing how LRAT hints reduce propagation work.

### Intermediate — Reimplementation of LRAT Certified Checker Core
*Effort: 2 weekends, ~20 hours*

You reimplement the core LRAT proof checking algorithm described in the paper, focusing on the RAT property checks and unit clause propagation guided by LRAT hints. You then benchmark your implementation on small to medium-sized unsatisfiability proofs and compare runtime against a baseline uncertified DRAT checker.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's main technical approach—how LRAT hints enable efficient certified checking—and your ability to implement and evaluate it practically.

**Grounded in:** The authors design the LRAT proof format, which extends DRAT by adding sorted clauses and hints that guide unit clause propagation and RAT property checks.

**Tech stack:** Python 3.11, pytest for testing

**Data:** Use small to medium DRAT proofs from public SAT solver benchmarks or synthesize proofs; no official LRAT proof files are released, so you generate LRAT proofs by post-processing DRAT proofs manually or with simple scripts.

**Build it:**

1. Study the LRAT proof format and RAT checking algorithm as described in the paper.
2. Implement the RAT property checking and unit clause propagation guided by LRAT hints.
3. Create or obtain small DRAT proofs and convert them to LRAT format manually or with scripts.
4. Benchmark your checker against a simple uncertified DRAT checker on these proofs.
5. Document your implementation, benchmarks, and insights in a README.

**Verified links from the paper:**

- <https://github.com/acl2/acl2> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/marijnheule/drat-trim> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python implementation of an LRAT proof checker core with benchmark results comparing certified vs uncertified checking on example proofs.

**Stretch goal:** Add formal soundness assertions or lightweight correctness checks in code comments or tests.

### Advanced — Prototype Direct LRAT Proof Emission from SAT Solver
*Effort: 3+ weeks*

You extend an existing open-source SAT solver or proof checker (e.g., DRAT-trim) to prototype direct LRAT proof emission during solving, aiming to reduce the overhead of post-processing DRAT proofs into LRAT. You evaluate the overhead and correctness of your approach on benchmark problems.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper—enabling SAT solvers to output LRAT proofs directly—and demonstrates your ability to extend complex formal verification tools.

**Grounded in:** Producing LRAT proofs directly from SAT solvers is costly; currently LRAT proofs are generated by post-processing DRAT proofs.

**Tech stack:** C (for DRAT-trim), Python 3.11 (for scripts and evaluation)

**Data:** Use public SAT solver benchmark problems and DRAT proofs from the DRAT-trim repository and related datasets.

**Build it:**

1. Familiarize yourself with DRAT-trim source code and LRAT proof format.
2. Design and implement modifications in DRAT-trim to emit LRAT proofs directly during proof checking.
3. Develop scripts to evaluate proof size, checking time, and overhead compared to post-processed LRAT proofs.
4. Test correctness by verifying emitted LRAT proofs with existing certified checkers (e.g., ACL2 checker).
5. Document your design decisions, implementation details, and evaluation results.

**Verified links from the paper:**

- <https://github.com/marijnheule/drat-trim> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/acl2/acl2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A fork of DRAT-trim with prototype direct LRAT proof emission, evaluation scripts, and a detailed README documenting your approach and findings.

**Stretch goal:** Explore parallel proof checking enabled by LRAT proof partitioning as an additional feature.
