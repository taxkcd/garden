---
title: "038 · Seeking Solutions in Configurable Computing — David Andrews"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dandrews"
source_hash: "7082e8a84dd1b96d6ecb93c6887022ce2df23772161249c14fe9e6290f007db7"
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

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 1997 paper "Seeking Solutions in Configurable Computing," start by building foundational knowledge on FPGA technology and hardware-software co-design, which underpin configurable computing systems. Next, explore configurable computing architectures to grasp the classification and design decisions central to the paper. Finally, focus on the core concept of configurable computing itself, emphasizing the architectural and programmability challenges surveyed by the authors.

### Field Programmable Gate Arrays FPGA *(prerequisite)*
FPGAs are the fundamental hardware enabling configurable computing systems. Understanding their architecture, capabilities, and limitations is essential to appreciate the hardware constraints and opportunities discussed in the paper. The selected video provides a detailed and technical introduction suitable for advanced learners.

*How the paper uses it:* The paper discusses FPGA technology as the hardware basis for configurable computing and highlights its limitations in capacity, configuration speed, and memory interfacing.

▶ [Introduction to FPGA Part 1 - What is an FPGA? | Digi-Key ...](https://www.youtube.com/watch?v=lLg1AgA2Xoo) — DigiKey · 15:21

### Hardware Software Co-design *(prerequisite)*
Hardware-software co-design is key to addressing the programmability and tool challenges in configurable computing. This concept involves the integrated development of hardware and software components to optimize performance and flexibility. The chosen seminar talk offers an in-depth, research-level perspective on co-design approaches relevant to embedded and configurable systems.

*How the paper uses it:* The paper emphasizes the need for improved CAD and compilation tools and software/hardware APIs to overcome development complexity in configurable computing.

▶ [Hardware-software co-design with the Parallel Research ...](https://www.youtube.com/watch?v=HTbjM5GDIRM) — NHR@FAU · 59:13

### Configurable Computing Architectures *(prerequisite)*
Understanding the architectural classifications and design decisions in configurable computing is central to the paper. This includes the distinction between netlist computers and chunky function unit architectures, and design trade-offs like granularity and CPU proximity. The selected lecture provides a comprehensive academic treatment of reconfigurable processor architectures.

*How the paper uses it:* The paper classifies configurable computing architectures and identifies key architectural design decisions impacting flexibility and efficiency.

▶ [Reconfigurable Computing Lec1.1 - Intro to Processors ...](https://www.youtube.com/watch?v=Zm5RCaoRNvY) — Computer & IT lectures · 35:14

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational hardware technology of FPGAs first, as they are the building blocks of configurable computing systems. Next, it covers hardware-software co-design to understand how programmability and hardware flexibility are integrated. Then, it explains configurable computing architectures to grasp the main architectural classifications and design trade-offs discussed in the paper. Finally, it touches on reconfigurable computing models to appreciate different configuration approaches. This order builds intuition from hardware basics to system-level concepts relevant to the paper.

### Field Programmable Gate Arrays FPGA *(prerequisite)*
FPGAs are integrated circuits that can be programmed after manufacturing to implement custom digital circuits. Understanding what FPGAs are and how they work is essential because configurable computing systems rely on FPGAs to provide hardware flexibility combined with software programmability.

*How the paper uses it:* The paper discusses FPGA technology as the fundamental hardware enabling configurable computing systems and highlights current FPGA limitations.

▶ [Introduction to FPGA Part 1 - What is an FPGA? | Digi-Key ...](https://www.youtube.com/watch?v=lLg1AgA2Xoo) — DigiKey · 15:21

### Hardware Software Co-design *(prerequisite)*
Hardware-software co-design is the collaborative design of hardware and software components to optimize system performance and programmability. This concept is key to addressing the challenges of making configurable computing systems practical and programmable.

*How the paper uses it:* The paper emphasizes the importance of hardware/software co-design to overcome programmability and tool challenges in configurable computing.

▶ [Hardware-Software Co-design | Embedded System & RTOS](https://www.youtube.com/watch?v=w-KHW7ZxMW8) — Ekeeda · 13:07

### Configurable Computing Architectures *(prerequisite)*
Configurable computing architectures define how programmable hardware and processors are combined, focusing on design decisions like granularity, CPU proximity, and system capacity. Understanding these architectural classifications helps grasp the paper's core contributions and challenges.

*How the paper uses it:* The paper classifies configurable computing architectures into netlist and chunky function unit types and discusses key architectural design decisions.

▶ [Reconfigurable Computing Lec1.1 - Intro to Processors ...](https://www.youtube.com/watch?v=Zm5RCaoRNvY) — Computer & IT lectures · 35:14

## Already in your library

- [Reconfigurable Computing: Architectural and Design Tool ...](https://www.youtube.com/watch?v=5_H_j72Ftq8) — also for: Seeking Solutions in Configurable Computing (David Andrews)
- [Stanford Seminar - Computing with FPGAs - Oskar Mencer](https://www.youtube.com/watch?v=AHJZKoAh8wE) — also for: Seeking Solutions in Configurable Computing (David Andrews)
- [Hardware/Software Co-design Course - Lecture 1: 16.03.22 ...](https://www.youtube.com/watch?v=OJRBbOoiHXw) — also for: Seeking Solutions in Configurable Computing (David Andrews)
