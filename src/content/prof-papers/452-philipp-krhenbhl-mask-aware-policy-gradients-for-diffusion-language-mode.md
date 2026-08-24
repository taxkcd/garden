---
title: "452 · Mask-Aware Policy Gradients for Diffusion Language Models — Philipp Krähenbühl"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-philipp-krahenbuhl"
source_hash: "c910f6f3dc2990814d50ebc3fbf63cc4bb87baf4c22b5cfcb70ee181a28e401b"
sequence: 452
generator: "outreach-garden: managed"
---

# 452 · Mask-Aware Policy Gradients for Diffusion Language Models

## At a glance

- **Professor:** Philipp Krähenbühl
- **Institution:** University of Texas at Austin
- **Paper:** [Mask-Aware Policy Gradients for Diffusion Language Models](https://arxiv.org/abs/2607.15200)
- **Authors:** Haran Raajesh, Kulin Shah, Adam Klivans, Philipp Krähenbühl
- **Year:** 2026

## Paper overview

This paper introduces a new reinforcement learning method for masked diffusion language models (MDLMs), which are a type of language model that generates text by iteratively unmasking tokens in any order. The authors propose a policy gradient approach that optimizes both the token predictions and the order in which tokens are unmasked, leading to better performance on mathematical reasoning and code generation tasks.

### Why it matters

**Research problem:** Reinforcement learning methods for large language models rely on tractable log-likelihood estimation, which is straightforward for autoregressive models but intractable for masked diffusion language models (MDLMs) due to their flexible unmasking order. Existing methods approximate the log-likelihood by focusing only on token predictions and ignore the unmasking order, limiting performance.

**Why it matters:** MDLMs offer advantages like parallel decoding and flexible generation order, making them promising for efficient and high-quality text generation. Improving reinforcement learning methods for MDLMs can enhance their reasoning and code generation capabilities, which are critical for advancing AI applications.

**Key contributions:**

- Formalization of MDLM generation as a two-stage action MDP with a decomposed policy gradient into token and masking terms.
- Derivation of position log-probabilities from the model's logits without additional parameters or architectural changes.
- Introduction of a probabilistic remasking method enabling differentiable optimization of unmasking order.
- State-of-the-art results on mathematical reasoning and code generation benchmarks.
- Theoretical proof that ignoring the position component of the gradient can miss improvement directions.

## About the professor

**Philipp Krähenbühl** — Associate Professor, Department of Computer Science, University of Texas at Austin.

Research interests: Computer Vision, Machine learning and Computer Graphics. I’m particularly interested in deep learning, image, video and scene understanding.

### Research links

- [Faculty/profile page](http://www.philkr.net)
- [Resolved homepage](http://www.philkr.net/)
- [Google Scholar](http://scholar.google.com/citations?user=dzOd2hgAAAAJ)
- [DBLP](https://dblp.org/pid/43/7592.html)
- [GitHub](https://github.com/philkr/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Policy Gradient Reinforcement Learning
**The paper assumes:** policy gradient reinforcement learning, Markov decision processes, stochastic policy optimization
**Already in this field?** Skip this entirely if you already understand reinforcement learning policy gradient methods and Markov decision processes.

This background focuses on policy gradient reinforcement learning, which is essential for understanding the optimization techniques used in the paper on masked diffusion language models. The rigorous course option provides a deep, structured university-level treatment of reinforcement learning with a focus on policy gradients, while the fast track offers a concise, intuition-driven introduction suitable for quickly grasping the core concepts without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS234: Reinforcement Learning | Winter 2019](https://www.youtube.com/playlist?list=PLoROMvodv4rOSOPzutgyCTapiGlY2Nd8u) — Stanford Online · 15 videos

**Watch only this:** Lectures 8, 9, and 10 (Policy Gradient I, II, and III & Review), about 3.75 hours — these cover the fundamentals and advanced aspects of policy gradient methods necessary to understand the paper's approach.

*Why it unblocks this paper:* Stanford CS234 (Winter 2019) is a well-established, authoritative university course that covers policy gradient methods in depth, including multiple lectures specifically on policy gradients and their applications, which aligns closely with the paper's methodology.

*If you want all of it:* All 15 lectures, about 19 hours — for comprehensive understanding of reinforcement learning beyond just policy gradients.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [DeepMind x UCL | Introduction to Reinforcement Learning 2015](https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ) — Google DeepMind · 10 videos · 16.4h across 10 episodes

**Watch only this:** Lectures 1 and 7 (Introduction to Reinforcement Learning and Policy Gradient Methods), about 3.5 hours — these give a concise yet thorough introduction to policy gradients and the RL framework.

*Why it unblocks this paper:* DeepMind x UCL's Introduction to Reinforcement Learning (2015) is a highly regarded, visually clear series that includes a dedicated lecture on policy gradient methods, providing a solid conceptual overview in a shorter time frame.

*If you want all of it:* All 10 lectures, about 16.4 hours — for a broader understanding of reinforcement learning concepts.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Mask-Aware Policy Gradients for Diffusion Language Models,' start by building a strong foundation in reinforcement learning and policy gradient methods, as these are central to the paper's optimization approach. Next, gain a solid grasp of diffusion models in natural language processing, which underpin the masked diffusion language model framework. Then, study the Plackett–Luce model and probabilistic ranking, which enable the novel probabilistic remasking technique. Finally, focus on the paper's core concept of mask-aware policy gradients for diffusion language models, including related author talks and advanced research presentations.

### Reinforcement learning for sequence generation *(prerequisite)*
This section covers advanced reinforcement learning methods applied to sequence generation, essential for understanding the policy gradient approach used in the paper. The selected lecture by Graham Neubig from Carnegie Mellon University offers a comprehensive and rigorous treatment suitable for graduate-level readers.

*How the paper uses it:* The paper introduces a policy gradient method to optimize token predictions and unmasking order in masked diffusion language models.

▶ [Training Sequence Generation Models By Graham Neubig](https://www.youtube.com/watch?v=sMs5fEPB1yU) — Carnegie Mellon University Deep Learning · 1:20:41 · 6 years ago

### Diffusion models in natural language processing *(prerequisite)*
Understanding diffusion models applied to language tasks is foundational to grasping the masked diffusion language model framework. The seminar from AIDAS Lab provides a detailed and research-focused introduction to diffusion models and their extension to language.

*How the paper uses it:* The paper builds on masked diffusion language models, which generate text by iteratively unmasking tokens.

▶ [Mastering Diffusion Week 1: Introduction to DIffusion Models](https://www.youtube.com/watch?v=dQs8gQJ5rxI) — AIDAS Lab · 40:45 · 1 year ago

### Policy gradient methods in reinforcement learning *(prerequisite)*
Policy gradient methods are the core optimization technique used in the paper to jointly optimize token and position policies. The Stanford CS224R lecture by Chelsea Finn offers a rigorous and up-to-date academic treatment of policy gradients, ideal for advanced readers.

*How the paper uses it:* The paper uses standard policy gradient algorithms to optimize both token predictions and unmasking positions.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 3: Policy Gradients](https://www.youtube.com/watch?v=KCAOXd4IO9o) — Stanford Online · 1:02:38 · 8 months ago

### Plackett–Luce model and probabilistic ranking *(prerequisite)*
The Plackett–Luce model is a key probabilistic model enabling differentiable remasking of token positions in the generation process. The talk from SUM Conference on inference of Plackett–Luce models provides a focused and technical overview appropriate for researchers.

*How the paper uses it:* The paper replaces deterministic top-K remasking with a probabilistic remasking scheme based on the Plackett–Luce distribution derived from model logits.

▶ [Inference of imprecise Plackett–Luce models: application to label ranking](https://www.youtube.com/watch?v=UnIeiVvdwj4) — SUM Conference · 23:41 · 5 years ago

### Mask-aware policy gradients for diffusion language models
This section focuses on the paper's central contribution: the mask-aware policy gradient method that jointly optimizes token prediction and unmasking order in masked diffusion language models. The talk by Sasha Rush provides a concise yet detailed tutorial on masked diffusion language models, directly relevant to the paper's context.

*How the paper uses it:* The paper introduces a novel policy gradient approach for masked diffusion language models, improving performance on reasoning and code generation tasks.

▶ [Simple Diffusion Language Models](https://www.youtube.com/watch?v=WjAUX23vgfg) — Sasha Rush · 15:08 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper on Mask-Aware Policy Gradients for Diffusion Language Models. It starts with the basics of diffusion models in natural language processing, then covers reinforcement learning and policy gradient methods essential for optimizing generation policies. Next, it explains the Plackett–Luce probabilistic ranking model that enables differentiable token remasking, culminating in the core paper-specific method that jointly optimizes token prediction and unmasking order.

### Diffusion models in natural language processing *(prerequisite)*
Diffusion models are a class of generative models that iteratively refine data from noise to a clean sample. Understanding how diffusion applies to discrete data like text is key to grasping masked diffusion language models, which generate text by progressively unmasking tokens.

*How the paper uses it:* The paper builds on masked diffusion language models that generate text by iterative unmasking, so foundational knowledge of diffusion models in NLP is essential.

▶ [Mastering Diffusion Week 1: Introduction to DIffusion Models](https://www.youtube.com/watch?v=dQs8gQJ5rxI) — AIDAS Lab · 40:45 · 1 year ago

### Reinforcement learning for sequence generation *(prerequisite)*
Reinforcement learning (RL) methods optimize policies by learning from rewards, which is useful for sequence generation tasks where the output quality can be evaluated holistically. Understanding RL basics and how it applies to language model generation helps in grasping policy gradient optimization.

*How the paper uses it:* The paper uses reinforcement learning to optimize both token predictions and unmasking order in masked diffusion language models.

▶ [MIT 6.S191 (2025): Reinforcement Learning](https://www.youtube.com/watch?v=to-lHJfK4pw) — Alexander Amini · 1:02:00 · 1 year ago

### Policy gradient methods in reinforcement learning *(prerequisite)*
Policy gradient methods directly optimize the parameters of a policy by estimating gradients of expected rewards, enabling learning in complex action spaces. They are widely used in RL for sequence generation and are central to the paper's optimization approach.

*How the paper uses it:* The paper employs a policy gradient approach to jointly optimize token and position policies in masked diffusion language models.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring 2025 | Lecture 3: Policy Gradients](https://www.youtube.com/watch?v=KCAOXd4IO9o) — Stanford Online · 1:02:38 · 8 months ago

### Plackett–Luce model and probabilistic ranking *(prerequisite)*
The Plackett–Luce model is a probabilistic model for ranking items, assigning probabilities to permutations based on item scores. This model enables differentiable sampling of token positions for remasking, which is crucial for optimizing unmasking order.

*How the paper uses it:* The paper uses a Plackett–Luce distribution derived from model logits to probabilistically remask token positions, enabling differentiable policy gradients.

▶ [Section 4. Introduction to PlackettLuce](https://www.youtube.com/watch?v=5nqGc2_K9PA) — ClimMob Channel · 19:54 · 5 years ago

### Mask-aware policy gradients for diffusion language models
This concept covers the paper's core contribution: formalizing masked diffusion language model generation as a two-stage Markov decision process and jointly optimizing token prediction and unmasking order via a decomposed policy gradient. The probabilistic remasking scheme enables differentiable optimization leading to improved performance.

*How the paper uses it:* This is the central method introduced by the paper to improve masked diffusion language models by jointly optimizing token and position policies.

▶ [Simple Diffusion Language Models](https://www.youtube.com/watch?v=WjAUX23vgfg) — Sasha Rush · 15:08 · 2 years ago

## Already in your library

- [Optimal Inference Schedules for Masked Diffusion Models](https://www.youtube.com/watch?v=XYCtRnYrWL4) — also for: Noise Schedule Design for Diffusion Models: An Optimal Control Perspective (Weina Wang)
- [Diffusion Language Models: The Next Big Shift in GenAI](https://www.youtube.com/watch?v=8BTOoc0yDVA) — also for: HIVE: Hidden-Evidence Verification for Hallucination Detection in Diffusion Large Language Models (Weijie Zhao)
- [Stanford CS25: V1 I Decision Transformer: Reinforcement Learning via Sequence Modeling](https://www.youtube.com/watch?v=w4Bw8WYL8Ps) — also for: AdaCred: Adaptive Causal Decision Transformers with Feature Crediting (Saibal Mukhopadhyay)
- [MIT 6.S191 (2024): Reinforcement Learning](https://www.youtube.com/watch?v=8JVRbHAVCws) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [MIT 6.S191 (2018): Sequence Modeling with Neural Networks](https://www.youtube.com/watch?v=CznICCPa63Q) — also for: Guided Perturbation Sensitivity (GPS): Detecting Adversarial Text via Embedding Stability and Word Importance (Rakesh M. Verma)
- [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [An introduction to Reinforcement Learning](https://www.youtube.com/watch?v=JgvyzIkgxF0) — also for: GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes (Peter Stone)
- [Reinforcement Learning from scratch](https://www.youtube.com/watch?v=vXtfdGphr3c) — also for: DECOMPOSER: Learning to Decompile Symbolic Music to Programs (Chris Donahue)
- [Lecture 1 | Natural Language Processing with Deep Learning](https://www.youtube.com/watch?v=OQQ-W_63UgQ) — also for: Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children (Robert H. Sloan)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [RL Course by David Silver - Lecture 7: Policy Gradient Methods](https://www.youtube.com/watch?v=KHZVXao4qXs) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)
- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [What is Actor-Critic?](https://www.youtube.com/watch?v=oDdPcEanLwY) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Mask-Aware Policy Gradients method for masked diffusion language models (MDLMs). Starting with a beginner project that reproduces the core idea of probabilistic remasking on a toy example, you then implement the full position-aware policy gradient method on a small public dataset for intermediate depth. Finally, the advanced project extends the method to a new domain, addressing a stated future direction by applying it to multimodal diffusion generation, showing both theoretical and practical grasp.

### Beginner — Probabilistic Remasking Simulation for Masked Token Generation
*Effort: a weekend, ~8 hours*

You build a small Python simulation that implements the probabilistic remasking scheme using the Plackett–Luce distribution as described in the paper. The simulation will model a toy masked sequence of tokens and demonstrate how different remasking orders can be sampled probabilistically from logits, replacing deterministic top-K remasking.

**Why it shows you understood the paper:** This project shows you understand the key mechanism of replacing deterministic remasking with a differentiable probabilistic approach, a core contribution of the paper. It evidences comprehension of how the Plackett–Luce distribution is derived from model logits to enable policy gradient optimization.

**Grounded in:** Replacing deterministic top-K remasking with probabilistic remasking enables differentiable optimization.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic toy masked token sequences generated in code to simulate remasking steps.

**Build it:**

1. Implement a function to compute Plackett–Luce probabilities from a vector of logits.
2. Simulate a masked token sequence and generate logits for each masked position.
3. Sample remasking positions probabilistically according to the Plackett–Luce distribution.
4. Visualize sampled remasking orders and compare to deterministic top-K remasking.
5. Write a README explaining the connection to the paper's probabilistic remasking method.

**Ships as:** A Python notebook or script demonstrating probabilistic remasking sampling with plots and explanations linking to the paper's method.

**Stretch goal:** Add a simple policy gradient update step to adjust logits based on a toy reward signal to show differentiable optimization.

### Intermediate — Reimplementation of Mask-Aware Policy Gradient on GSM8K Subset
*Effort: 2 weekends, ~20 hours*

You reimplement the core mask-aware policy gradient method from the paper, including the two-stage MDP formalization and joint optimization of token and position policies. You apply it to a small subset of the GSM8K mathematical reasoning dataset (publicly available) to reproduce accuracy improvements over a baseline masked diffusion model with deterministic remasking.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's theoretical contributions into working code that jointly optimizes token predictions and unmasking positions, reproducing key results on a real benchmark. It shows grasp of policy gradient decomposition and probabilistic remasking in practice.

**Grounded in:** Formalization of MDLM generation as a two-stage action MDP with a decomposed policy gradient into token and masking terms; Jointly optimizing token and position terms achieves state-of-the-art results on reasoning benchmarks.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** A publicly available subset of the GSM8K dataset for mathematical reasoning, used as a proxy for the paper's benchmark.

**Build it:**

1. Implement the two-stage MDP framework with token prediction and position remasking actions.
2. Implement the Plackett–Luce based probabilistic remasking scheme derived from model logits.
3. Integrate a standard policy gradient algorithm (e.g., GSPO) to jointly optimize token and position policies.
4. Train the model on the GSM8K subset and evaluate accuracy compared to a baseline with deterministic remasking.
5. Document the code and results, linking back to the paper's key contributions and metrics.

**Ships as:** A Jupyter notebook or repo with code and results showing improved accuracy on GSM8K subset using mask-aware policy gradients versus baseline.

**Stretch goal:** Experiment with different temperature schedules in the Plackett–Luce distribution to observe effects on convergence.

### Advanced — Extending Mask-Aware Policy Gradients to Multimodal Diffusion Generation
*Effort: 3-4 weeks*

You extend the mask-aware policy gradient framework to a multimodal diffusion generation task, such as image captioning or text-to-image generation, addressing the paper's future direction. This involves adapting the two-stage MDP and probabilistic remasking to handle multimodal inputs and outputs, and integrating with a suitable multimodal diffusion model architecture.

**Why it shows you understood the paper:** This project evidences deep understanding by tackling a stated future direction and limitation of the paper, transferring the method beyond language-only MDLMs. It shows ability to adapt theoretical concepts to new domains and handle practical challenges of multimodal generation.

**Grounded in:** Extending the approach to multimodal diffusion language models and other generation tasks.

**Tech stack:** Python 3.11, PyTorch, Hugging Face Transformers, Jupyter Notebook

**Data:** A publicly available multimodal dataset such as MS COCO captions paired with images, used as a proxy for multimodal diffusion generation tasks.

**Build it:**

1. Select a multimodal diffusion model architecture compatible with masked diffusion generation.
2. Adapt the two-stage MDP formalization to multimodal token and position actions.
3. Implement probabilistic remasking for multimodal tokens using the Plackett–Luce distribution.
4. Integrate mask-aware policy gradient optimization jointly over token and position policies.
5. Train and evaluate on the multimodal dataset, comparing to a baseline without position-aware optimization.
6. Write detailed documentation explaining the adaptation and results, referencing the paper's future directions.

**Ships as:** A code repository with implementation and evaluation of mask-aware policy gradients applied to multimodal diffusion generation, with analysis and README.

**Stretch goal:** Incorporate adaptive temperature schedules for the Plackett–Luce distribution and measure impact on training efficiency and generation quality.

_The paper's authors did not release code for their method, so the intermediate and advanced projects require reimplementation from the paper's descriptions; GSM8K and MS COCO are public datasets used as proxies._
