---
title: "775 · On the Opportunities of Large Language Models for Programming Process Data — John Edwards"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-john-edwards"
source_hash: "2ab0f5619dffbf2555b172804a993534c5a1de86c48d77b926e42106b503e649"
sequence: 775
generator: "outreach-garden: managed"
---

# 775 · On the Opportunities of Large Language Models for Programming Process Data

## At a glance

- **Professor:** John Edwards
- **Institution:** Utah State University
- **Paper:** [On the Opportunities of Large Language Models for Programming Process Data](https://arxiv.org/pdf/2411.00414)
- **Authors:** John Edwards, Arto Hellas, Juho Leinonen
- **Year:** 2024

## Paper overview

This paper explores how large language models (LLMs) can be used to analyze programming process data—detailed records of how students write code over time—to automatically summarize their coding process and provide formative feedback. The authors conducted a case study using three state-of-the-art LLMs to generate summaries and feedback from keystroke-level programming data collected from students. They found that LLMs can produce useful feedback focused on the programming process, though challenges remain in distinguishing code from process and avoiding generic suggestions. The work highlights the potential for LLMs to support programming education by providing insights into students' coding behaviors.

### Why it matters

**Research problem:** How to effectively use large language models to analyze programming process data to generate automated, formative feedback that focuses on the process students use to write code, rather than just the final code product.

**Why it matters:** Providing feedback on the programming process can improve student learning, reduce frustration, and increase retention and diversity in computer programming education. However, programming process data is complex and underutilized due to challenges in collecting, analyzing, and providing timely feedback. LLMs offer a promising tool to automate and scale this feedback, which is difficult for humans to provide at scale.

**Key contributions:**

- A conceptual discussion of the opportunities and challenges of using LLMs for programming process data analysis.
- A case study applying three state-of-the-art LLMs to summarize programming process data and generate formative feedback.
- Insights into the strengths and limitations of LLMs in distinguishing programming process from code and providing constructive feedback.
- Identification of recurring themes in LLM-generated feedback and their alignment with educational best practices.
- Proposed evaluation criteria for AI-generated programming process feedback, including hallucination, process-code distinction, specificity, correctness, and utility.

## About the professor

**John Edwards** — Associate Professor, School of Computing, Utah State University.

Research interests: Geometric Modeling, Simulation, Scientific Visualization

### Research links

- [Faculty/profile page](https://engineering.usu.edu/directory/soc/faculty/edwards-john)
- [Professor website](https://edwardsjohnmartin.github.io/index.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Large Language Models in NLP
**The paper assumes:** large language models architecture, prompt engineering, natural language processing fundamentals
**Already in this field?** Skip this entirely if you already understand how large language models work and are familiar with prompt-based NLP applications.

This background focuses on Large Language Models (LLMs) in natural language processing, essential for understanding the architecture, training, prompt engineering, and limitations of LLMs as applied in the paper's analysis of programming process data. The rigorous course provides a deep, structured university-level exploration of transformers and LLMs, while the fast track offers a concise, accessible introduction suitable for readers who want a solid conceptual grasp in less time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-6, about 10.7 hours — covering Transformer basics, transformer-based models and tricks, LLM fundamentals, training, tuning, and reasoning, which provide the core knowledge needed to grasp LLM operation and limitations.

*Why it unblocks this paper:* Stanford CME295: Transformers and Large Language Models I Autumn 2025 is a focused university course that thoroughly covers transformer architecture, LLM training, tuning, reasoning, and evaluation, directly relevant to understanding the models and challenges discussed in the paper.

*If you want all of it:* 16.2 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Large Language Models explained (LLMs explained)](https://www.youtube.com/playlist?list=PLpZBeKTZRGPOz2KK3J_Y3pH81NssReJ9j) — AI Coffee Break with Letitia · 32 videos · 8.4h across 32 episodes

**Watch only this:** Episodes 1-6, about 1.5 hours — covering hallucinations, model privacy, transformer basics, decoding strategies, and training techniques, sufficient for a quick but solid conceptual understanding.

*Why it unblocks this paper:* The 'Large Language Models explained (LLMs explained)' series by AI Coffee Break with Letitia offers clear, concise explainers on key LLM concepts including hallucinations, decoding strategies, training, and prompting, providing an accessible yet substantive overview aligned with the paper's focus on LLM capabilities and challenges.

*If you want all of it:* 8.4 hours across 32 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on leveraging large language models (LLMs) for programming process data, start with foundational knowledge on prompt engineering to grasp how to effectively guide LLMs. Then explore the role of LLMs in education to contextualize their application in generating feedback. Next, study automated formative feedback generation to appreciate the educational impact and challenges. Finally, focus on the core concept of programming process data analysis, culminating with the authors' own insights and approach if available.

### Prompt Engineering for LLMs *(prerequisite)*
Prompt engineering is critical to instruct LLMs to focus on the programming process rather than just code output. Understanding strategies and best practices for prompt design helps in appreciating how the authors iteratively engineered prompts to generate process-focused feedback.

*How the paper uses it:* The paper emphasizes iterative prompt engineering to direct LLMs' attention to programming process data rather than static code.

▶ [Demystifying AI and Large Language Models (LLMs): Prompt Engineering and Strategies for Teaching](https://www.youtube.com/watch?v=jj6E0ZJB4oE) — CFEAmerican · 1:05:16 · 1y ago

### Large Language Models in Education *(prerequisite)*
This section covers how LLMs are applied in educational contexts, particularly for generating feedback and supporting learning. It provides background on the capabilities and limitations of LLMs relevant to the paper's focus on formative feedback.

*How the paper uses it:* The paper explores using state-of-the-art LLMs to generate formative feedback on programming process data in educational settings.

▶ [Every Large Language Model Explained in 17 Minutes!](https://www.youtube.com/watch?v=9UpLmjlDgPg) — Codist and Programio · 17:47 · 5mo ago

### Automated Formative Feedback Generation *(prerequisite)*
Automated formative feedback is key to improving student learning outcomes by providing timely, process-focused insights. This section introduces research and practical approaches to automating feedback, setting the stage for understanding the paper's contributions.

*How the paper uses it:* The paper investigates how LLMs can automate formative feedback on students' programming processes to enhance learning.

▶ [Peter Johnson et al - Lambda Feedback: Supporting Student Learning with Automated Formative Feedback](https://www.youtube.com/watch?v=6q03iQ8b9qY) — Teaching and Learning Mathematics Online · 27:18 · 7mo ago

### Programming Process Data Analysis
This core concept involves analyzing detailed records of students' coding behaviors over time. Understanding data analysis techniques and challenges in this domain is essential to appreciate the paper's case study and findings on LLM-generated feedback.

*How the paper uses it:* The paper's central focus is on analyzing programming process data using LLMs to generate summaries and feedback.

▶ [Data Analysis | Meaning, Steps, Techniques, Tools and Software of Data Analysis](https://www.youtube.com/watch?v=CBeaQnkcLpY) — Sociology Classes by Shibu · 31:35 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how large language models (LLMs) can analyze programming process data to generate automated formative feedback. We start with a clear explanation of large language models and prompt engineering to understand how LLMs are guided. Then, we cover the nature of programming process data and data analysis basics. Finally, we focus on how automated formative feedback is generated in educational contexts, directly connecting to the paper's core contributions.

### Large Language Models in Education *(prerequisite)*
Learn what large language models are, how they differ, and their capabilities, especially in educational settings. This foundation helps understand the AI technology used in the paper to analyze programming data and generate feedback.

*How the paper uses it:* The paper uses state-of-the-art LLMs to analyze programming process data and produce feedback.

▶ [Every Large Language Model Explained in 17 Minutes!](https://www.youtube.com/watch?v=9UpLmjlDgPg) — Codist and Programio · 17:47 · 5mo ago

### Prompt Engineering for LLMs *(prerequisite)*
Understand how carefully crafted prompts guide LLMs to focus on specific tasks, such as analyzing the programming process instead of just code. Prompt engineering is crucial for getting useful and relevant outputs from LLMs.

*How the paper uses it:* The authors iteratively engineered prompts to instruct LLMs to focus on programming process rather than static code.

▶ [Master AI Prompt Engineering \[Step-by-Step Guide for Beginners\]](https://www.youtube.com/watch?v=h8LG2D7mhXI) — ClickBank · 13:25 · 1y ago

### Programming Process Data Analysis
Explore what programming process data is—detailed records of how code is written over time—and how data analysis techniques can extract meaningful insights from it. This helps understand the type of data the paper analyzes using LLMs.

*How the paper uses it:* The paper analyzes keystroke-level programming data to generate summaries and feedback on students' coding processes.

▶ [A Beginners Guide To The Data Analysis Process](https://www.youtube.com/watch?v=lgCNTuLBMK4) — CareerFoundry · 10:20 · 5y ago

### Automated Formative Feedback Generation
Learn about automated formative feedback systems that provide timely, process-focused feedback to learners to improve their skills and motivation. This concept connects to the paper’s goal of using LLMs to support programming education.

*How the paper uses it:* The paper demonstrates how LLMs can automatically generate formative feedback focused on the programming process.

▶ [An introduction to formative assessment](https://www.youtube.com/watch?v=zZL6Zf5lMVw) — Dylan Wiliam · 7:52 · 6y ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [How are large language models trained?](https://www.youtube.com/watch?v=JRArFxEfyQU) — also for: Semantic Data Processing with Holistic Data Understanding (Aditya G. Parameswaran)
- [Data Structures Explained for Beginners - How I Wish I was Taught](https://www.youtube.com/watch?v=O9v10jQkm5c) — also for: On the Implementations of the BiTemporal RDF Model: An Experimental Approach (Abdullah Uz Tansel)
- [Lec-32: What is Data Preprocessing & Data Cleaning ...](https://www.youtube.com/watch?v=tDu_KIlXaB0) — also for: ADMIT - A Web-Based System to Facilitate Graduate Admission Process (Dmitriy Babichenko)
- [9: Generative AI – Large Language Models (LLMs) and ...](https://www.youtube.com/watch?v=KGDe1QvfKJ8) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Large Language Models for Health 101](https://www.youtube.com/watch?v=b88FZYNJdIk) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [Reinforcement Learning from Human Feedback: From Zero to chatGPT](https://www.youtube.com/watch?v=2MBJOuVq380) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)
- [Workshop: Basics of LLMs & Prompt Engineering | AI in Medical Education Symposium](https://www.youtube.com/watch?v=zriuIpOSL2g) — also for: Text-Attributed Knowledge Graph Enrichment with Large Language Models for Medical Concept Representation (Dongjie Wang)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Prompting 101 | Code w/ Claude](https://www.youtube.com/watch?v=ysPbXH0LpIE) — also for: Geo-OLM: Enabling Sustainable Earth Observation Studies with Cost-Efficient Open Language Models & State-Driven Workflows (Diana Marculescu)
- [Prompt Engineering Full Course | From Beginner to Pro](https://www.youtube.com/watch?v=YhRfgYH_AoU) — also for: Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs (Armando Fox)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "On the Opportunities of Large Language Models for Programming Process Data." The beginner project recreates a simple prompt engineering experiment to generate process-focused feedback from synthetic programming process snapshots. The intermediate project implements the core method of applying LLMs to keystroke-level programming process data to generate summaries and feedback, comparing two LLMs on a small dataset. The advanced project extends the paper by exploring cost-efficient data representations and finer-grained feedback timing, addressing a key limitation and future direction.

### Beginner — Prompt Engineering for Process-Focused Feedback
*Effort: a weekend, ~8 hours*

You build a small Python script that uses OpenAI's GPT-4 Turbo API to generate natural language feedback focused on the programming process from simplified, synthetic code snapshot descriptions. You design and iterate on prompts that instruct the model to focus on process aspects rather than code correctness.

**Why it shows you understood the paper:** This project shows you understand the challenge of prompt engineering to guide LLMs to distinguish programming process from code, a core difficulty highlighted in the paper.

**Grounded in:** The paper's discussion of iterative prompt engineering to instruct LLMs to focus on process rather than code and the difficulty in separating these aspects.

**Tech stack:** Python 3.11, OpenAI GPT-4 Turbo API

**Data:** Synthetic programming process snapshots you create to simulate student code snapshots and edits, as the paper's original data is not publicly available.

**Build it:**

1. Create a small set of synthetic programming process snapshots describing code edits and student actions in plain text.
2. Write initial prompts instructing GPT-4 Turbo to generate feedback focused on the programming process.
3. Call the GPT-4 Turbo API with these prompts and synthetic snapshots, collect outputs.
4. Iteratively refine prompts to reduce code-related feedback and increase process focus.
5. Analyze and document the differences in feedback quality and focus with different prompts.

**Ships as:** A GitHub repo with the Python script, example synthetic snapshots, prompt templates, and a README explaining prompt iterations and feedback examples.

**Stretch goal:** Add a simple web UI to enter synthetic snapshots and see live LLM feedback with prompt variations.

### Intermediate — LLM-Based Summarization of Programming Process Data
*Effort: 2 weekends, ~20 hours*

You implement a pipeline that applies GPT-4 Turbo and Anthropic Claude 3 Opus to generate natural language summaries and formative feedback from a small programming process dataset. You simulate or synthesize a small keystroke-level dataset representing student code snapshots over time, then compare the quality and focus of feedback from the two LLMs using qualitative criteria from the paper.

**Why it shows you understood the paper:** This project reproduces the paper's core case study approach, demonstrating your grasp of applying multiple LLMs to programming process data and evaluating their outputs on process-code distinction and feedback quality.

**Grounded in:** The paper's case study applying three LLMs to keystroke-level programming data to generate summaries and feedback, and the evaluation criteria proposed for feedback quality.

**Tech stack:** Python 3.11, OpenAI GPT-4 Turbo API, Anthropic Claude 3 Opus API, Jupyter Notebook

**Data:** A small synthetic or publicly available programming process dataset simulating keystroke-level snapshots, since the paper's original data is not released.

**Build it:**

1. Prepare or synthesize a small dataset of programming process snapshots representing student code edits over time.
2. Write prompt templates based on the paper's descriptions to instruct LLMs to generate process-focused summaries and feedback.
3. Implement API calls to GPT-4 Turbo and Claude 3 Opus to generate outputs for each snapshot sequence.
4. Qualitatively evaluate outputs using the paper's criteria: hallucination, process-code distinction, specificity, correctness, and utility.
5. Document differences in output quality and challenges observed, referencing the paper's findings.

**Ships as:** A GitHub repo with code to run the pipeline, example data, evaluation notes, and a README comparing LLM outputs and discussing limitations.

**Stretch goal:** Add a simple baseline that generates generic feedback (e.g., template-based) to compare against LLM outputs quantitatively.

### Advanced — Cost-Efficient Representations and Timing of LLM Feedback on Programming Process
*Effort: 3+ weeks*

You develop and evaluate novel, cost-efficient data representations of programming process data (e.g., diffs, finer-grained snapshots) as input to LLMs to improve the separation of process from code. You implement a prototype system that generates incremental, timely feedback aligned with the paper's future directions, and analyze the impact on feedback quality and token usage.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing data representation and feedback timing challenges, demonstrating deep comprehension and research potential.

**Grounded in:** The paper's future directions on developing cost-efficient representations of programming process data and investigating optimal timing and presentation of LLM-generated feedback.

**Tech stack:** Python 3.11, OpenAI GPT-4 Turbo API, Jupyter Notebook, Docker (optional)

**Data:** Synthetic or small-scale programming process data with finer-grained edits, created to test different data representations and feedback timing.

**Build it:**

1. Design alternative data representations for programming process data, such as diffs between snapshots or event-level logs.
2. Implement a pipeline to convert raw process data into these representations for LLM input.
3. Develop prompt templates that leverage these representations to generate incremental, process-focused feedback.
4. Run experiments comparing token usage, hallucination rates, and feedback quality across representations and timing strategies.
5. Analyze results and document trade-offs and recommendations for future research.

**Ships as:** A GitHub repo with code for data representation conversion, LLM feedback generation, experimental results, and a detailed README discussing findings and implications.

**Stretch goal:** Integrate the system into a simple IDE plugin or web interface to demonstrate real-time feedback presentation.

_The paper's original programming process dataset and code are not publicly released, so all projects must use synthetic or substitute data carefully designed to approximate the paper's data._
