---
title: "387 · Large Language Models for Designing Participatory Budgeting Rules — Hau Chan"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hau-chan"
source_hash: "1371f6446117fd3125285e20e03c18af7d0a01b0b94524d4ba15727242620315"
sequence: 387
generator: "outreach-garden: managed"
---

# 387 · Large Language Models for Designing Participatory Budgeting Rules

## At a glance

- **Professor:** Hau Chan
- **Institution:** University of Nebraska
- **Paper:** [Large Language Models for Designing Participatory Budgeting Rules](https://arxiv.org/abs/2602.09349v2)
- **Authors:** Nguyen Thach, Xingchen Sha, Hau Chan
- **Year:** 2026

## Paper overview

This paper introduces LLMRule, a novel framework that uses large language models (LLMs) combined with evolutionary search to automatically design participatory budgeting (PB) rules. PB is a democratic process where residents vote on funding public projects. Designing PB rules that balance utility (overall satisfaction) and fairness is challenging. LLMRule generates heuristic rules that outperform existing handcrafted rules on real-world datasets, achieving better utility without sacrificing fairness.

### Why it matters

**Research problem:** Designing participatory budgeting rules that optimize both utility and fairness objectives is difficult due to the trade-offs between these goals and the complexity of verifying fairness properties. Existing methods rely heavily on domain expertise and manual design.

**Why it matters:** Participatory budgeting is widely adopted globally for democratic allocation of public funds. Improving PB rules can lead to more equitable and efficient public project funding, enhancing societal welfare and democratic processes.

**Key contributions:**

- Introduction of Strong-EJR approximation, a novel fairness objective inspired by Strong-EJR, with reduced verification complexity.
- Development of efficient algorithms to compute Strong-EJR approximation in linear time relative to the number of agents.
- Creation of LLMRule, the first LLM-based framework for automated design of PB rules balancing utility and fairness.
- Empirical demonstration on over 600 real-world PB instances showing LLMRule-generated rules outperform existing proportional rules in utility while maintaining fairness.
- Incorporation of a penalty term in the fitness function to handle multi-objective optimization of utility and fairness.

## About the professor

**Hau Chan** — Assistant Professor, School of Computing, University of Nebraska.

Research interests: Artificial Intelligence (AI), AI for Society and Social Good, Game Theory, Mechanism Design, Machine Learning

### Research links

- [Faculty/profile page](https://cse.unl.edu/~hchan)
- [Resolved homepage](https://cse.unl.edu/~hchan/cds.html)
- [Lab website](https://cse.unl.edu/~hchan/cds.html#header1-f)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Social Choice
**The paper assumes:** computational social choice theory, fairness in collective decision making, participatory budgeting algorithms
**Already in this field?** Skip this entirely if you already have a solid understanding of computational social choice theory and fairness concepts in multi-agent systems.

To understand the foundations of participatory budgeting rules, fairness notions like Strong-EJR, and multi-agent utility optimization in this paper, a solid grasp of computational social choice theory is essential. The rigorous course option offers a deep, structured university-level lecture series by a leading expert, while the fast track provides a shorter, more accessible playlist covering the same subject with clear explanations. Choose the course for comprehensive study or the fast track for a quicker but still authoritative overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Global Initiative of Academic Networks (GIAN) | Computational Social Choice | IIT Gandhinagar | 2017](https://www.youtube.com/playlist?list=PLRfu94TCePTtAgBZ36AAJ6dibrZb001yR) — IIT Gandhinagar · 11 videos · 12.3h across 11 episodes

**Watch only this:** Episodes 1 through 5 (Day 1 and Day 2 Parts 1-4), about 5.6 hours — covering foundational concepts, fairness notions, and voting rules relevant to participatory budgeting.

*Why it unblocks this paper:* This course by Prof. Edith Elkind at IIT Gandhinagar is a focused, university-level series on computational social choice, covering key concepts such as fairness, voting rules, and social welfare that directly underpin the paper's theoretical framework and fairness metric design.

*If you want all of it:* All 11 episodes, about 12.3 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Algorithmic & Computational Game Theory/Mechanism Design/Social Choice/Information Design](https://www.youtube.com/playlist?list=PLF1IEF7hQUZATfPpY8Zu3ehN-tDOwfBPM) — OpenSociety · 28 videos · 24.6h across 28 episodes

**Watch only this:** Episodes 4 (Algorithmic Game Theory Lecture 1: Introduction and Examples) and 11 (Module 02: Introduction to Mechanism Design), about 1.5 hours total — these cover the essential concepts of social choice and mechanism design needed to understand the paper's approach.

*Why it unblocks this paper:* This playlist from OpenSociety provides concise, clear explainers on algorithmic game theory, mechanism design, and social choice, offering an accessible introduction to the core ideas of fairness and multi-agent optimization relevant to the paper without requiring a full course commitment.

*If you want all of it:* All 28 episodes, about 24.6 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Large Language Models for Designing Participatory Budgeting Rules,' start with foundational concepts including fairness in social choice theory, evolutionary algorithms for optimization, large language models in AI, and frequent itemset mining algorithms. These prerequisites provide the theoretical and technical background necessary to grasp the novel framework. Finally, focus on the core concept of participatory budgeting rules design, featuring the authors' own detailed talk on their LLMRule framework to directly connect theory to their contributions.

### Fairness in social choice theory *(prerequisite)*
This section covers advanced fairness metrics and social choice theory concepts critical for understanding the paper's novel fairness objective, Strong-EJR approximation. The selected videos are academic talks and seminars that discuss fairness in algorithmic and social choice contexts, providing rigorous theoretical foundations.

*How the paper uses it:* Strong-EJR approximation is a novel fairness objective inspired by social choice fairness concepts essential to the paper's fairness evaluation.

▶ [EC'24 Workshop Talk: Fair ML via Social Choice](https://www.youtube.com/watch?v=DWbCMcUlPV8) — ACM SIGecom · 24:16 · 1y ago

### Evolutionary algorithms for optimization *(prerequisite)*
Evolutionary algorithms are key to the paper's approach for iteratively generating and refining participatory budgeting rules. The chosen university lecture provides a detailed, advanced-level introduction to evolutionary algorithms suitable for graduate readers.

*How the paper uses it:* The paper integrates evolutionary search to optimize PB rules balancing utility and fairness.

▶ [Machine Intelligence - Lecture 18 (Evolutionary Algorithms)](https://www.youtube.com/watch?v=3-NiZPbkr7A) — Kimia Lab · 7y ago

### Large language models in AI *(prerequisite)*
Understanding large language models (LLMs) is crucial since the paper leverages LLMs to generate heuristic PB rules. The selected video is a practical and technical introduction to LLMs from a reputable research-oriented channel, avoiding beginner-level oversimplifications.

*How the paper uses it:* LLMs are integrated into the framework to generate and refine participatory budgeting rules.

▶ [Introduction to Large Language Models](https://www.youtube.com/watch?v=RBzXsQHjptQ) — Google Cloud · 14:40 · 2y ago

### Frequent itemset mining algorithms *(prerequisite)*
Frequent itemset mining is used in the paper to identify maximal cohesive groups, which are critical for fairness evaluation. The selected university lecture explains the Apriori algorithm in a rigorous manner, suitable for advanced readers.

*How the paper uses it:* The paper uses frequent itemset mining algorithms to compute maximal cohesive groups for fairness verification.

▶ [Week 2: Frequent Itemsets and Association Rule Mining - Part 3: A Priori Algorithm](https://www.youtube.com/watch?v=Yf9wr2TnVDA) — Hao Wang · 10:15 · 5y ago

### Participatory Budgeting rules design
This core section focuses on the authors' own presentation of their novel LLMRule framework for designing participatory budgeting rules. The talk is the most direct and detailed resource on the paper's contributions, methodology, and empirical results.

*How the paper uses it:* The authors present their LLM-based framework for automated design of participatory budgeting rules balancing utility and fairness.

▶ [AAMAS 2026: Large Language Models for Designing Participatory Budgeting Rules](https://www.youtube.com/watch?v=a1uivVnhJjg) — Nate Thach · 3mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how large language models (LLMs) can be used to design participatory budgeting (PB) rules that balance fairness and utility. We start with the basics of fairness in social choice theory, then cover evolutionary algorithms for optimization, followed by an introduction to large language models in AI. Next, we explain frequent itemset mining algorithms, which are important for fairness evaluation in PB. Finally, we focus on the core concept of participatory budgeting rules design, culminating with the specific LLMRule framework from the paper.

### Fairness in social choice theory *(prerequisite)*
Fairness in social choice theory studies how to allocate resources or select outcomes that are considered just or equitable among participants. Understanding fairness metrics like Strong-EJR helps grasp how the paper measures and approximates fairness in participatory budgeting.

*How the paper uses it:* The paper introduces Strong-EJR approximation as a novel fairness metric inspired by social choice fairness concepts.

▶ [Voting Theory:  Fairness Criterion](https://www.youtube.com/watch?v=CuOLQT9P11I) — Mathispower4u · 12y ago

### Evolutionary algorithms for optimization *(prerequisite)*
Evolutionary algorithms mimic natural selection to iteratively improve solutions to complex optimization problems by generating, evaluating, and refining candidate solutions. This approach helps automate the design of PB rules balancing multiple objectives.

*How the paper uses it:* LLMRule uses evolutionary search to iteratively generate and refine participatory budgeting rules.

▶ [Artificial Intelligence - Evolutionary Algorithms](https://www.youtube.com/watch?v=kQP8I2QAqd8) — Farzin Academy · 10mo ago

### Large language models in AI *(prerequisite)*
Large language models (LLMs) are AI systems trained on vast text data to generate human-like language and reason about complex tasks. They can be prompted to create heuristic rules or solutions in domains like participatory budgeting.

*How the paper uses it:* The paper integrates LLMs to generate heuristic PB rules within an evolutionary framework.

▶ [Introduction to Large Language Models](https://www.youtube.com/watch?v=RBzXsQHjptQ) — Google Cloud · 14:40 · 2y ago

### Frequent itemset mining algorithms *(prerequisite)*
Frequent itemset mining algorithms identify common patterns or groups within datasets efficiently. In this paper, they are used to find maximal cohesive groups of agents to evaluate fairness properties in PB.

*How the paper uses it:* The paper uses the Apriori algorithm for mining maximal cohesive groups critical to fairness evaluation.

▶ [Data Mining Lecture - - Finding frequent item sets | Apriori Algorithm | Solved Example (Eng-Hindi)](https://www.youtube.com/watch?v=LZii6N4vGDs) — Well Academy · 13:19 · 9y ago

### Participatory Budgeting rules design
Participatory budgeting is a democratic process where community members vote on how to allocate public funds to projects. Designing PB rules involves balancing overall satisfaction (utility) and fairness among voters.

*How the paper uses it:* The core of the paper is automating the design of PB rules that optimize utility and fairness using LLMRule.

▶ [AAMAS 2026: Large Language Models for Designing Participatory Budgeting Rules](https://www.youtube.com/watch?v=a1uivVnhJjg) — Nate Thach · 3mo ago

## Already in your library

- [Genetic algorithms explained in 6 minutes (...and 28 seconds)](https://www.youtube.com/watch?v=-kpcAa-qKwY) — also for: Domain-Informed Representation for Evolutionary Sieving in Integral and Module Lattices (Qi Cheng)
- [Evolutionary Algorithms](https://www.youtube.com/watch?v=L--IxUH4fac) — also for: Domain-Informed Representation for Evolutionary Sieving in Integral and Module Lattices (Qi Cheng)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper "Large Language Models for Designing Participatory Budgeting Rules." Starting with a beginner-level implementation of the Strong-EJR approximation fairness metric on a small synthetic PB instance, you then move to an intermediate project reimplementing the core LLMRule evolutionary search framework on real PB data to generate and evaluate PB rules. Finally, the advanced project tackles a stated limitation by exploring more efficient frequent itemset mining algorithms to scale fairness evaluation to larger PB instances.

### Beginner — Strong-EJR Approximation Metric Implementation
*Effort: a weekend, ~8 hours*

You build a Python script that implements the Strong-EJR approximation fairness metric as defined in the paper, applying it to small synthetic participatory budgeting instances with up to 10 projects and agents. The script computes and reports the fairness score for given PB rule outcomes.

**Why it shows you understood the paper:** This project shows you understand the novel fairness metric introduced by the paper and can implement its verification algorithm efficiently, a key theoretical contribution.

**Grounded in:** Introduction of Strong-EJR approximation, a novel fairness objective inspired by Strong-EJR, with reduced verification complexity.

**Tech stack:** Python 3.11, Jupyter Notebook

**Data:** Synthetic participatory budgeting instances you generate with small numbers of projects and agents to simulate voting and project costs.

**Build it:**

1. Read the paper section defining Strong-EJR approximation and its verification algorithm.
2. Design data structures to represent agents, projects, ballots, and PB outcomes.
3. Implement the linear-time algorithm to compute the Strong-EJR approximation fairness score.
4. Create several small synthetic PB instances with approval ballots and project costs.
5. Run your implementation on these instances and report the fairness scores.
6. Document the metric, your implementation details, and example outputs in a README.

**Ships as:** A Python script and Jupyter notebook demonstrating Strong-EJR approximation computation on example PB instances, with clear documentation.

**Stretch goal:** Add visualization of fairness scores across multiple synthetic instances with varying parameters.

### Intermediate — Reimplementation of LLMRule Evolutionary Search for PB Rule Design
*Effort: 2 weekends, ~20 hours*

You reimplement the core LLMRule framework from the paper that uses an evolutionary search guided by large language model prompts to generate participatory budgeting rules. You apply it to a subset of real-world PB instances from Pabulib with up to 25 projects, comparing the generated greedy PB rules against a simple baseline proportional rule using utility and Strong-EJR approximation fairness metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's main method and empirical evaluation, showing comprehension of the multi-objective optimization of utility and fairness and the integration of LLMs in rule generation.

**Grounded in:** Creation of LLMRule, the first LLM-based framework for automated design of PB rules balancing utility and fairness; Empirical demonstration on over 600 real-world PB instances showing LLMRule-generated rules outperform existing proportional rules in utility while maintaining fairness.

**Tech stack:** Python 3.11, OpenAI or Anthropic LLM API, Jupyter Notebook, pandas, numpy

**Data:** Real-world participatory budgeting instances from Pabulib ((link removed — unverified)) with up to 25 projects, used in the paper's experiments.

**Build it:**

1. Study the paper's description of the LLMRule framework and its evolutionary search algorithm.
2. Implement a simplified evolutionary search loop that generates candidate PB rules as heuristics.
3. Integrate calls to an LLM API to generate or refine PB rule heuristics based on prompts.
4. Implement utility and Strong-EJR approximation fairness evaluation functions.
5. Run experiments on a subset of Pabulib PB instances, comparing generated rules to a baseline proportional rule.
6. Analyze and document results, including utility and fairness trade-offs.

**Verified links from the paper:**

- <https://github.com/COMSOC-Community/pabutools> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter notebook and Python scripts reproducing the LLMRule evolutionary search on real PB data, with evaluation and comparison plots.

**Stretch goal:** Incorporate the penalty term in the fitness function to better balance utility and fairness during evolution.

### Advanced — Scaling Fairness Evaluation via Efficient Frequent Itemset Mining
*Effort: 3+ weeks*

You develop and integrate a more efficient frequent itemset mining algorithm to replace the classical Apriori method used in the paper for mining maximal cohesive groups, aiming to scale the Strong-EJR approximation fairness evaluation to participatory budgeting instances with more than 25 projects. You evaluate the scalability improvements and test on larger synthetic or real PB instances.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, showing deep understanding of the computational bottlenecks in fairness verification and the ability to extend the framework to larger problem sizes.

**Grounded in:** The approach currently handles PB instances with up to 25 projects due to complexity of frequent itemset mining for maximal cohesive groups; Developing more efficient frequent itemset mining algorithms to scale LLMRule to PB instances with larger numbers of projects.

**Tech stack:** Python 3.11, efficient frequent itemset mining libraries (e.g., FP-Growth implementations), Jupyter Notebook, numpy

**Data:** Synthetic PB instances with larger numbers of projects (30-50) generated to test scalability; optionally, larger Pabulib instances if available.

**Build it:**

1. Review the paper's explanation of the use of Apriori algorithm for mining maximal cohesive groups in fairness evaluation.
2. Research and select a more efficient frequent itemset mining algorithm such as FP-Growth.
3. Implement or integrate an existing FP-Growth algorithm in Python.
4. Modify the Strong-EJR approximation evaluation code to use the new mining algorithm.
5. Generate or collect larger PB instances to benchmark scalability and runtime improvements.
6. Document the scalability results and discuss implications for extending LLMRule.

**Ships as:** A Python package or notebook demonstrating improved fairness evaluation scalability with detailed benchmarks and analysis.

**Stretch goal:** Experiment with integrating the improved mining algorithm into a simplified LLMRule evolutionary search to test end-to-end scalability.

_The paper's authors did not release their code, so the intermediate project requires reimplementation from the paper's method description; real PB data is available from Pabulib but may require preprocessing._
