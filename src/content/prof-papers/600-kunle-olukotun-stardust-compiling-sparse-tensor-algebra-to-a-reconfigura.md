---
title: "600 · Stardust: Compiling Sparse Tensor Algebra to a Reconfigurable Dataflow Architecture — Kunle Olukotun"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-kunle-olukotun"
source_hash: "f5d1aeadcb0f63a898b553e390a33059d5ff09b27b551c729e720957201387c0"
sequence: 600
generator: "outreach-garden: managed"
---

# 600 · Stardust: Compiling Sparse Tensor Algebra to a Reconfigurable Dataflow Architecture

## At a glance

- **Professor:** Kunle Olukotun
- **Institution:** Stanford University
- **Paper:** [Stardust: Compiling Sparse Tensor Algebra to a Reconfigurable Dataflow Architecture](https://doi.org/10.1145/3696443.3708918)
- **Authors:** Olivia Hsu, Alexander Rucker, Tian Zhao, Kunle Olukotun, Fredrik Kjølstad
- **Year:** 2022

## Paper overview

This paper presents Stardust, a compiler that translates high-level sparse tensor algebra expressions into efficient programs for specialized hardware called reconfigurable dataflow architectures (RDAs). These RDAs accelerate sparse computations common in machine learning and scientific computing. Stardust separates the description of algorithms, data formats, and schedules to generate optimized code that outperforms CPU and GPU implementations by large margins.

### Why it matters

**Research problem:** Sparse tensor algebra computations are widely used but challenging to accelerate efficiently due to their irregular data structures and diverse operations. Existing hardware accelerators often target only a few common kernels, leaving many important sparse computations unsupported or inefficient. Programming reconfigurable sparse accelerators is difficult because of their explicit memory management and streaming dataflow models, which differ from conventional CPU/GPU programming.

**Why it matters:** Efficient sparse tensor algebra is critical for applications in data analytics, scientific computing, and machine learning. Improving performance and energy efficiency for the 'long tail' of sparse computations can enable faster and more scalable data processing. Making these accelerators accessible to domain scientists and software developers can broaden their impact and adoption.

**Key contributions:**

- A data representation language to express tensor placement on accelerator memories.
- A scheduling language to map sparse iteration spaces and computations to accelerator patterns.
- An algorithm for fine-grained memory analysis and binding of tensor subarrays to physical memories.
- A lowering rewrite system that compiles sparse tensor algebra expressions to a declarative sparse programming model for RDAs.
- Implementation of a new compilation path in the open-source TACO system targeting the Capstan RDA.

## About the professor

**Kunle Olukotun** — Professor, Electrical Engineering and Computer Science, Stanford University.

Research interests: computer architecture, parallel programming environments, scalable parallel systems

### Research links

- [Faculty/profile page](http://arsenalfc.stanford.edu/kunle)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Sparse Tensor Algebra Compilation
**The paper assumes:** sparse tensor algebra, compiler design for sparse computations, and dataflow accelerator programming models
**Already in this field?** Skip this entirely if you already understand sparse tensor algebra and how compilers target sparse computations on specialized hardware.

To understand the Stardust paper on compiling sparse tensor algebra to reconfigurable dataflow architectures, a solid grasp of sparse tensor algebra concepts and their computational representations is essential. The rigorous course option offers a deep dive into tensor algebra theory and algorithms, suitable for readers seeking comprehensive foundational knowledge. The fast track provides a concise, intuition-focused introduction to tensor algebra concepts, enabling quicker familiarization with the core ideas relevant to sparse tensor computations.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [TENSOR CALCULAS](https://www.youtube.com/playlist?list=PLtFV0hYqGnEk-PgBLjmTAng838WhhOMIL) — Mathematics Analysis · 32 videos · 2.0h across 32 episodes

**Watch only this:** Episodes 1-10, about 30 minutes — covering tensor algebra basics, tensor definitions, and operations needed to grasp sparse tensor computations.

*Why it unblocks this paper:* This short-form series provides concise explanations of tensor algebra and calculus concepts in brief episodes, offering a quick, accessible introduction to the mathematical foundations of tensor operations relevant to sparse tensor algebra.

*If you want all of it:* 2.0 hours across all 32 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Stardust compiler and its contributions, start by building foundational knowledge on reconfigurable dataflow architectures and sparse tensor data representations, which are key to the hardware and data layout challenges addressed by Stardust. Then, explore compiler scheduling techniques for accelerators to appreciate how computations are efficiently mapped to hardware. Finally, focus on the core topic of sparse tensor algebra compilation, culminating with the authors' own detailed talk on programming systems for sparse accelerators, which directly presents the Stardust work.

### Reconfigurable dataflow architectures *(prerequisite)*
Understanding the target hardware architecture is essential to grasp how Stardust compiles sparse tensor algebra to specialized accelerators. Reconfigurable dataflow architectures (RDAs) differ significantly from CPUs and GPUs in their push-model computation and explicit memory management, which pose unique programming challenges.

*How the paper uses it:* Stardust targets the Capstan RDA, a reconfigurable dataflow architecture, making knowledge of RDAs foundational to understanding the compiler's design and optimizations.

▶ [Plasticine: A Reconfigurable Dataflow Architecture for Software 2.0, Kunle Olukotun, Stanford-Part 1](https://www.youtube.com/watch?v=Zp0h3_eLOBs) — IEEE SSCS Silicon Valley Chapter · 1:00:15 · 7y ago

### Sparse tensor data representations *(prerequisite)*
Sparse tensor data representations are critical for expressing and optimizing sparse data layouts on hardware accelerators. This knowledge helps in understanding how Stardust's data representation language enables explicit tensor placement in accelerator memories and manages data transfers.

*How the paper uses it:* Stardust introduces a data representation language to express tensor placement on accelerator memories, which is key to its performance gains.

▶ [Sparseloop: An Analytical Approach to Sparse Tensor Accelerator Modeling @ MICRO 2022](https://www.youtube.com/watch?v=ptN_Swfc834) — MIT EEMS Group - PI: Vivienne Sze · 11:35 · 3y ago

### Compiler scheduling for accelerators *(prerequisite)*
Compiler scheduling is essential for mapping computations efficiently onto accelerator resources. Understanding scheduling concepts helps in appreciating Stardust's scheduling language that maps sparse iteration spaces and computations to accelerator patterns.

*How the paper uses it:* Stardust's scheduling language and rewrite system automate mapping sparse iteration patterns to hardware primitives, a core contribution of the paper.

▶ [Using MLIR for Hardware Accelerators Lecture 1 (Alex Singer): ECE493 UofWaterloo Guest Lecture](https://www.youtube.com/watch?v=a8UmgZKE3kA) — Alexandre Singer · 1:00:45 · 2mo ago

### Sparse tensor algebra compilation
Sparse tensor algebra compilation techniques form the core methodology behind Stardust. This area covers how tensor algebra expressions are transformed into efficient code for various hardware backends, including CPUs, GPUs, and specialized accelerators.

*How the paper uses it:* Stardust extends the TACO sparse tensor algebra compiler to target reconfigurable dataflow architectures, making this topic central to the paper.

▶ [The Tensor Algebra Compiler](https://www.youtube.com/watch?v=Kffbzf9etLE) — Splash Conference 2017 · 18:08 · 8y ago

### Stardust compiler talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insight into the design, implementation, and evaluation of the Stardust compiler. It offers the most precise and comprehensive understanding of the paper's contributions and results.

*How the paper uses it:* This talk by Olivia Hsu from Stanford presents the Stardust compiler and its approach to compiling sparse tensor algebra for RDAs.

▶ [From Language to Silicon: Programming Systems for Sparse Accelerators–Olivia Hsu (Stanford)](https://www.youtube.com/watch?v=HAEHUR7BTZU) — Paul G. Allen School · 1:00:27 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Stardust compiler and its context, start by learning about reconfigurable dataflow architectures (RDAs), the specialized hardware Stardust targets. Next, grasp sparse tensor data representations, which are crucial for expressing and optimizing sparse data layouts on such hardware. Then, study compiler scheduling techniques for accelerators to see how computations are efficiently mapped to hardware resources. Finally, dive into sparse tensor algebra compilation to understand the core compilation methods Stardust extends and builds upon.

### Reconfigurable dataflow architectures *(prerequisite)*
Reconfigurable dataflow architectures are specialized hardware designed to accelerate computations by streaming data through a network of processing elements, exploiting parallelism and locality. Understanding RDAs helps grasp why programming them is challenging and why Stardust’s compiler innovations are necessary.

*How the paper uses it:* Stardust compiles sparse tensor algebra to the Capstan RDA, a reconfigurable dataflow architecture, making understanding RDAs foundational.

▶ [Stanford Seminar -  Dataflow for convergence of AI and HPC - GroqChip!](https://www.youtube.com/watch?v=kPUxl00xys4) — Stanford Online · 1:45:53 · 4y ago

### Sparse tensor data representations *(prerequisite)*
Sparse tensor data representations describe how sparse multi-dimensional data is stored efficiently, avoiding wasted space and enabling fast access. Learning these representations is key to understanding how Stardust expresses tensor placement on accelerator memories.

*How the paper uses it:* Stardust introduces a data representation language to specify tensor memory placement on accelerator hardware.

▶ [Sparse Tensor Accelerator Modeling Tutorial @ ISCA 2021 [Part 1] (3/7)](https://www.youtube.com/watch?v=q6xaSUYPo7g) — MIT EEMS Group - PI: Vivienne Sze · 14:45 · 5y ago

### Compiler scheduling for accelerators *(prerequisite)*
Compiler scheduling involves deciding the order and mapping of computations to hardware resources to maximize performance and efficiency. For accelerators like RDAs, scheduling is critical due to explicit memory management and streaming dataflow models.

*How the paper uses it:* Stardust uses a scheduling language to map sparse iteration spaces and computations to accelerator patterns, automating memory binding and data transfers.

▶ [Using MLIR for Hardware Accelerators Lecture 1 (Alex Singer): ECE493 UofWaterloo Guest Lecture](https://www.youtube.com/watch?v=a8UmgZKE3kA) — Alexandre Singer · 1:00:45 · 2mo ago

### Sparse tensor algebra compilation
Sparse tensor algebra compilation automates generating efficient code for sparse tensor operations, handling diverse formats and operations. Understanding this compilation process reveals how Stardust extends the TACO compiler to target specialized hardware.

*How the paper uses it:* Stardust extends the TACO sparse tensor algebra compiler to generate optimized code for the Capstan RDA.

▶ [The Tensor Algebra Compiler](https://www.youtube.com/watch?v=yAtG64qV2nM) — Microsoft Research · 1:02:14 · 8y ago

### Stardust compiler talk *(paper-talk search result; attribution unverified)*
This talk by the authors provides direct insight into Stardust’s design, data representation and scheduling languages, and performance results, offering a comprehensive overview from the creators themselves.

*How the paper uses it:* The talk covers the core contributions and evaluation of Stardust, directly explaining the paper’s innovations and impact.

▶ [From Language to Silicon: Programming Systems for Sparse Accelerators–Olivia Hsu (Stanford)](https://www.youtube.com/watch?v=HAEHUR7BTZU) — Paul G. Allen School · 1:00:27 · 1y ago

## Already in your library

- [Stanford Seminar - Multiscale Dataflow Computing: Competitive Advantage at the Exascale Frontier](https://www.youtube.com/watch?v=Nwdu7QlFUnA) — also for: TensorPrism: Rethinking Sparse High-order Tensor Acceleration via Co-occurrence Graph (Hao Zheng)
- [The Fabric Architecture: Spatial Dataflow Computing Explained | Efficient Computer](https://www.youtube.com/watch?v=wB4UiGSCF8E) — also for: NUPEA: Optimizing Critical Loads on Spatial Dataflow Architectures via Non-Uniform Processing-Element Access (Nathan Beckmann)
- [Intro to Sparse Tensors and Spatially Sparse Neural Networks](https://www.youtube.com/watch?v=t3z0bOsaDQ0) — also for: TensorPrism: Rethinking Sparse High-order Tensor Acceleration via Co-occurrence Graph (Hao Zheng)
- [Sparse Tensor Accelerator Modeling Tutorial @ ISCA 2021 [Part 1] (2/7)](https://www.youtube.com/watch?v=KHqJrKUwbF8) — also for: TensorPrism: Rethinking Sparse High-order Tensor Acceleration via Co-occurrence Graph (Hao Zheng)
- [Compiler Construction for Hardware Acceleration: Challenges and Opportunities](https://www.youtube.com/watch?v=7TimDQC_SBQ) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Lecture 11 - Hardware Acceleration](https://www.youtube.com/watch?v=es6s6T1bTtI) — also for: Rendering PostScript™ Fonts on FPGAs (David Andrews)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate your understanding of the Stardust compiler and its approach to compiling sparse tensor algebra for reconfigurable dataflow architectures (RDAs). The beginner project focuses on reproducing a core concept of sparse tensor memory representation and scheduling in a simplified form using familiar tools. The intermediate project involves reimplementing Stardust's core compilation approach on a small sparse tensor kernel and comparing performance against a CPU baseline. The advanced project extends Stardust by exploring an auto-scheduling prototype to address the paper's limitation on user scheduling complexity, showing initiative toward future research directions.

### Beginner — Sparse Tensor Memory Representation and Scheduling Simulator
*Effort: a weekend, ~8 hours*

You build a small simulator in Python that models sparse tensor data placement and scheduling decisions inspired by Stardust's data representation and scheduling languages. The simulator takes a simple sparse matrix-vector multiplication (SpMV) expression and allows users to specify memory placement (on-chip vs off-chip) and iteration scheduling, then outputs a trace of data movement and computation steps.

**Why it shows you understood the paper:** This project shows you grasp how Stardust separates algorithm, data representation, and scheduling, and how explicit memory placement affects data transfers and computation mapping on accelerators.

**Grounded in:** The data representation API lets a user place a tensor into either off-chip or on-chip memory, encoding transfers within the CIN representation. Following Halide and TACO, we separate algorithms from schedules and data representations, letting end users focus on application logic.

**Tech stack:** Python 3.11

**Data:** Synthetic sparse matrix and vector data generated within the simulator.

**Build it:**

1. Implement a simple sparse matrix and vector data structure in Python with CSR or COO format.
2. Create a configuration interface to specify memory placement for tensors (e.g., on-chip buffer or off-chip memory).
3. Implement a scheduling interface to specify iteration order and data streaming direction for SpMV.
4. Simulate data movement between off-chip and on-chip memory based on placement annotations.
5. Generate and output a step-by-step trace of computation and data transfers.
6. Write a README explaining how memory placement and scheduling affect the simulated execution.

**Ships as:** A Python repository with a simulator script and README demonstrating how explicit memory placement and scheduling annotations influence sparse tensor computation and data movement.

**Stretch goal:** Add visualization of the dataflow and memory transfers to better illustrate the impact of scheduling choices.

### Intermediate — Reimplementation of Stardust Compilation for SpMV on CPU
*Effort: 2 weekends, ~20 hours*

You reimplement the core idea of Stardust's compilation pipeline by writing a compiler-like tool that takes a high-level sparse tensor algebra expression for SpMV, lowers it to a concrete index notation, applies simple scheduling and memory placement annotations, and generates optimized CPU code. You then compare the generated code's performance against a naive CPU baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to translate Stardust's core method of separating algorithm, data representation, and scheduling into a working compiler pipeline, and to evaluate performance improvements, mirroring the paper's approach.

**Grounded in:** Stardust extends the TACO sparse tensor algebra compiler by adding new data representation and scheduling languages that explicitly specify tensor memory placement and computation mapping to accelerator hardware. The compiler automates fine-grained memory binding and data transfers, and uses rewrite rules to map sparse iteration patterns to hardware primitives.

**Tech stack:** Python 3.11, C++ (for generated code), LLVM or Clang for compilation, Make or CMake

**Data:** Use synthetic sparse matrices generated with SciPy's sparse module as input data, simulating sparse tensor algebra kernels.

**Build it:**

1. Implement a parser or DSL in Python to accept a high-level SpMV expression with annotations for memory placement and scheduling.
2. Lower the expression to a concrete index notation representation internally.
3. Apply simple rewrite rules to transform the notation into optimized loop nests with explicit memory accesses.
4. Generate C++ code implementing the optimized SpMV kernel based on the lowered representation.
5. Compile and benchmark the generated code against a naive SpMV CPU implementation using SciPy sparse matrices.
6. Document the compilation pipeline, scheduling decisions, and performance results in a README.

**Ships as:** A compiler pipeline repository that inputs annotated sparse tensor algebra expressions and outputs optimized C++ SpMV code, with performance comparison against a baseline.

**Stretch goal:** Extend the compiler to support additional sparse tensor kernels beyond SpMV, such as sparse matrix-matrix multiplication.

### Advanced — Prototype Auto-Scheduler for Sparse Tensor Algebra on RDAs
*Effort: 3+ weeks*

You build a prototype auto-scheduler that takes sparse tensor algebra expressions and automatically generates memory placement and scheduling annotations for a simplified RDA-like execution model. This addresses Stardust's limitation of requiring user input for explicit scheduling. You evaluate the auto-scheduler's generated schedules on a small set of sparse kernels and compare performance or code complexity against manually specified schedules.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction identified by the paper, demonstrating deep comprehension of Stardust's scheduling challenges and contributing a novel approach toward making sparse accelerator programming more accessible.

**Grounded in:** Explicit memory management and scheduling require user input or future auto-schedulers, which may be complex for end users. Developing auto-schedulers to reduce user burden in specifying memory placement and scheduling is a future direction.

**Tech stack:** Python 3.11, C++, LLVM or Clang, SciPy for sparse data, Optional: Jupyter Notebook for analysis

**Data:** Synthetic sparse tensor kernels generated or adapted from public sparse matrix datasets (e.g., SuiteSparse Matrix Collection) as substitutes for the paper's benchmarks.

**Build it:**

1. Study Stardust's scheduling language and memory placement requirements from the paper.
2. Design a heuristic or rule-based auto-scheduler that generates memory placement and scheduling annotations given a sparse tensor algebra expression.
3. Integrate the auto-scheduler with the intermediate project's compiler pipeline to produce annotated code automatically.
4. Benchmark the auto-scheduled generated code against manually scheduled code on a few sparse kernels (e.g., SpMV, SpMM).
5. Analyze the reduction in programmer effort (e.g., lines of scheduling code) and performance trade-offs.
6. Write a detailed report and README documenting the auto-scheduler design, evaluation, and limitations.

**Ships as:** A prototype auto-scheduler integrated with a sparse tensor algebra compiler pipeline, demonstrating automated scheduling annotation generation and evaluation on sparse kernels.

**Stretch goal:** Extend the auto-scheduler to learn from performance feedback or integrate simple machine learning models for scheduling decisions.
