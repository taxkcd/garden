---
title: "580 · Easy PRAM-based high-performance parallel programming with ICE — Rajeev Barua"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rajeev-barua"
source_hash: "d8c937104cea3f342cedc3388a474370c5aaddff5abdaa51031e6a00cc56b080"
sequence: 580
generator: "outreach-garden: managed"
---

# 580 · Easy PRAM-based high-performance parallel programming with ICE

## At a glance

- **Professor:** Rajeev Barua
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [Easy PRAM-based high-performance parallel programming with ICE](https://doi.org/10.13016/m27f6k)
- **Authors:** Fady Ghanim, Uzi Vishkin, Rajeev Barua
- **Year:** 2016

## Paper overview

This paper introduces ICE, a new parallel programming language based on the PRAM model, designed to make parallel programming easier and more efficient, especially for irregular programs. ICE programs are translated into XMTC, a threaded language for the XMT architecture, achieving comparable performance to hand-optimized code but with significantly less programming effort.

### Why it matters

**Research problem:** Parallel programming is difficult due to complexities like synchronization, race conditions, and manual thread management, especially for irregular programs. Existing parallel programming models require significant programmer effort to produce efficient multi-threaded programs.

**Why it matters:** With the widespread use of multi-core processors, efficient parallel programming is critical for performance. However, the difficulty of programming parallel machines limits the adoption and effective use of parallelism, especially for irregular algorithms.

**Key contributions:**

- Design of ICE, a lock-step parallel programming language based on the PRAM model.
- Development of an ICE compiler that translates ICE programs into efficient XMTC threaded programs.
- Demonstration that ICE programs achieve comparable performance to hand-optimized XMTC programs.
- Techniques for handling control flow, synchronization, and memory dependencies during translation.
- Optimization methods such as clustering to reduce the number of synchronization points and temporaries.

## About the professor

**Rajeev Barua** — Professor, Electrical and Computer Engineering, Univ. of Maryland - College Park.

Research interests: My research interests are in compilers both for embedded and general-purpose systems, as well as computer security. Specific current interests include: Binary rewriting, Automatic parallelization, Compilation for fine-grained architectures, Memory management for embedded systems, Security policy enforcement.

### Research links

- [Faculty/profile page](https://terpconnect.umd.edu/~barua)
- [Resolved homepage](https://terpconnect.umd.edu/~barua/welcome.html)
- [Google Scholar](http://scholar.google.com/citations?user=NaIdl8EAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Parallel Algorithms and PRAM Model
**The paper assumes:** parallel algorithms, PRAM model, parallel programming abstractions
**Already in this field?** Skip this entirely if you already understand the PRAM model and fundamental parallel algorithm design principles.

This background provides foundational knowledge on the PRAM model and parallel algorithms, which are central to understanding the ICE language's design and its compiler's translation approach. The rigorous course offers a deep dive into parallel algorithms and shared memory models, ideal for readers seeking comprehensive understanding. The fast track provides a concise introduction to parallel algorithms and the PRAM model, suitable for readers who want a quick yet solid grasp of the core concepts relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Parallel Algorithms](https://www.youtube.com/playlist?list=PLwdnzlV3ogoVNbSQcn56GVXMqgnOab61R) — NPTEL IIT Guwahati · 38 videos · 30.4h across 38 episodes

**Watch only this:** Lectures 1 to 3 (Shared Memory Models - 1 & 2, Interconnection Networks), plus Lectures 5 to 7 (Basic Techniques 1 to 3), about 5.5 hours total — these cover the PRAM model, shared memory abstractions, and fundamental parallel algorithm techniques essential for understanding ICE.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course on Parallel Algorithms covers shared memory models, interconnection networks, and detailed parallel algorithm techniques, directly underpinning the PRAM model and lock-step parallelism used in ICE.

*If you want all of it:* 30.4 hours across 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [PARALLEL ALGORITHM](https://www.youtube.com/playlist?list=PLqHN1x5hDj3WfPz4N4Hee3dP0WfcfXj-p) — NET Forum · 7 videos · 1.9h across 7 episodes

**Watch only this:** Episodes 1 to 5 (Introduction to Parallel Algorithms, parallel sum and search, parallel merging, greedy algorithm for parallel processing, PRAM Models), about 1.3 hours total — these episodes cover the basics of parallel algorithms and the PRAM model needed to understand ICE.

*Why it unblocks this paper:* This NET Forum series offers a concise introduction to parallel algorithms and the PRAM model in just 7 episodes, providing a quick yet clear overview of the key concepts relevant to ICE's parallel programming model.

*If you want all of it:* 1.9 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ICE parallel programming language and its compiler, start with foundational knowledge of the PRAM model, which underpins ICE's design. Next, gain insight into the XMT architecture and XMTC language, the hardware and software target of ICE compilation. Then, explore lock-step parallel programming concepts to appreciate ICE's synchronization abstraction. Finally, focus on the ICE language and compiler design itself through the authors' own talks and related advanced lectures.

### PRAM model parallel programming *(the paper's own talk)*
The PRAM (Parallel Random Access Machine) model is the theoretical foundation for ICE's lock-step parallel programming approach. Understanding PRAM's variants and limitations is essential to grasp how ICE abstracts parallelism and synchronization.

*How the paper uses it:* ICE is based on the PRAM model to simplify parallel programming by abstracting synchronization and threading.

▶ [COMP526 (Fall 2022) 5-1 §5.1 Parallel computation, PRAM model](https://www.youtube.com/watch?v=4uweLI5Mynw) — Sebastian Wild (Lectures) · 3 years ago

### XMT architecture and XMTC language *(prerequisite)*
The XMT architecture supports fine-grained parallelism and is the hardware target for ICE programs compiled into XMTC. Understanding XMT and XMTC provides context for ICE's compilation strategy and performance results.

*How the paper uses it:* ICE programs are translated into XMTC code for the XMT architecture, achieving performance comparable to hand-optimized code.

▶ [Programming the Cray XMT](https://www.youtube.com/watch?v=qvXIA5EK5GM) — cscsch · 13 years ago

### Lock-step parallel programming *(prerequisite)*
Lock-step parallel programming involves synchronizing parallel threads at each step, which ICE uses to abstract away manual synchronization. Understanding this concept clarifies how ICE maintains correctness and performance.

*How the paper uses it:* ICE is a lock-step parallel programming language that assumes an implied barrier after every statement in a parallel region.

▶ [Lock-step simulation is child's play](https://www.youtube.com/watch?v=2kKvVe673MA) — Compose Conference · 30:37

### Automatic parallelization and compiler techniques *(prerequisite)*
Compiler techniques for automatic parallelization are relevant to ICE's compiler, which translates high-level lock-step PRAM code into efficient multi-threaded XMTC code. This background helps understand the challenges and solutions in ICE's compilation process.

*How the paper uses it:* The ICE compiler automatically translates lock-step ICE code into multi-threaded XMTC code while preserving correctness and performance.

▶ [Mod-14 Lec-24 Automatic Parallelization](https://www.youtube.com/watch?v=mBnW5ZWVdbM) — nptelhrd · 14 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the ICE parallel programming language and its compiler. Starting with the PRAM model to grasp the theoretical basis of parallelism, it then covers the hardware and language target (XMT and XMTC), followed by the lock-step parallel programming abstraction ICE uses. Finally, it touches on compiler techniques for automatic parallelization to appreciate how ICE translates high-level parallel code into efficient multi-threaded code.

### PRAM model parallel programming *(prerequisite)*
The PRAM (Parallel Random Access Machine) model is a theoretical framework for designing parallel algorithms where multiple processors operate synchronously and share memory. Understanding PRAM helps build intuition about how parallelism can be structured and reasoned about in a lock-step manner.

*How the paper uses it:* ICE is based on the PRAM model, providing a lock-step parallel programming abstraction.

▶ [Parallel Computing: PRAM Model Explained for Beginners](https://www.youtube.com/watch?v=LBaOFgPEF3k) — CodeLucky · 11 months ago

### XMT architecture and XMTC language *(prerequisite)*
The XMT architecture is a hardware platform designed to efficiently support fine-grained parallelism, and XMTC is its threaded programming language. Learning about XMT and XMTC clarifies the target environment and low-level language into which ICE programs are compiled.

*How the paper uses it:* ICE programs are compiled into XMTC code that runs on the XMT architecture.

▶ [Programming the Cray XMT](https://www.youtube.com/watch?v=qvXIA5EK5GM) — cscsch · 13 years ago

### Lock-step parallel programming *(prerequisite)*
Lock-step parallel programming means all parallel threads execute in synchronized steps, simplifying reasoning about synchronization and data dependencies. This abstraction removes the need for explicit locks or thread management by the programmer.

*How the paper uses it:* ICE provides lock-step semantics by assuming an implied barrier after every statement in a parallel region.

▶ [Lock-step simulation is child's play](https://www.youtube.com/watch?v=2kKvVe673MA) — Compose Conference · 30:37

### Automatic parallelization and compiler techniques *(prerequisite)*
Automatic parallelization involves compiler strategies that transform sequential or high-level parallel code into efficient multi-threaded code, handling synchronization and dependencies. Understanding these techniques helps appreciate how ICE's compiler translates lock-step PRAM code into XMTC.

*How the paper uses it:* The ICE compiler automatically translates ICE code into multi-threaded XMTC code while preserving correctness and performance.

▶ [Mod-14 Lec-24 Automatic Parallelization](https://www.youtube.com/watch?v=mBnW5ZWVdbM) — nptelhrd · 14 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the ICE parallel programming language and its compiler translating lock-step PRAM programs into efficient multi-threaded XMTC code for the XMT architecture. The beginner project focuses on reproducing the core lock-step parallelism concept with simple parallel loops and synchronization barriers. The intermediate project involves reimplementing the ICE compiler's core translation technique on a small example program, comparing code size and performance metrics against a baseline XMTC-like threaded implementation. The advanced project extends ICE's compiler approach to support a new parallel architecture or improves compiler optimizations to reduce overhead, addressing one of the paper's stated limitations and future directions.

### Beginner — Lock-step Parallel Loop Simulation in JavaScript
*Effort: a weekend, ~8 hours*

You build a small JavaScript simulation of the ICE lock-step parallel programming model by implementing a simple parallel loop construct with an implied barrier after each statement. This simulates the PRAM model's lock-step semantics by synchronizing all parallel iterations after each step, preventing race conditions.

**Why it shows you understood the paper:** This project shows you grasp the core ICE language concept of implicit synchronization and lock-step execution, which abstracts away manual thread management and synchronization from the programmer.

**Grounded in:** ICE assumes an implied barrier after every statement in a parallel region, relieving the programmer from managing synchronization and race conditions.

**Tech stack:** JavaScript (Node.js)

**Data:** No external data needed; use simple synthetic parallel loop examples.

**Build it:**

1. Implement a function that executes an array of parallel tasks in lock-step, synchronizing after each statement.
2. Create example parallel loops that perform simple computations (e.g., vector addition) using this lock-step model.
3. Add instrumentation to show synchronization points and verify no race conditions occur.
4. Write README explaining how this simulates ICE's implicit barrier semantics.

**Ships as:** A GitHub repo with JavaScript code simulating lock-step parallel loops and a README explaining the connection to ICE's synchronization abstraction.

**Stretch goal:** Extend the simulation to support nested parallel loops with nested synchronization barriers.

### Intermediate — Reimplementing ICE Compiler Translation for Simple Parallel Loops
*Effort: 2 weekends, ~20 hours*

You implement a small compiler or transpiler that takes a simplified ICE-like lock-step parallel loop language and translates it into a multi-threaded XMTC-style code with explicit spawn and barrier calls. You then compare code size and runtime performance of the translated code against a baseline multi-threaded implementation without implicit barriers.

**Why it shows you understood the paper:** This project demonstrates your understanding of the ICE compiler's core contribution: translating lock-step PRAM code into efficient multi-threaded code while preserving correctness and synchronization semantics.

**Grounded in:** The ICE compiler splits pardo regions into multiple spawn regions with barriers to maintain data dependencies and control flow.

**Tech stack:** Python 3.11, C++ (for baseline multi-threaded code), Makefile or simple build scripts

**Data:** Use synthetic parallel loop programs as input; no external dataset required.

**Build it:**

1. Define a small domain-specific language (DSL) or input format for simplified ICE parallel loops.
2. Implement a Python transpiler that converts this DSL into multi-threaded C++ code with explicit thread spawning and barriers.
3. Write baseline multi-threaded C++ code manually for the same parallel loops without implicit barriers.
4. Measure and compare code size (lines of code) and runtime performance of transpiled vs baseline code.
5. Document the translation approach and results in a README.

**Ships as:** A GitHub repo containing the transpiler source, example input programs, baseline C++ code, performance comparison scripts, and documentation linking the work to ICE's compiler techniques.

**Stretch goal:** Add support for nested parallel loops and conditional branches in the transpiler.

### Advanced — Extending ICE Compiler Techniques to a GPU Parallel Architecture
*Effort: 3+ weeks, ~100+ hours*

You develop an extension of the ICE compiler approach to target a GPU parallel programming model (e.g., CUDA or OpenCL) instead of the XMT architecture. This involves adapting the lock-step PRAM semantics and implicit synchronization to GPU kernels and thread blocks, implementing compiler passes to translate ICE-like code into GPU code with synchronization primitives. You evaluate the approach on irregular parallel benchmarks and compare performance and code size to baseline GPU implementations.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper: extending ICE beyond the XMT architecture. It shows deep understanding of ICE's compiler design and the challenges of mapping lock-step semantics to different parallel hardware.

**Grounded in:** Extending ICE and its compiler to support other parallel architectures beyond XMT.

**Tech stack:** Python 3.11, CUDA Toolkit or OpenCL SDK, C++, NVIDIA GPU or compatible hardware

**Data:** Use publicly available irregular graph benchmarks (e.g., small graph datasets from SNAP or synthetic graphs) to evaluate performance.

**Build it:**

1. Study ICE's lock-step semantics and synchronization approach from the paper.
2. Design a compiler pass or transpiler that converts simplified ICE code into GPU kernels with appropriate synchronization (e.g., __syncthreads()).
3. Implement the transpiler in Python that outputs CUDA C++ code.
4. Write baseline GPU implementations of the same benchmarks manually.
5. Benchmark and compare performance and code size between transpiled and baseline GPU code.
6. Document challenges, design decisions, and results in a detailed README.

**Ships as:** A GitHub repo with the transpiler source code, example ICE-like input programs, generated GPU code, baseline GPU implementations, benchmark scripts, and comprehensive documentation linking the work to ICE's future directions.

**Stretch goal:** Incorporate compiler optimizations to reduce synchronization overhead and improve GPU kernel efficiency.
