---
title: "191 · HyperTopo-Adapters: Geometry- and Topology-Aware Segmentation of Leaf Lesions on Frozen Encoders — Toni Kazic"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-toni-kazic"
source_hash: "804429b48102d5f44a05b892d454b8b8aa4ab040c97cb7edcbd94e11cd00dd2b"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Geometric Deep Learning
**The paper assumes:** manifold learning, hyperbolic geometry embeddings, topology-aware neural networks, geometric deep learning methods
**Already in this field?** Skip this entirely if you already understand neural network embeddings on manifolds and topology-aware loss functions in deep learning.

This background focuses on geometric deep learning, essential for understanding the HyperTopo-Adapters paper's use of non-Euclidean product manifolds (hyperbolic, Euclidean, spherical) to capture hierarchical and topological features in leaf lesion segmentation. The rigorous course offers a deep, structured university-level foundation, while the fast track provides a concise, intuition-driven overview suitable for quickly grasping core concepts without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.7960 Deep Learning, Fall 2024](https://www.youtube.com/playlist?list=PLUl4u3cNGP63URZnh5iqBzDTDYPUTQT-8) — MIT OpenCourseWare · 24 videos · 29.5h across 24 episodes

**Watch only this:** Lectures 4 (Architectures: Grids), 5 (Architectures: Graphs), 11 (Representation Learning: Reconstruction-Based), 12 (Representation Learning: Similarity-Based), and 23 (Metrized Deep Learning), about 6 hours total — these cover the core geometric deep learning concepts and metric learning needed to understand the paper's manifold embedding and topology-aware training.

*Why it unblocks this paper:* MIT 6.7960 Deep Learning (Fall 2024) covers advanced deep learning architectures including geometric deep learning on grids and graphs, representation learning, and metric learning, which are directly relevant to understanding manifold embeddings and topology-aware losses in this paper.

*If you want all of it:* 29.5 hours across all 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph neural networks and geometric deep learning](https://www.youtube.com/playlist?list=PLUyeLOe23o-9MoC2XLB7_BMIkjvyl4hEb) — Adam Safron · 14 videos · 10.6h across 14 episodes

**Watch only this:** Episodes 3 (Principles and applications of relational inductive biases in deep learning), 5 (Theoretical Foundations of Graph Neural Networks), 7 (Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 1.1 - Why Graphs), and 12 (11 – Graph Convolutional Networks (GCNs)), about 3.5 hours total — these give a concise yet solid intuition and theory background on geometric deep learning relevant to the paper.

*Why it unblocks this paper:* Adam Safron's 'Graph neural networks and geometric deep learning' playlist provides clear, focused explanations on geometric deep learning and graph neural networks, including theoretical foundations and applications, which align well with the paper's use of hyperbolic and spherical embeddings and topology-aware losses.

*If you want all of it:* 10.6 hours across all 14 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of the HyperTopo-Adapters paper. The beginner project focuses on reproducing and visualizing the Soft Euler Characteristic topology-aware loss on synthetic lesion masks, the intermediate project implements the core HyperTopo-Adapter architecture and topology-aware training on a publicly available leaf lesion dataset, and the advanced project extends the method by benchmarking different frozen vision encoders to address the paper's stated future direction of backbone universality.

### Beginner — Soft Euler Characteristic Loss Visualization on Synthetic Lesions
*Effort: a weekend, ~8 hours*

You build a Python notebook that implements the differentiable Soft Euler Characteristic (EC) loss as described in the paper, applying it to synthetic binary masks simulating leaf lesions with holes. You visualize how the loss changes as holes are added or removed, demonstrating its sensitivity to topological features.

**Why it shows you understood the paper:** This project shows you understand the topology-aware loss mechanism central to the paper, including how it approximates Betti number consistency and enforces biologically meaningful lesion topology.

**Grounded in:** Formulation of a topology-aware training objective combining Dice/BCE with hyperbolic contrastive loss and a differentiable Soft Euler Characteristic surrogate enforcing Betti number consistency.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, PyTorch

**Data:** Synthetic binary masks generated in code to simulate leaf lesions with varying numbers of holes.

**Build it:**

1. Implement the Soft Euler Characteristic loss function as a differentiable PyTorch module following the paper's description.
2. Generate synthetic binary lesion masks with controlled numbers of holes and connected components.
3. Compute and visualize the Soft EC loss values for these masks, showing how the loss responds to topological changes.
4. Plot example masks alongside their Soft EC loss values to illustrate the topology sensitivity.
5. Write a README explaining the Soft EC loss and its role in topology-aware segmentation.

**Ships as:** A Jupyter notebook demonstrating Soft Euler Characteristic loss behavior on synthetic lesion masks, with visualizations and explanations.

**Stretch goal:** Add a small experiment integrating the Soft EC loss with Dice loss on a toy segmentation model trained on synthetic data.

### Intermediate — Reimplementation of HyperTopo-Adapters on Kaggle Leaf Lesion Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core HyperTopo-Adapter architecture using a frozen vision encoder (e.g., DINOv2 ViT) and a lightweight adapter projecting features into a product manifold (hyperbolic, Euclidean, spherical). You train the model on the Kaggle leaf lesion dataset (N=2,940 images) with combined Dice, BCE, hyperbolic contrastive, and Soft Euler Characteristic losses. You compare segmentation performance and topological hole error (∆β1) against a Euclidean baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main method and results, including the product manifold embedding and topology-aware training objective, validating the key contribution of improved topology preservation without sacrificing standard segmentation metrics.

**Grounded in:** Introduction of a product-manifold latent head combining hyperbolic, Euclidean, and spherical geometries to capture biological hierarchy and boundary closure; Empirical validation on a Kaggle leaf-lesion dataset showing a 9% reduction in topological hole errors (∆β1) without sacrificing Dice/IoU accuracy.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** Kaggle leaf lesion dataset with 2,940 images as used in the paper (publicly available Kaggle dataset for leaf lesion segmentation).

**Build it:**

1. Download and preprocess the Kaggle leaf lesion dataset for segmentation tasks.
2. Implement the HyperTopo-Adapter head projecting frozen encoder features into hyperbolic, Euclidean, and spherical latent spaces as described.
3. Integrate the combined loss function: Dice, BCE, hyperbolic contrastive loss, and Soft Euler Characteristic loss.
4. Train the model with a frozen DINOv2 encoder baseline and compare against a Euclidean-only latent space baseline.
5. Evaluate segmentation quality using Dice, IoU, and topological hole error (∆β1) metrics.
6. Document results and visualize segmentation outputs highlighting topology preservation.

**Verified links from the paper:**

- <https://github.com/ChimdiWalter/HyperTopo-Adapters> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to train and evaluate HyperTopo-Adapters on leaf lesion images, including scripts, metrics, and visualizations comparing topology-aware and baseline models.

**Stretch goal:** Experiment with partial unfreezing of encoder blocks and report impact on topology metrics.

### Advanced — Benchmarking HyperTopo-Adapters with Different Frozen Encoders
*Effort: 3+ weeks*

You extend the HyperTopo-Adapters method by benchmarking its performance using different frozen vision encoders such as DINOv3 and ResNet-101, addressing the paper's future direction on backbone universality. You implement the adapter and topology-aware training objective on these encoders, evaluate on the Kaggle leaf lesion dataset, and analyze differences in topology preservation and segmentation accuracy.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the method and its adaptability. It also shows your ability to conduct systematic empirical studies and interpret results in the context of biological topology preservation.

**Grounded in:** Benchmarking the manifold adapter with different backbones such as DINOv3 and ResNet-101 to test universality.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** Kaggle leaf lesion dataset (N=2,940 images) as in the paper.

**Build it:**

1. Implement adapter heads compatible with multiple frozen encoders: DINOv2 (baseline), DINOv3, and ResNet-101.
2. Integrate the topology-aware training objective with combined Dice, BCE, hyperbolic contrastive, and Soft Euler Characteristic losses for each encoder.
3. Train and evaluate models on the Kaggle leaf lesion dataset, ensuring consistent preprocessing and hyperparameters.
4. Compare segmentation metrics (Dice, IoU) and topological hole error (∆β1) across encoders.
5. Analyze and document how encoder choice affects topology preservation and segmentation quality.
6. Prepare a detailed report and README explaining methodology, results, and implications for biological lesion analysis.

**Verified links from the paper:**

- <https://github.com/ChimdiWalter/HyperTopo-Adapters> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repository with code, trained models, evaluation scripts, and a detailed report benchmarking HyperTopo-Adapters across multiple frozen encoders.

**Stretch goal:** Explore partial unfreezing strategies or adapter architecture variants to improve performance on specific encoders.
