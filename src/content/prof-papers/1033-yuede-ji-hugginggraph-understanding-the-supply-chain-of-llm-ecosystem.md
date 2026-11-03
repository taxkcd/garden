---
title: "1033 · HuggingGraph: Understanding the Supply Chain of LLM Ecosystem — Yuede Ji"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuede-ji"
source_hash: "86a4666675403e0836ba77062e6fa9fdb705ba73676a1bdaac9dc569b6db88a5"
sequence: 1033
generator: "outreach-garden: managed"
---

# 1033 · HuggingGraph: Understanding the Supply Chain of LLM Ecosystem

## At a glance

- **Professor:** Yuede Ji
- **Institution:** University of Texas at Arlington
- **Paper:** [HuggingGraph: Understanding the Supply Chain of LLM Ecosystem](https://arxiv.org/pdf/2507.14240)
- **Authors:** Mohammad Shahedur Rahman, Peng Gao, Yuede Ji
- **Year:** 2025

## Paper overview

This paper studies the supply chain of large language models (LLMs) by analyzing the relationships between models and datasets on AI platforms like Hugging Face. The authors collected metadata to build a large directed heterogeneous graph representing dependencies among models and datasets. They analyze the graph's structure, model evolution, dataset origins, and dynamic updates, revealing insights about the LLM ecosystem's complexity, reuse patterns, and rapid growth.

### Why it matters

**Research problem:** LLMs are often built by reusing base models and external datasets, which can propagate vulnerabilities, biases, or malicious components. Understanding the provenance and relationships in the LLM supply chain is critical to detect risks, improve fairness, and ensure regulatory compliance.

**Why it matters:** Without transparency in the LLM supply chain, it is difficult to trace model lineage, detect inherited biases or vulnerabilities, and ensure legal compliance. This lack of understanding can hinder trustworthiness and security of AI systems.

**Key contributions:**

- Designed a methodology to systematically collect LLM supply chain information from AI platforms.
- Constructed a large directed heterogeneous graph modeling relationships between LLM models and datasets.
- Performed comprehensive graph analyses revealing structural properties, model evolution, dataset origins, and dynamic updates.
- Demonstrated use cases such as tracing model lineage and identifying critical nodes that could be single points of failure.
- Validated the generalizability of their pipeline on a different AI platform (Kaggle).

## About the professor

**Yuede Ji** — Assistant Professor, Department of Computer Science and Engineering, University of Texas at Arlington.

Research interests: Scalable AI Systems, Trustworthy AI Systems, High-Performance Computing (HPC), AI supply-chain provenance, AI/agent security, reliability and verification of multi-agent systems, trust-aware decision making

### Research links

- [Faculty/profile page](https://yuede.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** graph theory and network analysis
**The paper assumes:** graph theory, network analysis, and graph-based data modeling
**Already in this field?** Skip this entirely if you already have a solid understanding of graph theory and network analysis concepts and their applications in computer science.

This background focuses on graph theory and network analysis, essential for understanding the construction and analysis of the large directed heterogeneous graph representing LLM models and datasets in the paper. The rigorous course option provides a thorough university-level introduction to graph theory fundamentals and algorithms, while the fast track offers a concise, intuition-driven series to quickly grasp key graph concepts and algorithms relevant to the paper's methodology.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Intuition Series 1: Graph Algorithms \[In english\]](https://www.youtube.com/playlist?list=PLUi1VD_gLPxurVNoBeMyt32OS8UfAwuqF) — Intuition · 11 videos · 1.3h across 11 episodes

**Watch only this:** Episodes 1-7 (01_Why_Graph_theory_?? through 06_Dijkstra's_algorithm_for_shortest_path), about 42 minutes — covering graph motivation, representation, DFS, BFS, greedy technique, and shortest path algorithms.

*Why it unblocks this paper:* The Intuition channel's 11-episode series provides clear, concise explanations of graph algorithms and concepts with a strong focus on intuition, ideal for quickly grasping the key ideas of graph representation, traversal, and spanning trees relevant to the paper.

*If you want all of it:* All 11 episodes, about 1.3 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'HuggingGraph: Understanding the Supply Chain of LLM Ecosystem,' start with foundational knowledge on graph theory for heterogeneous networks and metadata collection techniques, which underpin the data gathering and graph construction. Then, explore graph analytics and community detection methods to grasp the analysis of the LLM ecosystem graph. Next, study lineage tracing in AI model ecosystems to understand model dependencies and inheritance. Finally, focus on the core concept of graph-based modeling of AI supply chains and the authors' own talk for the most direct insights.

### Graph theory for heterogeneous networks *(prerequisite)*
Understanding heterogeneous graphs is essential because the paper constructs a large directed heterogeneous graph representing models and datasets with different types of nodes and edges. This foundational knowledge helps in comprehending the graph structure and the subsequent analyses performed.

*How the paper uses it:* The paper models the LLM supply chain as a directed heterogeneous graph with over 400,000 nodes and 460,000 edges representing models and datasets.

▶ [Heterogeneous Graph Processing Part 1](https://www.youtube.com/watch?v=NbR82IJrMkA) — CIRES - Centre for Information Resilience · 55:20 · 3y ago

### Metadata collection and web scraping for AI datasets *(prerequisite)*
The paper's approach relies heavily on systematic metadata collection from platforms like Hugging Face using APIs and web scraping. Understanding these techniques is crucial to appreciate how the supply chain data was gathered and the challenges related to metadata completeness and quality.

*How the paper uses it:* The authors collected metadata from Hugging Face using multiple APIs and web scraping techniques to capture model and dataset dependencies.

▶ [Agentic AI Course | Lecture 6 – APIs, Web Scraping & AI Agents with Firecrawl and Apify](https://www.youtube.com/watch?v=NuwWgf8JCOc) — Ai Codes Institute · 1:16:06 · Streamed 9mo ago

### Graph analytics and community detection *(prerequisite)*
Graph analytics and community detection are key techniques used in the paper to analyze the structure of the LLM supply chain graph, revealing modularity, clusters, and the ecosystem's semantic coherence. This knowledge is necessary to understand the paper's analysis results.

*How the paper uses it:* The paper performs graph analyses including community detection revealing high modularity and semantically coherent clusters within the ecosystem.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 13.1 - Community Detection in Networks](https://www.youtube.com/watch?v=KXi4ha79o3s) — Stanford Online · 22:14 · 5y ago

### Lineage tracing in AI model ecosystems *(prerequisite)*
Lineage tracing is critical for understanding how models inherit properties and dependencies, which is a major use case demonstrated in the paper. This concept helps in comprehending how the authors trace model evolution and identify critical nodes in the supply chain.

*How the paper uses it:* The paper demonstrates use cases such as tracing model lineage and identifying critical nodes that could be single points of failure.

▶ [Complete AI Ecosystem Explained with One Diagram | Artificial Intelligence Explained at High Level](https://www.youtube.com/watch?v=JRIpTwvqnzA) — Ramesh Fadatare - AI & Tech · 22:05 · 4mo ago

### Graph-based modeling of AI supply chains
This is the core concept of the paper, focusing on representing the relationships between LLM models and datasets as a graph to analyze the ecosystem's complexity and dynamics. Understanding this modeling approach is central to grasping the paper's contributions and findings.

*How the paper uses it:* The paper constructs a large directed heterogeneous graph modeling relationships between LLM models and datasets and performs comprehensive analyses.

▶ [Stanford CS221 | Autumn 2025 | Lecture 19: AI Supply Chains](https://www.youtube.com/watch?v=lPx5PF1ttkc) — Stanford Online · 1:14:36 · 7mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HuggingGraph paper, start by learning foundational concepts about graph theory for heterogeneous networks and metadata collection techniques, which are essential for grasping how the supply chain data was gathered and structured. Next, build intuition on graph analytics and community detection to appreciate how the authors analyzed the ecosystem's structure. Then, explore lineage tracing in AI model ecosystems to understand model dependencies. Finally, focus on the core method of graph-based modeling of AI supply chains, which is central to the paper's approach.

### Graph theory for heterogeneous networks *(prerequisite)*
Heterogeneous graphs contain different types of nodes and edges, making them ideal for modeling complex systems with diverse entities and relationships. Understanding how these graphs are structured and processed helps in analyzing multi-typed data like models and datasets in AI supply chains.

*How the paper uses it:* The paper constructs a large directed heterogeneous graph representing models and datasets and their relationships.

▶ [Heterogeneous Graph Processing Part 1](https://www.youtube.com/watch?v=NbR82IJrMkA) — CIRES - Centre for Information Resilience · 55:20 · 3y ago

### Metadata collection and web scraping for AI datasets *(prerequisite)*
Metadata collection and web scraping are techniques to systematically gather structured and unstructured data from online platforms. Learning these methods clarifies how the authors extracted comprehensive supply chain information from Hugging Face and Kaggle.

*How the paper uses it:* The authors used APIs and web scraping to collect metadata about models and datasets from AI platforms.

▶ [Agentic AI Course | Lecture 6 – APIs, Web Scraping & AI Agents with Firecrawl and Apify](https://www.youtube.com/watch?v=NuwWgf8JCOc) — Ai Codes Institute · 1:16:06 · Streamed 9mo ago

### Graph analytics and community detection *(prerequisite)*
Graph analytics involves analyzing the structure and properties of graphs, while community detection identifies clusters of tightly connected nodes. These techniques reveal modularity and semantic clusters within complex networks like the LLM ecosystem.

*How the paper uses it:* The paper uses community detection to find semantically coherent clusters and analyze the graph's modularity.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 13.1 - Community Detection in Networks](https://www.youtube.com/watch?v=KXi4ha79o3s) — Stanford Online · 22:14 · 5y ago

### Lineage tracing in AI model ecosystems *(prerequisite)*
Lineage tracing tracks the ancestry and dependencies of AI models, helping to understand how models inherit properties or vulnerabilities from base models. This is crucial for transparency and risk assessment in AI supply chains.

*How the paper uses it:* The authors perform forward and backward lineage tracing to analyze model evolution and dependencies.

▶ [LLM Ecosystem & Model Landscape| Fundamentals of Gen AI 2026 | Lecture 7](https://www.youtube.com/watch?v=Tlv1g1loc8E) — LearnYard · 24:07 · 3mo ago

### Graph-based modeling of AI supply chains
Graph-based modeling represents entities and their relationships as nodes and edges, enabling comprehensive analysis of complex supply chains. This approach captures dependencies among models and datasets in the LLM ecosystem, facilitating insights into structure and dynamics.

*How the paper uses it:* The core contribution is constructing and analyzing a large directed heterogeneous graph modeling the LLM supply chain.

▶ [Supply Chains, their Graph Structure, and their Role in Information Industries](https://www.youtube.com/watch?v=vjNALGN-4JA) — Berkeley School of Information · 1:17:42 · 11y ago

## Already in your library

- [Stanford CS224W: ML with Graphs | 2021 | Lecture 10.1-Heterogeneous & Knowledge Graph Embedding](https://www.youtube.com/watch?v=Rfkntma6ZUI) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Machine Learning with Heterogeneous Graphs](https://www.youtube.com/watch?v=uvrlKxj8HVU) — also for: Text-Attributed Knowledge Graph Enrichment with Large Language Models for Medical Concept Representation (Dongjie Wang)
- [AI Explained - Knowledge Graphs | Turning Raw Data Into Useful Information](https://www.youtube.com/watch?v=Q5izD6Xlb8o) — also for: ProbRes: Probabilistic Jump Diffusion for Open-World Egocentric Activity Recognition (Sathyanarayanan N. Aakur)
- [James D. Wilson "Community Detection in Multilayer Networks with Heterogeneous Community Structure"](https://www.youtube.com/watch?v=TBtFvGslDzY) — also for: Multi-objective model to protect infrastructure networks from disinformation diffusion (Sridhar Radhakrishnan)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [BSR6806 - Lecture 3 - Part 4 - Leiden/Louvain Clustering - Sherry Xie - ISMMS -Spring 2024](https://www.youtube.com/watch?v=3-hyXIcSHkA) — also for: Optimizing alluvial plots (Lior Pachter)
- [Community Detection : Data Science Concepts](https://www.youtube.com/watch?v=F4RVBAGJcFY) — also for: Community Detection Clustering via Gumbel Softmax (Huaming Zhang)
- [Leiden Algorithm Explained: A Smarter Way to Detect Communities in Networks](https://www.youtube.com/watch?v=hIQM0XLyQiQ) — also for: Optimizing alluvial plots (Lior Pachter)
- [Lecture 24 — Community Detection in Graphs - Motivation | Stanford University](https://www.youtube.com/watch?v=k0uxnVEuuz0) — also for: Learning to Fuse Temporal Proximity Networks: A Case Study in Chimpanzee Social Interactions (Yixuan He)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the HuggingGraph paper. The beginner project focuses on small-scale graph construction and visualization of model-dataset dependencies, the intermediate project reimplements the core heterogeneous graph construction and performs basic graph analytics on Hugging Face metadata, and the advanced project extends the methodology to improve metadata completeness using automated graph AI techniques, addressing a key limitation and future direction of the paper.

### Beginner — Small-Scale LLM Supply Chain Graph Visualization
*Effort: a weekend, ~8 hours*

You build a small directed heterogeneous graph representing dependencies between a handful of LLM models and datasets collected manually or via simple API calls from Hugging Face. You visualize the graph with node types (model or dataset) and edges showing training or fine-tuning relationships.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's core concept of modeling the LLM ecosystem as a heterogeneous graph of models and datasets, and you can reproduce a simplified version of the supply chain graph construction and visualization.

**Grounded in:** Constructed a large directed heterogeneous graph modeling relationships between LLM models and datasets.

**Tech stack:** Python 3.11, NetworkX, Matplotlib or Plotly, Requests

**Data:** A small manually curated subset of Hugging Face models and datasets metadata, collected via Hugging Face API or web scraping.

**Build it:**

1. Use the Hugging Face API to fetch metadata for 10-20 models and their associated datasets.
2. Parse metadata to identify model-to-dataset and model-to-model dependency edges.
3. Construct a directed heterogeneous graph using NetworkX with node attributes for type (model/dataset).
4. Visualize the graph with distinct colors/shapes for models and datasets and labeled edges.
5. Write a README explaining the graph construction and visualization process.

**Ships as:** A GitHub repo with scripts to fetch metadata, build and visualize a small LLM supply chain graph, and a README explaining the approach.

**Stretch goal:** Add interactive visualization with Plotly Dash or Streamlit to explore node details.

### Intermediate — Reimplementation of HuggingGraph Supply Chain Construction and Analysis
*Effort: 2 weekends, ~20 hours*

You reimplement the core pipeline described in the paper to collect metadata from Hugging Face, construct a large directed heterogeneous graph of models and datasets, and perform basic graph analytics such as degree distribution and community detection. You compare your graph statistics to those reported in the paper.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main methodology and validate key graph properties, demonstrating comprehension of the metadata collection, graph construction, and analysis techniques used in the study.

**Grounded in:** Designed a methodology to systematically collect LLM supply chain information from AI platforms; constructed a large directed heterogeneous graph; performed graph analyses revealing structural properties.

**Tech stack:** Python 3.11, NetworkX or PyTorch Geometric, Community detection library (e.g., python-louvain), Requests, Pandas

**Data:** Hugging Face metadata collected via their APIs and web scraping as described in the paper; no official dataset released, so you replicate collection on a smaller scale.

**Build it:**

1. Implement scripts to collect model and dataset metadata from Hugging Face APIs and web scraping.
2. Parse and clean metadata to identify dependencies and construct a directed heterogeneous graph.
3. Compute graph statistics: node/edge counts, degree distribution, largest connected components.
4. Apply community detection algorithms to identify modular clusters.
5. Compare your graph metrics and community modularity to those reported in the paper.
6. Document the pipeline, analysis, and findings in a detailed README.

**Ships as:** A GitHub repo with metadata collection, graph construction, analysis scripts, and a report comparing your results to the paper's findings.

**Stretch goal:** Extend analysis to trace forward and backward lineage of selected base models.

### Advanced — Improving Metadata Completeness in LLM Supply Chain Graphs Using Automated Graph AI
*Effort: 3+ weeks*

You develop an extension to the HuggingGraph methodology that addresses the paper's limitation of incomplete metadata by applying automated graph AI techniques (e.g., link prediction, node classification) to infer missing relationships and metadata attributes. You evaluate the impact of inferred data on graph completeness and reliability.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of the supply chain graph, its metadata challenges, and advanced graph AI methods to enhance data quality and trustworthiness.

**Grounded in:** Significant metadata is missing or incomplete for many models and datasets; future directions include applying advanced graph analytics and graph AI techniques to better understand the supply chain.

**Tech stack:** Python 3.11, PyTorch Geometric or DGL, Scikit-learn, NetworkX, Hugging Face API, Pandas

**Data:** Hugging Face metadata collected as in the intermediate project; incomplete metadata simulated by masking some known edges or attributes for evaluation.

**Build it:**

1. Collect and construct the LLM supply chain graph from Hugging Face metadata as in the intermediate project.
2. Identify nodes and edges with missing or incomplete metadata.
3. Implement graph AI models (e.g., Graph Neural Networks) for link prediction to infer missing edges.
4. Apply node classification or attribute inference to predict missing metadata fields.
5. Evaluate the quality of inferred data by comparing against held-out known metadata.
6. Analyze how inferred metadata improves graph connectivity and completeness.
7. Document methodology, experiments, and results in a comprehensive report.

**Ships as:** A GitHub repo with code for metadata inference using graph AI, evaluation scripts, and a detailed report discussing improvements over baseline metadata completeness.

**Stretch goal:** Integrate the pipeline with a web dashboard to visualize inferred metadata and allow user feedback for corrections.
