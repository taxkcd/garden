---
title: "504 · Allocation Before Ranking: Decoupled Token Compression for OmniLLMs — Miao Yin"
date: 2026-08-26
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-miao-yin"
source_hash: "609113df8e3a597f6efd08a1c5a0cd255148b7465d9bc66007c8863dd3d3550a"
sequence: 504
generator: "outreach-garden: managed"
---

# 504 · Allocation Before Ranking: Decoupled Token Compression for OmniLLMs

## At a glance

- **Professor:** Miao Yin
- **Institution:** University of Texas at Arlington
- **Paper:** [Allocation Before Ranking: Decoupled Token Compression for OmniLLMs](https://arxiv.org/pdf/2608.01665v1)
- **Authors:** Zhenghui Guo, Yilin Yang, Yuanbin Man, Miao Yin, Weidong Shi, Rabimba Karanjai, Omprakash Gnawali, Chengming Zhang
- **Year:** 2026

## Paper overview

This paper addresses the problem of token compression in omnimodal large language models (OmniLLMs) that process audio and video tokens together. The authors identify a key issue where a shared attention score simultaneously decides how much capacity each modality (audio or video) receives and which tokens within that modality are kept, leading to an audio-favoring bias. They propose MACER, a training-free method that explicitly allocates capacity to audio and video before ranking tokens within each modality separately, improving compression efficiency and accuracy across multiple benchmarks and models.

### Why it matters

**Research problem:** How to effectively compress tokens in omnimodal large language models that jointly process audio and video, avoiding the bias introduced by shared attention scores that couple cross-modal capacity allocation with within-modality token selection.

**Why it matters:** Efficient token compression is critical for scaling OmniLLMs to handle long multimodal sequences without excessive computational cost. Misallocation of capacity between audio and video tokens can degrade model accuracy and efficiency, limiting practical deployment.

**Key contributions:**

- Identification of the structural failure in shared top-K omnimodal compression where a single score couples audio-video capacity allocation and token selection.
- Proposal of MACER, a training-free compressor that explicitly allocates audio and video token budgets before modality-local token ranking.
- Demonstration that audio and video saliency become readable at different shallow decoder layers, motivating modality-specific readout.
- Introduction of a video-local temporal coverage bonus to improve token selection distribution within the video modality.
- Extensive evaluation on multiple OmniLLM backbones (Qwen2.5-Omni-7B/3B and OmniVinci-9B) and benchmarks covering diverse modality demands.

## About the professor

**Miao Yin** — Department of Computer Science and Engineering, University of Texas at Arlington.

Research interests: AI computing and learning systems, algorithm-system co-optimization, AI efficiency challenges

### Research links

- [Faculty/profile page](https://www.uta.edu/academics/faculty/profile?user=miao.yin)
- [Identity evidence](https://myin390.github.io)
- [Professor website](https://noodle-lab.github.io)
- [Resolved homepage](https://noodle-lab.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Attention Mechanisms in Deep Learning
**The paper assumes:** transformer attention mechanisms, multimodal attention models, token pruning in transformers
**Already in this field?** Skip this entirely if you already understand how attention works in transformer models, including how attention scores influence token importance and selection.

Understanding attention mechanisms in deep learning is essential for grasping how the MACER method decouples token compression allocation and ranking in OmniLLMs. The rigorous course option offers a comprehensive, university-level deep dive into transformers and attention, suitable for those seeking in-depth theoretical and practical knowledge. The fast track provides a concise, visual, and code-oriented introduction to attention mechanisms, ideal for quickly building intuition and foundational understanding without a large time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-3 (Transformer, Transformer-Based Models & Tricks, Transformers & Large Language Models), about 5.3 hours — these cover the fundamentals of transformer architecture and attention mechanisms crucial for this paper.

*Why it unblocks this paper:* Stanford CME295: Transformers and Large Language Models I Autumn 2025 covers the core components of transformer architectures and attention mechanisms in detail, directly relevant to understanding the shared attention and modality-specific readouts in MACER.

*If you want all of it:* All 9 lectures, about 16.2 hours, for a complete understanding of transformers, LLMs, and related techniques.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Attention Mechanism in Deep Learning.](https://www.youtube.com/playlist?list=PL23RutZ7d6NpL7HvvxDxwhAXIg53z7B_K) — Datum Learning · 6 videos · 1.2h across 6 episodes

**Watch only this:** Episodes 1-4 (Introduction, Background, Working of the attention mechanism, Self attention mechanism visualized), about 48 minutes — these episodes cover the essential concepts and workings of attention needed to understand the paper.

*Why it unblocks this paper:* The 'Attention Mechanism in Deep Learning.' series by Datum Learning provides a clear, visual, and code-based explanation of attention mechanisms, including self-attention and multi-head attention, which are foundational to the paper's approach.

*If you want all of it:* All 6 episodes, about 1.2 hours, for a complete concise overview including multi-head and cross attention.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Allocation Before Ranking: Decoupled Token Compression for OmniLLMs', start with foundational knowledge on multimodal fusion architectures to grasp how audio and video modalities are combined in large language models. Then, study token pruning and compression techniques in LLMs to appreciate the challenges and existing solutions in token efficiency. Next, focus on multimodal token compression to understand compression strategies specific to multiple modalities. Finally, conclude with the paper-specific talk if available, to gain direct insights from the authors on their novel MACER method and its contributions.

### Multimodal fusion architectures *(prerequisite)*
Understanding how different modalities such as audio and video are fused in large language models is foundational to appreciating the challenges addressed by the paper. The CMU lecture on Multimodal Representation Fusion offers a rigorous, university-level treatment of multimodal fusion techniques, including cross-modal interactions and fusion strategies, which align well with the paper's context of shared decoders and modality-specific processing.

*How the paper uses it:* The paper's method relies on shared decoders and modality-specific shallow layer readouts, making multimodal fusion architectures a key prerequisite.

▶ [Lecture 3.1 - Multimodal Representation Fusion (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=WL2AlMIupC4) — LP Morency · 1:11:11 · 2 years ago

### Token pruning and compression in LLMs *(prerequisite)*
Token pruning and compression are critical for efficient LLM inference, especially for long sequences. This AI Research Roundup video provides a research-focused overview of data-centric token compression approaches, highlighting the shift from model-centric to data-centric methods, which is relevant to understanding the motivation behind MACER's decoupled allocation and ranking.

*How the paper uses it:* The paper proposes a novel token pruning method that decouples capacity allocation from token ranking to improve efficiency and accuracy.

▶ [Data-Centric LLM Token Compression](https://www.youtube.com/watch?v=qT8k5-DVdcU) — AI Research Roundup · 5:20 · 1 year ago

### Multimodal token compression
This concept is central to the paper as it addresses token compression specifically in the context of multiple modalities (audio and video). The AI Research Roundup video on 'OmniSIFT: Efficient Token Pruning for Omni-LLMs' discusses a related recent approach in multimodal token compression, providing a rigorous research perspective that complements the paper's contributions and situates MACER within the current state of the art.

*How the paper uses it:* The paper advances multimodal token compression by explicitly allocating capacity before ranking tokens within each modality.

▶ [OmniSIFT: Efficient Token Pruning for Omni-LLMs](https://www.youtube.com/watch?v=fK4OAzSaIyM) — AI Research Roundup · 4:38 · 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of tokenization and token pruning in large language models (LLMs) to grasp why token compression matters. Next, build intuition about multimodal fusion architectures to see how audio and video data are combined in OmniLLMs. Then, learn about multimodal token compression techniques, focusing on how tokens from different modalities can be efficiently compressed. Finally, explore the paper-specific concept of decoupling capacity allocation from token ranking in multimodal token compression, which is the core innovation of the paper.

### Token pruning and compression in LLMs *(prerequisite)*
Token pruning and compression reduce the number of tokens processed by large language models to save computation and speed up inference. Understanding how tokens are selected or merged helps appreciate the challenges and solutions in efficient LLM operation.

*How the paper uses it:* The paper proposes a novel token pruning method to improve efficiency and accuracy in OmniLLMs by decoupling capacity allocation and token ranking.

▶ [Data-Centric LLM Token Compression](https://www.youtube.com/watch?v=qT8k5-DVdcU) — AI Research Roundup · 5:20 · 1 year ago

### Multimodal fusion architectures *(prerequisite)*
Multimodal fusion architectures combine different data types, such as audio and video, into a unified model representation. This fusion is essential to understand how OmniLLMs jointly process multiple modalities and why token compression across them is challenging.

*How the paper uses it:* The paper focuses on audio-video OmniLLMs with shared decoders, where fusion architecture impacts token compression strategies.

▶ [Lecture 3.1 - Multimodal Representation Fusion (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=WL2AlMIupC4) — LP Morency · 1:11:11 · 2 years ago

## Already in your library

- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [CS 198-126: Lecture 22 - Multimodal Learning](https://www.youtube.com/watch?v=_Y-D5jrX7IQ) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Visualizing transformers and attention | Talk for TNG Big Tech Day '24](https://www.youtube.com/watch?v=KJtZARuO3JY) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Illustrated Guide to Transformers Neural Network: A step by ...](https://www.youtube.com/watch?v=4Bdc55j80l8) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [I Visualised Attention in Transformers](https://www.youtube.com/watch?v=RNF0FvRjGZk) — also for: Cross-Image Attention for Zero-Shot Appearance Transfer (Hadar Averbuch-Elor)
- [Transformer Neural Networks, ChatGPT's foundation, Clearly ...](https://www.youtube.com/watch?v=zxQyTK8quyY) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformer Explainer- Learn About Transformer With Visualization](https://www.youtube.com/watch?v=csWluHwfsB8) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)
- [Multimodal fusion explained: how machines learn to “see, hear, and understand” together](https://www.youtube.com/watch?v=eg9PSb7FoYU) — also for: Zero-Shot Relational Learning for Multimodal Knowledge Graphs (Shichao Pei)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Lec 30 | Quantization, Pruning & Distillation](https://www.youtube.com/watch?v=Kx5x3HYBDls) — also for: AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference (Mahmut T. Kandemir)
- [How Large Language Models LLMs Work Explained | Tokens, Context Windows, Parameters & Training Proce](https://www.youtube.com/watch?v=u523JOz2VaU) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Jun Zhuang)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the MACER method for token compression in audio-video OmniLLMs. The beginner project reproduces a key diagnostic figure showing modality-specific attention readout at shallow decoder layers. The intermediate project implements the core MACER allocation-before-ranking method on a small-scale multimodal dataset and compares it to a shared top-K baseline. The advanced project extends MACER by exploring dynamic capacity allocation policies, addressing a stated future direction of the paper.

### Beginner — Visualize Modality-Specific Attention Readout in a Toy OmniLLM
*Effort: a weekend, ~8 hours*

You build a small script that simulates shallow decoder attention scores for audio and video tokens separately and visualizes how saliency signals differ across decoder layers. This reproduces the paper's observation that audio saliency stabilizes early while video saliency improves at later shallow layers.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's insight that audio and video saliency emerge at different decoder depths, motivating modality-specific readout for token ranking.

**Grounded in:** Demonstration that audio and video saliency become readable at different shallow decoder layers, motivating modality-specific readout.

**Tech stack:** Python 3.11, matplotlib, numpy, jupyter notebook

**Data:** Synthetic attention score arrays generated to mimic audio and video token saliency across decoder layers, as described in the paper.

**Build it:**

1. Generate synthetic attention score matrices for audio and video tokens across multiple shallow decoder layers.
2. Implement visualization code to plot attention score distributions per modality and layer.
3. Analyze and highlight differences in saliency stability between audio and video modalities.
4. Write a README explaining the connection to the paper's modality-specific readout finding.

**Ships as:** A Jupyter notebook or Python script with plots showing modality-specific attention score patterns across decoder layers, with explanations linking to the paper.

**Stretch goal:** Add interactivity to explore how varying synthetic attention patterns affect modality saliency visualization.

### Intermediate — Implement MACER Token Compression on a Public Audio-Visual Dataset
*Effort: 2 weekends, ~20 hours*

You implement the MACER method's core idea of explicit audio-video capacity allocation followed by modality-local token ranking using allocation-normalized attention scores. You apply this to a small public audio-visual dataset (e.g., AVE dataset or a substitute) and compare compression accuracy and token retention metrics against a shared top-K baseline.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main method from its description, reproduce its key accuracy improvements, and understand the importance of decoupling allocation from selection in token compression.

**Grounded in:** Proposal of MACER, a training-free compressor that explicitly allocates audio and video token budgets before modality-local token ranking; decoupling capacity allocation from token selection improves compression accuracy and efficiency.

**Tech stack:** Python 3.11, PyTorch, numpy, scikit-learn, matplotlib

**Data:** A publicly available audio-visual dataset such as the Audio-Visual Event (AVE) dataset or a small synthetic multimodal dataset simulating audio and video tokens.

**Build it:**

1. Prepare or obtain a small audio-visual dataset with tokenized audio and video features.
2. Implement a shared top-K token pruning baseline using combined attention scores.
3. Implement MACER's explicit capacity allocation: fix audio and video token budgets.
4. Compute allocation-normalized attention scores separately per modality at shallow decoder layers.
5. Rank and prune tokens within each modality according to MACER.
6. Evaluate and compare accuracy or reconstruction metrics between MACER and shared top-K baseline.
7. Document results and relate findings to the paper's reported improvements.

**Ships as:** A GitHub repo with code implementing MACER token compression on a public dataset, comparison plots of accuracy vs. token retention, and a README explaining the method and results.

**Stretch goal:** Incorporate the video-local temporal coverage bonus term to improve token selection distribution within video modality.

### Advanced — Dynamic Capacity Allocation for MACER in OmniLLMs
*Effort: 3+ weeks*

You extend MACER by designing and implementing a dynamic or query-specific capacity allocation policy that adapts audio-video token budgets based on input content or attention statistics. You evaluate this adaptive MACER variant on a multimodal dataset and analyze whether it improves compression accuracy or efficiency compared to fixed allocation.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating deep understanding of the allocation-selection decomposition and exploring stochastic or optimization-based approaches to capacity allocation in token compression.

**Grounded in:** Future direction: Exploring dynamic or query-specific capacity allocation policies; limitation: MACER fixes capacity splits statically rather than dynamically per query or example.

**Tech stack:** Python 3.11, PyTorch, numpy, scikit-learn, matplotlib

**Data:** A public audio-visual dataset or synthetic multimodal token data as in the intermediate project.

**Build it:**

1. Reimplement the intermediate MACER method with fixed capacity allocation as baseline.
2. Design a dynamic capacity allocation mechanism that adjusts audio/video token budgets per input, e.g., based on attention entropy or token saliency statistics.
3. Integrate the dynamic allocation into the MACER pipeline, maintaining modality-local ranking.
4. Evaluate compression accuracy, FLOPs, and latency tradeoffs compared to fixed allocation MACER and shared top-K.
5. Analyze results to identify scenarios where dynamic allocation benefits or fails.
6. Write a detailed report discussing the method, experiments, and relation to stochastic optimization perspectives.

**Ships as:** A comprehensive GitHub repository with code for dynamic MACER, evaluation scripts, and a technical report discussing methodology, experiments, and insights.

**Stretch goal:** Explore formalizing the allocation-selection decomposition as a stochastic optimization problem and experiment with reinforcement learning to learn allocation policies.
