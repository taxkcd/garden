---
title: "1022 · A Survey of Foundation Models for IoT: Taxonomy and Criteria-Based Analysis — Shiwei Fang"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shiwei-fang"
source_hash: "2175f6c0711d894a3da425466ec67f04ee7ec329c77f8a35947c79d28d9a1494"
sequence: 1022
generator: "outreach-garden: managed"
---

# 1022 · A Survey of Foundation Models for IoT: Taxonomy and Criteria-Based Analysis

## At a glance

- **Professor:** Shiwei Fang
- **Institution:** Augusta University
- **Paper:** [A Survey of Foundation Models for IoT: Taxonomy and Criteria-Based Analysis](https://arxiv.org/pdf/2506.12263)
- **Authors:** Hui Wei, Dong Yoon Lee, Shubham Rohal, Zhizhang Hu, Ryan Rossi, Shiwei Fang, Shijia Pan
- **Year:** 2025

## Paper overview

This paper surveys the use of foundation models (large pretrained models) in Internet of Things (IoT) applications. It identifies key challenges with traditional machine learning in IoT, such as dependence on labeled data and poor generalization across contexts. The authors organize existing research around four shared performance goals—efficiency, context-awareness, safety, and security & privacy—rather than by application domain. They review methods, evaluation metrics, and strategies for each goal, and compare three main paradigms for applying foundation models to IoT: prompt-based, agent-based, and training-based methods. The paper concludes with research gaps and future directions to guide practitioners and researchers.

### Why it matters

**Research problem:** Traditional machine learning models for IoT tasks require large labeled datasets and often fail to generalize across different contexts and domains, limiting scalability and applicability. There is also a lack of unified frameworks to compare foundation model approaches across diverse IoT domains and tasks.

**Why it matters:** IoT systems are increasingly important in health, public safety, automation, and other areas. Improving the sensing and computation capabilities of IoT devices with foundation models can reduce reliance on costly labeled data and improve adaptability across heterogeneous environments, enabling more effective and scalable IoT solutions.

**Key contributions:**

- Proposes a novel taxonomy for foundation models in IoT based on shared performance criteria rather than application domains.
- Summarizes three fundamental paradigms for applying foundation models to IoT tasks: prompt-based, agent-based, and training-based methods.
- Provides a multidimensional comparison of these paradigms across computation requirements, error rates, task specificity, development time, and data needs.
- Reviews commonly used evaluation metrics and strategies for each performance criterion.
- Identifies research gaps and suggests future directions to advance foundation model use in IoT.

## About the professor

**Shiwei Fang** — Assistant Professor, School of Computer and Cyber Sciences, Augusta University.

Research interests: Cyber-Physical Systems (CPS), enhancing the sensing and computation capability of low-power, low-cost, and low-maintenance ubiquitous systems

### Research links

- [Faculty/profile page](https://shiwei-fang.github.io)
- [LinkedIn](https://www.linkedin.com/in/shiwei-fang-9852524a)
- [Social profile](https://twitter.com/shiwei_f)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** foundation models in machine learning
**The paper assumes:** machine learning fundamentals, deep learning architectures, pretrained large language models, and self-supervised learning
**Already in this field?** Skip this entirely if you already understand large pretrained models, their training paradigms, and their application in machine learning.

To understand the foundations and applications of foundation models in IoT as surveyed in the paper, it is essential to grasp the concepts behind large pretrained models, their training paradigms, and their use in machine learning workflows. The rigorous course offers a deep dive into transformers and large language models, ideal for readers seeking comprehensive technical mastery. The fast track provides a concise, accessible introduction to foundation models and generative AI, suitable for readers who want a solid conceptual overview in a fraction of the time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-7 (Transformer, Transformer-Based Models & Tricks, Transformers & Large Language Models, LLM Training, LLM tuning, LLM Reasoning, Agentic LLMs), about 12.5 hours — this subset covers foundational architecture, training, tuning, reasoning, and agentic methods essential to understanding the paper's taxonomy and paradigms.

*Why it unblocks this paper:* Stanford CME295 focuses specifically on transformers and large language models, covering core architecture, training, tuning, reasoning, agentic LLMs, and evaluation—topics directly relevant to the paper's discussion of prompt-based, agent-based, and training-based paradigms for foundation models in IoT.

*If you want all of it:* 16.2 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [MIT 6.S087: Foundation Models & Generative AI (2024)](https://www.youtube.com/playlist?list=PLXV9Vh2jYcjbnv67sXNDJiO8MWLA3ZJKR) — Rickard Brüel Gabrielsson · 9 videos · 7.2h across 9 episodes

**Watch only this:** Episodes 1-5 (INTRODUCTION, HOW IT WORKS, CHAT-GPT & LLMs, IMAGE GENERATION, ECOSYSTEM), about 4 hours — these episodes cover the basics of foundation models, their mechanisms, and applications relevant to the paper's context.

*Why it unblocks this paper:* MIT 6.S087 offers a concise introduction to foundation models and generative AI, including how they work, LLMs like ChatGPT, ecosystem, autonomy, and ethics, providing a clear conceptual overview aligned with the paper's focus on foundation models and their applications.

*If you want all of it:* 7.2 hours across all 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on foundation models for IoT, start with foundational concepts that enable these models, such as self-supervised learning, which reduces reliance on labeled data. Then explore the main paradigms for applying foundation models in IoT, including prompt-based learning, agent-based AI systems, and fine-tuning methods, to grasp their trade-offs and applications. Finally, conclude with the authors' own talk on foundation models for IoT to gain direct insights into their taxonomy, criteria-based analysis, and future directions.

### Self-Supervised Learning *(prerequisite)*
Self-supervised learning is a key technique that enables foundation models to reduce dependence on large labeled datasets by leveraging unlabeled data for pretraining. Understanding this concept provides the theoretical basis for how foundation models achieve generalization and adaptability in IoT contexts.

*How the paper uses it:* The paper highlights self-supervised training as a core reason foundation models reduce labeled data dependence and improve generalization across heterogeneous IoT contexts.

▶ [https://www.youtube.com › watch?v=8V0IHNuj91E](https://www.youtube.com/watch?v=8V0IHNuj91E) — YouTube result via DuckDuckGo

### Prompt-Based Learning Methods *(prerequisite)*
Prompt-based methods offer rapid prototyping with low computational cost by leveraging pretrained foundation models with carefully designed prompts. Understanding this paradigm is essential to appreciate its advantages and limitations in IoT applications, especially regarding efficiency and adaptability.

*How the paper uses it:* The paper identifies prompt-based methods as one of the three fundamental paradigms for applying foundation models to IoT, emphasizing their rapid development and low resource requirements but limited accuracy.

▶ [https://www.youtube.com › watch?v=sXPggianwos](https://www.youtube.com/watch?v=sXPggianwos) — YouTube result via DuckDuckGo

### Agent-Based AI Systems *(prerequisite)*
Agent-based AI systems extend foundation models by enabling reasoning, planning, and tool integration for complex workflows. This paradigm is crucial for understanding how foundation models can be orchestrated in IoT environments to handle multi-step tasks and dynamic interactions.

*How the paper uses it:* The paper discusses agent-based methods as a paradigm that enhances reasoning and tool integration for complex IoT workflows but still relies on static pretrained knowledge.

▶ [https://www.youtube.com › watch?v=lHOWVqcIJgY](https://www.youtube.com/watch?v=lHOWVqcIJgY) — YouTube result via DuckDuckGo

### Fine-Tuning Foundation Models *(prerequisite)*
Fine-tuning foundation models on domain-specific data improves accuracy and robustness, especially for heterogeneous or noisy IoT data. This training-based approach is resource-intensive but critical for achieving high performance in specialized IoT tasks.

*How the paper uses it:* The paper reviews training-based methods as the paradigm that achieves higher accuracy and robustness by fine-tuning on domain-specific data, despite higher resource demands.

▶ [https://www.youtube.com › watch?v=3RcekHYcJn0](https://www.youtube.com/watch?v=3RcekHYcJn0) — YouTube result via DuckDuckGo

### Foundation Models for IoT Talk *(paper-talk search result; attribution unverified)*
The authors' own talk on foundation models for IoT provides the most direct and detailed insights into their taxonomy, criteria-based analysis, and the comparative evaluation of different paradigms. Watching this talk will consolidate understanding of the paper's contributions and future research directions.

*How the paper uses it:* This talk is by the paper's authors and directly addresses the surveyed methodologies, performance criteria, and research gaps in foundation models for IoT.

▶ [https://www.youtube.com › watch?v=vdwLw1-P89g](https://www.youtube.com/watch?v=vdwLw1-P89g) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand how foundation models are applied to IoT systems, starting with the key enabling technique of self-supervised learning. It then covers the three main paradigms for applying foundation models in IoT—prompt-based, agent-based, and training-based methods—before concluding with an overview of the paper's core taxonomy and analysis of foundation models in IoT. The sequence builds intuition step-by-step, from foundational machine learning techniques to specific IoT applications.

### Self-Supervised Learning *(prerequisite)*
Self-supervised learning is a technique where models learn useful representations from unlabeled data by predicting parts of the input from other parts, reducing the need for costly labeled datasets. Understanding this concept is crucial because foundation models in IoT leverage self-supervised learning to generalize across diverse sensor data without heavy labeling.

*How the paper uses it:* The paper highlights self-supervised training as key to reducing labeled data dependence and improving generalization in foundation models for IoT.

▶ [https://www.youtube.com › watch?v=8V0IHNuj91E](https://www.youtube.com/watch?v=8V0IHNuj91E) — YouTube result via DuckDuckGo

### Prompt-Based Learning Methods *(prerequisite)*
Prompt-based methods use pretrained large language models by crafting input prompts to guide the model's output without retraining, enabling rapid prototyping with low computational cost. This approach is important for IoT scenarios needing quick adaptation but may have limitations in accuracy and domain specificity.

*How the paper uses it:* The paper identifies prompt-based methods as one of three main paradigms for applying foundation models to IoT, emphasizing their efficiency and adaptability trade-offs.

▶ [https://www.youtube.com › watch?v=sXPggianwos](https://www.youtube.com/watch?v=sXPggianwos) — YouTube result via DuckDuckGo

### Agent-Based AI Systems *(prerequisite)*
Agent-based AI systems extend foundation models by enabling autonomous reasoning, planning, and tool integration to handle complex workflows. They break down tasks into subtasks and interact with external tools, which is valuable for sophisticated IoT applications requiring multi-step decision-making.

*How the paper uses it:* The paper discusses agent-based methods as enhancing reasoning and tool integration in IoT workflows but notes their reliance on static pretrained knowledge.

▶ [https://www.youtube.com › watch?v=lHOWVqcIJgY](https://www.youtube.com/watch?v=lHOWVqcIJgY) — YouTube result via DuckDuckGo

### Fine-Tuning Foundation Models *(prerequisite)*
Fine-tuning involves adapting a pretrained foundation model to specific domain data by further training, improving accuracy and robustness for specialized IoT tasks. This method requires more resources but yields better performance on heterogeneous or noisy sensor data.

*How the paper uses it:* The paper describes training-based methods, including fine-tuning, as achieving higher accuracy and robustness for domain-specific IoT applications at the cost of greater resource needs.

▶ [https://www.youtube.com › watch?v=3RcekHYcJn0](https://www.youtube.com/watch?v=3RcekHYcJn0) — YouTube result via DuckDuckGo

### Foundation Models in IoT
This concept covers how large pretrained models (foundation models) are applied specifically to IoT systems, addressing challenges like efficiency, context-awareness, safety, and security. It organizes existing approaches into a taxonomy based on shared performance goals rather than application domains.

*How the paper uses it:* The paper’s core contribution is a taxonomy and criteria-based analysis of foundation models tailored for IoT applications, comparing paradigms and evaluation metrics.

▶ [https://www.youtube.com › watch?v=hdCuyPkaRBI](https://www.youtube.com/watch?v=hdCuyPkaRBI) — YouTube result via DuckDuckGo

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 12: Self-Supervised ...](https://www.youtube.com/watch?v=4howBU7THbM) — also for: Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings (Tolga Tasdizen)
- [Stanford CS230 | Autumn 2025 | Lecture 2: Supervised, Self-Supervised, & Weakly Supervised Learning](https://www.youtube.com/watch?v=DNCn1BpCAUY) — also for: CoRLD: Contrastive Representation Learning Of Deformable Shapes In Images (Miaomiao Zhang)
- [Self-Supervised Learning Explained: How AI Teaches Itself ...](https://www.youtube.com/watch?v=8jCvhy4H-wE) — also for: SSL-Cleanse: Trojan Detection and Mitigation in Self-Supervised Learning (Mengxin Zheng)
- [Stanford CS224N | 2023 | Lecture 10 - Prompting ...](https://www.youtube.com/watch?v=SXpJ9EmG3s4) — also for: What Benchmarks Don’t Measure: The Case for Evaluating Abstention Competence in Autonomous Agents (Suresh Venkatasubramanian)
- [Prompt Engineering Full Course | From Beginner to Pro](https://www.youtube.com/watch?v=YhRfgYH_AoU) — also for: Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs (Armando Fox)
- [Stanford CS329A Self-Improving AI Agents | Part 1 | Course Overview](https://www.youtube.com/watch?v=6YnLB0XbTnI) — also for: WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution (Tu Vu)
- [Stanford Webinar - Agentic AI: A Progression of Language ...](https://www.youtube.com/watch?v=kJLiOGle3Lw) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)
- [Agent AI System Design Explained in 27 Minutes](https://www.youtube.com/watch?v=mwN75EiGfCE) — also for: CHIA: An open-source framework for principled, agentic AI-driven hardware/software co-design research (Borivoje Nikolic)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's taxonomy and analysis of foundation models for IoT. The beginner project focuses on reproducing and analyzing evaluation metrics for prompt-based methods, the intermediate project implements and compares an agent-based foundation model approach on a small IoT dataset, and the advanced project extends training-based methods by addressing a key limitation around efficient encoding of high-dimensional sensor data, aligning with the paper's future directions.

### Beginner — Prompt-Based Method Evaluation for IoT Tasks
*Effort: a weekend, ~8 hours*

You build a small prototype that applies prompt-based learning to a simple IoT classification task using a publicly available sensor dataset (e.g., UCI HAR dataset for human activity recognition). You implement evaluation metrics such as error rate and computational cost to analyze the trade-offs of prompt-based methods as described in the paper.

**Why it shows you understood the paper:** This project demonstrates your grasp of the prompt-based paradigm and its efficiency-accuracy trade-offs in IoT, reflecting the paper's key results and evaluation criteria.

**Grounded in:** Prompt-based methods enable rapid prototyping with low computational cost but have limitations in accuracy and adaptability.

**Tech stack:** Python 3.11, OpenAI API or Hugging Face transformers, scikit-learn, Jupyter Notebook

**Data:** Use the UCI Human Activity Recognition (HAR) dataset as a proxy for IoT sensor data; it is publicly available and well-known for activity classification.

**Build it:**

1. Download and preprocess the UCI HAR dataset to extract sensor features and labels.
2. Design prompt templates to query a pretrained large language model (LLM) for classification based on sensor feature summaries.
3. Implement baseline classification using traditional ML (e.g., Random Forest) for comparison.
4. Evaluate and compare error rates and inference latency between prompt-based and baseline methods.
5. Document the trade-offs observed in a README with plots and metric tables.

**Ships as:** A GitHub repository with code to run prompt-based classification on IoT sensor data, evaluation scripts, and a README discussing the efficiency and accuracy trade-offs.

**Stretch goal:** Add support for multiple prompt templates and analyze their impact on accuracy and computational cost.

### Intermediate — Agent-Based Foundation Model for IoT Workflow Automation
*Effort: 1-3 weekends, ~20 hours*

You implement an agent-based system that uses a pretrained LLM to autonomously decompose a multi-step IoT task (e.g., smart home environment monitoring) into subtasks, invoke simple tool APIs (simulated or real), and integrate results. You compare this agent-based approach against a simple prompt-based baseline on task completion accuracy and reasoning capability.

**Why it shows you understood the paper:** This project reflects the paper's agent-based paradigm by demonstrating multi-step reasoning and tool integration for IoT workflows, highlighting the static knowledge limitation and benefits in complex task handling.

**Grounded in:** Agent-based methods enhance reasoning, planning, and tool integration for complex IoT workflows but still rely on static pretrained knowledge.

**Tech stack:** TypeScript, Node.js, OpenAI API or Anthropic Claude API, Express.js (optional for tool simulation), Jest for testing

**Data:** Simulate IoT sensor inputs and environment states relevant to a smart home scenario; no external dataset required.

**Build it:**

1. Design a multi-step IoT task scenario (e.g., detect anomaly, notify user, adjust device settings).
2. Implement an LLM agent that decomposes the task into subtasks using prompt engineering.
3. Create simple tool APIs (e.g., sensor data fetch, notification sender) as mock services.
4. Integrate the agent with the tools to execute the workflow autonomously.
5. Implement a prompt-based baseline that attempts the same task without decomposition.
6. Evaluate and compare task success rates and reasoning steps between approaches.

**Ships as:** A GitHub repo with the agent system code, mock tool APIs, evaluation scripts, and a README explaining the agent-based method's advantages and limitations.

**Stretch goal:** Add memory or experience archive to the agent to improve efficiency over repeated tasks.

### Advanced — Efficient Encoding and Summarization of High-Dimensional IoT Sensor Data for Training-Based Foundation Models
*Effort: a few weeks, ~60+ hours*

You develop a pipeline that encodes and summarizes long, high-dimensional IoT sensor data streams into compact representations suitable for fine-tuning foundation models. You implement and evaluate novel encoding techniques (e.g., temporal convolutional summarization, attention-based pooling) on a public multivariate time series dataset (e.g., UCI HAR or a similar sensor dataset). You compare model accuracy and resource usage against a baseline training-based approach without encoding optimization.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing scalability challenges in training-based methods through efficient data encoding, demonstrating deep comprehension and research potential.

**Grounded in:** Scalability challenges remain for handling long or high-dimensional sensor data inputs in LLM-based approaches. Exploring novel architectures and data encoding techniques to better handle large-scale, multimodal IoT sensor data.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn, Jupyter Notebook

**Data:** Use the UCI HAR dataset or a similar public multivariate IoT sensor dataset as a substitute for large-scale sensor data.

**Build it:**

1. Preprocess and segment the sensor data into sequences suitable for model input.
2. Implement encoding techniques such as temporal convolutional summarization and attention pooling to reduce input dimensionality.
3. Fine-tune a foundation model (e.g., a transformer-based classifier) on encoded data.
4. Train a baseline model on raw data without encoding for comparison.
5. Evaluate and compare accuracy, training time, and resource consumption.
6. Document findings and discuss implications for IoT foundation model scalability.

**Ships as:** A GitHub repository with code for data encoding, model training, evaluation scripts, and a detailed README analyzing the trade-offs and improvements.

**Stretch goal:** Extend encoding methods to multimodal sensor data (e.g., combining accelerometer and audio) and evaluate impact.

_The paper does not provide released code or datasets; public IoT sensor datasets like UCI HAR are used as substitutes. Confirm dataset suitability before starting._
