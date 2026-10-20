---
title: "874 · Lifelong Scalable Multi-Agent Realistic Testbed and A Comprehensive Study on Design Choices in Lifelong AGV Fleet Management Systems — Jiaoyang Li"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jiaoyang-li"
source_hash: "0e6b03fc0db7a95bdafe10bc45ce8a2b976b6ce97c16542727fa3dc1fafea5bf"
sequence: 874
generator: "outreach-garden: managed"
---

# 874 · Lifelong Scalable Multi-Agent Realistic Testbed and A Comprehensive Study on Design Choices in Lifelong AGV Fleet Management Systems

## At a glance

- **Professor:** Jiaoyang Li
- **Institution:** Carnegie Mellon University
- **Paper:** [Lifelong Scalable Multi-Agent Realistic Testbed and A Comprehensive Study on Design Choices in Lifelong AGV Fleet Management Systems](https://arxiv.org/pdf/2602.15721)
- **Authors:** Jingtian Yan, Yulun Zhang, Zhenting Liu, Han Zhang, He Jiang, Jingkai Chen, Stephen F. Smith, Jiaoyang Li
- **Year:** 2026

## Paper overview

This paper introduces LSMART, an open-source simulation platform designed to realistically evaluate multi-agent path finding (MAPF) algorithms in lifelong fleet management systems (FMS) with automated guided vehicles (AGVs). Unlike prior work that assumes simplified models, LSMART incorporates realistic robot dynamics, communication delays, and execution uncertainties. It modularizes key design choices such as planning invocation policies, instance generation, and failure recovery, enabling comprehensive empirical studies at scale with thousands of robots.

### Why it matters

**Research problem:** Existing multi-agent path finding (MAPF) and lifelong MAPF (LMAPF) algorithms are often evaluated under unrealistic assumptions like simplified agent models (pebble motion), perfect execution, and communication. This limits their applicability to real-world fleet management systems (FMS) with automated guided vehicles (AGVs) that have kinodynamic constraints, communication delays, and execution uncertainties. There is a lack of open-source tools and systematic studies that evaluate MAPF algorithms under these realistic conditions and design choices.

**Why it matters:** Coordinating large fleets of mobile robots, such as AGVs in warehouses and sorting systems, is critical for automation and efficiency in various industries. Realistic evaluation of MAPF algorithms is essential to ensure their effectiveness and scalability in practical deployments. Without considering real-world constraints, algorithm performance may be overestimated or misleading, hindering progress in robotic fleet management.

**Key contributions:**

- Development of LSMART, the first open-source simulator for evaluating any MAPF algorithm in realistic lifelong AGV fleet management systems considering kinodynamics, communication delays, and execution uncertainties.
- Modular architecture encapsulating planner invocation policies, instance generators, fail policies, and MAPF planners enabling customizable and systematic evaluation.
- Comprehensive empirical study comparing state-of-the-art design choices under realistic execution conditions at scale with thousands of AGVs.
- Insights into trade-offs between planner optimality, agent model accuracy, replanning frequency, and fail policy effectiveness in realistic FMS settings.
- Public release of LSMART to facilitate further research in realistic lifelong multi-agent path finding.

## About the professor

**Jiaoyang Li** — Assistant Professor, Robotics Institute, Carnegie Mellon University.

Research interests: Artificial Intelligence and optimization, combinatorial algorithms, heuristic search, scheduling and planning for robotics and transportation

### Research links

- [Faculty/profile page](https://jiaoyangli.me)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multi-Agent Path Finding
**The paper assumes:** multi-agent path finding algorithms, combinatorial optimization, graph search methods
**Already in this field?** Skip this entirely if you already understand the fundamentals of multi-agent path finding and its standard algorithmic approaches.

This background focuses on Multi-Agent Path Finding (MAPF), which is central to understanding the realistic lifelong MAPF algorithms and design choices studied in the paper. The rigorous course option offers a deep, structured university-level lecture series on multi-agent simulations and robotics, ideal for a thorough conceptual and technical foundation. The fast track provides a concise, well-produced explainer series specifically on MAPF, suitable for quickly grasping core concepts and state-of-the-art methods without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Multi-Agent Simulations, Swarm and Evolutionary Robotics Lecture Series](https://www.youtube.com/playlist?list=PL_gtKJvFTv6h2vgbgIuPHAJRIOYkhH6Ca) — Rahul Kala · 101 videos · 18.9h across the first 60 episodes

**Watch only this:** Episodes H1 P1 Simulations: Microscopic and Macroscopic Simulations through H1 P4 Simulations: Applications and Properties (episodes 1-4), about 1.2 hours total — these provide a solid introduction to multi-agent simulations and behaviors foundational to MAPF.

*Why it unblocks this paper:* This university lecture series by Rahul Kala covers multi-agent simulations and swarm robotics comprehensively, including foundational concepts relevant to multi-agent path finding and coordination under realistic constraints, aligning well with the paper's focus on realistic lifelong MAPF and fleet management.

*If you want all of it:* The first 60 episodes cover 18.9 hours, offering extensive depth on multi-agent simulations, behaviors, and robotics relevant to MAPF.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Multi-Agent Pathfinding (MAPF)](https://www.youtube.com/playlist?list=PLQR-u-WfDtrxC5Mar9lq-CXWGFvtLAB2H) — Thomas Nobes · 10 videos · 3.0h across 10 episodes

**Watch only this:** Episodes 5 to 10 (Classical MAPF Defined through 5x Scaling with Enhanced Conflict Based Search (ECBS)), about 1.8 hours total — these cover the core MAPF problem definition and key algorithms relevant to the paper's modular design and planner comparisons.

*Why it unblocks this paper:* This concise explainer series by Thomas Nobes is dedicated specifically to Multi-Agent Pathfinding, covering from basics to state-of-the-art algorithms, directly matching the paper's subject and providing a focused, accessible overview.

*If you want all of it:* All 10 episodes total about 3.0 hours, covering MAPF fundamentals and advanced methods.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on LSMART and lifelong multi-agent path finding (MAPF) for AGV fleet management, start with foundational concepts such as kinodynamic constraints in robotics and multi-agent path finding algorithms, which underpin realistic modeling and algorithmic approaches. Then explore related design choices like planner invocation policies and fail policies that affect system performance. Finally, focus on the core concept of lifelong MAPF and the authors' own talk presenting LSMART, which directly addresses the paper's contributions and empirical studies.

### Kinodynamic constraints in robotics *(prerequisite)*
Understanding kinodynamic constraints is essential for grasping how realistic robot dynamics are modeled in LSMART. This includes how robots' motion and control limitations affect planning and execution, which the paper emphasizes as a key advancement over simplified models.

*How the paper uses it:* LSMART incorporates realistic kinodynamic constraints to simulate AGV behavior more accurately than prior simplified models.

▶ [Fall 2022 6.4210/2 Lecture 13: Motion planning (part 1)](https://www.youtube.com/watch?v=OjB1fYU-Pvo) — underactuated · Streamed 3y ago

### Multi-agent path finding algorithms *(prerequisite)*
Multi-agent path finding (MAPF) algorithms form the algorithmic foundation for coordinating multiple agents without collisions. Familiarity with these algorithms is necessary to understand the planners evaluated and modularized within LSMART.

*How the paper uses it:* The paper evaluates various state-of-the-art MAPF planners under realistic lifelong fleet management scenarios.

▶ [ICAPS 2020: Zhang et al. on "Multi-Agent Path Finding with Mutex ...](https://www.youtube.com/watch?v=rzsk4OIBVHU) — ICAPS · 6y ago

### Planner invocation policies in robotics *(prerequisite)*
Planner invocation policies determine when and how often replanning occurs, impacting throughput and system synchronization. Understanding these policies helps interpret the paper's empirical findings on event-based versus periodic replanning.

*How the paper uses it:* LSMART modularizes planner invocation policies and studies their impact on throughput and timing mismatches.

▶ [ICAPS 2019: Multi-Agent Planning](https://www.youtube.com/watch?v=jmSZhgkPNro) — ICAPS · 6y ago

### Multi-Agent Path Finding lifelong planning
Lifelong MAPF involves continuous coordination of agents with dynamically assigned goals, which is the central problem addressed by the paper. Understanding lifelong MAPF approaches provides context for the design choices and evaluation in LSMART.

*How the paper uses it:* The paper focuses on lifelong MAPF algorithms and their realistic evaluation in AGV fleet management systems.

▶ [2024 LoRR Virtual Expo - Scaling Lifelong Multi Agent Path Finding to More Realistic Settings](https://www.youtube.com/watch?v=vXWZ-b6quHc) — Shortest Path Lab @ Monash University · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of kinodynamic constraints in robotics to grasp why realistic robot dynamics matter in this paper. Then learn about multi-agent path finding algorithms and fail policies, which are fundamental to coordinating multiple robots. Next, study planner invocation policies that affect replanning frequency and system throughput. Finally, watch a concise talk by the authors on the LSMART simulator to see how these concepts come together in a realistic lifelong multi-agent path finding system.

### Kinodynamic constraints in robotics *(prerequisite)*
Kinodynamic constraints describe the physical limits on a robot's motion, such as velocity and acceleration bounds, which affect how it can move through space. Understanding these constraints is crucial for realistic robot path planning because they ensure that planned paths are feasible for actual robots to execute.

*How the paper uses it:* The paper models AGVs with kinodynamic constraints to simulate realistic robot dynamics in LSMART.

▶ [Fall 2022 6.4210/2 Lecture 13: Motion planning (part 1)](https://www.youtube.com/watch?v=OjB1fYU-Pvo) — underactuated · Streamed 3y ago

### Multi-agent path finding algorithms *(prerequisite)*
Multi-agent path finding (MAPF) algorithms compute collision-free paths for multiple agents moving simultaneously in a shared environment. These algorithms balance optimality and computational efficiency to coordinate agents effectively.

*How the paper uses it:* The paper evaluates various MAPF planners under realistic conditions in lifelong fleet management.

▶ [CBS Multi-Agent Pathfinding Explained Simply | AI Algorithm Guide](https://www.youtube.com/watch?v=c5oGEL9WBFE) — SkilliAlgo · 3w ago

### Fail policies for multi-agent coordination *(prerequisite)*
Fail policies are strategies used when planned paths cannot be executed due to conflicts or uncertainties, helping agents recover and avoid deadlocks. They are essential for robust lifelong coordination in dynamic environments.

*How the paper uses it:* LSMART modularizes fail policies like PIBT and LRGW to handle execution uncertainties in AGV fleets.

▶ [5 Ways AI Agents Work Together — Multi-Agent Coordination Patterns Explained](https://www.youtube.com/watch?v=mV2hge8bkyU) — AI Study Group · 6mo ago

### Planner invocation policies in robotics *(prerequisite)*
Planner invocation policies determine when and how often the system replans paths for agents, balancing responsiveness and computational load. Different policies affect throughput and system stability depending on agent density and environment.

*How the paper uses it:* The paper studies periodic and event-based planner invocation policies and their impact on throughput in LSMART.

▶ [How Robots Plan Their Actions | Path Planning, AI & Decision Making | The Robotics Age – E08](https://www.youtube.com/watch?v=foElXaMaqug) — Physical Sciences Consultorium · 4w ago

### LSMART simulator talk
This talk by the authors provides an overview of the LSMART simulation platform, highlighting its realistic modeling of AGV fleets, modular design, and empirical studies on lifelong multi-agent path finding.

*How the paper uses it:* Direct insight into the design and evaluation framework of LSMART as presented in the paper.

▶ [2024 LoRR Virtual Expo - Scaling Lifelong Multi Agent Path Finding to More Realistic Settings](https://www.youtube.com/watch?v=vXWZ-b6quHc) — Shortest Path Lab @ Monash University · 2y ago

## Already in your library

- [Robot Learning 2026 – Lecture 9: Generalist Robot Policies ...](https://www.youtube.com/watch?v=dtofzDY9zuo) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [Multi Agent Systems Explained: How AI Agents & LLMs Work Together](https://www.youtube.com/watch?v=sWH0T4Zez6I) — also for: AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers’ Enquiries Globally (Arpita Biswas)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the LSMART paper's contributions to realistic lifelong multi-agent path finding (MAPF) in automated guided vehicle (AGV) fleet management systems. The beginner project focuses on simulating a small-scale planner invocation policy comparison, the intermediate project implements a core lifelong MAPF instance generator and planner combination inspired by the paper's windowed-multi-goals setup, and the advanced project extends the simulation to address a stated limitation by integrating adaptive synchronization to improve planner-execution alignment.

### Beginner — Simulate Planner Invocation Policies on a Small Grid
*Effort: a weekend, ~8 hours*

You build a small-scale simulation comparing periodic and event-based planner invocation policies on a 10x10 grid with a handful of agents. The simulation models simple agent movement with basic execution delays and replanning windows, and measures throughput and fail policy calls.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's modular planner invocation policies and their impact on throughput under different replanning window sizes and map topologies, replicating a core empirical comparison from the paper.

**Grounded in:** Planner invocation policies show map-dependent performance: event-based policy performs better with longer planning windows, while periodic policy can be better with short windows and fewer agents.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic 10x10 grid map with manually placed start and goal positions for 5 agents, simulating simplified AGV movement and replanning.

**Build it:**

1. Implement a grid environment with 4-connected movement and simple agent state tracking.
2. Implement periodic and event-based planner invocation policies controlling when agents replan paths.
3. Simulate agent movement with fixed execution delays and replanning windows (e.g., 1s and 10s).
4. Measure throughput (agents reaching goals per unit time) and count fail policy invocations.
5. Visualize and compare results for the two policies under different replanning windows.

**Ships as:** A Python simulation repository with scripts to run planner invocation policy experiments, plots comparing throughput and fail calls, and a README explaining the setup and results.

**Stretch goal:** Add simple stochastic execution delays or communication delays to better approximate realistic uncertainties.

### Intermediate — Implement Windowed-Multi-Goals Instance Generator with Windowed PBS Planner
*Effort: 2 weekends, ~20 hours*

You implement from scratch a simplified lifelong MAPF simulation that generates instances using the windowed-multi-goals approach and solves them with a windowed prioritized-based search (PBS) planner. You compare throughput and planning effort against a baseline distinct-one-goal instance generator with a simple planner.

**Why it shows you understood the paper:** This project reproduces the paper's key contribution that the windowed-multi-goals instance generator combined with the windowed PBS planner achieves higher throughput by reducing planning effort and fail policy calls, showing your ability to implement core lifelong MAPF design choices.

**Grounded in:** Windowed-multi-goals instance generator with windowed PBS planner consistently achieves highest or equal throughput by reducing planning effort and fail policy calls.

**Tech stack:** Python 3.11, networkx, numpy, matplotlib

**Data:** Synthetic 4-connected grid maps (e.g., 20x20) with agent start locations and dynamically generated goal windows simulating lifelong task assignments.

**Build it:**

1. Implement a 4-connected grid graph environment with agent kinodynamic constraints simplified to differential drive assumptions.
2. Implement the windowed-multi-goals instance generator that assigns goals in windows over time.
3. Implement a windowed PBS planner that plans paths for agents within the current window.
4. Implement a baseline distinct-one-goal instance generator and a simple planner for comparison.
5. Simulate agent execution with basic delays and fail policy calls (e.g., all-wait).
6. Run experiments comparing throughput, planning effort, and fail policy calls between the two setups.
7. Visualize and document the results.

**Ships as:** A Python project repository with implementations of instance generators and planners, simulation scripts, comparative plots, and a README describing the methodology and findings.

**Stretch goal:** Incorporate a simple fail policy like PIBT and measure its effect on throughput and replanning frequency.

### Advanced — Adaptive Synchronization for Planner-Execution Alignment in Lifelong MAPF
*Effort: 3+ weeks*

You extend a lifelong MAPF simulation framework to integrate an adaptive synchronization mechanism that improves commit cut estimation and reduces timing mismatches between planning and execution. This involves designing a learning-based or heuristic prediction model to better align replanning triggers with actual agent progress under execution uncertainties.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper regarding imperfect commit cut estimation causing execution-planning mismatches. Successfully implementing adaptive synchronization demonstrates deep comprehension of the system's challenges and advances the state of the art.

**Grounded in:** The commit cut estimation for replanning synchronization is imperfect, leading to timing mismatches that affect system performance.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, networkx, numpy, matplotlib

**Data:** Synthetic lifelong MAPF simulation data with agent execution traces and replanning events; data generated within the simulation environment.

**Build it:**

1. Build or reuse a lifelong MAPF simulation environment with agent execution and replanning cycles.
2. Implement baseline commit cut estimation based on the paper's ADG method.
3. Design and implement an adaptive synchronization mechanism using a learning-based predictor or heuristic model to estimate agent progress and replanning timing.
4. Integrate the adaptive synchronization into the replanning invocation policy.
5. Evaluate the impact on timing mismatch reduction, throughput, and fail policy calls compared to the baseline.
6. Document the design decisions, experiments, and results.

**Ships as:** A comprehensive simulation repository demonstrating adaptive synchronization, with evaluation scripts, plots showing improved planner-execution alignment, and a detailed README explaining the approach and findings.

**Stretch goal:** Validate the approach on more complex kinodynamic models or extend to non-grid graph topologies as future work.
