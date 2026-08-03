---
title: "168 · Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science — Sam Lau"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sam-lau"
source_hash: "e3903318fc563e316a23660be43ef21c7bc28f045755474678aa8be830c36228"
sequence: 168
generator: "outreach-garden: managed"
---

# 168 · Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science

## At a glance

- **Professor:** Sam Lau
- **Institution:** Univ. of California - San Diego
- **Paper:** [Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science](http://lau.ucsd.edu/pubs/2026_contentgen_SIGCSE.pdf)
- **Authors:** Jiaen Yu, Ylesia Wu, Gabriel Cha, Ayush Shah, Sam Lau
- **Year:** 2026

## Paper overview

This paper presents the design, development, and evaluation of ContentGen, an open-source tool integrated into JupyterLab that uses Large Language Models (LLMs) to generate programming practice questions for data science courses. The authors iteratively improved the tool through prompt engineering and context curation, evaluated it with a dataset of real course materials, and conducted usability studies with instructors. They found that structured prompts that include summaries of lecture content significantly improve the quality of generated questions in terms of correctness, contextual fit, and coherence.

### Why it matters

**Research problem:** Creating high-quality educational content, such as programming practice questions for introductory data science courses, is challenging and time-consuming for instructors. While LLMs can generate such content, their outputs are often inconsistent, contain errors, or lack pedagogical value, making it difficult for instructors to trust and use them effectively.

**Why it matters:** High-quality practice questions are essential for effective learning in programming and data science courses. Automating their generation with LLMs could save instructors time and provide personalized learning opportunities, but only if the generated content is reliable, contextually appropriate, and pedagogically sound.

**Key contributions:**

- Design and implementation of ContentGen, an open-source tool integrated into JupyterLab for generating programming questions.
- Creation of a dataset of course materials and an evaluation framework with three pedagogically motivated metrics.
- A case study demonstrating how iterative prompt engineering and context curation improve LLM-generated educational content.
- Empirical evidence that structured prompts with summaries of lecture content significantly enhance question quality.
- Insights from usability studies validating the tool's usefulness and identifying challenges in trust and live usage.

## About the professor

**Sam Lau** — Assistant Teaching Professor, Halıcıoğlu Data Science Institute, Univ. of California - San Diego.

Research interests: novel interfaces for learning and teaching data science

### Research links

- [Faculty/profile page](https://datascience.ucsd.edu/people/sam-lau/)
- [Identity evidence](https://www.samlau.me)
- [Professor website](https://lau.ucsd.edu/)
- [Resolved homepage](https://lau.ucsd.edu)
- [GitHub](http://github.com/samlau95)
- [Social profile](https://twitter.com/samlau95)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on improving LLM-generated educational content, start with foundational knowledge about large language models and evaluation metrics for educational content quality. Then, explore prompt engineering techniques as they are central to the paper's methodology. Finally, focus on the authors' own talk and related advanced research presentations to grasp the specific innovations and empirical findings of ContentGen.

### Large language models architecture seminar *(prerequisite)*
Understanding the architecture and capabilities of large language models is essential to appreciate how ContentGen leverages LLMs for generating programming questions. This foundational knowledge helps contextualize the challenges in prompt engineering and content generation quality.

*How the paper uses it:* The paper uses Gemini 2.0 Flash, a smaller LLM, and understanding LLM architectures supports comprehension of the generation process and limitations.

▶ [Everything You Need To Know About Large Language Models (LLMs)](https://www.youtube.com/watch?v=osKyvYJ3PRM) — Matthew Berman · 2 years ago

### Evaluation metrics for educational content seminar *(prerequisite)*
The paper evaluates generated questions using correctness, contextual fit, and coherence metrics. A solid grasp of evaluation metrics in educational and machine learning contexts is necessary to understand how these metrics are defined, measured, and validated.

*How the paper uses it:* The evaluation framework with three pedagogically motivated metrics is a key contribution of the paper.

▶ [Lecture 13 – Evaluation Metrics | Stanford CS224U: Natural ...](https://www.youtube.com/watch?v=YygGzfkhtJc) — Stanford Online · 1:11:32

### Prompt engineering for LLMs lecture *(the paper's own talk)*
Prompt engineering is the core method used to improve the quality of generated programming questions in ContentGen. Advanced lectures on prompt engineering provide insights into designing effective prompts and context curation strategies that the paper iteratively refines.

*How the paper uses it:* The paper demonstrates how iterative prompt engineering and context curation improve LLM-generated educational content quality.

▶ [MedAI #88: Distilling Step-by-Step! Outperforming LLMs with ...](https://www.youtube.com/watch?v=fnDUaDDrR4c) — Stanford MedAI · 57:22

### ContentGen LLM educational content talk *(the paper's own talk)*
The authors' own talks and related advanced research presentations offer direct insight into the design, development, and evaluation of ContentGen. These talks provide detailed explanations of the tool, prompt engineering iterations, empirical results, and usability studies.

*How the paper uses it:* Directly targets the authors' own presentation for deep insight into their approach and findings.

▶ [Towards Reliable LLM Systems with Neuro-Symbolic ...](https://www.youtube.com/watch?v=fMw_UT0czpI) — Centaur AI Institute | Neuro-Symbolic AI Community · 1:05:48

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how large language models (LLMs) can be used to generate educational content, focusing on the paper's core contributions. We start with an intuitive introduction to LLM architecture, then cover prompt engineering techniques that improve LLM outputs, followed by evaluation metrics to assess educational content quality, and finish with a focused look at the ContentGen tool and its approach to generating programming problems for data science courses.

### Large language models architecture seminar *(prerequisite)*
Learn the basics of how large language models work, including their structure and how they generate text. This foundational knowledge helps you understand the capabilities and limitations of LLMs used in the paper's tool.

*How the paper uses it:* Understanding LLM architecture is essential to grasp how ContentGen generates programming questions using Gemini 2.0 Flash.

▶ [Everything You Need To Know About Large Language Models (LLMs)](https://www.youtube.com/watch?v=osKyvYJ3PRM) — Matthew Berman · 2 years ago

### Prompt engineering for LLMs lecture *(prerequisite)*
Explore how carefully designing prompts can guide LLMs to produce better, more relevant outputs. This section covers the iterative prompt engineering process that improved question quality in the study.

*How the paper uses it:* The paper shows that refining prompts from Baseline to Structured versions significantly improved question correctness and contextual fit.

▶ [Prompt Engineering Full Course](https://www.youtube.com/watch?v=2BpCk4d2Cc0) — Tech With Tim · 37:44

### Evaluation metrics for educational content seminar *(prerequisite)*
Understand how to measure the quality of generated educational content using metrics like correctness, contextual fit, and coherence. These metrics ensure the generated questions are accurate, relevant, and pedagogically sound.

*How the paper uses it:* The authors used these three metrics to rigorously evaluate the quality of ContentGen's generated programming problems.

▶ [Lecture 13 – Evaluation Metrics | Stanford CS224U: Natural ...](https://www.youtube.com/watch?v=YygGzfkhtJc) — Stanford Online · 1:11:32

### ContentGen LLM educational content talk *(the paper's own talk)*
Dive into the specific tool ContentGen, which integrates LLMs into JupyterLab to generate programming questions for data science courses. This talk presents the authors' approach, iterative improvements, and usability findings.

*How the paper uses it:* This video directly relates to the paper's case study on improving LLM-generated educational content through prompt engineering and context curation.

▶ [LLM Reasoning Beyond Scaling with Dr Greg Durrett ...](https://www.youtube.com/watch?v=Eiw8YB-yjW0) — NSF-Simons AI Institute for Cosmic Origins · 29:16

## Already in your library

- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
