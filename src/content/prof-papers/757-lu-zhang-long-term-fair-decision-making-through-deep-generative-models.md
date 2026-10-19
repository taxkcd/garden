---
title: "757 · Long-Term Fair Decision Making through Deep Generative Models — Lu Zhang"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-lu-zhang"
source_hash: "f8bd965982fedd5ee2fa1fa78e1f60b68fd78ad7955abeb70e1b329b146643f5"
sequence: 757
generator: "outreach-garden: managed"
---

# 757 · Long-Term Fair Decision Making through Deep Generative Models

## At a glance

- **Professor:** Lu Zhang
- **Institution:** University of Arkansas
- **Paper:** [Long-Term Fair Decision Making through Deep Generative Models](https://arxiv.org/pdf/2401.11288)
- **Authors:** Yaowei Hu, Yongkai Wu, Lu Zhang
- **Year:** 2024

## Paper overview

This paper addresses the challenge of achieving fairness in sequential decision-making systems over the long term. It proposes a method that uses deep generative models to simulate the effects of decisions on future data distributions and trains decision models to reduce group disparities while balancing fairness and accuracy.

### Why it matters

**Research problem:** How to mitigate group disparity and achieve long-term fairness in sequential decision-making systems, where decisions at one time affect future data distributions and subsequent decisions, while limiting the use of sensitive attributes in decision models.

**Why it matters:** Traditional fairness approaches focus on one-shot decisions and often fail or worsen disparities over time due to feedback loops and distribution shifts. Long-term fairness is crucial for real-world applications like loan approvals and college admissions to ensure equitable outcomes across demographic groups over time.

**Key contributions:**

- Formulation of long-term fairness metric using 1-Wasserstein distance between interventional distributions.
- A novel three-phase learning framework integrating deep generative models and decision models to achieve long-term fairness.
- Theoretical substantiation that minimizing the 1-Wasserstein distance reconciles demographic parity and equal opportunity fairness notions.
- Empirical demonstration on synthetic and semi-synthetic datasets showing improved balance between long-term fairness, local fairness, and utility compared to baselines.

## About the professor

**Lu Zhang** — Assistant Professor, Department of Electrical Engineering and Computer Science, University of Arkansas.

### Research links

- [Faculty/profile page](https://zh0007lu.github.io/)
- [Professor website](https://uark.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Causal Inference and Structural Causal Models
**The paper assumes:** causal inference, structural causal models, temporal causal graphs, interventional distributions
**Already in this field?** Skip this entirely if you already understand causal inference frameworks, structural causal models, and how interventions are modeled in temporal settings.

This background focuses on causal inference and structural causal models, which are foundational to understanding the paper's approach to long-term fairness via temporal causal graphs and interventions. The rigorous course option offers a deep, structured dive into causal AI concepts and methods, while the fast track provides a concise, intuition-driven introduction to key causal inference ideas. Choose the course for a thorough grounding; choose the fast track for a quicker but still solid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Casual AI](https://www.youtube.com/playlist?list=PLUkRzwZMaL4EsuYtiQctfXKWBS-mVNzt_) — AI Growth Institute · 33 videos · 29.8h across the first 32 episodes

**Watch only this:** Episodes 2-5: 'What is Causal AI?', 'Causal AI for Decision Making', 'What is causal inference, and why should data scientists know? by Ludvig Hult', and 'An introduction to causal AI' — about 3.5 hours total. These episodes provide a solid foundation on causal inference concepts and their application to decision making, which are essential for understanding the paper's methodology.

*Why it unblocks this paper:* This 'Causal AI' series from AI Growth Institute covers causal inference comprehensively, including causal graphs, interventions, and machine learning for causality, directly supporting the paper's use of temporal causal graphs and structural causal models.

*If you want all of it:* About 29.8 hours across the first 32 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Causal Inference](https://www.youtube.com/playlist?list=PLLFnyzDUVf86NWSw6fwEClf42n4NQX5Wi) — AI, ML, SWE, Tech Expert · 7 videos · 3.0h across 7 episodes

**Watch only this:** Episodes 3, 4, and 6: 'Causal Graph, Backdoor, Front-door Criterion, Do-Calculus (Part 1)', 'Causal Inference with Machine Learning - EXPLAINED!', and 'Potential Outcome' — about 1.25 hours total. These cover the essential causal graph criteria, intervention concepts, and potential outcomes needed to grasp the paper's causal modeling approach.

*Why it unblocks this paper:* This concise playlist by 'AI, ML, SWE, Tech Expert' offers clear, focused explanations of causal inference fundamentals including causal graphs, do-calculus, and potential outcomes, matching the paper's core causal concepts in a shorter format.

*If you want all of it:* About 3.0 hours across all 7 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Long-Term Fair Decision Making through Deep Generative Models,' start by building a solid foundation in the prerequisite topics of temporal causal graphs and structural causal models, followed by deep generative models for sequential data, fairness metrics in machine learning, and performative risk minimization. Finally, focus on the paper's core concept of long-term fairness via the 1-Wasserstein distance, which is central to the authors' novel fairness formulation and methodology.

### Temporal Causal Graphs and Structural Causal Models *(prerequisite)*
Understanding temporal causal graphs and structural causal models is essential as they form the backbone of the system dynamics modeling in the paper. These models enable reasoning about how decisions affect future data distributions and fairness outcomes over time.

*How the paper uses it:* The paper models system dynamics using temporal causal graphs and structural causal models to define and achieve long-term fairness.

▶ [CAI - 03 Structural Causal Models | Causality for AI & ML | TU Darmstadt | Winter Semester 2025/26](https://www.youtube.com/watch?v=4QZddiuzDxw) — Moritz Willig · 58:12 · 5mo ago

### Deep Generative Models for Sequential Data *(prerequisite)*
Deep generative models, especially recurrent conditional GANs, are key to generating high-fidelity observational and interventional data in the paper's framework. Understanding GANs and their application to sequential data is crucial to grasp how the authors simulate future data distributions.

*How the paper uses it:* The paper uses a recurrent conditional generative adversarial network (RCGAN) to generate data for training fair decision models.

▶ [11-785, Fall 22 Lecture 24: Generative Adversarial Networks (Part 2)](https://www.youtube.com/watch?v=v84umCoD_7Y) — Carnegie Mellon University Deep Learning · 1:11:21 · 3y ago

### Fairness Metrics in Machine Learning *(prerequisite)*
A solid grasp of fairness metrics such as demographic parity and equal opportunity is necessary to appreciate how the paper reconciles these notions through its novel long-term fairness metric. This background helps in understanding the fairness constraints applied during model training.

*How the paper uses it:* The paper theoretically substantiates that minimizing the 1-Wasserstein distance reconciles demographic parity and equal opportunity fairness notions.

▶ [Fairness Criteria, Exploring Fairness in Machine Learning](https://www.youtube.com/watch?v=euwc0va-7Vo) — MIT OpenCourseWare · 7:07 · 6y ago

### Performative Risk Minimization *(prerequisite)*
Performative risk minimization is the optimization framework used in the paper to train the fair decision model under distribution shifts caused by sequential decisions. Understanding this concept clarifies how the authors solve the fairness-constrained optimization problem.

*How the paper uses it:* The paper treats the optimization problem as performative risk minimization and solves it using repeated gradient descent.

▶ [Tijana Zrnic | Regret Minimization with Performative Feedback](https://www.youtube.com/watch?v=cM-4aQr3BSk) — Harvard CMSA · 18:45 · 3y ago

### Long-Term Fairness via 1-Wasserstein Distance
The core novelty of the paper is the formulation of long-term fairness as the 1-Wasserstein distance between interventional distributions of demographic groups. This metric captures distributional disparities over time and guides the training of fair decision models.

*How the paper uses it:* The paper formulates long-term fairness using the 1-Wasserstein distance between interventional distributions, which is central to its fairness metric and methodology.

▶ [Wasserstein Distance to Independence Models](https://www.youtube.com/watch?v=7lJVe6EozV4) — Sanya AG&ML Workshop 2021 · 34:40 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on long-term fair decision making using deep generative models, start by building foundational knowledge on fairness metrics in machine learning to grasp key fairness notions. Next, learn about temporal causal graphs and structural causal models, which underpin the paper's causal framework. Then, study deep generative models for sequential data to understand how the paper generates future data distributions. Finally, explore the paper's core concept of long-term fairness via the 1-Wasserstein distance, which measures distributional disparities over time.

### Fairness Metrics in Machine Learning *(prerequisite)*
Begin with understanding common fairness criteria in machine learning such as demographic parity and equal opportunity. These metrics help quantify and detect bias in decision-making systems and are foundational to appreciating how fairness is measured and enforced.

*How the paper uses it:* The paper reconciles demographic parity and equal opportunity fairness notions through its long-term fairness metric.

▶ [Fairness Criteria, Exploring Fairness in Machine Learning](https://www.youtube.com/watch?v=euwc0va-7Vo) — MIT OpenCourseWare · 7:07 · 6y ago

### Temporal Causal Graphs and Structural Causal Models *(prerequisite)*
Learn about causal graphs and structural causal models which represent cause-effect relationships over time. This knowledge is crucial to understanding how decisions influence future data distributions and how the paper models system dynamics.

*How the paper uses it:* The authors model system dynamics using temporal causal graphs and structural causal models to capture decision impacts over time.

▶ [CAI - 03 Structural Causal Models | Causality for AI & ML | TU Darmstadt | Winter Semester 2025/26](https://www.youtube.com/watch?v=4QZddiuzDxw) — Moritz Willig · 58:12 · 5mo ago

### Deep Generative Models for Sequential Data *(prerequisite)*
Explore how deep generative models, especially GANs, can generate realistic sequential data. This is key to understanding how the paper simulates future observational and interventional data to train fair decision models.

*How the paper uses it:* The paper uses a recurrent conditional GAN to generate high-fidelity observational and interventional data for training.

▶ [Deep Learning 33: Conditional Generative Adversarial Network (C-GAN) : Coding in Google Colab](https://www.youtube.com/watch?v=7Tlk3Gql-Wg) — Ahlad Kumar · 15:28 · 7y ago

### Long-Term Fairness via 1-Wasserstein Distance
Understand the 1-Wasserstein distance as a metric to measure differences between probability distributions. This concept is central to the paper's novel fairness metric that quantifies group disparities over time under interventions.

*How the paper uses it:* The paper formulates long-term fairness as the 1-Wasserstein distance between interventional distributions of different groups.

▶ [Introduction to the Wasserstein distance](https://www.youtube.com/watch?v=CDiol4LG2Ao) — Applied Algebraic Topology Network · 17:28 · 5y ago

## Already in your library

- [Definitions of Fairness in Machine Learning | Equal ...](https://www.youtube.com/watch?v=c2_ezuAnCrA) — also for: Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search (Krzysztof Onak)
- [14. Causal Inference, Part 1](https://www.youtube.com/watch?v=gRkUhg9Wb-I) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Causal Inference - EXPLAINED!](https://www.youtube.com/watch?v=Od6oAz1Op2k) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Causal Inference - A Painless Introduction (#SoME5)](https://www.youtube.com/watch?v=3sp08Zmry6g) — also for: Off by a beat: the effects of temporal misalignment in reinforcement learning for sepsis treatment (Jenna Wiens)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [A friendly introduction to Recurrent Neural Networks](https://www.youtube.com/watch?v=UNmqTiOnRfg) — also for: Incorporating Visual Cortical Lateral Connection Properties into CNN: Recurrent Activation and Excitatory-Inhibitory Separation (Yoonsuck Choe)
- [Recurrent Neural Networks (RNNs), Clearly Explained!!!](https://www.youtube.com/watch?v=AsNTP8Kwu80) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [Generative Adversarial Networks (GANs) - Computerphile](https://www.youtube.com/watch?v=Sw9r8CL98N0) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Lecture 8: Fairness in Machine Learning](https://www.youtube.com/watch?v=VMBE2mgpxH8) — also for: Fairness Testing through Extreme Value Theory (Vladik Kreinovich)
- [Introduction to Algorithm Fairness | Causes, Measuring ...](https://www.youtube.com/watch?v=3UcSq1dGW2c) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [22. Gradient Descent: Downhill to a Minimum](https://www.youtube.com/watch?v=AeRwohPuUHQ) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [25. Stochastic Gradient Descent](https://www.youtube.com/watch?v=k3AiUhwHQ28) — also for: Pseudo-Asynchronous Local SGD: Robust and Efficient Data-Parallel Training (Yin Tat Lee)
- [Empirical Risk Minimization Explained | The Engine Behind Modern AI](https://www.youtube.com/watch?v=8fsJCyBOizQ) — also for: Robustness Beyond Known Groups with Low-rank Adaptation (Collin M. Stultz)
- [Lecture 3 | Learning, Empirical Risk Minimization, and Optimization](https://www.youtube.com/watch?v=9kAQ8Em7SdM) — also for: Robustness Beyond Known Groups with Low-rank Adaptation (Collin M. Stultz)
- [Wasserstein Distance & Optimal Transport — Fully Explained](https://www.youtube.com/watch?v=88ONbF_b3VE) — also for: PeTeR: Post-Training Robustification of Probabilistic Circuits (YooJung Choi)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the DeepLF framework for long-term fairness in sequential decision-making. The beginner project focuses on implementing and visualizing the core long-term fairness metric (1-Wasserstein distance) on synthetic data. The intermediate project builds on the authors' released code to reproduce and extend their three-phase learning framework on the semi-synthetic SimLoan dataset. The advanced project tackles a stated limitation by investigating the sensitivity of DeepLF to inaccuracies in the learned temporal causal graph, proposing mitigation strategies and evaluating their impact.

### Beginner — Visualizing Long-Term Fairness with 1-Wasserstein Distance
*Effort: a weekend, ~8 hours*

You build a Python notebook that simulates simple sequential decision data for two demographic groups and computes the 1-Wasserstein distance between their interventional outcome distributions at a future time step. You visualize how this metric changes as decisions or group disparities vary.

**Why it shows you understood the paper:** This project demonstrates you grasp the paper's key fairness metric formulation and its role in quantifying long-term fairness across groups, a foundational concept in the paper.

**Grounded in:** The paper formulates long-term fairness as the 1-Wasserstein distance between the interventional distributions of different demographic groups at a sufficiently large time step.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, SciPy, Matplotlib

**Data:** Synthetic sequential decision data you generate in the notebook to mimic two groups with evolving outcomes over time.

**Build it:**

1. Implement a simple temporal causal model simulating sequential decisions and outcomes for two groups over multiple time steps.
2. Generate interventional distributions by simulating outcomes under fixed decision policies.
3. Compute the 1-Wasserstein distance between the groups' interventional outcome distributions at a chosen future time step.
4. Visualize the distributions and the Wasserstein distance metric under varying decision policies or group disparities.
5. Write a README explaining the metric, its calculation, and interpretation in the context of long-term fairness.

**Ships as:** A Jupyter notebook with code, visualizations, and explanations showing how the 1-Wasserstein distance captures long-term fairness between groups.

**Stretch goal:** Add a simple decision model that updates policies to reduce the Wasserstein distance and observe metric changes.

### Intermediate — Reproducing DeepLF on Semi-Synthetic SimLoan Dataset
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' DeepLF code from their GitHub repository, applying it to the semi-synthetic SimLoan dataset derived from the Taiwan dataset. You reproduce key results comparing DeepLF to baseline fairness-constrained models and report metrics including long-term fairness (1-Wasserstein distance), local fairness, and accuracy.

**Why it shows you understood the paper:** This project shows you can work with the paper's actual implementation, understand the three-phase learning framework, and interpret the empirical results demonstrating DeepLF's effectiveness.

**Grounded in:** We propose a three-phase learning framework where the decision model is trained on high-fidelity data generated by a deep generative model.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Git

**Data:** Semi-synthetic SimLoan dataset generated by the authors using the Taiwan dataset as initial data, available via the authors' GitHub repository.

**Build it:**

1. Clone the authors' repository at https://github.com/yaoweihu/Generative-Models-for-Fairness.
2. Set up the environment and install dependencies as per the repository instructions.
3. Run the training pipeline on the semi-synthetic SimLoan dataset to reproduce DeepLF's three-phase learning framework.
4. Evaluate and plot the long-term fairness metric (1-Wasserstein distance), local fairness, and accuracy, comparing DeepLF to baseline models like MLP-DP and MLP-EO.
5. Write a report summarizing your reproduction results and insights on the trade-offs between fairness and utility.

**Verified links from the paper:**

- <https://github.com/yaoweihu/Generative-Models-for-Fairness> — released by the paper's authors

**Ships as:** A GitHub repository fork with runnable code, scripts to reproduce key experiments, and a detailed README/report analyzing the results.

**Stretch goal:** Modify the fairness constraint or perform ablation studies to observe effects on long-term fairness and accuracy.

### Advanced — Evaluating DeepLF Sensitivity to Causal Graph Inaccuracies
*Effort: 3+ weeks*

You extend the DeepLF framework by experimentally injecting controlled inaccuracies or uncertainties into the learned temporal causal graph and structural causal model. You implement mitigation strategies such as robust causal discovery or ensemble causal models. You evaluate how these affect DeepLF's long-term fairness performance and propose recommendations.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, demonstrating deep comprehension of the framework's dependence on causal structure and practical challenges in real-world applications.

**Grounded in:** The approach assumes access to or ability to learn a temporal causal graph and structural causal model, which may not always be available or accurate.

**Tech stack:** Python 3.11, PyTorch, NetworkX, Causal Discovery libraries (e.g., CausalNex or Tetrad if Python bindings available), NumPy, Matplotlib

**Data:** Use the semi-synthetic SimLoan dataset from the authors' repository as base data; simulate causal graph perturbations programmatically.

**Build it:**

1. Review the DeepLF codebase and identify where the temporal causal graph and structural causal model are used.
2. Implement methods to perturb or inject noise into the causal graph structure (e.g., edge removals, additions, or weight perturbations).
3. Integrate or experiment with causal discovery tools to learn causal graphs from data with uncertainty.
4. Retrain DeepLF models using perturbed/uncertain causal graphs and evaluate long-term fairness and accuracy metrics.
5. Develop and test mitigation strategies such as ensemble causal graphs or robust training approaches.
6. Document findings, limitations, and practical recommendations for applying DeepLF under causal model uncertainty.

**Verified links from the paper:**

- <https://github.com/yaoweihu/Generative-Models-for-Fairness> — released by the paper's authors

**Ships as:** A comprehensive GitHub repository with code for causal graph perturbation, experiments, mitigation strategies, and a detailed report discussing sensitivity analysis and practical guidance.

**Stretch goal:** Apply the extended framework to a real-world dataset with partially known causal structure to validate practical effectiveness.
