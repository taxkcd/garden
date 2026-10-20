---
title: "848 · SurrogateSHAP: Training-Free Contributor Attribution for Text-to-Image (T2I) Models — Su-In Lee"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-su-in-lee"
source_hash: "fa4d4a74dede0dcfdc48f397993db68acd84582f9c88ade8e7aa703ba00e55c8"
sequence: 848
generator: "outreach-garden: managed"
---

# 848 · SurrogateSHAP: Training-Free Contributor Attribution for Text-to-Image (T2I) Models

## At a glance

- **Professor:** Su-In Lee
- **Institution:** University of Washington
- **Paper:** [SurrogateSHAP: Training-Free Contributor Attribution for Text-to-Image (T2I) Models](https://arxiv.org/pdf/2601.22276)
- **Authors:** Mingyu Lu, Soham Gadgil, Chris Lin, Chanwoo Kim, Su-In Lee
- **Year:** 2026

## Paper overview

This paper introduces SurrogateSHAP, a novel framework for efficiently attributing the contributions of data providers to the performance of text-to-image diffusion models without requiring costly retraining. It uses a training-free proxy game and a gradient-boosted tree surrogate to approximate Shapley values, enabling scalable and accurate valuation of contributors across diverse tasks such as image quality, aesthetics, and diversity. The method also helps identify biased data sources in clinical datasets, supporting safer AI deployment.

### Why it matters

**Research problem:** Quantifying the marginal value of data contributors in large-scale text-to-image diffusion models is computationally prohibitive due to the need for retraining models on many subsets of data and the combinatorial complexity of Shapley value estimation.

**Why it matters:** Fair compensation and sustainable data marketplaces require principled contributor attribution. Additionally, auditing and mitigating biases in generative models trained on multi-source data, especially in sensitive domains like healthcare, is critical for equitable and safe AI deployment.

**Key contributions:**

- Formulation of a training-free proxy game for efficient subset evaluation in T2I diffusion models.
- Use of gradient-boosted tree surrogates to approximate complex utility functions and enable analytic Shapley value computation.
- Empirical validation across multiple datasets and utility metrics demonstrating superior accuracy and computational efficiency compared to prior methods.
- Demonstration of clinical utility by auditing a dermatology dataset to identify and mitigate spurious correlations induced by specific data sources.
- Provision of open-source code to facilitate reproducibility and adoption.

## About the professor

**Su-In Lee** — Professor, Paul G. Allen School of Computer Science & Engineering, University of Washington.

Research interests: AI for bioMedical Sciences, explainable AI (XAI), computational biology, machine learning innovations in biomedicine

### Research links

- [Faculty/profile page](http://suinlee.cs.washington.edu)
- [Professor website](https://suinlee.cs.washington.edu/su-in-lee)
- [Google Scholar](https://scholar.google.com/citations?user=3ifikJ0AAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/su-in-lee-b9855073/)
- [Social profile](https://twitter.com/suinleelab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Shapley values and explainable AI
**The paper assumes:** Shapley values, cooperative game theory, explainable AI methods, and TreeSHAP algorithm
**Already in this field?** Skip this entirely if you already understand Shapley values and their use in explainable AI, including surrogate model approximations and TreeSHAP.

Understanding Shapley values and their application in explainable AI (XAI) is crucial for grasping the methodology behind SurrogateSHAP, which uses Shapley value estimation to attribute data contributor importance without retraining. The rigorous course option offers a foundational machine learning background including Shapley values, while the fast track provides a focused, conceptual and mathematical walkthrough of Shapley values specifically, enabling efficient comprehension for readers with limited time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Machine Learning Specialization by Andrew Ng](https://www.youtube.com/playlist?list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI) — DeepLearningAI · 41 videos · 5.2h across 41 episodes

**Watch only this:** Episodes #21 to #24 (Machine Learning Specialization [Course 1, Week 2, Lesson 1]), about 30 minutes — these cover Shapley values and related cooperative game theory concepts relevant to contributor attribution.

*Why it unblocks this paper:* The Machine Learning Specialization by Andrew Ng is a well-structured, authoritative university-level course that covers foundational machine learning concepts including Shapley values in context, providing the rigorous background needed to understand the theoretical underpinnings of SurrogateSHAP.

*If you want all of it:* 5.2 hours across 41 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Shapley Values for Machine Learning Forecast](https://www.youtube.com/playlist?list=PLB0UFyCPfZ-Pg_qYfZKMsPpXpDr-_qUH2) — OneStatAtATime · 13 videos · 1.1h across 13 episodes

**Watch only this:** Episodes 1 through 7, about 28 minutes — covering the origin, calculation, and application of Shapley values in machine learning, providing a focused introduction to the key concepts.

*Why it unblocks this paper:* This short-form series 'Shapley Values for Machine Learning Forecast' offers a concise, clear, and well-produced conceptual and mathematical walkthrough of Shapley values, perfectly suited for quickly understanding the core ideas behind SurrogateSHAP's attribution method.

*If you want all of it:* 1.1 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand SurrogateSHAP, start with foundational concepts including Shapley values for fair attribution, gradient-boosted trees as the surrogate model, and TreeSHAP for analytic Shapley computation. Then, build knowledge on text-to-image diffusion models to grasp the generative model context. Finally, focus on the core novel idea of SurrogateSHAP itself, prioritizing the authors' own talk if available, to learn how training-free proxy games and gradient-boosted surrogates enable efficient contributor attribution without retraining.

### Shapley values attribution lecture *(prerequisite)*
Shapley values provide the mathematical foundation for fair and principled attribution of contributions in cooperative settings. Understanding their game-theoretic basis and how they are applied in machine learning is essential to grasp how SurrogateSHAP quantifies data contributor value.

*How the paper uses it:* SurrogateSHAP approximates Shapley values to attribute data contributors' marginal value efficiently.

▶ [Shapley Values and Cooperative Game Theory | Machine Learning Interpretability](https://www.youtube.com/watch?v=G2Qojy5IRtk) — Soledad Galli | Data Scientist @ Train in Data · 1y ago

### gradient boosted trees lecture *(prerequisite)*
Gradient-boosted trees are a powerful ensemble learning method used to approximate complex functions efficiently. SurrogateSHAP leverages gradient-boosted tree surrogates to model the utility function, enabling analytic Shapley value computation.

*How the paper uses it:* SurrogateSHAP uses gradient-boosted tree surrogates to approximate the proxy game utility function.

▶ [Gradient Boosted Trees: The Core Explained](https://www.youtube.com/watch?v=5Ae-t-5iNT4) — BlackBoard AI · 1y ago

### TreeSHAP explanation lecture *(prerequisite)*
TreeSHAP is an efficient algorithm for computing exact Shapley values on tree-based models. Understanding TreeSHAP is critical to appreciate how SurrogateSHAP analytically derives Shapley values from the gradient-boosted tree surrogate.

*How the paper uses it:* SurrogateSHAP computes Shapley values analytically via TreeSHAP on the surrogate model.

▶ [Explainable AI with TreeSHAP: Application to metabolomics](https://www.youtube.com/watch?v=M7BAwcoviWQ) — Olatomiwa Bifarin · 3y ago

### text to image diffusion models lecture *(prerequisite)*
Text-to-image diffusion models are the generative model class SurrogateSHAP evaluates. Familiarity with their architecture and conditional generation capabilities is necessary to understand the proxy game formulation and evaluation metrics used.

*How the paper uses it:* SurrogateSHAP approximates retraining games by leveraging pretrained text-to-image diffusion models' conditional generation.

▶ [22:20](https://www.youtube.com/watch?v=DoDav4r-x6E) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand SurrogateSHAP, starting with the core idea of Shapley values for fair attribution, then explaining gradient-boosted trees and TreeSHAP for efficient Shapley value computation. Next, it covers text-to-image diffusion models to grasp the generative models SurrogateSHAP evaluates, and finally focuses on the novel training-free proxy game idea that enables SurrogateSHAP's efficiency.

### Shapley values attribution lecture *(prerequisite)*
Shapley values come from cooperative game theory and provide a principled way to fairly attribute the contribution of each player (or data source) to a collective outcome. Understanding this concept is essential for grasping how SurrogateSHAP quantifies data contributor value.

*How the paper uses it:* SurrogateSHAP approximates Shapley values to fairly attribute data contributors without retraining.

▶ [Shapley Values for Machine Learning](https://www.youtube.com/watch?v=b9qqbFudVhI) — A Data Odyssey · 3y ago

### gradient boosted trees lecture *(prerequisite)*
Gradient-boosted trees are an ensemble learning method that builds a strong predictive model by sequentially correcting errors of previous trees. They are used in SurrogateSHAP to approximate complex utility functions efficiently.

*How the paper uses it:* SurrogateSHAP uses gradient-boosted tree surrogates to model the proxy utility function for Shapley value estimation.

▶ [Gradient Boosted Trees: The Core Explained](https://www.youtube.com/watch?v=5Ae-t-5iNT4) — BlackBoard AI · 1y ago

### TreeSHAP explanation lecture *(prerequisite)*
TreeSHAP is a fast, exact method to compute Shapley values for tree-based models, enabling analytic and efficient attribution. This method is crucial for SurrogateSHAP’s scalable Shapley value computation.

*How the paper uses it:* SurrogateSHAP computes Shapley values analytically via TreeSHAP on the gradient-boosted tree surrogate.

▶ [Explainable AI with TreeSHAP: Application to metabolomics](https://www.youtube.com/watch?v=M7BAwcoviWQ) — Olatomiwa Bifarin · 3y ago

### text to image diffusion models lecture *(prerequisite)*
Text-to-image diffusion models generate images conditioned on text prompts by iteratively denoising random noise. Understanding these models helps appreciate the context where SurrogateSHAP attributes data contributions.

*How the paper uses it:* SurrogateSHAP evaluates contributor impact on pretrained text-to-image diffusion models without retraining.

▶ [6:02](https://www.youtube.com/watch?v=SIgH5hz6NqY) — YouTube result via DuckDuckGo

## Already in your library

- [SHAP values for beginners | What they mean and their ...](https://www.youtube.com/watch?v=MQ6fFDwjuco) — also for: Predicting suicidal thoughts and behavior among adolescents using the risk and protective factor framework: A large-scale machine learning approach (Quinn O. Snell)
- [Visual Guide to Gradient Boosted Trees (xgboost)](https://www.youtube.com/watch?v=TyvYZ26alZs) — also for: A Fraud-Detection-Inspired Framework for LLM Agents Security (Yingcheng Sun)
- [Explainable AI explained! | #4 SHAP](https://www.youtube.com/watch?v=9haIOplEIGM) — also for: Agentic RAG-Driven Multi-Omics Analysis for PI3K/AKT Pathway Deregulation in Precision Medicine (Dong Xu)
- [Text to Image Diffusion AI Model from scratch - Explained one line of code at a time!](https://www.youtube.com/watch?v=w8YQcEd77_o) — also for: Geometry in Style: 3D Stylization via Surface Normal Deformation (Rana Hanocka)
- [But how do AI images and videos actually work? | Guest video by Welch Labs](https://www.youtube.com/watch?v=iv-5mZ_9CPY) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [Text-to-image generation explained](https://www.youtube.com/watch?v=9YrYDqhJdPw) — also for: Continual Unlearning for Text-to-Image Diffusion Models: A Regularization Perspective (Cheng Zhang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply SurrogateSHAP's training-free contributor attribution method for text-to-image diffusion models. Starting with a simple reproduction of the proxy utility metric on a small dataset, you then implement and evaluate the core SurrogateSHAP method using the authors' released code and public datasets. Finally, you extend the method to address a stated limitation by adapting SurrogateSHAP to overlapping prompt spaces, demonstrating deeper comprehension and research potential.

### Beginner — Proxy Utility Evaluation on CIFAR-20
*Effort: a weekend, ~8 hours*

You build a small-scale script to compute and visualize the proxy utility metric used in SurrogateSHAP on the CIFAR-20 dataset, replicating the normalized RMSE fidelity measure between proxy and training utilities. This involves loading CIFAR-20, generating conditional samples from a pretrained diffusion model, and calculating the proxy utility without retraining.

**Why it shows you understood the paper:** This project demonstrates your grasp of the training-free proxy game concept and how SurrogateSHAP approximates expensive retraining utilities, a core innovation of the paper.

**Grounded in:** Proxy utility closely tracks training utility with low normalized RMSE (e.g., 0.071 on CIFAR-20).

**Tech stack:** Python 3.11, PyTorch, HuggingFace Diffusers, NumPy, Matplotlib

**Data:** CIFAR-20, a 20-class subset of CIFAR-100, publicly available and used in the paper as a benchmark dataset.

**Build it:**

1. Download and preprocess the CIFAR-20 dataset.
2. Load a pretrained text-to-image diffusion model compatible with CIFAR-20 classes (e.g., miniSD from HuggingFace).
3. Implement the training-free proxy utility calculation by generating class-conditional samples and computing the metric (e.g., FID or pixel-level similarity).
4. Calculate normalized RMSE between proxy utility and a provided baseline training utility (can use proxy values from the paper or simulate).
5. Visualize the proxy vs training utility comparison and report the fidelity metric.

**Verified links from the paper:**

- <https://huggingface.co/lambdalabs/miniSD-diffusers> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/mseitzer/pytorch-fid> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with scripts and a README showing proxy utility computation on CIFAR-20, including plots comparing proxy and training utilities and fidelity metrics.

**Stretch goal:** Add support for multiple utility metrics such as FID, Inception Score, or aesthetic scores to compare proxy fidelity across metrics.

### Intermediate — Reproduce SurrogateSHAP Attribution on CIFAR-20
*Effort: 2 weekends, ~20 hours*

You set up and run the authors' SurrogateSHAP codebase on the CIFAR-20 dataset to compute contributor Shapley values for data providers. You then compare SurrogateSHAP's attribution accuracy and runtime against a simple baseline such as KernelSHAP, reporting metrics like Linear Datamodel Score (LDS) and runtime speedup.

**Why it shows you understood the paper:** This project shows you can operate the full SurrogateSHAP pipeline, understand its surrogate model and TreeSHAP integration, and critically evaluate its performance against baselines, demonstrating comprehension of the paper's core method and empirical validation.

**Grounded in:** SurrogateSHAP achieves 12.8× to 23.4× speedup over explicit retraining methods and outperforms baselines in Linear Datamodel Score (LDS) on CIFAR-20.

**Tech stack:** Python 3.11, PyTorch, XGBoost, Jupyter Notebook, HuggingFace Diffusers

**Data:** CIFAR-20 dataset as used in the paper; authors' SurrogateSHAP codebase from https://github.com/suinleelab/SurrogateSHAP.

**Build it:**

1. Clone and set up the SurrogateSHAP repository and install dependencies.
2. Download and prepare the CIFAR-20 dataset for use with SurrogateSHAP.
3. Run SurrogateSHAP to compute Shapley values for the CIFAR-20 contributors (classes).
4. Implement or use an existing KernelSHAP baseline for comparison on the same dataset and metric.
5. Evaluate and compare attribution accuracy using LDS and runtime performance.
6. Document results and insights in a Jupyter notebook or markdown report.

**Verified links from the paper:**

- <https://github.com/suinleelab/SurrogateSHAP> — released by the paper's authors
- <https://huggingface.co/lambdalabs/miniSD-diffusers> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/LAION-AI/aesthetic-predictor> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code and notebooks reproducing SurrogateSHAP attribution on CIFAR-20, including baseline comparisons and metric evaluations.

**Stretch goal:** Extend the evaluation to additional utility metrics such as aesthetic scores using the LAION aesthetic predictor.

### Advanced — Extend SurrogateSHAP for Overlapping Prompt Spaces
*Effort: 3+ weeks*

You develop an extension of SurrogateSHAP to handle overlapping prompt spaces where contributors do not map one-to-one to prompt labels, addressing a key limitation noted in the paper. This involves modifying the surrogate model and proxy game formulation to accommodate overlapping data contributions and evaluating the method on a synthetic or real dataset with overlapping labels.

**Why it shows you understood the paper:** This project demonstrates deep understanding of SurrogateSHAP's assumptions and architecture, and the ability to innovate beyond the paper by tackling a stated limitation, potentially contributing novel research insights.

**Grounded in:** SurrogateSHAP assumes a one-to-one mapping between contributors and prompt labels, limiting applicability in overlapping prompt spaces.

**Tech stack:** Python 3.11, PyTorch, XGBoost, Jupyter Notebook, HuggingFace Diffusers, scikit-learn

**Data:** Use CIFAR-20 or a similar public dataset with synthetic overlapping prompt labels created by mixing class labels or prompts to simulate overlapping contributor-label relationships.

**Build it:**

1. Review SurrogateSHAP's proxy game and surrogate model code to understand contributor-label mapping.
2. Design a data representation and proxy game extension that allows contributors to overlap in prompt space.
3. Modify the surrogate model training to incorporate overlapping contributor effects, possibly via multi-label or mixture models.
4. Generate or adapt a dataset with overlapping prompt labels for evaluation.
5. Run experiments comparing original SurrogateSHAP and your extension on attribution accuracy and proxy fidelity.
6. Document methodology, results, and limitations in a detailed report or notebook.

**Verified links from the paper:**

- <https://github.com/suinleelab/SurrogateSHAP> — released by the paper's authors
- <https://huggingface.co/lambdalabs/miniSD-diffusers> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code implementing the overlapping prompt extension, experiments, and a comprehensive README explaining the approach and findings.

**Stretch goal:** Explore integrating multi-objective governance pipelines combining your extension with qualitative safety audits to mitigate representation bias.
