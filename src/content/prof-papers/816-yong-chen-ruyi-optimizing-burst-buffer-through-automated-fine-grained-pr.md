---
title: "816 · RuYi: Optimizing Burst Buffer Through Automated, Fine-Grained Process-to-BB Mapping — Yong Chen"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yong-chen"
source_hash: "633876a16911a75340a327ede5e173c12d40d5bb35febb64787b466c6a726c69"
sequence: 816
generator: "outreach-garden: managed"
---

# 816 · RuYi: Optimizing Burst Buffer Through Automated, Fine-Grained Process-to-BB Mapping

## At a glance

- **Professor:** Yong Chen
- **Institution:** Texas Tech University
- **Paper:** [RuYi: Optimizing Burst Buffer Through Automated, Fine-Grained Process-to-BB Mapping](https://wrap.warwick.ac.uk/id/eprint/188591/7/RuYi_Optimizing_Burst_Buffer_Through_Automated_Fine-Grained_Process-to-BB_Mapping.pdf)
- **Authors:** Yusheng Hua, Xuanhua Shi, Ligang He, Kang He, Teng Zhang, Hai Jin, Yong Chen
- **Year:** 2025

## Paper overview

This paper presents RuYi, a method to optimize the use of burst buffer (BB) storage in supercomputers by providing fine-grained Quality of Service (QoS) guarantees at the process level. RuYi profiles available bandwidth on BB nodes and maps individual I/O processes to BB nodes, improving resource utilization and ensuring bandwidth guarantees. Evaluations on the Sunway supercomputer show RuYi achieves 97% bandwidth control accuracy and improves BB utilization by up to 116%, with acceptable overhead for exascale systems.

### Why it matters

**Research problem:** Efficiently allocating limited and expensive burst buffer (BB) storage in high-performance computing (HPC) systems to provide reliable Quality of Service (QoS) guarantees while maximizing resource utilization is challenging. Existing methods lack quantitative bandwidth profiling and use coarse-grained compute-to-BB mapping, leading to resource underutilization and performance degradation.

**Why it matters:** Burst buffers are critical for accelerating I/O-intensive HPC applications but are costly and scarce resources. Inefficient allocation causes performance degradation due to interference and underutilization wastes expensive hardware, limiting HPC system efficiency and scalability.

**Key contributions:**

- Proposed a QoS-aware BB allocation method that quantitatively profiles available bandwidth to ensure reliable QoS.
- Designed and implemented fine-grained process-to-BB mapping to allocate BB resources at the I/O process level, improving utilization and synchronous I/O progress.
- Integrated RuYi with the HadaFS BB file system and demonstrated its effectiveness on the Sunway supercomputer.
- Provided user-level QoS interfaces for dynamic bandwidth requests and releases.
- Developed a bandwidth prediction method based on empirical modeling of SSD performance and load merging.

## About the professor

**Yong Chen** — Professor and Chair, Computer Science Department, Texas Tech University.

Research interests: data-intensive computing, high-performance computing, parallel and distributed computing, cloud computing, computer architectures, and systems software support for high-performance scientific computing/high-end enterprise computing

### Research links

- [Faculty/profile page](https://www.depts.ttu.edu/cs/faculty/yong_chen)
- [Identity evidence](http://www.myweb.ttu.edu/yonchen)
- [Lab website](https://discl.cs.ttu.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=PHVKUhEAAAAJ)
- [ORCID](https://orcid.org/0000-0002-9961-9051)
- [DBLP](https://dblp.org/pers/hd/c/Chen_0001:Yong)
- [LinkedIn](https://www.linkedin.com/in/yong-chen-92174410)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** High Performance Computing Systems
**The paper assumes:** high performance computing architectures, parallel I/O systems, resource scheduling algorithms
**Already in this field?** Skip this entirely if you already have a solid understanding of HPC system design and parallel I/O resource management.

To understand RuYi's approach to optimizing burst buffer usage in HPC systems, a solid grasp of high-performance computing system architectures, storage hierarchies, and resource scheduling is essential. The rigorous course provides a deep, structured foundation on parallel programming and HPC concepts, while the fast track offers a concise, practical introduction to HPC basics and cluster usage. Choose the rigorous path for comprehensive understanding and the fast track for a quick, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to parallel Programming in Open MP](https://www.youtube.com/playlist?list=PLp6ek2hDcoNBAyEJmxsOowMYNTKsUmTZ8) — NPTEL IIT Delhi · 87 videos · 12.3h across the first 60 episodes

**Watch only this:** Episodes 1 to 9 (Introduction to Parallel Programming through Shared and Distributed Memory architectures), about 1.8 hours — these cover HPC fundamentals, memory hierarchy, and parallel architectures essential for grasping RuYi's system-level optimizations.

*Why it unblocks this paper:* This NPTEL IIT Delhi course on Introduction to Parallel Programming covers fundamental HPC concepts including memory latency, cache, shared and distributed memory architectures, and parallel programming models, directly relevant to understanding burst buffer resource management and process-to-resource mapping in RuYi.

*If you want all of it:* First 60 episodes totaling approximately 12.3 hours, covering a broad range of parallel programming and HPC system topics.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [HPC basics](https://www.youtube.com/playlist?list=PL5l6Qz3Xhfi9Jn9-iMKJisYsSW5tRzPSd) — New York University High Performance Computing · 13 videos · 0.6h across 13 episodes

**Watch only this:** Episodes 1 to 8 (Logging into HPC clusters, transferring files, and Slurm job scheduler basics), about 16 minutes — enough to understand HPC cluster interaction and job scheduling relevant to process-to-BB mapping.

*Why it unblocks this paper:* This short series from New York University High Performance Computing provides quick, practical introductions to HPC cluster usage, job scheduling, and running HPC jobs, giving a fast, hands-on understanding of HPC environments relevant to RuYi's deployment context.

*If you want all of it:* All 13 episodes totaling about 36 minutes, covering practical HPC cluster usage and job management.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the RuYi paper on optimizing burst buffer usage in HPC systems, start by building foundational knowledge on burst buffer resource management, quality of service (QoS) in HPC storage, and I/O scheduling algorithms, as these underpin RuYi's approach. Then, focus on the paper's core concept of fine-grained process-to-burst-buffer mapping, which is central to RuYi's innovation. Finally, conclude with the authors' own talk or the closest available substitute to gain direct insights into their methodology and results.

### Burst buffer resource management *(prerequisite)*
Understanding how burst buffers are allocated and managed in HPC systems is essential to grasp the improvements RuYi offers. This includes knowledge of distributed burst buffer systems and their integration with HPC storage stacks.

*How the paper uses it:* RuYi optimizes burst buffer allocation and scheduling to improve utilization and QoS guarantees.

▶ [An Efficient Distributed Burst Buffer System for Lustre](https://www.youtube.com/watch?v=SBgv9D48Occ) — insideHPC Report · 22:09 · 12y ago

### Quality of service in HPC storage *(prerequisite)*
Quality of Service (QoS) in HPC storage systems ensures predictable performance and resource guarantees, which is critical for RuYi's bandwidth guarantees. Understanding current HPC storage trends and QoS challenges provides context for RuYi's contributions.

*How the paper uses it:* RuYi provides fine-grained QoS guarantees for burst buffer bandwidth in HPC environments.

▶ [HPC Storage Strategies Explained: Scaling Data for Scientific Research & AI](https://www.youtube.com/watch?v=sV1uRCZqjKs) — Scientific Computing World · 1:09:30 · 8mo ago

### I/O scheduling algorithms *(prerequisite)*
I/O scheduling algorithms manage how storage resources are shared among competing processes. RuYi modifies the burst buffer scheduler and employs the mClock algorithm, so familiarity with scheduling principles and algorithms is necessary to understand its design.

*How the paper uses it:* RuYi integrates the mClock algorithm into its BB scheduler to enforce bandwidth QoS.

▶ [UGC NET Computer Science 10 Mint Concept | Disk Scheduling Algorithms | Computer Science UGC NET](https://www.youtube.com/watch?v=Nkry0V2ef5s) — PW UGC NET · 11:39 · 10mo ago

### Fine-grained process-to-resource mapping
Central to RuYi's approach is the fine-grained mapping of individual I/O processes to burst buffer nodes, breaking down coarse-grained allocation to improve utilization and QoS. Understanding process-to-resource mapping concepts helps appreciate this innovation.

*How the paper uses it:* RuYi's key contribution is fine-grained process-to-BB mapping for bandwidth allocation.

▶ [Lecture 3 | Understanding Processes, Process Groups and Knowledge Area Mapping](https://www.youtube.com/watch?v=Akz_B_Eadqk) — Shahid Reza · 1:40:44 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the RuYi paper, start by learning the basics of burst buffer resource management in HPC systems, which sets the stage for why efficient allocation matters. Next, grasp the concept of Quality of Service (QoS) in HPC storage to appreciate RuYi's bandwidth guarantees. Then, study I/O scheduling algorithms, especially mClock, as RuYi modifies the BB scheduler using these techniques. Finally, explore the core idea of fine-grained process-to-resource mapping, which is central to RuYi's approach to optimize burst buffer utilization.

### Burst buffer resource management *(prerequisite)*
Burst buffers are fast intermediate storage layers in HPC systems that help accelerate I/O by absorbing data bursts. Understanding how these buffers are allocated and managed is crucial to appreciate RuYi's improvements in resource utilization and QoS guarantees.

*How the paper uses it:* RuYi optimizes burst buffer allocation by profiling bandwidth and mapping I/O processes to BB nodes for better utilization.

▶ [22 Buffer Cache - 1](https://www.youtube.com/watch?v=IXrPpc500Xo) — kashyap B · 44:30 · 13y ago

### Quality of service in HPC storage *(prerequisite)*
Quality of Service (QoS) in HPC storage ensures predictable performance levels like bandwidth or latency for applications sharing storage resources. Learning about QoS helps understand how RuYi guarantees bandwidth for individual I/O processes.

*How the paper uses it:* RuYi provides fine-grained QoS guarantees on burst buffer bandwidth to improve performance and fairness.

▶ [HPC Storage Strategies Explained: Scaling Data for Scientific Research & AI](https://www.youtube.com/watch?v=sV1uRCZqjKs) — Scientific Computing World · 1:09:30 · 8mo ago

### I/O scheduling algorithms *(prerequisite)*
I/O scheduling algorithms determine how storage requests are ordered and prioritized to meet performance goals. The mClock algorithm used by RuYi is a QoS-aware scheduler that enforces bandwidth guarantees by managing request priorities.

*How the paper uses it:* RuYi modifies the burst buffer scheduler and uses the mClock algorithm to enforce bandwidth QoS.

▶ [UGC NET Computer Science 10 Mint Concept | Disk Scheduling Algorithms | Computer Science UGC NET](https://www.youtube.com/watch?v=Nkry0V2ef5s) — PW UGC NET · 11:39 · 10mo ago

## Already in your library

- [Resource Allocation Graph](https://www.youtube.com/watch?v=-VksGXfiK7k) — also for: Graph Theoretic Approach to QoS Guaranteed Spectrum Allocation in Cognitive Radio Networks (Kenneth A. Berman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of RuYi's approach to burst buffer optimization in HPC. The beginner project reproduces a core concept of process-level bandwidth profiling using familiar tools. The intermediate project implements RuYi's fine-grained process-to-BB mapping method on a simulated HPC workload and compares utilization metrics. The advanced project extends RuYi by exploring automated I/O parameter profiling, addressing a stated limitation and future direction of the paper.

### Beginner — Simulate Bandwidth Profiling for Burst Buffer Nodes
*Effort: a weekend, ~8 hours*

You build a simple simulation that models bandwidth availability on multiple burst buffer nodes and profiles bandwidth usage per I/O process. The simulation will allow you to specify I/O operation types and request sizes and output bandwidth allocation statistics.

**Why it shows you understood the paper:** This project demonstrates your grasp of RuYi's quantitative bandwidth profiling concept, showing you can model how bandwidth varies by process and I/O characteristics.

**Grounded in:** Proposed a QoS-aware BB allocation method that quantitatively profiles available bandwidth to ensure reliable QoS.

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib

**Data:** Synthetic data simulating I/O processes with varying operation types and request sizes; no real dataset required.

**Build it:**

1. Implement a Python class to represent burst buffer nodes with configurable bandwidth capacity.
2. Simulate multiple I/O processes with attributes: operation type (read/write), request size, and desired bandwidth.
3. Create a bandwidth profiling function that estimates available bandwidth per process based on node capacity and process attributes.
4. Visualize bandwidth allocation results using plots to show distribution across processes and nodes.

**Ships as:** A Jupyter Notebook with simulation code, visualizations of bandwidth profiling, and a README explaining the model and results.

**Stretch goal:** Add a simple scheduler that assigns processes to nodes to maximize utilization based on the profiling.

### Intermediate — Implement Fine-Grained Process-to-BB Mapping with Bandwidth Guarantees
*Effort: 1-3 weekends*

You implement a simplified version of RuYi's fine-grained process-to-burst-buffer mapping and mClock-based QoS controller. Using a simulated HPC workload with multiple I/O processes and burst buffer nodes, you allocate bandwidth per process and measure utilization improvements compared to a baseline coarse-grained mapping.

**Why it shows you understood the paper:** This project shows you can reimplement RuYi's core method of fine-grained mapping and QoS enforcement, reproducing key metrics like bandwidth control accuracy and utilization gains.

**Grounded in:** Designed and implemented fine-grained process-to-BB mapping to allocate BB resources at the I/O process level, improving utilization and synchronous I/O progress.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic HPC I/O workload data simulating multiple processes and BB nodes; no public dataset available.

**Build it:**

1. Model burst buffer nodes and I/O processes with bandwidth capacities and demands.
2. Implement a baseline coarse-grained compute-to-BB mapping assigning all processes of a compute node to one BB node.
3. Implement fine-grained process-to-BB mapping that assigns individual processes to BB nodes based on bandwidth profiling.
4. Implement a simplified mClock algorithm to enforce bandwidth guarantees per process.
5. Run simulations comparing bandwidth utilization and control accuracy between baseline and fine-grained mapping.
6. Visualize and report utilization improvements and bandwidth control accuracy.

**Ships as:** A GitHub repository with simulation code, comparison results, and a detailed README explaining the implementation and findings.

**Stretch goal:** Incorporate inter-application interference modeling to test robustness of the mapping.

### Advanced — Automate I/O Parameter Profiling for Dynamic Bandwidth Allocation
*Effort: several weeks*

You develop an automated profiling tool that infers I/O parameters (operation type, request size, desired bandwidth) from runtime I/O traces or logs, reducing user burden in specifying QoS requirements. You integrate this with a simplified RuYi-style bandwidth allocation simulation and evaluate adaptability to dynamic workloads.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of RuYi by automating parameter detection, demonstrating your ability to extend the paper's approach and contribute novel system-level improvements.

**Grounded in:** Requires modification of application source code to call RuYi QoS interfaces for specifying bandwidth requirements; Automatic detection of I/O parameters (operation type, request size, desired bandwidth) is not implemented, relying on user or administrator input.

**Tech stack:** Python 3.11, Pandas, Scikit-learn, Jupyter Notebook

**Data:** Simulated or publicly available HPC I/O trace logs (e.g., from HACC-IO or VPIC-IO GitHub repositories) to extract I/O parameters.

**Build it:**

1. Collect or simulate I/O trace data containing operation types, request sizes, and timestamps.
2. Implement feature extraction to summarize I/O patterns per process.
3. Train or implement heuristic models to classify operation types and estimate desired bandwidth from traces.
4. Integrate automated profiling with a bandwidth allocation simulation based on RuYi's method.
5. Evaluate profiling accuracy and impact on bandwidth allocation effectiveness compared to manual parameter input.
6. Document the tool, usage instructions, and evaluation results.

**Verified links from the paper:**

- <https://github.com/glennklockwood/hacc-io> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/glennklockwood/vpic-io> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the automated profiling tool, integration code, evaluation scripts, and a comprehensive README.

**Stretch goal:** Extend the tool to support dynamic reconfiguration of process-to-BB mapping at runtime based on updated profiling.
