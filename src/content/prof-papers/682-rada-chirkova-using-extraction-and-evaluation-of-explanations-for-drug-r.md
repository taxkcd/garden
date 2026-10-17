---
title: "682 · Using Extraction and Evaluation of Explanations for Drug-Repurposing on Knowledge Graphs — Rada Chirkova"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-rada-chirkova"
source_hash: "d86f7f141ff2abdacbfeb1c03c3e241c04e02c53b8d8f4d372201a85774dec7f"
sequence: 682
generator: "outreach-garden: managed"
---

# 682 · Using Extraction and Evaluation of Explanations for Drug-Repurposing on Knowledge Graphs

## At a glance

- **Professor:** Rada Chirkova
- **Institution:** North Carolina State University
- **Paper:** [Using Extraction and Evaluation of Explanations for Drug-Repurposing on Knowledge Graphs](https://doi.org/10.17615/kbf3-ng20)
- **Authors:** Kara Schatz, Jon-Michael Beasley, Cleber Melo-Filho, Alexander Tropsha, Rada Chirkova
- **Year:** 2026

## Paper overview

This paper presents a novel approach to support drug repurposing by automatically generating and evaluating explanations for drug-disease relationships using knowledge graphs (KGs). The method extracts interpretable patterns from biomedical KGs that explain how a drug might treat a disease, and evaluates these explanations with new metrics that consider the entire KG data. The approach is scalable, understandable by biomedical experts, and can help generate testable hypotheses for drug repurposing.

### Why it matters

**Research problem:** The challenge is to reliably infer novel drug-disease relationships from large-scale biomedical knowledge graphs and provide explanations for these hypotheses that are understandable to domain experts and scalable across many hypotheses.

**Why it matters:** Drug repurposing can accelerate drug discovery by finding new uses for existing drugs, which is faster and less costly than developing new drugs. However, biomedical experts face overwhelming amounts of data and complex biological interactions, making hypothesis generation and evaluation difficult. Automated, explainable fact-checking tools can facilitate innovation and reduce expert workload.

**Key contributions:**

- Posing drug-repurposing hypothesis generation as an explainable fact-checking problem.
- Introducing knowledge-graph patterns as a novel, reusable explanation format.
- Developing an algorithm for deriving entity-typed explanations using backward chaining and Horn rules.
- Proposing three new data-supported metrics for reliable evaluation of explanations.
- Conducting biomedical expert user studies validating the understandability and reasonableness of explanations.

## About the professor

**Rada Chirkova** — Professor of Computer Science, Computer Science Department, North Carolina State University.

Research interests: data usability, data readiness, health-care information technology, efficiency of processing of complex queries, data and query reformulation

### Research links

- [Faculty/profile page](https://carta.ncsu.edu/home/people)
- [Identity evidence](https://www.csc.ncsu.edu/people/rychirko)
- [Identity evidence](https://csc.ncsu.edu/people/rychirko)
- [Professor website](https://dbgroup.ncsu.edu/?page_id=29)
- [Lab website](https://www.steed.ncsu.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Knowledge Graphs and Logical Rule Inference
**The paper assumes:** knowledge graphs, logical rule inference, backward chaining, Horn clauses, and symbolic reasoning
**Already in this field?** Skip this entirely if you already understand knowledge graph representations and logical inference methods such as backward chaining on Horn rules.

This background prepares the reader to understand the core methods of the paper, which involve knowledge graphs and logical rule inference using Horn clauses and backward chaining. The rigorous course offers a deep, structured foundation in knowledge representation and reasoning, while the fast track provides a concise, practical introduction to knowledge graphs and their generation, suitable for quickly grasping key concepts and applications.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [NPTEL: Artificial Intelligence: Course 2 - Knowledge Representation and Learning by Prof. Deepak Khemani](https://www.youtube.com/playlist?list=PLjzjdo8qdH03pdpQF0qBSeG1pooNhFyM8) — Suraj Donthi · 70 videos · 32.2h across the first 60 episodes

**Watch only this:** Episodes 1-17, about 9 hours — covering Introduction, Knowledge Representation, Formal Logics, Propositional Logic, Rules of Inference, Forward and Backward Chaining, and Rule-Based Systems, stopping after 'Forward Chaining Rule Based Systems'.

*Why it unblocks this paper:* This university-level course by Prof. Deepak Khemani covers knowledge representation and reasoning in detail, including propositional logic, forward and backward chaining, and rule-based systems, directly relevant to understanding the explanation extraction algorithm based on Horn rules in the paper.

*If you want all of it:* About 32.2 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Knowledge Graph Generator](https://www.youtube.com/playlist?list=PLze6mT6FnYxenwM8XTCF3UHKvWpitBswE) — BioniChaos · 14 videos · 4.5h across 14 episodes

**Watch only this:** Episodes 1-5, about 1.5 hours — covering the basics of knowledge graphs, biomedical data exploration, and transforming text into knowledge graphs.

*Why it unblocks this paper:* This short series focuses on practical knowledge graph generation and manipulation, providing a clear, visual, and application-oriented introduction to knowledge graphs, which helps quickly grasp the concept of knowledge graphs and their use in biomedical data as in the paper.

*If you want all of it:* About 4.5 hours across all 14 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Using Extraction and Evaluation of Explanations for Drug-Repurposing on Knowledge Graphs,' start by grounding yourself in the foundational logic techniques of Horn rules and backward chaining, which underpin the explanation extraction algorithm. Next, build domain-specific knowledge about biomedical knowledge graphs and the role of explainable AI in drug repurposing to contextualize the application. Then, study evaluation metrics critical for assessing explanation quality. Finally, focus on the paper's core concept by viewing the authors' own talk or closely related expert talks on drug repurposing using knowledge graphs to grasp the novel contributions and results.

### Horn rules and backward chaining *(prerequisite)*
Horn rules and backward chaining are fundamental logic inference techniques used to extract explanations from knowledge graphs. Understanding these methods is essential to grasp how the paper's explanation-extraction algorithm operates by reasoning backward from hypotheses to supporting evidence.

*How the paper uses it:* The paper's explanation-finding algorithm is based on backward chaining on Horn rules to extract interpretable explanations.

▶ [Forward and BackwardChaining](https://www.youtube.com/watch?v=EZJs6w2YFRM) — Francisco Iacobelli · 15:09 · 11y ago

### Biomedical knowledge graphs *(prerequisite)*
Biomedical knowledge graphs represent complex biological entities and their relationships, serving as the data foundation for drug repurposing hypotheses. Familiarity with their structure and use cases helps understand the data context and challenges addressed by the paper.

*How the paper uses it:* The paper applies its methods to large biomedical KGs like ROBOKOP, DRKG, and Hetionet for drug repurposing.

▶ [Knowledge graphs and Explainable AI for Drug Repurposing on Rare Diseases | Pablo Perdomo Quinteiro](https://www.youtube.com/watch?v=zN7AVQ5DZVc) — Biomedical Ontology World · 22:57 · 3y ago

### Explainable AI in drug repurposing *(prerequisite)*
Explainable AI approaches in drug repurposing emphasize interpretable models that generate understandable hypotheses for biomedical experts. This background clarifies the motivation and significance of the paper's explainable fact-checking framework.

*How the paper uses it:* The paper frames drug-repurposing hypothesis generation as an explainable fact-checking problem to aid biomedical experts.

▶ [BioVis Keynote: Machine Learning for Drug Repurposing - Marinka  Zitnik - BioVis - ISMB 2020](https://www.youtube.com/watch?v=hVKcd3uhb3w) — ISCB · 57:05 · 5y ago

### Evaluation metrics for explanation quality *(prerequisite)*
Evaluation metrics such as confidence, head coverage, and F1-score are crucial for assessing the reliability and usefulness of extracted explanations. Understanding these metrics is key to appreciating the paper's novel contributions in explanation evaluation.

*How the paper uses it:* The paper proposes three new data-supported metrics for reliable evaluation of explanations extracted from knowledge graphs.

▶ [Neurosymbolic AI for and with Knowledge Graphs | Pierre Monnin | I3S Seminar](https://www.youtube.com/watch?v=u9fPLusTTkw) — QuietRocket · 33:41 · 2w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's approach to explainable drug repurposing using knowledge graphs. We start with the basics of biomedical knowledge graphs to understand the data structure, then cover the logic technique of Horn rules and backward chaining used for explanation extraction. Next, we explore evaluation metrics critical for assessing explanation quality, and finally, we focus on the core method of knowledge graph explanation extraction as applied in the paper.

### Biomedical knowledge graphs *(prerequisite)*
Biomedical knowledge graphs organize complex biomedical data (like drugs, diseases, genes) into entities and relationships, enabling structured queries and inference. Understanding their structure and content is essential to grasp how drug repurposing hypotheses are generated and explained.

*How the paper uses it:* The paper uses large biomedical knowledge graphs such as ROBOKOP, DRKG, and Hetionet as the data foundation for extracting drug-disease explanations.

▶ [Medical knowledge graph: A revolutionary knowledge representation dimension in medical domain](https://www.youtube.com/watch?v=TJCP4h0klAs) — Health Research Methods, Evidence, and Impact · 1:02:12 · 4y ago

### Horn rules and backward chaining *(prerequisite)*
Horn rules are a type of logical rule used in AI to infer conclusions from premises. Backward chaining is a reasoning method that starts from a goal (hypothesis) and works backward to find supporting evidence. This logic technique is fundamental for extracting interpretable explanations from knowledge graphs.

*How the paper uses it:* The paper's explanation-extraction algorithm is based on backward chaining over Horn rules to find interpretable patterns supporting drug-disease hypotheses.

▶ [Backward Chaining in Artificial Intelligence | Backward Chaining in Artificial Intelligence Example](https://www.youtube.com/watch?v=W5O8QAWu-OM) — Well Academy · 17:23 · 8y ago

### Evaluation metrics for explanation quality *(prerequisite)*
Evaluation metrics like confidence, coverage, and F1-score measure how reliable and useful extracted explanations are, balancing precision and recall. Understanding these metrics helps assess the quality of explanations generated from knowledge graphs.

*How the paper uses it:* The paper introduces three new data-supported metrics—confidence, head coverage, and F1-score—to evaluate explanation quality globally using the knowledge graph data.

▶ [Confusion Matrix Solved Example Accuracy Precision Recall F1 Score Prevalence by Mahesh Huddar](https://www.youtube.com/watch?v=_CGTbkHwUHQ) — Mahesh Huddar · 5:50 · 3y ago

### Knowledge graph explanation extraction
This concept covers how interpretable patterns (explanations) are automatically extracted from knowledge graphs to explain hypotheses like drug-disease treatment links. It involves mining entity-typed graph patterns that can be reused across multiple hypotheses.

*How the paper uses it:* The core method in the paper is the KGEG algorithm that extracts reusable knowledge-graph patterns as explanations for drug repurposing hypotheses using backward chaining and Horn rules.

▶ [Information Extraction & Knowledge Graphs](https://www.youtube.com/watch?v=-3yETNYG18Y) — SH AI Academy · 15:53 · 11mo ago

## Already in your library

- [Knowledge Graphs - Computerphile](https://www.youtube.com/watch?v=PZBm7M0HGzw) — also for: CausalTrace: A Neurosymbolic Causal Analysis Agent for Smart Manufacturing (Utkarshani Jaimini)
- [Brief Introduction To Knowledge Graph In NLP](https://www.youtube.com/watch?v=WZilmUNVm2U) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Horn Clauses](https://www.youtube.com/watch?v=hgw59_HBU2A) — also for: Empirical Challenge for NC Theory (Uzi Vishkin)
- [Knowledge graphs: A short introduction to the core concepts ...](https://www.youtube.com/watch?v=-jkKlY9UA_Y) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)
- [Stanford CS229: Machine Learning | Summer 2019 | Lecture 16 - K-means, GMM, and EM](https://www.youtube.com/watch?v=LmpkKwsyQj4) — also for: Flash-Fusion: Enabling Expressive, Low-Latency Queries on IoT Sensor Streams with LLMs (Ashutosh Dhekne)
- [Stanford CS229: Machine Learning | Summer 2019 | Lecture ...](https://www.youtube.com/watch?v=Lb1-iNIOLBw) — also for: On the Entropy Calibration of Language Models (Gregory Valiant)
- [Knowledge Graph Construction - Lecture](https://www.youtube.com/watch?v=5OGMYQaIPKw) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the KGEG method for explainable drug repurposing on biomedical knowledge graphs. The beginner project reproduces a core explanation evaluation metric on a small synthetic KG to grasp the scoring concepts. The intermediate project implements the core backward chaining explanation extraction algorithm on a public biomedical KG (DRKG) and compares explanation quality using the paper's metrics. The advanced project extends the method by incorporating edge weights or node properties into explanation evaluation, addressing a stated future direction and limitation of the original approach.

### Beginner — Implement Explanation Evaluation Metrics on a Toy Knowledge Graph
*Effort: a weekend, ~8 hours*

You build a small Python script that creates a simple synthetic knowledge graph representing drug-disease relationships and associated biomedical entities. You implement the three explanation evaluation metrics introduced in the paper—confidence, head coverage, and F1-score—and compute these metrics for a few manually defined explanation patterns.

**Why it shows you understood the paper:** This project shows you understand the novel metrics proposed for evaluating explanation quality globally over KG data, a key contribution of the paper. A professor would see you can concretely apply these metrics and interpret their meaning on example data.

**Grounded in:** The paper proposes three new data-supported metrics for reliable evaluation of explanations: confidence, head coverage, and F1-score.

**Tech stack:** Python 3.11, Jupyter Notebook, NetworkX

**Data:** Synthetic toy knowledge graph you create in code to simulate drug-disease and biomedical entity relations.

**Build it:**

1. Create a small synthetic knowledge graph in NetworkX with nodes representing drugs, diseases, and biomedical entities and edges representing relations.
2. Define a few example explanation patterns as subgraph patterns or Horn-rule-like structures.
3. Implement the confidence, head coverage, and F1-score metrics as described in the paper to evaluate these explanation patterns against the KG.
4. Compute and print the metric scores for each explanation pattern.
5. Write a README explaining the metrics, how they are computed, and what the scores indicate.

**Ships as:** A Python notebook or script that computes and explains the three explanation evaluation metrics on a toy KG, with clear documentation.

**Stretch goal:** Add visualization of the explanation patterns and their coverage on the KG using NetworkX drawing functions.

### Intermediate — Reimplement KGEG Explanation Extraction on DRKG and Evaluate Explanations
*Effort: 2 weekends, ~20 hours*

You implement the core backward chaining algorithm for explanation extraction using Horn rules on a subset of the DRKG biomedical knowledge graph. You extract entity-typed explanation patterns for drug-treats-disease hypotheses and evaluate these explanations using the paper's three metrics. You compare your metric results against a simple baseline such as random explanation patterns or untyped patterns.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core method of explanation extraction and evaluation on a real biomedical KG. It shows you grasp the algorithmic approach and the importance of the new metrics for assessing explanation quality.

**Grounded in:** The authors develop an algorithm for deriving entity-typed explanations using backward chaining and Horn rules, and propose three new data-supported metrics for reliable evaluation of explanations.

**Tech stack:** Python 3.11, Neo4j (community edition), py2neo or Neo4j Python driver, NetworkX

**Data:** A publicly available subset of the DRKG knowledge graph from https://github.com/gnn4dr/DRKG, focusing on drug-disease relations.

**Build it:**

1. Download and preprocess a manageable subset of the DRKG knowledge graph focusing on drug-disease and related biomedical entities.
2. Set up a Neo4j database locally and import the DRKG subset into it.
3. Implement the backward chaining algorithm to extract entity-typed explanation patterns (Horn rules of length up to two) for given drug-treats-disease hypotheses.
4. Implement the confidence, head coverage, and F1-score metrics to evaluate the extracted explanations globally over the KG.
5. Compare the metric scores of your extracted explanations against a baseline such as random or untyped patterns.
6. Document your implementation, evaluation results, and insights in a README.

**Verified links from the paper:**

- <https://github.com/gnn4dr/DRKG> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python project with scripts to extract and evaluate explanations on DRKG, with a report comparing metric results to a baseline.

**Stretch goal:** Add a simple visualization of explanation patterns and their coverage on the KG using NetworkX or Neo4j Bloom.

### Advanced — Extend Explanation Evaluation by Incorporating Edge Weights and Node Properties
*Effort: 3+ weeks*

You extend the KGEG explanation evaluation framework by incorporating edge weights and node properties into the scoring metrics, addressing a limitation and future direction noted in the paper. You modify the confidence, head coverage, and F1-score metrics to weight explanations by edge confidence scores or node promiscuity. You apply this extended evaluation on a biomedical KG (e.g., DRKG) and analyze how it affects explanation ranking and selection.

**Why it shows you understood the paper:** This project shows you deeply understand the paper's limitations and future directions, and can innovate on the core method. It demonstrates research-level engagement by improving explanation evaluation to handle richer KG data, which is critical for robustness and scalability.

**Grounded in:** Future directions include developing refined metrics incorporating edge weights, node properties, and node promiscuity for more nuanced explanation evaluation; limitations include dependency on KG quality and properties affecting accuracy.

**Tech stack:** Python 3.11, Neo4j, py2neo or Neo4j Python driver, NetworkX, Pandas

**Data:** A subset of the DRKG knowledge graph with available edge confidence scores or node attributes; if unavailable, simulate edge weights and node properties based on DRKG structure.

**Build it:**

1. Extend the existing explanation evaluation metric implementations to incorporate edge weights and node properties, e.g., weighting confidence by edge confidence scores.
2. Obtain or simulate edge weights and node properties on the DRKG subset.
3. Apply the extended metrics to evaluate explanation patterns extracted via backward chaining.
4. Compare the new weighted metrics against the original unweighted metrics to analyze differences in explanation ranking.
5. Document the methodology, code, and analysis of results in detail.
6. Optionally, propose heuristics to handle node promiscuity and edge weight normalization.

**Verified links from the paper:**

- <https://github.com/gnn4dr/DRKG> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A research-style codebase and report demonstrating extended explanation evaluation metrics with edge weights and node properties, applied to DRKG data.

**Stretch goal:** Experiment with explanation extraction beyond Horn rules of length two by optimizing Neo4j queries or using alternative graph databases to overcome query timeouts.

_The DRKG knowledge graph is large and complex; selecting a manageable subset and setting up Neo4j locally requires careful preprocessing and resource planning._
