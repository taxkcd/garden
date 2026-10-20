---
title: "837 · Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing — Anish Arora"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-anish-arora"
source_hash: "e1f2c9a0514d7fe82ad5da5bdd9a8bcf5dbb4b7a8229bce2a1044efc000549dc"
sequence: 837
generator: "outreach-garden: managed"
---

# 837 · Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing

## At a glance

- **Professor:** Anish Arora
- **Institution:** Ohio State University
- **Paper:** [Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing](https://arxiv.org/pdf/2509.06640)
- **Authors:** Yung-Fu Chen, Sen Lin, Anish Arora
- **Year:** 2025

## Paper overview

This paper presents a machine learning approach to efficiently route packets in networks by learning local routing policies from very few samples of a single network graph. The learned policies generalize well across a broad class of random geometric graphs, enabling near-shortest path routing with low computational complexity and quick adaptation to network changes. The approach leverages domain knowledge about network geometry and routing to guide feature selection and policy design, resulting in a new routing method called Greedy Tensile routing that outperforms traditional greedy forwarding.

### Why it matters

**Research problem:** How to design a sample-efficient, scalable, and generalizable machine learning algorithm for local routing policies that solve the all-pairs near-shortest path (APNSP) problem over uniform random graphs in Euclidean metric spaces.

**Why it matters:** Routing in large, dynamic networks is challenging due to the complexity and overhead of using global network states. Existing machine learning routing algorithms often require extensive training data, have high run-time overhead, or are limited to small or specific graph types. Efficient, generalizable local routing policies can improve network performance, scalability, and adaptability, especially in wireless and sensor networks.

**Key contributions:**

- Demonstration that few-shot learning from a single graph suffices for generalizable APNSP routing.
- Development of domain theory (Pointwise Monotonicity and RankPres) ensuring learnability and generalizability of routing policies.
- Design of input features (distance-to-destination and node stretch) guided by domain knowledge to improve training efficiency and accuracy.
- Discovery that learning with only distance-to-destination recovers the known Greedy Forwarding policy.
- Introduction of a new routing policy, Greedy Tensile routing, that outperforms Greedy Forwarding by using both distance and node stretch features.

## About the professor

**Anish Arora** — Distinguished Professor of Engineering, Computer Science and Engineering, Ohio State University.

### Research links

- [Faculty/profile page](https://tdai.osu.edu/people/arora.9)
- [Identity evidence](http://web.cse.ohio-state.edu/~anish)
- [Professor website](https://cse.osu.edu/people/arora.9)
- [Resolved homepage](https://web.cse.ohio-state.edu/~arora.9/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Markov decision processes
**The paper assumes:** Markov decision processes, reinforcement learning fundamentals, policy learning in stochastic environments
**Already in this field?** Skip this entirely if you already understand Markov decision processes and basic reinforcement learning concepts.

This background covers Markov Decision Processes (MDPs), which are central to understanding the paper's formulation of the routing problem and the learning algorithms used. The rigorous course option provides a detailed, university-level lecture series that thoroughly explains MDP concepts, while the fast track offers a concise, visual introduction suitable for quickly grasping the essentials before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS486/686 Lecture 18 - Markov Decision Process Part 1](https://www.youtube.com/playlist?list=PLdBx38JxhMNvMw_C3KbeUOI_hCNPyVcyc) — Alice Gao · 9 videos · 1.3h across 9 episodes

**Watch only this:** Episodes 1-5: 'L18: Introducing Markov Decision Process' through 'L18: Policy of a Markov Decision Process', about 40 minutes total — covers MDP basics, policy concepts, and problem framing essential for understanding the paper's methodology.

*Why it unblocks this paper:* This is a university lecture series by Alice Gao that systematically introduces MDPs, including policy definitions and solving for optimal policies, directly relevant to the paper's use of MDPs for routing policy learning.

*If you want all of it:* All 9 episodes, about 1.3 hours total — for a comprehensive understanding including optimal policies and solution methods.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Markov Decision Process](https://www.youtube.com/playlist?list=PLKQYHgEtgnEAWq86qLOqv7RaLEQN8fIty) — Sangeet Moy Das · 6 videos · 0.4h across 6 episodes

**Watch only this:** Episodes 1-4: 'Markov Decision Processes - Georgia Tech - Machine Learning' through 'Markov Decision Processes Four - Georgia Tech - Machine Learning', about 12 minutes total — covers the essentials of MDPs and policy basics.

*Why it unblocks this paper:* This short series from Georgia Tech provides clear, concise explanations of MDP fundamentals in about 3 minutes per episode, ideal for quickly grasping the core concepts needed to follow the paper's approach.

*If you want all of it:* All 6 episodes, about 14 minutes total — includes problem examples and deeper insights.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing," start by grounding yourself in the foundational concepts of Markov Decision Processes (MDPs) and random geometric graphs, which underpin the problem formulation and network models. Next, explore local routing policies and feature-guided machine learning to grasp the domain knowledge and learning techniques used. Finally, focus on the paper's core contribution, the Greedy Tensile routing policy, to appreciate the novel routing approach developed by the authors.

### Markov decision process routing *(prerequisite)*
Understanding Markov Decision Processes is crucial as the paper models the routing problem as a sequential decision-making process under uncertainty. The selected lecture by Andrew Ng from Stanford Online offers a comprehensive and rigorous introduction to MDPs and value/policy iteration, suitable for advanced learners.

*How the paper uses it:* The paper formulates the APNSP routing problem as an MDP to enable learning local routing policies.

▶ [Lecture 17 - MDPs & Value/Policy Iteration | Stanford CS229: Machine Learning Andrew Ng (Autumn2018)](https://www.youtube.com/watch?v=d5gaWTo6kDM) — Stanford Online · 1:19:14 · 6y ago

### Random geometric graphs *(prerequisite)*
Random geometric graphs form the fundamental network model studied in the paper for routing generalization. The seminar by Gal Kronenberg at the Institute for Advanced Study provides a deep, research-level exploration of random graph universality, which is relevant for understanding the theoretical underpinnings of the graph classes considered.

*How the paper uses it:* The paper's theoretical guarantees and empirical validation focus on uniform random geometric graphs in Euclidean and hyperbolic spaces.

▶ [2-universality of random graphs - Gal Kronenberg](https://www.youtube.com/watch?v=bIxRltiZCys) — Institute for Advanced Study · 1:08:35 · 7y ago

### Local routing policies *(prerequisite)*
Local routing policies are central to the paper's approach, which relies on routing decisions based solely on local node and neighbor information. The lecture series on Computer Networks by Prof. S. Ghosh from IIT Kharagpur offers a detailed and academic-level treatment of routing concepts, suitable for understanding the context of local routing.

*How the paper uses it:* The learned Greedy Tensile routing policy uses only local node and neighbor states for routing decisions.

▶ [Lecture - 26 Introduction to Routing](https://www.youtube.com/watch?v=AmlOSGYkKXc) — nptelhrd · 59:47 · 18y ago

### Feature-guided machine learning *(prerequisite)*
Feature-guided machine learning is key to the paper's sample-efficient learning approach, leveraging domain knowledge to select input features that improve training efficiency and generalization. The lecture by Sudeshna Sarkar on Feature Selection provides a rigorous and comprehensive overview of feature selection methods in machine learning, appropriate for advanced readers.

*How the paper uses it:* The paper designs input features (distance-to-destination and node stretch) guided by domain knowledge to improve learning.

▶ [Feature Selection](https://www.youtube.com/watch?v=KTzXVnRlnw4) — Machine Learning- Sudeshna Sarkar · 26:02 · 10y ago

### Greedy Tensile routing
Greedy Tensile routing is the paper's novel routing policy that combines distance and node stretch features to outperform traditional greedy forwarding. While no direct author talk is available, foundational lectures on greedy algorithms from MIT OpenCourseWare provide rigorous insight into greedy methods, which underpin the routing policy's design.

*How the paper uses it:* The paper introduces Greedy Tensile routing, a new policy that outperforms Greedy Forwarding by using both distance and node stretch features.

▶ [R6. Greedy Algorithms](https://www.youtube.com/watch?v=-QcPo_DWJk4) — MIT OpenCourseWare · 22:24 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of random geometric graphs as they form the network model underlying the paper's routing problem. Next, learn about Markov decision processes (MDPs) to grasp how routing is modeled as sequential decision making under uncertainty. Then, study local routing policies to appreciate how routing decisions can be made using only local node information. After that, explore feature-guided machine learning to see how domain knowledge improves learning efficiency and generalization. Finally, conclude with the core concept of Greedy Tensile routing, the novel routing policy introduced in the paper that combines distance and node stretch features to outperform traditional greedy forwarding.

### Random geometric graphs *(prerequisite)*
Random geometric graphs are a type of graph where nodes are placed randomly in a geometric space and edges connect nodes that are close to each other. Understanding this model helps visualize the network topologies the paper studies for routing generalization.

*How the paper uses it:* The paper studies routing policies that generalize across uniform random geometric graphs in Euclidean and hyperbolic spaces.

▶ [The evolution of the random geometric graph](https://www.youtube.com/watch?v=NUisb1-INIE) — EPFLNooC · 4:30 · 14y ago

### Markov decision process routing *(prerequisite)*
Markov decision processes (MDPs) model decision making where outcomes are partly random and partly under the control of a decision maker. Learning MDPs is essential to understand how the paper formulates routing as a sequential decision problem.

*How the paper uses it:* The paper models the all-pairs near-shortest path routing problem as an MDP to train routing policies.

▶ [Markov Decision Processes - Computerphile](https://www.youtube.com/watch?v=2iF9PRriA7w) — Computerphile · 17:42 · 3y ago

### Local routing policies *(prerequisite)*
Local routing policies make forwarding decisions based only on information available at the current node and its neighbors, without global network knowledge. This concept is key to the paper's scalable and self-stabilizing routing approach.

*How the paper uses it:* The learned Greedy Tensile routing policy uses only local node and neighbor states for routing decisions.

▶ [How Routing Works: The Basics, Protocols, and Real-World Examples for Beginners](https://www.youtube.com/watch?v=kyMoEgdMbH8) — IT k Funde · 12:46 · 3y ago

### Feature-guided machine learning *(prerequisite)*
Feature-guided machine learning uses domain knowledge to select or engineer input features that improve learning efficiency and generalization. This approach is crucial in the paper to learn routing policies from very few samples.

*How the paper uses it:* The paper designs input features like distance-to-destination and node stretch guided by domain knowledge to improve training.

▶ [Feature Selection](https://www.youtube.com/watch?v=KTzXVnRlnw4) — Machine Learning- Sudeshna Sarkar · 26:02 · 10y ago

### Greedy Tensile routing
Greedy Tensile routing is a novel routing policy that combines distance and node stretch features to outperform traditional greedy forwarding. Understanding greedy algorithms and their intuition helps grasp this new method.

*How the paper uses it:* Greedy Tensile routing is the paper's new routing policy that achieves better accuracy and generalization than Greedy Forwarding.

▶ [3. Greedy Method - Introduction](https://www.youtube.com/watch?v=ARvQcqJ_-NY) — Abdul Bari · 12:02 · 8y ago

## Already in your library

- [Markov Decision Processes 1 - Value Iteration | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=9g32v7bK3Co) — also for: Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability (David Starobinski)
- [RL Course by David Silver - Lecture 2: Markov Decision Process](https://www.youtube.com/watch?v=lfHX2hHRMVQ) — also for: The Gittins Index: A Design Principle for Decision-Making Under Uncertainty (Ziv Scully)
- [Markov Decision Processes Explained | The Foundation of ...](https://www.youtube.com/watch?v=ljrjEh13Vyg) — also for: The Gittins Index: A Design Principle for Decision-Making Under Uncertainty (Ziv Scully)
- [Markov Decision Processes Explained in 12 Minutes](https://www.youtube.com/watch?v=2sVDNV3l-vo) — also for: Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver (Mingyan Liu)
- [Pim van der Hoorn - Convergence of Ollivier-Ricci curvature in ...](https://www.youtube.com/watch?v=Rgxc1jxOhJ8) — also for: Reconstruction of random geometric graphs: Breaking the Ω (r) distortion barrier (Varsha Dani)
- [The Unreasonable Effectiveness of Spectral Graph Theory: A Confluence of Algorithms, Geometry & ...](https://www.youtube.com/watch?v=8XJes6XFjxM) — also for: Algebraic Vertex Ordering of a Sparse Graph for Adjacency Access Locality and Graph Compression (Xiaobai Sun)
- [Feature Selection Techniques Explained with Examples in Hindi ll Machine Learning Course](https://www.youtube.com/watch?v=vZDDmULsCUU) — also for: The Association Between Social Determinants of Health and Population Health Outcomes: Ecological Analysis (Yan Li)
- [What is Feature Engineering | Day 23 | 100 Days of Machine Learning](https://www.youtube.com/watch?v=sluoVhT0ehg) — also for: A Fraud-Detection-Inspired Framework for LLM Agents Security (Yingcheng Sun)
- [L-4.10: Dijkstra's Algorithm - Single Source Shortest Path - Greedy Method](https://www.youtube.com/watch?v=Gd92jSu_cZk) — also for: Resource-Aware Intrusion Detection in Infrastructure Networks: A Game-Theoretic Approach (Guoliang Xue)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing." Starting with a beginner-level implementation of Greedy Forwarding on random geometric graphs, you then reimplement the core Greedy Tensile routing method with supervised learning and compare it to the baseline. Finally, you extend the approach to address a stated limitation by experimenting with noisy or incomplete coordinate information, exploring robustness and adaptation strategies.

### Beginner — Greedy Forwarding on Random Geometric Graphs
*Effort: a weekend, ~8 hours*

You build a simple local routing simulator on uniform random geometric graphs in 2D Euclidean space that implements the classic Greedy Forwarding policy using only distance-to-destination as the routing feature. You visualize routing paths and measure basic metrics like path stretch compared to shortest paths.

**Why it shows you understood the paper:** This project shows you understand the baseline routing policy that the paper recovers by learning with only distance-to-destination features, and you grasp the graph model and routing problem setup.

**Grounded in:** Discovery that learning with only distance-to-destination recovers the known Greedy Forwarding policy.

**Tech stack:** Python 3.11, NetworkX, Matplotlib, NumPy

**Data:** Simulated uniform random geometric graphs in 2D Euclidean space generated on the fly.

**Build it:**

1. Generate uniform random geometric graphs with nodes placed uniformly at random in a unit square and edges between nodes within a fixed radius.
2. Implement shortest path computation using NetworkX for baseline comparison.
3. Implement Greedy Forwarding routing: at each node, forward to the neighbor closest to the destination.
4. Simulate routing for multiple random source-destination pairs and record path lengths and stretch ratios.
5. Visualize sample routing paths and plot stretch statistics.

**Ships as:** A Python repository with scripts to generate graphs, run Greedy Forwarding routing simulations, compute metrics, and visualize results, documented in a README.

**Stretch goal:** Add dead-end detection and simple recovery mechanisms like backtracking to handle routing failures.

### Intermediate — Supervised Learning of Greedy Tensile Routing Policy
*Effort: 2-3 weekends, ~20 hours*

You reimplement the core supervised learning method from the paper to train a deep neural network local routing policy using both distance-to-destination and node stretch features on a single seed uniform random geometric graph. You compare the learned Greedy Tensile routing policy's accuracy and routing performance against the Greedy Forwarding baseline.

**Why it shows you understood the paper:** This project demonstrates you can implement the paper's main contribution: the feature-guided supervised learning approach for near-shortest path routing, and you can reproduce key metrics like APNSP prediction accuracy improvements.

**Grounded in:** Development of input features (distance-to-destination and node stretch) guided by domain knowledge to improve training efficiency and accuracy; Supervised Greedy Tensile routing improves APNSP prediction accuracy by up to 12.22% over Greedy Forwarding.

**Tech stack:** Python 3.11, PyTorch, NetworkX, NumPy, Matplotlib

**Data:** Simulated uniform random geometric graphs in 2D Euclidean space generated on the fly; training samples generated from routing states on a single seed graph.

**Build it:**

1. Generate a single seed uniform random geometric graph and compute shortest paths for training data.
2. Extract local features for nodes: distance-to-destination and node stretch metrics as described in the paper.
3. Implement supervised training of a DNN policy to predict optimal next-hop actions using the extracted features and optimal Q-values.
4. Evaluate the learned policy on multiple test graphs of varying sizes and densities, measuring APNSP prediction accuracy and routing stretch.
5. Compare results against the Greedy Forwarding baseline implemented in the beginner project.
6. Visualize routing performance and accuracy improvements.

**Ships as:** A Python repository with code to train and evaluate the Greedy Tensile routing policy, including scripts for data generation, training, evaluation, and visualization, with a detailed README explaining the methodology and results.

**Stretch goal:** Implement the symbolic two-linear-action approximation of the learned policy and compare its accuracy and complexity to the full DNN.

### Advanced — Robust Greedy Tensile Routing with Noisy or Incomplete Coordinates
*Effort: 3-4 weeks*

You extend the Greedy Tensile routing approach to handle networks where node coordinate information is noisy or partially missing, addressing a key limitation noted in the paper. You experiment with input feature augmentation, noise-robust training, or online fine-tuning to improve routing accuracy and stability under coordinate uncertainty.

**Why it shows you understood the paper:** This project tackles a real limitation of the paper by adapting the learned routing policy to more realistic network conditions, demonstrating your ability to extend and apply the paper's methods beyond its original scope.

**Grounded in:** The approach assumes knowledge of node coordinates and origin-destination pairs, which may not always be available or accurate in real networks; future direction includes incorporating online meta-learning or fine-tuning to improve performance when ideal seed graphs are not known or when adapting to new network conditions.

**Tech stack:** Python 3.11, PyTorch, NetworkX, NumPy, Matplotlib

**Data:** Simulated uniform random geometric graphs with added synthetic noise or missing coordinate data to simulate real-world imperfections.

**Build it:**

1. Extend the graph generation to add Gaussian noise to node coordinates or randomly remove coordinate information for some nodes.
2. Modify feature extraction to handle noisy or incomplete coordinate inputs, possibly using imputation or uncertainty-aware features.
3. Implement training procedures that include noise-augmented data or online fine-tuning to adapt the routing policy.
4. Evaluate the robustness of the learned policy under varying noise levels and missing data fractions, comparing to baseline Greedy Forwarding and original Greedy Tensile routing.
5. Analyze routing performance metrics and stability, and visualize routing paths under noisy conditions.
6. Document challenges, methods, and results in a comprehensive README.

**Ships as:** A Python repository demonstrating robust Greedy Tensile routing under noisy/incomplete coordinate conditions, with training and evaluation scripts, visualizations, and a detailed report on methodology and findings.

**Stretch goal:** Incorporate multi-neighbor action selection or richer input features as suggested in the paper's future directions to further improve robustness.

_The paper's authors did not release code or datasets, so all data must be simulated as uniform random geometric graphs in Euclidean space as described; ensure your simulation parameters align with those in the paper for meaningful comparison._
