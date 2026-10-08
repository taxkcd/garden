---
title: "598 · Understanding QUIC’s Throughput Speedbumps — Mostafa H. Ammar"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mostafa-h-ammar"
source_hash: "614480ed10fcd2bc595c215d053db915e3af9650ef5c39a56ea0017c5cbaf361"
sequence: 598
generator: "outreach-garden: managed"
---

# 598 · Understanding QUIC’s Throughput Speedbumps

## At a glance

- **Professor:** Mostafa H. Ammar
- **Institution:** Georgia Institute of Technology
- **Paper:** [Understanding QUIC’s Throughput Speedbumps](http://127.0.0.1:8899/quic.pdf)
- **Authors:** Saubhik Mukherjee, Demi Lei, Mostafa Ammar, Ahmed Saeed
- **Year:** 2025

## Paper overview

This paper analyzes why QUIC, a popular internet transport protocol, has lower throughput compared to TCP+TLS despite its flexibility and security. The authors identify key performance bottlenecks across different QUIC implementations and propose a software-only, implementation-agnostic pipelined architecture to improve single-connection throughput. They demonstrate throughput improvements by modifying two QUIC implementations, quicly and mvfst.

### Why it matters

**Research problem:** QUIC implementations suffer from surprisingly low single-connection throughput compared to TCP+TLS, and existing performance optimizations are scattered and implementation-specific, making it hard to systematically improve QUIC throughput.

**Why it matters:** QUIC is widely adopted for web applications and is expected to be used in high-throughput scenarios like datacenter file transfers and AR/VR applications. Improving QUIC throughput is critical to meet these emerging demands and to maintain its competitiveness with TCP+TLS.

**Key contributions:**

- Identification of fundamental throughput bottlenecks across multiple QUIC implementations.
- Demonstration that Linux’s UDP stack is rarely a throughput bottleneck.
- Quantitative analysis showing crypto per-packet overhead as a fundamental limitation.
- Proposal of implementation-agnostic design guidelines based on pipeline parallelism to improve single-connection throughput.
- Implementation and evaluation of the proposed pipeline architecture on quicly and mvfst, showing significant throughput improvements.

## About the professor

**Mostafa H. Ammar** — Regents' Professor, School of Computer Science, Georgia Institute of Technology.

Research interests: network architectures, protocols and services; multicast communication and services; multimedia streaming; content distribution networks; network simulation; disruption-tolerant networks; mobile cloud computing; network virtualization

### Research links

- [Faculty/profile page](http://www.cc.gatech.edu/fac/Mostafa.Ammar)
- [Resolved homepage](http://scs.gatech.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Networking Transport Protocols
**The paper assumes:** undergraduate-level computer networking, transport layer protocols, and network protocol performance analysis
**Already in this field?** Skip this entirely if you already understand the design and performance characteristics of transport layer protocols like TCP and QUIC.

This background selection is designed to provide foundational knowledge on computer networking transport protocols, essential for understanding the performance bottlenecks and optimizations discussed in the paper on QUIC throughput. The rigorous course offers a deep, structured university-level lecture series, while the fast track provides a shorter, more concise playlist covering the same core topics efficiently. Choose the rigorous course for comprehensive study or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computer Networks and Internet Protocol](https://www.youtube.com/playlist?list=PLbRMhDVUMngf-peFloB7kyiA40EptH1up) — NPTEL IIT Kharagpur · 61 videos · 32.9h across the first 60 episodes

**Watch only this:** Lectures 11, 12, 14, 16, 17, 18, 19, 20, 21, 22, and 23 (Transport Layer I to User Datagram Protocol), about 5.8 hours — these cover transport layer services, connection, reliability, performance, primitives, TCP basics, flow control, congestion control, and UDP.

*Why it unblocks this paper:* This NPTEL IIT Kharagpur course covers detailed transport layer topics including TCP, UDP, reliability, congestion control, and protocol stack services, directly relevant to understanding QUIC's transport protocol challenges and performance characteristics.

*If you want all of it:* About 32.9 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Protocols in Computer Networks](https://www.youtube.com/playlist?list=PLBlnK6fEyqRismlstXMb8_1-bsmUnTY-_) — Neso Academy · 21 videos · 2.8h across 21 episodes

**Watch only this:** Episodes 1 to 12 (Flow Control through Selective Repeat ARQ (Solved Problem 2)), about 1.6 hours — these cover essential flow control and ARQ protocols that underpin transport protocol performance.

*Why it unblocks this paper:* This Neso Academy playlist provides concise, clear explanations of flow control and multiple access protocols, including sliding window and ARQ protocols, which are foundational for understanding transport protocol throughput and reliability issues relevant to QUIC.

*If you want all of it:* About 2.8 hours across 21 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Understanding QUIC’s Throughput Speedbumps," start by grounding yourself in transport protocol fundamentals, focusing on TCP and UDP, which form the basis for QUIC's design. Next, explore the Linux UDP stack and its performance characteristics, as the paper identifies UDP stack as rarely a bottleneck. Then, study cryptographic overhead in networking to grasp the fundamental per-packet crypto cost limiting QUIC throughput. Finally, focus on the core concept of QUIC pipeline parallelism, the central method proposed by the paper to improve throughput, and conclude with the authors' own talk to directly hear their findings and approach.

### Transport protocol fundamentals *(prerequisite)*
Understanding TCP and UDP transport protocols is essential to grasp QUIC's design and performance characteristics. These protocols form the foundation upon which QUIC builds, and knowing their differences and roles helps contextualize QUIC's throughput challenges.

*How the paper uses it:* The paper compares QUIC throughput against TCP+TLS and builds on UDP, so understanding these transport protocols is foundational.

▶ [UDP and TCP: Comparison of Transport Protocols](https://www.youtube.com/watch?v=Vdc8TCESIg8) — PieterExplainsTech · 11:35 · 13 years ago

### UDP and Linux network stack *(prerequisite)*
The Linux UDP stack's performance impacts QUIC throughput, but the paper finds it is rarely the bottleneck. This talk provides an in-depth view of UDP optimization techniques like GSO and GRO in Linux, which are critical to understanding the paper's analysis of UDP stack throughput.

*How the paper uses it:* The paper quantitatively shows Linux’s UDP stack is seldom a throughput bottleneck, making this knowledge key to understanding where QUIC speedbumps arise.

▶ [LPC2018 - Optimizing UDP for Content Delivery with GSO, Pacing and Zerocopy](https://www.youtube.com/watch?v=ccUeG1dAhbw) — Linux Plumbers Conference · 37:03 · 7 years ago

### Cryptographic overhead in networking *(prerequisite)*
Cryptographic processing per packet is a fundamental throughput bottleneck identified in the paper. Understanding cryptographic overhead and its impact on network protocols is crucial to appreciate the limits and optimization opportunities in QUIC.

*How the paper uses it:* The paper quantitatively analyzes crypto per-packet overhead as a fundamental limitation on QUIC throughput.

▶ [13. Network Protocols](https://www.youtube.com/watch?v=QOtA76ga_fY) — MIT OpenCourseWare · 1:21:03 · 11 years ago

### QUIC pipeline parallelism
Pipeline parallelism is the central method proposed by the paper to improve QUIC throughput by splitting packet processing into stages executed asynchronously. This concept is key to understanding the paper’s novel architectural contribution.

*How the paper uses it:* The paper proposes and evaluates fine-grain pipeline parallelism to overcome throughput speedbumps in QUIC implementations.

▶ [Lecture 25: Pipelining and Parallel Processing](https://www.youtube.com/watch?v=_7Mhzh-bQDU) — NPTEL IIT Kharagpur · 31:57 · 8 years ago

### Paper authors talk *(the paper's own talk)*
Hearing the authors explain their findings and approach provides direct insight into the paper’s motivation, methodology, and results. This talk is the most authoritative source for understanding the nuances of their work.

*How the paper uses it:* This talk directly presents the authors' analysis and proposed solutions for QUIC throughput bottlenecks.

▶ [How Secure and Quick is QUIC? Provable Security and Performance Analyses](https://www.youtube.com/watch?v=vXgbPZ-1-us) — IEEE Symposium on Security and Privacy · 18:59 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on improving QUIC's throughput, start by learning the fundamentals of transport protocols like TCP and UDP, which form the basis of QUIC's design. Next, grasp the role of cryptographic overhead in networking, since encryption per packet is a key bottleneck identified. Then, explore the Linux UDP stack's performance to appreciate why it is rarely the throughput bottleneck. Finally, study pipeline parallelism as the core method proposed to enhance QUIC throughput by splitting packet processing into stages.

### Transport protocol fundamentals *(prerequisite)*
This section covers the basics of transport protocols such as TCP and UDP, explaining how they manage data transmission over networks. Understanding these protocols is essential because QUIC builds on UDP and aims to provide TCP-like reliability and security with improved performance.

*How the paper uses it:* The paper compares QUIC throughput to TCP+TLS and builds on UDP, so understanding these protocols is foundational.

▶ [UDP and TCP: Comparison of Transport Protocols](https://www.youtube.com/watch?v=Vdc8TCESIg8) — PieterExplainsTech · 11:35 · 13 years ago

### Cryptographic overhead in networking *(prerequisite)*
This section explains how cryptographic operations add processing overhead in network protocols, especially when encryption is applied per packet. Recognizing this overhead helps understand why QUIC's per-packet crypto limits throughput.

*How the paper uses it:* The paper identifies crypto per-packet overhead as a fundamental throughput bottleneck in QUIC.

▶ [Network Protocols & Communications (Part 1)](https://www.youtube.com/watch?v=ly8ikWtAY7s) — Neso Academy · 12:26 · 6 years ago

### UDP and Linux network stack *(prerequisite)*
Learn how the Linux UDP stack processes packets efficiently and why it rarely becomes a bottleneck for throughput. This knowledge clarifies that QUIC's throughput issues lie elsewhere, not in the underlying UDP handling by the OS.

*How the paper uses it:* The paper shows Linux’s UDP stack is seldom a throughput bottleneck for QUIC.

▶ [LPC2018 - Optimizing UDP for Content Delivery with GSO, Pacing and Zerocopy](https://www.youtube.com/watch?v=ccUeG1dAhbw) — Linux Plumbers Conference · 37:03 · 7 years ago

### QUIC pipeline parallelism
This section introduces pipeline parallelism, a technique to improve throughput by splitting processing into stages executed concurrently. Understanding this concept is key to grasping the paper’s proposed solution to QUIC’s throughput limitations.

*How the paper uses it:* The paper proposes fine-grain pipeline parallelism to improve QUIC throughput by splitting packet processing into stages.

▶ [Lecture 25: Pipelining and Parallel Processing](https://www.youtube.com/watch?v=_7Mhzh-bQDU) — NPTEL IIT Kharagpur · 31:57 · 8 years ago

## Already in your library

- [HOW QUIC WORKS - Intro to the QUIC Transport Protocol](https://www.youtube.com/watch?v=HnDsMehSSY4) — also for: Enhancing QoE in HTTP/3 using EPS Framework (Radim Bartos)
- [Concurrency Vs Parallelism!](https://www.youtube.com/watch?v=RlM9AfWf1WU) — also for: Understanding Learners’ Problem-Solving Strategies in Concurrent and Parallel Programming: A Game-Based Approach (Bruce W. Char)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper's analysis and optimization of QUIC throughput bottlenecks. The beginner project reproduces a key measurement of crypto overhead to ground the applicant in the paper's performance profiling. The intermediate project implements the core pipelined architecture proposed by the paper on an existing QUIC implementation, showing throughput improvements. The advanced project extends the paper by exploring dynamic pipeline configuration tuning, addressing a stated limitation and future direction.

### Beginner — Measuring Crypto Overhead in QUIC Packet Processing
*Effort: a weekend, ~8 hours*

You build a small benchmarking tool to measure the per-packet cryptographic overhead in a QUIC implementation, focusing on cipher initialization latency and encryption time. This reproduces the paper's Table 3 analysis using microbenchmarking techniques.

**Why it shows you understood the paper:** This project shows you grasp the fundamental crypto bottleneck identified by the paper and can replicate its key performance metric using benchmarking tools.

**Grounded in:** Quantitative analysis showing crypto per-packet overhead as a fundamental limitation (Table 3)

**Tech stack:** C++14, Google Benchmark library, Linux environment

**Data:** Synthetic packet data generated locally to simulate QUIC packet encryption workload; no external dataset required.

**Build it:**

1. Set up the Google Benchmark library in a C++ project.
2. Implement a microbenchmark that measures the latency of cipher initialization and per-packet encryption using a TLS 1.3 library (e.g., fizz or OpenSSL).
3. Run the benchmark with varying packet sizes to observe encryption overhead.
4. Compare your results to the paper's reported cipher initialization latency and crypto overhead percentages.
5. Document the methodology and results in a README.

**Verified links from the paper:**

- <https://github.com/google/benchmark> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing the benchmarking code, instructions to run it, and a README comparing your measurements to the paper's findings.

**Stretch goal:** Add measurements of decryption overhead and compare client vs server crypto costs.

### Intermediate — Implementing Pipeline Parallelism in quicly for Throughput Improvement
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core pipelined architecture by modifying the quicly QUIC stack to split packet processing into pipeline stages executed in lightweight user threads. You then benchmark throughput improvements against the baseline quicly implementation.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's main contribution—pipeline parallelism—to a real QUIC implementation and quantitatively measure throughput gains.

**Grounded in:** Implementation and evaluation of the proposed pipeline architecture on quicly, showing 1.36× throughput improvement

**Tech stack:** C, C++, Linux, quicly QUIC stack, Google Benchmark or custom throughput testing scripts

**Data:** Synthetic QUIC traffic generated locally to test single-connection throughput; no external dataset required.

**Build it:**

1. Clone and build the quicly QUIC implementation from https://github.com/h2o/quicly.
2. Study the paper's description of pipeline stages: IO, UDP/IP, QUIC protocol handling, crypto.
3. Modify quicly to split packet processing into these stages, using lightweight user threads and asynchronous communication.
4. Implement simple pipelining first, then experiment with different pipeline configurations.
5. Benchmark single-connection throughput before and after your changes using synthetic traffic.
6. Document your implementation details, benchmark methodology, and throughput results in a README.

**Verified links from the paper:**

- <https://github.com/h2o/quicly> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A forked quicly repository with pipeline parallelism implemented, benchmark scripts, and a detailed README showing throughput improvements.

**Stretch goal:** Extend the pipeline to support symmetric client-server optimization as the paper suggests for larger gains.

### Advanced — Dynamic Pipeline Configuration Tuning for QUIC Implementations
*Effort: 3+ weeks*

You develop a system that automatically tunes pipeline stage configurations dynamically at runtime for a QUIC implementation (e.g., quicly or mvfst). This addresses the paper's limitation of manually identified pipeline configurations and explores adaptive optimization.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of pipeline parallelism challenges and the ability to extend the research with automation and dynamic adaptation.

**Grounded in:** The proposed pipeline configurations are manually identified and implementation-dependent; no automatic or dynamic adaptation is provided (limitation and future direction).

**Tech stack:** C++, Linux, quicly or mvfst QUIC stack, Python or C++ for tuning algorithms, Benchmarking tools

**Data:** Synthetic QUIC traffic generated locally for throughput testing; no external dataset required.

**Build it:**

1. Select a QUIC implementation (quicly or mvfst) and set up the baseline pipeline parallelism implementation.
2. Design and implement a runtime monitoring system to collect pipeline stage performance metrics (e.g., latency, throughput).
3. Develop an algorithm to dynamically adjust pipeline stage parameters (e.g., number of threads per stage, batching sizes) based on monitored metrics.
4. Integrate the tuning system with the QUIC implementation to adapt pipeline configuration during execution.
5. Evaluate the system by benchmarking throughput improvements and comparing to static pipeline configurations.
6. Document the design, implementation, evaluation, and discuss limitations and potential improvements.

**Verified links from the paper:**

- <https://github.com/h2o/quicly> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/facebookincubator/mvfst> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A modified QUIC implementation with dynamic pipeline tuning, evaluation scripts, and a comprehensive README detailing the approach and results.

**Stretch goal:** Explore machine learning methods for pipeline configuration prediction based on workload characteristics.
