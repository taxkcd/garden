---
title: "869 · 2DIO: Configurable and Cache-Accurate Trace Generation for Storage Benchmarking — Peter Desnoyers"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-peter-desnoyers"
source_hash: "311466e09b3765499305a13053d7f9eff8d263d823424d2adb1a902a17a00860"
sequence: 869
generator: "outreach-garden: managed"
---

# 869 · 2DIO: Configurable and Cache-Accurate Trace Generation for Storage Benchmarking

## At a glance

- **Professor:** Peter Desnoyers
- **Institution:** Northeastern University
- **Paper:** [2DIO: Configurable and Cache-Accurate Trace Generation for Storage Benchmarking](https://arxiv.org/pdf/2603.19971)
- **Authors:** Yirong Wang, Isaac Khor, Peter Desnoyers
- **Year:** 2026

## Paper overview

This paper presents 2DIO, a tool that generates synthetic storage I/O traces with highly accurate cache behavior. Unlike existing tools that produce simple, smooth cache hit ratio curves, 2DIO can create traces exhibiting complex cache effects such as performance cliffs and plateaus. It uses a compact parameter set to model both short-term recency and long-term frequency of data accesses, enabling researchers to generate realistic or hypothetical workloads for benchmarking storage systems.

### Why it matters

**Research problem:** Existing storage benchmarking tools fail to reproduce the complex, non-concave cache hit ratio curves observed in real-world storage workloads, limiting their usefulness for accurate performance evaluation and comparison of storage systems.

**Why it matters:** Storage system performance heavily depends on workload characteristics, especially cache hit rates. Accurate and reproducible benchmarking requires synthetic workloads that realistically mimic these cache behaviors. Without this, evaluations may misrepresent system performance, hindering development and comparison of storage technologies.

**Key contributions:**

- A succinct parameter triplet encoding complex workload characteristics for trace generation.
- An algorithm to generate traces from IRD distributions that reproduce complex cache hit ratio curves including cliffs and plateaus.
- A combined IRD and IRM model enabling tuning of both recency and frequency effects on cache behavior.
- Demonstration of trace generation that accurately reproduces real-world cache behaviors with parsimonious parameters.
- Support for scalable trace generation preserving cache behavior across different system sizes.

## About the professor

**Peter Desnoyers** — Associate Professor, Khoury College of Computer Sciences, Northeastern University.

Research interests: cloud computing, object storage and caching, flash and SMR translation layers

### Research links

- [Faculty/profile page](http://www.ccs.neu.edu/home/pjd)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cache Modeling and Workload Characterization
**The paper assumes:** cache memory systems, cache hit ratio modeling, workload characterization, inter-reference distance distributions, independent reference models
**Already in this field?** Skip this entirely if you already understand cache system behavior, workload modeling, and how cache hit ratios relate to access patterns.

To fully understand the cache hit ratio curves and workload characterization central to the 2DIO paper, a solid grasp of cache design and memory hierarchy is essential. The rigorous course option offers a comprehensive university-level lecture series on computer organization and architecture, including detailed coverage of cache memory concepts. The fast track provides a concise, focused playlist on cache design fundamentals, ideal for quickly grasping key concepts like cache replacement policies and cache coherence relevant to cache behavior modeling.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [TM103: Computer Organization and Architecture | Full Course - AOU](https://www.youtube.com/playlist?list=PLQskkx1vdBegRFY0W96RD03XEs17bfFDM) — CS Tech Boy · 13 videos · 12.3h across 13 episodes

**Watch only this:** Watch episodes 12 and 13: 'TM103 Chapter 6 - Part 1: Memory Types & The Memory Hierarchy' and 'TM103 Chapter 6 - Part 2: Cache Memory & Cache Mapping Schemes' — about 1 hour 52 minutes total. These cover memory hierarchy and cache design essential for understanding cache behavior modeling.

*Why it unblocks this paper:* This Arab Open University course covers computer architecture fundamentals including a dedicated two-part segment on cache memory and cache mapping schemes, providing the rigorous foundation needed to understand cache hit ratio curves and workload characterization in the paper.

*If you want all of it:* The full course is 12.3 hours across 13 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Cache Design](https://www.youtube.com/playlist?list=PLBlnK6fEyqRiKK5z4GXmbnE0nCrAnyVdm) — Neso Academy · 7 videos · 1.6h across 7 episodes

**Watch only this:** Watch episodes 1-4: 'Cache Design - An Overview', 'Cache Replacement Policies - RR, FIFO, LIFO, & Optimal', 'Cache Replacement Policies - MRU, LRU, Pseudo-LRU, & LFU', and 'LRU Cache Replacement Policy - Solved PYQs' — about 52 minutes total. These provide a practical, focused introduction to cache design and replacement policies critical for understanding 2DIO's modeling approach.

*Why it unblocks this paper:* This concise playlist from Neso Academy focuses specifically on cache design, including cache replacement policies such as LRU, which are directly relevant to the paper's focus on recency-based cache behavior and synthetic trace generation.

*If you want all of it:* The full playlist is 1.6 hours across 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 2DIO paper, start with foundational concepts that underpin the modeling of storage workloads: inter-reference distance distributions and independent reference model frequency, which capture recency and frequency effects respectively. Then, study cache hit ratio curves and modeling to grasp the complex cache behaviors 2DIO aims to reproduce. Finally, focus on the core concept of cache-aware synthetic trace generation and the authors' own talk to see how these foundations are integrated into the novel 2DIO tool for accurate storage benchmarking.

### Inter-reference distance distributions *(prerequisite)*
Inter-reference distance (IRD) distributions are fundamental to modeling recency effects in storage access patterns, which 2DIO leverages to reproduce realistic cache behaviors. Understanding IRD helps grasp how 2DIO captures short-term recency in its synthetic trace generation.

*How the paper uses it:* 2DIO uses IRD distributions to model recency and generate traces matching complex cache hit ratio curves.

▶ [34. Distance Matrices, Procrustes Problem](https://www.youtube.com/watch?v=0Qws8BuK3RQ) — MIT OpenCourseWare · 7y ago

### Independent reference model frequency *(prerequisite)*
The independent reference model (IRM) frequency captures long-term frequency effects in workload generation, complementing IRD to model both recency and frequency. This dual modeling is key to 2DIO's ability to generate realistic and complex cache behaviors.

*How the paper uses it:* 2DIO combines IRD and IRM models to tune both recency and frequency effects on cache behavior.

▶ [Lecture 16 - Independent Component Analysis & RL | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=YQA9lLdLig8) — Stanford Online · 6y ago

### Cache-aware synthetic trace generation
This concept covers the core methodology of generating synthetic storage traces that accurately reflect cache behavior, the central contribution of 2DIO. It integrates IRD and IRM models and introduces algorithms to produce traces matching target cache hit ratio curves.

*How the paper uses it:* 2DIO's core contribution is its cache-aware synthetic trace generation approach that preserves complex cache behaviors.

▶ [Mod-06 Lec-29 Cache aware programming](https://www.youtube.com/watch?v=tGarzP488Wc) — nptelhrd · 15y ago

### 2DIO paper talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insight into the design, algorithms, and evaluation of 2DIO, offering the most authoritative and detailed explanation of their work. It is essential for advanced readers to understand the nuances and innovations of the paper.

*How the paper uses it:* This talk is by the authors of 2DIO, explaining their novel trace generation tool and its advantages over prior methods.

▶ [7. LLMs in Production Part 1: Latency, Cost, KV Cache, Tracing | GenAI Interview (Chapter F)](https://www.youtube.com/watch?v=Uc9NEtTLtcQ) — Engineering counter · 2w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the 2DIO paper, start by learning about inter-reference distance distributions, which model how recently data is accessed and form the foundation for recency effects in storage workloads. Next, grasp the independent reference model frequency concept to capture long-term frequency effects in data access patterns. Then, study cache hit ratio curves and their modeling to understand complex cache performance behaviors like cliffs and plateaus. Finally, explore cache-aware synthetic trace generation methods that combine these concepts to produce realistic storage workload traces with accurate cache behavior.

### Inter-reference distance distributions *(prerequisite)*
Inter-reference distance (IRD) distributions measure the gaps between repeated accesses to the same data item, capturing how recently data is reused. Understanding IRD helps model recency effects, which are crucial for predicting cache behavior in storage systems.

*How the paper uses it:* 2DIO uses IRD distributions to model short-term recency effects in synthetic trace generation.

▶ [34. Distance Matrices, Procrustes Problem](https://www.youtube.com/watch?v=0Qws8BuK3RQ) — MIT OpenCourseWare · 7y ago

### Cache hit ratio curves and modeling *(prerequisite)*
Cache hit ratio curves show how the cache hit rate changes with cache size, revealing complex patterns like cliffs and plateaus that indicate sudden performance changes. Understanding these curves is key to evaluating and modeling cache performance accurately.

*How the paper uses it:* 2DIO aims to reproduce complex, non-concave cache hit ratio curves observed in real workloads.

▶ [Cache Hit, Cache Miss, Hit Ratio, Cache Stampede Explained | L-2](https://www.youtube.com/watch?v=k_JRwnjuFX4) — Core Logic · 4mo ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core ideas of the 2DIO paper. Starting with a beginner-level reproduction of a cache hit ratio curve from synthetic data, you then implement the paper's core trace generation method and compare it to a baseline. Finally, you extend 2DIO to address one of its stated limitations by modeling variable-sized I/O requests, demonstrating deeper engagement with the paper's future directions.

### Beginner — Cache Hit Ratio Curve Visualization from Synthetic IRD Data
*Effort: a weekend, ~8 hours*

You build a simple script to generate synthetic inter-reference distance (IRD) distributions and simulate cache hit ratio (CHR) curves under an LRU cache model. You then plot these curves to reproduce the characteristic cliffs and plateaus shown in the paper's Fig. 3 using parameterized IRD inputs.

**Why it shows you understood the paper:** This project demonstrates you understand how IRD distributions influence cache hit ratio curves and can reproduce key cache behavior phenomena highlighted by 2DIO, such as performance cliffs and plateaus.

**Grounded in:** Fig. 3 shows 2DIO-generated traces reproducing performance cliffs and plateaus seen in real CloudPhysics traces, unlike IRM-based synthetic traces which produce concave curves.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic IRD distributions generated programmatically based on the paper's description; no external dataset required.

**Build it:**

1. Implement a function to generate synthetic IRD distributions parameterized by recency and frequency characteristics.
2. Simulate an LRU cache model to compute cache hit ratios from the IRD samples over varying cache sizes.
3. Plot the resulting cache hit ratio curves, highlighting cliffs and plateaus.
4. Compare your plots qualitatively to the paper's Fig. 3 to verify similar shapes.

**Ships as:** A GitHub repo with Python scripts and Jupyter notebooks that generate and plot synthetic IRD-based cache hit ratio curves, with README explaining the connection to 2DIO's cache behavior reproduction.

**Stretch goal:** Add interactive sliders (e.g., using ipywidgets) to tune IRD parameters and observe real-time changes in cache hit ratio curves.

### Intermediate — Reimplementation of 2DIO Trace Generation and Baseline Comparison
*Effort: 2 weekends, ~20 hours*

You reimplement the core 2DIO trace generation algorithm combining IRD and IRM models to produce synthetic storage traces. You then generate cache hit ratio curves from these traces and compare them against a baseline method such as the TraceRaR approach from the referenced third-party artifact.

**Why it shows you understood the paper:** This project shows you can translate the paper's core algorithmic approach into working code, generate synthetic traces with complex cache behaviors, and quantitatively evaluate fidelity against existing methods.

**Grounded in:** 2DIO combines inter-reference distance (IRD) distributions capturing recency with independent reference model (IRM) frequency distributions to generate synthetic traces. Fig. 8 compares 2DIO with TraceRaR and LLGAN, showing 2DIO better preserves real trace HRCs while others diverge.

**Tech stack:** Python 3.11, numpy, matplotlib, scipy

**Data:** Use synthetic data generated by your implementation; optionally use the TraceRaR baseline code from https://github.com/Effygal/trace-gen for comparison.

**Build it:**

1. Study the paper's Gen-from-IRD and Gen-from-2D algorithms and implement them to generate synthetic traces parameterized by IRD and IRM triplets.
2. Implement an LRU cache simulator to compute cache hit ratio curves from generated traces.
3. Obtain and run the TraceRaR baseline from the third-party artifact to generate baseline traces and cache hit ratio curves.
4. Compare cache hit ratio curves from your 2DIO reimplementation and TraceRaR baseline quantitatively (e.g., mean absolute error) and plot results.
5. Document your implementation details, evaluation methodology, and results.

**Verified links from the paper:**

- <https://github.com/Effygal/trace-gen> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing your 2DIO trace generation code, baseline comparison scripts, plots of cache hit ratio curves, and a detailed README explaining your approach and findings.

**Stretch goal:** Extend your implementation to support interactive parameter tuning to explore a continuum of cache behaviors as in the paper's interactive tool.

### Advanced — Extending 2DIO to Model Variable-Sized I/O Requests
*Effort: 3+ weeks*

You develop an extension to the 2DIO trace generation framework that incorporates variable-sized I/O requests without distorting the IRD distribution, addressing a key limitation noted in the paper. You validate your extension by generating traces and comparing cache hit ratio curves to uniform-sized request traces.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of 2DIO's modeling assumptions and limitations, and the ability to innovate by extending the method to a more realistic workload scenario, potentially enabling more accurate benchmarking of emerging storage systems.

**Grounded in:** Specifying request size distributions with mixed single- and multi-block references can distort the IRD distribution and affect the accuracy of crafted cache behavior. Extending support for variable-sized requests and more complex I/O size distributions without distorting IRD characteristics is a stated future direction.

**Tech stack:** Python 3.11, numpy, matplotlib, scipy

**Data:** Synthetic traces generated by your extended 2DIO implementation with variable-sized requests; no external dataset required.

**Build it:**

1. Review the 2DIO paper's discussion on IRD distortion caused by mixed request sizes and understand the underlying cause.
2. Design a method to incorporate variable-sized I/O requests into the trace generation process while preserving IRD distribution properties.
3. Implement your extension on top of your intermediate-level 2DIO reimplementation.
4. Generate synthetic traces with variable-sized requests and simulate cache hit ratio curves.
5. Compare these curves to those from uniform-sized request traces to evaluate fidelity preservation.
6. Document your methodology, implementation, and evaluation results.

**Ships as:** A GitHub repository with your extended 2DIO code supporting variable-sized requests, evaluation scripts, plots demonstrating cache behavior preservation, and a comprehensive README detailing your approach and findings.

**Stretch goal:** Explore adapting your extension to support other cache replacement policies beyond LRU, such as FIFO or CLOCK, and evaluate their impact on cache hit ratio curves.

_The paper's authors did not release their own code for 2DIO; the intermediate project requires reimplementation from the paper's description and uses the TraceRaR baseline code from a third-party artifact._
