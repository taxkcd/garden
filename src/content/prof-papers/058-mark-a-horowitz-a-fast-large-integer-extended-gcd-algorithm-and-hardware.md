---
title: "058 · A Fast Large-Integer Extended GCD Algorithm and Hardware Design for Verifiable Delay Functions and Modular Inversion — Mark A. Horowitz"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mark-a-horowitz"
source_hash: "ca63f068df355577856f295d50ed639c39fc7e95bbaf5dbf179133426195108b"
sequence: 58
generator: "outreach-garden: managed"
---

# 058 · A Fast Large-Integer Extended GCD Algorithm and Hardware Design for Verifiable Delay Functions and Modular Inversion

## At a glance

- **Professor:** Mark A. Horowitz
- **Institution:** Stanford University
- **Paper:** [A Fast Large-Integer Extended GCD Algorithm and Hardware Design for Verifiable Delay Functions and Modular Inversion](https://tches.iacr.org/index.php/TCHES/article/download/9817/9322)
- **Authors:** Kavya Sreedhar, Mark Horowitz, Christopher Torng
- **Year:** 2022

## Paper overview

This paper presents a novel hardware design and algorithm for efficiently computing the extended greatest common divisor (XGCD) of large integers. The design uses a subtraction-based algorithm (Stein’s two-bit PM algorithm) combined with carry-save adders to accelerate cryptographic operations such as verifiable delay functions and modular inversion, achieving significant speedups over prior software and hardware implementations.

### Why it matters

**Research problem:** Efficiently computing large-integer extended GCD (XGCD) is critical for cryptographic applications like verifiable delay functions (VDFs) and constant-time modular inversion, but existing hardware accelerators mostly rely on Euclid’s division-based algorithm, which is suboptimal for hardware.

**Why it matters:** XGCD is the computational bottleneck in emerging cryptographic primitives such as VDFs used in blockchain systems and modular inversion in elliptic curve cryptography. Faster and flexible hardware accelerators can improve security and performance in these applications.

**Key contributions:**

- Demonstration that Stein’s subtraction-based algorithm with carry-save adders outperforms Euclid’s algorithm in hardware despite higher iteration counts.
- Development of a complete extended two-bit PM algorithm with efficient updates for Bézout coefficients.
- Design of a 16nm ASIC that computes 1024-bit XGCD in 294ns (8× faster than state-of-the-art ASIC) and constant-time 255-bit XGCD in 85ns (31× faster than state-of-the-art software).
- Unified hardware design that supports multiple cryptographic applications with different bitwidths and constant-time requirements.
- Public release of the hardware design and source code.

## About the professor

**Mark A. Horowitz** — Fortinet Founders Chair of the Department of Electrical Engineering, Yahoo! Founders Professor in the School of Engineering and Professor of Computer Science, Electrical Engineering, Stanford University.

Research interests: high-performance digital systems, computer-aided design tools, circuit design, system architecture, neuro and molecular biology, agile design methodologies for analog and digital VLSI circuits

### Research links

- [Faculty/profile page](https://profiles.stanford.edu/mark-horowitz)
- [Identity evidence](http://stanford.edu/~horowitz)
- [Identity evidence](https://profiles.stanford.edu/mark-horowitz?tab=publications)
- [Lab website](https://vlsi.stanford.edu/)
- [ORCID](https://orcid.org/0000-0003-3245-7542)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides a structured learning path to prepare for understanding the paper on a fast large-integer extended GCD algorithm and its hardware design. It covers foundational number theory concepts, classical algorithms for GCD computation, digital arithmetic techniques including carry-save adders, cryptographic applications of modular arithmetic, hardware design principles for cryptographic accelerators, and constant-time algorithm security considerations. Work through the stages in order to build the necessary mathematical and hardware background before reading the paper.

**The paper assumes:** number theory including Euclid’s algorithm and extended GCD, binary arithmetic and carry-save adders, digital logic design and ASIC architecture, cryptographic applications of modular inversion and verifiable delay functions, hardware-software co-design principles
**Time to work through:** roughly 40-45 hours if you watch everything, about 20-25 hours if you follow the skip guidance
**Already in this field?** Skip stages 1-3 if you already have a solid background in number theory, digital arithmetic, and basic cryptographic algorithms; focus on stages 4-6 for hardware acceleration and algorithmic details.

### Stage 1 · Elementary Number Theory *(foundational)*
Understanding the extended greatest common divisor (XGCD) algorithm requires familiarity with basic number theory concepts such as divisibility, greatest common divisors, Bézout’s identity, and modular arithmetic, which underpin the cryptographic operations discussed.

▶ **Course:** [September 2020 - A basic course in number theory](https://www.youtube.com/playlist?list=PLOzRYVm0a65fuj_5fuj1BLeQNULrM4Irj) — NPTEL IIT Bombay · 64 videos · 29.4h across the first 60 episodes

*What to watch:* Watch the first 20 episodes of the "September 2020 - A basic course in number theory" playlist by NPTEL IIT Bombay, covering integers, divisibility, primes, Euclid's algorithm, and Bézout coefficients, which directly relate to the paper's use of XGCD.

*Move on when you can:* Explain and compute the GCD of two integers using Euclid’s algorithm and derive Bézout coefficients for given inputs.

### Stage 2 · Algorithms for GCD Computation *(core)*
The paper compares Euclid’s division-based algorithm with Stein’s subtraction-based algorithm for XGCD; understanding these classical algorithms and their computational trade-offs is essential to grasp the motivation and improvements presented.

▶ [GCD, Bezout, and Modular Inverses | The Extended Euclidean Algorithm](https://www.youtube.com/watch?v=YZfPcvbwwvI) — William Y. Feng · 4 years ago

*What to watch:* Focus on the video "GCD, Bezout, and Modular Inverses | The Extended Euclidean Algorithm" by William Y. Feng, which explains the extended Euclidean algorithm and its application to solving integer equations, directly relevant to the paper's algorithmic basis.

*Move on when you can:* Implement and analyze both Euclid’s and Stein’s algorithms for GCD and extended GCD, explaining iteration counts and computational complexity.

### Stage 3 · Digital Arithmetic and Carry-Save Adders *(core)*
The hardware design leverages carry-save adders (CSAs) to accelerate addition operations and reduce carry propagation delays, a key factor in achieving faster iteration times independent of input bitwidth.

▶ [The Carry Save Adder](https://www.youtube.com/watch?v=8vOfmNuXx1Y) — Electronic Circuits Engineering · 1 year ago

*What to watch:* Watch the video "The Carry Save Adder" by Electronic Circuits Engineering, which clearly explains the operation and benefits of carry-save adders, crucial for understanding the hardware acceleration techniques used in the paper.

*Move on when you can:* Describe the operation of carry-save adders and demonstrate how they add multiple binary numbers efficiently without immediate carry propagation.

### Stage 4 · Cryptographic Applications of Modular Arithmetic *(core)*
The paper’s focus on verifiable delay functions (VDFs) and modular inversion requires understanding how modular arithmetic is used in cryptography, including elliptic curve cryptography and the role of modular inverses.

▶ **Course:** [Cryptography Course](https://www.youtube.com/playlist?list=PLE4V3KXzxPRQYUil17HB6XcIu-JMebD7n) — Dr. Julian Hosp - Business Investing Performance · 16 videos · 6.3h across 16 episodes

*What to watch:* Watch the first 10 episodes of the "Cryptography Course" playlist by Dr. Julian Hosp - Business Investing Performance, especially episodes covering modular arithmetic, modular inverses, and elliptic curve cryptography, to understand the cryptographic context of the paper.

*Move on when you can:* Explain the use of modular inversion in elliptic curve cryptography and the concept and purpose of verifiable delay functions.

### Stage 5 · Hardware Design for Cryptographic Accelerators *(advanced)*
The paper presents an ASIC hardware design optimized for XGCD computation; understanding ASIC design principles, hardware-software co-design, and performance trade-offs is necessary to appreciate the architectural choices and speedups achieved.

▶ **Course:** [RISC-V Processor Design - Free VLSI Course](https://www.youtube.com/playlist?list=PL3_RRtJ5Iqgg94er7ErGAUSyhTXwPv6zy) — Maven Silicon · 10 videos · 1.8h across 10 episodes

*What to watch:* Watch the "RISC-V Processor Design - Free VLSI Course" playlist by Maven Silicon, focusing on episodes 1-5 which cover processor architecture, microcontroller design, and system-on-chip concepts relevant to ASIC design for cryptographic accelerators.

*Move on when you can:* Outline the design considerations for implementing cryptographic algorithms in ASICs and explain how hardware parallelism and pipelining improve performance.

### Stage 6 · Constant-Time Algorithms and Side-Channel Resistance *(advanced)*
The paper emphasizes constant-time execution to prevent timing side-channel attacks, a critical security property in cryptographic hardware that the reader must understand to appreciate the design’s security benefits.

▶ **Course:** [MIT 6.046J Design and Analysis of Algorithms, Spring 2015](https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp) — MIT OpenCourseWare · 34 videos · 39.5h across 34 episodes

*What to watch:* Watch the first 5 episodes of the "MIT 6.046J Design and Analysis of Algorithms, Spring 2015" playlist by MIT OpenCourseWare, focusing on algorithm design principles and timing considerations that underpin constant-time algorithm design.

*Move on when you can:* Explain what constant-time algorithms are and why they are important for cryptographic security, including examples of timing attacks.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on a fast large-integer extended GCD algorithm and its hardware design, start by building foundational knowledge on the key hardware component of carry-save adders and the subtraction-based Stein's algorithm for GCD, which the paper leverages for efficiency. Next, explore the cryptographic context by studying verifiable delay functions and modular inversion algorithms, both critical applications motivating the work. Finally, focus on the core concept of extended GCD computation and hardware acceleration, prioritizing the authors' own talks or rigorous academic presentations to grasp their novel algorithm-hardware co-design approach.

### Carry-Save Adders in Digital Circuits *(prerequisite)*
Carry-save adders (CSAs) are fundamental in the paper's hardware design, enabling fast multi-operand addition without carry propagation delays. Understanding CSAs is crucial to appreciate how the authors achieve iteration times independent of input bitwidth, a key hardware optimization.

*How the paper uses it:* The paper uses carry-save adders to accelerate the subtraction-based XGCD algorithm, minimizing iteration time in the ASIC design.

▶ [Carry Save Adder in VLSI Design || S Vijay Murugan || Learn Thought](https://www.youtube.com/watch?v=VRUvZDXpPEc) — LEARN THOUGHT · 13:05 · 3 years ago

### Stein's Algorithm for GCD *(prerequisite)*
Stein's algorithm, also known as the binary GCD algorithm, is a subtraction-based method that the paper adopts for hardware acceleration instead of the traditional Euclidean division-based approach. Understanding Stein's algorithm provides insight into the algorithmic foundation that enables efficient hardware implementation.

*How the paper uses it:* The paper demonstrates that Stein’s subtraction-based algorithm with carry-save adders outperforms Euclid’s algorithm in hardware despite higher iteration counts.

▶ [Binary gcd algorithm / Stein's algorithm](https://www.youtube.com/watch?v=FMhm_mgMdk0) — Math Cryptography & more · 4 years ago

### Verifiable Delay Functions in Cryptography *(prerequisite)*
Verifiable delay functions (VDFs) are cryptographic primitives that require sequential computation with verifiable output, making efficient XGCD computation critical. Learning about VDFs contextualizes the paper's motivation and application domain.

*How the paper uses it:* The paper targets VDFs as a primary cryptographic application motivating the need for fast and verifiable XGCD hardware accelerators.

▶ [Introduction to Verifiable Delay Functions (VDFs) with Joseph Bonneau | a16z crypto research talks](https://www.youtube.com/watch?v=qf1CN5n8aHM) — a16z crypto · 3 years ago

### Modular Inversion Algorithms *(prerequisite)*
Modular inversion is a fundamental cryptographic operation accelerated by the paper's hardware design. Understanding modular inversion algorithms, especially those based on extended GCD computations, is essential to appreciate the practical impact of the proposed accelerator.

*How the paper uses it:* The paper accelerates constant-time modular inversion by efficiently computing the extended GCD in hardware.

▶ [Extended Euclidean Algorithm and Inverse Modulo Tutorial](https://www.youtube.com/watch?v=fz1vxq5ts5I) — Best Friends Farm · 12 years ago

### Paper authors' talk *(the paper's own talk)*
The authors' own talks provide the most direct and detailed explanation of their novel algorithm and hardware design choices, including the two-bit PM Stein algorithm and carry-save adder integration. These talks offer unique insights into their design space exploration and performance results.

*How the paper uses it:* Direct source for understanding the authors' approach and insights on the fast large-integer extended GCD hardware accelerator.

▶ [The Extended GCD Algorithm](https://www.youtube.com/watch?v=qTYoMkkfD9Q) — USF Crypto Center · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of modular arithmetic and modular inversion, which are fundamental cryptographic operations accelerated by the paper's hardware design. Then learn about verifiable delay functions (VDFs), the key cryptographic application motivating efficient extended GCD computation. Next, build intuition on Stein's subtraction-based GCD algorithm and carry-save adders, the core algorithmic and hardware techniques enabling the paper's speedups. Finally, explore the extended Euclidean algorithm and its hardware acceleration context to connect all concepts and appreciate the paper's novel hardware design.

### Modular Inversion Algorithms *(prerequisite)*
Modular inversion is the process of finding an integer that, when multiplied by a given number modulo some modulus, yields 1. This operation is essential in many cryptographic protocols, including elliptic curve cryptography. Understanding modular inversion helps grasp why efficient extended GCD computations are critical.

*How the paper uses it:* The paper accelerates modular inversion by speeding up extended GCD computations in hardware.

▶ [Extended Euclidean Algorithm and Inverse Modulo Tutorial](https://www.youtube.com/watch?v=fz1vxq5ts5I) — Best Friends Farm · 12 years ago

### Verifiable Delay Functions in Cryptography *(prerequisite)*
Verifiable Delay Functions (VDFs) are cryptographic primitives that require a certain amount of sequential computation time, but whose results can be quickly verified. They are important for blockchain fairness and randomness. Understanding VDFs provides context for why fast and constant-time extended GCD computations matter.

*How the paper uses it:* The paper targets hardware acceleration of XGCD to improve performance of VDFs.

▶ [Introduction to Verifiable Delay Functions (VDFs) with Joseph Bonneau | a16z crypto research talks](https://www.youtube.com/watch?v=qf1CN5n8aHM) — a16z crypto · 3 years ago

### Stein's Algorithm for GCD *(prerequisite)*
Stein's algorithm, also known as the binary GCD algorithm, computes the greatest common divisor using subtraction and division by two, avoiding costly division operations. It is well-suited for hardware implementation due to simpler operations. Learning Stein's algorithm builds intuition for the paper's choice of a subtraction-based XGCD method.

*How the paper uses it:* The paper uses a two-bit PM Stein algorithm as the core subtraction-based method for hardware acceleration.

▶ [Binary gcd algorithm / Stein's algorithm](https://www.youtube.com/watch?v=FMhm_mgMdk0) — Math Cryptography & more · 4 years ago

### Carry-Save Adders in Digital Circuits *(prerequisite)*
Carry-save adders (CSAs) speed up addition by avoiding carry propagation delays, allowing multiple additions to be performed in parallel with constant delay. They are crucial in hardware designs that require fast arithmetic on large numbers. Understanding CSAs explains how the paper achieves iteration times independent of input bitwidth.

*How the paper uses it:* The paper leverages carry-save adders to accelerate the subtraction-based XGCD iterations in hardware.

▶ [Carry Save Adder | High-Speed Multi-Operand Addition Explained](https://www.youtube.com/watch?v=51DSZGINytc) — THE LEARNER · 6:36 · 9 months ago

### Extended Euclidean Algorithm hardware acceleration
The extended Euclidean algorithm computes the greatest common divisor along with Bézout coefficients, enabling modular inversion and other cryptographic operations. Hardware acceleration of this algorithm improves performance and security in cryptographic systems. Understanding this sets the stage for appreciating the paper's novel hardware design choices.

*How the paper uses it:* The paper compares Euclid's division-based algorithm with Stein's subtraction-based algorithm for hardware acceleration of XGCD.

▶ [Extended Euclidean Algorithm (Solved Example 1)](https://www.youtube.com/watch?v=lq285DDdmtw) — Neso Academy · 4 years ago

### Paper authors' talk *(the paper's own talk)*
This video provides a direct explanation of the extended GCD algorithm and its applications, helping to consolidate understanding of the algorithmic foundations relevant to the paper's hardware design.

*How the paper uses it:* It offers foundational knowledge on extended GCD algorithms that underpin the paper's contributions.

▶ [The Extended GCD Algorithm](https://www.youtube.com/watch?v=qTYoMkkfD9Q) — USF Crypto Center · 3 years ago

## Already in your library

- [Silicon Salon III: Kavya Sreedhar Presentation](https://www.youtube.com/watch?v=liMA-8zmu1E) — also for: A Fast Large-Integer Extended GCD Algorithm and Hardware Design for Verifiable Delay Functions and Modular Inversion (Mark A. Horowitz)
- [Verifiable Delay Functions](https://www.youtube.com/watch?v=_-feyaZZjEw) — also for: A Fast Large-Integer Extended GCD Algorithm and Hardware Design for Verifiable Delay Functions and Modular Inversion (Mark A. Horowitz)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate understanding of the paper's novel hardware-accelerated extended GCD (XGCD) algorithm using Stein's subtraction-based method with carry-save adders. The beginner project reproduces the core Stein's algorithm in software to grasp the algorithmic foundation. The intermediate project implements a simplified hardware simulation of the two-bit PM Stein algorithm to compare iteration counts and execution time against Euclid's algorithm, reflecting the paper's key hardware acceleration insight. The advanced project extends the design toward one of the paper's future directions by exploring polynomial GCD computations in software-hardware co-design, showing ability to innovate beyond the paper's current scope.

### Beginner — Software Implementation of Stein's Extended GCD Algorithm
*Effort: a weekend, ~8 hours*

You build a clean, well-documented software implementation of the extended Stein's GCD algorithm (two-bit PM variant) for large integers in C++ or Python. You then verify correctness by comparing outputs to the classical extended Euclidean algorithm on sample inputs.

**Why it shows you understood the paper:** This project shows you understand the core algorithmic innovation of the paper—using Stein's subtraction-based approach for XGCD—and can implement it faithfully, which is foundational before hardware acceleration.

**Grounded in:** Development of a complete extended two-bit PM algorithm with efficient updates for Bézout coefficients.

**Tech stack:** C++17 or Python 3.11

**Data:** Randomly generated large integer pairs (e.g., 256-bit) synthesized in code to test correctness and performance.

**Build it:**

1. Implement the classical extended Euclidean algorithm for baseline comparison.
2. Implement Stein's two-bit PM extended GCD algorithm following the paper's pseudocode.
3. Write test cases comparing outputs of both algorithms on random large integer inputs.
4. Measure and report iteration counts and runtime for both algorithms on sample inputs.
5. Document the algorithm steps and differences in a README.

**Ships as:** A GitHub repo with source code, test scripts, performance comparison, and README explaining the algorithm and results.

**Stretch goal:** Add visualization of the iteration steps and Bézout coefficient updates to illustrate the algorithm flow.

### Intermediate — Simulated Hardware Accelerator for Two-Bit PM Stein XGCD
*Effort: 2 weekends, ~20 hours*

You build a cycle-accurate software simulation of the two-bit PM Stein extended GCD algorithm hardware accelerator, modeling carry-save adder delays and iteration timing. You compare iteration time and total execution cycles against a simulated Euclid division-based XGCD accelerator baseline.

**Why it shows you understood the paper:** This project demonstrates understanding of the paper's key hardware insight that Stein's algorithm with carry-save adders yields faster iteration times despite more iterations, reflecting the paper's design space exploration and performance claims.

**Grounded in:** Demonstration that Stein’s subtraction-based algorithm with carry-save adders outperforms Euclid’s algorithm in hardware despite higher iteration counts.

**Tech stack:** C++17, Python 3.11 (for scripting/plotting), GitHub Actions for CI

**Data:** Synthetic large integer inputs (e.g., 255-bit and 1024-bit) generated in code to simulate cryptographic bitwidths.

**Build it:**

1. Implement a cycle-accurate simulator modeling carry-save adder delays and iteration timing for Stein's two-bit PM algorithm.
2. Implement a similar simulator for Euclid's division-based XGCD algorithm with modeled delays.
3. Run both simulators on identical large integer inputs and record iteration counts and total simulated execution time.
4. Plot and compare performance metrics to replicate the paper's key result graphs.
5. Write a report summarizing the simulation approach, assumptions, and results.

**Verified links from the paper:**

- <https://github.com/kavyasreedhar/sreedhar-xgcd-hardware-ches2022> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing simulators, scripts to run benchmarks, performance plots, and a detailed README explaining the hardware timing model and comparison.

**Stretch goal:** Extend the simulator to model constant-time execution modes and analyze latency trade-offs.

### Advanced — Polynomial GCD Computation with Stein's Algorithm: Software-Hardware Co-Design Exploration
*Effort: 3+ weeks*

You develop a software prototype implementing Stein's subtraction-based algorithm adapted for polynomial GCD computations over finite fields, inspired by the paper's future direction. You then design a simple hardware accelerator model (e.g., in Verilog or SystemVerilog) for key polynomial operations using carry-save adders and simulate its performance.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper—extending the hardware design to polynomial GCD—demonstrating deep comprehension of the algorithmic principles and hardware design challenges, and the ability to innovate beyond the original work.

**Grounded in:** Extending the hardware design to support polynomial GCD computations.

**Tech stack:** Python 3.11 (for polynomial algorithm prototype), Verilog or SystemVerilog, ModelSim or open-source HDL simulator, C++ for performance-critical components

**Data:** Synthetic polynomial pairs over finite fields generated in code to test correctness and performance.

**Build it:**

1. Implement Stein's subtraction-based GCD algorithm adapted for polynomials in Python.
2. Validate correctness against classical polynomial Euclidean GCD implementations.
3. Design a hardware module in Verilog for polynomial subtraction and carry-save addition operations.
4. Simulate the hardware module to measure cycle counts and resource usage.
5. Integrate software and hardware simulation results to analyze potential speedups and bottlenecks.
6. Document design decisions, challenges, and future improvement ideas in a comprehensive README.

**Ships as:** A GitHub repo with software polynomial GCD code, hardware HDL modules, simulation scripts, performance analysis, and detailed documentation.

**Stretch goal:** Prototype a parameterizable hardware design supporting variable polynomial degrees and bitwidths, exploring trade-offs in area and speed.
