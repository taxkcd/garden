---
title: "369 · LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems — Mohammad Mohammadi Amiri"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mohammad-mohammadi-amiri"
source_hash: "44b6bb79a72ad76fb295aeed01c6ffeb64442f9c013addc23441852c5640917b"
sequence: 369
generator: "outreach-garden: managed"
---

# 369 · LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems

## At a glance

- **Professor:** Mohammad Mohammadi Amiri
- **Institution:** Rensselaer Polytechnic Institute
- **Paper:** [LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems](https://arxiv.org/abs/2605.22786)
- **Authors:** Sadia Asif, Mohammad Mohammadi Amiri, Momin Abbas, Prasanna Sattigeri, Karthikeyan Natesan Ramamurthy
- **Year:** 2026

## Paper overview

This paper addresses privacy risks in multi-agent systems where large language models communicate using latent key-value (KV) caches instead of text. These KV caches can unintentionally leak sensitive information. The authors propose LCGuard, a framework that transforms KV representations before sharing to reduce privacy leakage while maintaining task performance. LCGuard uses adversarial training to balance utility and privacy, showing strong results across multiple models and benchmarks.

### Why it matters

**Research problem:** How to enable efficient latent KV-based communication in multi-agent large language model systems while limiting the recoverability of agent-specific private information from shared KV representations.

**Why it matters:** Multi-agent LLM systems increasingly rely on latent communication for efficiency and richer information exchange, but KV caches encode sensitive inputs and intermediate states that can be reconstructed by adversaries, posing serious privacy risks that existing output-level safeguards do not address.

**Key contributions:**

- Identification of latent KV communication as a novel attack surface in multi-agent LLM systems.
- Proposal of LCGuard, a representation-level framework that transforms KV caches to regulate sensitive information flow.
- Introduction of a reconstruction-based leakage metric capturing recoverability of sensitive inputs from shared representations.
- Formulation of safe latent communication as a minimax optimization balancing utility and privacy.
- Empirical demonstration of LCGuard's effectiveness across multiple model families, benchmarks, and communication topologies.

## About the professor

**Mohammad Mohammadi Amiri** — Assistant Professor, Computer Science Department, Rensselaer Polytechnic Institute.

Research interests: machine learning, information and coding theory, wireless communications, privacy and security, distributed computing, and signal processing

### Research links

- [Faculty/profile page](https://sites.google.com/view/mmamiri)
- [Google Scholar](https://scholar.google.com/citations?user=jpJy6SEAAAAJ&hl=en)
- [ResearchGate](https://www.researchgate.net/profile/Mohammad-Amiri-32)
- [LinkedIn](https://www.linkedin.com/in/mohammad-mohammadi-amiri-6a910754)
- [Social profile](https://twitter.com/m_mamiri)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adversarial Representation Learning
**The paper assumes:** adversarial training, representation learning, minimax optimization, privacy-preserving machine learning
**Already in this field?** Skip this entirely if you already understand adversarial training methods for representation learning and their use in privacy contexts.

This background covers adversarial representation learning, which is central to understanding LCGuard's method of using adversarial training to transform latent KV caches for privacy-utility tradeoffs. The rigorous course provides a deep, structured foundation in deep learning concepts including adversarial methods, while the fast track offers a concise, focused introduction to adversarial machine learning concepts relevant to this paper. Choose the rigorous course for comprehensive mastery or the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [DeepMind x UCL | Deep Learning Lecture Series 2020](https://www.youtube.com/playlist?list=PLqYmG7hTraZCDxZ44o4p3N5Anz3lLRVZF) — Google DeepMind · 12 videos · 17.7h across 12 episodes

**Watch only this:** Lectures 5/12 (Optimization for Machine Learning), 9/12 (Generative Adversarial Networks), and 10/12 (Unsupervised Representation Learning), about 4.4 hours total — these cover optimization techniques, adversarial training principles, and representation learning essential to grasping LCGuard's approach.

*Why it unblocks this paper:* The DeepMind x UCL Deep Learning Lecture Series covers foundational and advanced deep learning topics including adversarial training and unsupervised representation learning, directly supporting understanding of LCGuard's adversarial minimax optimization framework for latent representation transformation.

*If you want all of it:* 17.7 hours across all 12 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Adversarial Machine learning](https://www.youtube.com/playlist?list=PLqY9uEMecYPXC4sCrNRJ5uHwmTr3FpTui) — Hugh Medal · 16 videos · 11.9h across 16 episodes

**Watch only this:** Episodes 1 (Lecture 16 | Adversarial Examples and Adversarial Training), 4 (A Friendly Introduction to Adversarial Machine Learning), and 11 (NIPS 2016 - Generative Adversarial Networks - Ian Goodfellow), about 2.2 hours total — these give a focused overview of adversarial training and GANs relevant to the paper's core method.

*Why it unblocks this paper:* This playlist on Adversarial Machine Learning by Hugh Medal provides a concise and clear introduction to adversarial examples and adversarial training, which are key to understanding the privacy-utility tradeoff and minimax optimization in LCGuard.

*If you want all of it:* 11.9 hours across all 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LCGuard paper, start by building foundational knowledge on the key technical components: latent key-value cache representations, multi-agent large language model systems, minimax optimization in machine learning, and adversarial training for privacy. These prerequisites provide the necessary background on the environment, mathematical framework, and techniques LCGuard builds upon. Finally, focus on the core concept of privacy-preserving latent communication and the authors' own talk to grasp the novel contributions and empirical results of LCGuard.

### Latent key-value cache representations *(prerequisite)*
Understanding the structure and role of latent key-value (KV) caches is essential since LCGuard operates by transforming these KV representations to protect privacy. These videos explain how KV caches store contextual and intermediate information in transformer models, which is the attack surface LCGuard defends.

*How the paper uses it:* LCGuard transforms KV caches before sharing to reduce privacy leakage while maintaining utility.

▶ [How DeepSeek Reduced KV Cache by 93% | Multi Head Latent Attention MLA](https://www.youtube.com/watch?v=9y-0rpEnPrg) — ExplainingAI · 19:54 · 2mo ago

### Multi-agent large language model systems *(prerequisite)*
Multi-agent LLM systems form the environment where latent communication occurs and privacy risks arise. Understanding how multiple LLM agents interact and communicate is critical to appreciating the problem LCGuard addresses.

*How the paper uses it:* LCGuard targets privacy risks in multi-agent LLM systems communicating via latent KV caches.

▶ [Multi-Agent Systems Powered by Large Language Models (Mar 2025)](https://www.youtube.com/watch?v=wUlhXUs4dbE) — AI Paper Slop · 1y ago

### Minimax optimization in machine learning *(prerequisite)*
LCGuard formulates privacy-utility tradeoff as a minimax optimization problem. Understanding the mathematical principles behind minimax optimization and its role in adversarial training is crucial to grasping LCGuard's training framework.

*How the paper uses it:* LCGuard uses a minimax optimization balancing task loss and reconstruction loss in adversarial training.

▶ [Jelena Diakonikolas - Structure in Min-Max Optimization](https://www.youtube.com/watch?v=zI202ceDtKU) — MTL MLOpt · 4y ago

### Adversarial training for privacy *(prerequisite)*
Adversarial training is the key technique LCGuard uses to prevent reconstruction of sensitive inputs from KV caches while preserving task utility. These videos provide rigorous explanations of adversarial training methods applied to privacy preservation.

*How the paper uses it:* LCGuard employs adversarial training where decoders try to reconstruct sensitive inputs and communication functions try to prevent it.

▶ [Lecture 9:  GANs and Adversarial Training](https://www.youtube.com/watch?v=h2E0Np2B-Hk) — John Baugh · 5mo ago

### Privacy-preserving latent communication
This concept is the core of LCGuard's contribution: transforming latent KV caches to reduce privacy leakage in multi-agent communication. Videos here discuss privacy-preserving techniques in machine learning and latent communication, providing context for LCGuard's approach.

*How the paper uses it:* LCGuard is a framework for safe latent communication by transforming KV caches to regulate sensitive information flow.

▶ [Privacy Preserving AI (Andrew Trask) | MIT Deep Learning Series](https://www.youtube.com/watch?v=4zrU54VIK6k) — Lex Fridman · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand LCGuard, starting with the basics of multi-agent large language model systems and latent key-value cache representations. It then builds intuition on adversarial training and minimax optimization, which underpin LCGuard's privacy-utility tradeoff. Finally, it covers the core idea of privacy-preserving latent communication, culminating in a clear understanding of LCGuard's approach to safe KV sharing in multi-agent systems.

### Multi-agent large language model systems *(prerequisite)*
Learn what multi-agent systems are and how large language models can collaborate by communicating and sharing information. This sets the stage for understanding why latent communication arises and why privacy risks matter in such environments.

*How the paper uses it:* LCGuard targets privacy risks in multi-agent LLM systems where agents share latent KV caches.

▶ [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — Shaw Talebi · 5mo ago

### Latent key-value cache representations *(prerequisite)*
Understand what KV caches are in transformer-based language models, how they store intermediate states, and why they are critical for efficient generation. This knowledge is essential to grasp the novel attack surface LCGuard protects.

*How the paper uses it:* KV caches encode sensitive inputs and intermediate states that can leak private information.

▶ [KV Cache - Explained](https://www.youtube.com/watch?v=8nD5DeNGNHU) — DataMListic · 2mo ago

### Adversarial training for privacy *(prerequisite)*
Get an intuitive grasp of adversarial training, where two models compete: one tries to reconstruct sensitive data, and the other tries to prevent it. This technique helps balance privacy and utility in LCGuard.

*How the paper uses it:* LCGuard uses adversarial training to learn transformations that reduce leakage while preserving task performance.

▶ [L-32: Privacy Preserving ML Techniques | Adversarial Machine Learning](https://www.youtube.com/watch?v=Sb3bo3PgKJ0) — The MaxX Academy · 1mo ago

### Minimax optimization in machine learning *(prerequisite)*
Learn the basics of minimax optimization, a mathematical framework where one player minimizes a loss while the other maximizes it. This underlies the adversarial training in LCGuard to balance privacy and utility.

*How the paper uses it:* LCGuard formulates safe latent communication as a minimax optimization problem.

▶ [Unit 2.4 | GAN Mathematics Explained | AAI | Minimax Loss, Generator vs Discriminator](https://www.youtube.com/watch?v=-tpFTRns4Q0) — Mayank Hinge Engg · 5mo ago

## Already in your library

- [KV Cache: The Trick That Makes LLMs Faster](https://www.youtube.com/watch?v=gpp57x_z_Jg) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [The KV Cache: Memory Usage in Transformers](https://www.youtube.com/watch?v=80bIUggRJf4) — also for: InferScale: GPU-Native KV Injection for Personalized LLM Serving (Prashant Pandey)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)
- [Multi Agent Systems Explained: How AI Agents & LLMs Work Together](https://www.youtube.com/watch?v=sWH0T4Zez6I) — also for: AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers’ Enquiries Globally (Arpita Biswas)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of LCGuard's approach to privacy-preserving latent KV communication in multi-agent LLM systems. The beginner project reproduces a core privacy leakage metric on synthetic KV data, the intermediate project implements the LCGuard adversarial training framework on a small-scale simulated multi-agent setup, and the advanced project explores extending LCGuard to heterogeneous multi-agent systems with incompatible latent spaces, addressing a key future direction of the paper.

### Beginner — Reproduce Reconstruction-Based Leakage Metric on Synthetic KV Representations
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates latent KV cache vectors and implements a simple decoder to reconstruct sensitive inputs from these vectors. You then compute the reconstruction-based leakage metric as defined in the paper to quantify privacy leakage. This reproduces the paper's key privacy metric on a toy example.

**Why it shows you understood the paper:** This project shows you understand the novel leakage metric introduced by LCGuard and the privacy risk latent KV caches pose, which is central to the paper's motivation and evaluation.

**Grounded in:** Introduction of a reconstruction-based leakage metric capturing recoverability of sensitive inputs from shared representations.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, PyTorch

**Data:** Synthetic latent KV cache vectors simulated as random tensors with embedded sensitive signals; no external dataset required.

**Build it:**

1. Simulate latent KV cache vectors as random tensors with embedded sensitive input signals.
2. Implement a simple neural decoder model in PyTorch to reconstruct sensitive inputs from KV vectors.
3. Train the decoder adversarially to minimize reconstruction loss.
4. Compute and report the reconstruction-based leakage metric as the decoder's reconstruction accuracy.
5. Visualize leakage metric results and explain implications for privacy risk.

**Ships as:** A Jupyter notebook with code, plots, and explanations demonstrating the reconstruction-based leakage metric on synthetic KV data.

**Stretch goal:** Add noise-based baseline methods (e.g., Gaussian noise) and compare their leakage metric to the decoder's performance.

### Intermediate — Implement LCGuard Adversarial Training on Simulated Multi-Agent KV Communication
*Effort: 2 weekends, ~20 hours*

You implement the LCGuard framework's core minimax adversarial training to transform KV caches before sharing in a small simulated multi-agent system. You train communication functions to maximize reconstruction loss of an adversarial decoder while preserving a simple task utility (e.g., classification accuracy). You compare LCGuard against a vanilla KV sharing baseline using the reconstruction-based leakage metric.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method from its description, balancing privacy and utility via adversarial training, and to evaluate it with the paper's key metrics.

**Grounded in:** LCGuard learns representation-level transformations applied to KV caches before communication, using an adversarial training framework where a decoder tries to reconstruct sensitive inputs and the communication functions try to prevent this while preserving task utility. This is formulated as a minimax optimization balancing task loss and reconstruction loss.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy

**Data:** Simulated multi-agent KV cache data with paired sensitive inputs and task labels generated synthetically to mimic latent communication; no public dataset available.

**Build it:**

1. Simulate a small multi-agent system with synthetic KV cache vectors and paired sensitive inputs and task labels.
2. Implement the LCGuard communication function as a neural network transformation applied to KV caches.
3. Implement an adversarial decoder network to reconstruct sensitive inputs from transformed KV caches.
4. Formulate and train the minimax adversarial objective balancing task utility (e.g., classification) and reconstruction loss.
5. Evaluate and compare reconstruction-based leakage and task accuracy against a vanilla KV sharing baseline.
6. Document results and discuss privacy-utility tradeoffs.

**Ships as:** A GitHub repo with code, training scripts, and a report showing LCGuard's effectiveness in reducing leakage while maintaining task performance on simulated data.

**Stretch goal:** Extend the simulation to include multiple communication topologies (sequential, hierarchical) and analyze compositional leakage effects.

### Advanced — Extend LCGuard to Heterogeneous Multi-Agent Systems with Incompatible Latent Spaces
*Effort: 3+ weeks*

You design and implement an extension of LCGuard that enables privacy-preserving latent KV communication across heterogeneous agents with different architectures and incompatible latent spaces. You propose a method to align or translate latent spaces before applying LCGuard transformations. You evaluate privacy leakage reduction and task utility preservation in this heterogeneous setting, addressing a key limitation and future direction of the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of LCGuard, demonstrating deep comprehension of the method and the challenges in real-world multi-agent systems with heterogeneous models.

**Grounded in:** Extending LCGuard to heterogeneous multi-agent systems with different architectures or incompatible latent spaces.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, scikit-learn

**Data:** Synthetic heterogeneous multi-agent KV cache data simulated with distinct latent spaces per agent; no public dataset available.

**Build it:**

1. Simulate heterogeneous agents with different latent KV cache vector distributions representing incompatible latent spaces.
2. Design and implement latent space alignment or translation modules (e.g., learned mappings or canonical correlation analysis).
3. Integrate LCGuard adversarial training framework on aligned latent representations to transform KV caches.
4. Train and evaluate the system on reconstruction-based leakage and task utility metrics.
5. Compare results to naive LCGuard without alignment and to vanilla KV sharing.
6. Document challenges, solutions, and implications for heterogeneous multi-agent privacy.

**Ships as:** A comprehensive GitHub repo with code, experiments, and a detailed report demonstrating LCGuard's extension to heterogeneous latent spaces with privacy and utility results.

**Stretch goal:** Investigate adaptive communication policies that dynamically decide when and how much latent information to share in heterogeneous systems.

_No authors' code or datasets are publicly available for this paper; all data must be simulated based on the paper's descriptions and benchmarks mentioned._
