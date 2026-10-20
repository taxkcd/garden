---
title: "877 · Visualization at exascale: Making it all work with VTK-m — Hank Childs"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hank-childs"
source_hash: "9e15ad73009983d5571c4f6e7b4f680c420f9b94152b2f3c05a7ccb8fbfe1959"
sequence: 877
generator: "outreach-garden: managed"
---

# 877 · Visualization at exascale: Making it all work with VTK-m

## At a glance

- **Professor:** Hank Childs
- **Institution:** University of Oregon
- **Paper:** [Visualization at exascale: Making it all work with VTK-m](https://journals.sagepub.com/doi/pdf/10.1177/10943420241270969?download=true)
- **Authors:** Kenneth Moreland, Tushar M Athawale, Vicente Bolea, Mark Bolstad, Eric Brugger, Hank Childs, Axel Huebl, Li-Ta Lo, Berk Geveci, Nicole Marsaglia, Sujin Philip, David Pugmire, Silvio Rizzi, Zhe Wang, Abhishek Yenpure
- **Year:** 2024

## Paper overview

This paper presents VTK-m, a software library designed to enable scientific visualization on exascale supercomputers, which use GPUs extensively. It discusses the challenges of adapting visualization algorithms for these new architectures, the integration of VTK-m with major visualization tools, and its application to real scientific problems like laser wakefield acceleration simulations.

### Why it matters

**Research problem:** How to efficiently perform scientific visualization on exascale supercomputers that rely heavily on GPU accelerators, which require new algorithmic designs and software engineering approaches to handle massive data and parallelism.

**Why it matters:** Exascale supercomputers produce unprecedentedly large datasets from simulations, and visualization is critical for understanding and scientific discovery. However, the scale and architecture of these machines pose significant challenges for existing visualization software, necessitating new solutions to enable effective data analysis.

**Key contributions:**

- Development of VTK-m as a portable, GPU-accelerated visualization library for exascale computing.
- Use of Kokkos as a device adapter to support multiple GPU architectures (AMD, Intel) with a single code base.
- Redesign of VTK-m software to remove virtual methods on devices and overhaul filter interfaces to reduce compile times and improve maintainability.
- Implementation of GPU-to-GPU communication to optimize data transfers on exascale systems.
- Integration of VTK-m with major visualization tools (ParaView, VisIt, Ascent) enabling accelerated filters and in situ visualization.

## About the professor

**Hank Childs** — Professor, Computer and Information Science Department, University of Oregon.

Research interests: scientific visualization, high performance computing, and the intersection of the two

### Research links

- [Faculty/profile page](https://cdux.cs.uoregon.edu/people/faculty/childs.html)
- [Professor website](http://ix.cs.uoregon.edu/~hank)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel programming with GPUs
**The paper assumes:** GPU programming models, parallel computing architectures, and device-level software engineering
**Already in this field?** Skip this entirely if you already have hands-on experience programming GPUs with CUDA, OpenCL, or similar parallel programming frameworks and understand GPU hardware architectures.

To understand the core technical contributions of the paper on VTK-m for exascale visualization, a solid grasp of parallel programming with GPUs is essential. The rigorous course provides a comprehensive university-level foundation in GPU architectures and programming, while the fast track offers a concise, intuition-driven introduction to GPU programming concepts. Choose the course for deep mastery and the fast track for a quick yet effective overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [NOC Jan 2020: GPU Architectures and Programming- Prof Soumyajit Dey](https://www.youtube.com/playlist?list=PLbRMhDVUMngfj_NXI7jqMYLnhcRhRKAGq) — NPTEL IIT Kharagpur · 64 videos · 29.9h across the first 60 episodes

**Watch only this:** Lectures 5 through 23, about 7.5 hours — covering GPU architectures, CUDA programming basics, synchronization, warp scheduling, and memory coalescing, which are critical for grasping GPU parallelism and performance issues in exascale visualization.

*Why it unblocks this paper:* This NPTEL IIT Kharagpur course on GPU Architectures and Programming by Prof Soumyajit Dey covers GPU hardware fundamentals, CUDA programming, memory hierarchy, synchronization, and performance optimization, directly relevant to understanding GPU-accelerated visualization and the challenges addressed by VTK-m.

*If you want all of it:* About 29.9 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [GPU Programming in C/CUDA: A Beginner's Course, From First Kernel to a Tuned Matmul](https://www.youtube.com/playlist?list=PLJ0Gky4jwpJc) — Glass Box Computing · 9 videos · 4.5h across 9 episodes

**Watch only this:** Episodes 1, 2, 3, 5, and 6, about 2.5 hours — focusing on GPU programming model, first CUDA kernels, memory hierarchy, and profiling to quickly build intuition on GPU parallelism and performance.

*Why it unblocks this paper:* This Glass Box Computing series offers a beginner-friendly, well-structured introduction to GPU programming in CUDA, explaining key concepts like SIMT, warps, memory hierarchy, and performance profiling, providing an accessible yet solid foundation for readers new to GPU programming.

*If you want all of it:* About 4.5 hours across 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Visualization at exascale: Making it all work with VTK-m," start by gaining foundational knowledge of exascale computing architectures and the Kokkos performance portability library, which are critical to the software's deployment and portability. Next, explore parallel visualization algorithms to appreciate the scalability challenges. Finally, focus on the core concept of VTK-m for exascale visualization by watching the authors' own detailed talk, which directly addresses the paper's contributions and results.

### Exascale computing architectures *(prerequisite)*
Understanding the hardware environment and challenges of exascale systems is essential to grasp why VTK-m was developed and how it addresses the unique demands of these machines. This includes knowledge of the scale, GPU accelerators, and architectural innovations in exascale supercomputers.

*How the paper uses it:* The paper targets visualization challenges on exascale supercomputers, making this foundational knowledge critical.

▶ [The U.S. Exascale Computing Project](https://www.youtube.com/watch?v=wuOyeHmtm1k) — Inside Livermore Lab · 5y ago

### Kokkos performance portability *(prerequisite)*
Kokkos is a key software abstraction that enables VTK-m to support multiple GPU architectures with a single code base, which is vital for portability and performance on exascale systems. Understanding Kokkos helps in appreciating the software engineering strategies used in the paper.

*How the paper uses it:* The paper discusses porting VTK-m to exascale hardware using Kokkos for device abstraction.

▶ [Introduction to Kokkos](https://www.youtube.com/watch?v=BcDnh228hMY) — Argonne Leadership Computing Facility · 1y ago

### Parallel visualization algorithms *(prerequisite)*
Parallel visualization algorithms form the foundation for scalable visualization on massive datasets typical of exascale computing. Familiarity with these algorithms aids in understanding the design choices and scalability results presented in the paper.

*How the paper uses it:* The paper focuses on scalable visualization methods for massive data on exascale systems.

▶ [Overview of Parallel Visualization Strategies](https://www.youtube.com/watch?v=K2A_1i2s3Nw) — Han-Wei Shen · 11y ago

### VTK-m exascale visualization talk *(paper-talk search result; attribution unverified)*
This section covers the core concept of the paper: VTK-m as a portable, GPU-accelerated visualization library for exascale computing. The authors' own talk provides direct insights into the software's development, challenges, integration, and performance on exascale platforms.

*How the paper uses it:* This is the authors' own presentation on the exact work described in the paper, providing the most direct and detailed explanation.

▶ [2024-09-25 webinar: Development of VTK-m During ECP](https://www.youtube.com/watch?v=mbevXdtztxQ) — IDEAS Productivity · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the fundamentals of exascale computing architectures to grasp the hardware environment and challenges VTK-m addresses. Next, learn about Kokkos for performance portability across GPU architectures, followed by parallel visualization algorithms that enable scalable data processing. Then, explore GPU-accelerated scientific visualization methods to see how visualization leverages GPUs for speed. Finally, dive into VTK-m itself, the core software library developed in the paper for exascale visualization.

### Exascale computing architectures *(prerequisite)*
Exascale computing refers to supercomputers capable of performing a billion billion calculations per second. Understanding their architecture, including massive parallelism and GPU accelerators, is key to appreciating the challenges and opportunities for scientific visualization at this scale.

*How the paper uses it:* The paper targets exascale supercomputers like Frontier and Aurora, which have unique hardware architectures requiring new visualization approaches.

▶ [The U.S. Exascale Computing Project](https://www.youtube.com/watch?v=wuOyeHmtm1k) — Inside Livermore Lab · 5y ago

### Kokkos performance portability *(prerequisite)*
Kokkos is a C++ library that abstracts parallel execution and memory management, enabling code to run efficiently on different hardware architectures without rewriting. Learning Kokkos helps understand how VTK-m supports multiple GPU vendors with a single code base.

*How the paper uses it:* VTK-m uses Kokkos as a device adapter to support AMD and Intel GPUs on exascale machines.

▶ [Introduction to Kokkos](https://www.youtube.com/watch?v=BcDnh228hMY) — Argonne Leadership Computing Facility · 1y ago

### Parallel visualization algorithms *(prerequisite)*
Parallel visualization algorithms divide large datasets across many processors to enable scalable and fast rendering or analysis. Understanding these algorithms is essential to grasp how VTK-m handles massive data on thousands of GPUs.

*How the paper uses it:* The paper discusses redesigning VTK-m filters and algorithms to efficiently run in parallel on exascale systems.

▶ [Overview of Parallel Visualization Strategies](https://www.youtube.com/watch?v=K2A_1i2s3Nw) — Han-Wei Shen · 11y ago

### GPU accelerated scientific visualization
GPUs can massively speed up visualization by performing many computations in parallel. This section explains how GPUs accelerate scientific visualization tasks, which is central to VTK-m's performance on exascale machines.

*How the paper uses it:* VTK-m provides GPU-accelerated visualization algorithms to handle large-scale scientific data efficiently.

▶ [Jacob Austin: GPU Acceleration for Machine Learning and Visualization of NASA Earth Science Data](https://www.youtube.com/watch?v=hFGTYAcvygw) — NASA Scientific Visualization Studio · 6y ago

### VTK-m exascale visualization talk *(paper-talk search result; attribution unverified)*
VTK-m is the core software library developed in the paper for exascale visualization. This talk by the lead author introduces VTK-m’s design, challenges, and integration with exascale supercomputers, providing a direct overview of the paper’s contributions.

*How the paper uses it:* This video presents the development and application of VTK-m as described in the paper.

▶ [2024-09-25 webinar: Development of VTK-m During ECP](https://www.youtube.com/watch?v=mbevXdtztxQ) — IDEAS Productivity · 2y ago

## Already in your library

- [Stanford CS149 I Parallel Computing I 2023 I Lecture 7 - GPU ...](https://www.youtube.com/watch?v=qQTDF0CBoxE) — also for: 𝑓 VDB: A Deep-Learning Framework for Sparse, Large-Scale, and High-Performance Spatial Intelligence (Eftychios Sifakis)
- [Stanford Seminar - Multiscale Dataflow Computing: Competitive Advantage at the Exascale Frontier](https://www.youtube.com/watch?v=Nwdu7QlFUnA) — also for: TensorPrism: Rethinking Sparse High-order Tensor Acceleration via Co-occurrence Graph (Hao Zheng)
- [Parallel Graph Algorithms](https://www.youtube.com/watch?v=4Z2h-xcoIII) — also for: Parallel 𝒌-Core Decomposition: Theory and Practice (Yizong Cheng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the VTK-m library's role in enabling GPU-accelerated scientific visualization on exascale supercomputers. Starting with a beginner-level project that reproduces a core visualization algorithm on a small scale using familiar tools, you progress to an intermediate project that reimplements VTK-m's core GPU parallelism concepts on a public dataset. The advanced project extends the paper by addressing a stated limitation or future direction, such as improving compilation times or exploring new GPU architectures, showcasing your ability to innovate beyond the paper's current scope.

### Beginner — GPU-Accelerated Isosurface Visualization Prototype
*Effort: a weekend, ~8 hours*

You build a small GPU-accelerated isosurface visualization tool that mimics the VTK-m isosurface filter concept on a synthetic 3D scalar field. Using Python with PyOpenGL or WebGL via JavaScript, you implement a simple marching cubes algorithm accelerated on the GPU to render isosurfaces interactively.

**Why it shows you understood the paper:** This project demonstrates your grasp of GPU-accelerated visualization algorithms and the core idea of VTK-m's isosurface filter, showing you understand how parallelism and GPU computation improve visualization performance.

**Grounded in:** The VTK-m isosurface uncertainty filter was deployed as a plug-in in ParaView, facilitating rapid availability of new visualization features.

**Tech stack:** Python 3.11, PyOpenGL, NumPy, Jupyter Notebook

**Data:** Synthetic 3D scalar field data generated programmatically (e.g., Perlin noise or a Gaussian blob) to simulate volumetric data.

**Build it:**

1. Generate a small 3D scalar field dataset programmatically in Python.
2. Implement the marching cubes algorithm on the CPU as a baseline.
3. Port the marching cubes computation to GPU using PyOpenGL shaders or WebGL.
4. Render the resulting isosurface interactively with basic camera controls.
5. Document the performance difference and visualization output.

**Ships as:** A GitHub repo with code and a README showing GPU-accelerated isosurface rendering on synthetic data, including performance notes and screenshots.

**Stretch goal:** Add uncertainty visualization by coloring the isosurface based on a synthetic uncertainty metric, mimicking the paper's isosurface uncertainty filter.

### Intermediate — Reimplementation of VTK-m GPU Parallelism on Public Volume Data
*Effort: 2 weekends, ~20 hours*

You reimplement the core parallel visualization approach of VTK-m by building a GPU-accelerated filter pipeline in C++ using Kokkos for device abstraction. You apply it to a publicly available volumetric dataset (e.g., the Stanford Bunny or a CT scan volume) to generate isosurfaces and compare GPU vs CPU execution times.

**Why it shows you understood the paper:** This project shows you understand the paper's core method of using Kokkos for portable GPU parallelism and the challenges of adapting visualization algorithms for exascale architectures, as well as performance measurement.

**Grounded in:** Porting VTK-m to new exascale hardware required adopting Kokkos for device abstraction.

**Tech stack:** C++14, Kokkos, CMake, OpenGL or VTK for rendering

**Data:** Public volumetric dataset such as the Stanford Bunny or a publicly available CT scan volume (not from the paper but a substitute for visualization data).

**Build it:**

1. Set up a C++ project with Kokkos and build a simple parallel filter pipeline.
2. Implement a marching cubes or contour filter using Kokkos parallel_for for GPU execution.
3. Load the public volumetric dataset and run the filter on CPU and GPU backends.
4. Render the resulting isosurface using VTK or OpenGL.
5. Measure and compare execution times between CPU and GPU runs.
6. Write a README documenting the implementation, performance, and comparison.

**Ships as:** A GitHub repo with C++ code demonstrating Kokkos-based GPU parallel visualization filters on public data, with performance benchmarks and visualization screenshots.

**Stretch goal:** Add support for GPU-to-GPU communication simulation or multi-GPU execution to mimic exascale data transfers.

### Advanced — Improving VTK-m Compilation and Filter Development Workflow
*Effort: 3+ weeks*

You develop tooling or scripts to reduce compilation times and ease filter development for a VTK-m-like C++14 template-heavy GPU visualization library. This could include automated code generation, modular filter interfaces, or incremental build scripts. You evaluate the impact on compile times using a synthetic or small real dataset.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper about long compile times and complex software engineering challenges in VTK-m, showing you can extend and improve the software engineering aspects critical for exascale visualization.

**Grounded in:** Compilation times on Frontier were initially very long but improved to under 20 minutes after software and compiler improvements.

**Tech stack:** C++14, CMake, Python 3.11 (for scripting), Ninja build system

**Data:** Synthetic volumetric data generated programmatically or a small real dataset for testing compilation and runtime.

**Build it:**

1. Analyze the VTK-m filter interface design and identify compile-time bottlenecks.
2. Design and implement modular filter interface templates or code generation scripts to reduce template instantiations.
3. Integrate incremental build tooling (e.g., Ninja) and caching mechanisms.
4. Benchmark compilation times before and after improvements on a sample filter set.
5. Document the workflow improvements and provide guidelines for filter development.
6. Optionally, demonstrate integration with a visualization tool like ParaView or a minimal renderer.

**Ships as:** A GitHub repo with tooling/scripts and example filters showing reduced compile times and improved developer workflow, with benchmarks and documentation.

**Stretch goal:** Extend the tooling to support emerging GPU architectures beyond AMD and Intel, addressing portability challenges.
