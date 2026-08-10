---
title: "284 · Mutation Without Variation: Convergence Dynamics in LLM-Driven Program Evolution — Uri Wilensky"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-uri-wilensky"
source_hash: "708bfe9754f4931258b225ce193712e051b01afe1cee15d7e888e5601b2fd21a"
sequence: 284
generator: "outreach-garden: managed"
---

# 284 · Mutation Without Variation: Convergence Dynamics in LLM-Driven Program Evolution

## At a glance

- **Professor:** Uri Wilensky
- **Institution:** Northwestern University
- **Paper:** [Mutation Without Variation: Convergence Dynamics in LLM-Driven Program Evolution](https://arxiv.org/abs/2606.05408)
- **Authors:** Can Gurkan, Forrest Stonedahl, Uri Wilensky
- **Year:** 2026

## Paper overview

This paper investigates how large language models (LLMs) behave when used repeatedly to mutate computer programs without any selection pressure. The authors find that instead of exploring many new program variations, LLM-driven mutations tend to converge on a small set of structural forms, cycling through similar programs repeatedly. This convergence is influenced by prompt wording and model choice but is a robust phenomenon across many conditions. The study highlights a fundamental bias in LLM mutation operators that limits open-ended exploration in program evolution.

### Why it matters

**Research problem:** When LLMs are used repeatedly as mutation operators in program evolution, do they generate diverse new program variants or do they converge toward a limited set of structural forms? Understanding this intrinsic behavior is crucial because it affects the ability of LLM-driven evolutionary systems to explore program space effectively.

**Why it matters:** LLM-driven mutation operators are increasingly used in evolutionary computation, automated scientific discovery, and program synthesis. If these operators inherently bias the search toward structural homogeneity, they may limit the diversity and novelty of generated programs, undermining the potential of such systems to sustain open-ended innovation.

**Key contributions:**

- Introduced a framework to study LLM-driven mutation as a dynamical system independent of selection pressure.
- Provided empirical evidence that LLM-driven mutation chains converge toward restricted attractor regions in program space.
- Demonstrated that convergence is more severe at the structural level than at the terminal substitution level.
- Showed that convergence dynamics vary with prompt wording and model choice but are robust across conditions.
- Compared LLM mutation to classical GP mutation, showing that classical GP maintains much higher diversity.

## About the professor

**Uri Wilensky** — Lorraine H. Morton professor of Learning Sciences, Computer Science and Complex Systems, Northwestern University.

### Research links

- [Faculty/profile page](https://ccl.northwestern.edu/Uri.shtml)
- [Lab website](https://ccl.northwestern.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Dynamical Systems Theory
**The paper assumes:** dynamical systems theory, attractors, state space analysis, and cycle detection
**Already in this field?** Skip this entirely if you already understand the basics of dynamical systems, including attractors and cycle behavior in discrete state spaces.

This background covers Dynamical Systems Theory, essential for understanding the paper's modeling of LLM-driven mutation as a dynamical system with attractors, cycles, and convergence behavior. The rigorous course option offers a deep, university-level introduction to linear dynamical systems, while the fast track provides a concise, intuition-focused series on iteration and discrete dynamical systems. Choose the course for a thorough foundation or the fast track for a quicker conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Lecture Collection | Linear Dynamical Systems](https://www.youtube.com/playlist?list=PL06960BA52D0DB32B) — Stanford · 20 videos · 24.4h across 20 episodes

**Watch only this:** Lectures 1-6, about 7.3 hours — covering introduction, state space, linear system basics, and foundational concepts necessary to understand attractors and system dynamics.

*Why it unblocks this paper:* Stanford's 'Lecture Collection | Linear Dynamical Systems' is a comprehensive university course covering foundational concepts in linear dynamical systems, including state space, attractors, and system behavior, directly relevant to the paper's dynamical systems framework for LLM mutation chains.

*If you want all of it:* 24.4 hours across 20 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Dynamical Systems](https://www.youtube.com/playlist?list=PLmU0FIlJY-MkI5q6KDdH9x6cUTg5sVqoc) — Bill Kinney · 17 videos · 9.8h across 17 episodes

**Watch only this:** Episodes 1-6, about 3.4 hours — covering iteration, dynamics, Newton's method, and cobweb plots to build intuition on discrete dynamical systems and cycles.

*Why it unblocks this paper:* Bill Kinney's 'Introduction to Dynamical Systems' playlist offers a clear, visual, and intuition-first introduction to iteration, discrete dynamical systems, and cycles, which aligns well with the paper's focus on mutation chain dynamics and cyclic attractors.

*If you want all of it:* 9.8 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Mutation Without Variation: Convergence Dynamics in LLM-Driven Program Evolution," start by building foundational knowledge in evolutionary computation mutation operators, large language models in program synthesis, dynamical systems theory, and genetic programming subtree mutation. These prerequisites provide the necessary background on mutation mechanisms, LLM code generation, and the dynamical systems framework used in the paper. Finally, focus on the core concept of LLM-driven mutation convergence dynamics, which is central to the paper's contributions and findings.

### Evolutionary computation mutation operators *(prerequisite)*
This section covers the fundamental mutation mechanisms used in evolutionary algorithms, including genetic algorithms and genetic programming. Understanding these operators is essential to appreciate the baseline classical GP mutation used for comparison in the paper.

*How the paper uses it:* The paper compares LLM-driven mutation to classical genetic programming subtree mutation to highlight differences in diversity and convergence.

▶ [Lecture 1F (2026-01-29): Operators of the Genetic Algorithm](https://www.youtube.com/watch?v=OUm-t5ODr54) — Ted Pavlic · 1:15:45

### Large language models in program synthesis *(prerequisite)*
This section introduces how large language models generate and modify code, which is critical for understanding the behavior of LLM-driven mutation operators. It provides insights into the capabilities and limitations of LLMs in program synthesis contexts.

*How the paper uses it:* The paper investigates how LLMs behave as mutation operators in program evolution, affecting program diversity and convergence.

▶ [Large Language Models for Program Optimization](https://www.youtube.com/watch?v=nvxeEEmc1ZM) — Stanford MLSys Seminars · 1:11:17

### Dynamical systems theory *(prerequisite)*
Dynamical systems theory provides the mathematical framework to analyze how repeated LLM mutations evolve over time and converge to attractors. This background is crucial to understand the paper's approach of modeling mutation chains as dynamical systems.

*How the paper uses it:* The authors model LLM-driven mutation as a dynamical system over program space to analyze convergence and attractor structures.

▶ [History and Preliminaries - Dynamical Systems | Lecture 1](https://www.youtube.com/watch?v=Gw19VCtHYcs) — Jason Bramburger · 29:30

### Genetic programming subtree mutation *(prerequisite)*
This section focuses on classical genetic programming subtree mutation, the standard mutation operator used in evolutionary computation. Understanding this operator is necessary to grasp the baseline diversity and convergence behavior against which LLM mutation is compared.

*How the paper uses it:* Classical GP subtree mutation serves as the baseline for comparing diversity and convergence with LLM-driven mutation in the paper.

▶ [Machine Learning Control: Genetic Programming](https://www.youtube.com/watch?v=K2Hl7m2Ty_4) — Steve Brunton · 12:06 · 8 years ago

### LLM-driven mutation convergence dynamics *(the paper's own talk)*
This core section addresses the central phenomenon studied in the paper: how repeated LLM-driven mutations lead to structural convergence and limit program diversity. It is essential to understand this concept to appreciate the paper's contributions and implications.

*How the paper uses it:* The paper's main contribution is the empirical and theoretical analysis of convergence dynamics in LLM-driven program mutation chains.

▶ [When AI Discovers the Next Transformer — Robert Lange](https://www.youtube.com/watch?v=EInEmGaMRLc) — Machine Learning Street Talk · 1:18:07

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand how large language models (LLMs) behave as mutation operators in evolutionary program synthesis. Starting with the basics of evolutionary computation mutation operators, it then covers how LLMs generate and modify code, followed by an introduction to dynamical systems theory to grasp convergence dynamics. Finally, it culminates in the core concept of LLM-driven mutation convergence dynamics, explaining the paper's main findings about structural convergence limiting diversity.

### Evolutionary computation mutation operators *(prerequisite)*
Learn what mutation operators are in evolutionary algorithms, how they introduce variation by modifying candidate solutions, and why they are crucial for exploring solution spaces. This foundation helps understand the baseline classical mutation methods against which LLM-driven mutations are compared.

*How the paper uses it:* The paper compares LLM mutation operators to classical genetic programming subtree mutation to evaluate diversity and convergence.

▶ [Lecture 1F (2026-01-29): Operators of the Genetic Algorithm](https://www.youtube.com/watch?v=OUm-t5ODr54) — Ted Pavlic · 1:15:45

### Large language models in program synthesis *(prerequisite)*
Understand how large language models generate and modify code, their capabilities in program synthesis, and the challenges involved. This knowledge is essential to grasp how LLMs act as mutation operators in program evolution.

*How the paper uses it:* The paper studies repeated LLM-driven mutations on programs, so understanding LLM code generation is critical.

▶ [Large Language Models for Program Optimization](https://www.youtube.com/watch?v=nvxeEEmc1ZM) — Stanford MLSys Seminars · 1:11:17

### Dynamical systems theory *(prerequisite)*
Get an intuitive introduction to dynamical systems, which describe how systems evolve over time according to rules. This framework is used in the paper to model mutation chains as trajectories in program space and analyze convergence behavior.

*How the paper uses it:* The authors model LLM-driven mutation chains as a dynamical system to analyze convergence and attractor structures.

▶ [® Intro to .. Dynamical Systems | Mathematics of Change](https://www.youtube.com/watch?v=vH5bIknlmv8) — Staiblocks · 9:28

### Genetic programming subtree mutation *(prerequisite)*
Learn about subtree mutation in genetic programming, a classical mutation operator that modifies program trees by replacing subtrees. This method serves as a baseline for comparison with LLM-driven mutation in the paper.

*How the paper uses it:* Classical GP subtree mutation is used as a baseline to show that it maintains higher diversity than LLM mutation.

▶ [Machine Learning Control: Genetic Programming](https://www.youtube.com/watch?v=K2Hl7m2Ty_4) — Steve Brunton · 12:06 · 8 years ago

## Already in your library

- [2B - Mutation rates & natural genetic variation](https://www.youtube.com/watch?v=yMsgn31mAjw) — also for: Unprecedented female mutation bias in the aye-aye, a highly unusual lemur from Madagascar (Matthew W. Hahn)
- [IEE/CSE 598: Lecture 1D (2020-01-27) - Implementing the Genetic Algorithm, Part 2](https://www.youtube.com/watch?v=grnYaRMMXwQ) — also for: A Neutral Rewrite Mutation Operator for Genetic Programming applied to Boolean Domain Problems (Alessio Gaspar)
- [Lecture 1 | Introduction to Linear Dynamical Systems](https://www.youtube.com/watch?v=bf1264iFr-w) — also for: Decomposed Linear Dynamical Systems (dLDS) for learning the latent components of neural dynamics (Adam Charles)
- [Differential Equations and Dynamical Systems: Overview](https://www.youtube.com/watch?v=9fQkLQZe3u8) — also for: LLM-ODE: Data-driven Discovery of Dynamical Systems with Large Language Models (Jonathan Gryak)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Mutation Without Variation: Convergence Dynamics in LLM-Driven Program Evolution." Starting with a beginner-level reproduction of a core convergence metric using familiar tools, moving to an intermediate-level reimplementation and comparison of LLM-driven mutation versus classical genetic programming using the authors' released code, and culminating in an advanced project that extends the paper by incorporating behavioral diversity measures to address a stated limitation.

### Beginner — LLM Mutation Chain Structural Diversity Visualization
*Effort: a weekend, ~8 hours*

You build a script that simulates or ingests a short mutation chain of programs represented as abstract syntax trees (ASTs) in a constrained Lisp-like DSL and computes structural diversity metrics such as the count of unique skeletons visited over the chain. You then visualize the mutation chain's structural convergence using plots similar to those in the paper, such as the number of unique skeletons over mutation steps.

**Why it shows you understood the paper:** This project shows you grasp the core phenomenon of structural convergence in LLM-driven mutation chains and can operationalize the key metric of unique skeleton count over mutation steps, a central empirical result of the paper.

**Grounded in:** Median LLM mutation chains visit about 10 unique skeletons over 300 steps, demonstrating convergence toward restricted attractor regions in program space.

**Tech stack:** Python 3.11, matplotlib, networkx

**Data:** You simulate mutation chains using simple Lisp-like program representations or extract short example chains from the paper's figures or text, as no public dataset is provided.

**Build it:**

1. Implement a simple representation of Lisp-like programs as nested lists or AST nodes in Python.
2. Create or hardcode a short mutation chain sequence of programs illustrating structural changes.
3. Write code to extract program skeletons by removing terminal details and count unique skeletons visited.
4. Plot the number of unique skeletons visited versus mutation step using matplotlib.
5. Document the code and explain how the visualization relates to the paper's convergence findings.

**Ships as:** A GitHub repository with Python scripts and a README showing plots of structural diversity over mutation steps, reproducing a key convergence metric from the paper.

**Stretch goal:** Add terminal-level diversity metrics and compare their trends to structural diversity in the same chain.

### Intermediate — Reproducing and Comparing LLM and Classical GP Mutation Diversity
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' released codebase at https://github.com/can-gurkan/lmca to reproduce mutation chains in the constrained DSL. You then implement a baseline classical genetic programming subtree mutation operator and run comparative mutation chains. You compute and plot structural and program-level diversity metrics over mutation steps, replicating the paper's comparison results.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' code, understand their experimental setup, and reproduce their core empirical comparison between LLM-driven mutation and classical GP mutation, a key contribution of the paper.

**Grounded in:** Classical GP subtree mutation maintains much higher program and structural diversity than LLM mutation; GP chains visit approximately 270 unique programs and 143 unique skeletons per 300-step chain.

**Tech stack:** Python 3.11, PyTorch (if required by authors' code), matplotlib, networkx, Git

**Data:** Mutation chains generated by the authors' code on the constrained Lisp-like DSL; no external dataset needed.

**Build it:**

1. Clone and set up the authors' lmca repository following their instructions.
2. Run experiments to generate LLM-driven mutation chains and extract diversity metrics.
3. Implement a classical GP subtree mutation operator for the same DSL.
4. Run classical GP mutation chains and collect diversity metrics.
5. Plot and compare the diversity metrics (unique programs and skeletons) over mutation steps for both methods.
6. Write a README explaining the reproduction and comparison results, linking back to the paper's findings.

**Verified links from the paper:**

- <https://github.com/can-gurkan/lmca> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run and compare LLM and classical GP mutation chains, plots reproducing the paper's diversity comparisons, and documentation.

**Stretch goal:** Experiment with varying prompt wording in the LLM mutation to observe effects on convergence severity.

### Advanced — Incorporating Behavioral Diversity to Mitigate LLM Mutation Convergence
*Effort: 3-4 weeks*

You extend the authors' framework by adding behavioral evaluation of programs in mutation chains, measuring functional diversity alongside structural diversity. You implement a simple behavioral metric (e.g., program output traces or test case results) for the DSL programs and integrate it into the mutation process as a diversity preservation mechanism or selection pressure. You analyze whether this reduces structural convergence and sustains exploration.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by moving beyond genotypic analysis to incorporate behavioral diversity, demonstrating deep comprehension of the paper and ability to extend its methodology toward open-ended exploration.

**Grounded in:** Limitation: Analysis is purely genotypic; behavioral diversity of programs was not assessed. Future direction: Incorporate behavioral evaluation to assess functional diversity alongside structural diversity.

**Tech stack:** Python 3.11, PyTorch (if needed), matplotlib, networkx, Git, pytest or custom test harness

**Data:** Mutation chains generated from the authors' codebase extended with behavioral evaluation; no external dataset needed.

**Build it:**

1. Understand and set up the authors' lmca codebase and mutation chain generation.
2. Design and implement a behavioral evaluation function for DSL programs (e.g., execute on test inputs and record outputs).
3. Integrate behavioral diversity metrics into mutation acceptance criteria or as a selection pressure.
4. Run mutation chains with behavioral diversity preservation and collect structural and behavioral diversity metrics.
5. Analyze and visualize whether behavioral diversity reduces structural convergence compared to baseline LLM mutation.
6. Document the methodology, results, and implications for mitigating convergence bias.

**Verified links from the paper:**

- <https://github.com/can-gurkan/lmca> — released by the paper's authors

**Ships as:** A GitHub repository with extended mutation code incorporating behavioral diversity, analysis scripts, visualizations, and a detailed README discussing the impact on convergence dynamics.

**Stretch goal:** Explore prompt engineering strategies combined with behavioral diversity to further sustain exploration.
