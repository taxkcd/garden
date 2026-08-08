---
title: "275 · RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer — Jiawei Zhang"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jiawei-zhang"
source_hash: "2d2eb851abdf9d46b12f56649a45e71c576835297c8ca3156d355924b5cc93ed"
sequence: 275
generator: "outreach-garden: managed"
---

# 275 · RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer

## At a glance

- **Professor:** Jiawei Zhang
- **Institution:** Univ. of California - Davis
- **Paper:** [RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer](https://arxiv.org/pdf/2411.11162)
- **Authors:** Jiawei Zhang
- **Year:** 2024

## Paper overview

This paper introduces RPN 2, an improved version of the Reconciled Polynomial Network model, which explicitly models interdependence among data instances and attributes. RPN 2 unifies and advances major backbone neural network architectures like CNNs, RNNs, GNNs, and Transformers by focusing on their underlying data interdependence functions. The model shows superior performance on diverse multimodal datasets including images, language, time series, and graphs, and is supported by an updated toolkit for easy adoption.

### Why it matters

**Research problem:** The original RPN model assumed independence among data instances and attributes, which is unrealistic for complex, interdependent data such as images, language, time series, and graphs. Ignoring these interdependencies leads to degraded learning performance. The problem is how to explicitly model and leverage data interdependence to improve function learning and unify dominant backbone architectures.

**Why it matters:** Many real-world datasets exhibit complex interdependencies that are critical for accurate modeling and prediction. Existing models often fail to capture these relationships effectively, limiting their performance and generalizability. A unified framework that models interdependence can advance the design of superior learning architectures and improve performance across diverse domains.

**Key contributions:**

- Introduction of RPN 2 with explicit data interdependence modeling capabilities.
- Development of a suite of interdependence functions capturing diverse relationships among data instances and attributes.
- Extension of RPN 2's unifying potential to encompass CNN, RNN, GNN, and Transformer architectures within a canonical framework.
- Empirical demonstration of superior performance of RPN 2-based models on multimodal benchmark datasets.
- Update of the TINY BIG toolkit to version 0.2.0 incorporating interdependence functions and new data compression and fusion functions.

## About the professor

**Jiawei Zhang** — Associate Professor, Department of Computer Science, Univ. of California - Davis.

Research interests: Information Fusion and Data Mining across Multiple Information Sources, Online Social Media Analysis, Multiple Modality Text Mining, Heterogeneous Knowledge Graph Studies, Enterprise Fusion and Knowledge Discovery, Bio-Medical Research, Geographical Data Sources Fusion

### Research links

- [Faculty/profile page](http://jiaweizhang.net)
- [Resolved homepage](http://www.ifmlab.org/index.html)
- [Lab website](http://www.ifmlab.org)
- [More information here](https://www.ifmlab.org/opening.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the RPN 2 paper, start with foundational lectures on the major backbone architectures unified by RPN 2: Graph Neural Networks (GNNs), Convolutional Neural Networks (CNNs), Transformer architectures, and Sparse Matrix Multiplication techniques. These prerequisites provide the necessary background on the architectures and computational methods that RPN 2 generalizes and advances. Finally, focus on the core concept of interdependence function learning and the author's own talk to grasp the novel contributions and unifying framework introduced in the paper.

### Graph neural networks GNN lecture *(prerequisite)*
Understanding Graph Neural Networks is essential because RPN 2 extends and unifies GNN architectures through explicit interdependence functions. The selected lecture provides a rigorous, research-level introduction to graph structures, the motivation for GNNs, and their mathematical foundations.

*How the paper uses it:* RPN 2 generalizes and unifies GNN architectures via interdependence functions.

▶ [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — Alex Foo · 4 years ago

### Convolutional neural networks CNN lecture *(prerequisite)*
CNNs are a fundamental backbone architecture unified by RPN 2’s interdependence framework. The chosen MIT lecture offers an advanced, university-level treatment of CNNs, focusing on convolution operations and their role in computer vision, which is critical for understanding RPN 2’s approach to image data.

*How the paper uses it:* CNNs are unified within RPN 2’s interdependence function framework.

▶ [MIT 6.S191 (2025): Convolutional Neural Networks](https://www.youtube.com/watch?v=oGpzWAlP5p0) — Alexander Amini · 1 year ago

### Transformer architectures lecture *(prerequisite)*
Transformers are a key architecture unified by RPN 2 through interdependence functions. The Stanford CME295 lecture provides a graduate-level, detailed explanation of Transformer models and their mechanisms, essential for appreciating how RPN 2 relates to and advances Transformer architectures.

*How the paper uses it:* Transformers are unified with other backbones in RPN 2 via interdependence functions.

▶ [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — Stanford Online · 9 months ago

### Sparse matrix multiplication lecture *(prerequisite)*
Efficient sparse matrix multiplication underpins the practical implementation of interdependence functions in RPN 2, mitigating computational costs. The selected lecture offers a comprehensive, technical treatment of sparse matrix representations and computations, which is crucial for understanding RPN 2’s computational strategies.

*How the paper uses it:* Sparse matrix multiplication is key to implementing interdependence functions efficiently in RPN 2.

▶ [Lecture 16 - Sparse Matrix Computation (COO and CSR)](https://www.youtube.com/watch?v=SRgFScHYTy4) — Izzat El Hajj · 1:03:21 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the RPN 2 paper from a beginner to advanced perspective, start by building foundational knowledge of core neural network architectures like CNNs, Transformers, and GNNs, since RPN 2 unifies these through interdependence functions. Next, learn about sparse matrix multiplication, which is key to efficiently implementing these interdependence functions. Finally, focus on the central concept of interdependence function learning itself, which models relationships among data instances and attributes to unify and advance backbone architectures.

### Convolutional neural networks CNN lecture *(prerequisite)*
CNNs are a fundamental deep learning architecture primarily used for image data. They use convolutional layers to capture local spatial dependencies, making them highly effective for visual tasks. Understanding CNNs helps grasp how RPN 2 models local interdependence in image data.

*How the paper uses it:* RPN 2 unifies CNNs by revealing their interdependence function definitions, especially grid-based geometric functions for images.

▶ [MIT 6.S191 (2025): Convolutional Neural Networks](https://www.youtube.com/watch?v=oGpzWAlP5p0) — Alexander Amini · 1 year ago

### Transformer architectures lecture *(prerequisite)*
Transformers are powerful models that capture long-range dependencies in sequential data using attention mechanisms. They have revolutionized NLP and other domains. Understanding Transformers is essential to see how RPN 2 generalizes their interdependence functions.

*How the paper uses it:* RPN 2 unifies Transformers by interpreting their attention as a form of interdependence function among data instances and attributes.

▶ [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — Stanford Online · 9 months ago

### Graph neural networks GNN lecture *(prerequisite)*
GNNs are specialized neural networks designed to operate on graph-structured data, capturing relationships between nodes via message passing. They are crucial for tasks involving relational data. Understanding GNNs helps appreciate how RPN 2 models structural interdependence in graphs.

*How the paper uses it:* RPN 2 extends its interdependence framework to encompass GNNs by modeling structural relationships among graph nodes.

▶ [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — Alex Foo · 4 years ago

### Sparse matrix multiplication lecture *(prerequisite)*
Sparse matrix multiplication is a computational technique that efficiently handles matrices with many zero entries, reducing memory and compute costs. This is critical for implementing interdependence functions in RPN 2, which produce sparse interdependence matrices.

*How the paper uses it:* RPN 2 applies sparse matrix multiplication to efficiently compute interdependence functions and mitigate computational overhead.

▶ [Lecture 16 - Sparse Matrix Computation (COO and CSR)](https://www.youtube.com/watch?v=SRgFScHYTy4) — Izzat El Hajj · 1:03:21 · 3 years ago

## Already in your library

- [Lecture: Graph Neural Networks](https://www.youtube.com/watch?v=84_R03D89iE) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [Stanford CS231N | Spring 2025 | Lecture 5: Image Classification with CNNs](https://www.youtube.com/watch?v=f3g1zGdxptI) — also for: Vision-Language Model Based Handwriting Verification (Sargur N. Srihari)
- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformer Explainer- Learn About Transformer With Visualization](https://www.youtube.com/watch?v=csWluHwfsB8) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)
- [What are Transformers (Machine Learning Model)?](https://www.youtube.com/watch?v=ZXiruGOCn9s) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the RPN 2 model's core idea of explicit interdependence function learning that unifies CNN, RNN, GNN, and Transformer architectures. Starting with a simple implementation of a grid-based interdependence function on image data, you then reimplement the core RPN 2 method on a benchmark dataset comparing it to a baseline. Finally, you extend the model by designing a novel interdependence function or applying RPN 2 to a new modality, addressing one of the paper's stated limitations or future directions.

### Beginner — Grid-based Interdependence Function on MNIST Images
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements a simple grid-based interdependence function to explicitly model local pixel dependencies in MNIST images. You then apply sparse matrix multiplication to integrate this interdependence into a basic feedforward network for digit classification.

**Why it shows you understood the paper:** This project demonstrates your grasp of how RPN 2 models local interdependencies in image data using grid-based interdependence functions and sparse matrix operations, a key mechanism that differentiates RPN 2 from traditional CNNs.

**Grounded in:** Grid-based geometric interdependence functions effectively capture local dependencies in image data (e.g., MNIST, CIFAR-10).

**Tech stack:** Python 3.11, NumPy, SciPy, PyTorch

**Data:** MNIST handwritten digit dataset, a well-known public benchmark for image classification.

**Build it:**

1. Load the MNIST dataset using torchvision or another public source.
2. Implement a grid-based interdependence function that creates a sparse interdependence matrix representing local pixel neighborhood relationships.
3. Integrate this sparse matrix multiplication into a simple feedforward neural network architecture.
4. Train the model on MNIST and evaluate classification accuracy.
5. Visualize the learned interdependence matrix and report performance compared to a baseline feedforward network without interdependence.

**Ships as:** A Jupyter notebook with code, results, and visualizations showing how explicit interdependence modeling improves MNIST classification.

**Stretch goal:** Extend the interdependence function to CIFAR-10 images and compare performance gains.

### Intermediate — Reimplementing RPN 2 on Language Classification with Chain-structured Interdependence
*Effort: 2 weekends, ~20 hours*

You reimplement the core RPN 2 model focusing on chain-structured topological interdependence functions for language classification tasks. You train and evaluate your model on a public text classification dataset, comparing performance against a simple RNN baseline.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's core method of explicit interdependence modeling and unify RNN-like architectures within the RPN 2 framework, validating the model's advantage on sequential data.

**Grounded in:** Chain-structured topological interdependence functions excel in language classification and time-series forecasting tasks.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NLTK or SpaCy

**Data:** Use a public language classification dataset such as AG News or IMDb reviews as a substitute for the paper's language benchmarks.

**Build it:**

1. Preprocess the text dataset into token sequences suitable for modeling.
2. Implement the chain-structured interdependence function to generate sparse interdependence matrices reflecting sequential dependencies.
3. Build the RPN 2 model architecture incorporating the interdependence function and sparse matrix multiplication.
4. Train the model and a baseline RNN on the dataset, evaluating classification accuracy and loss.
5. Compare and report the performance metrics, highlighting improvements from interdependence modeling.

**Verified links from the paper:**

- <https://github.com/jwzhanggy/tinyBIG> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code, training scripts, evaluation results, and a README explaining the RPN 2 reimplementation and comparison.

**Stretch goal:** Incorporate the updated TINY BIG V 0.2.0 toolkit's interdependence functions if feasible to accelerate development.

### Advanced — Designing Novel Interdependence Functions for Multimodal Fusion in RPN 2
*Effort: 3-4 weeks*

You extend RPN 2 by designing and implementing a new interdependence function that fuses structural and statistical relationships across multimodal data (e.g., combining image and text features). You apply this to a small multimodal public dataset or a synthesized dataset and evaluate the impact on classification or regression tasks.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation noted in the paper by exploring advanced interdependence functions and multimodal fusion, demonstrating creativity and deep comprehension of RPN 2's unifying framework.

**Grounded in:** Future work is needed to explore more advanced interdependence functions and broader applications; further expansion and refinement of interdependence, data compression, and fusion functions.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn

**Data:** Use a small public multimodal dataset (e.g., image captions from Flickr8k or synthesized paired image-text data) or simulate multimodal data by combining MNIST images with synthetic text labels.

**Build it:**

1. Select or synthesize a multimodal dataset combining image and text modalities.
2. Design a novel interdependence function that models cross-modal relationships, producing a sparse interdependence matrix capturing both structural and statistical dependencies.
3. Integrate this interdependence function into the RPN 2 architecture.
4. Train the extended RPN 2 model on the multimodal dataset and evaluate performance on relevant tasks.
5. Analyze results to assess how the new interdependence function improves fusion and learning compared to unimodal baselines.
6. Document the design choices, implementation details, and experimental findings.

**Ships as:** A comprehensive GitHub repository with code, dataset preparation scripts, experimental results, and a detailed README discussing the novel interdependence function and its impact.

**Stretch goal:** Explore applying the new interdependence function to real-world multimodal datasets or integrate with the TINY BIG toolkit for broader applicability.

_The authors released no code for RPN 2 itself; the intermediate project depends on reimplementing the method from the paper description and optionally using the third-party TINY BIG toolkit repository for interdependence functions._
