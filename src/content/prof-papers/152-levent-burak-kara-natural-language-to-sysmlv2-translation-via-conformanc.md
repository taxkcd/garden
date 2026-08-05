---
title: "152 · Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement — Levent Burak Kara"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-levent-burak-kara"
source_hash: "0624089d8289861ab6042ce9b4111b35beae9658517c699f545e3d0bdab19bae"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's core contribution: reliably generating production-conformant SysMLv2 models from natural language using iterative refinement. The beginner project recreates the core generate–check–repair loop on a small scale to grasp the mechanism. The intermediate project reimplements the full conformance-driven iterative refinement method on a subset of the SysMBench benchmark, comparing single-shot and iterative results. The advanced project extends the approach to enforce edits on highlighted error regions, addressing a key limitation and exploring improved repair efficiency.

### Beginner — SysMLv2 Model Generation Loop Prototype
*Effort: a weekend, ~8 hours*

You build a minimal prototype of the generate–check–repair loop using a commercial LLM API (e.g., OpenAI GPT) to generate small SysMLv2 model snippets from simple natural language prompts. You implement a basic grammar-level parser or validator (using a lightweight SysMLv2 grammar checker or a simplified parser) to detect syntax errors and feed back diagnostics to the LLM for iterative repair until the snippet passes grammar checks.

**Why it shows you understood the paper:** This project shows you understand the core iterative refinement mechanism that distinguishes the paper's approach from single-shot generation, including how error diagnostics guide LLM repairs to improve model validity.

**Grounded in:** The conformance-checker-in-the-loop architecture that enforces production conformance as a termination condition for natural-language–to–SysMLv2 translation.

**Tech stack:** Python 3.11, OpenAI GPT API, ANTLR or similar parser generator, Flask or FastAPI (optional for UI)

**Data:** A small set (5-10) of simple natural language prompts describing SysMLv2 package or part definitions, synthesized by you to mimic SysMBench style.

**Build it:**

1. Set up access to a commercial LLM API (e.g., OpenAI GPT).
2. Implement a simple SysMLv2 grammar parser or reuse an existing lightweight grammar checker to validate generated model snippets.
3. Write a script that sends a natural language prompt to the LLM to generate a SysMLv2 snippet.
4. Parse the generated snippet and collect syntax error diagnostics.
5. Feed the diagnostics back to the LLM with a prompt instructing it to repair the snippet.
6. Repeat the generate–check–repair loop until the snippet passes grammar validation or a max iteration count is reached.

**Ships as:** A GitHub repo with code demonstrating the iterative loop, example prompts, generated SysMLv2 snippets at each iteration, and a README explaining the process and results.

**Stretch goal:** Add a simple UI to input prompts and visualize iterative repair cycles interactively.

### Intermediate — Reimplementation of Conformance-Driven Iterative Refinement on SysMBench Subset
*Effort: 1-3 weekends*

You reimplement the paper's generate–check–repair loop method using a commercial LLM backend and integrate the SysIDE production conformance checker (or a publicly available approximation) to evaluate SysMLv2 models generated from a subset of the SysMBench benchmark prompts. You compare single-shot generation acceptance rates with iterative refinement acceptance rates and report convergence statistics similar to the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the core empirical results of the paper, including the gap between grammar validity and production conformance, and the effectiveness of iterative refinement in achieving 100% conformance.

**Grounded in:** The large-scale empirical study quantifying the gap between grammar validity and production conformance across multiple LLM backends and the conformance-checker-in-the-loop architecture achieving 100% acceptance.

**Tech stack:** Python 3.11, OpenAI GPT API or Anthropic Claude API, SysIDE conformance checker (if accessible) or a substitute parser, Docker (optional)

**Data:** A subset of the SysMBench benchmark prompts (e.g., 20-30 prompts) as described in the paper; if SysMBench is not publicly available, simulate prompts based on paper examples.

**Build it:**

1. Obtain or simulate a subset of SysMBench natural language prompts for SysMLv2 model generation.
2. Set up access to a commercial LLM API for model generation.
3. Integrate a production conformance checker (SysIDE if accessible) or approximate with a detailed grammar and semantic validator.
4. Implement the generate–check–repair loop: generate a candidate model, check conformance, parse diagnostics, and prompt the LLM for repairs.
5. Run experiments comparing single-shot generation acceptance rates to iterative refinement acceptance rates.
6. Analyze and report convergence statistics (e.g., acceptance at iteration k=0, k=1, k=2, etc.) and compare with paper results.

**Verified links from the paper:**

- <https://github.com/cmuchancel/NL-to-SysMLv2-via-Conformance-Driven-Refinement> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts to run the iterative refinement pipeline on SysMBench prompts, results comparing single-shot and iterative acceptance, and a detailed README with analysis and discussion.

**Stretch goal:** Add support for multiple LLM backends and compare their convergence behaviors.

### Advanced — Enforcing Targeted Edits in Iterative Refinement to Improve Repair Efficiency
*Effort: a few weeks*

You extend the iterative refinement loop by implementing a mechanism that explicitly enforces or encourages the LLM to edit only the highlighted error regions identified by the conformance checker diagnostics. This addresses the paper's limitation regarding persistent errors caused by ignored or syntactically invalid repairs. You evaluate whether this targeted editing improves convergence speed and reduces persistent errors on the SysMBench subset.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep comprehension of the repair dynamics and the challenges in guiding LLM edits effectively. It also shows initiative in improving the method's practical usability.

**Grounded in:** Persistent errors sometimes occur when the LLM ignores highlighted code regions or attempts repairs that fail syntactically, indicating room for improved repair strategies or model capabilities; future direction to improve repair loop efficiency by enforcing edits to highlighted error regions.

**Tech stack:** Python 3.11, OpenAI GPT API or Anthropic Claude API, SysIDE conformance checker or substitute, Prompt engineering frameworks (e.g., LangChain)

**Data:** Same SysMBench subset as intermediate project; use the paper's released dataset of repair trajectories if accessible for analysis.

**Build it:**

1. Study the conformance checker diagnostics format to identify error regions in generated SysMLv2 models.
2. Design prompt engineering strategies or constrained editing instructions that explicitly direct the LLM to modify only the highlighted error regions.
3. Implement the enhanced generate–check–repair loop incorporating these targeted edit constraints.
4. Run experiments on the SysMBench subset comparing convergence speed, number of iterations, and persistent error rates against the baseline iterative refinement.
5. Analyze results to assess improvements in repair efficiency and discuss limitations.
6. Document the methodology, results, and potential next steps for further improvements.

**Verified links from the paper:**

- <https://github.com/cmuchancel/NL-to-SysMLv2-via-Conformance-Driven-Refinement> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the enhanced iterative refinement pipeline, experimental results showing improved repair efficiency, and a comprehensive README discussing the approach, evaluation, and insights.

**Stretch goal:** Explore fine-tuning or reinforcement learning approaches to further bias the LLM towards effective targeted repairs.
