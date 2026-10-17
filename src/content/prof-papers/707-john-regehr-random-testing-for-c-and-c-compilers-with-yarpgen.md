---
title: "707 · Random Testing for C and C++ Compilers with YARPGen — John Regehr"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-john-regehr"
source_hash: "5d4dcf6e53c459b5b8264ac3381f0eafe883c780f6d6557099df3ced8dc78474"
sequence: 707
generator: "outreach-garden: managed"
---

# 707 · Random Testing for C and C++ Compilers with YARPGen

## At a glance

- **Professor:** John Regehr
- **Institution:** University of Utah
- **Paper:** [Random Testing for C and C++ Compilers with YARPGen](https://users.cs.utah.edu/~regehr/yarpgen-oopsla20.pdf)
- **Authors:** Vsevolod Livinskii, Dmitry Babokin, John Regehr
- **Year:** 2020

## Paper overview

This paper presents YARPGen, a tool that automatically generates random C and C++ programs to test compilers for bugs. YARPGen creates expressive, complex programs that avoid undefined behavior without relying on heavy runtime checks. It uses generation policies to increase code diversity and target specific compiler optimizations, improving the chances of finding bugs. Over two years, YARPGen found many previously unknown bugs in major compilers like GCC, LLVM, and Intel C++ Compiler.

### Why it matters

**Research problem:** Compilers must not crash or produce incorrect code, but due to complexity and ongoing changes, bugs persist. Existing random test-case generators eventually saturate and fail to find new bugs because of biases limiting code diversity and coverage of compiler internals.

**Why it matters:** Compiler bugs can cause software crashes, security vulnerabilities, and incorrect program behavior. Finding and fixing these bugs improves software reliability and security. Effective testing tools are essential because compilers are complex and rapidly evolving.

**Key contributions:**

- A method to generate expressive random C/C++ programs free of undefined behavior without heavy dynamic checks.
- Generation policies that systematically alter code generation to increase diversity and trigger more compiler optimizations.
- An automated testing framework that integrates generation, differential testing, bug reduction, and classification.
- Empirical demonstration of finding many new bugs in GCC, LLVM, and Intel C++ Compiler despite prior heavy testing.

## About the professor

**John Regehr** — Professor, School of Computing, University of Utah.

Research interests: using software tools to make it easier to develop correct and efficient software

### Research links

- [Faculty/profile page](http://www.cs.utah.edu/~regehr)
- [Professor website](http://john.regehr.org/)
- [Resolved homepage](http://www.cs.utah.edu/~regehr/)
- [Google Scholar](https://scholar.google.com/citations?user=yCv02hMAAAAJ&hl=en)
- [DBLP](http://dblp.org/pers/hd/r/Regehr:John)
- [GitHub](https://github.com/regehr)
- [Social profile](https://mastodon.social/@regehr)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Compiler Testing and Fuzzing
**The paper assumes:** compiler testing techniques, fuzzing methodologies, undefined behavior in C/C++, differential testing, bug reduction strategies
**Already in this field?** Skip this entirely if you have prior experience with compiler fuzzing tools like Csmith or have studied software testing methods for compilers.

To understand the techniques and challenges behind YARPGen's approach to random testing of C and C++ compilers, it is essential to grasp compiler fuzzing fundamentals, including how fuzzers generate code, avoid undefined behavior, and trigger compiler optimizations. The rigorous course provides a deep, structured foundation in compiler design principles relevant to testing and optimization, while the fast track offers a focused, practical introduction to fuzzing concepts and embedded security testing that directly relate to compiler fuzzing and bug detection. Choose the course for comprehensive theoretical grounding and the fast track for a concise, applied overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Embedded Security Testing](https://www.youtube.com/playlist?list=PLI0R_0_8-TV5nbaVYxRcwwejVfomX_i_n) — Code Intelligence · 7 videos · 5.4h across 7 episodes

**Watch only this:** Episodes 1-3 (Fuzzing Embedded Systems With Dependencies, Coding Session: Modern Fuzzing for Automotive Software, Mocking Embedded Systems With Fuzz Data), about 2.3 hours — these provide a practical introduction to fuzzing concepts and techniques applicable to compiler testing.

*Why it unblocks this paper:* This short series on Embedded Security Testing by Code Intelligence includes practical fuzzing tutorials and best practices for testing C/C++ code, directly relevant to understanding how fuzzers like YARPGen generate test cases and detect bugs in compilers.

*If you want all of it:* All 7 episodes, about 5.4 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Random Testing for C and C++ Compilers with YARPGen," start by building foundational knowledge on undefined behavior in C/C++ and static analysis techniques for code safety, as these underpin the approach to generating safe test programs. Next, explore differential testing of compilers to grasp the bug detection methodology. Finally, focus on the core concept of YARPGen itself through the authors' own presentation, which provides direct insights into their tool, methodology, and results.

### Undefined behavior in C and C++ *(prerequisite)*
Understanding undefined behavior is crucial because YARPGen's main innovation is generating random programs that avoid undefined behavior without heavy runtime checks. This knowledge helps appreciate the challenges and importance of safe test generation in compiler testing.

*How the paper uses it:* YARPGen generates expressive random C/C++ programs free of undefined behavior, a key to effective compiler testing.

▶ [Undefined Behavior in C++: What Every Programmer Should Know and Fear - Fedor Pikus - CppCon 2023](https://www.youtube.com/watch?v=k9N8OrhrSZw) — CppCon · 2 yr ago

### Static analysis for code safety *(prerequisite)*
Static analysis techniques are used by YARPGen to interleave code generation with safety checks, avoiding undefined behavior efficiently. Understanding static analysis provides insight into how YARPGen achieves correctness without dynamic overhead.

*How the paper uses it:* YARPGen interleaves static analysis and code generation to avoid undefined behavior without heavy dynamic checks.

▶ [Software Engineering Course | Chapter 12 | 12.3 Safety Processes (Model Checking & Static Analysis)](https://www.youtube.com/watch?v=HFMFCumHtHo) — TheSoftwareJourney · 2 mo ago

### Differential testing of compilers *(prerequisite)*
Differential testing is a core technique for detecting compiler bugs by comparing outputs across compilers or compiler versions. Grasping this method clarifies how YARPGen identifies bugs effectively.

*How the paper uses it:* YARPGen uses differential testing to detect compiler bugs by comparing outputs from multiple compilers.

▶ [[OOPSLA24] Rustlantis: Randomized Differential Testing of the Rust Compiler](https://www.youtube.com/watch?v=0jqI8M1xzj4) — ACM SIGPLAN · 1 yr ago

### Random Testing for C and C++ Compilers with YARPGen
This section covers the authors' own presentation of YARPGen, providing direct, detailed insights into their tool's design, generation policies, testing framework, and empirical results. It is essential for understanding the paper's contributions and innovations.

*How the paper uses it:* This is the authors' own talk about YARPGen, explaining their approach and findings in detail.

▶ [Random Testing for C and C++ Compilers with YARPGen](https://www.youtube.com/watch?v=mb9aRoXnicE) — ACM SIGPLAN · 5 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on YARPGen, start by learning about undefined behavior in C and C++ since avoiding it is central to generating valid test programs. Next, grasp static analysis techniques that help ensure code safety without runtime checks. Then, explore differential testing, a key method for detecting compiler bugs by comparing compiler outputs. After that, study random program generation methods for compiler testing to see how diverse test cases are created. Finally, watch the authors' own talk on YARPGen to see how these concepts come together in their tool.

### Undefined behavior in C and C++ *(prerequisite)*
Undefined behavior in C and C++ refers to program operations that the language standard does not define, leading to unpredictable results or crashes. Understanding it is crucial because YARPGen generates programs that avoid undefined behavior to reliably test compilers.

*How the paper uses it:* YARPGen's core innovation is generating expressive random programs free of undefined behavior without heavy dynamic checks.

▶ [Undefined Behavior in C++: What Every Programmer Should Know and Fear - Fedor Pikus - CppCon 2023](https://www.youtube.com/watch?v=k9N8OrhrSZw) — CppCon · 2 yr ago

### Static analysis for code safety *(prerequisite)*
Static analysis involves examining code without running it to detect potential errors or unsafe operations. YARPGen uses static analysis interleaved with code generation to ensure generated programs avoid undefined behavior efficiently.

*How the paper uses it:* YARPGen interleaves static analysis and code generation with local rewrites to avoid undefined behavior.

▶ [Software Engineering Course | Chapter 12 | 12.3 Safety Processes (Model Checking & Static Analysis)](https://www.youtube.com/watch?v=HFMFCumHtHo) — TheSoftwareJourney · 2 mo ago

### Differential testing of compilers *(prerequisite)*
Differential testing compares outputs from multiple compilers on the same input program to detect inconsistencies that indicate bugs. This technique is fundamental to YARPGen's automated bug detection.

*How the paper uses it:* YARPGen automates differential testing by compiling and executing generated programs across compilers to find bugs.

▶ [[OOPSLA24] Rustlantis: Randomized Differential Testing of the Rust Compiler](https://www.youtube.com/watch?v=0jqI8M1xzj4) — ACM SIGPLAN · 1 yr ago

### Random program generation for compiler testing
Random program generation creates diverse test cases to exercise different compiler behaviors and find bugs. YARPGen advances this by generating loop-free, expressive C/C++ programs with policies to increase diversity and target optimizations.

*How the paper uses it:* YARPGen uses generation policies to skew random choices and increase code diversity, improving bug-finding effectiveness.

▶ [Random Testing for C and C++ Compilers with YARPGen](https://www.youtube.com/watch?v=mb9aRoXnicE) — ACM SIGPLAN · 5 yr ago

## Already in your library

- [Static Program Analysis for Security | Cambridge IB Tech Talks](https://www.youtube.com/watch?v=GmrvgAcYcWo) — also for: SkillVetBench: LLM-as-Judge for Multi-Dimensional Security Risk Evaluation in Open-Source LLM Agent Skills (Sajedul Rahim Talukder)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the YARPGen paper. The beginner project recreates a core mechanism of generating safe random C programs without undefined behavior using familiar languages. The intermediate project implements a simplified version of YARPGen's generation policies to increase code diversity and measures their effect on compiler optimizations. The advanced project extends YARPGen's approach by adding limited loop support, addressing a key limitation noted in the paper, and evaluates the impact on bug-finding effectiveness.

### Beginner — Random Loop-Free C Program Generator Avoiding Undefined Behavior
*Effort: a weekend, ~8 hours*

You build a simple random C program generator that produces loop-free programs with scalar variables and expressions, ensuring no undefined behavior by applying static checks and local rewrites during generation. The generator outputs compilable C code that can be compiled and run to verify correctness.

**Why it shows you understood the paper:** This project demonstrates you understand YARPGen's core contribution of generating expressive, undefined-behavior-free C programs without heavy runtime checks by interleaving static analysis and code generation.

**Grounded in:** A method to generate expressive random C/C++ programs free of undefined behavior without heavy dynamic checks.

**Tech stack:** C++17 or later, Python 3.11, clang or GCC compiler

**Data:** No external dataset is needed; you synthesize random C programs as output.

**Build it:**

1. Design a simple grammar for loop-free C programs with scalar variables and arithmetic/bitwise operations.
2. Implement a random generator in Python that produces programs following this grammar.
3. Integrate static checks during generation to detect and fix potential undefined behaviors (e.g., division by zero, invalid shifts).
4. Implement local rewrites to fix unsafe operations detected during generation.
5. Output generated programs as .c files and compile them with clang or GCC to verify correctness.
6. Run a small batch of generated programs to demonstrate stable compilation and execution.

**Ships as:** A GitHub repo with the generator code, sample generated C programs, and a README explaining the approach and how it avoids undefined behavior.

**Stretch goal:** Add support for generating simple conditional expressions and verify undefined behavior avoidance still holds.

### Intermediate — Implementing Generation Policies to Increase Compiler Optimization Triggers
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of YARPGen's generation policies that skew random choices to produce code patterns targeting specific compiler optimizations (e.g., arithmetic reassociation). You generate a corpus of random programs with and without these policies, compile them with LLVM or GCC, and measure the frequency of targeted optimizations applied.

**Why it shows you understood the paper:** This project shows you grasp YARPGen's novel use of generation policies to systematically increase code diversity and trigger more compiler optimizations, as well as how to empirically measure their effect.

**Grounded in:** Generation policies that systematically alter code generation to increase diversity and trigger more compiler optimizations.

**Tech stack:** Python 3.11, C++17 or later, LLVM or GCC compiler, Bash scripting

**Data:** Generated random C programs from your own generator; no external dataset required.

**Build it:**

1. Extend your random C program generator to implement at least one generation policy that biases code generation towards patterns triggering a specific optimization (e.g., associative arithmetic expressions).
2. Generate two sets of random programs: one with the generation policy enabled, one without.
3. Compile both sets with LLVM or GCC using optimization flags (e.g., -O2).
4. Use compiler diagnostic tools or logs to count how often the targeted optimization is applied in each set.
5. Analyze and report the increase in optimization frequency due to the generation policy.
6. Document the methodology, results, and implications in a README.

**Verified links from the paper:**

- <https://github.com/intel/yarpgen> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/llvm/llvm-project> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing the extended generator, scripts to compile and analyze optimization frequency, and a report comparing baseline vs policy-driven generation.

**Stretch goal:** Add support for multiple generation policies targeting different optimizations and compare their combined effect.

### Advanced — Extending YARPGen with Experimental Loop Support and Bug-Finding Evaluation
*Effort: 3-4 weeks*

You extend your random C program generator to support simple loops, addressing a key limitation of YARPGen's main evaluation. You implement static checks to avoid undefined behavior in loops and integrate this into the generation pipeline. Then, you run differential testing on LLVM or GCC compilers to detect miscompilations or crashes caused by generated loop-containing programs.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of YARPGen by adding loop support and evaluating its impact on compiler bug detection, demonstrating deep comprehension and the ability to extend research methods.

**Grounded in:** YARPGen currently supports only loop-free code in its main evaluation; loop support is experimental and limited. Future directions include extending support for loops.

**Tech stack:** Python 3.11, C++17 or later, LLVM or GCC compiler, Bash scripting, Git

**Data:** Generated random C programs with loops; no external dataset needed.

**Build it:**

1. Design and implement loop constructs (e.g., for, while) in your random C program generator.
2. Develop static analysis and local rewrite rules to ensure loops do not cause undefined behavior (e.g., no infinite loops, safe loop bounds).
3. Integrate loop support into the generation pipeline alongside existing undefined behavior avoidance.
4. Generate a corpus of loop-containing random programs.
5. Use differential testing by compiling and running generated programs on multiple compilers (e.g., LLVM and GCC) to detect crashes or miscompilations.
6. Analyze detected bugs, reduce test cases for clarity, and document findings.
7. Prepare a detailed README describing your approach, challenges, and evaluation results.

**Verified links from the paper:**

- <https://github.com/intel/yarpgen> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/llvm/llvm-project> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the extended generator supporting loops, scripts for differential testing, sample bug-triggering programs, and a comprehensive report.

**Stretch goal:** Incorporate limited pointer arithmetic or function calls to further lift YARPGen's limitations and evaluate their effect on bug discovery.
