---
title: "639 · Asymmetric Capacity Allocation in Self-Refinement Pipelines — Ian G. Harris"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ian-g-harris"
source_hash: "9a2f59e35703a523f9719017d79347357ac5bb99343f44c0f3a17c84a9fdcf2e"
sequence: 639
generator: "outreach-garden: managed"
---

# 639 · Asymmetric Capacity Allocation in Self-Refinement Pipelines

## At a glance

- **Professor:** Ian G. Harris
- **Institution:** Univ. of California - Irvine
- **Paper:** [Asymmetric Capacity Allocation in Self-Refinement Pipelines](https://arxiv.org/pdf/2608.21345)
- **Authors:** Zhuoyi Yang, Ian G. Harris, Salar Hashemitaheri, Cassie Huang, Yuangang Li, Hyunwoo Oh, Paul Dourish, Tony Givargis, Mohsen Imani, Li Zhang
- **Year:** 2026

## Paper overview

This paper studies how to best allocate model sizes across the three stages of a self-refinement pipeline for large language models (LLMs): generation, critique, and refinement. The authors find that increasing the size of the generator and refiner models significantly improves performance, while increasing the critic size yields only marginal gains. Moreover, a weak refiner can degrade performance below the initial generation. These findings suggest that model capacity should be allocated asymmetrically rather than uniformly across the pipeline stages to optimize efficiency and effectiveness.

### Why it matters

**Research problem:** How should model capacity be allocated across the generator, critic, and refiner stages in a self-refinement pipeline to maximize performance and computational efficiency?

**Why it matters:** Self-refinement pipelines are widely used in LLM systems for iterative reasoning and improving outputs. However, existing approaches often scale model sizes uniformly or heuristically without understanding the impact of model size at each stage. This can lead to inefficient use of computational resources and suboptimal performance.

**Key contributions:**

- First systematic stage-wise model size study of self-refinement pipelines.
- Demonstration that generator and refiner sizes strongly affect pipeline performance, while critic size has limited impact.
- Evidence that a weak refiner can degrade performance below initial generation.
- Introduction of a no-critique baseline to show even a small critic improves performance over no critique.
- Practical guidance for non-uniform model capacity allocation to design more efficient multi-stage LLM systems.

## About the professor

**Ian G. Harris** — Professor, Computer Science, Univ. of California - Irvine.

Research interests: natural language processing and hardware security

### Research links

- [Faculty/profile page](http://www.ics.uci.edu/~harris)
- [Google Scholar](https://scholar.google.com/citations?user=NpcLBDsAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Large Language Model Architectures
**The paper assumes:** large language model architectures and components, transformer neural networks, model scaling principles
**Already in this field?** Skip this entirely if you already understand transformer-based large language models and their modular pipeline stages.

This background focuses on understanding large language model architectures, particularly the components and interactions relevant to self-refinement pipelines studied in the paper. The rigorous course option offers a deep, structured university-level introduction to NLP and deep learning foundations, including transformers and generation models. The fast track provides a shorter, focused playlist on large language models, suitable for quickly grasping core concepts and recent advances without the full depth of a semester-long course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 I Professor Christopher Manning](https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D) — Stanford Online · 23 videos · 27.5h across 23 episodes

**Watch only this:** Lectures 1-3 (Intro and Word Vectors, Word Vectors and Language Models, Backpropagation and Neural Networks), Lecture 6 (Sequence to Sequence Models), Lectures 7-9 (Attention, LLM Intro, Self-Attention and Transformers), and Lecture 11 (Natural Language Generation), totaling about 10.5 hours — this subset covers the core architecture and generation mechanisms relevant to the paper.

*Why it unblocks this paper:* Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 by Professor Christopher Manning is a top-tier, authoritative course covering foundational NLP concepts, neural architectures, transformers, and generation techniques essential to understanding the paper's focus on model size allocation in LLM pipelines.

*If you want all of it:* 27.5 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Large Language Models (LLMs)](https://www.youtube.com/playlist?list=PLoROMvodv4rObv1FMizXqumgVVdzX4_05) — Stanford Online · 28 videos · 45.1h across 28 episodes

**Watch only this:** Episodes 1 (Transformers), 2 (Large Language Models), 4 (Evaluation), 5 (Model Training), and 6 (Architectures), totaling about 8 hours — these episodes cover the essential concepts of transformer-based LLMs and their training relevant to the paper's pipeline stages.

*Why it unblocks this paper:* The Stanford Online Large Language Models (LLMs) playlist provides a concise, focused overview of LLM architectures, training, evaluation, and recent trends, directly aligned with the paper's subject of large model components and scaling effects.

*If you want all of it:* 45.1 hours across 28 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Asymmetric Capacity Allocation in Self-Refinement Pipelines,' start by grounding yourself in foundational knowledge about model capacity allocation strategies and large language model scaling laws, which provide the theoretical and practical context for resource distribution in LLMs. Next, explore the concept of self-refinement pipelines in LLMs to grasp the iterative multi-stage process central to the paper's methodology. Finally, engage with the authors' own talk on their novel findings and methodology to gain direct insight into their specific contributions and experimental results.

### Model capacity allocation strategies *(prerequisite)*
Understanding how to efficiently distribute model resources is essential to appreciate why asymmetric capacity allocation matters in multi-stage LLM pipelines. This section covers foundational optimization models and capacity planning approaches relevant to the paper's focus on non-uniform model size allocation.

*How the paper uses it:* The paper investigates how to allocate model capacity asymmetrically across generator, critic, and refiner stages to optimize performance and efficiency.

▶ [Seminar: Oded Cats and Panchamy Krishnakumari, Capacity ...](https://www.youtube.com/watch?v=kV6_tp9t2Xw) — C2SMART · 57:14

### Large language model scaling laws *(prerequisite)*
Scaling laws describe how model size impacts performance and resource tradeoffs in LLMs, providing theoretical grounding for why increasing generator and refiner sizes improves pipeline outcomes. This knowledge is crucial to contextualize the paper's experimental findings on model size effects.

*How the paper uses it:* The paper's results on performance gains from scaling generator and refiner sizes relate directly to established LLM scaling laws.

▶ [Stanford CS336 Language Modeling from Scratch | Spring 2026 | Lecture 9: Scaling Laws](https://www.youtube.com/watch?v=Q15rhEWZPQ4) — Stanford Online · 5 mo ago

### Self-refinement pipelines in LLMs *(prerequisite)*
Self-refinement pipelines involve iterative stages of generation, critique, and refinement to improve LLM outputs. Understanding this multi-stage iterative process is key to grasping the paper's experimental setup and the roles of each pipeline component.

*How the paper uses it:* The paper studies model size allocation specifically within the generator, critic, and refiner stages of self-refinement pipelines.

▶ [[KAIST CCS Mobility] Summer Camp | Large Language Models ...](https://www.youtube.com/watch?v=mGzTWui9Lbg) — KAIST ChoChunSik Graduate School of Mobility · 48:24

### Paper authors talk *(paper-talk search result; attribution unverified)*
This talk by the paper's authors provides direct insight into their methodology, experimental design, and key findings on asymmetric model allocation in self-refinement pipelines, offering the most authoritative and detailed explanation of their work.

*How the paper uses it:* The authors' talk presents their novel findings on how asymmetric capacity allocation improves self-refinement pipeline performance.

▶ [Efficient Self-Refinement: Asymmetric Model Allocation](https://www.youtube.com/watch?v=V1XPOqxiqjo) — Love More · 1 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on asymmetric capacity allocation in self-refinement pipelines, start by building foundational knowledge on how large language models scale and how model capacity can be allocated efficiently. Then, learn about the iterative refinement process in AI systems, which is central to the paper's pipeline stages. Finally, watch a concise talk by the paper's authors to get direct insight into their novel findings and methodology.

### Large language model scaling laws *(prerequisite)*
This concept explains how increasing the size of language models affects their performance and computational tradeoffs. Understanding scaling laws helps grasp why model size matters and how it influences efficiency and accuracy in LLM pipelines.

*How the paper uses it:* The paper studies how scaling the generator and refiner model sizes impacts pipeline performance, grounded in LLM scaling principles.

▶ [Scaling Laws for LLMs Explained Simply](https://www.youtube.com/watch?v=2WDx0ng3--U) — Coursesteach · 7:44

### Model capacity allocation strategies *(prerequisite)*
Capacity allocation involves deciding how to distribute limited computational resources across different parts of a system to optimize performance. This foundational knowledge helps understand why asymmetric allocation might outperform uniform scaling in multi-stage pipelines.

*How the paper uses it:* The paper's core contribution is showing that asymmetric capacity allocation across generator, critic, and refiner stages improves efficiency and effectiveness.

▶ [Capacity Planning Explained | Resource Optimization](https://www.youtube.com/watch?v=TlbFcNcEqDo) — Sociologylearners · 8:46

### Iterative refinement and critique in AI
Iterative refinement is a process where an AI system generates an output, critiques it, and then refines it based on feedback, improving quality step-by-step. This concept is key to understanding the three-stage pipeline of generator, critic, and refiner.

*How the paper uses it:* The paper analyzes how model sizes in each stage of the self-refinement pipeline affect overall output quality.

▶ [Iterative Refinement: How to Improve AI Prompts Step by Step](https://www.youtube.com/watch?v=3SPnv0ufR8Y) — FreeAcademy AI · 6:03 · 4 mo ago

### Self-refinement pipelines in LLMs *(prerequisite)*
Self-refinement pipelines use multiple LLM stages to iteratively improve outputs by generating, critiquing, and refining. Understanding this pipeline clarifies the paper's focus on optimizing model size allocation across these stages.

*How the paper uses it:* The paper systematically studies model size effects in the generator, critic, and refiner stages of self-refinement pipelines.

▶ [Enhancing Reasoning in Smaller Models through Self-Training](https://www.youtube.com/watch?v=SS59gCT2KKs) — Ai2 · 55:33

### Paper authors talk *(paper-talk search result; attribution unverified)*
A direct presentation from the authors provides a concise overview of their methodology, key findings, and practical implications, offering valuable intuition and context beyond the written paper.

*How the paper uses it:* This talk summarizes the paper's novel insight that asymmetric model size allocation improves self-refinement pipeline performance.

▶ [Efficient Self-Refinement: Asymmetric Model Allocation](https://www.youtube.com/watch?v=V1XPOqxiqjo) — Love More · 1 mo ago

## Already in your library

- [CMU LLM Inference (8): Self-Refine and Self-Correction ...](https://www.youtube.com/watch?v=uaxf9yssDy4) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [LLMs | Scaling Laws | Lec 11](https://www.youtube.com/watch?v=S7GOt85DWBs) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper "Asymmetric Capacity Allocation in Self-Refinement Pipelines." The beginner project replicates a key empirical finding on model size impact using small-scale LLM APIs. The intermediate project implements a simplified self-refinement pipeline with asymmetric model sizes on a public summarization dataset, reproducing core performance trends. The advanced project extends the paper by exploring multi-round refinement iterations, addressing a stated limitation and deepening the analysis of capacity allocation strategies.

### Beginner — Small-Scale Model Size Sweep in Self-Refinement Pipeline
*Effort: a weekend, ~8 hours*

You build a minimal self-refinement pipeline using accessible LLM APIs (e.g., OpenAI GPT-4 or Claude) to simulate generator, critic, and refiner roles with different prompt templates. By varying the 'size' proxy (e.g., model versions or temperature settings) for generator and refiner while keeping the critic fixed, you measure output quality on a simple summarization task.

**Why it shows you understood the paper:** This project concretely demonstrates the paper's key finding that generator and refiner capacity strongly influence performance while critic capacity has limited impact, showing you grasp the asymmetric capacity allocation concept and its empirical basis.

**Grounded in:** Scaling generator and refiner sizes consistently improves performance across all five benchmarks.

**Tech stack:** Python 3.11, OpenAI API or Anthropic Claude API, Jupyter Notebook

**Data:** Use a small subset (e.g., 20 samples) of the CNN/DailyMail summarization dataset as a public proxy for the paper's summarization benchmark.

**Build it:**

1. Set up API access to one or two LLMs with different model sizes or versions.
2. Implement prompt templates to simulate generator, critic, and refiner stages.
3. Run the pipeline on the summarization samples, varying generator and refiner model versions while fixing the critic.
4. Evaluate output quality using ROUGE or a simple lexical overlap metric.
5. Plot performance trends to observe the impact of model size variation.

**Ships as:** A Jupyter notebook with code, plots, and a README explaining how varying generator and refiner sizes affect pipeline output quality, replicating the paper's Figure 4 trend on a small scale.

**Stretch goal:** Add a no-critique baseline to show even a minimal critic improves performance, as per the paper's findings.

### Intermediate — Reimplementation of Asymmetric Capacity Allocation in Self-Refinement Pipeline
*Effort: 1-3 weekends*

You implement a simplified self-refinement pipeline from scratch in Python that independently varies generator, critic, and refiner model sizes using open-source LLMs (e.g., smaller and larger GPT-like models or LLaMA variants). You run experiments on a public summarization or planning dataset to reproduce the asymmetric capacity allocation results and compare against a uniform capacity baseline.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method and reproduce its main empirical results, demonstrating a deep understanding of the pipeline design, experimental controls, and performance metrics.

**Grounded in:** First systematic stage-wise model size study of self-refinement pipelines; demonstration that generator and refiner sizes strongly affect pipeline performance, while critic size has limited impact.

**Tech stack:** Python 3.11, Hugging Face Transformers, PyTorch, scikit-learn, Matplotlib

**Data:** Use the CNN/DailyMail summarization dataset or a planning dataset like the bAbI tasks as a public substitute for the paper's benchmarks.

**Build it:**

1. Select or fine-tune small and medium-sized LLMs to serve as generator, critic, and refiner models.
2. Implement the self-refinement pipeline with independent control over each stage's model size.
3. Run controlled experiments varying one stage's model size at a time while fixing others.
4. Evaluate outputs using ROUGE (for summarization) or task-specific metrics.
5. Compare asymmetric capacity allocation results against uniform capacity baselines.
6. Document findings with plots and analysis replicating key paper tables and figures.

**Ships as:** A GitHub repository with pipeline code, experiment scripts, evaluation metrics, and a detailed README reproducing the paper's main asymmetric capacity allocation results on public data.

**Stretch goal:** Add manual evaluation or error analysis to investigate how weak refiners degrade performance, as discussed in the paper.

### Advanced — Multi-Round Refinement and Capacity Allocation in Self-Refinement Pipelines
*Effort: a few weeks*

You extend the self-refinement pipeline to support multiple rounds of critique and refinement, addressing the paper's limitation of single iteration analysis. You investigate how asymmetric capacity allocation strategies perform across multiple refinement rounds on a public benchmark, analyzing performance trends, stability, and computational efficiency.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing you can innovate beyond the original study by integrating multi-round refinement and evaluating its interaction with model capacity allocation.

**Grounded in:** Study focuses on a single refinement iteration; results may not generalize to pipelines with multiple refinement rounds.

**Tech stack:** Python 3.11, Hugging Face Transformers, PyTorch, scikit-learn, Matplotlib, Jupyter Notebook

**Data:** Use the CNN/DailyMail summarization dataset or a planning dataset as a public benchmark for multi-round refinement experiments.

**Build it:**

1. Modify the self-refinement pipeline to support multiple iterations of critique and refinement.
2. Design experiments to vary model sizes asymmetrically across stages and rounds.
3. Run multi-round refinement experiments measuring output quality and stability.
4. Analyze how performance gains or degradations evolve with iteration count and capacity allocation.
5. Compare results to single-round baselines to assess generalization of capacity allocation strategies.
6. Document findings with visualizations and discussion relating to the paper's limitations and future directions.

**Ships as:** A comprehensive GitHub repository with multi-round pipeline code, experiments, analyses, and a README discussing how multi-round refinement affects asymmetric capacity allocation, extending the paper's contributions.

**Stretch goal:** Explore integrating richer critiques from larger critics to improve refiner effectiveness, addressing the paper's open question on better utilization of critiques.
