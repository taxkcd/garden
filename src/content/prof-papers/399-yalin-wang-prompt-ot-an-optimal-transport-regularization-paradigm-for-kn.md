---
title: "399 · Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation — Yalin Wang"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yalin-wang"
source_hash: "78ff645fa34fcc0189d1112675b28b33cee9f00bae6e7312a8179744903fe75d"
sequence: 399
generator: "outreach-garden: managed"
---

# 399 · Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation

## At a glance

- **Professor:** Yalin Wang
- **Institution:** Arizona State University
- **Paper:** [Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation](https://arxiv.org/abs/2503.08906)
- **Authors:** Xiwen Chen, Wenhui Zhu, Peijie Qiu, Hao Wang, Huayu Li, Haiyu Wu, Aristeidis Sotiras, Yalin Wang, Abolfazl Razi
- **Year:** 2025

## Paper overview

This paper proposes a new method called Prompt-OT to improve how vision-language models like CLIP adapt to new tasks without forgetting their original knowledge. It uses optimal transport (OT) to better preserve the structure of learned features during fine-tuning, which helps the model generalize better to new data and tasks without overfitting.

### Why it matters

**Research problem:** Vision-language models (VLMs) such as CLIP perform well but tend to lose their generalization ability when fine-tuned on downstream tasks, especially with limited data. Existing prompt learning methods often cause overfitting and degrade zero-shot generalization.

**Why it matters:** Maintaining the balance between adapting to new tasks and preserving pre-trained knowledge is crucial for deploying VLMs effectively in real-world applications where data is limited or distribution shifts occur. Improving this balance enhances model robustness and usability.

**Key contributions:**

- Proposed an OT-based constraint scheme to mitigate knowledge forgetting in prompt learning, addressing limitations of previous point-wise constraints.
- Provided theoretical justification showing OT enlarges the feasible parameter space for learnable prompts, enabling better trade-off between adaptation and generalization.
- Designed a joint vision-text OT constraint that balances constraint strength across modalities and preserves multimodal structural consistency.
- Demonstrated superior empirical performance over recent prompt learning methods across multiple benchmarks without requiring data augmentation or ensembles.

## About the professor

**Yalin Wang** — Professor, School of Computing and Augmented Intelligence, Arizona State University.

Research interests: medical imaging, computer vision, machine learning, computer graphics, geometric modeling, and statistical pattern recognition

### Research links

- [Faculty/profile page](https://search.asu.edu/profile/1638618)
- [Identity evidence](http://gsl.lab.asu.edu)
- [Resolved homepage](https://gsl.lab.asu.edu)
- [Google Scholar](https://scholar.google.com/citations?user=F4tTgLQAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Optimal Transport Theory
**The paper assumes:** optimal transport theory, Wasserstein distances, and transport-based regularization methods
**Already in this field?** Skip this entirely if you already understand the mathematical foundations and applications of optimal transport theory in machine learning.

To understand the core method of the paper, which uses optimal transport (OT) theory to regularize vision-language model adaptation, a solid grasp of OT fundamentals and its computational aspects is essential. The rigorous course option offers a deep dive into convex optimization, which underpins OT theory, while the fast track provides a focused, intuition-driven introduction to optimal transport concepts suitable for quickly grasping the key ideas without extensive mathematical background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1-7, about 9.2 hours — covering the introduction to convex sets, functions, optimality conditions, duality, and numerical methods, which provide the mathematical foundation for optimal transport theory.

*Why it unblocks this paper:* Stanford EE364A Convex Optimization I by Stephen Boyd covers foundational convex optimization concepts that are critical for understanding the mathematical formulation and solution methods of optimal transport problems used in the paper.

*If you want all of it:* 23.7 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Optimal Transport](https://www.youtube.com/playlist?list=PLat4GgaVK09e-wIKzCDiymngSen0vCA_2) — Márton Vaitkus · 8 videos · 6.9h across 8 episodes

**Watch only this:** Episodes 1-3, about 2.5 hours — covering computational transport, probabilistic representations, and regularization for OT, which directly relate to the paper's OT-based prompt learning framework.

*Why it unblocks this paper:* Márton Vaitkus's Optimal Transport playlist offers clear, focused explanations on computational and theoretical aspects of OT, including regularization and algorithms, providing a concise yet thorough introduction aligned with the paper's use of OT.

*If you want all of it:* 6.9 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Prompt-OT paper, start with foundational knowledge of Optimal Transport theory, which underpins the paper's regularization method. Next, study Vision-Language Model adaptation techniques to grasp the challenges in fine-tuning these models. Then, explore prompt learning methods in vision-language models to contextualize the improvements Prompt-OT offers. Follow this with multimodal representation alignment to understand how joint constraints preserve structural consistency. Finally, focus on the core concept of the Prompt-OT paper itself, including the authors' own talk if available, to see the novel application of OT in prompt tuning for knowledge preservation.

### Optimal transport theory *(prerequisite)*
Optimal Transport (OT) theory provides the mathematical foundation for measuring and preserving structural consistency between distributions, which is central to the Prompt-OT method. Understanding OT's principles, such as Wasserstein distances and transport plans, is essential to grasp how the paper regularizes model adaptation.

*How the paper uses it:* The paper uses OT to regularize prompt learning by preserving feature distribution structure during fine-tuning.

▶ [https://www.youtube.com › watch?v=G8KsRBWb1PE](https://www.youtube.com/watch?v=G8KsRBWb1PE) — YouTube result via DuckDuckGo

### Vision-language models adaptation *(prerequisite)*
This section covers the challenges and techniques involved in adapting pre-trained vision-language models to downstream tasks, especially under limited data conditions. Understanding these adaptation methods provides context for why knowledge preservation during fine-tuning is difficult and important.

*How the paper uses it:* Prompt-OT addresses the problem of knowledge forgetting during VLM adaptation.

▶ [How to Fine-tune Florence 2: The Best Small Vision Model](https://www.youtube.com/watch?v=2OyN-N36-E8) — Trelis Research · 50:36

### Prompt learning in vision-language models *(prerequisite)*
Prompt learning is a popular approach to adapt vision-language models efficiently. This section explains existing prompt tuning methods and their limitations, setting the stage for understanding how Prompt-OT improves upon them by introducing OT-based constraints.

*How the paper uses it:* Prompt-OT proposes an OT-based prompt learning framework to mitigate forgetting and improve generalization.

▶ [CMU Advanced NLP 2022 (9): Prompting](https://www.youtube.com/watch?v=5ef83Wljm-M) — Graham Neubig · 1:12:40

### Multimodal representation alignment *(prerequisite)*
Multimodal alignment techniques ensure that vision and text representations are coherently mapped in a shared space. This is key to understanding how Prompt-OT enforces joint constraints on vision and text features to preserve multimodal structural consistency.

*How the paper uses it:* The paper enforces joint OT constraints on vision and text representations for balanced multimodal alignment.

▶ [Lecture 5.1: Multimodal Alignment (Multimodal Machine Learning, Carnegie Mellon University)](https://www.youtube.com/watch?v=4P4qBBxpthg) — LP Morency · 5 years ago

### Prompt-OT paper talk *(the paper's own talk)*
This section focuses on the authors' own presentation or talks closely related to the Prompt-OT paper, providing the most direct and detailed explanation of their novel OT-based prompt learning framework and empirical results.

*How the paper uses it:* Direct presentation by the authors explaining the Prompt-OT method and its contributions.

▶ [Yunan Yang: When Optimal Transportation Meets PDE-Based ...](https://www.youtube.com/watch?v=vQJDl_5DNVA) — BIMSA · 1:00:32

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the Prompt-OT paper, starting with the basics of optimal transport theory, then covering vision-language model adaptation challenges, followed by prompt learning techniques in vision-language models, and multimodal representation alignment. Finally, it culminates with the core idea of using optimal transport as a regularizer in model adaptation, directly linking to the paper's novel method.

### Optimal transport theory *(prerequisite)*
Optimal transport (OT) is a mathematical framework for comparing and transforming probability distributions in a way that respects the underlying geometry of data. Learning OT helps you understand how to measure and preserve structural relationships between data points, which is key to the Prompt-OT method.

*How the paper uses it:* The paper uses OT to preserve structural consistency between pre-trained and fine-tuned feature distributions during model adaptation.

▶ [https://www.youtube.com › watch?v=G8KsRBWb1PE](https://www.youtube.com/watch?v=G8KsRBWb1PE) — YouTube result via DuckDuckGo

### Vision-language models adaptation *(prerequisite)*
Vision-language models (VLMs) combine visual and textual information but adapting them to new tasks is challenging due to risks of overfitting and forgetting. Understanding the basics of fine-tuning and adaptation techniques for VLMs provides context for why preserving knowledge during adaptation is important.

*How the paper uses it:* Prompt-OT addresses the problem of knowledge forgetting during fine-tuning of VLMs on downstream tasks.

▶ [How-To Fine-Tune Any Vision Language Model on Your Own ...](https://www.youtube.com/watch?v=Ctb29UxzIS8) — Fahd Mirza · 16:27

### Prompt learning in vision-language models *(prerequisite)*
Prompt learning is a technique to adapt large pre-trained models by tuning input prompts rather than the entire model, which is more parameter-efficient and can help retain pre-trained knowledge. Knowing how prompt tuning works in VLMs is essential to appreciate how Prompt-OT improves upon existing methods.

*How the paper uses it:* The paper proposes an OT-based regularization scheme to improve prompt learning by mitigating knowledge forgetting.

▶ [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — Vizuara · 37:00

### Multimodal representation alignment *(prerequisite)*
Multimodal alignment involves learning joint representations that align information from different modalities, such as vision and text, in a shared space. This alignment is crucial for vision-language models to understand and relate images and text effectively.

*How the paper uses it:* Prompt-OT enforces joint OT constraints on vision and text features to preserve multimodal structural consistency.

▶ [Lecture 5.1: Multimodal Alignment (Multimodal Machine Learning, Carnegie Mellon University)](https://www.youtube.com/watch?v=4P4qBBxpthg) — LP Morency · 5 years ago

### Optimal transport regularization in model adaptation
Using optimal transport as a regularizer means guiding the model adaptation process to maintain the geometric structure of learned features, preventing forgetting and improving generalization. This concept is the core innovation of the Prompt-OT paper.

*How the paper uses it:* The paper introduces an OT-guided prompt learning framework that regularizes adaptation by preserving joint vision-text feature distributions.

▶ [Can optimal transport unify physics and machine learning?](https://www.youtube.com/watch?v=-O9tG60MK6g) — CompuFlair · 5 months ago

## Already in your library

- [Prompt Engineering Full Course](https://www.youtube.com/watch?v=2BpCk4d2Cc0) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [Lecture 01 | Optimal Transportation, Geometry and Dynamics](https://www.youtube.com/watch?v=TAnoqeYfO1Y) — also for: Geometric Understanding of Deep Learning (Xianfeng David Gu)
- [Optimal Transport - Introduction to Optimal Transport](https://www.youtube.com/watch?v=kjOBJP7gglw) — also for: PeTeR: Post-Training Robustification of Probabilistic Circuits (YooJung Choi)
- [End-to-End (small) Vision Language Model Fine-tuning ...](https://www.youtube.com/watch?v=_EMfJSmLSKE) — also for: CultureVLM: Characterizing and Improving Cultural Understanding of Vision-Language Models for over 100 Countries (Haipeng Chen)
- [What Are Vision Language Models? How AI Sees & Understands Images](https://www.youtube.com/watch?v=lOD_EE96jhM) — also for: AdaTooler-V: Adaptive Tool-Use for Images and Videos (Yuzhang Shang)
- [Wasserstein Distance & Optimal Transport — Fully Explained](https://www.youtube.com/watch?v=88ONbF_b3VE) — also for: PeTeR: Post-Training Robustification of Probabilistic Circuits (YooJung Choi)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the Prompt-OT paper. The beginner project reproduces the core idea of optimal transport (OT) regularization on a small scale using familiar tools. The intermediate project implements the paper's OT-guided prompt learning method on a public vision-language dataset and compares it to a baseline prompt tuning method. The advanced project extends the method by exploring adaptive OT regularization strength to address the paper's stated future direction, applying it to a domain with limited labeled data to show practical generalization improvements.

### Beginner — Optimal Transport Visualization for Feature Distribution Alignment
*Effort: a weekend, ~8 hours*

You build a small Python notebook that visualizes how optimal transport can align two simple 2D feature distributions representing pre-trained and fine-tuned model embeddings. Using synthetic data points, you compute and plot the OT coupling matrix and show how OT preserves structural consistency better than naive point-wise matching.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of OT regularization in Prompt-OT by visualizing how OT captures cross-instance relationships and structural alignment beyond point-wise constraints.

**Grounded in:** The method uses optimal transport to preserve structural consistency between pre-trained and fine-tuned models.

**Tech stack:** Python 3.11, Jupyter Notebook, POT (Python Optimal Transport library), matplotlib, numpy

**Data:** Synthetic 2D Gaussian clusters simulating vision-text feature embeddings as described in the paper's OT regularization context.

**Build it:**

1. Install POT and other dependencies.
2. Generate two synthetic 2D point clouds representing pre-trained and fine-tuned feature distributions.
3. Compute the optimal transport plan between the two distributions using POT.
4. Visualize the two distributions and the OT coupling matrix to show alignment.
5. Compare with naive point-wise matching and plot differences.

**Ships as:** A Jupyter notebook with visualizations and explanations showing how OT aligns feature distributions better than point-wise constraints.

**Stretch goal:** Add a small experiment showing how varying OT regularization strength affects the alignment quality.

### Intermediate — Reimplement Prompt-OT on a Public Vision-Language Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core Prompt-OT optimal transport regularization framework for prompt tuning of a pre-trained vision-language model (e.g., CLIP) on a public dataset like CIFAR-100 or Caltech-101 as a substitute for the paper's benchmarks. You compare Prompt-OT against a baseline prompt tuning method without OT regularization and report base and novel class accuracy metrics.

**Why it shows you understood the paper:** This project shows you can translate the paper's theoretical OT constraint into a working prompt tuning pipeline and empirically validate its benefits on generalization metrics, replicating the paper's core claims.

**Grounded in:** Demonstrated superior empirical performance over recent prompt learning methods across multiple benchmarks without requiring data augmentation or ensembles.

**Tech stack:** Python 3.11, PyTorch, OpenAI CLIP pretrained model, POT library, numpy, scikit-learn

**Data:** Public vision-language dataset such as CIFAR-100 or Caltech-101 used as a substitute for the paper's benchmark datasets.

**Build it:**

1. Set up a prompt tuning pipeline for CLIP using PyTorch.
2. Implement the joint vision-text OT regularization loss as described in the paper.
3. Fine-tune prompts on base classes of the dataset with and without OT regularization.
4. Evaluate zero-shot generalization on novel classes and compute accuracy metrics.
5. Compare results and plot base, novel, and harmonic mean accuracies.

**Ships as:** A GitHub repo with code to run Prompt-OT prompt tuning, baseline prompt tuning, and a README reporting comparative accuracy results.

**Stretch goal:** Add ablation experiments varying OT regularization strength and report effects on generalization.

### Advanced — Adaptive OT Regularization for Medical Image-Text Model Adaptation
*Effort: 3+ weeks*

You extend the Prompt-OT framework by implementing adaptive regularization strength that dynamically adjusts OT constraint during prompt tuning. You apply this to a medical image-text dataset (e.g., publicly available medical imaging datasets with captions or reports) to improve knowledge preservation and generalization under limited labeled data and domain shifts, addressing a stated future direction.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and future directions by innovating on adaptive OT regularization and transferring the method to a challenging real-world domain aligned with Professor Wang's expertise.

**Grounded in:** Incorporate adaptive regularization strength to dynamically improve trade-offs between adaptation and generalization.

**Tech stack:** Python 3.11, PyTorch, OpenAI CLIP or similar vision-language model, POT library, numpy, pandas, scikit-learn

**Data:** A publicly available medical image dataset with associated text reports or captions (e.g., MIMIC-CXR or similar) used as a proxy for medical image-text adaptation tasks.

**Build it:**

1. Implement adaptive OT regularization that adjusts constraint strength based on training dynamics or validation metrics.
2. Set up prompt tuning on the medical image-text dataset using a pretrained vision-language model.
3. Fine-tune prompts with adaptive OT regularization and compare to fixed OT and no OT baselines.
4. Evaluate knowledge preservation and generalization metrics, including domain shift robustness.
5. Document findings and discuss implications for medical imaging applications.

**Ships as:** A comprehensive GitHub repo with adaptive OT prompt tuning code, evaluation scripts, and a detailed README discussing results and future work.

**Stretch goal:** Integrate lightweight data augmentation or generative techniques to further improve adaptation efficiency.
