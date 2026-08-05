---
title: "136 · Analytic Procgen with Composable Design Space Expressions — Adam M. Smith"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-adam-m-smith"
source_hash: "575b1e2b92e3c92749d6eee085afa2d679164021564094a190858f0af2ef60b0"
sequence: 136
generator: "outreach-garden: managed"
---

# 136 · Analytic Procgen with Composable Design Space Expressions

## At a glance

- **Professor:** Adam M. Smith
- **Institution:** Univ. of California - Santa Cruz
- **Paper:** [Analytic Procgen with Composable Design Space Expressions](https://doi.org/10.1145/3723498.3723795)
- **Authors:** Ross Mawhorter, Adam M. Smith
- **Year:** 2025

## Paper overview

This paper introduces a new method for designing procedural content generation (procgen) systems for games by representing and manipulating the combined space of possible game designs and player interactions using composable expressions called design–interaction expressions. These expressions are efficiently represented with Binary Decision Diagrams (BDDs), enabling exact computation of output distributions, enforcing constraints, and uniform sampling without expensive enumeration or sampling. The method is demonstrated on multiple domains including platformer terrains, a Biohazard-inspired game, and a Super Metroid item randomizer, showing scalability and practical benefits.

### Why it matters

**Research problem:** Procedural content generation systems produce complex relationships between input parameters and the resulting game designs and player experiences, making it difficult to predict and control the distribution of outputs and player interactions. Existing methods rely on expensive sampling or incomplete enumeration, limiting scalability and expressivity.

**Why it matters:** Understanding and controlling the space of possible game designs and player interactions is crucial for creating meaningful, completable, and diverse game content. Current approaches either generate designs first and then validate interactions or vice versa, often leading to inefficiencies and limited guarantees about output quality and diversity.

**Key contributions:**

- Introduction of design–interaction spaces to jointly represent game designs and player interactions.
- Development of design–interaction expressions using BDDs to efficiently represent and manipulate large combinatorial spaces.
- Algorithms for symbolic breadth-first search over design–interaction spaces to compute reachable states and enforce constraints.
- Demonstration of the method on multiple domains including platformer terrains, Biohazard-inspired levels, and a Super Metroid item randomizer.
- Techniques for scaling to large design spaces via variable ordering, transition function partitioning, and iterative squaring.

## About the professor

**Adam M. Smith** — Assistant Professor, Computational Media, Univ. of California - Santa Cruz.

### Research links

- [Faculty/profile page](https://orcid.org/0000-0002-4519-8423)
- [Identity evidence](https://adamsmith.as)
- [Identity evidence](https://engineering.ucsc.edu/people/amsmith)
- [Identity evidence](https://dblp.org/pid/88/2052)
- [Identity evidence](https://campusdirectory.ucsc.edu/cd_detail?uid=amsmith)
- [Identity evidence](https://adamsmith.as/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Analytic Procgen with Composable Design Space Expressions," start by building a foundation on Binary Decision Diagrams (BDDs), the core data structure enabling efficient representation and manipulation of large combinatorial design spaces. Next, study Symbolic Model Checking to grasp the symbolic breadth-first search algorithms used for state space exploration and constraint enforcement. Then, review the challenges and goals of Procedural Content Generation in games to contextualize the problem domain. Finally, focus on the paper's central concept of design–interaction expressions and the authors' own talk to directly learn their novel approach and results.

### Binary Decision Diagrams *(prerequisite)*
Binary Decision Diagrams (BDDs) are a fundamental data structure used in the paper to efficiently represent and manipulate large sets of Boolean variables encoding game designs and player interactions. Understanding BDDs, their canonical forms, and operations like union and intersection is crucial to grasp how the authors achieve scalable analytic procedural generation.

*How the paper uses it:* The paper implements design–interaction expressions using BDDs to efficiently represent and manipulate large combinatorial spaces.

▶ [Stanford Lecture: Donald Knuth - "Fun With Binary Decision ...](https://www.youtube.com/watch?v=SQE21efsf7Y) — Stanford Online · 1:41:53

### Symbolic Model Checking *(prerequisite)*
Symbolic Model Checking provides the foundational algorithms, such as symbolic breadth-first search, that the paper leverages to explore large state spaces and compute reachable states without explicit enumeration. Familiarity with these techniques will clarify how the authors enforce constraints and perform uniform sampling over design–interaction spaces.

*How the paper uses it:* The authors use symbolic breadth-first search and set operations on BDDs to compute reachable states and enforce constraints.

▶ [Mod-06 Lec-05 Symbolic Model Checking](https://www.youtube.com/watch?v=gFj7qLpbLH0) — nptelhrd · 1:01:51

### Procedural Content Generation in Games *(prerequisite)*
Understanding the challenges and goals of procedural content generation (procgen) in games provides essential context for the paper's motivation. This includes the difficulty of controlling output distributions and ensuring meaningful, completable content, which the paper addresses with analytic methods.

*How the paper uses it:* The paper addresses limitations of existing procedural content generation methods by introducing analytic design–interaction spaces.

▶ [Procedural Generation & Information Games - IEEE CoG 2020 ...](https://www.youtube.com/watch?v=t0GOdWxidUI) — Possibility Space · 19:08

### Design–Interaction Expressions
Design–interaction expressions are the paper’s central concept, representing the combined space of game designs and player trajectories. Understanding this concept is key to appreciating how the authors unify design and interaction modeling to enable exact computation and uniform sampling.

*How the paper uses it:* The paper introduces design–interaction spaces and expressions to jointly represent game designs and player interactions.

▶ [Bill Moggridge: Designing Interactions](https://www.youtube.com/watch?v=kVkQYvN4_HA) — Stanford · 1:24:19

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's approach to analytic procedural content generation, start by learning about procedural content generation in games to grasp the challenges of generating game designs and player interactions. Next, build foundational knowledge of Binary Decision Diagrams (BDDs), the core data structure enabling efficient representation and manipulation of large combinatorial spaces. Then, learn about symbolic model checking, which provides the symbolic search algorithms used to explore design–interaction spaces. Finally, explore the paper's core concept of design–interaction expressions that combine game designs and player trajectories for analytic procedural generation.

### Procedural Content Generation in Games *(prerequisite)*
Procedural content generation (PCG) refers to the automatic creation of game content such as levels, items, or terrains using algorithms. Understanding PCG helps appreciate the challenges in controlling and predicting the diversity and quality of generated game designs and player experiences.

*How the paper uses it:* The paper addresses limitations in current PCG methods by jointly representing game designs and player interactions for better control and scalability.

▶ [An introduction to procedural lock and key dungeon generation](https://www.youtube.com/watch?v=BM_4Z27d4rI) — The Shaggy Dev · 11:41

### Binary Decision Diagrams *(prerequisite)*
Binary Decision Diagrams (BDDs) are data structures that efficiently represent Boolean functions and sets, supporting fast operations like union and intersection. They enable compact representation and manipulation of very large combinatorial spaces without explicit enumeration.

*How the paper uses it:* The paper uses BDDs to implement design–interaction expressions, allowing efficient representation and manipulation of huge design and state spaces.

▶ [Lecture 27: Binary Decision Diagrams (Part I)](https://www.youtube.com/watch?v=zs-6YGs0sqs) — NPTEL IIT Kharagpur · 30:51

### Symbolic Model Checking *(prerequisite)*
Symbolic model checking uses symbolic representations like BDDs to explore and verify properties of large state spaces efficiently. It employs algorithms such as symbolic breadth-first search to compute reachable states and enforce constraints without enumerating all states explicitly.

*How the paper uses it:* The paper applies symbolic breadth-first search and set operations on BDDs to compute reachable states and enforce constraints in design–interaction spaces.

▶ [Mod-06 Lec-05 Symbolic Model Checking](https://www.youtube.com/watch?v=gFj7qLpbLH0) — nptelhrd · 1:01:51

## Already in your library

- [PCG: Introduction, Use Cases, and Production Best Practices ...](https://www.youtube.com/watch?v=TbNZ4GKaTow) — also for: Dream Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes (Julian Togelius)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper "Analytic Procgen with Composable Design Space Expressions." The beginner project introduces you to the core concept of design–interaction spaces and BDDs with a small-scale example. The intermediate project has you reimplement the core symbolic search method on a simplified domain, comparing uniform sampling to a baseline randomizer. The advanced project challenges you to extend the method by exploring automated variable ordering heuristics to improve scalability, addressing a key limitation noted in the paper.

### Beginner — Small-Scale Design–Interaction Space with BDDs
*Effort: a weekend, ~8 hours*

You build a minimal procedural content generation model for a simple platformer level design space encoded as Boolean variables, representing design constraints and player interactions using Binary Decision Diagrams (BDDs). You implement basic set operations on BDDs to represent the design–interaction space and demonstrate uniform sampling of completable designs without enumeration.

**Why it shows you understood the paper:** This project shows you grasp the paper's core idea of representing joint design and interaction spaces symbolically with BDDs, and how this enables exact reasoning and sampling without brute-force enumeration.

**Grounded in:** Introduction of design–interaction spaces to jointly represent game designs and player interactions; Design–interaction expressions are implemented using Binary Decision Diagrams (BDDs) for efficient representation and manipulation.

**Tech stack:** Python 3.11, dd, networkx

**Data:** Synthetic small Boolean design space representing a toy platformer level with a few design variables and player states, created by you.

**Build it:**

1. Learn the basics of Binary Decision Diagrams (BDDs) using a Python BDD library such as 'dd'.
2. Define a small set of Boolean variables representing design parameters and player interaction states for a toy platformer level.
3. Implement design–interaction expressions as BDDs encoding constraints like level completability.
4. Implement set operations (union, intersection) on these BDDs to represent combined design–interaction spaces.
5. Implement uniform sampling from the BDD representing completable designs.
6. Write a README explaining the design space, constraints, and how uniform sampling works.

**Ships as:** A GitHub repo with Python code demonstrating BDD construction, manipulation, and uniform sampling on a small design–interaction space, with clear documentation and example outputs.

**Stretch goal:** Add visualization of the BDD structure and sampled designs to better illustrate the symbolic representation.

### Intermediate — Reimplementation of Symbolic Breadth-First Search for Procgen Constraints
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core symbolic breadth-first search algorithm over design–interaction spaces using BDDs on a simplified procedural content generation domain (e.g., a small grid-based platformer or item randomizer). You compare uniform sampling from the constrained design space against a naive generate-and-test baseline, reporting metrics like fraction of completable designs and output entropy.

**Why it shows you understood the paper:** This project demonstrates you can implement the paper's main algorithmic contribution, symbolic search over BDD-encoded design–interaction spaces, and evaluate its benefits over naive methods quantitatively.

**Grounded in:** Algorithms for symbolic breadth-first search over design–interaction spaces to compute reachable states and enforce constraints; Identified that only a tiny fraction of representable designs are completable, making generate-and-test methods inefficient; Uniform sampling from the design–interaction space yields higher entropy and diversity than typical locally-uniform randomizers.

**Tech stack:** Python 3.11, dd, numpy, matplotlib

**Data:** Synthetic procedural content generation domain with discrete Boolean variables representing design parameters and player states, created by you to simulate a small item randomizer or platformer level.

**Build it:**

1. Review the paper's description of symbolic breadth-first search using BDDs.
2. Implement the transition function and state encoding for a simplified procgen domain with Boolean variables.
3. Implement symbolic BFS using BDD operations to compute reachable states and filter completable designs.
4. Implement uniform sampling from the constrained design space represented by the BDD.
5. Implement a naive generate-and-test baseline that samples designs randomly and tests completability.
6. Compare the fraction of completable designs found and output entropy between the two methods.
7. Document the implementation, results, and insights in a detailed README.

**Ships as:** A GitHub repo with a working symbolic BFS implementation over BDDs for a toy procgen domain, baseline comparison code, quantitative results, and explanatory documentation.

**Stretch goal:** Add a simple visualization of the reachable state space and sampled designs to illustrate the symbolic search process.

### Advanced — Automated Variable Ordering Heuristics for Scaling Design–Interaction BDDs
*Effort: 3+ weeks*

You extend the symbolic BDD-based procgen framework by implementing and evaluating automated or learning-based heuristics for variable ordering to improve BDD size and symbolic search efficiency. You apply this to a moderately complex synthetic design–interaction space and measure the impact on BDD node counts, symbolic BFS iterations, and runtime compared to naive orderings.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of the method's scalability challenges and contributing a practical extension that could facilitate applying the approach to new domains.

**Grounded in:** Scaling requires careful variable ordering and transition function partitioning; Exploring better heuristics or automated methods for variable ordering and transition function transformations to improve scalability.

**Tech stack:** Python 3.11, dd, scikit-learn, numpy, matplotlib

**Data:** Synthetic design–interaction spaces with Boolean variables representing a moderately complex procgen domain, constructed by you to simulate scaling challenges.

**Build it:**

1. Implement baseline symbolic BDD construction and symbolic BFS with a fixed variable ordering.
2. Research and implement automated variable ordering heuristics such as sifting, genetic algorithms, or reinforcement learning approaches.
3. Integrate these heuristics to reorder variables dynamically or prior to BDD construction.
4. Evaluate the impact of different orderings on BDD size, symbolic BFS iterations, and runtime.
5. Analyze and visualize results to identify best-performing heuristics.
6. Write a comprehensive report documenting methods, experiments, and conclusions.

**Ships as:** A GitHub repo containing code for symbolic BDD procgen with automated variable ordering heuristics, experimental evaluation scripts, and a detailed README/report discussing scalability improvements.

**Stretch goal:** Extend the approach to also optimize transition function partitioning or explore hybrid symbolic-numeric methods for continuous variables.
