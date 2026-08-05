---
title: "197 · DynARMic: A Dynamic ARM Instruction Counting Tool — Ronald F. DeMara"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ronald-f-demara"
source_hash: "2f9a6e4a7a37c620067a405685cb835af045cf8bff0c4c0f5de418670286e9f8"
sequence: 197
generator: "outreach-garden: managed"
---

# 197 · DynARMic: A Dynamic ARM Instruction Counting Tool

## At a glance

- **Professor:** Ronald F. DeMara
- **Institution:** University of Central Florida
- **Paper:** [DynARMic: A Dynamic ARM Instruction Counting Tool](https://cal.ucf.edu/wp-content/uploads/2026/04/DyARMic-Tech-Report.pdf)
- **Authors:** Ayush Shashikant Pindoria, Ronald F. DeMara
- **Year:** 2024

## Paper overview

DynARMic is a web-based tool designed to help undergraduate students learn about ARMv7 assembly programming by dynamically counting and categorizing instructions as they execute. It provides detailed breakdowns of instruction types related to energy consumption and performance, enabling students to optimize their code for energy efficiency and speed without needing to install software locally.

### Why it matters

**Research problem:** Undergraduate computer architecture courses using ARMv7 lack a tool that provides detailed dynamic instruction profiling by category, similar to what MARS offers for MIPS, limiting students' ability to analyze energy and performance trade-offs in their assembly code.

**Why it matters:** Dynamic instruction counting is crucial for understanding actual runtime behavior, especially with loops and branches, and for teaching students how to optimize code for energy and performance on embedded/mobile platforms using ARMv7. Existing tools like CPUlator do not provide per-category dynamic instruction profiling, creating a gap in educational resources.

**Key contributions:**

- A web-based ARMv7 dynamic profiler classifying instructions into five pedagogically motivated energy categories.
- An encoding format panel classifying instructions into eight ARMv7 machine encoding formats to support CPI estimation.
- Provision of energy and CPI reference values in lab instructions to complement the tool's outputs.
- Cloud deployment strategy enabling cross-platform access without local setup.

## About the professor

**Ronald F. DeMara** — Pegasus Professor of ECE, Fellow of IEEE and AAAS, Electrical and Computer Engineering, University of Central Florida.

Research interests: adaptive and resilient computing architectures with emphasis on reconfigurable logic devices, evolvable hardware, and post-CMOS devices

### Research links

- [Faculty/profile page](http://cal.ucf.edu)
- [Professor website](https://cal.ucf.edu/person/ronald-f-demara/)
- [Resolved homepage](https://cal.ucf.edu/person/ronald-f-demara/#content)
- [Google Scholar](http://orcid.org/0000-0001-6864-7255)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the DynARMic paper, start with foundational knowledge of ARMv7 architecture and instruction encoding, as this is essential for interpreting the instruction categories and profiling results. Next, build understanding of dynamic binary instrumentation and emulation frameworks, which underpin the tool's dynamic instruction counting approach. Finally, focus on the core concept of the DynARMic tool itself, featuring the authors' own talk to gain direct insights into the tool's design, educational use, and implementation details.

### ARMv7 architecture seminar *(prerequisite)*
Understanding the ARMv7 instruction set architecture and encoding formats is fundamental to grasping how DynARMic classifies and profiles instructions. This knowledge provides the necessary background to interpret the instruction categories and encoding panels presented by the tool.

*How the paper uses it:* ARMv7 ISA and encoding formats are essential for interpreting DynARMic's instruction classification and profiling results.

▶ [A tour of the ARM architecture and its Linux support](https://www.youtube.com/watch?v=NNol7fRGo2E) — linux conf au 2017 - Hobart, Australia · 46:34

### Dynamic binary instrumentation lecture *(prerequisite)*
Dynamic binary instrumentation (DBI) techniques enable runtime analysis and modification of executing programs, which is central to DynARMic's approach of dynamically counting and categorizing instructions. This lecture provides a rigorous overview of DBI frameworks and their applications.

*How the paper uses it:* DynARMic uses dynamic instrumentation to profile ARMv7 instructions during execution.

▶ [34C3 - Implementing an LLVM based Dynamic Binary ...](https://www.youtube.com/watch?v=Zt74lOuU6zc) — media.ccc.de · 1:00:02

### Emulation and instrumentation frameworks lecture *(prerequisite)*
DynARMic leverages the Unicorn emulator, Keystone assembler, and Capstone disassembler frameworks. Understanding these emulation and instrumentation tools is key to comprehending the tool's implementation and how it achieves cross-platform dynamic profiling.

*How the paper uses it:* The tool's implementation relies on Unicorn, Keystone, and Capstone frameworks for emulation, assembly, and disassembly.

▶ [Unicorn: Next Generation CPU Emulator Framework](https://www.youtube.com/watch?v=U8zIToF8wmE) — Black Hat · 52:06

### DynARMic tool talk *(the paper's own talk)*
The authors' own talk provides direct insight into the design, educational motivation, and deployment of DynARMic. It offers the most precise and relevant explanation of the tool's features, usage in undergraduate courses, and future directions.

*How the paper uses it:* This talk is given by the authors and directly addresses the DynARMic tool and its educational application.

▶ [CactusCon 2018 - ARMaHYDAN - Misadventures of ARM instruction encodings](https://www.youtube.com/watch?v=qEfWt2naCx4) — XlogicX · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand DynARMic, start by learning the ARMv7 architecture basics to grasp the instruction set and encoding formats. Next, explore dynamic binary instrumentation to see how instructions are analyzed during execution. Then, study emulation and instrumentation frameworks like Unicorn, Keystone, and Capstone, which DynARMic uses for assembly, emulation, and disassembly. Finally, watch a focused talk on ARM instruction encoding to connect these concepts directly to DynARMic's design and educational use.

### ARMv7 architecture seminar *(prerequisite)*
This section introduces the ARMv7 instruction set architecture, its encoding formats, and core features. Understanding ARMv7 is essential to interpret how instructions are categorized and profiled by DynARMic.

*How the paper uses it:* DynARMic classifies instructions into ARMv7 encoding formats and categories, so foundational ARMv7 knowledge is critical.

▶ [ARM Architecture and ISA training Demo session](https://www.youtube.com/watch?v=SeLvcXonYvU) — VLSIGuru - Best VLSI Training Institute · 1:35:27

### Dynamic binary instrumentation lecture *(prerequisite)*
Dynamic binary instrumentation (DBI) is a technique to analyze and modify program instructions as they execute. Learning DBI helps understand how DynARMic dynamically counts and categorizes instructions during runtime.

*How the paper uses it:* DynARMic relies on dynamic instrumentation to profile instructions as the ARMv7 code runs.

▶ [Dynamic Binary Instrumentation - Jayakrishna Menon](https://www.youtube.com/watch?v=oVCVkPqCEt4) — Cysinfo · 19:24

### Emulation and instrumentation frameworks lecture *(prerequisite)*
This section covers software frameworks like Unicorn (CPU emulation), Keystone (assembly), and Capstone (disassembly), which enable DynARMic's web-based dynamic profiling without local installation.

*How the paper uses it:* DynARMic uses these frameworks to assemble, emulate, and disassemble ARMv7 instructions dynamically in a web environment.

▶ [Unicorn: Next Generation CPU Emulator Framework](https://www.youtube.com/watch?v=U8zIToF8wmE) — Black Hat · 52:06

### DynARMic tool talk *(the paper's own talk)*
This talk focuses on ARM instruction encoding and related challenges, providing direct insight into the instruction classification that DynARMic performs for educational purposes.

*How the paper uses it:* Understanding ARM instruction encoding is key to grasping how DynARMic categorizes instructions into energy and encoding format panels.

▶ [021 -  ARM instruction encoding](https://www.youtube.com/watch?v=v25uaUrSPSQ) — Open Teach Project · 4 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of DynARMic's dynamic ARMv7 instruction counting and profiling approach. The beginner project reproduces a core visualization of instruction category counts from assembly code execution, using your existing full-stack and Python skills. The intermediate project implements a simplified dynamic instruction profiler for ARMv7 assembly snippets, comparing instruction category counts to a static baseline, introducing emulation and instrumentation concepts. The advanced project extends the profiler to incorporate a first-order CPI estimation panel and explores integration of hardware-validated energy/timing data, addressing a key limitation and future direction of the paper.

### Beginner — ARMv7 Instruction Category Counter Visualization
*Effort: a weekend, ~8 hours*

You build a web-based visualization that takes a small ARMv7 assembly code snippet, simulates instruction execution counts per the paper's five energy-related categories, and displays a bar chart of dynamic instruction counts by category. This reproduces the paper's core pedagogical output: dynamic instruction category breakdowns.

**Why it shows you understood the paper:** This project shows you grasp the paper's key contribution of categorizing dynamic ARM instructions by energy-related types and presenting them visually for educational purposes.

**Grounded in:** The tool classifies instructions into five energy-related categories and presents results in a dual-panel web interface.

**Tech stack:** TypeScript, React, D3.js or Chart.js, Node.js

**Data:** You simulate instruction counts from a small ARMv7 assembly snippet inspired by examples in the paper; no external dataset required.

**Build it:**

1. Select or write a small ARMv7 assembly snippet with loops and branches.
2. Manually categorize each instruction into one of the five energy categories defined in the paper.
3. Simulate dynamic instruction counts by unrolling loops and counting instructions executed.
4. Build a React web app that displays a bar chart of instruction counts by category.
5. Add explanatory text describing the categories and their significance for energy/performance.
6. Deploy the app on a free platform like Vercel or Netlify.

**Ships as:** A GitHub repo with a React app that visualizes dynamic instruction counts by energy category for a sample ARMv7 assembly snippet, with clear README explaining the categories and simulation approach.

**Stretch goal:** Add interactivity to let users input their own ARMv7 snippets and see updated instruction category counts.

### Intermediate — Simplified Dynamic ARMv7 Instruction Profiler
*Effort: 1-2 weekends, ~20 hours*

You implement a simplified dynamic instruction profiler for ARMv7 assembly code that uses an open-source ARM emulator (e.g., Unicorn Engine) to execute code snippets and dynamically count instructions by the paper's five energy categories. You compare dynamic counts to static instruction counts as a baseline and report the differences.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core dynamic profiling method using emulation and instruction classification, validating the importance of dynamic counts over static analysis.

**Grounded in:** Develop a cross-platform, web-based dynamic instruction profiling tool using Keystone for assembly, Unicorn for emulation, and Capstone for disassembly. The tool classifies instructions into five energy-related categories.

**Tech stack:** Python 3.11, Unicorn Engine, Capstone, Keystone, Flask or FastAPI, React

**Data:** You use small ARMv7 assembly snippets you write yourself or from public ARMv7 tutorials; no external dataset is required.

**Build it:**

1. Set up Unicorn Engine to emulate ARMv7 code snippets.
2. Use Keystone to assemble ARMv7 assembly snippets into machine code.
3. Use Capstone to disassemble instructions during emulation and classify them into the five energy categories.
4. Count dynamic instructions executed per category during emulation.
5. Implement a simple web interface to input assembly, run profiling, and display dynamic vs static instruction counts.
6. Write a README comparing dynamic and static counts and discussing implications for energy/performance.

**Ships as:** A GitHub repo with a Python backend and React frontend that dynamically profiles ARMv7 assembly snippets by instruction category and compares dynamic counts to static counts, with documentation.

**Stretch goal:** Add support for the eight ARMv7 encoding formats panel to estimate CPI as in the paper.

### Advanced — Extended DynARMic Profiler with CPI Estimation and Hardware Validation Interface
*Effort: 3-4 weeks*

You extend the simplified dynamic ARMv7 profiler to include the paper's second panel classifying instructions by eight ARMv7 encoding formats for CPI estimation. You integrate a configurable interface to input hardware-validated energy and timing measurements (simulated or from literature) to improve accuracy of energy and CPI estimates. This addresses the paper's limitation and future direction of hardware validation and CPI estimation.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's dual-panel profiling approach, its limitations, and how to bridge the gap toward hardware-validated energy and timing analysis, potentially starting a research conversation.

**Grounded in:** An encoding format panel classifying instructions into eight ARMv7 machine encoding formats to support CPI estimation. Future work includes hardware validation of energy and timing measurements using a Zedboard Cortex-A9 platform.

**Tech stack:** Python 3.11, Unicorn Engine, Capstone, Keystone, FastAPI, React, Docker

**Data:** You use ARMv7 assembly snippets and literature-informed energy/CPI reference values from the paper; hardware measurements are simulated or approximated.

**Build it:**

1. Extend the emulator instrumentation to classify instructions into eight ARMv7 encoding formats using Capstone.
2. Implement CPI estimation by multiplying instruction counts by reference CPI values per encoding format.
3. Create a UI panel displaying both energy category counts and CPI estimates side-by-side.
4. Add a configuration interface to input or upload hardware-validated energy and timing data (initially literature-based).
5. Containerize the full stack app with Docker for easy deployment.
6. Document how hardware validation data can be integrated and discuss challenges in extending to NEON/SIMD instructions.

**Ships as:** A full-featured GitHub repo with a dual-panel dynamic ARMv7 profiler supporting energy and CPI estimation, configurable hardware data input, and detailed README discussing limitations and future directions.

**Stretch goal:** Collaborate with hardware lab to incorporate real PMU and power measurement data from a Zedboard Cortex-A9 platform.
