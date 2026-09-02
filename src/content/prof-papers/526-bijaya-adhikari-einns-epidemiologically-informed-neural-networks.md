---
title: "526 · EINNs: Epidemiologically-Informed Neural Networks — Bijaya Adhikari"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bijaya-adhikari"
source_hash: "d6913c7abd6885f7b7ed670f37a62dc4fcc5f667ad8bd9d9855924be9b433d6c"
sequence: 526
generator: "outreach-garden: managed"
---

# 526 · EINNs: Epidemiologically-Informed Neural Networks

## At a glance

- **Professor:** Bijaya Adhikari
- **Institution:** University of Iowa
- **Paper:** [EINNs: Epidemiologically-Informed Neural Networks](https://doi.org/10.1609/aaai.v37i12.26690)
- **Authors:** Alexander Rodrı́guez, Jiaming Cui, Naren Ramakrishnan, Bijaya Adhikari, B. Aditya Prakash
- **Year:** 2023

## Paper overview

This paper presents EINNs, a novel framework that integrates mechanistic epidemic models with neural networks to improve epidemic forecasting. It leverages the strengths of both mechanistic models, which capture long-term epidemic dynamics, and machine learning models, which excel at short-term predictions using diverse data sources. EINNs use physics-informed neural networks (PINNs) to learn latent epidemic dynamics and transfer this knowledge to a recurrent neural network (RNN) that ingests heterogeneous data, enabling accurate and well-correlated forecasts for diseases like COVID-19 and influenza.

### Why it matters

**Research problem:** Existing epidemic forecasting methods either rely on mechanistic models that provide long-term trend understanding but lack flexibility and scalability, or on machine learning models that excel at short-term forecasting but do not capture mechanistic dynamics or support causal reasoning. There is a need for a unified approach that combines the advantages of both to produce accurate and trustworthy epidemic forecasts over both short and long horizons.

**Why it matters:** Accurate and trustworthy epidemic forecasts are critical for public health decision-making, especially during pandemics like COVID-19 and seasonal influenza. Improved forecasting can guide interventions, resource allocation, and policy decisions to mitigate health, economic, and social impacts.

**Key contributions:**

- Introduction of EINNs, a framework that integrates mechanistic epidemic ODE models with neural networks for forecasting.
- Development of a transfer learning method via gradient matching to transfer learned epidemic dynamics from a PINN to an RNN ingesting heterogeneous data.
- Extension of PINNs to handle partially observable epidemic states and incorporate epidemiological domain knowledge such as monotonicity constraints.
- Comprehensive empirical evaluation on COVID-19 and influenza forecasting across US states and HHS regions demonstrating improved accuracy and trend correlation.
- Demonstration that EINNs outperform existing methods for incorporating epidemic dynamics into neural networks, including generation, regularization, and ensembling approaches.

## About the professor

**Bijaya Adhikari** — Associate Professor, Department of Computer Science, University of Iowa.

Research interests: Data mining; machine learning; dynamical processes; public health; network analysis.

### Research links

- [Faculty/profile page](https://cs.uiowa.edu/people/bijaya-adhikari)
- [Professor website](https://homepage.divms.uiowa.edu/~badhikari/)
- [Lab website](https://pisa.cs.uiowa.edu/compepi/)
- [Google Scholar](https://scholar.google.com/citations?user=lfRiJ8YAAAAJ&hl=en&oi=ao)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Physics-Informed Neural Networks
**The paper assumes:** physics-informed neural networks, mechanistic ODE modeling, neural network training with differential equation constraints
**Already in this field?** Skip this entirely if you already understand how physics-informed neural networks integrate differential equations into neural network training.

This background focuses on Physics-Informed Neural Networks (PINNs), the core methodology used in the EINNs paper to integrate mechanistic epidemic models with neural networks. The rigorous course option offers a deep, structured university-level lecture series on PINNs and related AI applications in sciences and engineering, ideal for a thorough understanding. The fast track provides a concise, visual explainer playlist that covers key PINN concepts and practical introductions, suitable for quickly grasping the essentials before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [ETH Zürich | AI in the Sciences and Engineering 2025 Lecture Series](https://www.youtube.com/playlist?list=PLJkYEExhe7rYBo2KBwsirSF-B0R3Q0nt7) — CAMLab, ETH Zürich · 14 videos · 17.9h across 14 episodes

**Watch only this:** Lectures 3 and 4: 'Physics-Informed Neural Networks – Introduction' and 'PINNs - Theoretical Insights', about 2.5 hours total (~76 minutes each). These two lectures provide a focused and rigorous foundation on PINNs necessary to understand their role in the EINNs framework.

*Why it unblocks this paper:* This ETH Zürich AI in the Sciences and Engineering 2025 lecture series includes dedicated lectures on Physics-Informed Neural Networks, covering both introductory and theoretical insights, directly relevant to understanding the PINN time module and gradient matching technique in EINNs.

*If you want all of it:* All 14 episodes, about 17.9 hours total, covering a broad range of AI applications in physical sciences including PINNs and operator learning.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [PINN (Physics-Informed Neural Networks)](https://www.youtube.com/playlist?list=PLXmYoJbJ848pkMm9NGZZKXUQJ8XWIXZX8) — Karet Pentil · 17 videos

**Watch only this:** First 5 videos: 'A Hands-on Introduction to Physics-informed Machine Learning' through 'ML Tutorial 5 - Neural Ordinary Differential Equations', approximately 1.5 to 2 hours total. These cover the core PINN concepts and neural ODE basics needed to understand the paper's approach.

*Why it unblocks this paper:* This playlist by Karet Pentil offers a concise, hands-on introduction to Physics-Informed Neural Networks and related neural ODE concepts, providing clear, practical explanations that quickly build intuition about PINNs, which is essential for grasping the EINNs methodology without a heavy time commitment.

*If you want all of it:* All 17 videos, roughly 4 to 5 hours total, for a more comprehensive practical and theoretical overview of PINNs and related methods.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the EINNs paper, start by building a solid foundation in mechanistic epidemic models and physics-informed neural networks (PINNs), as these form the theoretical and methodological backbone of the work. Next, study recurrent neural networks with attention mechanisms, which are crucial for the feature module of EINNs that ingests heterogeneous data. Finally, explore the core concept of EINNs themselves, focusing on the integration of mechanistic models with neural networks and the novel gradient matching transfer learning technique used for knowledge transfer.

### Mechanistic epidemic models *(prerequisite)*
Understanding mechanistic epidemic models is essential to grasp how traditional compartmental models like SEIRM and SIRS capture epidemic dynamics through ODEs. This foundation helps appreciate the mechanistic knowledge that EINNs aim to integrate with neural networks.

*How the paper uses it:* EINNs build upon mechanistic epidemic ODE models to learn latent epidemic dynamics and improve forecasting.

▶ [Forecasting the COVID-19 pandemic in different parts of the world using dynamical models](https://www.youtube.com/watch?v=mugPlpYEYrQ) — Fields Institute · 1:10:32 · 6 years ago

### Physics-informed neural networks *(prerequisite)*
PINNs are a core method to embed mechanistic knowledge into neural networks by incorporating physical laws as constraints during training. Understanding PINNs is critical to appreciate how EINNs use a PINN time module to learn epidemic dynamics without explicit numerical ODE solving.

*How the paper uses it:* EINNs use a PINN to learn latent epidemic dynamics and enforce ODE consistency during training.

▶ [ETH Zürich AISE: Physics-Informed Neural Networks – Introduction](https://www.youtube.com/watch?v=D-F7BYRhAkQ) — CAMLab, ETH Zürich · 1:27:02 · 2 years ago

### Recurrent neural networks with attention *(prerequisite)*
RNNs with attention mechanisms are powerful for modeling sequential and heterogeneous time series data, enabling the feature module of EINNs to process diverse epidemic-related data sources effectively.

*How the paper uses it:* EINNs employ an RNN with attention to ingest heterogeneous multivariate time series data for forecasting.

▶ [MIT 6.S191 (2024): Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=dqoEU9Ac3ek) — Alexander Amini · 1:01:31 · 2 years ago

### Gradient matching transfer learning
Gradient matching is a novel transfer learning technique introduced in EINNs to transfer learned epidemic dynamics from the PINN time module to the RNN feature module by aligning their gradients with respect to mechanistic ODEs, enabling effective knowledge transfer without forward ODE solves.

*How the paper uses it:* The paper proposes gradient matching to transfer learned representations from the PINN to the RNN, ensuring mechanistic consistency in predictions.

▶ [Stanford CS330 Deep Multi-Task & Meta Learning - Transfer Learning, Meta Learning l 2022 I Lecture 3](https://www.youtube.com/watch?v=bVjCjdq06R4) — Stanford Online · 1:19:16 · 3 years ago

### EINNs paper talk *(the paper's own talk)*
Directly hearing from the authors or closely related expert talks on PINNs applied to epidemic forecasting provides the most precise and advanced understanding of the EINNs framework, its innovations, and empirical results.

*How the paper uses it:* Martina Rama's seminar on Physics-Informed Neural Networks for Probabilistic Epidemic Forecasting closely aligns with the EINNs approach and offers an advanced seminar-level discussion relevant to the paper's core methodology.

▶ [Martina Rama: Physics-Informed Neural Networks for Probabilistic Epidemic Forecasting](https://www.youtube.com/watch?v=CCfPVKnZ5kc) — Machine Learning and Dynamical Systems Seminar · 59:15 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand EINNs, start by learning the basics of mechanistic epidemic models, which provide the foundational ODE frameworks for disease spread. Next, grasp physics-informed neural networks (PINNs), the core technique used to embed these mechanistic models into neural networks. Then, study recurrent neural networks (RNNs) with attention to understand how heterogeneous time series data is processed. Finally, explore the novel gradient matching transfer learning method that enables knowledge transfer from PINNs to RNNs in EINNs.

### Mechanistic epidemic models *(prerequisite)*
Mechanistic epidemic models use differential equations to describe how diseases spread through populations over time, capturing key states like susceptible, infected, and recovered. Understanding these models helps you see the long-term dynamics that EINNs aim to incorporate into neural networks.

*How the paper uses it:* EINNs build upon compartmental ODE epidemic models like SEIRM and SIRS to capture latent epidemic dynamics.

▶ [The MATH of Pandemics | Intro to the SIR Model](https://www.youtube.com/watch?v=Qrp40ck3WpI) — Dr. Trefor Bazett · 15:35 · 6 years ago

### Physics-informed neural networks *(prerequisite)*
Physics-informed neural networks (PINNs) integrate physical laws, expressed as differential equations, directly into the training of neural networks, enabling the model to learn solutions consistent with known mechanistic dynamics. This approach reduces reliance on large data and improves interpretability.

*How the paper uses it:* EINNs use PINNs to learn latent epidemic dynamics from mechanistic ODEs without explicit numerical solving during training.

▶ [Physics Informed Neural Networks (PINNs) [Physics Informed Machine Learning]](https://www.youtube.com/watch?v=-zrY7P2dVC4) — Steve Brunton · 34:32 · 2 years ago

### Recurrent neural networks with attention *(prerequisite)*
Recurrent neural networks (RNNs) process sequential data by maintaining a memory of past inputs, and attention mechanisms help the model focus on the most relevant parts of the input sequence. This combination is powerful for handling heterogeneous time series data in forecasting tasks.

*How the paper uses it:* EINNs use an RNN with attention to ingest diverse epidemic-related data and produce accurate forecasts aligned with mechanistic dynamics.

▶ [MIT 6.S191 (2024): Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=dqoEU9Ac3ek) — Alexander Amini · 1:01:31 · 2 years ago

### EINNs paper talk *(the paper's own talk)*
Hearing directly from the authors about EINNs provides insight into their motivation, methodology, and results, complementing foundational knowledge with expert explanations and context.

*How the paper uses it:* The authors explain how EINNs integrate mechanistic models with neural networks and detail their novel transfer learning approach.

▶ [Martina Rama: Physics-Informed Neural Networks for Probabilistic Epidemic Forecasting](https://www.youtube.com/watch?v=CCfPVKnZ5kc) — Machine Learning and Dynamical Systems Seminar · 59:15 · 1 year ago

## Already in your library

- [An Introduction to Physics-Informed Neural Networks](https://www.youtube.com/watch?v=KffYsBqrBVo) — also for: Guaranteeing Conservation of Integrals with Projection in Physics-Informed Neural Networks (Luca Daniel)
- [Lecture 10 | Recurrent Neural Networks](https://www.youtube.com/watch?v=6niqTuYFZLQ) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [MIT 6.S191 (2025): Recurrent Neural Networks, Transformers ...](https://www.youtube.com/watch?v=GvezxUdLrEk) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [MIT 6.S191: Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=d02VkQ9MP44) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Serdar Bozdag)
- [Recurrent Neural Networks (RNNs), Clearly Explained!!!](https://www.youtube.com/watch?v=AsNTP8Kwu80) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Lec 18. Transfer Learning: Models](https://www.youtube.com/watch?v=tNfuZ9Imt3M) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the EINNs paper. The beginner project focuses on reproducing a core mechanism—training a simple PINN on a compartmental epidemic ODE model—to grasp physics-informed neural networks and epidemic dynamics. The intermediate project involves implementing the full EINNs framework's core idea of transferring learned epidemic dynamics from a PINN to an RNN using gradient matching on a public epidemic dataset, comparing against a baseline RNN. The advanced project extends EINNs by integrating a network-based epidemiological model into the framework, addressing a stated limitation and exploring more complex transmission dynamics.

### Beginner — Train a PINN on a simple SEIR epidemic model
*Effort: a weekend (~6-8 hours)*

You build a physics-informed neural network (PINN) that learns the latent dynamics of a simple SEIR compartmental epidemic model by enforcing the ODE constraints during training. This involves coding the ODE residual loss and training the PINN on synthetic or publicly available SEIR data to predict compartment trajectories.

**Why it shows you understood the paper:** This project shows you understand how PINNs incorporate mechanistic epidemic ODEs into neural networks, a key component of EINNs' time module, and how latent epidemic states can be learned without explicit ODE solvers.

**Grounded in:** Introduction of EINNs, a framework that integrates mechanistic epidemic ODE models with neural networks for forecasting.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic SEIR epidemic time series data generated from standard SEIR ODEs; no external dataset required.

**Build it:**

1. Implement the SEIR ODE system and generate synthetic compartment trajectories.
2. Build a neural network to predict SEIR compartments over time.
3. Define the PINN loss combining data fitting and ODE residuals enforcing the SEIR dynamics.
4. Train the PINN on the synthetic data and visualize predicted compartment trajectories.
5. Evaluate the PINN's ability to capture latent epidemic dynamics without explicit ODE solving.

**Ships as:** A GitHub repo with code to train and evaluate a PINN on SEIR data, including plots showing learned compartment trajectories and a README explaining the PINN approach.

**Stretch goal:** Add monotonicity constraints on compartments (e.g., cumulative infected) to reflect epidemiological domain knowledge as in EINNs.

### Intermediate — Implement EINNs core method with gradient matching on COVID-19 data
*Effort: 2-3 weekends (~20 hours)*

You reimplement the core EINNs framework by training a PINN on mechanistic COVID-19 SEIRM ODEs and transferring learned epidemic dynamics to an RNN with attention using gradient matching. You then train the RNN on heterogeneous COVID-19 time series data and compare forecasting accuracy and trend correlation against a baseline RNN without PINN transfer.

**Why it shows you understood the paper:** This project demonstrates your grasp of EINNs' novel gradient matching transfer learning technique and the integration of mechanistic and data-driven models for epidemic forecasting, reproducing key results on accuracy and trend correlation improvements.

**Grounded in:** Development of a transfer learning method via gradient matching to transfer learned epidemic dynamics from a PINN to an RNN ingesting heterogeneous data.

**Tech stack:** Python 3.11, PyTorch, Pandas, NumPy, Matplotlib

**Data:** Publicly available COVID-19 time series data for US states (e.g., Johns Hopkins University COVID-19 dataset) used as a substitute for the paper's heterogeneous data sources.

**Build it:**

1. Implement the SEIRM mechanistic ODE model and train a PINN to learn latent epidemic dynamics.
2. Build an RNN with attention to ingest multivariate COVID-19 time series data.
3. Implement the gradient matching loss to transfer PINN-learned dynamics to the RNN during training.
4. Train the RNN on COVID-19 data with and without gradient matching transfer.
5. Evaluate and compare forecasting accuracy and trend correlation metrics for short- and long-term horizons.
6. Document the implementation details, results, and insights in a README.

**Verified links from the paper:**

- <https://github.com/AdityaLab/EINNs> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing the EINNs reimplementation with training scripts, evaluation metrics comparing baseline and EINNs models, and visualizations of forecast accuracy and trend correlation.

**Stretch goal:** Incorporate monotonicity and parameter smoothness constraints during training to improve latent state handling as in EINNs.

### Advanced — Extend EINNs to integrate a network-based epidemiological model
*Effort: several weeks (~4+ weeks)*

You extend the EINNs framework by replacing the compartmental ODE mechanistic model with a network-based epidemiological model that captures complex transmission dynamics. You adapt the PINN time module to learn latent dynamics from the network model and transfer knowledge to an RNN using gradient matching. You evaluate the extended EINNs on a suitable epidemic dataset and analyze improvements or challenges.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction of the paper by integrating more complex epidemiological models into EINNs, demonstrating deep understanding and research-level initiative to enhance epidemic forecasting.

**Grounded in:** Exploring integration of more complex epidemiological models, such as network-based or agent-based models, into the EINNs framework.

**Tech stack:** Python 3.11, PyTorch, NetworkX, NumPy, Pandas, Matplotlib

**Data:** Public epidemic datasets with contact network information if available; otherwise, synthetic network-based epidemic simulations to train and evaluate the model.

**Build it:**

1. Implement or simulate a network-based epidemiological model (e.g., SIR on a contact network).
2. Adapt the PINN architecture to incorporate the network-based model's latent dynamics.
3. Develop the gradient matching transfer learning to align PINN and RNN representations.
4. Train the extended EINNs model on epidemic data or simulations with network structure.
5. Evaluate forecasting performance and compare against the original EINNs with compartmental ODEs.
6. Analyze challenges in training, data requirements, and potential benefits of network integration.

**Ships as:** A comprehensive GitHub repo with code for the extended EINNs framework, training and evaluation scripts, and a detailed README discussing methodology, results, and implications for epidemic forecasting.

**Stretch goal:** Explore causal or counterfactual forecasting capabilities using the extended EINNs model for intervention planning.
