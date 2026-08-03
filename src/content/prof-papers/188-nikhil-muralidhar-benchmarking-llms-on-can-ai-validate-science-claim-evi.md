---
title: "188 · Benchmarking LLMs on Can AI Validate Science? Claim → Evidence Reasoning in AI Papers — Nikhil Muralidhar"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-nikhil-muralidhar"
source_hash: "1adf1946a1114fe33491620b9a3d0823096bf8b73d9e1ad7757a6e4bec6e9324"
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
