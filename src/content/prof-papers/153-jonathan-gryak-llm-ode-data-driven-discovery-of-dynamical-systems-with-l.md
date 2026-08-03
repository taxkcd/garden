---
title: "153 · LLM-ODE: Data-driven Discovery of Dynamical Systems with Large Language Models — Jonathan Gryak"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jonathan-gryak"
source_hash: "2191e45a5f4e18b973cc832f6fc9c55dd5deca1d89b3d9f57644a3f2caffe4b9"
sequence: 153
generator: "outreach-garden: managed"
---

# 153 · LLM-ODE: Data-driven Discovery of Dynamical Systems with Large Language Models

## At a glance

- **Professor:** Jonathan Gryak
- **Institution:** CUNY
- **Paper:** [LLM-ODE: Data-driven Discovery of Dynamical Systems with Large Language Models](https://arxiv.org/pdf/2603.20910)
- **Authors:** Amirmohammad Ziaei Bideh, Jonathan Gryak
- **Year:** 2026

## Paper overview

This paper introduces LLM-ODE, a new method that combines large language models (LLMs) with genetic programming to automatically discover the governing equations of dynamical systems from observed data. The approach uses LLMs to guide the search for symbolic equations, improving efficiency and accuracy compared to traditional methods. The method is tested on 91 real-world dynamical systems and shows superior performance, especially for complex and higher-dimensional systems.

### Why it matters

**Research problem:** Discovering the governing differential equations of dynamical systems from observational data is a fundamental but challenging problem. Traditional genetic programming methods for symbolic regression suffer from inefficient search and slow convergence, especially for complex or high-dimensional systems.

**Why it matters:** Accurate discovery of governing equations enables better understanding, prediction, and control of natural and engineered systems across many scientific fields. Automating this process accelerates scientific discovery and reduces reliance on manual derivation and domain expertise.

**Key contributions:**

- Introduces a novel hybrid framework combining LLMs and genetic programming for discovering systems of coupled differential equations.
- Demonstrates improved search efficiency and accuracy over classical genetic programming and Transformer-only methods on a benchmark of 91 dynamical systems.
- Shows better scalability to higher-dimensional and chaotic systems compared to linear model and pure Transformer approaches.
- Provides a comprehensive empirical evaluation including convergence speed, discovery rate, and Pareto front diversity.
- Releases full source code and dataset for reproducibility.

## About the professor

**Jonathan Gryak** — Assistant Professor, Deputy Executive Officer, Computer Science, CUNY.

Research interests: Artificial Intelligence / Machine Learning, Applied Algebra, Computational Medicine

### Research links

- [Faculty/profile page](https://www.gc.cuny.edu/people/jonathan-gryak)
- [Professor website](https://idsl.gryak.org/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LLM-ODE paper, start with foundational knowledge on dynamical systems and differential equations, followed by multi-objective optimization concepts crucial for model selection. Next, study genetic programming and symbolic regression methods as the evolutionary search backbone. Then, explore the role of large language models in scientific discovery to grasp how LLMs guide symbolic model search. Finally, focus on the core hybrid method of LLM-guided genetic programming and the authors' own talk to gain direct insight into their novel approach.

### Dynamical systems differential equations *(prerequisite)*
Understanding dynamical systems and their representation via differential equations is fundamental to grasping the target models that LLM-ODE aims to discover. This section covers key concepts such as fixed points, stability, and bifurcations, providing the mathematical background necessary for interpreting discovered equations.

*How the paper uses it:* LLM-ODE discovers governing differential equations of dynamical systems from data.

▶ [Differential Equations and Dynamical Systems: Overview](https://www.youtube.com/watch?v=9fQkLQZe3u8) — Steve Brunton · 29:31

### Multi-objective optimization Pareto front *(prerequisite)*
Multi-objective optimization and Pareto fronts are essential for understanding how LLM-ODE balances accuracy and complexity when selecting final models. This section explains the concept of Pareto optimality and how it guides evolutionary search in symbolic regression.

*How the paper uses it:* LLM-ODE selects final models via multi-objective Pareto fronts balancing accuracy and complexity.

▶ [Multi-objective optimization](https://www.youtube.com/watch?v=YDzFMZTlas0) — Taylor Sparks · 22:47

### Genetic programming symbolic regression *(prerequisite)*
Genetic programming is the evolutionary search framework underlying symbolic regression methods for equation discovery. This section provides an in-depth look at how genetic programming evolves mathematical expressions, which is critical to understanding the baseline methods LLM-ODE improves upon.

*How the paper uses it:* LLM-ODE integrates genetic programming with LLMs to improve symbolic regression for dynamical systems.

▶ [ETH Zürich AISE: Symbolic Regression and Model Discovery](https://www.youtube.com/watch?v=fe-PC4lw4yw) — CAMLab, ETH Zürich · 1:14:45

### Large language models in scientific discovery *(prerequisite)*
This section explores how large language models can be leveraged to guide scientific discovery, including symbolic model search. Understanding this context is key to appreciating LLM-ODE's novel use of LLMs as intelligent evolutionary operators.

*How the paper uses it:* LLM-ODE uses LLMs to guide the search for symbolic equations, improving efficiency and accuracy.

▶ [Rethinking Research: The Role of Humans in Scientific ...](https://www.youtube.com/watch?v=ZUsQJvEsNjo) — King's Institute for Artificial Intelligence · 1:07:02

### LLM guided genetic programming
This concept is central to the paper, describing the hybrid approach that combines LLMs with genetic programming to enhance the evolutionary search process. The selected talk presents recent advances and methodologies closely aligned with LLM-ODE's approach.

*How the paper uses it:* LLM-ODE integrates large language models as intelligent evolutionary operators within a genetic programming framework.

▶ [Swarat Chaudhuri - Abstraction and Evolution with Large ...](https://www.youtube.com/watch?v=AKoKVSFUxSg) — Institute for Pure & Applied Mathematics (IPAM) · 51:14

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the LLM-ODE paper, starting with the basics of dynamical systems and differential equations, then covering genetic programming for symbolic regression, multi-objective optimization with Pareto fronts, and the role of large language models in scientific discovery. Finally, it presents the core hybrid method of LLM-guided genetic programming that the paper proposes. The order ensures a gradual build-up from mathematical modeling to AI-driven equation discovery.

### Dynamical systems differential equations *(prerequisite)*
Dynamical systems describe how things change over time using differential equations. Understanding these systems helps grasp what kinds of mathematical models LLM-ODE aims to discover from data.

*How the paper uses it:* The paper focuses on discovering governing differential equations of dynamical systems from observational data.

▶ [Differential Equations and Dynamical Systems: Overview](https://www.youtube.com/watch?v=9fQkLQZe3u8) — Steve Brunton · 29:31

### Genetic programming symbolic regression *(prerequisite)*
Genetic programming is an evolutionary algorithm that searches for symbolic mathematical expressions fitting data, mimicking natural selection. Symbolic regression uses this to find equations that explain observed behaviors without predefined models.

*How the paper uses it:* LLM-ODE builds on genetic programming to evolve candidate symbolic equations representing dynamical systems.

▶ [Python Symbolic Regression (PySR) [Physics Informed Machine Learning]](https://www.youtube.com/watch?v=df43V4OjMVs) — Steve Brunton · 1 year ago

### Multi-objective optimization Pareto front *(prerequisite)*
Multi-objective optimization balances competing goals, such as accuracy and simplicity, by finding a set of optimal trade-offs called the Pareto front. This helps select models that are both accurate and interpretable.

*How the paper uses it:* LLM-ODE uses Pareto fronts to select final models balancing accuracy and complexity.

▶ [Multiobjective optimization & the pareto front](https://www.youtube.com/watch?v=act0oZoV3RA) — Eric Delmelle · 6:03

### Large language models in scientific discovery *(prerequisite)*
Large language models (LLMs) are AI systems trained on vast text data that can generate and reason about language. Recently, they have been applied to accelerate scientific discovery by guiding hypothesis generation and model search.

*How the paper uses it:* LLM-ODE integrates LLMs to intelligently guide the search for symbolic equations, improving efficiency over traditional methods.

▶ [LLM-Driven Autonomous Scientific Discovery](https://www.youtube.com/watch?v=_rf3nI_U3Gk) — aiXplain · 26:16

### LLM guided genetic programming
This hybrid method combines the evolutionary search of genetic programming with the reasoning and pattern recognition capabilities of LLMs to generate better candidate equations during the search process.

*How the paper uses it:* LLM-ODE's core innovation is using LLMs as evolutionary operators within genetic programming to discover dynamical system equations.

▶ [Swarat Chaudhuri - Abstraction and Evolution with Large ...](https://www.youtube.com/watch?v=AKoKVSFUxSg) — Institute for Pure & Applied Mathematics (IPAM) · 51:14
