---
title: "715 · Fuzzing with Agents? Generators Are All You Need — Rohan Padhye"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rohan-padhye"
source_hash: "be2f88beeacf1cb3fa2d5d945878f0f9a32ad6ca38f0ed39577ed1a98e2a7a26"
sequence: 715
generator: "outreach-garden: managed"
---

# 715 · Fuzzing with Agents? Generators Are All You Need

## At a glance

- **Professor:** Rohan Padhye
- **Institution:** Carnegie Mellon University
- **Paper:** [Fuzzing with Agents? Generators Are All You Need](https://arxiv.org/pdf/2604.01442)
- **Authors:** Vasudev Vikram, Rohan Padhye
- **Year:** 2026

## Paper overview

This paper explores using AI coding agents to automatically create input generators for fuzz testing software. Traditional fuzzing mutates inputs to find bugs, but often struggles with complex input structures. The authors propose Gentoo, a system where an AI agent synthesizes customized input generators that encode structural and semantic constraints, reducing the need for coverage-guided mutation. Evaluations on real-world Java libraries show that agent-generated generators often outperform human-written ones in code coverage and make mutation-based fuzzing largely unnecessary.

### Why it matters

**Research problem:** How to automatically synthesize target-specific input generators for fuzz testing that encode deep structural and semantic constraints, thereby improving coverage and reducing reliance on coverage-guided mutation and fuzzing.

**Why it matters:** Fuzz testing is a key technique for finding software bugs, but generating inputs that reach deep program logic is challenging. Manual creation of complex input generators is labor-intensive and tightly coupled to specific targets. Automating generator synthesis with AI agents could scale and improve fuzz testing effectiveness.

**Key contributions:**

- Demonstration that AI coding agents can synthesize input generators that outperform human-written ones in branch coverage on multiple real-world benchmarks.
- Introduction of predicate-level feedback combining static control-flow dominator analysis and dynamic coverage to guide generator refinement.
- Empirical evidence that agent-synthesized generators largely eliminate the need for coverage-guided mutation-based fuzzing.
- Comparison of static dominator analysis and LLM predicate identification, showing complementary strengths.
- Release of Gentoo source code, synthesized generators, and evaluation scripts.

## About the professor

**Rohan Padhye** — Associate Professor, Software and Societal Systems Department (S3D), Carnegie Mellon University.

Research interests: techniques for automatically discovering software bugs

### Research links

- [Faculty/profile page](https://rohan.padhye.org)
- [Lab website](https://pastalab.org/)
- [Google Scholar](https://scholar.google.co.in/citations?user=XI03UxYAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/129/1434.html)
- [GitHub](https://github.com/rohanpadhye)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Fuzz Testing and Input Generation
**The paper assumes:** software testing, fuzz testing, input generation techniques, coverage-guided fuzzing
**Already in this field?** Skip this entirely if you already understand fuzz testing fundamentals, input generation strategies, and coverage-guided mutation.

This background covers the fundamentals and advanced concepts of fuzz testing and input generation, essential for understanding the motivation and technical contributions of the paper on AI agent-based synthesis of input generators. The rigorous course option provides a structured, in-depth tutorial series on fuzz testing techniques, while the fast track offers a concise, practical introduction to fuzzing concepts and workflows. Choose the course for a thorough foundation and the fast track for a quick, focused overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Generative AI for Testers](https://www.youtube.com/playlist?list=PLL34mf651faOuk6n5zr-XvTPjpuz8uoQq) — Software Testing Mentor · 24 videos · 0.4h across 24 episodes

**Watch only this:** Episodes 1-6, about 1 hour — covering AI basics, generative AI, LLMs, and prompt crafting, providing a quick but solid introduction to AI techniques relevant to the paper's agent-based approach.

*Why it unblocks this paper:* This short-form series by Software Testing Mentor offers concise, clear explainers on generative AI and its application in software testing, including test case generation and AI prompting techniques, which align with the paper's use of AI agents for automated input generator synthesis.

*If you want all of it:* All 24 episodes, about 4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Fuzzing with Agents? Generators Are All You Need," start with foundational knowledge of fuzz testing techniques and static program analysis, as these underpin the paper's approach. Then, explore the core concept of automated input generator synthesis, which is central to how the AI agents create customized fuzzing inputs. Finally, conclude with the authors' own talk or the closest available advanced talk on AI agents and fuzzing to gain direct insights into their novel system Gentoo and its evaluation.

### Fuzz testing techniques *(prerequisite)*
This section covers foundational knowledge of fuzzing methods and challenges, essential to appreciate the motivation and improvements proposed by the paper. Understanding traditional fuzzing approaches and their limitations will clarify why agent-synthesized generators are impactful.

*How the paper uses it:* The paper improves fuzz testing by automating input generator synthesis to overcome limitations of mutation-based fuzzing.

▶ [Thorsten Holz - Fuzz Testing and Beyond](https://www.youtube.com/watch?v=f5uhWesvjZ8) — ViSP · 1:09:01 · 5y ago

### Static program analysis *(prerequisite)*
Static program analysis, particularly dominator analysis, is used in the paper to provide predicate-level feedback guiding the AI agent's generator refinement. This section introduces static analysis techniques that help understand how the agent identifies hard-to-satisfy program predicates.

*How the paper uses it:* The paper uses static dominator analysis as one predicate feedback mechanism to guide generator synthesis.

▶ [Lecture "Introduction (Part 1, Motivation)" of "Program Analysis"](https://www.youtube.com/watch?v=PS-4yD5WgCQ) — Michael Pradel · 24:27 · 5y ago

### Automated input generator synthesis
This section focuses on the core method enabling AI agents to create customized fuzzing inputs by synthesizing input generators. Understanding program synthesis techniques and their automation is crucial to grasp how Gentoo autonomously builds and refines generators.

*How the paper uses it:* Gentoo's AI agent synthesizes input generators automatically, which is the central innovation of the paper.

▶ [Automated Program Synthesis, lecture by Elaine Kant](https://www.youtube.com/watch?v=pLSAN46f_BE) — Computer History Museum · 52:56 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on AI agent-driven fuzzing input generator synthesis, start by learning the fundamentals of fuzz testing techniques, which provide the context and motivation for the work. Next, grasp static program analysis concepts, especially dominator analysis, as these underpin the predicate feedback guiding the AI agent. Finally, explore automated input generator synthesis to see how AI agents create complex, target-specific inputs, culminating in the core idea of the paper.

### Fuzz testing techniques *(prerequisite)*
Fuzz testing is a software testing method that feeds random or semi-random inputs to programs to find bugs and vulnerabilities. Understanding fuzzing basics and its challenges helps appreciate why generating structured inputs is important and how traditional mutation-based fuzzing works.

*How the paper uses it:* The paper aims to improve fuzz testing by automating the synthesis of input generators that produce structurally valid inputs, reducing reliance on mutation.

▶ [Fuzzing Programs to Find Bugs - Computerphile](https://www.youtube.com/watch?v=kaD54VXxGrI) — Computerphile · 19:14 · 4mo ago

### Static program analysis *(prerequisite)*
Static program analysis involves examining code without running it to gather information such as control flow and data dependencies. Dominator analysis is a static technique that identifies key program predicates that must be satisfied to reach certain code regions, which can guide input generation.

*How the paper uses it:* The paper uses static dominator analysis to provide predicate-level feedback to the AI agent for refining input generators.

▶ [Lecture "Introduction (Part 1, Motivation)" of "Program Analysis"](https://www.youtube.com/watch?v=PS-4yD5WgCQ) — Michael Pradel · 24:27 · 5y ago

## Already in your library

- [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)
- [Introduction to Program Synthesis - Lecture 1](https://www.youtube.com/watch?v=8dZ_XDXCoOk) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Fuzzing (fuzz testing) 101: Lessons from cyber security expert Dr. David Brumley](https://www.youtube.com/watch?v=17ebHty54T4) — also for: A Study of the Reliability of Agentic AI-Generated Programs (Barton P. Miller)
- [Static Program Analysis for Security | Cambridge IB Tech Talks](https://www.youtube.com/watch?v=GmrvgAcYcWo) — also for: SkillVetBench: LLM-as-Judge for Multi-Dimensional Security Risk Evaluation in Open-Source LLM Agent Skills (Sajedul Rahim Talukder)
- [The Ultimate SAST Guide: What is Static Application Security Testing? Code Security with Mackenzie](https://www.youtube.com/watch?v=wqErjqFgEa0) — also for: SkillVetBench: LLM-as-Judge for Multi-Dimensional Security Risk Evaluation in Open-Source LLM Agent Skills (Sajedul Rahim Talukder)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 2 - Large Language Models](https://www.youtube.com/watch?v=GaIeu3npx04) — also for: “The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims (Yu Fu)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Everything You Need To Know About Large Language Models (LLMs)](https://www.youtube.com/watch?v=osKyvYJ3PRM) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the Gentoo system and its AI agent-based input generator synthesis for fuzz testing. The beginner project recreates a simplified input generator and coverage comparison to grasp the core fuzzing concepts. The intermediate project implements a predicate-feedback guided generator synthesis loop on a small Java library, reproducing key metrics from the paper. The advanced project extends the approach to improve agent discovery of high-level library APIs, addressing a stated limitation and exploring future directions.

### Beginner — Simple Input Generator and Coverage Comparison
*Effort: a weekend, ~8 hours*

You build a basic input generator for a small Java program with structured inputs and compare its branch coverage against a random mutational fuzzer baseline. This reproduces the paper's core idea that structured generators can improve coverage over mutation-based fuzzing.

**Why it shows you understood the paper:** This project shows you understand the difference between mutation-based fuzzing and generator-based fuzzing, and how input structure affects coverage, a key motivation in the paper.

**Grounded in:** Demonstration that AI coding agents can synthesize input generators that outperform human-written ones in branch coverage on multiple real-world benchmarks.

**Tech stack:** Java 17, JQF fuzzing framework, Python 3.11, coverage.py or JaCoCo for coverage measurement

**Data:** Use a small open-source Java library or a simple Java program with structured inputs (e.g., JSON or XML parser) as a substitute for the paper's benchmarks.

**Build it:**

1. Select a small Java program with structured inputs (e.g., JSON parser).
2. Write a simple input generator that produces valid structured inputs.
3. Run JQF fuzzing with the generator and separately with random mutation-based fuzzing.
4. Collect and compare branch coverage metrics using JaCoCo or similar.
5. Document the coverage differences and explain the impact of structured input generation.

**Verified links from the paper:**

- <https://github.com/pholser/junit-quickcheck> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/wala/wala> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the Java program, input generator code, fuzzing scripts, coverage reports, and a README explaining the coverage comparison.

**Stretch goal:** Add a simple predicate feedback loop that refines the generator based on coverage gaps.

### Intermediate — Predicate-Guided Input Generator Synthesis Loop
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of Gentoo's AI agent loop that synthesizes and refines input generators for a small Java library using predicate-level feedback from static analysis. You compare coverage improvements over iterations and against a baseline human-written generator.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core method: using predicate feedback to guide generator refinement and improve coverage beyond mutation-based fuzzing.

**Grounded in:** Introduction of predicate-level feedback combining static control-flow dominator analysis and dynamic coverage to guide generator refinement.

**Tech stack:** Java 17, JQF fuzzing framework, Python 3.11, WALA static analysis framework, Simple LLM API or heuristic predicate extraction

**Data:** Use a small open-source Java library with available source code (e.g., Apache Commons Lang) as a stand-in for the paper's benchmarks.

**Build it:**

1. Set up JQF fuzzing on the chosen Java library with an initial human-written input generator.
2. Use WALA to perform static dominator analysis and extract hard-to-satisfy predicates.
3. Implement a feedback loop that analyzes coverage and predicates to identify generator weaknesses.
4. Iteratively refine the input generator code based on predicate feedback.
5. Measure branch coverage improvements over iterations and compare to baseline.
6. Document the synthesis loop, predicate feedback mechanism, and coverage results.

**Verified links from the paper:**

- <https://github.com/wala/wala> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/pholser/junit-quickcheck> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the Java library fuzzing setup, predicate feedback scripts, generator refinement code, coverage reports, and a README describing the synthesis loop and results.

**Stretch goal:** Incorporate a simple LLM-based predicate identification module to compare with static analysis feedback.

### Advanced — Enhancing Agent Discovery of High-Level Library APIs
*Effort: 3+ weeks*

You extend the agent-based input generator synthesis approach to improve discovery and use of high-level library APIs during generator construction. This addresses the paper's limitation where the agent fails to leverage APIs (e.g., BCEL benchmark). You evaluate the impact on coverage and generator quality.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of agent strategies and the challenges in automating generator synthesis for complex APIs.

**Grounded in:** Agent fails to discover and leverage high-level library APIs in some cases (e.g., BCEL benchmark), resulting in lower coverage than human generators.

**Tech stack:** Java 17, JQF fuzzing framework, Python 3.11, WALA static analysis, LLM API (Claude or similar), AI agent orchestration framework (e.g., LangChain or custom)

**Data:** Use the BCEL Java library or a similar complex Java library with high-level APIs as the target for generator synthesis.

**Build it:**

1. Set up fuzzing environment for the BCEL library with initial agent-based generator synthesis baseline.
2. Analyze why the agent fails to discover high-level APIs using static and dynamic analysis.
3. Design and implement enhanced agent strategies to identify and incorporate high-level API calls (e.g., API usage mining, symbolic execution hints, or LLM-guided API exploration).
4. Integrate these strategies into the generator synthesis loop.
5. Evaluate coverage improvements and generator input complexity compared to baseline agent and human-written generators.
6. Document the enhanced agent design, implementation details, evaluation results, and lessons learned.

**Verified links from the paper:**

- <https://github.com/wala/wala> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the enhanced agent synthesis code, fuzzing setup for BCEL, evaluation scripts, coverage and throughput reports, and a detailed README explaining the approach and findings.

**Stretch goal:** Extend the approach to other complex Java libraries or explore multi-agent collaboration for API discovery.

_No authors' own code or datasets are released for this paper; all projects require setting up fuzzing and analysis tools independently and selecting substitute Java libraries for evaluation._
