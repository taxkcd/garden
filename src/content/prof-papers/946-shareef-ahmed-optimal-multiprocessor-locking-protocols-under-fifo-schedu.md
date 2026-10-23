---
title: "946 · Optimal Multiprocessor Locking Protocols Under FIFO Scheduling — Shareef Ahmed"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shareef-ahmed"
source_hash: "a6d1a902be0e2fad5a89b6ee8196033f19c58b419e7b2742db8ec21a53b5ee82"
sequence: 946
generator: "outreach-garden: managed"
---

# 946 · Optimal Multiprocessor Locking Protocols Under FIFO Scheduling

## At a glance

- **Professor:** Shareef Ahmed
- **Institution:** University of South Florida
- **Paper:** [Optimal Multiprocessor Locking Protocols Under FIFO Scheduling](https://drops.dagstuhl.de/storage/00lipics/lipics-vol262-ecrts2023/LIPIcs.ECRTS.2023.16/LIPIcs.ECRTS.2023.16.pdf)
- **Authors:** Shareef Ahmed, James H. Anderson
- **Year:** 2023

## Paper overview

This paper presents new locking protocols for multiprocessor real-time systems that use FIFO scheduling. These protocols are optimal in minimizing delays caused by tasks waiting to access shared resources, such as locks. The authors introduce protocols for mutual exclusion, k-exclusion, and reader-writer locks that achieve the best possible bounds on blocking delays. They also provide experimental results showing improved system schedulability compared to previous protocols.

### Why it matters

**Research problem:** Existing multiprocessor real-time locking protocols under job-level fixed-priority scheduling have suboptimal bounds on priority-inversion blocking (pi-blocking), especially under FIFO scheduling. No known protocols achieve tight pi-blocking bounds under FIFO scheduling, and the fundamental lower bounds for pi-blocking under such schedulers were unclear.

**Why it matters:** Real-time systems require predictable and bounded delays to ensure timely task execution. Locking protocols that minimize pi-blocking are critical for the dependability and safety of cyber-physical systems like autonomous vehicles and drones. Improving pi-blocking bounds under FIFO scheduling, which is used in industry and has desirable properties, can lead to more efficient and reliable real-time systems.

**Key contributions:**

- Proposed the OLP-F protocol for mutual exclusion locks achieving optimal pi-blocking bounds under C-FIFO scheduling.
- Developed the k-OLP-F protocol for k-exclusion locks with tight pi-blocking bounds under C-FIFO scheduling.
- Introduced the RW-OLP-F protocol for reader-writer locks that achieves optimal read request blocking and near-optimal write request blocking under C-FIFO scheduling.
- Provided refined definitions of suspension-oblivious pi-blocking suitable for arbitrary deadlines and soft real-time constraints.
- Demonstrated experimentally that the proposed protocols improve schedulability compared to existing protocols.

## About the professor

**Shareef Ahmed** — Assistant Professor, Artificial Intelligence, Cybersecurity and Computing, University of South Florida.

Research interests: Ahmed's research sits at the intersection of computer systems and theoretical computer science. He develops foundational approaches to make cyber-physical systems, such as self-driving cars and autonomous drones, more predictable, dependable, and safe. Ahmed focuses on creating mathematical guarantees that ensure these systems behave reliably before they are deployed. He is especially interested in developing scheduling and analysis techniques for complex real-time systems and understanding how to prove those systems will work under defined constraints.

### Research links

- [Faculty/profile page](https://www.usf.edu/ai-cybersecurity-computing/people/faculty/shareef_ahmed.aspx)
- [Professor website](http://shareefahmed.myweb.usf.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=K4jSziQAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/shareef-ahmed-94783a44/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Real-Time Multiprocessor Scheduling
**The paper assumes:** multiprocessor real-time scheduling theory, FIFO scheduling policies, priority inversion and blocking analysis
**Already in this field?** Skip this entirely if you already understand multiprocessor real-time scheduling concepts, including FIFO and JLFP scheduling and their impact on blocking and resource sharing.

To understand the paper on optimal multiprocessor locking protocols under FIFO scheduling, a solid grasp of real-time multiprocessor scheduling concepts—especially FIFO and job-level fixed-priority scheduling—is essential. The rigorous option offers a structured, university-level lecture series on real-time CPU scheduling that covers foundational scheduling algorithms and priority-driven approaches in depth. The fast track provides a concise, clear explainer series on the same topic, ideal for quickly building intuition and core understanding without a large time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Real Time CPU Scheduling](https://www.youtube.com/playlist?list=PLRNkaOMDE7ciMfRqdip7bxUS2R8b_p0he) — Debasish Dalei · 6 videos · 0.7h across 6 episodes

**Watch only this:** Episodes 1-3: Priority Driven Approach For Real Time Scheduling Part -1, Part-2, Rate Monotonic Algorithm Part-1, about 0.3 hours total

*Why it unblocks this paper:* This concise playlist provides a quick yet clear introduction to real-time CPU scheduling concepts relevant to the paper, including priority-driven scheduling and EDF, enabling rapid comprehension of key scheduling policies affecting locking protocols.

*If you want all of it:* 0.7 hours across all 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on optimal multiprocessor locking protocols under FIFO scheduling, start with foundational concepts of priority inversion and pi-blocking, which are central to the problem addressed. Next, build knowledge on FIFO scheduling in real-time systems to grasp the scheduling context. Then, study multiprocessor real-time locking protocols to understand the broader landscape of locking mechanisms. Finally, focus on the paper's core contribution by watching the authors' own lecture on multiprocessor locking, which directly presents their novel protocols and theoretical results.

### Priority inversion and pi-blocking *(prerequisite)*
Priority inversion and pi-blocking are fundamental concurrency problems in real-time systems where lower-priority tasks block higher-priority ones, causing unpredictable delays. Understanding these concepts is essential to appreciate the motivation behind designing optimal locking protocols that minimize such blocking.

*How the paper uses it:* The paper addresses minimizing pi-blocking delays caused by priority inversion under FIFO scheduling.

▶ [Lecture 17: PCP Priority Inversions](https://www.youtube.com/watch?v=S6Mmmwo1Sls) — Real Time Operating System - IITKGP · 27:57 · 8y ago

### FIFO scheduling in real-time systems *(prerequisite)*
FIFO scheduling is a key scheduling policy used in real-time systems, characterized by non-preemptive execution order. Understanding FIFO scheduling's properties and implications is critical to grasp why the paper's protocols leverage FIFO's inherent progress guarantees and how they achieve optimal blocking bounds.

*How the paper uses it:* The paper designs locking protocols specifically tailored for clustered FIFO (C-FIFO) scheduling policies.

▶ [GWU OS: Linux and Real-time Scheduling](https://www.youtube.com/watch?v=KRjBX_lBFYM) — Gabriel Parmer · 1:22:50 · 6y ago

### Multiprocessor real-time locking protocols *(prerequisite)*
Multiprocessor real-time locking protocols manage access to shared resources in systems with multiple processors, balancing concurrency and predictability. Studying these protocols provides context for the paper's contributions and highlights the challenges in achieving optimal blocking bounds under different scheduling policies.

*How the paper uses it:* The paper proposes new multiprocessor locking protocols that improve upon existing ones under FIFO scheduling.

▶ [6. Multicore Programming](https://www.youtube.com/watch?v=dx98pqJvZVk) — MIT OpenCourseWare · 1:16:46 · 7y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This lecture by the paper's authors provides a direct and detailed presentation of their novel locking protocols, including the OLP-F, k-OLP-F, and RW-OLP-F protocols, their optimality proofs, and experimental evaluations. It is the most authoritative and comprehensive resource to understand the paper's core contributions.

*How the paper uses it:* This video is a direct lecture by the authors explaining their optimal multiprocessor locking protocols under FIFO scheduling.

▶ [6.828 Lecture 9: Multiprocessors and Locking](https://www.youtube.com/watch?v=FasJMdOtW5k) — Pedro Cattori · 1:20:51 · 11y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces key concepts needed to understand optimal multiprocessor locking protocols under FIFO scheduling, starting from foundational ideas about priority inversion and pi-blocking, then explaining FIFO scheduling in real-time systems, followed by multiprocessor real-time locking protocols, and concluding with the paper's core technique of suspension-based locking protocols. Each step builds intuition about how tasks contend for shared resources and how scheduling policies affect blocking delays, culminating in the specialized protocols proposed in the paper.

### Priority inversion and pi-blocking *(prerequisite)*
Priority inversion occurs when a low-priority task holds a resource needed by a higher-priority task, causing the higher-priority task to be blocked. Pi-blocking (priority-inversion blocking) quantifies the delay caused by such inversions in real-time systems. Understanding this problem is essential to grasp why specialized locking protocols are needed to minimize blocking delays.

*How the paper uses it:* The paper addresses minimizing pi-blocking delays caused by priority inversion under FIFO scheduling.

▶ [Introduction to RTOS Part 11 - Priority Inversion | Digi-Key Electronics](https://www.youtube.com/watch?v=C2xKhxROmhA) — DigiKey · 12:35 · 5y ago

### FIFO scheduling in real-time systems *(prerequisite)*
FIFO scheduling executes tasks in the order they arrive without preemption, which simplifies reasoning about task progress and blocking. In real-time systems, FIFO scheduling has desirable properties for predictability but poses unique challenges for locking protocols. Understanding FIFO scheduling lays the groundwork for appreciating the paper's protocol designs.

*How the paper uses it:* The paper designs locking protocols specifically optimized for clustered FIFO (C-FIFO) scheduling policies.

▶ [SCHED_FIFO vs SCHED_DEADLINE Explained | Deterministic Real-Time Linux Performance](https://www.youtube.com/watch?v=2oM7UcClFqk) — SystemDR - Scalable System Design · 9:39 · 8mo ago

### Multiprocessor real-time locking protocols *(prerequisite)*
Locking protocols coordinate access to shared resources among tasks running on multiple processors to avoid conflicts and ensure timing guarantees. Multiprocessor real-time locking protocols must minimize blocking delays and priority inversion to maintain system predictability. This concept provides the context for the paper's contributions in improving such protocols under FIFO scheduling.

*How the paper uses it:* The paper proposes new multiprocessor locking protocols that achieve optimal blocking bounds under FIFO scheduling.

▶ [Operating Systems Lecture 13: Locks](https://www.youtube.com/watch?v=EBevKfTDXUI) — Mythili Vutukuru · 25:14 · 8y ago

### Suspension-based locking protocols
Suspension-based locking protocols allow tasks to suspend themselves while waiting for a lock instead of busy-waiting, reducing CPU waste and improving schedulability. These protocols leverage scheduling properties to avoid complex priority inheritance mechanisms. Understanding this technique is key to grasping how the paper achieves optimal blocking bounds without explicit progress mechanisms.

*How the paper uses it:* The paper's OLP-F, k-OLP-F, and RW-OLP-F protocols are suspension-based and tailored for FIFO scheduling.

▶ [Lock based protocol in database | concurrency control techniques | DBMS | Lec-62 | Bhanu Priya](https://www.youtube.com/watch?v=s1YEg1L0sH0) — Education 4u · 12:26 · 8y ago

## Already in your library

- [17. Synchronization Without Locks](https://www.youtube.com/watch?v=5sZo3SrLrGA) — also for: Big Atomics: Non-Blocking Algorithms with a Direct Fast Path (Guy E. Blelloch)
- [Introduction to RTOS Part 3 - Task Scheduling | Digi-Key ...](https://www.youtube.com/watch?v=95yUbClyf3E) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's contributions on optimal multiprocessor locking protocols under FIFO scheduling. The beginner project reproduces a core protocol mechanism and blocking bound visualization using your existing skills. The intermediate project builds on the authors' released code to experimentally compare the OLP-F protocol's schedulability improvements against a baseline. The advanced project tackles a stated limitation by exploring protocol adaptations beyond FIFO scheduling, requiring new design and analysis.

### Beginner — Visualize OLP-F Mutex Lock Blocking Bounds
*Effort: a weekend, ~8 hours*

You build a small simulation in C++ or Python that models the OLP-F protocol's mutual exclusion locking behavior under clustered FIFO scheduling. The simulation tracks request blocking delays for tasks contending on a shared lock and visualizes the maximum blocking bound of m - 1 request lengths as proven in the paper.

**Why it shows you understood the paper:** This project shows you understand the OLP-F protocol's core mechanism and the fundamental pi-blocking bound under FIFO scheduling by reproducing the key theoretical result in a simple, concrete simulation.

**Grounded in:** The OLP-F protocol ensures no release blocking and request blocking bounded by m - 1 request lengths.

**Tech stack:** C++ or Python 3.11, Matplotlib or similar plotting library

**Data:** Synthetic task request sequences generated to simulate lock contention under clustered FIFO scheduling, based on descriptions in the paper.

**Build it:**

1. Implement a simple clustered FIFO scheduler simulation for m processors.
2. Model tasks requesting a single mutex lock under the OLP-F protocol rules.
3. Track and record the blocking delays experienced by each lock request.
4. Plot the maximum blocking delay against the number of processors to illustrate the m - 1 request length bound.
5. Write a README explaining the protocol, simulation setup, and results.

**Ships as:** A repository containing the simulation code, plots showing blocking bounds, and a README explaining how the results demonstrate the OLP-F protocol's optimal pi-blocking bound.

**Stretch goal:** Extend the simulation to visualize how blocking delays change with varying numbers of tasks and lock request lengths.

### Intermediate — Evaluate OLP-F Protocol Schedulability Using Authors' Code
*Effort: 1-3 weekends*

You clone and run the authors' fifo-lock GitHub repository to reproduce their experimental evaluation of the OLP-F protocol. You then implement a simple baseline locking protocol (e.g., a naive FIFO lock) and compare its schedulability results against OLP-F using the SchedCAT toolkit for schedulability testing.

**Why it shows you understood the paper:** By running and extending the authors' code, you demonstrate comprehension of the protocol's design and its practical impact on real-time system schedulability, as well as the ability to conduct comparative experiments.

**Grounded in:** Experimental results indicate average schedulability improvements of 14.9% to 27.5% over prior protocols for mutex locks.

**Tech stack:** Python 3.11, Linux shell, SchedCAT toolkit, Git

**Data:** Use the synthetic task sets and workload models provided or generated by the authors' fifo-lock repository and SchedCAT toolkit.

**Build it:**

1. Clone and set up the fifo-lock repository from https://github.com/Tamal10/fifo-lock.
2. Run the existing experiments to reproduce the OLP-F protocol's schedulability results.
3. Implement a simple baseline FIFO locking protocol within the same framework.
4. Use the SchedCAT toolkit (https://github.com/brandenburg/schedcat) to perform schedulability tests for both protocols.
5. Analyze and plot the comparative schedulability results.
6. Document the setup, methodology, and findings in a detailed README.

**Verified links from the paper:**

- <https://github.com/Tamal10/fifo-lock> — released by the paper's authors
- <https://github.com/brandenburg/schedcat> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repository with the extended codebase, scripts to run experiments, comparative schedulability plots, and a README explaining the experimental setup and results.

**Stretch goal:** Add evaluation of the k-OLP-F protocol for k-exclusion locks and compare against the baseline.

### Advanced — Adapt OLP-F Protocol Concepts Beyond FIFO Scheduling
*Effort: a few weeks*

You design and prototype an adaptation of the OLP-F locking protocol principles to a non-FIFO job-level fixed-priority (JLFP) scheduler. This involves modifying the protocol to handle different scheduling properties, analyzing the resulting pi-blocking bounds, and implementing a simulation to evaluate blocking delays compared to the FIFO case.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation from the paper by extending the protocol beyond FIFO scheduling, demonstrating deep understanding of the protocol's assumptions and challenges in proving tight bounds under other schedulers.

**Grounded in:** Investigate whether 2m - 1 request lengths is a tight lower bound for pi-blocking under non-FIFO JLFP schedulers.

**Tech stack:** C++ or Python 3.11, Matplotlib or similar, Git, Linux shell

**Data:** Synthetic task sets designed to model non-FIFO JLFP scheduling scenarios, generated based on descriptions from the paper and related literature.

**Build it:**

1. Study the OLP-F protocol design and its reliance on FIFO scheduling properties.
2. Design modifications to the protocol to work under a chosen non-FIFO JLFP scheduler.
3. Implement a simulation framework modeling the adapted protocol and scheduler.
4. Measure and analyze pi-blocking delays and compare them to the FIFO baseline.
5. Document the design rationale, implementation details, and experimental findings.
6. Optionally, attempt to formalize or conjecture pi-blocking bounds for the adapted protocol.

**Ships as:** A repository containing the adapted protocol implementation, simulation code, analysis plots, and a comprehensive README discussing the protocol adaptation challenges and results.

**Stretch goal:** Develop a schedulability test for the adapted protocol under the non-FIFO scheduler and validate it experimentally.

_The authors' fifo-lock repository provides code for the protocols under clustered FIFO scheduling but does not include implementations for non-FIFO schedulers; the advanced project requires protocol design from the paper's descriptions and related literature._
