---
title: "054 · Byte Latent Transformer: Patches Scale Better Than Tokens — Luke S. Zettlemoyer"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-luke-s-zettlemoyer"
source_hash: "aaa69e9b0c0d7eea2d5d905ed782df9f92eab890594a81a6fe75dbcf5d2664a5"
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

To deeply understand the Byte Latent Transformer (BLT) paper, start with foundational concepts including byte-level language models, transformer architectures for long sequences, cross-attention mechanisms, and scaling laws for large language models. Then, explore entropy-based dynamic patching as it is central to BLT's novel patching approach. Finally, focus on the core concept of the Byte Latent Transformer itself through the authors' own talks and detailed explainers to grasp the architecture, scaling strategies, and empirical results.

## Recommended videos (in order)

### Byte level language models *(prerequisite)*
Understanding how language models operate directly on raw byte sequences without tokenization is foundational to BLT. This includes challenges of long sequence lengths and efficiency considerations. The selected seminar provides a detailed, research-level treatment of efficient byte-level language models at scale.

*How the paper uses it:* BLT builds on byte-level modeling to avoid tokenization biases and inefficiencies.

▶ [EvaByte: Efficient Byte-level Language Models at Scale - Lin ...](https://www.youtube.com/watch?v=z3Nhg9DQzdU) — ASAP Seminar Series · 1:36:21

### Transformer architectures for long sequences *(prerequisite)*
Transformers face computational and memory challenges when processing long sequences such as raw bytes. This lecture covers advanced transformer design choices and complexity considerations relevant to BLT's architecture, which handles long byte sequences efficiently.

*How the paper uses it:* BLT's architecture is designed to handle long byte sequences efficiently using transformer variants.

▶ [CMU Advanced NLP Fall 2024 (13): Long Sequence Models](https://www.youtube.com/watch?v=t_FZAGUjbks) — Graham Neubig · 57:11

### Cross attention mechanisms *(prerequisite)*
Cross-attention connects different representation levels in transformer architectures. Understanding how cross-attention works is critical to grasping BLT's mechanism that links byte-level and patch-level representations via dynamic masking.

*How the paper uses it:* BLT uses cross-attention to connect byte-level and patch-level representations in its architecture.

▶ [Cross Attention | Method Explanation | Math Explained](https://www.youtube.com/watch?v=aw3H-wPuRcw) — Outlier · 13:06

### Scaling laws for large language models *(prerequisite)*
Scaling laws describe how model performance and efficiency evolve with size and compute. This lecture provides a rigorous overview of scaling paradigms, essential for understanding BLT's novel scaling strategies involving simultaneous increases in model and patch size.

*How the paper uses it:* BLT introduces new scaling dimensions under fixed inference budgets, informed by scaling laws.

▶ [Jason Wei: Scaling Paradigms for Large Language Models](https://www.youtube.com/watch?v=yhpjpNXJDco) — Mayur Naik · 40:10

### Entropy based dynamic patching
Entropy-based dynamic patching is the core innovation in BLT, enabling adaptive grouping of bytes into patches based on the predicted entropy of the next byte. This concept is crucial for understanding how BLT allocates compute efficiently and robustly.

*How the paper uses it:* BLT segments byte sequences into patches dynamically using entropy of next-byte predictions.

▶ [Information Theory, Lecture 1: Defining Entropy and Information - Oxford Mathematics 3rd Yr Lecture](https://www.youtube.com/watch?v=ScX2aBFyrVU) — Oxford Mathematics · 53:46 · 1 year ago

### Byte Latent Transformer author talk *(the paper's own talk)*
The authors' own talks provide the most direct and detailed exposition of the BLT architecture, its motivation, design, and empirical results. These presentations are invaluable for advanced readers seeking deep insights straight from the creators.

*How the paper uses it:* These talks present the BLT architecture and results directly from the paper's authors.

▶ [Byte Latent Transformer: Scaling LLMs Beyond Tokens](https://www.youtube.com/watch?v=RxAEAlgUBIw) — AI Research Roundup · 1 year ago

## Already in your library

- [How Cross Attention Powers Translation in Transformers ...](https://www.youtube.com/watch?v=b40PL-sWmSM) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
