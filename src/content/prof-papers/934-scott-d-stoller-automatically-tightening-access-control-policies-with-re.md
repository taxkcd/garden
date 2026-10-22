---
title: "934 · Automatically Tightening Access Control Policies with Restricter — Scott D. Stoller"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-scott-d-stoller"
source_hash: "0212bf69e7ffad7b311300042838cc24b98fe692a8889ee8f2043613f6681c96"
sequence: 934
generator: "outreach-garden: managed"
---

# 934 · Automatically Tightening Access Control Policies with Restricter

## At a glance

- **Professor:** Scott D. Stoller
- **Institution:** Stony Brook University
- **Paper:** [Automatically Tightening Access Control Policies with Restricter](https://arxiv.org/pdf/2601.14582)
- **Authors:** Ka Lok Wu, Christa Jenkins, Scott D. Stoller, Omar Chowdhury
- **Year:** 2026

## Paper overview

This paper presents Restricter, a tool that automatically tightens access control policies by analyzing access logs to remove unnecessary permissions without disrupting legitimate access. It focuses on attribute-based access control policies, particularly for Amazon's Cedar language, and uses automated reasoning techniques to incrementally strengthen policy rules, improving security by reducing over-permissiveness.

### Why it matters

**Research problem:** Access control policies are often misconfigured, leading to over-permissive rules that violate the principle of least privilege and expose systems to unauthorized access. Designing tight policies is challenging and error-prone, especially as policies evolve. The problem is to automatically tighten existing access control policies to remove over-privileges while preserving legitimate access.

**Why it matters:** Access control is fundamental to software and system security. Misconfigured policies are a common source of vulnerabilities, as highlighted by top security weakness lists from MITRE and OWASP. Over-permissive policies allow unauthorized access, risking misuse and breaches, while overly restrictive policies hinder legitimate users. Automating policy tightening can improve security and reduce administrative burden.

**Key contributions:**

- Formal definition of the access control policy tightening problem with respect to a policy, access log, and environment.
- An incremental, rule-level tightening approach using SyGuS and SMT solvers to synthesize conjunctive predicates that reduce over-permissiveness.
- Implementation of Restricter for a large subset of Cedar, an expressive ABAC language used by Amazon Web Services.
- Empirical evaluation on two realistic case studies demonstrating effectiveness and scalability.

## About the professor

**Scott D. Stoller** — Department of Computer Science, Stony Brook University.

Research interests: cybersecurity, cyber-physical systems, distributed systems, and programming languages

### Research links

- [Faculty/profile page](http://www3.cs.stonybrook.edu/~stoller)
- [Lab website](https://sites.google.com/cs.stonybrook.edu/rsl/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Syntax-Guided Synthesis and SMT Solving
**The paper assumes:** formal methods in program synthesis, SMT (Satisfiability Modulo Theories) solving, and syntax-guided synthesis
**Already in this field?** Skip this entirely if you already understand SMT solvers and syntax-guided synthesis techniques used in program analysis and synthesis.

This background focuses on Syntax-Guided Synthesis (SyGuS) and SMT solving, which are central to the Restricter tool's approach for tightening access control policies by synthesizing predicates. The rigorous course option offers a deep, structured university-level treatment of SAT/SMT solving and synthesis techniques, suitable for readers seeking comprehensive understanding. The fast track provides a shorter, more accessible introduction to the same topics, ideal for readers who want a solid conceptual grasp without investing extensive time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [FSTTCS SAT/SMT Winter School - 08 to 10 Dec 2019](https://www.youtube.com/playlist?list=PL_uaeekrhGzIOyI1MvUd_uXYZ2cnPbXZC) — Studio IIT Bombay · 16 videos · 15.6h across 16 episodes

**Watch only this:** Lectures FSTTCS2019 S001 Introductory Talk through FSTTCS2019 S010 Knowledge Compilation for Boolean Functional Synthesis, about 9.5 hours — covering foundational concepts, SAT/SMT solving, and synthesis relevant to the paper's approach.

*Why it unblocks this paper:* This Foundations of Software Technology and Theoretical Computer Science (FSTTCS) winter school playlist covers SAT/SMT solving and synthesis in depth, including hands-on and theoretical lectures that align closely with the SyGuS and SMT solver techniques used in Restricter.

*If you want all of it:* All 16 episodes, about 15.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Curated Z3/ SMT Solver Lectures](https://www.youtube.com/playlist?list=PLr1LE0AQvRvz_6GwWD18h7zVV64u8k7e2) — SMT Enthusiast · 7 videos · 6.1h across 7 episodes

**Watch only this:** Episodes 1 through 4, about 3.5 hours — covering Z3 basics, programming with Z3, and applications relevant to synthesis and constraint solving.

*Why it unblocks this paper:* This curated Z3/SMT Solver lecture series provides a concise and focused introduction to SMT solving and the Z3 solver, which is a key tool underlying the SyGuS-based synthesis in Restricter, making it a practical and accessible primer.

*If you want all of it:* All 7 episodes, about 6.1 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Automatically Tightening Access Control Policies with Restricter," start by building foundational knowledge on Attribute-Based Access Control (ABAC) and Satisfiability Modulo Theories (SMT) solvers, as these underpin the policy model and automated reasoning techniques used. Next, explore the broader research area of access control policy mining to contextualize the problem. Finally, focus on the core concept of Restricter itself by watching the authors' own talk, which directly presents their approach and results.

### Attribute based access control lecture *(prerequisite)*
Attribute-Based Access Control (ABAC) is the fundamental access control model that Restricter targets for policy tightening. Understanding ABAC's components, evaluation, and expressiveness is essential to grasp how Restricter analyzes and refines policies written in Amazon's Cedar language, which is an ABAC language.

*How the paper uses it:* Restricter tightens ABAC policies, so a solid understanding of ABAC is foundational.

▶ [Efficient Evaluation of Attribute-Based Access Control Policies - Part 1/2](https://www.youtube.com/watch?v=hRAjB5wXhpA) — Shamik Sural · 46:04 · 6y ago

### SMT solvers lecture *(prerequisite)*
SMT solvers are automated reasoning engines used by Restricter to solve the synthesis problems involved in tightening access control rules. Learning about SMT solvers, their capabilities, and how they are applied in program analysis will clarify the technical backbone of Restricter's approach.

*How the paper uses it:* Restricter uses SMT solvers to synthesize predicates that tighten policy rules.

▶ [005. Program Analysis using Efficient Satisfiability Modulo Theories Solvers - Nikolaj Bjorner](https://www.youtube.com/watch?v=HqlMSnY0b2w) — Yandex for ML · 1:25:50 · 11y ago

### Access control policy mining lecture *(prerequisite)*
Access control policy mining is the broader research area that includes automated analysis and refinement of access control policies. Understanding this context helps situate Restricter's contribution within ongoing efforts to improve security policy design and maintenance.

*How the paper uses it:* Restricter is a tool for automated tightening, a form of policy mining and refinement.

▶ [Introduction to Access Control](https://www.youtube.com/watch?v=-s5HIG6E-Nk) — Kifayat Ullah · 43:19 · 5y ago

### Syntax guided synthesis lecture
Syntax-Guided Synthesis (SyGuS) is the central method Restricter uses to synthesize conjunctive predicates that tighten access control rules. A lecture on SyGuS provides insight into how synthesis problems are formulated and solved, complementing the understanding of Restricter's technical approach.

*How the paper uses it:* Restricter formulates tightening as a SyGuS problem solved by SMT solvers.

▶ [Syntax-Guided Synthesis in SMT: A View from Inside the Solver](https://www.youtube.com/watch?v=e2oTKfbyseI) — Simons Institute for the Theory of Computing · 26:05 · Streamed 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Restricter, start by learning the fundamentals of access control, focusing on Attribute-Based Access Control (ABAC), which is the policy model Restricter tightens. Next, grasp the role of SMT solvers, the automated reasoning tools used to synthesize tightening predicates. Finally, explore the core method of Syntax-Guided Synthesis (SyGuS), which Restricter employs to incrementally strengthen access control policies.

### Attribute based access control lecture *(prerequisite)*
Attribute-Based Access Control (ABAC) is a flexible access control model that makes authorization decisions based on attributes of users, resources, and the environment. Understanding ABAC helps grasp how policies specify permissions and why tightening these policies is important for security.

*How the paper uses it:* Restricter focuses on tightening ABAC policies, specifically those written in Amazon's Cedar language.

▶ [OWASP BeNeLux Day Attribute Based Access Control. Why, what, how? by Jacoba Sieders](https://www.youtube.com/watch?v=O7iWITnZGsk) — OWASP Foundation · 45:34 · 8y ago

### SMT solvers lecture *(prerequisite)*
SMT (Satisfiability Modulo Theories) solvers are automated reasoning tools that decide the satisfiability of logical formulas within certain theories. They are essential for program analysis and synthesis tasks that require reasoning about complex constraints efficiently.

*How the paper uses it:* Restricter uses SMT solvers to solve the synthesis problems that generate predicates for tightening access control rules.

▶ [005. Program Analysis using Efficient Satisfiability Modulo Theories Solvers - Nikolaj Bjorner](https://www.youtube.com/watch?v=HqlMSnY0b2w) — Yandex for ML · 1:25:50 · 11y ago

### Syntax guided synthesis lecture
Syntax-Guided Synthesis (SyGuS) is a technique that synthesizes programs or expressions meeting a specification while respecting a given syntactic template. It enables automated generation of predicates that refine access control rules without manual intervention.

*How the paper uses it:* Restricter formulates policy tightening as a SyGuS problem to incrementally add conjunctive predicates to permit rules.

▶ [Syntax-Guided Synthesis in SMT: A View from Inside the Solver](https://www.youtube.com/watch?v=e2oTKfbyseI) — Simons Institute for the Theory of Computing · 26:05 · Streamed 5y ago

## Already in your library

- [Rajeev Alur, University of Pennsylvania](https://www.youtube.com/watch?v=1QBs-3bNgk0) — also for: Homomorphism Calculus for User-Defined Aggregations (Dixin Tang)
- [Analyzing Programs with SMT Solvers - Tikhon Jelvis - FUN OCaml 2025](https://www.youtube.com/watch?v=BL8bmtBfd7E) — also for: Parameterized Hardware Design with Latency-Abstract Interfaces (Rachit Nigam)
- [The Boolean Satisfiability Problem and Satisfiability Modulo Theories (SAT / SMT)](https://www.youtube.com/watch?v=zeQASMpuSGE) — also for: SMT-Boosted Security Types for Low-Level MPC (Christian Skalka)
- [Z3 Explained - Satisfiability Modulo Theories & SMT Solvers](https://www.youtube.com/watch?v=EacYNe7moSs) — also for: Understanding CDCL Solvers via Scalability Studies and Proofdoors (Vijay Ganesh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the Restricter tool and its approach to tightening access control policies. The beginner project recreates a core mechanism of policy tightening on a small scale using familiar tools. The intermediate project involves implementing the core SyGuS-based tightening method on a simplified dataset and comparing results to a baseline. The advanced project extends the method to address a stated limitation by incorporating noisy log handling, showcasing research-level problem solving and system design.

### Beginner — Local Policy Rule Tightening Simulator
*Effort: a weekend, ~8 hours*

You build a small simulator that takes a simplified attribute-based access control (ABAC) policy with a few permit rules and a synthetic access log, then incrementally tightens one permit rule by adding conjunctive atomic predicates to remove over-permissions. The tightening logic mimics Restricter's local, rule-level approach by analyzing which permissions were exercised and synthesizing simple conjunctive conditions to exclude unexercised accesses.

**Why it shows you understood the paper:** This project shows you grasp the core idea of incremental tightening by conjunctive predicate addition at the rule level, and how access logs guide removal of over-permissions without breaking legitimate access.

**Grounded in:** Key contribution: An incremental, rule-level tightening approach using SyGuS and SMT solvers to synthesize conjunctive predicates that reduce over-permissiveness (Section 5).

**Tech stack:** Python 3.11, Jupyter Notebook, Z3 SMT solver Python bindings

**Data:** Synthetic small ABAC policy and access log you create to simulate a few users, attributes, and accesses.

**Build it:**

1. Define a small ABAC policy with 2-3 permit rules in a simple JSON or Python dict format.
2. Generate a synthetic access log showing which permissions were exercised and which were not.
3. Implement a function that analyzes the log to identify unexercised permissions per rule.
4. Use Z3 SMT solver to synthesize conjunctive atomic predicates that exclude unexercised permissions while preserving exercised ones.
5. Apply the synthesized predicates to tighten the selected permit rule incrementally.
6. Document the tightening steps and show before/after policy comparisons.

**Ships as:** A GitHub repo with code and a Jupyter notebook demonstrating incremental tightening on a small policy and synthetic log, with clear explanations and output.

**Stretch goal:** Add a simple visualization of policy rules before and after tightening to illustrate the effect of added conjuncts.

### Intermediate — Reimplementation of Restricter's SyGuS-Based Policy Tightening
*Effort: 2-3 weekends*

You implement the core SyGuS-based incremental tightening method described in the paper for a subset of ABAC policies, using Python and the Z3 SMT solver. You apply it to a small realistic ABAC policy and access log dataset you create or simulate, then compare the tightened policy's semantic similarity to the original and a naive baseline that removes unexercised permissions without synthesis.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's main algorithmic approach, understand the role of SyGuS and SMT solvers in predicate synthesis, and evaluate tightening effectiveness quantitatively.

**Grounded in:** Key result: Restricter successfully tightened most deliberately loosened rules, preserving intended privileges and removing over-privileges (Section 7.2).

**Tech stack:** Python 3.11, Z3 SMT solver Python bindings, Pandas (for log processing)

**Data:** Simulated ABAC policy and access log inspired by the paper's case studies (Google Classroom or HotCRP style), created by you to mimic realistic attribute sets and accesses.

**Build it:**

1. Design a small but realistic ABAC policy schema with attributes and permit rules.
2. Simulate an access log with exercised and unexercised permissions for entities in the policy.
3. Implement the incremental tightening algorithm using Z3 to synthesize conjunctive predicates per permit rule.
4. Implement a baseline tightening method that removes unexercised permissions without synthesis.
5. Evaluate and compare the tightened policies using semantic similarity metrics (e.g., overlap of allowed accesses).
6. Write a report summarizing methodology, results, and insights.

**Ships as:** A GitHub repo with code, sample data, and a report notebook showing tightening results and comparison to baseline.

**Stretch goal:** Extend the implementation to handle a small subset of Cedar-like policy features such as attribute hierarchies or environment conditions.

### Advanced — Handling Noisy Access Logs in Policy Tightening
*Effort: 3-4 weeks*

You extend the incremental tightening approach by adding a mechanism to detect and exclude noisy or malicious accesses from the access log before tightening, addressing a key limitation noted in the paper. You design heuristics or statistical filters to identify suspicious log entries, integrate this filtering into the tightening pipeline, and evaluate the impact on policy tightness and correctness on simulated noisy logs.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of Restricter, showing you can critically analyze the method, design improvements, and implement a research-level extension that improves robustness to imperfect logs.

**Grounded in:** Limitation and future direction: Reliance on representative logs and plans to incorporate mechanisms to handle imperfect or noisy access logs (Section 9).

**Tech stack:** Python 3.11, Z3 SMT solver Python bindings, scikit-learn (for anomaly detection heuristics), Pandas

**Data:** Simulated ABAC policy and access logs with injected noisy (accidental or malicious) accesses, created by you.

**Build it:**

1. Reimplement the incremental tightening method from the intermediate project as a baseline.
2. Design and implement heuristics or ML-based filters to detect noisy or suspicious accesses in logs.
3. Integrate log filtering into the tightening pipeline to exclude identified noisy entries.
4. Simulate noisy access logs by injecting random or adversarial accesses into clean logs.
5. Evaluate tightening results with and without noise filtering, measuring policy tightness and preservation of legitimate access.
6. Document the design, implementation, and evaluation results.

**Ships as:** A GitHub repo with extended tightening code, noisy log filtering modules, evaluation scripts, and a detailed README/report explaining the approach and results.

**Stretch goal:** Explore more expressive predicate synthesis beyond conjunctive predicates to further improve tightening quality on noisy logs.
