---
title: "153 · LLM-ODE: Data-driven Discovery of Dynamical Systems with Large Language Models — Jonathan Gryak"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jonathan-gryak"
source_hash: "2fea28f36c9db4c349326baa05eec7a0721f782ab3bba812935bb79bad8b2a77"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the LLM-ODE paper. The beginner project focuses on reproducing a core metric from the paper using familiar tools and a simple dynamical system dataset. The intermediate project involves reimplementing the core LLM-guided genetic programming method on a small benchmark and comparing it to a baseline, introducing new skills in symbolic regression and multi-objective optimization. The advanced project extends the method by incorporating domain-specific physical constraints into the LLM prompts, addressing a stated future direction and limitation of the paper, and applying the approach to a novel scientific problem.

### Beginner — Reproduce LLM-ODE Discovery Rate on a Simple Dynamical System
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a low-dimensional dynamical system (e.g., a 1D logistic growth ODE), then implement a simple symbolic regression using genetic programming (e.g., with PySR or a basic GP library). You measure the discovery rate metric (success in recovering the true equation within an error threshold) similar to the paper's Table 1 for low-dimensional systems.

**Why it shows you understood the paper:** This project shows you understand the core problem of discovering governing equations from data and the evaluation metric of discovery rate used in the paper. It also demonstrates familiarity with symbolic regression and the challenge of recovering equations from noisy data.

**Grounded in:** LLM-ODE achieves higher discovery rates than PySR and SINDy for low-dimensional systems (D=1), demonstrating improved accuracy and efficiency.

**Tech stack:** Python 3.11, Jupyter Notebook, PySR (symbolic regression)

**Data:** Simulated trajectory data from a simple 1D dynamical system such as logistic growth, generated in the notebook.

**Build it:**

1. Simulate time-series data from a known 1D ODE (e.g., logistic growth) with noise.
2. Use PySR to perform symbolic regression on the simulated data to discover the governing equation.
3. Calculate the normalized mean squared error between discovered and true equations.
4. Compute the discovery rate metric by repeating the experiment multiple times with different noise seeds.
5. Document results and compare to the paper's reported discovery rates for low-dimensional systems.

**Ships as:** A Jupyter notebook with code, plots of discovered equations vs true, discovery rate statistics, and a README explaining the experiment and its relation to the paper.

**Stretch goal:** Add a simple baseline method like SINDy for comparison and plot Pareto fronts of accuracy vs complexity.

### Intermediate — Reimplement LLM-Guided Genetic Programming for Equation Discovery
*Effort: 2 weekends, ~20 hours*

You reimplement the core LLM-ODE method described in the paper: integrate a large language model as an evolutionary operator within a genetic programming framework to discover symbolic ODEs from data. You apply it to a small subset of benchmark dynamical systems (e.g., 2-3 systems) and compare performance to classical GP (PySR) on discovery rate and convergence speed.

**Why it shows you understood the paper:** This project demonstrates you grasp the novel hybrid approach of using LLMs to guide symbolic regression search, the multi-objective optimization balancing accuracy and complexity, and the empirical evaluation methodology of the paper.

**Grounded in:** LLM-ODE integrates LLMs as intelligent evolutionary operators within genetic programming, outperforming classical GP in discovery rate and convergence speed on benchmark systems.

**Tech stack:** Python 3.11, OpenAI or Anthropic API for LLM calls, PySR or custom GP framework, Jupyter Notebook or Python scripts

**Data:** Use simulated or publicly available time-series data from 2-3 known dynamical systems (e.g., Lotka-Volterra, Van der Pol oscillator) as a substitute for the paper's benchmark.

**Build it:**

1. Implement a genetic programming framework that evolves symbolic equations for ODEs.
2. Integrate calls to a large language model API to generate candidate mutations/crossovers informed by high-performing solutions.
3. Run experiments on 2-3 benchmark dynamical systems, recording discovery rate and convergence speed.
4. Implement a baseline classical GP method (e.g., PySR) on the same data for comparison.
5. Plot and analyze Pareto fronts of accuracy vs complexity for both methods.
6. Write a report comparing your results to the paper's findings.

**Verified links from the paper:**

- <https://github.com/gryaklab/llm-ode> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing LLM-guided GP, experiment scripts, comparison plots, and a README explaining the method, results, and relation to the paper.

**Stretch goal:** Add multi-island evolution or problem decomposition by state variables as described in the paper to improve scalability.

### Advanced — Incorporate Physical Constraints into LLM Prompts for Equation Discovery
*Effort: 3+ weeks*

You extend the LLM-ODE framework by designing prompt engineering strategies that incorporate domain-specific physical constraints or system-level metadata into the LLM's candidate generation process. You test this on a novel or less-understood dynamical system dataset and evaluate improvements in discovery accuracy and convergence speed.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper: leveraging domain knowledge to improve LLM-guided discovery. It shows deep comprehension of the method, its bottlenecks, and how to enhance it scientifically.

**Grounded in:** Future direction: Incorporate system-level metadata and physical domain knowledge into LLM prompts to accelerate convergence and discover novel scientific models.

**Tech stack:** Python 3.11, OpenAI or Anthropic API for LLM calls, Custom genetic programming codebase, Jupyter Notebook or Python scripts

**Data:** Use a publicly available or simulated dynamical system dataset with known physical constraints (e.g., pendulum with energy conservation), or a novel system without ground truth to demonstrate exploratory discovery.

**Build it:**

1. Review the original LLM-ODE method and implement a baseline LLM-guided GP framework if not already done.
2. Design prompt templates that encode physical constraints (e.g., conservation laws, boundary conditions) and system metadata.
3. Modify the LLM candidate generation to incorporate these enhanced prompts.
4. Run comparative experiments on selected dynamical systems with and without physical constraint prompts.
5. Analyze improvements in convergence speed, discovery rate, and Pareto front diversity.
6. Document challenges, results, and potential for applying to novel scientific problems.

**Verified links from the paper:**

- <https://github.com/gryaklab/llm-ode> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with extended LLM-ODE code, prompt engineering scripts, experimental results, and a detailed README discussing the impact of physical constraints on discovery.

**Stretch goal:** Explore quantized or low-rank approximation LLMs to reduce inference latency as another future direction from the paper.

_The authors have not released official code for LLM-ODE; the linked GitHub repository is from the paper text but not confirmed as the authors' official release. Data for the paper's 91 dynamical systems benchmark is not publicly provided, so substitute datasets or simulations are needed._
