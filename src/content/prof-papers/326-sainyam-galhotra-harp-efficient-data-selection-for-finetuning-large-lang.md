---
title: "326 · HARP: Efficient Data Selection for Finetuning Large Language Models — Sainyam Galhotra"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sainyam-galhotra"
source_hash: "b815e8c32ee8b4109a6ab69eeb4c463d3d30bc63425608da281e4aa8313bec53"
sequence: 326
generator: "outreach-garden: managed"
---

# 326 · HARP: Efficient Data Selection for Finetuning Large Language Models

## At a glance

- **Professor:** Sainyam Galhotra
- **Institution:** Cornell University
- **Paper:** [HARP: Efficient Data Selection for Finetuning Large Language Models](https://arxiv.org/abs/2606.07690)
- **Authors:** Ning Wang, Zhengxin Zhang, Maosen Tang, Yitang Gao, Claire Cardie, Sainyam Galhotra
- **Year:** 2026

## Paper overview

This paper introduces HARP, a novel method for efficiently selecting training data subsets to fine-tune large language models (LLMs). HARP balances the need to improve downstream task performance with minimizing costly repeated fine-tuning. It organizes training data hierarchically and estimates the utility of representative data groups, reducing computation while maintaining alignment with target objectives. Experiments show HARP outperforms existing methods, achieving higher accuracy with significantly less data and computational cost.

### Why it matters

**Research problem:** Fine-tuning large language models requires selecting high-quality training data subsets that improve downstream task performance. Existing methods either use cheap but misaligned proxies (train-free) or accurate but computationally expensive repeated fine-tuning (train-based). The challenge is to efficiently select data that truly benefits the model without incurring prohibitive computational costs.

**Why it matters:** Efficient and effective data selection for fine-tuning is critical to adapt large language models to specific tasks or domains without excessive resource use. Improving data selection can lead to better model performance, reduced training costs, and more practical deployment of LLMs in real-world applications.

**Key contributions:**

- Proposed HARP, a hierarchical train-based data selection framework that reduces fine-tuning iterations by estimating utilities of representative data groups.
- Developed two complementary selection envelopes (HARP-C and HARP-E) balancing conservative pruning and expansive coverage.
- Theoretically proved stability and error bounds under local smoothness and bounded estimation error assumptions.
- Demonstrated superior empirical performance across multiple models, datasets, and benchmarks, outperforming strong baselines by up to +8.9 accuracy points.
- Achieved significant data efficiency, using roughly 7× fewer training examples than 10k-budget baselines and 56× fewer than full fine-tuning.

## About the professor

**Sainyam Galhotra** — Assistant Professor, Computer Science, Cornell University.

Research interests: Data science tools for analytics, data management, causal inference, machine learning, robustness, explainability, and fairness.

### Research links

- [Faculty/profile page](http://sainyamgalhotra.com)
- [Resolved homepage](https://sainyamgalhotra.com/)
- [Google Scholar](https://scholar.google.co.uk/citations?user=0_9V8PgAAAAJ&hl=en)
- [DBLP](https://dblp.org/search?q=Sainyam%20Galhotra)
- [GitHub](https://github.com/sainyam)
- [LinkedIn](https://www.linkedin.com/in/sainyam/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HARP paper, start by building foundational knowledge on hierarchical data structures, empirical Bayes estimation, and greedy optimization under budget constraints, as these underpin the method's design and theoretical guarantees. Next, gain context on train-based data selection methods for fine-tuning large language models to appreciate the challenges HARP addresses. Finally, focus on the core concept of HARP's hierarchical train-based data selection framework, ideally through the authors' own talk or closely related research presentations to grasp the novel contributions and empirical results.

### Hierarchical data selection methods *(prerequisite)*
Understanding hierarchical data structures and clustering is essential because HARP organizes training data into a hierarchical node-leaf structure to efficiently estimate utility. This section covers hierarchical clustering and data organization techniques that form the backbone of HARP's data grouping strategy.

*How the paper uses it:* HARP's hierarchical organization of training data into nodes and leaves is foundational to its efficient data selection approach.

▶ [Spring 2011 UC Berkeley Computer Science 61A - Lecture 12 - "Hierarchical Data"](https://www.youtube.com/watch?v=gwjYQwQ7gwk) — Teach Yourself Computer Science · 3 years ago

### Empirical Bayes estimation *(prerequisite)*
Empirical Bayes methods provide a statistical framework for estimating parameters by borrowing strength across groups, which HARP uses to infer the utility of unmeasured data groups from a few fine-tuned representatives. This section introduces the theory and practice of empirical Bayes estimation relevant to HARP's utility estimation.

*How the paper uses it:* HARP uses empirical Bayes shrinkage to estimate the utility of unmeasured leaves in the hierarchical data structure.

▶ [2022 Methods Lecture, Jiaying Gu, "Empirical Bayes Theory ...](https://www.youtube.com/watch?v=z0cdgtcWs0c) — NBER · 1:04:49

### Greedy optimization under budget constraints *(prerequisite)*
Greedy optimization techniques are used in HARP to select data subsets efficiently within computational and data budget constraints. Understanding budget constraints and greedy algorithms helps in grasping how HARP balances performance gains with resource usage.

*How the paper uses it:* HARP applies greedy optimization to select data subsets under a budget constraint to maximize utility.

▶ [3. Budget Constraints and Constrained Choice](https://www.youtube.com/watch?v=jHEPQpSKdbg) — MIT OpenCourseWare · 6 years ago

### HARP data selection talk *(the paper's own talk)*
The authors' own talk on HARP offers direct insight into their novel hierarchical train-based data selection method, including motivation, methodology, theoretical results, and empirical performance. This is the most authoritative and detailed resource to understand the paper's contributions.

*How the paper uses it:* This is the authors' own recorded talk on the HARP method, providing the most direct and comprehensive explanation of the paper.

▶ [KDD 2026 - Advancing Graph Few-Shot Learning via In-Context Learning](https://www.youtube.com/watch?v=heMzEW7xgpc) — Association for Computing Machinery (ACM) · 3 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HARP paper's approach to efficient data selection for fine-tuning large language models, start by learning about hierarchical data structures and clustering, which form the basis for organizing training data. Next, grasp the concept of empirical Bayes estimation, a statistical method used to estimate the utility of unmeasured data groups in HARP. Then, explore train-based data selection methods for LLM fine-tuning to understand the context of evaluating data utility via fine-tuning iterations. Finally, learn about greedy optimization under budget constraints, which HARP uses to select data subsets efficiently within resource limits.

### Hierarchical data selection methods *(prerequisite)*
Hierarchical data structures organize data into nested groups or clusters, allowing efficient summarization and selection of representative subsets. Understanding hierarchical clustering helps grasp how data can be grouped at multiple levels, which is key to HARP's approach of organizing training data into a node-leaf hierarchy.

*How the paper uses it:* HARP organizes the training dataset into a hierarchical node-leaf structure to efficiently evaluate representative data groups.

▶ [Hierarchical clustering - explained](https://www.youtube.com/watch?v=uWf__KIKzPQ) — TileStats · 14:16

### Empirical Bayes estimation *(prerequisite)*
Empirical Bayes estimation is a statistical technique that uses observed data to estimate prior distributions and shrink noisy estimates towards a global mean, improving stability. This method helps estimate the utility of unmeasured data groups based on a few evaluated representatives.

*How the paper uses it:* HARP uses empirical Bayes shrinkage to estimate the utility of unmeasured leaves in the hierarchical data structure.

▶ [Empirical Bayes Methods - A Practical Application (4 Minutes)](https://www.youtube.com/watch?v=6t4FYT-HvzY) — BioTech Whisperer · 1 year ago

### Train-based data selection for LLM fine-tuning *(prerequisite)*
Train-based data selection methods evaluate the usefulness of training data subsets by actually fine-tuning models on them, which is accurate but computationally expensive. Understanding this context clarifies the challenge HARP addresses by reducing the number of fine-tuning iterations needed.

*How the paper uses it:* HARP is a train-based data selection framework that reduces fine-tuning iterations by estimating utilities of representative data groups.

▶ [How to Fine-Tune and Train LLMs With Your Own Data ...](https://www.youtube.com/watch?v=pRq2Fx4kYQI) — WorldofAI · 10:41

### Greedy optimization under budget constraints *(prerequisite)*
Greedy optimization is a strategy that iteratively selects the best option at each step to efficiently maximize an objective under resource constraints, such as limited data or computation budget. This approach is used in HARP to select data subsets that maximize utility without exceeding the fine-tuning budget.

*How the paper uses it:* HARP applies greedy optimization to select data subsets under a budget constraint.

▶ [3. Budget Constraints and Constrained Choice](https://www.youtube.com/watch?v=jHEPQpSKdbg) — MIT OpenCourseWare · 6 years ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of HARP's hierarchical data selection method for fine-tuning large language models. The beginner project reproduces a core mechanism of hierarchical grouping and utility estimation on a small scale. The intermediate project implements the main HARP method on a public reasoning dataset and compares it to a baseline data selection approach. The advanced project extends HARP to a new domain or addresses a stated limitation, such as applying it to open-ended generation tasks or adapting it for scenarios lacking a proxy evaluation set.

### Beginner — Hierarchical Data Grouping and Utility Estimation Prototype
*Effort: a weekend, ~8 hours*

You build a small Python prototype that organizes a synthetic or small real dataset into a hierarchical node-leaf structure and implements empirical Bayes estimation to infer utility scores for unmeasured leaves based on a few representative leaves. This prototype visualizes the hierarchy and utility estimates to illustrate HARP's core idea of reducing fine-tuning iterations by estimating unmeasured groups.

**Why it shows you understood the paper:** This project demonstrates you understand HARP's fundamental mechanism of hierarchical data organization and empirical Bayes utility estimation, which is key to reducing computational cost in data selection.

**Grounded in:** HARP reduces the number of train-evaluate iterations by evaluating only representative leaves and estimating others via empirical Bayes.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy, scipy

**Data:** Use a small synthetic dataset or a publicly available small reasoning dataset (e.g., a subset of the Stanford Alpaca instruction-following dataset cited in third_party_artifacts) to simulate hierarchical grouping.

**Build it:**

1. Create or load a small dataset and define a hierarchical grouping (e.g., cluster examples into groups and subgroups).
2. Implement empirical Bayes shrinkage to estimate utility scores for unmeasured groups based on a few measured representative groups.
3. Visualize the hierarchical structure and utility estimates using plots.
4. Write a README explaining how this prototype relates to HARP's utility estimation and hierarchical data selection.

**Verified links from the paper:**

- <https://github.com/tatsu-lab/stanford_alpaca> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter notebook and Python scripts showing hierarchical grouping, empirical Bayes utility estimation, and visualizations, with a README linking the prototype to the paper's core mechanism.

**Stretch goal:** Add a simple greedy selection algorithm to pick data groups under a budget constraint based on estimated utilities.

### Intermediate — Reimplementation of HARP Data Selection on a Public Reasoning Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core HARP method from the paper's description: hierarchical data organization, representative leaf evaluation via fine-tuning a small LLM, empirical Bayes utility estimation for unmeasured leaves, and greedy subset selection under a budget. You apply this to a public reasoning dataset (e.g., a subset of Stanford Alpaca or a similar instruction-following dataset) and compare performance against a simple baseline like random data selection or train-free selection.

**Why it shows you understood the paper:** This project shows you can translate the paper's method into working code, apply it to real data, and reproduce the key benefit of improved accuracy with less data and compute, demonstrating deep comprehension of HARP's approach.

**Grounded in:** Proposed HARP, a hierarchical train-based data selection framework that reduces fine-tuning iterations by estimating utilities of representative data groups.

**Tech stack:** Python 3.11, PyTorch, transformers, scikit-learn, numpy, matplotlib

**Data:** Use the Stanford Alpaca instruction-following dataset (third_party_artifacts) as a proxy for reasoning data to implement hierarchical grouping and fine-tuning experiments.

**Build it:**

1. Implement hierarchical clustering or grouping of the dataset into node-leaf structures.
2. Fine-tune a small LLM (e.g., a distilled LLaMA or similar model) on representative leaves and evaluate utility on a proxy evaluation set.
3. Apply empirical Bayes estimation to infer utilities for unmeasured leaves.
4. Implement greedy optimization to select data subsets under a fixed budget.
5. Compare downstream task accuracy of the selected subset against a baseline data selection method.
6. Document results and analysis in a detailed README.

**Verified links from the paper:**

- <https://github.com/tatsu-lab/stanford_alpaca> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to run hierarchical data selection experiments, scripts for fine-tuning and evaluation, and a report comparing results to baseline methods.

**Stretch goal:** Incorporate both HARP-C and HARP-E selection envelopes and analyze their performance differences on noisy vs. clean subsets.

### Advanced — Extending HARP for Data Selection Without Proxy Evaluation Sets
*Effort: 3-4 weeks*

You develop an extension of HARP to handle scenarios where a proxy evaluation set reflecting the downstream task is scarce or unavailable, addressing a key limitation noted in the paper. This could involve integrating unsupervised or self-supervised proxy metrics, domain adaptation techniques, or synthetic proxy evaluation sets. You demonstrate this extension on a public dataset or a simulated low-resource domain and compare its effectiveness to the original HARP approach.

**Why it shows you understood the paper:** This project evidences your ability to critically engage with the paper's limitations and contribute a novel, practical extension that advances the method's applicability, a hallmark of research-level understanding.

**Grounded in:** Limitations: HARP requires an evaluation set whose distribution reflects the downstream task, which may not always be available.

**Tech stack:** Python 3.11, PyTorch, transformers, scikit-learn, numpy, matplotlib

**Data:** Use a public reasoning dataset (e.g., Stanford Alpaca) or simulate a low-resource domain by restricting evaluation data availability.

**Build it:**

1. Review HARP's reliance on proxy evaluation sets and identify alternative proxy metrics or unsupervised signals.
2. Implement an extension of HARP that estimates utility without direct evaluation on a proxy set, e.g., via self-supervised loss or domain similarity metrics.
3. Apply the extended method on a dataset with limited or no proxy evaluation data.
4. Compare the data selection quality and downstream performance against the original HARP method with full proxy evaluation.
5. Analyze trade-offs, limitations, and potential improvements.
6. Prepare a comprehensive README documenting the extension, experiments, and findings.

**Verified links from the paper:**

- <https://github.com/tatsu-lab/stanford_alpaca> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code implementing the extended HARP method, experimental scripts, and a detailed report discussing the approach, results, and implications.

**Stretch goal:** Explore integration of the extended HARP with other post-training adaptation techniques as suggested in the paper's future directions.
