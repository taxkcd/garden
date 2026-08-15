---
title: "391 · Attention Smoothing Is All You Need for Unlearning — Dongxiao Zhu"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dongxiao-zhu"
source_hash: "d5ebb3df3c156ccff873c9b9f7cf391016fe5077e30582876862a2f5b584d5c4"
sequence: 391
generator: "outreach-garden: managed"
---

# 391 · Attention Smoothing Is All You Need for Unlearning

## At a glance

- **Professor:** Dongxiao Zhu
- **Institution:** Wayne State University
- **Paper:** [Attention Smoothing Is All You Need for Unlearning](https://arxiv.org/abs/2603.01285v1)
- **Authors:** Saleh Zare Zade, Xiangyu Zhou, Sijia Liu, Dongxiao Zhu
- **Year:** 2026

## Paper overview

This paper introduces Attention Smoothing Unlearning (ASU), a novel method to make large language models forget specific unwanted knowledge while preserving their overall performance. ASU works by smoothing the attention mechanism inside the model, which weakens the associations responsible for recalling sensitive or copyrighted information. This approach avoids the common problem of producing incoherent or gibberish outputs after unlearning and achieves a better balance between forgetting and utility preservation compared to existing methods.

### Why it matters

**Research problem:** Large language models (LLMs) memorize sensitive, copyrighted, or harmful content during training, raising privacy, legal, and ethical concerns. Retraining models from scratch to remove such data is computationally infeasible. Existing unlearning methods either fail to fully erase unwanted knowledge or degrade model utility and coherence, often producing gibberish outputs when queried about forgotten data.

**Why it matters:** Unlearning is critical for complying with privacy regulations like the 'right to be forgotten,' removing copyrighted or hazardous content, and ensuring trustworthy AI. Effective unlearning methods enable safer deployment and release of LLMs without compromising their general language understanding and usefulness.

**Key contributions:**

- Proposed Attention Smoothing Unlearning (ASU), a novel convergence-based unlearning method using attention temperature scaling.
- Introduced a forget-teacher model that diffuses attention to suppress factual recall while preserving syntactic coherence.
- Demonstrated that smoothing shallow transformer layers effectively disrupts factual token recall but preserves function tokens.
- Extensive empirical evaluation on multiple benchmarks (TOFU, MUSE, WMDP) and scenarios (Right to Be Forgotten, copyrighted content removal, hazardous knowledge) showing ASU outperforms existing baselines.
- Showed ASU maintains coherent outputs on forget prompts, avoiding gibberish common in prior methods.

## About the professor

**Dongxiao Zhu** — Professor, Department of Computer Science, Wayne State University.

Research interests: Trustworthy AI and Applications — advancing adversarial robustness, explainability, and fairness of deep learning systems for use in health, urban, and social computing

### Research links

- [Faculty/profile page](https://dongxiaozhu.github.io)
- [Resolved homepage](https://dongxiaozhu.github.io/)
- [Lab website](https://sites.google.com/view/mlpa/mainpage)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=L0CbApYAAAAJ)
- [DBLP](https://dblp.org/pid/15/6233.html)
- [LinkedIn](https://www.linkedin.com/in/dongxiao-zhu-5796754/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer Attention Mechanisms
**The paper assumes:** transformer architecture, self-attention mechanism, softmax function in attention, attention temperature scaling
**Already in this field?** Skip this entirely if you already understand transformer models and how their attention mechanisms operate internally, including softmax temperature effects.

To understand the core innovation of the paper 'Attention Smoothing Is All You Need for Unlearning,' it is essential to grasp how transformer attention mechanisms work, especially the role of self-attention and softmax temperature in shaping attention distributions. The two options below provide complementary learning paths: the rigorous course offers a deep, structured university-level treatment of self-attention and transformers, while the fast track delivers a concise, intuition-driven explainer series suitable for quickly acquiring the key concepts.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Self-attention and transformers (NLP817 11)](https://www.youtube.com/playlist?list=PLmZlBIcArwhOPR2s-FIR7WoqNaBML233s) — Herman Kamper · 10 videos · 1.4h across 10 episodes

**Watch only this:** Episodes 1-7: 'Intuition behind self-attention' through 'Multi-head attention', about 56 minutes total — these cover the fundamentals of self-attention mechanisms and multi-head attention critical for the paper's method.

*Why it unblocks this paper:* This university lecture series by Herman Kamper covers self-attention and transformers in a focused, step-by-step manner, including detailed explanations of self-attention, multi-head attention, and positional encodings, which are directly relevant to understanding attention smoothing in transformer layers.

*If you want all of it:* All 10 episodes, about 1.4 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Attention Is All You Need (2017) – Transformer Paper Explained Simply](https://www.youtube.com/playlist?list=PLtimovBkjswFvL3RoFoIzwlJ3VHttqqsE) — AI Breakdowns – James Agba · 10 videos · 1.8h across 10 episodes

**Watch only this:** Episodes 0-4: 'Why This Paper Exists' through 'Architecture: Self-Attention', about 50 minutes total — these episodes succinctly explain the motivation, architecture, and self-attention mechanism foundational to understanding attention smoothing.

*Why it unblocks this paper:* This short-form playlist by AI Breakdowns provides a clear, section-by-section explanation of the original 'Attention Is All You Need' paper, focusing on the architecture and self-attention, which aligns well with the paper’s focus on modifying attention distributions via temperature scaling.

*If you want all of it:* All 10 episodes, about 1.8 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Attention Smoothing Is All You Need for Unlearning,' start with foundational knowledge on Transformer attention mechanisms, machine unlearning fundamentals, and knowledge distillation, as these underpin the paper's methodology. Then, focus on the core concept of the paper itself, specifically the novel attention smoothing technique for unlearning, to grasp the authors' innovative approach and empirical results.

### Transformer attention mechanisms *(prerequisite)*
Understanding the self-attention mechanism in Transformers is essential because the paper's method modifies attention distributions to achieve unlearning. This section covers the mathematical and conceptual foundations of queries, keys, values, and how attention weights are computed and used in language models.

*How the paper uses it:* ASU modifies the attention mechanism via temperature scaling to smooth attention distributions and weaken factual recall.

▶ [L3: Self-attention in transformers encoder & contextual word ...](https://www.youtube.com/watch?v=xg9PqdK8qow) — IIT Madras - B.S. Degree Programme · 20:55

### Machine unlearning fundamentals *(prerequisite)*
This section provides a rigorous overview of machine unlearning challenges and approaches, including why unlearning is necessary and the trade-offs involved. It sets the stage for understanding how ASU fits into the broader landscape of unlearning research.

*How the paper uses it:* ASU addresses key challenges in machine unlearning by proposing a novel parameter-optimization method that balances forgetting and utility preservation.

▶ [Machine Unlearning for Generative AI](https://www.youtube.com/watch?v=-OV21A1j50g) — Communications and Signal Processing Seminar Series · 53:54

### Knowledge distillation in deep learning *(prerequisite)*
Knowledge distillation techniques, especially self-distillation, are central to ASU's approach where a forget-teacher model guides the student model. This section explains the principles and variants of distillation, enabling understanding of how ASU leverages this for unlearning.

*How the paper uses it:* ASU reframes unlearning as a self-distillation process from a forget-teacher model with smoothed attention.

▶ [Lecture 10 - Knowledge Distillation | MIT 6.S965](https://www.youtube.com/watch?v=tT9Lnt6stwA) — MIT HAN Lab · 1:07:22

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Attention Smoothing Is All You Need for Unlearning,' start by building foundational knowledge of machine unlearning and transformer attention mechanisms, as these are core to the method. Then learn about knowledge distillation, which the paper uses as a technique for unlearning. Finally, explore attention temperature scaling, the key novel technique the paper applies to smooth attention and weaken factual recall, enabling effective unlearning.

### Machine unlearning fundamentals *(prerequisite)*
Machine unlearning is about making AI models forget specific data they have learned, which is important for privacy and legal compliance. This concept introduces the challenges and approaches to selectively removing knowledge from trained models without retraining from scratch.

*How the paper uses it:* The paper addresses unlearning in large language models to remove sensitive or copyrighted knowledge efficiently.

▶ [What is Machine Unlearning?](https://www.youtube.com/watch?v=0_ciCzHaM4o) — Probably Private · 10 months ago

### Transformer attention mechanisms *(prerequisite)*
Transformers use self-attention to weigh the importance of different words in a sequence, enabling models to capture context and relationships. Understanding how attention works is essential to grasp how smoothing it affects the model's recall of information.

*How the paper uses it:* ASU modifies the attention mechanism inside transformers to weaken associations responsible for recalling unwanted knowledge.

▶ [L3: Self-attention in transformers encoder & contextual word ...](https://www.youtube.com/watch?v=xg9PqdK8qow) — IIT Madras - B.S. Degree Programme · 20:55

### Knowledge distillation in deep learning *(prerequisite)*
Knowledge distillation transfers learned information from a larger or modified 'teacher' model to a 'student' model, often to compress or adapt models. Self-distillation, where a model learns from a modified version of itself, is a key technique used in this paper.

*How the paper uses it:* ASU reframes unlearning as a self-distillation process from a forget-teacher model with smoothed attention.

▶ [Lecture 10 - Knowledge Distillation | MIT 6.S965](https://www.youtube.com/watch?v=tT9Lnt6stwA) — MIT HAN Lab · 1:07:22

### Attention temperature scaling
Temperature scaling adjusts the sharpness of the softmax distribution in attention mechanisms, controlling how focused or diffuse the attention weights are. Increasing temperature smooths attention, weakening strong associations and enabling selective forgetting.

*How the paper uses it:* ASU uses attention temperature scaling to create a forget-teacher model with flattened attention distributions that suppress factual recall.

▶ [Temperature Scaling in Large Language Models (LLMs)](https://www.youtube.com/watch?v=oG1FPVnY0pI) — Vizuara · 26:32

## Already in your library

- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [What is Attention Mechanisms in Transformers? (Explained Visually)](https://www.youtube.com/watch?v=LudWfvu3ong) — also for: In-Context Algebra (David Bau)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [The Attention Mechanism 1 hour explanation](https://www.youtube.com/watch?v=K45ze9Yd5UE) — also for: Grounded Video Description (Jason J. Corso)
- [Attention is all you need (Transformer) - Model explanation (including math), Inference and Training](https://www.youtube.com/watch?v=bCz4OMemCcA) — also for: Mechanisms of Prompt-Induced Hallucination in Vision–Language Models (Ritambhara Singh)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [How Attention Mechanism Works in Transformer Architecture](https://www.youtube.com/watch?v=KMHkbXzHn7s) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [What are Transformers (Machine Learning Model)?](https://www.youtube.com/watch?v=ZXiruGOCn9s) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [YINS Alumnae Seminar: Anup Rao, “Machine Unlearning via Algorithmic Stability” 8/11/21](https://www.youtube.com/watch?v=VZ9oX07umVg) — also for: Approximate Replicability in Learning (Russell Impagliazzo)
- [Knowledge Distillation: How LLMs train each other](https://www.youtube.com/watch?v=jrJKRYAdh7I) — also for: Distilling Closed-Source LLM’s Knowledge for Locally Stable and Economic Biomedical Entity Linking (Kunpeng Liu)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Knowledge Distillation Simplified | Teacher to Student Model ...](https://www.youtube.com/watch?v=_3asoj46jVw) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder for understanding and applying the Attention Smoothing Unlearning (ASU) method from the paper. Starting with a small-scale reproduction of attention temperature scaling effects on a transformer model's attention distributions, progressing to a core reimplementation of ASU on a public language modeling dataset with baseline comparison, and culminating in an advanced extension exploring adaptive attention temperature tuning to address a key limitation noted by the authors.

### Beginner — Visualize Attention Temperature Effects on Transformer Attention
*Effort: a weekend, ~8 hours*

You build a small script that loads a pretrained decoder-only transformer (e.g., GPT-2 small), modifies the softmax temperature in its self-attention layers, and visualizes how increasing temperature smooths attention distributions on sample input sentences. You plot attention entropy or token-level negative log-likelihood changes for factual versus function tokens to replicate the selective disruption effect shown in the paper.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism of attention smoothing via temperature scaling and its selective impact on factual token recall versus syntactic coherence, a key insight of ASU.

**Grounded in:** Attention smoothing selectively increased entropy and negative log-likelihood for factual tokens more than function tokens, preserving grammatical coherence.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), matplotlib, Jupyter Notebook

**Data:** Use sample sentences from publicly available text (e.g., WikiText-2 or manually crafted examples) as input to the transformer model.

**Build it:**

1. Load a pretrained GPT-2 small model and tokenizer from Hugging Face transformers.
2. Implement a function to modify the softmax temperature in the self-attention layers' attention computation.
3. Run inference on sample sentences with different temperature values (e.g., 1.0, 2.0, 2.5).
4. Extract and visualize attention weight distributions and compute entropy per token.
5. Compare negative log-likelihood changes for factual tokens (named entities, dates) versus function tokens (articles, prepositions).
6. Document findings with plots and explanations in a Jupyter notebook.

**Ships as:** A Jupyter notebook showing attention heatmaps and entropy plots across temperatures, with commentary linking results to the paper's findings.

**Stretch goal:** Add a simple interactive UI (e.g., Streamlit) to let users input sentences and dynamically adjust attention temperature to see smoothing effects.

### Intermediate — Reimplement ASU Unlearning on WikiText-2 with Baseline Comparison
*Effort: 2 weekends, ~20 hours*

You reimplement the core ASU method by creating a forget-teacher model with increased attention temperature on a pretrained GPT-2 small model and fine-tune the student model to imitate the teacher on a forget set while regularizing on a retain set. You evaluate forget efficacy and model utility on a subset of WikiText-2, comparing against a naive fine-tuning baseline that simply fine-tunes on the forget set without attention smoothing.

**Why it shows you understood the paper:** This project shows you can faithfully reproduce the paper's main unlearning approach and metrics on a smaller public dataset, demonstrating grasp of the self-distillation framework and attention temperature scaling for unlearning.

**Grounded in:** ASU reframes unlearning as a self-distillation process from a forget-teacher model created by increasing the softmax temperature in the self-attention layers of the base model.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), numpy, scikit-learn, Jupyter Notebook

**Data:** WikiText-2 dataset (public language modeling benchmark) used as a proxy for the paper's forget and retain sets.

**Build it:**

1. Load pretrained GPT-2 small and WikiText-2 dataset.
2. Define a forget set (e.g., specific topics or named entities) and retain set from WikiText-2.
3. Implement attention temperature scaling in self-attention layers to create the forget-teacher model.
4. Fine-tune the student model to imitate the forget-teacher on the forget set with regularization on the retain set.
5. Implement a naive fine-tuning baseline that fine-tunes on the forget set without attention smoothing.
6. Evaluate forget efficacy (e.g., increase in perplexity or negative log-likelihood on forget set) and model utility (perplexity on retain set) for both methods.
7. Document results with plots and analysis comparing ASU to baseline.

**Ships as:** A GitHub repo with code to run ASU unlearning on WikiText-2, evaluation scripts, and a detailed README reporting comparative results and insights.

**Stretch goal:** Add experiments varying which transformer layers are smoothed (e.g., shallow vs. deep) to replicate the paper's finding that smoothing shallow layers suffices.

### Advanced — Adaptive Attention Temperature Scheduling for ASU Unlearning
*Effort: 3+ weeks*

You extend the ASU method by implementing an adaptive strategy to dynamically tune the attention temperature during training, aiming to optimize the trade-off between forgetting efficacy and output coherence. You test this adaptive approach on the WikiText-2 dataset and compare it against fixed temperature ASU and naive fine-tuning baselines, analyzing stability and performance.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by automating temperature selection, demonstrating deep comprehension of ASU's mechanism and practical challenges in balancing forgetting and coherence.

**Grounded in:** ASU requires careful tuning of the attention temperature hyperparameter to balance forgetting and coherence. Future direction: Automating or adaptively tuning the attention temperature for optimal forgetting-coherence trade-offs.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), numpy, matplotlib, Jupyter Notebook

**Data:** WikiText-2 dataset as a proxy for forget and retain sets.

**Build it:**

1. Reimplement the ASU method with fixed attention temperature as baseline.
2. Design and implement an adaptive temperature scheduler that adjusts temperature based on training signals (e.g., validation loss, forgetting metrics).
3. Integrate the scheduler into the ASU training loop.
4. Run experiments comparing adaptive temperature ASU, fixed temperature ASU, and naive fine-tuning on forget and retain sets.
5. Analyze results focusing on forgetting efficacy, model utility, and output coherence.
6. Document methodology, code, and findings in a comprehensive report.

**Ships as:** A GitHub repository containing the adaptive ASU implementation, experimental results, and a detailed README discussing the adaptive approach's benefits and limitations.

**Stretch goal:** Explore combining adaptive temperature with refusal-style outputs for enhanced unlearning flexibility as suggested in the paper.

_The paper's authors did not release code or datasets; the intermediate and advanced projects rely on reimplementing ASU from the paper's descriptions and using WikiText-2 as a substitute dataset._
