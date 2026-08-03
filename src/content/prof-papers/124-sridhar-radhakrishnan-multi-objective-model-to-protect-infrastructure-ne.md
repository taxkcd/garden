---
title: "124 · Multi-objective model to protect infrastructure networks from disinformation diffusion — Sridhar Radhakrishnan"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sridhar-radhakrishnan"
source_hash: "256eac8530c9944674e99243e59ed31b2fa66d6350e7bd9323173792d3f60828"
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
