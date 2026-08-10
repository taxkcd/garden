---
title: "155 · TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging — Erin W. Chambers"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-erin-w-chambers"
source_hash: "8c66f7c02380ffc201aa1703329d2fabd28a17dcf44e0ee1d64c1be6fe74bcb0"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Topological Data Analysis
**The paper assumes:** topological data analysis, persistent homology, topological descriptors, computational topology
**Already in this field?** Skip this entirely if you already have a solid understanding of topological data analysis and its computational methods.

This background is designed to provide foundational knowledge in Topological Data Analysis (TDA), which is essential for understanding the TopoAgent framework's use of topological descriptors in medical imaging. The rigorous course option offers a deep, university-level treatment of computational algebraic topology, while the fast track provides a concise, intuition-driven introduction to TDA concepts. Choose the rigorous course for thorough theoretical grounding, or the fast track for a quicker, visual overview that covers the core ideas efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computational Algebraic Topology Lecture Videos](https://www.youtube.com/playlist?list=PLnLAqsCN_2ke8_EUd_KoJsLkPO0BKrrc6) — Vidit Nanda · 37 videos · 13.4h across 37 episodes

**Watch only this:** Watch Week 1 Lectures 1A through 1E (Simplicial Complexes, Subcomplexes and Filtrations, Geometric Realization, Simplicial Maps, Filtrations and Data), and Week 3 Lectures 3A through 3D (Euler Characteristic, Chain Complexes, Homology, Smith Normal Form), about 3.5 hours total. This subset covers the core mathematical structures and homology theory necessary to grasp TDA in the paper.

*Why it unblocks this paper:* Vidit Nanda's Computational Algebraic Topology lecture series is a structured university-level course that covers key concepts such as simplicial complexes, filtrations, homology, and chain complexes, all fundamental to understanding topological descriptors and persistent homology used in TopoAgent.

*If you want all of it:* About 13.4 hours across all 37 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Topological Data Analysis](https://www.youtube.com/playlist?list=PL8MAmqMDID4w_Rv2m2-lhrLQYrOz9iYMP) — AlgoTales · 9 videos · 2.3h across 9 episodes

**Watch only this:** Watch episodes 1 through 5 (Introduction to Topological Data Analysis, Applications and Motivation, Simplicial Complex and Dimensions, Oriented Simplicial Complex, Face of a Simplex), about 1.25 hours total. This subset provides a solid conceptual foundation without deep algebraic detail.

*Why it unblocks this paper:* The AlgoTales Topological Data Analysis playlist offers a clear, visual, and concise introduction to TDA concepts such as simplicial complexes, chain groups, and homology, making it ideal for quickly building intuition about the topological descriptors and data analysis methods used in TopoAgent.

*If you want all of it:* About 2.3 hours across all 9 episodes.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of TopoAgent's approach to automated topology learning in medical imaging. The beginner project focuses on reproducing a core concept of topological descriptor extraction using existing tools. The intermediate project builds on the authors' released code to replicate and evaluate the adaptive descriptor selection mechanism on a smaller scale. The advanced project extends the framework to address a stated limitation by exploring multi-descriptor fusion for 2D medical images, opening a path for research discussion.

### Beginner — Persistent Homology Descriptor Extraction on Sample Medical Images
*Effort: a weekend, ~8 hours*

You build a simple Python script that extracts persistent homology (PH) topological descriptors from a small set of 2D medical images using a public TDA library. You visualize the persistence diagrams and compute a basic classification metric (e.g., balanced accuracy) on a binary classification task using these descriptors as features with a simple classifier.

**Why it shows you understood the paper:** This project shows you understand the fundamental topological descriptor (persistent homology) used in the paper and how it captures geometric features from medical images, a key step in TopoAgent's pipeline.

**Grounded in:** The project demonstrates understanding of the paper's use of topological descriptors (Section 2.1 Topological Descriptors and the importance of PH in medical images).

**Tech stack:** Python 3.11, scikit-learn, GUDHI or Ripser (TDA library), matplotlib

**Data:** Use a small subset of the APTOS 2019 blindness detection dataset from Kaggle (https://www.kaggle.com/c/aptos2019-blindness-detection) as a substitute for medical images.

**Build it:**

1. Download and preprocess a small subset of the APTOS 2019 dataset (e.g., 100 images, binary labels).
2. Use a TDA library like GUDHI or Ripser to compute persistent homology diagrams from each image's grayscale intensity filtration.
3. Extract vectorized features from persistence diagrams (e.g., persistence landscapes or persistence images).
4. Train a simple classifier (e.g., Random Forest) on these features and evaluate balanced accuracy.
5. Visualize persistence diagrams for a few sample images to illustrate topological features.

**Verified links from the paper:**

- <https://www.kaggle.com/c/aptos2019-blindness-detection> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a Jupyter notebook or Python script that extracts PH descriptors, trains a classifier, reports balanced accuracy, and visualizes persistence diagrams.

**Stretch goal:** Add a simple parameter tuning step to explore how filtration parameters affect descriptor quality.

### Intermediate — Reproducing TopoAgent's Adaptive Descriptor Selection on TopoBenchmark Subset
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' TopoAgent codebase to reproduce its adaptive descriptor selection on a smaller subset of the TopoBenchmark datasets. You compare TopoAgent's per-image descriptor choice against a fixed-descriptor baseline and report balanced accuracy, replicating the paper's core evaluation metric.

**Why it shows you understood the paper:** This project shows you can operate the full TopoAgent framework, understand its PRAR loop, skill set, and dual memory, and verify its adaptive descriptor selection advantage quantitatively.

**Grounded in:** This project directly engages with the paper's key contribution and results: adaptive per-image descriptor determination outperforms fixed baselines by 9.32% balanced accuracy (Key Contributions and Key Results).

**Tech stack:** Python 3.11, PyTorch, TopoAgent codebase dependencies

**Data:** Use the TopoBenchmark subset included or referenced in the TopoAgent GitHub repository (https://github.com/gm3g11/TopoAgent). If full TopoBenchmark is unavailable, use the included sample datasets or simulate a small subset based on the repo instructions.

**Build it:**

1. Clone the TopoAgent repository from https://github.com/gm3g11/TopoAgent and install dependencies.
2. Familiarize yourself with the code structure, especially the PRAR loop and skill set modules.
3. Run the agent on a small subset of the TopoBenchmark datasets provided or simulated.
4. Run a fixed-descriptor baseline on the same data for comparison.
5. Evaluate and report balanced accuracy for both methods, comparing results.
6. Document the reasoning traces and reflection outputs to illustrate the agent's interpretability.

**Verified links from the paper:**

- <https://github.com/gm3g11/TopoAgent> — released by the paper's authors

**Ships as:** A GitHub repo fork or branch with scripts/notebooks to run TopoAgent on a subset, baseline comparison, evaluation metrics, and a README explaining the reproduction and results.

**Stretch goal:** Modify the skill set or reasoning parameters to observe their effect on descriptor selection and accuracy.

### Advanced — Extending TopoAgent for Multi-Descriptor Fusion in 2D Medical Images
*Effort: 3+ weeks*

You extend the TopoAgent framework to select and fuse multiple complementary topological descriptors per image instead of a single descriptor. You implement a fusion strategy (e.g., feature concatenation or weighted ensemble) guided by the agent's reasoning. You evaluate this extension on a subset of TopoBenchmark or similar data and compare performance against single-descriptor TopoAgent.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep comprehension of the framework's architecture and the challenges of multi-descriptor fusion in topology learning.

**Grounded in:** Addresses the paper's limitation that the agent currently determines a single descriptor per image and the future direction to explore multi-descriptor fusion guided by the agent's reasoning.

**Tech stack:** Python 3.11, PyTorch, TopoAgent codebase, NumPy, scikit-learn

**Data:** Use TopoBenchmark subset or substitute with publicly available 2D medical image datasets such as APTOS 2019 or simulated data if needed.

**Build it:**

1. Study the TopoAgent codebase to understand how descriptor selection and execution are implemented.
2. Design and implement a mechanism for the agent to propose multiple descriptors per image based on its reasoning outputs.
3. Implement a fusion method to combine features from multiple descriptors (e.g., concatenation, weighted averaging).
4. Modify the evaluation pipeline to handle fused features and retrain classifiers accordingly.
5. Run experiments comparing single-descriptor vs multi-descriptor fusion on the chosen dataset.
6. Analyze results and document the impact of multi-descriptor fusion on balanced accuracy and reasoning complexity.

**Verified links from the paper:**

- <https://github.com/gm3g11/TopoAgent> — released by the paper's authors

**Ships as:** A GitHub repo with the extended TopoAgent code, experimental results comparing single vs multi-descriptor approaches, and a detailed README discussing design decisions and findings.

**Stretch goal:** Explore extending the skill set to include descriptor complementarity metrics to guide fusion decisions.
