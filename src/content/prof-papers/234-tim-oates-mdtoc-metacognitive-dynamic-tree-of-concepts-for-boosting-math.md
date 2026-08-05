---
title: "234 · MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models — Tim Oates"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tim-oates"
source_hash: "8114918ca89743882d6ca1d7c5eda63690aa35b161b9fce9a3220ebb84bb6f18"
sequence: 234
generator: "outreach-garden: managed"
---

# 234 · MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models

## At a glance

- **Professor:** Tim Oates
- **Institution:** Univ. of Maryland - Baltimore County
- **Paper:** [MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models](https://arxiv.org/pdf/2512.18841)
- **Authors:** Tung Duong Ta, Tim Oates, Thien Van Luong, Huan Vu, Tien Cuong Nguyen
- **Year:** 2025

## Paper overview

This paper introduces MDToC, a novel prompting technique for large language models (LLMs) that enhances their ability to solve complex mathematical problems. MDToC uses a metacognitive framework involving planning, monitoring, and reviewing phases to structure reasoning as a dynamic tree of concepts and calculations. This approach improves accuracy by verifying intermediate calculations and correcting errors iteratively, outperforming existing methods on several challenging math benchmarks.

### Why it matters

**Research problem:** Large Language Models struggle with accurate multi-step mathematical reasoning, particularly in verifying intermediate calculations, leading to poor performance on complex math tasks despite advances in prompting techniques like Chain-of-Thought (CoT), Tree-of-Thought (ToT), and Graph-of-Thought (GoT).

**Why it matters:** Improving LLMs' mathematical reasoning is critical for advancing AI capabilities in education, research, and applications requiring precise problem-solving. Current methods have limitations in evaluation reliability and generalizability, hindering progress in complex reasoning tasks.

**Key contributions:**

- Introduction of a metacognitive dynamic tree of concepts (MDToC) framework for mathematical problem-solving in LLMs.
- Development of a three-phase prompting technique (planning, monitoring, reviewing) that transforms abstract thoughts into concrete, verifiable calculations.
- Integration of evaluator and fixer LLM components to detect and correct errors in intermediate calculations.
- Demonstration of MDToC's superior performance over existing prompting methods (CoT, ToT, GoT) across multiple benchmarks and LLM architectures.
- Comprehensive analysis of cost, token usage, and hyperparameter sensitivity to balance accuracy and computational expense.

## About the professor

**Tim Oates** — Univ. of Maryland - Baltimore County.

### Research links

- [Faculty/profile page](https://www.csee.umbc.edu/people/tenure-track-faculty/tim-oates/)
- [Identity evidence](https://umbc.edu/academics/faculty/tim-oates/)
- [Professor website](https://orcid.org/0000-0002-8655-747X)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MDToC paper, start by building foundational knowledge on large language models' mathematical reasoning challenges and the baseline Chain-of-Thought prompting techniques that MDToC improves upon. Then, study error detection and correction mechanisms in LLMs, which underpin MDToC's monitoring phase. Finally, focus on the core concept of the metacognitive prompting framework and the dynamic tree of concepts reasoning structure central to MDToC, prioritizing the authors' own talk if available.

### Large language model mathematical reasoning *(prerequisite)*
This section covers the fundamental challenges and recent advances in enabling large language models to perform multi-step mathematical reasoning accurately. Understanding these limitations and methods provides context for why MDToC's improvements are significant.

*How the paper uses it:* MDToC addresses the poor performance of LLMs on complex math tasks due to inaccurate multi-step reasoning.

▶ [Mathematical Reasoning in Language Models by OpenAI](https://www.youtube.com/watch?v=0rfgyQ-wAQM) — BuzzRobot · 51:18

### Chain-of-Thought prompting *(prerequisite)*
Chain-of-Thought (CoT) prompting is a key baseline technique that guides LLMs through step-by-step reasoning. Familiarity with CoT is essential to appreciate how MDToC extends and outperforms it with a metacognitive framework.

*How the paper uses it:* MDToC improves upon existing prompting methods including Chain-of-Thought prompting.

▶ [Lecture 2 - Chain of Thought Reasoning | Reasoning LLMs ...](https://www.youtube.com/watch?v=fZNNqcN_UQM) — Vizuara · 55:15

### Error detection and correction in LLMs *(prerequisite)*
This section explores mechanisms for detecting and correcting errors in LLM outputs, which is crucial for understanding MDToC's monitoring phase that uses evaluator and fixer components to iteratively improve intermediate calculations.

*How the paper uses it:* MDToC's monitoring phase integrates evaluator and fixer LLM components to detect and correct calculation errors.

▶ [[QA] DeepCritic: Deliberate Critique with Large Language ...](https://www.youtube.com/watch?v=lGpSILkob6o) — Arxiv Papers · 8:03

### Metacognitive prompting framework
The metacognitive prompting framework structures reasoning into planning, monitoring, and reviewing phases, enabling dynamic and verifiable problem-solving. This framework is the methodological core of MDToC.

*How the paper uses it:* MDToC employs a three-phase metacognitive prompting framework to enhance mathematical problem-solving.

▶ [Anirudh Goyal | From Word Prediction to Complex Skills: Data ...](https://www.youtube.com/watch?v=OYOuSAAE7QQ) — Harvard CMSA · 58:57

### Dynamic tree of concepts reasoning
Dynamic tree of concepts reasoning organizes multi-step problem-solving into a hierarchical structure, facilitating exploration and verification of diverse mathematical concepts. This structural representation is central to MDToC's approach.

*How the paper uses it:* MDToC constructs a dynamic concept tree to explore and organize mathematical reasoning steps.

▶ [Lecture 3: Problem Solving Using Search](https://www.youtube.com/watch?v=PLvncKDSTIU) — UCLA Automated Reasoning Group · 1:38:29

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts to understand how large language models (LLMs) solve complex mathematical problems, focusing on the challenges of multi-step reasoning and error correction. It starts with the basics of LLM mathematical reasoning and Chain-of-Thought prompting, then covers error detection and correction techniques, followed by metacognitive prompting frameworks, and concludes with the core MDToC method that structures reasoning as a dynamic tree of concepts with iterative verification.

### Large language model mathematical reasoning *(prerequisite)*
Learn how LLMs approach multi-step mathematical problems, the challenges they face in reasoning accurately, and why step-by-step feedback is crucial for improving their performance. This foundation helps understand the motivation behind advanced prompting techniques.

*How the paper uses it:* MDToC addresses the limitations of LLMs in accurate multi-step mathematical reasoning.

▶ [Mathematical Reasoning in Language Models by OpenAI](https://www.youtube.com/watch?v=0rfgyQ-wAQM) — BuzzRobot · 51:18

### Chain-of-Thought prompting *(prerequisite)*
Chain-of-Thought (CoT) prompting guides LLMs to reason step-by-step by generating intermediate reasoning steps, improving their ability to solve complex problems. Understanding CoT is essential as MDToC builds upon and improves this technique.

*How the paper uses it:* MDToC outperforms CoT by structuring reasoning more rigorously and verifying intermediate steps.

▶ [Lecture 2 - Chain of Thought Reasoning | Reasoning LLMs ...](https://www.youtube.com/watch?v=fZNNqcN_UQM) — Vizuara · 55:15

### Error detection and correction in LLMs *(prerequisite)*
Explore how LLMs can detect and fix errors in their outputs, especially in intermediate calculations, to prevent error propagation. This concept is key to understanding MDToC's monitoring phase that uses evaluator and fixer components.

*How the paper uses it:* MDToC uses specialized LLM components to iteratively evaluate and correct intermediate calculations.

▶ [[QA] DeepCritic: Deliberate Critique with Large Language ...](https://www.youtube.com/watch?v=lGpSILkob6o) — Arxiv Papers · 8:03

### Metacognitive prompting framework
Metacognitive prompting involves guiding LLMs to plan, monitor, and review their reasoning processes, enhancing self-awareness and error correction. This framework underpins MDToC's three-phase approach to structured problem-solving.

*How the paper uses it:* MDToC employs a metacognitive framework with planning, monitoring, and reviewing phases to boost reasoning accuracy.

▶ [The Metacognitive Demands and Opportunities of Generative AI](https://www.youtube.com/watch?v=T1mxXYUUir0) — ACM SIGCHI · 9:15

### Dynamic tree of concepts reasoning
Understand how reasoning can be organized as a dynamic tree structure, where concepts and calculations branch and evolve during problem-solving. This structural representation allows exploring diverse solution paths and verifying intermediate results.

*How the paper uses it:* MDToC constructs a dynamic two-depth concept tree to organize and verify multi-step mathematical reasoning.

▶ [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — Gate Smashers · 2 years ago

## Already in your library

- [Formal Reasoning Meets LLMs: Toward AI for Mathematics ...](https://www.youtube.com/watch?v=XuKeSzc7f_c) — also for: ConformalNL2LTL: Translating Natural Language Instructions into Temporal Logic Formulas with Conformal Correctness Guarantees (Jyotirmoy Deshmukh)
- [LLM Reasoning Beyond Scaling with Dr Greg Durrett ...](https://www.youtube.com/watch?v=Eiw8YB-yjW0) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [Stanford CS25: V5 I Large Language Model Reasoning ...](https://www.youtube.com/watch?v=ebnX5Ur1hBk) — also for: Argumentative Human-AI Decision-Making: Toward AI Agents That Reason With Us, Not For Us (William Yeoh)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Chain-of-thought prompting - Explained!](https://www.youtube.com/watch?v=AFE6x81AP4k) — also for: Improving Human Verification of LLM Reasoning through Interactive Explanation Interfaces (Anh Nguyen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a learning ladder to demonstrate your understanding of the MDToC paper's metacognitive prompting framework for improving mathematical reasoning in large language models. The beginner project reproduces a core mechanism of iterative error detection and correction on simple math problems. The intermediate project implements the full three-phase MDToC prompting framework on a public math reasoning dataset, comparing it against a Chain-of-Thought baseline. The advanced project extends MDToC to address its stated limitation in spatial reasoning by integrating a simple spatial reasoning module, exploring the paper's future direction of handling geometry problems.

### Beginner — Iterative Calculation Verification on Simple Math Problems
*Effort: a weekend, ~8 hours*

You build a small Python script that uses an LLM API (e.g., OpenAI GPT-4o-mini) to solve simple multi-step arithmetic problems by generating intermediate calculations, then uses a second LLM call to evaluate and fix errors iteratively. This reproduces the MDToC monitoring phase's evaluator and fixer components on a minimal scale.

**Why it shows you understood the paper:** This project demonstrates you understand the core idea of MDToC's monitoring phase: using metacognitive evaluation and correction to reduce calculation errors, a key contribution of the paper.

**Grounded in:** The monitoring phase uses an evaluator and fixer LLM components to detect and correct errors in intermediate calculations, improving final answer accuracy.

**Tech stack:** Python 3.11, OpenAI API (GPT-4o-mini)

**Data:** Synthetic simple arithmetic problems (e.g., multi-step addition, subtraction, multiplication) created manually for testing.

**Build it:**

1. Write a Python script that prompts an LLM to solve a multi-step arithmetic problem with intermediate steps.
2. Implement a second prompt that asks the LLM to evaluate the intermediate calculations and identify errors.
3. If errors are found, generate a corrected solution iteratively until no errors remain or a max iteration count is reached.
4. Test the script on a small set of manually created arithmetic problems and log the before/after accuracy.
5. Document the approach and results in a README explaining the connection to MDToC's monitoring phase.

**Ships as:** A Python script and README showing iterative evaluation and correction of intermediate calculations on simple math problems, with example runs and explanation.

**Stretch goal:** Add a simple majority voting mechanism over multiple corrected solutions to mimic the reviewing phase.

### Intermediate — Reimplementing MDToC's Three-Phase Framework on the Game-of-24 Dataset
*Effort: 2 weekends, ~20 hours*

You implement the full MDToC prompting framework (planning, monitoring, reviewing) using OpenAI GPT models to solve problems from the Game-of-24 dataset, a public benchmark for arithmetic reasoning. You compare MDToC's accuracy against a Chain-of-Thought baseline and report quantitative improvements.

**Why it shows you understood the paper:** This project shows you can faithfully reimplement the paper's core method and reproduce its key result of improved accuracy on a known math benchmark, demonstrating comprehension of the three-phase metacognitive prompting and error correction.

**Grounded in:** MDToC achieves up to 11% higher accuracy on the Game-of-24 dataset compared to previous methods.

**Tech stack:** Python 3.11, OpenAI API (GPT-4o, GPT-4o-mini), Jupyter Notebook

**Data:** Game-of-24 dataset (publicly available arithmetic reasoning problems used in the paper as benchmark).

**Build it:**

1. Obtain the Game-of-24 dataset and preprocess it for prompt input.
2. Implement the planning phase by prompting GPT-4o to generate a two-depth dynamic concept tree of possible solution approaches.
3. Implement the monitoring phase using GPT-4o-mini as evaluator and fixer to iteratively check and correct intermediate calculations.
4. Implement the reviewing phase by aggregating multiple solution attempts with majority voting to select the final answer.
5. Implement a Chain-of-Thought baseline prompt for comparison.
6. Run experiments on a sample of the dataset, record accuracy metrics, and compare MDToC vs CoT.
7. Write a detailed README documenting the implementation, results, and relation to the paper.

**Ships as:** A Jupyter notebook and Python scripts demonstrating MDToC on Game-of-24 with accuracy comparison to CoT baseline, including code, results, and analysis.

**Stretch goal:** Add token usage and cost analysis to explore computational expense trade-offs as discussed in the paper.

### Advanced — Extending MDToC for Spatial Reasoning in Geometry Problems
*Effort: 3+ weeks*

You develop an extension of the MDToC framework to better handle geometry problems, addressing the paper's limitation in spatial reasoning. This involves integrating a simple spatial reasoning module (e.g., symbolic geometry solver or diagram interpretation) into the planning and monitoring phases to verify spatial constraints alongside calculations. You evaluate this extension on a small set of geometry problems.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep understanding of MDToC's domain-specific constraints and the challenges of extending metacognitive prompting beyond calculation-heavy tasks.

**Grounded in:** MDToC’s metacognitive calculation approach exhibits domain-specific constraints, particularly in geometry where spatial reasoning predominates over calculation verification.

**Tech stack:** Python 3.11, OpenAI API (GPT-4o, GPT-4o-mini), SymPy geometry module or similar symbolic math library, Jupyter Notebook

**Data:** A small curated set of geometry word problems requiring spatial reasoning, created manually or adapted from public math problem collections.

**Build it:**

1. Review MDToC's planning and monitoring phases and identify how to incorporate spatial reasoning checks.
2. Integrate a symbolic geometry solver (e.g., SymPy geometry) to verify spatial constraints extracted from problem text or LLM-generated concepts.
3. Modify the monitoring phase to evaluate both calculation correctness and spatial constraint satisfaction, using iterative fixing.
4. Implement the extended MDToC framework and test on a small set of geometry problems.
5. Compare results qualitatively to baseline MDToC without spatial reasoning integration.
6. Document the design decisions, challenges, and potential improvements in a comprehensive README.

**Ships as:** A codebase and notebook demonstrating an MDToC extension with spatial reasoning support on geometry problems, with qualitative evaluation and discussion.

**Stretch goal:** Explore integrating visual diagram parsing or LLM-based spatial reasoning prompts to further enhance geometry problem solving.

_The authors released no code for this paper; the intermediate project requires reimplementing the core MDToC method from the paper's description. The Game-of-24 dataset is publicly available and serves as a substitute for the paper's benchmark data._
