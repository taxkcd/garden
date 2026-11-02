---
title: "994 · Is My Model Using the Right Evidence? Systematic Probes for Examining Evidence-Based Tabular Reasoning — Vivek Gupta"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vivek-gupta"
source_hash: "32556cbdf15e7a4b07ba8260b1c09d26f64d0f5dec795ef732a1c6435830f736"
sequence: 994
generator: "outreach-garden: managed"
---

# 994 · Is My Model Using the Right Evidence? Systematic Probes for Examining Evidence-Based Tabular Reasoning

## At a glance

- **Professor:** Vivek Gupta
- **Institution:** Arizona State University
- **Paper:** [Is My Model Using the Right Evidence? Systematic Probes for Examining Evidence-Based Tabular Reasoning](https://arxiv.org/pdf/2108.00578)
- **Authors:** Vivek Gupta, Riyaz A. Bhat, Atreya Ghosal, Manish Shrivastava, Maneesh Singh, Vivek Srikumar
- **Year:** 2022

## Paper overview

This paper investigates whether state-of-the-art neural models, specifically RoBERTa-based models, truly reason using the evidence in semi-structured tables when performing natural language inference (NLI) tasks. Despite high accuracy, the study finds these models often ignore relevant evidence, rely on spurious correlations in hypotheses, and depend on pre-trained knowledge rather than the tabular data. The authors design systematic probes to test these aspects and show that fine-tuning on perturbed data does not fully resolve these issues.

### Why it matters

**Research problem:** Do current high-performing neural models for tabular natural language inference effectively use and reason about the evidence presented in semi-structured tabular inputs, or do they rely on spurious correlations and pre-trained knowledge instead?

**Why it matters:** Understanding whether models truly reason based on evidence is critical for building trustworthy AI systems that generalize well and avoid making predictions for the wrong reasons. This is especially important for applications involving complex multimodal data such as tables, where incorrect reasoning can lead to unreliable or biased outputs.

**Key contributions:**

- Development of systematic, semi-automatic probes to evaluate evidence-based reasoning in tabular NLI models along three dimensions: annotation artifact reliance, evidence selection, and counterfactual robustness.
- Empirical demonstration that a RoBERTa-based model fails to reliably use relevant evidence, is sensitive to hypothesis artifacts, and depends heavily on pre-trained knowledge rather than tabular inputs.
- Creation of counterfactual examples to test model grounding on tabular evidence versus pre-trained knowledge.
- Inoculation experiments showing that fine-tuning on perturbed examples improves performance on challenge sets but degrades performance on original test sets, indicating model reliance on spurious data artifacts.
- Provision of human annotations for relevant table rows to compare model evidence selection with human judgment.

## About the professor

**Vivek Gupta** — Incoming Assistant Professor, School of Computing and Augmented Intelligence, Arizona State University.

Research interests: developing trustworthy AI systems for complex multimodal data (tables, charts, maps, flowcharts etc.)

### Research links

- [Faculty/profile page](https://vgupta123.github.io)
- [Google Scholar](https://scholar.google.com/citations?user=Bs5H0S4AAAAJ&hl=en)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on evidence-based tabular reasoning, start by grounding yourself in the fundamentals of natural language inference (NLI) over tables and the challenges therein. Next, explore systematic probing methods used to diagnose neural models' reasoning capabilities. Then, study annotation artifacts and hypothesis bias to appreciate common pitfalls in dataset design and model evaluation. Finally, conclude with the authors' own talk or a closely related advanced presentation to directly connect these concepts to the paper's contributions and findings.

### Natural language inference over tables *(prerequisite)*
This section covers the task setting of natural language inference, especially when applied to semi-structured tabular data. Understanding the challenges and nuances of reasoning with tables is critical to grasp the motivation and evaluation setup of the paper.

*How the paper uses it:* The paper investigates NLI models' reasoning over semi-structured tables, making this foundational to understanding the task context.

▶ [Bilingual Tabular Inference: A Case Study on Indic Languages | Main Conference Oral @NAACL-22](https://www.youtube.com/watch?v=NXGUYl_en98) — Chaitanya Agarwal · 8:35 · 4y ago

### Systematic probing of neural models *(prerequisite)*
Learn about probing techniques that diagnose what neural models have learned and how they use input evidence. This knowledge is essential to appreciate the paper's methodology of designing systematic probes to evaluate evidence-based reasoning.

*How the paper uses it:* The authors develop systematic probes to test model reasoning and evidence usage, so understanding probing methods is key.

▶ [AI Probes Explained: How Probing Works in Neural Networks](https://www.youtube.com/watch?v=sgzaBbbWbm8) — Richard Aragon · 24:29 · 9mo ago

### Annotation artifacts and hypothesis bias *(prerequisite)*
This section explains common dataset biases and annotation artifacts that models exploit instead of performing true reasoning. Recognizing these biases helps in understanding the paper's findings about models relying on spurious correlations in hypotheses.

*How the paper uses it:* The paper shows that models rely heavily on hypothesis artifacts, making this concept directly relevant.

▶ [Bias Variance Tradeoff by Dr. M. Nagaraju](https://www.youtube.com/watch?v=kY_i09i3Ysk) — Institute of Aeronautical Engineering · 25:19 · 3w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of natural language inference (NLI) and how it applies to reasoning over tables, which is the core task studied. Next, explore how neural models can be systematically probed to diagnose what they have learned and how they use input evidence. Then, understand common dataset biases like annotation artifacts and hypothesis bias that models exploit instead of true reasoning. Finally, get insights from the authors themselves on their approach and findings to tie everything together.

### Natural language inference over tables *(prerequisite)*
Natural Language Inference (NLI) is the task of determining if a hypothesis is true, false, or undetermined given some evidence. When the evidence is presented as semi-structured tables, the reasoning becomes more complex because models must interpret both natural language and structured data. This section introduces the task setting and challenges of reasoning with tabular data.

*How the paper uses it:* The paper studies NLI specifically over semi-structured tables, making this foundational to understanding the problem.

▶ [Natural Language Inference | Stanford CS224U Natural Language Understanding | Spring 2021](https://www.youtube.com/watch?v=6-NV9lzm8qw) — Stanford Online · 11:07 · 4y ago

### Systematic probing of neural models *(prerequisite)*
Probing methods are diagnostic tools used to understand what neural models have learned and how they use input features. Systematic probing involves controlled experiments that test model behavior under specific perturbations to reveal reliance on spurious patterns or true evidence. This section explains how probing works and why it is important for trustworthy AI.

*How the paper uses it:* The authors design systematic probes to test if models truly use tabular evidence or rely on artifacts and pre-trained knowledge.

▶ [AI Probes Explained: How Probing Works in Neural Networks](https://www.youtube.com/watch?v=sgzaBbbWbm8) — Richard Aragon · 24:29 · 9mo ago

### Annotation artifacts and hypothesis bias *(prerequisite)*
Annotation artifacts are unintended patterns or biases in datasets that models can exploit to make predictions without real reasoning. Hypothesis bias occurs when models rely heavily on the hypothesis text alone, ignoring evidence. Understanding these biases is key to diagnosing why models perform well on benchmarks but fail on robust tests.

*How the paper uses it:* The paper finds that RoBERTa-based models rely on hypothesis artifacts and spurious correlations rather than true evidence.

▶ [Bias Variance Tradeoff by Dr. M. Nagaraju](https://www.youtube.com/watch?v=kY_i09i3Ysk) — Institute of Aeronautical Engineering · 25:19 · 3w ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hearing directly from the authors provides valuable insights into their motivation, methodology, and interpretation of results. It also highlights the challenges and future directions in evidence-based reasoning over tabular data.

*How the paper uses it:* This video features an AI researcher named Girish Gupta discussing AI safety and model behavior, which aligns with the paper's focus on trustworthy AI and model reasoning limitations.

▶ [AI Models Escaped Their Sandbox... Then Talked to Each Other | Girish Gupta l AI Safety Researcher](https://www.youtube.com/watch?v=uglQ9s10Nhc) — Dev In the Details and Rubrik · 48:01 · 2mo ago

## Already in your library

- [Lecture 6 | Training Neural Networks I](https://www.youtube.com/watch?v=wEoyxE0GP2M) — also for: SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning (Xiaoxuan Yang)
- [1: Introduction to Neural Networks and Deep Learning; Training Deep NNs](https://www.youtube.com/watch?v=kyQ0CRkYhy4) — also for: AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference (Mahmut T. Kandemir)
- [Lecture 10 - Introduction to Neural Networks | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=MfIjxPh6Pys) — also for: Knowledge-augmented Deep Learning and Its Applications: A Survey (Zijun Cui)
- [Lec 02. How to Train a Neural Net](https://www.youtube.com/watch?v=vidCX_dMCu0) — also for: PROBE: Diagnosing Residual Concept Capacity in Erased Text-to-Video Diffusion Models (Ping Liu)
- [Probing | Stanford CS224U Natural Language Understanding ...](https://www.youtube.com/watch?v=ElDtkhqv5ZE) — also for: Do Sparse Autoencoders Identify Reasoning Features in Language Models? (Irene Y. Chen)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [25. Interpretability](https://www.youtube.com/watch?v=wDLzLN1tArA) — also for: Interpretability from the Ground Up: Stakeholder-Centric Design of Automated Scoring in Educational Assessments (Chris Piech)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's systematic probing of evidence-based reasoning in tabular natural language inference (NLI) models. The beginner project replicates a core diagnostic probe using your existing skills. The intermediate project reimplements the paper's core probing method on a smaller or substitute dataset, adding a new skill like hypothesis perturbation. The advanced project extends the paper by addressing a stated limitation or future direction, such as improving model robustness or evidence grounding, potentially involving new modeling or data augmentation techniques.

### Beginner — Hypothesis-Only Bias Probe for Tabular NLI
*Effort: a weekend, ~8 hours*

You build a simple diagnostic probe that trains and evaluates a hypothesis-only model on a small tabular NLI dataset or a simulated substitute. This model ignores the table input and predicts labels based only on the hypothesis text, reproducing the paper's finding that hypothesis-only models achieve surprisingly high accuracy due to annotation artifacts.

**Why it shows you understood the paper:** This project shows you understand the concept of annotation artifacts and hypothesis bias in tabular NLI models, a key diagnostic introduced in the paper to reveal spurious correlations.

**Grounded in:** Hypothesis-only models perform surprisingly well, indicating hypothesis bias.

**Tech stack:** Python 3.11, scikit-learn, pandas, Jupyter Notebook

**Data:** Since the authors released no code or dataset, you simulate a small tabular NLI dataset with semi-structured tables and paired hypotheses with labels, inspired by the paper's description.

**Build it:**

1. Create or simulate a small tabular NLI dataset with tables, hypotheses, and labels.
2. Implement a simple text classification model that uses only the hypothesis text as input.
3. Train and evaluate the hypothesis-only model, reporting accuracy.
4. Compare the accuracy to a naive baseline (e.g., majority class).
5. Write a README explaining the hypothesis bias and how the probe reveals it.

**Ships as:** A GitHub repo with code and a notebook demonstrating the hypothesis-only model's performance and a README explaining annotation artifacts and hypothesis bias in tabular NLI.

**Stretch goal:** Add simple perturbations to hypotheses to observe model sensitivity to artifacts.

### Intermediate — Systematic Evidence Probing on a Tabular NLI Dataset
*Effort: 1-3 weekends, ~20 hours*

You reimplement the paper's core systematic probing method by applying controlled perturbations (label-preserving and label-flipping edits) to hypotheses and tables in a small tabular NLI dataset. You evaluate a RoBERTa-based model's responses to these perturbations and measure metrics like evidence selection precision and recall, reproducing key results about model insensitivity to evidence and reliance on spurious correlations.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's main diagnostic approach—systematic perturbations and probes to test evidence-based reasoning—and your ability to implement and evaluate these probes quantitatively.

**Grounded in:** Development of systematic, semi-automatic probes to evaluate evidence-based reasoning in tabular NLI models along three dimensions: annotation artifact reliance, evidence selection, and counterfactual robustness.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), pandas, Jupyter Notebook

**Data:** Use a publicly available tabular NLI dataset as a substitute (e.g., a small subset of the INFOTABS dataset if accessible, or simulate a similar dataset with tables, hypotheses, and labels).

**Build it:**

1. Obtain or simulate a tabular NLI dataset with tables, hypotheses, and labels.
2. Load a pre-trained RoBERTa model fine-tuned on NLI tasks.
3. Implement systematic perturbations on hypotheses and tables: label-preserving edits, label-flipping edits, and row deletions.
4. Evaluate the model's predictions on original and perturbed examples, recording accuracy and evidence selection metrics.
5. Analyze and visualize results showing model insensitivity to evidence and reliance on hypothesis artifacts.
6. Document the methodology, results, and their relation to the paper's findings in a detailed README.

**Ships as:** A GitHub repo with code to run systematic probes on a tabular NLI model, evaluation scripts, visualizations of results, and a README linking findings to the paper's contributions.

**Stretch goal:** Add a simple inoculation experiment by fine-tuning the model on perturbed data and observe performance trade-offs.

### Advanced — Improving Evidence Grounding in Tabular NLI via Data Augmentation
*Effort: a few weeks, ~40+ hours*

You extend the paper by developing a data augmentation pipeline that generates scalable counterfactual and adversarial examples with label flips for tabular NLI. You fine-tune a RoBERTa-based model on this augmented data to improve robustness and evidence grounding, aiming to reduce reliance on spurious correlations without degrading original test set performance.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper: the lack of scalable counterfactual generation and the trade-offs in inoculation experiments. It shows your ability to innovate beyond diagnostics toward improving model robustness.

**Grounded in:** Creating scalable methods for generating counterfactual and adversarial examples with label flips; Developing better models or training regimes that can handle both original and challenge datasets without performance degradation.

**Tech stack:** Python 3.11, PyTorch, transformers (HuggingFace), pandas, Jupyter Notebook, NLTK or SpaCy for NLP preprocessing

**Data:** Start with a tabular NLI dataset substitute (public or simulated) and augment it with automatically generated counterfactual examples using rule-based or heuristic perturbations on tables and hypotheses.

**Build it:**

1. Design and implement a data augmentation pipeline that creates label-flipped counterfactual examples by perturbing tables and hypotheses.
2. Integrate the augmented data with the original training set.
3. Fine-tune a RoBERTa-based NLI model on the combined dataset.
4. Evaluate model performance on original, challenge, and counterfactual test sets, measuring accuracy and evidence selection metrics.
5. Analyze trade-offs and improvements in evidence grounding compared to baseline models.
6. Document the augmentation methods, training procedure, evaluation, and insights in a comprehensive README.

**Ships as:** A GitHub repo with code for data augmentation, model fine-tuning, evaluation scripts, and a detailed report demonstrating improved robustness and evidence grounding in tabular NLI.

**Stretch goal:** Experiment with integrating external structured knowledge or reasoning modules to further enhance model grounding.

_The paper's authors released no code or dataset artifacts; all projects require simulating or substituting tabular NLI data and reimplementing methods from the paper's descriptions._
