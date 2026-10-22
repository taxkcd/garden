---
title: "926 · AutoReP: Automatic ReLU Replacement for Fast Private Network Inference — Shaoyi Huang"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shaoyi-huang"
source_hash: "3994afcb759e9abc21d6637f6dcf9a3a350980be8ecf36f3237d20926861df6e"
sequence: 926
generator: "outreach-garden: managed"
---

# 926 · AutoReP: Automatic ReLU Replacement for Fast Private Network Inference

## At a glance

- **Professor:** Shaoyi Huang
- **Institution:** Stevens Institute of Technology
- **Paper:** [AutoReP: Automatic ReLU Replacement for Fast Private Network Inference](https://arxiv.org/pdf/2308.10134)
- **Authors:** Hongwu Peng, Zigeng Wang, Shaoyi Huang, Tong Zhou, Yukui Luo, Jiahui Zhao, Xi Xie, Ang Li, Tony Geng, Wujie Wen, Xiaolin Xu, Caiwen Ding, Chenghong Wang, Kaleel Mahmood
- **Year:** 2023

## Paper overview

This paper presents AutoReP, a novel framework to accelerate private inference (PI) in machine learning by automatically replacing expensive ReLU activation functions with polynomial approximations. This reduces computation and communication overhead in privacy-preserving MLaaS systems while maintaining high model accuracy. AutoReP uses a gradient-based method to select which ReLUs to replace and introduces a distribution-aware polynomial approximation to better mimic ReLU behavior. Experiments show significant accuracy improvements and speedups over prior methods on various datasets and models, including large-scale ImageNet.

### Why it matters

**Research problem:** Private inference techniques that protect data privacy using cryptographic methods suffer from high computation and communication costs, especially due to non-linear operators like ReLU. Existing methods to reduce ReLU operations either require heuristic thresholds or cause significant accuracy loss, limiting scalability and efficiency.

**Why it matters:** As Machine-Learning-As-A-Service (MLaaS) grows, protecting client data privacy during inference is critical. Efficient private inference enables secure ML services without compromising confidentiality, but current solutions are too slow or inaccurate for practical large-scale deployment.

**Key contributions:**

- Introduced a parameterized discrete indicator function co-trained with model weights for fine-grained ReLU replacement at the pixel level.
- Developed a hysteresis loop update function to stabilize the binarized ReLU replacement training process, improving convergence and accuracy.
- Proposed distribution-aware polynomial approximation (DaPa) to accurately approximate ReLU functions based on feature distribution, preserving model expressivity.
- Demonstrated AutoReP's superior accuracy and latency improvements over state-of-the-art methods on CIFAR-10, CIFAR-100, Tiny-ImageNet, and ImageNet datasets.
- Showed scalability of AutoReP to large models like EfficientNet-B2 with significant ReLU budget reductions and inference speedups.

## About the professor

**Shaoyi Huang** — Assistant Professor, Computer Science, Stevens Institute of Technology.

Research interests: Efficient machine learning algorithm, Algorithm-system co-design for AI acceleration (including emerging deep learning models, such as GNNs, LLMs, Diffusion models, etc.), Large-scale machine learning for chip design, Energy efficient privacy preserving machine learning

### Research links

- [Faculty/profile page](https://www.shaoyihuang.com)
- [Google Scholar](https://scholar.google.com/citations?user=Ybk2L10AAAAJ&hl=en)
- [GitHub](https://github.com/HarveyP123/AutoReP)
- [LinkedIn](https://www.linkedin.com/in/shaoyi-huang-719ab611b/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Neural Network Activation Functions
**The paper assumes:** neural network activation functions, ReLU properties, polynomial function approximation in deep learning
**Already in this field?** Skip this entirely if you already understand the purpose and mathematical behavior of ReLU and other activation functions in neural networks, and how polynomial approximations can substitute them.

This background focuses on neural network activation functions, especially ReLU and its polynomial approximations, which are central to understanding the AutoReP paper's approach to accelerating private inference. The rigorous course option offers a deep, structured university-level lecture series on neural networks and activation functions, suitable for thorough foundational learning. The fast track provides a concise, visual explainer playlist that covers key activation functions quickly for those needing a practical yet solid grasp without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford University CS231n, Spring 2017](https://www.youtube.com/playlist?list=PLC1qU-LWwrF64f4QKQT-Vg5Wr4qEE1Zxk) — Anders Feder · 16 videos · 19.5h across 16 episodes

**Watch only this:** Lectures 4 (Introduction to Neural Networks), 5 (Convolutional Neural Networks), and 6 (Training Neural Networks I), about 3.6 hours total — these cover neural network basics, ReLU activation, and training essentials needed to understand activation function replacement.

*Why it unblocks this paper:* Stanford University CS231n (Spring 2017) is a highly authoritative, well-structured course that covers neural networks, activation functions including ReLU, and optimization in depth, directly relevant to understanding the mathematical and practical aspects of ReLU replacement in AutoReP.

*If you want all of it:* All 16 lectures, about 19.5 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Activation functions](https://www.youtube.com/playlist?list=PLdIAe_Qmv3z5VUMHcS1yBnjCtoffh6_AT) — M. K. · 12 videos · 2.8h across 12 episodes

**Watch only this:** Episodes 2 (ReLU, Leaky ReLU, Parametric ReLU Activation Functions) and 8 (Activation Functions in Deep Learning | Sigmoid, Tanh and ReLU Activation Function), about 26 minutes total — these episodes cover ReLU and its properties relevant to polynomial approximation.

*Why it unblocks this paper:* The 'Activation functions' playlist by M. K. is a concise, clear explainer series focused specifically on activation functions including ReLU and its variants, providing intuition and practical understanding in a fraction of the time of a full course.

*If you want all of it:* All 12 episodes, about 2.8 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AutoReP paper, start by building a strong foundation in the key prerequisite topics: gradient-based discrete optimization, hysteresis loop training stability, ReLU function approximation, and distribution-aware polynomial approximation. These topics underpin the core technical contributions of AutoReP. Finally, focus on the core concept of AutoReP itself, prioritizing any direct talks by the authors or closely related research presentations to grasp the novel methods and experimental results.

### Gradient-based discrete optimization *(prerequisite)*
Understanding gradient-based discrete optimization is fundamental to grasp how AutoReP trains its discrete indicator parameters for ReLU replacement. The selected lecture series from the University of Victoria offers a rigorous, graduate-level treatment of discrete optimization algorithms, complexity, and problem-solving techniques relevant to the paper's optimization approach.

*How the paper uses it:* AutoReP uses a gradient-based discrete indicator parameter to select which ReLUs to replace, requiring knowledge of discrete optimization methods.

▶ [Discrete Optimization Lecture 1: Introduction, algorithms, Big O, Shortest Path](https://www.youtube.com/watch?v=GHgMEx2JtQE) — Jonathan Noel · 1:11:06 · Streamed 1y ago

### Hysteresis loop training stability *(prerequisite)*
The hysteresis loop concept is crucial for understanding how AutoReP stabilizes the training of its discrete indicator parameters. Although the videos focus on physical hysteresis, they provide the foundational understanding of hysteresis loops, which can be analogously applied to the training stability mechanism introduced in the paper.

*How the paper uses it:* AutoReP introduces a hysteresis loop update function to stabilize the binarized ReLU replacement training process.

▶ [The Hysteresis loop explained](https://www.youtube.com/watch?v=ZyVSMfSgOq0) — The Electric Academy · 5:34 · 7y ago

### ReLU function approximation *(prerequisite)*
A solid understanding of ReLU function approximation theory is essential to appreciate how AutoReP replaces ReLU activations with polynomial approximations. The selected talks from reputable research institutes provide advanced mathematical and theoretical insights into ReLU approximation beyond introductory explanations.

*How the paper uses it:* AutoReP replaces expensive ReLU functions with polynomial approximations to reduce computation and communication overhead.

▶ [Nonlinear approximation by deep ReLU networks - Ron DeVore, Texas A&M](https://www.youtube.com/watch?v=e1LToi6DTo8) — The Alan Turing Institute · 47:05 · 7y ago

### Distribution-aware polynomial approximation *(prerequisite)*
Distribution-aware polynomial approximation is the core technique AutoReP uses to adapt polynomial coefficients based on feature map distributions. The chosen videos offer rigorous mathematical foundations in polynomial approximation theory, which underpin the novel DaPa method introduced in the paper.

*How the paper uses it:* AutoReP proposes a distribution-aware polynomial approximation (DaPa) to better mimic ReLU behavior based on feature distributions.

▶ [Basics of Approximation Theory (Best Approximation-Existence and uniqueness) by Dr Asif Khan](https://www.youtube.com/watch?v=ymec96uZO2Y) — Maths with Asif Khan · 1:27:38 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the AutoReP paper, start by grasping the basics of the ReLU activation function and why approximating it matters for efficient private inference. Then, learn about discrete optimization techniques that underpin AutoReP's gradient-based ReLU replacement strategy, followed by the concept of hysteresis loops which stabilize training. Finally, explore distribution-aware polynomial approximation, the core method AutoReP uses to adapt polynomial replacements to feature distributions, enabling fast and accurate private inference.

### ReLU function approximation *(prerequisite)*
ReLU (Rectified Linear Unit) is a fundamental activation function in deep learning that introduces non-linearity by outputting zero for negative inputs and the input itself for positive values. Understanding how ReLU can be approximated by polynomials helps in reducing computational overhead, especially in privacy-preserving settings where ReLU is costly. This section builds intuition on ReLU behavior and why polynomial approximations can be effective substitutes.

*How the paper uses it:* AutoReP replaces expensive ReLU operations with polynomial approximations to accelerate private inference while maintaining accuracy.

▶ [Neural Networks Pt. 3: ReLU In Action!!!](https://www.youtube.com/watch?v=68BZ5f7P94E) — StatQuest with Josh Starmer · 8:58 · 5y ago

### Gradient-based discrete optimization *(prerequisite)*
Discrete optimization involves selecting the best combination of discrete choices, often under constraints. Gradient-based discrete optimization combines gradient information with discrete decision variables to efficiently find optimal or near-optimal solutions. This concept is key to understanding how AutoReP trains a discrete indicator parameter to decide which ReLUs to replace with polynomials.

*How the paper uses it:* AutoReP formulates ReLU replacement as a fine-grained discrete optimization problem using a trainable indicator updated via gradients.

▶ [Discrete Optimization Lecture 1: Introduction, algorithms, Big O, Shortest Path](https://www.youtube.com/watch?v=GHgMEx2JtQE) — Jonathan Noel · 1:11:06 · Streamed 1y ago

### Hysteresis loop training stability *(prerequisite)*
A hysteresis loop describes a system where the output depends not only on the current input but also on the history of inputs, providing stability against rapid switching. In training discrete parameters, hysteresis helps prevent oscillations and improves convergence by introducing thresholds for switching states. Understanding hysteresis loops clarifies how AutoReP stabilizes the discrete indicator parameter updates during training.

*How the paper uses it:* AutoReP uses a hysteresis loop update function to stabilize the binarized ReLU replacement training process and improve convergence.

▶ [The Hysteresis loop explained](https://www.youtube.com/watch?v=ZyVSMfSgOq0) — The Electric Academy · 5:34 · 7y ago

### Distribution-aware polynomial approximation
Polynomial approximation is the process of representing complex functions with polynomials for easier computation. Distribution-aware polynomial approximation adapts polynomial coefficients based on the statistical distribution of input features, improving approximation accuracy. This method allows AutoReP to better mimic ReLU behavior across varying feature distributions, preserving model expressivity while reducing computational cost.

*How the paper uses it:* AutoReP introduces distribution-aware polynomial approximation (DaPa) to adapt polynomial replacements to feature map distributions for accurate ReLU approximation.

▶ [Weierstrass Polynomial Approximation Theorem](https://www.youtube.com/watch?v=MKVttK1uAXU) — Dr Chris Tisdell · 19:21 · Streamed 11y ago

## Already in your library

- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Foundations of causal inference and its impacts on machine learning webinar](https://www.youtube.com/watch?v=LALfQStONEc) — also for: Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment (Jenna Wiens)
- [Privacy Preserving AI (Andrew Trask) | MIT Deep Learning Series](https://www.youtube.com/watch?v=4zrU54VIK6k) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [Backpropagation, intuitively | Deep Learning Chapter 3](https://www.youtube.com/watch?v=Ilg3gGewQ5U) — also for: Neural Control Variates with Automatic Integration (Gordon Wetzstein)
- [22. Gradient Descent: Downhill to a Minimum](https://www.youtube.com/watch?v=AeRwohPuUHQ) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [4 Principle of Optimality - Dynamic Programming introduction](https://www.youtube.com/watch?v=5dRGRueKU3M) — also for: Protein Local Structure Alignment Under the Discrete Fréchet Distance (Binhai Zhu)
- [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [Algebra Basics: What Are Polynomials? - Math Antics](https://www.youtube.com/watch?v=ffLLmV4mZwU) — also for: Incidence Theorems and Their Applications (Zeev Dvir)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of AutoReP's approach to accelerating private inference by replacing ReLU activations with polynomial approximations. The beginner project focuses on implementing and visualizing the distribution-aware polynomial approximation (DaPa) for ReLU replacement on a small scale. The intermediate project involves reimplementing the core AutoReP method of gradient-based discrete ReLU replacement and hysteresis training on CIFAR-10 with a simple CNN, comparing accuracy and ReLU counts against a baseline. The advanced project extends AutoReP by exploring dynamic polynomial approximation adaptation during inference to address feature distribution shifts, tackling one of the paper's stated future directions.

### Beginner — Distribution-Aware Polynomial Approximation of ReLU
*Effort: a weekend, ~8 hours*

You build a Python notebook that implements the distribution-aware polynomial approximation (DaPa) of the ReLU activation function as described in AutoReP. You visualize how the polynomial coefficients adapt based on simulated feature map distributions and compare the approximation error against a standard fixed polynomial approximation.

**Why it shows you understood the paper:** This project demonstrates your grasp of the key innovation in AutoReP's polynomial approximation technique, showing you understand how feature distributions influence ReLU replacement accuracy.

**Grounded in:** Proposed distribution-aware polynomial approximation (DaPa) to accurately approximate ReLU functions based on feature distribution, preserving model expressivity.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Simulated feature map distributions (e.g., Gaussian with varying mean and variance) to mimic network activations as described in the paper.

**Build it:**

1. Implement the ReLU function and a fixed polynomial approximation baseline.
2. Simulate feature map distributions with different parameters (mean, variance).
3. Implement the distribution-aware polynomial approximation adapting coefficients based on distribution parameters.
4. Plot and compare the approximation curves and errors for fixed vs distribution-aware polynomials.
5. Write a README explaining the method and results.

**Ships as:** A Jupyter Notebook with code, plots, and explanations showing how DaPa adapts polynomial coefficients to feature distributions and improves approximation accuracy over fixed polynomials.

**Stretch goal:** Add a simple feedforward network layer applying the DaPa approximation to activations and measure output differences compared to ReLU.

### Intermediate — ReLU Replacement with Gradient-Based Indicator and Hysteresis Training
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of AutoReP's core method on CIFAR-10 using a small CNN. This includes a trainable discrete indicator parameter per ReLU to decide replacement with a polynomial approximation, updated via a hysteresis loop for stability. You compare model accuracy and ReLU counts against a baseline CNN with standard ReLU.

**Why it shows you understood the paper:** This project shows you can reproduce the main algorithmic contribution of AutoReP, including discrete optimization and hysteresis training, and evaluate its impact on accuracy and efficiency.

**Grounded in:** Introduced a parameterized discrete indicator function co-trained with model weights for fine-grained ReLU replacement at the pixel level; developed a hysteresis loop update function to stabilize training.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** CIFAR-10 dataset, a widely used public image classification benchmark, substituting for the paper's datasets.

**Build it:**

1. Implement a small CNN with standard ReLU activations on CIFAR-10 and train baseline accuracy.
2. Implement polynomial approximation of ReLU (e.g., quadratic) as a replacement function.
3. Add a discrete indicator parameter per ReLU activation to select replacement or not.
4. Implement hysteresis loop update logic to stabilize indicator parameter training.
5. Train the modified network jointly optimizing weights and indicator parameters.
6. Compare accuracy and count of replaced ReLUs against baseline; plot training curves.
7. Document the implementation and results in a README.

**Verified links from the paper:**

- <https://github.com/HarveyP123/AutoReP> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A PyTorch project with training scripts and results showing improved latency proxy (ReLU count reduction) with minimal accuracy loss using AutoReP's discrete indicator and hysteresis training.

**Stretch goal:** Extend to CIFAR-100 or Tiny-ImageNet datasets and compare results.

### Advanced — Dynamic Polynomial Approximation Adaptation for Distribution Shifts
*Effort: 3+ weeks*

You extend AutoReP by implementing a dynamic polynomial approximation mechanism that adapts polynomial coefficients during inference based on observed feature map distribution shifts. This addresses the limitation that fixed distribution assumptions may not hold across layers or datasets. You evaluate this approach on CIFAR-10 or CIFAR-100 with a CNN and compare accuracy and stability against static DaPa.

**Why it shows you understood the paper:** This project tackles a stated future direction of AutoReP, demonstrating your ability to innovate beyond the paper by addressing its limitations and applying adaptive methods to improve private inference efficiency.

**Grounded in:** The polynomial approximation assumes feature distributions which might not perfectly fit all network layers or data types; future direction includes exploring adaptive or learned polynomial approximations that dynamically adjust during inference.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** CIFAR-10 or CIFAR-100 dataset as a substitute for the paper's datasets.

**Build it:**

1. Reimplement or reuse the intermediate project's AutoReP core method with static DaPa.
2. Design and implement a mechanism to estimate feature map distribution statistics during inference.
3. Implement dynamic adjustment of polynomial coefficients based on the estimated distributions.
4. Integrate the dynamic DaPa into the network's ReLU replacement pipeline.
5. Train and evaluate the model on CIFAR-10 or CIFAR-100, comparing accuracy and ReLU replacement stability against static DaPa.
6. Analyze and visualize how polynomial coefficients change across layers and inputs.
7. Write detailed documentation explaining the method, experiments, and results.

**Verified links from the paper:**

- <https://github.com/HarveyP123/AutoReP> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A PyTorch project demonstrating dynamic polynomial approximation adaptation improving robustness to distribution shifts, with evaluation metrics and visualizations.

**Stretch goal:** Apply the method to a transformer or graph neural network architecture to test generalization beyond CNNs.
