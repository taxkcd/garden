---
title: "437 · AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference — Mahmut T. Kandemir"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mahmut-t-kandemir"
source_hash: "b05ee02d268c32f8cedab90eda5dfe94ce890ebd2abb40086df2a931a9c4034f"
sequence: 437
generator: "outreach-garden: managed"
---

# 437 · AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference

## At a glance

- **Professor:** Mahmut T. Kandemir
- **Institution:** Pennsylvania State University
- **Paper:** [AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference](https://arxiv.org/abs/2605.29535)
- **Authors:** Yilin Feng, Ahmed Burak Gulhan, Mahmut Taylan Kandemir
- **Year:** 2026

## Paper overview

This paper presents AsymVLM, a method to speed up and reduce memory use in vision-language models by pruning tokens differently for vision and text inputs. Vision tokens, which are spatially redundant, are aggressively pruned before processing, while text tokens, which have causal dependencies, are pruned conservatively during decoding. The approach uses a learned scorer to rank vision tokens by importance and adapts pruning ratios per input. Experiments show AsymVLM saves up to 54% FLOPs and improves accuracy on document and chart understanding tasks.

### Why it matters

**Research problem:** Vision-language models process many visual tokens and fewer text tokens, but existing token compression methods treat both modalities uniformly, ignoring their structural differences. This leads to inefficiencies in computation and memory during inference.

**Why it matters:** Efficient inference in vision-language models is critical due to the large number of visual tokens and the growing size of key-value caches during decoding, which cause high latency and memory consumption, limiting practical deployment especially on memory-constrained GPUs.

**Key contributions:**

- Systematic analysis revealing fundamental asymmetry between vision and text tokens in structure, quantity, and compressibility.
- Proposal of AsymVLM, combining query-aware vision token pruning before transformer layers with budget-constrained text token eviction during decoding.
- Introduction of a learned cross-modal importance scorer with per-sample adaptive budgeting for vision tokens.
- Extensive experiments demonstrating highest FLOPs savings (up to 54%) among state-of-the-art methods while maintaining or improving accuracy on multiple benchmarks.

## About the professor

**Mahmut T. Kandemir** — Professor, Dept of Computer Science, Pennsylvania State University.

Research interests: optimizing compilers, runtime systems, mobile systems, embedded systems, I/O and high performance storage, non volatile processors and memory, and latest trends in public cloud services.

### Research links

- [Faculty/profile page](http://www.cse.psu.edu/~mtk2)
- [Professor website](https://www.cse.psu.edu/hpcl/kandemir/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer architectures and token pruning
**The paper assumes:** transformer neural networks, tokenization in vision-language models, attention mechanisms, and token pruning methods
**Already in this field?** Skip this entirely if you already understand transformer architectures and token pruning techniques in vision-language models.

To understand the asymmetric token pruning method in AsymVLM, it is essential to grasp transformer architectures, token representations, and pruning strategies, especially how transformers handle vision and text tokens differently. The rigorous course provides a deep, structured university-level foundation on transformers and large language models, while the fast track offers a concise, visual, and code-oriented introduction to transformers, suitable for quickly building intuition and practical understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-3, about 5.4 hours — covering Transformer basics, Transformer-based models and tricks, and Transformers & Large Language Models to build a solid foundation on transformer architectures and token processing.

*Why it unblocks this paper:* Stanford CME295 is a comprehensive university course focused on transformers and large language models, covering core components, architecture, and techniques relevant to token pruning and transformer efficiency, directly aligning with the paper's focus on vision-language transformer models.

*If you want all of it:* 16.2 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Transformers from scratch](https://www.youtube.com/playlist?list=PLTl9hO2Oobd97qfWC40gOSU8C0iu0m2l4) — CodeEmporium · 12 videos · 4.4h across 12 episodes

**Watch only this:** Episodes 1-6, about 2.2 hours — covering self-attention, multi-head attention, positional encoding, layer normalization, and transformer encoder architecture to quickly grasp the key transformer mechanisms relevant to token pruning.

*Why it unblocks this paper:* The 'Transformers from scratch' series by CodeEmporium offers clear, concise, and code-driven explanations of transformer components such as self-attention, multi-head attention, positional encoding, and encoder-decoder architectures, providing a quick yet thorough understanding of transformer token processing and pruning concepts.

*If you want all of it:* 4.4 hours across 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand AsymVLM, start with foundational knowledge on Transformer architectures for vision and language to grasp the model backbone where token pruning is applied. Next, study token pruning and compression techniques to comprehend general strategies for reducing computational load in deep models. Then, learn about cross-modal importance scoring and adaptive budgeting, which are key technical components enabling AsymVLM's asymmetric pruning. Finally, focus on the core concept of vision-language model token pruning and the authors' own talk to get direct insights into their novel asymmetric token pruning method and its experimental validation.

### Transformer architectures for vision and language *(prerequisite)*
Understanding the Transformer architecture is essential since AsymVLM builds on vision-language models that use transformers for processing both modalities. This section covers the fundamentals of self-attention, cross-attention, and how transformers enable parallel processing of tokens in vision and language tasks.

*How the paper uses it:* AsymVLM applies token pruning within the transformer layers of vision-language models, so understanding the transformer backbone is foundational.

▶ [L1: Introduction to transformer architecture](https://www.youtube.com/watch?v=qrsNX1Rwle0) — IIT Madras - B.S. Degree Programme · 20:08 · 1 year ago

### Token pruning and compression techniques *(prerequisite)*
This section introduces general model compression methods like pruning, quantization, and distillation, which are crucial for efficient inference. It provides context on how token pruning reduces computational overhead by selectively removing less important tokens.

*How the paper uses it:* AsymVLM innovates on token pruning by applying it asymmetrically to vision and text tokens, so understanding standard pruning techniques is necessary.

▶ [Lec 30 | Quantization, Pruning & Distillation](https://www.youtube.com/watch?v=Kx5x3HYBDls) — NPTEL IIT Delhi · 57:10 · 1 year ago

### Cross-modal importance scoring *(prerequisite)*
Cross-modal importance scoring is a key technique for ranking vision tokens by their relevance to the text input. This enables the learned scorer in AsymVLM to effectively prune vision tokens before transformer layers.

*How the paper uses it:* AsymVLM's learned importance scorer uses cross-modal signals to rank vision tokens, making this concept central to the method.

▶ [[CVPR 2025, Highlight] CrossOver: 3D Scene Cross-Modal Alignment](https://www.youtube.com/watch?v=tDrQ4R-F8hk) — Gradient Spaces Research Group · 6:10 · 1 year ago

### Adaptive budgeting in neural networks *(prerequisite)*
Adaptive budgeting allows variable pruning ratios per input sample, improving efficiency without sacrificing accuracy. This concept explains how models can dynamically allocate computational resources based on input complexity.

*How the paper uses it:* AsymVLM employs per-sample adaptive budgeting to prune vision tokens variably, which is critical to its efficiency gains.

▶ [1: Introduction to Neural Networks and Deep Learning; Training Deep NNs](https://www.youtube.com/watch?v=kyQ0CRkYhy4) — MIT OpenCourseWare · 57:05 · 7 months ago

### Vision-language model token pruning
This section focuses on token pruning methods specifically designed for vision-language models, addressing the unique challenges of multimodal inputs. It covers recent advances and practical implementations of pruning in VLMs.

*How the paper uses it:* AsymVLM proposes an asymmetric token pruning strategy tailored for vision-language models, making this the core technical topic.

▶ [[IDSL Seminar'26] PruneVid: Visual Token Pruning for Efficient Video Large Language Models](https://www.youtube.com/watch?v=cn3zjvv19LE) — IDSL · 12:01 · 4 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand AsymVLM's approach to efficient vision-language model inference, start by learning the basics of transformer architectures for vision and language, as these form the backbone where token pruning is applied. Next, build foundational knowledge on token pruning and compression techniques to grasp how models reduce computational load. Then, explore cross-modal importance scoring to understand how the model ranks vision tokens by importance. Finally, learn about adaptive budgeting in neural networks, which supports the per-sample variable pruning critical to AsymVLM's efficiency.

### Transformer architectures for vision and language *(prerequisite)*
Transformers are the core model architecture used in vision-language models, enabling parallel processing of tokens through self-attention and cross-attention mechanisms. Understanding how transformers process both visual and textual tokens is essential to grasp where and why token pruning can be applied.

*How the paper uses it:* AsymVLM applies asymmetric token pruning within transformer layers processing vision and text tokens differently.

▶ [L1: Introduction to transformer architecture](https://www.youtube.com/watch?v=qrsNX1Rwle0) — IIT Madras - B.S. Degree Programme · 20:08 · 1 year ago

### Token pruning and compression techniques *(prerequisite)*
Token pruning reduces the number of tokens processed by a model to save computation and memory, while compression techniques optimize model efficiency without sacrificing accuracy. Learning these concepts helps understand how AsymVLM selectively removes less important tokens to speed up inference.

*How the paper uses it:* AsymVLM’s core method is asymmetric token pruning to improve efficiency in vision-language models.

▶ [Lec 30 | Quantization, Pruning & Distillation](https://www.youtube.com/watch?v=Kx5x3HYBDls) — NPTEL IIT Delhi · 57:10 · 1 year ago

### Cross-modal importance scoring *(prerequisite)*
Cross-modal importance scoring ranks tokens from different modalities (vision and text) based on their relevance to the task, enabling informed pruning decisions. This technique allows the model to identify which vision tokens to keep or prune before transformer layers.

*How the paper uses it:* AsymVLM uses a learned cross-modal importance scorer to rank vision tokens by importance for pruning.

▶ [[CVPR 2025, Highlight] CrossOver: 3D Scene Cross-Modal Alignment](https://www.youtube.com/watch?v=tDrQ4R-F8hk) — Gradient Spaces Research Group · 6:10 · 1 year ago

### Adaptive budgeting in neural networks *(prerequisite)*
Adaptive budgeting dynamically adjusts the amount of pruning per input sample, allowing the model to allocate computational resources efficiently based on input complexity. This concept is key to AsymVLM’s per-sample variable pruning ratios that improve accuracy and efficiency.

*How the paper uses it:* AsymVLM employs per-sample adaptive budgeting to prune vision tokens variably per input.

▶ [1: Introduction to Neural Networks and Deep Learning; Training Deep NNs](https://www.youtube.com/watch?v=kyQ0CRkYhy4) — MIT OpenCourseWare · 57:05 · 7 months ago

## Already in your library

- [Variational Inference - Explained](https://www.youtube.com/watch?v=G5xcC5ABVjA) — also for: ExoPredicator: Learning Abstract Models of Dynamic Worlds for Robot Planning (Tom Silver)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Lecture 9 - Understanding SHAP | Explainable AI (XAI ...](https://www.youtube.com/watch?v=IIgTulcEUFw) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Vision Transformer Quick Guide - Theory and Code in (almost) 15 min](https://www.youtube.com/watch?v=j3VNqtJUoz0) — also for: Generating Higher-Quality Anti-Forensics DeepFakes with Adversarial Sharpening Mask (Pradeep K. Atrey)
- [Vision Transformers explained](https://www.youtube.com/watch?v=tkZMj1VKD9s) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Vision Transformers Explained | The ViT Paper](https://www.youtube.com/watch?v=NetSJM590Lo) — also for: DA-VPT: Semantic-Guided Visual Prompt Tuning for Vision Transformers (Kien A. Hua)
- [Structured Pruning Learns Compact and Accurate Models](https://www.youtube.com/watch?v=G07ft-IiL6o) — also for: ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design (Cauligi S. Raghavendra)
- [Compressing Neural Networks for Embedded AI: Pruning, Projection, and Quantization](https://www.youtube.com/watch?v=7uV3-eTB5es) — also for: ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design (Cauligi S. Raghavendra)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of AsymVLM's asymmetric token pruning approach for efficient vision-language model inference. The beginner project focuses on reproducing a core mechanism of vision token importance scoring on a small scale using familiar tools. The intermediate project involves reimplementing the paper's adaptive vision token pruning method and comparing it against a baseline on a public vision-language dataset. The advanced project extends the method by addressing one of the paper's stated limitations—adapting text token eviction thresholds dynamically for multi-turn dialogues—potentially opening a research conversation with the professor.

### Beginner — Vision Token Importance Scoring Prototype
*Effort: a weekend, ~8 hours*

You build a small prototype that implements a learned importance scorer for vision tokens based on simple features (e.g., token embeddings or spatial location) and ranks them by importance. You visualize the ranked tokens on sample images to show how pruning decisions might be made before transformer layers.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key insight that vision tokens can be scored and pruned asymmetrically before transformer processing, reflecting their spatial redundancy and independent nature.

**Grounded in:** Introduction of a learned cross-modal importance scorer with per-sample adaptive budgeting for vision tokens.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Matplotlib

**Data:** Use a small subset of publicly available image patches from a standard vision dataset like CIFAR-10 or ImageNet as a substitute for vision tokens.

**Build it:**

1. Extract patch embeddings from a pretrained vision transformer model for sample images.
2. Implement a simple learned scorer (e.g., a small MLP) that predicts importance scores for each vision token embedding.
3. Rank tokens by predicted importance and visualize the top-k tokens overlaid on the original image.
4. Experiment with different pruning ratios and show how token retention changes.
5. Document the approach and results in a Jupyter notebook.

**Ships as:** A Jupyter notebook demonstrating vision token importance scoring and pruning visualization on sample images.

**Stretch goal:** Add a simple adaptive budgeting scheme that varies pruning ratio per image based on a heuristic (e.g., image complexity).

### Intermediate — Adaptive Vision Token Pruning on Public VQA Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core asymmetric vision token pruning method from AsymVLM, including the learned importance scorer and per-sample adaptive budgeting, and apply it to a public vision-language dataset such as VQA v2. You compare pruning effectiveness and accuracy against a uniform pruning baseline.

**Why it shows you understood the paper:** This project shows you can implement the paper's core method faithfully, reproduce its adaptive pruning benefits, and evaluate trade-offs between computation savings and accuracy on a real multimodal task.

**Grounded in:** Proposal of AsymVLM, combining query-aware vision token pruning before transformer layers with budget-constrained text token eviction during decoding; Per-sample adaptive budgeting outperforms uniform pruning.

**Tech stack:** Python 3.11, PyTorch, Transformers library, Jupyter Notebook

**Data:** Use the VQA v2 dataset publicly available from the Visual Genome project as a substitute for the paper's DocVQA dataset.

**Build it:**

1. Implement a vision transformer backbone to extract vision tokens from images.
2. Implement a learned importance scorer module to rank vision tokens per input.
3. Implement per-sample adaptive budgeting to decide pruning ratios based on input features.
4. Integrate pruning into the vision-language transformer model pipeline before transformer layers.
5. Train or fine-tune the scorer on a subset of VQA v2 training data.
6. Evaluate accuracy and FLOPs savings compared to uniform pruning baseline.
7. Document results and analysis in a report.

**Ships as:** A GitHub repo with code to run adaptive vision token pruning on VQA v2, including evaluation scripts and a report comparing pruning strategies.

**Stretch goal:** Add a simple text token eviction strategy during decoding and evaluate its impact on multi-turn question answering.

### Advanced — Dynamic Text Token Eviction for Long Multi-turn Dialogues
*Effort: 3+ weeks, ~60 hours*

You extend the AsymVLM text token eviction strategy by developing an adaptive threshold mechanism that dynamically adjusts eviction based on conversation difficulty or context length. You evaluate this on a public multi-turn dialogue dataset to test robustness on long dialogues, addressing a stated limitation of the paper.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating your ability to innovate on the method and apply it to a new domain, potentially contributing novel insights to efficient vision-language inference.

**Grounded in:** Text eviction uses a fixed threshold that does not adapt to conversation difficulty; Extending evaluation to very long multi-turn dialogues to assess robustness of text token eviction.

**Tech stack:** Python 3.11, PyTorch, Transformers library, Jupyter Notebook, NumPy

**Data:** Use a publicly available multi-turn dialogue dataset such as MultiWOZ or DSTC as a proxy for long multi-turn dialogues.

**Build it:**

1. Implement the baseline fixed-threshold text token eviction strategy during decoding.
2. Design and implement an adaptive threshold mechanism that adjusts eviction based on dialogue context features (e.g., turn count, token importance scores).
3. Integrate the adaptive eviction into a vision-language model decoding pipeline.
4. Evaluate performance and memory usage on long multi-turn dialogues from the chosen dataset.
5. Compare results against fixed-threshold eviction and standard LLM cache compression baselines.
6. Document methodology, experiments, and findings in a detailed report.

**Ships as:** A GitHub repo with code and evaluation scripts demonstrating adaptive text token eviction on multi-turn dialogues, plus a report discussing improvements and limitations.

**Stretch goal:** Explore integrating the learned importance scorer with compiler/runtime optimizations to further accelerate inference on resource-constrained devices.

_The paper's authors have not released code or datasets; thus, all projects require reimplementation from the paper's descriptions and use substitute public datasets such as CIFAR-10, VQA v2, or MultiWOZ._
