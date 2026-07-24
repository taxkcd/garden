---
title: "054 · Byte Latent Transformer: Patches Scale Better Than Tokens — Luke S. Zettlemoyer"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-luke-s-zettlemoyer"
source_hash: "c8671e5ad288e9ea3ee6ef683a80479a5314143bc84a58e41f370758ee364dc9"
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

To deeply understand the Byte Latent Transformer (BLT) paper, start with foundational knowledge on transformer architecture scaling, byte-level language modeling, cross-attention mechanisms, and self-supervised learning for language models. These prerequisites provide the necessary background on model design, raw byte modeling, and training paradigms. Then, focus on the core concept of the BLT itself through the authors' own detailed talks, which explain the novel dynamic entropy-based patching and scaling strategies that distinguish BLT from traditional token-based models.

## Recommended videos (in order)

### Transformer architecture scaling *(prerequisite)*
Understanding how transformer models scale in size and compute is foundational to grasping the scaling claims and efficiency improvements introduced by BLT. This includes insights into model size, inference costs, and architectural modifications that enable large-scale deployment.

*How the paper uses it:* BLT's scaling study and efficiency gains build upon foundational knowledge of transformer scaling behavior.

▶ [Stanford CS25: Transformers United V6 I Serving ...](https://www.youtube.com/watch?v=ZUdIsRZhWXI) — Stanford Online · 1:22:31

### Byte level language modeling *(prerequisite)*
Modeling raw bytes directly without tokenization is a core challenge addressed by BLT. This background covers the difficulties and motivations for byte-level models, including sequence length and computational cost considerations.

*How the paper uses it:* BLT operates directly on raw bytes, making byte-level language modeling essential to understanding its approach.

▶ [Stanford CS336 Language Modeling from Scratch | Spring ...](https://www.youtube.com/watch?v=lVynu4bo1rY) — Stanford Online · 1:29:14

### Cross attention mechanisms *(prerequisite)*
Cross-attention connects different levels of representation in transformer architectures. In BLT, it links byte-level and patch-level representations, enabling efficient encoding and decoding.

*How the paper uses it:* BLT uses cross-attention to integrate byte and patch representations within its architecture.

▶ [How Cross Attention Powers Translation in Transformers ...](https://www.youtube.com/watch?v=b40PL-sWmSM) — Super Data Science · 8:56

### Self supervised learning for language models *(prerequisite)*
Self-supervised learning underpins the training of large language models like BLT, enabling them to learn from raw data without explicit labels. Understanding this paradigm is crucial for appreciating BLT's training methodology.

*How the paper uses it:* BLT is trained using self-supervised learning techniques common in large language models.

▶ [LTI Colloquium: Self-Supervised Learning for Speech](https://www.youtube.com/watch?v=8ZTY-fUs53U) — Language Technologies Institute at Carnegie Mellon (LTI at CMU) · 1:08:07

### Byte Latent Transformer author talk *(the paper's own talk)*
The authors' own talks provide the most direct and detailed exposition of the BLT architecture, its motivations, design choices, and empirical results. These presentations are invaluable for advanced readers seeking deep insight into the paper.

*How the paper uses it:* These talks are by the BLT paper authors and cover the architecture and results in depth.

▶ [Byte Latent Transformer: Patches Scale Better Than Tokens](https://www.youtube.com/watch?v=NzMDCXT5ZcE) — Gabriel Mongaras · 45:05 · 1 year ago

## Already in your library

- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
