---
title: "147 · Do Sparse Autoencoders Identify Reasoning Features in Language Models? — Irene Y. Chen"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-irene-y-chen"
source_hash: "ddd44cb374dc4c38bf5915b8a7133e86889e148d10cdab10133056e40265e3a0"
sequence: 147
generator: "outreach-garden: managed"
---

# 147 · Do Sparse Autoencoders Identify Reasoning Features in Language Models?

## At a glance

- **Professor:** Irene Y. Chen
- **Institution:** Univ. of California - Berkeley
- **Paper:** [Do Sparse Autoencoders Identify Reasoning Features in Language Models?](https://arxiv.org/pdf/2601.05679)
- **Authors:** George Ma, Zhongyuan Liang, Irene Y. Chen, Somayeh Sojoudi
- **Year:** 2026

## Paper overview

This paper investigates whether sparse autoencoders (SAEs), a tool used to interpret large language models (LLMs), truly identify internal features that correspond to reasoning processes. The authors find that many features identified as reasoning-related are actually triggered by simple lexical cues rather than genuine reasoning. They develop a falsification framework combining token injection and LLM-guided counterexamples to test these features, concluding that caution is needed when attributing reasoning behavior to individual SAE features.

### Why it matters

**Research problem:** Whether sparse autoencoders can reliably identify genuine reasoning-related internal features in large language models, or if the features they detect are confounded by superficial lexical patterns.

**Why it matters:** Understanding if and how LLMs internally represent reasoning is crucial for interpretability, trust, and improving model design. Misattributing lexical correlates as reasoning features can mislead research and applications relying on mechanistic interpretability.

**Key contributions:**

- Theoretical analysis demonstrating that sparsity in SAE decoding favors stable low-dimensional lexical correlates over high-dimensional reasoning variation.
- Development of a falsification-oriented evaluation framework combining causal token injection and LLM-guided counterexample generation.
- Comprehensive empirical evaluation across 22 configurations of LLMs, layers, and reasoning datasets.
- Demonstration that most candidate reasoning features are token-driven or confounded by lexical patterns.
- Provision of detailed qualitative analyses showing common lexical confounds activating SAE features.

## About the professor

**Irene Y. Chen** — Assistant Professor, Department of Pathology and Laboratory Medicine (SMD), Univ. of California - Berkeley.

### Research links

- [Faculty/profile page](https://vcresearch.berkeley.edu/faculty/irene-chen)
- [Identity evidence](https://irenechen.net)
- [Identity evidence](https://irenechen.net/)
- [Identity evidence](https://people.csail.mit.edu/iychen/)
- [Professor website](https://www.urmc.rochester.edu/people/112363645-irene-y-chen)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on sparse autoencoders identifying reasoning features in language models, start with foundational knowledge on mechanistic interpretability and causal probing, which provide the theoretical and methodological background for interpreting neural networks and testing causal relationships. Next, explore the core concept of sparse autoencoders interpretability, focusing on their role in extracting interpretable features from LLMs. Finally, conclude with the authors' own talk on sparse autoencoders to gain direct insights into their findings, methodology, and implications.

### Mechanistic interpretability language models *(prerequisite)*
Mechanistic interpretability is the foundational framework for understanding how internal computations in language models correspond to learned features and behaviors. This concept is critical to grasp the context and goals of the paper, which aims to interpret reasoning features mechanistically within LLMs.

*How the paper uses it:* The paper builds on mechanistic interpretability to investigate whether sparse autoencoders reveal genuine reasoning features in LLMs.

▶ [Mechanistic Interpretability - Stella Biderman | Stanford MLSys ...](https://www.youtube.com/watch?v=P7sjVMtb5Sg) — Stanford MLSys Seminars · 55:27

### Causal probing neural networks *(prerequisite)*
Causal probing techniques are essential for establishing whether identified features in neural networks have a causal effect on model behavior, rather than merely correlating with it. Understanding these methods is necessary to appreciate the paper's falsification framework combining token injection and adversarial counterexamples.

*How the paper uses it:* The paper uses causal token injection as part of its falsification framework to test candidate reasoning features identified by sparse autoencoders.

▶ [Probing | Stanford CS224U Natural Language Understanding ...](https://www.youtube.com/watch?v=ElDtkhqv5ZE) — Stanford Online · 11:29

### Sparse autoencoders interpretability
Sparse autoencoders are the central interpretability tool studied in the paper, used to extract monosemantic features from LLM activations. Understanding how SAEs work and their interpretability properties is crucial to follow the paper's theoretical analysis and empirical evaluation.

*How the paper uses it:* The paper analyzes sparse autoencoders theoretically and empirically to assess their ability to identify reasoning-related features in LLMs.

▶ [Decoding Neural Networks with Sparse Autoencoders | David ...](https://www.youtube.com/watch?v=M7nxLfKC9pY) — UCL Centre for Artificial Intelligence · 1:09:05

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides direct exposition of their research, including motivation, methodology, theoretical insights, and detailed empirical results. This talk is the most authoritative source for understanding the nuances and implications of their findings.

*How the paper uses it:* This talk by Joshua Engels covers sparse autoencoders and their limitations, directly relating to the paper's investigation of reasoning features in LLMs.

▶ [Sparse Autoencoders: Progress & Limitations with Joshua Engels](https://www.youtube.com/watch?v=eVlGeHA2Cnw) — NDIF Team · 11 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how sparse autoencoders are used to interpret reasoning features in large language models. We start with mechanistic interpretability to grasp the goal of understanding internal model computations, then cover causal probing and adversarial example generation as key methods for testing feature causality. Finally, we focus on sparse autoencoders themselves, the core tool analyzed in the paper, to see how they identify features and their limitations.

### Mechanistic interpretability language models *(prerequisite)*
Mechanistic interpretability is about understanding how neural networks internally compute their outputs by identifying meaningful components like neurons or circuits. This foundational knowledge helps us appreciate why and how researchers try to find reasoning features inside language models.

*How the paper uses it:* The paper builds on mechanistic interpretability to analyze whether sparse autoencoders truly find reasoning-related features in LLMs.

▶ [An Introduction to Mechanistic Interpretability – Neel Nanda ...](https://www.youtube.com/watch?v=0704iLc55Fs) — International Association for Safe & Ethical AI · 25:13

### Causal probing neural networks *(prerequisite)*
Causal probing techniques test whether specific internal features actually cause certain model behaviors, rather than just correlating with them. This is crucial for validating if identified features represent genuine reasoning or superficial cues.

*How the paper uses it:* The paper uses causal token injection as part of its falsification framework to test candidate reasoning features.

▶ [Probing | Stanford CS224U Natural Language Understanding ...](https://www.youtube.com/watch?v=ElDtkhqv5ZE) — Stanford Online · 11:29

### Adversarial example generation LLMs *(prerequisite)*
Adversarial example generation involves creating inputs that fool models or break feature-behavior relationships, helping to falsify hypotheses about feature causality. This method is used to generate counterexamples that challenge candidate reasoning features.

*How the paper uses it:* The paper employs LLM-guided adversarial counterexample generation to falsify reasoning features identified by sparse autoencoders.

▶ [Are Aligned Language Models “Adversarially Aligned”?](https://www.youtube.com/watch?v=uqOfC3KSZFc) — Simons Institute for the Theory of Computing · 1:02:41

### Sparse autoencoders interpretability
Sparse autoencoders are tools that learn sparse, interpretable decompositions of neural network activations, aiming to identify distinct features inside models. Understanding how SAEs work and their interpretability benefits is key to grasping the paper's analysis.

*How the paper uses it:* The paper critically evaluates sparse autoencoders as a method to identify reasoning features in LLMs and reveals their limitations.

▶ [Demo: Gemma Scope: Sparse autoencoders on Gemma 2](https://www.youtube.com/watch?v=X1gDXDQu_wU) — Google for Developers · 7:24

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insights into their motivations, methods, and conclusions, complementing technical understanding with context and nuance.

*How the paper uses it:* This talk by Joshua Engels discusses sparse autoencoders, their progress, and limitations, directly relating to the paper's topic.

▶ [Sparse Autoencoders: Progress & Limitations with Joshua Engels](https://www.youtube.com/watch?v=eVlGeHA2Cnw) — NDIF Team · 11 months ago

## Already in your library

- [A Friendly Introduction to Generative Adversarial Networks (GANs)](https://www.youtube.com/watch?v=8L11aMN5KY8) — also for: CCS‑GAN: COVID‑19 CT Scan Generation and Classification with Very Few Positive Training Images (Yaacov Yesha)
