---
title: "389 · Zero-Shot Relational Learning for Multimodal Knowledge Graphs — Shichao Pei"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shichao-pei"
source_hash: "3f98fbd761f6ef59c20b9d2d3aafda274e44bfd47c303c5f269315fc718491fa"
sequence: 389
generator: "outreach-garden: managed"
---

# 389 · Zero-Shot Relational Learning for Multimodal Knowledge Graphs

## At a glance

- **Professor:** Shichao Pei
- **Institution:** University of Massachusetts Boston
- **Paper:** [Zero-Shot Relational Learning for Multimodal Knowledge Graphs](https://arxiv.org/abs/2404.06220)
- **Authors:** Rui Cai, Shichao Pei, Xiangliang Zhang
- **Year:** 2024

## Paper overview

This paper introduces a new method called MRE to predict relationships in multimodal knowledge graphs, especially for new relations that have no training data. It uses images, text, and graph structure together to better understand and infer these unseen relations.

### Why it matters

**Research problem:** How to perform zero-shot relational learning in multimodal knowledge graphs, i.e., infer missing triples for newly discovered relations without any associated training triples, by effectively leveraging multimodal information (images, text) and graph structure.

**Why it matters:** Multimodal knowledge graphs contain rich information but suffer from long-tail distributions where many relations have few or no training examples. Existing methods cannot infer relations without training data, limiting the practical use and evolution of knowledge graphs.

**Key contributions:**

- First to adopt multimodal information in multimodal knowledge graphs for zero-shot relational learning.
- Propose a novel two-stage modality fusion strategy combining multimodal learner and structure consolidator.
- Design a generative adversarial relation embedding generator for accurate zero-shot relation representation.
- Demonstrate superior performance on three real-world multimodal knowledge graph datasets compared to state-of-the-art baselines.

## About the professor

**Shichao Pei** — Assistant Professor, Department of Computer Science, University of Massachusetts Boston.

Research interests: machine learning and AI, in particular foundation models, AI safety, AI agent, data-efficient machine learning, etc.

### Research links

- [Faculty/profile page](https://scpei.github.io)
- [Professor website](https://scpei.github.io/index.html)
- [Google Scholar](https://scholar.google.com/citations?user=wCklBBIAAAAJ&hl=en&oi=ao)
- [DBLP](https://dblp.org/pid/168/9433.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, graph convolutional networks, and graph representation learning
**Already in this field?** Skip this entirely if you already understand graph neural networks and their application to knowledge graphs.

This background focuses on Graph Neural Networks (GNNs), which are essential for understanding the structure consolidator component of the MRE model in the paper. The rigorous course option offers a deep, structured university-level lecture series on graph machine learning, while the fast track provides a concise, intuition-driven explainer series on GNNs and their variants. Choose the course for comprehensive mastery or the fast track for a quicker, practical grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 6.1 (Introduction to Graph Neural Networks), 7.1 (A general Perspective on GNNs), 7.2 (A Single Layer of a GNN), 7.3 (Stacking layers of a GNN), and 8.2 (Training Graph Neural Networks), about 2.5 hours total — these cover core GNN concepts, layer design, stacking, and training essential for understanding the structure consolidator.

*Why it unblocks this paper:* Stanford CS224W by Jure Leskovec is a top-tier university course focused on machine learning with graphs, covering foundational concepts and advanced GNN architectures relevant to the paper's use of graph convolutional networks and relational learning.

*If you want all of it:* Approximately 24.1 hours across all 47 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks](https://www.youtube.com/playlist?list=PLV8yxwGOxvvoNkzPfCx2i8an--Tkt7O8Z) — DeepFindr · 27 videos · 6.6h across 27 episodes

**Watch only this:** Episodes 1-3 (Introduction, GNNs and its Variants, PyTorch Geometric and Molecule Data), about 42 minutes total — these provide a solid, intuitive foundation on GNNs and practical usage relevant to the paper's methods.

*Why it unblocks this paper:* DeepFindr's Graph Neural Networks playlist offers clear, concise explanations of GNN fundamentals and variants, including practical examples with PyTorch Geometric, which aligns well with the paper's focus on graph convolutional networks and multimodal fusion.

*If you want all of it:* Approximately 6.6 hours across all 27 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Zero-Shot Relational Learning for Multimodal Knowledge Graphs," start by building foundational knowledge on zero-shot learning methods, graph convolutional networks, generative adversarial networks, and masked autoencoders for multimodal learning. These prerequisites provide the necessary background on the key techniques used in the paper. Then, explore the core concept of zero-shot relational learning in knowledge graphs, focusing on multimodal fusion strategies. Finally, watch the authors' own or closely related talks to grasp the novel contributions and experimental insights of the MRE framework.

### Zero-shot learning methods *(prerequisite)*
Zero-shot learning is fundamental to understanding how the model infers unseen relations without any training data. This section covers advanced research talks and university lectures that explain compositional zero-shot learning and its applications in AI, providing a rigorous foundation for the paper's zero-shot relational learning approach.

*How the paper uses it:* The paper's core problem is zero-shot relational learning, making this foundational knowledge essential.

▶ [Lec 42: Zero-shot Learning](https://www.youtube.com/watch?v=8lnwKwmnc0k) — NPTEL IIT Guwahati · 4mo ago

### Graph convolutional networks *(prerequisite)*
Graph convolutional networks (GCNs) are essential for understanding how the paper consolidates graph structural information. This section includes detailed academic explanations and examples of GCNs, enabling comprehension of the structure consolidator component in MRE.

*How the paper uses it:* The structure consolidator in MRE uses GCNs to integrate graph structure for relation inference.

▶ [Graph Convolutional Networks (GCN): From CNN point of view](https://www.youtube.com/watch?v=eLcGehfjvgs) — Soroush Mehraban · 13:08 · 2y ago

### Generative adversarial networks *(prerequisite)*
Generative adversarial networks (GANs) are key to understanding the relation embedding generator component that produces embeddings for unseen relations. This section features university-level lectures that explain GANs in depth, supporting comprehension of the adversarial training used in MRE.

*How the paper uses it:* MRE employs a GAN-based relation embedding generator to model unseen relations accurately.

▶ [Lec 66 GAN - Generative Adversarial Networks](https://www.youtube.com/watch?v=nd3laZj5Cdg) — NPTEL - Indian Institute of Science, Bengaluru · 41:51 · 4mo ago

### Masked autoencoders for multimodal learning *(prerequisite)*
Masked autoencoders are important for grasping the multimodal learner's approach to fusing image and text data. This section includes advanced talks and paper walkthroughs on masked autoencoders, focusing on their scalability and multimodal applications, which underpin MRE's modality fusion strategy.

*How the paper uses it:* The multimodal learner in MRE uses masked autoencoders for effective fusion of visual and textual modalities.

▶ [Harvard Medical AI: Mark Endo presents "Masked Autoencoders Are Scalable Vision Learners"](https://www.youtube.com/watch?v=oaacl-lAGPs) — Harvard Medical AI | Rajpurkar Lab · 4y ago

### MRE zero-shot relational learning talk *(the paper's own talk)*
This section focuses on the authors' own or closely related talks presenting zero-shot relational learning methods in knowledge graphs. These talks provide direct insight into the novel MRE framework, its components, and experimental results, offering the most precise understanding of the paper's contributions.

*How the paper uses it:* Direct source for understanding the authors' presentation of their novel MRE method for zero-shot relational learning in multimodal knowledge graphs.

▶ [Holographic Memory for Zero-Shot Compositional Reasoning in Knowledge Graphs: A Mechanistic Study of](https://www.youtube.com/watch?v=OGZnJ7XwuK8) — Ai NEws · 1mo ago

### Multimodal fusion in knowledge graphs
Multimodal fusion is core to how the paper integrates visual, textual, and structural data for relation inference. This section includes recent conference talks and expert presentations that discuss advanced multimodal fusion techniques in knowledge graphs, complementing the understanding of MRE's two-stage modality fusion strategy.

*How the paper uses it:* Central to MRE's approach is the fusion of multiple modalities to improve zero-shot relational learning.

▶ [Multimodal fusion explained: how machines learn to “see, hear, and understand” together](https://www.youtube.com/watch?v=eg9PSb7FoYU) — Hasgeek TV · 8mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand zero-shot relational learning in multimodal knowledge graphs, starting with the basics of zero-shot learning and graph convolutional networks. It then covers generative adversarial networks and masked autoencoders for multimodal learning, which are key technical components in the paper. Finally, it presents multimodal fusion in knowledge graphs and the paper's core method, MRE, to build a comprehensive intuition for the approach.

### Zero-shot learning methods *(prerequisite)*
Zero-shot learning enables models to recognize or infer new classes or relations without any training examples by leveraging auxiliary information like descriptions or attributes. Understanding this concept is crucial to grasp how the paper predicts unseen relations in knowledge graphs.

*How the paper uses it:* The paper addresses zero-shot relational learning to infer missing triples for new relations without training data.

▶ [What is Zero Shot Learning | How Zero-shot Classification model works | NLP | transformers   | Code](https://www.youtube.com/watch?v=PH_eb1udpew) — Pradip Nichite · 3y ago

### Graph convolutional networks *(prerequisite)*
Graph convolutional networks (GCNs) generalize convolutional neural networks to graph-structured data, enabling the model to aggregate and learn from node neighborhoods. This is essential for understanding how the paper consolidates graph structural information.

*How the paper uses it:* The structure consolidator component uses GCNs to integrate graph structure in the model.

▶ [Graph Convolutional Neural Network (GCNN) | Explained with a simple numerical example](https://www.youtube.com/watch?v=wpSjM5wqFfQ) — Vizuara · 1y ago

### Generative adversarial networks *(prerequisite)*
Generative adversarial networks (GANs) consist of two neural networks competing in a minimax game to generate realistic data samples. This concept helps explain how the paper generates embeddings for unseen relations based on their descriptions.

*How the paper uses it:* The relation embedding generator uses a GAN to create embeddings for unseen relations.

▶ [Lec 66 GAN - Generative Adversarial Networks](https://www.youtube.com/watch?v=nd3laZj5Cdg) — NPTEL - Indian Institute of Science, Bengaluru · 41:51 · 4mo ago

### Masked autoencoders for multimodal learning *(prerequisite)*
Masked autoencoders learn to reconstruct missing parts of input data, enabling self-supervised learning. When applied to multimodal data like images and text, they help fuse and learn rich representations, as done in the paper's multimodal learner.

*How the paper uses it:* The multimodal learner uses a masked autoencoder and contrastive learning to fuse visual and textual modalities.

▶ [Masked Autoencoders (MAE) Paper Explained](https://www.youtube.com/watch?v=-EBqzYIJRaQ) — Soroush Mehraban · 3y ago

### Multimodal fusion in knowledge graphs
Multimodal fusion combines information from different data types (e.g., images, text, graph structure) to create richer representations. This is key to understanding how the paper integrates multiple modalities for better relational inference.

*How the paper uses it:* The paper proposes a two-stage modality fusion strategy combining multimodal learner and structure consolidator.

▶ [Multimodal fusion explained: how machines learn to “see, hear, and understand” together](https://www.youtube.com/watch?v=eg9PSb7FoYU) — Hasgeek TV · 8mo ago

### MRE zero-shot relational learning talk *(the paper's own talk)*
This talk presents the authors' own explanation of their MRE method, providing direct insights into their novel approach for zero-shot relational learning in multimodal knowledge graphs.

*How the paper uses it:* Direct source for understanding the authors' presentation of their novel method MRE.

▶ [Zero-Shot Learning with Common Sense Knowledge Graphs](https://www.youtube.com/watch?v=VXt3MucMWvY) — Nihal Nayak · 4y ago

## Already in your library

- [What is Zero-Shot Learning?](https://www.youtube.com/watch?v=pVpr4GYLzAo) — also for: Initial Exploration of Zero-Shot Privacy Utility Tradeoffs in Tabular Data Using GPT-4 (George Traian Amariucai)
- [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Zero-Shot Learning - Dr. Timothy Hospedales](https://www.youtube.com/watch?v=jBnCcr-3bXc) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Graph Convolutional Networks (GCNs) made simple](https://www.youtube.com/watch?v=2KRAOZIULzw) — also for: ORIGAMI: Orientation-Aware Graph Neural Network for Assessing Multimeric Interfaces of Protein Complex Structures (Debswapna Bhattacharya)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [AI Explained - Graph Neural Networks | How AI Uses Graphs to Accelerate Innovation](https://www.youtube.com/watch?v=epVW0_iVBX8) — also for: CableRobotGraphSim: A Graph Neural Network for Modeling Partially Observable Cable-Driven Robot Dynamics (Mridul Aanjaneya)
- [A Friendly Introduction to Generative Adversarial Networks (GANs)](https://www.youtube.com/watch?v=8L11aMN5KY8) — also for: CCS‑GAN: COVID‑19 CT Scan Generation and Classification with Very Few Positive Training Images (Yaacov Yesha)
- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of the MRE method for zero-shot relational learning in multimodal knowledge graphs. Starting with a beginner project that reproduces a core multimodal fusion component on a small scale, you then advance to an intermediate reimplementation of the full MRE pipeline on a substitute dataset. Finally, the advanced project tackles a stated limitation by extending the model to incorporate multiple images per entity, exploring richer multimodal fusion techniques.

### Beginner — Masked Autoencoder for Multimodal Fusion on Paired Image-Text Data
*Effort: a weekend, ~8 hours*

You build a simplified masked autoencoder that fuses paired image and text embeddings to reconstruct masked tokens, mimicking the multimodal learner component of MRE. This small-scale experiment uses publicly available image-caption pairs to demonstrate modality fusion via contrastive learning and masked token prediction.

**Why it shows you understood the paper:** This project shows you grasp the core idea of the multimodal learner in MRE, specifically how visual and textual modalities are fused and learned jointly with masking and contrastive objectives.

**Grounded in:** The multimodal learner fuses visual and textual modalities using a masked autoencoder and contrastive learning.

**Tech stack:** Python 3.11, PyTorch, transformers, torchvision, Jupyter Notebook

**Data:** Use a publicly available small image-caption dataset such as Flickr8k or MSCOCO subset as a substitute for the paper's multimodal entity data.

**Build it:**

1. Load a small paired image-text dataset and preprocess images and captions into embeddings.
2. Implement a masked autoencoder that randomly masks parts of image and text embeddings.
3. Train the model to reconstruct masked tokens and use contrastive loss to align modalities.
4. Visualize reconstruction quality and embedding alignment between image and text.
5. Write a README explaining the connection to MRE's multimodal learner.

**Ships as:** A Jupyter notebook and scripts demonstrating masked autoencoding and contrastive fusion on paired image-text data, with visualizations and explanations linking to the MRE paper.

**Stretch goal:** Add a simple graph structure feature (e.g., node degree) to the embeddings to preliminarily mimic structure consolidation.

### Intermediate — Reimplementation of MRE Zero-Shot Relational Learning on FB15K-237-ZS Substitute
*Effort: 2 weekends, ~20 hours*

You reimplement the core MRE framework end-to-end, including the multimodal learner, structure consolidator (GCN), and relation embedding generator (GAN), applying it to a substitute knowledge graph dataset with multimodal features. You compare MRE's zero-shot relation prediction performance against a simple baseline like TransE.

**Why it shows you understood the paper:** This project demonstrates your ability to reconstruct the full MRE pipeline from the paper's descriptions and evaluate its zero-shot relational learning capabilities, showing comprehension of the two-stage fusion and adversarial relation embedding generation.

**Grounded in:** MRE is an end-to-end framework with multimodal learner, structure consolidator, and GAN-based relation embedding generator, outperforming baselines on FB15K-237-ZS.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, scikit-learn, Jupyter Notebook

**Data:** Use FB15K-237 as a substitute knowledge graph dataset and augment it with synthetic or publicly available image and text features per entity to simulate multimodal inputs.

**Build it:**

1. Preprocess FB15K-237 triples and generate or collect image and text embeddings for entities.
2. Implement the multimodal learner with masked autoencoder and contrastive learning for modality fusion.
3. Implement a graph convolutional network as the structure consolidator to integrate graph structure.
4. Design a GAN to generate embeddings for unseen relations based on textual descriptions.
5. Train the full MRE pipeline and evaluate zero-shot relation prediction using MRR and Hits@k metrics.
6. Compare results against a TransE baseline and document findings.

**Ships as:** A GitHub repo with code to run the MRE pipeline on a substitute dataset, evaluation scripts, and a detailed README explaining the implementation and results compared to baseline.

**Stretch goal:** Add ablation experiments to show the effect of removing one modality or the GAN component.

### Advanced — Extending MRE to Incorporate Multiple Images per Entity for Enhanced Multimodal Fusion
*Effort: 3-4 weeks*

You extend the MRE framework to overcome its limitation of using only one image per entity by designing a multimodal fusion module that aggregates multiple images along with text and graph structure. You experiment with richer fusion strategies such as attention-based pooling or transformers to handle multiple images and evaluate the impact on zero-shot relation prediction.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of MRE's architecture and the challenges in scaling multimodal fusion to richer, more diverse inputs.

**Grounded in:** Limitation: model only exploits one image per entity; future direction: incorporate multiple images per entity to enhance multimodal learning.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, transformers, Jupyter Notebook

**Data:** Use FB15K-237 or DB15K-ZS with multiple images per entity sourced from public datasets or synthetically augmented to simulate multiple image inputs.

**Build it:**

1. Collect or simulate multiple images per entity and preprocess them into embeddings.
2. Design and implement a multimodal fusion module that aggregates multiple image embeddings with text and graph embeddings, e.g., via attention or transformer layers.
3. Integrate this module into the MRE pipeline, replacing the single-image multimodal learner.
4. Train and evaluate the extended model on zero-shot relation prediction tasks, comparing to the original single-image MRE baseline.
5. Analyze embedding visualizations and metrics to assess improvements.
6. Document challenges encountered in multimodal fusion scaling and potential solutions.

**Ships as:** A comprehensive GitHub repository with the extended MRE implementation, evaluation scripts, and a report discussing the design, results, and challenges of incorporating multiple images per entity.

**Stretch goal:** Explore integrating ontology-based prior knowledge into the fusion module to further improve zero-shot learning.

_The paper authors did not release code or datasets; substitute datasets and synthetic multimodal features must be used carefully to approximate the original experimental setup._
