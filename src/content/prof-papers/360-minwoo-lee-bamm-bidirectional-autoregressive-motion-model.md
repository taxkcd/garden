---
title: "360 · BAMM: Bidirectional Autoregressive Motion Model — Minwoo Lee"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-minwoo-lee"
source_hash: "0292486defa800d16e4c27d276a5f733171c3c9024fc9183286c59177d535798"
sequence: 360
generator: "outreach-garden: managed"
---

# 360 · BAMM: Bidirectional Autoregressive Motion Model

## At a glance

- **Professor:** Minwoo Lee
- **Institution:** UNC - Charlotte
- **Paper:** [BAMM: Bidirectional Autoregressive Motion Model](https://arxiv.org/pdf/2403.19435)
- **Authors:** Ekkasit Pinyoanuntapong, Muhammad Usama Saleem, Pu Wang, Minwoo Lee, Srijan Das, Chen Chen
- **Year:** 2024

## Paper overview

This paper presents BAMM, a new framework for generating 3D human motion from text descriptions. BAMM combines the strengths of autoregressive and masked generative models to produce high-quality, editable, and length-adaptive human motion sequences that align well with textual inputs. It outperforms existing methods on standard datasets and supports various motion editing tasks without extra training.

### Why it matters

**Research problem:** Generating realistic and semantically accurate 3D human motion sequences from natural language text is challenging due to the complexity of mapping textual descriptions to intricate motion patterns, and existing models face trade-offs between usability, generation quality, and editability.

**Why it matters:** Text-to-motion generation can revolutionize animation, gaming, VR/AR, and filmmaking by enabling intuitive creation of 3D human motions from simple text inputs, making content creation more accessible and efficient.

**Key contributions:**

- Introduction of the bidirectional autoregressive motion model that unifies generative masked and autoregressive modeling for text-to-motion generation.
- A motion tokenizer that encodes 3D human motion into discrete latent tokens enabling efficient modeling.
- A hybrid attention masking training strategy that allows the model to predict motion tokens conditioned on both past and future tokens.
- A cascaded motion decoding inference method that predicts motion length adaptively and refines motion quality.
- Demonstration of superior performance over state-of-the-art methods on HumanML3D and KIT-ML datasets.

## About the professor

**Minwoo Lee** — Associate Professor, Department of Computer Science and School of Data Science, UNC - Charlotte.

Research interests: machine learning algorithms for reinforcement learning, interpretational learning, transfer learning, continual learning, sparse learning, multiagent learning, fine control based policy development, robust knowledge augmentation

### Research links

- [Faculty/profile page](https://webpages.uncc.edu/mlee173)
- [Resolved homepage](http://charlotte.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=awrLUJ4AAAAJ&hl=en)
- [GitHub](https://github.com/lemin)
- [LinkedIn](https://www.linkedin.com/in/minwoojakelee)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand BAMM, start with foundational concepts: first learn about Vector Quantized Variational Autoencoders (VQ-VAE) to grasp how motion is tokenized into discrete latent codes. Next, study Transformer masked self-attention mechanisms and bidirectional attention to comprehend the hybrid attention masking strategy enabling bidirectional context. Then, review autoregressive sequence modeling fundamentals to understand BAMM's autoregressive prediction and length adaptation. Finally, focus on the BAMM paper's core concept through the authors' own seminar talk, which explains the novel bidirectional autoregressive motion model and its cascaded decoding approach.

### Vector Quantized Variational Autoencoders lecture *(prerequisite)*
Understanding VQ-VAE is essential because BAMM uses a motion tokenizer based on VQ-VAE to convert continuous 3D human motion into discrete tokens, enabling efficient and effective generative modeling. This lecture provides the theoretical and practical background on how discrete latent representations are formed.

*How the paper uses it:* BAMM's motion tokenizer encodes 3D human motion into discrete latent tokens using VQ-VAE.

▶ [Vector-Quantized Variational Autoencoders (VQ-VAEs)](https://www.youtube.com/watch?v=yQvELPjmyn0) — DeepBean · 1 year ago

### Transformer masked self-attention lecture *(prerequisite)*
Masked self-attention is the core mechanism behind BAMM's hybrid attention masking strategy, allowing the model to autoregressively predict motion tokens while capturing bidirectional dependencies. This lecture explains how masking works in transformers, especially causal and masked attention.

*How the paper uses it:* BAMM employs a masked self-attention transformer trained with hybrid attention masking combining unidirectional and bidirectional causal masks.

▶ [Understanding causal attention or masked self attention | Transformers for vision series](https://www.youtube.com/watch?v=CJSYo2Mw8R0) — Vizuara · 9 months ago

### Bidirectional attention mechanisms lecture *(prerequisite)*
Bidirectional attention mechanisms enable models to consider both past and future context, which is critical for BAMM's ability to refine motion sequences bidirectionally during decoding. This lecture covers the theory and implementation of bidirectional attention in transformer architectures.

*How the paper uses it:* BAMM captures dependencies from both past and future motion tokens using bidirectional attention.

▶ [Understanding BERT - Bidirectional Encoder Representations ...](https://www.youtube.com/watch?v=d-Wu5PkqEtY) — SH AI Academy · 11:04

### Autoregressive sequence modeling lecture *(prerequisite)*
Autoregressive modeling is fundamental to BAMM's approach for predicting motion tokens and adaptively determining sequence length. This lecture covers sequence modeling tasks and autoregressive models, providing the necessary background to understand BAMM's generation process.

*How the paper uses it:* BAMM autoregressively predicts motion tokens and motion length during generation.

▶ [L15.2 Sequence Modeling with RNNs](https://www.youtube.com/watch?v=5fdy-hBeWCI) — Sebastian Raschka · 5 years ago

### BAMM authors talk *(the paper's own talk)*
This seminar talk by a researcher presenting BAMM offers direct insight into the model's architecture, training strategy, and inference method. It is the most precise and authoritative resource to understand the novel bidirectional autoregressive motion model and its advantages over prior methods.

*How the paper uses it:* This talk directly explains the BAMM framework, its hybrid attention masking, cascaded decoding, and zero-shot editing capabilities.

▶ [[Seminar] BAMM: Bidirectional Autoregressive Motion Model](https://www.youtube.com/watch?v=2LaS6D8YyVs) — 강형엽 IIIXR LAB · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand BAMM, start by learning about autoregressive sequence modeling, which is fundamental to predicting motion tokens and sequence length. Then grasp transformer masked self-attention, the core mechanism enabling BAMM's hybrid attention masking strategy. Next, study vector quantized variational autoencoders (VQ-VAEs) to understand how BAMM tokenizes motion into discrete codes. After that, explore bidirectional attention mechanisms to see how BAMM captures dependencies from both past and future tokens. Finally, dive into the BAMM authors' talk for a direct explanation of their novel bidirectional autoregressive motion model.

### Autoregressive sequence modeling lecture *(prerequisite)*
Autoregressive models predict the next element in a sequence based on previous elements, making them essential for modeling time series and sequential data like human motion. Understanding this helps grasp how BAMM generates motion tokens step-by-step and adapts sequence length dynamically.

*How the paper uses it:* BAMM autoregressively predicts motion tokens and motion length, making autoregressive sequence modeling foundational.

▶ [Time Series Talk : Autoregressive Model](https://www.youtube.com/watch?v=5-2C4eO4cPQ) — ritvikmath · 8:54 · 7 years ago

### Transformer masked self-attention lecture *(prerequisite)*
Masked self-attention in transformers allows the model to attend only to certain parts of the sequence, typically past tokens, enabling autoregressive generation. This mechanism is key to BAMM's hybrid masking strategy that combines unidirectional and bidirectional attention.

*How the paper uses it:* BAMM uses a masked self-attention transformer with a hybrid attention masking strategy for motion token prediction.

▶ [Understanding causal attention or masked self attention | Transformers for vision series](https://www.youtube.com/watch?v=CJSYo2Mw8R0) — Vizuara · 9 months ago

### Vector Quantized Variational Autoencoders lecture *(prerequisite)*
VQ-VAEs convert continuous data into discrete latent tokens by quantizing encoder outputs, which enables efficient and discrete sequence modeling. This is crucial for BAMM’s motion tokenizer that encodes 3D human motion into discrete tokens.

*How the paper uses it:* BAMM’s motion tokenizer is based on VQ-VAE to convert raw motion into discrete tokens for modeling.

▶ [Vector-Quantized Variational Autoencoders (VQ-VAEs)](https://www.youtube.com/watch?v=yQvELPjmyn0) — DeepBean · 1 year ago

### Bidirectional attention mechanisms lecture *(prerequisite)*
Bidirectional attention mechanisms allow models to consider both past and future context simultaneously, improving understanding of sequences. BAMM leverages this to capture dependencies from both directions in motion sequences, enhancing generation quality and editability.

*How the paper uses it:* BAMM’s hybrid attention masking enables bidirectional context for motion token prediction and refinement.

▶ [Understanding BERT - Bidirectional Encoder Representations ...](https://www.youtube.com/watch?v=d-Wu5PkqEtY) — SH AI Academy · 11:04

### BAMM authors talk *(the paper's own talk)*
A direct presentation by the authors provides an overview of BAMM’s novel bidirectional autoregressive motion model, explaining its architecture, training, and inference strategies in their own words, which helps consolidate understanding of the paper’s contributions.

*How the paper uses it:* This talk directly explains BAMM’s framework and innovations in text-to-motion generation.

▶ [[Seminar] BAMM: Bidirectional Autoregressive Motion Model](https://www.youtube.com/watch?v=2LaS6D8YyVs) — 강형엽 IIIXR LAB · 1 year ago

## Already in your library

- [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — also for: HyperEvoGen: Exploring deep phylogeny using non-Euclidean variational inference (Xinghua Mindy Shi)
- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [I Visualised Attention in Transformers](https://www.youtube.com/watch?v=RNF0FvRjGZk) — also for: Cross-Image Attention for Zero-Shot Appearance Transfer (Hadar Averbuch-Elor)
- [Attention is all you need (Transformer) - Model explanation (including math), Inference and Training](https://www.youtube.com/watch?v=bCz4OMemCcA) — also for: Mechanisms of Prompt-Induced Hallucination in Vision–Language Models (Ritambhara Singh)
- [Stanford CS236: Deep Generative Models I 2023 I Lecture 3 - Autoregressive Models](https://www.youtube.com/watch?v=tRArbBf-AbI) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of BAMM's novel bidirectional autoregressive motion modeling for text-to-3D human motion generation. The beginner project focuses on implementing and visualizing the motion tokenizer concept from BAMM. The intermediate project involves reimplementing the core hybrid masked autoregressive transformer model on a smaller public dataset to reproduce key metrics. The advanced project extends BAMM by exploring one of its stated future directions: improving generation speed via parallelized cascaded decoding, demonstrating your ability to innovate beyond the paper.

### Beginner — Motion Tokenizer Visualization for 3D Human Motion
*Effort: a weekend, ~8 hours*

You build a small Python notebook that implements a simplified Vector Quantized Variational Autoencoder (VQ-VAE) to encode short 3D human motion sequences into discrete tokens and decode them back. You visualize the original and reconstructed motions to illustrate the tokenizer's effect.

**Why it shows you understood the paper:** This project shows you grasp the key BAMM contribution of converting continuous motion into discrete latent tokens, enabling efficient autoregressive modeling. A professor would see you understand the foundational data representation step critical to BAMM.

**Grounded in:** A motion tokenizer that encodes 3D human motion into discrete latent tokens enabling efficient modeling.

**Tech stack:** Python 3.11, PyTorch, matplotlib, numpy, jupyter notebook

**Data:** Use a small subset of publicly available 3D human motion data such as CMU Motion Capture dataset or simulate simple synthetic 3D joint trajectories to represent motion sequences.

**Build it:**

1. Implement a simple VQ-VAE architecture with encoder, codebook, and decoder modules in PyTorch.
2. Prepare or simulate short 3D motion sequences as input data.
3. Train the VQ-VAE to reconstruct input motions from discrete latent tokens.
4. Visualize original vs reconstructed motions using matplotlib or 3D plotting.
5. Document the tokenizer concept and its role in BAMM in the README.

**Ships as:** A Jupyter notebook with code, visualizations of motion reconstruction, and a README explaining the motion tokenizer's purpose and implementation.

**Stretch goal:** Add a simple interactive UI to edit discrete tokens and observe changes in decoded motion.

### Intermediate — Hybrid Masked Autoregressive Transformer for Text-to-Motion on HumanML3D Subset
*Effort: 2 weekends, ~20 hours*

You reimplement BAMM's core masked self-attention transformer with the hybrid attention masking strategy to autoregressively predict motion tokens conditioned on text embeddings. You train and evaluate on a small subset of the HumanML3D dataset, comparing R-precision or FID scores against a simple unidirectional baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to implement BAMM's novel hybrid attention masking and cascaded decoding approach, reproducing key quantitative metrics. It proves you understand the model architecture and training strategy central to BAMM.

**Grounded in:** A hybrid attention masking training strategy that allows the model to predict motion tokens conditioned on both past and future tokens.

**Tech stack:** Python 3.11, PyTorch, transformers library, numpy, jupyter notebook

**Data:** Use a publicly available subset of the HumanML3D dataset or a similar 3D motion-text paired dataset. If unavailable, simulate paired short text descriptions and corresponding simple motion token sequences.

**Build it:**

1. Implement the masked self-attention transformer with hybrid masking combining unidirectional and bidirectional causal masks.
2. Integrate a simple text encoder (e.g., pretrained sentence embeddings) to condition motion token prediction.
3. Prepare the dataset with paired text and motion token sequences (from beginner tokenizer or simulated).
4. Train the model autoregressively to predict masked motion tokens conditioned on text.
5. Evaluate using R-precision or FID metrics comparing to a unidirectional baseline model.
6. Write a README explaining the hybrid masking strategy and experimental results.

**Ships as:** A code repository with training scripts, evaluation metrics, and a report README demonstrating the hybrid masked autoregressive model's effectiveness.

**Stretch goal:** Add zero-shot temporal editing experiments such as motion inpainting or outpainting using the trained model.

### Advanced — Parallelized Cascaded Decoding for Faster BAMM Motion Generation
*Effort: 3+ weeks*

You extend BAMM by designing and implementing a parallelized version of its cascaded decoding process to improve generation speed while maintaining motion quality. You benchmark generation time and quality against the original sequential cascaded decoding on a standard dataset.

**Why it shows you understood the paper:** This project tackles a key BAMM limitation (generation speed) and explores a future direction proposed by the authors. It shows you can critically analyze and innovate on state-of-the-art methods, a hallmark of research potential.

**Grounded in:** Improving generation speed possibly by optimizing or parallelizing the cascaded decoding process.

**Tech stack:** Python 3.11, PyTorch, multiprocessing or async libraries, numpy, jupyter notebook

**Data:** Use the HumanML3D dataset or a comparable 3D human motion dataset for evaluation. If unavailable, use simulated motion token sequences.

**Build it:**

1. Study BAMM's original cascaded decoding: unidirectional autoregressive decoding followed by bidirectional refinement.
2. Design a parallel decoding scheme that allows simultaneous prediction of motion token segments or iterative refinement steps.
3. Implement the parallelized decoding in PyTorch, ensuring compatibility with the trained BAMM model architecture.
4. Benchmark generation speed and motion quality (e.g., FID, R-precision) against the original sequential decoding.
5. Analyze trade-offs between speed and quality, and document findings in a detailed report.
6. Prepare a README explaining the parallel decoding approach, implementation details, and experimental results.

**Ships as:** A GitHub repository with code implementing parallel cascaded decoding, benchmark scripts, and a comprehensive README discussing improvements and limitations.

**Stretch goal:** Explore integration of real-time user feedback during decoding to enable interactive motion editing.

_The authors released no code or datasets for BAMM; you will need to rely on public 3D human motion datasets like HumanML3D or CMU Mocap, or simulate data for prototyping._
