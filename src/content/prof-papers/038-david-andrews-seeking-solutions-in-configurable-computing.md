---
title: "038 · Seeking Solutions in Configurable Computing — David Andrews"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dandrews"
source_hash: "2c5d7ce224230e4cf079bdfa252e03cbc276182a7c65e4fa0677917cbef6d4e6"
sequence: 38
generator: "outreach-garden: managed"
---

# 038 · Seeking Solutions in Configurable Computing

## At a glance

- **Professor:** David Andrews
- **Institution:** University of Arkansas
- **Paper:** [Seeking Solutions in Configurable Computing](http://127.0.0.1:8199/andrews-clean.pdf)
- **Authors:** William H. Mangione-Smith, Brad Hutchings, David Andrews, André DeHon, Carl Ebeling, Reiner Hartenstein, Oskar Mencer, John Morris, Krishna Palem, Viktor K. Prasanna, Henk A.E. Spaanenburg
- **Year:** 1997

## Paper overview

This paper reviews the state of configurable computing, which combines programmable hardware like FPGAs with processors to create flexible, high-performance computing systems. It discusses the challenges in hardware architectures, development tools, benchmarking, and commercial adoption, highlighting the potential and current limitations of configurable computing.

### Why it matters

**Research problem:** How to develop configurable computing systems that are both powerful and commercially viable, overcoming challenges in hardware architecture, programming abstractions, tool support, and benchmarking.

**Why it matters:** Configurable computing promises significant performance improvements for applications by combining hardware flexibility with software programmability, but practical adoption is hindered by complexity and lack of effective tools and models.

**Key contributions:**

- Classification of configurable computing architectures into netlist computers and chunky function unit architectures.
- Identification of three main architectural design decisions: granularity of programmable hardware, CPU proximity, and system capacity.
- Discussion of computing models based on configuration rate: static, time-sharing, and dynamic.
- Analysis of challenges in CAD and compilation tools for configurable computing.
- Highlighting the lack of effective benchmarking methods for configurable computing systems.

## About the professor

**David Andrews** — Professor - Engineering, (ENGR)-Engineering; (EECS)-Electrical Engr and Computer Science, University of Arkansas.

Research interests: embedded systems architectures

### Research links

- [Faculty/profile page](https://engineering.uark.edu/electrical-engineering-computer-science/electrical-engineering-faculty/uid/dandrews/name/David+Andrews/)
- [Identity evidence](http://www.csce.uark.edu/~dandrews)
- [Professor website](https://hthreads.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=MnzsE_MAAAAJ&hl=en)

## Learning path

To deeply understand the 1997 paper 'Seeking Solutions in Configurable Computing,' start with foundational knowledge of FPGA technology and hardware/software co-design principles, which underpin configurable computing systems. Then, explore advanced seminar talks on reconfigurable computing architectures and systems to grasp the architectural classifications and computing models discussed in the paper. Finally, focus on the core concept of configurable computing architectures to connect these foundations directly to the paper's key contributions and challenges.

## Recommended videos (in order)

### Field programmable gate arrays FPGA seminar *(prerequisite)*
FPGAs are the hardware foundation of configurable computing systems. Understanding their architecture, capabilities, and limitations is essential to appreciate the challenges and opportunities discussed in the paper. The Stanford seminar by Oskar Mencer, a co-author, provides an advanced, research-level perspective on FPGA performance and programming methodologies.

*How the paper uses it:* The paper discusses FPGA technology limitations and their impact on configurable computing system capacity and configuration speed.

▶ [Stanford Seminar - Computing with FPGAs - Oskar Mencer](https://www.youtube.com/watch?v=AHJZKoAh8wE) — Stanford Online · 1:00:11

### Hardware/software co-design lecture *(prerequisite)*
Hardware/software co-design is critical for addressing the programming abstractions and tool support challenges in configurable computing. Advanced university lectures, such as the ETH Zürich course, provide rigorous insights into the integration of hardware and software development, which aligns with the paper's emphasis on CAD and compilation challenges.

*How the paper uses it:* The paper highlights the complexity of development tools and the need for effective hardware/software co-design in configurable computing.

▶ [Hardware/Software Co-design Course - Lecture 1: 16.03.22 ...](https://www.youtube.com/watch?v=OJRBbOoiHXw) — Onur Mutlu Lectures · 31:06

### Reconfigurable computing systems seminar *(prerequisite)*
Reconfigurable computing seminars cover dynamic and static configuration models and runtime reconfiguration strategies, directly relating to the paper's discussion of computing models based on configuration rate. These talks provide current research perspectives on improving FPGA efficiency and predictability, which are key challenges identified in the paper.

*How the paper uses it:* The paper analyzes static, time-sharing, and dynamic configuration models as part of configurable computing system design.

▶ [Adrian Sampson (Cornell University) Toward a Predictable ...](https://www.youtube.com/watch?v=pyf6JWRZpLQ) — UCSC Hardware Systems Collective · 1:07:12

### Configurable computing architectures
This section focuses on the classification and architectural design decisions of configurable computing hardware, which are central to the paper's contributions. The Microsoft Research talk offers a detailed and technical discussion of reconfigurable computing and FPGA architectures, aligning well with the paper's survey and analysis of netlist and chunky function unit approaches.

*How the paper uses it:* The paper classifies configurable computing architectures and discusses key design decisions such as granularity, CPU proximity, and system capacity.

▶ [Reconfigurable Computing: Architectural and Design Tool ...](https://www.youtube.com/watch?v=5_H_j72Ftq8) — Microsoft Research · 1:12:16

## Already in your library

- [ASPLOS'24 - FPGAs and Reconfigurable Hardware](https://www.youtube.com/watch?v=2XgOWAtJ8vs) — also for: ASAP: Accelerated Short-Read Alignment on Programmable Hardware (Ravi K. Iyer)
