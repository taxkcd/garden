---
title: "925 · CAVA: A Visual Analytics System for Exploratory Columnar Data Augmentation Using Knowledge Graphs — Alex Endert"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alex-endert"
source_hash: "a5e738cd7a6e3207778e56845af5619fca9015b3ef981d4ff3da6e35b95e3c4a"
sequence: 925
generator: "outreach-garden: managed"
---

# 925 · CAVA: A Visual Analytics System for Exploratory Columnar Data Augmentation Using Knowledge Graphs

## At a glance

- **Professor:** Alex Endert
- **Institution:** Georgia Institute of Technology
- **Paper:** [CAVA: A Visual Analytics System for Exploratory Columnar Data Augmentation Using Knowledge Graphs](https://arxiv.org/pdf/2009.02865)
- **Authors:** Dylan Cashman, Shenyu Xu, Subhajit Das, Florian Heimerl, Cong Liu, Shah Rukh Humayoun, Michael Gleicher, Alex Endert, Remco Chang
- **Year:** 2021

## Paper overview

CAVA is a visual analytics system that helps users augment tabular datasets by interactively adding new columns derived from external knowledge graphs like Wikidata. Unlike traditional workflows where data augmentation happens before analysis, CAVA integrates data augmentation into the analysis process, allowing users to discover, explore, and add relevant attributes on-the-fly without programming. This improves the quality and scope of data analysis and predictive modeling.

### Why it matters

**Research problem:** Traditional visual analytics systems separate data augmentation from analysis, fixing the dataset attributes before analysis begins. This limits iterative exploration and the ability to add new, relevant data attributes discovered during analysis. Additionally, joining external data to user datasets is complex due to schema mismatches, data fragmentation, and complex joins, especially when using large knowledge repositories.

**Why it matters:** Integrating data augmentation into visual analytics workflows can enable more flexible, informed, and effective data analysis. It allows users to iteratively discover and add relevant data attributes, improving insight generation and predictive modeling. Overcoming the complexity of joining external data sources empowers users without requiring database expertise, thus broadening the accessibility and impact of visual analytics.

**Key contributions:**

- Design and implementation of CAVA, a visual analytics system for exploratory columnar data augmentation using knowledge graphs.
- A visual interface that treats attributes as first-class citizens, showing joinable attributes with metadata and join quality estimations.
- Support for complex multi-hop joins with user-specified aggregations, visualizing knowledge graph neighborhoods to aid query construction.
- Demonstration of CAVA’s utility in two usage scenarios: insight generation on conflict data and improving predictive modeling on poverty data.
- A preliminary user study validating usability and effectiveness in helping users discover and join relevant external data.

## About the professor

**Alex Endert** — Professor, School of Interactive Computing, Georgia Institute of Technology.

Research interests: My research helps people make sense of data and AI through the use of interactive visualizations, for the purpose of empowering individuals to gain insights into datasets, make informed decisions, and promote the responsible use of AI for domain-driven problems.

### Research links

- [Faculty/profile page](http://va.gatech.edu/endert)
- [Professor website](http://va.gatech.edu/)
- [Resolved homepage](https://va.gatech.edu/endert/)
- [Lab website](https://gtvalab.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=_ZIAy3cAAAAJ&hl=en)
- [Social profile](https://twitter.com/endertalex)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Knowledge Graphs and Graph Databases
**The paper assumes:** knowledge graphs, graph data models, graph query languages, graph traversal and join operations
**Already in this field?** Skip this entirely if you already understand knowledge graph concepts, graph databases, and how to query and join graph-structured data.

Understanding knowledge graphs and graph databases is essential for grasping the core concepts of the CAVA paper, which relies on multi-hop joins and aggregations over knowledge graph neighborhoods. The rigorous course option provides a deep, structured university-level introduction to large language models and transformers, which underpin many modern knowledge graph applications, while the fast track offers a concise, focused introduction to knowledge graphs themselves, ideal for quickly building intuition and foundational knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Large Language Models (LLMs)](https://www.youtube.com/playlist?list=PLp6ek2hDcoNDDRINFiWGDlPKUwW-g1Hjk) — NPTEL IIT Delhi · 38 videos · 29.0h across 38 episodes

**Watch only this:** Episodes 1-15 (Introduction and Recent Advances through Introduction to Transformer: Self & Multi-Head Attention), about 11.25 hours — these cover the fundamentals of language models and transformers relevant to understanding knowledge graph embeddings and query mechanisms.

*Why it unblocks this paper:* This NPTEL IIT Delhi course covers foundational concepts in language models and transformers, which are closely related to knowledge graph representations and querying techniques used in CAVA. It provides a thorough grounding in the architectures and methods that support knowledge graph integration and multi-hop reasoning.

*If you want all of it:* All 23 episodes, about 29.0 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Knowledge Graph](https://www.youtube.com/playlist?list=PLcNUPCLa16905gvpgZi7W5ky3FHPTUKrb) — ray · 8 videos · 2.0h across 8 episodes

**Watch only this:** Episodes 1-4 (What is a Knowledge Graph? through Knowledge Graph or Vector Database… Which is Better?), about 1 hour — these episodes give a concise overview of knowledge graphs and their key properties relevant to the paper.

*Why it unblocks this paper:* This short playlist by ray provides a clear, visual introduction to knowledge graphs, covering what they are, their uses, and practical examples, which directly supports understanding the data structures and join concepts in CAVA without requiring extensive time investment.

*If you want all of it:* All 8 episodes, about 2.0 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CAVA system and its contributions, start by building foundational knowledge on knowledge graphs and multi-hop joins, which are critical for understanding the external data sources and complex query construction used in CAVA. Next, explore interactive visual query construction techniques to appreciate how CAVA enables user-friendly specification of complex joins and aggregations. Finally, focus on the core concept of the CAVA system itself through the authors' own talks, which provide direct insight into the system design, goals, and demonstrations.

### Knowledge graphs basics *(prerequisite)*
Knowledge graphs form the foundational data structure that CAVA leverages for data augmentation. Understanding their structure, semantics, and applications is essential to grasp how CAVA connects user datasets to external knowledge repositories like Wikidata.

*How the paper uses it:* CAVA uses knowledge graphs as the external data source for augmenting tabular datasets interactively.

▶ [KGC 2022 Keynote: 'Deep Learning with Knowledge Graphs' by Stanford's Prof. Jure Leskovec](https://www.youtube.com/watch?v=T4afZsyHmUc) — The Knowledge Graph Conference · 37:12 · 4y ago

### Multi-hop joins in knowledge graphs *(prerequisite)*
Multi-hop joins enable querying across multiple edges in a knowledge graph, allowing complex attribute derivations. This concept is key to understanding how CAVA supports complex join operations with user-specified aggregations.

*How the paper uses it:* CAVA supports complex multi-hop joins with aggregations to derive new columns from knowledge graphs.

▶ [Tutorial Explainable AI using Knowledge Graphs](https://www.youtube.com/watch?v=MOfTXxgO78A) — AI Institute at UofSC - #AIISC · 1:29:48 · 5y ago

### Interactive visual query construction *(prerequisite)*
Interactive visual query builders simplify the creation of complex queries by non-expert users. Understanding these systems provides context for CAVA's visual interface that abstracts query construction for knowledge graph joins.

*How the paper uses it:* CAVA provides an interactive visual interface to specify complex joins and aggregations without programming.

▶ [SIEUFERD: A Visual Query System](https://www.youtube.com/watch?v=W6xmqcb8hFQ) — eirikbakke · 6:16 · 10y ago

### CAVA system talk *(paper-talk search result; attribution unverified)*
The authors' own presentations on CAVA offer the most direct and detailed insight into the system's design, implementation, and evaluation. These talks cover the motivation, interface, and usage scenarios, providing a comprehensive understanding of the paper's contributions.

*How the paper uses it:* These talks are by the paper's authors and focus specifically on the CAVA system and its capabilities.

▶ [cava vast 2020 cashman](https://www.youtube.com/watch?v=0lxRYXfEheM) — Dylan Cashman · 13:56 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand CAVA, start by learning the foundational concept of knowledge graphs, which are the external data sources used for augmentation. Next, grasp multi-hop joins in knowledge graphs to appreciate how complex queries are constructed for data augmentation. Then, explore interactive visual query construction to see how users specify these joins easily. Finally, focus on the core concept of visual analytics data augmentation, which is the central method enabling CAVA's interactive addition of new data attributes during analysis.

### Knowledge graphs basics *(prerequisite)*
Knowledge graphs are structured representations of information where entities are nodes and relationships are edges, enabling rich semantic queries. Understanding their structure and purpose is essential to see how external data can be linked to user datasets.

*How the paper uses it:* CAVA uses knowledge graphs like Wikidata as the external data source for augmenting tabular datasets.

▶ [Knowledge Graphs in one Video! It is Trending by Why?? Eveything you need to know! With Code!](https://www.youtube.com/watch?v=xu74BS2UC2Q) — Keerti Purswani · 30:51 · 1y ago

### Multi-hop joins in knowledge graphs *(prerequisite)*
Multi-hop joins involve traversing multiple edges in a knowledge graph to connect data points, allowing complex attribute derivations. This concept is key to understanding how CAVA supports complex queries with user-specified aggregations.

*How the paper uses it:* CAVA supports complex multi-hop joins with visualizations to help users construct these queries for data augmentation.

▶ [Tutorial Explainable AI using Knowledge Graphs](https://www.youtube.com/watch?v=MOfTXxgO78A) — AI Institute at UofSC - #AIISC · 1:29:48 · 5y ago

### Interactive visual query construction *(prerequisite)*
Interactive visual query construction lets users build complex database queries through graphical interfaces instead of code, making data joining accessible. This approach underpins CAVA's user-friendly interface for specifying joins and aggregations.

*How the paper uses it:* CAVA provides an interactive visual interface to specify complex joins and aggregations without programming.

▶ [SIEUFERD: A Visual Query System](https://www.youtube.com/watch?v=W6xmqcb8hFQ) — eirikbakke · 6:16 · 10y ago

### CAVA system talk *(paper-talk search result; attribution unverified)*
A direct presentation by the paper's authors explaining CAVA's design, goals, and usage scenarios offers practical insight into the system. Watching a concise demo or talk helps solidify understanding of how the concepts come together in CAVA.

*How the paper uses it:* These talks provide first-hand explanation and demonstration of CAVA's capabilities and user interface.

▶ [CAVA demo - VAST 2020 Cashman et al](https://www.youtube.com/watch?v=UTcHnrHcFKE) — Dylan Cashman · 7:43 · 6y ago

## Already in your library

- [MedAI Session 11: Hydranet -- Data Augmentation for Regression Neural Networks | Florian Dubost](https://www.youtube.com/watch?v=ph6xEFAu9A0) — also for: Synthesized Image Training Techniques: On Improving Model Performance Using Confusion (Wallapak Tavanapong)
- [Data Augmentation in Deep Learning | CNN](https://www.youtube.com/watch?v=sM2C-SsREgM) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Image Data Augmentation Explained | Boost Model Accuracy with Smart Techniques](https://www.youtube.com/watch?v=70gmWbwUOEE) — also for: An Investigation of Methods for Improving Spatial Invariance of Convolutional Neural Networks for Image Classification (Sumitra Mukherjee)
- [Data Augmentation Explained Simply](https://www.youtube.com/watch?v=yY1Qh_4LHf8) — also for: A Neural Database for Differentially Private Spatial Range Queries (Gabriel Ghinita)
- [Lec 26 | Knowledge and Retrieval: Knowledge Graph](https://www.youtube.com/watch?v=tuAhkRhQq6A) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Knowledge Graphs - Computerphile](https://www.youtube.com/watch?v=PZBm7M0HGzw) — also for: CausalTrace: A Neurosymbolic Causal Analysis Agent for Smart Manufacturing (Utkarshani Jaimini)
- [353 - An introduction to knowledge graphs](https://www.youtube.com/watch?v=u7Z6osuKPqw) — also for: CancerKG.ORG–A Web-scale, Interactive, Verifiable Knowledge Graph-LLM Hybrid for Assisting with Optimal Cancer Treatment and Care (Michael N. Gubanov)
- [Introduction to Graph Theory: A Computer Science Perspective](https://www.youtube.com/watch?v=LFKZLXVO-Dg) — also for: Algebraic Vertex Ordering of a Sparse Graph for Adjacency Access Locality and Graph Compression (Xiaobai Sun)
- [AI Explained - Knowledge Graphs | Turning Raw Data Into Useful Information](https://www.youtube.com/watch?v=Q5izD6Xlb8o) — also for: ProbRes: Probabilistic Jump Diffusion for Open-World Egocentric Activity Recognition (Sathyanarayanan N. Aakur)
- [Brief Introduction To Knowledge Graph In NLP](https://www.youtube.com/watch?v=WZilmUNVm2U) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Neurosymbolic AI for and with Knowledge Graphs | Pierre Monnin | I3S Seminar](https://www.youtube.com/watch?v=u9fPLusTTkw) — also for: Using Extraction and Evaluation of Explanations for Drug-Repurposing on Knowledge Graphs (Rada Chirkova)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of CAVA's approach to interactive data augmentation using knowledge graphs. The beginner project recreates a core visual interface element for exploring joinable attributes with metadata and join quality estimates. The intermediate project implements a simplified version of CAVA's core method to augment a tabular dataset with knowledge graph attributes and evaluates the impact on predictive modeling. The advanced project extends the system to address a key limitation by integrating multiple knowledge graphs to improve data coverage and reduce sparsity.

### Beginner — Visual Attribute Explorer for Knowledge Graph Joins
*Effort: a weekend, ~6-8 hours*

You build a React-based interactive UI component that displays a list of joinable attributes for a given tabular dataset column, showing metadata and a visual join quality estimate (e.g., donut chart). The component allows users to preview sample join results for a few rows, mimicking CAVA's attribute exploration interface.

**Why it shows you understood the paper:** This project demonstrates you understand how CAVA treats attributes as first-class citizens and visually encodes join quality to guide users in exploratory data augmentation.

**Grounded in:** A visual interface that treats attributes as first-class citizens, showing joinable attributes with metadata and join quality estimations.

**Tech stack:** TypeScript, React, D3.js or a charting library

**Data:** Use a small public tabular dataset (e.g., a subset of the UCI Adult dataset) and simulate joinable attributes metadata and join quality scores based on simple heuristics.

**Build it:**

1. Set up a React project with TypeScript and a charting library.
2. Create a component that lists dataset columns and fetches simulated joinable attributes metadata.
3. Implement a donut chart visualization to represent join quality estimates for each attribute.
4. Add a preview panel that shows sample joined values for selected attributes on a few dataset rows.
5. Style the component for clarity and usability.

**Ships as:** A GitHub repo with a React app demonstrating an interactive attribute explorer UI with join quality visualization and sample join previews.

**Stretch goal:** Add support for filtering and sorting joinable attributes by join quality or metadata properties.

### Intermediate — Simplified CAVA Data Augmentation Pipeline with Wikidata
*Effort: 2 weekends, ~20 hours*

You implement a simplified data augmentation pipeline that takes a tabular dataset and interactively adds new columns by joining with Wikidata entities using SPARQL queries. The system supports single-hop joins with preview and materialization of augmented columns. You evaluate the impact of augmentation on a predictive model's performance (e.g., linear regression R squared).

**Why it shows you understood the paper:** This project shows you can reimplement CAVA's core method of integrating knowledge graph joins into data analysis workflows and validate the benefit of augmentation on predictive modeling.

**Grounded in:** CAVA connects user datasets to knowledge graphs (specifically Wikidata) and provides an interactive visual interface to explore joinable attributes, preview data distributions, and specify complex multi-hop joins with aggregations.

**Tech stack:** Python 3.11, FastAPI, React, SPARQLWrapper or Wikidata Query Service API

**Data:** Use a public tabular dataset such as the UCI Adult dataset or a small poverty dataset substitute, and query Wikidata for joinable attributes based on entity identifiers or names.

**Build it:**

1. Build a backend service that queries Wikidata via SPARQL to find joinable attributes for dataset columns.
2. Implement a frontend React interface to display joinable attributes and preview join results on sample rows.
3. Allow users to select attributes to augment the dataset with new columns.
4. Train a simple predictive model (e.g., linear regression) on the original and augmented datasets.
5. Report and compare model performance metrics (e.g., R squared) to demonstrate augmentation benefits.

**Ships as:** A full-stack application with interactive data augmentation from Wikidata and a report showing improved predictive modeling performance.

**Stretch goal:** Extend support to multi-hop joins with simple aggregations and visualize the knowledge graph neighborhood for query construction.

### Advanced — Multi-Knowledge Graph Data Augmentation to Reduce Sparsity
*Effort: 3+ weeks*

You extend the simplified CAVA pipeline to integrate multiple knowledge graphs (e.g., Wikidata plus another public knowledge graph like DBpedia or a domain-specific KG) for data augmentation. The system merges joinable attributes from multiple sources to improve coverage and reduce sparsity. You analyze the increase in joinable rows and evaluate the impact on downstream predictive modeling.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper — reliance on a single knowledge graph with sparse coverage — and demonstrates your ability to extend the system architecture and data integration methods to improve augmentation quality.

**Grounded in:** Extending CAVA to support multiple knowledge graphs to broaden data coverage and reduce sparsity.

**Tech stack:** Python 3.11, FastAPI, React, SPARQLWrapper or multiple KG APIs

**Data:** Use the same tabular dataset as intermediate, augmenting with Wikidata and at least one other public knowledge graph such as DBpedia.

**Build it:**

1. Research and select a second public knowledge graph with accessible query APIs.
2. Extend backend services to query multiple knowledge graphs and unify joinable attribute metadata.
3. Modify frontend to display attributes from multiple sources and allow users to select augmentation columns from any source.
4. Implement logic to merge augmented columns and handle conflicts or missing data.
5. Evaluate the increase in joinable row coverage compared to single KG augmentation.
6. Train predictive models on datasets augmented with single and multiple KGs and compare performance.

**Ships as:** A multi-knowledge graph data augmentation system with analysis of coverage improvements and predictive modeling impact.

**Stretch goal:** Develop enhanced visualizations to help users understand multi-hop joins across multiple knowledge graphs.

_The paper does not provide released code or datasets; you will need to use public datasets (e.g., UCI Adult) as substitutes and rely on Wikidata and other public knowledge graph APIs for data augmentation._
