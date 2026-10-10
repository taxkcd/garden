---
title: "615 · “The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims — Yu Fu"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yu-fu"
source_hash: "97327dc75145dfe1e879d8ec79e3dd1aed1731690b038879d841edf54b43281c"
sequence: 615
generator: "outreach-garden: managed"
---

# 615 · “The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims

## At a glance

- **Professor:** Yu Fu
- **Institution:** University of Central Florida
- **Paper:** [“The Data Says Otherwise” – Towards Automated Fact-checking and Communication of Data Claims](https://doi.org/10.1145/3654777.3676359)
- **Authors:** Yu Fu, Shunan Guo, Victor S. Bursztyn, Jane Hoffswell, Ryan Rossi, John Stasko
- **Year:** 2024

## Paper overview

This paper presents Aletheia, a prototype system that automates fact-checking of data claims found in articles by using large language models (LLMs) to parse claims, retrieve relevant data evidence, and communicate verification results through tables and visualizations. The system aims to help journalists, editors, and readers quickly verify the accuracy of numeric or statistical claims by providing clear evidence and interactive tools to correct AI mistakes or add new data sources.

### Why it matters

**Research problem:** Manual fact-checking of data claims is tedious, error-prone, and cannot keep up with the volume of information. Existing automated fact-checking mainly focuses on text-based claims and lacks effective methods for verifying and communicating claims grounded in structured data.

**Why it matters:** Misinformation from inaccurate or manipulated data claims can mislead the public and degrade trust in journalism and information ecosystems. Automating fact-checking for data claims can improve accuracy, efficiency, and transparency in news and data-rich environments.

**Key contributions:**

- A modified automated fact-checking framework specifically for data claims with six components: claim detection, text-to-data mapping, evidence retrieval, verdict determination, evidence presentation, and user interaction.
- Aletheia prototype integrating a chained LLM pipeline (using GPT-3.5/4) for parsing data claims into structured fact specifications and retrieving relevant data evidence.
- Design of 26 data evidence representations (tables and visualizations) tailored to 13 subtypes of data facts to effectively communicate evidence.
- User interaction features allowing users to override AI inferences, correct errors, and add new reference datasets to improve fact-checking reliability.
- An evaluation on a curated dataset of 400 data claims showing high classification accuracy (perfect with GPT-4) and 89.5% average success in fact specification transformation.

## About the professor

**Yu Fu** — Assistant Professor, Department of Computer Science, University of Central Florida.

Research interests: Data Visualization and Visual Analytics, Human-Computer Interaction (HCI), AI-powered Data Analysis and Communication, Digital Twin, Sports Analytics

### Research links

- [Faculty/profile page](https://www.cs.ucf.edu/person/yufu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Natural Language Processing with Large Language Models
**The paper assumes:** foundations of natural language processing, large language model architectures, semantic parsing techniques, prompt engineering for LLMs, and NLP pipelines
**Already in this field?** Skip this entirely if you already understand how large language models work for semantic parsing and NLP pipelines in applied AI systems.

This background playlist selection is to help readers understand the core natural language processing techniques involving large language models (LLMs) that underpin the Aletheia system's automated fact-checking pipeline. The rigorous course provides a deep, structured university-level foundation on LLM architectures, training, and prompting, while the fast track offers a concise, intuitive introduction to NLP concepts and LLM parameters for quicker comprehension. Choose the rigorous course for a thorough technical grounding or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Large Language Models (LLMs)](https://www.youtube.com/playlist?list=PLp6ek2hDcoNDDRINFiWGDlPKUwW-g1Hjk) — NPTEL IIT Delhi · 38 videos · 29.0h across 38 episodes

**Watch only this:** Lectures 1 through 23 (the entire playlist), about 17 hours — this covers from NLP basics, statistical and neural language models, tokenization, Transformer architecture, pre-training strategies, and advanced prompting techniques essential to understanding the paper's LLM pipeline.

*Why it unblocks this paper:* This NPTEL IIT Delhi course titled 'Introduction to Large Language Models (LLMs)' covers foundational NLP concepts, Transformer architectures, and recent advances in LLM research including prompting and alignment, which directly relate to the paper's use of GPT-3.5/4 for semantic parsing and fact-checking pipelines.

*If you want all of it:* 29.0 hours across 38 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Natural Language Processing](https://www.youtube.com/playlist?list=PLvcbYUQ5t0UEK2KAGyUP7JO9K-Arct8OM) — ritvikmath · 14 videos · 3.8h across 14 episodes

**Watch only this:** Episodes 1 through 7, about 1.9 hours — covering key LLM parameters, chatbot evaluation, important NLP metrics, phrase detection, and foundational recurrent neural networks to quickly grasp the basics relevant to the paper's NLP pipeline.

*Why it unblocks this paper:* This 'Natural Language Processing' playlist by ritvikmath offers concise, clear explainers on core NLP concepts including word embeddings, sequence models, and evaluation metrics, providing an accessible introduction to the NLP foundations that support understanding LLM-based fact-checking.

*If you want all of it:* 3.8 hours across 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "The Data Says Otherwise" on automated fact-checking of data claims using LLMs and interactive visualizations, start by building foundational knowledge in natural language processing with large language models, information retrieval from structured datasets, data visualization for communication, and human-computer interaction focusing on user feedback. After grasping these prerequisites, focus on the core concept of automated fact-checking of data claims, culminating with the authors' own presentation of their Aletheia system to see the integration of all these components in practice.

### Large language models natural language processing *(prerequisite)*
Understanding how large language models (LLMs) work is essential because the paper's system uses LLMs to parse and semantically analyze data claims. The recommended video is a detailed Stanford lecture that covers transformer architectures and LLM fundamentals at a graduate level, providing the necessary depth for advanced readers.

*How the paper uses it:* LLMs are core to parsing and semantic understanding of data claims in the system.

▶ [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 2 - Large Language Models](https://www.youtube.com/watch?v=GaIeu3npx04) — Stanford Online · 1:43:15 · 21h ago

### Information retrieval from structured datasets *(prerequisite)*
The paper relies on retrieving relevant evidence from structured datasets to verify claims. A comprehensive university lecture on information retrieval in high-dimensional data offers a rigorous academic treatment of retrieval techniques applicable to structured data, which underpins the evidence retrieval step in the paper.

*How the paper uses it:* Retrieving relevant data evidence from datasets underpins the fact-checking verification process.

▶ [Introduction to Information Retrieval in High Dimensional Data - 02.11.2020 - IRHDD, TUM](https://www.youtube.com/watch?v=xdeelKgbA4s) — Muhammad Umer Anwaar · 1:22:21 · 5y ago

### Data visualization for communication *(prerequisite)*
Effective communication of fact-checking evidence through tables and visualizations is a key contribution of the paper. The selected talk from Duke University provides advanced insights into data visualization principles and design techniques, which are crucial for understanding how to present data evidence effectively.

*How the paper uses it:* Effective presentation of evidence via tables and visualizations is key to user understanding.

▶ [Tips for Effective Data Visualization | Dr. Eric Monson (Duke University Libraries)](https://www.youtube.com/watch?v=17USKIW1DUM) — Duke University Energy Initiative (ARCHIVED) · 41:49 · 4y ago

### Human-computer interaction user feedback *(prerequisite)*
User interaction features that allow correction and augmentation of AI inferences improve system reliability. The chosen guest lecture on user experience in HCI offers an academic perspective on designing interactive systems that enhance user feedback and control, relevant to the paper's user interaction design.

*How the paper uses it:* User interaction features allow correction and augmentation of AI inferences, improving system reliability.

▶ [User Experience in Human Computer Interaction](https://www.youtube.com/watch?v=xlIiJnt1FCo) — HIMSI UNAIR · 1:37:13 · Streamed 4y ago

### Automated fact-checking data claims *(paper-talk search result; attribution unverified)*
This is the core concept of the paper: automated verification of data-driven claims using LLMs and tailored evidence presentation. The authors' own recorded talk at UIST 2024 directly presents their system Aletheia, methodology, and evaluation results, making it the most authoritative and relevant resource for understanding the paper in depth.

*How the paper uses it:* Central method of the paper: automated verification of data-driven claims using LLMs and evidence presentation.

▶ [https://www.youtube.com › watch?v=l02UjMduKoE](https://www.youtube.com/watch?v=l02UjMduKoE) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts necessary to understand automated fact-checking of data claims as presented in the Aletheia system. We start with basics of data visualization and information retrieval to grasp how data evidence is communicated and accessed. Then, we cover natural language processing with large language models to understand claim parsing, followed by human-computer interaction principles for user feedback. Finally, we focus on the core concept of automated fact-checking of data claims using LLMs and interactive visualizations.

### Data visualization for communication *(prerequisite)*
Learn how to effectively present data using visual elements like charts and tables to communicate insights clearly and intuitively. Good visualization helps users quickly understand complex data, which is critical for verifying data claims.

*How the paper uses it:* Aletheia uses tailored visualizations and tables to communicate evidence for fact-checking data claims, improving user confidence and review speed.

▶ [Tips for Effective Data Visualization | Dr. Eric Monson (Duke University Libraries)](https://www.youtube.com/watch?v=17USKIW1DUM) — Duke University Energy Initiative (ARCHIVED) · 41:49 · 4y ago

### Information retrieval from structured datasets *(prerequisite)*
Understand the basics of retrieving relevant information from structured data sources, which involves searching and filtering datasets to find evidence supporting or refuting claims.

*How the paper uses it:* Aletheia retrieves relevant data evidence from authoritative datasets to verify the truthfulness of data claims.

▶ [Introduction to Information retrieval](https://www.youtube.com/watch?v=Q72hzU1Z6aQ) — Shilpa Mene · 13:01 · 5y ago

### Large language models natural language processing *(prerequisite)*
Explore how large language models (LLMs) process and understand human language to extract meaning, enabling automated parsing of complex data claims into structured formats.

*How the paper uses it:* Aletheia uses a chained LLM pipeline to parse natural language data claims into JSON specifications for fact-checking.

▶ [Lecture 1: Natural Language Processing and Large Language Model](https://www.youtube.com/watch?v=ffPT5ddW-T4) — Arewa Data Science Academy · 59:24 · 8mo ago

### Human-computer interaction user feedback *(prerequisite)*
Learn how users interact with computer systems and how feedback mechanisms improve usability and reliability by allowing corrections and augmentations.

*How the paper uses it:* Aletheia supports user interactions to correct AI mistakes and add new datasets, enhancing fact-checking accuracy and trust.

▶ [HCI - Human Computer Interaction. What Is HCI?](https://www.youtube.com/watch?v=yNzLBI0wsGU) — IxDF - Interaction Design Foundation · 6:00 · 3y ago

### Automated fact-checking data claims
Understand the methods and challenges of automatically verifying data-driven claims by combining NLP, data retrieval, and evidence presentation to assess claim veracity.

*How the paper uses it:* This is the core method of the paper, implemented in the Aletheia system to automate fact-checking of numeric and statistical claims.

▶ [Automated Fact Checking Talk @ Global Fact 7](https://www.youtube.com/watch?v=lD4tKm8qsLs) — Immanuel Trummer · 1:11:01 · 6y ago

### Aletheia automated fact-checking talk *(paper-talk search result; attribution unverified)*
Watch the authors’ own presentation to get a concise overview of the Aletheia system, its design, evaluation, and user study results, providing direct insight into the paper’s contributions.

*How the paper uses it:* This talk directly presents the Aletheia prototype and its approach to automated fact-checking of data claims.

▶ [https://www.youtube.com › watch?v=l02UjMduKoE](https://www.youtube.com/watch?v=l02UjMduKoE) — YouTube result via DuckDuckGo

## Already in your library

- [Lecture 1 | Natural Language Processing with Deep Learning](https://www.youtube.com/watch?v=OQQ-W_63UgQ) — also for: Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children (Robert H. Sloan)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Everything You Need To Know About Large Language Models (LLMs)](https://www.youtube.com/watch?v=osKyvYJ3PRM) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [Lecture 23: Visualizing Data](https://www.youtube.com/watch?v=C5JjMP8m-4E) — also for: Data Visualization Literacy (Katy Börner)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the Aletheia system for automated fact-checking of data claims using LLMs and interactive visualizations. The beginner project reproduces a core visualization concept from the paper. The intermediate project implements the paper's NLP pipeline for claim parsing and fact specification transformation on a small dataset. The advanced project extends the system to address a stated limitation by supporting multiple heterogeneous datasets for evidence retrieval.

### Beginner — Interactive Visualization of Data Evidence for Fact-Checking
*Effort: a weekend, ~8 hours*

You build a React web app that displays data evidence for simple numeric claims using interactive tables and charts inspired by the paper's 26 data evidence representations. The app lets users toggle between table and visualization views for a small set of predefined data claims and their supporting data.

**Why it shows you understood the paper:** This project shows you grasp how the paper designs tailored visualizations to communicate fact-checking evidence effectively and how user interaction improves review confidence and speed.

**Grounded in:** Design of 26 data evidence representations (tables and visualizations) tailored to 13 subtypes of data facts to effectively communicate evidence.

**Tech stack:** React, TypeScript, D3.js or Chart.js

**Data:** Simulated small numeric datasets representing simple data claims (e.g., population counts, percentages) since no public dataset is provided.

**Build it:**

1. Create a React app with a list of predefined data claims and their supporting numeric data.
2. Implement interactive tables showing raw data for each claim.
3. Implement corresponding visualizations (bar charts, line charts) for the same data.
4. Add UI controls to toggle between table and visualization views.
5. Add simple user feedback elements (e.g., confidence rating buttons).

**Ships as:** A GitHub repo with a React app demonstrating interactive evidence presentations for data claims, with README explaining the connection to the paper's visualization design.

**Stretch goal:** Add user interaction to allow overriding or annotating evidence presentations to simulate user corrections.

### Intermediate — LLM-Based Fact Specification Transformation for Data Claims
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the paper's seven-step NLP pipeline focusing on claim detection and fact specification transformation. Using GPT-4 or GPT-3.5 API, you parse a small set of data claims into structured JSON specifications and evaluate the accuracy against ground truth templates.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the core LLM-based semantic parsing method that converts natural language data claims into structured fact specifications, a key contribution of the paper.

**Grounded in:** The fact specification transformation step achieves an average 89.5% complete match rate to ground truth JSON specifications.

**Tech stack:** Python 3.11, OpenAI GPT-4 API, JSON, Jupyter Notebook or Python scripts

**Data:** A small curated dataset of 50-100 data claims with ground truth JSON fact specifications, simulated based on the paper's description since no public dataset is provided.

**Build it:**

1. Collect or simulate a small dataset of natural language data claims paired with ground truth JSON fact specifications.
2. Write Python code to send claims to GPT-4 with prompts to parse them into JSON specifications.
3. Implement evaluation code to compare GPT outputs to ground truth and compute match accuracy.
4. Analyze errors and refine prompts to improve parsing accuracy.
5. Document the pipeline and results in a Jupyter Notebook.

**Ships as:** A GitHub repo containing code and notebook demonstrating the LLM-based fact specification transformation with accuracy metrics and analysis.

**Stretch goal:** Add a simple baseline parser (e.g., rule-based) for comparison to the LLM approach.

### Advanced — Extending Automated Fact-Checking to Multiple Heterogeneous Datasets
*Effort: 3+ weeks, ~80 hours*

You extend the core fact-checking pipeline by implementing support for retrieving and verifying data claims against multiple heterogeneous reference datasets. This addresses the paper's limitation about reliance on single authoritative datasets. You build a prototype that can query multiple CSV or JSON datasets, merge evidence, and produce a combined veracity verdict.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing your ability to extend the automated fact-checking framework to improve robustness and practical applicability.

**Grounded in:** Expanding support for multiple and heterogeneous reference datasets to verify complex claims.

**Tech stack:** Python 3.11, FastAPI, React, OpenAI GPT-4 API, Pandas, D3.js or Chart.js

**Data:** Publicly available numeric datasets from government or open data portals (e.g., US Census data, World Bank indicators) used as heterogeneous reference datasets.

**Build it:**

1. Design a data evidence retrieval module that can query multiple datasets based on fact specifications.
2. Implement a merging strategy to combine evidence from heterogeneous sources.
3. Integrate the module into a simplified fact-checking pipeline that uses GPT-4 for claim parsing.
4. Build a React frontend to display combined evidence tables and visualizations.
5. Evaluate the system on a small set of complex claims requiring multiple datasets.
6. Document the system architecture, usage, and limitations.

**Ships as:** A full-stack GitHub repo with backend fact-checking pipeline supporting multiple datasets, frontend evidence presentation, and documentation demonstrating improved robustness.

**Stretch goal:** Incorporate user interaction features to allow adding new datasets dynamically and correcting AI inferences.
