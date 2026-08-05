---
title: "188 · Benchmarking LLMs on Can AI Validate Science? Claim → Evidence Reasoning in AI Papers — Nikhil Muralidhar"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nikhil-muralidhar"
source_hash: "cab72d07256976d416b7cb1c372ad17c07ba6790b037dafa05e3a708f0250ef2"
sequence: 188
generator: "outreach-garden: managed"
---

# 188 · Benchmarking LLMs on Can AI Validate Science? Claim → Evidence Reasoning in AI Papers

## At a glance

- **Professor:** Nikhil Muralidhar
- **Institution:** Stevens Institute of Technology
- **Paper:** [Benchmarking LLMs on Can AI Validate Science? Claim → Evidence Reasoning in AI Papers](https://aclanthology.org/2025.ijcnlp-long.127.pdf)
- **Authors:** Shashidhar Reddy Javaji, Yupeng Cao, Haohang Li, Yangyang Yu, Nikhil Muralidhar, Zining Zhu
- **Year:** 2025

## Paper overview

This paper introduces CLAIM-BENCH, a new benchmark dataset designed to evaluate how well large language models (LLMs) can identify scientific claims and validate them against supporting evidence within full AI research papers. The study tests six state-of-the-art LLMs using different prompting strategies and finds that while some models can identify claims and evidence, overall performance is limited, especially in linking claims to dispersed evidence across long documents. The work highlights challenges in scientific reasoning by LLMs and suggests directions for improving their comprehension and validation capabilities.

### Why it matters

**Research problem:** Large Language Models are increasingly used in academic research, but there is no integrated benchmark to evaluate their ability to perform claim-evidence reasoning—extracting claims and validating them against supporting evidence within full scientific papers, which requires deep understanding and long-range reasoning.

**Why it matters:** Accurate claim-evidence reasoning is essential for validating scientific findings and ensuring research integrity. Improving LLMs' capabilities in this area could enhance scientific workflows such as peer review, hypothesis generation, and literature review, ultimately accelerating knowledge discovery and scientific progress.

**Key contributions:**

- Creation of CLAIM-BENCH, a novel benchmark dataset with expert annotations for claim-evidence pairs in full-length AI research papers.
- Systematic evaluation of six state-of-the-art LLMs on claim-evidence reasoning tasks using multiple prompting strategies.
- Introduction of the sentence_gap metric to quantify the distance between claims and linked evidence, highlighting models' ability to handle long-range dependencies.
- Detailed analysis revealing precision-recall trade-offs, model size effects, and biases in claim and evidence types identified by LLMs.
- Insights into failure modes of LLMs in scientific reasoning, such as over-generation of false links and difficulty with long-range dependencies.

## About the professor

**Nikhil Muralidhar** — Assistant Professor, Department of Computer Science, Stevens Institute of Technology.

Research interests: Developing machine learning models incorporating scientific knowledge, Knowledge-Guided Machine Learning (KGML), Transfer Learning & Domain Adaptation, Multi-task & Meta Learning, Time-series Forecasting & Anomaly Detection, Disease Modeling (COVID-19, Influenza-Like-illnesses)

### Research links

- [Faculty/profile page](https://www.stevens.edu/profile/nmurali1)
- [Professor website](https://www.sites.google.com/view/nikhil-muralidhar)
- [Resolved homepage](https://sites.google.com/view/nikhil-muralidhar)
- [GitHub](https://github.com/nmuralid1/phydnn)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CLAIM-BENCH paper, start with foundational knowledge on long-range dependency modeling and prompting strategies for LLMs, as these are critical to the paper's focus on linking claims to dispersed evidence and improving LLM performance. Next, explore advanced scientific reasoning capabilities of large language models to grasp the challenges and current state of LLM scientific comprehension. Finally, focus on the paper's core concept by watching the authors' own talk to gain direct insights into their benchmark, evaluation methods, and findings.

### Long-range dependency modeling in NLP *(prerequisite)*
Understanding long-range dependency modeling is essential because CLAIM-BENCH highlights the difficulty LLMs face in connecting claims with evidence dispersed across long documents, sometimes spanning thousands of sentences. This section covers advanced NLP techniques and models that address these challenges, providing foundational knowledge for the paper's core problem.

*How the paper uses it:* CLAIM-BENCH introduces the sentence_gap metric to quantify long-range dependencies, making this foundational to understanding the paper's evaluation of LLMs.

▶ [Transformers for LLM (Full Course): Introduction](https://www.youtube.com/watch?v=KWGmNXGE5B0) — BrainOmega · 15:05

### Prompting strategies for LLMs *(prerequisite)*
Prompting strategies are key to improving LLM performance on complex tasks like claim-evidence linking. This section covers advanced prompt engineering and multi-step reasoning frameworks that relate directly to the iterative prompting strategies evaluated in the paper.

*How the paper uses it:* The paper evaluates Single-Pass, Three-Pass, and One-by-One prompting strategies, making understanding prompting techniques critical.

▶ [Prompting Large Language Models](https://www.youtube.com/watch?v=pK7baZjRYEM) — Mikołaj Morzy · 1:01:32

### Large language models scientific reasoning *(prerequisite)*
This section provides an in-depth look at how LLMs perform scientific reasoning, including their strengths and limitations. It contextualizes the CLAIM-BENCH findings within the broader landscape of LLM capabilities in scientific domains.

*How the paper uses it:* CLAIM-BENCH benchmarks LLMs on scientific claim-evidence reasoning, so understanding LLM scientific reasoning is foundational.

▶ [ADIA Lab Monthly Seminar: Reasoning Language Models](https://www.youtube.com/watch?v=5BgBzRer4LE) — ADIA Lab · 1:59:06

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides direct insight into the motivation, dataset creation, evaluation methodology, and key findings of CLAIM-BENCH. This is the most precise and authoritative resource to understand the paper's contributions and implications.

*How the paper uses it:* This is the authors' own recorded talk on the CLAIM-BENCH benchmark and their evaluation of LLMs.

▶ [AI Language Breakthroughs: June 9, 2025 Research Highlights](https://www.youtube.com/watch?v=mxjn5yt0o5Y) — AI Frontiers · 16:14

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand how large language models (LLMs) perform scientific claim-evidence reasoning as studied in the CLAIM-BENCH paper. We start with the basics of long-range dependency modeling in NLP, then cover prompting strategies that improve LLM performance, followed by how LLMs handle scientific reasoning tasks. Finally, we explain the core task of claim-evidence reasoning in NLP, culminating in insights directly relevant to the paper's benchmark and findings.

### Long-range dependency modeling in NLP *(prerequisite)*
Long-range dependency modeling is about how NLP models understand relationships between words or sentences that are far apart in a text. This is crucial because scientific papers often contain claims and evidence spread across many sentences or paragraphs. Understanding this helps grasp why LLMs struggle to link claims with dispersed evidence.

*How the paper uses it:* The paper highlights that models struggle with long-range dependencies when linking claims to evidence scattered throughout long documents.

▶ [Transformers for LLM (Full Course): Introduction](https://www.youtube.com/watch?v=KWGmNXGE5B0) — BrainOmega · 15:05

### Prompting strategies for LLMs *(prerequisite)*
Prompting strategies are methods to guide LLMs to perform complex tasks better by structuring their input prompts. Iterative prompting, for example, breaks down tasks into steps to improve recall and accuracy. Learning about these strategies clarifies how the paper evaluates different prompting methods to enhance claim-evidence extraction.

*How the paper uses it:* The paper evaluates Single-Pass, Three-Pass, and One-by-One prompting strategies to improve claim and evidence extraction performance.

▶ [Leveraging Prompt-Based Large Language Models ...](https://www.youtube.com/watch?v=ztPXztwdtvU) — ACM SIGCHI · 11:26

### Large language models scientific reasoning *(prerequisite)*
Scientific reasoning with LLMs involves how these models understand, interpret, and validate scientific information, which requires more than just language understanding—it demands logical and domain-specific reasoning. This foundation is key to appreciating the challenges and limitations discussed in the paper.

*How the paper uses it:* The paper benchmarks LLMs on their ability to perform scientific claim-evidence reasoning, a form of scientific reasoning.

▶ [On Memorization of Large Language Models in Logical ...](https://www.youtube.com/watch?v=eULIf02frIw) — Simons Institute for the Theory of Computing · 48:06

### Claim evidence reasoning in NLP
Claim-evidence reasoning is the process of identifying a claim and the supporting evidence that validates it, forming a logical argument. In NLP, this involves extracting these elements from text and linking them correctly. Understanding this concept is essential to grasp the core task the paper addresses with CLAIM-BENCH.

*How the paper uses it:* The paper introduces CLAIM-BENCH to evaluate how well LLMs can extract and link claims and evidence in scientific papers.

▶ [CER - Claim Evidence Reasoning](https://www.youtube.com/watch?v=5KKsLuRPsvU) — Bozeman Science · 7:25 · 9 years ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides unique insights into the motivation, methodology, and implications of the CLAIM-BENCH benchmark. This talk complements the foundational videos by connecting theory with the authors' firsthand experience and findings.

*How the paper uses it:* This video features the authors discussing their benchmark and findings on claim-evidence reasoning in AI papers.

▶ [AI Language Breakthroughs: June 9, 2025 Research Highlights](https://www.youtube.com/watch?v=mxjn5yt0o5Y) — AI Frontiers · 16:14

## Already in your library

- [Stanford CS25: V5 I Large Language Model Reasoning ...](https://www.youtube.com/watch?v=ebnX5Ur1hBk) — also for: Argumentative Human-AI Decision-Making: Toward AI Agents That Reason With Us, Not For Us (William Yeoh)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Self Attention in Transformers | Transformers in Deep Learning](https://www.youtube.com/watch?v=SO2-3YS6e-k) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth around CLAIM-BENCH, the benchmark for claim-evidence reasoning in AI papers. The beginner project focuses on reproducing and visualizing the novel sentence_gap metric to understand long-range dependencies. The intermediate project implements and evaluates a simplified claim-evidence extraction pipeline using iterative prompting strategies on a small scientific text dataset. The advanced project extends the benchmark approach by integrating domain-specific scientific knowledge to improve claim-evidence validation accuracy and efficiency, addressing key limitations noted in the paper.

### Beginner — Visualize Sentence Gap Metric on Sample Claim-Evidence Pairs
*Effort: a weekend, ~8 hours*

You build a small tool that computes and visualizes the sentence_gap metric, which measures the distance in sentences between claims and their linked evidence in scientific texts. Using a small set of manually created claim-evidence pairs from AI research paper excerpts, you plot distributions of sentence gaps to illustrate long-range dependencies.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's novel metric for quantifying long-range dependencies in claim-evidence reasoning, a core challenge identified by the authors.

**Grounded in:** Introduction of the sentence_gap metric to quantify the distance between claims and linked evidence, highlighting models' ability to handle long-range dependencies.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, pandas

**Data:** Simulated small dataset of claim-evidence sentence pairs created from excerpts of AI research papers, since the authors released no dataset.

**Build it:**

1. Create a small sample dataset of claim-evidence pairs with sentence indices from AI paper excerpts.
2. Implement a function to compute sentence_gap as the absolute difference between claim and evidence sentence indices.
3. Plot histograms and boxplots of sentence_gap values to visualize distribution.
4. Write a README explaining the metric, its significance, and your visualization results.

**Ships as:** A Jupyter notebook and README showing sentence_gap computations and visualizations on sample data, illustrating long-range claim-evidence links.

**Stretch goal:** Add interactive visualizations using Plotly or Dash to explore sentence gaps dynamically.

### Intermediate — Implement Iterative Prompting for Claim-Evidence Extraction
*Effort: 2 weekends, ~20 hours*

You implement a simplified pipeline that uses iterative prompting strategies (Single-Pass and Three-Pass) with an open-source LLM API to extract claims and evidence from short AI research paper abstracts or introductions. You compare precision, recall, and F1-score of claim identification between strategies.

**Why it shows you understood the paper:** This project faithfully reproduces the paper's core method of evaluating prompting strategies on claim-evidence reasoning, showing your ability to implement and measure model performance on scientific text tasks.

**Grounded in:** Systematic evaluation of six state-of-the-art LLMs on claim-evidence reasoning tasks using multiple prompting strategies; Iterative prompting strategies significantly improve recall compared to Single-Pass.

**Tech stack:** Python 3.11, FastAPI, OpenAI API or HuggingFace transformers, pandas, scikit-learn

**Data:** Use publicly available AI research paper abstracts or introductions from arXiv as a proxy dataset; manually annotate a small subset for claims and evidence.

**Build it:**

1. Collect a small set (~20) of AI paper abstracts or introductions from arXiv.
2. Manually annotate claim and evidence sentences for this subset.
3. Implement Single-Pass and Three-Pass prompting strategies using an open-source LLM or OpenAI API.
4. Run the prompts to extract claims and evidence, then link them.
5. Compute precision, recall, and F1-score for claim identification and evidence extraction.
6. Write a report comparing the strategies and discussing trade-offs.

**Ships as:** A Python project with scripts to run iterative prompting on scientific abstracts, evaluation metrics, and a report comparing prompting strategies.

**Stretch goal:** Add the One-by-One prompting strategy and evaluate its computational cost versus performance gains.

### Advanced — Integrate Domain Knowledge to Improve Claim-Evidence Validation
*Effort: 3-4 weeks*

You develop an extended claim-evidence reasoning system that incorporates domain-specific scientific knowledge (e.g., physical laws or fluid dynamics constraints) as additional context or constraints to improve the accuracy and efficiency of claim-evidence validation in AI research papers. You evaluate the system on a small set of annotated papers and compare it to baseline LLM prompting without domain knowledge.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by integrating scientific knowledge to address precision-recall trade-offs and computational costs, demonstrating deep comprehension and innovation beyond the original benchmark.

**Grounded in:** Future directions: Developing novel LLM architectures with enhanced long-context understanding and scientific reasoning capabilities; Leveraging claim-evidence reasoning improvements to build advanced AI tools for peer review and scientific QA.

**Tech stack:** Python 3.11, FastAPI, OpenAI API or Anthropic Claude API, pandas, domain knowledge libraries (e.g., SymPy for physics)

**Data:** Small manually annotated subset of AI research papers with claim-evidence pairs; domain knowledge encoded as rules or constraints relevant to the paper topics.

**Build it:**

1. Select a small set of AI research papers with annotated claim-evidence pairs.
2. Encode relevant domain knowledge (e.g., physical laws) as constraints or prompts.
3. Modify the prompting pipeline to incorporate domain knowledge during claim-evidence validation.
4. Evaluate the system's precision, recall, and F1-score compared to baseline prompting.
5. Analyze computational cost and discuss trade-offs.
6. Document methodology, results, and potential improvements.

**Ships as:** A research prototype with code integrating domain knowledge into claim-evidence reasoning, evaluation results, and a detailed README discussing improvements and limitations.

**Stretch goal:** Extend the system to handle multimodal data or cross-paper evidence integration as suggested by the paper.
