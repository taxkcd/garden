---
title: "205 · Incorporating Visual Cortical Lateral Connection Properties into CNN: Recurrent Activation and Excitatory-Inhibitory Separation — Yoonsuck Choe"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yoonsuck-choe"
source_hash: "135ca5c28dd5a13d60b7b351db8554425f851ac60fc6aaf95c6e81d350c89448"
sequence: 205
generator: "outreach-garden: managed"
---

# 205 · Incorporating Visual Cortical Lateral Connection Properties into CNN: Recurrent Activation and Excitatory-Inhibitory Separation

## At a glance

- **Professor:** Yoonsuck Choe
- **Institution:** Texas A&M University
- **Paper:** [Incorporating Visual Cortical Lateral Connection Properties into CNN: Recurrent Activation and Excitatory-Inhibitory Separation](https://arxiv.org/abs/2509.15460)
- **Authors:** Jin Hyun Park, Cheng Zhang, Yoonsuck Choe
- **Year:** 2025

## Paper overview

This paper introduces lateral connections within convolutional neural networks (CNNs), inspired by the lateral connections in the mammalian visual cortex, which are missing in traditional CNN architectures. The authors model two key properties of these lateral connections: recurrent activation and the separation of excitatory and inhibitory connections. Their models improve classification accuracy and exhibit neural activation and connection properties similar to biological visual systems.

### Why it matters

**Research problem:** Current CNN architectures lack lateral (horizontal) connections within the same convolutional layer, which are prominent in the mammalian visual cortex and believed to play important computational roles. The problem is how to incorporate these lateral connections into CNNs and understand their computational benefits and biological relevance.

**Why it matters:** Incorporating lateral connections could align CNN architectures closer to biological visual systems, potentially improving performance and providing insights into visual cortical computation principles. Understanding these connections may also enhance the biological plausibility of neural network models.

**Key contributions:**

- Introduction of lateral connections within CNNs to model local recurrent interactions inspired by the visual cortex.
- Modeling recurrent activation through shared lateral weights in CNNs (LC-CNN).
- Designing custom loss functions to separate excitatory and inhibitory lateral connections without hard constraints (LCEI-CNN).
- Demonstration that these lateral connections improve classification accuracy across multiple datasets.
- Analysis showing emergent properties such as sparsification of neural responses and lateral connection patterns similar to biological visual cortex.

## About the professor

**Yoonsuck Choe** — Professor, Department of Computer Science and Engineering, Texas A&M University.

Research interests: computational neuroscience, brain imaging and analysis, neuroevolution, and neural networks (deep learning).

### Research links

- [Faculty/profile page](http://faculty.cs.tamu.edu/choe)
- [Resolved homepage](https://people.engr.tamu.edu/choe/index.html)
- [Lab website](https://people.engr.tamu.edu/choe/choe/bnl/home.html)
- [Google Scholar](https://scholar.google.com/citations?user=nFb_T4wAAAAJ&hl=en)
- [GitHub](https://github.com/yschoe)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on incorporating visual cortical lateral connection properties into CNNs, start with foundational neuroscience concepts about the biological visual cortex lateral connectivity and excitatory/inhibitory neural circuits. Then, build understanding of recurrent neural network dynamics and custom loss functions for weight separation as technical prerequisites. Finally, focus on the core concept of lateral connections in CNNs, culminating with the authors' own talk to gain direct insights into their novel modeling approach and results.

### Biological visual cortex lateral connectivity *(prerequisite)*
This section covers the foundational neuroscience concepts of lateral connections in the visual cortex, which motivate the paper's approach to modeling lateral connections within CNNs. Understanding the structure and function of these biological lateral connections is crucial for appreciating the biological relevance and inspiration behind the proposed models.

*How the paper uses it:* The paper models lateral connections in CNNs inspired by the lateral connectivity observed in the mammalian visual cortex.

▶ [3. The lateral geniculate nucleus and the visual cortex](https://www.youtube.com/watch?v=T9HYPlE8xzc) — MIT OpenCourseWare · 1:24:54 · 11 years ago

### Excitatory and inhibitory neural circuits *(prerequisite)*
This section explains the balance and roles of excitatory and inhibitory neurons in neural circuits, a key biological principle that the paper models by separating excitatory and inhibitory lateral connections in CNNs. A solid understanding of these circuits helps in grasping the significance of the excitatory-inhibitory separation introduced in the paper.

*How the paper uses it:* The paper introduces excitatory and inhibitory separation in lateral connections to mimic biological neural circuit properties.

▶ [Balance of excitation and inhibition in the brain | Arvind Kumar](https://www.youtube.com/watch?v=TVA1JtgtRJ4) — KTH Royal Institute of Technology · 18:30

### Recurrent neural networks dynamics *(prerequisite)*
This section provides an understanding of recurrent activation mechanisms and dynamics in neural networks, which are central to the paper's modeling of recurrent lateral connections within CNN layers. Knowledge of RNNs and their dynamics will clarify how recurrent activation loops in the LC-CNN model function computationally.

*How the paper uses it:* The paper models recurrent activation through lateral connections, akin to recurrent neural network dynamics.

▶ [18: Recurrent Networks - Intro to Neural Computation](https://www.youtube.com/watch?v=EpPtCLkCGOk) — MIT OpenCourseWare · 1:19:13

### Custom loss functions for weight separation *(prerequisite)*
This section covers the design and role of custom loss functions in neural network training, specifically how they can encourage separation of weights without hard constraints. This technical background is essential to understand the paper's approach to excitatory-inhibitory weight separation using soft penalty terms.

*How the paper uses it:* The paper uses novel custom loss functions to encourage excitatory and inhibitory weight separation without hard constraints.

▶ [Deep Learning - Lecture 4.1 (Deep Neural Networks II: Output and Loss Functions)](https://www.youtube.com/watch?v=7xTyZE9mRNk) — Tübingen Machine Learning · 5 years ago

### Lateral connections in CNNs
This section focuses on the core concept of lateral connections within CNNs, which is the central methodological innovation of the paper. It covers how lateral recurrent interactions can be incorporated into CNN layers, providing the computational foundation for the LC-CNN and LCEI-CNN models.

*How the paper uses it:* The paper introduces lateral connections within CNNs to model local recurrent interactions inspired by the visual cortex.

▶ [Lecture 24 | CNNs III | CMPS 497 Deep Learning | Fall 2024](https://www.youtube.com/watch?v=m-yauH7L2Sk) — Tamer Elsayed · 1:02:08

### Paper authors talk
This section provides direct access to the authors' own presentation or lecture, offering the most precise and insightful explanation of their work, methodology, and findings. It is the best resource for understanding the paper's contributions from the authors themselves.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on their novel CNN lateral connection models.

▶ [Lecture 9.1: Tomaso Poggio - iTheory: Visual Cortex & Deep Networks](https://www.youtube.com/watch?v=IeD8VXfqPyQ) — MIT OpenCourseWare · 46:12 · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational neuroscience and deep learning concepts essential to understanding the paper's biologically inspired CNN lateral connections. We start with the biological visual cortex and its lateral connectivity, then cover recurrent neural network dynamics and excitatory/inhibitory neural circuits to build intuition about recurrent and balanced neural interactions. Next, we explain CNN basics and lateral connections in CNNs, culminating in the core paper method of modeling lateral connections with recurrent activation and excitatory-inhibitory separation.

### Biological visual cortex lateral connectivity *(prerequisite)*
Learn how the mammalian visual cortex processes visual information, focusing on lateral (horizontal) connections between neurons that enable local recurrent interactions and feature integration. Understanding this biological architecture provides the motivation for incorporating similar lateral connections into CNNs.

*How the paper uses it:* The paper models lateral connections in CNNs inspired by the lateral connectivity patterns observed in the biological visual cortex.

▶ [Visual Processing and the Visual Cortex](https://www.youtube.com/watch?v=MgMNUne9j9c) — Professor Dave Explains · 16:05

### Recurrent neural networks dynamics *(prerequisite)*
Understand the basics of recurrent neural networks (RNNs), which process information through loops allowing temporal dynamics and recurrent activation. This intuition helps grasp how lateral connections in CNN layers can induce recurrent activation and dynamic processing.

*How the paper uses it:* The paper models recurrent activation within CNN layers via lateral connections, analogous to recurrent dynamics in RNNs.

▶ [A friendly introduction to Recurrent Neural Networks](https://www.youtube.com/watch?v=UNmqTiOnRfg) — Luis Serrano Academy · 22:44

### Excitatory and inhibitory neural circuits *(prerequisite)*
Explore how neural circuits balance excitatory and inhibitory signals to regulate activity and maintain stable, efficient processing. This biological principle underpins the paper's approach to separating excitatory and inhibitory lateral connections in CNNs.

*How the paper uses it:* The paper separates lateral connections into excitatory and inhibitory pathways to mimic biological neural circuit balance.

▶ [Excitation and inhibition of neurons](https://www.youtube.com/watch?v=EVMbro2wblU) — Harvard Online · 9 years ago

### Lateral connections in CNNs
Learn what lateral connections mean in the context of CNNs—connections within the same convolutional layer that enable recurrent interactions and richer feature integration beyond feedforward processing. This concept is central to the paper's novel CNN architectures.

*How the paper uses it:* The paper introduces lateral connections within CNN layers to model local recurrent interactions inspired by the visual cortex.

▶ [Lecture 24 | CNNs III | CMPS 497 Deep Learning | Fall 2024](https://www.youtube.com/watch?v=m-yauH7L2Sk) — Tamer Elsayed · 1:02:08

### Custom loss functions for weight separation *(prerequisite)*
Understand how custom loss functions can be designed to encourage specific properties in neural network weights, such as separating excitatory and inhibitory connections without hard constraints. This technical approach is key to the paper's LCEI-CNN model.

*How the paper uses it:* The paper uses custom loss functions to softly enforce excitatory and inhibitory lateral weight separation in CNNs.

▶ [[DSCI 572] Gradients and loss functions](https://www.youtube.com/watch?v=OqakHTDV3iI) — Mike Gelbart · 1:05:48 · 6 years ago

### Paper authors talk
Hear directly from experts about the motivation, methodology, and implications of incorporating lateral connections into CNNs inspired by the visual cortex. This talk provides valuable insights and context for the paper's contributions.

*How the paper uses it:* The authors discuss their biologically inspired CNN lateral connection models and their computational benefits.

▶ [Lecture 9.1: Tomaso Poggio - iTheory: Visual Cortex & Deep Networks](https://www.youtube.com/watch?v=IeD8VXfqPyQ) — MIT OpenCourseWare · 46:12 · 8 years ago

## Already in your library

- [Lecture 3 | Loss Functions and Optimization](https://www.youtube.com/watch?v=h7iBpEHGVNc) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
