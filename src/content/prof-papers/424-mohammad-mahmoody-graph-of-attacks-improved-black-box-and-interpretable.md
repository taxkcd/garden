---
title: "424 · Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs — Mohammad Mahmoody"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mohammad-mahmoody"
source_hash: "a40cb8671bac9d0b4ed099f1ba2b04c617a5058aa2a69ede83dcf894b68629ee"
sequence: 424
generator: "outreach-garden: managed"
---

# 424 · Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs

## At a glance

- **Professor:** Mohammad Mahmoody
- **Institution:** University of Virginia
- **Paper:** [Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs](https://arxiv.org/pdf/2504.19019)
- **Authors:** Mohammad Akbar-Tajari, Mohammad Taher Pilehvar, Mohammad Mahmoody
- **Year:** 2025

## Paper overview

This paper introduces G OAT, a novel black-box method that generates adversarial prompts to test and bypass safety mechanisms in large language models (LLMs). By using a graph-based reasoning framework, G OAT efficiently explores multiple reasoning paths collaboratively, producing human-readable jailbreak prompts that outperform existing black-box attacks, especially against robust models like Llama and Claude.

### Why it matters

**Research problem:** Large Language Models, despite alignment efforts, remain vulnerable to adversarial jailbreaks that bypass their safety mechanisms. Existing black-box attack methods either require many queries or fail against robust models, and current reasoning frameworks (linear or tree-based) limit exploration of adversarial prompt space.

**Why it matters:** Understanding and identifying vulnerabilities in LLMs is crucial to improving their robustness and ensuring they align with ethical and societal standards. Effective black-box attacks help reveal weaknesses in closed-source models where internal parameters are inaccessible.

**Key contributions:**

- Introduced a graph-based black-box attack framework that integrates multiple reasoning paths for adversarial prompt generation.
- Developed a filtering mechanism to retain only relevant prompts, improving efficiency and reducing query costs.
- Generated human-interpretable adversarial prompts, enhancing transparency for analysts.
- Demonstrated superior jailbreak success rates against robust LLMs like Llama, GPT-4, and Claude compared to state-of-the-art black-box methods.
- Showed flexibility by improving performance when using stronger Prompt Generators like Mixtral.

## About the professor

**Mohammad Mahmoody** — associate professor, Computer Science Department, University of Virginia.

Research interests: theoretical aspects of cryptography and their interplay with computational assumptions; theoretical aspects of machine learning; understanding the inherent barriers, lower bounds, impossibility results, or separations

### Research links

- [Faculty/profile page](http://www.cs.virginia.edu/~mohammad)
- [Resolved homepage](https://www.cs.virginia.edu/~mohammad/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph-based reasoning in AI
**The paper assumes:** graph-based reasoning frameworks, multi-path reasoning in AI, graph search algorithms
**Already in this field?** Skip this entirely if you already understand graph-based reasoning methods and their application in AI problem solving.

To understand the graph-based reasoning framework central to the G OAT method in this paper, background on how graph structures enable and improve reasoning processes in AI is essential. The rigorous course option offers a deep, structured university-level exploration of graph-based machine learning, while the fast track provides a shorter, more accessible introduction focusing on core concepts and applications. Choose the course for comprehensive mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W: Machine Learning with Graphs](https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imNkDn) — Stanford Online · 60 videos · 22.4h across 60 episodes

**Watch only this:** Lectures 1.1 to 1.3 (Why Graphs, Applications of Graph ML, Choice of Graph Representation) plus Lectures 5.1 to 5.3 (Message passing and Node Classification, Relational and Iterative Classification, Collective Classification), and Lectures 6.1 to 6.3 (Introduction to Graph Neural Networks, Basics of Deep Learning, Deep Learning for Graphs), about 6.5 hours total.

*Why it unblocks this paper:* Stanford CS224W: Machine Learning with Graphs is a comprehensive university course that covers graph representations, embeddings, and graph neural networks, directly relevant to understanding graph-based reasoning frameworks like Graph of Thoughts used in G OAT.

*If you want all of it:* 22.4 hours across 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) — 3Blue1Brown · 10 videos · 3.6h across 10 episodes

**Watch only this:** Episodes 1 to 7 (But what is a neural network?, Gradient descent, how neural networks learn, Backpropagation intuitively and calculus, Large Language Models explained briefly, Transformers, the tech behind LLMs, Attention in transformers step-by-step), about 2.5 hours total.

*Why it unblocks this paper:* 3Blue1Brown's Neural Networks series offers clear, visual, and intuitive explanations of neural networks and related concepts, including attention and transformers, which complement understanding of graph-based reasoning by building intuition on how information flows and is processed in models.

*If you want all of it:* 3.6 hours across 10 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs," start by building foundational knowledge on black-box adversarial attacks on large language models (LLMs) and the challenges of prompt engineering and evaluation metrics in adversarial machine learning. Then, study the Graph of Thoughts reasoning framework, which is the core conceptual innovation enabling the paper's approach. Finally, focus on the paper authors' own talk or equivalent advanced research presentations to grasp the novel graph-based black-box attack method and its implications.

### Black-box Adversarial Attacks on LLMs *(prerequisite)*
This section covers the challenges and techniques involved in attacking LLMs without access to their internal parameters, which is essential to understand the black-box setting of the paper. It includes advanced talks from security and privacy conferences that discuss query-efficient and surrogate-based black-box adversarial attacks, providing a rigorous background on adversarial text generation and attack strategies.

*How the paper uses it:* The paper proposes a novel black-box attack method, so understanding existing black-box adversarial attack techniques is foundational.

▶ [Black-box Generation of Adversarial Text Sequences to Evade Deep Learning Classifiers](https://www.youtube.com/watch?v=Ho3V_eACoSQ) — IEEE Symposium on Security and Privacy · 16:20 · 8 years ago

### Prompt Engineering and Generation for LLMs *(prerequisite)*
Effective prompt engineering is key to generating adversarial prompts that can bypass LLM safety mechanisms. This section includes a comprehensive university lecture from Stanford that covers agents, prompts, and retrieval-augmented generation, providing an advanced and research-focused perspective on prompt design and manipulation.

*How the paper uses it:* G OAT relies on strong prompt generators to create effective adversarial prompts, making prompt engineering knowledge crucial.

▶ [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — Stanford Online · 1:49:54 · 8 months ago

### Evaluation Metrics and Filtering in Adversarial ML *(prerequisite)*
Understanding how to evaluate and filter adversarial prompts efficiently is critical for reducing query costs and improving attack success rates. This section includes advanced lectures on model evaluation metrics and adversarial machine learning, which are necessary to appreciate the filtering and evaluation components of G OAT.

*How the paper uses it:* The paper uses GPT-4 as a filter and evaluator to refine adversarial prompts, so knowledge of evaluation metrics is essential.

▶ [L-9: Model Evaluation Metrics l Adversarial Machine Learning](https://www.youtube.com/watch?v=xWV8t7u2eco) — The MaxX Academy · 15:30 · 3 months ago

### LLM Safety and Alignment Challenges *(prerequisite)*
This section contextualizes the importance of jailbreak attacks and defenses by exploring the broader challenges of LLM safety and alignment. It features seminar talks and workshop presentations from reputable AI safety research groups, providing a deep understanding of why adversarial attacks matter in the context of AI ethics and robustness.

*How the paper uses it:* The paper aims to reveal vulnerabilities in LLM safety mechanisms, so understanding alignment challenges is important.

▶ [NDSS 2025 - Safety Misalignment Against Large Language Models](https://www.youtube.com/watch?v=5mFb1coDgLY) — NDSS Symposium · 18:49 · 1 year ago

### Graph of Thoughts Reasoning Framework
This is the core reasoning framework that enables G OAT's novel approach by allowing multiple reasoning paths to share information dynamically. The selected videos provide detailed explanations and research-level insights into Graph of Thoughts, including its motivation, structure, and advantages over linear or tree-based reasoning.

*How the paper uses it:* G OAT employs the Graph of Thoughts framework to improve adversarial prompt generation efficiency and effectiveness.

▶ [Graph-of-Thoughts (GoT) for AI reasoning Agents](https://www.youtube.com/watch?v=tCPA89n6NGQ) — Discover AI · 41:34 · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the paper 'Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs.' We start with the basics of black-box adversarial attacks on language models, then cover prompt engineering essentials, followed by evaluation metrics for adversarial ML. Next, we explore LLM safety and alignment challenges to contextualize the importance of jailbreaks. Finally, we dive into the core Graph of Thoughts reasoning framework that enables the novel attack method in the paper.

### Black-box Adversarial Attacks on LLMs *(prerequisite)*
Learn how attackers can generate adversarial inputs to fool machine learning models without access to their internal parameters, focusing on text and language models. This covers the challenges and strategies for black-box attacks, which are realistic scenarios for closed-source LLMs.

*How the paper uses it:* The paper proposes a novel black-box attack method that efficiently generates adversarial prompts to bypass LLM safety mechanisms.

▶ [Black-box Generation of Adversarial Text Sequences to Evade Deep Learning Classifiers](https://www.youtube.com/watch?v=Ho3V_eACoSQ) — IEEE Symposium on Security and Privacy · 16:20 · 8 years ago

### Prompt Engineering and Generation for LLMs *(prerequisite)*
Understand how to craft effective prompts to guide LLMs' behavior, a key skill for generating adversarial prompts. This includes principles of prompt design and how prompt quality impacts model outputs.

*How the paper uses it:* G OAT relies on a Prompt Generator to create candidate adversarial prompts, making prompt engineering central to its approach.

▶ [What is Prompt Engineering? 🤔  क्या है Prompt Engineer? (The REAL Truth)](https://www.youtube.com/watch?v=NOdDPIcar78) — Kripesh Adwani · 7:28 · 2 years ago

### Evaluation Metrics and Filtering in Adversarial ML *(prerequisite)*
Explore how to assess and filter adversarial examples efficiently using evaluation metrics. This ensures only relevant and effective adversarial prompts are retained, optimizing query costs and attack success.

*How the paper uses it:* G OAT uses GPT-4 as a Filter and Evaluator to refine adversarial prompts, improving efficiency and quality.

▶ [L-9: Model Evaluation Metrics l Adversarial Machine Learning](https://www.youtube.com/watch?v=xWV8t7u2eco) — The MaxX Academy · 15:30 · 3 months ago

### LLM Safety and Alignment Challenges *(prerequisite)*
Gain insight into why aligning LLMs with human values is difficult and how safety mechanisms can be bypassed. This context highlights the importance of studying jailbreak attacks to improve model robustness.

*How the paper uses it:* The paper addresses vulnerabilities in LLM safety mechanisms and aims to reveal weaknesses through adversarial jailbreaks.

▶ [Owain Evans | Truthful language models and AI alignment](https://www.youtube.com/watch?v=AkLkZgsaKp4) — Schwartz Reisman Institute · 1:17:35 · 3 years ago

### Graph of Thoughts Reasoning Framework
Learn about the Graph of Thoughts framework, which models reasoning as a graph of interconnected thought nodes rather than linear chains. This enables collaborative multi-path exploration and dynamic information sharing, enhancing reasoning capabilities.

*How the paper uses it:* G OAT builds on the Graph of Thoughts framework to integrate multiple reasoning paths for efficient adversarial prompt generation.

▶ [Graph of Thoughts 💭 Prompting in LLMs 💪 [Paper Explained]](https://www.youtube.com/watch?v=ltzLJhFK7Ok) — Basant Singh · 13:07 · 3 years ago

## Already in your library

- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Adversarial Machine Learning explained! | With examples.](https://www.youtube.com/watch?v=YyTyWGUUhmo) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)
- [Adversarial Robustness](https://www.youtube.com/watch?v=wIX00bZ173k) — also for: Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search (Krzysztof Onak)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How LLMs Works? - Overview](https://www.youtube.com/watch?v=K45s2PgywvI) — also for: Towards Higher Quality Software Vulnerability Data Using LLM-based Patch Filtering (Hui Chen)
- [Prompt Engineering Full Course | From Beginner to Pro](https://www.youtube.com/watch?v=YhRfgYH_AoU) — also for: Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs (Armando Fox)
- [Stanford CS229: Machine Learning | Summer 2019 | Lecture ...](https://www.youtube.com/watch?v=Lb1-iNIOLBw) — also for: On the Entropy Calibration of Language Models (Gregory Valiant)
- [Overview of Adversarial Machine Learning](https://www.youtube.com/watch?v=C8jJ4H6BL1c) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [An Introduction to Mechanistic Interpretability – Neel Nanda ...](https://www.youtube.com/watch?v=0704iLc55Fs) — also for: Do Sparse Autoencoders Identify Reasoning Features in Language Models? (Irene Y. Chen)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from a simple demonstration of G OAT's graph-based prompt filtering mechanism to a full reimplementation and evaluation of the core G OAT adversarial prompt generation framework, culminating in an advanced extension addressing the paper's limitation on computational overhead by experimenting with efficiency optimizations. Each project leverages your existing software engineering and applied ML skills while deepening your understanding of black-box adversarial attacks on LLMs and the Graph of Thoughts reasoning framework.

### Beginner — Graph-Based Prompt Filtering Demo
*Effort: a weekend, ~8 hours*

You build a simplified standalone demo of the G OAT filtering mechanism that takes a set of candidate adversarial prompts and applies heuristic filters to retain only relevant prompts, mimicking the paper's Filter component. The demo visualizes how filtering reduces prompt sets and query costs.

**Why it shows you understood the paper:** This project shows you grasp the importance of prompt filtering in G OAT's efficiency and how graph-based reasoning reduces redundant queries by pruning irrelevant paths.

**Grounded in:** Developed a filtering mechanism to retain only relevant prompts, improving efficiency and reducing query costs.

**Tech stack:** Python 3.11, Streamlit

**Data:** You simulate a small set (~20) of adversarial prompt candidates inspired by examples in the paper's appendix or GitHub repo.

**Build it:**

1. Read the paper section describing the Filter component and its role in G OAT.
2. Create a Python script that loads a list of sample adversarial prompts (text strings).
3. Implement simple heuristic filters (e.g., length thresholds, keyword presence, semantic similarity using sentence embeddings).
4. Build a Streamlit app to visualize the input prompts, filtered prompts, and statistics on reduction.
5. Write a README explaining how filtering improves query efficiency in G OAT.

**Ships as:** A GitHub repo with a Streamlit app demonstrating prompt filtering and a README linking it to G OAT's efficiency gains.

**Stretch goal:** Add a simple evaluator component that scores prompts using an open-source LLM API to simulate the paper's Evaluator role.

### Intermediate — Reimplementing G OAT Core Framework
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' official G OAT implementation from https://github.com/GoAT-pydev/Graph_of_Attacks, then build a minimal wrapper to run G OAT on a small subset of the AdvBench dataset (or a publicly available adversarial prompt dataset as a substitute). You compare G OAT's jailbreak success rate and query efficiency against a simple baseline black-box attack (e.g., TAP or random prompt mutation).

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' code, reproduce key results, and understand the graph-based multi-agent collaboration that underpins G OAT's superior performance.

**Grounded in:** Achieved 98% jailbreak success on Vicuna-7B with only 12 queries, vastly more efficient than GCG's 256,000 queries.

**Tech stack:** Python 3.11, PyTorch, OpenAI API or HuggingFace Transformers, Git

**Data:** Use the curated subset of the AdvBench dataset mentioned in the paper (50 samples) if accessible; otherwise, substitute with a small public adversarial prompt dataset or synthesize similar prompts.

**Build it:**

1. Clone and set up the G OAT repository from https://github.com/GoAT-pydev/Graph_of_Attacks.
2. Run the provided scripts to reproduce baseline results on a small sample.
3. Prepare or obtain a small adversarial prompt dataset for evaluation.
4. Implement a simple baseline black-box attack method (e.g., TAP or random mutations).
5. Run comparative experiments measuring jailbreak success rate and query counts.
6. Document results and write a README explaining the G OAT framework and your findings.

**Verified links from the paper:**

- <https://github.com/GoAT-pydev/Graph_of_Attacks> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run G OAT and baseline attacks on a small dataset, plus a report comparing their effectiveness and efficiency.

**Stretch goal:** Integrate a stronger prompt generator like Mixtral (if accessible) and measure improvements as in the paper.

### Advanced — Optimizing G OAT for Computational Efficiency
*Effort: 3+ weeks*

You extend the G OAT framework by implementing and evaluating computational efficiency optimizations to reduce the overhead of graph-based reasoning and multi-agent collaboration. This could include pruning strategies, parallelization, or caching intermediate results. You evaluate the trade-off between attack thoroughness and efficiency on a subset of robust LLMs like Llama2-7B.

**Why it shows you understood the paper:** This project addresses a key limitation stated in the paper, showing deep comprehension of G OAT's architecture and the practical challenges of deploying graph-based black-box attacks at scale.

**Grounded in:** G OAT incurs moderately higher computational costs compared to some baselines due to its graph-based reasoning and collaboration overhead.

**Tech stack:** Python 3.11, PyTorch, Asyncio or multiprocessing, Git

**Data:** Use the AdvBench dataset subset or a similar adversarial prompt dataset; evaluate on open-access LLMs like Llama2-7B or Vicuna-7B if possible.

**Build it:**

1. Study the G OAT codebase to identify computational bottlenecks in graph reasoning and agent collaboration.
2. Implement one or more efficiency improvements such as pruning low-potential reasoning paths early, caching evaluator results, or parallelizing prompt generation and evaluation.
3. Run experiments comparing the original and optimized versions on jailbreak success rate, query count, and runtime.
4. Analyze the trade-offs between efficiency gains and attack effectiveness.
5. Write a detailed report and README documenting your methods, results, and implications for real-world black-box attacks.

**Verified links from the paper:**

- <https://github.com/GoAT-pydev/Graph_of_Attacks> — released by the paper's authors

**Ships as:** A GitHub repo with an optimized G OAT implementation, experimental results, and a report discussing efficiency-effectiveness trade-offs.

**Stretch goal:** Explore integrating human-in-the-loop evaluation to improve filtering accuracy while managing computational cost.
