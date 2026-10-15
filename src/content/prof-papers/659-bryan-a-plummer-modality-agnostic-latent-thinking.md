---
title: "659 · Modality-Agnostic Latent Thinking — Bryan A. Plummer"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bryan-a-plummer"
source_hash: "8685da89e2c322ac6e98a37d9aa633b900cf6de376c7529b479094e382080ed7"
sequence: 659
generator: "outreach-garden: managed"
---

# 659 · Modality-Agnostic Latent Thinking

## At a glance

- **Professor:** Bryan A. Plummer
- **Institution:** Boston University
- **Paper:** [Modality-Agnostic Latent Thinking](https://arxiv.org/pdf/2512.10941)
- **Authors:** Arijit Ray, Ahmed Abdelkader, Chengzhi Mao, Bryan A. Plummer, Ranjay Krishna, Leonidas Guibas, Wen-Sheng Chu, Kate Saenko
- **Year:** 2026

## Paper overview

This paper introduces a new method called Tokens, which are special latent tokens that can hold intermediate reasoning information in either image or text form without explicitly switching between modalities. This approach improves the ability of multimodal language models to reason about complex visual and spatial tasks, such as puzzles and perspective-taking, by allowing the model to think in a shared latent space. Tokens are trained in stages, first supervised with multimodal reasoning traces, then fine-tuned with only final answers, and finally refined with reinforcement learning. The method outperforms existing approaches that rely on text-only reasoning or explicit interleaving of image and text thoughts, while being computationally more efficient.

### Why it matters

**Research problem:** Existing multimodal models for visual reasoning struggle with brittleness, scalability, and reliance on costly or handcrafted datasets. They often require explicit switching between text and image modalities or expensive generation of intermediate images, which limits generalization and efficiency. There is a need for a simpler, more generalizable approach to multimodal reasoning that can handle complex spatial and visual tasks effectively.

**Why it matters:** Visual and spatial reasoning is essential for real-world tasks that involve understanding and manipulating visual information in space and time. Improving multimodal reasoning capabilities in AI models can lead to better performance on tasks like puzzle solving, perspective taking, and action reasoning, which are challenging for both humans and machines. Efficient and generalizable reasoning methods can enable broader applications of AI in vision-language understanding.

**Key contributions:**

- Introduction of modality-agnostic latent Tokens that unify visual and textual reasoning in a shared latent space without explicit modality switching.
- A three-stage training framework combining supervised warm-up, relaxed fine-tuning, and reinforcement learning refinement to optimize latent reasoning chains.
- Demonstration that Tokens improve visual and spatial reasoning accuracy by +3% on average and up to +16% on reasoning-intensive tasks compared to strong baselines.
- Empirical evidence that Tokens require far fewer latent tokens (20–40) than typical text or image reasoning approaches, leading to computational efficiency.
- Analysis showing that explicit switching between image and text reasoning is brittle and less effective than modality-agnostic Tokens.

## About the professor

**Bryan A. Plummer** — Senior Applied Scientist, Department of Computer Science, Boston University.

Research interests: artificial intelligence with a focus on multimodal machine learning, efficient neural networks, explainable and fair AI, and robust ML

### Research links

- [Faculty/profile page](https://bryanplummer.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** multimodal latent variable models
**The paper assumes:** latent variable models, multimodal representation learning, discrete latent embeddings, reinforcement learning for latent spaces
**Already in this field?** Skip this entirely if you already understand how latent variable models represent and learn shared multimodal embeddings and the basics of training discrete latent representations.

To understand the core methodology of the paper on modality-agnostic latent Tokens, a solid grasp of multimodal latent variable models is essential. The rigorous course option offers a deep, structured university-level lecture series covering latent variable models and multimodal extensions in detail, ideal for thorough comprehension. The fast track provides a concise, focused playlist on latent variable models that covers foundational concepts efficiently for readers pressed for time but still wanting a solid conceptual grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Deep Unsupervised Learning -- Berkeley Spring 2024](https://www.youtube.com/playlist?list=PLwRJQ4m4UJjPIvv4kgBkvu_uygrV3ut_U) — Pieter Abbeel · 14 videos · 24.3h across 14 episodes

**Watch only this:** Lectures 4 (Latent Variable Models and Variational AutoEncoders) and 12a (Multimodal Models) — about 3.5 hours total (~104 min + ~104 min). These cover the fundamentals of latent variable modeling and their multimodal extensions, which are crucial for grasping the paper's approach.

*Why it unblocks this paper:* This Berkeley Spring 2024 Deep Unsupervised Learning course includes dedicated lectures on latent variable models and multimodal models (notably Lectures 4 and 12), directly relevant to understanding modality-agnostic latent Tokens and their training. It is taught by Pieter Abbeel, a leading expert, ensuring authoritative and comprehensive coverage.

*If you want all of it:* Approximately 24.3 hours across all 14 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Latent Variable Models](https://www.youtube.com/playlist?list=PLcwuTwDw7_QXrMgSPGfHXfLBdfMFdJjd0) — Andrew Ainsworth · 26 videos · 26.4h across 26 episodes

**Watch only this:** Lectures 3 (LVM Basics 1) and 4 (Model Conceptualization Part 1) — about 2 hours total (~60 min + ~60 min). These provide a concise introduction to latent variable models and their conceptual framing.

*Why it unblocks this paper:* Andrew Ainsworth's 'Latent Variable Models' playlist offers clear, focused lectures on latent variable modeling basics and conceptual foundations, suitable for quickly building intuition about latent variables without the broader scope of a full deep learning course. It is well-structured and directly on-topic.

*If you want all of it:* Approximately 26.4 hours across all 26 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'Modality-Agnostic Latent Thinking' paper, start with foundational knowledge on latent variable models and reinforcement learning for language models, which underpin the Tokens' latent representation and training refinement. Next, explore multimodal reasoning in AI to grasp the broader context of reasoning across modalities. Finally, focus on the paper's core concept of modality-agnostic latent Tokens through the authors' own talk, which directly explains their novel approach and results.

### Latent Variable Models in Deep Learning *(prerequisite)*
Latent variable models provide the theoretical foundation for understanding hidden or unobserved variables that influence observed data, which is critical for grasping how modality-agnostic Tokens represent intermediate reasoning states in a shared latent space. This section covers rigorous academic lectures explaining the principles and training of latent variable models.

*How the paper uses it:* Tokens are discrete latent variables that hold intermediate reasoning information without explicit modality decoding.

▶ [CS 182: Lecture 18: Part 1: Latent Variable Models](https://www.youtube.com/watch?v=9KTrUea1apo) — RAIL · 27:51 · 5 yr ago

### Reinforcement Learning for Language Models *(prerequisite)*
Reinforcement learning is key to the third training stage of Tokens, where the model is refined to produce latent chains that causally contribute to correct answers. Understanding RL environments and methods for language models will clarify how GRPO improves reasoning performance.

*How the paper uses it:* The paper uses reinforcement learning refinement (GRPO) to optimize latent reasoning chains for better accuracy.

▶ [Let LLMs wander - An introduction to Reinforcement Learning Environments - Stefano Fiorucci](https://www.youtube.com/watch?v=h3LqWqVw1ak) — Python Italia · 1 mo ago

### Multimodal Reasoning in AI *(prerequisite)*
This section provides a foundational understanding of reasoning across multiple data modalities, highlighting challenges and existing approaches. It situates the paper's contribution within the broader landscape of multimodal AI research.

*How the paper uses it:* The paper addresses limitations in existing multimodal reasoning methods by proposing modality-agnostic Tokens.

▶ [Multimodal Reasoning: Survey & Roadmap](https://www.youtube.com/watch?v=z0u9kSuspbQ) — AI Research Roundup · 1 yr ago

### Modality-Agnostic Latent Thinking Paper Talk
Directly hearing the authors explain their novel Tokens method and results offers the most precise and comprehensive insight into the paper's contributions, training methodology, and empirical findings. This talk is essential for advanced readers to understand the nuances and innovations of the approach.

*How the paper uses it:* This is the authors' own recorded talk about their modality-agnostic latent Tokens method.

▶ [Mull-Tokens: Modality-Agnostic Latent Thinking (Dec 2025)](https://www.youtube.com/watch?v=UY68BxPfizU) — AI Paper Slop · 9 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper 'Modality-Agnostic Latent Thinking,' starting with latent variable models to grasp the idea of hidden representations. Next, it covers multimodal reasoning to understand how AI models handle multiple data types, followed by reinforcement learning basics relevant to the paper's training method. Finally, it presents the core concept of modality-agnostic latent Tokens, enabling unified reasoning across images and text without explicit modality switching.

### Latent Variable Models in Deep Learning *(prerequisite)*
Latent variable models represent hidden factors that influence observed data but are not directly visible. Understanding these models helps grasp how AI can encode complex information in compact, abstract forms, which is essential for the paper's Tokens concept.

*How the paper uses it:* Tokens are discrete latent representations that hold intermediate reasoning information in a shared latent space.

▶ [Understanding Latent Variables in 4 min](https://www.youtube.com/watch?v=JCc4A5nJoGc) — numiqo · 4:37 · 10 mo ago

### Multimodal Reasoning in AI *(prerequisite)*
Multimodal reasoning involves AI models processing and integrating information from different data types like images and text to make decisions. This foundational knowledge explains why combining modalities efficiently is challenging and important.

*How the paper uses it:* The paper improves multimodal reasoning by unifying visual and textual reasoning without explicit modality switching.

▶ [Multimodal Reasoning: Survey & Roadmap](https://www.youtube.com/watch?v=z0u9kSuspbQ) — AI Research Roundup · 1 yr ago

### Reinforcement Learning for Language Models *(prerequisite)*
Reinforcement learning teaches models to improve by trial and error, receiving feedback on their actions. This concept is key to understanding the paper's third training stage, where Tokens are refined to produce reasoning chains that causally lead to correct answers.

*How the paper uses it:* The paper uses reinforcement learning (GRPO) to refine Tokens for better reasoning performance.

▶ [Let LLMs wander - An introduction to Reinforcement Learning Environments - Stefano Fiorucci](https://www.youtube.com/watch?v=h3LqWqVw1ak) — Python Italia · 1 mo ago

### Modality-Agnostic Latent Tokens
Modality-agnostic latent Tokens are special discrete tokens that can internally represent reasoning steps in either image or text form without explicit conversion. This enables efficient, unified reasoning across modalities in a shared latent space.

*How the paper uses it:* This is the core innovation of the paper, enabling improved multimodal reasoning without brittle modality switching.

▶ [Mull-Tokens: Modality-Agnostic Latent Thinking (Dec 2025)](https://www.youtube.com/watch?v=UY68BxPfizU) — AI Paper Slop · 9 mo ago

## Already in your library

- [Multimodal Machine Learning | Introduction | Part 1 | CVPR ...](https://www.youtube.com/watch?v=helW1httyO8) — also for: Towards Effective Human-in-the-Loop Assistive AI Agents (Jeffrey Mark Siskind)
- [Lecture 1.1 - Introduction (CMU Multimodal Machine Learning ...](https://www.youtube.com/watch?v=DPkwjgaRvyI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [DeepMind x UCL | Deep Learning Lectures | 11/12 | Modern ...](https://www.youtube.com/watch?v=7Pcvdo4EJeo) — also for: Generative Modeling of Discrete Latent Structures via Dynamic Policy Gradients (Mohammed El-Kebir)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Chain-of-thought explained | Aravind Srinivas and Lex Fridman](https://www.youtube.com/watch?v=w9eQJdBRC5o) — also for: Improving Human Verification of LLM Reasoning through Interactive Explanation Interfaces (Anh Nguyen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to understand and apply the modality-agnostic latent Tokens method from the paper. Starting with a small-scale simulation of latent token reasoning, you then implement the core Tokens approach on a public visual reasoning dataset to compare against a baseline. Finally, you extend the method to a new modality or improve interpretability, addressing a key limitation of the paper.

### Beginner — Simulate Modality-Agnostic Latent Tokens for Visual Puzzle Reasoning
*Effort: a weekend, ~8 hours*

You build a simplified simulation of modality-agnostic latent Tokens as discrete vectors that hold intermediate reasoning states for a small visual puzzle task. Using Python and NumPy, you create a toy environment where latent tokens update iteratively to solve a spatial puzzle, without explicit modality switching between image and text.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core idea of latent Tokens as modality-agnostic discrete representations that serve as an internal scratchpad for reasoning, a key conceptual contribution of the paper.

**Grounded in:** Introduction of modality-agnostic latent Tokens that unify visual and textual reasoning in a shared latent space without explicit modality switching.

**Tech stack:** Python 3.11, NumPy

**Data:** Synthetic small-scale puzzle states you generate yourself to simulate visual reasoning steps.

**Build it:**

1. Implement a discrete latent token representation as a fixed-size vector of integers.
2. Design a simple spatial puzzle environment (e.g., a 3x3 tile rearrangement) with states and goals.
3. Create an iterative update function that modifies latent tokens based on puzzle state and previous tokens.
4. Simulate a reasoning chain by updating tokens over multiple steps to reach the puzzle solution.
5. Visualize token states and puzzle states at each step to illustrate latent reasoning.

**Ships as:** A Python notebook or script showing the latent token updates solving the puzzle, with comments explaining the modality-agnostic token concept.

**Stretch goal:** Add a simple baseline that uses text-only chain-of-thought reasoning on the same puzzle and compare token efficiency.

### Intermediate — Implement Modality-Agnostic Latent Tokens on CLEVR Visual Reasoning
*Effort: 2 weekends, ~20 hours*

You implement the paper's core modality-agnostic latent Tokens method by fine-tuning a smaller multimodal language model on the CLEVR visual reasoning dataset. You train discrete latent tokens appended to input to serve as intermediate reasoning states, then compare accuracy and token efficiency against a text-only chain-of-thought baseline.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main method and training stages on a public visual reasoning benchmark, demonstrating comprehension of the three-stage training framework and the efficiency gains of discrete latent tokens.

**Grounded in:** A three-stage training framework combining supervised warm-up, relaxed fine-tuning, and reinforcement learning refinement to optimize latent reasoning chains.

**Tech stack:** Python 3.11, PyTorch, Transformers, CLEVR dataset

**Data:** CLEVR dataset (public visual question answering dataset with spatial reasoning tasks) used as a substitute for the paper's spatial reasoning benchmarks.

**Build it:**

1. Set up a pretrained multimodal language model (e.g., a smaller open-source VL model) with capability to append discrete latent tokens.
2. Implement discrete latent tokens as learnable embeddings appended to model input.
3. Warm up training with supervised multimodal chain-of-thought traces (simulate or use CLEVR explanations if available).
4. Fine-tune using only final answers to optimize latent token trajectories.
5. Optionally implement a simple reinforcement learning step to refine token chains.
6. Evaluate accuracy on CLEVR questions and compare to a text-only chain-of-thought baseline.
7. Measure inference efficiency by counting latent tokens used versus text tokens.

**Ships as:** A GitHub repo with training scripts, evaluation results comparing Tokens vs text-only baseline, and a README explaining the method and findings.

**Stretch goal:** Add visualization of latent token trajectories to provide preliminary interpretability insights.

### Advanced — Extend Modality-Agnostic Tokens to Audio-Visual Reasoning with Interpretability
*Effort: 3+ weeks*

You extend the modality-agnostic latent Tokens approach to a new modality by integrating audio inputs alongside images and text for a multimodal reasoning task. You also develop methods to decode or interpret the latent tokens into human-understandable intermediate steps, addressing a key limitation of the paper.

**Why it shows you understood the paper:** This project tackles the paper's stated future directions and limitations by applying Tokens beyond image-text modalities and enhancing interpretability, demonstrating deep understanding and research-level initiative.

**Grounded in:** Extending the modality-agnostic Tokens approach to other modalities such as 3D point clouds, audio, and structured data; Developing methods to decode or interpret the latent Tokens to enhance transparency and explainability.

**Tech stack:** Python 3.11, PyTorch, Transformers, Librosa (audio processing), Public audio-visual reasoning dataset (e.g., AudioSet subset or VGGSound)

**Data:** A public audio-visual dataset with paired audio and images for reasoning tasks, such as a subset of VGGSound or AudioSet, used as a proxy for multimodal reasoning beyond image and text.

**Build it:**

1. Adapt the intermediate latent Tokens architecture to accept audio feature embeddings alongside image and text inputs.
2. Implement modality-agnostic latent tokens that can represent audio, visual, and textual information jointly.
3. Fine-tune the model on an audio-visual reasoning task with supervised warm-up and answer-only fine-tuning.
4. Develop a method to decode latent tokens into interpretable representations, e.g., by training a small decoder network to map tokens to text explanations or visualizations.
5. Evaluate reasoning accuracy improvements and interpretability quality compared to a baseline without Tokens.
6. Document challenges and insights on extending Tokens to new modalities and interpretability.

**Ships as:** A comprehensive GitHub repository with code, training scripts, interpretability visualizations, and a detailed README discussing the extension and results.

**Stretch goal:** Experiment with reinforcement learning refinement (GRPO) on the audio-visual Tokens to further improve reasoning fidelity.
