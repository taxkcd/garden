---
title: "038 · Seeking Solutions in Configurable Computing — David Andrews"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dandrews"
source_hash: "252845fcc916a8778e0799f4777914a3d6c8eedee308351f61000b9adef095ba"
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

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This playlist provides foundational to advanced background knowledge necessary to understand the 1997 paper on configurable computing. It begins with digital logic design fundamentals to grasp the building blocks of programmable hardware, then covers computer architecture principles to understand processor integration and system capacity. Core topics include FPGA architecture and programming, and embedded systems with hardware/software co-design, which are central to the paper's discussion of configurable computing systems. Finally, an advanced stage on CAD tools for hardware development addresses the challenges in synthesis and compilation highlighted in the paper. Follow the stages in order to build a comprehensive understanding before reading the paper.

**The paper assumes:** digital logic design, computer architecture, FPGA fundamentals, hardware description languages, embedded systems programming, hardware/software co-design, CAD tools for hardware, benchmarking methodologies for computing systems
**Time to work through:** roughly 60-70 hours if you watch all recommended content, about 40-45 hours if you follow the skip guidance.
**Already in this field?** Skip stages 1-3 if you have a solid background in digital logic, computer architecture, and FPGA basics; focus on stages 4-6 for deeper understanding of configurable computing architectures and development tools.

### Stage 1 · Digital Logic Design Fundamentals *(foundational)*
Understanding configurable computing requires knowledge of how digital circuits are constructed from logic gates, as FPGAs and programmable hardware are built from these basic components.

▶ **Course:** [CS302 Digital Logic And Design](https://www.youtube.com/playlist?list=PLKyB9RYzaFRis7YicWZvQtC7yx282bCbk) — Virtual University of Pakistan · 45 videos · 40.8h across 45 episodes

*What to watch:* Watch the first 24 lectures of the 'CS302 Digital Logic And Design' playlist by Virtual University of Pakistan. These cover logic gates, Boolean algebra, Karnaugh maps, combinational and sequential circuits, and flip-flops, which are essential for understanding FPGA hardware granularity and configuration.

*Move on when you can:* Design and simulate a combinational logic circuit using basic gates and explain how flip-flops enable sequential logic.

### Stage 2 · Computer Architecture Principles *(foundational)*
Configurable computing systems integrate processors with programmable hardware; understanding CPU architecture, memory hierarchy, and instruction execution is essential to grasp CPU proximity and system capacity discussions.

▶ **Course:** [Spring 2015 -- Computer Architecture Lectures -- Carnegie Mellon](https://www.youtube.com/playlist?list=PL5PHm2jkkXmi5CxxI7b3JCL1TWybTDtKq) — Carnegie Mellon Computer Architecture · 39 videos · 64.3h across 39 episodes

*What to watch:* Focus on the first 20 lectures of the 'Spring 2015 -- Computer Architecture Lectures -- Carnegie Mellon' playlist by Carnegie Mellon Computer Architecture. These cover introduction, ISA, microarchitecture, pipelining, branch prediction, and especially memory hierarchy and caches, which are critical to understanding processor integration in configurable systems.

*Move on when you can:* Explain the fetch-decode-execute cycle and describe the role of caches and memory in processor performance.

### Stage 3 · FPGA Architecture and Programming *(core)*
The paper discusses FPGA gate capacity, configuration speed, and memory interfacing; knowledge of FPGA internal structure, configuration methods, and hardware description languages is critical to understand these limitations.

▶ **Course:** [Introduction to FPGA](https://www.youtube.com/playlist?list=PLEBQazB0HUyT1WmMONxRZn9NmQ_9CIKhb) — DigiKey · 12 videos · 4.2h across 12 episodes

*What to watch:* Watch the entire 'Introduction to FPGA' playlist by DigiKey, especially parts 1 through 8, which explain FPGA architecture, configuration, Verilog basics, finite state machines, and memory blocks. This will provide a solid understanding of FPGA internals and programming relevant to the paper's discussion.

*Move on when you can:* Write and simulate a simple hardware design in VHDL or Verilog and explain the FPGA configuration process.

### Stage 4 · Embedded Systems and Hardware/Software Co-Design *(core)*
Configurable computing combines programmable processors with hardware accelerators; understanding embedded system design and co-design methodologies is necessary to appreciate the integration challenges and tool support issues discussed.

▶ **Course:** [Hardware Software Codesign for Edge AI](https://www.youtube.com/playlist?list=PLXlqOmLpWgZlMNRV1cYhbegd8dXYjd_j-) — AIoTBlocks · 12 videos · 9.4h across 12 episodes

*What to watch:* Focus on the 'Hardware Software Codesign for Edge AI' playlist by AIoTBlocks, especially lectures 1 through 7, which cover co-design concepts, Zynq MPSoC architecture, and programming models. This playlist provides practical insights into hardware/software partitioning and embedded system integration relevant to configurable computing.

*Move on when you can:* Design a simple embedded system combining a microcontroller with a hardware accelerator and explain trade-offs in hardware/software partitioning.

### Stage 5 · Computer-Aided Design (CAD) Tools for Hardware *(advanced)*
The paper highlights challenges in CAD and compilation tools for configurable computing; familiarity with synthesis, place-and-route, and timing analysis tools is required to understand these development complexities.

▶ **Course:** [Embedded Linux and FPGAs](https://www.youtube.com/playlist?list=PLUQpHm_JtukJ5tUmlcWKpcVbGfYy0MfxI) — IIT Madras - BS in Electronic Systems · 78 videos · 17.0h across the first 60 episodes

*What to watch:* Watch the first 40 lectures of the 'Embedded Linux and FPGAs' playlist by IIT Madras - BS in Electronic Systems. These cover hardware access, AXI bus protocols, simulation, and embedded Linux device drivers, providing a strong foundation in hardware design tools and workflows relevant to CAD challenges in configurable computing.

*Move on when you can:* Use a hardware synthesis tool to convert HDL code into a gate-level netlist and explain the place-and-route process.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the 1997 paper "Seeking Solutions in Configurable Computing" by William H. Mangione-Smith et al. The beginner project focuses on reproducing and visualizing the paper's classification of configurable computing architectures. The intermediate project involves implementing a simple simulation comparing netlist and chunky function unit architectures on a small benchmark, reflecting the paper's core architectural tradeoffs. The advanced project extends the paper's future direction by designing a prototype high-level API to improve programmability and tool support for FPGA-based configurable computing, addressing a key limitation the paper highlights.

### Beginner — Visualizing Configurable Computing Architectures Classification
*Effort: a weekend, ~8 hours*

You build an interactive web-based visualization that presents the classification of configurable computing architectures into netlist computers and chunky function unit architectures, along with the three main architectural design decisions: granularity, CPU proximity, and system capacity. The visualization includes explanatory text and diagrams summarizing these concepts from the paper.

**Why it shows you understood the paper:** This project shows you have understood the fundamental architectural taxonomy and design tradeoffs discussed in the paper, which is foundational to configurable computing research.

**Grounded in:** Classification of configurable computing architectures into netlist computers and chunky function unit architectures; Identification of three main architectural design decisions: granularity of programmable hardware, CPU proximity, and system capacity.

**Tech stack:** TypeScript, React, CSS

**Data:** No external data needed; content is derived directly from the paper's architectural classification and design decisions.

**Build it:**

1. Extract key classification categories and architectural design decisions from the paper.
2. Design simple diagrams illustrating netlist vs chunky architectures and the three design decisions.
3. Build a React app that displays these diagrams with interactive tooltips or explanations.
4. Add textual summaries and references to the paper sections for context.
5. Test the app locally and prepare a README explaining the project and its connection to the paper.

**Ships as:** A GitHub repository containing a React app that visually explains the configurable computing architecture classification and design decisions, with a README linking to the paper and describing the concepts.

**Stretch goal:** Add a quiz or interactive questions to test understanding of the architectural concepts.

### Intermediate — Simulating Netlist vs Chunky Architectures on a Simple Benchmark
*Effort: 2 weekends, ~20 hours*

You implement a small-scale simulation comparing the performance tradeoffs between netlist computers and chunky function unit architectures on a simple, synthetic benchmark representing regular and irregular computations. You measure metrics such as execution time and resource utilization, reflecting the paper's analysis of flexibility versus efficiency.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core architectural tradeoffs and limitations discussed in the paper, and your ability to operationalize these concepts into measurable performance comparisons.

**Grounded in:** Netlist computers offer high flexibility but are difficult to program and have limited commercial success; Chunky architectures provide higher efficiency for regular applications but lack flexibility for irregular computations.

**Tech stack:** Python 3.11, Jupyter Notebook, Matplotlib

**Data:** Synthetic benchmark data simulating regular and irregular computation patterns, created based on descriptions in the paper.

**Build it:**

1. Design simple synthetic benchmarks representing regular and irregular computational tasks.
2. Implement a Python simulation model for netlist architecture emphasizing flexibility but higher overhead.
3. Implement a Python simulation model for chunky function unit architecture emphasizing efficiency for regular tasks.
4. Run benchmarks on both models and collect execution time and resource usage metrics.
5. Visualize and compare the results using plots.
6. Write a report in the notebook linking results back to the paper's claims.

**Ships as:** A Jupyter Notebook repository with simulation code, benchmark definitions, performance plots, and a discussion relating results to the paper's architectural tradeoffs.

**Stretch goal:** Extend the simulation to include a simple dynamic reconfiguration model reflecting configuration speed limitations.

### Advanced — Prototype High-Level API for FPGA Configurable Computing
*Effort: 3-4 weeks*

You design and implement a prototype high-level software API that abstracts hardware configuration and reconfiguration of FPGA-like programmable units, aiming to improve programmability and tool support as suggested in the paper's future directions. The API allows users to define hardware configurations and switch between them dynamically with simplified commands, simulating configuration speed and capacity constraints.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing the lack of unified programming models and effective development tools, demonstrating your ability to extend foundational research into practical software/hardware co-design solutions.

**Grounded in:** Developing effective software/hardware APIs and high-level development tools; Improving CAD and compilation tools to handle time and space resource management; Bridging the gap between netlist and chunky architectures with unifying models.

**Tech stack:** Python 3.11, FastAPI, TypeScript, React, Docker

**Data:** No external data; the project focuses on API design and simulation of hardware configuration workflows.

**Build it:**

1. Research existing FPGA programming abstractions and identify minimal API features to abstract configuration.
2. Design an API specification that allows defining hardware configurations and switching between them dynamically.
3. Implement a backend simulation in Python/FastAPI that models configuration delays and capacity limits.
4. Build a React frontend to interact with the API, allowing users to upload configurations and trigger reconfiguration.
5. Demonstrate usage scenarios reflecting static, time-sharing, and dynamic configuration models from the paper.
6. Document the API design, implementation details, and how it addresses the paper's challenges.

**Ships as:** A full-stack GitHub repository with a documented API and frontend demonstrating a prototype high-level configurable computing interface, linked explicitly to the paper's tool and programming model challenges.

**Stretch goal:** Integrate a simple compiler frontend that translates a domain-specific language into configuration commands for the API.
