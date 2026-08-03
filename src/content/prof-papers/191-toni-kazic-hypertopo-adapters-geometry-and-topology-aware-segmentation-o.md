---
title: "191 · HyperTopo-Adapters: Geometry- and Topology-Aware Segmentation of Leaf Lesions on Frozen Encoders — Toni Kazic"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-toni-kazic"
source_hash: "e89f8fe5af1f975dc36a327d4292be7b245f4fa8192197e12c6b0cfbb800e8ab"
sequence: 191
generator: "outreach-garden: managed"
---

# 191 · HyperTopo-Adapters: Geometry- and Topology-Aware Segmentation of Leaf Lesions on Frozen Encoders

## At a glance

- **Professor:** Toni Kazic
- **Institution:** University of Missouri
- **Paper:** [HyperTopo-Adapters: Geometry- and Topology-Aware Segmentation of Leaf Lesions on Frozen Encoders](https://arxiv.org/pdf/2601.06067)
- **Authors:** Chimdi Walter Ndubuisi, Dr. Toni Kazic
- **Year:** 2025

## Paper overview

This paper presents HyperTopo-Adapters, a novel method for segmenting leaf lesions in images by incorporating geometric and topological information into the segmentation process. The approach uses a frozen vision encoder and adds a lightweight adapter that projects features into a combined hyperbolic, Euclidean, and spherical latent space to better capture hierarchical structure, local details, and closed boundaries of lesions. The method also integrates topology-aware loss functions to preserve biologically meaningful lesion shapes and holes, improving segmentation quality beyond standard pixel-wise metrics.

### Why it matters

**Research problem:** Standard segmentation methods optimize pixel overlap but often fail to preserve the global topological structure of leaf lesions, such as the correct number of lesions and holes, which are biologically meaningful descriptors of biochemical pathways. Existing models working in Euclidean latent spaces do not adequately capture hierarchical and closure properties of lesions, and topology-aware metrics are rarely integrated into training due to computational costs.

**Why it matters:** Accurate segmentation of leaf lesions with preserved topological features is crucial for understanding underlying biochemical pathways in plants. Errors like merging distinct lesions or creating spurious holes degrade downstream biological analyses such as lesion counting and phenotyping, limiting the utility of segmentation models in plant biology and genetics research.

**Key contributions:**

- Introduction of a product-manifold latent head combining hyperbolic, Euclidean, and spherical geometries to capture biological hierarchy and boundary closure.
- Formulation of a topology-aware training objective combining Dice/BCE with hyperbolic contrastive loss and a differentiable Soft Euler Characteristic surrogate enforcing Betti number consistency.
- Development of an encoder-agnostic, reproducible training and evaluation framework featuring structure-aware metrics and a min-PD within top-K Dice model selection rule.
- Empirical validation on a Kaggle leaf-lesion dataset (N=2,940) showing a 9% reduction in topological hole errors (∆β1) without sacrificing Dice/IoU accuracy.

## About the professor

**Toni Kazic** — Associate Professor, Electrical Engineering and Computer Science, University of Missouri.

Research interests: Methods to infer the structure of complex networks using the disease lesion mimic mutants of maize as a model system; Development of an architecture for community query, deposit, review and curation of information on biochemical reactions; Analysis of extant reaction networks.

### Research links

- [Faculty/profile page](https://engineering.missouri.edu/faculty/toni-kazic)
- [Professor website](http://www.maizelesions.org/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&authuser=1&user=cGB4-3QAAAAJ)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HyperTopo-Adapters paper, start with foundational concepts in hyperbolic geometry and topological data analysis to grasp the geometric and topological principles underlying the method. Then, study product manifold embeddings to comprehend the combined latent space structure used in the adapter. Finally, focus on the core concept of topology-aware segmentation methods, emphasizing the authors' own talk or closest available content to directly connect with their novel approach.

### Hyperbolic geometry in machine learning seminar *(prerequisite)*
This section covers hyperbolic geometry's role in machine learning, essential for understanding how hierarchical relationships in lesion features are embedded in hyperbolic space. The ECCV 2022 tutorial on Hyperbolic Representation Learning for Computer Vision offers an advanced, research-level seminar suitable for graduate readers.

*How the paper uses it:* The paper uses hyperbolic space in its product manifold to capture hierarchical separation of lesion features.

▶ [ECCV 2022 Tutorial | Hyperbolic Representation Learning for Computer Vision [3/5]](https://www.youtube.com/watch?v=MEBT-EESf3Q) — Hyperbolic Learning for Computer Vision · 3 years ago

### Topological data analysis lecture *(prerequisite)*
Topological data analysis (TDA) provides the theoretical foundation for the topology-aware loss functions used in the paper. The lecture by Bastian Grossenbacher-Rieck offers a rigorous introduction to computational topology and Betti numbers, critical for understanding the topological constraints enforced during training.

*How the paper uses it:* The paper integrates topology-aware loss functions based on Betti number consistency to preserve lesion topology.

▶ [Topological Data Analysis for Machine Learning I: Algebraic ...](https://www.youtube.com/watch?v=gVq_xXnwV-4) — Bastian Grossenbacher-Rieck · 56:53

### Product manifold embeddings lecture *(prerequisite)*
Understanding the product manifold combining hyperbolic, Euclidean, and spherical geometries is key to grasping the latent space design of HyperTopo-Adapters. The lecture by Prof. Victor Turchin on embeddings and manifolds provides an advanced mathematical perspective on these concepts.

*How the paper uses it:* The adapter projects features into a product manifold (hyperbolic ⊕ Euclidean ⊕ spherical) to capture hierarchical, local, and boundary information.

▶ [HHHW04 | Prof. Victor Turchin | Embeddings, operads, graph ...](https://www.youtube.com/watch?v=NTDvVAypbC0) — INI Seminar Room 1 · 1:04:34

### Topology-aware segmentation methods conference
This section focuses on the integration of topology into segmentation tasks to preserve biologically meaningful lesion shapes. The selected conference talk on topology-aware segmentation methods provides context on state-of-the-art approaches related to the paper's core contribution.

*How the paper uses it:* The paper's central innovation is topology-aware segmentation that preserves lesion topology critical for biological analysis.

▶ [Paper: HISTO-UNet📍 Accepted at IEEE ISBI 2026 | By Ashim Dhor](https://www.youtube.com/watch?v=-rnJR4_8daI) — Ashim Dhor · 1 month ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HyperTopo-Adapters paper, start by building intuition on hyperbolic geometry and topology concepts as they relate to machine learning, focusing on how these geometries capture hierarchical and topological features. Then, learn about product manifold embeddings that combine multiple geometries to represent complex data structures. Finally, explore the core idea of topology-aware segmentation methods and how differentiable Euler characteristic loss enforces topological consistency during training.

### Hyperbolic geometry in machine learning seminar *(prerequisite)*
Hyperbolic geometry provides a way to represent hierarchical data structures efficiently, which is crucial for separating lesion features in this paper. Understanding hyperbolic embeddings helps grasp why the authors use hyperbolic space to capture biological hierarchies in leaf lesions.

*How the paper uses it:* The paper uses hyperbolic space in the product manifold to encourage hierarchical separation of lesion features.

▶ [ECCV 2022 Tutorial | Hyperbolic Representation Learning for Computer Vision [3/5]](https://www.youtube.com/watch?v=MEBT-EESf3Q) — Hyperbolic Learning for Computer Vision · 3 years ago

### Topological data analysis lecture *(prerequisite)*
Topological data analysis introduces concepts like Betti numbers and holes in shapes, which are key to understanding how topology-aware losses preserve lesion structure. This foundation clarifies why topology matters beyond pixel-wise accuracy in segmentation.

*How the paper uses it:* The paper integrates topology-aware loss functions to preserve biologically meaningful lesion shapes and holes.

▶ [Topological Data Analysis for Machine Learning I: Algebraic ...](https://www.youtube.com/watch?v=gVq_xXnwV-4) — Bastian Grossenbacher-Rieck · 56:53

### Product manifold embeddings lecture *(prerequisite)*
Product manifold embeddings combine different geometric spaces (hyperbolic, Euclidean, spherical) to capture multiple aspects of data simultaneously, such as hierarchy, local detail, and boundary closure. This concept explains the latent space design in the adapter.

*How the paper uses it:* The adapter projects features into a combined hyperbolic, Euclidean, and spherical latent space to capture hierarchical and boundary properties.

▶ [Riemannian Manifolds in 12 Minutes](https://www.youtube.com/watch?v=jpjt08HkOzA) — DIBEOS · 1 year ago

### Differentiable Euler characteristic loss talk *(prerequisite)*
The Euler characteristic is a topological invariant that counts features like holes and connected components. Learning how a differentiable surrogate of this invariant is used as a loss function helps understand how the model enforces topological consistency efficiently during training.

*How the paper uses it:* The paper uses a differentiable Soft Euler Characteristic loss to enforce Betti number consistency and preserve lesion topology.

▶ [Lecture 25 - The Euler characterisitc](https://www.youtube.com/watch?v=t5x6a-22r7Q) — Gabriel Islambouli · 45:12 · 5 years ago

### Topology-aware segmentation methods conference
Topology-aware segmentation methods integrate topological constraints into segmentation models to preserve meaningful shape features. This overview helps contextualize the paper’s contribution within the broader field of topology-aware segmentation.

*How the paper uses it:* The paper proposes a topology-aware segmentation method that improves biological validity of leaf lesion segmentation.

▶ [Paper: HISTO-UNet📍 Accepted at IEEE ISBI 2026 | By Ashim Dhor](https://www.youtube.com/watch?v=-rnJR4_8daI) — Ashim Dhor · 1 month ago

## Already in your library

- [What is LoRA? Low-Rank Adaptation for finetuning LLMs ...](https://www.youtube.com/watch?v=KEv-F5UkhxU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [Hyperbolic Geometry in Machine Learning - Inzamam Rahaman](https://www.youtube.com/watch?v=Fbcd31g70ps) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Hyperbolic Geometry: The Mind-Bending World of Non-Euclidean Space](https://www.youtube.com/watch?v=K8qv--2l54Q) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Topological Data Analysis (TDA) | An introduction](https://www.youtube.com/watch?v=fpL5fMmJHqk) — also for: A Computational Topology-based Spatiotemporal Analysis Technique for Honeybee Aggregation (Elizabeth Bradley)
