---
title: "973 · Dynamic Tensor Decomposition via Neural Diffusion-Reaction Processes — Shandian Zhe"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shandian-zhe"
source_hash: "3407e2ffe1571f852c2c9a84466a1cab942482316e256327def5204297480b73"
sequence: 973
generator: "outreach-garden: managed"
---

# 973 · Dynamic Tensor Decomposition via Neural Diffusion-Reaction Processes

## At a glance

- **Professor:** Shandian Zhe
- **Institution:** University of Utah
- **Paper:** [Dynamic Tensor Decomposition via Neural Diffusion-Reaction Processes](https://arxiv.org/pdf/2310.19666)
- **Authors:** Zheng Wang, Shikai Fang, Shibo Li, Shandian Zhe
- **Year:** 2023

## Paper overview

This paper introduces DEMOTE, a novel method for analyzing multiway (tensor) data that changes over time. It models dynamic embeddings for entities in tensor modes using a neural diffusion-reaction process formulated as an ordinary differential equation (ODE). This approach captures both shared and individual temporal patterns among entities, improving prediction accuracy on sparse, time-stamped data compared to existing methods.

### Why it matters

**Research problem:** Existing tensor decomposition methods often ignore rich temporal information and structural correlations in sparse, time-stamped multiway data. They typically estimate static embeddings that fail to capture evolving properties of entities over time, limiting predictive performance.

**Why it matters:** Multiway data with temporal dynamics is common in real-world applications such as online shopping, weather, and traffic analysis. Capturing temporal evolution and structural correlations in such data is crucial for accurate prediction, recommendation, and understanding entity behaviors.

**Key contributions:**

- Proposed a neural diffusion-reaction process in an ODE framework to learn dynamic embeddings for tensor decomposition.
- Introduced a multi-partite graph to encode structural correlations among entities and incorporated it into the diffusion process.
- Combined diffusion and reaction processes to capture both commonalities and individual differences in embedding evolution.
- Developed a scalable stochastic mini-batch learning algorithm with stratified sampling for efficient training.
- Demonstrated superior predictive accuracy and ability to recover underlying temporal structures on synthetic and real-world datasets.

## About the professor

**Shandian Zhe** — Associate Professor, School of Computing, University of Utah.

Research interests: Mainly lie in probabilistic learning, including probabilistic graphical models, Bayesian deep neural networks, operator learning, generative modeling, physics informed neural networks, Bayesian emulation, approximate inference, and kernel methods.

### Research links

- [Faculty/profile page](https://www.cs.utah.edu/~zhe)
- [Professor website](https://users.cs.utah.edu/~zhe)
- [Resolved homepage](https://users.cs.utah.edu/~zhe/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Neural Ordinary Differential Equations
**The paper assumes:** neural ordinary differential equations, continuous-time dynamical systems, neural network-based ODE solvers
**Already in this field?** Skip this entirely if you already understand neural ODEs and their application in modeling continuous-time dynamics with neural networks.

To understand the core method of the paper, which models dynamic embeddings as trajectories evolving over time using neural diffusion-reaction processes formulated as neural ordinary differential equations (neural ODEs), it is essential to grasp the fundamentals and applications of neural ODEs. The rigorous course option offers a deep, structured university-level lecture series on deep learning including neural ODEs, while the fast track provides a concise, visual explainer playlist focused specifically on neural ODEs and related neural differential equations. Choose the rigorous course for comprehensive foundational knowledge and the fast track for a quicker, intuition-driven introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 4 (Neural Networks and Backpropagation), 7 (Recurrent Neural Networks), and 8 (Attention and Transformers), totaling about 3.5 hours — these cover the neural network basics and sequence modeling foundations necessary before approaching neural ODEs.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a high-authority university course that covers neural networks and advanced deep learning topics, including recurrent neural networks and continuous-time models relevant to neural ODEs. This course provides a solid theoretical and practical foundation to understand neural ODE frameworks used in the paper.

*If you want all of it:* About 21.2 hours across all 18 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Differential Equations](https://www.youtube.com/playlist?list=PLoht1IYdazw_mxs6Evq3NpCdGsJN0yw4w) — Vishal Jadhav · 29 videos · 16.4h across 29 episodes

**Watch only this:** Episodes 2 (Neural Ordinary Differential Equations), 9 (Neural Ordinary Differential Equations), and 10 (ODE | Neural Ordinary Differential Equations - Best Paper Awards NeurIPS), totaling about 1.5 hours — these provide a concise yet thorough introduction to neural ODEs.

*Why it unblocks this paper:* The 'Neural Differential Equations' playlist by Vishal Jadhav is a focused, well-structured series dedicated specifically to neural ODEs and related neural differential equation models, directly matching the paper's core methodology. It offers clear explanations and covers both theory and applications in a manageable length.

*If you want all of it:* About 16.4 hours across all 29 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the DEMOTE paper on dynamic tensor decomposition via neural diffusion-reaction processes, start with foundational knowledge on tensor decomposition methods to grasp the basics of multiway data analysis. Next, study neural ordinary differential equations and graph diffusion processes to comprehend the continuous-time embedding dynamics and information propagation mechanisms central to the method. Then, review stochastic mini-batch optimization techniques to appreciate the scalable training approach used. Finally, focus on the core concept of the paper, the neural diffusion-reaction ODE framework, and the authors' own talk or closest available advanced presentations to gain direct insights into their novel contributions.

### Tensor decomposition methods *(prerequisite)*
Tensor decomposition methods provide the fundamental mathematical framework for analyzing multiway data structures, which is essential to understand before diving into dynamic extensions like DEMOTE. These methods reveal latent structures and correlations in multi-aspect data and form the basis for the paper's approach to tensor factorization.

*How the paper uses it:* DEMOTE builds upon tensor decomposition by introducing dynamic embeddings evolving over time.

▶ [Tensor Decompositions for Learning Hidden Variable Models](https://www.youtube.com/watch?v=ovPiVkDLiUs) — Microsoft Research · 1:08:06 · 10y ago

### Neural ordinary differential equations *(prerequisite)*
Neural ODEs are key to modeling continuous-time dynamics in embeddings, enabling the representation of evolving entity states as solutions to differential equations parameterized by neural networks. Understanding this technique is crucial to grasp how DEMOTE models embedding trajectories.

*How the paper uses it:* DEMOTE formulates embedding trajectories as solutions to a neural ODE combining diffusion and reaction processes.

▶ [Neural ordinary differential equations](https://www.youtube.com/watch?v=qOSL9mtZIT4) — Olof Mogren · 36:38 · 7y ago

### Graph diffusion processes *(prerequisite)*
Graph diffusion processes model how information propagates among correlated entities in graphs, capturing structural correlations that DEMOTE leverages to co-evolve embeddings. This background helps understand the diffusion component of the neural diffusion-reaction process.

*How the paper uses it:* DEMOTE constructs a multi-partite graph encoding correlations and uses diffusion to co-evolve embeddings of related entities.

▶ [Graph Neural Networks and Diffusion PDEs | Benjamin Chamberlain & James Rowbottom](https://www.youtube.com/watch?v=9SMbH18nMUg) — Valence Labs · 1:16:11 · 5y ago

### Stochastic mini-batch optimization *(prerequisite)*
Stochastic mini-batch optimization techniques enable scalable training of complex models on large datasets by balancing computational efficiency and convergence stability. This knowledge is important to appreciate DEMOTE's training algorithm and its stratified sampling strategy.

*How the paper uses it:* DEMOTE uses stratified mini-batch sampling to efficiently train the neural diffusion-reaction model.

▶ [Gradient Descent in Neural Networks | Batch vs Stochastics vs Mini Batch Gradient Descent](https://www.youtube.com/watch?v=7z6yXpYk7sw) — CampusX · 37:53 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the DEMOTE paper, start by learning the fundamentals of tensor decomposition, which is essential for grasping how multiway data is analyzed. Next, build intuition on stochastic mini-batch optimization to appreciate how the model is efficiently trained. Then, explore graph diffusion processes to understand how correlations among entities are modeled. After that, study neural ordinary differential equations (Neural ODEs) to grasp the continuous-time modeling of embeddings. Finally, focus on the neural diffusion-reaction ODE framework, the core mathematical model introduced in the paper to capture dynamic embeddings over time.

### Tensor decomposition methods *(prerequisite)*
Tensor decomposition breaks down complex multi-dimensional data into simpler components, revealing hidden patterns and relationships. This foundational knowledge helps you understand how multiway data structures are analyzed and why dynamic embeddings are needed.

*How the paper uses it:* DEMOTE builds on tensor decomposition by modeling dynamic embeddings that evolve over time rather than static factors.

▶ [Tensor Decomposition (Tucker and HOSVD) with MATLAB example - Part 1](https://www.youtube.com/watch?v=79AaVLAFaK4) — Higher-Order Knowledge · 10:04 · 6y ago

### Stochastic mini-batch optimization *(prerequisite)*
Stochastic mini-batch optimization is a scalable training technique that updates model parameters using small, randomly selected subsets of data. This approach balances computational efficiency and convergence stability, enabling training on large or sparse datasets.

*How the paper uses it:* DEMOTE uses stratified mini-batch sampling to efficiently train its neural diffusion-reaction model on sparse tensor data.

▶ [Batch vs Mini-Batch vs Stochastic Gradient Descent Explained | Deep Learning 9](https://www.youtube.com/watch?v=x_0sDJGusng) — ByteQuest · 4:57 · 11mo ago

### Graph diffusion processes *(prerequisite)*
Graph diffusion models how information or influence spreads among connected entities in a network, capturing correlations and shared dynamics. Understanding diffusion on graphs helps explain how DEMOTE models co-evolving embeddings of correlated entities.

*How the paper uses it:* DEMOTE constructs a multi-partite graph encoding entity correlations and uses a diffusion process to co-evolve their embeddings over time.

▶ [Graph Neural Networks and Diffusion PDEs | Benjamin Chamberlain & James Rowbottom](https://www.youtube.com/watch?v=9SMbH18nMUg) — Valence Labs · 1:16:11 · 5y ago

### Neural ordinary differential equations *(prerequisite)*
Neural ODEs model continuous-time dynamics by parameterizing the derivative of a system's state with a neural network, allowing flexible modeling of time-evolving data. This framework generalizes discrete neural networks to continuous-depth models.

*How the paper uses it:* DEMOTE formulates embedding trajectories as solutions to a neural ODE combining diffusion and reaction processes.

▶ [Neural ODEs (NODEs) \[Physics Informed Machine Learning\]](https://www.youtube.com/watch?v=nJphsM4obOk) — Steve Brunton · 24:37 · 2y ago

## Already in your library

- [Tensor Decompositions for Estimating Latent Variable Models](https://www.youtube.com/watch?v=lk2XV03GldE) — also for: Boolean Tensor Decomposition for Conjunctive Queries with Negation (Hung Q. Ngo)
- [Theo Rudkiewicz - Tensor decomposition in frugal neural networks](https://www.youtube.com/watch?v=fv_HwdY3q4o) — also for: CTFacTomo: Reconstructing 3D spatial structures of RNA tomography transcriptomes by collapsed tensor factorization (Rui Kuang)
- [Neural Ordinary Differential Equations](https://www.youtube.com/watch?v=jltgNGt8Lpg) — also for: Mixed Precision Training of Neural ODEs (Lars Ruthotto)
- [C5W3L07 Attention Model Intuition](https://www.youtube.com/watch?v=SysgYptB198) — also for: Leveraging large language models to predict antibiotic resistance in Mycobacterium tuberculosis (Christina Boucher)
- [Backpropagation, intuitively | Deep Learning Chapter 3](https://www.youtube.com/watch?v=Ilg3gGewQ5U) — also for: Neural Control Variates with Automatic Integration (Gordon Wetzstein)
- [Tensor Decomposition I](https://www.youtube.com/watch?v=F-eORHovOe0) — also for: Boolean Tensor Decomposition for Conjunctive Queries with Negation (Hung Q. Ngo)
- [David Duvenaud: Neural Ordinary Equations](https://www.youtube.com/watch?v=sAvtPr1IGB0) — also for: Mixed Precision Training of Neural ODEs (Lars Ruthotto)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [25. Stochastic Gradient Descent](https://www.youtube.com/watch?v=k3AiUhwHQ28) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Stochastic Gradient Descent, Clearly Explained!!!](https://www.youtube.com/watch?v=vMh0zPT0tLI) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Tutorial 12- Stochastic Gradient Descent vs Gradient Descent](https://www.youtube.com/watch?v=FpDsDn-fBKA) — also for: Accelerated Distributed Riemannian Optimization Algorithms with Random Shuffling (Heng Huang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to engage with the DEMOTE method from the paper. The beginner project helps you understand the core idea of modeling dynamic embeddings with a neural diffusion-reaction ODE on a small synthetic dataset. The intermediate project guides you through reimplementing the core DEMOTE approach on a real-world dataset, comparing it against a simple baseline, and evaluating prediction accuracy. The advanced project challenges you to address the paper's scalability limitation by implementing graph partitioning to enable parallel diffusion processes, extending DEMOTE's applicability to larger datasets.

### Beginner — Neural Diffusion-Reaction ODE on Synthetic Tensor Data
*Effort: a weekend, ~8 hours*

You build a minimal Python implementation of a neural diffusion-reaction ODE system to model dynamic embeddings for a small synthetic 3-mode tensor dataset. You simulate a small multi-partite graph encoding correlations among entities and implement the diffusion and reaction components as simple neural networks. You visualize embedding trajectories over time to reproduce a figure similar to the paper's synthetic embedding evolution.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core modeling approach—how dynamic embeddings evolve via coupled diffusion and reaction processes formulated as neural ODEs—and how structural correlations among entities influence embedding trajectories.

**Grounded in:** Demonstrates the paper's key contribution: 'Proposed a neural diffusion-reaction process in an ODE framework to learn dynamic embeddings for tensor decomposition.' and the result 'DEMOTE accurately recovered ground-truth embedding trajectories and cluster structures in simulation.'

**Tech stack:** Python 3.11, PyTorch, torchdiffeq

**Data:** Synthetic tensor data generated in code, simulating a small 3-mode tensor with time-stamped entries and a corresponding multi-partite graph of entity correlations.

**Build it:**

1. Generate a small synthetic 3-mode tensor dataset with time-stamped entries and known underlying embedding trajectories.
2. Construct a multi-partite graph encoding correlations between entities based on synthetic tensor entries.
3. Implement neural networks for diffusion and reaction processes with simple architectures (e.g., one hidden layer).
4. Use the torchdiffeq library to solve the neural ODE system modeling embedding trajectories over time.
5. Visualize the learned embedding trajectories and compare them qualitatively to ground truth.

**Verified links from the paper:**

- <https://github.com/rtqichen/torchdiffeq> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to generate synthetic data, implement and train the neural diffusion-reaction ODE model, and Jupyter notebooks showing embedding trajectory visualizations.

**Stretch goal:** Add stratified mini-batch sampling to speed up training on the synthetic dataset.

### Intermediate — Reimplement DEMOTE on California Weather Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core DEMOTE method from the paper to learn dynamic embeddings on the California weather dataset (temperature data over time across locations). You build the multi-partite graph from observed tensor entries, implement the neural diffusion-reaction ODE embedding model, and train it with stratified mini-batch optimization. You compare prediction accuracy (nRMSE) against a simple baseline such as static CP decomposition.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's core method and results on a real-world dataset, demonstrating understanding of the multi-partite graph construction, neural ODE embedding dynamics, and training strategies that yield superior predictive performance.

**Grounded in:** Reproduces the key result: 'On three real-world datasets (California weather, traffic, and server room temperature), DEMOTE consistently achieved the lowest normalized root-mean-square error (nRMSE) compared to 11 competing temporal tensor decomposition methods.' and uses the contribution 'Developed a scalable stochastic mini-batch learning algorithm with stratified sampling for efficient training.'

**Tech stack:** Python 3.11, PyTorch, torchdiffeq, NumPy, Matplotlib

**Data:** California weather dataset with temporal temperature records across locations, publicly available at https://zenodo.org/record/3610078

**Build it:**

1. Download and preprocess the California weather dataset to form a time-stamped tensor and extract observed entries.
2. Construct the multi-partite graph encoding correlations among tensor entities based on observed entries.
3. Implement the neural diffusion-reaction ODE model for dynamic embeddings following the paper's architecture.
4. Train the model using stratified mini-batch sampling to balance computational cost.
5. Implement a static CP decomposition baseline for comparison.
6. Evaluate and compare prediction accuracy using normalized root-mean-square error (nRMSE).

**Verified links from the paper:**

- <https://github.com/rtqichen/torchdiffeq> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://zenodo.org/record/3610078> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to preprocess data, implement and train DEMOTE and baseline models, and a report notebook comparing prediction metrics and visualizing embedding trajectories.

**Stretch goal:** Add ablation experiments to separately disable diffusion or reaction components and analyze performance impact.

### Advanced — Scaling DEMOTE via Graph Partitioning for Parallel Diffusion
*Effort: 3+ weeks*

You extend the DEMOTE method by implementing a graph partitioning algorithm to split the multi-partite graph into smaller subgraphs. You modify the diffusion process to run in parallel on these subgraphs, addressing the paper's scalability limitation. You evaluate the approach on a larger synthetic or real-world tensor dataset, measuring training speedup and prediction accuracy.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, demonstrating deep comprehension of DEMOTE's diffusion mechanism and the challenges of scaling to large graphs. It shows initiative in advancing the method beyond the original work.

**Grounded in:** Addresses the limitation: 'Current method is limited to relatively small numbers of entities due to the need to integrate the entire multi-partite graph in the diffusion process.' and future direction: 'Develop graph partitioning algorithms to split the multi-partite graph into smaller subgraphs for parallel diffusion processes.'

**Tech stack:** Python 3.11, PyTorch, torchdiffeq, NetworkX, NumPy, Multiprocessing or PyTorch distributed

**Data:** A larger synthetic tensor dataset generated in code or a publicly available temporal tensor dataset with sufficient size to demonstrate scalability improvements.

**Build it:**

1. Implement or adapt a graph partitioning algorithm (e.g., METIS or spectral clustering) to split the multi-partite graph into subgraphs.
2. Modify the diffusion component of DEMOTE to run independently on each subgraph in parallel, synchronizing embeddings as needed.
3. Integrate parallel training with stratified mini-batch sampling across subgraphs.
4. Generate or select a larger temporal tensor dataset to test scalability.
5. Measure training speedup compared to the original single-graph diffusion process.
6. Evaluate prediction accuracy to ensure performance is not degraded by partitioning.

**Verified links from the paper:**

- <https://github.com/rtqichen/torchdiffeq> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing graph partitioning and parallel diffusion, training scripts on larger data, and a detailed report on scalability and accuracy results.

**Stretch goal:** Explore asynchronous diffusion updates or hierarchical graph partitioning to further improve scalability.
