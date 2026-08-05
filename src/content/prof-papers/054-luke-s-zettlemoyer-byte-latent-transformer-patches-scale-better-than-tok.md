---
title: "054 · Byte Latent Transformer: Patches Scale Better Than Tokens — Luke S. Zettlemoyer"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-luke-s-zettlemoyer"
source_hash: "8a4ed5f442e3a6da890f1a9c259c3dede42c498456bea5be015085e8ea161422"
sequence: 54
generator: "outreach-garden: managed"
---

# 054 · Byte Latent Transformer: Patches Scale Better Than Tokens

## At a glance

- **Professor:** Luke S. Zettlemoyer
- **Institution:** University of Washington
- **Paper:** [Byte Latent Transformer: Patches Scale Better Than Tokens](https://arxiv.org/pdf/2412.09871)
- **Authors:** Artidoro Pagnoni, Ram Pasunuru, Pedro Rodriguez, John Nguyen, Benjamin Muller, Margaret Li, Chunting Zhou, Lili Yu, Jason Weston, Luke Zettlemoyer, Gargi Ghosh, Mike Lewis, Ari Holtzman, Srinivasan Iyer
- **Year:** 2024

## Paper overview

This paper introduces the Byte Latent Transformer (BLT), a novel large language model architecture that operates directly on raw bytes instead of tokens. BLT dynamically groups bytes into patches based on the entropy of the next byte, allowing the model to allocate computational resources more efficiently and robustly. The approach matches or surpasses the performance of token-based models like Llama 3 at scale, while improving inference efficiency and robustness to noise. BLT also enables new scaling strategies by simultaneously increasing model and patch size within fixed computational budgets.

### Why it matters

**Research problem:** Traditional large language models rely on fixed-vocabulary tokenization, which introduces biases, inefficiencies, and limitations such as sensitivity to input noise, domain and modality biases, and multilingual inequities. Training models directly on raw bytes is computationally expensive due to long sequence lengths, making it challenging to scale byte-level models to large sizes and datasets.

**Why it matters:** Tokenization heuristics limit model robustness, efficiency, and fairness across languages and domains. Overcoming these limitations can lead to more efficient, robust, and equitable language models that better handle noisy inputs and sub-word structures, and scale more effectively.

**Key contributions:**

- Introduction of BLT, a byte-level large language model architecture that dynamically allocates compute via entropy-based patching.
- First flop-controlled scaling study of byte-level models up to 8B parameters and 4T training bytes, matching token-based model performance.
- Demonstration of up to 50% inference flop savings with minor evaluation metric trade-offs.
- Unlocking a new scaling dimension allowing simultaneous increases in model and patch size under fixed inference budgets.
- Empirical evidence of improved robustness to noisy inputs and enhanced sub-word level understanding compared to token-based models.

## About the professor

**Luke S. Zettlemoyer** — Professor, Paul G. Allen School of Computer Science & Engineering, University of Washington.

### Research links

- [Faculty/profile page](https://homes.cs.washington.edu/~lsz/)
- [Identity evidence](https://www.cs.washington.edu/people/faculty/lsz)
- [Identity evidence](https://www.cs.washington.edu/people/faculty/lsz/)
- [Professor website](https://www.cs.washington.edu/people/faculty/luke-zettlemoyer/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Byte Latent Transformer (BLT) paper, start with foundational knowledge on Transformer architectures and scaling laws for language models, as these underpin the BLT design and its scaling insights. Next, study byte-level language modeling to grasp the challenges and prior work on modeling raw bytes without tokenization. Finally, focus on the core concept of the BLT itself, prioritizing the authors' own detailed talks and rigorous explainers to fully appreciate the novel entropy-based dynamic patching and architectural innovations.

### Transformer architectures *(prerequisite)*
Transformers are the fundamental neural architecture behind BLT and all modern large language models. Understanding their encoder-decoder structure, self-attention, and cross-attention mechanisms is essential to grasp how BLT modifies and extends these components.

*How the paper uses it:* BLT builds on the Transformer architecture by introducing a novel patching mechanism and cross-attention between byte and patch representations.

▶ [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — MIT OpenCourseWare · 1:14:35 · 5 months ago

### Scaling laws for language models *(prerequisite)*
Scaling laws describe how model performance improves with increases in model size, data, and compute, which is critical to understanding BLT's contributions in scaling both model and patch size efficiently. This background helps contextualize the paper's flop-controlled scaling studies and efficiency claims.

*How the paper uses it:* BLT demonstrates new scaling dimensions by simultaneously increasing model and patch size under fixed inference budgets, informed by scaling laws.

▶ [Stanford CS336 Language Modeling from Scratch | Spring ...](https://www.youtube.com/watch?v=vTfEyOyzV9E) — Stanford Online · 1:17:04

### Byte level language modeling *(prerequisite)*
This concept covers modeling raw byte sequences directly, without tokenization, which is the foundational challenge BLT addresses. Understanding prior byte-level models and their limitations sets the stage for appreciating BLT's dynamic patching and efficiency improvements.

*How the paper uses it:* BLT is a byte-level large language model that operates directly on raw bytes, overcoming inefficiencies of fixed tokenization.

▶ [BLT: Innovative Advances in Byte Level Language Models (Meta)](https://www.youtube.com/watch?v=SxB9dVQPsZM) — Machine tired of learning · 1 year ago

### Byte Latent Transformer talk *(the paper's own talk)*
This section focuses on the core paper topic: the BLT architecture itself. The authors' own talks provide the most authoritative and detailed exposition of their novel entropy-based patching, architectural design, and empirical results, making them indispensable for advanced understanding.

*How the paper uses it:* The authors' talks present the BLT architecture, its entropy-based dynamic patching, and scaling results in depth.

▶ [Byte Latent Transformer - BLT explained (Entropy of Next Byte ...](https://www.youtube.com/watch?v=KZfGgmtQFh0) — Discover AI · 37:31

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Byte Latent Transformer paper, start by building a foundation in Transformer architectures and the basics of byte-level language modeling, which are core to the BLT approach. Next, learn about cross-attention mechanisms that connect different representation levels in the model, followed by scaling laws that explain how model and patch sizes impact performance. Finally, focus on the paper's core innovation: entropy-based dynamic patching, which enables efficient and adaptive grouping of bytes for improved model efficiency and robustness.

### Transformer architectures *(prerequisite)*
Transformers are the fundamental neural network architecture behind modern large language models. They use self-attention mechanisms to process sequences in parallel, enabling efficient learning of complex dependencies in data.

*How the paper uses it:* BLT builds on the Transformer architecture by introducing a novel patching mechanism and cross-attention between byte and patch representations.

▶ [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — Google Cloud Tech · 9:11 · 4 years ago

### Byte level language modeling *(prerequisite)*
Byte-level language modeling involves training models directly on raw byte sequences instead of tokenized text, which avoids tokenization biases but introduces challenges due to longer sequences and computational cost.

*How the paper uses it:* BLT operates directly on raw bytes, dynamically grouping them into patches to overcome the inefficiencies of fixed tokenization.

▶ [Byte Latent Transformer (BLT) by Meta AI - A Tokenizer-free LLM](https://www.youtube.com/watch?v=HuEgzyNOg7Y) — AI Papers Academy · 10:07

### Cross attention mechanisms *(prerequisite)*
Cross-attention allows a model to connect and integrate information from two different sequences or representations, such as bytes and patches, by attending to one sequence while processing another.

*How the paper uses it:* BLT uses cross-attention to link byte-level and patch-level representations, enabling effective encoding and decoding between these granularities.

▶ [Self Attention vs Cross Attention in Transformers](https://www.youtube.com/watch?v=BxocebEC03E) — Alkademy Learning · 8:56

### Scaling laws for language models *(prerequisite)*
Scaling laws describe how increasing model size, dataset size, and compute affect language model performance, guiding efficient resource allocation and architecture design.

*How the paper uses it:* BLT demonstrates new scaling strategies by simultaneously increasing model and patch sizes within fixed computational budgets, improving efficiency and performance.

▶ [LLMs | Scaling Laws | Lec 11](https://www.youtube.com/watch?v=S7GOt85DWBs) — LCS2 · 1:29:45

### Byte Latent Transformer talk *(the paper's own talk)*
A detailed presentation by the authors explaining the BLT architecture, its motivation, design, and empirical results, providing direct insights into the paper's contributions.

*How the paper uses it:* This talk offers an in-depth overview of BLT from the creators themselves, complementing the foundational concepts with specific architectural and experimental details.

▶ [Byte Latent Transformer: Patches Scale Better Than Tokens (Paper Explained)](https://www.youtube.com/watch?v=loaTGpqfctI) — Yannic Kilcher · 1 year ago

## Already in your library

- [Information Theory, Lecture 1: Defining Entropy and Information - Oxford Mathematics 3rd Yr Lecture](https://www.youtube.com/watch?v=ScX2aBFyrVU) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Byte Latent Transformer: Patches Scale Better Than Tokens](https://www.youtube.com/watch?v=NzMDCXT5ZcE) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [EvaByte: Efficient Byte-level Language Models at Scale - Lin ...](https://www.youtube.com/watch?v=z3Nhg9DQzdU) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CS25: Transformers United V6 I Serving ...](https://www.youtube.com/watch?v=ZUdIsRZhWXI) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [How Cross Attention Powers Translation in Transformers ...](https://www.youtube.com/watch?v=b40PL-sWmSM) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Cross Attention | Method Explanation | Math Explained](https://www.youtube.com/watch?v=aw3H-wPuRcw) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the Byte Latent Transformer (BLT) paper. The beginner project focuses on reproducing the entropy-based dynamic patching mechanism on byte sequences, the intermediate project implements a simplified BLT-style patching and compares it to fixed tokenization baselines on a public dataset, and the advanced project explores an extension toward end-to-end learnable patching, addressing a key limitation noted by the authors.

### Beginner — Entropy-Based Byte Patching Prototype
*Effort: a weekend, ~8 hours*

You build a standalone script that takes raw byte sequences from text data and segments them into patches based on the entropy of the next byte predicted by a simple byte-level language model. This reproduces the core entropy-based dynamic patching mechanism described in the paper on a small scale.

**Why it shows you understood the paper:** This project shows you understand the paper's key innovation of entropy-based patching to dynamically group bytes, a fundamental step that enables BLT's efficiency and robustness.

**Grounded in:** Introduction of BLT, a byte-level large language model architecture that dynamically allocates compute via entropy-based patching.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook

**Data:** Use a small public text dataset such as a subset of WikiText-2 or any plain text file to extract raw byte sequences for patching.

**Build it:**

1. Load raw text data and convert it to byte sequences.
2. Train or implement a simple byte-level next-byte prediction model (e.g., a small RNN or Transformer) on the byte data.
3. Compute the entropy of the next byte prediction at each position in the sequence.
4. Segment the byte sequence into patches where entropy crosses a threshold, mimicking the paper's dynamic patching.
5. Visualize and report statistics on patch lengths and entropy distributions.

**Ships as:** A Jupyter notebook or Python script demonstrating entropy-based byte patching with plots and explanations in the README.

**Stretch goal:** Add a comparison of fixed-size patching versus entropy-based patching on the same data to highlight efficiency differences.

### Intermediate — Simplified Byte Latent Transformer Patching and Baseline Comparison
*Effort: 1-3 weekends, ~20 hours*

You implement a simplified version of the BLT's entropy-based patching mechanism integrated with a small Transformer encoder that processes patches instead of tokens. You compare this to a baseline Transformer trained on fixed-size byte patches or standard tokenization on a public dataset, evaluating bits-per-byte or cross-entropy loss.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method and empirically validate the efficiency and performance benefits of entropy-based patching compared to fixed tokenization.

**Grounded in:** First flop-controlled scaling study of byte-level models up to 8B parameters and 4T training bytes, matching token-based model performance.

**Tech stack:** Python 3.11, PyTorch, Transformers library, NumPy, Jupyter Notebook

**Data:** Use a publicly available text dataset such as WikiText-103 or OpenWebText as a substitute for the paper's training data.

**Build it:**

1. Implement entropy-based dynamic patching as in the beginner project.
2. Build a small Transformer encoder that takes patch embeddings as input.
3. Implement a baseline Transformer model trained on fixed-size byte patches or standard tokenization.
4. Train both models on the chosen dataset under similar compute budgets.
5. Evaluate and compare bits-per-byte or cross-entropy loss on a validation set.
6. Document results and discuss efficiency trade-offs.

**Verified links from the paper:**

- <https://github.com/facebookresearch/blt> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with training scripts, evaluation code, and a README reporting comparative results and insights.

**Stretch goal:** Incorporate cross-attention between byte-level and patch-level representations as described in BLT to improve performance.

### Advanced — End-to-End Learnable Patching for Byte Latent Transformer
*Effort: a few weeks, ~60+ hours*

You design and implement an extension of the BLT architecture that replaces the separately trained entropy model with an end-to-end learnable patching mechanism. This involves integrating patch boundary prediction into the main model training loop and evaluating its impact on efficiency and robustness.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of BLT's architecture and the challenges of dynamic patching, while contributing a novel extension.

**Grounded in:** Developing end-to-end learnable patching mechanisms to replace the separately trained entropy model.

**Tech stack:** Python 3.11, PyTorch, Transformers library, NumPy, Jupyter Notebook, Docker (optional)

**Data:** Use a public text dataset like WikiText-103 or OpenWebText for training and evaluation.

**Build it:**

1. Study the BLT architecture and its entropy-based patching implementation.
2. Design a differentiable patch boundary prediction module (e.g., using a boundary prediction head or reinforcement learning).
3. Integrate this module into the BLT training pipeline to jointly learn patching and language modeling.
4. Train the extended model on the dataset under controlled compute budgets.
5. Evaluate performance, inference efficiency, and robustness to noise compared to the original BLT with fixed entropy patching.
6. Document challenges, design decisions, and results in detail.

**Verified links from the paper:**

- <https://github.com/facebookresearch/blt> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repository with code, training scripts, evaluation notebooks, and a detailed README discussing the end-to-end patching approach and its empirical effects.

**Stretch goal:** Experiment with different patch boundary learning strategies or apply the method to multilingual or noisy input datasets to test robustness.
