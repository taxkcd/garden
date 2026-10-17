---
title: "694 · Tiled Microprocessors — Michael B. Taylor"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-b-taylor"
source_hash: "cd8263d59c3ee28f1f8d4842d80534037dee26a46c563d87f844383d7a91ee69"
sequence: 694
generator: "outreach-garden: managed"
---

# 694 · Tiled Microprocessors

## At a glance

- **Professor:** Michael B. Taylor
- **Institution:** University of Washington
- **Paper:** [Tiled Microprocessors](http://darksilicon.org/papers/HB_ISCA_2024_Camera_Ready_Final.pdf)
- **Authors:** Michael Bedford Taylor
- **Year:** 2007

## Paper overview

This thesis explores the design and implementation of tiled microprocessors, which are composed of arrays of replicated tiles connected by specialized networks optimized for communication between processing units. The work addresses the scalability limitations of traditional microprocessors by proposing a physically scalable architecture that can grow to hundreds or thousands of functional units while maintaining performance and efficiency. The Raw microprocessor prototype, implemented in 180 nm technology, demonstrates the feasibility and advantages of this tiled approach.

### Why it matters

**Research problem:** Traditional centralized microprocessor designs face diminishing returns in performance scalability due to increasing wire delays, design complexity, power inefficiency, lack of performance transparency, and limited adaptability to varying resource levels. These problems hinder the effective utilization of exponentially growing VLSI resources such as transistors, wires, and pins.

**Why it matters:** As semiconductor technology advances, microprocessors must efficiently exploit increasing resources to improve performance and energy efficiency. However, existing microarchitectural approaches have reached limits in scalability, leading to complex, power-hungry, and less transparent designs that are difficult to adapt and verify. Overcoming these challenges is crucial for continuing performance improvements and enabling new computing applications.

**Key contributions:**

- Identification of seven criteria for physically scalable microprocessor design.
- Introduction and detailed study of Scalar Operand Networks (SONs) for inter-tile communication.
- Development of the 5-tuple performance metric for evaluating SONs.
- Proposal of the AsTrO taxonomy for categorizing SONs.
- Design, implementation, and analysis of the Raw tiled microprocessor prototype in 180 nm technology.

## About the professor

**Michael B. Taylor** — Professor, Dept of Electrical Engineering, University of Washington.

Research interests: computer architecture, dark silicon, ASIC clouds, specialized processors, bespoke silicon

### Research links

- [Faculty/profile page](http://cseweb.ucsd.edu/~mbtaylor)
- [Lab website](https://michaeltaylor.org/research_team.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Architecture
**The paper assumes:** undergraduate computer architecture, microprocessor design, interconnection networks
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of computer architecture and microprocessor design.

This background focuses on computer architecture fundamentals essential for understanding the design and scalability challenges of tiled microprocessors and their interconnection networks. The rigorous course offers a deep, structured university-level treatment of computer architecture concepts, while the fast track provides a concise, intuition-driven introduction to core computer architecture ideas. Choose the rigorous course for comprehensive understanding and the fast track for a quick yet solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [[CS61C FA20] Lectures - Great Ideas in Computer Architecture | UC, Berkeley](https://www.youtube.com/playlist?list=PL0j-r-omG7i0-mnsxN5T4UcVS1Di0isqf) — Pedro Peixoto · 176 videos · 14.7h across the first 60 episodes

**Watch only this:** Episodes 1 to 20 ("[CS61C FA20] Weekly Lecture 01.LIVE - Great Ideas in Computer Architecture, Intro" through "[CS61C FA20] Weekly Lecture 03.LIVE - Floating Point & RISC-V"), about 4.5 hours — these cover the foundational concepts of computer architecture, memory, and processor design needed to grasp tiled microprocessor architectures.

*Why it unblocks this paper:* This UC Berkeley CS61C playlist covers fundamental and advanced computer architecture topics, including number representation, memory management, and RISC-V, which are directly relevant to understanding microprocessor design and scalability issues addressed in the paper.

*If you want all of it:* Approximately 14.7 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer architecture from scratch](https://www.youtube.com/playlist?list=PL9vTTBa7QaQOoMfpP3ztvgyQkPWDPfJez) — Core Dumped · 6 videos · 1.7h across 6 episodes

**Watch only this:** All 6 episodes, about 1.7 hours — covers transistor basics, CPU construction, and clocking, sufficient for a quick conceptual grasp of microprocessor fundamentals.

*Why it unblocks this paper:* This Core Dumped playlist offers a clear, visual introduction to computer architecture basics, including how transistors run code and CPU design, providing an accessible foundation for readers new to microprocessor concepts relevant to tiled architectures.

*If you want all of it:* 1.7 hours across 6 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Tiled Microprocessors" by Michael Bedford Taylor, start with foundational knowledge on physically scalable microprocessor architectures, interconnection networks for multiprocessors, and instruction-level parallelism and scalability. These prerequisites build the necessary background on scalability challenges, communication networks, and parallelism exploitation in processor design. Finally, focus on the core concept of tiled microprocessors with the author's own talk and related advanced university lectures to grasp the specific innovations and implementations presented in the thesis.

### Physically Scalable Microprocessor Architectures *(prerequisite)*
This section covers the fundamental criteria and challenges involved in scaling microprocessor designs, such as frequency and bandwidth scalability, which are central to the paper's motivation and approach. Understanding these concepts provides the necessary context for why tiled microprocessors are proposed as a solution.

*How the paper uses it:* The paper identifies seven key criteria for physical scalability, including frequency and bandwidth scalability, which are foundational to the tiled microprocessor design.

▶ [Processor Scalability in Computer Architecture](https://www.youtube.com/watch?v=7NCbyBLkmuw) — Institute of Professional Education · 39:13 · 3y ago

### Interconnection Networks for Multiprocessors *(prerequisite)*
Interconnection networks are critical for connecting multiple processor tiles efficiently. This section explains different network topologies and communication mechanisms that underpin the Scalar Operand Networks (SONs) used in tiled microprocessors.

*How the paper uses it:* Scalar Operand Networks (SONs), a specialized interconnection network, are central to the tiled microprocessor architecture proposed in the paper.

▶ [Lecture 33. Interconnection Networks - Carnegie Mellon - Computer Architecture 2015 - Onur Mutlu](https://www.youtube.com/watch?v=93CVEOXM3T4) — Carnegie Mellon Computer Architecture · 1:45:15 · 11y ago

### Instruction-Level Parallelism and Scalability *(prerequisite)*
Instruction-level parallelism (ILP) is key to exploiting the parallel execution capabilities of tiled microprocessors. This section provides an advanced understanding of ILP concepts and how scalability affects parallelism in processor architectures.

*How the paper uses it:* The Raw microprocessor prototype demonstrates versatility in exploiting instruction-level parallelism, a core performance aspect addressed in the paper.

▶ [21.2.1 Instruction-level Parallelism](https://www.youtube.com/watch?v=IK9OVbj_Ir0) — MIT OpenCourseWare · 13:58 · 7y ago

### Tiled Microprocessors Author Talk *(paper-talk search result; attribution unverified)*
This section presents the author's own talk and advanced university lectures on tiled microprocessors, providing direct insight into the paper's contributions, design rationale, and experimental results. It is essential for understanding the specific innovations and validations of the tiled microprocessor approach.

*How the paper uses it:* Michael Bedford Taylor's work on tiled microprocessors is best understood through his own presentations and detailed academic lectures on the topic.

▶ [Introduction to Tiled Chip Multicore Processors](https://www.youtube.com/watch?v=AxJyGpuXypY) — NPTEL IIT Guwahati · 51:04 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand tiled microprocessors, starting with the basics of microprocessors and instruction-level parallelism, then exploring the challenges of scaling microprocessor architectures and the role of interconnection networks. Finally, it covers the core concept of tiled microprocessors and their specialized communication networks (Scalar Operand Networks) as proposed in the paper.

### Introduction to Microprocessors *(paper-talk search result; attribution unverified)*
Begin by understanding what microprocessors are, their basic components, and how they function as the 'brain' of computers. This foundation is essential before diving into more complex architectures like tiled microprocessors.

*How the paper uses it:* The paper builds on the concept of microprocessors and proposes a new tiled architecture to overcome traditional design limitations.

▶ [Introduction to Microprocessors](https://www.youtube.com/watch?v=jte2S2iWRMI) — Neso Academy · 16:25 · 2y ago

### Instruction-Level Parallelism and Scalability *(prerequisite)*
Learn how microprocessors exploit parallelism at the instruction level to improve performance, and understand the challenges of scaling this parallelism as processor designs grow more complex.

*How the paper uses it:* Tiled microprocessors aim to better exploit instruction-level parallelism by scaling to many replicated tiles.

▶ [21.2.1 Instruction-level Parallelism](https://www.youtube.com/watch?v=IK9OVbj_Ir0) — MIT OpenCourseWare · 13:58 · 7y ago

### Physically Scalable Microprocessor Architectures *(prerequisite)*
Explore the criteria and challenges involved in scaling microprocessor designs physically, including frequency and bandwidth scalability, which are critical for building large, efficient processors.

*How the paper uses it:* The paper identifies seven key criteria for physical scalability that guide the tiled microprocessor design.

▶ [Processor Scalability in Computer Architecture](https://www.youtube.com/watch?v=7NCbyBLkmuw) — Institute of Professional Education · 39:13 · 3y ago

### Interconnection Networks for Multiprocessors *(prerequisite)*
Understand the communication networks that connect multiple processor units, which are vital for coordinating data transfer and maintaining performance in multicore and tiled architectures.

*How the paper uses it:* The Scalar Operand Networks (SONs) in the paper are a specialized form of interconnection network optimized for tiled microprocessors.

▶ [Lecture 33. Interconnection Networks - Carnegie Mellon - Computer Architecture 2015 - Onur Mutlu](https://www.youtube.com/watch?v=93CVEOXM3T4) — Carnegie Mellon Computer Architecture · 1:45:15 · 11y ago

### Tiled Microprocessors *(paper-talk search result; attribution unverified)*
Learn about the tiled microprocessor architecture, where replicated processing tiles are connected via specialized networks to achieve scalability and efficiency beyond traditional designs.

*How the paper uses it:* This is the core concept of the paper, which proposes and validates tiled microprocessors as a scalable architecture.

▶ [Introduction to Tiled Chip Multicore Processors](https://www.youtube.com/watch?v=AxJyGpuXypY) — NPTEL IIT Guwahati · 51:04 · 8y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the key concepts in the "Tiled Microprocessors" thesis by Michael Bedford Taylor. Starting with a beginner-level simulation of a tiled microprocessor's communication network, you then implement and evaluate a simplified Scalar Operand Network (SON) to reproduce the paper's core communication metric. Finally, the advanced project extends the tiled microprocessor concept by exploring compiler support challenges, addressing a stated limitation and future direction of the paper.

### Beginner — Simulate a Simple Tiled Microprocessor Network
*Effort: a weekend, ~8 hours*

You build a discrete-event simulation of a small array (e.g., 4x4) of replicated tiles communicating via a simplified network inspired by Scalar Operand Networks (SONs). The simulation models message passing latency and bandwidth constraints between tiles.

**Why it shows you understood the paper:** This project demonstrates your grasp of the tiled microprocessor architecture's fundamental communication mechanism and the importance of low-latency inter-tile networks for scalability.

**Grounded in:** The project relates to the paper's introduction and study of Scalar Operand Networks (SONs) optimized for low-latency communication between tiles.

**Tech stack:** Python 3.11, SimPy (discrete-event simulation library)

**Data:** No external dataset needed; network traffic is simulated with synthetic message patterns representing operand communication.

**Build it:**

1. Set up a grid of tiles (e.g., 4x4) each capable of sending and receiving messages.
2. Implement a simple network model that simulates message latency and bandwidth constraints between tiles.
3. Simulate operand message traffic with configurable rates and measure average communication latency.
4. Visualize latency and bandwidth usage statistics for different traffic patterns.

**Ships as:** A Python simulation repository with scripts to run network simulations and a README explaining the model, results, and how it relates to tiled microprocessor communication.

**Stretch goal:** Add support for different network topologies (e.g., mesh vs. ring) and compare their impact on latency.

### Intermediate — Implement and Evaluate a Scalar Operand Network Metric
*Effort: 1-3 weekends*

You implement a simplified version of the 5-tuple performance metric for Scalar Operand Networks (SONs) as described in the paper. Using your simulation from the beginner project or a new implementation, you evaluate this metric on different network configurations and compare results against a naive broadcast baseline.

**Why it shows you understood the paper:** This project shows you can reproduce and apply a core quantitative contribution of the paper, the 5-tuple SON performance metric, demonstrating comprehension of how SONs are evaluated for scalability.

**Grounded in:** This project directly implements the paper's development of the 5-tuple performance metric for evaluating Scalar Operand Networks.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic network traffic patterns generated to simulate operand communication loads; no external dataset required.

**Build it:**

1. Reimplement or extend the tiled microprocessor network simulation to collect data relevant for the 5-tuple metric (e.g., latency, bandwidth, occupancy).
2. Implement the 5-tuple performance metric calculation as defined in the paper.
3. Run experiments comparing SON configurations against a naive broadcast network baseline.
4. Plot and analyze results, discussing how the metric reflects network scalability and performance.

**Ships as:** A Python repository with code to compute the 5-tuple metric, experimental scripts, plots, and a README explaining the metric and findings.

**Stretch goal:** Incorporate additional network topologies from the AsTrO taxonomy and compare their metrics.

### Advanced — Prototype Compiler Support for Tiled Microprocessor Programming
*Effort: a few weeks*

You design and implement a prototype software tool or compiler pass that translates a simple parallel program into a form suitable for execution on a tiled microprocessor architecture, addressing the programming complexity limitation noted in the paper. The tool should generate communication instructions or annotations reflecting inter-tile operand transfers.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by exploring compiler and programming tool support needed to exploit tiled microprocessor scalability, demonstrating deep engagement with both hardware and software challenges.

**Grounded in:** Addresses the paper's stated limitation and future direction regarding the complexity of programming tiled microprocessors and the need for improved compiler support.

**Tech stack:** Python 3.11, LLVM (optional), TypeScript (optional for frontend)

**Data:** Use small synthetic parallel programs or kernels (e.g., matrix multiplication, stencil computations) as input.

**Build it:**

1. Study the communication patterns required by tiled microprocessors as described in the paper.
2. Design a simple intermediate representation or annotation scheme to express inter-tile communication.
3. Implement a compiler pass or standalone tool that transforms parallel code into this representation.
4. Demonstrate the tool on example programs, showing generated communication instructions or annotations.
5. Document challenges and potential improvements for full compiler integration.

**Ships as:** A repository containing the compiler tool or scripts, example input programs, generated outputs, and a detailed README discussing the approach and relation to tiled microprocessor programming challenges.

**Stretch goal:** Integrate the tool with an existing compiler framework (e.g., LLVM) and evaluate on more complex benchmarks.
