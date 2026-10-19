---
title: "754 · Neural Injective Functions for Multisets, Measures and Graphs via a Finite Witness Theorem — Steven J. Gortler"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-steven-j-gortler"
source_hash: "e250b41ac051740e5fc2abc81199a5f9af8dd9d7afa4e768a00c20465828d26c"
sequence: 754
generator: "outreach-garden: managed"
---

# 754 · Neural Injective Functions for Multisets, Measures and Graphs via a Finite Witness Theorem

## At a glance

- **Professor:** Steven J. Gortler
- **Institution:** Harvard University
- **Paper:** [Neural Injective Functions for Multisets, Measures and Graphs via a Finite Witness Theorem](https://arxiv.org/pdf/2306.06529)
- **Authors:** Tal Amir, Steven J. Gortler, Ilai Avni, Ravina Ravina, Nadav Dym
- **Year:** 2023

## Paper overview

This paper studies functions that operate on multisets (collections of elements where order doesn't matter but repetitions are allowed) and measures, which are important in machine learning tasks involving point clouds and graphs. It proves that neural networks with analytic, non-polynomial activation functions can create injective (one-to-one) multiset functions, meaning different multisets map to different outputs. This bridges a gap between theory and practice, as previous theory focused on polynomial functions, while practice uses neural networks. The paper also shows limitations of piecewise-linear activations like ReLU, and applies these results to universal approximation of multiset functions and graph neural network separation power.

### Why it matters

**Research problem:** The gap between theoretical injective multiset functions (usually polynomial-based) and practical neural network-based multiset functions, specifically whether neural networks with common activations can be injective on multisets and measures, and how many neurons are needed.

**Why it matters:** Injective multiset functions are crucial for machine learning models on unordered data like point clouds and graphs to avoid overfitting to order and to guarantee universal approximation and graph separation capabilities. Understanding which neural architectures are injective informs design of effective graph neural networks and multiset architectures.

**Key contributions:**

- Proof that neural networks with analytic non-polynomial activations are injective multiset functions with near-optimal embedding dimension.
- Introduction and proof of a finite witness theorem generalizing prior algebraic geometry results to analytic functions and σ-subanalytic sets.
- Negative results showing piecewise-linear activations (e.g., ReLU) cannot yield injective moment functions on infinite alphabets.
- Demonstration that moment functions induced by neural networks cannot be bi-Lipschitz, implying limitations on stability.
- Applications to universal approximation of continuous functions on multisets and measures using neural network moments.

## About the professor

**Steven J. Gortler** — Robert I. Goldman Professor of Computer Science, Harvard University.

### Research links

- [Faculty/profile page](https://seas.harvard.edu/person/steven-gortler)
- [Identity evidence](http://www.eecs.harvard.edu/~sjg)
- [Identity evidence](http://www.cs.harvard.edu/~sjg)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Real and Complex Analysis
**The paper assumes:** advanced real analysis, complex analysis, analytic functions, measure theory
**Already in this field?** Skip this entirely if you have completed a rigorous undergraduate or beginning graduate course covering real and complex analysis with a focus on analytic functions and measure theory.

This background focuses on real and complex analysis, particularly analytic functions and measure theory, which are foundational to understanding the theoretical results in the paper on neural injective functions. The rigorous course option offers a deep, university-level treatment of complex analysis, ideal for thorough comprehension, while the fast track provides a concise, intuition-driven introduction to real analysis concepts relevant to the paper. Choose the rigorous course for a comprehensive foundation or the fast track for a quicker, focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Math 135 Complex Analysis Fall 2024](https://www.youtube.com/playlist?list=PLun8-Z_lTkC4Aclv5RCOEmP4JbW1J8RL1) — Winston Ou · 23 videos · 23.8h across 23 episodes

**Watch only this:** Episodes 1-4 ("Holomorphic functions and Cauchy Riemann Equations" through "Holomorphic implies analytic"), about 4 hours — these cover the core concepts of analyticity and holomorphic functions essential for understanding the paper's theoretical framework.

*Why it unblocks this paper:* This course on complex analysis by Winston Ou covers analytic functions in depth, including power series, singularities, and the Cauchy integral formula, directly supporting the paper's reliance on analytic non-polynomial activations and the finite witness theorem.

*If you want all of it:* 23.8 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Real Analysis](https://www.youtube.com/playlist?list=PLldiDnQu2phvYtwJBwauXuT9UbNfMYrhF) — ThatMathThing · 15 videos · 3.7h across 15 episodes

**Watch only this:** Episodes 1-7 ("The Real Analysis Survival Guide" through "Defining Exponentials the 'EASY' and HARD way"), about 1.5 hours — these episodes cover key foundational ideas about real numbers, limits, and function behavior needed to grasp the paper's analytic function context.

*Why it unblocks this paper:* This concise series by ThatMathThing introduces real analysis concepts such as limits, continuity, and uniform continuity, providing a quick but solid foundation on function properties and measure theory relevant to the paper's analytic function assumptions.

*If you want all of it:* 3.7 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Neural Injective Functions for Multisets, Measures, and Graphs, start by building a solid foundation in analytic functions and neural networks with analytic activations, as these are critical to the paper's theoretical contributions. Then, study the concept of injective multiset functions to grasp the core mathematical property the paper addresses. Finally, focus on the paper's core topic of neural injective functions and their applications, including graph neural networks and Weisfeiler-Leman separation, to appreciate the novel results and implications presented by the authors.

### Finite witness theorem analytic functions *(prerequisite)*
This section covers analytic functions and their properties, which form the mathematical backbone of the finite witness theorem introduced in the paper. Understanding analytic functions is essential to grasp how the authors reduce infinite equality constraints to a finite subset, a key theoretical tool in their proofs.

*How the paper uses it:* The finite witness theorem generalizes algebraic geometry results to analytic functions, enabling the main injectivity proofs.

▶ [MA521 Theory of Analytic Functions Lecture 1 part 1](https://www.youtube.com/watch?v=mOa1JYoMCUk) — Department of Mathematics IIT Bombay · 26:29 · 6y ago

### Neural networks with analytic activations *(prerequisite)*
This section explains neural network activation functions, emphasizing analytic non-polynomial activations like sigmoid, tanh, and swish, which are central to the paper's positive injectivity results. A solid understanding of these activations helps in appreciating why certain activations enable injective multiset functions while others do not.

*How the paper uses it:* The paper proves injectivity for shallow MLPs with analytic non-polynomial activations, highlighting their importance.

▶ [The GELU, SiLU and SwiGLU activation functions, clearly explained!!!](https://www.youtube.com/watch?v=2FaI2Fen1mQ) — StatQuest with Josh Starmer · 24:18 · 1mo ago

### Injective multiset functions *(prerequisite)*
This section delves into the concept of injective functions, focusing on their role in mapping multisets uniquely. Understanding injectivity in the context of multisets is crucial for following the paper's main theoretical contributions and the significance of injective moment functions.

*How the paper uses it:* Injectivity on multisets is the core property the paper establishes for neural network moment functions.

▶ [Injective Functions (and a Proof!) | Injections, One to One Functions, Injective Proofs](https://www.youtube.com/watch?v=GBUi70WCgEE) — Wrath of Math · 6:59 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's contributions on neural injective functions for multisets and graphs, start by grasping the fundamental concept of injective (one-to-one) functions. Next, learn about analytic functions, which are central to the paper's theoretical results. Then, explore neural networks with analytic activations to see how these functions are implemented in practice. Finally, study injective multiset functions and their role in machine learning on unordered data, culminating with the paper's core method of moment embeddings for multisets.

### Injective multiset functions *(prerequisite)*
Injective functions map distinct inputs to distinct outputs, ensuring no two different inputs share the same output. Understanding injectivity is crucial for working with multisets, where order doesn't matter but duplicates do, so functions must distinguish different multisets reliably.

*How the paper uses it:* The paper proves neural networks with analytic activations can be injective on multisets, enabling unique multiset representations.

▶ [Functions, Domain, Codomain, Injective(one to one), Surjective(onto), Bijective Functions](https://www.youtube.com/watch?v=ojHAAqgW1_M) — The Math Sorcerer · 17:25 · 7y ago

### Finite witness theorem analytic functions *(prerequisite)*
Analytic functions are smooth and infinitely differentiable functions that can be represented by convergent power series locally. The finite witness theorem reduces infinitely many equality constraints to a finite subset, enabling practical proofs of injectivity for analytic functions.

*How the paper uses it:* The paper introduces a finite witness theorem for analytic functions to prove injectivity of neural network moment functions on multisets.

▶ [Sufficient Condition for a Function to be Analytic with proof](https://www.youtube.com/watch?v=neg-lVku0oA) — IGNITED MINDS · 18:21 · 6y ago

### Neural networks with analytic activations *(prerequisite)*
Neural networks use activation functions to introduce non-linearity. Analytic activations like sigmoid or tanh are smooth and non-polynomial, which the paper shows are essential for constructing injective multiset functions.

*How the paper uses it:* The paper proves that shallow neural networks with analytic non-polynomial activations achieve injectivity on multisets and measures.

▶ [Activation functions in neural networks](https://www.youtube.com/watch?v=v1MhJs4A1i4) — CodeEmporium · 12:32 · 2y ago

### Moment embeddings for multisets
Moment embeddings summarize multisets by aggregating features (moments) computed via neural networks, enabling injective and permutation-invariant representations. This approach is central to the paper's method for constructing injective multiset functions.

*How the paper uses it:* The paper uses neural network-induced moment functions as injective embeddings for multisets and measures, with proven theoretical guarantees.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 3.1 - Node Embeddings](https://www.youtube.com/watch?v=rMq21iY61SE) — Stanford Online · 14:44 · 5y ago

## Already in your library

- [1: Introduction to Neural Networks and Deep Learning; Training Deep NNs](https://www.youtube.com/watch?v=kyQ0CRkYhy4) — also for: AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference (Mahmut T. Kandemir)
- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [MIT 6.S191 (2025): Recurrent Neural Networks, Transformers ...](https://www.youtube.com/watch?v=GvezxUdLrEk) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Sequence-to-Sequence (seq2seq) Encoder-Decoder Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=L8HKweZIOmg) — also for: Toward Sensor-to-Text Generation: Leveraging LLM-Based Video Annotations for Stroke Therapy Monitoring (Monika Akbar)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core theoretical and empirical contributions on neural injective functions for multisets and graphs. The beginner project focuses on reproducing a key theoretical concept using analytic activations in a simple setting. The intermediate project involves implementing the paper's core moment-injective neural network on multisets and empirically comparing analytic versus piecewise-linear activations on a small synthetic dataset. The advanced project extends the paper by exploring stable injective embeddings, addressing the paper's limitation on bi-Lipschitzness, and experimenting with training methods to improve separation margins in graph neural networks with analytic activations.

### Beginner — Injective Moment Embeddings for Small Multisets
*Effort: a weekend, ~8 hours*

You build a simple shallow neural network with an analytic non-polynomial activation (e.g., tanh or sigmoid) that maps small multisets of 2D points to embedding vectors. You demonstrate injectivity by showing that different multisets produce distinct embeddings, reproducing a small-scale version of the paper's Theorem 3.3 embedding dimension result.

**Why it shows you understood the paper:** This project shows you understand the finite witness theorem and how analytic activations enable injective multiset functions, a core theoretical contribution of the paper.

**Grounded in:** Proof that neural networks with analytic non-polynomial activations are injective multiset functions with near-optimal embedding dimension (Theorem 3.3).

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic multisets of 2D points generated randomly with controlled size ≤ n (e.g., n=3).

**Build it:**

1. Implement a shallow MLP with one hidden layer and an analytic activation function (e.g., tanh).
2. Generate random multisets of 2D points with sizes up to n=3.
3. Compute moment embeddings by summing the MLP outputs over the multiset elements.
4. Visualize embeddings and verify injectivity by checking pairwise distances between embeddings of distinct multisets.
5. Document the embedding dimension used and relate it to the paper's theoretical bound.

**Ships as:** A GitHub repo with code to generate multisets, compute moment embeddings with analytic activations, visualizations showing distinct embeddings for distinct multisets, and a README explaining the connection to the paper's finite witness theorem and injectivity result.

**Stretch goal:** Add a comparison with a ReLU-activated network to empirically show failure of injectivity on the same multisets.

### Intermediate — Empirical Comparison of Analytic vs ReLU Activations for Multiset Injectivity
*Effort: 2 weekends, ~20 hours*

You implement the paper's core moment-injective shallow neural network architecture for multisets of fixed size using both analytic (e.g., swish or tanh) and piecewise-linear (ReLU) activations. You generate synthetic multisets in Rd and evaluate injectivity metrics (e.g., injectivity ratio) and embedding dimension effects, reproducing the paper's empirical experiments on injectivity and bi-Lipschitzness.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method and empirically validate its key theoretical claims about activation functions and injectivity, bridging theory and practice.

**Grounded in:** Empirical injectivity and bi-Lipschitzness experiments showing analytic activations maintain positive injectivity ratios at low embedding dimensions, unlike piecewise-linear activations (Figure 1 and Section 7).

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic multisets of points in Rd (e.g., d=2 or 3), generated randomly with controlled size ≤ n (e.g., n=5).

**Build it:**

1. Implement shallow MLP moment functions with analytic activations (e.g., swish) and piecewise-linear activations (ReLU).
2. Generate synthetic multisets of points in Rd with fixed size n.
3. Compute embeddings and measure injectivity metrics such as minimum pairwise embedding distance and injectivity ratio.
4. Plot injectivity metrics versus embedding dimension for both activation types.
5. Analyze and document results comparing analytic and ReLU activations in terms of injectivity and stability.

**Ships as:** A GitHub repo with code, Jupyter notebooks showing empirical injectivity experiments, plots comparing analytic and ReLU activations, and a README discussing how results align with the paper's theoretical and empirical findings.

**Stretch goal:** Extend experiments to multisets with variable sizes and explore the effect of random parameter initialization on injectivity.

### Advanced — Improving Stability of Injective Moment Embeddings for Graph Neural Networks
*Effort: 3+ weeks*

You extend the paper's work by investigating methods to improve the stability (bi-Lipschitzness) of moment embeddings induced by neural networks with analytic activations, addressing a key limitation noted in the paper. You implement message-passing neural networks (MPNNs) with analytic activations on a small graph dataset (e.g., MUTAG or a synthetic graph dataset) and experiment with training strategies or architectural modifications to increase separation margins and embedding stability.

**Why it shows you understood the paper:** This project shows deep engagement with the paper's limitations and future directions by attempting to overcome the lack of stability in moment embeddings and improve practical graph separation power, demonstrating research-level initiative.

**Grounded in:** Limitations on stability: Moment functions induced by neural networks are not bi-Lipschitz (Proposition 5.1) and empirical separation distances in MPNNs with analytic activations can be very small (Section 7). Future directions include improving separation margins and stability.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, NumPy, Matplotlib

**Data:** Small public graph dataset such as MUTAG or synthetic graphs generated with known properties; used as a proxy for the paper's graph experiments.

**Build it:**

1. Implement or adapt an MPNN architecture with analytic activations (e.g., tanh or swish) using PyTorch Geometric.
2. Train the MPNN on a small graph classification dataset (e.g., MUTAG) with random initialization and standard training.
3. Measure graph embedding separation margins and analyze stability metrics.
4. Experiment with architectural changes (e.g., normalization, skip connections) or training methods (e.g., contrastive loss) to improve embedding stability and separation.
5. Document findings, including quantitative metrics and qualitative analysis linking back to the paper's theoretical limitations and future directions.

**Ships as:** A GitHub repo with MPNN code, training scripts, evaluation notebooks, plots of separation margins and stability metrics, and a detailed README discussing how your experiments address the paper's limitations and suggest practical improvements.

**Stretch goal:** Explore alternative injective multiset functions beyond moments, such as sorting-based or max-filter methods, and compare their stability and separation power.

_No authors' code or datasets are provided for this paper; synthetic data and publicly available small graph datasets are used as substitutes._
