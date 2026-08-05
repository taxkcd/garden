---
title: "235 · Symbolic Rule Extraction From Attention-Guided Sparse Representations in Vision Transformers — Gopal Gupta"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gopal-gupta"
source_hash: "60bd1aa323af0a08872ccecc76262efe05cbf0a9bd485c934cd0b0cd8d602194"
sequence: 235
generator: "outreach-garden: managed"
---

# 235 · Symbolic Rule Extraction From Attention-Guided Sparse Representations in Vision Transformers

## At a glance

- **Professor:** Gopal Gupta
- **Institution:** University of Texas at Dallas
- **Paper:** [Symbolic Rule Extraction From Attention-Guided Sparse Representations in Vision Transformers](https://doi.org/10.1017/s1471068425100318)
- **Authors:** Parth Padalkar, Gopal Gupta
- **Year:** 2025

## Paper overview

This paper presents a novel neuro-symbolic AI framework called NeSyViT that extracts interpretable symbolic rules from Vision Transformers (ViTs) by introducing a sparse concept layer. This layer produces binarized, sparse representations of images that correspond to high-level visual concepts. These representations are then used by the FOLD-SE-M algorithm to generate concise logic programs for image classification. The approach improves classification accuracy compared to standard ViTs while providing interpretable, verifiable symbolic explanations.

### Why it matters

**Research problem:** Extracting interpretable, symbolic rule-sets from Vision Transformers is challenging due to their distributed, entangled representations and lack of modular concept detectors, unlike CNNs where filters correspond to visual concepts.

**Why it matters:** Interpretable AI is critical in high-stakes domains like autonomous driving and medical diagnosis, where understanding and verifying model decisions can prevent severe consequences. Vision Transformers dominate vision tasks but lack interpretability, limiting their trustworthy deployment.

**Key contributions:**

- Introduced a training method combining supervised contrastive, entropy, and sparsity losses to learn compact, binarized concept-level representations in ViTs.
- Proposed NeSyViT, an end-to-end neuro-symbolic framework that extracts symbolic rule-sets from ViTs using FOLD-SE-M.
- Demonstrated that NeSyViT outperforms vanilla ViT in classification accuracy while producing concise, interpretable rule-sets.
- Adapted semantic labeling algorithms for predicates in ViT-based rule-sets, enabling concept grounding.
- Provided the first executable logic programs extracted from ViTs using sparse symbolic representations.

## About the professor

**Gopal Gupta** — Professor, Department of Computer Science, University of Texas at Dallas.

Research interests: Artificial Intelligence: Knowledge Representation, Common Sense Reasoning, Explainable Machine Learning; Programming Languages: Implementation, Semantics, Applications, Constraint and Logic Programming, Static Analysis; Software Engineering: Software Verification, Real-time Systems, Domain Specific Languages, Interoperability; Parallel and Distributed Processing: High Performance AI and Constraint Logic Programming Systems, Automatic Parallelization, Parallel Architectures, Applications; Human Computer Interaction: Tools for Visually Impaired; Intelligent Interfaces

### Research links

- [Faculty/profile page](http://www.utdallas.edu/~gupta)
- [Resolved homepage](https://personal.utdallas.edu/~gupta/)
- [Lab website](http://www.utdallas.edu/%7Egupta/labpage/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Symbolic Rule Extraction From Attention-Guided Sparse Representations in Vision Transformers,' start by building a solid foundation on Vision Transformer architectures and sparse, binarized neural representations, as these underpin the model modifications introduced. Next, study the neuro-symbolic AI frameworks and logic rule learning with FOLD-SE-M to grasp how symbolic rules are extracted and represented. Finally, focus on the paper's core concept by watching the authors' own talk presenting NeSyViT, which directly explains their novel neuro-symbolic framework and its contributions.

### Vision Transformers architecture *(prerequisite)*
Understanding the Vision Transformer (ViT) architecture is essential as it forms the backbone of the model modified in this paper. This includes how ViTs process images using self-attention mechanisms and patch embeddings, which differ fundamentally from CNNs.

*How the paper uses it:* The paper modifies a base ViT by introducing a sparse concept layer to extract interpretable symbolic rules.

▶ [ViT | Vision Transformer | Vision Transformer (ViT ...](https://www.youtube.com/watch?v=G2nUsjMrcuw) — AILinkDeepTech · 18:24

### Sparse and binarized neural representations *(prerequisite)*
Sparse and binarized neural representations are key to how the concept layer produces interpretable visual concept vectors. Learning about sparse coding and entropy minimization techniques helps understand the training losses used to enforce sparsity and binarization.

*How the paper uses it:* The paper uses a combined loss including entropy minimization and L1 sparsity to learn sparse, binarized concept-level representations in ViTs.

▶ [Learning Sparse & Ternary Neural Networks With Entropy ...](https://www.youtube.com/watch?v=mtNQl5vuvIY) — ComputerVisionFoundation Videos · 9:22

### Neuro-symbolic AI frameworks *(prerequisite)*
Neuro-symbolic AI frameworks combine neural networks with symbolic reasoning, which is central to this paper's approach of extracting symbolic rules from neural representations. Understanding these frameworks provides context for the integration of learning and logic programming.

*How the paper uses it:* NeSyViT is a neuro-symbolic framework that extracts symbolic rule-sets from ViTs using logic programming.

▶ [Foundations of Neurosymbolic AI](https://www.youtube.com/watch?v=9Jc3g6sPpUU) — Neuro Symbolic · 51:07

### Logic rule learning with FOLD-SE-M *(prerequisite)*
FOLD-SE-M is the rule learning algorithm used to generate symbolic rules from sparse concept vectors. Understanding how this algorithm induces logic programs is crucial to grasping the symbolic extraction process.

*How the paper uses it:* The paper uses FOLD-SE-M to generate concise, stratified Answer Set Programs representing symbolic rules from sparse ViT representations.

▶ [[FLOPS 2022] FOLD-R++: A Scalable Toolset for Automated Inductive Learning of Default Theories ...](https://www.youtube.com/watch?v=aDJZCJ3XcOw) — 日本ソフトウェア科学会 プログラミング論研究会 · 4 years ago

### Answer Set Programming for explainability *(prerequisite)*
Answer Set Programming (ASP) is the formalism used to represent and execute the extracted symbolic rules for reasoning and explanation. Familiarity with ASP helps understand how the logic programs are structured and interpreted.

*How the paper uses it:* The extracted rule-sets are executable logic programs in the form of stratified Answer Set Programs, enabling symbolic reasoning and justifications.

▶ [Answer Set Programming in a Nutshell](https://www.youtube.com/watch?v=m_YuE2E_bck) — Simons Institute for the Theory of Computing · Streamed 5 years ago

### NeSyViT paper talk *(the paper's own talk)*
The authors' own presentation of NeSyViT provides direct insights into their novel neuro-symbolic framework, training methodology, and experimental results. This talk is the most authoritative and focused resource on the paper's contributions.

*How the paper uses it:* This video is a direct talk by Parth Padalkar presenting the NeSyViT framework and its symbolic rule extraction approach from ViTs.

▶ [Neurosymbolic AI for Interpretable Image Classification | Parth Padalkar | Neuro-Symbolic Wednesdays](https://www.youtube.com/watch?v=TbZP1HBYjqQ) — Centaur AI Institute | Neuro-Symbolic AI Community · Streamed 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the Vision Transformer (ViT) architecture, which is the foundational model used in the paper. Then, learn about sparse and binarized neural representations to grasp how the paper achieves interpretable concept vectors. Next, explore logic rule learning with FOLD-SE-M and Answer Set Programming to understand how symbolic rules are extracted and represented. Finally, watch the authors' own talk on NeSyViT to see the full neuro-symbolic framework in action.

### Vision Transformers architecture *(prerequisite)*
Vision Transformers (ViTs) apply the Transformer architecture, originally designed for language, to images by dividing them into patches and processing these patches with self-attention. Understanding ViTs is essential because the paper modifies this model to extract interpretable symbolic rules.

*How the paper uses it:* The paper builds on ViTs by adding a sparse concept layer to their architecture.

▶ [ViT | Vision Transformer | Vision Transformer (ViT ...](https://www.youtube.com/watch?v=G2nUsjMrcuw) — AILinkDeepTech · 18:24

### Sparse and binarized neural representations *(prerequisite)*
Sparse and binarized representations activate only a few neurons, making the model's internal concepts easier to interpret. This concept is key to how the paper's sparse concept layer produces compact, interpretable visual concept vectors.

*How the paper uses it:* The paper uses a combined loss to train a sparse, binarized concept layer in ViTs for interpretable representations.

▶ [Learning Sparse & Ternary Neural Networks With Entropy ...](https://www.youtube.com/watch?v=mtNQl5vuvIY) — ComputerVisionFoundation Videos · 9:22

### Answer Set Programming for explainability *(prerequisite)*
Answer Set Programming (ASP) is a form of logic programming used to represent and solve complex problems declaratively. It is crucial for understanding how the paper represents and executes the extracted symbolic rules for reasoning and explanation.

*How the paper uses it:* The paper produces stratified Answer Set Programs as the symbolic rules extracted from ViTs.

▶ [Answer Set Programming in a Nutshell](https://www.youtube.com/watch?v=m_YuE2E_bck) — Simons Institute for the Theory of Computing · Streamed 5 years ago

### NeSyViT paper talk *(the paper's own talk)*
This talk by the paper's author presents the NeSyViT framework, explaining how sparse concept layers and symbolic rule extraction work together to improve accuracy and interpretability in Vision Transformers.

*How the paper uses it:* It directly explains the novel neuro-symbolic AI framework introduced in the paper.

▶ [Neurosymbolic AI for Interpretable Image Classification | Parth Padalkar | Neuro-Symbolic Wednesdays](https://www.youtube.com/watch?v=TbZP1HBYjqQ) — Centaur AI Institute | Neuro-Symbolic AI Community · Streamed 6 months ago

## Already in your library

- [Vision Transformer Quick Guide - Theory and Code in (almost) 15 min](https://www.youtube.com/watch?v=j3VNqtJUoz0) — also for: Generating Higher-Quality Anti-Forensics DeepFakes with Adversarial Sharpening Mask (Pradeep K. Atrey)
- [MIT 6.S191 (2020): Neurosymbolic AI](https://www.youtube.com/watch?v=4PuuziOgSU4) — also for: Introduction to open-world AI (Larry B. Holder)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the NeSyViT paper. The beginner project focuses on reproducing the sparse concept layer training mechanism on a simple dataset using familiar tools. The intermediate project implements the core neuro-symbolic pipeline by extracting symbolic rules from a Vision Transformer with sparse binarized representations and compares classification accuracy to a baseline. The advanced project extends the framework by addressing a key limitation: improving semantic labeling reliability through architectural or training modifications to enhance neuron disentanglement.

### Beginner — Sparse Concept Layer Training on CIFAR-10 Subset
*Effort: a weekend, ~8 hours*

You build a simplified training pipeline that replaces the final classification head of a pretrained Vision Transformer with a sparse concept layer. You implement the combined loss of supervised contrastive loss, entropy minimization, and L1 sparsity loss to learn binarized sparse representations on a small subset of CIFAR-10. You visualize the sparsity and binarization effects on neuron activations.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of NeSyViT's sparse concept layer training and the role of the combined loss functions in producing interpretable sparse representations.

**Grounded in:** Introduced a training method combining supervised contrastive, entropy, and sparsity losses to learn compact, binarized concept-level representations in ViTs.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Matplotlib

**Data:** A small subset of the CIFAR-10 dataset, publicly available and commonly used as a substitute for image classification tasks.

**Build it:**

1. Load a pretrained base Vision Transformer model using PyTorch.
2. Replace the final classification head with a new sparse concept layer initialized randomly.
3. Implement the combined loss: supervised contrastive loss, entropy minimization loss, and L1 sparsity loss.
4. Train the model on a small subset of CIFAR-10 images with labels for a few epochs.
5. Visualize the learned concept layer activations before and after binarization to confirm sparsity and binarization.
6. Document the training setup, loss curves, and activation visualizations in a Jupyter notebook.

**Ships as:** A Jupyter notebook demonstrating sparse concept layer training with visualizations of sparse, binarized activations and loss curves.

**Stretch goal:** Add a simple semantic labeling step by analyzing which image regions activate specific neurons using attention heatmaps.

### Intermediate — NeSyViT Neuro-Symbolic Pipeline on CIFAR-10
*Effort: 2 weekends, ~20 hours*

You implement the full NeSyViT pipeline by training a Vision Transformer with a sparse concept layer on CIFAR-10, binarizing the concept representations, and then applying a rule learning algorithm inspired by FOLD-SE-M to extract symbolic rules for image classification. You compare classification accuracy against a vanilla ViT baseline and report rule-set size and accuracy improvements.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the core neuro-symbolic framework of NeSyViT, including sparse representation learning and symbolic rule extraction, and to evaluate its benefits quantitatively.

**Grounded in:** Proposed NeSyViT, an end-to-end neuro-symbolic framework that extracts symbolic rule-sets from ViTs using FOLD-SE-M; NeSyViT achieves an average 5.14% accuracy improvement over vanilla ViT.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook, NumPy

**Data:** CIFAR-10 dataset as a substitute for the paper's multi-dataset experiments.

**Build it:**

1. Train a Vision Transformer with a sparse concept layer on CIFAR-10 using the combined loss functions.
2. Binarize the learned concept layer activations to obtain sparse binary vectors representing high-level concepts.
3. Implement or adapt a simplified version of the FOLD-SE-M rule learning algorithm to learn symbolic rules from the binarized vectors and labels.
4. Evaluate classification accuracy of the neuro-symbolic model and compare it to a vanilla ViT baseline trained on the same data.
5. Analyze and report the size of the extracted rule-sets and their interpretability.
6. Write a detailed README documenting the pipeline, results, and insights.

**Ships as:** A GitHub repository with code to train NeSyViT on CIFAR-10, extract symbolic rules, and compare accuracy and rule-set size to a baseline.

**Stretch goal:** Incorporate simple semantic labeling of predicates by visualizing neuron attention maps and associating them with image regions.

### Advanced — Improving Semantic Labeling Reliability via Neuron Disentanglement in NeSyViT
*Effort: 3+ weeks*

You extend the NeSyViT framework by experimenting with architectural modifications or alternative training objectives aimed at improving neuron disentanglement and monosemanticity in the sparse concept layer. You evaluate how these changes affect semantic labeling reliability and rule-set interpretability on CIFAR-10 or a similar dataset. You document the impact on classification accuracy and symbolic explanation quality.

**Why it shows you understood the paper:** This project tackles a key limitation identified in the paper and shows your ability to innovate beyond reproduction by improving semantic labeling, a critical step for trustworthy neuro-symbolic AI.

**Grounded in:** Semantic labeling adapted from CNN frameworks is less reliable for ViTs due to neurons attending to multiple concepts simultaneously; future direction includes improving neuron disentanglement and monosemanticity through architectural or training refinements.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** CIFAR-10 dataset or a similar public image classification dataset.

**Build it:**

1. Review the original sparse concept layer training and semantic labeling pipeline from the intermediate project.
2. Design and implement architectural changes (e.g., additional regularization, orthogonality constraints, or attention masking) or alternative loss terms to encourage neuron disentanglement.
3. Retrain the modified NeSyViT model on CIFAR-10 and binarize concept representations.
4. Develop or adapt semantic labeling methods to quantitatively assess neuron monosemanticity and labeling reliability.
5. Compare classification accuracy, rule-set size, and semantic labeling quality against the baseline NeSyViT model.
6. Document findings, challenges, and potential future improvements.

**Ships as:** A research-style report and codebase demonstrating improved semantic labeling reliability through neuron disentanglement techniques in NeSyViT.

**Stretch goal:** Explore automatic semantic annotation using multimodal large language models to reduce reliance on segmentation masks.
