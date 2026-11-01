---
title: "988 · TrainVerify: Equivalence-Based Verification for Distributed LLM Training — Peng Huang"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-peng-huang"
source_hash: "6a6d3c1d984a5f9e9315be3e967cd820085d223e8de5739715099121bd372ee3"
sequence: 988
generator: "outreach-garden: managed"
---

# 988 · TrainVerify: Equivalence-Based Verification for Distributed LLM Training

## At a glance

- **Professor:** Peng Huang
- **Institution:** University of Michigan
- **Paper:** [TrainVerify: Equivalence-Based Verification for Distributed LLM Training](https://arxiv.org/pdf/2506.15961)
- **Authors:** Yunchi Lu, Youshan Miao, Cheng Tan, Peng Huang, Yi Zhu, Xian Zhang, Fan Yang
- **Year:** 2024

## Paper overview

TrainVerify is a system designed to formally verify the correctness of distributed training of large language models (LLMs) by proving that the parallelized execution plan of a model is mathematically equivalent to its logical definition. It uses symbolic data flow graphs, shape reduction, and staged verification to handle the complexity and scale of LLMs, ensuring that distributed training produces correct results without rebuilding the entire training stack.

### Why it matters

**Research problem:** Distributed training of large language models is complex and error-prone, with silent bugs that can waste significant computational resources and produce incorrect models. Existing verification methods are impractical due to the scale and complexity of training stacks and numerical instability in floating-point computations.

**Why it matters:** Training LLMs requires massive computational resources and financial costs. Silent bugs in distributed training can lead to wasted GPU hours, financial loss, and incorrect models that impact critical applications. Rigorous verification is essential to ensure correctness and reliability in distributed training.

**Key contributions:**

- Formal definition and verification of parallelization equivalence for distributed training execution plans.
- Development of symbolic data flow graphs (sDFGs) that capture full training iteration computations including forward, backward, optimizer steps, and metrics.
- Shape reduction technique that reduces tensor sizes for tractable verification without loss of correctness.
- Staged verification algorithm that partitions models into stages for scalable equivalence checking.
- Integration with nnScaler training framework and support for large-scale LLMs including LLaMA3 and DeepSeek-V3.

## About the professor

**Peng Huang** — University of Michigan.

Research interests: computer systems, software reliability

### Research links

- [Faculty/profile page](https://scholar.google.com/citations?user=Yno_ovIAAAAJ&hl=en)
- [Professor website](https://web.eecs.umich.edu/~ryanph)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Formal verification of distributed systems
**The paper assumes:** formal verification methods, symbolic model checking, equivalence checking in distributed systems, SMT solvers
**Already in this field?** Skip this entirely if you already understand formal methods for verifying distributed computations and symbolic equivalence checking.

To deeply understand TrainVerify's approach to formal verification of distributed LLM training, especially its use of symbolic data flow graphs and SMT solvers for equivalence checking, a solid foundation in formal methods for system verification is essential. The rigorous course offers a comprehensive university-level treatment of formal verification techniques, while the fast track provides a concise, visual introduction to formal verification concepts suitable for quickly grasping the core ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Formal Methods for System Verification](https://www.youtube.com/playlist?list=PLwdnzlV3ogoU0I4OqKZvuaPc_EoUPifbP) — NPTEL IIT Guwahati · 58 videos

**Watch only this:** Lectures 1 through 10, about 5.2 hours — covering formal methods introduction, propositional logic, SAT solvers, and model checking basics, which are critical to understanding the verification techniques in the paper.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course covers formal methods for system verification in depth, including propositional logic, SAT solvers, model checking, and formal property verification, all of which underpin the theoretical foundations used by TrainVerify for equivalence checking and symbolic reasoning in distributed systems.

*If you want all of it:* 30.9 hours across 58 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Formal Methods for Verification and Model Checking](https://www.youtube.com/playlist?list=PLZ5_EQH6uyVucnu20SS2BFQdVp_m_bznu) — scottlanyon · 7 videos · 1.5h across 7 episodes

**Watch only this:** Episodes 1 through 4, about 48 minutes — covering model checking intro, basic formal verification concepts, and example proofs, sufficient to grasp the core ideas behind the paper's verification approach.

*Why it unblocks this paper:* This short series by scottlanyon provides a quick and clear primer on formal verification and model checking, including practical examples and explanations of key concepts, making it ideal for gaining a rapid but solid understanding of the verification principles relevant to TrainVerify.

*If you want all of it:* 1.5 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand TrainVerify, start by building foundational knowledge on symbolic data flow graphs, shape reduction techniques, staged verification algorithms, and distributed training correctness verification. These prerequisites provide the theoretical and practical background necessary to grasp the paper's novel approach. Finally, focus on the core concept of TrainVerify itself through the authors' own seminar talk, which offers direct insights into their methodology and results.

### Symbolic data flow graphs *(prerequisite)*
Symbolic data flow graphs (sDFGs) are a key abstraction that allow algebraic reasoning about computations independent of specific numeric values, which is crucial for verifying distributed training correctness without being affected by floating-point noise. Understanding the basics of data flow graphs and their role in modeling computations sets the stage for comprehending TrainVerify's symbolic approach.

*How the paper uses it:* TrainVerify uses symbolic data flow graphs to represent computations algebraically, enabling noise-immune verification.

▶ [\[Scheduling seminar\] Alix Munier Kordon (Sorbonne U., LIP6) | Synchronous DataFlow: A survival guide](https://www.youtube.com/watch?v=V0LUV5j180E) — Scheduling seminar · 1:02:35 · Streamed 4y ago

### Shape reduction in tensor verification *(prerequisite)*
Shape reduction techniques reduce tensor sizes while preserving their structural and functional properties, making verification computationally feasible for large models. Grasping tensor operations and reshaping is essential to appreciate how TrainVerify scales verification to massive LLMs.

*How the paper uses it:* TrainVerify applies shape reduction to mitigate scale explosion in large models without losing verification fidelity.

▶ [PyTorch Tensor Operations: reshape, view, transpose, matmul and Broadcasting | LLM Course L6](https://www.youtube.com/watch?v=iRxWL_bgvMM) — The Modern SDE · 9:46 · 3w ago

### Staged verification algorithms *(prerequisite)*
Staged verification partitions a large model into smaller, manageable subgraphs or stages, allowing scalable equivalence checking. Familiarity with verification algorithms and partitioning strategies is important to understand how TrainVerify achieves tractable verification of complex distributed training plans.

*How the paper uses it:* TrainVerify uses staged verification to decompose the model verification into stages, ensuring scalable equivalence checking.

▶ [Algorithmic Software Verification](https://www.youtube.com/watch?v=DM1G__Limmo) — Microsoft Research · 1:12:41 · 10y ago

### Distributed training correctness verification *(prerequisite)*
Distributed training correctness verification addresses the challenges of ensuring that parallelized training executions produce correct and reliable results, which is critical given the complexity and scale of LLM training. Understanding the broader context of distributed system verification provides motivation and background for TrainVerify's approach.

*How the paper uses it:* TrainVerify contributes to the broader field of verifying correctness and reliability in distributed LLM training systems.

▶ ["Correctness proofs of distributed systems with Isabelle" by Martin Kleppmann](https://www.youtube.com/watch?v=7w4KC6i9Yac) — Strange Loop Conference · 42:38 · 7y ago

### TrainVerify paper talk
The authors' own seminar talk on TrainVerify provides a direct and detailed exposition of their system, methodology, and experimental results. This talk is the most authoritative source to understand the paper's contributions and technical nuances.

*How the paper uses it:* This is the authors' own presentation of TrainVerify, offering direct insights into their verification system for distributed LLM training.

▶ [TrainVerify: Equivalence-Based Verification for Distributed LLM Training | NEU LLMSys Seminar#5](https://www.youtube.com/watch?v=_uiyXBXZyxo) — Cheng Tan · 26:35 · 11mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through the foundational concepts necessary to understand TrainVerify, a system for verifying distributed training correctness of large language models. We start with the basics of tensors and data flow graphs, then explore techniques like shape reduction and staged verification for scalability, and finally focus on the core concept of parallelization equivalence verification as applied in the paper.

### Shape reduction in tensor verification *(prerequisite)*
Learn what tensors are and how their shapes can be manipulated without changing their underlying data. Understanding tensor reshaping and reduction is crucial for grasping how TrainVerify reduces tensor sizes to make verification tractable while preserving correctness.

*How the paper uses it:* TrainVerify uses shape reduction to reduce tensor sizes while preserving verification fidelity, enabling scalable verification of large models.

▶ [PyTorch Tensor Operations: reshape, view, transpose, matmul and Broadcasting | LLM Course L6](https://www.youtube.com/watch?v=iRxWL_bgvMM) — The Modern SDE · 9:46 · 3w ago

### Symbolic data flow graphs *(prerequisite)*
Data flow graphs represent computations as nodes and edges showing data dependencies. Symbolic data flow graphs extend this by abstracting computations algebraically, allowing reasoning about operations without numerical noise, which is essential for formal verification.

*How the paper uses it:* TrainVerify introduces symbolic data flow graphs to capture the algebraic semantics of training computations, enabling noise-immune verification.

▶ [Data Flow Graphs](https://www.youtube.com/watch?v=B7q_86Ui-As) — Software testing · 40:23 · 9y ago

### Staged verification algorithms *(prerequisite)*
Staged verification breaks down a large verification problem into smaller, manageable parts or stages. This approach improves scalability by verifying each stage independently and then combining results to ensure overall correctness.

*How the paper uses it:* TrainVerify applies staged verification to partition large LLM models into subgraphs, enabling scalable equivalence checking.

▶ [Algorithmic Software Verification](https://www.youtube.com/watch?v=DM1G__Limmo) — Microsoft Research · 1:12:41 · 10y ago

### Parallelization equivalence verification
Parallelization equivalence verification ensures that a parallelized execution plan produces the same results as the original logical model. This concept is key to verifying that distributed training does not introduce errors despite parallel execution.

*How the paper uses it:* The core of TrainVerify is formally verifying parallelization equivalence between the logical and distributed execution plans.

▶ [TrainVerify: Equivalence-Based Verification for Distributed LLM Training | NEU LLMSys Seminar#5](https://www.youtube.com/watch?v=_uiyXBXZyxo) — Cheng Tan · 26:35 · 11mo ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=VlA_jt_3Qc4) — also for: On the Entropy Calibration of Language Models (Gregory Valiant)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Stanford CS336 Language Modeling from Scratch | Spring 2025 | Lecture 7: Parallelism 1](https://www.youtube.com/watch?v=l1RJcDjzK8M) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [Equivalence Checking / Formal Verification](https://www.youtube.com/watch?v=LfqNlRfpVWo) — also for: Equivalence Checking for Flow-Based Computing using Iterative SAT Solving (Muhammad Rashedul Haq Rashed)
- [A friendly introduction to distributed training (ML Tech Talks)](https://www.youtube.com/watch?v=S1tN9a4Proc) — also for: A Multi-Agent Approach to Binary Classification Using Swarm Intelligence (David E. Breen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of TrainVerify's approach to verifying distributed training correctness for large language models. The beginner project focuses on symbolic data flow graphs (sDFGs) and symbolic computation abstraction on a small scale. The intermediate project implements a simplified equivalence verification with shape reduction and staged verification on a smaller model, reimplementing the core method described in the paper. The advanced project extends TrainVerify's verification approach to support a more complex optimizer stage or dynamic parallelization, addressing one of the paper's stated limitations and future directions.

### Beginner — Symbolic Data Flow Graph Construction and Visualization
*Effort: a weekend, ~8 hours*

You build a tool that takes a small neural network's forward and backward pass computation graph (e.g., a simple MLP in PyTorch) and converts it into a symbolic data flow graph (sDFG) representation. The tool will symbolize tensor operations algebraically, enabling inspection of symbolic expressions and basic equivalence checks between two small computation graphs.

**Why it shows you understood the paper:** This project demonstrates comprehension of TrainVerify's symbolic abstraction layer, showing you can represent training computations algebraically and reason about them independent of numeric data, a core innovation of the paper.

**Grounded in:** Development of symbolic data flow graphs (sDFGs) that capture full training iteration computations including forward, backward, optimizer steps, and metrics.

**Tech stack:** Python 3.11, PyTorch, NetworkX, Matplotlib

**Data:** Use a small synthetic dataset (e.g., random inputs) to run a simple MLP model in PyTorch; no external dataset needed.

**Build it:**

1. Implement a small MLP model in PyTorch and extract its computation graph for a forward and backward pass.
2. Design a symbolic representation for tensors and operations (e.g., symbolic variables and algebraic operators).
3. Convert the PyTorch computation graph into a symbolic data flow graph (sDFG) capturing algebraic semantics.
4. Visualize the sDFG using NetworkX and Matplotlib to show nodes and symbolic expressions.
5. Implement a simple equivalence check that compares two sDFGs for structural and symbolic similarity.

**Ships as:** A GitHub repo with code to convert PyTorch graphs to sDFGs, visualize them, and perform basic symbolic equivalence checks, documented with examples on a small MLP.

**Stretch goal:** Add support for symbolic representation of optimizer steps (e.g., SGD updates) and verify equivalence of optimizer computations.

### Intermediate — Simplified Parallelization Equivalence Verification with Shape Reduction
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of TrainVerify's core verification method by constructing symbolic data flow graphs for a small distributed training plan of a transformer model (e.g., a distilled GPT-2 variant). You apply shape reduction to tensors to reduce verification complexity and implement staged verification by partitioning the model into subgraphs. You then verify equivalence between a logical model DFG and a manually parallelized execution plan DFG.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core verification approach, including symbolic abstraction, shape reduction, and staged verification, and apply it to a smaller but realistic transformer model, demonstrating grasp of the main technical contributions.

**Grounded in:** Formal definition and verification of parallelization equivalence for distributed training execution plans; Shape reduction technique that reduces tensor sizes for tractable verification without loss of correctness; Staged verification algorithm that partitions models into stages for scalable equivalence checking.

**Tech stack:** Python 3.11, PyTorch, Z3 SMT solver, NetworkX

**Data:** Use a publicly available small transformer model and synthetic input data; no proprietary datasets required.

**Build it:**

1. Implement symbolic data flow graph construction for a small transformer model's training iteration (forward, backward, optimizer).
2. Manually create a parallelized execution plan DFG simulating simple data or model parallelism.
3. Implement shape reduction to reduce tensor sizes while preserving semantics.
4. Partition the model into stages and implement staged verification using the Z3 SMT solver to check equivalence of each stage.
5. Run verification and report equivalence results and verification time.
6. Document the process and compare verification results with a naive baseline that does not use shape reduction or staging.

**Ships as:** A GitHub repo with code to build symbolic DFGs, apply shape reduction, perform staged verification with Z3, and a report comparing verification results and efficiency.

**Stretch goal:** Integrate with a simple training framework to automatically extract SSA computation graphs with tensor lineage.

### Advanced — Extending TrainVerify to Support ZeRO Stage 2 Optimizer Verification
*Effort: 3-4 weeks*

You extend the TrainVerify verification framework to support ZeRO Stage 2 optimizer abstraction, addressing one of the paper's stated limitations. This involves modeling the additional optimizer state partitioning and communication patterns symbolically, adapting shape reduction and staged verification to handle the increased complexity, and verifying equivalence on a small distributed training plan using ZeRO Stage 2.

**Why it shows you understood the paper:** This project tackles a real limitation identified by the paper, demonstrating deep understanding of TrainVerify's architecture and the challenges in verifying more complex optimizer stages, potentially contributing novel extensions to the verification approach.

**Grounded in:** Currently supports ZeRO Stage 1 optimizer abstraction only; future direction: Extending support to other optimizer stages and more diverse model architectures.

**Tech stack:** Python 3.11, PyTorch, Z3 SMT solver, NetworkX, Docker

**Data:** Use a small transformer model with synthetic data; no proprietary datasets required.

**Build it:**

1. Study ZeRO Stage 2 optimizer mechanics and how they affect distributed training execution plans.
2. Extend symbolic data flow graph construction to model ZeRO Stage 2 optimizer state partitioning and communication.
3. Adapt shape reduction and staged verification algorithms to handle ZeRO Stage 2 specifics.
4. Implement equivalence verification between logical DFG and ZeRO Stage 2 parallelized execution plan DFG.
5. Evaluate verification correctness and performance on a small transformer model training plan.
6. Document challenges, solutions, and verification results.

**Ships as:** A GitHub repo with extended verification code supporting ZeRO Stage 2, example verification runs, and detailed documentation of the extension and evaluation.

**Stretch goal:** Explore verification support for dynamic or adaptive parallelization strategies evolving during training.
