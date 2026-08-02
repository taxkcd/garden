---
title: "155 · TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging — Erin W. Chambers"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-erin-w-chambers"
source_hash: "5b5e0f266b8e9cfb61e5e087ee651ec8b41892ddacedc702d7218d7e7f1c7c84"
sequence: 155
generator: "outreach-garden: managed"
---

# 155 · TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging

## At a glance

- **Professor:** Erin W. Chambers
- **Institution:** University of Notre Dame
- **Paper:** [TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging](https://arxiv.org/pdf/2606.29763)
- **Authors:** Guangyu Meng, Pengfei Gu, Xueyang Li, Yiyu Shi, Erin Wolf Chambers, Danny Z. Chen
- **Year:** 2026

## Paper overview

This paper presents TopoAgent, a novel AI framework that uses large language models (LLMs) to automatically select the best topological descriptors for analyzing medical images. Topological data analysis (TDA) captures important geometric features in images that traditional deep learning often misses. TopoAgent integrates perception, reasoning, action, and reflection steps to adaptively determine and apply topological descriptors without task-specific training. It is evaluated on a large benchmark of diverse medical image datasets and outperforms existing methods significantly.

### Why it matters

**Research problem:** Determining the most effective topological descriptor for a given medical image dataset is challenging due to the diversity of descriptors, dataset-specific morphological characteristics, and the complexity of parameter tuning. Existing methods rely on fixed descriptors or manual trial-and-error, lacking automation and adaptability.

**Why it matters:** Topological data analysis provides valuable geometric and structural insights into medical images that conventional pixel-level deep learning methods often overlook. Automating descriptor selection can improve medical image analysis accuracy, reduce expert effort, and standardize workflows across diverse datasets.

**Key contributions:**

- Introduction of TopoAgent, the first LLM-based agentic framework that automates topology learning from raw medical images with interpretable reasoning traces.
- Construction of TopoBenchmark, a standardized evaluation benchmark covering 26 diverse medical image datasets across five object types with consistent criteria.
- Demonstration that adaptive, per-image descriptor determination by TopoAgent outperforms the strongest baseline by 9.32% and general-purpose LLMs by over 21% in average balanced accuracy.

## About the professor

**Erin W. Chambers** — Snyder Family Mission Collegiate Professor of Computer Science, Department of Computer Science and Engineering, University of Notre Dame.

Research interests: Computational Topology and Geometry, Shape analysis, Topological data analysis, Low dimensional topology, Combinatorics and combinatorial algorithms

### Research links

- [Faculty/profile page](https://cse.nd.edu/faculty/erin-chambers)
- [Professor website](https://wolfchambers.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=3JRh4RUAAAAJ&hl=en)
- [ORCID](https://orcid.org/0000-0001-8333-3676)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TopoAgent framework for automated topology learning in medical imaging, start by grasping the foundational concepts of large language models (LLMs) as AI agents and the perception-reasoning-action-reflection (PRAR) loop that structures the agent's decision-making. Next, explore the challenges of topological descriptors and parameter tuning in medical image analysis. Finally, focus on the core concept of topological data analysis in medical imaging, culminating with the authors' own talk or the most relevant advanced seminar on the topic to connect theory with their novel framework.

### Large language models in AI agents *(prerequisite)*
Understanding how LLMs function as reasoning and decision-making agents is critical to appreciating TopoAgent's agentic framework. This section covers the evolution and architecture of agentic AI, emphasizing how LLMs can be leveraged for planning and tool use in complex tasks.

*How the paper uses it:* TopoAgent uses an LLM-based agentic framework to automate topology learning by reasoning and acting iteratively.

▶ [Stanford Webinar - Agentic AI: A Progression of Language ...](https://www.youtube.com/watch?v=kJLiOGle3Lw) — Stanford Online · 57:06

### Perception reasoning action reflection loop *(prerequisite)*
The PRAR loop is the core iterative pipeline enabling adaptive descriptor selection in TopoAgent. Understanding this loop clarifies how the agent perceives image features, reasons about descriptors, acts by applying tools, and reflects to self-correct.

*How the paper uses it:* TopoAgent operates through a Perception–Reasoning–Action–Reflection loop to adaptively select and apply topological descriptors.

▶ [Perception, Reasoning, Action, Reflection, State Update: The Agent Framework](https://www.youtube.com/watch?v=O1g5DW5Fkpg) — The Bearded AI Guy · 8:20 · 2 months ago

### Topological descriptors and parameter tuning *(prerequisite)*
This section addresses the key challenge of selecting and tuning topological descriptors for medical images, which TopoAgent automates. Understanding the complexity and importance of descriptor choice and parameter optimization grounds the motivation for the framework.

*How the paper uses it:* TopoAgent automates the challenging task of selecting effective topological descriptors and tuning their parameters for diverse medical image datasets.

▶ [Florian Russold (07/16/2025): Learning from two-parameter ...](https://www.youtube.com/watch?v=ZUbHcSe5QNk) — Applied Algebraic Topology Network · 55:25

### Topological data analysis in medical imaging
Topological data analysis (TDA) provides the geometric and structural insights that TopoAgent leverages for medical image analysis. This section offers advanced seminars and talks that explain TDA's principles and applications in medical imaging, providing essential background for the paper's approach.

*How the paper uses it:* TopoAgent builds on TDA to extract meaningful topological features from medical images beyond traditional deep learning.

▶ [Topological Data Analysis for Medical Imaging](https://www.youtube.com/watch?v=_3y2dzz9K5w) — Amii · 2 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand TopoAgent, starting with how large language models (LLMs) function as AI agents, then exploring the perception-reasoning-action-reflection loop that structures the agent's decision-making. Next, it covers topological descriptors and parameter tuning challenges in medical imaging, followed by an intuitive introduction to topological data analysis (TDA) as applied to medical images. Finally, it concludes with a focused look at the TopoAgent framework itself, tying all concepts together.

### Large language models in AI agents *(prerequisite)*
Learn how large language models can act as intelligent agents that perceive, reason, and decide actions autonomously. This foundational understanding is key to grasping how TopoAgent uses an LLM to select and tune topological descriptors adaptively.

*How the paper uses it:* TopoAgent leverages an LLM-based agentic framework to automate topology learning in medical imaging.

▶ [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — Jeff Su · 1 year ago

### Perception reasoning action reflection loop *(prerequisite)*
Understand the core iterative loop where an AI agent perceives input, reasons about it, takes actions, and reflects on outcomes to improve. This cycle enables adaptive and self-correcting behavior essential for TopoAgent's descriptor selection.

*How the paper uses it:* TopoAgent operates through a Perception–Reasoning–Action–Reflection (PRAR) loop to adaptively determine descriptors.

▶ [Perception, Reasoning, Action, Reflection, State Update: The Agent Framework](https://www.youtube.com/watch?v=O1g5DW5Fkpg) — The Bearded AI Guy · 8:20 · 2 months ago

### Topological descriptors and parameter tuning *(prerequisite)*
Explore what topological descriptors are and why tuning their parameters is challenging, especially in diverse medical image datasets. This background clarifies the problem TopoAgent solves by automating descriptor and parameter selection.

*How the paper uses it:* The paper addresses automating descriptor and parameter selection to overcome manual trial-and-error in medical image topology analysis.

▶ [Florian Russold (07/16/2025): Learning from two-parameter ...](https://www.youtube.com/watch?v=ZUbHcSe5QNk) — Applied Algebraic Topology Network · 55:25

### Topological data analysis in medical imaging
Gain intuition on how topological data analysis extracts geometric and structural features from medical images, complementing traditional pixel-level methods. This concept underpins the value of using topology in medical image analysis.

*How the paper uses it:* TopoAgent uses topological data analysis to capture important geometric features missed by conventional deep learning.

▶ [Topological Data Analysis for Medical Imaging](https://www.youtube.com/watch?v=_3y2dzz9K5w) — Amii · 2 months ago

### TopoAgent framework talk *(the paper's own talk)*
See a direct presentation of the TopoAgent framework, illustrating how the LLM agent integrates perception, reasoning, action, and reflection with domain-specific tools to automate topology learning.

*How the paper uses it:* This video provides a direct source for understanding the authors' novel agentic framework for automated topology learning.

▶ [Add Cognitive Topology to Your AI Agents](https://www.youtube.com/watch?v=7d4bEfj7wmc) — Discover AI · 6 months ago

## Already in your library

- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
