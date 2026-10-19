---
title: "760 · Vipera: Blending Visual and LLM-Driven Guidance for Systematic Auditing of Text-to-Image Generative AI — Adam Perer"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-adam-perer"
source_hash: "ce570f445504c62b45c45a0a1d94d8c29ab299bffc847313ebc8beca859627d6"
sequence: 760
generator: "outreach-garden: managed"
---

# 760 · Vipera: Blending Visual and LLM-Driven Guidance for Systematic Auditing of Text-to-Image Generative AI

## At a glance

- **Professor:** Adam Perer
- **Institution:** Carnegie Mellon University
- **Paper:** [Vipera: Blending Visual and LLM-Driven Guidance for Systematic Auditing of Text-to-Image Generative AI](https://arxiv.org/pdf/2510.05742)
- **Authors:** Yanwei Huang, Wesley Hanwen Deng, Sijia Xiao, Motahhare Eslami, Jason I. Hong, Arpit Narechania, Adam Perer
- **Year:** 2026

## Paper overview

Vipera is an interactive system designed to help auditors systematically evaluate text-to-image generative AI models, which can produce biased or problematic images. It combines visual tools like scene graphs with suggestions from large language models (LLMs) to guide auditors in exploring and organizing audit criteria effectively. The system supports auditors in documenting findings and comparing results across different prompts, making the auditing process more thorough and less reliant on intuition.

### Why it matters

**Research problem:** Text-to-image generative AI models produce outputs that may be biased, offensive, or misleading. Existing auditing methods struggle to systematically explore the vast and complex space of generated images, limiting the ability to uncover comprehensive issues.

**Why it matters:** Generative AI systems are increasingly used in creative and high-stakes domains, but their problematic outputs can perpetuate harmful biases and misinformation. Systematic auditing is crucial to identify and mitigate these risks, ensuring responsible AI deployment.

**Key contributions:**

- Vipera system blending visual guidance (scene graphs) and LLM-driven suggestions for systematic auditing of text-to-image models.
- Empirical study with 24 participants demonstrating that combining visual and LLM guidance leads to more thorough, systematic audits with reduced cognitive load.
- Design implications for integrating visual and AI-driven guidance to support scalable, structured auditing in real-world settings.

## About the professor

**Adam Perer** — Associate Professor, Human-Computer Interaction Institute, Carnegie Mellon University.

Research interests: Improving Healthcare with Visualization, Improving AI Development with Visualization, Improving Human-AI Collaboration with Visualization

### Research links

- [Faculty/profile page](https://perer.org)
- [Lab website](https://dig.cmu.edu/)
- [Curriculum vitae](https://perer.org/papers/adamPerer-CV.pdf)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** interactive visualization for AI auditing
**The paper assumes:** interactive visualization techniques, human-AI interaction principles, and AI auditing workflows
**Already in this field?** Skip this entirely if you already have experience with designing or using interactive visual analytics tools for AI model auditing or interpretability.

To understand the design and evaluation of Vipera, a system blending interactive visualization and LLM-driven guidance for auditing text-to-image generative AI, it is essential to grasp foundational concepts in interactive visualization and human-computer interaction. The rigorous course offers a deep dive into data visualization techniques relevant to graph and interactive visualizations, while the fast track provides a concise introduction to human-computer interaction principles, including visualization and AI, to quickly build intuition about user-centered design and interaction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Data Visualization](https://www.youtube.com/playlist?list=PLyliC9rL1KmsjKFiTHpRzCzYy43SCRWxT) — Dr.Tanate Panrat · 55 videos

**Watch only this:** Episodes 4 (Visualizing Data Using t-SNE), 5 (VisMtl 7: Graph Visualization vs Dimensionality Reduction), and 6 (A Study of Layout, Rendering, and Interaction Methods for Immersive Graph Visualization), about 2 hours total — these focus on graph visualization and interaction methods relevant to Vipera's scene graph design.

*Why it unblocks this paper:* This Data Visualization course by Dr.Tanate Panrat covers a broad range of visualization techniques including graph visualization and interaction methods, which directly relate to Vipera's use of scene graphs and interactive visual guidance for auditing AI outputs.

*If you want all of it:* About 35.5 hours across the first 52 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Human-Computer Interaction](https://www.youtube.com/playlist?list=PL_1Gl3MizLMBAOfSL2kWQrU2JKNxf2nF3) — Human Factors · 13 videos · 6.1h across 13 episodes

**Watch only this:** Episodes 1 (Introduction to Human Computer Interaction - History and Eras), 6 (Methods of HCI), 11 (Understanding Data Visualization 📊), and 13 (Human Computer Interaction and AI), about 2 hours total — these episodes cover foundational HCI concepts and visualization relevant to the paper.

*Why it unblocks this paper:* This Human-Computer Interaction playlist by Human Factors provides a concise, well-structured introduction to HCI concepts including visualization, user interaction, and AI integration, which are crucial for understanding the user-centered design and mixed-initiative auditing approach in Vipera.

*If you want all of it:* About 6.1 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Vipera system for auditing text-to-image generative AI, start by building foundational knowledge on scene graph visualization, large language model (LLM) guidance, and human-AI collaboration in auditing workflows. Then, explore the challenges and methods specific to auditing generative AI outputs. Finally, focus on the core concept of blending visual and LLM-driven guidance, culminating with the authors' own talk on the Vipera system to gain direct insights into its design and evaluation.

### Scene graph visualization *(prerequisite)*
Scene graphs are a core visual technique used in Vipera to represent the semantics of generated images. Understanding how scene graphs are constructed and utilized in research contexts provides foundational knowledge for grasping Vipera's visual guidance approach.

*How the paper uses it:* Vipera employs scene graphs to visualize image semantics, aiding auditors in exploring and organizing audit criteria.

▶ [Ben Zinberg: "Structured, differentiable models of 3D scenes via Generative Scene Graphs"](https://www.youtube.com/watch?v=j0nWTwer04M) — PROBPROG Conference · 24:05 · 5y ago

### Large language model guidance *(prerequisite)*
LLM-driven suggestions are key to Vipera's method for generating auditing criteria and prompts. A rigorous explanation of how LLMs work helps understand the AI assistance integrated into the auditing process.

*How the paper uses it:* Vipera uses LLM-powered suggestions to guide auditors in exploring new prompts and criteria systematically.

▶ [Large Language Models from scratch](https://www.youtube.com/watch?v=lnA9DMvHtfI) — Graphics in 5 Minutes · 8:25 · 4y ago

### Human-AI collaboration in auditing *(prerequisite)*
Vipera supports mixed-initiative auditing workflows that reduce cognitive load and improve thoroughness. Understanding human-AI collaboration principles and challenges in auditing contexts is essential to appreciate Vipera's design goals.

*How the paper uses it:* Vipera blends human judgment with AI guidance to facilitate systematic and scalable auditing.

▶ [Stanford CS547 HCI Seminar | Spring 2026 | Promoting Agency in Human-AI Interaction](https://www.youtube.com/watch?v=kk8TB8wBj-I) — Stanford Online · 44:21 · 2mo ago

### Text-to-image generative AI auditing *(prerequisite)*
This topic covers the challenges and existing methods for auditing generative AI outputs, providing context for why Vipera's approach is necessary and innovative. It situates Vipera within the broader landscape of AI auditing research.

*How the paper uses it:* Vipera addresses limitations in existing auditing methods for text-to-image generative AI models.

▶ [GDPAI Lect9 AI Auditing, Impact Assessment & Compliance Documentation Explained](https://www.youtube.com/watch?v=7I_ul-sUQ1E) — Prof. Dilip K. Prasad · 29:06 · 4mo ago

### Blended visual and LLM-driven guidance
This concept is central to Vipera's innovation, combining visual analytics with LLM assistance to support systematic auditing. Understanding this blend clarifies how Vipera achieves improved audit thoroughness and reduced cognitive load.

*How the paper uses it:* Vipera's key contribution is blending scene graph visualization with LLM-driven suggestions for auditing.

▶ [Lec 37: Vision Language Models](https://www.youtube.com/watch?v=hCIMcduExfc) — NPTEL IIT Guwahati · 45:40 · 13d ago

### Vipera system talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insight into Vipera's system design, empirical evaluation, and future directions. This is the most authoritative source for understanding the paper's contributions and practical implications.

*How the paper uses it:* This talk is by the paper's authors and focuses on the Vipera system and its evaluation.

▶ [Hacking LLMs: An Introduction to Mechanistic Interpretability — Jenny Vega](https://www.youtube.com/watch?v=Og47aN8aU6M) — EuroPython Conference · 30:28 · 11mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces you to the foundational concepts needed to understand Vipera, a system for auditing text-to-image generative AI. Start by learning about text-to-image generative AI and the challenges in auditing its outputs. Then, explore scene graph visualization as a key visual tool used in Vipera. Next, understand large language models (LLMs) and their role in providing auditing guidance. After that, learn about human-AI collaboration in auditing to grasp the mixed-initiative workflow. Finally, dive into the core concept of blending visual and LLM-driven guidance, which is central to Vipera's design.

### Text-to-image generative AI auditing *(prerequisite)*
Text-to-image generative AI models create images from textual descriptions but can produce biased or problematic outputs. Auditing these models involves systematically evaluating their outputs to detect issues like bias or misinformation. Understanding the challenges and methods of auditing generative AI sets the stage for appreciating Vipera's contributions.

*How the paper uses it:* Vipera addresses the challenges of systematically auditing text-to-image generative AI models to uncover biases and problematic outputs.

▶ [GDPAI Lect9 AI Auditing, Impact Assessment & Compliance Documentation Explained](https://www.youtube.com/watch?v=7I_ul-sUQ1E) — Prof. Dilip K. Prasad · 29:06 · 4mo ago

### Scene graph visualization *(prerequisite)*
Scene graphs represent the objects and their relationships within an image in a structured, visual format. They help users understand image semantics by breaking down complex scenes into nodes and edges, making it easier to analyze and audit image content.

*How the paper uses it:* Vipera uses interactive scene graphs to visually represent image semantics and guide auditors in exploring generated images.

▶ [Computer Graphics Module 7: Scene Graphs](https://www.youtube.com/watch?v=Cso9HsutZnc) — Tralie Thinks Through · 9:54 · 5y ago

### Large language model guidance *(prerequisite)*
Large language models (LLMs) generate human-like text by predicting the next word in a sequence, enabling them to provide suggestions and generate content. Understanding how LLMs work helps grasp how Vipera leverages them to suggest new auditing criteria and prompts.

*How the paper uses it:* Vipera integrates LLM-powered suggestions to assist auditors in generating new audit criteria and prompts.

▶ [Large Language Models from scratch](https://www.youtube.com/watch?v=lnA9DMvHtfI) — Graphics in 5 Minutes · 8:25 · 4y ago

### Human-AI collaboration in auditing *(prerequisite)*
Human-AI collaboration involves mixed-initiative workflows where both humans and AI systems contribute to tasks, balancing automation with user control. This collaboration reduces cognitive load and improves decision-making in complex auditing scenarios.

*How the paper uses it:* Vipera supports iterative, mixed-initiative auditing workflows that combine human judgment with AI guidance to reduce workload and improve thoroughness.

▶ [Preparing Audit Teams for Swarm Auditing](https://www.youtube.com/watch?v=ZCYVy3XCiJ0) — The Institute of Internal Auditors · 29:54 · 8mo ago

### Blended visual and LLM-driven guidance
Combining visual analytics with LLM-driven suggestions creates a powerful, systematic approach to auditing complex AI outputs. This blend helps auditors explore more directions efficiently by providing both intuitive visual cues and intelligent prompt generation.

*How the paper uses it:* Vipera's core innovation is blending scene graph visualizations with LLM-driven guidance to enable systematic and scalable auditing of text-to-image models.

▶ [LLM with Visualization | Everything You Need to Understand Large Language Models](https://www.youtube.com/watch?v=nTO35LYUTuQ) — ByteDepth · 5:03 · 3w ago

## Already in your library

- [11: Generative AI – Text-to-Image Models](https://www.youtube.com/watch?v=NQBhhRG-Pe4) — also for: “AI Watermarking”: Bridging Policy Discourse and Technical Capabilities (Sunoo Park)
- [Text-to-image generation explained](https://www.youtube.com/watch?v=9YrYDqhJdPw) — also for: Continual Unlearning for Text-to-Image Diffusion Models: A Regularization Perspective (Cheng Zhang)
- [Scene Graphs as a Symbolic Visual Representation](https://www.youtube.com/watch?v=0ks3MTzc8Mo) — also for: Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click (B. S. Manjunath)
- [Panoptic Scene Graph generation (PSG) Explained](https://www.youtube.com/watch?v=cSsE_H_0Cr8) — also for: Click2Graph: Interactive Panoptic Video Scene Graphs from a Single Click (B. S. Manjunath)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)
- [Everything You Need To Know About Large Language Models (LLMs)](https://www.youtube.com/watch?v=osKyvYJ3PRM) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [A Visual Guide to Mixture of Experts (MoE) in LLMs](https://www.youtube.com/watch?v=sOPDGQjFcuM) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Vipera's approach to systematic auditing of text-to-image generative AI. The beginner project recreates a core visual guidance component (scene graph visualization) on a small scale. The intermediate project implements the blended visual and LLM-driven guidance method described in the paper on a simplified dataset, comparing audit thoroughness with and without guidance. The advanced project addresses one of Vipera's stated limitations by implementing scene graph pruning and customization to reduce cognitive load, exploring user control versus automation.

### Beginner — Interactive Scene Graph Visualization for Text-to-Image Outputs
*Effort: a weekend, ~8 hours*

You build a small React web app that takes a handful of text-to-image generated images (e.g., from a public model like Stable Diffusion) and visualizes their semantic content as a scene graph. The graph nodes represent detected objects or concepts, and edges represent relationships (e.g., spatial or semantic). You implement basic interactivity such as node highlighting and simple filtering.

**Why it shows you understood the paper:** This project demonstrates your grasp of Vipera's visual guidance component, specifically how scene graphs help auditors explore image semantics systematically rather than relying on intuition.

**Grounded in:** Vipera system blending visual guidance (scene graphs) and LLM-driven suggestions for systematic auditing of text-to-image models.

**Tech stack:** React, TypeScript, D3.js or a graph visualization library

**Data:** Use a small set (5-10) of text-to-image outputs generated from public Stable Diffusion prompts as a stand-in for the paper's image samples.

**Build it:**

1. Collect or generate 5-10 images from a public text-to-image model with diverse prompts.
2. Use an off-the-shelf object detection or image captioning model (e.g., a pretrained CLIP or COCO detector) to extract objects and relationships from each image.
3. Design a scene graph data structure representing objects as nodes and relationships as edges.
4. Implement a React component to render the scene graph interactively using D3.js or similar.
5. Add basic interactivity: highlight nodes on hover, filter nodes by type, and display object labels.
6. Write a README explaining how this visualization supports systematic auditing by revealing image semantics.

**Ships as:** A React app repository with a README showing the scene graph visualization of sample images and explaining its role in auditing.

**Stretch goal:** Add manual editing of scene graph nodes and edges to simulate user corrections of LLM labeling inaccuracies.

### Intermediate — Blended Visual and LLM-Guided Auditing Prototype
*Effort: 1-3 weekends*

You implement a simplified version of Vipera's core method: an interactive auditing tool that combines scene graph visualization with LLM-generated suggestions for new audit criteria and prompts. You run a small user study or simulation comparing audit thoroughness (number of unique prompts and criteria explored) with and without LLM guidance.

**Why it shows you understood the paper:** This project reproduces the paper's key contribution of blending visual and LLM-driven guidance to improve audit coverage and reduce cognitive load, validating the approach on a smaller scale.

**Grounded in:** Empirical study with 24 participants demonstrating that combining visual and LLM guidance leads to more thorough, systematic audits with reduced cognitive load.

**Tech stack:** React, TypeScript, OpenAI API or similar LLM API, D3.js

**Data:** Use a small set of text-to-image outputs from a public model (e.g., Stable Diffusion) and generate scene graphs as in the beginner project. Simulate audit criteria and prompts based on these images.

**Build it:**

1. Build on the beginner project’s scene graph visualization component.
2. Integrate an LLM API to generate suggestions for new audit criteria and prompts based on current audit state.
3. Create an interface to present LLM suggestions and allow users to accept, reject, or modify them.
4. Implement tracking of explored prompts, images, and criteria.
5. Conduct a small user test or scripted simulation comparing audit coverage with and without LLM suggestions.
6. Analyze and report metrics such as number of unique prompts explored and criteria applied.

**Ships as:** A GitHub repo with the interactive auditing prototype, usage instructions, and a report comparing audit thoroughness metrics.

**Stretch goal:** Add note-taking and bookmarking features to support documentation of audit findings.

### Advanced — Scene Graph Pruning and Customization for Cognitive Load Reduction
*Effort: a few weeks*

You extend the intermediate auditing prototype by implementing scene graph pruning and customization features to reduce cognitive load, addressing a key limitation noted in the paper. You design algorithms or UI controls to prune dense graphs based on user preferences or importance metrics and evaluate their effect on user experience or audit efficiency.

**Why it shows you understood the paper:** This project tackles a concrete limitation and future direction from the paper, demonstrating your ability to extend Vipera’s method to improve usability and balance automation with user control.

**Grounded in:** Limitations: Dense scene graphs can be overwhelming; users requested pruning and customization features. Future directions: Improving scene graph pruning and customization to reduce cognitive load.

**Tech stack:** React, TypeScript, D3.js, OpenAI API or similar LLM API

**Data:** Use the same small dataset of text-to-image outputs and scene graphs from the intermediate project.

**Build it:**

1. Analyze the scene graph data to identify criteria for pruning (e.g., node degree, frequency, semantic importance).
2. Implement UI controls to allow users to prune or collapse parts of the scene graph dynamically.
3. Add customization options for users to select which node types or relationships to display.
4. Integrate user feedback mechanisms to refine pruning heuristics.
5. Conduct a small user study or heuristic evaluation to assess impact on cognitive load and audit thoroughness.
6. Document findings and suggest design implications for balancing automation and user control.

**Ships as:** An enhanced auditing tool repository with pruning/customization features, evaluation results, and a detailed README discussing design trade-offs.

**Stretch goal:** Incorporate active learning by using user corrections to improve LLM labeling accuracy over time.

_The paper authors have not released code or datasets; all projects require reimplementation of Vipera’s methods using public text-to-image models and scene graph extraction tools._
