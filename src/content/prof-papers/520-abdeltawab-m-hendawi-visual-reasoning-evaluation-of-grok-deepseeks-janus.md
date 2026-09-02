---
title: "520 · Visual Reasoning Evaluation of Grok, Deepseek’s Janus, Gemini, Qwen, Mistral, and ChatGPT — Abdeltawab M. Hendawi"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-abdeltawab-m-hendawi"
source_hash: "11549e23cf49dafe36fa31404d88141f838942108ed68bbf145d65edc848e36f"
sequence: 520
generator: "outreach-garden: managed"
---

# 520 · Visual Reasoning Evaluation of Grok, Deepseek’s Janus, Gemini, Qwen, Mistral, and ChatGPT

## At a glance

- **Professor:** Abdeltawab M. Hendawi
- **Institution:** University of Rhode Island
- **Paper:** [Visual Reasoning Evaluation of Grok, Deepseek’s Janus, Gemini, Qwen, Mistral, and ChatGPT](https://arxiv.org/pdf/2502.16428)
- **Authors:** Nidhal Jegham, Marwan Abdelatti, Abdeltawab Hendawi
- **Year:** 2025

## Paper overview

This paper introduces a new benchmark to evaluate multimodal large language models (LLMs) on complex visual reasoning tasks involving multiple images. It assesses models not only on accuracy but also on reasoning consistency, bias, and uncertainty calibration using novel metrics like entropy and rejection accuracy. The study compares several state-of-the-art models, revealing that proprietary models like ChatGPT variants outperform open-source ones, and that model size alone does not guarantee better performance.

### Why it matters

**Research problem:** Existing evaluations of multimodal LLMs focus mainly on single-image reasoning and do not adequately assess reasoning stability, uncertainty calibration, or positional biases. There is a need for benchmarks that evaluate multi-image reasoning, rejection of unanswerable questions, and consistency across reordered answer choices.

**Why it matters:** Robust and reliable multimodal AI systems require genuine comprehension beyond pattern recognition or heuristic shortcuts. Without evaluating reasoning stability and uncertainty calibration, models may perform well on benchmarks but fail in real-world applications, limiting their trustworthiness and usefulness.

**Key contributions:**

- Development of a novel benchmark combining multi-image reasoning, reordered answer variations, rejection-based evaluation, and entropy-based reasoning consistency.
- Introduction of entropy as a metric to quantify reasoning stability and detect positional biases across reordered answer variants.
- Comprehensive evaluation of nine state-of-the-art multimodal LLMs on diverse visual reasoning tasks.
- Demonstration that model size alone does not guarantee superior performance or reasoning stability.
- Identification of significant performance gaps between proprietary and open-source models in multimodal reasoning.

## About the professor

**Abdeltawab M. Hendawi** — Associate Professor in Computer Science and Data Science, University of Rhode Island.

Research interests: AI and Big Data; Applications in various domains such as Smart City, Smart Health

### Research links

- [Faculty/profile page](https://homepage.cs.uri.edu/~ahendawi)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Multimodal Machine Learning
**The paper assumes:** multimodal machine learning, large language models, visual reasoning evaluation, uncertainty calibration
**Already in this field?** Skip this entirely if you already understand how multimodal AI models integrate and reason over visual and textual data.

This background prepares the reader to understand the foundations and evaluation methods of multimodal machine learning, crucial for grasping the paper's novel benchmark and metrics for multimodal LLMs. The rigorous course option offers a deep, structured university-level lecture series on multimodal machine learning, while the fast track provides a shorter, focused playlist for quicker conceptual grounding. Choose the course for comprehensive mastery or the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU Fall 2023 Multimodal Machine Learning course (11-777)](https://www.youtube.com/playlist?list=PL-Fhd_vrvisMYs8A5j7sj8YW1wHhoJSmW) — LP Morency · 18 videos · 20.1h across the first 17 episodes

**Watch only this:** Lectures 1.1 - Introduction, 1.2 - Multimodal Research Task, 2.1 & 2.2 - Unimodal Representation Parts 1 & 2, 3.1 & 3.2 - Multimodal Representation Fusion and Coordination, 4.1 & 4.2 - Multimodal Alignment and Aligned Representation, 5.1 & 5.2 - Multimodal Transformers Part 1 and Structured Representations and Reasoning, 6.1 - Multimodal Transformers Part 2, 7.1 & 7.2 - Multimodal Interaction and Inference and Knowledge, totaling about 11.5 hours — these cover core concepts and reasoning relevant to the paper.

*Why it unblocks this paper:* This is a recent (Fall 2023) Carnegie Mellon University course on Multimodal Machine Learning by LP Morency, covering foundational concepts, multimodal representations, alignment, transformers, reasoning, and generation, directly relevant to the paper's focus on multi-image reasoning and evaluation of multimodal LLMs.

*If you want all of it:* About 20.1 hours across 18 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Multimodal Machine Learning | CVPR 2022 Tutorial](https://www.youtube.com/playlist?list=PLki3HkfgNEsKPcpj5Vv2P98SRAT9wxIDa) — Artificial Intelligence · 7 videos

**Watch only this:** Watch the first 4 videos (about 1.5 to 2 hours estimated) covering introduction, core concepts, and evaluation techniques — enough to understand the basics of multimodal learning relevant to the paper.

*Why it unblocks this paper:* This CVPR 2022 tutorial playlist offers a concise, well-produced introduction to multimodal machine learning, suitable for quickly grasping key concepts such as multimodal fusion, alignment, and evaluation metrics, which underpin the paper's benchmark design.

*If you want all of it:* About 4 to 5 hours total across 7 videos (exact durations not specified).

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on visual reasoning evaluation of multimodal large language models, start with foundational concepts such as visual reasoning in AI, uncertainty calibration in machine learning, and entropy metrics for model consistency. Then, explore evaluation frameworks specific to multimodal large language models to grasp the benchmark design. Finally, conclude with the paper authors' own talks and related advanced research presentations on visual reasoning and multimodal LLM evaluation to connect theory with the paper's novel contributions.

### Visual Reasoning in AI *(prerequisite)*
Visual reasoning is the foundational capability underlying the paper's focus on reasoning across multiple images. Understanding how AI systems represent, interpret, and reason about visual information is critical to appreciating the challenges and innovations in multimodal LLM evaluation.

*How the paper uses it:* The paper evaluates multimodal LLMs on complex visual reasoning tasks involving multiple images.

▶ [[MERL Seminar Series Spring 2026] World Models and Human-like Reasoning](https://www.youtube.com/watch?v=vT0jNMDGem4) — Mitsubishi Electric Research Laboratories (MERL) · 48:52 · 5 months ago

### Uncertainty Calibration in Machine Learning *(prerequisite)*
Uncertainty calibration is key to understanding how models handle ambiguous or unanswerable visual questions, a central aspect of the paper's evaluation methodology. This concept helps in assessing model reliability and decision-making under uncertainty.

*How the paper uses it:* The paper analyzes rejection accuracy and abstention rates to assess uncertainty calibration in multimodal LLMs.

▶ [Probability Calibration for Predictive Machine Learning: Hao Song (University of Bristol)](https://www.youtube.com/watch?v=gZ-5MYskKGw) — SFI Visual Intelligence · 42:47 · 5 years ago

### Entropy Metrics for Model Consistency *(prerequisite)*
Entropy is introduced in the paper as a novel metric to quantify reasoning stability and detect positional biases. A solid understanding of entropy and its application in measuring model consistency is essential to grasp the paper's methodological innovations.

*How the paper uses it:* Entropy metrics are used to quantify reasoning consistency and detect positional biases across reordered answer variants.

▶ [Entropy || @ CMU || Lecture 24a of CS Theory Toolkit](https://www.youtube.com/watch?v=b6x4AmjdvvY) — Ryan O'Donnell · 24:36 · 6 years ago

### Multimodal Large Language Models Evaluation
Evaluating multimodal LLMs requires specialized frameworks that consider multiple modalities and complex reasoning tasks. This section covers advanced evaluation techniques and metrics relevant to the paper's benchmark design and comparative analysis.

*How the paper uses it:* The paper develops a novel benchmark and evaluation protocol for multimodal LLMs on multi-image reasoning tasks.

▶ [Stanford CME296 Diffusion & Large Vision Models | Spring 2026 | Lecture 7 - Evaluation](https://www.youtube.com/watch?v=iNaRBp4T57Q) — Stanford Online · 1:41:12 · 3 months ago

### Paper Authors Talk *(the paper's own talk)*
Direct talks by the authors or closely related research presentations provide the most precise insights into the paper's contributions, methodology, and findings. These talks often reveal nuanced details and contextualize the work within the broader research landscape.

*How the paper uses it:* While no direct talk by the paper authors was found, related advanced talks on visual reasoning and multimodal benchmarks provide valuable context.

▶ [Visual Reasoning will be bigger than language reasoning -  Ranjay Krishna (University of Washington)](https://www.youtube.com/watch?v=IRIaPqsGUy0) — HiTZ zentroa · 1:15:16 · 4 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper's evaluation of multimodal large language models (LLMs) on visual reasoning tasks. We start with the basics of uncertainty calibration in machine learning, then build intuition on entropy as a metric for model consistency, followed by an introduction to visual reasoning in AI. Next, we cover multimodal LLMs and their evaluation frameworks, culminating in insights from talks by paper authors and related research to connect all concepts to the paper's novel benchmark and findings.

### Uncertainty Calibration in Machine Learning *(prerequisite)*
Uncertainty calibration helps us understand how well a model's predicted probabilities reflect true likelihoods, especially important when models face ambiguous or unanswerable questions. This foundation is key to grasping how the paper assesses models' ability to reject uncertain visual queries reliably.

*How the paper uses it:* The paper evaluates models' uncertainty calibration through rejection accuracy and abstention rates to assess reliability.

▶ [Probability Calibration : Data Science Concepts](https://www.youtube.com/watch?v=AunotauS5yI) — ritvikmath · 10:23 · 4 years ago

### Entropy Metrics for Model Consistency *(prerequisite)*
Entropy measures the unpredictability or variability in a model's responses, serving as a quantitative way to detect reasoning instability or positional biases. Understanding entropy provides intuition for how the paper quantifies reasoning consistency across reordered answer choices.

*How the paper uses it:* Entropy is introduced as a novel metric to quantify reasoning stability and detect positional biases in multimodal LLMs.

▶ [Reinventing Entropy | Compression is Intelligence Part 1](https://www.youtube.com/watch?v=l6DKRf-fAAM) — 3Blue1Brown · 32:20 · 2 months ago

### Visual Reasoning in AI *(the paper's own talk)*
Visual reasoning involves interpreting and making logical inferences from images, a core challenge for AI systems that combine vision and language understanding. This concept underpins the paper's focus on evaluating complex reasoning across multiple images.

*How the paper uses it:* The paper benchmarks multimodal LLMs on complex visual reasoning tasks involving multiple images.

▶ [Visual Reasoning will be bigger than language reasoning -  Ranjay Krishna (University of Washington)](https://www.youtube.com/watch?v=IRIaPqsGUy0) — HiTZ zentroa · 1:15:16 · 4 months ago

### Multimodal Large Language Models Evaluation
Evaluating multimodal LLMs requires specialized frameworks that assess their understanding across text and images, including metrics beyond accuracy such as reasoning consistency and uncertainty. This section introduces these evaluation principles relevant to the paper's benchmark design.

*How the paper uses it:* The paper develops a novel benchmark integrating multi-image reasoning, reordered answers, and uncertainty calibration for multimodal LLMs.

▶ [What is Multimodal Large Language Model (LLM)?](https://www.youtube.com/watch?v=_b1OAk8PKTA) — BrainOmega · 6:34 · 1 year ago

### Paper Authors Talk
Hearing directly from researchers provides unique insights into the motivation, methodology, and implications of their work. This talk complements the technical understanding by contextualizing the benchmark and findings in the broader AI research landscape.

*How the paper uses it:* Direct insight from the authors on their novel benchmark and findings in multimodal visual reasoning evaluation.

▶ [BabyVision: Benchmark for MLLM visual reasoning](https://www.youtube.com/watch?v=Xt6iDv29sIs) — AI Research Roundup · 4:19 · 7 months ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 6 - LLM Reasoning](https://www.youtube.com/watch?v=k5Fh-UgTuCo) — also for: In-Context Algebra (David Bau)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Introduction to Large Language Models](https://www.youtube.com/watch?v=RBzXsQHjptQ) — also for: Large Language Models for Designing Participatory Budgeting Rules (Hau Chan)
- [Stanford CS25: V5 I Large Language Model Reasoning ...](https://www.youtube.com/watch?v=ebnX5Ur1hBk) — also for: Argumentative Human-AI Decision-Making: Toward AI Agents That Reason With Us, Not For Us (William Yeoh)
- [MIT 6.S191: Evidential Deep Learning and Uncertainty](https://www.youtube.com/watch?v=toTcf7tZK8c) — also for: End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data (Fahad Saeed)
- [Entropy (for data science) Clearly Explained!!!](https://www.youtube.com/watch?v=YtebGVx-Fxw) — also for: How Does Machine Learning Manage Complexity? (Lance Fortnow)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's novel benchmark and metrics for evaluating multimodal large language models on multi-image visual reasoning tasks. Starting with a small-scale reproduction of the entropy metric on reordered answers, you then implement the core evaluation method on a public multi-image reasoning dataset, and finally extend the approach by exploring uncertainty calibration and rejection accuracy, addressing a stated limitation of the paper.

### Beginner — Entropy Metric for Reasoning Consistency on Reordered Answers
*Effort: a weekend, ~8 hours*

You build a small Python script that calculates entropy-based reasoning consistency scores for a set of model answers to reordered multiple-choice visual reasoning questions. Using simulated or publicly available multi-image question-answer pairs with reordered answer choices, you compute entropy to detect positional bias and reasoning instability.

**Why it shows you understood the paper:** This project shows you grasp the paper's novel use of entropy as a metric to quantify reasoning stability and positional bias, a key contribution that goes beyond traditional accuracy metrics.

**Grounded in:** Introduction of entropy as a metric to quantify reasoning stability and detect positional biases across reordered answer variants.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Simulated multi-image multiple-choice questions with reordered answer variants, as the paper's dataset is not publicly released.

**Build it:**

1. Create or simulate a small dataset of multi-image questions with multiple-choice answers and reordered variants of answer choices.
2. Write a function to compute entropy of model predictions across reordered answer variants for each question.
3. Visualize entropy scores and identify examples of high and low entropy indicating unstable and stable reasoning.
4. Document the script and results in a Jupyter Notebook with explanations linking to the paper's metric.

**Ships as:** A Jupyter Notebook demonstrating entropy calculation on reordered answer variants with visualizations and explanations.

**Stretch goal:** Add a simple baseline model that randomly selects answers to show higher entropy compared to a consistent heuristic model.

### Intermediate — Reimplementing Multi-Image Reasoning Evaluation with Entropy and Rejection Metrics
*Effort: 1-3 weekends*

You implement the core evaluation benchmark described in the paper by selecting a subset of multi-image visual reasoning questions from a public dataset (e.g., VQA 2.0 or CLEVR with multi-image extensions) and evaluate a multimodal LLM or vision-language model zero-shot. You compute accuracy, entropy-based reasoning consistency, and rejection accuracy metrics to compare model performance and uncertainty calibration.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core evaluation methodology, including multi-image reasoning, entropy metrics, and rejection-based uncertainty calibration, showing comprehension of the benchmark design and metrics.

**Grounded in:** The authors extend the MUIRBench dataset by selecting a balanced subset of multi-image questions and introduce a benchmark integrating multi-image reasoning, reordered answer choices, rejection-based evaluation, and entropy-based metrics.

**Tech stack:** Python 3.11, PyTorch, Transformers, Jupyter Notebook, NumPy, Matplotlib

**Data:** Public multi-image visual reasoning dataset such as a subset of VQA 2.0 or CLEVR adapted for multi-image questions, used as a proxy for MUIRBench.

**Build it:**

1. Select or adapt a public multi-image visual reasoning dataset with multiple-choice questions.
2. Implement zero-shot evaluation of a multimodal LLM or vision-language model (e.g., OpenAI CLIP + GPT or HuggingFace multimodal models) on this dataset.
3. Implement entropy calculation over reordered answer variants for each question to assess reasoning consistency.
4. Implement rejection-based evaluation by allowing the model to abstain on unanswerable questions and compute rejection accuracy.
5. Compare model accuracy, entropy, and rejection accuracy metrics and visualize results.
6. Write a detailed README explaining the evaluation protocol and metrics with references to the paper.

**Ships as:** A GitHub repo with code to run zero-shot multi-image reasoning evaluation, compute entropy and rejection metrics, and visualize results.

**Stretch goal:** Add a simple baseline model (e.g., majority class or random) for comparison and analyze differences in entropy and rejection behavior.

### Advanced — Extending Entropy-Based Metrics for Uncertainty Calibration in Multimodal LLMs
*Effort: a few weeks*

You develop an extension of the paper's entropy-based reasoning consistency metric by integrating it with uncertainty calibration and strategic abstention mechanisms. Using a multimodal model and a multi-image reasoning dataset, you analyze how entropy correlates with rejection accuracy and abstention rates. You implement a method to optimize model abstention thresholds to balance accuracy and rejection, addressing the paper's limitation on uncertainty calibration.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper by exploring uncertainty calibration and strategic abstention, demonstrating deep engagement with the paper's contributions and open problems.

**Grounded in:** Further investigation into uncertainty calibration and strategic abstention to improve model reliability; entropy as a novel metric requiring further validation.

**Tech stack:** Python 3.11, PyTorch, Transformers, Jupyter Notebook, NumPy, Matplotlib, scikit-learn

**Data:** Proxy multi-image visual reasoning dataset adapted from public sources (e.g., VQA 2.0 or CLEVR) with simulated unanswerable questions for rejection evaluation.

**Build it:**

1. Implement entropy-based reasoning consistency metric and rejection accuracy evaluation as in the intermediate project.
2. Simulate or identify unanswerable questions in the dataset to test model abstention behavior.
3. Analyze correlation between entropy scores and model confidence or rejection decisions.
4. Implement threshold-based abstention mechanism to optimize the trade-off between accuracy and rejection rate.
5. Evaluate improvements in uncertainty calibration and report metrics including balanced rejection accuracy and abstention rate.
6. Document findings and discuss implications for multimodal LLM reliability and environmental sustainability.

**Ships as:** A comprehensive GitHub repo with code, analysis notebooks, and a report on entropy-based uncertainty calibration and abstention optimization.

**Stretch goal:** Extend the approach to other multimodal reasoning tasks or datasets to validate generalizability of entropy-based metrics.

_The paper's own dataset and code are not publicly released; all projects rely on simulated or proxy datasets and reimplementation of described methods._
