---
title: "895 · JMLKelinci+: Detecting Semantic Bugs and Covering Branches with Valid Inputs Using Coverage-guided Fuzzing and Runtime Assertion Checking — Gary T. Leavens"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gary-t-leavens"
source_hash: "06bfc7b2522636073e4972c4ad20945caf00a25a123980204633458ab31228f5"
sequence: 895
generator: "outreach-garden: managed"
---

# 895 · JMLKelinci+: Detecting Semantic Bugs and Covering Branches with Valid Inputs Using Coverage-guided Fuzzing and Runtime Assertion Checking

## At a glance

- **Professor:** Gary T. Leavens
- **Institution:** University of Central Florida
- **Paper:** [JMLKelinci+: Detecting Semantic Bugs and Covering Branches with Valid Inputs Using Coverage-guided Fuzzing and Runtime Assertion Checking](https://dl.acm.org/doi/pdf/10.1145/3607538)
- **Authors:** Amirfarhad Nilizadeh, Gary T. Leavens, Corina S. Păsăreanu, Yannic Noller
- **Year:** 2024

## Paper overview

This paper presents JMLKelinci+, a tool that combines coverage-guided fuzzing (CGF) with runtime assertion checking (RAC) to detect semantic bugs in Java programs. The tool ensures that only valid inputs, which satisfy the program's preconditions, are used during testing. It uses formal specifications written in the Java Modeling Language (JML) to check preconditions and postconditions dynamically. This approach improves branch coverage with valid inputs and detects semantic bugs that do not necessarily cause crashes.

### Why it matters

**Research problem:** How to effectively detect semantic bugs that do not cause program crashes and how to maximize branch coverage using only valid inputs during fuzz testing of programs with formal specifications.

**Why it matters:** Detecting semantic bugs is crucial for critical systems where bugs can cause serious failures. Traditional fuzzing tools detect only crashes and often generate invalid inputs, which are ineffective for finding semantic bugs. Ensuring valid inputs and detecting semantic bugs beyond crashes improves software reliability and testing efficiency.

**Key contributions:**

- Development of JMLKelinci+, a prototype tool combining CGF and RAC for Java programs with JML specifications.
- A method to guarantee that only valid inputs (satisfying preconditions) are used during fuzzing.
- Demonstration that combining CGF with RAC can detect semantic bugs that do not cause crashes.
- Empirical evidence that JMLKelinci+ achieves 100% branch coverage with valid inputs in nontrivial programs, outperforming standard fuzzers.
- Reduction in testing time for programs with nontrivial preconditions by avoiding invalid inputs.

## About the professor

**Gary T. Leavens** — Professor, Department of Computer Science, University of Central Florida.

Research interests: Programming and specification language design and semantics, formal methods (program specification and verification), aspect-oriented languages, object-oriented languages, distributed languages, type theory, programming methodology, software engineering, information assurance, computer science education.

### Research links

- [Faculty/profile page](http://www.cs.ucf.edu/~leavens/homepage.html)
- [Professor website](http://www.cs.ucf.edu/~leavens/index.html)
- [Lab website](http://methods.cs.ucf.edu/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=NuVArIYAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Formal Methods and Runtime Assertion Checking
**The paper assumes:** formal methods, runtime assertion checking, behavioral software specification
**Already in this field?** Skip this entirely if you already understand formal specification languages and runtime assertion checking in software engineering.

This background focuses on formal methods and runtime assertion checking (RAC), essential for understanding how JMLKelinci+ uses formal specifications to guide fuzzing with valid inputs and detect semantic bugs beyond crashes. The rigorous course provides a deep, structured university-level treatment of formal methods in software engineering, while the fast track offers a concise, practical introduction to assertions and exception handling relevant to runtime checks. Choose the course for comprehensive theoretical grounding; choose the fast track for a quick, applied overview of assertions and exceptions that underpin RAC.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Testing | Debugging |Exceptions |Assertions](https://www.youtube.com/playlist?list=PLd3UqWTnYXOnEsit3reBxZtaXK0gnXpZR) — Durga Software Solutions · 19 videos · 6.0h across 19 episodes

**Watch only this:** Episodes 1 (Exception Handling in Python), 2 (The 3 Most Important Questions about Exception Handling), 10 (finally block purpose and Specialty), and 13 (Control Flow in try except finally) — about 1.2 hours total. These episodes explain assertions and exception handling relevant to RAC.

*Why it unblocks this paper:* This concise playlist on Testing, Debugging, Exceptions, and Assertions provides practical explanations of runtime assertions and exception handling, foundational to understanding runtime assertion checking in JMLKelinci+.

*If you want all of it:* Approximately 6.0 hours across all 19 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on JMLKelinci+, start by building foundational knowledge on formal specification in software testing, the Java Modeling Language (JML), and runtime assertion checking (RAC), as these underpin the approach. Then, study coverage-guided fuzzing (CGF), the core technique combined with RAC in the paper. Finally, focus on the authors' own presentation or talks closely related to their novel tool and approach to grasp the specific contributions and results.

### formal specification in software testing *(prerequisite)*
Formal specification provides a rigorous way to describe expected software behavior, enabling semantic bug detection beyond simple crash detection. Understanding this concept is essential to appreciate how JMLKelinci+ uses formal pre- and postconditions to guide fuzzing and detect semantic bugs.

*How the paper uses it:* The paper leverages formal specifications to ensure valid inputs and detect semantic bugs beyond crashes.

▶ [Formal Foundations for Networks](https://www.youtube.com/watch?v=_tf3UqktWi8) — Microsoft Research · 10y ago

### Java Modeling Language JML *(prerequisite)*
JML is a formal specification language tailored for Java programs, allowing the expression of preconditions, postconditions, and invariants. A solid understanding of JML is crucial to grasp how the paper uses JML specifications to dynamically check input validity and program correctness during fuzzing.

*How the paper uses it:* JML is the specification language used in JMLKelinci+ to write pre- and postconditions guiding the testing process.

▶ [The Java Modeling Language – a Basis for Static and Dynamic Verification (W. Ahrendt, Chalmers)](https://www.youtube.com/watch?v=9ItK0jxJ0oQ) — Yliès Falcone · 1:22:26 · 8y ago

### runtime assertion checking *(prerequisite)*
Runtime assertion checking dynamically verifies that program executions satisfy specified assertions such as preconditions and postconditions. This technique is key to filtering valid inputs and detecting semantic bugs during fuzzing in the paper's approach.

*How the paper uses it:* The paper integrates RAC with coverage-guided fuzzing to check pre- and postconditions at runtime for semantic bug detection.

▶ [Runtime Assertion-Based Verification for Hardware and Embedded Systems (L. Pierre)](https://www.youtube.com/watch?v=I_-H4qUkMDM) — Yliès Falcone · 57:27 · 8y ago

### coverage guided fuzzing
Coverage-guided fuzzing is a testing technique that generates inputs to maximize code coverage, helping uncover bugs effectively. Understanding CGF is essential to appreciate how the paper's tool uses it in combination with RAC to generate valid inputs and improve branch coverage.

*How the paper uses it:* Coverage-guided fuzzing is the core technique combined with RAC in JMLKelinci+ to generate inputs and guide testing.

▶ [DEF CON 27 - How To Improve Coverage-Guided Fuzzing and Find New 0days in Tough Targets](https://www.youtube.com/watch?v=EtiK-eqo7_U) — HackersOnBoard · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on JMLKelinci+, start by learning about formal specification in software testing to grasp how expected program behavior is defined. Next, study the Java Modeling Language (JML), which is the specific formal language used in the paper to write pre- and postconditions. Then, learn about runtime assertion checking, the dynamic technique used to verify these specifications during execution. After that, explore coverage-guided fuzzing, the method for generating inputs that maximize branch coverage. Finally, integrate these concepts to understand the core contribution of the paper: combining coverage-guided fuzzing with runtime assertion checking to detect semantic bugs using valid inputs.

### formal specification in software testing *(prerequisite)*
Formal specification involves precisely defining what a program is supposed to do using mathematical or logical statements. This helps in detecting semantic bugs by specifying expected behaviors beyond just crashes. Understanding this concept lays the foundation for how the paper uses specifications to guide testing.

*How the paper uses it:* The paper relies on formal specifications to define valid inputs and expected program behavior for semantic bug detection.

▶ [Formal Specification](https://www.youtube.com/watch?v=LnjFiu-HWuU) — RISC-V International · 8y ago

### Java Modeling Language JML *(prerequisite)*
JML is a formal specification language tailored for Java programs, allowing developers to write preconditions and postconditions as contracts. Learning JML helps understand how the paper specifies valid inputs and expected outcomes for the tested Java programs.

*How the paper uses it:* JML is used in the paper to write the formal pre- and postconditions that guide fuzzing and runtime checks.

▶ ["Contracts For Getting More Programs Less Wrong" by Rob Simmons](https://www.youtube.com/watch?v=lNITrPhl2_A) — Strange Loop Conference · 37:02 · 8y ago

### runtime assertion checking *(prerequisite)*
Runtime assertion checking dynamically verifies that program executions satisfy specified conditions like preconditions and postconditions. This technique detects semantic bugs during execution by checking if the program violates its contracts.

*How the paper uses it:* The paper uses runtime assertion checking to ensure inputs satisfy preconditions and to detect semantic bugs by checking postconditions during fuzzing.

▶ [7. Testing, Debugging, Exceptions, and Assertions](https://www.youtube.com/watch?v=9H6muyZjms0) — MIT OpenCourseWare · 41:33 · 9y ago

### coverage guided fuzzing
Coverage-guided fuzzing is a testing technique that generates inputs to maximize the number of executed branches in a program, improving test thoroughness. Understanding this helps grasp how the paper generates inputs that explore program behavior effectively.

*How the paper uses it:* The paper builds on coverage-guided fuzzing to generate inputs that maximize branch coverage while ensuring validity via runtime checks.

▶ [Coverage-guided Fuzzing - Advanced Security Testing (HD)](https://www.youtube.com/watch?v=bbIenVVcjW0) — GitLab · 3y ago

## Already in your library

- [Coverage Guided, Property Based Testing](https://www.youtube.com/watch?v=RR6c_fiMfJQ) — also for: Testing Learning-Enabled Cyber-Physical Systems with Large-Language Models: A Formal Approach (Aloysius K. Mok)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the JMLKelinci+ paper. The beginner project reproduces the core mechanism of filtering inputs by preconditions using runtime assertion checking in Java, showing the fundamental idea of valid-input fuzzing. The intermediate project implements a simplified coverage-guided fuzzing tool combined with runtime assertion checking on a small Java program with JML specifications, comparing coverage results against a baseline fuzzer. The advanced project extends the approach by integrating runtime assertion checking and coverage-guided fuzzing into a single execution to improve efficiency, addressing a key limitation noted in the paper.

### Beginner — Precondition Filtering with Runtime Assertion Checking
*Effort: a weekend, ~8 hours*

You build a small Java program with JML specifications for preconditions and postconditions on its entry method. You then write a simple driver that uses OpenJML's runtime assertion checker to filter inputs, discarding those that violate preconditions before execution. This reproduces the mechanism of ensuring only valid inputs are passed to the program under test.

**Why it shows you understood the paper:** This project shows you understand the fundamental mechanism by which JMLKelinci+ guarantees valid inputs during fuzzing by dynamically checking preconditions and discarding invalid inputs before execution.

**Grounded in:** Development of JMLKelinci+, a prototype tool combining CGF and RAC for Java programs with JML specifications; A method to guarantee that only valid inputs (satisfying preconditions) are used during fuzzing.

**Tech stack:** Java 17+, OpenJML runtime assertion checker, Maven or Gradle for build

**Data:** A small Java program with manually written JML pre- and postconditions on its entry method, created by you.

**Build it:**

1. Write a simple Java class with an entry method annotated with JML preconditions and postconditions.
2. Set up OpenJML runtime assertion checking to instrument the class for runtime checks.
3. Write a driver program that generates or reads inputs and uses OpenJML to check preconditions before executing the method.
4. Discard inputs that violate preconditions and log valid inputs that pass the check.
5. Run the driver with a set of sample inputs and verify that only valid inputs are executed.

**Ships as:** A GitHub repository with the Java program, JML specifications, the driver code, and a README explaining how the precondition filtering works and demonstrating input filtering.

**Stretch goal:** Add postcondition checking after execution and report semantic bugs detected by violations of postconditions.

### Intermediate — Coverage-Guided Fuzzing with Runtime Assertion Checking
*Effort: 2 weekends, ~20 hours*

You implement a simplified coverage-guided fuzzer for a small Java program with JML specifications, integrating OpenJML's runtime assertion checker to filter inputs by preconditions and check postconditions at runtime. You compare branch coverage and bug detection results against a baseline fuzzer that does not use RAC filtering.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core method of JMLKelinci+—combining coverage-guided fuzzing with runtime assertion checking to generate only valid inputs and detect semantic bugs beyond crashes—and to empirically evaluate its effectiveness.

**Grounded in:** Demonstration that combining CGF with RAC can detect semantic bugs that do not cause crashes; Empirical evidence that JMLKelinci+ achieves 100% branch coverage with valid inputs in nontrivial programs, outperforming standard fuzzers.

**Tech stack:** Java 17+, OpenJML runtime assertion checker, JQF or a simple coverage-guided fuzzer framework, Maven or Gradle

**Data:** A small Java program with JML pre- and postconditions, either created by you or adapted from publicly available JML examples (e.g., from Java-JML repository).

**Build it:**

1. Select or write a small Java program with JML specifications on the entry method.
2. Set up OpenJML runtime assertion checking to instrument the program for pre- and postcondition checks.
3. Implement or adapt a coverage-guided fuzzer (e.g., based on JQF or a minimal custom fuzzer) that generates inputs and collects coverage feedback.
4. Integrate the fuzzer with RAC to discard inputs violating preconditions before execution and to detect postcondition violations as semantic bugs.
5. Run experiments comparing coverage and bug detection against a baseline fuzzer without RAC filtering.
6. Document results and analysis in a README.

**Verified links from the paper:**

- <https://github.com/Amirfarhad-Nilizadeh/Java-JML> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository containing the instrumented Java program, the fuzzer code, scripts to run experiments, and a README reporting coverage and bug detection comparisons.

**Stretch goal:** Add automated input generation strategies guided by RAC feedback to improve coverage faster.

### Advanced — Single-Execution Integration of RAC and CGF for Efficient Semantic Bug Detection
*Effort: 3+ weeks*

You develop an enhanced fuzzing framework that integrates runtime assertion checking and coverage-guided fuzzing into a single execution per input, addressing the paper's limitation of running the program twice per input. This involves modifying the instrumentation or driver to perform precondition checks, execute the program, and check postconditions in one run, improving efficiency while maintaining valid-input guarantees and semantic bug detection.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep understanding of the interplay between RAC and CGF, and the engineering challenges in optimizing their integration for practical testing.

**Grounded in:** Integration of RAC and CGF into a single execution to avoid running the program twice is left for future work; The approach assumes deterministic programs and currently requires running the program twice per input, which may affect efficiency.

**Tech stack:** Java 17+, OpenJML runtime assertion checker, JQF or custom coverage-guided fuzzer, Maven or Gradle

**Data:** A small to medium Java program with JML specifications, possibly adapted from Java-JML or created by you.

**Build it:**

1. Study the current JMLKelinci+ approach of separate precondition and postcondition checks requiring two executions.
2. Design a single-execution instrumentation or driver that performs precondition checking, program execution, and postcondition checking in one run.
3. Modify or extend the coverage-guided fuzzer to work with the new integrated execution model.
4. Implement the integrated framework and test on Java programs with JML specifications.
5. Measure efficiency improvements (e.g., runtime per input) and verify that valid-input guarantees and semantic bug detection are preserved.
6. Document design decisions, implementation details, and evaluation results.

**Verified links from the paper:**

- <https://github.com/Amirfarhad-Nilizadeh/Java-JML> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the integrated fuzzing framework, example Java programs with JML specs, scripts for evaluation, and a detailed README describing the integration approach and results.

**Stretch goal:** Extend the approach to support nondeterministic programs or programs with side effects, exploring challenges in RAC and CGF integration.
