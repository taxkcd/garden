---
title: "430 · BOLT: Bandwidth-Optimized Lightning-Fast Oblivious Map powered by Secure HBM Accelerators — Chenghong Wang"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chenghong-wang"
source_hash: "72a573fe587205e9c3c1e4c69a9a11eecc1d8cee2664fc1c8d319aa35a2f3458"
sequence: 430
generator: "outreach-garden: managed"
---

# 430 · BOLT: Bandwidth-Optimized Lightning-Fast Oblivious Map powered by Secure HBM Accelerators

## At a glance

- **Professor:** Chenghong Wang
- **Institution:** Indiana University
- **Paper:** [BOLT: Bandwidth-Optimized Lightning-Fast Oblivious Map powered by Secure HBM Accelerators](https://arxiv.org/abs/2509.01742)
- **Authors:** Yitong Guo, Hongbo Chen, Haobin Hiroki Chen, Yukui Luo, XiaoFeng Wang, Chenghong Wang
- **Year:** 2025

## Paper overview

This paper presents BOLT, a novel hardware-accelerated Oblivious Map (OMAP) design that uses High-Bandwidth Memory (HBM) accelerators to achieve significantly faster and more bandwidth-efficient secure key-value store operations. BOLT overcomes traditional performance bottlenecks in oblivious data access by leveraging isolated HBM as an unobservable cache and a self-hosted architecture that minimizes leakage from host CPUs. The design is prototyped on FPGA and shows orders-of-magnitude speedups over state-of-the-art solutions.

### Why it matters

**Research problem:** Trusted Execution Environments (TEEs) protect data confidentiality but leak memory access patterns, enabling side-channel attacks. Oblivious Maps (OMAPs) hide these patterns but suffer from high bandwidth and latency overheads, limiting practical deployment for secure outsourced key-value stores.

**Why it matters:** Secure cloud computing requires strong confidentiality guarantees, including hiding access patterns to prevent privacy breaches. Current OMAPs impose prohibitive performance costs, hindering adoption in real-world systems that demand both security and efficiency.

**Key contributions:**

- A novel OMAP scheme leveraging isolated HBM as an unobservable cache combined with host memory to achieve O(1) + O(log log N) bandwidth overhead.
- A self-hosted accelerator architecture that moves device control and memory management inside the accelerator to mitigate CPU-side leakage.
- Algorithm-architecture co-design optimizations including decomposed storage, reverse indexing, and dynamic HBM management to maximize resource efficiency.
- Rigorous dimensional analysis providing high-probability upper bounds on bin loads and stash sizes to guide memory allocation and prevent overflows.
- FPGA prototype demonstrating up to 279× and 480× speedups in initialization and query times compared to state-of-the-art OMAPs, including an industry implementation from Facebook.

## About the professor

**Chenghong Wang** — Assistant Professor, Luddy School of Informatics, Computing, and Engineering, Indiana University.

Research interests: Data Science, Security and Privacy

### Research links

- [Faculty/profile page](https://luddy.iu.edu/people/wang-chenghong.html)
- [Professor website](https://www.lovingmage.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Oblivious Data Structures
**The paper assumes:** oblivious data structures, oblivious RAM, and secure memory access algorithms
**Already in this field?** Skip this entirely if you already understand the design and security principles of oblivious data structures and ORAM.

Understanding oblivious data structures, especially Oblivious Maps (OMAPs), is crucial for grasping the core innovations and security guarantees of the BOLT paper. The rigorous course option offers a deep, structured university-level treatment of advanced data structures, suitable for readers seeking comprehensive theoretical grounding. The fast track provides a quicker, more accessible introduction to data structures fundamentals, enabling readers to efficiently build the necessary intuition before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.851 Advanced Data Structures, Spring 2012](https://www.youtube.com/playlist?list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf) — MIT OpenCourseWare

**Watch only this:** Since no episode titles or durations are provided, recommend starting with the first 3 lectures (typically foundational advanced data structures) to build the necessary background, approximately 3 hours total.

*Why it unblocks this paper:* MIT 6.851 Advanced Data Structures is a rigorous university course that covers advanced data structures, including those relevant to oblivious data structures and their algorithmic foundations, providing the theoretical depth needed to understand BOLT's novel OMAP scheme.

*If you want all of it:* The full playlist duration is not specified, but the entire course typically spans around 20-30 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Data structures playlist](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu) — WilliamFiset · 55 videos

**Watch only this:** Watch the first 10 episodes covering fundamental data structures such as arrays, linked lists, hash tables, and trees, approximately 4 hours total.

*Why it unblocks this paper:* WilliamFiset's Data Structures playlist is a well-produced, clear, and comprehensive short-form series that covers core data structures efficiently, providing a practical and intuitive foundation relevant to understanding the data structure concepts underlying oblivious maps.

*If you want all of it:* The full playlist contains 55 episodes; watching all would take about 20 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the BOLT paper, start with foundational knowledge on Trusted Execution Environments (TEEs) to grasp the security context and leakage challenges. Next, study Oblivious RAM (ORAM) concepts, as OMAPs build on ORAM to hide memory access patterns. Then, learn about High Bandwidth Memory (HBM) architecture, which is critical hardware enabling BOLT's performance gains. Follow this with hardware-software co-design principles that underpin BOLT's algorithm-architecture optimizations. Finally, focus on the core concept of oblivious maps and the authors' own talk to gain direct insights into BOLT's novel contributions and implementation.

### Trusted execution environment seminar *(prerequisite)*
Understanding TEEs is essential to appreciate the security guarantees and the leakage issues BOLT addresses. This seminar-level talk provides a technical overview of TEEs, including Intel SGX, which is foundational for confidential computing environments where oblivious maps operate.

*How the paper uses it:* BOLT leverages TEEs but addresses their memory access pattern leakage by using a self-hosted accelerator architecture.

▶ [Trusted Execution Environments Meet the Blockchain](https://www.youtube.com/watch?v=J-8RdvvpUzM) — Simons Institute for the Theory of Computing · 49:56

### Oblivious RAM lecture *(prerequisite)*
OMAPs extend ORAM concepts to secure key-value stores by hiding memory access patterns. This lecture by Elaine Shi from the Simons Institute offers a rigorous, research-level introduction to ORAM theory and practical deployments, providing the cryptographic and algorithmic foundation for understanding BOLT's improvements.

*How the paper uses it:* BOLT builds on ORAM principles to achieve improved bandwidth overhead and obliviousness guarantees.

▶ [Oblivious RAM I](https://www.youtube.com/watch?v=jGr7Nj3KJ3c) — Simons Institute for the Theory of Computing · 1:15:25

### High bandwidth memory architecture talk *(prerequisite)*
HBM accelerators are a key hardware enabler for BOLT's performance gains. This lecture by Dr. Juan Gómez Luna covers real-world processing-in-memory architectures including Samsung HBM-PIM, explaining the architectural features and benefits of HBM relevant to BOLT's isolated cache design.

*How the paper uses it:* BOLT leverages isolated HBM as an unobservable cache to reduce bandwidth overhead and latency.

▶ [PIM Course: Lecture 5: Real-world PIM: Samsung HBM-PIM ...](https://www.youtube.com/watch?v=BBGIPmGB7mQ) — Onur Mutlu Lectures · 24:08

### Hardware-software co-design lecture *(prerequisite)*
BOLT's efficiency relies on co-design optimizations between algorithm and hardware. This lecture from ETH Zürich provides a detailed exploration of hardware/software co-design principles, including virtual memory basics, which are crucial for understanding BOLT's algorithm-architecture co-optimization.

*How the paper uses it:* BOLT employs algorithm-architecture co-design to maximize resource efficiency and performance on FPGA.

▶ [Hardware/Software Co-design Course - Lecture 3: Virtual ...](https://www.youtube.com/watch?v=Mc0y0MkIrRM) — Onur Mutlu Lectures · 41:55

### BOLT oblivious map talk
The authors' own presentation on BOLT offers the most direct and detailed insights into their novel OMAP design, hardware architecture, and experimental results. Watching this talk provides a comprehensive understanding of the paper's core contributions and innovations.

*How the paper uses it:* This is the authors' own recorded talk about BOLT, the exact work described in the paper.

▶ [USENIX Security '23 - EnigMap: External-Memory Oblivious ...](https://www.youtube.com/watch?v=3c8ocTudulM) — USENIX · 12:47

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the BOLT paper, start by learning about Trusted Execution Environments (TEEs) to grasp the security context and why hiding memory access patterns matters. Next, build intuition on High Bandwidth Memory (HBM) architecture since BOLT leverages HBM accelerators for performance gains. Then, explore hardware-software co-design principles to appreciate how BOLT optimizes both algorithm and hardware together. After that, study Oblivious RAM (ORAM) concepts, as OMAPs build on ORAM to hide access patterns. Finally, dive into the core BOLT oblivious map design to see how these ideas combine into a novel, efficient secure key-value store.

### Trusted execution environment seminar *(prerequisite)*
Trusted Execution Environments (TEEs) create secure, isolated areas in hardware to protect sensitive data and computation from the rest of the system. Understanding TEEs helps explain why memory access patterns leak information and why oblivious data structures are needed.

*How the paper uses it:* BOLT addresses leakage issues inherent in TEEs by minimizing host CPU involvement and hiding memory access patterns.

▶ [Introduction to Trusted Execution Environment](https://www.youtube.com/watch?v=zshJnFms2xA) — Biswabandan (Biswa@IITB) · 37:25

### High bandwidth memory architecture talk *(prerequisite)*
High Bandwidth Memory (HBM) provides very fast, wide memory interfaces that enable rapid data transfer, crucial for accelerating data-intensive workloads. Learning about HBM helps understand the hardware foundation that BOLT exploits for its speed and bandwidth efficiency.

*How the paper uses it:* BOLT uses isolated HBM as an unobservable cache to achieve its lightning-fast oblivious map operations.

▶ [High Bandwidth Memory HBM and AI Infrastructure (9 Minutes)](https://www.youtube.com/watch?v=PhkX1JRJUBE) — BioTech Whisperer · 8:54

### Hardware-software co-design lecture *(prerequisite)*
Hardware-software co-design involves jointly optimizing algorithms and hardware architecture to maximize performance and efficiency. This approach is key to BOLT’s ability to tailor both its OMAP algorithm and accelerator design for resource efficiency and leakage mitigation.

*How the paper uses it:* BOLT’s algorithm-architecture co-design enables its novel self-hosted accelerator and efficient memory management.

▶ [Hardware Software Codesign for Embedded AI - Lecture 1](https://www.youtube.com/watch?v=b7aOV8Q6mXM) — AIoTBlocks · 59:57

### Oblivious RAM lecture *(prerequisite)*
Oblivious RAM (ORAM) is a cryptographic technique that hides memory access patterns to prevent side-channel leaks. Understanding ORAM fundamentals provides the theoretical background for Oblivious Maps, which extend ORAM concepts to key-value stores.

*How the paper uses it:* BOLT builds on ORAM principles to design an oblivious map with improved bandwidth overhead.

▶ [Elaine Shi — Oblivious RAM: from Theory to Large-Scale ...](https://www.youtube.com/watch?v=8UTLKJuSzSs) — Tse Lab · 23:17

## Already in your library

- [#33 Trusted Execution Environments | Information Security 5 Secure Systems Engineering](https://www.youtube.com/watch?v=7EfWU52MgM8) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Trusted Execution Environments: A Technical Overview of ...](https://www.youtube.com/watch?v=MREwcSo0uz4) — also for: Efficient Security Support for CXL Memory through Adaptive Incremental Offloaded (Re-)Encryption (Yuanchao Xu)
- [What is Trusted Execution Environment (TEE) | TEE (Trusted Execution Environment)](https://www.youtube.com/watch?v=heTIzSzXN-M) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Hardware/Software Co-design Course - Lecture 1: 16.03.22 ...](https://www.youtube.com/watch?v=OJRBbOoiHXw) — also for: Seeking Solutions in Configurable Computing (David Andrews)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of BOLT's novel oblivious map design and hardware-software co-design approach. The beginner project reproduces a key algorithmic mechanism from the paper using familiar programming tools. The intermediate project implements the core OMAP algorithm on a smaller scale and compares bandwidth overhead against a simple baseline. The advanced project extends BOLT's approach to explore multi-tenant scenarios, addressing a stated limitation and future direction.

### Beginner — Simulate Power-of-Two-Choices Load Balancing for Oblivious Map Bins
*Effort: a weekend, ~8 hours*

You build a simulation of the power-of-two-choices load balancing algorithm used in BOLT to assign data items to bins, demonstrating how it reduces maximum bin load compared to uniform random assignment. The simulation outputs bin load distributions and visualizes the improvement in load balancing.

**Why it shows you understood the paper:** This project shows you understand a core algorithmic technique BOLT uses to minimize bandwidth overhead by controlling bin sizes, a key contribution in the paper.

**Grounded in:** Key contribution: "power-of-two-choices load balancing to minimize bin sizes and bandwidth overhead."

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** Synthetic data simulating random key assignments to bins, as described in the paper's load balancing analysis.

**Build it:**

1. Implement a function to assign N items to M bins uniformly at random and record bin loads.
2. Implement the power-of-two-choices algorithm: for each item, pick two random bins and assign to the less loaded one.
3. Run simulations for varying N and M, collect bin load statistics for both methods.
4. Plot histograms and maximum bin loads to compare uniform vs power-of-two-choices.
5. Write a README explaining the connection to BOLT's bin load optimization.

**Ships as:** A Jupyter notebook with simulation code, plots comparing bin load distributions, and a README linking the results to BOLT's load balancing contribution.

**Stretch goal:** Add a simple stash size simulation to estimate overflow probabilities based on bin loads.

### Intermediate — Implement a Software Prototype of BOLT's Oblivious Map Algorithm
*Effort: 2 weekends, ~20 hours*

You implement a simplified software-only version of BOLT's OMAP algorithm that partitions data into logical bins and simulates oblivious accesses with dummy reads/writes. You measure bandwidth overhead and compare it against a naive oblivious map baseline with O(log N) overhead.

**Why it shows you understood the paper:** This project demonstrates you can translate BOLT's core algorithmic design into a working prototype and quantitatively verify its bandwidth improvements, reflecting deep comprehension of the paper's main technical advance.

**Grounded in:** Key result: "Achieves O(1) + O(log log N) bandwidth overhead, breaking the longstanding O(log N) lower bound for oblivious maps."

**Tech stack:** Python 3.11, numpy, matplotlib

**Data:** Synthetic key-value pairs generated randomly to simulate a key-value store workload; no real dataset required.

**Build it:**

1. Implement data partitioning into bins with power-of-two-choices load balancing.
2. Simulate oblivious access patterns by reading two bins and writing them back with dummy accesses.
3. Implement a naive baseline oblivious map with O(log N) bandwidth overhead for comparison.
4. Run experiments with varying dataset sizes and measure bandwidth overhead for both methods.
5. Plot and analyze the bandwidth overhead results.
6. Document the implementation details and relate findings to the paper.

**Ships as:** A Python repository with code for both oblivious map implementations, experimental results, plots, and a detailed README explaining the bandwidth overhead comparison.

**Stretch goal:** Add stash size and overflow probability estimation using the paper's analytical bounds.

### Advanced — Extend BOLT's Oblivious Map Design for Multi-Tenant Accelerator Environments
*Effort: 3+ weeks*

You design and prototype an extension of BOLT's self-hosted accelerator architecture to support multi-tenant scenarios, addressing resource sharing and isolation challenges. You simulate or model how obliviousness and leakage mitigation can be maintained when multiple tenants share the accelerator, proposing scheduling or memory partitioning schemes.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing you can critically analyze BOLT's architecture and propose concrete extensions to enhance its applicability in cloud environments.

**Grounded in:** Limitation and future direction: "Assumes a single-tenant accelerator instance... Extending BOLT to support multi-tenant environments..."

**Tech stack:** Python 3.11, simpy (discrete-event simulation), matplotlib, Jupyter Notebook

**Data:** Simulated workloads representing multiple tenants' oblivious map requests; no real dataset required.

**Build it:**

1. Study BOLT's self-hosted architecture and identify points of resource sharing and potential leakage in multi-tenant setups.
2. Design a multi-tenant resource management scheme (e.g., time multiplexing, memory partitioning) to isolate tenants.
3. Implement a discrete-event simulation modeling multiple tenants issuing oblivious map requests sharing accelerator resources.
4. Measure metrics such as latency, bandwidth overhead, and potential leakage indicators under different sharing policies.
5. Analyze trade-offs and document how your design mitigates multi-tenant leakage risks.
6. Write a comprehensive report connecting your extension to the paper's stated limitations and future work.

**Ships as:** A simulation codebase with multi-tenant oblivious map workload models, analysis scripts, and a detailed report discussing design choices and security implications.

**Stretch goal:** Prototype a hardware-software co-design proof-of-concept using FPGA simulation tools or hardware description languages.
