---
title: "311 · Learning to Fuse Temporal Proximity Networks: A Case Study in Chimpanzee Social Interactions — Yixuan He"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yixuan-he"
source_hash: "270802087506de8a3895c77b2d5fe4c4db999d06373505bacc17d732ad638236"
sequence: 311
generator: "outreach-garden: managed"
---

# 311 · Learning to Fuse Temporal Proximity Networks: A Case Study in Chimpanzee Social Interactions

## At a glance

- **Professor:** Yixuan He
- **Institution:** Arizona State University
- **Paper:** [Learning to Fuse Temporal Proximity Networks: A Case Study in Chimpanzee Social Interactions](https://arxiv.org/pdf/2502.00302)
- **Authors:** Yixuan He, Aaron Sandel, David Wipf, Mihai Cucuringu, John Mitani, Gesine Reinert
- **Year:** 2025

## Paper overview

This paper develops a novel method called ProxFuse to combine multiple types of proximity data collected over time into a single weighted network representing chimpanzee social interactions. It uses an optimization approach to learn weights for different proximity levels and identifies long-term close relationships among chimpanzees by analyzing network time series. The method is validated on synthetic data and applied to a unique 24-year dataset of wild chimpanzees, revealing persistent social cliques consistent with expert observations.

### Why it matters

**Research problem:** How to effectively combine multi-level temporal proximity data into a single network representation that captures the dynamic social structure of chimpanzees, and how to identify long-term close relationships driving social structure from such network time series.

**Why it matters:** Understanding social structures in primates is important for social and biological sciences, providing insights into social dynamics, disease spread, and information transfer. Existing methods struggle with multi-level proximity data, temporal dynamics, and data collection biases, limiting the ability to analyze long-term social bonds in species with fission-fusion dynamics like chimpanzees.

**Key contributions:**

- A novel optimization pipeline (ProxFuse) to fuse multi-level proximity networks into a single weighted network time series.
- Theoretical analysis of two new node similarity notions (count similarity and duration similarity) based on sequences of Bernoulli trials with evolving success rates.
- Application of the method to a unique long-term chimpanzee proximity dataset, revealing persistent social cliques validated by expert knowledge.
- Empirical validation of the method on carefully designed synthetic data demonstrating robustness and accuracy.
- A principled statistical testing framework using p-values and Bonferroni correction to identify significantly persistent close relationships.

## About the professor

**Yixuan He** — Assistant Professor, Arizona State University.

Research interests: graph neural networks, machine learning, and mathematical modelling

### Research links

- [Faculty/profile page](https://sherylhyx.github.io)
- [Resolved homepage](https://sherylhyx.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** temporal network analysis
**The paper assumes:** temporal network analysis, dynamic graph theory, and temporal community detection
**Already in this field?** Skip this entirely if you already understand how networks evolve over time and how to analyze dynamic graphs and communities.

This background focuses on temporal network analysis, essential for understanding and modeling networks that evolve over time, as in the ProxFuse method for chimpanzee social interactions. The rigorous course option provides a deep, structured university-level foundation in graph machine learning including temporal aspects, while the fast track offers a shorter, intuition-driven introduction to network science concepts relevant to temporal networks. Choose the course for comprehensive mastery; choose the fast track for a quicker conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 1.1 to 1.3 (Why Graphs, Applications, Choice of Graph Representation), 2.1 to 2.3 (Traditional Feature-based Methods: Node, Link, Graph), and 3.1 to 3.3 (Node Embeddings, Random Walk Approaches, Embedding Entire Graphs), totaling about 6.5 hours — this subset covers core graph concepts and embeddings relevant to temporal network analysis.

*Why it unblocks this paper:* Stanford CS224W Machine Learning with Graphs by Jure Leskovec is a top-tier university course covering graph representations, dynamic graphs, and node embeddings, foundational for understanding temporal network fusion and similarity measures used in ProxFuse.

*If you want all of it:* 24.1 hours across 47 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Network Science](https://www.youtube.com/playlist?list=PLXxwyLP9N6SDqz05QXo22TzD_bFpEXE9X) — Joshua Yoon · 19 videos · 19.5h across 19 episodes

**Watch only this:** Episodes 1 (Raissa D'Souza - "The Science of Networks"), 15 (Temporal Analysis of Complex Networks), and 17 (Social Network Analysis - From Graph Theory to Applications), totaling about 3 hours — these episodes focus on temporal network concepts and social network analysis relevant to the paper.

*Why it unblocks this paper:* Joshua Yoon's Network Science playlist offers clear, visual, and intuitive explanations of network concepts including temporal analysis of complex networks, providing a concise introduction to the key ideas behind temporal network structures and dynamics.

*If you want all of it:* 19.5 hours across 19 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Learning to Fuse Temporal Proximity Networks,' start with foundational knowledge on community detection in temporal graphs and optimization methods for network weighting, as these underpin the ProxFuse method. Next, explore dynamic social network analysis to grasp the evolving social structures the paper models. Then, study the theoretical basis of the Poisson-binomial distribution, which supports the novel node similarity measures introduced. Finally, focus on the core concept of temporal network fusion optimization, culminating with the authors' own talk or the closest available substitute to directly connect with their novel fusion approach and application to chimpanzee social interactions.

### Community detection in temporal graphs *(prerequisite)*
Community detection over time is crucial for defining node similarity and identifying persistent social bonds in the paper. Understanding methods and challenges in temporal community detection provides the basis for the paper's novel similarity measures.

*How the paper uses it:* The paper uses community detection sequences to define count and duration similarity for persistent social bonds.

▶ [Lecture 24 —  Community Detection in Graphs - Motivation | Stanford University](https://www.youtube.com/watch?v=k0uxnVEuuz0) — Artificial Intelligence - All in One · 10 years ago

### Optimization methods for network weighting *(prerequisite)*
The ProxFuse method relies on optimization to learn nonnegative combination weights for different proximity levels. A solid grasp of optimization techniques in neural networks and machine learning will clarify the approach's formulation and solution.

*How the paper uses it:* ProxFuse's core is an optimization pipeline that learns weights to fuse multi-level proximity networks.

▶ [Lecture 9 - Introduction to Optimization in Neural Network ...](https://www.youtube.com/watch?v=WVFMxpTD09w) — Vizuara · 27:06

### Dynamic social network analysis *(prerequisite)*
Understanding how social networks evolve over time is key to interpreting the fused networks and persistent cliques identified by ProxFuse. This knowledge contextualizes the biological and social significance of the results.

*How the paper uses it:* The paper analyzes temporal network time series to reveal evolving chimpanzee social structures.

▶ [Dynamic Social Network Analysis: Model, Algorithm, Theory ...](https://www.youtube.com/watch?v=uiD988ISE3o) — Microsoft Research · 47:48

### Poisson-binomial distribution theory *(prerequisite)*
The paper provides theoretical foundations for its novel node similarity measures using Poisson-binomial distributions. Understanding this distribution and its properties is essential to appreciate the statistical testing framework and significance assessments.

*How the paper uses it:* Theoretical analysis of count and duration similarity is based on Poisson-binomial distributions with recursion formulas.

▶ [PROBABILITY DISTRIBUTION|ONE SHOT|NORMAL ...](https://www.youtube.com/watch?v=_Hjp6aFJO40) — Pradeep Giri Academy · 37:38

### Temporal network fusion optimization
This concept covers the central method of the paper: optimizing weights to combine multi-level temporal networks into a single weighted network time series. Mastery here is critical to understanding the ProxFuse method's novelty and effectiveness.

*How the paper uses it:* ProxFuse optimizes combination weights to fuse temporal proximity networks capturing dynamic social structure.

▶ [Diego Del-Castillo-Negrete - Generative AI methods for ...](https://www.youtube.com/watch?v=Zd8rxijCbpc) — Institute for Pure & Applied Mathematics (IPAM) · 44:12

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Learning to Fuse Temporal Proximity Networks,' start by building a foundation in dynamic social network analysis and community detection in temporal graphs, as these explain how social structures evolve and how groups are identified over time. Then, learn about optimization methods for network weighting, which underpin the ProxFuse method's approach to combining multi-level proximity data. Finally, explore the core concept of temporal network fusion optimization to grasp how the paper integrates these ideas into a novel method for analyzing chimpanzee social interactions.

### Dynamic social network analysis *(prerequisite)*
Dynamic social network analysis studies how social relationships and structures change over time, helping us understand evolving patterns and interactions within groups. This foundational knowledge is crucial to interpret how fused networks represent social dynamics.

*How the paper uses it:* The paper analyzes chimpanzee social interactions as evolving networks over 24 years, making dynamic social network analysis essential to understand their approach.

▶ [Dynamic Social Network Analysis: Model, Algorithm, Theory ...](https://www.youtube.com/watch?v=uiD988ISE3o) — Microsoft Research · 47:48

### Community detection in temporal graphs *(prerequisite)*
Community detection identifies groups or clusters within networks, and when applied to temporal graphs, it reveals how these groups persist or change over time. Understanding this helps in recognizing persistent social bonds in dynamic networks.

*How the paper uses it:* The paper uses community detection over time to define node similarity and identify persistent social cliques among chimpanzees.

▶ [SNA Chapter 5 Lecture 6](https://www.youtube.com/watch?v=g2nxk0gY148) — NPTEL-NOC IITM · 19:03 · 3 years ago

### Optimization methods for network weighting *(prerequisite)*
Optimization methods find the best parameters or weights to improve a model's performance, often by minimizing a loss function. Learning these basics helps understand how ProxFuse learns combination weights for different proximity levels.

*How the paper uses it:* ProxFuse relies on optimization to learn nonnegative weights that fuse multi-level proximity networks into a single weighted network.

▶ [Lecture 9 - Introduction to Optimization in Neural Network ...](https://www.youtube.com/watch?v=WVFMxpTD09w) — Vizuara · 27:06

### Poisson-binomial distribution theory *(prerequisite)*
The Poisson-binomial distribution generalizes the binomial distribution to cases with varying success probabilities, providing a theoretical basis for assessing significance in node similarity measures.

*How the paper uses it:* The paper uses this theory to develop and analyze new node similarity notions (count and duration similarity) for identifying persistent social bonds.

▶ [The Poisson Distribution: The Rare Event Limit of a Binomial ...](https://www.youtube.com/watch?v=7vXLH2H6fZw) — Steve Brunton · 13:01

## Already in your library

- [Temporal Fusion Transformers, EXPLAINED. Advanced Time ...](https://www.youtube.com/watch?v=V14qoa5vZ1I) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [Introduction to Social Network Analysis [1/5]: Main Concepts](https://www.youtube.com/watch?v=lnLW6ITFY3M) — also for: Modeling information diffusion in social media: data-driven observations (Lawrence O. Hall)
- [James D. Wilson "Community Detection in Multilayer Networks with Heterogeneous Community Structure"](https://www.youtube.com/watch?v=TBtFvGslDzY) — also for: Multi-objective model to protect infrastructure networks from disinformation diffusion (Sridhar Radhakrishnan)
- [Multi-objective optimization](https://www.youtube.com/watch?v=YDzFMZTlas0) — also for: LLM-ODE: Data-driven Discovery of Dynamical Systems with Large Language Models (Jonathan Gryak)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder for demonstrating understanding of the ProxFuse method for fusing temporal proximity networks in chimpanzee social interactions. The beginner project reproduces a core metric from the paper using synthetic data to grasp the optimization concept. The intermediate project implements the ProxFuse optimization pipeline on a small synthetic temporal proximity dataset, comparing learned weights to a baseline. The advanced project extends the method by adapting ProxFuse to human wearable sensor data, addressing the paper's limitation about focal-based bias and nested proximity hierarchies, and exploring integration with graph neural networks.

### Beginner — Reproduce ProxFuse Loss Optimization on Synthetic Data
*Effort: a weekend, ~8 hours*

You build a Python script that generates a small synthetic multi-level temporal proximity network and implements the ProxFuse loss function based on relative structural consistency between consecutive time steps. You then optimize combination weights for proximity levels using a simple optimizer (e.g., gradient descent or scipy.optimize) to minimize the loss.

**Why it shows you understood the paper:** This project shows you understand the core optimization approach of ProxFuse and how the loss function enforces temporal consistency in fused networks, a key theoretical contribution of the paper.

**Grounded in:** The novel optimization pipeline (ProxFuse) to fuse multi-level proximity networks into a single weighted network time series and the loss function based on relative structural consistency.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib

**Data:** Synthetic multi-level temporal proximity networks generated in code to simulate nested proximity levels and temporal snapshots.

**Build it:**

1. Implement code to generate synthetic temporal proximity networks with multiple nested proximity levels over several time steps.
2. Implement the ProxFuse loss function that measures relative structural consistency of network similarity and node degrees across consecutive time steps.
3. Use an optimizer (e.g., scipy.optimize.minimize) to learn nonnegative combination weights that minimize the loss.
4. Plot the loss convergence and learned weights to verify near-zero loss and meaningful weight recovery.
5. Write a README explaining the synthetic data generation, loss function, and optimization results.

**Ships as:** A GitHub repo with scripts to generate synthetic data, optimize ProxFuse weights, plots showing loss convergence and learned weights, and a README explaining the approach.

**Stretch goal:** Add visualization of fused weighted networks over time and compare with unweighted or binary baseline networks.

### Intermediate — Implement ProxFuse on Synthetic Temporal Proximity Data and Compare Baselines
*Effort: 2 weekends, ~20 hours*

You reimplement the ProxFuse optimization pipeline from the paper to fuse multi-level temporal proximity networks into a single weighted network time series. You generate or simulate a small synthetic dataset with temporal proximity levels and apply community detection to compute node similarity metrics. You compare the fused network against a simple baseline (e.g., equal weights or binary thresholding) using metrics like stability of detected cliques over time.

**Why it shows you understood the paper:** This project demonstrates you can implement the core method end-to-end, apply temporal community detection, and evaluate the stability and quality of fused networks, replicating the paper's empirical validation approach.

**Grounded in:** The ProxFuse optimization pipeline validated on synthetic data demonstrating robustness and accuracy, and the use of community detection-based node similarity to identify persistent social bonds.

**Tech stack:** Python 3.11, NetworkX, SciPy, scikit-learn, community (python-louvain), Matplotlib

**Data:** Synthetic temporal multi-level proximity networks generated in code, simulating nested proximity levels and temporal snapshots.

**Build it:**

1. Generate synthetic temporal proximity networks with multiple nested proximity levels over multiple time steps.
2. Implement the ProxFuse optimization pipeline to learn combination weights minimizing the relative structural consistency loss.
3. Apply a community detection algorithm (e.g., Louvain) on fused networks at each time step to identify communities.
4. Compute node similarity metrics (count similarity and duration similarity) based on community membership sequences.
5. Compare fused networks with a baseline network (e.g., equal weights or binary threshold) by measuring stability of detected cliques over time.
6. Document the implementation, evaluation metrics, and results in a detailed README.

**Ships as:** A GitHub repo with code to generate synthetic data, run ProxFuse optimization, perform community detection, compute node similarity, compare baselines, and a README with results and analysis.

**Stretch goal:** Add statistical significance testing of persistent relationships using p-values and Bonferroni correction as described in the paper.

### Advanced — Adapt ProxFuse to Human Wearable Sensor Data and Integrate with Graph Neural Networks
*Effort: 3-4 weeks*

You extend ProxFuse by adapting its optimization framework to fuse multi-level temporal proximity data collected from human wearable sensors, which have different biases and proximity hierarchies than the chimpanzee dataset. You preprocess a publicly available human proximity dataset (e.g., from the SocioPatterns project) to create multi-level proximity networks. You then integrate the learned fused networks as input features into a graph neural network (GNN) model for a downstream predictive task such as predicting social group membership or interaction patterns.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by adapting ProxFuse beyond focal-based chimpanzee data and exploring integration with GNNs, demonstrating deep comprehension and research-level initiative.

**Grounded in:** The limitation about focal-based biased data and nested proximity levels, and the future direction of adapting ProxFuse to other animal or human interaction datasets and integrating with graph neural network architectures for downstream tasks.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NetworkX, SciPy, pandas, scikit-learn

**Data:** Public human proximity dataset from SocioPatterns (e.g., high-resolution wearable sensor data capturing face-to-face interactions), used as a substitute for chimpanzee proximity data.

**Build it:**

1. Obtain and preprocess a public human wearable sensor proximity dataset to extract multi-level temporal proximity networks (e.g., different distance thresholds or interaction types).
2. Adapt and implement the ProxFuse optimization pipeline to learn combination weights for the human data, accounting for different proximity hierarchies and potential biases.
3. Perform community detection on fused networks and compute node similarity metrics to identify persistent social bonds.
4. Design and train a graph neural network model using the fused weighted networks as input features to predict a relevant downstream task (e.g., social group membership or interaction prediction).
5. Evaluate the GNN model against baselines using unweighted or binary networks to demonstrate the benefit of ProxFuse fusion.
6. Write comprehensive documentation including methodology, challenges adapting ProxFuse, results, and potential biological/social insights.

**Ships as:** A GitHub repo with data preprocessing scripts, ProxFuse adaptation code, GNN model implementation, evaluation scripts, and a detailed README discussing adaptation challenges and results.

**Stretch goal:** Explore robustness of community detection and node similarity metrics to randomness and propose improvements as suggested in the paper's future directions.
