---
title: "740 · Disentangling Fine-Tuning from Pre-Training in Visual Captioning with Hybrid Markov Logic — Deepak Venugopal"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-deepak-venugopal"
source_hash: "de503769c49b37aa59d4fc29300f693d90df352c7b44f213af13fb34f65da169"
sequence: 740
generator: "outreach-garden: managed"
---

# 740 · Disentangling Fine-Tuning from Pre-Training in Visual Captioning with Hybrid Markov Logic

## At a glance

- **Professor:** Deepak Venugopal
- **Institution:** University of Memphis
- **Paper:** [Disentangling Fine-Tuning from Pre-Training in Visual Captioning with Hybrid Markov Logic](https://arxiv.org/pdf/2503.13847)
- **Authors:** Monika Shah, Somdeb Sarkhel, Deepak Venugopal
- **Year:** 2025

## Paper overview

This paper addresses the challenge of understanding what knowledge a visual captioning model learns during fine-tuning versus what it already knows from pre-training. The authors propose a probabilistic model using Hybrid Markov Logic Networks (HMLNs) that combines symbolic knowledge from captions with visual features from images. They develop inference methods to quantify how much the fine-tuning data influences the generated captions and evaluate their approach on several state-of-the-art captioning models, including BLIP2 which uses a large language model (LLM). The results show that models with LLMs like BLIP2 rely more on pre-trained knowledge, making it harder to explain their captions based on fine-tuning data alone.

### Why it matters

**Research problem:** How to disentangle and quantify the influence of fine-tuning data versus pre-trained knowledge in multimodal visual captioning models, particularly those using large language models (LLMs).

**Why it matters:** Understanding the source of knowledge in captioning models is crucial for explainability, trust, and improving model design. It helps clarify whether fine-tuning effectively adapts models to specific tasks or if models rely mainly on general pre-trained knowledge, which impacts interpretability and reliability.

**Key contributions:**

- Development of a probabilistic framework using HMLNs to combine symbolic caption concepts with visual features for explaining caption generation.
- Formulation of abductive (MAP) and marginal inference tasks to quantify the influence of fine-tuning data on generated captions.
- Application of semantic equivalence constraints and MILP solvers for efficient approximate MAP inference.
- Introduction of an importance-weighted marginal inference method to back-trace captions to training examples.
- Empirical evaluation on multiple state-of-the-art captioning models including BLIP2 (a VLLM), showing differences in explainability between LLM-based and non-LLM models.

## About the professor

**Deepak Venugopal** — Associate Professor and Graduate Coordinator, Computer Science, University of Memphis.

Research interests: Machine learning, artificial intelligence

### Research links

- [Faculty/profile page](https://www.memphis.edu/cs/people/faculty_pages/deepak-venugopal.php)
- [Professor website](https://sites.google.com/site/dvngopal/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=2NcCT3UAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Probabilistic Graphical Models
**The paper assumes:** probabilistic graphical models, Markov networks, MAP and marginal inference, Gibbs sampling, mixed integer linear programming for inference
**Already in this field?** Skip this entirely if you already have a solid understanding of probabilistic graphical models and inference algorithms including Markov logic networks.

This background playlist selection is designed to build a solid understanding of probabilistic graphical models (PGMs), which are foundational to the Hybrid Markov Logic Networks used in the paper. The rigorous course option offers a deep, structured university-level treatment of PGMs and related inference methods, ideal for readers seeking comprehensive mastery. The fast track provides a concise, intuition-driven explainer series that covers core concepts efficiently, suitable for those with limited time who want a practical grasp of the subject.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Probabilistic models](https://www.youtube.com/playlist?list=PLRQrw2NjzkqPQWAGA-W3FQC1pnSSRwQr3) — Jens Norlyk · 16 videos · 7.9h across the first 15 episodes

**Watch only this:** First 7 episodes (Deterministic vs Probabilistic Model, An Overview of Probabilistic Programming, Introduction to Probabilistic Modelling and Machine Learning, Probabilistic Models and Machine Learning, Probabilistic Graphical Models and Bayesian Networks, Probabilistic Dynamic Programming, Probabilistic Programming in Python), about 3.5 hours — enough to build intuition on probabilistic modeling and graphical models relevant to the paper.

*Why it unblocks this paper:* This Jens Norlyk playlist offers a clear, well-paced introduction to probabilistic models including probabilistic programming and graphical models, providing an accessible overview that aligns well with the paper’s use of probabilistic logic and inference.

*If you want all of it:* First 15 episodes totaling about 7.9 hours for a broader but still concise coverage of probabilistic models.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on disentangling fine-tuning from pre-training in visual captioning using Hybrid Markov Logic Networks, start by building a solid foundation in probabilistic graphical models and the key inference techniques such as Mixed Integer Linear Programming and Gibbs sampling with importance weighting. Then, gain familiarity with the visual captioning models that incorporate large language models like BLIP2 to appreciate the context of the paper's application. Finally, focus on the core concept of Hybrid Markov Logic Networks, which is the central probabilistic framework used in the paper, and conclude with the authors' own talks or closely related research talks to grasp their novel approach and findings.

### Probabilistic graphical models *(prerequisite)*
Probabilistic graphical models provide the foundational framework for understanding the integration of uncertainty and relational structure in AI models. This knowledge is essential to grasp how Markov Logic Networks extend these ideas by combining logic with probabilistic reasoning.

*How the paper uses it:* The paper applies Hybrid Markov Logic Networks, which build on probabilistic graphical models, to model caption generation conditioned on images.

▶ [Probabilistic ML - Lecture 16 - Graphical Models](https://www.youtube.com/watch?v=BosZK5E_q70) — Tübingen Machine Learning · 1:27:27 · 6y ago

### Mixed Integer Linear Programming *(prerequisite)*
Mixed Integer Linear Programming (MILP) is a key optimization technique used for approximate MAP inference in the paper. Understanding MILP formulations and solution methods is crucial to appreciate how the authors efficiently solve abductive inference problems with semantic equivalence constraints.

*How the paper uses it:* The paper uses MILP solvers to compute approximate MAP solutions for abductive inference in Hybrid Markov Logic Networks.

▶ [Lecture 12 Formulating Mixed Integer Linear Programming Models](https://www.youtube.com/watch?v=DUoHacs6v_c) — Can Li · 1:20:27 · 1y ago

### Gibbs sampling and importance weighting *(prerequisite)*
Gibbs sampling is a Markov Chain Monte Carlo method for drawing samples from complex distributions, and importance weighting adjusts these samples to estimate marginal probabilities. These techniques underpin the paper's marginal inference approach to attribute captions back to training examples.

*How the paper uses it:* The paper employs Gibbs sampling with importance weighting for marginal inference to quantify the influence of fine-tuning data on generated captions.

▶ [Markov Networks 2 - Gibbs Sampling | Stanford CS221: AI (Autumn 2021)](https://www.youtube.com/watch?v=k6aZZF2pk7k) — Stanford Online · 17:55 · 4y ago

### Visual captioning models with LLMs *(prerequisite)*
Understanding the architecture and functioning of visual captioning models that incorporate large language models, such as BLIP2, is important to contextualize the paper's empirical evaluation and findings on explainability differences between LLM-based and non-LLM models.

*How the paper uses it:* The paper evaluates state-of-the-art captioning models including BLIP2, which uses a large language model, to analyze knowledge sources in caption generation.

▶ [BLIP 2   Image Captioning  Visual Question Answering Explained ( Hugging Face Space Demo )](https://www.youtube.com/watch?v=FK2Xvgu3R6g) — AI WITH Rithesh · 17:15 · 3y ago

### Hybrid Markov Logic Networks
Hybrid Markov Logic Networks combine symbolic logic with numeric features in a probabilistic framework, enabling the integration of visual features and caption semantics. This concept is central to the paper's novel approach for disentangling fine-tuning from pre-training knowledge in captioning models.

*How the paper uses it:* The paper develops a probabilistic model using Hybrid Markov Logic Networks to explain caption generation by combining symbolic and visual information.

▶ [Markov Logic: A Step Toward AI by Pedro Domingos](https://www.youtube.com/watch?v=TRBBlJHnxaQ) — Big Things Conference · 36:54 · 5y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hearing the authors explain their work provides direct insight into their motivations, methodology, and interpretation of results. Such talks often include nuances and clarifications not present in the paper text.

*How the paper uses it:* Directly hear the authors discuss their novel approach to disentangling fine-tuning from pre-training in visual captioning using Hybrid Markov Logic Networks.

▶ [Why Overtrained Language Models Are Harder to Fine-Tune | Paper Explained](https://www.youtube.com/watch?v=PDI4e_zyks8) — Sherin Muckatira · 33:13 · 3w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by building a foundation in probabilistic graphical models, which underpin the paper's use of Markov logic. Next, learn about Mixed Integer Linear Programming and Gibbs sampling with importance weighting, as these are key inference techniques used. Then, explore visual captioning models with large language models to grasp the application context. Finally, study Hybrid Markov Logic Networks, the core framework combining symbolic logic and visual features for explaining caption generation.

### Probabilistic graphical models *(prerequisite)*
Probabilistic graphical models (PGMs) provide a way to represent complex distributions over many variables using graphs, making inference and learning more tractable. Understanding PGMs helps grasp how uncertainty and dependencies are modeled, which is essential for Markov logic networks.

*How the paper uses it:* The paper builds on probabilistic graphical models to combine symbolic and visual information in a unified probabilistic framework.

▶ [Probabilistic ML - Lecture 16 - Graphical Models](https://www.youtube.com/watch?v=BosZK5E_q70) — Tübingen Machine Learning · 1:27:27 · 6y ago

### Mixed Integer Linear Programming *(prerequisite)*
Mixed Integer Linear Programming (MILP) is an optimization technique that solves problems with both continuous and integer variables subject to linear constraints. It is widely used for approximate inference in complex probabilistic models where exact solutions are intractable.

*How the paper uses it:* The authors use MILP solvers for efficient approximate MAP inference in their Hybrid Markov Logic Network framework.

▶ [1.1: Intro to LP and MIP](https://www.youtube.com/watch?v=i1wg23MFA5I) — Mike Wagner · 13:21 · 3y ago

### Gibbs sampling and importance weighting *(prerequisite)*
Gibbs sampling is a Markov Chain Monte Carlo method to generate samples from complex distributions by iteratively sampling each variable conditioned on others. Importance weighting adjusts these samples to better estimate marginal probabilities, enabling attribution of outputs to training data.

*How the paper uses it:* The paper employs Gibbs sampling with importance weighting for marginal inference to trace generated captions back to fine-tuning examples.

▶ [An introduction to Gibbs sampling](https://www.youtube.com/watch?v=ER3DDBFzH2g) — Ben Lambert · 18:58 · 8y ago

### Visual captioning models with LLMs *(prerequisite)*
Visual captioning models generate descriptive text for images, often combining vision encoders with large language models (LLMs) for fluent and context-aware captions. Understanding these models clarifies the application domain and challenges in disentangling pre-training and fine-tuning knowledge.

*How the paper uses it:* The paper evaluates state-of-the-art captioning models including BLIP2, which integrates a large language model, highlighting differences in explainability.

▶ [BLIP 2   Image Captioning  Visual Question Answering Explained ( Hugging Face Space Demo )](https://www.youtube.com/watch?v=FK2Xvgu3R6g) — AI WITH Rithesh · 17:15 · 3y ago

### Hybrid Markov Logic Networks
Hybrid Markov Logic Networks extend Markov logic by combining symbolic logic formulas with continuous numeric features, enabling probabilistic reasoning over mixed data types. This framework allows integrating symbolic caption concepts with visual features for explainability.

*How the paper uses it:* The core contribution of the paper is a probabilistic framework using HMLNs to disentangle and quantify fine-tuning versus pre-training influence in visual captioning.

▶ [Markov Logic: A Step Toward AI by Pedro Domingos](https://www.youtube.com/watch?v=TRBBlJHnxaQ) — Big Things Conference · 36:54 · 5y ago

## Already in your library

- [17 Probabilistic Graphical Models and Bayesian Networks](https://www.youtube.com/watch?v=zCWRTKnOYYg) — also for: Scaling the Explanation of Multi-Class Bayesian Network Classifiers (Adnan Darwiche)
- [Lecture 12: Introduction to Linear Programming](https://www.youtube.com/watch?v=qKNkP6IfjvY) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [Lec 38 - Mixed Integer Linear Programming](https://www.youtube.com/watch?v=oYLI_cmHICU) — also for: Quantum Annealing Approaches to Solving the Shipment Rerouting Problems (Fei Li)
- [Mixed Integer Linear Programming (MILP) Tutorial](https://www.youtube.com/watch?v=i8WS6HlE8qM) — also for: Quantum Annealing Approaches to Solving the Shipment Rerouting Problems (Fei Li)
- [The Art of Linear Programming](https://www.youtube.com/watch?v=E72DWgKP_1Y) — also for: The Dangerous Impact of Solver Imprecision on Data Management Techniques (and How to Avoid It) (Panagiotis Manolios)
- [Integer Linear Programming - Graphical Method - Optimal Solution, Mixed, Rounding, Relaxation](https://www.youtube.com/watch?v=RhHhy-8sz-4) — also for: Coral: Cost-Efficient Multi-LLM Serving over Heterogeneous Cloud GPUs (K. V. Rashmi)
- [Importance Sampling](https://www.youtube.com/watch?v=C3p2wI4RAi8) — also for: The General Stability of Ranking (H. V. Jagadish)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [LLMs Meet Robotics: What Are Vision-Language-Action Models? (VLA Series Ep.1)](https://www.youtube.com/watch?v=8dZUOo5xWFw) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's approach to disentangling fine-tuning from pre-training in visual captioning models using Hybrid Markov Logic Networks (HMLNs). The beginner project reproduces a core metric on a small scale using familiar tools. The intermediate project builds on the authors' released code to implement and evaluate the paper's inference methods on a subset of MSCOCO captions. The advanced project extends the method to improve scalability or apply it to a related multimodal task, addressing a stated limitation or future direction in the paper.

### Beginner — Reproduce MAP Inference Metric on Sample Captions
*Effort: a weekend, ~8 hours*

You implement a simplified version of the paper's MAP inference metric to quantify how well a generated caption can be explained by fine-tuning data. Using a small set of image-caption pairs from MSCOCO, you extract symbolic caption concepts and compute approximate MAP probabilities using a basic MILP solver or heuristic. You then compare MAP values for captions generated by a non-LLM model versus a mock LLM-based caption to observe differences in explainability.

**Why it shows you understood the paper:** This project shows you grasp the core idea of using abductive inference (MAP) with symbolic and visual features to measure fine-tuning influence, a key contribution of the paper.

**Grounded in:** Formulation of abductive (MAP) inference tasks to quantify the influence of fine-tuning data on generated captions.

**Tech stack:** Python 3.11, PuLP or any MILP solver Python binding, NLTK or spaCy for simple NLP, Jupyter Notebook

**Data:** A small subset of MSCOCO captions and images (publicly available dataset) used as a proxy for the paper's evaluation data.

**Build it:**

1. Select 10-20 image-caption pairs from MSCOCO dataset.
2. Extract symbolic concepts (e.g., nouns, verbs) from captions using NLP tools.
3. Represent visual features as simple numeric vectors (e.g., image embeddings from a pretrained CNN).
4. Formulate a simplified MILP problem to approximate MAP inference linking symbolic concepts and visual features.
5. Solve the MILP for each caption and compute MAP scores.
6. Compare MAP scores for captions from a non-LLM model and a mock LLM-based caption.

**Ships as:** A Jupyter notebook and README showing MAP inference implementation, MAP scores for sample captions, and a brief analysis comparing explainability between caption types.

**Stretch goal:** Add semantic equivalence constraints between captions and incorporate soft evidence to improve MAP approximation.

### Intermediate — Run and Extend Authors' HMLN Inference on MSCOCO Subset
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' released code from https://github.com/Monikshah/caption-explanation-hmln to reproduce their MAP and marginal inference results on a smaller subset of the MSCOCO dataset. You then implement a simple baseline comparison, such as a nearest-neighbor retrieval of training captions based on image features, and compare MAP values and marginal attribution results. You report quantitative metrics and visualize example contrastive training examples.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the paper's actual codebase, reproduce core results, and critically compare the HMLN inference approach to a simpler baseline, reflecting a deeper comprehension of the method and its empirical evaluation.

**Grounded in:** Development of a probabilistic framework using HMLNs and empirical evaluation on MSCOCO across multiple captioning models.

**Tech stack:** Python 3.11, PyTorch (if required by authors' code), MILP solver (e.g., Gurobi or CBC), Jupyter Notebook, Git

**Data:** MSCOCO dataset subset (publicly available), used as in the paper for evaluation.

**Build it:**

1. Clone the authors' GitHub repository https://github.com/Monikshah/caption-explanation-hmln.
2. Set up the environment and dependencies as per the repository instructions.
3. Download and prepare a small subset of MSCOCO images and captions for evaluation.
4. Run the provided scripts to perform MAP and marginal inference on the subset.
5. Implement a simple baseline method (e.g., nearest neighbor retrieval of training captions by image feature similarity).
6. Compare MAP scores and marginal attribution results between HMLN inference and baseline.
7. Visualize and analyze contrastive training examples identified by the HMLN method.

**Verified links from the paper:**

- <https://github.com/Monikshah/caption-explanation-hmln> — released by the paper's authors

**Ships as:** A GitHub repository fork with runnable code, a report comparing HMLN inference to baseline on MSCOCO subset, and visualizations of training examples supporting or contradicting generated captions.

**Stretch goal:** Modify the inference code to incorporate a different semantic equivalence measure or add logging to analyze runtime performance.

### Advanced — Scalable Approximate Inference for HMLNs in Visual Captioning
*Effort: 3-4 weeks*

You develop an approximate or neural inference method to replace or augment the MILP and Gibbs sampling steps in the paper's HMLN framework, aiming to improve scalability and runtime efficiency. You apply this method to the MSCOCO dataset or a similar multimodal dataset and evaluate whether the approximate inference maintains interpretability and attribution quality. Optionally, you extend the framework to a related multimodal task such as Visual Question Answering (VQA) to explore generalization.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing computational complexity and scalability of inference, demonstrating your ability to innovate on the core method and adapt it to broader multimodal AI challenges.

**Grounded in:** Limitations: The complexity of MILP and Gibbs sampling may limit real-time or large-scale applications. Future directions: Improving scalability and efficiency of inference and learning in HMLNs for larger datasets and real-time use; generalizing the approach to other multimodal tasks such as Visual Question Answering.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, MILP solver (for baseline comparison), Jupyter Notebook, Git, Optional: Hugging Face Transformers for multimodal models

**Data:** MSCOCO dataset or a publicly available VQA dataset (e.g., VQA v2) as a proxy for multimodal evaluation.

**Build it:**

1. Study the paper's inference methods and identify bottlenecks in MILP and Gibbs sampling.
2. Design and implement an approximate inference approach, such as variational inference or neural surrogate models, to estimate MAP or marginal distributions.
3. Integrate the approximate inference into the HMLN framework, reusing or adapting the authors' codebase as a starting point.
4. Evaluate the approximate method on MSCOCO captions, comparing MAP scores and attribution quality to the original method.
5. Optionally, adapt the framework and inference to a Visual Question Answering dataset to test generalization.
6. Document the trade-offs in accuracy, interpretability, and runtime performance.

**Verified links from the paper:**

- <https://github.com/Monikshah/caption-explanation-hmln> — released by the paper's authors

**Ships as:** A GitHub repository with code for approximate inference in HMLNs, evaluation results comparing to the original method, and a detailed README discussing scalability improvements and potential applications beyond captioning.

**Stretch goal:** Incorporate richer symbolic representations or semantic equivalence measures to improve attribution fidelity while maintaining scalability.

_The authors' code requires a MILP solver and substantial computational resources; verify availability of compatible MILP solvers and GPU resources before starting the intermediate and advanced projects._
