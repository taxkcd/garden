---
title: "136 · Analytic Procgen with Composable Design Space Expressions — Adam M. Smith"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-adam-m-smith"
source_hash: "18cb651c84aa7e3e1fa904d503116d8d66dab7b03a9904a2a833c83b97c4f2bd"
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
