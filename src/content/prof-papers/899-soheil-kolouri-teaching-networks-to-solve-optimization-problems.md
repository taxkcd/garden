---
title: "899 · Teaching Networks to Solve Optimization Problems — Soheil Kolouri"
date: 2026-10-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-soheil-kolouri"
source_hash: "0f0f747f1a15642fb45c05057098e958c2e451b2c315498e3af3970f50e3e2f9"
sequence: 899
generator: "outreach-garden: managed"
---

# 899 · Teaching Networks to Solve Optimization Problems

## At a glance

- **Professor:** Soheil Kolouri
- **Institution:** Vanderbilt University
- **Paper:** [Teaching Networks to Solve Optimization Problems](https://arxiv.org/pdf/2202.04104)
- **Authors:** Yuzhe Lu, Ali Abbasi, Meiyi Li, Javad Mohammadi, Soheil Kolouri
- **Year:** 2022

## Paper overview

This paper introduces LOOP, a novel machine learning framework that replaces traditional iterative optimization algorithms with a single feed-forward neural network that directly predicts optimal solutions. LOOP is trained to solve various optimization problems quickly and efficiently, enabling near-real-time optimization in applications like energy management and traffic control.

### Why it matters

**Research problem:** Traditional optimization algorithms rely on iterative solvers that can be computationally expensive and slow, especially in applications requiring near-real-time solutions. Existing learning-to-optimize methods still depend on iterative updates and do not fully eliminate this bottleneck.

**Why it matters:** Many critical systems, such as cyber-physical infrastructures, autonomous vehicles, and power grids, require fast and repeated optimization over similar problem distributions. Improving optimization speed and adaptability can significantly enhance system performance and responsiveness.

**Key contributions:**

- A generic framework (LOOP) to replace iterative optimization algorithms with a single feed-forward parametric function.
- Two training methods for LOOP: with solver-in-the-loop (supervised) and without solver (self-supervised).
- Demonstration of LOOP on diverse optimization problems including linear/nonlinear regression, principal component analysis, optimal transport-based coreset construction, and quadratic programming for supply management.
- Use of permutation-invariant neural network architectures (Deep Sets and Set Transformer) to handle set-structured inputs.
- Empirical evidence showing LOOP achieves near-optimal solutions with significantly reduced computation time compared to classic solvers.

## About the professor

**Soheil Kolouri** — Assistant Professor, Computer Science and Electrical and Computer Engineering, Vanderbilt University.

Research interests: applied mathematics, machine learning, computer vision, computational optimal transport, geometry

### Research links

- [Faculty/profile page](https://engineering.vanderbilt.edu/bio/soheil-kolouri)
- [Professor website](https://skolouri.github.io)
- [Lab website](http://mint-vu.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Convex Optimization
**The paper assumes:** convex optimization theory, constrained optimization problems, iterative optimization algorithms, classical optimization solvers
**Already in this field?** Skip this entirely if you have already studied a rigorous course on convex optimization and understand iterative solvers like gradient descent and interior-point methods.

This background focuses on Convex Optimization, which is essential for understanding the optimization problems and classical solvers that the LOOP framework aims to replace with neural networks. The rigorous course option provides a deep and structured university-level treatment of convex optimization, ideal for thorough comprehension. The fast track offers a shorter, more accessible introduction to the core concepts, suitable for quickly gaining the necessary intuition and foundational knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE364A Convex Optimization I Stephen Boyd I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMJqxxviPa4AmDClvcbHi6h) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1 through 6, about 7.9 hours — covering convex sets, functions, optimization problems, and basic solution methods, which provide the essential background for the paper's problem formulations and classical solvers.

*Why it unblocks this paper:* This is the Stanford EE364A Convex Optimization I course by Stephen Boyd, a leading expert in convex optimization. It covers convex sets, functions, problem formulations, and classical solution methods, directly relevant to understanding the optimization foundations that LOOP builds upon and aims to accelerate.

*If you want all of it:* 23.7 hours across all 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Lecture Collection | Convex Optimization](https://www.youtube.com/playlist?list=PL3940DD956CDF0622) — Stanford · 37 videos · 46.0h across 37 episodes

**Watch only this:** Lectures 1 through 5, about 6.2 hours — these cover the basics of convex sets, functions, and optimization problems, providing a solid quick foundation.

*Why it unblocks this paper:* This Stanford playlist offers a concise and clear introduction to convex optimization concepts, suitable for quickly grasping the key ideas behind convex problem structures and solution techniques relevant to the paper.

*If you want all of it:* 46.0 hours across all 37 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LOOP framework for replacing iterative optimization with neural networks, start by building foundational knowledge on permutation-invariant neural networks, traditional optimization algorithms, self-supervised learning, and continual learning in neural networks. These prerequisites provide the theoretical and methodological background necessary to appreciate LOOP's architecture, training methods, and adaptability. Finally, focus on the authors' own talks presenting the LOOP paper to grasp the novel contributions and experimental results directly from the researchers.

### Set structured neural networks *(prerequisite)*
LOOP leverages permutation-invariant neural network architectures such as Deep Sets and Set Transformer to handle set-structured inputs effectively. Understanding these architectures is crucial to appreciate how LOOP processes optimization problem inputs as sets without losing important structural information.

*How the paper uses it:* LOOP uses permutation-invariant neural network architectures (Deep Sets and Set Transformer) to handle set-structured inputs.

▶ [\[MEM\] Learning Permutation Invariant Representations using Memory Networks | AISC](https://www.youtube.com/watch?v=dBkk4qNJw_8) — Build w Agents - Aggregate Intellect - AI.SCIENCE · Streamed 6y ago

### Optimization algorithms *(prerequisite)*
Traditional iterative optimization algorithms form the baseline that LOOP aims to replace. A solid understanding of their convergence properties, computational costs, and limitations is essential to appreciate the motivation behind LOOP's feed-forward approach.

*How the paper uses it:* Traditional optimization algorithms rely on iterative solvers that can be computationally expensive and slow, motivating LOOP's design.

▶ [Stability and Convergence Trade-Off of Iterative Optimization Algorithms](https://www.youtube.com/watch?v=1rXwocw9Z2g) — Simons Institute for the Theory of Computing · 8y ago

### Self-supervised learning for optimization *(prerequisite)*
LOOP introduces a self-supervised training method that minimizes the objective function directly without relying on solver-generated ground truth. Understanding self-supervised learning principles helps in grasping how LOOP can be trained without expensive solver calls.

*How the paper uses it:* LOOP proposes a self-supervised training approach that learns to optimize without a solver in the loop.

▶ [L7 Self-Supervised Learning (Spring 2024, UC Berkeley) -- Pieter Abbeel & Philipp Wu](https://www.youtube.com/watch?v=s6xh6oKq1C0) — Pieter Abbeel · 2y ago

### Continual learning in neural networks *(prerequisite)*
LOOP demonstrates continual learning capabilities to adapt to changing input distributions and mitigate catastrophic forgetting. Knowledge of continual learning methods is important to understand LOOP's adaptability in dynamic environments.

*How the paper uses it:* LOOP can adapt to changing input distributions via continual learning using memory replay.

▶ [Bayesian continual learning and forgetting in neural networks - Kellian COTTART](https://www.youtube.com/watch?v=MAahAo-vwzo) — IPhT-TV · 1y ago

### LOOP paper talk *(paper-talk search result; attribution unverified)*
The authors' own presentations provide the most direct and detailed insights into the LOOP framework, including its architecture, training methods, experimental results, and future directions. These talks are invaluable for an advanced reader seeking a comprehensive understanding of the paper.

*How the paper uses it:* Directly targets the authors' own presentation of their novel LOOP framework.

▶ [https://www.youtube.com › watch?v=VCkDZVPkfEI](https://www.youtube.com/watch?v=VCkDZVPkfEI) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the LOOP paper, start by learning the basics of optimization algorithms, which are the traditional iterative methods LOOP aims to replace. Next, grasp the concept of set-structured neural networks, as LOOP uses permutation-invariant architectures to handle inputs. Then, explore self-supervised learning methods relevant to training LOOP without solvers. Following that, understand continual learning to see how LOOP adapts to changing data. Finally, dive into the core idea of learning to optimize with neural networks, which is the heart of the LOOP framework.

### Optimization algorithms *(prerequisite)*
Optimization algorithms are methods to find the best solution to a problem by iteratively improving candidate solutions. Understanding these traditional iterative solvers helps appreciate why LOOP’s single-pass neural network approach is innovative and efficient.

*How the paper uses it:* LOOP replaces traditional iterative optimization algorithms with a single feed-forward neural network to speed up solving optimization problems.

▶ [Introduction to Optimization I Optimization Techniques](https://www.youtube.com/watch?v=6TABH77bG0k) — Hari Gobind Pathak · 2y ago

### Set structured neural networks *(prerequisite)*
Set-structured neural networks are designed to handle inputs that are sets, meaning their elements have no fixed order. Permutation-invariant architectures like Deep Sets and Set Transformer ensure the model’s output does not depend on the order of input elements, which is crucial for LOOP’s input handling.

*How the paper uses it:* LOOP uses permutation-invariant neural network architectures such as Deep Sets and Set Transformer to process set-structured inputs effectively.

▶ [The Sensory Neuron as a Transformer: Permutation-Invariant Neural Networks for RL | Paper Explained](https://www.youtube.com/watch?v=0OevSonydgg) — Aleksa Gordić - The AI Epiphany · 5y ago

### Self-supervised learning for optimization *(prerequisite)*
Self-supervised learning trains models without explicit labels by using the data itself to generate training signals. In LOOP, this approach allows training the neural network to minimize the optimization objective directly without relying on solver-generated ground truth.

*How the paper uses it:* LOOP includes a self-supervised training method that minimizes the objective function directly, enabling training without a solver in the loop.

▶ [L7 Self-Supervised Learning (Spring 2024, UC Berkeley) -- Pieter Abbeel & Philipp Wu](https://www.youtube.com/watch?v=s6xh6oKq1C0) — Pieter Abbeel · 2y ago

### Continual learning in neural networks *(prerequisite)*
Continual learning enables neural networks to adapt to new data or tasks over time without forgetting previously learned knowledge. This is important for LOOP to maintain performance when input distributions change in real-world applications.

*How the paper uses it:* LOOP demonstrates continual learning capabilities to adapt to changing input distributions using memory replay to mitigate forgetting.

▶ [Bayesian continual learning and forgetting in neural networks - Kellian COTTART](https://www.youtube.com/watch?v=MAahAo-vwzo) — IPhT-TV · 1y ago

### Learning to optimize with neural networks
This concept covers how neural networks can be trained to directly predict optimal solutions to optimization problems, replacing traditional iterative solvers. Understanding this is key to grasping LOOP’s core innovation of fast, feed-forward optimization.

*How the paper uses it:* LOOP’s core idea is to replace iterative optimization algorithms with a single feed-forward neural network that outputs near-optimal solutions efficiently.

▶ [https://www.youtube.com › watch?v=4TJV3uV0dA0](https://www.youtube.com/watch?v=4TJV3uV0dA0) — YouTube result via DuckDuckGo

## Already in your library

- [2. Optimization Problems](https://www.youtube.com/watch?v=uK5yvoXnkSk) — also for: OptiGuide: An Efficient Domain-Independent Package Recommender System Based on Multi-Objective Optimization and User Decision Guidance (Alexander Brodsky)
- [Lecture 9 - Introduction to Optimization in Neural Network ...](https://www.youtube.com/watch?v=WVFMxpTD09w) — also for: Learning to Fuse Temporal Proximity Networks: A Case Study in Chimpanzee Social Interactions (Yixuan He)
- [Lecture 7 | Training Neural Networks II](https://www.youtube.com/watch?v=_JB0AO7QxSA) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)
- [Lecture 3 | Loss Functions and Optimization](https://www.youtube.com/watch?v=h7iBpEHGVNc) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Stanford CS231N | Spring 2025 | Lecture 12: Self-Supervised ...](https://www.youtube.com/watch?v=4howBU7THbM) — also for: Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings (Tolga Tasdizen)
- [What Is Self-Supervised Learning and Why Care?](https://www.youtube.com/watch?v=iGJ1XSkCyU0) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [Self-Supervised Learning Explained: How AI Teaches Itself ...](https://www.youtube.com/watch?v=8jCvhy4H-wE) — also for: SSL-Cleanse: Trojan Detection and Mitigation in Self-Supervised Learning (Mengxin Zheng)
- [Continual Learning and Catastrophic Forgetting](https://www.youtube.com/watch?v=vjaq03IYgSk) — also for: Measuring Catastrophic Forgetting in Neural Networks (Chris Kanan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the LOOP framework from the paper "Teaching Networks to Solve Optimization Problems." Starting with a simple supervised learning approach to approximate a classic optimization solver, you then implement the core LOOP method on a regression task comparing against a baseline solver, and finally extend LOOP to address continual learning for adapting to changing input distributions, tackling one of the paper's stated future directions.

### Beginner — Supervised LOOP for Linear Regression
*Effort: a weekend, ~8 hours*

You build a simple feed-forward neural network that learns to predict the optimal parameters of a linear regression problem in a single forward pass. Using supervised learning, you generate training data by solving linear regression problems with a classic solver (e.g., ordinary least squares) and train the network to imitate these solutions.

**Why it shows you understood the paper:** This project shows you understand the core idea of replacing iterative optimization with a learned parametric function trained with solver-in-the-loop supervision, as proposed by LOOP.

**Grounded in:** A generic framework (LOOP) to replace iterative optimization algorithms with a single feed-forward parametric function; Two training methods for LOOP: with solver-in-the-loop (supervised).

**Tech stack:** Python 3.11, PyTorch, scikit-learn, Jupyter Notebook

**Data:** Synthetic linear regression datasets generated on-the-fly with random inputs and targets, simulating the paper's approach to regression problems.

**Build it:**

1. Generate synthetic datasets of input features and targets for linear regression.
2. Use scikit-learn's linear regression solver to compute optimal parameters as ground truth.
3. Design a simple feed-forward neural network that takes input features and predicts regression parameters.
4. Train the network supervised on the solver-generated ground truth parameters.
5. Evaluate the network's predicted parameters by computing the regression loss on test data.
6. Document the training process, results, and comparison to the classic solver.

**Ships as:** A GitHub repository with code to generate data, train the supervised LOOP model, evaluate its performance, and a README explaining the approach and results.

**Stretch goal:** Add support for nonlinear regression by extending the network to predict polynomial regression coefficients.

### Intermediate — Implementing LOOP with Set Transformer on Regression
*Effort: 2 weekends, ~20 hours*

You implement the core LOOP framework using a permutation-invariant Set Transformer architecture to solve a regression optimization problem. You train the model both supervised with solver-in-the-loop and self-supervised by minimizing the regression objective directly, then compare performance and runtime against a classic solver baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method, including the use of set-structured neural networks and the two training paradigms, and to empirically validate LOOP's speed and accuracy claims.

**Grounded in:** Demonstration of LOOP on regression tasks; Use of permutation-invariant neural network architectures (Set Transformer); Two training methods for LOOP: with and without solver; LOOP significantly reduces computation time while achieving near-optimal solutions.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook

**Data:** Synthetic regression datasets generated similarly to the paper's experiments, with random input-target pairs for training and evaluation.

**Build it:**

1. Implement a Set Transformer model that accepts set-structured inputs representing regression data.
2. Implement supervised training using a classic solver (e.g., scikit-learn linear regression) to generate ground truth parameters.
3. Implement self-supervised training by directly minimizing the regression loss without solver supervision.
4. Train both models on the synthetic dataset and evaluate their regression accuracy and runtime.
5. Compare the performance gap between supervised and self-supervised training and against the classic solver.
6. Write a detailed README documenting the implementation, experiments, and results.

**Ships as:** A GitHub repository containing the LOOP implementation with Set Transformer, training scripts for both supervised and self-supervised modes, evaluation code, and a comprehensive README.

**Stretch goal:** Experiment with different Set Transformer hyperparameters to reduce the performance gap with the solver.

### Advanced — Continual Learning Extension for LOOP on Domain Shifts
*Effort: 3+ weeks*

You extend the LOOP framework to incorporate continual learning capabilities that allow the model to adapt to changing input distributions without catastrophic forgetting. You implement memory replay as described in the paper and evaluate the model's adaptation on synthetic regression tasks with domain shifts.

**Why it shows you understood the paper:** This project tackles one of the paper's future directions and limitations by implementing continual learning mechanisms, showing deep comprehension of LOOP's adaptability challenges and solutions.

**Grounded in:** Exploration of continual learning capabilities for LOOP to adapt to changing input distributions; memory replay enables LOOP to learn new tasks while mitigating catastrophic forgetting.

**Tech stack:** Python 3.11, PyTorch, NumPy, Jupyter Notebook

**Data:** Synthetic regression datasets with controlled domain shifts introduced between training phases to simulate changing input distributions.

**Build it:**

1. Implement the base LOOP model with Set Transformer as in the intermediate project.
2. Design a continual learning training loop that introduces domain shifts in the input data distribution over time.
3. Implement memory replay by storing and replaying samples from previous domains during training.
4. Train the model sequentially on multiple domains and evaluate performance retention and adaptation.
5. Analyze and document the effects of memory replay on mitigating catastrophic forgetting.
6. Prepare a detailed README describing the continual learning setup, experiments, and findings.

**Ships as:** A GitHub repository with the continual learning enhanced LOOP implementation, training and evaluation scripts for domain-shift experiments, and a thorough README explaining methods and results.

**Stretch goal:** Explore alternative continual learning strategies such as parameter regularization or dynamic architectures to improve adaptation.

_The authors did not release code or datasets for LOOP, so all projects rely on reimplementing methods from the paper and using synthetic data to simulate the optimization problems._
