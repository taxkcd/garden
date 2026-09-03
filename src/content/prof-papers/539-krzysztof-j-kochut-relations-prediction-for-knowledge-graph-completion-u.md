---
title: "539 · Relations Prediction for Knowledge Graph Completion using Large Language Models — Krzysztof J. Kochut"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-krys-j-kochut"
source_hash: "dcb5924903b827b1ad98e01527a26d10d60724402c2e60feee4d3901f149eead"
sequence: 539
generator: "outreach-garden: managed"
---

# 539 · Relations Prediction for Knowledge Graph Completion using Large Language Models

## At a glance

- **Professor:** Krzysztof J. Kochut
- **Institution:** University of Georgia
- **Paper:** [Relations Prediction for Knowledge Graph Completion using Large Language Models](https://arxiv.org/abs/2405.02738)
- **Authors:** Sakher Khalil Alqaaidi, Krzysztof Kochut
- **Year:** 2024

## Paper overview

This paper presents a method to complete knowledge graphs by predicting possible relations between pairs of entities using large language models (LLMs). The authors fine-tune Llama 2, a powerful LLM, to predict relations based only on the textual names of nodes, enabling effective predictions even for unseen entities. Their approach achieves state-of-the-art results on standard benchmarks.

### Why it matters

**Research problem:** Knowledge graphs are often incomplete, lacking some relations between entities. The task is to predict these missing relations (relation prediction) to complete and enrich the knowledge graph.

**Why it matters:** Knowledge graphs are widely used in applications like recommender systems and information extraction. Improving their completeness enhances their utility and accuracy in such applications.

**Key contributions:**

- Utilization of Llama 2 large language model for relation prediction in knowledge graphs.
- A minimal input approach using only node names, without lengthy descriptions.
- Capability to operate effectively in inductive settings (predicting relations for unseen entities).
- Single-stage training process for relation prediction.
- Achieving new state-of-the-art scores on the FreeBase benchmark.

## About the professor

**Krzysztof J. Kochut** — University of Georgia.

### Research links

- [Faculty/profile page](https://www.cs.uga.edu/directory/people/krzysztof-j-kochut)
- [Identity evidence](http://cobweb.cs.uga.edu/~kochut)
- [Identity evidence](http://webster.cs.uga.edu/~kochut/research/shortcv.html)
- [Identity evidence](https://dblp.org/pid/k/KrysKochut)
- [Identity evidence](https://www.researchgate.net/scientific-contributions/Krys-J-Kochut-34628301)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Knowledge Graphs and Relation Prediction
**The paper assumes:** knowledge graphs, relation prediction, knowledge graph completion, inductive and transductive learning in graphs
**Already in this field?** Skip this entirely if you already understand knowledge graphs and the problem of relation prediction in graph-based machine learning.

This background prepares the reader to understand knowledge graphs and the task of relation prediction, which are central to the paper's approach using large language models for knowledge graph completion. The rigorous course option offers a deep, structured university-level treatment of graph machine learning concepts relevant to relation prediction, while the fast track provides a concise, practical introduction to knowledge graphs and graph databases for quicker comprehension. Choose the course for thorough foundational knowledge and the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W: Machine Learning with Graphs](https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imNkDn) — Stanford Online · 60 videos · 22.4h across 60 episodes

**Watch only this:** Lectures 1.1 to 5.2 (15 episodes, about 5.5 hours) — covering graph fundamentals, traditional feature-based methods for nodes and links, node embeddings, and relational classification, which are essential for grasping relation prediction tasks.

*Why it unblocks this paper:* Stanford CS224W: Machine Learning with Graphs is a comprehensive university lecture series that covers graph representations, node and link prediction, embeddings, and graph neural networks, directly relevant to understanding relation prediction in knowledge graphs as used in the paper.

*If you want all of it:* 22.4 hours across 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Intro to Graph Databases Series](https://www.youtube.com/playlist?list=PL9Hl4pk2FsvWM9GWaguRhlCQ-pa-ERd4U) — Neo4j · 14 videos · 3.5h across 14 episodes

**Watch only this:** Episodes 5 to 9 (5 episodes, about 1.25 hours) — covering 'What is a Knowledge Graph?', 'What is a graph database?', 'Identifying Graph Shaped Problems', 'Intro to Graph Databases Episode #1 - Evolution of DBs', and 'Intro to Graph Databases Episode #2 - Properties of Graph DBs & Use Cases', which together provide a focused overview of knowledge graphs and their practical context.

*Why it unblocks this paper:* The 'Intro to Graph Databases Series' by Neo4j provides a clear, visual introduction to knowledge graphs, graph databases, and their use cases, giving practical intuition about graph structures and querying that supports understanding the paper's focus on knowledge graph completion.

*If you want all of it:* 3.5 hours across 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on relation prediction for knowledge graph completion using large language models, start by building foundational knowledge on large language model fine-tuning and inductive learning in knowledge graphs, as these underpin the methodology. Then, study multi-label classification methods and knowledge graph benchmark evaluations to grasp the problem formulation and evaluation metrics. Finally, focus on the core concept of relation prediction in knowledge graphs through advanced university lectures, culminating with the authors' own lecture on knowledge graph construction to connect theory with their specific approach.

### Large language models fine-tuning *(prerequisite)*
Fine-tuning large language models is crucial to adapting them for specific tasks such as relation prediction. Understanding the techniques and challenges involved in fine-tuning LLMs, including parameter-efficient methods, provides insight into how the authors adapted Llama 2 for their task.

*How the paper uses it:* The authors fine-tune the Llama 2 large language model to perform relation prediction between entity pairs.

▶ [Finetune LLMs to teach them ANYTHING with Huggingface and Pytorch | Step-by-step tutorial](https://www.youtube.com/watch?v=bZcKYiwtw1I) — Neural Breakdown with AVB · 38:55 · 1 year ago

### Inductive learning in knowledge graphs *(prerequisite)*
Inductive learning enables models to generalize to unseen entities, a key challenge in knowledge graph completion. Understanding inductive reasoning and embedding techniques in knowledge graphs is essential to appreciate how the paper's method predicts relations for unseen nodes using only textual names.

*How the paper uses it:* The paper emphasizes inductive relation prediction by relying solely on entity names, allowing predictions for unseen entities.

▶ [Lec 26 | Knowledge and Retrieval: Knowledge Graph](https://www.youtube.com/watch?v=tuAhkRhQq6A) — NPTEL IIT Delhi · 21:38 · 1 year ago

### Multi-label classification methods *(prerequisite)*
Relation prediction is formulated as a multi-label classification problem since multiple relations can exist between entity pairs. Grasping multi-label classification concepts and techniques helps understand the model's output structure and training objectives.

*How the paper uses it:* The authors treat relation prediction as a multi-label classification task over possible relations.

▶ [Lecture 7: Multi-Class and Multi-Label Classification](https://www.youtube.com/watch?v=nLbIbD5Y6Hk) — Ahlad Kumar · 52:59 · 5 years ago

### Knowledge graph benchmarks evaluation *(prerequisite)*
Evaluating models on standard benchmarks like FreeBase and WordNet is critical to measure progress in knowledge graph completion. Understanding these benchmarks and common metrics clarifies the significance of the paper's state-of-the-art results.

*How the paper uses it:* The paper reports new state-of-the-art scores on the FreeBase benchmark and comparable results on WordNet.

▶ [CS520: 2021 Knowledge Graphs Seminar Session 1](https://www.youtube.com/watch?v=FRcF6sh8sI0) — [SUSPENDED] Vinay K Chaudhri · 47:15 · 5 years ago

### Relation prediction in knowledge graphs
Relation prediction is the core task addressed by the paper, involving predicting missing edges between entities in a knowledge graph. Advanced lectures on reasoning and embedding-based approaches provide a comprehensive understanding of the problem and existing solutions.

*How the paper uses it:* The paper proposes a novel LLM-based method for relation prediction to complete knowledge graphs.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 11.1 - Reasoning in Knowledge Graphs](https://www.youtube.com/watch?v=X9yl0pTP9fY) — Stanford Online · 16:53 · 5 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own lecture provides direct insight into their methodology, experimental setup, and contributions. It is the most authoritative source to understand the nuances of their approach and its context within knowledge graph construction.

*How the paper uses it:* Professor Krzysztof Kochut, co-author of the paper, presents a detailed lecture on knowledge graph construction relevant to their method.

▶ [Knowledge Graph Construction - Lecture](https://www.youtube.com/watch?v=5OGMYQaIPKw) — LINQS Lab · 1:01:36 · 12 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how large language models can be fine-tuned for relation prediction in knowledge graphs. We start with the basics of knowledge graphs and their role, then cover inductive learning to handle unseen entities, multi-label classification as the problem formulation, and fine-tuning of large language models. Finally, we focus on relation prediction in knowledge graphs, the core task addressed by the paper.

### Knowledge graphs *(prerequisite)*
Learn what knowledge graphs are, how they represent real-world entities and their relationships, and why they are important for organizing and extracting structured information. This foundation helps understand the data structure the paper aims to complete.

*How the paper uses it:* The paper focuses on completing knowledge graphs by predicting missing relations between entities.

▶ [Brief Introduction To Knowledge Graph In NLP](https://www.youtube.com/watch?v=WZilmUNVm2U) — Krish Naik · 7:27 · 4 years ago

### Inductive learning in knowledge graphs *(prerequisite)*
Understand inductive learning, which enables models to make predictions about entities not seen during training by relying on their features rather than graph structure alone. This is key to the paper's approach of using only entity names for relation prediction.

*How the paper uses it:* The paper’s method works well in inductive settings by using only textual node names to predict relations for unseen entities.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 11.1 - Reasoning in Knowledge Graphs](https://www.youtube.com/watch?v=X9yl0pTP9fY) — Stanford Online · 16:53 · 5 years ago

### Multi-label classification methods *(prerequisite)*
Multi-label classification involves assigning multiple labels to each input, unlike single-label classification. Understanding this helps grasp how the model predicts multiple possible relations between entity pairs simultaneously.

*How the paper uses it:* The paper formulates relation prediction as a multi-label classification problem over possible relations.

▶ [ML Classification in 5 Minutes? Binary vs Multiclass Explained | Real-World Examples](https://www.youtube.com/watch?v=nl2jjZdzc48) — CodeCraft Academy · 4:45 · 7 months ago

### Large language models fine-tuning *(prerequisite)*
Learn how large language models can be adapted to specific tasks by fine-tuning on task-relevant data, improving their performance beyond general pretraining. This is essential to understand how the paper customizes Llama 2 for relation prediction.

*How the paper uses it:* The authors fine-tune the Llama 2 large language model to predict relations using only entity names.

▶ [Fine-tuning Large Language Models (LLMs) | w/ Example Code](https://www.youtube.com/watch?v=eC6Hd1hFvos) — Shaw Talebi · 28:18 · 2 years ago

## Already in your library

- [Stanford CS224W: ML with Graphs | 2021 | Lecture 10.3 - Knowledge Graph Completion Algorithms](https://www.youtube.com/watch?v=Xm5VrxZYhu4) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Stanford CS224W: ML with Graphs | 2021 | Lecture 2.2 - Traditional Feature-based Methods: Link](https://www.youtube.com/watch?v=4dVwlE9jYxY) — also for: EDRP: Enhanced Dynamic Relay Point Protocol for Data Dissemination in Multi-hop Wireless IoT Networks (Alberto E. Cerpa)
- [Lec-26: Knowledge Representation and Reasoning | Logic ...](https://www.youtube.com/watch?v=9iN3O_oL2ac) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)
- [Taxonomy, Ontology, Knowledge Graph, and Semantics](https://www.youtube.com/watch?v=sr257blfdY8) — also for: Insights from an Industry Survey on Software Design Errors (Gursimran Singh Walia)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 5 - LLM tuning](https://www.youtube.com/watch?v=PmW_TMQ3l0I) — also for: Bolt-on, Verifiable Provenance for LLM-Powered Data Processing (Aditya G. Parameswaran)
- [LoRA & QLoRA Fine-tuning Explained In-Depth](https://www.youtube.com/watch?v=t1caDsMzWBk) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Pretraining vs Fine Tuning in Large Language Models (LLMs)](https://www.youtube.com/watch?v=kYkPDaQun4g) — also for: Memorize and Rank: Elevating Large Language Models for Clinical Diagnosis Prediction (Eran Halperin)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Gerard presents: Inductive Representation Learning on Large Graphs](https://www.youtube.com/watch?v=8qXSRY2EeFE) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [GraphSAGE: Inductive Representation Learning on Large Graphs (Graph ML Research Paper Walkthrough)](https://www.youtube.com/watch?v=3AzphNf5ja8) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Knowledge Graphs - Computerphile](https://www.youtube.com/watch?v=PZBm7M0HGzw) — also for: CausalTrace: A Neurosymbolic Causal Analysis Agent for Smart Manufacturing (Utkarshani Jaimini)
- [Knowledge graphs: A short introduction to the core concepts ...](https://www.youtube.com/watch?v=-jkKlY9UA_Y) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper's method for relation prediction in knowledge graphs using large language models. Starting with a small-scale text-based relation classifier using entity names, you then reimplement the core fine-tuning approach on a public knowledge graph dataset, and finally extend the method to address a stated limitation by incorporating entity descriptions to improve inductive performance. Each project builds on the previous one, increasing in complexity and research relevance.

### Beginner — Text-Based Relation Classifier Using Entity Names
*Effort: a weekend, ~8 hours*

You build a simple multi-label classifier that predicts relations between pairs of entities using only their textual names as input. Using a pretrained Llama 2 7B model or a smaller open-source LLM, you fine-tune it on a small synthetic or publicly available subset of a knowledge graph to classify relations between entity pairs based on their names alone.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's core idea of using only entity names as input for relation prediction and the feasibility of fine-tuning an LLM for this task in an inductive setting.

**Grounded in:** Utilization of Llama 2 large language model for relation prediction in knowledge graphs and minimal input approach using only node names.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), Jupyter Notebook

**Data:** A small synthetic dataset simulating entity pairs with known relations, or a publicly available subset of FreeBase or WordNet with entity names and relations.

**Build it:**

1. Prepare a small dataset of entity pairs with their textual names and associated relations.
2. Load a pretrained Llama 2 7B model or a smaller open-source LLM compatible with Hugging Face transformers.
3. Fine-tune the model as a multi-label classifier to predict relations from concatenated entity name pairs.
4. Evaluate the model on a held-out set using metrics like mean rank or Hits@1.
5. Document the setup, training process, and evaluation results in a README.

**Ships as:** A GitHub repository with code to fine-tune and evaluate a text-only relation classifier and a README explaining the approach and results.

**Stretch goal:** Add a simple baseline classifier using string similarity or keyword matching to compare against the LLM approach.

### Intermediate — Reimplementation of Llama 2 Fine-Tuning for Relation Prediction on FreeBase Subset
*Effort: 1-3 weekends*

You reimplement the paper's core method of fine-tuning Llama 2 7B to predict relations between entity pairs using only their names, applied to a publicly available FreeBase subset or a similar knowledge graph dataset. You compare your model's performance against a simple baseline and report metrics such as mean reciprocal rank and Hits@1, replicating the paper's evaluation style.

**Why it shows you understood the paper:** This project proves you can reproduce the paper's main approach and evaluation on a real benchmark, showing comprehension of the single-stage training process and inductive relation prediction using textual node names.

**Grounded in:** Achieving new state-of-the-art scores on the FreeBase benchmark and single-stage training process for relation prediction.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), scikit-learn, Jupyter Notebook

**Data:** A publicly available subset of the FreeBase knowledge graph with entity names and relation triples, used as a substitute for the paper's benchmark data.

**Build it:**

1. Obtain and preprocess a FreeBase subset with entity pairs and relation labels, extracting only entity names.
2. Implement the multi-label classification fine-tuning of Llama 2 7B on this dataset.
3. Train the model in an inductive setting, ensuring test entities are unseen during training.
4. Implement a simple baseline model (e.g., logistic regression on bag-of-words features of entity names).
5. Evaluate both models using mean reciprocal rank and Hits@1 metrics.
6. Write a detailed report comparing your results to the paper's claims.

**Ships as:** A GitHub repo with code, training scripts, evaluation metrics, and a README documenting the reimplementation and comparison to baseline.

**Stretch goal:** Experiment with adding entity descriptions as additional input features and measure any performance gains.

### Advanced — Incorporating Entity Descriptions to Improve Inductive Relation Prediction
*Effort: a few weeks*

You extend the paper's method by integrating entity descriptions alongside entity names as input to the fine-tuned Llama 2 model, aiming to address the paper's limitation regarding entity ambiguity and improve inductive relation prediction performance. You evaluate the extended model on the FreeBase benchmark subset and compare results to the baseline name-only model.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation from the paper, demonstrating your ability to innovate on the method and critically engage with the challenges of entity ambiguity and input representation in knowledge graph completion.

**Grounded in:** Addressing entity ambiguity problem and incorporating entity descriptions to improve performance with minimal computational overhead.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), scikit-learn, Jupyter Notebook

**Data:** FreeBase subset with entity names and textual descriptions, used as an extension to the paper's original data assumptions.

**Build it:**

1. Collect or augment the FreeBase subset with textual descriptions for entities alongside their names.
2. Modify the input format to concatenate entity names and descriptions for each entity pair.
3. Fine-tune the Llama 2 7B model on this enriched input for multi-label relation prediction.
4. Evaluate the model's performance on inductive relation prediction using mean reciprocal rank and Hits@1.
5. Compare results against the baseline name-only model and analyze improvements.
6. Document the methodology, experiments, and findings in a comprehensive README.

**Ships as:** A GitHub repository containing the extended fine-tuning code, evaluation scripts, and a detailed report on the impact of entity descriptions on relation prediction.

**Stretch goal:** Explore lightweight negative sampling techniques during training to further improve relation prediction accuracy.

_The paper's authors released no code or datasets; all projects rely on public knowledge graph subsets or synthetic data approximations._
