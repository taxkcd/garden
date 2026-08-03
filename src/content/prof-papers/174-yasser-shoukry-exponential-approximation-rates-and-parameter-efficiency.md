---
title: "174 · Exponential Approximation Rates and Parameter Efficiency of Learnable Bernstein Activations — Yasser Shoukry"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yasser-shoukry"
source_hash: "6d8cc2a8b1c518f0ae96e418562a117a45f158209cfbf3306a26c052ed2c77cc"
sequence: 174
generator: "outreach-garden: managed"
---

# 174 · Exponential Approximation Rates and Parameter Efficiency of Learnable Bernstein Activations

## At a glance

- **Professor:** Yasser Shoukry
- **Institution:** Univ. of California - Irvine
- **Paper:** [Exponential Approximation Rates and Parameter Efficiency of Learnable Bernstein Activations](https://arxiv.org/pdf/2602.04264)
- **Authors:** Ibrahim Albool, Malak Gamal El-Din, Salma Elmalaki, Yasser Shoukry
- **Year:** 2026

## Paper overview

This paper introduces DeepBern-Nets (DBNs), neural networks that use learnable Bernstein polynomial activations instead of traditional activation functions like ReLU. The authors prove that DBNs can approximate functions exponentially faster with fewer parameters, while remaining fully differentiable and trainable with standard methods. Extensive experiments on large datasets show DBNs achieve significantly better accuracy and efficiency than ReLU and other smooth activations.

### Why it matters

**Research problem:** Traditional activation functions like ReLU lack rigorous theoretical guarantees on representational capacity and parameter efficiency, limiting the efficiency and accuracy of deep neural networks.

**Why it matters:** Improving activation functions can lead to neural networks that require fewer parameters and training resources while achieving better performance, which is critical for large-scale and resource-constrained applications.

**Key contributions:**

- Theoretical proof that DBNs achieve exponential approximation error decay O(n^{-L}) with depth L and polynomial degree n, outperforming polynomial rates of ReLU networks.
- Demonstration that DBNs remain fully differentiable and trainable with standard backpropagation, unlike other super-approximation architectures relying on non-differentiable operators.
- Extensive empirical validation on 1,344 experiments over large datasets (HIGGS and SUSY) showing DBNs achieve up to 99.9% parameter reduction, faster convergence, and up to 45% lower final loss compared to ReLU.
- Analysis of DBNs' superior representational capacity on analytic classification and regression tasks, showing DBNs learn complex nonlinear decision boundaries with fewer neurons.
- Implementation of a custom Triton kernel for efficient polynomial evaluation and gradient computation to mitigate computational overhead.

## About the professor

**Yasser Shoukry** — Associate Professor and Associate Chair, Nhu Department of Electrical Engineering and Computer Science, Univ. of California - Irvine.

Research interests: develop algorithms and tools to reason about the resilience, security, and privacy of Artificial Intelligence (AI) controlled Cyber-Physical Systems and Internet-of-Things (IoT), in general, and robotic systems, in particular, providing a scientific basis to understand their fundamental properties and guide their design.

### Research links

- [Faculty/profile page](https://rcpsl.eng.uci.edu/yshoukry)
- [Professor website](https://faculty.sites.uci.edu/rcpsl)
- [Resolved homepage](https://rcpsl.eng.uci.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on DeepBern-Nets and learnable Bernstein activations, start with foundational knowledge on approximation theory in neural networks and polynomial approximation in machine learning to grasp the theoretical basis of exponential approximation error decay. Then, review differentiability and backpropagation to appreciate how Bernstein activations remain trainable. Finally, focus on the core concept of learnable Bernstein polynomial activations, prioritizing the authors' own talk or closely related advanced research presentations.

### Approximation theory neural networks *(prerequisite)*
This section covers the theoretical foundation of how neural networks approximate functions, including error bounds and universal approximation properties. Understanding these concepts is essential to appreciate the paper's claim of exponential approximation error decay with DeepBern-Nets compared to polynomial rates of ReLU networks.

*How the paper uses it:* The paper proves that DeepBern-Nets achieve exponential approximation error decay, outperforming traditional ReLU networks.

▶ [Prof. Gitta Kutyniok | Deep Neural Networks: From ...](https://www.youtube.com/watch?v=Co5jT2FME6g) — INI Seminar Room 1 · 58:10

### Polynomial approximation in ML *(prerequisite)*
This section focuses on polynomial approximation techniques and their role in machine learning, which is critical for understanding how Bernstein polynomial activations improve approximation accuracy and parameter efficiency. It also helps clarify the impact of polynomial degree on function approximation.

*How the paper uses it:* DeepBern-Nets use learnable Bernstein polynomial activations, leveraging polynomial approximation properties for improved efficiency and accuracy.

▶ [The Bernstein Basis](https://www.youtube.com/watch?v=DNFhI_Op4y0) — Mutual Information · 14:07

### Backpropagation differentiability *(prerequisite)*
Backpropagation and differentiability are fundamental to training neural networks. This section explains how gradients are computed and propagated through networks, which is crucial to understanding why DeepBern-Nets remain fully differentiable and trainable with standard methods despite their novel activations.

*How the paper uses it:* The paper demonstrates that Bernstein polynomial activations maintain differentiability, enabling stable training with backpropagation.

▶ [Backpropagation calculus | Deep Learning Chapter 4](https://www.youtube.com/watch?v=tIeHLnjs5U8) — 3Blue1Brown · 10:18

### Bernstein polynomial activations
This section dives into the core method of the paper: replacing traditional activations with learnable Bernstein polynomial activations. It covers the mathematical properties and advantages of Bernstein polynomials as activation functions in neural networks.

*How the paper uses it:* The paper introduces DeepBern-Nets that use learnable Bernstein polynomial activations to achieve superior approximation and parameter efficiency.

▶ [Introduction of Bernstein Polynomials.](https://www.youtube.com/watch?v=6BlRurEmlbM) — The Math Mentor · 8 months ago

### DeepBern-Nets author talk *(the paper's own talk)*
This section provides direct insight from the authors or closely related expert talks on the novel DeepBern-Nets approach, including theoretical results and empirical validations. It is the most precise and authoritative resource for understanding the paper's contributions and context.

*How the paper uses it:* The authors' own talk or related expert presentations offer the most direct explanation of DeepBern-Nets and their theoretical and practical benefits.

▶ [Learnable Polynomial, Trigonometric, and Tropical Activations – I. Khalfaoui Hassani, FZJ | HAICON25](https://www.youtube.com/watch?v=VSJQWQj7HXI) — Helmholtz AI · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's novel DeepBern-Nets approach, starting with the basics of activation functions in deep learning, then building intuition on polynomial approximations and Bernstein polynomials, followed by backpropagation differentiability to understand training, and concluding with the core concept of learnable Bernstein polynomial activations used in the paper.

### Activation functions deep learning *(prerequisite)*
Activation functions introduce non-linearity into neural networks, enabling them to learn complex patterns. Understanding traditional activations like ReLU and their limitations provides context for why new activations like Bernstein polynomials are proposed.

*How the paper uses it:* The paper replaces traditional activations like ReLU with learnable Bernstein polynomial activations to improve efficiency and approximation rates.

▶ [Activation Functions Explained | ReLU, Sigmoid & Soft-max ...](https://www.youtube.com/watch?v=4yiRCYYzSYM) — Quick Research Reviews (QRR) · 9:40

### Polynomial approximation in ML *(prerequisite)*
Polynomial approximations help us understand how well functions can be represented by simpler mathematical forms. This concept is key to grasping how Bernstein polynomials can approximate complex functions efficiently.

*How the paper uses it:* The paper leverages polynomial degree to achieve exponential approximation error decay in DeepBern-Nets.

▶ [Lesson 80: Understanding Taylor Polynomials and ...](https://www.youtube.com/watch?v=IaYltZ747ug) — Fahad Hussain · 20:27

### Bernstein polynomial activations
Bernstein polynomials form a basis for approximating continuous functions and have properties that ensure smoothness and stability. Learning about these polynomials helps understand the activation functions used in DeepBern-Nets.

*How the paper uses it:* DeepBern-Nets use learnable Bernstein polynomial activations to replace standard activations, enabling faster convergence and better parameter efficiency.

▶ [Introduction of Bernstein Polynomials.](https://www.youtube.com/watch?v=6BlRurEmlbM) — The Math Mentor · 8 months ago

### Backpropagation differentiability *(prerequisite)*
Backpropagation is the algorithm that allows neural networks to learn by computing gradients of the loss with respect to parameters. Differentiability of activation functions is essential for this process to work effectively.

*How the paper uses it:* The paper proves that Bernstein polynomial activations remain fully differentiable and trainable with standard backpropagation methods.

▶ [Backpropagation calculus | Deep Learning Chapter 4](https://www.youtube.com/watch?v=tIeHLnjs5U8) — 3Blue1Brown · 10:18

### DeepBern-Nets author talk *(the paper's own talk)*
This talk provides direct insights from authors about the motivation, theory, and empirical results of DeepBern-Nets, highlighting the advantages of learnable Bernstein activations over traditional methods.

*How the paper uses it:* The authors explain their novel DeepBern-Nets approach, theoretical proofs, and experimental validations in this talk.

▶ [Learnable Polynomial, Trigonometric, and Tropical Activations – I. Khalfaoui Hassani, FZJ | HAICON25](https://www.youtube.com/watch?v=VSJQWQj7HXI) — Helmholtz AI · 1 year ago
