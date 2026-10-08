---
title: "572 · Build Code Needs Maintenance Too: A Study on Refactoring and Technical Debt in Build Systems — Anwar Ghammam"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-anwar-ghammam"
source_hash: "bbb47f0875029db749b3c8b41e8e92e6b382ae7c0f322ffccdb1f66f3a504ded"
sequence: 572
generator: "outreach-garden: managed"
---

# 572 · Build Code Needs Maintenance Too: A Study on Refactoring and Technical Debt in Build Systems

## At a glance

- **Professor:** Anwar Ghammam
- **Institution:** University of Michigan-Dearborn
- **Paper:** [Build Code Needs Maintenance Too: A Study on Refactoring and Technical Debt in Build Systems](https://arxiv.org/pdf/2504.01907)
- **Authors:** Anwar Ghammam, Dhia Elhaq Rzig, Mohamed Almukhtar, Rania Khalsi, Foyzul Hassan, Marouane Kessentini
- **Year:** 2025

## Paper overview

This paper studies how developers refactor build system scripts (like Gradle, Ant, Maven) to improve their quality and reduce technical debt. It identifies 24 types of refactorings organized into 6 categories, links most of these refactorings to 5 types of technical debt, and introduces BuildRefMiner, a tool using GPT-4o to automatically detect such refactorings in build commits. The study is based on manual analysis of 725 commits from 609 open-source projects and developer surveys.

### Why it matters

**Research problem:** Build systems are critical for software development but suffer from technical debt and maintenance challenges. While refactoring is known to improve source code quality, there is limited understanding and no empirically validated taxonomy of refactorings applied specifically to build system code, nor clear knowledge of how these refactorings address technical debt in build systems.

**Why it matters:** Build failures and maintenance overhead in build systems can significantly delay software development and reduce productivity. Understanding and guiding refactoring in build systems can improve build reliability, maintainability, and developer efficiency, thus enhancing overall software quality and development speed.

**Key contributions:**

- The first dataset on refactorings in build systems across Gradle, Maven, and Ant.
- An empirically derived taxonomy of 24 build refactoring types organized into 6 main categories, including 8 build-specific refactorings.
- Identification of 5 technical debt categories addressed by 20 of the 24 refactoring types, supported by commit message analysis and developer survey.
- Development of BuildRefMiner, an LLM-based tool to automatically detect build refactorings with an F1 score of 0.76 using one-shot prompting.
- Providing foundational knowledge and tooling to guide future research and practice in build system maintenance and optimization.

## About the professor

**Anwar Ghammam** — Assistant Professor, Computer and Information Science, University of Michigan-Dearborn.

Research interests: Artificial Intelligence, Artificial Intelligence for DevOps, Artificial Intelligence for Software Engineering, Machine Learning, Optimization, and Intelligent Systems, Software Engineering

### Research links

- [Faculty/profile page](https://anwarghammam.github.io)
- [Identity evidence](https://umdearborn.edu/people-um-dearborn/anwar-ghammam)
- [Professor website](https://anwarghammam.github.io/)
- [Lab website](https://anwarghammam.github.io/lab.md)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Software Maintenance and Refactoring
**The paper assumes:** software refactoring principles, technical debt concepts, and software maintenance practices
**Already in this field?** Skip this entirely if you already understand core software refactoring techniques and the role of technical debt in software maintenance.

To understand the paper's focus on refactoring and technical debt in build systems, it is essential to grasp core concepts of software maintenance, refactoring, and technical debt management. The rigorous course option offers a structured, university-level foundation in software engineering principles relevant to refactoring and maintenance, while the fast track provides a concise, focused explainer series on software maintenance topics including refactoring and technical debt. Choose the rigorous course for depth and academic context, or the fast track for a quicker, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CSE470: Software Engineering](https://www.youtube.com/playlist?list=PLSLYRAAPFGjpMR2E9W8XRFgwvVeY_VjEM) — Anindita Labonno · 9 videos

**Watch only this:** Lectures 1-3: 'CSE470: Code Smells and Refactoring', 'CSE470: Specialized Index(SIX), Defect Removal Efficiency(DRE)', and 'CSE470: Singleton Pattern and Software Testing', about 2 hours 30 minutes total — these cover refactoring concepts, code quality, and testing relevant to maintenance and technical debt.

*Why it unblocks this paper:* This university-level course 'CSE470: Software Engineering' covers refactoring explicitly and includes foundational software engineering topics that underpin understanding of software maintenance and technical debt, directly supporting comprehension of the paper's taxonomy and refactoring motivations.

*If you want all of it:* 7.5 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Refactoring & Legacy Code](https://www.youtube.com/playlist?list=PLwLLcwQlnXBwMqsw_7idzE9sEN2ImXzeL) — Modern Software Engineering · 18 videos · 5.8h across 18 episodes

**Watch only this:** Episodes 1-5: 'From Legacy Code To STATE OF THE ART DEVELOPMENT', 'Types Of Technical Debt And How To Manage Them', 'Legacy Code, OOP vs Functional Programming & MORE', 'Displacing Legacy Systems', and 'The REAL SECRET To Refactoring!', about 1 hour 35 minutes total — these provide a focused introduction to refactoring and technical debt concepts.

*Why it unblocks this paper:* The 'Refactoring & Legacy Code' playlist is a concise, well-structured series focusing specifically on refactoring and technical debt management in legacy code, which aligns closely with the paper's focus on build system refactorings and technical debt repayment.

*If you want all of it:* 5.8 hours across all 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on refactoring and technical debt in build systems, start with foundational knowledge of build systems architecture and large language models for code analysis, as these underpin the paper's context and methodology. Next, grasp the concept of technical debt in software engineering to appreciate the motivations behind refactorings. Finally, focus on the core concept of refactoring in build systems, including the authors' own talk if available, to directly connect with the paper's contributions and findings.

### Build Systems Architecture *(prerequisite)*
Understanding the architecture of build systems like Gradle, Maven, and Ant is essential to appreciate the context in which refactorings occur. These videos provide foundational knowledge on system and software architecture design, which is critical for grasping how build systems are structured and maintained.

*How the paper uses it:* The paper studies refactoring in build systems such as Gradle, Maven, and Ant, making foundational knowledge of their architecture crucial.

▶ [CS-411 Software Architecture Design Lecture 14](https://www.youtube.com/watch?v=zdi0RRLmj1A) — Bilkent Online Courses · 35:35 · 12y ago

### Large Language Models for Code Analysis *(prerequisite)*
The paper leverages GPT-4o, a large language model, to detect refactorings automatically. Understanding how LLMs are applied in software development and code analysis provides insight into the tool BuildRefMiner and its capabilities.

*How the paper uses it:* BuildRefMiner uses GPT-4o LLMs to automatically detect build refactorings, making knowledge of LLMs for code analysis directly relevant.

▶ [Enhancing Developer Workflows by Harnessing ChatGPT and LLMs - Scott Salisbury -DIBI Conference 2023](https://www.youtube.com/watch?v=Sacz1zfBxYM) — DIBI Conference · 42:06 · 2y ago

### Technical Debt in Software Engineering *(prerequisite)*
Technical debt is a key motivation behind refactoring efforts. These talks provide a rigorous exploration of technical debt concepts, theories, and practical implications in software engineering, which is necessary to understand the paper's analysis of refactoring motivations and outcomes.

*How the paper uses it:* The paper links most build refactorings to technical debt repayment, so understanding technical debt is essential.

▶ [Building and Evaluating a Theory of Architectural Technical Debt in Software-intensive Systems](https://www.youtube.com/watch?v=X3NdhEFn2Es) — European Conference on Software Architecture 2021 · 7:58 · 5y ago

### Refactoring in Build Systems
This concept is the core of the paper, focusing on refactoring practices specifically applied to build system code. The selected talk provides practical and advanced insights into maintaining and refactoring build-related code, aligning closely with the paper's taxonomy and findings.

*How the paper uses it:* The paper's central contribution is an empirically derived taxonomy of build system refactorings and their impact on technical debt.

▶ [Refactoring and Maintaing Software : Building code you won't hate tomorrow — Bojan Miletic](https://www.youtube.com/watch?v=U71dOQr6lE8) — EuroPython Conference · 29:35 · 11mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the foundational concepts of build systems and their architecture, which are critical for software development automation. Next, grasp the idea of technical debt in software engineering to appreciate why refactoring is necessary. Then, explore refactoring principles and practices, focusing on how they apply specifically to build systems. Finally, learn about how large language models like GPT-4o can be used to automate code analysis and refactoring detection, as demonstrated by the BuildRefMiner tool in the paper.

### Build Systems Architecture *(paper-talk search result; attribution unverified)*
Build systems automate the process of compiling, linking, and packaging software projects. Understanding their architecture, including tools like Gradle, Maven, and Ant, helps you see how build scripts control software builds and why maintaining these scripts is important.

*How the paper uses it:* The paper studies refactoring in build systems like Gradle, Maven, and Ant, so foundational knowledge of build system architecture is essential.

▶ [Bazel Training 101 (Part 1): What Is A Build System?](https://www.youtube.com/watch?v=LMsTPYO0jTU) — Aspect Build · 5:49 · 1y ago

### Technical Debt in Software Engineering *(prerequisite)*
Technical debt refers to the implied cost of additional rework caused by choosing an easy solution now instead of a better approach that would take longer. Understanding technical debt helps explain why developers refactor code to improve maintainability and reduce future costs.

*How the paper uses it:* The paper links many build system refactorings to repayment of technical debt, making this concept key to understanding the motivations behind refactoring.

▶ [What is Technical Debt? (as a software developer)](https://www.youtube.com/watch?v=2nDxKYIajoU) — Be A Better Dev · 7:20 · 6y ago

### Refactoring in Build Systems
Refactoring is the process of restructuring existing code without changing its behavior to improve readability, maintainability, and extensibility. When applied to build system scripts, refactoring helps reduce technical debt and build failures.

*How the paper uses it:* The core of the paper is an empirically derived taxonomy of build system refactorings and their impact on technical debt.

▶ [Refactoring and Maintaing Software : Building code you won't hate tomorrow — Bojan Miletic](https://www.youtube.com/watch?v=U71dOQr6lE8) — EuroPython Conference · 29:35 · 11mo ago

### Large Language Models for Code Analysis *(prerequisite)*
Large language models (LLMs) like GPT-4o can understand and generate code, enabling automated analysis and detection of code changes such as refactorings. Learning how LLMs assist developers helps appreciate the BuildRefMiner tool introduced in the paper.

*How the paper uses it:* BuildRefMiner uses GPT-4o to automatically detect build refactorings in commits, showcasing the application of LLMs in software maintenance.

▶ [Enhancing Developer Workflows by Harnessing ChatGPT and LLMs - Scott Salisbury -DIBI Conference 2023](https://www.youtube.com/watch?v=Sacz1zfBxYM) — DIBI Conference · 42:06 · 2y ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core contributions of the paper on build system refactorings and technical debt. Starting with a simple analysis of build refactoring categories from commit data, you then implement a simplified version of the BuildRefMiner detection tool on a small dataset, and finally extend the approach by integrating static analysis to improve detection accuracy, addressing a key limitation noted by the authors.

### Beginner — Build Refactoring Categories Analysis
*Effort: a weekend, ~8 hours*

You build a small script to analyze a sample of build system commits (e.g., Gradle build files) to classify refactorings into the six categories identified in the paper. You will reproduce the distribution of refactoring categories and visualize the results.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's taxonomy of build refactorings and their relative frequencies, showing you can work with real commit data and map changes to the paper's categories.

**Grounded in:** Build refactorings fall into 6 categories: Code Clean Up (34.77%), Module Hierarchy Organization (8.41%), Subroutine Organization (7.48%), Dependency Organization (7.85%), Synchronizing Shared Build Properties (8.97%), and Variables Organization (8.52%).

**Tech stack:** Python 3.11, pandas, matplotlib

**Data:** A small manually curated sample of build system commits from open-source Gradle projects, extracted from public GitHub repositories (simulate or extract ~50 commits referencing refactoring in build files).

**Build it:**

1. Collect or simulate a small dataset of build system commits mentioning refactoring from public GitHub Gradle projects.
2. Parse commit messages and build file diffs to manually label or heuristically classify refactorings into the six categories from the paper.
3. Write a Python script to count and summarize the distribution of refactoring categories.
4. Visualize the distribution using bar charts or pie charts.
5. Document the mapping process and results in a README.

**Ships as:** A GitHub repository containing the analysis script, sample commit data, visualizations, and a README explaining how the refactoring categories were identified and their distribution.

**Stretch goal:** Add a simple keyword-based classifier to automatically categorize new build refactoring commits into the six categories.

### Intermediate — BuildRefMiner Prototype with One-Shot GPT-4o Prompting
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of BuildRefMiner that uses GPT-4o with one-shot prompting to detect build refactorings in a small set of build system commits. You compare its detection performance against a simple keyword baseline and report precision, recall, and F1 score.

**Why it shows you understood the paper:** This project shows you understand the core method of the paper—using LLM prompting to detect build refactorings—and can reproduce its evaluation approach on a smaller scale, including metrics calculation and baseline comparison.

**Grounded in:** Development of BuildRefMiner, an LLM-based tool to automatically detect build refactorings with an F1 score of 0.76 using one-shot prompting.

**Tech stack:** Python 3.11, OpenAI GPT-4o API, pandas, scikit-learn (for metrics)

**Data:** A small labeled dataset of build system commits with ground truth refactoring labels, manually annotated or simulated from public Gradle/Maven/Ant projects.

**Build it:**

1. Collect or simulate a dataset of build system commits with known refactoring labels.
2. Design one-shot GPT-4o prompts based on the paper's description to detect refactoring types in commit diffs and messages.
3. Implement a Python script to query GPT-4o with the prompts and parse its output.
4. Implement a simple keyword-based baseline classifier for comparison.
5. Evaluate both methods on the dataset, computing precision, recall, and F1 score.
6. Write a README documenting the approach, prompt design, evaluation, and results.

**Ships as:** A GitHub repository with the BuildRefMiner prototype code, dataset, evaluation scripts, and a detailed README reporting detection performance and comparison to baseline.

**Stretch goal:** Experiment with few-shot prompting or prompt engineering to improve detection metrics.

### Advanced — Integrating Static Analysis with LLM for Build Refactoring Detection
*Effort: 3-4 weeks*

You extend the BuildRefMiner approach by integrating static analysis techniques on build files (e.g., Gradle scripts) to extract structural features that complement LLM-based detection. You evaluate whether this hybrid approach improves detection accuracy and scalability on a larger commit sample.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, demonstrating your ability to innovate beyond the original method by combining static analysis with LLM prompting to enhance automated build system maintenance.

**Grounded in:** BuildRefMiner currently depends on LLMs and prompt engineering; static analysis approaches were not explored in depth. Future directions include extending BuildRefMiner to integrate static analysis techniques.

**Tech stack:** Python 3.11, OpenAI GPT-4o API, Gradle Kotlin DSL parser or custom static analysis scripts, pandas, scikit-learn

**Data:** A larger dataset of build system commits from public Gradle/Maven/Ant projects, filtered for refactoring-related commits (simulate or extract ~200 commits).

**Build it:**

1. Implement or reuse a static analysis tool to parse build files and extract structural features relevant to refactorings (e.g., module hierarchy, dependency declarations).
2. Combine static analysis features with LLM one-shot prompting outputs to create a hybrid classifier for build refactoring detection.
3. Collect or simulate a larger labeled dataset of build refactoring commits for evaluation.
4. Evaluate the hybrid approach against LLM-only and baseline methods using precision, recall, and F1 score.
5. Analyze results to identify improvements and limitations.
6. Document the methodology, implementation details, evaluation, and findings in the README.

**Ships as:** A GitHub repository containing the hybrid detection tool code, static analysis scripts, dataset, evaluation results, and comprehensive documentation.

**Stretch goal:** Apply the hybrid detection tool to industrial build systems or other build tools beyond Gradle/Maven/Ant to test generalizability.

_The paper's authors did not release code or datasets; all data must be extracted or simulated from public open-source build system commits, which may require manual effort._
