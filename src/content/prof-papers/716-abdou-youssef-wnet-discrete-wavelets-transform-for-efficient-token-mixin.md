---
title: "716 · WNet: Discrete Wavelets Transform for Efficient Token Mixing — Abdou Youssef"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-abdou-youssef"
source_hash: "ffeadb426eed0a6147c86cf6517560ace1bd63efb268d0d6fe9749abce1e8636"
sequence: 716
generator: "outreach-garden: managed"
---

# 716 · WNet: Discrete Wavelets Transform for Efficient Token Mixing

## At a glance

- **Professor:** Abdou Youssef
- **Institution:** George Washington University
- **Paper:** [WNet: Discrete Wavelets Transform for Efficient Token Mixing](https://arxiv.org/pdf/2610.04720)
- **Authors:** Rana Salama, Abdou Youssef, Mona Diab
- **Year:** 2026

## Paper overview

This paper introduces WNet, a Transformer encoder variant that replaces the costly self-attention mechanism with a token mixing method based on the discrete wavelet transform (DWT). WNet decomposes input sequences into multiple scales that capture local and global information efficiently, then recombines them using learned layers. This approach reduces computational cost, especially for long sequences, while maintaining competitive accuracy on language tasks.

### Why it matters

**Research problem:** Self-attention in Transformers provides strong contextual modeling but has quadratic computational cost with sequence length, limiting efficiency for long sequences. Existing efficient attention approximations still rely on attention, and fixed transforms like Fourier lack locality.

**Why it matters:** Efficient token mixing is crucial for scaling Transformer models to long sequences in natural language processing, enabling faster training and inference without sacrificing accuracy. Reducing computational cost while preserving context modeling can improve practical deployment and research scalability.

**Key contributions:**

- Introduction of WNet, a family of linear-time wavelet token mixers with full-resolution multiscale decomposition.
- Exact receptive-field analysis showing two-tap wavelet filters confine token interactions to fixed blocks, while longer filters enable full sequence mixing within two layers.
- Controlled experiments comparing WNet variants to size-matched BERT, FNet, and learnable Haar mixing baselines under identical training conditions.
- Demonstration that WNet-Dyn trains as fast as attention at 256 tokens and is 2.7× faster at 4,096 tokens.
- Analysis showing early training loss favors locality over token mixing, highlighting the importance of receptive field design.

## About the professor

**Abdou Youssef** — Professor and Former Department Chair, Department of Computer Science, George Washington University.

Research interests: Machine Learning & Deep Learning, Natural Language Processing, Math Linguistics, Search and Retrieval, Audio/Image/Video Processing, Data Compression, Parallel Processing, Algorithms, Watermarking

### Research links

- [Faculty/profile page](https://www2.seas.gwu.edu/~ayoussef)
- [Identity evidence](https://www.seas.gwu.edu/~ayoussef)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Discrete Wavelet Transform
**The paper assumes:** discrete wavelet transform, multiscale signal decomposition, wavelet filter banks
**Already in this field?** Skip this entirely if you already understand discrete wavelet transforms and their application to sequence data.

To understand the core method of the WNet paper, which replaces Transformer self-attention with discrete wavelet transform (DWT) based token mixing, it is essential to grasp how DWT decomposes sequences into multiscale components and how wavelet filters operate. The rigorous course option offers a deep, structured university-level introduction to wavelet transforms and related signal processing concepts, while the fast track provides a concise, intuition-driven series of explainers focused specifically on wavelets and DWT. Choose the course for thorough foundational knowledge or the fast track for a quicker, focused overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Signal Processing Algorithms and Architectures](https://www.youtube.com/playlist?list=PLwdnzlV3ogoVwzCwpTuuwLmHO8JfEb8QL) — NPTEL IIT Guwahati · 26 videos · 10.1h across the first 25 episodes

**Watch only this:** Lectures 17 and 18: 'Wavelet Transform - I' and 'Wavelet Transform - II', plus Lecture 24: 'Filter Design' (approximately 1 hour 12 minutes total) — these cover the fundamentals of wavelet transforms and filter design essential for grasping WNet's token mixing approach.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course covers wavelet transforms in a rigorous signal processing context, including detailed lectures on wavelet transform parts I and II, filter design, and multirate signal processing, which are directly relevant to understanding the discrete wavelet transform and filter properties used in WNet.

*If you want all of it:* About 10.1 hours across the first 25 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [wavelets](https://www.youtube.com/playlist?list=PLx6YzsoZwiPoIbkGSgg7wgGBA-BJLAOd1) — Rodrigo Cunha · 9 videos · 2.0h across 9 episodes

**Watch only this:** Episodes 1 to 5: 'Easy Introduction to Wavelets' through 'An Example Application of the Discrete Wavelet Transform | Understanding Wavelets, Part 3' (about 1 hour 5 minutes total) — this subset covers the basics and discrete wavelet transform applications relevant to the paper.

*Why it unblocks this paper:* Rodrigo Cunha's 'wavelets' playlist is a concise, well-structured series that introduces wavelets, discrete wavelet transform, and their applications with clear visual intuition, making it ideal for quickly understanding the core concepts behind WNet's wavelet token mixing.

*If you want all of it:* About 2.0 hours across all 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the WNet paper, start with foundational knowledge on the discrete wavelet transform (DWT) and the standard Transformer self-attention mechanism, as these underpin the paper's methodology and motivation. Next, explore efficient Transformer architectures to contextualize the computational challenges WNet addresses. Then, study multiscale representation learning to grasp the theoretical basis for WNet's multiscale token mixing. Finally, focus on the core concept of WNet's discrete wavelet transform-based token mixing, including the authors' own talk for direct insights into their novel approach.

### Discrete wavelet transform lecture *(prerequisite)*
Understanding the discrete wavelet transform is essential because WNet's token mixing replaces self-attention with a multiscale DWT decomposition and recombination. This lecture provides a rigorous academic foundation on DWT, its mathematical properties, and multilevel decomposition, which are critical for grasping how WNet achieves efficient token mixing.

*How the paper uses it:* WNet leverages full-resolution discrete wavelet transform decomposition for token mixing, making DWT fundamentals crucial.

▶ [Lecture -20 Discrete Wavelet Transforms](https://www.youtube.com/watch?v=kp2zPGpKd74) — nptelhrd · 55:12 · 18y ago

### Transformer self-attention mechanism lecture *(prerequisite)*
A detailed understanding of the self-attention mechanism in Transformers is necessary to appreciate the computational challenges WNet aims to overcome. This lecture offers an advanced, code-inclusive explanation of self-attention, highlighting why its quadratic cost motivates alternative token mixing methods like WNet's wavelet approach.

*How the paper uses it:* WNet replaces the costly self-attention sublayers with wavelet token mixers to reduce computational cost.

▶ [Self Attention in Transformers | Deep Learning | Simple Explanation with Code!](https://www.youtube.com/watch?v=-tCKPl_8Xb8) — CampusX · 1:23:24 · 2y ago

### Efficient transformer architectures seminar *(prerequisite)*
This seminar provides a comprehensive overview of existing efficient Transformer variants, situating WNet within the broader research landscape. Understanding these approaches clarifies the novelty and advantages of WNet's wavelet-based token mixing compared to other efficient attention approximations.

*How the paper uses it:* WNet addresses efficiency limitations of existing attention approximations by using wavelet transforms for token mixing.

▶ [Lecture 20 - Efficient Transformers | MIT 6.S965](https://www.youtube.com/watch?v=RGUCmX1fvOE) — MIT HAN Lab · 1:18:09 · 3y ago

### Multiscale representation learning talk *(prerequisite)*
Multiscale representation learning is a key theoretical underpinning of WNet's approach, which decomposes sequences into multiple scales to capture local and global information. This lecture offers a rigorous academic perspective on representation learning at multiple scales, aiding comprehension of WNet's fusion and gating strategies.

*How the paper uses it:* WNet performs full-resolution multiscale decomposition and fusion of token representations for efficient mixing.

▶ [Stanford CS229 Machine Learning | Spring 2026 | Lecture 12: Representation Learning](https://www.youtube.com/watch?v=_kREM2UAiJ8) — Stanford Online · 1:15:57 · 2mo ago

### WNet discrete wavelet transform talk *(paper-talk search result; attribution unverified)*
This is the authors' own presentation directly related to their work on WNet, providing the most authoritative and detailed explanation of their discrete wavelet transform-based token mixing method. Watching this talk offers deep insights into the design choices, experimental setup, and results of the paper.

*How the paper uses it:* This video is a direct presentation by the paper's authors on their novel WNet method using discrete wavelet transforms.

▶ [Combining Discrete Wavelet and Cosine Transforms for Efficient Sentence Embedding](https://www.youtube.com/watch?v=cLOGvixELNY) — Computer Science & IT Conference Proceedings · 20:58 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the WNet paper, start by learning the basics of the Transformer self-attention mechanism, which WNet replaces. Next, build foundational knowledge of discrete wavelet transforms (DWT), essential for grasping WNet's token mixing approach. Then, explore efficient Transformer architectures to appreciate the motivation behind WNet. Finally, study the core concept of wavelet token mixing as used in WNet for efficient multiscale token interactions.

### Transformer self-attention mechanism lecture *(prerequisite)*
Self-attention is the key mechanism in Transformers that allows each token to weigh its relationship with every other token, enabling rich contextual understanding. This video explains how self-attention works, why it is computationally expensive, and sets the stage for understanding why alternatives like WNet are needed.

*How the paper uses it:* WNet replaces the costly self-attention mechanism with a wavelet-based token mixing method.

▶ [Self Attention in Transformers | Deep Learning | Simple Explanation with Code!](https://www.youtube.com/watch?v=-tCKPl_8Xb8) — CampusX · 1:23:24 · 2y ago

### Discrete wavelet transform lecture *(prerequisite)*
Discrete wavelet transforms decompose signals into components at multiple scales, capturing both local and global features efficiently. This video introduces DWT with clear visuals and explains multilevel decomposition, which is the foundation for WNet's multiscale token mixing.

*How the paper uses it:* WNet uses full-resolution discrete wavelet transform decomposition to mix tokens at multiple scales.

▶ [The Wavelet Transform for Beginners](https://www.youtube.com/watch?v=kuuUaqAjeoA) — Andrew Nicoll · 14:14 · 6y ago

### Efficient transformer architectures seminar *(prerequisite)*
Efficient Transformer architectures aim to reduce the quadratic cost of self-attention, enabling scalability to longer sequences. This seminar provides context on existing approaches and their trade-offs, helping understand the motivation behind WNet's wavelet-based method.

*How the paper uses it:* WNet addresses the efficiency limitations of standard self-attention and existing approximations.

▶ [Lecture 20 - Efficient Transformers | MIT 6.S965](https://www.youtube.com/watch?v=RGUCmX1fvOE) — MIT HAN Lab · 1:18:09 · 3y ago

### Wavelet token mixing method lecture
Wavelet token mixing replaces attention by decomposing token representations into multiscale components and recombining them, enabling efficient and effective token interactions. This video covers wavelet-based methods in neural networks, providing intuition relevant to WNet's approach.

*How the paper uses it:* WNet's core innovation is using wavelet token mixers to replace self-attention for efficient token mixing.

▶ [Wavelets: a mathematical microscope](https://www.youtube.com/watch?v=jnxqHcObNK4) — Artem Kirsanov · 34:29 · 4y ago

### WNet discrete wavelet transform talk *(paper-talk search result; attribution unverified)*
This talk by the paper's authors presents their novel method combining discrete wavelet transforms for efficient sentence embedding, directly explaining WNet's design and results. It offers the deepest insight into the paper's contributions from the creators themselves.

*How the paper uses it:* This is the authors' presentation of WNet, explaining their wavelet-based token mixing approach in detail.

▶ [Combining Discrete Wavelet and Cosine Transforms for Efficient Sentence Embedding](https://www.youtube.com/watch?v=cLOGvixELNY) — Computer Science & IT Conference Proceedings · 20:58 · 2y ago

## Already in your library

- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [Lec 15 | Introduction to Transformer: Self & Multi-Head Attention](https://www.youtube.com/watch?v=ofsTGSeakbE) — also for: Artifacts and Attention Sinks: Structured Approximations for Efficient Vision Transformers (Jianbo Shi)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention is all you need (Transformer) - Model explanation (including math), Inference and Training](https://www.youtube.com/watch?v=bCz4OMemCcA) — also for: Mechanisms of Prompt-Induced Hallucination in Vision–Language Models (Ritambhara Singh)
- [Introduction to Transformers | Transformers Part 1](https://www.youtube.com/watch?v=BjRVS2wTtcA) — also for: Comparative Analysis of Transformers to Support Fine-Grained Emotion Detection in Short-Text Data (David C. Wilson)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [What is Self Attention | Transformers Part 2 | CampusX](https://www.youtube.com/watch?v=XnGGmvpDLA0) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — also for: In-Context Algebra (David Bau)
- [Self-Attention Explained: How Transformers Actually Work (Full Visual Breakdown)](https://www.youtube.com/watch?v=vkhPtpUiLd8) — also for: Artifacts and Attention Sinks: Structured Approximations for Efficient Vision Transformers (Jianbo Shi)
- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformer Explainer- Learn About Transformer With Visualization](https://www.youtube.com/watch?v=csWluHwfsB8) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)
- [Lec 12. Representation Learning: Similarity-Based](https://www.youtube.com/watch?v=yUh1fEGGdl4) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)
- [Lec 15. Generative Models: Representation Learning Meets Generative Modeling](https://www.youtube.com/watch?v=8zzfcYIELdo) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core ideas of the WNet paper. Starting with a simple discrete wavelet transform (DWT) token mixing demonstration, you then implement a small-scale WNet variant and benchmark it against a baseline Transformer model. Finally, you extend WNet to address one of the paper's limitations by experimenting with causal decoding or longer sequence evaluation, showcasing deeper comprehension and research potential.

### Beginner — Discrete Wavelet Token Mixing Demo
*Effort: a weekend, ~8 hours*

You build a small Python script that applies a discrete wavelet transform (DWT) to a sequence of token embeddings and then reconstructs the sequence by inverse DWT. This project visualizes how wavelet decomposition and recombination can mix token information at multiple scales.

**Why it shows you understood the paper:** This project demonstrates your grasp of the fundamental wavelet token mixing mechanism that replaces self-attention in WNet, showing you understand the multiscale decomposition and full-resolution recombination concept.

**Grounded in:** Introduction of WNet, a family of linear-time wavelet token mixers with full-resolution multiscale decomposition.

**Tech stack:** Python 3.11, NumPy, PyWavelets

**Data:** Use synthetic token embeddings generated as random vectors to simulate input sequences.

**Build it:**

1. Generate a sequence of synthetic token embeddings as random vectors.
2. Apply discrete wavelet transform (e.g., Daubechies db10) to decompose the sequence into multiple scales.
3. Visualize the wavelet coefficients at each scale to understand token mixing.
4. Perform inverse discrete wavelet transform to reconstruct the original sequence.
5. Compare the reconstructed sequence to the original to verify correctness.

**Ships as:** A Python notebook or script with code, visualizations of wavelet coefficients, and explanations showing token mixing via DWT.

**Stretch goal:** Add a simple learned linear fusion layer to recombine scales and observe effects on reconstruction.

### Intermediate — WNet Token Mixer on Masked Language Modeling
*Effort: 1-3 weekends*

You implement a small Transformer encoder variant that replaces self-attention layers with a wavelet token mixer based on the paper's description. You train this model on a public masked language modeling dataset (e.g., a subset of WikiText-2) and compare its masked language modeling loss against a size-matched baseline Transformer with self-attention.

**Why it shows you understood the paper:** This project shows you can reimplement the core WNet method without official code, understand the computational benefits of wavelet token mixing, and evaluate its effectiveness on a real NLP task under controlled conditions.

**Grounded in:** Controlled experiments comparing WNet variants to size-matched BERT, FNet, and learnable Haar mixing baselines under identical training conditions.

**Tech stack:** Python 3.11, PyTorch, Transformers library (Hugging Face), NumPy

**Data:** Use WikiText-2 dataset as a publicly available substitute for masked language modeling pretraining data.

**Build it:**

1. Implement a wavelet token mixer module performing full-resolution discrete wavelet decomposition and learned recombination.
2. Replace self-attention layers in a small Transformer encoder (4 layers, hidden size 256) with the wavelet token mixer.
3. Prepare the WikiText-2 dataset for masked language modeling training.
4. Train both the WNet variant and a baseline Transformer with self-attention under identical conditions.
5. Evaluate and compare masked language modeling loss and training speed at sequence length 256.

**Ships as:** A GitHub repository with training scripts, model code, and a README reporting masked language modeling loss and speed comparisons.

**Stretch goal:** Add a hybrid variant with self-attention only in the last layer and compare its performance.

### Advanced — Scaling WNet for Causal Decoding and Long-Context Evaluation
*Effort: few weeks*

You extend your WNet implementation to support causal decoding by designing or adapting wavelet filters suitable for autoregressive generation. You then evaluate the model on a long-context language modeling benchmark (e.g., PG-19 or a long-sequence subset of WikiText) to assess efficiency and accuracy compared to a baseline Transformer.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate on wavelet filter design for causal tasks and to scale WNet to longer sequences and more diverse benchmarks.

**Grounded in:** Study focuses on English bidirectional encoders; causal decoding would require different filter designs. Extending evaluation to long-context tasks and causal decoding scenarios.

**Tech stack:** Python 3.11, PyTorch, Transformers library (Hugging Face), NumPy

**Data:** Use PG-19 or long-sequence subsets of WikiText as publicly available long-context language modeling datasets.

**Build it:**

1. Research and design wavelet filters or filter adaptations that support causal (autoregressive) token mixing.
2. Modify the WNet token mixer to implement causal discrete wavelet transform decomposition and recombination.
3. Integrate the causal WNet mixer into a Transformer decoder architecture.
4. Prepare a long-context language modeling dataset for training and evaluation.
5. Train and evaluate the causal WNet model and compare efficiency and perplexity against a baseline Transformer decoder.
6. Analyze results and document challenges and performance trade-offs.

**Ships as:** A comprehensive GitHub repository with code, training logs, evaluation scripts, and a detailed README discussing causal wavelet design and long-context performance.

**Stretch goal:** Experiment with learned wavelet filter parameters to optimize causal token mixing.
