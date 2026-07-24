---
title: "058 · A Fast Large-Integer Extended GCD Algorithm and Hardware Design for Verifiable Delay Functions and Modular Inversion — Mark A. Horowitz"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mark-a-horowitz"
source_hash: "c1c20eb1c846df4b4278f1e1d1cc9ffa5e176884c753c7388351d30ddad29245"
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

To deeply understand the paper's contributions on a fast large-integer extended GCD algorithm and hardware design, start with foundational knowledge of carry-save adder architecture and verifiable delay functions to grasp the hardware and cryptographic context. Then review background on extended Euclidean algorithm hardware implementations to appreciate prior approaches. Finally, focus on the paper's core innovation by watching the authors' own presentation on their Stein-based XGCD hardware accelerator, which directly explains their algorithmic and architectural design choices.

## Recommended videos (in order)

### Carry-save adder architecture *(prerequisite)*
Carry-save adders (CSAs) are a key hardware technique used in the paper to reduce carry propagation delays and achieve iteration times independent of input bitwidth. Understanding CSA architecture and operation is foundational to appreciating the hardware acceleration approach.

*How the paper uses it:* The paper leverages carry-save adders to accelerate the two-bit PM Stein algorithm iterations in hardware.

▶ [Lec 11 Part A: Carry Save Adders and Compressors](https://www.youtube.com/watch?v=MgC1adgXwdk) — Shoab Khan · 24:16

### Verifiable delay functions cryptography *(prerequisite)*
Verifiable delay functions (VDFs) are an emerging cryptographic primitive motivating the need for fast and constant-time extended GCD computations. Understanding VDFs provides context on why efficient hardware XGCD is critical.

*How the paper uses it:* The paper targets hardware acceleration of XGCD to improve performance of VDFs in blockchain and cryptographic systems.

▶ [Verifiable Delay Functions](https://www.youtube.com/watch?v=_-feyaZZjEw) — IACR · 22:15

### Extended Euclidean algorithm hardware implementation *(prerequisite)*
Prior hardware implementations of the extended Euclidean algorithm form the baseline for comparison in the paper. Reviewing these helps understand the limitations of Euclid's division-based approach that the paper aims to overcome.

*How the paper uses it:* The paper contrasts its Stein-based hardware design against traditional Euclid division-based XGCD hardware accelerators.

▶ [Extended Euclid Algorithm](https://www.youtube.com/watch?v=qp7zyBUiAmU) — Internetwork Security · 9 years ago

### Authors' talk on XGCD hardware acceleration
The authors' own presentation provides the most direct and detailed explanation of their novel two-bit PM Stein algorithm hardware design, performance results, and cryptographic applications. This talk is essential to fully grasp the paper's contributions.

*How the paper uses it:* This is the authors' recorded talk specifically on their fast large-integer extended GCD algorithm and hardware design for VDFs and modular inversion.

▶ [Silicon Salon III: Kavya Sreedhar Presentation](https://www.youtube.com/watch?v=liMA-8zmu1E) — BlockchainCommons · 30:27
