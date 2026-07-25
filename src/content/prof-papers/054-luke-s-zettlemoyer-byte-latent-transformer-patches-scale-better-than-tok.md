---
title: "054 · Byte Latent Transformer: Patches Scale Better Than Tokens — Luke S. Zettlemoyer"
date: 2026-07-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-luke-s-zettlemoyer"
source_hash: "f081a625cb51028f0bf16c6b2d716a151123635c4545a1ccfd8772e96aeac5f2"
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
