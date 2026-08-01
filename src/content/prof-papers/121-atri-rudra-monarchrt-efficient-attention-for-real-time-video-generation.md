---
title: "121 · MonarchRT: Efficient Attention for Real-Time Video Generation — Atri Rudra"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-atri-rudra"
source_hash: "1dacdd308c08262ee12265e249cb24e70a5162496735d3e0322d108246407091"
sequence: 121
generator: "outreach-garden: managed"
---

# 121 · MonarchRT: Efficient Attention for Real-Time Video Generation

## At a glance

- **Professor:** Atri Rudra
- **Institution:** University at Buffalo
- **Paper:** [MonarchRT: Efficient Attention for Real-Time Video Generation](https://arxiv.org/pdf/2602.12271v1)
- **Authors:** Krish Agarwal, Zhuoming Chen, Cheng Luo, Yongqi Chen, Haizhong Zheng, Xun Huang, Atri Rudra, Beidi Chen
- **Year:** 2026

## Paper overview

This paper introduces MonarchRT, a novel method to efficiently approximate the attention mechanism in real-time video generation models. It addresses the computational bottleneck caused by the quadratic cost of 3D self-attention in diffusion transformers by using a structured matrix factorization called Monarch parameterization. MonarchRT aligns the block structure with the spatiotemporal layout of video tokens and introduces tiled Monarch parameterization to improve expressiveness and efficiency. The method achieves high sparsity in attention computation without sacrificing video quality and enables real-time video generation on consumer GPUs.

### Why it matters

**Research problem:** Real-time video generation with diffusion transformers is limited by the high computational cost of 3D self-attention, especially in few-step, autoregressive regimes where errors accumulate and each step must process more information. Existing sparse attention approximations fail to capture the complex structure of video attention, leading to quality degradation or inefficiency.

**Why it matters:** Efficient and high-quality real-time video generation is crucial for interactive applications and advancing AI capabilities in video synthesis. Reducing computational cost while maintaining quality enables deployment on consumer hardware and broadens practical use cases.

**Key contributions:**

- Analysis showing 3D video attention combines positional periodicity, sparse semantic correspondences, and dense mixing, which sparse methods fail to capture.
- Identification of practical challenges in applying Monarch parameterization to video attention: block misalignment, limited flexibility, and high iterative refinement cost.
- Proposal of aligned Monarch block sizes that respect spatiotemporal video dimensions to preserve approximation quality.
- Introduction of tiled Monarch parameterization that generalizes Monarch and enables arbitrarily accurate approximations with controllable computation.
- Development of Monarch finetuning to reduce inference-time iterative refinement steps.

## About the professor

**Atri Rudra** — Katherine Johnson Chair in Artificial Intelligence, Department Chair, Professor, Department of AI and Society, Department of Computer Science & Engineering, University at Buffalo.

Research interests: Theoretical Computer Science, Algorithms and Theory, intersection of computing and society, structured linear algebra (with applications in machine learning), database algorithms, theory of error-correcting codes, algorithms and society

### Research links

- [Faculty/profile page](https://cse.buffalo.edu/~atri)
- [Resolved homepage](http://www.cse.buffalo.edu/faculty/atri/)
- [Google Scholar](http://scholar.google.com/citations?user=_e5H8IoAAAAJ&hl=en&oi=ao)
- [DBLP](https://dblp.org/pid/04/4980.html)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand MonarchRT, start with foundational knowledge of transformer self-attention mechanisms and the challenges of sparse attention methods in transformers, especially in the context of video data. Then, build understanding of 3D spatiotemporal attention unique to video models. Finally, focus on the core concept of MonarchRT itself, prioritizing any available talks by the paper authors or closely related academic presentations.

### Transformer self-attention mechanisms *(prerequisite)*
This section covers the fundamental principles of self-attention in transformers, which is essential to grasp before diving into efficient approximations like MonarchRT. The selected Stanford CS224N lecture provides a rigorous, graduate-level treatment of self-attention and transformers, suitable for advanced readers.

*How the paper uses it:* Understanding standard self-attention mechanisms is critical as MonarchRT proposes a novel efficient approximation for 3D self-attention in video diffusion transformers.

▶ [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — Stanford Online · 2 years ago

### Sparse attention methods in transformers *(prerequisite)*
This section explores existing sparse attention approximations and their trade-offs, which MonarchRT aims to improve upon. The ASAP Seminar Series talk 'The Sparse Frontier' offers a research-focused discussion on sparse attention trade-offs in transformer large language models, providing relevant context for MonarchRT's contributions.

*How the paper uses it:* MonarchRT addresses limitations of existing sparse attention methods in capturing complex video attention structures.

▶ [The Sparse Frontier: Sparse Attention Trade-offs in Transformer LLMs｜ASAP25](https://www.youtube.com/watch?v=UrtrfeCTl18) — ASAP Seminar Series · 1 year ago

### 3D spatiotemporal attention in video models *(prerequisite)*
This section focuses on the unique challenges of modeling attention across spatial and temporal dimensions in video data. The Microsoft Research talk on 'Grounding Spatio-temporal Language with Transformers' provides an academic perspective on spatiotemporal attention relevant to video models.

*How the paper uses it:* MonarchRT specifically targets efficient approximation of 3D spatiotemporal attention in video generation models.

▶ [Grounding Spatio-temporal Language with Transformers | JRC Workshop 2021](https://www.youtube.com/watch?v=2LUi4_csxhQ) — Microsoft Research · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand MonarchRT, start by grasping the fundamental transformer self-attention mechanism, which is the core building block of video diffusion models. Next, learn about sparse attention methods to appreciate the challenges and limitations in scaling attention efficiently. Then, explore 3D spatiotemporal attention to understand how video data's space and time dimensions complicate attention modeling. After that, study structured matrix factorization techniques that enable efficient approximation of attention matrices, leading up to the MonarchRT method itself.

### Transformer self-attention mechanisms *(prerequisite)*
Self-attention allows a model to weigh the importance of different parts of an input sequence when making predictions, enabling transformers to capture complex dependencies efficiently. Understanding this mechanism is essential as MonarchRT builds on approximating self-attention in video transformers.

*How the paper uses it:* MonarchRT approximates the 3D self-attention mechanism in video diffusion transformers to reduce computational cost.

▶ [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — Stanford Online · 2 years ago

### Sparse attention methods in transformers *(prerequisite)*
Sparse attention methods reduce the quadratic cost of standard attention by focusing computation on a subset of relevant tokens, but they often struggle to capture complex structures in video data. Learning about these methods highlights the limitations MonarchRT aims to overcome.

*How the paper uses it:* The paper shows existing sparse attention methods fail to capture the complex 3D attention structure in videos, motivating MonarchRT.

▶ [The Sparse Frontier: Sparse Attention Trade-offs in Transformer LLMs｜ASAP25](https://www.youtube.com/watch?v=UrtrfeCTl18) — ASAP Seminar Series · 1 year ago

### 3D spatiotemporal attention in video models *(prerequisite)*
Video data has both spatial and temporal dimensions, making attention modeling more complex than in text or images. Understanding how attention operates across space and time is key to appreciating MonarchRT's block alignment strategy.

*How the paper uses it:* MonarchRT aligns attention blocks with the spatiotemporal layout of video tokens to preserve structure and improve approximation quality.

▶ [Grounding Spatio-temporal Language with Transformers | JRC Workshop 2021](https://www.youtube.com/watch?v=2LUi4_csxhQ) — Microsoft Research · 5 years ago

### Structured matrix factorization for attention
Matrix factorization decomposes large matrices into products of smaller ones, enabling efficient approximations. Structured factorizations like Monarch parameterization exploit specific patterns to approximate attention matrices with high sparsity and accuracy.

*How the paper uses it:* MonarchRT uses Monarch structured matrix factorization to efficiently approximate 3D attention matrices in video generation.

▶ [Matrix Factorization - Numberphile](https://www.youtube.com/watch?v=wTUSz-HSaBg) — Numberphile · 6 years ago

## Already in your library

- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
