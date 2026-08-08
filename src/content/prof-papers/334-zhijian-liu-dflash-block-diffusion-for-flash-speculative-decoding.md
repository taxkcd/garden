---
title: "334 · DFlash: Block Diffusion for Flash Speculative Decoding — Zhijian Liu"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhijian-liu"
source_hash: "430c845d34e20fa4a622d727b76ea6d22c88407a5f3d6c30cd26592ff4c9dace"
sequence: 334
generator: "outreach-garden: managed"
---

# 334 · DFlash: Block Diffusion for Flash Speculative Decoding

## At a glance

- **Professor:** Zhijian Liu
- **Institution:** Univ. of California - San Diego
- **Paper:** [DFlash: Block Diffusion for Flash Speculative Decoding](https://arxiv.org/abs/2602.06036)
- **Authors:** Jian Chen, Yesheng Liang, Zhijian Liu
- **Year:** 2026

## Paper overview

This paper introduces DFlash, a new method to speed up large language model (LLM) inference by combining diffusion models for fast parallel token drafting with autoregressive models for verification. DFlash uses a lightweight block diffusion model conditioned on deep context features from the target LLM to generate multiple tokens in parallel, significantly reducing latency while maintaining output quality. Experiments show DFlash achieves up to 6× speedup and outperforms prior speculative decoding methods.

### Why it matters

**Research problem:** Autoregressive LLMs generate tokens sequentially, causing slow inference and poor GPU utilization, especially for long reasoning tasks. Existing speculative decoding methods use autoregressive draft models that remain sequential and limit speedups. Diffusion LLMs allow parallel generation but typically underperform in quality and require many denoising steps, limiting practical speed.

**Why it matters:** Improving LLM inference speed and efficiency is critical for deploying powerful AI applications at scale, reducing serving costs, and enabling real-time usage. Current bottlenecks in sequential decoding hinder responsiveness and resource utilization.

**Key contributions:**

- Propose DFlash, a diffusion-based speculative decoding framework combining parallel drafting with autoregressive verification.
- Introduce KV injection of fused target model hidden features into every draft layer to improve conditioning and acceptance length.
- Design training strategies including loss weighting and randomized masked block sampling tailored for speculative decoding.
- Demonstrate DFlash achieves up to 6× speedup and 2.5× higher speedup than state-of-the-art EAGLE-3 across diverse tasks and models.
- Show DFlash generalizes well to longer contexts and different block sizes, enabling flexible deployment.

## About the professor

**Zhijian Liu** — Assistant Professor, Univ. of California - San Diego.

Research interests: making AI smaller, faster, and more efficient through full-stack innovations across algorithm, system, and application layers

### Research links

- [Faculty/profile page](https://zhijianliu.com)
- [Resolved homepage](https://zhijianliu.com/)
- [Lab website](https://z-lab.ai/)
- [Google Scholar](https://scholar.google.com/citations?user=mwzYYPgAAAAJ)
- [GitHub](https://github.com/zhijian-liu)
- [LinkedIn](https://www.linkedin.com/in/zhijianliu/)
- [Social profile](https://x.com/zhijianliu_)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the DFlash paper, start by building foundational knowledge on autoregressive language model inference, speculative decoding, diffusion models for sequence generation, and key-value cache conditioning in transformers. These prerequisites provide the necessary background on the baseline methods and technical mechanisms that DFlash innovates upon. Finally, focus on the core concept of DFlash itself by watching the authors' own talks and detailed presentations to grasp their novel block diffusion speculative decoding approach and its empirical benefits.

### Autoregressive language model inference *(prerequisite)*
Autoregressive inference is the standard sequential token generation method used by large language models, which DFlash aims to accelerate. Understanding this baseline is critical to appreciate the challenges of slow inference and the motivation for speculative decoding and diffusion drafting.

*How the paper uses it:* DFlash accelerates the sequential token generation process of autoregressive LLMs by introducing parallel block diffusion drafting.

▶ [Stanford CS236: Deep Generative Models I 2023 I Lecture 3 - Autoregressive Models](https://www.youtube.com/watch?v=tRArbBf-AbI) — Stanford Online · 2 years ago

### Speculative decoding in LLMs *(prerequisite)*
Speculative decoding is a core paradigm that speeds up LLM inference by using a draft model to propose tokens which are then verified by the target model. DFlash builds upon and significantly improves this approach by using diffusion models for drafting.

*How the paper uses it:* DFlash innovates on speculative decoding by replacing autoregressive draft models with a diffusion-based block drafting model.

▶ [Why using a dumb language model can speed up a smarter one: Speculative Decoding [Lecture]](https://www.youtube.com/watch?v=VnvhD8_E7AQ) — Jordan Boyd-Graber · 8 months ago

### Diffusion models for sequence generation *(prerequisite)*
Diffusion models are a generative modeling technique that enables parallel token generation through iterative denoising. Understanding diffusion models is essential to grasp how DFlash uses block diffusion to draft multiple tokens simultaneously.

*How the paper uses it:* DFlash employs a lightweight block diffusion model conditioned on target LLM features to generate token blocks in parallel.

▶ [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — AssemblyAI · 4 years ago

### Key-value cache conditioning in transformers *(prerequisite)*
Key-value cache conditioning is a technical mechanism used in transformers to efficiently reuse past computations. DFlash uses KV injection of fused target model hidden features into every draft model layer to improve conditioning and draft quality.

*How the paper uses it:* DFlash's KV injection mechanism conditions the diffusion draft model on the target model's deep context features for better acceptance length and quality.

▶ [KV Cache: The Trick That Makes LLMs Faster](https://www.youtube.com/watch?v=gpp57x_z_Jg) — Tales Of Tensors · 10 months ago

### DFlash paper talk *(the paper's own talk)*
This section contains the authors' own presentations and deep dives on DFlash, providing direct insights into their methodology, design choices, and experimental results. Watching these talks offers the most precise and detailed understanding of the paper's contributions.

*How the paper uses it:* These talks are by or about the paper authors' work on DFlash, explaining the novel block diffusion speculative decoding framework and its empirical advantages.

▶ [DFlash: Block Diffusion for Flash Speculative Decoding](https://www.youtube.com/watch?v=NXIiKnatDmA) — Emergent Mind · 5 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand DFlash, start by learning how autoregressive language models generate text sequentially, which is the baseline method DFlash aims to accelerate. Next, grasp speculative decoding, the core paradigm DFlash improves by combining drafting and verification. Then, build intuition on diffusion models for sequence generation, which enable DFlash's parallel token drafting. After that, understand key-value cache conditioning in transformers, the technical mechanism DFlash uses to inject target model context into the draft model. Finally, learn about DFlash's core innovation: block parallel token generation via diffusion, which achieves significant speedups.

### Autoregressive language model inference *(prerequisite)*
Autoregressive language models generate text one token at a time, conditioning each token on all previously generated tokens. This sequential process limits speed and hardware utilization during inference, especially for long sequences.

*How the paper uses it:* DFlash accelerates this baseline sequential token generation by replacing part of it with parallel drafting.

▶ [LARGE LANGUAGE MODELS: Autoregression at Inference explained.](https://www.youtube.com/watch?v=Ud6EJgdXwVY) — The Math of AI · 1 year ago

### Speculative decoding in LLMs *(prerequisite)*
Speculative decoding speeds up autoregressive generation by using a faster draft model to propose multiple tokens in parallel, which the main model then verifies. This approach balances speed and quality but prior methods still rely on sequential drafts.

*How the paper uses it:* DFlash builds on speculative decoding by introducing diffusion-based parallel drafting to improve speed and acceptance length.

▶ [Speculative Decoding explained](https://www.youtube.com/watch?v=p23SblAIoXc) — IndividualKex · 6 months ago

### Diffusion models for sequence generation *(prerequisite)*
Diffusion models generate data by iteratively denoising from random noise, allowing parallel generation of multiple tokens. While powerful, they usually require many steps and can underperform in quality compared to autoregressive models.

*How the paper uses it:* DFlash uses a lightweight block diffusion model conditioned on the target LLM's hidden states to draft multiple tokens in parallel efficiently.

▶ [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — AssemblyAI · 4 years ago

### Key-value cache conditioning in transformers *(prerequisite)*
Transformers use key-value caches to store intermediate attention computations for efficient autoregressive decoding. Injecting conditioning information into these caches can guide generation effectively.

*How the paper uses it:* DFlash injects fused hidden features from the target model into every draft model layer's key-value cache to improve draft quality and acceptance length.

▶ [KV Cache: The Trick That Makes LLMs Faster](https://www.youtube.com/watch?v=gpp57x_z_Jg) — Tales Of Tensors · 10 months ago

### Block parallel token generation
Block parallel token generation produces multiple tokens simultaneously in a block rather than one-by-one, greatly reducing latency. Diffusion models enable this by refining entire token blocks in parallel.

*How the paper uses it:* DFlash's core innovation is using block diffusion to generate token blocks in parallel for fast speculative drafting, achieving up to 6× speedup.

▶ [Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models (ICLR 2025)](https://www.youtube.com/watch?v=oZozNrtbg-o) — Ribbit Ribbit - Discover Research The Fun Way · 1 year ago

### DFlash paper talk *(the paper's own talk)*
A concise walkthrough of the DFlash method, its motivation, technical design, and experimental results, providing a direct understanding from the authors' perspective.

*How the paper uses it:* This video explains the full DFlash approach, tying together all concepts into the final system.

▶ [DFlash Deep Dive: Block Diffusion Makes LLM Inference 6x Faster](https://www.youtube.com/watch?v=0p3k6wICfis) — Enchanted Storytime · 4 months ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to understand and demonstrate the core ideas of the DFlash paper. Starting with a small-scale simulation of block diffusion token drafting, you progress to implementing a simplified diffusion-based speculative decoding method and benchmarking it against a baseline. The advanced project tackles a stated limitation by exploring adaptive block-size scheduling during inference, extending the paper's approach and opening a path for research discussion.

### Beginner — Simulate Block Diffusion Token Drafting
*Effort: a weekend, ~8 hours*

You build a simplified Python simulation of the block diffusion process for token drafting as described in DFlash. This involves implementing a toy diffusion model that generates blocks of tokens in parallel conditioned on a fixed context embedding, and visualizing the acceptance length or quality metric over iterations.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core mechanism of block diffusion for parallel token generation and the importance of conditioning on target model features, a key contribution of the paper.

**Grounded in:** DFlash predicts the next token block using a block-level diffusion process. All masked positions within a block are decoded in parallel in a single forward pass... this block-wise parallel generation substantially reduces drafting latency and achieves significantly higher hardware utilization.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic token sequences generated randomly to simulate token blocks; no external dataset required.

**Build it:**

1. Implement a toy diffusion process that iteratively denoises a masked token block in parallel.
2. Condition the diffusion model on a fixed context vector representing target model features.
3. Simulate multiple diffusion steps and track token acceptance length or quality metrics.
4. Visualize the progression of token block quality or acceptance length over diffusion iterations.
5. Write a README explaining the block diffusion concept and how your simulation relates to DFlash.

**Ships as:** A Python notebook or script simulating block diffusion token drafting with plots showing acceptance length or quality over iterations, accompanied by a clear README.

**Stretch goal:** Add a simple weighting scheme to emphasize early tokens during training simulation, reflecting the paper's loss weighting strategy.

### Intermediate — Implement Diffusion-Based Speculative Decoding
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of DFlash's diffusion-based speculative decoding pipeline using a small pretrained autoregressive language model (e.g., GPT-2 small). You build a lightweight block diffusion draft model conditioned on hidden states extracted from the target model, generate token blocks in parallel, and verify them autoregressively. You compare speed and acceptance length against standard greedy decoding.

**Why it shows you understood the paper:** This project shows you can reimplement the core method of DFlash from the paper's description, including KV injection conditioning and block parallel generation, and evaluate its speedup and quality trade-offs.

**Grounded in:** DFlash employs a lightweight block diffusion model as a speculative drafter that generates blocks of tokens in parallel conditioned on fused hidden features extracted from multiple layers of the target autoregressive LLM. This conditioning is injected into every draft model layer's key-value cache, enabling high-quality drafts.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), NumPy

**Data:** Use publicly available text datasets such as WikiText-2 or OpenWebText as a substitute for the paper's evaluation benchmarks.

**Build it:**

1. Load a pretrained autoregressive language model (e.g., GPT-2 small) and extract hidden states from multiple layers.
2. Implement a lightweight block diffusion draft model conditioned via KV injection on fused hidden states.
3. Generate token blocks in parallel using the diffusion draft model.
4. Implement an autoregressive verification step to accept or reject drafted tokens.
5. Measure and compare inference speed and acceptance length against standard greedy decoding.
6. Document your implementation details, evaluation metrics, and results in a README.

**Ships as:** A PyTorch codebase implementing diffusion-based speculative decoding on a small LLM with benchmark results comparing speed and acceptance length to greedy decoding, plus documentation.

**Stretch goal:** Experiment with different block sizes and draft model depths to observe their effect on acceptance length and speedup.

### Advanced — Adaptive Block-Size Scheduling for Diffusion Speculative Decoding
*Effort: 3+ weeks*

You extend the DFlash speculative decoding framework by implementing adaptive block-size scheduling during inference. Your system dynamically adjusts the token block size based on compute constraints or acceptance statistics without retraining the draft model. You evaluate the impact on speedup and acceptance length on a public dataset and discuss trade-offs.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, demonstrating your ability to innovate beyond the original method and engage in research-level problem solving.

**Grounded in:** Adaptive block-size scheduling during inference is left for future work.

**Tech stack:** Python 3.11, PyTorch, Transformers (HuggingFace), NumPy, Matplotlib

**Data:** Use publicly available text datasets such as WikiText-2 or OpenWebText for evaluation.

**Build it:**

1. Reimplement or reuse your intermediate diffusion-based speculative decoding codebase.
2. Design and implement a mechanism to dynamically adjust block sizes during inference based on acceptance length or latency targets.
3. Modify the KV injection conditioning or draft model input handling to support variable block sizes without retraining.
4. Evaluate the adaptive scheduler's impact on speedup, acceptance length, and output quality compared to fixed block sizes.
5. Visualize trade-offs and write a detailed report discussing challenges and potential improvements.

**Ships as:** An extended diffusion speculative decoding implementation with adaptive block-size scheduling, evaluation results, visualizations, and a comprehensive README discussing the approach and findings.

**Stretch goal:** Explore joint training of the diffusion draft model with the target model to improve alignment under adaptive scheduling.

_The paper's authors have not released code or datasets for DFlash; you will need to reimplement the core method from the paper's descriptions and use publicly available datasets such as WikiText-2 as substitutes for evaluation._
