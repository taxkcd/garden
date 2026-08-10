---
title: "174 · Exponential Approximation Rates and Parameter Efficiency of Learnable Bernstein Activations — Yasser Shoukry"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yasser-shoukry"
source_hash: "0269e75ee8871ace997ac349366759bf457c09856ec0fe949c7154eb75038493"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Approximation Theory for Machine Learning
**The paper assumes:** approximation theory, polynomial approximation, function smoothness, uniform convergence, neural network approximation
**Already in this field?** Skip this entirely if you already have a solid understanding of approximation theory as applied to machine learning and neural networks.

This background focuses on approximation theory as it applies to machine learning, specifically polynomial approximation and Bernstein polynomials, which are central to understanding the theoretical contributions of the paper on DeepBern-Nets. The rigorous course option offers a deep dive into structured representations and approximation in data science, suitable for those seeking a thorough mathematical foundation. The fast track provides a concise, focused introduction to Bernstein polynomials and the Weierstrass approximation theorem, ideal for readers who want a quick but solid grasp of the key concepts relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Mathematics of data: Structured representations for sensing, approximation and learning](https://www.youtube.com/playlist?list=PLuD_SqLtxSdX_w1Ztexpzl_EJgFQSkWez) — The Alan Turing Institute · 11 videos · 7.9h across 11 episodes

**Watch only this:** Episodes 1 and 2: 'Nonlinear approximation by deep ReLU networks - Ron DeVore, Texas A&M' and 'Approximation with deep networks - Remi Gribonval, Inria', about 1.5 hours total — these provide the core theoretical background on approximation rates and neural network function approximation.

*Why it unblocks this paper:* This workshop series from The Alan Turing Institute covers approximation theory in machine learning with lectures by leading experts, including nonlinear approximation by deep ReLU networks and approximation with deep networks, directly relating to the paper's theoretical analysis of neural network approximation rates.

*If you want all of it:* All 11 episodes, about 7.9 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Real Analysis I](https://www.youtube.com/playlist?list=PLhWyf911na-UTfr92l7VfS6iHvWEScz0R) — Ch-35: IIT Madras: Metallurgical and Others · 10 videos · 2.1h across 10 episodes

**Watch only this:** Episodes 35.1 'Weierstrass approximation theorem', 35.2 'Bernstein Polynomials', and 35.3 'Properties of Bernstein polynomials', about 36 minutes total — these three episodes cover the essential approximation theory and Bernstein polynomial properties.

*Why it unblocks this paper:* This concise playlist from IIT Madras covers Bernstein polynomials and the Weierstrass approximation theorem in a clear, focused manner, directly addressing the mathematical foundations needed to understand the paper's use of Bernstein polynomial activations.

*If you want all of it:* All 10 episodes, about 2.1 hours total.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder for understanding and applying the core ideas of the DeepBern-Nets paper. Starting with a beginner-level implementation of Bernstein polynomial activations in a simple neural network, you then progress to an intermediate project reimplementing the core DeepBern-Net method on a public dataset with baseline comparison. Finally, the advanced project extends the method to convolutional architectures, addressing a key limitation noted by the authors and exploring new application domains.

### Beginner — Implement Bernstein Polynomial Activation in a Simple Feedforward Network
*Effort: a weekend, ~8 hours*

You build a small feedforward neural network in Python using PyTorch that replaces the standard ReLU activation with a learnable Bernstein polynomial activation function of fixed degree. You train this network on a simple regression or classification task (e.g., synthetic 1D function approximation or MNIST subset) and visualize training loss and output function approximation.

**Why it shows you understood the paper:** This project demonstrates you understand how Bernstein polynomial activations are constructed, parameterized, and integrated into a differentiable network, reflecting the paper’s key contribution of learnable Bernstein activations and their differentiability.

**Grounded in:** Key contribution: Demonstration that DBNs remain fully differentiable and trainable with standard backpropagation, unlike other super-approximation architectures relying on non-differentiable operators.

**Tech stack:** Python 3.11, PyTorch

**Data:** Use a small synthetic dataset (e.g., noisy sine wave regression) or a subset of MNIST for classification as a stand-in for analytic tasks.

**Build it:**

1. Implement a Bernstein polynomial activation module with learnable coefficients in PyTorch.
2. Build a simple feedforward network replacing ReLU with this activation.
3. Train the network on synthetic regression or small classification data.
4. Plot training loss curves and compare output function approximation to ground truth.
5. Document the activation function design and training behavior in README.

**Ships as:** A GitHub repo with code for Bernstein activation, training scripts, plots of training loss and function approximation, and a README explaining the implementation and results.

**Stretch goal:** Add support for varying polynomial degree and visualize its effect on approximation quality.

### Intermediate — Reimplement DeepBern-Net on UCI Wine Dataset with ReLU Baseline
*Effort: 1-2 weekends, ~20 hours*

You reimplement the core DeepBern-Net method by building a feedforward neural network with learnable Bernstein polynomial activations and train it on the UCI Wine classification dataset. You compare performance (accuracy, parameter count, convergence speed) against a baseline ReLU network of similar architecture. You report metrics analogous to those in the paper.

**Why it shows you understood the paper:** This project shows you can translate the paper’s theoretical and empirical contributions into a practical implementation, reproducing the key claims of parameter efficiency and faster convergence on a real dataset, even without the authors’ released code.

**Grounded in:** Key results: DBNs achieve over 70% parameter reduction and faster convergence compared to ReLU; experimental validation on analytic classification tasks.

**Tech stack:** Python 3.11, PyTorch, scikit-learn

**Data:** Use the UCI Wine dataset (publicly available) as a smaller substitute for the paper’s analytic classification tasks.

**Build it:**

1. Implement a modular DeepBern-Net feedforward architecture with learnable Bernstein activations.
2. Prepare the UCI Wine dataset with train/test splits and preprocessing.
3. Train the DeepBern-Net and a ReLU baseline network with matched depth and width.
4. Evaluate and compare accuracy, parameter counts, and training epochs to convergence.
5. Plot training loss and accuracy curves for both models.
6. Write a detailed README discussing the implementation, results, and comparison to the paper.

**Ships as:** A GitHub repo containing DeepBern-Net and ReLU baseline implementations, training scripts, evaluation metrics, plots, and a README analyzing the results in the context of the paper.

**Stretch goal:** Experiment with varying polynomial degrees and network depths to observe their impact on performance and parameter efficiency.

### Advanced — Extend DeepBern-Nets to Convolutional Architectures for CIFAR-10
*Effort: 3-4 weeks*

You extend the DeepBern-Net approach by integrating learnable Bernstein polynomial activations into a convolutional neural network architecture and train it on the CIFAR-10 image classification dataset. This addresses the paper’s limitation regarding applicability beyond feed-forward networks. You compare performance and parameter efficiency against a standard CNN with ReLU activations and analyze training stability and convergence.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper’s method and limitations by adapting it to a new domain and architecture, contributing a genuine extension that could spark research discussions with the professor.

**Grounded in:** Limitation: Experiments focus on feed-forward networks; applicability to other architectures (e.g., convolutional or recurrent networks) is not explored.

**Tech stack:** Python 3.11, PyTorch, torchvision

**Data:** Use the CIFAR-10 dataset (publicly available) as a standard benchmark for image classification.

**Build it:**

1. Design and implement a convolutional neural network with Bernstein polynomial activations replacing ReLU.
2. Integrate polynomial evaluation and gradient computation efficiently within convolutional layers.
3. Train the Bernstein-activated CNN and a ReLU baseline on CIFAR-10 with identical architectures.
4. Measure and compare classification accuracy, parameter counts, training epochs, and training stability.
5. Analyze computational overhead and memory usage implications.
6. Document the methodology, experiments, results, and discussion in a comprehensive README.

**Ships as:** A GitHub repo with convolutional DeepBern-Net implementation, training and evaluation scripts, comparative results, and an in-depth README discussing the extension and its implications.

**Stretch goal:** Implement adaptive polynomial degree selection during training to optimize efficiency and accuracy.
