---
title: "962 · Facilitating the Bootstrapping of a New ISA — David B. Whalley"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-b-whalley"
source_hash: "dbf27947fa15726c88f870367b0ddcec2413442305712ffc8530ed05ee40f238"
sequence: 962
generator: "outreach-garden: managed"
---

# 962 · Facilitating the Bootstrapping of a New ISA

## At a glance

- **Professor:** David B. Whalley
- **Institution:** Florida State University
- **Paper:** [Facilitating the Bootstrapping of a New ISA](https://dl.acm.org/doi/pdf/10.1145/3589610.3596282)
- **Authors:** Abigail Mortensen, Scott Pomerville, David Whalley, Soner Onder, Gang-Ryung Uh
- **Year:** 2023

## Paper overview

This paper addresses the complex challenge of developing system software and simulators for new instruction set architectures (ISAs), especially in embedded systems where backward compatibility is less critical. The authors present tools and verification methods that enable a step-by-step, semi-automated approach to bootstrap new ISAs effectively. They use a bilingual assembler approach translating from a verified base ISA (MIPS) to the new SCALE ISA, enabling early testing and verification of simulators and compilers. They also introduce an assembly optimizer with error isolation tools to identify and fix compiler optimization errors efficiently.

### Why it matters

**Research problem:** Developing and verifying system software (compilers, assemblers, linkers) and simulators for a new ISA is challenging due to the interdependence of these components and the difficulty in isolating errors, especially when both compiler and simulator infrastructures are heavily modified and untrusted.

**Why it matters:** Bootstrapping new ISAs is common in embedded systems, which have diverse ISAs and lack backward compatibility requirements. Reliable and efficient development tools and verification methods are crucial to ensure correctness and performance, reducing development time and errors in embedded system design.

**Key contributions:**

- A bilingual assembler approach using assembly macros to translate from a verified base ISA (MIPS) to a new target ISA (SCALE), breaking the chicken-and-egg problem in bootstrapping.
- A verification method running functional and cycle-accurate simulators in parallel with control-flow and memory value comparison to isolate simulator errors early.
- Development of an assembly optimizer (asopt) with multiple code-improving transformation phases tailored for the new ISA.
- An automatic assembly optimizer error isolation tool (asoptiso) that uses binary search to efficiently identify the first erroneous optimization transformation causing incorrect output.
- Demonstration of the approach on the SCALE ISA family, including VLIW architectures, with detailed simulation and compilation infrastructure.

## About the professor

**David B. Whalley** — Professor, Computer Science, Florida State University.

Research interests: compilers, computer architecture, embedded systems, and performance evaluation

### Research links

- [Faculty/profile page](https://www.cs.fsu.edu/department/faculty/whalley)
- [Identity evidence](http://www.cs.fsu.edu/~whalley)
- [Professor website](https://www.cs.fsu.edu/%7Ewhalley)
- [Resolved homepage](https://www.cs.fsu.edu/~whalley/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Architecture and ISA Design
**The paper assumes:** instruction set architectures, computer architecture fundamentals, assembly language programming, microarchitecture simulation
**Already in this field?** Skip this entirely if you already have a solid understanding of computer architecture, ISA design, and assembly-level programming.

This background playlist selection is designed to prepare readers to understand the core concepts behind instruction set architectures (ISAs), system software bootstrapping, and simulator verification methods as presented in the paper on bootstrapping a new ISA. The rigorous course provides a comprehensive university-level foundation in computer architecture and assembly language, while the fast track offers a concise, focused introduction to the MIPS ISA, which is the verified base ISA used in the paper's bilingual assembler approach. Choose the course for deep understanding or the fast track for a quick, targeted overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computer Architecture (ENCM 370)](https://www.youtube.com/playlist?list=PL7sWxFnBVJLV47Lrq9D-gfFh-mGv2CLCt) — Geoffrey Messier · 29 videos · 18.5h across 29 episodes

**Watch only this:** Watch lectures 1 through 17, about 11 hours — covering introduction, memory organization, registers, assembly language basics, procedure calls, and pipelining including hazards, which provide the essential ISA and microarchitecture knowledge needed.

*Why it unblocks this paper:* This playlist by Geoffrey Messier covers computer architecture fundamentals including ISA design, assembly language, and pipelining, which are directly relevant to understanding the bilingual assembler approach, simulator verification, and assembly optimization techniques in the paper.

*If you want all of it:* About 18.5 hours across all 29 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIPS Instruction Set Architecture (1 of 2)](https://www.youtube.com/playlist?list=PLylNWPMX1lPlmEeeMdbEFQo20eHAJL8hx) — David Black-Schaffer · 9 videos · 0.9h across 9 episodes

**Watch only this:** Watch episodes 1 through 6, about 30 minutes — covering ISA introduction, MIPS instructions, registers and memory, instruction execution model, and data operation and transfer instructions, sufficient to grasp the base ISA concepts.

*Why it unblocks this paper:* This short series provides a concise introduction to the MIPS ISA, the verified base ISA used in the paper's bilingual assembler approach, covering instruction types, registers, memory organization, and instruction execution in under an hour.

*If you want all of it:* About 54 minutes across all 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Facilitating the Bootstrapping of a New ISA,' start by building foundational knowledge on instruction set architecture bootstrapping and verified compiler and simulator design, which are critical prerequisites. Then, explore assembly code optimization techniques and automated error isolation in compiler optimizations to grasp the tools and methods used. Finally, focus on the paper's core concept, the bilingual assembler approach, and the authors' own talks to get the most direct and detailed insights into their novel bootstrapping methodology and verification tools.

### Instruction set architecture bootstrapping *(prerequisite)*
This section covers the fundamental challenges and methods involved in bootstrapping new ISAs, providing essential background on how new instruction sets are developed and supported by system software. Understanding these concepts is crucial to appreciate the paper's approach to breaking the chicken-and-egg problem in ISA bootstrapping.

*How the paper uses it:* The paper addresses bootstrapping new ISAs, making foundational ISA bootstrapping knowledge essential.

▶ [Digital Design & Comp Arch - Lecture 8: Instruction Set Architectures II (Spring 2023)](https://www.youtube.com/watch?v=l5ckuOkVtBY) — Onur Mutlu Lectures · Streamed 3y ago

### Verified compiler and simulator design *(prerequisite)*
This section delves into the design and verification of compilers and simulators, which underpin the paper's reliance on a verified base ISA and simulator infrastructure to bootstrap new ISAs reliably. It provides insight into the rigorous methods used to ensure correctness in system software.

*How the paper uses it:* The paper uses verified base ISAs and simulators as a foundation for bootstrapping the new SCALE ISA.

▶ [On the Architecture of a (Verifying) Compiler](https://www.youtube.com/watch?v=TO9F3RvA0LA) — David Pearce · 7y ago

### Assembly code optimization techniques *(prerequisite)*
This section explains various assembly-level code optimization methods, which are central to the paper's development of the asopt assembly optimizer applying numerous code-improving transformations to the new ISA's assembly code.

*How the paper uses it:* The paper develops an assembly optimizer that applies multiple transformations to improve code quality for the new ISA.

▶ [Assembly Code | Expression 3 address code | Optimized code | Compiler -Lecture 11](https://www.youtube.com/watch?v=GGAyDs9eLvs) — mySchool · 4y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This section features talks by the paper's authors, providing the most direct and detailed explanation of their research, methodology, and results. Watching these talks offers deep insights into the paper's contributions and practical implications.

*How the paper uses it:* Direct presentations by the authors give the most specific and authoritative explanation of the paper.

▶ [https://www.youtube.com › watch?v=Wt9_VfXcQco](https://www.youtube.com/watch?v=Wt9_VfXcQco) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on bootstrapping new ISAs, start by learning the basics of instruction set architectures (ISAs) and why bootstrapping them is challenging. Then, build intuition on verified compilers and simulators, followed by assembly code optimization techniques and automated error isolation methods. Finally, explore the paper's core bilingual assembler approach that enables translating from a verified base ISA to a new target ISA, which is key to their bootstrapping solution.

### Instruction set architecture bootstrapping *(prerequisite)*
Instruction Set Architectures (ISAs) define the set of instructions a processor can execute. Bootstrapping a new ISA involves creating the necessary software tools like compilers and simulators from scratch, which is difficult due to interdependencies and lack of existing infrastructure.

*How the paper uses it:* The paper addresses the challenge of bootstrapping new ISAs by proposing a bilingual assembler and verification methods to ease early development.

▶ [Lecture -3 Instruction Set Architecture - I](https://www.youtube.com/watch?v=HbsuwpJgKao) — nptelhrd · 52:18 · 18y ago

### Verified compiler and simulator design *(prerequisite)*
Verified compilers and simulators are rigorously tested or mathematically proven to behave correctly, which is crucial when building trust in new ISA implementations. Understanding how verification helps isolate errors early is key to reliable ISA development.

*How the paper uses it:* The authors use a verified base ISA (MIPS) and verified simulators as a foundation to bootstrap the new SCALE ISA reliably.

▶ [On the Architecture of a (Verifying) Compiler](https://www.youtube.com/watch?v=TO9F3RvA0LA) — David Pearce · 7y ago

### Assembly code optimization techniques *(prerequisite)*
Assembly code optimization involves applying transformations to improve performance or reduce code size while preserving correctness. Learning common optimization strategies helps understand how automated tools can enhance new ISA software.

*How the paper uses it:* The paper develops an assembly optimizer (asopt) applying many code-improving transformations tailored for the SCALE ISA.

▶ [Assembly Code | Expression 3 address code | Optimized code | Compiler -Lecture 11](https://www.youtube.com/watch?v=GGAyDs9eLvs) — mySchool · 4y ago

### Automated error isolation in compiler optimizations *(prerequisite)*
Automated error isolation uses systematic methods like binary search to identify which optimization step introduces errors, greatly speeding up debugging in complex compiler pipelines.

*How the paper uses it:* The authors introduce asoptiso, a tool that uses binary search to efficiently isolate the first erroneous optimization causing incorrect output.

▶ [https://www.youtube.com › watch?v=BOrAVwwCXq8](https://www.youtube.com/watch?v=BOrAVwwCXq8) — YouTube result via DuckDuckGo

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hearing directly from the authors provides insight into their motivations, methods, and results, complementing technical understanding with context and future directions.

*How the paper uses it:* The authors present their approach and findings in talks that explain the bilingual assembler and verification methods in detail.

▶ [https://www.youtube.com › watch?v=Wt9_VfXcQco](https://www.youtube.com/watch?v=Wt9_VfXcQco) — YouTube result via DuckDuckGo

## Already in your library

- [Understanding Compiler Optimization - Chandler Carruth - Opening Keynote Meeting C++ 2015](https://www.youtube.com/watch?v=FnGCDLhaxKU) — also for: Automatic Data Enumeration for Fast Collections (Simone Campanoni)
- [6.5 : Compiler Optimizations](https://www.youtube.com/watch?v=SLyTtM7rEDA) — also for: Automatic Data Enumeration for Fast Collections (Simone Campanoni)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of the paper "Facilitating the Bootstrapping of a New ISA." Starting with a small-scale bilingual assembler prototype, you progress to implementing and testing an assembly optimizer with error isolation, and finally extend the approach to address a stated limitation by supporting a new ISA with different calling conventions. Each project builds on your existing software engineering skills while introducing core concepts from the paper.

### Beginner — Bilingual Assembler Prototype for MIPS to SCALE Translation
*Effort: a weekend, ~8 hours*

You build a simple bilingual assembler that accepts a small subset of MIPS assembly instructions and translates them into equivalent SCALE ISA assembly using assembly macros. This prototype will include a parser for MIPS instructions, a macro-based translation layer, and output of SCALE assembly code.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core bilingual assembler approach that breaks the bootstrapping chicken-and-egg problem by leveraging a verified base ISA (MIPS) to generate code for a new ISA (SCALE).

**Grounded in:** A bilingual assembler approach using assembly macros to translate from a verified base ISA (MIPS) to a new target ISA (SCALE), breaking the chicken-and-egg problem in bootstrapping.

**Tech stack:** Python 3.11, PLY (Python Lex-Yacc) or similar parser library

**Data:** You use a small hand-crafted set of MIPS assembly instructions as input, simulating the paper's approach with a minimal instruction subset.

**Build it:**

1. Implement a parser for a small subset of MIPS assembly instructions using Python and PLY or a similar library.
2. Define assembly macros that map each parsed MIPS instruction to one or more SCALE ISA instructions.
3. Build a translation engine that applies these macros to convert MIPS assembly input into SCALE assembly output.
4. Create example MIPS assembly input files and verify the SCALE assembly output matches expected translations.
5. Write a README explaining the translation approach and how it relates to the paper's bilingual assembler.

**Ships as:** A GitHub repository containing the bilingual assembler prototype code, example input/output files, and documentation linking the implementation to the paper's bilingual assembler concept.

**Stretch goal:** Add support for control-flow instructions and verify that translated SCALE assembly preserves control flow invariants.

### Intermediate — Assembly Optimizer with Error Isolation for SCALE ISA
*Effort: 1-3 weekends*

You implement a simplified assembly optimizer that applies multiple code-improving transformations to SCALE assembly code and develop an error isolation tool using binary search to identify the first erroneous transformation causing incorrect simulator output. You compare your error isolation efficiency against a naive sequential approach.

**Why it shows you understood the paper:** This project reproduces the paper's core method of assembly optimization combined with automated error isolation (asopt and asoptiso), demonstrating your understanding of how to efficiently debug compiler optimizations for a new ISA.

**Grounded in:** Development of an assembly optimizer (asopt) with multiple code-improving transformation phases tailored for the new ISA and an automatic assembly optimizer error isolation tool (asoptiso) that uses binary search to efficiently identify the first erroneous optimization transformation causing incorrect output.

**Tech stack:** Python 3.11, GitHub Actions for automation, Simple SCALE assembly simulator stub (Python)

**Data:** Use small SCALE assembly benchmark programs you create manually to test optimizer transformations and error isolation.

**Build it:**

1. Implement a set of simple code-improving transformations (e.g., dead code elimination, instruction reordering) for SCALE assembly in Python.
2. Build an assembly optimizer that applies these transformations in sequence to input SCALE assembly files.
3. Create a simple functional SCALE assembly simulator stub that can verify correctness of optimized assembly output.
4. Implement an error isolation tool that uses binary search over the applied transformations to find the first causing incorrect simulation output.
5. Compare the number of simulator runs required by your binary search isolation tool versus a naive sequential approach and report the results.
6. Document the optimizer design, error isolation method, and evaluation results in a README.

**Ships as:** A GitHub repository with the assembly optimizer, error isolation tool, example SCALE assembly benchmarks, simulator stub, and a report comparing isolation efficiency.

**Stretch goal:** Extend the optimizer with additional transformation phases and test on larger SCALE assembly inputs.

### Advanced — Extending Bilingual Assembler and Error Isolation for ISAs with Different Calling Conventions
*Effort: a few weeks*

You extend the bilingual assembler prototype and error isolation framework to support a new target ISA that differs significantly in calling conventions and runtime environment from MIPS and SCALE. You implement assembly macro translations that handle calling convention differences and adapt the error isolation tool to this context. You evaluate the approach on example assembly programs demonstrating function calls and returns.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by exploring how to generalize the bilingual assembler and error isolation techniques to ISAs with fundamentally different calling conventions, showing deep comprehension and ability to extend the research.

**Grounded in:** The assembly macro translation approach may not work if the new ISA differs substantially in calling conventions or other architectural features; future directions include extending the approach to support more complex ISAs with greater architectural differences from the base ISA.

**Tech stack:** Python 3.11, PLY or similar parser, GitHub Actions for CI, Custom SCALE-like and new ISA assembly simulators (simplified)

**Data:** Manually created assembly programs illustrating function calls, callee-save and caller-save register usage, and stack frame management for both ISAs.

**Build it:**

1. Research calling conventions differences between MIPS, SCALE, and your chosen new ISA (e.g., ARM or RISC-V calling conventions).
2. Extend the bilingual assembler macros to translate MIPS instructions into the new ISA assembly, handling calling convention differences (e.g., register saving, stack usage).
3. Adapt or implement a simple functional simulator for the new ISA to verify correctness of translated assembly.
4. Modify the error isolation tool to work with the new ISA simulator and test it on assembly programs with function calls.
5. Evaluate the effectiveness of error isolation in identifying optimization errors related to calling convention handling.
6. Document the design decisions, challenges, and evaluation results in a detailed README.

**Ships as:** A GitHub repository containing the extended bilingual assembler, new ISA simulator, adapted error isolation tool, example assembly programs, and a comprehensive report discussing the extension and its challenges.

**Stretch goal:** Automate generation of assembly macros for calling convention translation using a domain-specific language or template system.
