---
title: "168 · Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science — Sam Lau"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sam-lau"
source_hash: "6cb83a52dbaa493ee08d90e4237406f60f2cc0035bf078ac62f7fa4fef0f4b10"
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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the ContentGen paper. The beginner project reproduces a simple evaluation metric from the paper using your existing Python and Jupyter skills. The intermediate project involves reimplementing the core prompt engineering approach to generate data science programming questions and quantitatively evaluate them, introducing prompt design and LLM integration. The advanced project extends the paper by addressing the coherence limitation through a pedagogical refinement workflow, showcasing your ability to innovate on the paper's future directions.

### Beginner — Reproduce ContentGen's Question Quality Metrics Evaluation
*Effort: a weekend, ~8 hours*

You build a Jupyter Notebook that implements the three binary evaluation metrics—Correctness, Contextual Fit, and Coherence—as described in the paper. Using a small synthetic dataset of programming questions and instructor feedback (simulated based on the paper's descriptions), you compute and visualize metric scores and inter-rater agreement statistics.

**Why it shows you understood the paper:** This project shows you understand the paper's evaluation framework and the importance of pedagogically motivated metrics for assessing LLM-generated educational content quality.

**Grounded in:** Creation of a dataset of course materials and an evaluation framework with three pedagogically motivated metrics.

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, matplotlib

**Data:** Simulated small dataset of programming questions with instructor-like binary labels for correctness, contextual fit, and coherence, based on descriptions in the paper.

**Build it:**

1. Read the paper section describing the three evaluation metrics and their definitions.
2. Create a small synthetic dataset of 10-15 programming questions with simulated binary labels for each metric.
3. Implement functions to calculate metric scores and inter-rater agreement (e.g., Cohen's kappa) in a Jupyter Notebook.
4. Visualize the metric distributions and agreement scores using matplotlib.
5. Write a README explaining the metrics and how your notebook reproduces the evaluation approach.

**Ships as:** A Jupyter Notebook and README demonstrating metric calculations and visualizations for question quality evaluation.

**Stretch goal:** Add a simple user interface with ipywidgets to allow manual labeling of new questions and live metric computation.

### Intermediate — Implement and Evaluate Structured Prompt Engineering for LLM-Generated Data Science Questions
*Effort: 2 weekends, ~20 hours*

You reimplement the core method of the paper by building a Python script or Jupyter Notebook that generates programming questions for data science topics using structured prompts with summaries. You compare the quality of questions generated by baseline prompts versus structured prompts using the three binary metrics (Correctness, Contextual Fit, Coherence) on a small public data science notebook dataset.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's iterative prompt engineering approach and the empirical evaluation of prompt strategies to improve LLM-generated educational content.

**Grounded in:** A case study demonstrating how iterative prompt engineering and context curation improve LLM-generated educational content.

**Tech stack:** Python 3.11, Jupyter Notebook, OpenAI API or Google Gemini 2.0 Flash API, pandas, matplotlib

**Data:** Use a small public data science Jupyter notebook dataset (e.g., public Kaggle notebooks or simulated notebooks) as a substitute for the paper's course materials dataset.

**Build it:**

1. Select or create a small set of data science Jupyter notebooks as input instructional materials.
2. Implement baseline and structured prompt templates based on the paper's descriptions, including notebook summaries.
3. Use an LLM API (OpenAI GPT or Gemini 2.0 Flash if accessible) to generate programming questions from the prompts.
4. Manually or semi-automatically label generated questions on Correctness, Contextual Fit, and Coherence.
5. Analyze and visualize the differences in metric scores between baseline and structured prompts.
6. Document your implementation, prompt designs, and evaluation results in a README.

**Verified links from the paper:**

- <https://github.com/dstl-lab/ContentGen-demo> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter Notebook or Python scripts with prompt engineering code, generation examples, evaluation metrics, and analysis.

**Stretch goal:** Automate the notebook summary generation step using an LLM call and integrate it into the prompt pipeline.

### Advanced — Enhance Pedagogical Coherence of LLM-Generated Questions via Instructor-in-the-Loop Refinement
*Effort: 3+ weeks*

You develop an extension to the ContentGen approach that addresses the paper's limitation on coherence by implementing an interactive refinement workflow. This workflow allows instructors to customize, edit, and improve generated questions' pedagogical appropriateness using a UI built with React and backend LLM calls. You evaluate the impact of this refinement on coherence scores using a small set of generated questions.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing your ability to innovate on LLM educational content generation by combining prompt engineering with human-in-the-loop refinement and UI design.

**Grounded in:** Coherence remains the most challenging metric, indicating difficulty in generating pedagogically appropriate questions; future directions include improving coherence and supporting instructor customization.

**Tech stack:** TypeScript, React, Node.js/Express, Python 3.11, OpenAI or Gemini 2.0 Flash API, Jupyter Notebook

**Data:** Use generated questions from your intermediate project or simulated data science questions for refinement and evaluation.

**Build it:**

1. Design a React frontend that displays generated programming questions with editing capabilities.
2. Implement a backend service that accepts instructor edits and uses LLM calls to suggest pedagogical improvements or re-generate refined questions.
3. Integrate the frontend and backend to support an instructor-in-the-loop refinement workflow.
4. Collect instructor feedback or simulate it to evaluate improvements in coherence scores pre- and post-refinement.
5. Document the system architecture, user workflow, and evaluation results in a detailed README.
6. Optionally, deploy the system as a web app or JupyterLab extension prototype.

**Verified links from the paper:**

- <https://github.com/dstl-lab/ContentGen-demo> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A full-stack interactive tool prototype demonstrating improved pedagogical coherence through instructor refinement, with evaluation results.

**Stretch goal:** Incorporate automated validation checks or difficulty adjustment suggestions to further reduce instructor workload.
