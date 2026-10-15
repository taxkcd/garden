---
title: "642 · HiLFS: FPGA-Orchestrated File System for High-Level Synthesis — André DeHon"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andre-dehon"
source_hash: "142f559f2d7366fa302b483317277b05be7538c4966ad060b9331644426ea1b0"
sequence: 642
generator: "outreach-garden: managed"
---

# 642 · HiLFS: FPGA-Orchestrated File System for High-Level Synthesis

## At a glance

- **Professor:** André DeHon
- **Institution:** University of Pennsylvania
- **Paper:** [HiLFS: FPGA-Orchestrated File System for High-Level Synthesis](https://doi.org/10.1145/3748173.3779207)
- **Authors:** YoungSeok Na, Linus Y. Wong, André DeHon, Jing (Jane) Li
- **Year:** 2026

## Paper overview

This paper presents HiLFS, the first file system and storage stack fully integrated within FPGA hardware for High-Level Synthesis (HLS). HiLFS provides a POSIX-like interface that simplifies programming by allowing FPGA kernels to access storage like CPUs do, without host CPU mediation. It supports rich file system features such as data integrity, crash consistency, durability, and concurrent access. HiLFS significantly improves programmability and performance for data- and I/O-intensive applications, including large language model inference, closing the gap between FPGA and GPU deployments.

### Why it matters

**Research problem:** Modern FPGA systems lack direct file system support for high-speed storage devices, forcing reliance on host CPUs or low-level block access. This results in high latency, programming complexity, and poor scalability for large-scale, data-intensive applications like large language models (LLMs). There is a 100× scalability gap between FPGA and GPU platforms due to these limitations.

**Why it matters:** As data- and I/O-intensive workloads grow, especially with large-scale LLMs requiring massive model parameters and datasets, efficient storage access is critical. GPUs have advanced storage architectures enabling large model deployment, but FPGAs lag behind due to lack of integrated file system support. Bridging this gap can unlock FPGA's energy efficiency and performance benefits for modern AI workloads.

**Key contributions:**

- Identification of key scalability and programmability limitations in current FPGA HLS storage solutions causing a 100× gap with GPUs.
- Development of HiLFS, the first FPGA-integrated file system for HLS that provides a POSIX-like interface and rich file system semantics.
- Implementation and prototyping of HiLFS on AMD/Xilinx Alveo U200 FPGA with Solidigm DC-P4610 SSD.
- Demonstration of HiLFS outperforming Nvidia Titan RTX GPU in performance and energy efficiency on Mixtral 8×7B LLM inference.
- Significant reduction in programming complexity, with lines of code reduced by up to 10.9× compared to block-level storage platforms.

## About the professor

**André DeHon** — Oliver C. Boileau Jr. and Nan Eleze Boileau Professor of Electrical Engineering, Electrical and Systems Engineering, University of Pennsylvania.

Research interests: Reconfigurable computing, FPGA (Field-Programmable Gate Array) architectures, interconnects, security, reliability, energy efficiency, performance

### Research links

- [Faculty/profile page](https://www.seas.upenn.edu/~andre)
- [Lab website](http://ic.ese.upenn.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** File Systems and Storage Architecture
**The paper assumes:** file system design, storage device architecture, and POSIX file system semantics
**Already in this field?** Skip this entirely if you already understand how file systems manage storage devices, metadata, and provide POSIX-like interfaces.

This background focuses on file systems and storage architecture, essential for understanding the design and implementation of HiLFS, an FPGA-integrated file system for high-level synthesis. The rigorous course provides a deep, structured foundation in operating systems and file system concepts, while the fast track offers a concise, targeted overview of file system management principles. Choose the course for comprehensive study or the fast track for a quick, practical grasp of key ideas.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS 377 Spring '14: Operating Systems](https://www.youtube.com/playlist?list=PLacuG5pysFbDQU8kKxbUh4K5c1iL5_k7k) — UMass OS · 23 videos · 26.5h across 23 episodes

**Watch only this:** Lectures 15 to 17 (File Systems: Interface, File Systems: Implementation, Mass storage and disk scheduling), about 3.5 hours — these cover file system semantics, metadata management, and storage device interaction crucial for HiLFS.

*Why it unblocks this paper:* This university-level Operating Systems course from UMass covers file system interfaces, implementation, and storage management in depth, directly relevant to understanding HiLFS's POSIX-like interface, metadata caching, and block storage layers.

*If you want all of it:* 26.5 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Operating System - File System Management](https://www.youtube.com/playlist?list=PLySKRj7KSLYgS9jVyonZTFpiYkIzZXF2-) — Monika Verma · 11 videos · 1.9h across 11 episodes

**Watch only this:** Episodes 1 to 6 (Introduction to File System Management | File Types through File Allocation Methods | Indexed Allocation), about 1 hour — covers fundamental file system concepts and allocation strategies relevant to HiLFS design.

*Why it unblocks this paper:* This concise playlist on Operating System File System Management provides clear, focused explanations of file system basics, allocation methods, directory structures, and file sharing, giving a practical overview of file system concepts needed to understand HiLFS.

*If you want all of it:* 1.9 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HiLFS paper, start with foundational knowledge of High-Level Synthesis (HLS) for FPGAs, as it is essential to grasp how FPGA kernels interact with the file system. Next, build understanding of NVMe SSD storage management and crash consistency in file systems, which are critical to HiLFS's architecture and guarantees. Finally, focus on the core concept of FPGA-integrated file system architecture and the authors' own talk or closest substitute presenting their novel FPGA file system design, to directly connect theory with the paper's contributions.

### High level synthesis FPGA lecture *(prerequisite)*
High-Level Synthesis (HLS) is crucial to understand how FPGA kernels are programmed and how they interact with hardware components like the file system. This lecture provides an advanced, university-level treatment of HLS, covering design and optimization techniques relevant to FPGA programming.

*How the paper uses it:* HiLFS exposes a POSIX-like file interface to HLS kernels, so understanding HLS is foundational to grasping how the file system integrates with FPGA programming.

▶ [Lecture 07 for "Practical FPGA Design" LTTO.00.034](https://www.youtube.com/watch?v=XQInTDyVWwk) — Tartu Observatory · 54:34

### NVMe SSD storage management lecture *(prerequisite)*
NVMe SSDs are the storage devices HiLFS interfaces with at the block level. A detailed lecture on NVMe technology and hardware implementations provides the necessary background on storage protocols and performance characteristics critical to HiLFS's design.

*How the paper uses it:* HiLFS interfaces directly with NVMe SSDs for block-level storage access, making NVMe understanding essential.

▶ [NVME-101-1, Part 2: NVMe™: Hardware Implementations and Key Benefits in Environments](https://www.youtube.com/watch?v=h2f8fda1Fn0) — NVM Express · 1:01:58 · 8 yr ago

### Crash consistency file systems talk *(prerequisite)*
Crash consistency is a key feature of HiLFS, ensuring durability and reliability of file system state after failures. This talk covers crash consistency mechanisms in file systems at an advanced level, providing context for HiLFS's metadata snapshot approach.

*How the paper uses it:* HiLFS ensures crash consistency and durability through metadata snapshots, so understanding crash consistency concepts is important.

▶ [OSDI '25 - Fast and Synchronous Crash Consistency with Metadata Write-Once File System](https://www.youtube.com/watch?v=dXyjTnzjl48) — USENIX · 1 yr ago

### FPGA integrated file system architecture
This concept covers embedding full file system functionality within FPGA hardware, which is the central innovation of HiLFS. Understanding FPGA architecture and how file system layers can be integrated is critical to appreciating the paper's contributions.

*How the paper uses it:* HiLFS integrates a full file system and block-level storage management entirely within the FPGA fabric, making this concept core to the paper.

▶ [FPGA & SoC Hardware Design - Xilinx Zynq](https://www.youtube.com/watch?v=Wt6aske1K10) — Phil’s Lab · 23:54

### HiLFS FPGA file system talk *(paper-talk search result; attribution unverified)*
The authors' own talk or closest available presentation on their FPGA-integrated file system provides direct insights into their design decisions, architecture, and evaluation. This is the most authoritative source to understand the paper's novel contributions.

*How the paper uses it:* This is the authors' own presentation of their novel FPGA-integrated file system, the core contribution of the paper.

▶ [The Ins and Outs of FPGA IO](https://www.youtube.com/watch?v=dnk6_uN5UyE) — Alchitry · 12:09 · 10 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HiLFS paper, start by learning the basics of High-Level Synthesis (HLS) on FPGAs, which is essential to grasp how FPGA kernels operate and interact with hardware. Next, build intuition about the POSIX file system interface, since HiLFS exposes a POSIX-like API to simplify programming. Then, learn about NVMe SSD storage management to understand the underlying storage hardware HiLFS interfaces with. Finally, explore the core concept of FPGA-integrated file system architecture, which is the novel contribution of HiLFS, embedding full file system functionality within FPGA hardware.

### High level synthesis FPGA lecture *(prerequisite)*
High-Level Synthesis (HLS) allows programmers to write FPGA designs using high-level languages like C/C++, abstracting away low-level hardware details. Understanding HLS is crucial to see how FPGA kernels are created and how they can interact with file systems like HiLFS.

*How the paper uses it:* HiLFS exposes a POSIX-like file interface to HLS kernels, enabling seamless programming within FPGA hardware.

▶ [Part01 Introduction (HLS Programming with FPGAs)](https://www.youtube.com/watch?v=6Jn8Vj3Hk5Y) — Youngkyu Choi · 29:26

### POSIX file system interface seminar *(prerequisite)*
The POSIX file system interface is a standardized API that allows programs to perform file operations like open, read, write, and close in a consistent way. Learning this interface helps understand how HiLFS simplifies FPGA programming by providing a familiar file system API.

*How the paper uses it:* HiLFS provides a POSIX-like API to simplify programming and enable compatibility with CPU applications.

▶ [POSIX Explained for Beginners](https://www.youtube.com/watch?v=nqq1H25JcNE) — Bit Byte Talks · 12:39 · 2 mo ago

### NVMe SSD storage management lecture *(prerequisite)*
NVMe SSDs are high-speed storage devices that communicate over PCIe, offering low latency and high throughput. Understanding NVMe basics clarifies how HiLFS manages block-level storage directly within the FPGA.

*How the paper uses it:* HiLFS interfaces directly with NVMe SSDs for block-level storage access, eliminating host CPU mediation.

▶ [What is NVMe? Understanding storage speeds (beginner's guide)](https://www.youtube.com/watch?v=AXoDZF61-c4) — Hostinger Academy · 6:43 · 3 yr ago

### FPGA integrated file system architecture
Embedding a full file system within FPGA hardware is a novel approach that improves programmability and performance for data-intensive applications. This concept covers how HiLFS integrates file system layers and storage management inside the FPGA fabric.

*How the paper uses it:* HiLFS integrates a full file system and block-level storage management entirely within the FPGA fabric, exposing a POSIX-like API to HLS kernels.

▶ [FPGA & SoC Hardware Design - Xilinx Zynq](https://www.youtube.com/watch?v=Wt6aske1K10) — Phil’s Lab · 23:54

## Already in your library

- [Introduction to FPGA Part 1 - What is an FPGA? | Digi-Key ...](https://www.youtube.com/watch?v=lLg1AgA2Xoo) — also for: Coordinating Instruments for Multi-Messenger Astrophysics (Jeremy Buhler)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of HiLFS, the FPGA-integrated file system for high-level synthesis. Starting with a beginner-level simulation of file system metadata caching, you then implement a simplified FPGA-like file system layer with concurrency and crash consistency features. Finally, you extend the design to address one of the paper's limitations by exploring finer-grained crash consistency mechanisms, showing a genuine research-oriented extension.

### Beginner — Simulate Metadata Cache Impact on File Access Latency
*Effort: a weekend, ~8 hours*

You build a software simulation in Python that models the effect of an on-chip metadata cache on file access latency. The simulation compares file access times with and without metadata caching, using synthetic file access patterns to mimic FPGA kernel workloads.

**Why it shows you understood the paper:** This project demonstrates your grasp of the importance of metadata caching in HiLFS and its impact on performance, as well as the trade-offs involved in caching strategies within FPGA-integrated file systems.

**Grounded in:** Metadata cache significantly improves performance, with up to 13.6% degradation when disabled.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Synthetic file access patterns generated to simulate typical FPGA kernel file operations as described in the paper.

**Build it:**

1. Implement a simple model of file access latency with and without metadata cache.
2. Generate synthetic file access sequences representing typical FPGA kernel workloads.
3. Run simulations to measure average latency and bandwidth under both scenarios.
4. Visualize and compare the results to show the performance impact of metadata caching.

**Ships as:** A Jupyter Notebook with simulation code, results, and plots demonstrating latency improvements due to metadata caching.

**Stretch goal:** Add configurable cache sizes and eviction policies to explore their effect on performance.

### Intermediate — Implement a Simplified FPGA-Integrated File System Layer
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the HiLFS file system layer in software, exposing a POSIX-like API that supports basic file operations, metadata caching, and crash consistency via coarse-grained snapshots. You compare its performance and programming complexity against a baseline block-level storage interface.

**Why it shows you understood the paper:** This project shows you can reimplement the core architectural approach of HiLFS, including the modular layering and file system semantics, and evaluate its benefits in programmability and latency compared to block-level storage.

**Grounded in:** HiLFS adopts a modular architecture consisting of three layers interconnected by streaming interfaces: a user-facing library layer, a file system layer, and a block-level storage layer.

**Tech stack:** Python 3.11, FUSE (Filesystem in Userspace) or pyfuse3, Linux environment

**Data:** Use local SSD storage on your development machine to simulate block-level storage; no special dataset required.

**Build it:**

1. Implement a user-facing POSIX-like API layer that supports open, read, write, close, and metadata operations.
2. Develop a file system layer with metadata caching and implement crash consistency via periodic metadata snapshots.
3. Interface with local block storage (e.g., files on SSD) to simulate the block-level storage layer.
4. Measure latency and bandwidth of file operations and compare lines of code and complexity against a baseline direct block access implementation.
5. Document the design decisions and performance trade-offs.

**Ships as:** A Python-based FUSE filesystem prototype with README documenting performance comparison and code complexity analysis.

**Stretch goal:** Add support for concurrent access and locking to demonstrate efficient concurrency management.

### Advanced — Explore Fine-Grained Crash Consistency for FPGA File Systems
*Effort: 3+ weeks*

You extend the intermediate file system prototype by implementing a finer-grained crash consistency mechanism, such as journaling or write-ahead logging, to improve durability guarantees beyond coarse-grained metadata snapshots. You evaluate the overhead and performance impact compared to the original snapshot approach.

**Why it shows you understood the paper:** This project tackles a stated limitation of HiLFS and explores a future direction, demonstrating your ability to innovate on the paper's core design and contribute to improving FPGA-integrated file system reliability.

**Grounded in:** Crash consistency is provided via coarse-grained metadata snapshots rather than fine-grained journaling, offering a relaxed crash guarantee.

**Tech stack:** Python 3.11, FUSE or pyfuse3, Linux environment

**Data:** Local SSD storage on development machine simulating block storage; no external dataset needed.

**Build it:**

1. Study crash consistency mechanisms such as journaling and write-ahead logging.
2. Design and implement a journaling layer in the file system prototype to track file system changes incrementally.
3. Integrate the journaling mechanism with the existing metadata caching and snapshot system.
4. Develop tests to simulate crashes and verify file system consistency and durability.
5. Benchmark performance overhead and latency compared to the snapshot-based approach.
6. Document findings, trade-offs, and potential implications for FPGA file system designs.

**Ships as:** An enhanced file system prototype with journaling, crash simulation tests, performance benchmarks, and detailed documentation.

**Stretch goal:** Investigate concurrency control optimizations to reduce journaling overhead in multi-tenant FPGA deployments.

_No authors' own code or FPGA hardware platform is publicly available; all projects rely on software simulation or local storage to approximate FPGA file system behavior._
