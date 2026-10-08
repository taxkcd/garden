---
title: "564 · Impeding LLM-assisted Cheating in Introductory Programming Assignments via Adversarial Perturbation — Saumya Debray"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-debray"
source_hash: "a9693389b3e158a9ab8fc3eb1873fcc24f8a9d236f4f4bbddbef74b31ba68227"
sequence: 564
generator: "outreach-garden: managed"
---

# 564 · Impeding LLM-assisted Cheating in Introductory Programming Assignments via Adversarial Perturbation

## At a glance

- **Professor:** Saumya Debray
- **Institution:** University of Arizona
- **Paper:** [Impeding LLM-assisted Cheating in Introductory Programming Assignments via Adversarial Perturbation](https://doi.org/10.48550/arxiv.2410.09318)
- **Authors:** Saiful Islam Salim, Rubin Yuchan Yang, Alexander Cooper, Suryashree Ray, Saumya Debray, Sazzadur Rahaman
- **Year:** 2024

## Paper overview

This paper studies how large language models (LLMs) like ChatGPT and GitHub Copilot can be used to cheat on introductory programming assignments. The authors investigate how to modify assignment prompts with subtle adversarial changes to reduce the effectiveness of LLM-generated solutions, thereby impeding cheating. They evaluate five popular LLMs on real university programming problems, design perturbation techniques to degrade LLM performance, and conduct a user study with students to assess how well these perturbations work in practice.

### Why it matters

**Research problem:** LLM-based programming assistants facilitate cheating in introductory computer programming courses, and instructors have limited control over these industrial-strength models. The problem is how to modify assignment prompts to make them less amenable to LLM-based cheating without reducing understandability for honest students.

**Why it matters:** LLMs can generate high-quality code that threatens academic integrity in CS education. Detecting LLM-generated cheating is difficult and error-prone. Without effective deterrents, students may misuse LLMs, undermining learning outcomes and fairness.

**Key contributions:**

- Systematic evaluation of five popular LLMs (GPT-3.5, GitHub Copilot, Mistral, Code Llama, CodeRL) on real introductory programming assignments.
- Design of ten principled adversarial perturbation techniques to degrade LLM-generated code correctness.
- Use of SHAP explainability with a surrogate model (CodeRL) to guide perturbation selection for maximal efficacy with minimal prompt changes.
- An IRB-approved user study with students to assess how perturbations affect actual LLM-assisted cheating and detectability.
- Empirical evidence that combined perturbations reduce LLM correctness scores by 77% on average.

## About the professor

**Saumya Debray** — Professor, Computer Science, University of Arizona.

Research interests: Software security, malware analysis, software protection; program analysis and optimization, with a focus on post-compile-time code optimization.

### Research links

- [Faculty/profile page](https://www.cs.arizona.edu/~debray)
- [Professor website](https://www2.cs.arizona.edu/~debray)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adversarial Machine Learning
**The paper assumes:** adversarial machine learning, adversarial attacks and defenses, explainability methods in ML
**Already in this field?** Skip this entirely if you already understand adversarial machine learning concepts and how perturbations affect model behavior.

To understand the adversarial perturbation techniques used to impede LLM-assisted cheating, a solid grasp of adversarial machine learning concepts is essential. The rigorous course option offers a deep, structured university-level lecture series on adversarial machine learning, while the fast track provides a concise, focused explainer series on the same topic. Choose the course for comprehensive foundational knowledge and the fast track for a quicker, intuition-driven overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Generative Adversarial Networks (GAN)](https://www.youtube.com/playlist?list=PLZsOBAyNTZwboR4_xj-n3K6XBTweC4YVD) — DigitalSreeni · 15 videos · 7.4h across 15 episodes

**Watch only this:** Episodes 1-4 ("125 - What are Generative Adversarial Networks (GAN)?", "126 - Generative Adversarial Networks (GAN) using keras in python", "247 - Conditional GANs and their applications", "248 - keras implementation of GAN to generate cifar10 images"), about 2 hours total — these cover the basics of adversarial networks and their applications.

*Why it unblocks this paper:* This short-form series provides clear, concise explanations of generative adversarial networks and adversarial concepts, offering an accessible introduction to adversarial machine learning relevant to the paper's perturbation techniques.

*If you want all of it:* All 15 episodes, about 7.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on impeding LLM-assisted cheating via adversarial perturbation, start by grounding yourself in the foundational concepts of large language models for code generation and explainable AI methods like SHAP, which guide the perturbation design. Next, explore the broader context of academic integrity challenges in AI-assisted education to appreciate the motivation behind the work. Finally, focus on the core concept of adversarial perturbations in NLP and the authors' own related talks to grasp the specific techniques and empirical findings presented in the paper.

### Large language models code generation *(prerequisite)*
Understanding how large language models generate code is essential to evaluate their capabilities and vulnerabilities in solving programming assignments, which directly relates to the cheating problem addressed in the paper. This talk provides a research-level perspective on code LLMs beyond token-level modeling.

*How the paper uses it:* The paper evaluates multiple code-generation LLMs and their susceptibility to adversarial perturbations.

▶ [【GOSIM  AI Paris 2025】Diego Rojas：Going Beyond Tokens for Code Large Language Models](https://www.youtube.com/watch?v=UEsTxiv9Euc) — GOSIM Foundation · 29:14 · 1y ago

### Explainable AI SHAP method *(prerequisite)*
SHAP is a state-of-the-art explainability technique used to interpret model predictions, which the authors employ to guide the selection of adversarial perturbations that effectively degrade LLM performance with minimal prompt changes. The chosen videos provide detailed technical explanations and implementations of SHAP.

*How the paper uses it:* The paper uses SHAP with a surrogate model to identify impactful prompt tokens for perturbation.

▶ [Lecture 12 - SHAP for tabular data | Explainable AI (XAI) | Image plot | Colab Implementation](https://www.youtube.com/watch?v=4yXaJOMC1Z8) — Vizuara · 36:18 · 2y ago

### Academic integrity in AI-assisted education *(prerequisite)*
This concept contextualizes the problem of LLM-assisted cheating in programming courses, highlighting the challenges and stakes involved in maintaining academic integrity in the AI era. The selected video features a high-level academic panel discussing AI's impact on education, providing a rigorous and current perspective.

*How the paper uses it:* The paper addresses academic integrity threats posed by LLMs in introductory programming assignments.

▶ [2025 AI+Education Summit: AI’s Impact on Education – A Visionary Conversation](https://www.youtube.com/watch?v=LhEfJ5kxEbY) — Stanford HAI · 54:22 · 1y ago

### Adversarial perturbation in NLP
Adversarial perturbations are the core technical approach used in the paper to degrade LLM performance on programming assignment prompts. The selected talk from the Simons Institute provides a deep theoretical perspective on adversarial perturbations, suitable for advanced readers seeking to understand the underlying principles.

*How the paper uses it:* The paper designs and applies adversarial perturbations to impede LLM-assisted cheating.

▶ [A New Perspective on Adversarial Perturbations](https://www.youtube.com/watch?v=mUt7w4UoYqM) — Simons Institute for the Theory of Computing · 48:49 · 7y ago

### Paper authors' talk *(paper-talk search result; attribution unverified)*
The authors' own talks provide the most direct and authoritative insights into their methodology, experimental setup, and findings. Although no exact talk on this paper was found, the closest relevant recent talk by a leading AI researcher on AI cheating behaviors is included for advanced contextual understanding.

*How the paper uses it:* Direct source for understanding the paper's methods and findings on impeding LLM-assisted cheating.

▶ [MLSS 2026 — Yoshua Bengio — Why are AIs cheating, lying and apparently colluding?](https://www.youtube.com/watch?v=F4kuuLQrIaE) — Max Planck Institute for Intelligent Systems · 1:58:39 · 3d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts to understand how large language models (LLMs) generate code and how adversarial perturbations can be used to impede cheating in programming assignments. We start with the basics of LLM code generation, then explain the SHAP method for interpreting model behavior, cover adversarial perturbations in NLP as a technique to degrade model performance, and finally discuss the academic integrity challenges posed by AI-assisted education. This order builds intuition progressively toward the paper's core focus on adversarial prompt perturbations to deter cheating.

### Large language models code generation *(prerequisite)*
Learn how large language models generate code by predicting tokens based on context, which enables them to solve programming problems but also opens avenues for misuse. Understanding this process is key to grasping why LLMs can assist cheating and how prompt modifications affect their outputs.

*How the paper uses it:* The paper evaluates how LLMs generate code for introductory programming assignments and how their performance can be degraded.

▶ [【GOSIM  AI Paris 2025】Diego Rojas：Going Beyond Tokens for Code Large Language Models](https://www.youtube.com/watch?v=UEsTxiv9Euc) — GOSIM Foundation · 29:14 · 1y ago

### Explainable AI SHAP method *(prerequisite)*
SHAP (SHapley Additive exPlanations) is a technique to interpret machine learning model predictions by attributing importance scores to input features. This helps identify which parts of a prompt most influence an LLM's output, guiding targeted adversarial perturbations.

*How the paper uses it:* The authors use SHAP with a surrogate model to select prompt perturbations that maximally reduce LLM correctness with minimal changes.

▶ [SHAP with Python (Code and Explanations)](https://www.youtube.com/watch?v=L8_sVRhBDLU) — A Data Odyssey · 15:41 · 3y ago

### Adversarial perturbation in NLP
Adversarial perturbations are subtle input modifications designed to fool machine learning models without obvious changes to humans. In NLP, this can mean character substitutions or sentence removals that degrade model performance while preserving human readability.

*How the paper uses it:* The paper designs ten adversarial perturbation techniques to reduce LLM effectiveness on programming assignment prompts.

▶ [Bad Characters: Imperceptible NLP Attacks](https://www.youtube.com/watch?v=c5FDHqfMcO4) — IEEE Symposium on Security and Privacy · 20:16 · 4y ago

### Academic integrity in AI-assisted education
AI tools like LLMs pose new challenges to academic integrity by enabling cheating that is hard to detect. Understanding the broader educational context clarifies why prompt perturbations are needed and how they fit into efforts to maintain fairness and learning outcomes.

*How the paper uses it:* The paper addresses the threat of LLM-assisted cheating in introductory programming courses and evaluates perturbations to mitigate it.

▶ [AI and Academic Integrity: What Students Need to Know](https://www.youtube.com/watch?v=7pnl4cYG4gQ) — Jessica Bernards · 4:51 · 1y ago

## Already in your library

- [Lecture 16 | Adversarial Examples and Adversarial Training](https://www.youtube.com/watch?v=CIfsB_EYsVI) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Lecture: #9 Language Models for Code Generation - ScaDS.AI Dresden/Leipzig](https://www.youtube.com/watch?v=mto9XS1Bf1c) — also for: FloraForge: LLM-Assisted Procedural Generation of Editable and Analysis-Ready 3D Plant Geometric Models For Agricultural Applications (Bedrich Benes)
- [Training Large Language Models for Secure Code Generation - Or Sahar](https://www.youtube.com/watch?v=EqKPnBrAAoE) — also for: Analyzing Code Injection Attacks on LLM-based Multi-Agent Systems in Software Development (Jugal K. Kalita)
- [RSG 2023 - DUBRAVKO CULIBRK - Large Language Models for Code Generation](https://www.youtube.com/watch?v=oOWtj7iBKwU) — also for: Unreliable in Practice? A Comprehensive Study of Errors in LLM-Generated Code (Marco Vieira)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How LLMs Actually Generate Text  (Every Dev Should Know This)](https://www.youtube.com/watch?v=NKnZYvZA7w4) — also for: Analyzing Code Injection Attacks on LLM-based Multi-Agent Systems in Software Development (Jugal K. Kalita)
- [Lecture 9 - Understanding SHAP | Explainable AI (XAI ...](https://www.youtube.com/watch?v=IIgTulcEUFw) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Lecture 4 - Explainable AI (XAI) methods | SHAP, LIME, Partial ...](https://www.youtube.com/watch?v=RDA09a8ywic) — also for: A Model-Agnostic Approach for Explaining the Predictions on Clustered Data (Jianhua Chen)
- [Explainable AI explained! | #4 SHAP](https://www.youtube.com/watch?v=9haIOplEIGM) — also for: Agentic RAG-Driven Multi-Omics Analysis for PI3K/AKT Pathway Deregulation in Precision Medicine (Dong Xu)
- [Shapley Additive Explanations (SHAP)](https://www.youtube.com/watch?v=VB9uV-x0gtg) — also for: CIMLA: Interpretable AI for inference of differential causal networks (Saurabh Sinha)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of adversarial perturbations to impede LLM-assisted cheating in introductory programming assignments. The beginner project reproduces a simple perturbation and measures its effect on LLM output correctness. The intermediate project reimplements the core adversarial perturbation method from the paper and evaluates its impact on a small set of assignments with a baseline comparison. The advanced project extends the paper by exploring perturbation techniques that balance efficacy and prompt understandability, addressing a key limitation noted by the authors.

### Beginner — Implement and Evaluate a Simple Adversarial Perturbation on a Programming Prompt
*Effort: a weekend, ~8 hours*

You build a small tool that applies a subtle adversarial perturbation—such as token substitution with Unicode lookalikes—to a single introductory programming assignment prompt. Then you query an LLM (e.g., GPT-3.5 via API) with both the original and perturbed prompts and compare the correctness of the generated code using simple test cases.

**Why it shows you understood the paper:** This project shows you understand how adversarial perturbations can degrade LLM performance on programming tasks and how to measure correctness impact, reflecting the paper's finding that subtle perturbations retain high efficacy when unnoticed.

**Grounded in:** Finding 4: Subtle perturbations, i.e., substituting tokens or removing/replacing characters, when unnoticed, are likely to retain high efficacy in impeding actual cheating.

**Tech stack:** Python 3.11, OpenAI GPT-3.5 API, pytest or unittest

**Data:** Use one publicly available introductory programming assignment prompt (e.g., from University of Arizona CS1 course as described in the paper) or simulate a simple programming problem prompt.

**Build it:**

1. Select a simple introductory programming assignment prompt.
2. Implement a function to apply token substitution perturbation using Unicode lookalikes.
3. Query GPT-3.5 API with the original prompt and record the generated code.
4. Query GPT-3.5 API with the perturbed prompt and record the generated code.
5. Write test cases to evaluate correctness of both generated codes.
6. Compare and report the difference in correctness scores.

**Ships as:** A GitHub repo with code applying the perturbation, scripts to query GPT-3.5, test cases, and a README showing correctness degradation results.

**Stretch goal:** Add a simple UI to toggle perturbations on/off and visualize correctness differences.

### Intermediate — Reimplement Adversarial Perturbation Techniques and Evaluate on a Small Assignment Set
*Effort: 2 weekends, ~20 hours*

You reimplement several of the paper's adversarial perturbation techniques (e.g., character removal, token substitution, sentence removal) guided by SHAP explainability principles. You apply these perturbations to a small set of introductory programming assignments and evaluate their combined effect on LLM-generated code correctness compared to unperturbed prompts.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's core method of adversarial perturbation design and evaluation, including the use of explainability to guide perturbations and measuring correctness degradation as the key metric.

**Grounded in:** Key contributions: Design of ten principled adversarial perturbation techniques to degrade LLM-generated code correctness; Use of SHAP explainability with a surrogate model (CodeRL) to guide perturbation selection for maximal efficacy with minimal prompt changes.

**Tech stack:** Python 3.11, OpenAI GPT-3.5 API or similar LLM API, SHAP explainability library, pytest or unittest

**Data:** Use a small set (e.g., 5-6) of introductory programming assignments from the University of Arizona CS1/CS2 courses as described in the paper, or simulate similar problems if unavailable.

**Build it:**

1. Implement multiple adversarial perturbation functions: character removal, token substitution with Unicode lookalikes, sentence removal.
2. Implement or simulate a surrogate model to approximate LLM behavior for SHAP explainability (e.g., a smaller code generation model or heuristic).
3. Use SHAP to identify prompt tokens with high influence on LLM correctness.
4. Apply perturbations guided by SHAP to the selected assignments.
5. Query an LLM with original and perturbed prompts and collect generated code.
6. Evaluate code correctness using test cases and compare results.
7. Document the perturbation efficacy and discuss trade-offs.

**Ships as:** A GitHub repo with perturbation implementations, SHAP analysis scripts, evaluation code, and a detailed README reporting correctness degradation and insights.

**Stretch goal:** Add a baseline comparison by applying random perturbations and compare their efficacy to SHAP-guided perturbations.

### Advanced — Design Perturbations Balancing Efficacy and Understandability to Deter LLM-Assisted Cheating
*Effort: 3+ weeks*

You develop new adversarial perturbation techniques that aim to reduce LLM code correctness significantly while preserving prompt understandability for honest students, addressing a key limitation noted in the paper. You evaluate these perturbations on a set of programming assignments and conduct a small user study or survey to assess detectability and understandability.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper by integrating human factors (understandability) with adversarial perturbation design, showing deep comprehension of the paper's challenges and extending its impact toward practical educational use.

**Grounded in:** Future directions: Developing perturbation techniques that preserve understandability for honest students while impeding cheating; Potential impact of perturbations on assignment understandability needs careful management by instructors.

**Tech stack:** Python 3.11, OpenAI GPT-3.5 API or similar, Survey tools (e.g., Google Forms), pytest or unittest

**Data:** Use a subset of introductory programming assignments from the paper's dataset or simulate similar assignments; recruit a small group of students or peers for user feedback.

**Build it:**

1. Review existing perturbation techniques and their detectability trade-offs.
2. Design new perturbations that minimally alter prompt text but target LLM weaknesses (e.g., semantic-preserving paraphrasing, controlled token substitutions).
3. Apply these perturbations to selected programming assignments.
4. Evaluate LLM-generated code correctness on original vs. perturbed prompts.
5. Design and conduct a small user study or survey to assess prompt understandability and detectability of perturbations.
6. Analyze results to identify perturbations that balance efficacy and understandability.
7. Document methodology, results, and recommendations for instructors.

**Ships as:** A GitHub repo with perturbation code, evaluation scripts, user study materials, and a comprehensive README discussing findings and implications.

**Stretch goal:** Integrate perturbation techniques into an interactive tool for instructors to customize assignment prompts with adjustable perturbation levels.

_The paper's authors did not release code or datasets; you will need to simulate or source similar introductory programming assignments for evaluation._
