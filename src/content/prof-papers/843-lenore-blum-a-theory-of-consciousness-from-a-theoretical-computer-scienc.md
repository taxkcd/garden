---
title: "843 · A theory of consciousness from a theoretical computer science perspective: Insights from the Conscious Turing Machine — Lenore Blum"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lenore-blum"
source_hash: "7325c8d6b3fb5e36c0f58061bb206aaa327274719544b56cc60b6c0123ec72d5"
sequence: 843
generator: "outreach-garden: managed"
---

# 843 · A theory of consciousness from a theoretical computer science perspective: Insights from the Conscious Turing Machine

## At a glance

- **Professor:** Lenore Blum
- **Institution:** Carnegie Mellon University
- **Paper:** [A theory of consciousness from a theoretical computer science perspective: Insights from the Conscious Turing Machine](https://arxiv.org/pdf/2107.13704)
- **Authors:** Lenore Blum, Manuel Blum
- **Year:** 2022

## Paper overview

This paper proposes a simple computational model of consciousness called the Conscious Turing Machine (CTM), inspired by Alan Turing's Turing Machine and the Global Workspace Theory of consciousness. The CTM models consciousness as a substrate-independent computational process involving competition among processors to broadcast information to a global workspace, capturing phenomena like attention, awareness, and feelings of consciousness. The model explains various consciousness-related phenomena such as blindsight, inattentional blindness, dreams, altered states, and free will from a theoretical computer science perspective.

### Why it matters

**Research problem:** Understanding consciousness scientifically and formally, particularly how a machine might experience feelings of consciousness, and addressing the 'hard problem' of consciousness through a computational and complexity-theoretic framework.

**Why it matters:** Consciousness is a fundamental yet elusive concept studied across philosophy, neuroscience, and cognitive science. A formal computational model could unify understanding, provide insights into consciousness-related phenomena, and inform artificial intelligence and cognitive neuroscience.

**Key contributions:**

- Definition of the Conscious Turing Machine (CTM) as a substrate-independent computational model of consciousness.
- Formalization of consciousness notions such as conscious content, conscious awareness, and streams of consciousness within the CTM.
- Introduction of Brainish, a multi-modal inner language for internal communication in the CTM.
- Probabilistic Up-Tree competition mechanism for selecting conscious content.
- Explanation of consciousness-related phenomena (blindsight, inattentional blindness, change blindness, dreams, altered states, free will) via the CTM.

## About the professor

**Lenore Blum** — Distinguished Career Professor of Computer Science, Department of Computer Science, Carnegie Mellon University.

Research interests: Complexity and Real Computation, merging seemingly unrelated areas in mathematics and computer science, increasing the participation of girls and women in mathematics and scientific fields

### Research links

- [Faculty/profile page](http://www.cs.cmu.edu/~lblum)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** computational complexity theory
**The paper assumes:** computational complexity theory, Turing machines, probabilistic computation, complexity classes, resource-bounded computation
**Already in this field?** Skip this entirely if you already have a solid understanding of computational complexity theory and Turing machine models.

To understand the computational complexity theory foundations underlying the Conscious Turing Machine (CTM) model of consciousness, this background provides two viewing options. The rigorous course offers a deep, structured university-level introduction to theory of computation and complexity, essential for grasping the formal computational and complexity-theoretic concepts in the paper. The fast track is a concise playlist focused specifically on undecidability and limits of computation, providing a quick yet solid conceptual grounding in key complexity theory topics relevant to the CTM without the full depth of a semester course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Theory of Computation (Michael Sipser, MIT, 2021)](https://www.youtube.com/playlist?list=PLidiQIHRzpXIFFbyGrWkqXXVj0BztDcTF) — Theoretical Computer Science School (TCSS) · 25 videos · 32.3h across 25 episodes

**Watch only this:** Lectures 5 through 7 and 12 through 14, about 9.5 hours — covering Turing machines, Church-Turing thesis, decision problems, time complexity, P and NP, and NP-completeness, which are critical for understanding the CTM's computational framework and complexity bounds.

*Why it unblocks this paper:* Michael Sipser's Theory of Computation course from MIT is a highly authoritative and comprehensive university lecture series covering Turing machines, complexity classes, probabilistic computation, and related foundational topics directly relevant to the CTM's computational model and complexity constraints.

*If you want all of it:* About 32.3 hours across all 25 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Undecidability & Conclusion | Chapter 16 | Theory of Computation](https://www.youtube.com/playlist?list=PLBlnK6fEyqRh99y3P1k4dji6irGtrEZUm) — Neso Academy · 7 videos · 1.4h across 7 episodes

**Watch only this:** All 7 episodes, about 1.4 hours — this complete playlist succinctly covers the core undecidability concepts and computational limits essential for understanding the theoretical constraints in the CTM model.

*Why it unblocks this paper:* Neso Academy's Undecidability & Conclusion playlist is a concise, well-structured series that covers key concepts like the Universal Turing Machine, the Halting Problem, and undecidability, providing a quick yet rigorous introduction to fundamental limits of computation relevant to the CTM's theoretical basis.

*If you want all of it:* About 1.4 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'A theory of consciousness from a theoretical computer science perspective: Insights from the Conscious Turing Machine,' start with foundational concepts including Turing Machine theory, Global Workspace Theory, computational models of consciousness, and probabilistic computation. These prerequisites provide the theoretical and neuroscientific background necessary to grasp the CTM model. Finally, focus on the core concept of the Conscious Turing Machine itself through the authors' own detailed talks, which directly present their formal computational model and its implications for consciousness.

### Turing Machine theory *(prerequisite)*
Understanding classical Turing Machines is essential as the CTM extends this foundational computational model to formalize consciousness. The selected lecture from MIT OpenCourseWare by Michael Sipser offers a rigorous and detailed introduction to Turing Machines and their theoretical properties, suitable for advanced readers.

*How the paper uses it:* The CTM extends the classical Turing Machine model to incorporate consciousness phenomena.

▶ [5. CF Pumping Lemma, Turing Machines](https://www.youtube.com/watch?v=IycOPFmEQk8) — MIT OpenCourseWare · 1:13:59 · 5y ago

### Global Workspace Theory *(prerequisite)*
Global Workspace Theory (GWT) is a leading cognitive neuroscience theory of consciousness that inspired the CTM. The lecture by Prof. Matt McCormick provides an in-depth academic treatment of GWT, explaining its mechanisms and relevance to consciousness research, making it ideal for advanced understanding.

*How the paper uses it:* The CTM is inspired by and formalizes aspects of Global Workspace Theory.

▶ [Dehaene and Naccache Global Workspace Theory Toward a Cognitive Neuroscience of Consciousness, I](https://www.youtube.com/watch?v=JAUycwoDFXI) — Matt McCormick, Professor in Philosophy, CSUS · 45:23 · 6y ago

### Computational models of consciousness *(prerequisite)*
This concept grounds the CTM by exploring how consciousness can be modeled computationally. The IEEE FOCS talk offers a theoretical computer science perspective on consciousness, aligning well with the paper's approach and providing a rigorous foundation.

*How the paper uses it:* Understanding how consciousness can be modeled computationally grounds the CTM concept.

▶ [What Can Theoretical Computer Science Contribute to the Discussion of Consciousness](https://www.youtube.com/watch?v=152yq0SPIqk) — IEEE FOCS: Foundations of Computer Science · 1:04:19 · 5y ago

### Probabilistic computation and competition *(prerequisite)*
The CTM uses probabilistic competition mechanisms to select conscious content. The MIT OpenCourseWare lecture on probabilistic computation by Michael Sipser is a rigorous and comprehensive resource on probabilistic computation theory, suitable for advanced readers.

*How the paper uses it:* CTM uses probabilistic competition mechanisms to select conscious content.

▶ [24. Probabilistic Computation (cont.)](https://www.youtube.com/watch?v=7J1HD9rqEB4) — MIT OpenCourseWare · 1:23:16 · 5y ago

### Conscious Turing Machine talk
The core concept of the paper is the Conscious Turing Machine (CTM). The authors' own talks at the Simons Institute provide the most direct, detailed, and authoritative exposition of the CTM model, its formal definition, and its implications for understanding consciousness from a theoretical computer science perspective.

*How the paper uses it:* Directly hear the authors' presentation of their model and insights.

▶ [The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness](https://www.youtube.com/watch?v=qjtYl3zWv-w) — Simons Institute for the Theory of Computing · 45:00 · Streamed 4mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the Conscious Turing Machine (CTM) model of consciousness, starting with the classical Turing Machine theory, then exploring computational models of consciousness and the Global Workspace Theory that inspired CTM. It then covers probabilistic computation mechanisms relevant to CTM's competition process, culminating in focused videos on the CTM model itself to connect all ideas.

### Turing Machine theory *(prerequisite)*
Turing Machines are the fundamental theoretical model of computation, describing an abstract machine that manipulates symbols on a tape according to rules. Understanding this model is essential because the CTM extends the classical Turing Machine framework to model consciousness computationally.

*How the paper uses it:* The CTM builds on Alan Turing’s original Turing Machine concept as a substrate-independent computational model.

▶ [Turing Machines Explained - Computerphile](https://www.youtube.com/watch?v=dNRDvLACg5Q) — Computerphile · 5:25 · 12y ago

### Computational models of consciousness *(prerequisite)*
Computational models of consciousness aim to explain how conscious experience can arise from information processing systems. This background helps ground the CTM concept by showing how consciousness can be framed as a computational phenomenon.

*How the paper uses it:* The CTM formalizes consciousness as a computational process inspired by existing computational theories of consciousness.

▶ [What can Theoretical Computer Science Contribute to the Discussion of Consciousness?](https://www.youtube.com/watch?v=p9iPU87vC6s) — Harvard CMSA · 53:23 · 5y ago

### Global Workspace Theory *(prerequisite)*
Global Workspace Theory (GWT) proposes that consciousness arises when information is broadcast globally across the brain’s processors. Understanding GWT is key because CTM formalizes and extends this theory into a precise computational model.

*How the paper uses it:* The CTM is inspired by and formalizes aspects of the Global Workspace Theory of consciousness.

▶ [Global Workspace Theory Explained: The Science of Consciousness](https://www.youtube.com/watch?v=XQetQGFmjZ0) — Know Time · 7:47 · 2y ago

### Probabilistic computation and competition *(prerequisite)*
Probabilistic computation involves randomness in decision-making processes, which in CTM is used to model competition among processors to select conscious content. Grasping this helps understand how CTM simulates attention and awareness dynamically.

*How the paper uses it:* CTM uses a probabilistic Up-Tree competition mechanism with coin-flip neurons to select which information becomes conscious.

▶ [24. Probabilistic Computation (cont.)](https://www.youtube.com/watch?v=7J1HD9rqEB4) — MIT OpenCourseWare · 1:23:16 · 5y ago

### Conscious Turing Machine model
The Conscious Turing Machine is a formal computational model that simulates consciousness as a global workspace with competing processors broadcasting information. This video explains the CTM’s architecture, inner language Brainish, and how it models consciousness phenomena.

*How the paper uses it:* This is the central computational model proposed by the paper to explain consciousness phenomena from a theoretical computer science perspective.

▶ [The Conscious Turing Machine (CTM), a formally defined Theoretical model of Consciousness](https://www.youtube.com/watch?v=qjtYl3zWv-w) — Simons Institute for the Theory of Computing · 45:00 · Streamed 4mo ago

## Already in your library

- [23. Probabilistic Computation, BPP](https://www.youtube.com/watch?v=Vp_AzDGQyrA) — also for: Algorithmic Foundations of Inexact Computing (Krishna V. Palem)
- [Bayes theorem, the geometry of changing beliefs](https://www.youtube.com/watch?v=HZGCoVF3YvM) — also for: Credo: Declarative Control of LLM Pipelines via Beliefs and Policies (Andrew Crotty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical ladder to demonstrate your understanding of the Conscious Turing Machine (CTM) model from the paper. Starting with a beginner-level simulation of the CTM's probabilistic competition mechanism, you then implement a simplified CTM core model to reproduce key consciousness phenomena at the intermediate level. Finally, the advanced project extends the CTM by integrating a simple learning algorithm for processor behavior, addressing a stated future direction of the paper.

### Beginner — Simulate CTM Up-Tree Probabilistic Competition
*Effort: a weekend, ~8 hours*

You build a small-scale simulation of the CTM's probabilistic Up-Tree competition mechanism where multiple Long Term Memory (LTM) processors compete to place chunks into Short Term Memory (STM). The simulation models the coin-flip neuron at each node to probabilistically select which chunk reaches STM for broadcast.

**Why it shows you understood the paper:** This project demonstrates your grasp of the CTM's core competition mechanism that governs conscious content selection, showing you understand how probabilistic competition and broadcast work in the model.

**Grounded in:** The CTM uses a probabilistic Up-Tree competition with a coin-flip neuron to select conscious content.

**Tech stack:** Python 3.11

**Data:** No external data needed; you simulate processor competition with synthetic chunk identifiers.

**Build it:**

1. Implement a tree data structure representing the Up-Tree with nodes containing coin-flip neurons.
2. Simulate multiple LTM processors each proposing a chunk of information.
3. At each tree node, simulate a probabilistic coin flip to decide which child node's chunk advances upward.
4. Run the competition until one chunk reaches the root and is placed into STM.
5. Log and visualize the competition process and final selected chunk.

**Ships as:** A Python script with clear README explaining the CTM competition mechanism, simulation logs, and visualizations of chunk selection through the Up-Tree.

**Stretch goal:** Add a simple priority weighting to chunks so that higher-priority chunks have higher probability of winning at each node.

### Intermediate — Implement a Simplified Conscious Turing Machine Core Model
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the CTM including multiple LTM processors arranged in an Up-Tree, the probabilistic competition to select chunks for STM, and the broadcast mechanism to all processors. You simulate conscious content selection and awareness over discrete time steps and reproduce a simple consciousness-related phenomenon such as inattentional blindness by controlling chunk priorities.

**Why it shows you understood the paper:** This project shows you can translate the CTM's architecture and dynamics into code, reproducing key model behaviors and linking computational mechanisms to consciousness phenomena.

**Grounded in:** Definition of the Conscious Turing Machine (CTM) as a substrate-independent computational model of consciousness; explanation of inattentional blindness via CTM architecture and competition dynamics.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic data simulating chunks of information with assigned priorities; no external dataset required.

**Build it:**

1. Design classes for LTM processors, STM, and the Up-Tree competition structure.
2. Implement the probabilistic competition mechanism with coin-flip neurons at each node.
3. Implement the broadcast of the winning chunk from STM to all LTM processors.
4. Simulate multiple time steps where processors generate chunks with varying priorities.
5. Demonstrate inattentional blindness by showing how low-priority chunks fail to reach STM and thus remain unconscious.
6. Visualize the stream of conscious content over time and the effect of competition on awareness.

**Ships as:** A Python package with documented code, simulation scripts, and plots demonstrating conscious content streams and inattentional blindness effects.

**Stretch goal:** Compare the probabilistic competition baseline with a deterministic selection baseline and report differences in conscious content distribution.

### Advanced — Extend CTM with Learning Algorithms for Processor Behavior
*Effort: 3-4 weeks*

You extend the simplified CTM model by integrating a basic learning algorithm (e.g., reinforcement learning or bandit algorithms) for LTM processors to adapt their chunk proposals and priorities based on feedback from competition outcomes. This addresses the paper's future direction of integrating machine learning to improve processor behavior and learning within the CTM framework.

**Why it shows you understood the paper:** This project tackles a stated future direction of the paper, demonstrating your ability to extend the CTM model with learning mechanisms and explore their impact on conscious content selection and awareness dynamics.

**Grounded in:** Future direction: Integration with machine learning algorithms to improve processor behavior and learning.

**Tech stack:** Python 3.11, NumPy, Matplotlib, PyTorch or TensorFlow (optional)

**Data:** Synthetic data generated by the CTM simulation; no external dataset required.

**Build it:**

1. Build upon the intermediate CTM implementation with Up-Tree competition and broadcast.
2. Implement a learning algorithm (e.g., multi-armed bandit or simple reinforcement learning) for LTM processors to adjust chunk priorities based on past competition success.
3. Simulate multiple episodes where processors adapt their chunk proposals over time.
4. Analyze how learning affects the distribution of conscious content and awareness streams.
5. Visualize learning progress, chunk selection frequencies, and changes in conscious content dynamics.
6. Document limitations and potential extensions toward empirical validation.

**Ships as:** A well-documented repository with code, simulation notebooks, and analysis demonstrating learned processor behavior and its effect on CTM consciousness phenomena.

**Stretch goal:** Incorporate a simple Brainish-like multi-modal representation for chunks and explore how learning affects multi-modal conscious content.
