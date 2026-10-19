---
title: "803 · Linear temporal constraints for sketch-based synthesizers — Armando Solar-Lezama"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-armando-solar-lezama"
source_hash: "27b483f8097bdb5e48b33b716f9277bf31617750782033eb517d79c830c3f36e"
sequence: 803
generator: "outreach-garden: managed"
---

# 803 · Linear temporal constraints for sketch-based synthesizers

## At a glance

- **Professor:** Armando Solar-Lezama
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [Linear temporal constraints for sketch-based synthesizers](https://www.researchsquare.com/article/rs-7068632/latest.pdf)
- **Authors:** Fernando A. Galicia Mendoza, David A. Rosenblueth, Armando Solar-Lezama
- **Year:** 2025

## Paper overview

This paper presents a method to enhance program synthesis by allowing users to specify temporal properties of program executions using Linear Temporal Logic (LTL). It introduces an algorithm called LTC that transforms LTL specifications into constraints compatible with the Sketch synthesizer, enabling synthesis of both terminating and reactive (non-terminating) programs. The approach integrates automata-theoretic techniques and runtime monitoring to verify temporal properties during synthesis, improving scalability and expressiveness.

### Why it matters

**Research problem:** Traditional sketch-based program synthesis supports safety properties but lacks expressiveness for specifying how program executions evolve over time, especially for reactive programs with infinite behaviors. The challenge is to incorporate temporal logic specifications (LTL) into sketch-based synthesis frameworks to handle infinite computations and improve synthesis scalability.

**Why it matters:** Expressing temporal properties is crucial for synthesizing reactive systems that operate indefinitely and must satisfy ongoing correctness properties. Without temporal logic support, synthesizers cannot effectively handle infinite executions or specify complex temporal behaviors, limiting their applicability in real-world reactive system design.

**Key contributions:**

- Definition of LTC algorithm to translate LTL specifications into constraints compatible with sketch-based synthesis.
- Integration of Büchi automata synchronization with program execution to verify temporal properties.
- Use of rank functions and invariants to enforce fairness conditions for infinite executions.
- Transformation of Büchi automata into runtime monitors for terminating programs to handle finite/infinite trace mismatch.
- Proofs of correctness for both infinite and finite computation cases.

## About the professor

**Armando Solar-Lezama** — Computer Science and Artificial Intelligence Laboratory (CSAIL), Massachusetts Inst. of Technology.

Research interests: program synthesis, automated reasoning, learning, neurosymbolic programming

### Research links

- [Faculty/profile page](https://people.csail.mit.edu/asolar)
- [Lab website](http://groups.csail.mit.edu/cap/)
- [GitHub](https://github.com/asolarlez/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Linear Temporal Logic and Automata Theory
**The paper assumes:** linear temporal logic, Büchi automata, automata-theoretic model checking
**Already in this field?** Skip this entirely if you already understand temporal logic and automata theory for program verification and synthesis.

This background focuses on Linear Temporal Logic (LTL) and automata theory, essential for understanding the LTC algorithm's translation of LTL specifications into Büchi automata and their integration into program synthesis. The rigorous course offers a deep, structured university-level treatment of temporal logic concepts, while the fast track provides concise, intuition-driven explainers suitable for quickly grasping the core ideas without extensive time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Temporal Logic: Foundations, Systems, and Applications](https://www.youtube.com/playlist?list=PLRF9JrFppTcstFHOqLWtcPsVnxYB0XhLr) — ThoughtLab · 82 videos · 6.9h across the first 60 episodes

**Watch only this:** Episodes 1-5 (Linear Temporal Logic: Rules for a Perfect Future through Temporal Logic: Proving Software Correctness Through Time), about 30 minutes — covers fundamental LTL concepts, rules, and applications relevant to the paper's approach.

*Why it unblocks this paper:* This ThoughtLab series offers clear, short explainer videos on temporal logic foundations and applications, including LTL and automata theory, providing an accessible overview that complements the rigorous course with practical insights.

*If you want all of it:* First 60 episodes, about 6.9 hours — extensive coverage of temporal logic variants, model checking, and related topics.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Linear temporal constraints for sketch-based synthesizers," start by building foundational knowledge on Büchi automata theory, rank functions and invariants in synthesis, and reactive program synthesis, as these underpin the paper's approach to handling infinite executions and fairness conditions. Next, study the Sketch program synthesis framework, which the LTC algorithm extends. Finally, focus on the core concept of Linear Temporal Logic (LTL) synthesis, emphasizing the integration of LTL into sketch-based synthesis, ideally through the authors' own talk or closely related advanced research presentations.

### Büchi automata theory *(prerequisite)*
Büchi automata provide the automata-theoretic foundation for representing and reasoning about infinite executions, which is essential for encoding LTL specifications in synthesis. Understanding their properties, such as acceptance conditions and operations like determinization and complementation, is crucial for grasping how the LTC algorithm integrates Büchi automata into program sketches.

*How the paper uses it:* The LTC algorithm translates LTL formulae into Büchi automata and uses these automata to enforce temporal constraints during synthesis.

▶ [Simple properties of Bchi automata](https://www.youtube.com/watch?v=WBmwuVTVl5E) — Model Checking · 11y ago

### Rank functions and invariants in synthesis *(prerequisite)*
Rank functions and invariants are key techniques to enforce fairness and termination conditions in program synthesis, especially for reactive systems with infinite behaviors. They help ensure that Büchi automata acceptance conditions are met infinitely often, which is a central challenge addressed by LTC.

*How the paper uses it:* LTC synthesizes invariants and rank functions to guarantee fairness conditions for infinite executions in reactive programs.

▶ [Introduction to Program Synthesis - Course Overview](https://www.youtube.com/watch?v=wvlZDdAg5PI) — Mahnoor Malik · 4mo ago

### Reactive program synthesis *(prerequisite)*
Reactive synthesis focuses on generating programs that interact indefinitely with their environment, requiring reasoning about infinite executions and ongoing correctness. Understanding reactive synthesis frameworks and challenges provides context for LTC's contributions in synthesizing non-terminating programs with temporal constraints.

*How the paper uses it:* LTC enables synthesis of reactive programs with infinite executions, such as round-robin arbiters and lift controllers.

▶ [Reactive Synthesis](https://www.youtube.com/watch?v=CyNj9klsqF0) — Simons Institute for the Theory of Computing · Streamed 5y ago

### Sketch program synthesis *(prerequisite)*
Sketch is a program synthesis framework that allows users to write partial programs with holes and constraints, which the synthesizer fills. LTC extends Sketch by incorporating temporal logic constraints, so understanding Sketch's synthesis model and constraint solving is foundational.

*How the paper uses it:* The LTC algorithm is implemented within the Sketch synthesizer, extending its capabilities to handle LTL specifications.

▶ [Program Sketching with Live Bidirectional Evaluation (ICFP 2020)](https://www.youtube.com/watch?v=WQ1qkrbzLfM) — ACM SIGPLAN · 5y ago

### Linear Temporal Logic synthesis
Linear Temporal Logic (LTL) is the formalism used to specify temporal properties over program executions, especially for reactive systems. Studying LTL synthesis techniques reveals how temporal specifications can be translated into automata and integrated into synthesis frameworks, directly relating to LTC's approach.

*How the paper uses it:* LTC translates LTL specifications into constraints compatible with sketch-based synthesis, enabling temporal property enforcement during program synthesis.

▶ [Back to the Future: A Fresh Look at Linear Temporal Logic](https://www.youtube.com/watch?v=iZI4wLxemeY) — Simons Institute for the Theory of Computing · Streamed 5y ago

### Paper authors talk
The authors' own talk provides the most direct and detailed explanation of their LTC algorithm, its theoretical foundations, implementation details, and empirical results. This talk is invaluable for understanding the nuances and motivations behind their approach.

*How the paper uses it:* This talk is the authors' presentation of their work on integrating linear temporal constraints into sketch-based synthesizers.

▶ [https://www.youtube.com › watch?v=Hw-PHdgFCEQ](https://www.youtube.com/watch?v=Hw-PHdgFCEQ) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's approach to integrating Linear Temporal Logic (LTL) into sketch-based program synthesis. Starting with the basics of program synthesis and invariants, it then covers Büchi automata theory and reactive program synthesis to build intuition about infinite behaviors and fairness conditions. Finally, it presents Linear Temporal Logic synthesis to grasp how temporal properties are specified and verified, culminating in understanding the paper's core contribution of combining these ideas within the Sketch synthesizer.

### Sketch program synthesis *(prerequisite)*
Program synthesis is about automatically generating programs from specifications. Sketch is a popular framework that lets users write partial programs (sketches) with holes and constraints, which the synthesizer fills in to produce complete programs. Understanding Sketch helps grasp how the paper extends synthesis with temporal constraints.

*How the paper uses it:* The paper implements LTC within the Sketch synthesizer to handle temporal logic constraints during synthesis.

▶ [Program Sketching with Live Bidirectional Evaluation (ICFP 2020)](https://www.youtube.com/watch?v=WQ1qkrbzLfM) — ACM SIGPLAN · 5y ago

### Rank functions and invariants in synthesis *(prerequisite)*
Invariants are properties that remain true throughout program execution, and rank functions help prove termination or fairness by showing progress. These concepts are crucial for ensuring correctness and liveness in synthesized programs, especially for infinite executions.

*How the paper uses it:* The paper uses invariants and rank functions to enforce fairness conditions and termination in the synthesis of reactive and terminating programs.

▶ [What is a Loop Invariant?](https://www.youtube.com/watch?v=IZ7fyyAsOZc) — Juan Puebla · 4y ago

### Büchi automata theory *(prerequisite)*
Büchi automata are mathematical models used to represent infinite behaviors, especially for verifying temporal properties over infinite executions. They are central to translating LTL specifications into automata that can be integrated with program executions.

*How the paper uses it:* The LTC algorithm translates LTL formulae into Büchi automata to synchronize with program execution and verify temporal properties.

▶ [Lecture 9 Büchi automata 1](https://www.youtube.com/watch?v=nLedamLyBLg) — HT Z (UnlimitedPawar) · 5y ago

### Reactive program synthesis *(prerequisite)*
Reactive synthesis focuses on generating programs that run indefinitely, interacting continuously with their environment while satisfying ongoing correctness properties. This contrasts with terminating program synthesis and requires handling infinite executions and fairness.

*How the paper uses it:* The paper synthesizes reactive (non-terminating) programs by integrating Büchi automata and fairness conditions using LTC.

▶ [Reactive Synthesis](https://www.youtube.com/watch?v=CyNj9klsqF0) — Simons Institute for the Theory of Computing · Streamed 5y ago

### Linear Temporal Logic synthesis
Linear Temporal Logic (LTL) is a formal language for specifying how program behaviors evolve over time. Synthesizing programs from LTL specifications involves ensuring that generated programs satisfy these temporal properties, often by translating LTL into automata.

*How the paper uses it:* The core of the paper is the LTC algorithm that translates LTL specifications into constraints compatible with sketch-based synthesis.

▶ [How to Visualize Linear Temporal Logic](https://www.youtube.com/watch?v=xuAwQ6NrjIU) — Islam El-Maddah · 6y ago

## Already in your library

- [Linear Temporal Logic](https://www.youtube.com/watch?v=5EO2yUwdODM) — also for: ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees (Jyotirmoy Deshmukh)
- [Introduction to LTL. Part 1: Basic Intuition](https://www.youtube.com/watch?v=a9fo3dUly8A) — also for: Formalizing MLTL Formula Progression in Isabelle/HOL (Katherine Kosaian)
- [Introduction to LTL](https://www.youtube.com/watch?v=W5Q0DL9plns) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [Introduction to Program Synthesis - Lecture 1](https://www.youtube.com/watch?v=8dZ_XDXCoOk) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the LTC algorithm for integrating Linear Temporal Logic (LTL) into sketch-based program synthesis. The beginner project reproduces a core runtime monitoring mechanism for LTL properties in terminating programs, using your existing programming skills. The intermediate project implements a simplified version of the LTC algorithm to synthesize a reactive program with temporal constraints, comparing synthesis time against a baseline. The advanced project extends LTC by automating rank function sketches to reduce user burden, addressing a key limitation noted in the paper.

### Beginner — Runtime Monitor for LTL Properties in Terminating Programs
*Effort: a weekend, ~8 hours*

You build a small runtime monitor that simulates how the LTC algorithm transforms Büchi automata into runtime monitors for verifying LTL properties on terminating program executions. The project includes a simple program sketch and an LTL property, then checks if the property holds by simulating infinite repetition of the last state.

**Why it shows you understood the paper:** This project shows you understand the paper's mechanism for handling finite/infinite trace mismatches by transforming Büchi automata into runtime monitors, a key contribution for terminating programs.

**Grounded in:** Transformation of Büchi automata into runtime monitors for terminating programs to handle finite/infinite trace mismatch.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** No external data required; you simulate simple program states and LTL properties.

**Build it:**

1. Implement a simple representation of a Büchi automaton for a basic LTL property (e.g., eventually p).
2. Write a small program sketch that produces a finite trace of states.
3. Implement the runtime monitor that simulates infinite repetition of the last state to check LTL satisfaction.
4. Run the monitor on the program trace and output whether the LTL property holds.
5. Document the approach and relate it to the paper's runtime monitor transformation.

**Ships as:** A Python notebook or script demonstrating runtime monitoring of LTL properties on finite program traces, with clear README explaining the connection to the paper.

**Stretch goal:** Add support for more complex LTL properties and visualize the Büchi automaton states during monitoring.

### Intermediate — Implementing LTC for Reactive Program Synthesis
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the LTC algorithm that translates a given LTL formula into a Büchi automaton and integrates it into a sketch-based synthesis framework to synthesize a small reactive program (e.g., a round-robin arbiter). You compare synthesis time and success against a baseline that does not use LTC constraints.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core LTC method—translating LTL to Büchi automata and integrating fairness conditions via rank functions and invariants—and its impact on synthesis scalability and expressiveness.

**Grounded in:** Definition of LTC algorithm to translate LTL specifications into constraints compatible with sketch-based synthesis; empirical evaluation demonstrating synthesis of complex reactive programs such as round-robin arbiter.

**Tech stack:** Python 3.11, Z3 SMT solver, Sketch synthesizer (installed separately)

**Data:** No external dataset; you use small reactive program specifications such as a round-robin arbiter with variable input sizes, as described in the paper.

**Build it:**

1. Study the LTC algorithm's description for reactive programs and Büchi automata translation.
2. Implement or reuse a Büchi automaton construction for a simple LTL formula (e.g., fairness constraints).
3. Encode the Büchi automaton synchronization constraints, rank functions, and invariants as SMT constraints.
4. Integrate these constraints into a Sketch program sketch representing a reactive system (e.g., round-robin arbiter).
5. Run synthesis with and without LTC constraints, measuring synthesis time and success.
6. Document results and compare with the baseline, relating findings to the paper's empirical evaluation.

**Verified links from the paper:**

- <https://github.com/SYNTCOMP/benchmarks> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code implementing LTC constraints for a reactive program sketch, synthesis scripts, and a report comparing synthesis performance.

**Stretch goal:** Extend the implementation to handle multiple Büchi automata simultaneously, as suggested in future directions.

### Advanced — Automating Rank Function Sketches for LTC Synthesis
*Effort: 3+ weeks*

You develop an extension to the LTC synthesis approach that attempts to automate the generation of rank function sketches and invariants, reducing the user burden highlighted as a limitation in the paper. This involves designing heuristics or learning-based methods to propose candidate rank functions during synthesis and evaluating their effectiveness on benchmark reactive programs.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep comprehension of LTC's dependency on user-provided rank functions and advancing the method toward greater automation and usability.

**Grounded in:** Limitations: synthesis of invariants and rank functions is undecidable; user assistance required; future directions: automating synthesis of rank functions and invariants to reduce user burden.

**Tech stack:** Python 3.11, Z3 SMT solver, Sketch synthesizer (installed separately), Machine learning libraries (e.g., scikit-learn) for heuristic generation

**Data:** Use benchmark reactive synthesis problems from the SYNTCOMP repository as test cases.

**Build it:**

1. Review the role of rank functions and invariants in LTC and why they are user-provided.
2. Design heuristics or simple ML models to generate candidate rank functions based on program sketches and Büchi automata.
3. Implement integration of automated rank function proposals into the LTC synthesis workflow.
4. Evaluate the approach on benchmark reactive programs (e.g., round-robin arbiter, lift controller) from SYNTCOMP.
5. Measure synthesis success rate, time, and compare against manual rank function sketches.
6. Document methodology, results, limitations, and potential improvements.

**Verified links from the paper:**

- <https://github.com/SYNTCOMP/benchmarks> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A research prototype repository demonstrating automated rank function sketch generation for LTC synthesis, with evaluation results and detailed README.

**Stretch goal:** Incorporate SMT solver optimizations or neural-guided synthesis to improve rank function proposal quality.
