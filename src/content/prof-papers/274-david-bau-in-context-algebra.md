---
title: "274 · In-Context Algebra — David Bau"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-bau"
source_hash: "7893ef81784ec4e76d1961e598a7fb1bcbe9eb92acfbf5c0cc88006cab609695"
sequence: 274
generator: "outreach-garden: managed"
---

# 274 · In-Context Algebra

## At a glance

- **Professor:** David Bau
- **Institution:** Northeastern University
- **Paper:** [In-Context Algebra](https://arxiv.org/pdf/2512.16902)
- **Authors:** Eric Todd, Jannik Brinkmann, Rohit Gandikota, David Bau
- **Year:** 2026

## Paper overview

This paper studies how transformer language models can learn to perform algebraic reasoning in-context when tokens represent variables whose meanings change with each sequence. The authors design a task where transformers predict products in finite groups using variable tokens without fixed embeddings. They find that transformers develop symbolic reasoning strategies such as copying, identity recognition, and cancellation, and verify these mechanisms through causal interventions.

### Why it matters

**Research problem:** Understanding what computational strategies transformers develop when trained to solve algebraic problems in-context with variable tokens that have no fixed meaning, as opposed to relying on fixed token embeddings.

**Why it matters:** Most prior work attributes language model reasoning to fixed token embeddings encoding semantic or geometric information. Investigating how models reason when deprived of such embeddings reveals the nature of emergent symbolic reasoning and interpretability in deep networks, which has implications for AI transparency and human-AI collaboration.

**Key contributions:**

- Design of a novel in-context algebra task with variable tokens representing group elements without fixed meaning.
- Empirical demonstration that transformers achieve near-perfect accuracy and generalize to unseen groups and some non-group algebraic structures.
- Identification of three main learned mechanisms: commutative copying, identity element recognition, and closure-based cancellation.
- Development of targeted data distributions and algorithmic coverage analysis to quantify which sequences can be solved by hypothesized mechanisms.
- Use of causal interventions to locate specific attention heads and subspaces responsible for the learned mechanisms.

## About the professor

**David Bau** — Assistant Professor, Computer Science, Northeastern University.

Research interests: understanding the rich internal structure of deep networks, AI interpretability, human-AI collaborative software engineering

### Research links

- [Faculty/profile page](https://baulab.info)
- [Resolved homepage](https://baulab.info/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=CYI6cKgAAAAJ&view_op=list_works&sortby=pubdate)
- [DBLP](http://dblp.uni-trier.de/pers/hd/b/Bau:David)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Abstract Algebra and Group Theory
**The paper assumes:** undergraduate abstract algebra, group theory, finite groups, algebraic structures
**Already in this field?** Skip this entirely if you already understand the basics of group theory and abstract algebra, including group operations and properties.

This background is essential for understanding the algebraic structures and concepts underlying the paper's in-context algebra task, such as groups, identity elements, cancellation, associativity, and closure. The rigorous course option offers a deep, university-level treatment of abstract algebra with a focus on group theory, ideal for readers seeking comprehensive mastery. The fast track provides a concise, visual introduction to the core concepts of linear algebra and abstract vector spaces, which supports grasping the algebraic reasoning in the paper more quickly and intuitively.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Harvard MATH E-222 Abstract Algebra, lecturer Benedict Gross supporting book Algebra by Michael Artin](https://www.youtube.com/playlist?list=PLzUeAPxtWcqzr80lS25FrzMn7a36BuXhj) — Jeroen Zuijderhoudt · 38 videos · 32.9h across 38 episodes

**Watch only this:** Lectures math e222 L05 20030924 through math e222 L10 20031006, about 5 lectures (~4 hours 15 minutes) — covering group definitions, examples, identity elements, and group properties essential to understand the paper's algebraic setting.

*Why it unblocks this paper:* This is a full Harvard abstract algebra course by Professor Benedict Gross, covering groups, group operations, identity, and related algebraic structures in depth, directly matching the paper's focus on finite groups and algebraic reasoning.

*If you want all of it:* All 38 lectures, about 32.9 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) — 3Blue1Brown · 16 videos · 3.0h across 16 episodes

**Watch only this:** Episodes 1 through 6, about 1 hour 6 minutes — covering vectors, linear combinations, linear transformations, matrix multiplication, and 3D transformations to build intuition for algebraic operations.

*Why it unblocks this paper:* 3Blue1Brown's Essence of linear algebra series provides a visually intuitive and concise introduction to linear algebra concepts, including vector spaces and transformations, which underpin understanding of algebraic structures and symbolic reasoning in the paper.

*If you want all of it:* All 16 episodes, about 3 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'In-Context Algebra' paper, start by grounding yourself in the foundational concepts of finite group theory and causal interventions in deep networks, as these underpin the algebraic structures and analysis methods used. Next, study the mechanisms of transformer attention and in-context learning to grasp how transformers process variable token meanings and implement algebraic reasoning. Finally, focus on the core concept of symbolic reasoning in transformers and the authors' own talk to directly connect these foundations to the novel contributions and findings of the paper.

### Finite Group Theory Basics *(prerequisite)*
Finite group theory provides the essential algebraic background for understanding the group structures used in the in-context algebra task. A rigorous lecture on group theory will clarify the properties and operations of finite groups, which are central to the paper's experimental setup.

*How the paper uses it:* The paper's task involves predicting products in finite groups, making group theory fundamentals crucial for comprehension.

▶ [Group Theory | Groups in One Shot by GP Sir](https://www.youtube.com/watch?v=fuCqvCXS2OM) — MathsCare TGT-PGT By Dr.Gajendra Purohit · 29:50 · 3 years ago

### Causal Interventions in Deep Networks *(prerequisite)*
Causal interventions are key to revealing internal model mechanisms by manipulating components and observing effects. Understanding this methodology is critical to appreciate how the paper identifies specific attention heads and subspaces responsible for algebraic reasoning.

*How the paper uses it:* The authors use causal interventions to locate and verify the mechanisms learned by transformers.

▶ [Learning Representations Using Causal Invariance - Leon Bottou](https://www.youtube.com/watch?v=yFXPU2lMNdk) — Institute for Advanced Study · 6 years ago

### Transformer Attention Mechanisms *(prerequisite)*
Attention mechanisms are the core computational units in transformers that enable selective focus on input tokens. A detailed explanation of attention will help understand how specific heads implement algebraic operations like copying and cancellation.

*How the paper uses it:* The paper identifies a single attention head responsible for copying mechanisms and analyzes attention patterns extensively.

▶ [Transformers Step-by-Step Explained (Attention Is All You Need)](https://www.youtube.com/watch?v=avjX3QrYkls) — ByteByteGo and ByteByteAI · 10:04 · 7 months ago

### In-Context Learning in Language Models *(prerequisite)*
In-context learning explains how language models adapt to new tasks by conditioning on input sequences without parameter updates. Understanding this phenomenon is foundational to grasping how transformers handle variable token meanings in the algebra task.

*How the paper uses it:* The paper studies transformers performing algebraic reasoning in-context with variable tokens lacking fixed embeddings.

▶ [A Walkthrough of In-Context Learning and Induction Heads Part 1 of 2 (w/ Charles Frye)](https://www.youtube.com/watch?v=dCkQQYwPxdM) — Neel Nanda · 3 years ago

### Symbolic Reasoning in Transformers
Symbolic reasoning in transformers explores how these models perform multi-step, rule-based computations, which is central to the paper's investigation of algebraic mechanisms. Advanced talks on this topic provide insight into the nature of emergent symbolic strategies in deep networks.

*How the paper uses it:* The paper empirically demonstrates that transformers develop symbolic reasoning mechanisms such as copying, identity recognition, and cancellation.

▶ [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 6 - LLM Reasoning](https://www.youtube.com/watch?v=k5Fh-UgTuCo) — Stanford Online · 1:47:10 · 8 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the 'In-Context Algebra' paper from a beginner to advanced perspective, start by building foundational knowledge of finite group theory, which underpins the algebraic structures used. Next, learn about in-context learning in language models to grasp how transformers adapt to variable token meanings. Then, study transformer attention mechanisms to see how specific components implement algebraic operations. After that, explore causal interventions in deep networks to understand how the paper identifies internal mechanisms. Finally, focus on symbolic reasoning in transformers, which is central to the paper's findings on emergent algebraic reasoning strategies.

### Finite Group Theory Basics *(prerequisite)*
Finite group theory introduces the algebraic structures called groups, which have operations satisfying properties like closure, identity, and inverses. Understanding these basics is essential to follow how the paper uses groups as the algebraic setting for the in-context learning task.

*How the paper uses it:* The paper trains transformers to predict products in finite groups, so knowing group theory basics helps understand the task and results.

▶ [Group Theory | Groups in One Shot by GP Sir](https://www.youtube.com/watch?v=fuCqvCXS2OM) — MathsCare TGT-PGT By Dr.Gajendra Purohit · 29:50 · 3 years ago

### In-Context Learning in Language Models *(prerequisite)*
In-context learning refers to how language models can learn to perform tasks by conditioning on examples within the input sequence, without parameter updates. This concept explains how transformers can adapt to variable token meanings per sequence, which is key to the paper's task design.

*How the paper uses it:* The paper studies transformers performing algebraic reasoning in-context with variable tokens lacking fixed embeddings.

▶ [Understanding In-Context Learning: What It Is and How It Works](https://www.youtube.com/watch?v=7vJluo_FI3I) — AppliedAI · 1 year ago

### Transformer Attention Mechanisms *(prerequisite)*
Attention mechanisms allow transformers to weigh the importance of different tokens dynamically, enabling complex reasoning and pattern recognition. Understanding attention is crucial to grasp how specific heads implement algebraic operations like copying and cancellation.

*How the paper uses it:* The paper identifies a single attention head responsible for copying mechanisms and localizes algebraic reasoning in attention layers.

▶ [What is Attention Mechanisms in Transformers? (Explained Visually)](https://www.youtube.com/watch?v=LudWfvu3ong) — Good Learning Machines · 9 months ago

### Causal Interventions in Deep Networks *(prerequisite)*
Causal interventions involve actively manipulating parts of a model to observe effects on outputs, revealing internal mechanisms and causal relationships. This method helps uncover which components implement specific reasoning strategies.

*How the paper uses it:* The authors use causal interventions to locate attention heads and subspaces responsible for learned algebraic mechanisms.

▶ [Causal Effects via the Do-operator | Overview & Example](https://www.youtube.com/watch?v=dejZzJIZdow) — Shaw Talebi · 3 years ago

### Symbolic Reasoning in Transformers
Symbolic reasoning in transformers refers to how these models can learn and apply abstract algebraic rules and operations without fixed token meanings. This concept ties together the paper's core findings on emergent symbolic strategies like copying and cancellation.

*How the paper uses it:* The paper demonstrates that transformers develop symbolic reasoning mechanisms to solve algebraic tasks in-context.

▶ [How Transformers Learn Multi-Step Reasoning](https://www.youtube.com/watch?v=rYuEW2LJpVk) — AI Research Roundup · 11 months ago

## Already in your library

- [What are Transformers (Machine Learning Model)?](https://www.youtube.com/watch?v=ZXiruGOCn9s) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [How Attention Mechanism Works in Transformer Architecture](https://www.youtube.com/watch?v=KMHkbXzHn7s) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [What Is In-Context Learning in Deep Learning?](https://www.youtube.com/watch?v=As9a15poQHs) — also for: What data should I include in my POS tagging training set? (Emily Prud'hommeaux)
- [Toward Understanding In-context Learning](https://www.youtube.com/watch?v=hxrR39mAlR4) — also for: What data should I include in my POS tagging training set? (Emily Prud'hommeaux)
- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Causal Inference - EXPLAINED!](https://www.youtube.com/watch?v=Od6oAz1Op2k) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Causal Inference with Machine Learning - EXPLAINED!](https://www.youtube.com/watch?v=MFnOYNU5sbk) — also for: CIMLA: Interpretable AI for inference of differential causal networks (Saurabh Sinha)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and technical challenge to demonstrate understanding of the "In-Context Algebra" paper. The beginner project reproduces a core mechanism (copying) from the paper using familiar tools and synthetic data. The intermediate project reimplements the paper's main in-context algebra task and evaluates transformer performance on finite groups, comparing to a simple baseline. The advanced project extends the paper by investigating the partial learning of associativity, implementing new training or architectural modifications to improve it, thus addressing a stated limitation.

### Beginner — Copying Mechanism Visualization in Transformer Attention
*Effort: a weekend, ~8 hours*

You build a small transformer model trained on synthetic sequences representing finite group multiplication facts with variable tokens randomly assigned per sequence. You then implement visualization and analysis of attention patterns to identify the copying mechanism, focusing on a single attention head analogous to the paper's layer 3, head 6. This reproduces the key finding that a specific attention head is responsible for copying tokens in the in-context algebra task.

**Why it shows you understood the paper:** This project shows you understand how the paper isolates and verifies the copying mechanism via attention head analysis and causal interventions. A professor would see you grasp the core symbolic reasoning strategy and how to interpret transformer internals in this algebraic setting.

**Grounded in:** A single attention head (layer 3, head 6) is responsible for copying mechanisms (Section 5.2, Fig. 4).

**Tech stack:** Python 3.11, PyTorch, matplotlib, Jupyter Notebook

**Data:** Synthetic sequences generated on-the-fly representing finite group multiplication with variable token assignments per sequence, as described in the paper's approach.

**Build it:**

1. Implement a small transformer model (e.g., 4 layers) in PyTorch to predict next tokens in sequences representing group multiplication facts with variable tokens.
2. Generate synthetic training data by sampling finite groups (e.g., cyclic groups of order 4) and randomly assigning tokens to group elements per sequence.
3. Train the model on this synthetic data until it achieves reasonable accuracy on copying queries.
4. Extract attention weights from all heads during inference on test sequences.
5. Visualize attention patterns for the head analogous to layer 3, head 6 to identify copying behavior (high attention on input tokens to be copied).
6. Document the findings and include plots showing the attention head's role in copying.

**Ships as:** A GitHub repo with code to train the transformer on synthetic group data, Jupyter notebooks visualizing attention heads, and a README explaining how the copying mechanism is identified.

**Stretch goal:** Add causal intervention experiments by ablating or modifying the identified attention head to show its causal role in copying accuracy.

### Intermediate — Reimplementation of In-Context Algebra Task with Transformer
*Effort: 2 weekends, ~20 hours*

You reimplement the core in-context algebra task from the paper: training a transformer to predict products in finite groups with variable tokens assigned randomly per sequence. You evaluate model accuracy on held-out groups and compare against a simple baseline such as a lookup table or an LSTM. You also implement algorithmic coverage analysis to quantify how much of the data the learned mechanisms explain.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper's main empirical results on transformer performance and generalization in the in-context algebra setting. It shows you understand the task design, evaluation metrics, and the significance of algorithmic coverage analysis.

**Grounded in:** Empirical demonstration that transformers achieve near-perfect accuracy and generalize to unseen groups; algorithmic coverage analysis shows hypothesized mechanisms explain over 90% of training data (Section 4, Fig. 3).

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib, Jupyter Notebook

**Data:** Synthetic finite group multiplication sequences generated as per the paper's approach, with variable token assignments per sequence; no external dataset used.

**Build it:**

1. Implement data generation for sequences representing multiplication in finite groups with variable token assignments per sequence.
2. Build a transformer model in PyTorch to perform next-token prediction on these sequences.
3. Train the model on training groups and evaluate accuracy on held-out groups of similar order.
4. Implement a simple baseline model (e.g., LSTM or lookup table) for comparison.
5. Implement algorithmic coverage analysis to measure what fraction of sequences are solvable by hypothesized mechanisms (copying, identity recognition, cancellation).
6. Plot accuracy curves and coverage statistics, and write a report comparing your results to the paper's findings.

**Ships as:** A GitHub repo with code for data generation, transformer training, baseline implementation, evaluation scripts, and a detailed README with results and analysis.

**Stretch goal:** Extend the model to test generalization on semigroups or quasigroups and analyze performance degradation.

### Advanced — Improving Associativity Learning in Transformers for In-Context Algebra
*Effort: 3-4 weeks*

You extend the paper's work by focusing on the partial learning of associativity, a known limitation. You design new training curricula, data distributions, or architectural modifications (e.g., attention biases, auxiliary losses) to encourage better learning of associative composition. You evaluate improvements in accuracy on associative composition sequences and analyze internal mechanisms to verify enhanced reasoning.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing you can critically engage with the research and propose concrete extensions. It demonstrates your ability to experiment with transformer training and interpretability to improve symbolic reasoning capabilities.

**Grounded in:** Model performance on associative composition sequences is lower (~60%), indicating partial learning of associativity; future direction includes improving learning and understanding of associative composition (Section 6).

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib, Jupyter Notebook

**Data:** Synthetic sequences representing associative composition in finite groups generated as per the paper's approach, with additional targeted data distributions emphasizing associativity.

**Build it:**

1. Reimplement the base in-context algebra transformer and data generation pipeline from the intermediate project.
2. Design new data distributions or curricula that emphasize associative composition sequences more heavily.
3. Experiment with architectural changes such as adding attention biases or auxiliary losses that encourage associativity reasoning.
4. Train models under these new settings and evaluate accuracy specifically on associative composition test sets.
5. Analyze attention patterns and probe learned subspaces to identify changes in internal mechanisms related to associativity.
6. Document findings, including quantitative improvements and qualitative interpretability analyses.

**Ships as:** A GitHub repo with extended code, training scripts, evaluation notebooks, and a comprehensive README discussing methods, results, and interpretability analyses focused on associativity.

**Stretch goal:** Explore causal interventions to verify whether new mechanisms causally improve associativity reasoning.

_The paper's authors have not released code or datasets; synthetic data must be generated following the paper's detailed task description._
