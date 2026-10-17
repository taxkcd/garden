---
title: "668 · Extended User Interrupts (xUI): Fast and Flexible Notification without Polling — Dean M. Tullsen"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dean-m-tullsen"
source_hash: "28ca0b6b46514e093d209c9bd9ea32822522b3468a407e5f8f6d2c66ff574da3"
sequence: 668
generator: "outreach-garden: managed"
---

# 668 · Extended User Interrupts (xUI): Fast and Flexible Notification without Polling

## At a glance

- **Professor:** Dean M. Tullsen
- **Institution:** Univ. of California - San Diego
- **Paper:** [Extended User Interrupts (xUI): Fast and Flexible Notification without Polling](http://www-cse.ucsd.edu/users/tullsen/asplos_xui.pdf)
- **Authors:** Berk Aydogmus, Linsong Guo, Danial Zuberi, Tal Garfinkel, Dean Tullsen, Amy Ousterhout, Kazem Taram
- **Year:** 2025

## Paper overview

This paper presents xUI, a set of processor extensions that improve user-level asynchronous notifications by overcoming limitations of Intel's current user-level interprocessor interrupts (UIPI). xUI enables fast, flexible, and efficient notifications without relying on costly polling or imprecise signals, benefiting user-level runtimes responsible for tasks like preemption and IO scheduling.

### Why it matters

**Research problem:** User-level runtimes lack efficient and precise interrupt support for asynchronous notifications, forcing them to rely on expensive OS interfaces or inefficient polling, which leads to high overheads, imprecise control, and poor scalability.

**Why it matters:** Efficient asynchronous notification is critical for high-performance applications such as data center workloads, user-level preemption, and kernel-bypass IO. Current mechanisms like signals and polling impose significant overheads and inefficiencies, limiting throughput, increasing latency, and wasting energy.

**Key contributions:**

- In-depth microarchitectural analysis and reverse engineering of Intel's UIPI.
- Design and implementation of tracked interrupts that avoid pipeline flushes, reducing interrupt overhead by 3x-9x compared to UIPI.
- Introduction of hardware safepoints enabling precise interrupt delivery compatible with precise garbage collection.
- Development of a kernel bypass timer (KB_Timer) providing efficient, per-thread user-level timers.
- Interrupt forwarding mechanism allowing device interrupts to be routed to user-level threads.

## About the professor

**Dean M. Tullsen** — Distinguished Professor, Department of Computer Science and Engineering, Univ. of California - San Diego.

Research interests: Computer architecture, on-chip parallelism (multithreading, multicore), architectures for secure execution, software and hardware techniques for parallel speedup of serial code, low-power and energy-efficient processors, servers, datacenters, etc.

### Research links

- [Faculty/profile page](https://cseweb.ucsd.edu/~tullsen/research.html)
- [Identity evidence](https://cseweb.ucsd.edu/~tullsen)
- [Professor website](http://www-cse.ucsd.edu/users/tullsen)
- [Resolved homepage](http://www-cse.ucsd.edu/users/tullsen/bio.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Architecture and Microarchitecture
**The paper assumes:** processor microarchitecture, interrupt handling mechanisms, pipeline architecture, instruction fetch and decode stages
**Already in this field?** Skip this entirely if you already understand modern CPU microarchitecture, including pipeline design and interrupt processing.

To deeply understand the microarchitectural innovations in the xUI paper, especially around interrupt handling, pipeline flush avoidance, and hardware safepoints, a solid foundation in computer architecture and microarchitecture is essential. The rigorous course option offers a comprehensive university-level lecture series covering core concepts in processor design and pipeline behavior, while the fast track provides a shorter, focused set of lectures from a top research university that covers fundamental microarchitecture concepts efficiently. Choose the rigorous course for thorough mastery and the fast track for a quicker but still authoritative grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [UC Berkeley CS 61C Great Ideas in Computer Architecture (Machine Structures)](https://www.youtube.com/playlist?list=PLhMnuBfGeCDM8pXLpqib90mDFJI-e1lpk) — Satyakiran Duggina · 26 videos · 33.1h across 26 episodes

**Watch only this:** Lectures 11 (Precise Exceptions, State Maintenance/Recovery), 13 (Pipelining), 14 (Caches Part 1), and 22 (Operating Systems, Interrupts, Virtual Memory), about 4.5 hours total — these cover pipeline flushes, interrupt handling, and memory system fundamentals critical for xUI.

*Why it unblocks this paper:* UC Berkeley CS 61C is a well-known, rigorous course that covers computer architecture and microarchitecture in depth, including pipelining, precise exceptions, and interrupts, which are directly relevant to understanding xUI's microarchitectural improvements.

*If you want all of it:* All 26 episodes, about 33.1 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Spring 2015 -- Computer Architecture Lectures -- Carnegie Mellon](https://www.youtube.com/playlist?list=PL5PHm2jkkXmi5CxxI7b3JCL1TWybTDtKq) — Carnegie Mellon Computer Architecture · 39 videos · 64.3h across 39 episodes

**Watch only this:** Lectures 7 (Pipelining), 11 (Precise Exceptions, State Maintenance/Recovery), and 12 (Out of Order Execution), about 4.9 hours total — these focus on pipeline behavior and precise interrupt delivery relevant to xUI.

*Why it unblocks this paper:* Carnegie Mellon’s Spring 2015 Computer Architecture lectures by Onur Mutlu provide concise, well-structured coverage of fundamental microarchitecture concepts including pipelining, precise exceptions, and out-of-order execution, which underpin the paper’s discussion of interrupt handling and pipeline flush avoidance.

*If you want all of it:* All 39 episodes, about 64.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the xUI paper, start by building foundational knowledge on processor interrupt microarchitecture and kernel bypass techniques for user-level timers, which underpin the hardware innovations in xUI. Next, explore hardware safepoints and precise interrupt delivery to grasp how xUI achieves precise asynchronous notifications compatible with advanced runtime features. Finally, focus on the core concept of xUI itself, emphasizing the novel tracked interrupts microarchitectural design that drastically reduces interrupt overhead, culminating with the authors' own detailed talk on devices and interrupts to consolidate understanding.

### Processor interrupt microarchitecture *(prerequisite)*
Understanding how interrupts are handled at the microarchitectural level is essential to appreciate the limitations of existing mechanisms like Intel's UIPI and the innovations introduced by xUI. This section covers interrupt hardware, types, and handling mechanisms foundational to the paper's microarchitectural analysis.

*How the paper uses it:* xUI builds on a detailed microarchitectural understanding of interrupt delivery to propose tracked interrupts that avoid pipeline flushes.

▶ [Interrupts: Interrupt Hardware, Types of Interrupts and Exceptions](https://www.youtube.com/watch?v=O5HWjDwBNyk) — Ch-35: IIT Madras: Metallurgical and Others · 5 years ago

### Kernel bypass techniques for user-level timers *(prerequisite)*
This section introduces kernel bypass methods that enable efficient user-level timers without OS overhead, a key component of xUI's kernel bypass timer (KB_Timer). Understanding these techniques clarifies how xUI reduces timer interrupt costs and eliminates dedicated timer cores.

*How the paper uses it:* xUI's KB_Timer leverages kernel bypass to provide low-cost, per-thread user-level timers, improving runtime efficiency.

▶ [Kernel-bypass techniques for high-speed network packet processing](https://www.youtube.com/watch?v=MpjlWt7fvrw) — Priyanka Naik · 29:05 · 5 years ago

### Hardware safepoints and precise interrupt delivery *(prerequisite)*
Hardware safepoints enable precise interrupt delivery compatible with precise garbage collection, a novel feature of xUI. This section explains the concept of safepoints and their role in interrupt handling, which is critical for understanding xUI's hardware support for precise asynchronous notifications.

*How the paper uses it:* xUI introduces hardware safepoints to allow precise, compiler-coordinated interrupt delivery at near zero cost.

▶ [Lecture 25 - Interrupt Driven I/O](https://www.youtube.com/watch?v=C02weCM9yWA) — nptelhrd · 18 years ago

### xUI paper talk *(the paper's own talk)*
The authors' own talk provides the most direct and authoritative explanation of xUI's design, implementation, and evaluation. It consolidates understanding of all key contributions and results, offering insights into future directions and practical considerations.

*How the paper uses it:* Hearing the authors explain xUI offers the clearest and most comprehensive understanding of their processor extensions for user-level interrupts.

▶ [18.2.8 Worked Examples: Devices and Interrupts](https://www.youtube.com/watch?v=0aMDzMhf528) — MIT OpenCourseWare · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the xUI paper, starting with basic interrupt mechanisms and user-level asynchronous notifications. It then builds up to processor microarchitecture details relevant to interrupt handling, followed by hardware safepoints and kernel bypass timers. Finally, it culminates with the core innovation of xUI: tracked interrupts, which drastically reduce interrupt overhead.

### Processor interrupt microarchitecture *(prerequisite)*
Learn how interrupts are handled inside a processor at the microarchitectural level, including how the CPU detects, prioritizes, and responds to interrupts. This foundational knowledge helps understand why traditional interrupt delivery can be costly and how pipeline flushes impact performance.

*How the paper uses it:* Understanding the microarchitecture of interrupts is essential to grasp why xUI's tracked interrupts avoid pipeline flushes and reduce overhead.

▶ [Interrupts](https://www.youtube.com/watch?v=UnLww6bH6C4) — TutorialsPoint · 8 years ago

### User-level asynchronous notification mechanisms *(prerequisite)*
Explore how user-level runtimes currently receive asynchronous notifications, such as signals or polling, and why these methods are inefficient or imprecise. This sets the stage for appreciating xUI's improvements in notification delivery.

*How the paper uses it:* The paper addresses limitations in existing user-level notification methods, motivating the need for xUI.

▶ [Lesson 142 - Request/Reply vs Async Notification](https://www.youtube.com/watch?v=7y2DKiyHg80) — Software Architecture Monday · 10:19 · 3 years ago

### Hardware safepoints and precise interrupt delivery *(prerequisite)*
Understand hardware safepoints, which allow interrupts to be delivered precisely at safe points in program execution, enabling compatibility with precise garbage collection and reducing complexity in interrupt handling.

*How the paper uses it:* xUI introduces hardware safepoints to enable precise interrupt delivery compatible with precise garbage collection.

▶ [Lecture 25 - Interrupt Driven I/O](https://www.youtube.com/watch?v=C02weCM9yWA) — nptelhrd · 18 years ago

### Kernel bypass techniques for user-level timers *(prerequisite)*
Learn how kernel bypass techniques allow user-level programs to manage timers efficiently without costly OS involvement, reducing latency and overhead for timer-based notifications.

*How the paper uses it:* xUI's kernel bypass timer eliminates the need for dedicated timer cores and expensive OS timers, improving efficiency.

▶ [Kernel-bypass techniques for high-speed network packet processing](https://www.youtube.com/watch?v=MpjlWt7fvrw) — Priyanka Naik · 29:05 · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and demonstrating the core innovations of the xUI paper. Starting with a beginner-level simulation of interrupt overhead comparison using familiar programming tools, you then move to an intermediate project reimplementing tracked interrupts' core mechanism and evaluating its latency benefits. Finally, the advanced project tackles a future direction by exploring partial pipeline flush support to further optimize interrupt handling latency, extending the paper's architectural ideas.

### Beginner — Simulate and Compare Interrupt Delivery Overhead
*Effort: a weekend, ~8 hours*

You build a simple simulation in C++ or Python that models interrupt delivery latency for polling, UIPI, and tracked interrupts based on cycle counts reported in the paper. The simulation will generate latency distributions and compare overheads visually.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key performance metrics and the fundamental difference in overhead between polling, UIPI, and tracked interrupts.

**Grounded in:** xUI reduces interrupt delivery overhead to 105-231 cycles, significantly faster than UIPI's 383 cycles.

**Tech stack:** C++, Python 3.11, matplotlib or similar plotting library

**Data:** Synthetic latency data derived from cycle counts reported in the paper's evaluation section.

**Build it:**

1. Extract cycle latency values for polling, UIPI, and tracked interrupts from the paper.
2. Write a program to simulate interrupt delivery events with these latencies and generate distributions.
3. Plot comparative histograms or boxplots of the simulated latencies.
4. Write a README explaining the simulation and how it relates to the paper's results.

**Ships as:** A repository with simulation code, plots comparing interrupt overheads, and a README linking the results to the paper's reported metrics.

**Stretch goal:** Add a simple model of pipeline flush impact on latency to deepen the simulation's fidelity.

### Intermediate — Reimplement Tracked Interrupts Microarchitecture Model
*Effort: 2 weekends, ~20 hours*

You implement a simplified tracked interrupts microarchitectural model in software, simulating the instruction fetch redirection mechanism to avoid pipeline flushes. You compare its interrupt delivery latency against a baseline model simulating pipeline flushes (UIPI-like).

**Why it shows you understood the paper:** This project shows you understand the core microarchitectural innovation of tracked interrupts and can reproduce its latency benefits through modeling and comparison.

**Grounded in:** Design and implementation of tracked interrupts that avoid pipeline flushes, reducing interrupt overhead by 3x-9x compared to UIPI.

**Tech stack:** C++, Python 3.11, matplotlib, Linux environment

**Data:** Synthetic data generated by your microarchitectural simulation models; no external dataset required.

**Build it:**

1. Study the paper's description of tracked interrupts and pipeline flush overhead.
2. Implement a baseline interrupt delivery model that simulates pipeline flush latency.
3. Implement a tracked interrupt model that simulates instruction fetch redirection without flush.
4. Run simulations to measure average interrupt delivery latency for both models.
5. Plot and compare the latency results.
6. Document the implementation details and relate findings to the paper.

**Ships as:** Codebase modeling interrupt delivery with and without pipeline flushes, latency comparison plots, and a detailed README explaining the microarchitectural principles.

**Stretch goal:** Incorporate a simple model of branch misprediction and cache miss effects to refine latency estimates.

### Advanced — Explore Partial Pipeline Flush Support for Interrupt Optimization
*Effort: 3-4 weeks*

You design and simulate a microarchitectural extension that supports partial pipeline flushes for interrupt delivery, aiming to reduce latency further while maintaining throughput. You compare this design against the tracked interrupts model and discuss trade-offs.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating deep comprehension of interrupt microarchitecture and the ability to extend and evaluate novel hardware-software co-design ideas.

**Grounded in:** Exploring partial pipeline flush support to further optimize interrupt handling.

**Tech stack:** gem5 simulator, C++, Python 3.11, Linux environment

**Data:** Synthetic workloads modeled in gem5 simulation; no external dataset required.

**Build it:**

1. Familiarize yourself with gem5 and the paper's microarchitectural models of tracked interrupts.
2. Design a partial pipeline flush mechanism in gem5, modifying interrupt delivery logic.
3. Simulate interrupt delivery latency and throughput under this new mechanism.
4. Compare results against baseline tracked interrupts and UIPI models.
5. Analyze trade-offs in complexity, latency, and throughput.
6. Write a comprehensive report linking your findings to the paper's future directions.

**Verified links from the paper:**

- <https://github.com/ArchSecLab/xui> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A gem5 simulation setup with partial pipeline flush support, performance comparison data, and a detailed report discussing architectural implications.

**Stretch goal:** Prototype integration of partial flush support with hardware safepoints for precise interrupt delivery.

_The advanced project requires access to gem5 simulation tools and familiarity with microarchitectural simulation; the intermediate and beginner projects rely on synthetic data derived from the paper as no authors' own code is released._
