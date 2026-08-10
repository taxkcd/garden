---
title: "239 · Anchoring Whole-System Persistence and Resilience in CXL — Jianping Zeng"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jianping-zeng"
source_hash: "118b73f3994332cfe6247287a5f00a976ddad22b209d0ea47d75bc1f73851bfe"
sequence: 239
generator: "outreach-garden: managed"
---

# 239 · Anchoring Whole-System Persistence and Resilience in CXL

## At a glance

- **Professor:** Jianping Zeng
- **Institution:** Arizona State University
- **Paper:** [Anchoring Whole-System Persistence and Resilience in CXL](https://jianpingzeng.github.io/papers/ICS26-ANCHOR.pdf)
- **Authors:** Yuchen Zhou, Jianping Zeng, Changhee Jung
- **Year:** 2026

## Paper overview

This paper introduces ANCHOR, a new memory system design that uses Compute Express Link (CXL) technology to provide both persistent memory and strong error resilience without needing software recompilation or changes to processor cores. ANCHOR duplicates every committed store to both the normal cache/DRAM path and a CXL-attached memory-semantic SSD, using a non-volatile write combining buffer to reduce SSD write traffic. The SSD copy acts as a reliable anchor for error detection and correction, improving system reliability with minimal performance overhead.

### Why it matters

**Research problem:** How to achieve whole-system persistence (WSP) and strong error resilience in memory systems efficiently and transparently, without requiring software recompilation or intrusive hardware changes, while overcoming the limitations of storage-class memory (SCM) capacity, cost, and interface constraints.

**Why it matters:** Persistent memory enables systems to recover from power failures without data loss, which is critical for reliability and performance. Existing WSP solutions either require recompilation, intrusive hardware changes, or rely on SCM with limited scalability and high cost. Additionally, memory errors are increasingly complex, and stronger ECC schemes add latency and energy overhead. A practical, scalable, and cost-effective solution is needed for next-generation systems.

**Key contributions:**

- First CXL-based whole-system persistence design that requires no compiler instrumentation or core pipeline modifications.
- Novel use of SSD-resident committed data as a global correction anchor to improve error resilience by repurposing existing ECC for detection only.
- Design and implementation of a non-volatile STT-RAM write combining buffer that merges up to 91.23% of stores, significantly reducing SSD write amplification.
- A practical, lightweight persistence and resilience mechanism with minimal runtime overhead and no changes to application software.

## About the professor

**Jianping Zeng** — Tenure-track Assistant Professor, School of Computing and Augmented Intelligence (SCAI), Arizona State University.

Research interests: co-design of compilers and computer architectures, driven by application-level demand, addressing performance, reliability, and security issues of computing systems including energy harvesting systems and data centers

### Research links

- [Faculty/profile page](https://jianpingzeng.github.io)
- [Resolved homepage](https://jianpingzeng.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=Rxir49oAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/79/2024-1.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Architecture and Memory Systems
**The paper assumes:** computer architecture, memory hierarchy design, persistent memory systems, error correction codes in hardware
**Already in this field?** Skip this entirely if you already have a solid understanding of modern computer architecture focusing on memory systems and hardware error resilience.

To understand the ANCHOR paper's design and evaluation, a solid grasp of modern computer architecture focusing on memory systems, persistent memory, and error correction is essential. The rigorous course option offers a deep, structured university-level lecture series on parallel computing and memory systems, while the fast track provides a concise, focused playlist on memory organization fundamentals. Choose the rigorous course for comprehensive depth or the fast track for a quicker, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS149 I Parallel Computing I 2023 I Kayvon Fatahalian and Kunle Olukotun](https://www.youtube.com/playlist?list=PLoROMvodv4rMp7MTFr4hQsDEcX7Bx6Odp) — Stanford Online · 19 videos · 24.3h across 19 episodes

**Watch only this:** Lectures 1 through 12, about 9.5 hours — covering parallelism basics, multi-core architecture, cache coherence, and memory consistency essential for grasping memory system design and error resilience.

*Why it unblocks this paper:* Stanford CS149 covers modern multi-core processors, memory hierarchies, cache coherence, and memory consistency, which are foundational to understanding the dual-path store architecture, ECC modes, and CXL-attached memory in ANCHOR.

*If you want all of it:* 24.3 hours across 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Memory Organisation Playlist](https://www.youtube.com/playlist?list=PL3R9-um41JszyaKeoc9qP8Bn45XzqJycj) — Shanu Kuttan CSE Classes · 23 videos · 4.8h across 23 episodes

**Watch only this:** Episodes L-3.1 through L-3.12, about 2.5 hours — covering memory hierarchy, cache memory, and cache mapping types to quickly build intuition on memory system fundamentals.

*Why it unblocks this paper:* The Memory Organisation Playlist by Shanu Kuttan CSE Classes provides clear, concise explanations of memory hierarchy, cache mapping, and memory types, giving a practical foundation for understanding the memory system components and buffering techniques used in ANCHOR.

*If you want all of it:* 4.8 hours across 23 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ANCHOR design for whole-system persistence and resilience using CXL, start by building foundational knowledge on Compute Express Link (CXL) architecture, persistent memory systems, error correction codes in memory, and write combining buffers. These prerequisites provide the necessary background on the hardware interconnect, memory persistence mechanisms, ECC principles, and buffering techniques that ANCHOR leverages. Finally, focus on the paper's core concept through the authors' own talk or related advanced presentations to grasp the novel contributions and system design details.

### Compute Express Link architecture *(prerequisite)*
Understanding CXL is essential because ANCHOR relies on CXL-attached SSDs to provide the persistent memory path. The CXL Consortium's official talks provide detailed, authoritative explanations of CXL's memory semantics, fabric, and coherency mechanisms, which are foundational to grasping how ANCHOR integrates persistent storage with the memory hierarchy.

*How the paper uses it:* ANCHOR uses CXL-attached memory-semantic SSDs as the persistent anchor for committed stores.

▶ [Introduction to the Compute Express Link™ (CXL™) Fabric ...](https://www.youtube.com/watch?v=6TRbkes15Ok) — CXL Consortium · 56:23

### Persistent memory systems *(prerequisite)*
Persistent memory systems form the core context for whole-system persistence and recovery mechanisms. Talks from industry conferences and labs, such as the Persistent Memory Summit and SUSE Labs, provide advanced insights into persistent memory programming models, hardware, and OS integration, which are critical to understanding ANCHOR's approach to persistence without software recompilation.

*How the paper uses it:* ANCHOR achieves whole-system persistence by duplicating committed stores to a persistent SSD without requiring software changes.

▶ [Persistent Memory Summit '18 - Persistent Memory Programming: The Current State and Future Direction](https://www.youtube.com/watch?v=RQ77F_F4f9k) — SNIAVideo · 8 years ago

### Error correction codes in memory *(prerequisite)*
Error correction codes (ECC) are key to ANCHOR's resilience strategy, where caches and DRAM ECCs operate in detection-only mode and rely on the SSD copy for correction. Advanced university lectures and research-level explainers on ECC provide the necessary theoretical foundation to understand multi-bit error detection and correction trade-offs in memory systems.

*How the paper uses it:* ANCHOR repurposes ECC in caches and DRAM for detection only, using the SSD copy for error correction.

▶ [Lec-28: Introduction to Error detection and Correction | Computer Networks](https://www.youtube.com/watch?v=U7-h2hyM1Dc) — Gate Smashers · 7 years ago

### Write combining buffers in memory systems *(prerequisite)*
Write combining buffers (WCBs) are critical in ANCHOR to coalesce multiple stores and reduce SSD write amplification. Advanced talks on memory system buffering and write optimization techniques provide the background to understand how the non-volatile STT-RAM WCB in ANCHOR achieves high merge rates and efficiency.

*How the paper uses it:* ANCHOR's non-volatile STT-RAM WCB merges up to 91.23% of stores, significantly reducing SSD write traffic.

▶ [Scaling Write-Intensive Key-Value Stores](https://www.youtube.com/watch?v=b6SI8VbcT4w) — Microsoft Research · 53:21

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ANCHOR paper, start by learning about the foundational technologies it builds on: Compute Express Link (CXL) architecture, persistent memory systems, and error correction codes in memory. Then, grasp the key hardware techniques like write combining buffers and dual-path store architectures that enable ANCHOR's design. Finally, explore the core ANCHOR concept itself, which integrates these ideas to achieve whole-system persistence and resilience efficiently and transparently.

### Compute Express Link architecture *(prerequisite)*
Compute Express Link (CXL) is a high-speed interconnect standard that enables coherent memory access and sharing between CPUs and devices like memory-semantic SSDs. Understanding CXL is essential because ANCHOR uses CXL-attached SSDs to store persistent copies of committed data, enabling whole-system persistence without modifying processor cores.

*How the paper uses it:* ANCHOR relies on CXL-attached SSDs to provide a persistent memory path alongside the regular cache/DRAM path.

▶ [Introduction to Compute Express Link™ (CXL™) Technology](https://www.youtube.com/watch?v=HPpQLGIxZWM) — CXL Consortium · 5 years ago

### Persistent memory systems *(prerequisite)*
Persistent memory systems provide non-volatile storage that can be accessed like regular memory, allowing systems to recover state after power failures without data loss. Grasping persistent memory concepts helps understand why ANCHOR duplicates stores to a persistent SSD and how it achieves whole-system persistence transparently.

*How the paper uses it:* ANCHOR achieves whole-system persistence by storing committed data persistently on a CXL-attached SSD.

▶ [How will we Address Persistent Memory? - Jeff Moyer, Red Hat, Inc.](https://www.youtube.com/watch?v=CAJy3dCgjDw) — Linux Plumbers Conference · 12 years ago

### Error correction codes in memory *(prerequisite)*
Error correction codes (ECC) detect and correct memory errors to improve reliability. ANCHOR innovates by using ECC in detection-only mode for caches and DRAM, relying on the SSD copy for error correction, thus reducing ECC overhead while enhancing resilience.

*How the paper uses it:* ANCHOR repurposes cache and DRAM ECCs for detection only, using the SSD copy as a ground-truth anchor for error correction.

▶ [But what are Hamming codes? The origin of error correction](https://www.youtube.com/watch?v=X8jsijhllIA) — 3Blue1Brown · 5 years ago

### Write combining buffers in memory systems *(prerequisite)*
Write combining buffers merge multiple writes to the same address into a single update to reduce write traffic and improve performance. ANCHOR uses a non-volatile STT-RAM write combining buffer to coalesce stores before writing to the SSD, significantly reducing SSD write amplification.

*How the paper uses it:* The non-volatile write combining buffer in ANCHOR merges up to 91.23% of stores, lowering SSD write traffic.

▶ [Scaling Write-Intensive Key-Value Stores](https://www.youtube.com/watch?v=b6SI8VbcT4w) — Microsoft Research · 53:21


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the ANCHOR system for whole-system persistence and resilience using CXL. The beginner project focuses on simulating the write combining buffer (WCB) concept to reduce write amplification, the intermediate project implements a simplified dual-path store architecture with error detection and correction using an SSD-backed anchor, and the advanced project extends ANCHOR by exploring dynamic address mapping between DRAM and SSD persistent regions as suggested in the paper's future directions.

### Beginner — Simulate Write Combining Buffer to Reduce SSD Write Amplification
*Effort: a weekend, ~8 hours*

You build a simulation of a non-volatile write combining buffer (WCB) that coalesces multiple store operations to the same memory address into a single write to an SSD-like persistent store. The simulation tracks store sequences and reports the merge rate and write amplification reduction.

**Why it shows you understood the paper:** This project shows you understand the key mechanism ANCHOR uses to reduce SSD write traffic by merging stores, a core contribution of the paper.

**Grounded in:** Design and implementation of a non-volatile STT-RAM write combining buffer that merges up to 91.23% of stores, significantly reducing SSD write amplification.

**Tech stack:** Python 3.11

**Data:** Synthetic store sequences generated to mimic memory store patterns; no external dataset needed.

**Build it:**

1. Implement a data structure to represent the WCB that holds pending store addresses and data.
2. Simulate a sequence of store operations with some repeated addresses to test merging.
3. Implement logic to coalesce multiple stores to the same address into a single write.
4. Calculate and report the merge rate and write amplification compared to naive writes.
5. Write a README explaining the simulation and how it relates to ANCHOR's WCB.

**Ships as:** A Python script simulating the WCB with output metrics and a README linking the simulation to the paper's WCB design.

**Stretch goal:** Add timing simulation to estimate latency and bandwidth savings from write combining.

### Intermediate — Implement Dual-Path Store Architecture with SSD Anchor for Error Detection
*Effort: 2 weekends, ~20 hours*

You implement a simplified dual-path store system where each committed store is sent to both a simulated DRAM cache and a persistent SSD-backed store. You simulate ECC detection-only mode on the DRAM cache and use the SSD copy as a ground-truth anchor to detect and correct errors. You compare error detection and correction rates against a baseline without SSD anchoring.

**Why it shows you understood the paper:** This project faithfully reproduces ANCHOR's core method of using an SSD copy as a global correction anchor and demonstrates the error resilience benefits described in the paper.

**Grounded in:** Novel use of SSD-resident committed data as a global correction anchor to improve error resilience by repurposing existing ECC for detection only.

**Tech stack:** Python 3.11, NumPy

**Data:** Synthetic memory store and error injection patterns to simulate multi-bit errors; no external dataset needed.

**Build it:**

1. Implement a simulated DRAM cache with ECC detection-only mode that can flag corrupted data.
2. Implement a persistent SSD-backed store that holds committed store data as ground truth.
3. Simulate committed stores being duplicated to both DRAM cache and SSD store.
4. Inject multi-bit errors into the DRAM cache data and detect them using ECC detection.
5. On error detection, reload clean data from the SSD store to correct errors.
6. Compare error detection and correction rates with and without SSD anchoring.
7. Document the implementation and results in a README linking to the paper's resilience claims.

**Ships as:** A Python simulation demonstrating dual-path stores with error detection and correction using an SSD anchor, with comparative metrics and explanation.

**Stretch goal:** Add a simple write combining buffer simulation to reduce SSD writes in the system.

### Advanced — Explore Dynamic DRAM-to-SSD Address Mapping for ANCHOR
*Effort: 3+ weeks*

You extend the ANCHOR concept by designing and simulating a dynamic or finer-grained address mapping scheme between DRAM and the CXL-attached SSD persistent region. You evaluate how this affects persistence latency, error resilience, and recovery efficiency compared to the static mapping assumed in the paper.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating deep comprehension of ANCHOR's architecture and its limitations, and contributes a novel extension that could be a conversation starter with the professor.

**Grounded in:** Exploring finer-grained or dynamic address mapping schemes between DRAM and SSD persistent regions.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic memory access traces and simulated error patterns; no external dataset needed.

**Build it:**

1. Review the static DRAM-to-SSD address mapping described in the paper and implement a baseline simulation.
2. Design a dynamic address mapping scheme that can remap DRAM addresses to SSD addresses at finer granularity.
3. Implement the dynamic mapping in the simulation, including mechanisms to track and translate addresses.
4. Simulate store operations, persistence latency, and error detection/correction under both static and dynamic mappings.
5. Analyze and visualize the impact on persistence latency, SSD write amplification, and error resilience.
6. Write a detailed README discussing the design, results, and relation to the paper's future directions.

**Ships as:** A simulation and analysis of dynamic DRAM-to-SSD address mapping with visualized metrics and a comprehensive README linking to the paper's limitations and future work.

**Stretch goal:** Prototype integration of relaxed persist ordering or complex memory consistency models with the dynamic mapping.
