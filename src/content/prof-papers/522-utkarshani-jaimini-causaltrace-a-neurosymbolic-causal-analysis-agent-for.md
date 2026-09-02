---
title: "522 · CausalTrace: A Neurosymbolic Causal Analysis Agent for Smart Manufacturing — Utkarshani Jaimini"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-utkarshani-jaimini"
source_hash: "0ac310f4b1e45d2f3749c9a5e6cb340203194c597faead6fb2c00d8b04518533"
sequence: 522
generator: "outreach-garden: managed"
---

# 522 · CausalTrace: A Neurosymbolic Causal Analysis Agent for Smart Manufacturing

## At a glance

- **Professor:** Utkarshani Jaimini
- **Institution:** University of Michigan-Dearborn
- **Paper:** [CausalTrace: A Neurosymbolic Causal Analysis Agent for Smart Manufacturing](https://arxiv.org/pdf/2510.12033)
- **Authors:** Chathurangi Shyalika, Aryaman Sharma, Fadi El Kalach, Utkarshani Jaimini, Cory Henson, Ramy Harik, Amit Sheth
- **Year:** 2025

## Paper overview

This paper presents CausalTrace, a neurosymbolic AI agent designed to provide interpretable causal analysis for smart manufacturing environments. It integrates data-driven causal discovery with structured knowledge from ontologies and knowledge graphs to support real-time root cause analysis, counterfactual reasoning, and explainable decision support. The system is embedded in a multi-agent platform called SmartPilot and evaluated on a rocket assembly testbed, showing strong agreement with expert assessments and readiness for real-world deployment.

### Why it matters

**Research problem:** Existing AI systems in manufacturing often operate as black boxes, lacking integrated causal reasoning and explainability needed for trustworthy, actionable insights in complex, high-stakes industrial settings.

**Why it matters:** Manufacturing environments require not only accurate predictions but also interpretable explanations of anomalies and root causes to enable effective human-machine collaboration, proactive maintenance, and adaptive decision-making. Without explainability and causal reasoning, AI adoption is limited in safety-critical industrial workflows.

**Key contributions:**

- Design and implementation of CausalTrace, capable of real-time causal discovery, root cause analysis, causal effect estimation, and counterfactual reasoning.
- Integration of data-driven causal methods with structured knowledge sources and semantic user interfaces for human-interpretable reasoning.
- Development of a comprehensive evaluation methodology based on the C3AN framework, including causal assessments and comparisons with baseline and ablation variants.
- Demonstration of deployment and practical utility on an academic rocket assembly testbed, showing readiness for real-world manufacturing environments.

## About the professor

**Utkarshani Jaimini** — Assistant Professor, Department of Computer and Information Science, University of Michigan-Dearborn.

Research interests: advancing Neuro-symbolic AI by integrating causal reasoning to improve explainability, robustness, and human-like understanding in AI systems

### Research links

- [Faculty/profile page](https://utkarshani.github.io)
- [Professor website](https://utkarshani.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Causal Inference and Discovery
**The paper assumes:** causal inference theory, causal discovery algorithms, structural causal models, counterfactual reasoning
**Already in this field?** Skip this entirely if you already understand causal inference methods and causal discovery algorithms in machine learning or statistics.

This background focuses on causal inference and causal discovery methods essential for understanding the CausalTrace system's approach to interpretable causal analysis in smart manufacturing. The rigorous course provides a deep, structured university-level foundation in machine learning methods for causal inference, while the fast track offers a concise, intuition-driven introduction to causal inference concepts suitable for quick comprehension and practical insight.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Machine Learning & Causal Inference: A Short Course](https://www.youtube.com/playlist?list=PLxq_lXOUlvQAoWZEqhRqHNezS30lI49G-) — Stanford Graduate School of Business · 19 videos · 10.3h across 19 episodes

**Watch only this:** Episodes 4 to 12, about 3.5 hours — covering prediction vs. estimation, average treatment effects, confounding, propensity scores, double robustness, conditional average treatment effects, trees, forests, robust estimation, and causal discovery from observational data.

*Why it unblocks this paper:* This Stanford Graduate School of Business course explicitly covers machine learning techniques for causal inference, including treatment effects, confounding, causal discovery, and counterfactuals, directly relevant to the paper's use of ICA-based LiNGAM and DiffAN for causal discovery and counterfactual reasoning.

*If you want all of it:* 10.3 hours across 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Full Lectures - Causal Inference Course](https://www.youtube.com/playlist?list=PLoazKTcS0RzZ1SUgeOgc6SWt51gfT80N0) — Brady Neal - Causal Inference · 15 videos · 11.7h across 15 episodes

**Watch only this:** Episodes 1, 3, 4, 5, 6, 10, 11, and 14, about 4 hours — focusing on introduction, flow of causation, causal models, randomized experiments, estimation, causal discovery from observational data and interventions, and counterfactuals.

*Why it unblocks this paper:* This concise causal inference course by Brady Neal covers foundational topics including causal models, randomized experiments, estimation, causal discovery, and counterfactuals in a clear, focused manner, providing a quick yet rigorous overview aligned with the paper's core causal inference methods.

*If you want all of it:* 11.7 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CausalTrace paper, start with foundational knowledge on causal discovery methods and knowledge graphs/ontologies, as these underpin the system's data-driven causal graph learning and semantic knowledge integration. Then, study counterfactual reasoning in AI to grasp how the system supports explainable decision-making. Finally, focus on the core concept of neurosymbolic causal analysis and the authors' own detailed talks on CausalTrace and related neurosymbolic AI research for the most direct and advanced insights.

### Causal discovery methods *(prerequisite)*
Understanding causal discovery methods is essential because CausalTrace relies on data-driven causal discovery algorithms like ICA-based LiNGAM and DiffAN to construct causal graphs from manufacturing data. These videos provide rigorous academic talks on causal discovery theory and algorithms, which form the foundation for the system's causal inference capabilities.

*How the paper uses it:* CausalTrace integrates data-driven causal discovery methods as a core component for real-time causal graph construction.

▶ [Day 2 - Tom Heskes - Causal discovery from big data](https://www.youtube.com/watch?v=ddcb6z23FKs) — Decision making - University of Belgrade - Faculty of Organisational Sciences · 25:49 · 8 years ago

### Knowledge graphs and ontologies *(prerequisite)*
Knowledge graphs and ontologies provide the structured semantic knowledge that CausalTrace integrates with data-driven causal discovery to enable interpretable and explainable reasoning. These videos offer academic-level explanations of ontologies and knowledge graphs, including practical implementations in Neo4j, which aligns with the paper's use of manufacturing ontologies and knowledge graphs.

*How the paper uses it:* The system leverages manufacturing ontologies and knowledge graphs to enrich causal reasoning with semantic context.

▶ [Ontologies in Neo4j: Semantics and Knowledge Graphs – Jesús Barrasa](https://www.youtube.com/watch?v=5wluUfomasg) — Neo4j · 16:35 · 7 years ago

### Counterfactual reasoning in AI *(prerequisite)*
Counterfactual reasoning is key to CausalTrace's ability to perform explainable root cause analysis and validate causal effects through hypothetical scenarios. The selected videos provide advanced research talks and university lectures on counterfactual explanations and their role in explainable AI, which directly supports understanding the system's decision support features.

*How the paper uses it:* Counterfactual reasoning enables CausalTrace to support explainable decision support and root cause analysis.

▶ [Explaining Machine Learning Classifiers through Diverse Counterfactual Explanations](https://www.youtube.com/watch?v=zj2NliGD0Lg) — ACM FAccT Conference · 8:11 · 6 years ago

### Neurosymbolic causal analysis
This concept is central to the paper, describing the fusion of neural and symbolic AI methods with causal reasoning to achieve interpretable and robust causal analysis. The videos by co-author Dr. Utkarshani Jaimini provide in-depth academic presentations on causal neurosymbolic AI and its industrial applications, offering direct insight into the theoretical and practical aspects of the approach used in CausalTrace.

*How the paper uses it:* CausalTrace is a neurosymbolic causal analysis agent combining neural and symbolic methods for explainable AI in manufacturing.

▶ [Utkarshani Jaimini PhD Proposal: Causal Neurosymbolic AI #CausalNeSyAI #causlity #neurosymbolicai](https://www.youtube.com/watch?v=wwxctnFV8jI) — AI Institute at UofSC - #AIISC · 1:07:34 · 1 year ago

### CausalTrace neurosymbolic AI talk *(the paper's own talk)*
The authors' own recorded talks on CausalTrace provide the most specific and detailed exposition of the system, its architecture, evaluation, and deployment. These presentations are invaluable for understanding the nuances and innovations of the paper directly from the creators.

*How the paper uses it:* These talks are by the paper's authors and present the CausalTrace system in detail, including its design, evaluation, and industrial deployment.

▶ [Utkarshani Jaimini PhD Defense: Causal Neurosymbolic AI #CausalNeSy #causality #neurosymbolicai #ai](https://www.youtube.com/watch?v=xW50jOdTOAA) — AI Institute at UofSC - #AIISC · 1:15:20 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts essential to understanding CausalTrace, starting with the basics of knowledge graphs and ontologies to grasp the structured semantic knowledge integration. Next, it covers causal discovery methods to explain how causal graphs are learned from data, followed by counterfactual reasoning to understand explainable decision support. Finally, it culminates with neurosymbolic causal analysis, the core approach combining neural and symbolic AI for interpretable causal reasoning as used in the paper.

### Knowledge graphs and ontologies *(prerequisite)*
Knowledge graphs and ontologies provide a structured way to represent and organize information, enabling machines to understand relationships and semantics between entities. This foundation is crucial for integrating domain knowledge with data-driven AI methods.

*How the paper uses it:* CausalTrace integrates structured knowledge from manufacturing ontologies and knowledge graphs to support interpretable causal analysis.

▶ [Knowledge Graphs - Computerphile](https://www.youtube.com/watch?v=PZBm7M0HGzw) — Computerphile · 12:05 · 3 years ago

### Causal discovery methods *(prerequisite)*
Causal discovery methods aim to learn cause-effect relationships from observational data, going beyond mere correlations. Understanding these methods is key to grasping how CausalTrace derives causal graphs from manufacturing data.

*How the paper uses it:* The paper uses data-driven causal discovery techniques like ICA-based LiNGAM and DiffAN to build causal graphs in real time.

▶ [Classical Strategies and Concepts in Causal Discovery](https://www.youtube.com/watch?v=egqVGs1TXlI) — Simons Institute for the Theory of Computing · 1:02:00 · Streamed 4 years ago

### Counterfactual reasoning in AI *(prerequisite)*
Counterfactual reasoning involves imagining alternative scenarios to understand cause and effect, which helps explain AI decisions and supports root cause analysis. This concept is vital for explainability and decision support in CausalTrace.

*How the paper uses it:* CausalTrace supports counterfactual effect validation to provide explainable decision support in manufacturing.

▶ [Lecture 13 - Counterfactual Explanations | Explainable AI (XAI) | Google Colab Implementation](https://www.youtube.com/watch?v=8EQwpmK49sk) — Vizuara · 42:25 · 2 years ago

### Neurosymbolic causal analysis
Neurosymbolic causal analysis combines neural (data-driven) and symbolic (knowledge-based) AI to enable interpretable and robust causal reasoning. This hybrid approach is central to CausalTrace's ability to integrate causal discovery with semantic knowledge.

*How the paper uses it:* CausalTrace is a neurosymbolic AI agent that fuses causal discovery with ontologies and knowledge graphs for interpretable causal analysis.

▶ [Utkarshani Jaimini PhD Proposal: Causal Neurosymbolic AI #CausalNeSyAI #causlity #neurosymbolicai](https://www.youtube.com/watch?v=wwxctnFV8jI) — AI Institute at UofSC - #AIISC · 1:07:34 · 1 year ago

## Already in your library

- [Causal Inference - EXPLAINED!](https://www.youtube.com/watch?v=Od6oAz1Op2k) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Causal Inference with Machine Learning - EXPLAINED!](https://www.youtube.com/watch?v=MFnOYNU5sbk) — also for: CIMLA: Interpretable AI for inference of differential causal networks (Saurabh Sinha)
- [Contrastive Learning - 5 Minutes with Cyrill](https://www.youtube.com/watch?v=sftIkJ8MYL4) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)
- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [MIT 6.S191 (2020): Neurosymbolic AI](https://www.youtube.com/watch?v=4PuuziOgSU4) — also for: Introduction to open-world AI (Larry B. Holder)
- [Foundations of Neurosymbolic AI](https://www.youtube.com/watch?v=9Jc3g6sPpUU) — also for: Symbolic Rule Extraction From Attention-Guided Sparse Representations in Vision Transformers (Gopal Gupta)
- [Taxonomy, Ontology, Knowledge Graph, and Semantics](https://www.youtube.com/watch?v=sr257blfdY8) — also for: Insights from an Industry Survey on Software Design Errors (Gursimran Singh Walia)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of CausalTrace's neurosymbolic causal analysis approach for smart manufacturing. The beginner project focuses on reproducing a core causal discovery visualization using familiar tools. The intermediate project involves reimplementing the core causal discovery and root cause analysis method on a substitute dataset, comparing it to a correlation baseline. The advanced project extends the system toward decentralized processing and real-time intervention planning, addressing a key limitation and future direction from the paper.

### Beginner — Visualize a Simple Causal Graph from Manufacturing Data
*Effort: a weekend, ~8 hours*

You build a small web app that loads a simple synthetic dataset simulating sensor readings and anomalies in a manufacturing process, then applies a basic causal discovery algorithm (e.g., LiNGAM or ICA-based) to produce a causal graph visualization. The app includes interactive features to explore causal relationships and highlight potential root causes.

**Why it shows you understood the paper:** This project shows you grasp the core idea of causal discovery and interpretable causal graph visualization as used in CausalTrace, demonstrating how data-driven causal inference can support root cause analysis in manufacturing.

**Grounded in:** Design and implementation of CausalTrace, capable of real-time causal discovery, root cause analysis, causal effect estimation, and counterfactual reasoning.

**Tech stack:** Python 3.11, Jupyter Notebook, NetworkX, Matplotlib or Plotly, scikit-learn

**Data:** Synthetic manufacturing sensor data simulating anomalies and causal relations, created by you to mimic the paper's testbed data characteristics.

**Build it:**

1. Create or simulate a small multivariate time series dataset representing sensor readings with injected anomalies.
2. Implement or use an existing ICA-based LiNGAM causal discovery method to infer causal relations from the data.
3. Visualize the resulting causal graph interactively using NetworkX and Plotly or Matplotlib.
4. Add UI elements to highlight nodes/edges corresponding to detected root causes.
5. Document the process and explain how the visualization relates to root cause analysis.

**Ships as:** A GitHub repo with a Jupyter Notebook and a simple interactive visualization web page demonstrating causal graph discovery and root cause highlighting on synthetic manufacturing data.

**Stretch goal:** Add a simple counterfactual query interface to simulate the effect of interventions on the causal graph.

### Intermediate — Reimplement CausalTrace Root Cause Analysis on Public Manufacturing Dataset
*Effort: 1-3 weekends*

You reimplement the core causal discovery and root cause analysis pipeline described in the paper, combining ICA-based LiNGAM and DiffAN methods with a simple manufacturing ontology represented as a knowledge graph. You apply this pipeline to a publicly available manufacturing or industrial sensor dataset (e.g., NASA Turbofan Engine Degradation Simulation Dataset as a substitute) and compare root cause ranking performance against a correlation-based baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core neurosymbolic causal analysis method and evaluate it quantitatively, showing comprehension of integrating data-driven causal discovery with structured knowledge for interpretable root cause analysis.

**Grounded in:** Integration of data-driven causal methods with structured knowledge sources and semantic user interfaces for human-interpretable reasoning; CausalTrace achieved strong agreement with domain experts in root cause analysis.

**Tech stack:** Python 3.11, Jupyter Notebook, NetworkX, scikit-learn, rdflib or Neo4j Python driver, pandas, numpy

**Data:** NASA Turbofan Engine Degradation Simulation Dataset (publicly available) used as a substitute for the paper's rocket assembly testbed data.

**Build it:**

1. Download and preprocess the NASA Turbofan dataset to extract relevant sensor features and anomaly labels.
2. Implement or adapt ICA-based LiNGAM and DiffAN causal discovery algorithms to infer causal graphs from the data.
3. Construct a simple manufacturing ontology as a knowledge graph using RDF or Neo4j to represent domain concepts and relations.
4. Integrate the causal discovery results with the ontology to refine root cause candidate ranking.
5. Implement a correlation-based baseline for root cause ranking using Pearson correlation with anomalies.
6. Evaluate and compare root cause ranking performance using metrics like MAP@3, PR@2, and MRR.
7. Document the methodology, results, and insights.

**Verified links from the paper:**

- <https://github.com/ChathurangiShyalika/SmartPilot> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/ChathurangiShyalika/NSF-MAP> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code and notebooks implementing the neurosymbolic causal analysis pipeline, evaluation scripts, and a detailed README reporting quantitative comparison with a correlation baseline on a public manufacturing dataset.

**Stretch goal:** Add a simple conversational query interface to explore causal graphs and root causes interactively.

### Advanced — Decentralized Neurosymbolic Causal Analysis for Real-Time Intervention Planning
*Effort: a few weeks*

You extend the neurosymbolic causal analysis framework toward decentralized processing by designing and prototyping a distributed architecture that supports real-time causal discovery, root cause analysis, and intervention planning across heterogeneous manufacturing nodes. You implement MQTT-based communication replacing centralized camera and OPC UA connections, and demonstrate a prototype that can simulate adaptive decision-making with safety-aware instruction following.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep understanding of the system architecture and the challenges of scaling neurosymbolic causal AI in real-world manufacturing environments with decentralized data sources and real-time constraints.

**Grounded in:** Current deployment architecture is centralized and has scalability limitations; Future work includes decentralized processing and enhanced real-time capabilities such as intervention planning and safety-aware instruction-following.

**Tech stack:** Python 3.11, FastAPI, paho-mqtt, Neo4j, Docker, asyncio, NetworkX

**Data:** Simulated manufacturing sensor streams and event data representing heterogeneous nodes; no public dataset directly matches decentralized setup, so you simulate data streams based on known sensor patterns.

**Build it:**

1. Design a decentralized architecture where multiple processing nodes run causal discovery locally and communicate causal graph updates via MQTT brokers.
2. Implement MQTT clients in Python to simulate sensor data streams and causal graph message passing.
3. Adapt causal discovery and root cause analysis algorithms to run incrementally or on partial data at each node.
4. Implement a prototype intervention planning module that uses causal graphs to suggest adaptive actions with safety constraints.
5. Demonstrate the system with simulated data streams and visualize causal graphs and intervention recommendations in real time.
6. Document the architecture, implementation details, and discuss scalability and latency trade-offs.

**Ships as:** A GitHub repo with a distributed neurosymbolic causal analysis prototype, MQTT-based communication code, intervention planning module, simulation scripts, and a comprehensive README describing the system design and evaluation on simulated data.

**Stretch goal:** Integrate edge computing components to reduce latency and implement asynchronous communication patterns for improved scalability.
