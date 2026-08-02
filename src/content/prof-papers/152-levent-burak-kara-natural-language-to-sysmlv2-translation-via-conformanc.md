---
title: "152 · Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement — Levent Burak Kara"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-levent-burak-kara"
source_hash: "87b763a4de72c784d5ba831755a66c3df57d8a8118905498715eacc1dc9a0836"
sequence: 152
generator: "outreach-garden: managed"
---

# 152 · Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement

## At a glance

- **Professor:** Levent Burak Kara
- **Institution:** Carnegie Mellon University
- **Paper:** [Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement](https://arxiv.org/pdf/2607.14162)
- **Authors:** Chance LaVoie, Eladio Andujar Lugo, Taylan G. Topcu, Levent Burak Kara
- **Year:** 2026

## Paper overview

This paper presents a method to reliably convert natural-language system descriptions into formal SysMLv2 models that are fully accepted by industrial modeling tools. It uses a loop where a language model generates a candidate model, a production conformance checker evaluates it, and the model is iteratively refined based on error diagnostics until it passes all checks. This approach ensures generated models are usable in real engineering workflows, overcoming limitations of single-shot generation that often produce unusable models.

### Why it matters

**Research problem:** Current large language models (LLMs) can generate SysMLv2 models from natural language but often fail to produce models that pass production-level conformance checks required by industrial modeling environments. Grammar-level parsing is insufficient to guarantee operational usability, limiting direct integration of LLM-generated models into Model-Based Systems Engineering (MBSE) workflows.

**Why it matters:** MBSE relies on formal, production-conformant models for system design, simulation, and verification. Without reliable generation of such models from natural language, engineers face increased effort and risk in adopting MBSE. Automating this process with guaranteed production conformance can accelerate engineering workflows, improve design quality, and support digital engineering strategies such as those in the Department of Defense.

**Key contributions:**

- A conformance-checker-in-the-loop architecture that enforces production conformance as a termination condition for natural-language–to–SysMLv2 translation.
- A large-scale empirical study quantifying the gap between grammar validity and production conformance across multiple LLM backends.
- Release of a trajectory-level dataset containing all intermediate repair iterations and diagnostics for 604 prompt–model cases, enabling future research on repair dynamics and reliability.

## About the professor

**Levent Burak Kara** — Mechanical Engineering Department, Carnegie Mellon University.

Research interests: AI and machine learning approaches for engineering design, simulation, and manufacturing

### Research links

- [Faculty/profile page](http://vdel.me.cmu.edu)
- [Resolved homepage](https://levburkara.github.io/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on natural-language to SysMLv2 translation via conformance-driven iterative refinement, start by building foundational knowledge on Model-Based Systems Engineering (MBSE) and the SysMLv2 modeling language, as these provide the context and formalism for the generated models. Next, explore large language models (LLMs) for code generation to grasp the AI techniques used for initial model generation. Finally, study iterative refinement in AI generation to understand the core methodological innovation of the paper. The learning path culminates with the authors' own talk or the closest available substitute to gain direct insight into their approach and results.

### Model-Based Systems Engineering conformance checking *(prerequisite)*
Understanding production conformance requirements and verification in MBSE is essential to appreciate why generated SysMLv2 models must pass rigorous checks to be usable in industrial workflows. This section covers design verification, validation, and model-based testing approaches relevant to ensuring model correctness and usability.

*How the paper uses it:* The paper hinges on enforcing production conformance in SysMLv2 models to guarantee industrial usability.

▶ [9. Verification and Validation](https://www.youtube.com/watch?v=-63JXElqPaY) — MIT OpenCourseWare · 1:37:49

### SysMLv2 modeling language *(prerequisite)*
SysMLv2 is the formal modeling language targeted by the paper for generation and conformance checking. This section introduces SysMLv2's syntax, semantics, and objectives, providing the necessary background to understand the structure and constraints of the generated models.

*How the paper uses it:* The paper focuses on generating SysMLv2 models that conform to production standards.

▶ [SysML v2 Introduction](https://www.youtube.com/watch?v=380_fWyAr_o) — Object Management Group · 44:02

### Large language models for code generation *(prerequisite)*
Large language models have revolutionized code generation, enabling the translation of natural language into formal code or models. This section explores the architecture, capabilities, and challenges of LLMs in code generation, which underpin the initial candidate model generation in the paper.

*How the paper uses it:* The paper uses commercial LLMs to generate candidate SysMLv2 models from natural language prompts.

▶ [From Code Generation Towards Software Engineering ...](https://www.youtube.com/watch?v=obivLubYSnc) — Paul G. Allen School · 57:44

### Iterative refinement in AI generation
Iterative refinement techniques involve generating an output, checking it for errors, and then repairing it in a loop until a satisfactory result is achieved. This section delves into self-refinement and self-correction methods in AI, directly relating to the paper's generate–check–repair loop that ensures production conformance.

*How the paper uses it:* The paper's core contribution is a conformance-checker-in-the-loop architecture that iteratively refines generated models.

▶ [CMU LLM Inference (8): Self-Refine and Self-Correction ...](https://www.youtube.com/watch?v=uaxf9yssDy4) — Graham Neubig · 41:34

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of Model-Based Systems Engineering (MBSE) and why production conformance is critical for industrial modeling workflows. Next, get familiar with the SysMLv2 modeling language, which is the formal language targeted by the paper. Then, explore how large language models (LLMs) can generate code and models from natural language, setting the stage for the paper's AI-driven approach. Finally, grasp the concept of iterative refinement in AI generation, which is the core method used to reliably produce production-conformant SysMLv2 models from natural language descriptions.

### SysMLv2 modeling language *(prerequisite)*
SysMLv2 is the latest version of the Systems Modeling Language, designed to formally represent complex system architectures and behaviors. Learning its key elements and objectives helps you understand the target formalism for the paper's natural language to model translation.

*How the paper uses it:* The paper focuses on generating SysMLv2 models that pass production conformance checks.

▶ [SysML V2 [5min Overview]](https://www.youtube.com/watch?v=yi_XnxI3riw) — CameoMagic · 5:36

### Large language models for code generation *(prerequisite)*
Large language models (LLMs) can generate code and structured models from natural language prompts by learning patterns in data. Understanding how LLMs work for code generation clarifies the paper's use of commercial LLMs to produce candidate SysMLv2 models from system descriptions.

*How the paper uses it:* The paper uses commercial LLMs to generate initial SysMLv2 models from natural language prompts.

▶ [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — IBM Technology · 5:34

### Iterative refinement in AI generation
Iterative refinement involves generating an output, checking it for errors, and then repairing it repeatedly until it meets quality criteria. This approach improves reliability over single-shot generation by using feedback loops to guide corrections.

*How the paper uses it:* The paper's core method is a generate–check–repair loop that iteratively refines SysMLv2 models until they pass all production conformance checks.

▶ [CMU LLM Inference (8): Self-Refine and Self-Correction ...](https://www.youtube.com/watch?v=uaxf9yssDy4) — Graham Neubig · 41:34

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
