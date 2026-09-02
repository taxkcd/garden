---
title: "513 · Deep Unlearning via Randomized Conditionally Independent Hessians — Sathya N. Ravi"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sathya-n-ravi"
source_hash: "420fab01470396e1439a503120ea2ea30731da8b42d7361de9e0928febedeb49"
sequence: 513
generator: "outreach-garden: managed"
---

# 513 · Deep Unlearning via Randomized Conditionally Independent Hessians

## At a glance

- **Professor:** Sathya N. Ravi
- **Institution:** University of Illinois at Chicago
- **Paper:** [Deep Unlearning via Randomized Conditionally Independent Hessians](https://openaccess.thecvf.com/content/CVPR2022/papers/Mehta_Deep_Unlearning_via_Randomized_Conditionally_Independent_Hessians_CVPR_2022_paper.pdf)
- **Authors:** Ronak Mehta, Sourav Pal, Vikas Singh, Sathya N. Ravi
- **Year:** 2022

## Paper overview

This paper addresses the challenge of machine unlearning, which is the process of removing specific training samples from a trained deep learning model without retraining from scratch. The authors propose a novel method called L-CODEC that identifies a subset of model parameters most relevant to the data to be unlearned, enabling efficient approximate unlearning even in very large models used for vision and NLP tasks.

### Why it matters

**Research problem:** How to efficiently update a trained deep learning model to 'forget' specific training samples, complying with privacy laws and user requests, without costly full retraining.

**Why it matters:** Legal regulations like GDPR and CCPA require data deletion rights, including the removal of data influence from trained models. Retraining large models for every deletion request is computationally expensive and impractical, so scalable unlearning methods are needed.

**Key contributions:**

- Proposed L-CODEC, a randomized conditional independence coefficient for efficient parameter subset selection in deep models.
- Developed L-FOCI, an iterative algorithm to identify the Markov Blanket of parameters sufficient for unlearning a sample.
- Demonstrated scalability of the approach to deep networks with hundreds of millions of parameters, including CNNs, ResNets, and transformers.
- Provided theoretical guarantees on forgetting (privacy) and convergence rates of the unlearning procedure.
- Applied the method to real-world tasks such as face recognition, person re-identification, and NLP provision classification.

## About the professor

**Sathya N. Ravi** — Assistant Professor, Department of Computer Science, University of Illinois at Chicago.

Research interests: Numerical Optimization of Deep Learning systems, using Deep Learning to solve vision problems efficiently

### Research links

- [Faculty/profile page](https://cs.uic.edu/profiles/sathya)
- [Professor website](http://www.sathyaravi.com/)
- [Resolved homepage](https://sathya-uic.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=FW-0thoAAAAJ&hl=en)
- [GitHub](https://github.com/sravi-uwmadison/)
- [LinkedIn](https://www.linkedin.com/in/sathyaravi/)
- [Social profile](https://twitter.com/tweetingsathya)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Markov Blanket and Conditional Independence
**The paper assumes:** probabilistic graphical models, conditional independence theory, Markov Blanket concept
**Already in this field?** Skip this entirely if you already understand probabilistic graphical models and the role of Markov Blankets in parameter selection and inference.

Understanding Markov Blanket and conditional independence is crucial for grasping the core method L-CODEC in the paper, which relies on identifying parameter subsets for efficient unlearning. The rigorous course option provides a deep, foundational probability background including conditional independence concepts, while the fast track offers a concise, focused introduction to joint probability and Markov chains to quickly build intuition relevant to the paper's methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS109 Introduction to Probability for Computer Scientists I 2022 I Chris Piech](https://www.youtube.com/playlist?list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg) — Stanford Online · 29 videos · 35.4h across 29 episodes

**Watch only this:** Lectures 4 (Conditional Probability and Bayes), 5 (Independence), 11 (Joint Distributions), 12 (Inference I), and 13 (Inference II), about 6 hours total — these cover the key probability concepts and conditional independence necessary for L-CODEC.

*Why it unblocks this paper:* Stanford CS109 is a comprehensive probability course that covers conditional probability, independence, and inference, providing the rigorous foundation needed to understand randomized conditional independence coefficients and Markov Blanket identification in deep learning models.

*If you want all of it:* 35.4 hours across 29 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Joint Probability & Markov Chain | BCS301 – Module 2 | Mathematics-III | VTU 2023-24 | CS & Engineering](https://www.youtube.com/playlist?list=PLM9RnGtTy9_-cFq8f11Ymx4zxS9McZSYe) — Mathematics Tutor · 21 videos · 4.7h across 21 episodes

**Watch only this:** Episodes 1 (How to Find Marginal Distributions of X and Y), 2 (Are X and Y Dependent?), and 15 (Markov Chain 01: Transition Probability Matrix with Examples), about 40 minutes total — these provide a quick yet solid grasp of joint distributions, dependence, and Markov chains.

*Why it unblocks this paper:* This short-form playlist from Mathematics Tutor offers clear, concise explanations of joint probability, dependence, and Markov chains, directly addressing the concepts of conditional independence and Markov Blanket relevant to the paper's method, in a fraction of the time.

*If you want all of it:* 4.7 hours across 21 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Deep Unlearning via Randomized Conditionally Independent Hessians," start by building foundational knowledge on conditional independence testing, Markov blanket identification, and Hessian-based optimization, as these underpin the paper's methodology. Then, explore the broader context of machine unlearning to appreciate the problem setting and challenges. Finally, focus on the core concept of the paper—L-CODEC parameter selection and the authors' own talk to grasp their novel approach and contributions.

### Conditional Independence Testing Talk *(prerequisite)*
Conditional independence testing is fundamental to the L-CODEC method, which uses randomized conditional independence to select relevant parameter subsets for unlearning. Understanding the theoretical and algorithmic challenges in conditional independence testing will clarify the basis of the authors' approach.

*How the paper uses it:* L-CODEC relies on randomized conditional independence measures for efficient parameter subset selection.

▶ [STSW01 | Dr. Jonas Peters | The Hardness of Conditional Independence Testing](https://www.youtube.com/watch?v=ikcoL5zq0EY) — INI Seminar Room 1 · 37:09 · 8 months ago

### Markov Blanket Identification Seminar *(prerequisite)*
Markov blankets define the minimal subset of variables that shield a target variable from the rest, a key concept used in the paper to identify parameters most relevant to specific training samples. A deep understanding of Markov blankets helps in grasping how the authors isolate parameter subsets for unlearning.

*How the paper uses it:* The paper uses Markov Blanket identification to find parameter subsets sufficient for unlearning a sample.

▶ [Me and My Markov Blanket](https://www.youtube.com/watch?v=rmkjnfMvjv4) — Santa Fe Institute · 1:34:17 · 5 years ago

### Hessian-based Optimization Lecture *(prerequisite)*
Newton-style updates and the role of the Hessian matrix are central to the paper's block-coordinate update approach. Understanding Hessian matrices and their use in optimization will provide insight into how the authors avoid costly full Hessian inversion.

*How the paper uses it:* The paper performs block-coordinate Newton-style updates on selected parameter subsets using Hessian information.

▶ [Gradients, Hessians, and All Those Derivative Tests](https://www.youtube.com/watch?v=7JEWlfFoJJQ) — OptWhiz · 17:11 · 3 years ago

### Machine Unlearning Lecture *(prerequisite)*
Machine unlearning is the broader problem context of the paper, involving the removal of specific data influence from trained models. Foundational lectures on this topic provide the necessary background on motivations, challenges, and existing approaches.

*How the paper uses it:* The paper addresses efficient machine unlearning to comply with privacy laws without full retraining.

▶ [Machine unlearning](https://www.youtube.com/watch?v=xUnMkCB0Gns) — IEEE Symposium on Security and Privacy · 14:55 · 5 years ago

### L-CODEC Parameter Selection Seminar
This concept focuses on the core method proposed in the paper—L-CODEC—for efficient approximate unlearning by identifying relevant parameter subsets. Understanding this method is critical to grasping the paper's main contribution and scalability claims.

*How the paper uses it:* L-CODEC is the central method for efficient approximate unlearning by identifying relevant parameter subsets.

▶ [Factor Graphs 2 - Conditional Independence | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=o0mKSvbMunA) — Stanford Online · 1:17:51 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on deep unlearning via randomized conditionally independent Hessians, start by building a foundational grasp of machine unlearning and why it matters for privacy and model updates. Next, learn about Markov Blankets to grasp how the paper identifies relevant parameter subsets. Then, study conditional independence testing, which underpins the L-CODEC method for parameter selection. After that, understand Hessian-based optimization to appreciate the Newton-style updates used. Finally, explore the core L-CODEC parameter selection method that enables efficient approximate unlearning in large deep models.

### Machine Unlearning Lecture *(prerequisite)*
Machine unlearning is the process of making AI models 'forget' specific training data without retraining from scratch. This concept is crucial for privacy compliance and efficient model updates. Starting here helps you understand the motivation and challenges addressed by the paper.

*How the paper uses it:* The paper proposes an efficient method for approximate machine unlearning to comply with data deletion requests without costly retraining.

▶ [Machine Unlearning Explained: Why Forgetting Is the New Frontier in AI.](https://www.youtube.com/watch?v=CA01JJAvBZA) — Kaiffeinverse · 5:19 · 1 year ago

### Markov Blanket Identification Seminar *(prerequisite)*
A Markov Blanket is a minimal set of variables that shields a target variable from the rest of the system, capturing all relevant dependencies. Understanding this helps grasp how the paper selects the subset of model parameters most relevant to the data to be unlearned.

*How the paper uses it:* The paper uses Markov Blanket identification to find parameters with the most semantic overlap to the data being unlearned.

▶ [Me and My Markov Blanket](https://www.youtube.com/watch?v=rmkjnfMvjv4) — Santa Fe Institute · 1:34:17 · 5 years ago

### Conditional Independence Testing Talk *(prerequisite)*
Conditional independence testing determines whether two variables are independent given a third, which is fundamental in identifying relevant parameter subsets. This concept underlies the randomized conditional independence coefficient (L-CODEC) used in the paper.

*How the paper uses it:* L-CODEC relies on randomized conditional independence measures to efficiently select parameter subsets for unlearning.

▶ [Conditional Independence Explained with Visuals](https://www.youtube.com/watch?v=1ka8HspRQPw) — MidhaFin (MF) · 7:03 · 7 months ago

### Hessian-based Optimization Lecture *(prerequisite)*
Hessian matrices capture second-order derivatives and are used in Newton-style optimization to efficiently update model parameters. Understanding Hessians and their role in optimization is key to grasping how the paper performs approximate unlearning updates.

*How the paper uses it:* The paper uses block-coordinate Newton-style updates on selected parameters, avoiding full Hessian inversion for scalability.

▶ [The Hessian Matrix - Explained](https://www.youtube.com/watch?v=9tp1kULwU2w) — DataMListic · 6:44 · 10 months ago

## Already in your library

- [What is Machine Unlearning?](https://www.youtube.com/watch?v=0_ciCzHaM4o) — also for: Attention Smoothing Is All You Need for Unlearning (Dongxiao Zhu)
- [Machine Unlearning](https://www.youtube.com/watch?v=eiZuQmImxEE) — also for: Continual Unlearning for Text-to-Image Diffusion Models: A Regularization Perspective (Cheng Zhang)
- [Machine Unlearning for Generative AI](https://www.youtube.com/watch?v=-OV21A1j50g) — also for: Attention Smoothing Is All You Need for Unlearning (Dongxiao Zhu)
- [Hidden Markov Model : Data Science Concepts](https://www.youtube.com/watch?v=fX5bYmnHqqE) — also for: Investigating an Intelligent System to Monitor & Explain Abnormal Activity Patterns of Older Adults (Daniel P. Siewiorek)
- [What is D-Separation? | Conditional Independence](https://www.youtube.com/watch?v=mv5D2akH25w) — also for: Scaling the Explanation of Multi-Class Bayesian Network Classifiers (Adnan Darwiche)
- [Intro to Gradient Descent || Optimizing High-Dimensional Equations](https://www.youtube.com/watch?v=fXQXE96r4AY) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the L-CODEC method for deep unlearning. The beginner project reproduces a core mechanism on a small scale using familiar tools. The intermediate project implements the paper's main algorithm on a public dataset, comparing it to a baseline. The advanced project extends the method to address a stated limitation or future direction, showing capacity for research-level work and innovation.

### Beginner — Small-Scale Parameter Subset Selection via Conditional Independence
*Effort: a weekend, ~8 hours*

You build a simplified implementation of the L-CODEC conditional independence coefficient to identify a subset of model parameters most relevant to a given input sample in a small neural network. Using a pretrained small CNN on MNIST, you collect activations and compute randomized conditional independence scores to select parameters for targeted updates.

**Why it shows you understood the paper:** This project shows you grasp the core idea of using conditional independence to identify a Markov Blanket of parameters relevant to specific data points, a key innovation of the paper.

**Grounded in:** Proposed L-CODEC, a randomized conditional independence coefficient for efficient parameter subset selection in deep models.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** MNIST handwritten digits dataset, publicly available and widely used as a substitute for vision tasks in the paper.

**Build it:**

1. Load a pretrained small CNN on MNIST using PyTorch.
2. Implement a randomized conditional independence test inspired by L-CODEC to measure dependence between activations and input samples.
3. Collect activations from intermediate layers for a batch of MNIST samples.
4. Compute conditional independence scores for parameters with respect to a target sample.
5. Select a subset of parameters based on the scores and visualize the selection.
6. Document the method, results, and how this relates to the paper's parameter subset selection.

**Ships as:** A Jupyter notebook with code and visualizations showing parameter subset selection on MNIST, with explanations linking to the L-CODEC method.

**Stretch goal:** Add a simple unlearning update step on the selected parameters and show its effect on model predictions for the target sample.

### Intermediate — Reimplementation of L-FOCI Unlearning on CIFAR-10
*Effort: 2 weekends, ~20 hours*

You reimplement the L-FOCI algorithm to identify the Markov Blanket of parameters for unlearning specific samples in a ResNet trained on CIFAR-10. You then perform block-coordinate Newton-style updates on the selected parameters to approximate unlearning. You compare this targeted unlearning to a baseline of random parameter updates and measure accuracy degradation on residual data.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core unlearning algorithm and evaluate its effectiveness, reproducing key results on parameter subset selection and accuracy preservation.

**Grounded in:** Developed L-FOCI, an iterative algorithm to identify the Markov Blanket of parameters sufficient for unlearning a sample; Unlearning updates using L-FOCI outperform random parameter selection in preserving model accuracy while removing targeted samples.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** CIFAR-10 dataset, a standard public vision benchmark used as a substitute for the paper's vision tasks.

**Build it:**

1. Train or load a pretrained ResNet model on CIFAR-10.
2. Implement the L-FOCI algorithm based on the paper's description to iteratively identify a Markov Blanket of parameters for a target sample or class.
3. Perform block-coordinate Newton-style updates on the selected parameters to approximate unlearning of the target sample(s).
4. Implement a baseline unlearning method by randomly selecting parameters to update.
5. Evaluate and compare the accuracy on residual data and the target sample before and after unlearning.
6. Document the implementation details, results, and comparison to the paper's findings.

**Ships as:** A GitHub repository with code, scripts, and a detailed README showing L-FOCI unlearning on CIFAR-10 with quantitative comparison to baseline.

**Stretch goal:** Incorporate activation map visualizations to show how unlearning affects targeted versus non-targeted samples, similar to the paper's Fig. 8.

### Advanced — Extending L-CODEC for Memory-Efficient Unlearning in Transformers
*Effort: 3+ weeks*

You extend the L-CODEC method to address the paper's limitation on memory constraints when handling large parameter subsets, focusing on transformer models for NLP tasks. You develop an optimized implementation that reduces memory usage during Markov Blanket identification and unlearning updates, possibly via activation sampling strategies or parameter grouping. You evaluate the method on a public NLP dataset and analyze trade-offs between memory, runtime, and unlearning effectiveness.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep comprehension of the method and capacity to innovate on scalability and efficiency in large models.

**Grounded in:** Memory constraints still limit the size of parameter subsets that can be handled, especially in very large layers; Optimizing implementation for faster runtime and lower memory usage.

**Tech stack:** Python 3.11, PyTorch, Transformers library (Hugging Face), NumPy, Matplotlib, Jupyter Notebook

**Data:** A public NLP dataset such as the IMDb movie reviews dataset or SST-2 for sentiment classification, used as a substitute for the paper's NLP provision classification task.

**Build it:**

1. Load a pretrained transformer model fine-tuned on the chosen NLP dataset.
2. Implement or adapt the L-CODEC and L-FOCI algorithms for parameter subset selection and unlearning updates in transformer architectures.
3. Develop memory-efficient strategies for activation collection and parameter subset identification, such as sampling, grouping, or low-rank approximations.
4. Apply the unlearning procedure to remove specific samples or classes from the model.
5. Evaluate unlearning effectiveness, model accuracy on residual data, and measure memory and runtime improvements compared to a naive implementation.
6. Document the methodology, experiments, and discuss limitations and potential further improvements.

**Ships as:** A comprehensive GitHub repository with code, experiments, and a technical report demonstrating memory-efficient L-CODEC unlearning on transformers with analysis.

**Stretch goal:** Integrate privacy validation metrics or differential privacy guarantees to strengthen the unlearning privacy claims.
