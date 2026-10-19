---
title: "763 · Enabling Multi-threading in Heterogeneous Quantum-Classical Programming Models — Vivek Sarkar"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vivek-sarkar"
source_hash: "abbbe72ba1f613b14e1b1425d7c8675c59331b7126acdb5e871966e913f9c4ac"
sequence: 763
generator: "outreach-garden: managed"
---

# 763 · Enabling Multi-threading in Heterogeneous Quantum-Classical Programming Models

## At a glance

- **Professor:** Vivek Sarkar
- **Institution:** Georgia Institute of Technology
- **Paper:** [Enabling Multi-threading in Heterogeneous Quantum-Classical Programming Models](https://arxiv.org/pdf/2301.11559)
- **Authors:** Akihiro Hayashi, Austin Adams, Jeffrey Young, Alexander McCaskey, Eugene Dumitrescu, Vivek Sarkar, Thomas M. Conte
- **Year:** 2023

## Paper overview

This paper presents enhancements to the QCOR programming model to support user-level multi-threading for quantum-classical heterogeneous computing systems. By enabling parallel execution of quantum kernels using standard C++ threading constructs, the authors improve performance and scalability of quantum-classical programs, demonstrated with quantum circuit simulations of Bell states and Shor's algorithm on a multi-core CPU system.

### Why it matters

**Research problem:** Current quantum-classical programming models like QCOR lack well-defined user-level multi-threading support, limiting the ability to exploit parallelism across multiple CPU cores and quantum devices in heterogeneous quantum-classical systems.

**Why it matters:** Enabling user-level multi-threading is crucial for fully utilizing available classical computing resources alongside quantum devices, accelerating quantum-classical algorithm development, improving performance, and facilitating scalable hybrid quantum-classical workflows.

**Key contributions:**

- Design and implementation of user-level multi-threading support for heterogeneous quantum-classical programming in QCOR.
- Introduction of C++ standard threading constructs (std::thread, std::async) for parallel and asynchronous quantum kernel execution.
- Thread-safety enhancements to QCOR APIs to prevent data races in multi-threaded execution.
- Development of a QPUManager to associate accelerator instances with threads, enabling safe concurrent quantum kernel execution.
- Empirical demonstration of performance improvements running multiple quantum kernels in parallel versus sequential execution.

## About the professor

**Vivek Sarkar** — Professor, School of Computer Science, Georgia Institute of Technology.

Research interests: multiple aspects of parallel computing including programming languages, compilers, runtime systems, and debugging and verification systems for high performance computers

### Research links

- [Faculty/profile page](http://vsarkar.cc.gatech.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel programming in C++
**The paper assumes:** parallel programming concepts in C++, multithreading, thread synchronization, mutex locks, and concurrent programming patterns
**Already in this field?** Skip this entirely if you already have experience writing and debugging multithreaded C++ programs using standard threading libraries.

To understand the multi-threading enhancements in the QCOR quantum-classical programming model, a solid grasp of parallel programming in C++—especially using standard threading constructs like std::thread and std::async—is essential. The rigorous course option offers a deep, structured university-level introduction to parallel programming concepts and practical OpenMP usage, while the fast track provides a concise, approachable series covering the same foundational topics more quickly. Choose the rigorous course for comprehensive understanding and the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to parallel Programming in Open MP](https://www.youtube.com/playlist?list=PLp6ek2hDcoNBAyEJmxsOowMYNTKsUmTZ8) — NPTEL IIT Delhi · 87 videos · 12.3h across the first 60 episodes

**Watch only this:** Episodes 1-24 ("Introduction to Parallel Programming" through "Vector-Vector operations (Dot product)"), about 4.9 hours — these cover the core concepts of parallel architectures, threading, race conditions, and synchronization needed to understand the paper's approach.

*Why it unblocks this paper:* This NPTEL IIT Delhi course is a thorough university-level introduction to parallel programming, covering fundamental concepts like threading, race conditions, and critical sections that directly relate to the paper's use of C++ threading and mutexes for safe multi-threading in QCOR.

*If you want all of it:* First 60 episodes, about 12.3 hours — for a comprehensive mastery of parallel programming concepts and OpenMP.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to parallel Programming in Open MP](https://www.youtube.com/playlist?list=PLJ5C_6qdAvBFMAko9JTyDJDIt1W48Sxmg) — Computer Science and Engineering · 37 videos · 7.4h across 37 episodes

**Watch only this:** Episodes 1-24 ("Introduction to Parallel Programming" through "Vector-Vector operations (Dot product)"), about 4.8 hours — these episodes cover the essential concepts needed to grasp the paper's technical contributions.

*Why it unblocks this paper:* This concise series from Computer Science and Engineering covers parallel programming fundamentals and OpenMP constructs in a clear, visual style, providing a quick yet solid foundation on threading, race conditions, and synchronization relevant to the paper's multi-threading implementation.

*If you want all of it:* All 37 episodes, about 7.4 hours — for a more detailed but still accessible understanding of parallel programming.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on enabling multi-threading in heterogeneous quantum-classical programming models, start with foundational knowledge of C++ concurrency and threading constructs, which underpin the implementation approach. Next, study thread safety and mutex synchronization to grasp how safe concurrent access is ensured in QCOR APIs. Then, explore quantum-classical heterogeneous programming models to contextualize the hybrid computing environment. Finally, focus on the paper's core concept of user-level multi-threading in quantum-classical systems, emphasizing the authors' own insights and implementation details.

### C++ concurrency and threading constructs *(prerequisite)*
This section covers the fundamental C++ standard threading constructs such as std::thread and std::async, which are essential for implementing parallel quantum kernel execution in QCOR. Understanding these constructs provides the necessary background to appreciate how the paper leverages standard C++ features to enable multi-threading.

*How the paper uses it:* The paper introduces user-level multi-threading support in QCOR using C++ standard threading constructs like std::thread and std::async.

▶ [An Introduction to Multithreading in C++20 - Anthony Williams - CppCon 2022](https://www.youtube.com/watch?v=A7sVFJLJM-A) — CppCon · 3 yr ago

### Thread safety and mutex synchronization *(prerequisite)*
This section explains mutex locks and synchronization mechanisms that prevent data races and ensure thread-safe access to shared resources. Such knowledge is critical to understanding how the paper enhances QCOR APIs to be safe in a multi-threaded environment.

*How the paper uses it:* Thread safety is enabled by adding mutex locks to prevent data races in QCOR APIs.

▶ [how does a Mutex even work? (atoms in the computer??)](https://www.youtube.com/watch?v=1tZhmTnk-vc) — Low Level · 4 yr ago

### Quantum-classical heterogeneous programming models *(prerequisite)*
This section provides context on heterogeneous quantum-classical computing architectures and programming models, which is the environment where QCOR operates. Understanding this helps situate the paper's contributions within the broader landscape of hybrid quantum-classical workflows.

*How the paper uses it:* The paper focuses on QCOR, a quantum-classical programming model for heterogeneous systems.

▶ [Quantum Spain Seminar: Programming Heterogenous Quantum-Classical Supercomputing Architectures](https://www.youtube.com/watch?v=2EdjOP8w1XM) — Quantum Spain · 2 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on enabling multi-threading in heterogeneous quantum-classical programming models, start by learning the basics of C++ concurrency and threading constructs, which form the foundation for parallel quantum kernel execution. Next, grasp thread safety and mutex synchronization to appreciate how safe concurrent access is ensured in QCOR APIs. Then, explore quantum-classical heterogeneous programming models to understand the hybrid computing context. Finally, focus on the paper's core concept of user-level multi-threading in quantum-classical systems, which enables parallel execution of quantum kernels.

### C++ concurrency and threading constructs *(prerequisite)*
This section introduces the fundamental C++ tools for concurrency, such as std::thread and std::async, which allow programs to run multiple tasks in parallel. Understanding these constructs is essential because the paper builds its multi-threading support for quantum kernels using these standard C++ features.

*How the paper uses it:* The paper leverages C++ standard threading constructs like std::thread and std::async to enable parallel quantum kernel execution in QCOR.

▶ [First thread with std::thread | Introduction to Concurrency in C++](https://www.youtube.com/watch?v=tGfG3u0CB7s) — Mike Shah · 15:37

### Thread safety and mutex synchronization *(prerequisite)*
This section explains how mutexes and locks prevent data races and ensure safe access to shared resources when multiple threads run concurrently. This knowledge is crucial to understand how QCOR APIs are made thread-safe to support multi-threaded quantum-classical programming.

*How the paper uses it:* The paper adds mutex locks to QCOR APIs to prevent data races and enable thread-safe multi-threaded execution.

▶ [SAFE Multithreading with Mutex Locks](https://www.youtube.com/watch?v=u25j0bl3Ecw) — bvdl․io · 3 yr ago

### Quantum-classical heterogeneous programming models *(prerequisite)*
This section covers the concept of heterogeneous computing systems that combine classical and quantum processors, highlighting the challenges and opportunities in programming such hybrid architectures. Understanding this context helps appreciate why QCOR and its multi-threading enhancements are important.

*How the paper uses it:* The paper improves the QCOR programming model, which targets heterogeneous quantum-classical systems, by enabling multi-threading.

▶ [Quantum Spain Seminar: Programming Heterogenous Quantum-Classical Supercomputing Architectures](https://www.youtube.com/watch?v=2EdjOP8w1XM) — Quantum Spain · 2 yr ago

### User-level multi-threading in quantum-classical systems
This section focuses on the concept of user-level multi-threading, where threads are managed in user space rather than by the kernel, enabling efficient parallel execution. This is the core method the paper uses to run multiple quantum kernels concurrently within QCOR.

*How the paper uses it:* The paper designs and implements user-level multi-threading support in QCOR to run quantum kernels in parallel using standard C++ threading.

▶ [Threads & Multithreading Models Explained (User vs. Kernel)](https://www.youtube.com/watch?v=3FWcttRUOJY) — ByteSize Academy · 11 mo ago

## Already in your library

- [Introduction to Threads](https://www.youtube.com/watch?v=LOfGJcVnvAk) — also for: Delinquent Loop Pre-execution Using Predicated Helper Threads (Eric Rotenberg)
- [Hybrid Quantum-Classical Computing Explained - The Future of AI & Science](https://www.youtube.com/watch?v=Vk__RaHK9pA) — also for: A Comprehensive Analysis of Accuracy and Robustness in Quantum Neural Networks (Susan A. Mengel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of enabling user-level multi-threading in heterogeneous quantum-classical programming models as presented in the paper. The beginner project reproduces a simple parallel quantum kernel execution using C++ threading constructs, the intermediate project reimplements the core multi-threading support mechanism in QCOR from the paper and benchmarks performance gains, and the advanced project extends the paper's work by automating thread initialization to improve usability, addressing a stated limitation.

### Beginner — Parallel Bell State Quantum Kernel Execution with C++ Threads
*Effort: a weekend, ~8 hours*

You build a simple C++ program that uses std::thread to run two instances of a Bell state quantum kernel simulation in parallel on a multi-core CPU. This reproduces the paper's demonstration of parallel quantum kernel execution using standard C++ threading constructs.

**Why it shows you understood the paper:** This project shows you understand how to apply C++ standard threading to quantum kernel execution and the basic concept of parallelism in quantum-classical heterogeneous programming.

**Grounded in:** The paper introduces user-level multi-threading support in QCOR using C++ standard threading constructs (std::thread and std::async) to run quantum kernels in parallel (see Listing 4 and performance results for Bell states).

**Tech stack:** C++17 or later, QCOR quantum programming model (from https://github.com/ORNL-QCI/qcor), C++ standard library threading

**Data:** Quantum circuit simulation of Bell states using QCOR simulation backend on a local multi-core CPU.

**Build it:**

1. Install QCOR and set up the environment for quantum kernel simulation on your local machine.
2. Write a simple Bell state quantum kernel in QCOR.
3. Create a C++ program that launches two std::thread instances, each running the Bell state kernel simulation.
4. Synchronize threads and measure execution time to observe parallel execution.
5. Document the code and results in a README.

**Verified links from the paper:**

- <https://github.com/ORNL-QCI/qcor> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing the C++ source code demonstrating parallel execution of Bell state quantum kernels with timing results and explanations.

**Stretch goal:** Add std::async based asynchronous execution of the Bell kernel and compare performance with std::thread.

### Intermediate — Reimplementation and Benchmarking of QCOR Multi-threading Support
*Effort: 1-3 weekends*

You reimplement the core multi-threading support mechanism described in the paper, including thread-safe QCOR API wrappers with mutex locks and a simple QPUManager to manage accelerator instances per thread. You then benchmark parallel execution of Bell state and Shor's algorithm kernels against sequential execution, reporting speedup metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core technical contributions into working code, including thread safety, accelerator cloning per thread, and thread-to-accelerator mapping, and to empirically validate performance improvements.

**Grounded in:** The paper's key contributions include thread-safety enhancements to QCOR APIs via mutex locks, cloning accelerator instances per thread, and managing thread-to-accelerator mappings with a QPUManager, with empirical performance evaluation on Bell and Shor kernels.

**Tech stack:** C++17 or later, QCOR programming model (https://github.com/ORNL-QCI/qcor), C++ standard library threading and synchronization primitives

**Data:** Quantum circuit simulations of Bell states and Shor's algorithm on a multi-core CPU using QCOR simulation backend.

**Build it:**

1. Set up QCOR environment and familiarize yourself with its API and quantum kernel programming.
2. Implement thread-safe wrappers around QCOR APIs using std::mutex or std::recursive_mutex to prevent data races.
3. Implement a simple QPUManager singleton to assign and clone accelerator instances per thread.
4. Write test programs to run Bell state and Shor's algorithm kernels in parallel using std::thread with your multi-threading support.
5. Measure and compare execution times of parallel vs sequential kernel execution, calculating speedups.
6. Document implementation details, benchmarks, and analysis in a README.

**Verified links from the paper:**

- <https://github.com/ORNL-QCI/qcor> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with your multi-threading enhanced QCOR wrapper code, test quantum kernel programs, benchmark results, and detailed documentation.

**Stretch goal:** Extend benchmarking to include varying thread counts and analyze scalability and cache effects as discussed in the paper.

### Advanced — Automated Thread Initialization for QCOR Multi-threading
*Effort: few weeks*

You develop a QCOR-specific thread wrapper or a compiler pass that automatically inserts the required quantum::initialize() call at the start of each thread, removing the manual initialization burden. You evaluate the usability improvements and test correctness with multi-threaded quantum kernel executions.

**Why it shows you understood the paper:** This project addresses a key limitation identified in the paper by automating thread initialization, demonstrating deep comprehension of the QCOR runtime and multi-threading challenges, and contributes a practical enhancement to the programming model.

**Grounded in:** The paper notes as a limitation that users must manually call quantum::initialize() at the start of each thread; automating this via compiler passes or wrappers is a stated future direction.

**Tech stack:** C++17 or later, QCOR programming model (https://github.com/ORNL-QCI/qcor), C++ standard threading, Basic compiler tooling or wrapper function design

**Data:** Quantum kernel simulations (Bell states, Shor's algorithm) on QCOR simulation backend to validate multi-threaded execution correctness.

**Build it:**

1. Study the QCOR runtime and the role of quantum::initialize() in thread registration.
2. Design a C++ thread wrapper class or function that calls quantum::initialize() automatically before running the user thread function.
3. Alternatively, explore simple compiler instrumentation techniques (e.g., macros or source-to-source transformation) to insert initialization calls.
4. Integrate your solution into multi-threaded quantum kernel programs and verify correctness and thread safety.
5. Evaluate usability improvements by comparing code complexity and error-proneness before and after automation.
6. Document design decisions, implementation, usage examples, and evaluation in a README.

**Verified links from the paper:**

- <https://github.com/ORNL-QCI/qcor> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with your automated thread initialization wrapper or tooling, example multi-threaded QCOR programs using it, and documentation explaining the approach and benefits.

**Stretch goal:** Extend automation to support integration with other parallel programming models like std::async or OpenMP in QCOR.
