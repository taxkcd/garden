---
title: "323 · Parallel RAM from Cyclic Circuits — David Heath"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-heath"
source_hash: "2c91af2f73b275e6b565d820f0aaf573f34690eb8411194217f4243bc043dfeb"
sequence: 323
generator: "outreach-garden: managed"
---

# 323 · Parallel RAM from Cyclic Circuits

## At a glance

- **Professor:** David Heath
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [Parallel RAM from Cyclic Circuits](https://arxiv.org/abs/2309.05133)
- **Authors:** David Heath
- **Year:** 2023

## Paper overview

This paper presents a new theoretical construction that simulates parallel random access machines (PRAMs) using combinational Boolean circuits that allow cycles, called cyclic circuits. The simulation achieves only polylogarithmic overhead in size and delay compared to the original PRAM, showing that cyclic circuits can efficiently implement powerful parallel computation models.

### Why it matters

**Research problem:** Known simulations of PRAM by Boolean circuits incur significant polynomial blow-up in size and delay due to repeated simulation of large shared memory accesses. The problem is to find a more efficient circuit model and simulation that reduces this overhead.

**Why it matters:** PRAM is a central theoretical model for parallel algorithms but is often considered unrealistic to implement due to synchronization challenges. Showing that PRAM can be efficiently simulated by cyclic Boolean circuits suggests theoretical feasibility of powerful parallel machines and bridges the gap between parallel algorithms and circuit complexity.

**Key contributions:**

- Introduces cyclic Boolean circuits as a model to simulate PRAM with only polylogarithmic overhead.
- Constructs a combinational cyclic circuit with size O(W(n)·log^4 n) and delay T·O(log^3 n) simulating a PRAM program with work W(n) and runtime T.
- Defines the parallel single access machine (PSAM) model as an intermediate step to simulate PRAM with single-use memory cells.
- Develops dynamically programmable permutation networks and filters to coordinate compute units and simulate shared memory accesses.
- Shows near equivalence in power between PRAM and cyclic circuits up to polylogarithmic factors.

## About the professor

**David Heath** — Assistant Professor, Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: Secure Multiparty Computation (MPC), Zero Knowledge proofs, Oblivious Data Structures, algorithmic techniques for reducing the cost of powerful cryptographic methods

### Research links

- [Faculty/profile page](https://daheath.web.illinois.edu)
- [Google Scholar](https://scholar.google.com/citations?user=NdoR8P8AAAAJ&hl=en)
- [ORCID](https://orcid.org/0000-0001-9589-5182)
- [DBLP](https://dblp.org/pid/19/72.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Parallel RAM from Cyclic Circuits,' start by grounding yourself in the foundational models and techniques it builds upon: the Parallel Random Access Machine (PRAM) model, permutation networks used for routing in parallel computing, and combinational circuit complexity which underpins the theoretical analysis of circuit size and delay. After establishing these prerequisites, focus on the paper's core innovation: cyclic Boolean circuits as a model for efficient PRAM simulation. This learning path prioritizes rigorous academic talks and university lectures to provide a comprehensive and advanced understanding.

### Parallel Random Access Machine PRAM *(prerequisite)*
PRAM is the fundamental parallel computation model that the paper aims to simulate efficiently. Understanding PRAM's variants and how it models parallelism and shared memory access is essential to grasp the challenges and significance of the paper's contributions.

*How the paper uses it:* The paper constructs cyclic circuits to simulate PRAM programs with polylogarithmic overhead.

▶ [Parallel algorithm lecture 5 : PRAM Models](https://www.youtube.com/watch?v=wnPEEzvJ1d4) — NET Forum · 16:06 · 7 years ago

### Permutation Networks in Parallel Computing *(prerequisite)*
Permutation networks are key techniques for routing and coordinating memory accesses in parallel architectures. The paper leverages dynamically programmable permutation networks to enable efficient simulation of shared memory in cyclic circuits.

*How the paper uses it:* Dynamic permutation networks are used to coordinate compute units and simulate shared memory accesses in the cyclic circuit construction.

▶ [Butterfly Network in hindi (permutation network)](https://www.youtube.com/watch?v=ZptgKPjQKlg) — Johny Code · 7 years ago

### Combinational Circuit Complexity *(prerequisite)*
Combinational circuit complexity provides the theoretical foundation for analyzing circuit size and delay overheads, which are central metrics in the paper's simulation results. Understanding these concepts helps in appreciating the significance of the polylogarithmic overhead achieved.

*How the paper uses it:* The paper analyzes the size and delay of cyclic circuits simulating PRAM using combinational circuit complexity theory.

▶ [Circuit Complexity and Connections I](https://www.youtube.com/watch?v=1S8fKlR28Go) — Simons Institute for the Theory of Computing · 57:46 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Parallel RAM from Cyclic Circuits,' start by learning the fundamental parallel computation model PRAM, which the paper simulates efficiently. Next, grasp the basics of combinational circuit complexity to appreciate circuit size and delay overheads. Then, study permutation networks as a key technique for routing and memory coordination in the simulation. Finally, explore the core concept of Boolean circuits with cycles, which enables the novel cyclic circuit model central to the paper's contribution.

### Parallel Random Access Machine PRAM *(prerequisite)*
PRAM is a theoretical model for parallel computation where multiple processors operate synchronously and share a common memory. Understanding PRAM variants and how processors access shared memory is essential to grasp the challenges the paper addresses in simulating PRAM efficiently.

*How the paper uses it:* The paper simulates PRAM programs using cyclic Boolean circuits with polylogarithmic overhead.

▶ [Parallel algorithm lecture 5 : PRAM Models](https://www.youtube.com/watch?v=wnPEEzvJ1d4) — NET Forum · 16:06 · 7 years ago

### Combinational Circuit Complexity *(prerequisite)*
Combinational circuits compute outputs solely based on current inputs without memory or feedback loops. Learning about circuit size and delay helps understand the complexity measures the paper aims to optimize in simulating PRAM.

*How the paper uses it:* The paper analyzes the size and delay overhead of cyclic circuits simulating PRAM.

▶ [Combinational Circuits: Adders, Subtractors, Multiplexer, Demultiplexer, Encoder & Decoder for BCA](https://www.youtube.com/watch?v=tvXOTfBnPtM) — One Bit Extra · 1:42:34 · 10 months ago

### Permutation Networks in Parallel Computing *(prerequisite)*
Permutation networks are structured interconnection networks that route data between processors or memory units efficiently. They are crucial for coordinating memory accesses and dynamic routing in parallel computations.

*How the paper uses it:* The paper uses dynamically programmable permutation networks to coordinate compute units and simulate shared memory accesses.

▶ [Butterfly Network in hindi (permutation network)](https://www.youtube.com/watch?v=ZptgKPjQKlg) — Johny Code · 7 years ago

## Already in your library

- [Parallel Computing: PRAM Model Explained for Beginners](https://www.youtube.com/watch?v=LBaOFgPEF3k) — also for: Easy PRAM-based high-performance parallel programming with ICE (Rajeev Barua)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Parallel RAM from Cyclic Circuits" by David Heath. The beginner project focuses on implementing a core mechanism from the paper using your existing programming skills. The intermediate project involves reimplementing the main simulation method on a small scale and comparing it to a simple baseline, introducing you to new concepts like permutation networks. The advanced project tackles one of the paper's stated limitations by exploring a practical hardware-oriented simulation or an extension toward oblivious execution, showing initiative toward research-level challenges.

### Beginner — Simulate a Small Cyclic Boolean Circuit with Unique Assignment
*Effort: a weekend, ~8 hours*

You build a small software simulator in Python or C++ that models a cyclic Boolean circuit with a few gates and cycles, ensuring it computes a unique output assignment for given inputs. The simulator will implement the legality condition from the paper (Definition 3) that guarantees combinational semantics despite cycles.

**Why it shows you understood the paper:** This project shows you grasp the novel concept of cyclic Boolean circuits and the key property that makes them combinational despite cycles, which is central to the paper's approach to simulating PRAM.

**Grounded in:** Definition 3 defines legal cyclic circuits as those with exactly one valid assignment per input, ensuring combinational semantics.

**Tech stack:** Python 3.11, C++17 (optional)

**Data:** No external data needed; you create small example circuits manually.

**Build it:**

1. Study the definition of legal cyclic circuits and unique assignment from the paper.
2. Design a data structure to represent Boolean gates and their connections, allowing cycles.
3. Implement a solver that, given input values, finds the unique consistent output assignment or reports none.
4. Test your simulator on small example circuits with cycles, verifying unique outputs.
5. Write a README explaining the connection to the paper's cyclic circuit model.

**Ships as:** A small codebase simulating cyclic Boolean circuits with tests and a README linking the implementation to the paper's legality condition.

**Stretch goal:** Extend the simulator to visualize the circuit graph and the fixed-point assignment process.

### Intermediate — Reimplement PSAM Simulation of PRAM with Dynamic Permutation Networks
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the paper's core simulation: a parallel single access machine (PSAM) simulator that uses a dynamic permutation network to coordinate memory accesses from multiple compute units. You compare the overhead of your simulation to a naive PRAM simulation baseline in terms of simulated steps or latency.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's main technical contribution: using PSAM and dynamic permutation networks to efficiently simulate PRAM with polylogarithmic overhead, and you can implement and evaluate these concepts practically.

**Grounded in:** The author constructs a combinational cyclic circuit simulating PRAM using the PSAM model and dynamic permutation networks to coordinate compute units and memory accesses.

**Tech stack:** Python 3.11, C++17 (optional), Jupyter Notebook (for reporting)

**Data:** No external dataset; you simulate small PRAM programs with synthetic memory access patterns.

**Build it:**

1. Implement a basic PRAM simulator supporting concurrent reads and writes with associative conflict resolution.
2. Implement the PSAM model with single-use memory cells and binary tree data structures as described in the paper.
3. Build a dynamic permutation network module that routes memory requests from compute units to PSAM memory cells.
4. Simulate a small PRAM program using your PSAM and permutation network simulation, measuring overhead.
5. Compare runtime and work metrics against the naive PRAM simulation baseline.
6. Document your design choices, results, and relate them to the paper's Theorem 1.

**Ships as:** A code repository with simulators for PRAM and PSAM with permutation networks, a Jupyter notebook reporting overhead metrics, and a README connecting the implementation to the paper's core simulation.

**Stretch goal:** Add support for dynamic parallelism with compute units activating zero, one, or two children as in the paper's model.

### Advanced — Prototype Hardware-Oriented Simulation of Cyclic Circuits for Efficient Parallel Memory Access
*Effort: 3+ weeks*

You develop a prototype software framework that simulates cyclic Boolean circuits with cycles, focusing on modeling the dynamic permutation networks and filters for memory access coordination in a way that could inform practical hardware implementation. You explore optimizations to reduce the polylogarithmic overhead and analyze feasibility for hardware realization.

**Why it shows you understood the paper:** This project addresses the paper's open challenge of practical hardware implementation of cyclic circuits and attempts to improve or analyze overhead factors, demonstrating research-level engagement with the paper's limitations and future directions.

**Grounded in:** Practical implementation and hardware realization of cyclic circuits with cycles remain open challenges; future directions include exploring hardware implementations and reducing overhead.

**Tech stack:** Python 3.11, C++17, Docker (optional for environment), Jupyter Notebook

**Data:** Synthetic PRAM programs and memory access patterns generated to stress test the simulation.

**Build it:**

1. Review the paper's description of dynamic permutation networks and filters for memory coordination.
2. Design a modular simulator that models cyclic circuits with these components, emphasizing hardware-friendly abstractions.
3. Implement optimizations or alternative designs for permutation networks to reduce overhead.
4. Run experiments simulating PRAM workloads, measuring size and delay overheads.
5. Analyze results to identify bottlenecks and potential hardware feasibility.
6. Prepare a detailed report discussing your findings, limitations, and connections to the paper's future directions.

**Ships as:** A prototype simulation framework with experiments and a comprehensive report discussing hardware feasibility and overhead reduction strategies related to the paper.

**Stretch goal:** Extend the prototype to support oblivious execution for secure computation as suggested in the paper's future directions.
