---
title: "198 · Algorithmic Foundations of Inexact Computing — Krishna V. Palem"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-krishna-v-palem"
source_hash: "0c43e07b9e0e3a7034a6f29f808d5cd8286e02e79ae15f81ad3bf2c83664bded"
sequence: 198
generator: "outreach-garden: managed"
---

# 198 · Algorithmic Foundations of Inexact Computing

## At a glance

- **Professor:** Krishna V. Palem
- **Institution:** Rice University
- **Paper:** [Algorithmic Foundations of Inexact Computing](https://arxiv.org/abs/2305.18705)
- **Authors:** John Augustine, Dror Fried, Krishna V. Palem, Duc-Hung Pham, Anshumali Shrivastava
- **Year:** 2023

## Paper overview

This paper develops a principled, mathematically rigorous framework for designing and analyzing algorithms that intentionally trade accuracy for significant savings in computational resources, especially energy. It introduces a model of inexact computing where hardware unreliability is embraced rather than corrected, allowing algorithms to be co-designed with hardware characteristics to optimize energy use while maintaining acceptable solution quality. The framework is applied to Boolean functions, machine learning, and sorting, demonstrating exponential improvements when algorithms are aware of variable importance (influence) compared to oblivious approaches.

### Why it matters

**Research problem:** Existing inexact or approximate computing approaches have been largely ad-hoc and specific to particular algorithms or hardware, lacking a unified, principled model for algorithm design and analysis that incorporates hardware unreliability and energy-quality tradeoffs.

**Why it matters:** As transistor sizes approach physical limits, reliable deterministic computing becomes increasingly costly in energy and complexity. Embracing hardware unreliability (inexactness) offers a promising alternative to overcome energy and power walls, enabling more energy-efficient computing systems critical for embedded systems and beyond.

**Key contributions:**

- Introduction of a clean, principled model for inexact computing linking energy investment to error probabilities per bit.
- Definition of influence-aware versus influence-oblivious algorithm design approaches based on bit importance.
- Proof of existence and computability of optimal energy allocations minimizing total impact of errors.
- Demonstration of exponential gains in solution quality for influence-aware algorithms on Boolean evaluation, PAC learning, and sorting.
- Extension of the model to practical variable precision computation schemes with theoretical guarantees.

## About the professor

**Krishna V. Palem** — Kenneth and Audrey Kennedy Professor of Computing, Department of Computer Science, Rice University.

Research interests: all aspects of embedded computing, include adaptive architectures and computing, algorithms, compiler optimizations, embedded systems, low energy computing and nanoelectronics.

### Research links

- [Faculty/profile page](http://www.cs.rice.edu/~kvp1)
- [Resolved homepage](http://www.cs.rice.edu/~kvp1/)
- [Lab website](http://visen.rice.edu)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Algorithmic Foundations of Inexact Computing," start with foundational concepts that underpin the theoretical framework: probabilistic bit-flip error models, Boolean function influence theory, and PAC learning theory. These prerequisites provide the mathematical and computational background necessary to grasp the paper's novel model and results. Finally, study the authors' own talk presenting their framework to see the direct exposition of their contributions and insights.

### Probabilistic bit-flip error models *(prerequisite)*
This concept models hardware unreliability as probabilistic bit flips, which is the core abstraction used in the paper to represent inexact computing at the hardware level. Understanding this model is essential to appreciate how energy investment per bit relates to error probabilities and how algorithms can be designed around this probabilistic framework.

*How the paper uses it:* The paper abstracts hardware unreliability as probabilistic bit flips dependent on energy investment per bit.

▶ [23. Probabilistic Computation, BPP](https://www.youtube.com/watch?v=Vp_AzDGQyrA) — MIT OpenCourseWare · 4 years ago

### Boolean function influence theory *(prerequisite)*
Boolean function influence theory provides the mathematical tools to quantify the importance of individual bits (variables) in a Boolean function. This is critical for understanding the influence-aware versus influence-oblivious energy allocation strategies proposed in the paper, which hinge on the concept of variable influence.

*How the paper uses it:* The paper uses influence theory to define energy allocation strategies based on bit importance in Boolean functions.

▶ [Introduction to Analysis of Boolean Functions 1](https://www.youtube.com/watch?v=GR5gugFdDa4) — Simons Institute for the Theory of Computing · 59:41

### PAC learning theory *(prerequisite)*
PAC learning theory underpins the paper's extension of the inexact computing model to learning algorithms. Understanding PAC learning is necessary to grasp how the paper proves efficient learnability of functions with certain influence ratios under inexactness.

*How the paper uses it:* The paper relates influence ratios to PAC learnability and extends the model to PAC learning algorithms.

▶ [Machine Learning: Lecture 13: PAC learning](https://www.youtube.com/watch?v=p5xP8fWnPZw) — UofU Data Science · 1:20:27

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper's framework for inexact computing, starting with the modeling of hardware unreliability via probabilistic bit-flip errors. It then builds intuition on Boolean function influence theory, which is key to the paper's influence-aware energy allocation strategies. Next, it covers PAC learning theory to grasp the learning results under inexactness, followed by an explanation of the energy-quality tradeoff central to the paper's model. This order ensures a beginner gains the necessary background before approaching the paper's core contributions.

### Probabilistic bit-flip error models *(prerequisite)*
This concept explains how hardware unreliability can be modeled as random bit flips occurring with certain probabilities, which depend on energy investment. Understanding this probabilistic abstraction is essential to grasp how the paper links energy use to error rates in computing bits.

*How the paper uses it:* The paper models hardware unreliability as probabilistic bit flips dependent on energy per bit.

▶ [Bit Flip Error](https://www.youtube.com/watch?v=BLTCczmcn-M) — UV Physics · 32:26 · 1 year ago

### Boolean function influence theory *(prerequisite)*
Boolean function influence theory studies how much each input bit affects the output of a Boolean function. This helps identify which bits are more important and should receive more energy to reduce errors, a key idea in the paper's influence-aware energy allocation.

*How the paper uses it:* The paper uses influence theory to define influence-aware versus oblivious energy allocation strategies.

▶ [Boolean Functions, Noise Sensitivity, Influences and Percolation](https://www.youtube.com/watch?v=qYQC14dBA_w) — Microsoft Research · 55:00

### PAC learning theory *(prerequisite)*
PAC learning theory provides a framework to understand when and how algorithms can learn concepts approximately but reliably from data, despite noise or errors. This is relevant to the paper's results on learning Boolean functions under inexactness.

*How the paper uses it:* The paper proves PAC learnability results for functions with influence ratio greater than one under inexact computing.

▶ [Machine learning: Lecture 12b: PAC learning introduction](https://www.youtube.com/watch?v=XAwUQLYr5ZE) — UofU Data Science · 9:58

### Energy-quality tradeoff in computing
This concept explores the fundamental tradeoff between the energy invested in computation and the resulting quality or accuracy of the output. It sets the stage for understanding why trading some accuracy for energy savings can be beneficial, as formalized in the paper.

*How the paper uses it:* The paper's core framework links energy investment per bit to error probabilities, enabling energy-quality tradeoff analysis.

▶ [Stanford Energy Seminar | Power Hungry: Innovations to harness AI and enable efficient compute](https://www.youtube.com/watch?v=jOLzLMFlVd4) — Stanford ENERGY · 7 months ago

### Paper authors talk *(the paper's own talk)*
A direct presentation by the authors can provide an overview of their framework, motivations, and key results in their own words, complementing the foundational concepts with insights into their approach and findings.

*How the paper uses it:* Hearing from the authors helps contextualize the theoretical framework and its applications.

▶ [2019 ADSI Summer Workshop: Algorithmic Foundations of Learning and Control,  Alekh Agarwal](https://www.youtube.com/watch?v=nT2qMagfjys) — Paul G. Allen School · 45:37 · 6 years ago

## Already in your library

- [Probably Approximately Correct (PAC)Learning ( KTU CS467  Machine Learning Module 2)](https://www.youtube.com/watch?v=fTWm2S5tFCo) — also for: Approximate Replicability in Learning (Russell Impagliazzo)
- [PAC Learning - Georgia Tech - Machine Learning](https://www.youtube.com/watch?v=e37nlms7Zi0) — also for: Approximate Replicability in Learning (Russell Impagliazzo)
