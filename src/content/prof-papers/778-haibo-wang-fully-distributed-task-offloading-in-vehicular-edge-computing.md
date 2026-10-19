---
title: "778 · Fully Distributed Task Offloading in Vehicular Edge Computing — Haibo Wang"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-haibo-wang"
source_hash: "f77d234571cf8a3738182e68037f34df0565b91520bdcd934281922766c41cb4"
sequence: 778
generator: "outreach-garden: managed"
---

# 778 · Fully Distributed Task Offloading in Vehicular Edge Computing

## At a glance

- **Professor:** Haibo Wang
- **Institution:** University of Kentucky
- **Paper:** [Fully Distributed Task Offloading in Vehicular Edge Computing](https://doi.org/10.1109/tvt.2023.3331344)
- **Authors:** Qianpiao Ma, Hongli Xu, Haibo Wang, Yang Xu, Qingmin Jia, Chunming Qiao
- **Year:** 2024

## Paper overview

This paper addresses the challenge of efficiently offloading computational tasks from vehicles to nearby roadside units (RSUs) in vehicular edge computing (VEC) systems. It proposes a fully distributed task offloading scheme that allows vehicles to make real-time decisions based only on local information from neighboring RSUs, overcoming issues of resource constraints, high mobility, and large network scale. The scheme uses iterative algorithms that converge to globally optimal solutions, significantly reducing task response times compared to existing methods.

### Why it matters

**Research problem:** How to design an efficient, scalable, and real-time task offloading decision-making mechanism in vehicular edge computing that handles resource constraints, high vehicle mobility, and large-scale infrastructure without relying on centralized controllers.

**Why it matters:** Vehicular networks generate large volumes of computation-intensive tasks that require timely processing to support intelligent transportation applications like path planning and vehicle recognition. Traditional centralized offloading methods suffer from slow decision-making and single points of failure, while existing distributed methods either have high complexity or suboptimal performance. Efficient task offloading is critical to reduce response times, alleviate network congestion, and improve overall system performance in dynamic vehicular environments.

**Key contributions:**

- Formulation of a delay-optimal task offloading problem in VEC considering computation and energy constraints.
- Proposal of a fully distributed task offloading scheme where vehicles make decisions based only on neighboring RSU information, improving scalability.
- Development of two vehicle-side iterative algorithms (greedy-based and convex optimization-based) with theoretical proof of convergence to global optimum.
- Extensive large-scale simulations demonstrating significant reduction in average task response time and decision-making time compared to existing algorithms.
- Introduction of a combined algorithm (FDTO-VC) that adaptively switches between the two vehicle-side algorithms to balance convergence speed and computational complexity.

## About the professor

**Haibo Wang** — Assistant Professor, Department of Computer Science, University of Kentucky.

Research interests: Network traffic measurement and monitoring, Data sketches and streaming algorithms, Edge-cloud computing and Internet of Things, Network management and optimization

### Research links

- [Faculty/profile page](http://haibo.pro)
- [Professor website](http://haibo.pro/index.html)
- [Google Scholar](https://scholar.google.com/citations?user=FUNoAkEAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization
**The paper assumes:** convex optimization theory, convex analysis, iterative optimization algorithms, convergence proofs
**Already in this field?** Skip this entirely if you already understand convex optimization fundamentals and iterative solution methods for convex problems.

This background focuses on convex optimization, which is essential to understand the core vehicle-side algorithm (FDTO-VX) in the paper. The rigorous course option provides a deep, formal foundation in convex optimization theory and methods, suitable for readers who want a thorough understanding. The fast track offers a concise, intuition-driven introduction to convex optimization concepts, ideal for readers who need a quicker but still solid grasp of the subject to follow the paper's algorithmic approach.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Jan 2021 - Optimization from fundamentals](https://www.youtube.com/playlist?list=PLOzRYVm0a65dcrQ9lNthjWtnqp1hYcusH) — NPTEL IIT Bombay · 70 videos · 25.0h across the first 60 episodes

**Watch only this:** Lectures 7A, 7B, 7C (Transformation of optimization problems - I, II, III) and Lectures 8A, 8B (Convex Analysis - I, II), about 3 hours 15 minutes total — these cover convex problem formulation and analysis critical for understanding the paper's algorithm.

*Why it unblocks this paper:* This NPTEL IIT Bombay course 'Optimization from fundamentals' covers convex analysis and optimization with detailed mathematical rigor, matching the theoretical depth required to understand the paper's convex optimization-based vehicle algorithm and its convergence proofs.

*If you want all of it:* About 25 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Convex Analysis and Optimization](https://www.youtube.com/playlist?list=PLiNGnnotnLOeYieGiDCOsdwI9ogWI4D3j) — Marcelo Oliveira · 18 videos · 11.1h across 18 episodes

**Watch only this:** Episodes 1 and 2 (Lecture 1 | Convex Optimization I (Stanford), Lecture 2 | Convex Optimization I (Stanford)), about 1 hour 12 minutes total — these provide a concise introduction to convex optimization fundamentals relevant to the paper.

*Why it unblocks this paper:* The 'Convex Analysis and Optimization' playlist by Marcelo Oliveira offers clear, intuition-focused explanations of convex optimization concepts, suitable for quickly grasping the key ideas behind the paper's optimization approach without deep mathematical prerequisites.

*If you want all of it:* About 11.1 hours across 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on fully distributed task offloading in vehicular edge computing, start with foundational knowledge on convex optimization iterative methods and queuing theory in wireless networks, as these underpin the algorithmic design and delay modeling. Next, explore resource allocation in mobile edge computing to grasp how computation and energy constraints are managed in dynamic environments. Finally, focus on the core concept of vehicular edge computing task offloading, including the authors' own talk if available, to directly connect theory with their novel distributed offloading scheme.

### Convex optimization iterative methods *(prerequisite)*
Convex optimization theory and iterative solution methods provide the mathematical foundation for the convex optimization-based vehicle-side algorithm (FDTO-VX) in the paper. Understanding these methods is critical to appreciate the convergence guarantees and computational trade-offs of the proposed scheme.

*How the paper uses it:* The paper develops a convex optimization-based vehicle algorithm with theoretical proof of convergence to the global optimum.

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023 I Lecture 1](https://www.youtube.com/watch?v=kV1ru-Inzl4) — Stanford Online · 1:18:27 · 2y ago

### Queuing theory wireless networks *(prerequisite)*
Queuing theory models task arrivals and service delays, which are essential for formulating the delay-optimal task offloading problem in vehicular edge computing. A solid grasp of queuing models helps in understanding how the paper models task response times and system dynamics.

*How the paper uses it:* The paper's delay-optimal offloading formulation relies on queuing theory to model task arrivals and processing delays.

▶ [Computer Networks Lecture 28: Queueing Theory](https://www.youtube.com/watch?v=z611FLLR3_8) — Geoffrey Messier · 1:12:49 · 6y ago

### Resource allocation in mobile edge computing *(prerequisite)*
Resource allocation strategies in mobile edge computing are key to managing computation and energy constraints in vehicular edge environments. This knowledge contextualizes the challenges addressed by the paper's distributed offloading scheme and its energy-delay trade-offs.

*How the paper uses it:* The paper addresses computation and energy constraints in vehicular edge computing through distributed resource allocation.

▶ [Computation Offloading for Multi-User Sequential Tasks in Heterogeneous Mobile Edge Computing](https://www.youtube.com/watch?v=J3AVzki2PPg) — EAI · 16:33 · 4y ago

### Vehicular edge computing task offloading
This section covers the central topic of the paper: task offloading in vehicular edge computing. It includes relevant university lectures and conference talks that focus on task offloading mechanisms, scheduling, and optimization in vehicular networks, providing direct context for the paper's contributions.

*How the paper uses it:* The paper proposes a fully distributed task offloading scheme specifically designed for vehicular edge computing environments.

▶ [Lecture 12: Mathematical formulations for task offloading in Edge Cloud](https://www.youtube.com/watch?v=1G2mk6URVwc) — IIT KANPUR-NPTEL · 46:38 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced learning path introduces foundational concepts essential to understanding fully distributed task offloading in vehicular edge computing. Starting with the basics of queuing theory and wireless network modeling, it then covers resource allocation in mobile edge computing, convex optimization iterative methods, and distributed algorithm design principles in edge computing. Finally, it focuses on vehicular edge computing task offloading, the core concept of the paper, to build intuition on how vehicles make real-time offloading decisions in dynamic environments.

### Queuing theory wireless networks *(prerequisite)*
Queuing theory models how tasks arrive and wait for processing in systems like wireless networks. Understanding these models helps grasp how delays occur and how to optimize task scheduling and offloading to reduce response times.

*How the paper uses it:* The paper uses queuing theory to model task arrivals and service delays, forming the basis for the delay-optimal offloading formulation.

▶ [Queuing theory and Poisson process](https://www.youtube.com/watch?v=rBIQmwaoZfs) — Mathemaniac · 25:25 · 3y ago

### Resource allocation in mobile edge computing *(prerequisite)*
Resource allocation in mobile edge computing involves distributing limited computation and communication resources efficiently among multiple users or devices. This ensures timely task processing while respecting energy and capacity constraints.

*How the paper uses it:* Efficient resource allocation is key to managing computation and energy constraints in the vehicular edge environment addressed by the paper.

▶ [Computation Offloading for Multi-User Sequential Tasks in Heterogeneous Mobile Edge Computing](https://www.youtube.com/watch?v=J3AVzki2PPg) — EAI · 16:33 · 4y ago

### Convex optimization iterative methods *(prerequisite)*
Convex optimization iterative methods solve optimization problems by repeatedly improving solutions until convergence to a global optimum. These methods are foundational for designing algorithms that balance performance and computational complexity.

*How the paper uses it:* The convex optimization-based vehicle algorithm (FDTO-VX) in the paper uses iterative methods proven to converge to the global optimum.

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023 I Lecture 1](https://www.youtube.com/watch?v=kV1ru-Inzl4) — Stanford Online · 1:18:27 · 2y ago

### Edge computing distributed algorithms *(prerequisite)*
Distributed algorithms in edge computing enable devices to make decisions locally using partial information, improving scalability and robustness compared to centralized approaches. Understanding their design principles is crucial for grasping fully distributed offloading schemes.

*How the paper uses it:* The paper proposes a fully distributed offloading scheme where vehicles make decisions based only on local RSU information, relying on distributed algorithm design.

▶ [Edge Computing Explained | Applications, Architecture, Advantages & Future Scope](https://www.youtube.com/watch?v=_8eERNYFNWY) — Ibrahim Faheem · 10:57 · 1y ago

### Vehicular edge computing task offloading
Vehicular edge computing task offloading involves vehicles dynamically deciding whether to process tasks locally or offload them to nearby roadside units to reduce latency and improve performance in highly mobile environments.

*How the paper uses it:* This is the core concept of the paper, which proposes a fully distributed task offloading scheme for vehicular edge computing to reduce response times and handle high mobility.

▶ [Dependency Aware Task Offloading and Scheduling in Multi Server and Multi-application in Vehicular E](https://www.youtube.com/watch?v=kz40i-eyG6Q) — Joint Conference Channel · 12:09 · 5y ago

## Already in your library

- [What is Edge Computing?](https://www.youtube.com/watch?v=WZQ6kCvOEaE) — also for: Uncovering Power and Frequency Behaviors and Their Security Implications in Edge GPU Platforms (Hyeran Jeon)
- [Edge Computing | Fog Computing | Cloud Computing](https://www.youtube.com/watch?v=iE1GxmD2csw) — also for: Semantically Enhanced Time Series Databases in IoT‐Edge‐Cloud Infrastructure (Farokh B. Bastani)
- [What is Edge Computing ? Cloud Computing vs Edge Computing](https://www.youtube.com/watch?v=B2Pjzipnwxc) — also for: Flash-Fusion: Enabling Expressive, Low-Latency Queries on IoT Sensor Streams with LLMs (Ashutosh Dhekne)
- [Stanford EE364A Convex Optimization I Stephen Boyd I 2023 I Lecture 16](https://www.youtube.com/watch?v=Sx7TKDFJjmk) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the fully distributed task offloading scheme proposed in the paper. The beginner project recreates a core mechanism of iterative offloading decision updates in a simplified simulation. The intermediate project implements the core FDTO algorithms and compares their performance against a baseline on synthetic vehicular edge computing data. The advanced project extends the scheme by addressing one of the paper's limitations—handling communication disruptions due to vehicle mobility—by integrating a handover management mechanism into the distributed offloading process.

### Beginner — Simulate Iterative Task Offloading Updates
*Effort: a weekend, ~8 hours*

You build a simple simulation of vehicles and RSUs where vehicles iteratively update their offloading probabilities based on local RSU resource utilization. The simulation runs multiple iterations showing convergence behavior of offloading decisions in a small network.

**Why it shows you understood the paper:** This project demonstrates you understand the core iterative mechanism of the FDTO scheme where vehicles adjust offloading decisions using only local RSU information, a key contribution of the paper.

**Grounded in:** This project demonstrates the paper's contribution: 'Vehicles iteratively adjust their offloading probabilities based on resource utilization information broadcast by neighboring RSUs.'

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib

**Data:** Synthetic data generated within the simulation representing a small number of vehicles and RSUs with random resource capacities and task arrival rates.

**Build it:**

1. Implement a simple model of RSUs with fixed computation capacities and vehicles generating tasks.
2. Implement vehicle-side iterative updates of offloading probabilities based on RSU resource utilization feedback.
3. Run the simulation for multiple iterations and plot the convergence of offloading probabilities and resource utilization.
4. Visualize how vehicles' offloading decisions stabilize over time.

**Ships as:** A Jupyter Notebook with simulation code, plots showing iterative convergence of offloading decisions, and a README explaining the mechanism and results.

**Stretch goal:** Add visualization of task response times over iterations to show performance improvement.

### Intermediate — Implement and Evaluate FDTO Algorithms
*Effort: 2 weekends, ~20 hours*

You implement the two vehicle-side algorithms (FDTO-VG greedy and FDTO-VX convex optimization) and the RSU-side aggregation and broadcasting (FDTO-S) in a simulated vehicular edge computing environment. You compare their average task response times and decision-making times against a simple baseline such as random offloading.

**Why it shows you understood the paper:** This project shows you can faithfully reimplement the paper's core fully distributed task offloading scheme and reproduce key performance metrics, demonstrating deep comprehension of the algorithms and their trade-offs.

**Grounded in:** This project covers the key contributions: 'Development of two vehicle-side iterative algorithms (greedy-based and convex optimization-based) with theoretical proof of convergence' and 'Extensive large-scale simulations demonstrating significant reduction in average task response time.'

**Tech stack:** Python 3.11, CVXPY (for convex optimization), NumPy, Matplotlib

**Data:** Synthetic vehicular edge computing simulation data with configurable numbers of vehicles, RSUs, task arrival patterns (Poisson and Bursty), and vehicle speeds to mimic the paper's experimental setup.

**Build it:**

1. Implement the RSU-side algorithm to aggregate vehicle requests and broadcast resource utilization.
2. Implement the vehicle-side greedy algorithm (FDTO-VG) for offloading probability updates.
3. Implement the vehicle-side convex optimization algorithm (FDTO-VX) using CVXPY.
4. Simulate task arrivals and offloading decisions over time with multiple vehicles and RSUs.
5. Compare average task response times and decision-making times of FDTO-VG, FDTO-VX, and a random offloading baseline.
6. Plot and analyze results to verify performance improvements and convergence.

**Ships as:** A Python project with modular implementations of FDTO algorithms, simulation scripts, performance comparison plots, and a detailed README documenting methodology and results.

**Stretch goal:** Implement the combined adaptive algorithm FDTO-VC that switches between FDTO-VG and FDTO-VX based on RSU load and evaluate its performance.

### Advanced — Extend FDTO with Handover Management for Mobility
*Effort: 3+ weeks*

You extend the fully distributed task offloading scheme by integrating a handover management mechanism to handle communication disruptions caused by high vehicle mobility. This involves detecting RSU handovers, maintaining offloading state consistency, and adapting offloading decisions during handover events. You evaluate the extended scheme's robustness and task response times under mobility-induced communication disruptions.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to critically analyze the research and contribute novel extensions that address real-world challenges in vehicular edge computing.

**Grounded in:** This project addresses the limitation: 'The approach assumes reliable communication between vehicles and RSUs; mobility-induced communication disruptions require additional handover management mechanisms.' and the future direction: 'Developing enhanced handover and communication disruption handling mechanisms to maintain performance in highly mobile scenarios.'

**Tech stack:** Python 3.11, CVXPY, NumPy, SimPy (for discrete-event simulation), Matplotlib

**Data:** Synthetic vehicular edge computing simulation data extended to model vehicle mobility patterns, RSU coverage areas, and communication handover events.

**Build it:**

1. Model vehicle mobility and RSU coverage with handover events in the simulation environment.
2. Design and implement a handover detection mechanism that triggers when vehicles move between RSUs.
3. Extend the FDTO algorithms to maintain and update offloading decisions consistently during handovers.
4. Simulate scenarios with varying vehicle speeds and handover frequencies to evaluate robustness.
5. Measure task response times and decision-making delays with and without handover management.
6. Analyze trade-offs and document how handover integration improves real-world applicability.

**Ships as:** A comprehensive simulation project with extended FDTO algorithms supporting handover management, performance evaluation scripts, and a detailed report explaining design decisions and results.

**Stretch goal:** Incorporate machine learning to predict handover events and proactively adjust offloading decisions.
