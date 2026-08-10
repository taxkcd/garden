---
title: "254 · Almost Tight Approximation Hardness and Online Algorithms for Resource Scheduling — Rathish Das"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rathish-das"
source_hash: "14ac687c297ce86991d1c9a105b5288f8f09195548dd4a1c6d439f9bd1051483"
sequence: 254
generator: "outreach-garden: managed"
---

# 254 · Almost Tight Approximation Hardness and Online Algorithms for Resource Scheduling

## At a glance

- **Professor:** Rathish Das
- **Institution:** University of Houston
- **Paper:** [Almost Tight Approximation Hardness and Online Algorithms for Resource Scheduling](https://arxiv.org/pdf/2509.01086)
- **Authors:** Rathish Das, Hao Sun
- **Year:** 2025

## Paper overview

This paper studies the problem of scheduling jobs that have precedence constraints and resource requirements, aiming to minimize the total completion time (makespan). It proves strong hardness results showing that no efficient algorithm can approximate the optimal schedule within certain logarithmic factors unless major complexity theory breakthroughs occur. The paper also presents matching upper and lower bounds for online versions of the problem and introduces a new analytical tool called "chains" to prove these results.

### Why it matters

**Research problem:** The precedence-constrained resource scheduling problem involves scheduling jobs with dependencies and resource constraints to minimize makespan. The key open question is whether polynomial-time constant-factor approximation algorithms exist for this problem, both offline and online.

**Why it matters:** Resource scheduling is critical in parallel computing and cloud computing where limited resources must be efficiently allocated to dependent tasks. Improving scheduling algorithms directly impacts system performance and efficiency.

**Key contributions:**

- Prove no polynomial-time o((log t_max)^α)-factor approximation algorithm exists for offline scheduling unless P=NP.
- Show no polynomial-time o((log n)^α)-factor approximation exists unless NP ⊂ DTIME(2^polylog(n)).
- Establish a connection between resource scheduling and the shortest common supersequence (SCS) problem, linking improvements in scheduling approximation to breakthroughs in SCS.
- Present Ω(log n) and Ω(log t_max) lower bounds on competitive ratio for any randomized online algorithm.
- Design a deterministic online algorithm with O(d + min{log n, log t_max}) competitive ratio matching the lower bounds.

## About the professor

**Rathish Das** — Assistant Professor, Department of Computer Science, University of Houston.

Research interests: systems algorithms, approximation algorithms, randomized algorithms, parallel and distributed algorithms for multiprocessor systems, algorithms for massive data sets, I/O-efficient external-memory algorithms, scheduling, graph problems, computational geometry, computational science problems

### Research links

- [Faculty/profile page](https://www.rathishdas.com)
- [Resolved homepage](https://www.rathishdas.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Complexity Theory
**The paper assumes:** computational complexity theory, hardness of approximation, polynomial-time reductions, complexity classes P and NP, time hierarchy theorems
**Already in this field?** Skip this entirely if you already understand the basics of computational complexity theory, NP-completeness, and approximation hardness proofs.

This background is designed to provide a solid foundation in computational complexity theory, which is essential for understanding the hardness of approximation results and complexity assumptions in the paper on resource scheduling. The rigorous course option offers a deep and structured university-level treatment, while the fast track provides a concise, intuition-focused introduction to the core concepts, suitable for quickly grasping the essentials without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.404J Theory of Computation, Fall 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP60_JNv2MmK3wkOt9syvfQWY) — MIT OpenCourseWare · 25 videos · 32.3h across 25 episodes

**Watch only this:** Episodes 1-16, about 20.5 hours — covering Introduction, Finite Automata, Nondeterminism, Pumping Lemmas, Turing Machines, Church-Turing Thesis, Reducibility, Computation History Method, Recursion Theorem, Time Complexity, P and NP, NP-Completeness, and the Cook-Levin Theorem. Stop after episode 16 to grasp all foundational complexity theory needed for understanding hardness results.

*Why it unblocks this paper:* This MIT OpenCourseWare series covers the full spectrum of computational complexity theory topics relevant to the paper, including NP-completeness, polynomial-time reductions, and hardness proofs, taught in a rigorous academic setting.

*If you want all of it:* 32.3 hours across 25 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Complexity Lectures](https://www.youtube.com/playlist?list=PLdUzuimxVcC0DENcdT8mfhI3iRRJLVjqH) — Computer Science Theory Explained · 90 videos · 7.9h across the first 60 episodes

**Watch only this:** First 23 episodes, about 2.9 hours — covering Complexity Theory Introduction, Turing Machines, Halting Problem, Rice's Theorem, Gödel's Incompleteness, P, NP, Karp Reductions, SAT, and NP-Completeness. This subset covers the essential concepts needed to understand the paper's complexity assumptions and reductions.

*Why it unblocks this paper:* This playlist from Computer Science Theory Explained provides clear, concise explanations of core computational complexity concepts such as NP-completeness, reductions, and the Cook-Levin theorem, ideal for quickly understanding the theoretical underpinnings of the paper's hardness results.

*If you want all of it:* 7.9 hours across 90 episodes (only first 60 are available, but 23 suffice for core concepts)

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on approximation hardness and online algorithms for resource scheduling, start with foundational concepts in approximation hardness and online algorithms competitive analysis to grasp the theoretical limits and performance frameworks. Then study the shortest common supersequence problem due to its key connection to the paper's hardness results. Finally, focus on the core concept of precedence-constrained resource scheduling and the authors' own talk or closely related advanced talks to understand their novel contributions and the chains toolbox.

### Approximation hardness in scheduling *(prerequisite)*
This section covers the theoretical limits on how well scheduling problems can be approximated, including hardness of approximation results and lower bounds. Understanding these results is crucial to appreciate the paper's main hardness theorems and their significance in complexity theory.

*How the paper uses it:* The paper proves strong hardness of approximation results for resource scheduling, making this foundational.

▶ [Approximation hardness and online algorithms for resource ...](https://www.youtube.com/watch?v=34jebpD8hCc) — Simons Institute for the Theory of Computing · 34:46

### Online algorithms competitive analysis *(prerequisite)*
This section introduces the framework for analyzing online algorithms, which make decisions without full future knowledge, and the concept of competitive ratio. This is essential to understand the paper's online algorithm results and matching lower bounds.

*How the paper uses it:* The paper presents tight competitive ratio bounds for online resource scheduling algorithms.

▶ [Lecture 11.1 Competitive analysis for online algorithms](https://www.youtube.com/watch?v=OTO8K9HRq9A) — Thatchaphol Saranurak · 1:08:44

### Shortest common supersequence problem *(prerequisite)*
The shortest common supersequence (SCS) problem is a classical string problem linked to the paper's hardness results via polynomial-time reductions. Understanding SCS helps grasp the conditional hardness and the broader implications of the paper's results.

*How the paper uses it:* The paper establishes a connection between scheduling approximation hardness and the SCS problem.

▶ [DP 31. Shortest Common Supersequence | DP on Strings](https://www.youtube.com/watch?v=xElxAuBcvsU) — take U forward · 26:44

### Precedence constrained resource scheduling
This section focuses on the core problem setting of scheduling jobs with precedence constraints and resource limitations. It provides the necessary background on the problem structure and challenges, directly relating to the paper's main focus.

*How the paper uses it:* The paper studies scheduling with precedence constraints and resource requirements to minimize makespan.

▶ [Scheduling Precedence-Constrained Jobs on Related Machines with Communication Delay](https://www.youtube.com/watch?v=baDAiaoy_0Y) — IEEE FOCS: Foundations of Computer Science · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts to understand the paper on approximation hardness and online algorithms for resource scheduling. Start with foundational ideas about online algorithms and competitive analysis, then learn about the shortest common supersequence problem, followed by approximation hardness in scheduling. Finally, explore the core problem of precedence-constrained resource scheduling and the novel chains toolbox introduced by the paper.

### Online algorithms competitive analysis *(prerequisite)*
Online algorithms make decisions without knowing the future, so competitive analysis compares their performance to an optimal offline algorithm that has full knowledge. This framework helps understand how well algorithms can perform in uncertain, real-time settings.

*How the paper uses it:* The paper designs and analyzes online algorithms for resource scheduling, proving tight competitive ratio bounds.

▶ [Lecture 11.1 Competitive analysis for online algorithms](https://www.youtube.com/watch?v=OTO8K9HRq9A) — Thatchaphol Saranurak · 1:08:44

### Shortest common supersequence problem *(prerequisite)*
The shortest common supersequence (SCS) problem finds the shortest sequence containing given sequences as subsequences. It is a classic string problem with known computational hardness, often solved using dynamic programming.

*How the paper uses it:* The paper links improvements in scheduling approximations to breakthroughs in approximating the SCS problem.

▶ [DP 31. Shortest Common Supersequence | DP on Strings](https://www.youtube.com/watch?v=xElxAuBcvsU) — take U forward · 26:44

### Approximation hardness in scheduling *(prerequisite)*
Approximation hardness results show fundamental limits on how closely we can efficiently approximate optimal solutions for scheduling problems. Understanding these limits clarifies when better algorithms are unlikely without major breakthroughs.

*How the paper uses it:* The paper proves strong hardness of approximation results for precedence-constrained resource scheduling.

▶ [Approximation hardness and online algorithms for resource ...](https://www.youtube.com/watch?v=34jebpD8hCc) — Simons Institute for the Theory of Computing · 34:46

### Precedence constrained resource scheduling
This scheduling problem involves jobs with dependencies (precedence constraints) and limited resources, aiming to minimize total completion time. It models many real-world systems where tasks must be ordered and resources allocated efficiently.

*How the paper uses it:* The paper studies this core problem setting and its complexity and algorithmic bounds.

▶ [[Scheduling seminar] Pascal Van Hentenryck (Georgia Tech ...](https://www.youtube.com/watch?v=PzC0FeLO3UA) — Scheduling seminar · 1:10:38

## Already in your library

- [Competitive Analysis of Online Algorithms (Part 1)](https://www.youtube.com/watch?v=Yi4ItudutsA) — also for: Perimeter Defense using a Turret with Finite Range and Service Times (Eric Torng)
- [Online Algorithms Explained: Competitive Analysis & Real-World Examples](https://www.youtube.com/watch?v=nqoz7JtXtVE) — also for: Perimeter Defense using a Turret with Finite Range and Service Times (Eric Torng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and demonstrating the key theoretical and algorithmic contributions of the paper on resource scheduling with precedence constraints. The beginner project focuses on implementing and visualizing the novel "chains" toolbox concept to grasp the hardness proof technique. The intermediate project involves reimplementing the deterministic online scheduling algorithm with competitive ratio guarantees, comparing it against a simple greedy baseline. The advanced project extends the paper's work by exploring scheduling with multiple resource types, addressing one of the paper's stated limitations and applying the chains toolbox to this more complex setting.

### Beginner — Visualizing Chains for Lower Bound Proofs in Resource Scheduling
*Effort: a weekend, ~8 hours*

You build a small interactive visualization tool that demonstrates the "chains" concept introduced in the paper. This tool will allow users to construct simple precedence-constrained job sets with resource requirements and see how chains are formed to prove lower bounds on scheduling makespan. The visualization helps concretely understand how chains enforce hardness by blocking scheduling progress.

**Why it shows you understood the paper:** By implementing and visualizing chains, you demonstrate comprehension of the paper's novel analytical tool used to prove hardness and competitive ratio lower bounds. A professor would see you grasp the core mechanism behind the paper's theoretical contributions.

**Grounded in:** Section 2 introduces chains and shows how they are used to prove hardness and competitive ratio lower bounds.

**Tech stack:** JavaScript, React, D3.js

**Data:** You simulate small synthetic job sets with precedence constraints and resource requirements as described in the paper's examples.

**Build it:**

1. Implement a React app with a canvas area to add jobs as nodes and draw precedence edges between them.
2. Allow users to specify resource requirements and processing times for each job.
3. Implement logic to identify and highlight chains within the job graph according to the paper's definition.
4. Visualize how chains restrict scheduling order and create bottlenecks that imply lower bounds on makespan.
5. Add explanatory text and simple examples from the paper to guide users through the visualization.

**Ships as:** An interactive web app repository with README explaining chains and demonstrating their role in hardness proofs through user-constructed examples.

**Stretch goal:** Add a feature to simulate a simple scheduling algorithm on the constructed job sets and show how chains cause delays.

### Intermediate — Reimplementing the Deterministic Online Scheduling Algorithm
*Effort: 2 weekends, ~20 hours*

You implement the deterministic online algorithm from Theorem 6.1 that achieves O(d + min{log n, log t_max}) competitive ratio for precedence-constrained resource scheduling. You compare its performance against a naive greedy online scheduler on synthetic job instances with precedence and resource constraints, measuring makespan and competitive ratio.

**Why it shows you understood the paper:** This project shows you can translate the paper's core online algorithmic contribution into working code and empirically verify the theoretical competitive ratio bounds against a baseline. It evidences your grasp of online scheduling challenges and the paper's algorithmic innovations.

**Grounded in:** Theorem 6.1 presents this algorithm and proves its competitive ratio matches the lower bound.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** You generate synthetic job sets with precedence constraints and resource requirements, simulating parameters n, d, and t_max as described in the paper.

**Build it:**

1. Implement data structures to represent jobs with precedence constraints and resource requirements.
2. Implement the deterministic online scheduling algorithm as described in the paper.
3. Implement a baseline greedy online scheduler that schedules jobs as soon as resources and precedence allow.
4. Generate synthetic job instances with varying parameters (number of jobs n, maximum chain length d, max processing time t_max).
5. Run both algorithms on these instances, record makespan and compute competitive ratios.
6. Plot and analyze results comparing the deterministic algorithm and greedy baseline.

**Ships as:** A Jupyter notebook with code, plots, and analysis demonstrating the deterministic online algorithm's performance and competitive ratio compared to greedy scheduling.

**Stretch goal:** Extend the implementation to randomized online algorithms and empirically observe their competitive ratios.

### Advanced — Extending Chains Toolbox and Online Scheduling to Multiple Resource Types
*Effort: 3+ weeks*

You extend the chains toolbox to construct lower bound instances for scheduling problems with multiple resource types, addressing a limitation noted in the paper. You also adapt the deterministic online algorithm to handle multiple resource types and evaluate its competitive ratio on synthetic multi-resource job sets. This explores the paper's future direction of studying scheduling beyond fixed resource types.

**Why it shows you understood the paper:** This project demonstrates deep understanding by tackling a stated open challenge in the paper. It shows you can generalize the paper's theoretical tools and algorithms to a more complex and realistic setting, potentially opening new research directions.

**Grounded in:** Limitations: The hardness results apply primarily to one or fixed number of resource types; extensions to many resource types remain challenging. Future directions: Study scheduling with multiple resource types beyond fixed constants; apply chains toolbox to other resource scheduling problems.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** You generate synthetic job instances with multiple resource types, precedence constraints, and resource demands, extending the paper's single-resource model.

**Build it:**

1. Study the chains toolbox definitions and proofs for single resource type scheduling.
2. Design and implement an extension of chains to multiple resource types, constructing job instances that demonstrate hardness lower bounds.
3. Adapt the deterministic online scheduling algorithm to handle multiple resource types and precedence constraints.
4. Generate synthetic multi-resource job sets with varying parameters.
5. Evaluate the adapted algorithm's competitive ratio and compare against naive baselines.
6. Document theoretical insights, implementation details, and empirical results.

**Ships as:** A comprehensive Jupyter notebook or small codebase with extended chains constructions, adapted online algorithm, experiments, and a detailed README discussing the extension and its implications.

**Stretch goal:** Investigate whether structural properties of specific application domains can improve approximation or online algorithms for multi-resource scheduling, as suggested in the paper's thoughtful question.
