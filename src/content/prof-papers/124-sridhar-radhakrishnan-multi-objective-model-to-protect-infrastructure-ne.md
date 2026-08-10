---
title: "124 · Multi-objective model to protect infrastructure networks from disinformation diffusion — Sridhar Radhakrishnan"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sridhar-radhakrishnan"
source_hash: "b32cd6f19695a0a83cb95ed74ec147801fb2dd02c6dc1b6ecf222ee774b2c773"
sequence: 124
generator: "outreach-garden: managed"
---

# 124 · Multi-objective model to protect infrastructure networks from disinformation diffusion

## At a glance

- **Professor:** Sridhar Radhakrishnan
- **Institution:** University of Oklahoma
- **Paper:** [Multi-objective model to protect infrastructure networks from disinformation diffusion](https://link.springer.com/content/pdf/10.1007/s13278-025-01448-5.pdf)
- **Authors:** Claudio M. Rocco, Kash Barker, Sridhar Radhakrishnan, Jose E. Ramirez-Marquez
- **Year:** 2025

## Paper overview

This paper develops a multi-objective decision model to understand and mitigate the spread of disinformation that indirectly disrupts critical infrastructure networks. Using a multilayer network framework, it models disinformation spreading in a social network layer with an epidemiological SIR model implemented via cellular automata, and its cascading effects on a physical infrastructure layer, such as a power grid. The model optimizes attack strategies to maximize disruption while minimizing costs and time, providing insights for defending critical systems against such indirect attacks.

### Why it matters

**Research problem:** How to model and optimize strategies to protect critical infrastructure networks from indirect disruptions caused by the spread of disinformation in interconnected social and physical networks.

**Why it matters:** Disinformation campaigns can destabilize critical systems by influencing user behavior, leading to real-world consequences such as power grid overloads or transportation disruptions. Existing research largely focuses on direct attacks on infrastructure, neglecting the indirect but impactful effects of disinformation, which is a growing global threat affecting public trust and system stability.

**Key contributions:**

- Development of a multilayer network framework integrating disinformation spread in social networks with cascading impacts on physical infrastructure.
- Implementation of a discrete-time SIR model using cellular automata to simulate disinformation diffusion.
- Formulation of a tri-objective optimization model balancing attack cost, network flow disruption, and time to disruption.
- Use of NSGA-II evolutionary algorithm to identify Pareto-optimal attack strategies.
- Demonstration of the model on real-world networks (Facebook and Italian power grid) to analyze trade-offs in disinformation attack strategies.

## About the professor

**Sridhar Radhakrishnan** — Senior Faculty Fellow, Office of Vice President for Research and Partnerships; Williams Professor, School of Computer Science, University of Oklahoma.

Research interests: Design, implementation and analysis of network protocols and algorithms for broadband, wireless, and mobile networks; IoT and SDN development; high performance computing

### Research links

- [Faculty/profile page](https://www.ou.edu/coe/cs/people/faculty/sridhar-radhakrishnan)
- [Identity evidence](https://sridharradhakrishnan.info)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Epidemiological modeling with SIR
**The paper assumes:** epidemiological compartmental models, SIR model dynamics, probabilistic infection and recovery processes, cellular automata simulation of epidemics
**Already in this field?** Skip this entirely if you already understand the SIR epidemiological model and its use in simulating contagion processes on networks.

This background focuses on epidemiological modeling with the susceptible-infected-recovered (SIR) model, which is central to understanding the disinformation diffusion mechanism in the paper. The rigorous course offers a deep, structured university-level introduction to mathematical modeling including SIR dynamics, while the fast track provides a concise, intuition-driven explainer series specifically on the SIR model and its application to disease spread, suitable for quickly grasping the core concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [EXCELing with Mathematical Modeling](https://www.youtube.com/playlist?list=PLLy_2iUCG87CZucbP4tMMnOYOwExq0E9_) — IIT Roorkee July 2018 · 62 videos · 29.8h across the first 60 episodes

**Watch only this:** Lectures 15 (Growth Models(Continuous model)), 9 (Linear Stability Analysis-I), and 10 (Linear Stability Analysis-II), about 1.5 hours total — these cover continuous growth models and stability analysis essential to SIR modeling.

*Why it unblocks this paper:* This IIT Roorkee course covers mathematical modeling comprehensively, including growth models and stability analysis relevant to SIR modeling. It provides a rigorous foundation for understanding the assumptions and dynamics of epidemiological models like the one used in the paper.

*If you want all of it:* About 29.8 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [SIR Model Spread of Disease](https://www.youtube.com/playlist?list=PLwndNzpz2DictX7vXoLi0alA9RaP-lXIN) — Raulitango · 12 videos · 5.5h across the first 10 episodes

**Watch only this:** Episodes 1 to 4 (SIR Model For Disease Spread- 1. Introduction through Python Implementation via coLaboratory Notebooks), about 2 hours total — these cover the fundamentals and practical implementation of the SIR model.

*Why it unblocks this paper:* This playlist by Raulitango is a focused, well-structured series on the SIR model for disease spread, including introduction, preparation, numerical methods, and implementation. It provides a clear, visual, and practical understanding of the SIR model in about 5.5 hours total.

*If you want all of it:* About 5.5 hours across the first 10 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on protecting infrastructure networks from disinformation diffusion, start by building foundational knowledge on multilayer network modeling, the epidemiological SIR model, and cellular automata simulation, as these underpin the paper's modeling approach. Then, study the core concept of the paper through the authors' own talk if available, or otherwise through rigorous academic presentations on disinformation and network disruption. Finally, explore the multi-objective optimization method NSGA-II used for attack strategy optimization to grasp the solution approach.

### Multilayer network modeling *(prerequisite)*
Understanding multilayer networks is essential because the paper models disinformation spread and its cascading effects using interconnected social and physical network layers. This concept explains how multiple types of relationships and interactions are represented and analyzed in a unified framework.

*How the paper uses it:* The paper uses a multilayer network framework integrating social and infrastructure networks to model disinformation diffusion and cascading disruptions.

▶ [James D. Wilson "Community Detection in Multilayer Networks with Heterogeneous Community Structure"](https://www.youtube.com/watch?v=TBtFvGslDzY) — Network Science Institute · 8 years ago

### Epidemiological SIR model *(prerequisite)*
The SIR model is a fundamental epidemiological framework used to simulate the spread of disinformation in the social network layer. Understanding this model provides insight into how nodes transition between susceptible, infected, and recovered states over time.

*How the paper uses it:* The paper simulates disinformation spread in the information layer using a probabilistic SIR model.

▶ [NISS/ASA Tutorial on Susceptible-Infected-Recovered (SIR) Modeling - June 2020](https://www.youtube.com/watch?v=wA3aYhfm3s0) — National Institute of Statistical Sciences (NISS) · 6 years ago

### Cellular automata simulation *(prerequisite)*
Cellular automata provide a discrete-time, spatially structured simulation method to implement the SIR model dynamics. Grasping cellular automata helps understand how local interactions propagate disinformation through the network over time.

*How the paper uses it:* The paper implements the SIR disinformation model using cellular automata to simulate diffusion dynamics.

▶ [Introduction to a Unified Model of Cellular Automata](https://www.youtube.com/watch?v=USkwxpW8DOk) — Wolfram · 27:01 · 3 years ago

### Multi-objective optimization NSGA-II
NSGA-II is a widely used evolutionary algorithm for solving multi-objective optimization problems, such as balancing cost, disruption, and time in attack strategies. Understanding NSGA-II clarifies how the paper identifies Pareto-optimal solutions for disinformation attack planning.

*How the paper uses it:* The paper uses NSGA-II to find Pareto-optimal attack strategies balancing cost, network flow disruption, and time to disruption.

▶ [NSGA-II Optimization: Understand fast how it works [complete explanation]](https://www.youtube.com/watch?v=SL-u_7hIqjA) — paretos · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand how disinformation spreads and impacts critical infrastructure, culminating in the paper's core approach of modeling and optimizing such attacks. We start with the epidemiological SIR model to grasp how contagion-like processes work, then explore cellular automata as a simulation tool, followed by multilayer network modeling to see how social and physical networks interact. Finally, we cover the multi-objective optimization method NSGA-II used to find balanced attack strategies.

### Epidemiological SIR model *(prerequisite)*
The SIR model is a simple yet powerful way to understand how something contagious—like a disease or disinformation—spreads through a population by categorizing individuals as susceptible, infected, or recovered. This video explains the intuition behind the model and how it captures the dynamics of spread over time.

*How the paper uses it:* The paper uses a probabilistic SIR model to simulate disinformation diffusion in the social network layer.

▶ [Oxford Mathematician explains SIR Disease Model for COVID-19 (Coronavirus)](https://www.youtube.com/watch?v=NKMHhm2Zbkw) — Tom Rocks Maths · 6 years ago

### Cellular automata simulation *(prerequisite)*
Cellular automata are grid-based computational models where each cell updates its state based on simple rules and the states of neighboring cells, making them ideal for simulating complex spreading processes like epidemics or disinformation in discrete time steps.

*How the paper uses it:* The paper implements the discrete-time SIR model using cellular automata to simulate disinformation spread.

▶ [7.1: Cellular Automata - The Nature of Code](https://www.youtube.com/watch?v=DKGodqDs9sA) — The Coding Train · 6:03 · 10 years ago

### Multilayer network modeling *(prerequisite)*
Multilayer networks represent systems where nodes are connected in multiple types of relationships or layers, such as social connections and physical infrastructure, allowing us to model how disruptions in one layer can cascade to another.

*How the paper uses it:* The paper models disinformation spread in a social network layer and its cascading effects on a physical infrastructure layer using a multilayer network framework.

▶ [James D. Wilson "Community Detection in Multilayer Networks with Heterogeneous Community Structure"](https://www.youtube.com/watch?v=TBtFvGslDzY) — Network Science Institute · 8 years ago

### Multi-objective optimization NSGA-II
NSGA-II is an evolutionary algorithm designed to find a set of optimal trade-off solutions when balancing multiple conflicting objectives, such as minimizing cost, disruption, and time simultaneously.

*How the paper uses it:* The paper uses NSGA-II to identify Pareto-optimal disinformation attack strategies balancing cost, network flow disruption, and time to disruption.

▶ [NSGA-II Optimization: Understand fast how it works [complete explanation]](https://www.youtube.com/watch?v=SL-u_7hIqjA) — paretos · 7 years ago

### Paper authors talk *(the paper's own talk)*
Understanding the broader context and motivation behind the paper’s approach to disinformation and infrastructure protection can be enhanced by expert talks on misinformation and disinformation literacy, which provide real-world relevance and intuition.

*How the paper uses it:* These talks provide background on disinformation spread, a key element modeled in the paper.

▶ ['Fake News' explained: How disinformation spreads](https://www.youtube.com/watch?v=8fQdzVbQlaU) — Global News · 7 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper's multilayer network model for disinformation-driven infrastructure disruption. The beginner project recreates a core simulation mechanism (SIR disinformation spread via cellular automata) on a small synthetic network. The intermediate project implements the tri-objective optimization model using NSGA-II on a simplified multilayer network with public or synthetic data, comparing disruption metrics. The advanced project extends the model by incorporating asynchronous update schemes in the SIR simulation to address a stated limitation, evaluating effects on optimization outcomes.

### Beginner — SIR Disinformation Spread Simulation on a Small Multilayer Network
*Effort: a weekend, ~8 hours*

You build a discrete-time cellular automata simulation of the SIR model for disinformation spread on a small synthetic social network layer connected to a simple physical infrastructure layer. The simulation visualizes infection states over time and tracks cascading effects on the physical layer via inter-layer links.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's core mechanism of modeling disinformation diffusion with a cellular automaton SIR model and its cascading impact on infrastructure nodes.

**Grounded in:** Implementation of a discrete-time SIR model using cellular automata to simulate disinformation diffusion.

**Tech stack:** Python 3.11, NetworkX, Matplotlib, Jupyter Notebook

**Data:** Synthetic small multilayer network generated programmatically to mimic social and physical layers with inter-layer links.

**Build it:**

1. Generate a small synthetic multilayer network with a social layer and a physical layer using NetworkX.
2. Implement the discrete-time SIR cellular automata model on the social layer with probabilistic infection and recovery.
3. Define inter-layer links connecting social nodes to physical nodes and model cascading disruption effects.
4. Visualize the infection states over time and the resulting impact on the physical layer's node states.
5. Document the simulation parameters and how they relate to the paper's model.

**Ships as:** A Jupyter Notebook with code and visualizations showing SIR disinformation spread and cascading physical disruptions on a small multilayer network.

**Stretch goal:** Add parameter controls to experiment with infection and recovery probabilities and observe effects on spread dynamics.

### Intermediate — Tri-objective Optimization of Disinformation Attacks Using NSGA-II
*Effort: 2 weekends, ~20 hours*

You implement the tri-objective optimization model from the paper to select nodes for disinformation injection and inter-layer links to add, minimizing attack cost, physical network maximum flow, and time to disruption. You apply NSGA-II to find Pareto-optimal solutions on a smaller multilayer network synthesized to approximate the Facebook social network and a simplified power grid.

**Why it shows you understood the paper:** This project shows you can translate the paper's multi-objective optimization formulation into code, apply evolutionary algorithms, and evaluate trade-offs between cost, disruption, and speed as the paper does.

**Grounded in:** Formulation of a tri-objective optimization model balancing attack cost, network flow disruption, and time to disruption; Use of NSGA-II evolutionary algorithm to identify Pareto-optimal attack strategies.

**Tech stack:** Python 3.11, NetworkX, DEAP (Distributed Evolutionary Algorithms in Python), NumPy, Matplotlib

**Data:** Synthetic multilayer network data approximating the paper's Facebook social network and Italian power grid layers, generated programmatically due to lack of released datasets.

**Build it:**

1. Generate or load a synthetic multilayer network with social and physical layers and inter-layer links.
2. Implement the tri-objective optimization problem: define objectives for attack cost, max flow reduction, and time to disruption.
3. Integrate the NSGA-II algorithm using DEAP to optimize node selection and inter-layer link additions.
4. Run the optimization and analyze the Pareto front, plotting trade-offs between objectives.
5. Compare results against a simple baseline such as random node selection.
6. Write a README explaining the model, optimization approach, and interpretation of results.

**Ships as:** A Python project repository with code to run NSGA-II optimization on a multilayer network and visualizations of Pareto-optimal trade-offs.

**Stretch goal:** Incorporate a simple defensive strategy baseline that protects certain nodes and compare optimization outcomes.

### Advanced — Asynchronous SIR Simulation and Its Impact on Disinformation Attack Optimization
*Effort: 3-4 weeks*

You extend the paper's synchronous cellular automata SIR model by implementing an asynchronous update scheme for disinformation spread in the social layer. You then integrate this asynchronous simulation into the tri-objective NSGA-II optimization framework to study how asynchronous updates affect the timing and effectiveness of attack strategies.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper by modifying the core diffusion model and analyzing its impact on optimization results, demonstrating deep comprehension and ability to extend the research.

**Grounded in:** The study's limitation of synchronous updates in the cellular automata possibly overestimating spread speed; future direction to incorporate asynchronous or event-driven update mechanisms.

**Tech stack:** Python 3.11, NetworkX, DEAP, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic multilayer network data as in the intermediate project, reused for consistency.

**Build it:**

1. Review and understand the synchronous cellular automata SIR implementation from the intermediate project.
2. Implement an asynchronous update mechanism where nodes update infection states in a randomized or event-driven order each time step.
3. Validate the asynchronous model by comparing spread dynamics against the synchronous version on the same network.
4. Integrate the asynchronous SIR simulation into the tri-objective NSGA-II optimization framework.
5. Run optimization experiments to compare Pareto fronts and disruption timing between synchronous and asynchronous models.
6. Document findings on how asynchronous updates influence optimization outcomes and discuss implications.

**Ships as:** A comprehensive codebase and report comparing synchronous vs asynchronous SIR models within the tri-objective optimization framework, with visualizations and analysis.

**Stretch goal:** Incorporate real-time data integration or stochastic parameter variability to further enhance realism.
