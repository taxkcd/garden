---
title: "784 · Neural Control Variates with Automatic Integration — Gordon Wetzstein"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-gordon-wetzstein"
source_hash: "0d365aea92be466d8b354097f39d0b881361534359c36394b86be1bed8cc302a"
sequence: 784
generator: "outreach-garden: managed"
---

# 784 · Neural Control Variates with Automatic Integration

## At a glance

- **Professor:** Gordon Wetzstein
- **Institution:** Stanford University
- **Paper:** [Neural Control Variates with Automatic Integration](https://arxiv.org/pdf/2409.15394)
- **Authors:** Zilu Li, Guandao Yang, Qingqing Zhao, Xi Deng, Leonidas Guibas, Bharath Hariharan, Gordon Wetzstein
- **Year:** 2024

## Paper overview

This paper introduces a novel method to reduce the variance in Monte Carlo integration by using neural networks to approximate the antiderivative of integrand functions. This approach enables the use of arbitrary neural network architectures as control variates, which are functions used to improve the accuracy of Monte Carlo estimates. The method is applied to solve partial differential equations (PDEs) using Walk-on-Sphere algorithms, showing improved accuracy and lower variance compared to previous methods.

### Why it matters

**Research problem:** Monte Carlo integration, widely used in computer graphics and PDE solving, suffers from high variance requiring many samples for accuracy. Control variates reduce variance but traditionally rely on heuristics or limited parametric functions with known integrals, restricting expressivity and performance.

**Why it matters:** Reducing variance in Monte Carlo integration is critical for efficient and accurate simulations in graphics and scientific computing, such as rendering realistic images and solving PDEs without discretization. Improved variance reduction leads to faster computations and better-quality results.

**Key contributions:**

- A novel method to use arbitrary neural network architectures as control variate functions by modeling their antiderivatives.
- A numerically stable construction of control variate estimators for different spatial integration domains.
- Demonstration of the method's effectiveness in reducing variance when solving Laplace and Poisson PDEs using Walk-on-Sphere algorithms.
- Extension of the method to handle families of integrals with varying domains and integrands via conditional neural networks.

## About the professor

**Gordon Wetzstein** — Associate Professor, Electrical Engineering Department, Stanford University.

Research interests: His research advances physical and spatial AI at the intersection of computer vision, artificial intelligence, and computational optics, with applications in spatial computing, imaging, generative world models, and robotics.

### Research links

- [Faculty/profile page](https://stanford.edu/~gordonwz)
- [Professor website](https://psai.stanford.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Monte Carlo integration and variance reduction
**The paper assumes:** Monte Carlo integration, variance reduction techniques, control variates, numerical integration theory
**Already in this field?** Skip this entirely if you already understand Monte Carlo methods and classical variance reduction techniques including control variates.

To understand the paper on Neural Control Variates with Automatic Integration, a solid grasp of Monte Carlo integration and variance reduction techniques, especially control variates, is essential. The rigorous option offers a comprehensive university-level introduction to machine learning concepts including variance and bias, which underpin Monte Carlo methods. The fast track provides a focused, intuitive series on Monte Carlo variance reduction techniques, ideal for quickly grasping the key ideas relevant to this paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 8 (Data Splits, Models & Cross-Validation), 9 (Decision Trees and Ensemble Methods), 10 (Introduction to Neural Networks), and 11 (Backprop & Improving Neural Networks), about 5.3 hours total — these cover bias-variance tradeoff, ensemble methods, and neural network fundamentals relevant to variance reduction and control variates.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng is a highly authoritative machine learning course covering foundational concepts such as bias-variance tradeoff and neural networks, which are crucial to understanding the theoretical underpinnings of variance reduction and neural control variates in Monte Carlo integration.

*If you want all of it:* 27.9 hours across all 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Monte Carlo for Finance](https://www.youtube.com/playlist?list=PLqpCwow11-OqqfELduCMcRI6wcnoM3GAZ) — QuantPy · 13 videos · 4.1h across 13 episodes

**Watch only this:** Episodes 4 (Monte Carlo Variance Reduction with Antithetic Variates) and 5 (Monte Carlo Variance Reduction with Control Variates), about 38 minutes total — these directly explain variance reduction methods relevant to the paper's approach.

*Why it unblocks this paper:* The QuantPy 'Monte Carlo for Finance' playlist includes concise, clear episodes specifically on Monte Carlo variance reduction techniques including control variates, providing an intuitive and practical understanding of the key methods used in the paper.

*If you want all of it:* 4.1 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Neural Control Variates with Automatic Integration,' start by building a solid foundation in Monte Carlo integration and variance reduction techniques, including classical control variates. Next, grasp the role of automatic differentiation in neural networks, which is crucial for the paper's method of constructing neural control variates. Then, learn about the Walk-on-Spheres algorithm for solving PDEs, as the paper applies its method in this context. Finally, focus on the core concept of neural control variates with automatic integration, prioritizing the authors' own related talks and advanced research presentations.

### Monte Carlo Integration Variance Reduction *(prerequisite)*
Understanding variance reduction methods in Monte Carlo integration is essential to appreciate the motivation behind the paper's approach. This section covers foundational techniques like importance sampling, stratified sampling, and classical control variates, which reduce estimator variance and improve computational efficiency.

*How the paper uses it:* The paper aims to reduce variance in Monte Carlo integration, making this foundational knowledge critical.

▶ [Variance reduction methods](https://www.youtube.com/watch?v=dihn4djMaqw) — Michel Bierlaire · 33:22 · 5y ago

### Control Variates Method *(prerequisite)*
Control variates are a classical variance reduction technique that the paper extends using neural networks. This section explains the theory and application of control variates in Monte Carlo simulations, providing the necessary background to understand the paper's novel neural control variate construction.

*How the paper uses it:* The paper innovates on control variates by using neural networks to approximate antiderivatives for variance reduction.

▶ [Lecture 2022-1 (27): Numerical Methods: Monte-Carlo Control Variates](https://www.youtube.com/watch?v=xgp18udRMxA) — finmath · 46:55 · 4y ago

### Automatic Differentiation in Neural Networks *(prerequisite)*
Automatic differentiation (AD) is a key computational tool leveraged by the paper to construct neural networks with known analytical integrals. This section covers forward and reverse mode AD, computational graphs, and implementation details relevant to neural network training and integration.

*How the paper uses it:* The paper uses automatic differentiation frameworks to enable arbitrary neural network architectures as control variates.

▶ [Lecture 8 Part 2: Automatic Differentiation on Computational Graphs](https://www.youtube.com/watch?v=43kl6wi1H6k) — MIT OpenCourseWare · 1:05:29 · 2y ago

### Walk-on-Spheres Algorithm for PDEs *(prerequisite)*
The Walk-on-Spheres (WoS) algorithm is a Monte Carlo method for solving PDEs, which the paper uses to demonstrate its variance reduction method. This section introduces PDEs and the WoS algorithm, providing context for the paper's application domain.

*How the paper uses it:* The paper applies its neural control variate method to solve Laplace and Poisson PDEs using the Walk-on-Spheres algorithm.

▶ [Monte Carlo Geometry Processing](https://www.youtube.com/watch?v=bZbuKOxH71o) — Keenan Crane · 52:04 · 4y ago

### Neural Control Variates Paper Talk *(paper-talk search result; attribution unverified)*
This section focuses on the core contribution of the paper: using neural networks to approximate antiderivatives for control variates in Monte Carlo integration. The selected talk provides direct insights from the authors or closely related research presentations, explaining the novel method, its implementation, and results.

*How the paper uses it:* Directly hear authors explain their novel method and insights on neural control variates with automatic integration.

▶ [AutoInt: Automatic Integration for Fast Neural Volume Rendering | CVPR 2021](https://www.youtube.com/watch?v=GYxFYbih0PU) — Stanford Computational Imaging Lab · 7:16 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Neural Control Variates with Automatic Integration, start by learning the basics of Monte Carlo integration and variance reduction techniques, which motivate the need for control variates. Next, grasp the classical control variates method and automatic differentiation in neural networks, both foundational to the paper's approach. Finally, explore the paper's core idea of using neural networks to approximate antiderivatives for variance reduction and its application to solving PDEs with the Walk-on-Spheres algorithm.

### Monte Carlo Integration Variance Reduction *(prerequisite)*
Monte Carlo integration uses random sampling to approximate integrals but often suffers from high variance, requiring many samples for accuracy. Variance reduction techniques improve efficiency by lowering this variance, making simulations faster and more reliable.

*How the paper uses it:* The paper aims to reduce variance in Monte Carlo integration to improve accuracy and efficiency in PDE solving.

▶ [Variance Reduction Techniques in Monte Carlo Methods](https://www.youtube.com/watch?v=cVyVHKPnZ9s) — QuantVerse · 13:43 · 8mo ago

### Control Variates Method *(prerequisite)*
Control variates are a classical variance reduction technique that uses functions with known integrals to reduce the variance of Monte Carlo estimates. Understanding this method is key to appreciating how the paper extends it using neural networks.

*How the paper uses it:* The paper generalizes control variates by learning them with neural networks approximating antiderivatives.

▶ [Lecture 2022-1 (27): Numerical Methods: Monte-Carlo Control Variates](https://www.youtube.com/watch?v=xgp18udRMxA) — finmath · 46:55 · 4y ago

### Automatic Differentiation in Neural Networks *(prerequisite)*
Automatic differentiation efficiently computes derivatives of functions represented by neural networks, enabling gradient-based optimization and analytical integral computations. This technique is crucial for constructing neural control variates with known integrals.

*How the paper uses it:* The paper leverages automatic differentiation to build neural networks whose antiderivatives can be integrated analytically.

▶ [Lecture 4 - Automatic Differentiation](https://www.youtube.com/watch?v=56WUlMEeAuA) — Deep Learning Systems Course · 1:03:35 · 4y ago

### Walk-on-Spheres Algorithm for PDEs *(prerequisite)*
The Walk-on-Spheres algorithm is a Monte Carlo method for solving PDEs by simulating random walks within spheres, avoiding discretization. Understanding this algorithm helps contextualize the paper's application of neural control variates to PDE solving.

*How the paper uses it:* The paper demonstrates improved variance reduction when solving PDEs using the Walk-on-Spheres algorithm.

▶ [Monte Carlo Geometry Processing](https://www.youtube.com/watch?v=bZbuKOxH71o) — Keenan Crane · 52:04 · 4y ago

### Neural Networks for Function Integration
Neural networks can approximate complex functions, including antiderivatives, enabling novel integration techniques. This concept underpins the paper's method of learning control variates by modeling antiderivatives with neural networks.

*How the paper uses it:* The paper uses neural networks to approximate antiderivatives of integrands for variance reduction in Monte Carlo integration.

▶ [Backpropagation, intuitively | Deep Learning Chapter 3](https://www.youtube.com/watch?v=Ilg3gGewQ5U) — 3Blue1Brown · 12:47 · 8y ago

### Neural Control Variates Paper Talk *(paper-talk search result; attribution unverified)*
Hearing the authors explain their method provides direct insight into the motivation, approach, and results of the paper. This talk complements foundational knowledge with specific details about the novel neural control variates technique.

*How the paper uses it:* This talk covers the paper’s novel method of using neural networks as control variates via automatic integration.

▶ [AutoInt: Automatic Integration for Fast Neural Volume Rendering | CVPR 2021](https://www.youtube.com/watch?v=GYxFYbih0PU) — Stanford Computational Imaging Lab · 7:16 · 5y ago

## Already in your library

- [MC simulations: 3.2 Control variate](https://www.youtube.com/watch?v=pRvWyIOX-GM) — also for: The Model Forest Ensemble Kalman Filter (Andrey A. Popov)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [But what is a partial differential equation? | DE2](https://www.youtube.com/watch?v=ly4S0oi3Yz8) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [Lecture 6 | Training Neural Networks I](https://www.youtube.com/watch?v=wEoyxE0GP2M) — also for: SpikON: A Dual-Parallel and Efficient Accelerator for Online Spiking Neural Networks Learning (Xiaoxuan Yang)
- [1: Introduction to Neural Networks and Deep Learning; Training Deep NNs](https://www.youtube.com/watch?v=kyQ0CRkYhy4) — also for: AsymVLM: Asymmetric Token Pruning for Efficient Vision-Language Model Inference (Mahmut T. Kandemir)
- [Lecture 10 - Introduction to Neural Networks | Stanford CS229: Machine Learning (Autumn 2018)](https://www.youtube.com/watch?v=MfIjxPh6Pys) — also for: Knowledge-augmented Deep Learning and Its Applications: A Survey (Zijun Cui)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core ideas of the "Neural Control Variates with Automatic Integration" paper. Starting with a simple implementation of control variates for variance reduction in Monte Carlo integration, you then reimplement the paper's neural antiderivative approach and compare it to a baseline. Finally, you extend the method to address a key limitation by exploring computational cost reduction strategies, demonstrating deeper engagement with the paper's future directions.

### Beginner — Monte Carlo Integration with Polynomial Control Variates
*Effort: a weekend, ~8 hours*

You build a simple Monte Carlo integrator for a 2D function over a unit disk and implement classical polynomial control variates to reduce variance. You will compare variance and mean squared error of plain Monte Carlo estimates versus those using polynomial control variates.

**Why it shows you understood the paper:** This project demonstrates your grasp of the control variates concept and variance reduction in Monte Carlo integration, foundational to the paper's motivation and approach.

**Grounded in:** The paper's research problem and why variance reduction matters: "Control variates reduce variance but traditionally rely on heuristics or limited parametric functions with known integrals, restricting expressivity and performance."

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D integrand functions defined analytically (e.g., polynomials or trigonometric functions) over the unit disk; no external dataset needed.

**Build it:**

1. Implement a Monte Carlo integrator for a 2D function over the unit disk using uniform sampling.
2. Implement polynomial basis functions as control variates with known integrals over the disk.
3. Estimate integrals with and without control variates, compute variance and mean squared error.
4. Visualize and compare variance reduction achieved by polynomial control variates.
5. Write a README explaining the control variates method and results.

**Ships as:** A Jupyter notebook or Python script showing Monte Carlo integration with and without polynomial control variates, variance comparison plots, and explanatory notes.

**Stretch goal:** Add another baseline control variate method such as normalizing flows or simple neural networks approximating the integrand directly.

### Intermediate — Neural Control Variates via Antiderivative Approximation
*Effort: 2 weekends, ~20 hours*

You implement the paper's core method of learning neural control variates by training a neural network to approximate the antiderivative of a 2D integrand function over a disk domain. You then use automatic differentiation to compute the integrand and construct unbiased variance-reduced Monte Carlo estimators. You compare variance and mean squared error against the polynomial control variate baseline from the beginner project.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's novel approach of using neural networks for control variates via antiderivative modeling, and you understand the numerical stability and unbiasedness aspects.

**Grounded in:** Key contribution: "A novel method to use arbitrary neural network architectures as control variate functions by modeling their antiderivatives." Key result: "Achieves lower variance and mean squared error compared to baseline control variate methods using normalizing flows and polynomial bases."

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 2D integrand functions over the unit disk, same as beginner but used for training the neural network.

**Build it:**

1. Define a neural network architecture that outputs the antiderivative function over 2D inputs.
2. Use automatic differentiation to compute the integrand as the derivative of the network output.
3. Implement training objectives minimizing variance of the Monte Carlo estimator using samples from the domain.
4. Train the neural network on synthetic integrand functions.
5. Evaluate and compare variance and mean squared error of Monte Carlo estimates using the neural control variate versus polynomial control variates.
6. Document the implementation details, training procedure, and results.

**Ships as:** A PyTorch-based implementation demonstrating neural control variates via antiderivative approximation, with quantitative variance reduction results and comparison plots.

**Stretch goal:** Extend the method to a 3D spherical domain and evaluate variance reduction there.

### Advanced — Reducing Computational Cost in Neural Control Variates for Higher Dimensions
*Effort: 3+ weeks*

You extend the neural control variates method by exploring strategies to reduce computational overhead caused by evaluating the antiderivative network multiple times per sample in higher dimensions. Possible approaches include network architecture modifications, approximation techniques, or caching intermediate computations. You evaluate the trade-offs between variance reduction and computational cost on synthetic 3D integrals.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to critically engage with research challenges and propose practical improvements.

**Grounded in:** Limitation: "Computing the integration requires evaluating the antiderivative network 2^d times, where d is the integral dimension. This prevents our method from applying to higher dimensional space." Future direction: "Exploring architectures and training methods to reduce computational overhead and improve stability."

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic 3D integrand functions over the unit sphere domain, generated analytically for controlled experiments.

**Build it:**

1. Review the computational bottleneck in evaluating the antiderivative network multiple times per sample.
2. Design and implement one or more strategies to reduce evaluation cost, such as network pruning, caching repeated computations, or approximating the antiderivative with a simpler surrogate.
3. Integrate the cost-reduction strategy into the neural control variate training and inference pipeline.
4. Evaluate variance reduction and computational cost (e.g., runtime, FLOPs) trade-offs on 3D synthetic integrands.
5. Compare results against the baseline neural control variate method without cost reduction.
6. Write a detailed report discussing the methods, results, and implications for practical use.

**Ships as:** A research-style codebase and report demonstrating a practical approach to reduce computational cost in neural control variates, with quantitative evaluation on 3D integrals.

**Stretch goal:** Apply the improved method to a simple PDE solving task using the Walk-on-Spheres algorithm and compare wall-time and accuracy.
