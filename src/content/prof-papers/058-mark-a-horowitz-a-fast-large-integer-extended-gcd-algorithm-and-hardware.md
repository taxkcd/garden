---
title: "058 · A Fast Large-Integer Extended GCD Algorithm and Hardware Design for Verifiable Delay Functions and Modular Inversion — Mark A. Horowitz"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mark-a-horowitz"
source_hash: "562cdd55deae7da4a7587d11937db2c47b9589f920b64b2906386172601a51c5"
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
