---
title: "629 · Structural-Functional Brain Connectivity Generation via Multimodal Hypergraph-based Flow Matching — Pew-Thian Yap"
date: 2026-10-12
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pew-thian-yap"
source_hash: "523fbe4e48ad8dfc3bcc68662934542f8cbdf930617c9581248ea620ba9707fb"
sequence: 629
generator: "outreach-garden: managed"
---

# 629 · Structural-Functional Brain Connectivity Generation via Multimodal Hypergraph-based Flow Matching

## At a glance

- **Professor:** Pew-Thian Yap
- **Institution:** University of North Carolina
- **Paper:** [Structural-Functional Brain Connectivity Generation via Multimodal Hypergraph-based Flow Matching](https://arxiv.org/pdf/2610.02722)
- **Authors:** Chyong Yi Poh, Hwa Hui Tew, Junn Yong Loo, Raphaël C.-W. Phan, Fuad Noman, Pew-Thian Yap, Chee-Ming Ting
- **Year:** 2026

## Paper overview

This paper presents a new computational framework called Multimodal Hypergraph Flow Matching (MHG-FM) to jointly generate and translate brain connectivity data that captures both structural (anatomical) and functional (activity-based) relationships in the brain. The method models complex higher-order interactions among brain regions using hypergraphs and improves the efficiency and quality of brain connectivity synthesis compared to existing methods.

### Why it matters

**Research problem:** Existing brain connectivity generative models often treat structural and functional connectivity independently and use pairwise graphs that fail to capture higher-order interactions among multiple brain regions. This limits the ability to preserve the complex structure-function relationships and coupling in brain networks, especially given the scarcity of large-scale paired multimodal neuroimaging data.

**Why it matters:** Understanding and accurately modeling the joint structural-functional connectivity of the brain is crucial for insights into brain organization, neurological disorders, and lifespan changes. Improved generative models can alleviate data scarcity, enable better disease diagnosis, and support surgical planning by synthesizing realistic brain connectivity data that preserves important topological and coupling properties.

**Key contributions:**

- A unified multimodal hypergraph flow-matching framework (MHG-FM) for joint structural-functional brain connectivity generation and bidirectional cross-modal translation.
- Design of a hypergraph-specific Dual Cross-Attention fusion mechanism enabling effective bidirectional information exchange between structural and functional modalities.
- Demonstration that MHG-FM achieves superior preservation of network topology and structure-function coupling compared to state-of-the-art baselines.
- Significant improvement in sampling efficiency with approximately 8× faster generation compared to a matched diffusion-based backbone.
- A single trained model capable of bidirectional SC–FC prediction without retraining or iterative ODE integration.

## About the professor

**Pew-Thian Yap** — Professor, Department of Radiology, University of North Carolina.

Research interests: image acquisition, reconstruction, quality control, harmonization, processing, and analysis with applications in neuroscience, disease diagnosis, and surgical planning

### Research links

- [Faculty/profile page](https://www.med.unc.edu/radiology/directory/pew-thian-yap)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hypergraph Neural Networks
**The paper assumes:** hypergraph neural networks, higher-order graph representations, and neural network-based graph encoding
**Already in this field?** Skip this entirely if you already understand hypergraph neural networks and their application to multimodal graph data.

To understand the core methodology of the paper on Multimodal Hypergraph-based Flow Matching for brain connectivity, a solid grasp of Hypergraph Neural Networks (HGNNs) is essential. The rigorous course option provides a deep, structured university-level introduction to machine learning foundations including neural networks, which underpin HGNN concepts. The fast track offers a focused, visual introduction specifically on Graph Neural Networks, including variants and attention mechanisms, which are foundational to hypergraph neural networks. Choose the course for comprehensive theoretical depth and the fast track for a concise, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 10 (Introduction to Neural Networks), 11 (Backprop & Improving Neural Networks), and 7 (Kernels) for foundational understanding of neural networks and kernel methods relevant to HGNNs, about 3.5 hours total.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a rigorous, authoritative machine learning course covering neural networks and foundational concepts essential for understanding hypergraph neural networks and their encoding mechanisms used in the paper.

*If you want all of it:* All 21 lectures, approximately 27.9 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks](https://www.youtube.com/playlist?list=PLV8yxwGOxvvoNkzPfCx2i8an--Tkt7O8Z) — DeepFindr · 27 videos · 6.6h across 27 episodes

**Watch only this:** Episodes 1-3 (Introduction to GNNs, GNN variants, and PyTorch Geometric basics) plus Episode 6 (Graph Attention Networks), about 1.5 hours total.

*Why it unblocks this paper:* This playlist from DeepFindr offers a concise, clear introduction to Graph Neural Networks and their variants, including attention mechanisms, which are directly relevant to understanding hypergraph neural network encoding and fusion in the paper.

*If you want all of it:* All 27 episodes, approximately 6.6 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Multimodal Hypergraph-based Flow Matching for brain connectivity, start with foundational concepts: hypergraph neural networks to grasp the encoding of higher-order brain interactions, multimodal brain connectivity to appreciate the joint structural-functional context, flow matching generative models to learn the underlying generative technique, and cross-attention mechanisms for the fusion of modalities. Finally, focus on the core concept of multimodal hypergraph flow matching, which integrates these ideas into the novel framework proposed by the authors.

### Hypergraph neural networks *(prerequisite)*
Understanding hypergraph neural networks is essential as they provide the method to encode complex higher-order relationships among brain regions beyond pairwise connections. This foundational knowledge enables comprehension of how the paper models structural and functional connectivity as hypergraphs.

*How the paper uses it:* The paper uses Hypergraph Neural Networks (HGNNs) to encode modality-specific hypergraphs representing brain connectivity.

▶ [BrAINs seminar: Edge-Copying Random Hypergraphs](https://www.youtube.com/watch?v=qo4SOCwnOFw) — Hypergraphs, Networks seminar, BrAINs season · 42:46

### Multimodal brain connectivity *(prerequisite)*
Grasping multimodal brain connectivity is crucial to appreciate the joint modeling of structural and functional brain networks. This background clarifies why integrating multiple neuroimaging modalities is important for capturing the brain's complex organization.

*How the paper uses it:* The paper focuses on jointly generating and translating structural and functional brain connectivity, requiring understanding of multimodal brain networks.

▶ [Brain Connectivity Analysis: from Unimodal to Multimodal - Sergey Plis](https://www.youtube.com/watch?v=-Pnrk8V-Srw) — Carnegie Mellon University Department of Philosophy · 40:11 · 12y ago

### Flow matching generative models *(prerequisite)*
Flow matching is the fundamental generative modeling technique underlying the paper's framework. Learning about flow matching models, their advantages over diffusion models, and their training dynamics is necessary to understand the paper's efficient joint generation approach.

*How the paper uses it:* The paper employs conditional flow matching in a latent space for efficient joint generation and cross-modal translation of brain connectomes.

▶ [MIT 6.S184: Flow Matching and Diffusion Models - Lecture 02: Flow Matching (2026)](https://www.youtube.com/watch?v=PNkMKWW8Khw) — Peter Holderrieth · 1:23:24 · 6mo ago

### Cross-attention mechanisms *(prerequisite)*
Cross-attention mechanisms enable effective fusion of structural and functional modality representations by allowing bidirectional information exchange. Understanding cross-attention is key to grasping the paper's Dual Cross-Attention fusion design.

*How the paper uses it:* The paper designs a hypergraph-specific Dual Cross-Attention fusion mechanism to integrate structural and functional connectivity embeddings.

▶ [From Attention to Applications: Encoder, Decoder and Cross-Attention | Deep Learning](https://www.youtube.com/watch?v=sm2ZeDY8YDw) — Nipun Batra · 51:43 · 7d ago

### Multimodal hypergraph flow matching
This is the core novel framework proposed by the paper, combining hypergraph neural networks, cross-attention fusion, and flow matching generative modeling to jointly generate and translate brain connectivity data. Studying this concept last consolidates the foundational knowledge into understanding the paper's main contribution.

*How the paper uses it:* The paper introduces the Multimodal Hypergraph Flow Matching (MHG-FM) framework for joint structural-functional brain connectivity generation and translation.

▶ [Stanford CME296 Diffusion & Large Vision Models | Spring 2026 | Lecture 3 - Flow matching](https://www.youtube.com/watch?v=agN3AlfGFrk) — Stanford Online · 1:47:34 · 5mo ago

### Paper authors' talk *(paper-talk search result; attribution unverified)*
Directly hearing from experts or authors about their work provides the most precise and detailed insights into the paper's motivation, methodology, and results. Although no exact talk by the authors on this paper was found, related advanced talks on brain networks can provide valuable context.

*How the paper uses it:* While no direct talk by the paper authors on this work is available, related advanced talks on brain networks by experts provide useful background.

▶ [NeuroHackademy 2021: Measuring and analyzing human functional brain networks](https://www.youtube.com/watch?v=7ZqThnhtwxg) — UW eScience Institute · 50:18 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Multimodal Hypergraph-based Flow Matching for brain connectivity, start by learning about multimodal brain connectivity to grasp the joint structural-functional brain networks. Then, build intuition on hypergraph neural networks, which encode complex higher-order interactions crucial for the paper's method. Next, study flow matching generative models, the fundamental generative technique used. After that, learn about cross-attention mechanisms, key for fusing structural and functional modalities. Finally, explore the core concept of multimodal hypergraph flow matching, the novel framework proposed in the paper.

### Multimodal brain connectivity *(prerequisite)*
This concept covers how brain connectivity is studied by integrating multiple imaging modalities, typically structural (anatomical) and functional (activity-based) data. Understanding this joint connectivity is essential to appreciate why modeling both modalities together provides richer insights into brain organization.

*How the paper uses it:* The paper focuses on jointly generating and translating structural and functional brain connectivity data, making multimodal brain connectivity foundational.

▶ [Brain Connectivity Analysis: from Unimodal to Multimodal - Sergey Plis](https://www.youtube.com/watch?v=-Pnrk8V-Srw) — Carnegie Mellon University Department of Philosophy · 40:11 · 12y ago

### Hypergraph neural networks *(prerequisite)*
Hypergraph neural networks extend graph neural networks by modeling relationships among groups of nodes (hyperedges) rather than just pairs, capturing complex higher-order interactions. This is crucial for representing the brain's connectivity beyond simple pairwise links.

*How the paper uses it:* The paper uses hypergraph neural networks to encode modality-specific hypergraphs that capture higher-order brain region interactions.

▶ [Tutorial 7: Graph Neural Networks (Part 1)](https://www.youtube.com/watch?v=fK7d56Ly9q8) — UvA Deep Learning course · 19:12

### Flow matching generative models *(prerequisite)*
Flow matching is a generative modeling approach that learns continuous transformations between distributions, offering efficient sampling compared to diffusion models. Understanding flow matching helps grasp how the paper achieves fast and high-quality brain connectivity generation.

*How the paper uses it:* The paper employs conditional flow matching in a latent space to learn continuous transport trajectories for joint brain connectivity generation.

▶ [MIT 6.S184: Flow Matching and Diffusion Models - Lecture 02: Flow Matching (2026)](https://www.youtube.com/watch?v=PNkMKWW8Khw) — Peter Holderrieth · 1:23:24 · 6mo ago

### Cross-attention mechanisms *(prerequisite)*
Cross-attention is a neural network mechanism that allows one set of features to selectively focus on another, enabling effective information fusion between different modalities or sequences. This mechanism is key for integrating structural and functional connectivity representations.

*How the paper uses it:* The paper designs a Dual Cross-Attention fusion mechanism to enable bidirectional information exchange between structural and functional modalities.

▶ [Cross-attention (NLP817 11.9)](https://www.youtube.com/watch?v=35jpRxa81Hc) — Herman Kamper · 7:27 · 3y ago

## Already in your library

- [Resting State Functional Connectivity: Part 1 - Introduction](https://www.youtube.com/watch?v=5yDN2q7gUaM) — also for: White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity (Zhaohua Ding)
- [Introduction to Network Neuroscience: Complex Attributes of Structural Connectivity 1. OLAF SPORNS](https://www.youtube.com/watch?v=aOWDZI6W2qM) — also for: White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity (Zhaohua Ding)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Hypergraphs](https://www.youtube.com/watch?v=Sb7Xw7SYmlE) — also for: Efficient Parallel Algorithms for Hypergraph Matching (Nodari Sitchinava)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Flow Matching for Generative Modeling (Paper Explained)](https://www.youtube.com/watch?v=7NNxK3CqaDk) — also for: Functional Mean Flow in Hilbert Space (Greg Turk)
- [MIT 6.S191: Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=d02VkQ9MP44) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Serdar Bozdag)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Visual Guide to Transformer Neural Networks - (Episode 2) Multi-Head & Self-Attention](https://www.youtube.com/watch?v=mMa2PmYJlCo) — also for: Unified Local and Global Attention Interaction Modeling for Vision Transformers (Corey Toler-Franklin)
- [Cross Attention | Method Explanation | Math Explained](https://www.youtube.com/watch?v=aw3H-wPuRcw) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [How Cross Attention Powers Translation in Transformers ...](https://www.youtube.com/watch?v=b40PL-sWmSM) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the MHG-FM framework for multimodal brain connectivity generation. The beginner project focuses on implementing a core component of the paper's architecture (hypergraph dual cross-attention) on synthetic data to grasp the fusion mechanism. The intermediate project involves reimplementing the full MHG-FM method on a substitute public brain connectivity dataset, comparing it to a simple baseline, and evaluating topology preservation metrics. The advanced project extends the framework to model dynamic functional connectivity, addressing a key limitation noted by the authors, and explores temporal hypergraph flow matching.

### Beginner — Dual Cross-Attention Fusion on Synthetic Hypergraphs
*Effort: a weekend, ~8 hours*

You build a simplified implementation of the hypergraph-specific Dual Cross-Attention (DCA) fusion mechanism described in the paper. Using small synthetic hypergraphs representing structural and functional connectivity, you encode node features with basic hypergraph neural network layers and implement the DCA module to fuse these embeddings bidirectionally.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key innovation in fusing multimodal hypergraph embeddings to capture higher-order structure-function relationships, a core contribution of MHG-FM.

**Grounded in:** Design of a hypergraph-specific Dual Cross-Attention fusion mechanism enabling effective bidirectional information exchange between structural and functional modalities.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric (for hypergraph layers), Jupyter Notebook

**Data:** Synthetic small hypergraphs generated programmatically to simulate multimodal brain connectivity patterns.

**Build it:**

1. Implement simple hypergraph neural network encoders for two synthetic hypergraphs representing structural and functional modalities.
2. Implement the Dual Cross-Attention fusion mechanism as described, enabling bidirectional attention between the two modality embeddings.
3. Create synthetic node features and hyperedges to simulate multimodal connectivity.
4. Run the fusion module and visualize or log the fused embeddings to verify cross-modal information exchange.
5. Write a README explaining the implementation and how it relates to the paper's fusion mechanism.

**Ships as:** A GitHub repo with code and notebook demonstrating the DCA fusion on synthetic hypergraphs, with explanations linking it to the paper's fusion design.

**Stretch goal:** Add visualization of attention weights to interpret how structural and functional embeddings influence each other.

### Intermediate — Reimplementation of MHG-FM on Public Brain Connectivity Data
*Effort: 2 weekends, ~20 hours*

You reimplement the core MHG-FM framework from the paper, including hypergraph construction, HGNN encoding, Dual Cross-Attention fusion, and variational autoencoder with flow matching for joint structural-functional connectivity generation. You apply it to a publicly available brain connectivity dataset (e.g., the publicly accessible subset of the Human Connectome Project or a similar open dataset) as a substitute for the HCP-YA 3T data. You compare your results against a simple baseline such as independent graph autoencoders for SC and FC.

**Why it shows you understood the paper:** This project shows you can translate the paper's complex multimodal hypergraph flow matching method into working code, apply it to real data, and evaluate key metrics like topology preservation and structure-function coupling, demonstrating deep comprehension of the method and its evaluation.

**Grounded in:** The authors propose MHG-FM, which constructs modality-specific hypergraphs, encodes them with HGNNs, fuses via Dual Cross-Attention, and uses variational autoencoder with flow matching for joint generation and cross-modal translation.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, scikit-learn, Jupyter Notebook

**Data:** Publicly available brain connectivity data such as a subset of the Human Connectome Project or a similar open-source structural and functional connectivity dataset; if unavailable, simulated multimodal connectivity matrices approximating brain network properties.

**Build it:**

1. Acquire or simulate paired structural and functional connectivity data suitable for hypergraph construction.
2. Implement hypergraph construction for each modality based on connectivity matrices.
3. Implement HGNN encoders for each modality's hypergraph.
4. Implement the Dual Cross-Attention fusion mechanism to combine modality embeddings.
5. Build a variational autoencoder and implement conditional flow matching for joint generation.
6. Train the model and evaluate reconstruction quality, topology preservation (degree and edge distribution distances), and structure-function coupling metrics.
7. Compare results against a baseline model that treats SC and FC independently.
8. Document the implementation, experiments, and results in a detailed README.

**Ships as:** A GitHub repository with code, training scripts, evaluation metrics, and a report demonstrating reimplementation of MHG-FM on real or simulated data, including baseline comparison.

**Stretch goal:** Add cross-modal translation experiments (predict SC from FC and vice versa) and report performance.

### Advanced — Extending MHG-FM to Dynamic Functional Connectivity Modeling
*Effort: 3+ weeks*

You extend the MHG-FM framework to incorporate dynamic functional connectivity by modeling temporal variations in functional hypergraphs and integrating temporal flow matching. This involves designing temporal hypergraph representations, adapting HGNN and Dual Cross-Attention modules to handle sequences or time windows, and modifying the flow matching to learn continuous transport trajectories over time. You evaluate this extension on a dataset with dynamic functional connectivity or simulate temporal data.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction stated by the authors, demonstrating your ability to innovate on the original method and apply it to a challenging, open problem in multimodal brain connectivity modeling.

**Grounded in:** The framework currently models static functional connectivity and does not address dynamic functional connectivity; future directions include extending to dynamic functional connectivity to capture temporal variations.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, scikit-learn, Jupyter Notebook

**Data:** Simulated or publicly available datasets containing dynamic functional connectivity time series; if unavailable, generate synthetic temporal connectivity sequences reflecting plausible brain dynamics.

**Build it:**

1. Research and implement temporal hypergraph representations for functional connectivity over time windows.
2. Adapt HGNN encoders and Dual Cross-Attention fusion to process temporal sequences of hypergraphs.
3. Modify the variational autoencoder and flow matching components to handle temporal latent trajectories.
4. Train the extended model on dynamic functional connectivity data or synthetic temporal data.
5. Evaluate the model's ability to capture temporal variations and preserve structure-function coupling over time.
6. Document the design, implementation challenges, and evaluation results in a comprehensive report.

**Ships as:** A GitHub repository with code implementing temporal MHG-FM, training and evaluation scripts, and a detailed README discussing the extension and its results.

**Stretch goal:** Explore applications of the temporal model to clinical or multi-site datasets to test generalization.
