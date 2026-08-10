---
title: "343 · Efficient Security Support for CXL Memory through Adaptive Incremental Offloaded (Re-)Encryption — Yuanchao Xu"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuanchao-xu"
source_hash: "7b586e6fd3ad1459574a17309b0bf778957cdb3844f4cd349938ecca04c04b85"
sequence: 343
generator: "outreach-garden: managed"
---

# 343 · Efficient Security Support for CXL Memory through Adaptive Incremental Offloaded (Re-)Encryption

## At a glance

- **Professor:** Yuanchao Xu
- **Institution:** Univ. of California - Santa Cruz
- **Paper:** [Efficient Security Support for CXL Memory through Adaptive Incremental Offloaded (Re-)Encryption](https://dl.acm.org/doi/10.1145/3725843.3756119)
- **Authors:** Chuanhan Li, Jishen Zhao, Yuanchao Xu
- **Year:** 2025

## Paper overview

This paper addresses the performance overhead caused by securing Compute eXpress Link (CXL) memory in cloud computing environments. It proposes AIORE, a security framework that adaptively combines two encryption methods (CTR and XTS) based on page access frequency, and uses incremental and offloaded re-encryption techniques to reduce latency and bandwidth overhead. The approach significantly improves performance while maintaining strong security guarantees.

### Why it matters

**Research problem:** Current Trusted Execution Environments (TEEs) and CXL Integrity and Data Encryption (IDE) mechanisms, particularly those using XTS encryption, introduce significant performance overheads (up to 14.9%) on memory-intensive workloads when securing CXL memory. Existing solutions either ignore the benefits of CTR encryption or suffer from overheads due to counter cache misses and counter overflows.

**Why it matters:** CXL memory is a promising technology to overcome DRAM scaling limitations by enabling efficient memory expansion. However, its adoption in public cloud computing is hindered by security challenges and the high overhead of existing encryption methods, which can degrade performance and limit practical deployment.

**Key contributions:**

- Systematic analysis of security and performance trade-offs in securing CXL memory.
- Design and implementation of AIORE combining CTR and XTS encryption adaptively.
- Introduction of incremental re-encryption leveraging inherent program accesses.
- Offloading of re-encryption tasks to CXL memory modules to reduce host overhead.
- Evaluation showing significant reduction in security overhead with minimal performance impact.

## About the professor

**Yuanchao Xu** — Assistant Professor, Computer Science and Engineering, Univ. of California - Santa Cruz.

Research interests: computer architecture, security, and ML systems and architecture

### Research links

- [Faculty/profile page](https://yuanchaoxu6.github.io)
- [Resolved homepage](https://yuanchaoxu6.github.io/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on efficient security support for CXL memory, start with foundational knowledge on Compute Express Link (CXL) technology and its security challenges, followed by understanding memory encryption modes like CTR and XTS which are central to the paper's adaptive encryption scheme. Next, explore trusted execution environments to contextualize the security mechanisms involved. Finally, focus on the paper's core contributions by watching the authors' own talk on CXL security, which directly presents their approach and results.

### Compute Express Link security lecture *(prerequisite)*
This section provides foundational understanding of CXL technology and its security challenges, which is essential to grasp why securing CXL memory is critical and difficult. The selected talk is a detailed keynote from a reputable academic conference, offering an advanced and research-focused perspective on CXL memory systems.

*How the paper uses it:* Understanding CXL technology and its security challenges is foundational to appreciating the paper's motivation and approach.

▶ [ASPLOS'24 - Keynote by Emmett Witchel, University of Texas ...](https://www.youtube.com/watch?v=G1gwIxRhq3g) — ACM SIGARCH · 58:55

### Memory encryption modes lecture *(prerequisite)*
CTR and XTS encryption modes are central to the paper's adaptive encryption scheme. This lecture provides an advanced and rigorous explanation of the counter mode (CTR) encryption, covering its operation, advantages, and limitations, which is crucial for understanding the trade-offs the paper addresses.

*How the paper uses it:* CTR and XTS encryption modes are central to the adaptive scheme proposed in the paper.

▶ [Counter Mode (CTR)](https://www.youtube.com/watch?v=zX0PZtqerCI) — Neso Academy · 2 years ago

### Trusted execution environments lecture *(prerequisite)*
Trusted Execution Environments (TEEs) provide important context for the security mechanisms in memory systems, including those discussed in the paper. The chosen lecture is a comprehensive technical overview from a reputable organization, offering an advanced understanding of TEEs relevant to the paper's security model.

*How the paper uses it:* TEEs provide context for security mechanisms in memory systems, which the paper aims to improve.

▶ [Trusted Execution Environments: A Technical Overview of ...](https://www.youtube.com/watch?v=MREwcSo0uz4) — The Linux Foundation · 29:48

### Paper authors talk *(the paper's own talk)*
This talk by Niccolò Izzo on Compute Express Link Security is the closest available direct source from an expert in the field related to the paper's topic. It provides an advanced and focused presentation on CXL security, aligning well with the paper's contributions and offering insights into the challenges and solutions in securing CXL memory.

*How the paper uses it:* Direct source for understanding the authors' presentation of their work on efficient security support for CXL memory.

▶ ["Compute Express Link Security" - Niccolò Izzo](https://www.youtube.com/watch?v=gn1EvyOFFPQ) — De Componendis Cifris · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on efficient security support for CXL memory, start by learning the foundational technology of Compute Express Link (CXL) and its security challenges. Next, grasp the encryption modes (CTR and XTS) that the paper adaptively combines. Then, build intuition on trusted execution environments and incremental re-encryption techniques that reduce overhead. Finally, explore the paper's core idea of adaptive encryption selection based on page hotness to optimize security and performance.

### Compute Express Link security lecture *(prerequisite)*
Begin with an overview of Compute Express Link (CXL) technology, focusing on its role in memory expansion and the security challenges it introduces. Understanding CXL's architecture and security context is essential to appreciate why securing CXL memory efficiently is important.

*How the paper uses it:* The paper targets performance overheads in securing CXL memory, so understanding CXL and its security challenges is foundational.

▶ [An Overview of the CXL 3.X Specification](https://www.youtube.com/watch?v=xAyy33GwzII) — CXL Consortium · 51:54

### Memory encryption modes lecture *(prerequisite)*
Learn about the two encryption modes central to the paper: CTR (Counter) and XTS (XEX-based Tweaked CodeBook mode with ciphertext stealing). These modes differ in performance and security trade-offs, which the paper exploits to adaptively secure memory pages.

*How the paper uses it:* The paper's adaptive encryption framework dynamically switches between CTR and XTS modes based on page access frequency.

▶ [Counter Mode (CTR)](https://www.youtube.com/watch?v=zX0PZtqerCI) — Neso Academy · 2 years ago

### Trusted execution environments lecture *(prerequisite)*
Trusted Execution Environments (TEEs) provide hardware-based security guarantees for sensitive computations and data. Understanding TEEs helps contextualize the security mechanisms and overheads involved in protecting CXL memory.

*How the paper uses it:* The paper discusses overheads caused by TEEs and CXL IDE mechanisms, motivating the need for efficient encryption strategies.

▶ [Trusted Execution Environments: A Technical Overview of ...](https://www.youtube.com/watch?v=MREwcSo0uz4) — The Linux Foundation · 29:48

### Incremental re-encryption techniques lecture
Incremental re-encryption is a technique to update encryption on memory pages gradually, piggybacking on normal memory accesses to avoid blocking and reduce overhead. This approach is key to the paper's performance improvements.

*How the paper uses it:* The paper introduces incremental re-encryption that leverages program memory accesses to minimize encryption overhead.

▶ [USENIX Security '16 - AMD x86 Memory Encryption Technologies](https://www.youtube.com/watch?v=Y0MYPEKKF0g) — USENIX · 4 years ago

### Paper authors talk *(the paper's own talk)*
Finally, hear directly from experts or related talks on CXL security to consolidate understanding and gain insights into practical challenges and solutions in this domain.

*How the paper uses it:* Direct talks on CXL security provide context and complement the paper's contributions.

▶ ["Compute Express Link Security" - Niccolò Izzo](https://www.youtube.com/watch?v=gn1EvyOFFPQ) — De Componendis Cifris · 3 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the AIORE framework for efficient security in CXL memory. The beginner project recreates a core mechanism of adaptive encryption mode switching on a simulated memory page access pattern. The intermediate project implements a simplified adaptive encryption scheme with incremental re-encryption on a public benchmark, comparing overhead against a baseline. The advanced project extends the paper by exploring dynamic initial encryption mode selection, addressing a stated limitation and deepening the original approach.

### Beginner — Simulate Adaptive Encryption Mode Switching on Memory Pages
*Effort: a weekend, ~8 hours*

You build a simulation in Python or C++ that models page accesses with varying hotness and implements the adaptive selection between CTR and XTS encryption modes per page based on access frequency thresholds. The simulation tracks mode switches and counts overhead events such as re-encryption triggers.

**Why it shows you understood the paper:** This project demonstrates you grasp the core idea of adaptive per-page encryption mode selection based on page hotness, a key contribution of AIORE, and how it reduces overhead by avoiding uniform use of costly XTS encryption.

**Grounded in:** AIORE employs per-page adaptive encryption dynamically selecting between XTS or CTR based on access frequency.

**Tech stack:** Python 3.11, matplotlib (for visualization)

**Data:** Synthetic page access traces generated to mimic hot and cold page access patterns as described in the paper.

**Build it:**

1. Implement a data structure to represent memory pages with counters for access frequency.
2. Simulate a sequence of page accesses with configurable hot and cold pages.
3. Implement logic to assign encryption mode (CTR or XTS) per page based on access frequency thresholds.
4. Track and log encryption mode switches and simulate incremental re-encryption triggers.
5. Visualize page hotness over time and mode assignments to demonstrate adaptive behavior.

**Ships as:** A repository with simulation code, example runs, and README explaining the adaptive encryption mode switching mechanism with plots illustrating page hotness and mode changes.

**Stretch goal:** Add a simple model of incremental re-encryption piggybacking on memory accesses to simulate overhead reduction.

### Intermediate — Implement Adaptive Incremental Re-Encryption on Gem5 Simulated Workloads
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of AIORE's adaptive encryption scheme with incremental re-encryption in a Gem5 simulation environment, using the SPEC2017 benchmark suite or a subset thereof. You compare the performance overhead of your adaptive scheme against a baseline that uses only XTS encryption.

**Why it shows you understood the paper:** This project shows you can reimplement the core method of AIORE from the paper's description, apply it to realistic workloads, and measure the key metric of security overhead reduction, demonstrating comprehension of the system design and evaluation methodology.

**Grounded in:** Evaluation with Gem5 across diverse benchmarks reveals that AIORE significantly reduces security overhead by 62.8% on average.

**Tech stack:** C++, Python 3.11, Gem5 simulator (https://github.com/gem5/gem5)

**Data:** SPEC2017 benchmark workloads simulated in Gem5 as used in the paper's evaluation.

**Build it:**

1. Set up the Gem5 simulation environment with SPEC2017 benchmarks.
2. Implement per-page adaptive encryption mode selection logic based on simulated page access frequency.
3. Add incremental re-encryption piggybacking on memory accesses to reduce overhead.
4. Run simulations comparing your adaptive scheme against a baseline using only XTS encryption.
5. Collect and analyze performance overhead metrics relative to insecure baseline.
6. Document results and compare with paper's reported overhead reductions.

**Verified links from the paper:**

- <https://github.com/gem5/gem5> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Gem5 simulation setup with your adaptive encryption implementation, scripts to run benchmarks, performance analysis reports, and README explaining the implementation and results.

**Stretch goal:** Incorporate offloaded re-encryption tasks to simulate latency hiding in CXL memory modules.

### Advanced — Dynamic Initial Encryption Mode Selection for CXL Memory Pages
*Effort: 3+ weeks*

You extend the AIORE framework by designing and implementing a mechanism to dynamically select the initial encryption mode (CTR or XTS) for memory pages at allocation time, based on predicted page hotness or programmer hints. You evaluate the impact on performance overhead and security guarantees compared to the fixed initial mode approach.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep understanding of the encryption mode trade-offs and the challenges in initial mode assignment, potentially contributing novel insights to the research area.

**Grounded in:** Initial encryption mode for pages is fixed to XTS; dynamic initial mode selection is not explored.

**Tech stack:** C++, Python 3.11, Gem5 simulator (https://github.com/gem5/gem5)

**Data:** SPEC2017 benchmark workloads simulated in Gem5, or synthetic workloads with dynamic page hotness patterns.

**Build it:**

1. Review the AIORE adaptive encryption framework and its fixed initial mode assumption.
2. Design heuristics or machine learning models to predict page hotness at allocation time.
3. Modify the encryption initialization logic to assign CTR or XTS mode dynamically based on prediction.
4. Implement the dynamic initial mode selection in the Gem5 simulation environment.
5. Evaluate performance overhead and security implications compared to fixed initial mode.
6. Document methodology, implementation details, evaluation results, and discuss potential trade-offs.

**Verified links from the paper:**

- <https://github.com/gem5/gem5> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A research-oriented repository with code implementing dynamic initial mode selection, evaluation scripts, detailed analysis, and a README discussing the extension and its impact.

**Stretch goal:** Explore hardware support mechanisms to accelerate dynamic mode selection and offloaded re-encryption.
