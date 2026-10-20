---
title: "820 · CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization — Michael Maire"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-maire"
source_hash: "29de519155d9df5c05fb4c5d29ebd59328f4ef514a5c01fee727846efe18d038"
sequence: 820
generator: "outreach-garden: managed"
---

# 820 · CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization

## At a glance

- **Professor:** Michael Maire
- **Institution:** University of Chicago
- **Paper:** [CLAW: Learning Continuous Latent Action World Models via Adversarial Latent Regularization](https://arxiv.org/pdf/2606.04130)
- **Authors:** Tewodros W. Ayalew, Matthew Jeung, Samuel Wheeler, Xiao Zhang, Andre de la Cruz Arce, Kaylene Stocking, Michael Maire, Matthew R. Walter
- **Year:** 2026

## Paper overview

This paper introduces CLAW, a new method that learns how actions affect environments directly from videos without needing labeled actions. It uses adversarial training and diffusion models to create continuous latent action representations that are meaningful and support tasks like imitation learning and planning. CLAW outperforms existing methods on various simulated and real-world tasks.

### Why it matters

**Research problem:** How to learn a world model and continuous latent action representations jointly from unlabeled video data, avoiding reliance on explicit action labels or annotations, while ensuring the latent actions are semantically meaningful and do not leak future observation information.

**Why it matters:** World models that predict environment dynamics conditioned on actions are crucial for robot planning, control, and learning. However, requiring explicit action labels limits scalability and transferability across different embodiments and tasks. Learning latent actions from raw video enables broader applicability and data efficiency, but it is challenging to ensure these latent actions capture true action semantics without supervision or leakage.

**Key contributions:**

- First end-to-end self-supervised framework to jointly learn continuous latent action representations and a world model from unlabeled video.
- Introduction of adversarial latent regularization to prevent future observation leakage in latent actions.
- Use of diffusion-based video generation with causal attention masking for accurate action-conditioned environment dynamics prediction.
- Demonstration that the learned latent action world model supports imitation learning from observation and goal-directed planning.
- Extensive evaluation across diverse simulated and real-world tasks showing superior performance over recent latent action learning baselines.

## About the professor

**Michael Maire** — Assistant Professor, Department of Computer Science, University of Chicago.

### Research links

- [Faculty/profile page](http://ttic.uchicago.edu/~mmaire)
- [Google Scholar](https://scholar.google.com/citations?user=HXowq5YAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** latent variable models in machine learning
**The paper assumes:** latent variable models, generative modeling, and representation learning
**Already in this field?** Skip this entirely if you already understand latent variable modeling and generative approaches in machine learning, including how latent spaces are learned and used.

To deeply understand CLAW's approach to learning continuous latent action representations and diffusion-based world models from unlabeled video, a solid grasp of latent variable models and generative modeling is essential. The rigorous course offers a comprehensive, university-level foundation in latent variable energy-based models and variational autoencoders, while the fast track provides a concise, visually intuitive introduction to key concepts like latent spaces and variational autoencoders, enabling efficient background preparation depending on your available time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Yann LeCun’s Deep Learning Course](https://www.youtube.com/playlist?list=PLgF7i4LH-YxacgG0OPmTYe1UUQAvcw9Ke) — NYU Data Science · 33 videos · 47.4h across 33 episodes

**Watch only this:** Episodes 5L (Joint embedding method and latent variable energy based models (LV-EBMs)), 5.1 (Latent Variable Energy Based Models (LV-EBMs), inference), 6L (Latent variable EBMs for structured prediction), 6 (Latent Variable Energy Based Models (LV-EBMs), training), 7L (PCA, AE, K-means, Gaussian mixture model, sparse coding, and intuitive VAE), 8L (Self-supervised learning and variational inference), and 9 (AE, DAE, and VAE with PyTorch; generative adversarial networks (GAN) and code), about 10 hours total — these cover latent variable models, inference, training, and generative modeling foundational to CLAW.

*Why it unblocks this paper:* Yann LeCun’s Deep Learning Course covers latent variable energy-based models, variational autoencoders, and self-supervised learning in depth, directly relevant to understanding CLAW’s latent action modeling and adversarial latent regularization techniques.

*If you want all of it:* 47.4 hours across 33 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Deep Learning Animated](https://www.youtube.com/playlist?list=PLmkOM-kwIYM72cGYD2ofVIrp6xoe9LVps) — Deepia · 8 videos · 2.0h across 8 episodes

**Watch only this:** Episodes 'Latent Space Visualisation: PCA, t-SNE, UMAP', 'Variational Autoencoders | Generative AI Animated', and 'Denoising Autoencoders | Deep Learning Animated', about 45 minutes total — these succinctly cover latent space concepts and variational autoencoders relevant to the paper.

*Why it unblocks this paper:* Deep Learning Animated offers clear, visual explanations of latent spaces, autoencoders, variational autoencoders, and denoising autoencoders, providing an accessible and intuitive introduction to the core concepts underlying CLAW’s latent action representations and diffusion models.

*If you want all of it:* 2.0 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CLAW paper, start by building foundational knowledge on diffusion models for video generation and world models for control and planning, as these underpin the paper's approach to environment dynamics prediction. Next, study latent action representation learning and gradient reversal adversarial training to grasp how the paper encodes and regularizes latent actions. Finally, focus on the core concept of the CLAW paper itself, prioritizing the authors' own talk or the most relevant advanced research presentations.

### Diffusion models for video generation *(prerequisite)*
Diffusion models are central to CLAW's approach for predicting future frames conditioned on latent actions. Understanding the architecture and mechanisms of diffusion-based video generation, especially latent diffusion, provides the technical foundation for how CLAW models environment dynamics.

*How the paper uses it:* CLAW uses a diffusion-based world model with causal attention masking for future frame prediction.

▶ [Sander Dieleman - Diffusion models for image and video generation | ML in PL 2025](https://www.youtube.com/watch?v=qFIT3mSwWEk) — ML in PL · 51:52 · 7mo ago

### World models for control and planning *(prerequisite)*
World models provide the framework for predicting environment dynamics and enabling planning and imitation learning. Familiarity with recent advances and challenges in world models will clarify the significance of CLAW's contributions in learning latent actions jointly with the world model.

*How the paper uses it:* CLAW jointly learns a world model that predicts future frames conditioned on latent actions and initial observations.

▶ [Yann LeCun: World Models: Enabling the next AI revolution](https://www.youtube.com/watch?v=72Xj8k5WQX4) — Computer Vision and Geometry Group, ETH Zurich · 58:54 · 4mo ago

### Latent action representation learning *(prerequisite)*
Latent action representation learning is fundamental to CLAW's method of encoding continuous latent actions from unlabeled video. Understanding prior work on learning latent actions for robot control and assistive systems will contextualize CLAW's advances in adversarial latent regularization and continuous latent spaces.

*How the paper uses it:* CLAW learns continuous latent action representations from raw, unlabeled video to support control and planning.

▶ [Dylan Losey's Talk at ARA 19 on "Controlling Assistive Robots with Learned Latent Actions"](https://www.youtube.com/watch?v=zsVK7dW2748) — Stanford ILIAD · 16:05 · 6y ago

### Gradient reversal adversarial training *(prerequisite)*
Gradient reversal is a key adversarial training technique used in CLAW to prevent latent actions from encoding future observation information, ensuring semantic meaningfulness. Understanding this technique clarifies how CLAW enforces the desired disentanglement in latent space.

*How the paper uses it:* CLAW uses gradient reversal on predictions conditioned only on latent actions to discourage future observation leakage.

▶ [What is a Gradient Reversal Layer?](https://www.youtube.com/watch?v=VCUaaTWTomc) — Standarity · 4:18 · 1mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand CLAW, start by learning the foundational ideas of latent action representation learning and world models, which explain how actions and environment dynamics can be encoded and predicted from visual data. Next, grasp diffusion models for video generation, as CLAW uses these for future frame prediction. Then, study gradient reversal adversarial training and adversarial latent regularization to understand how CLAW ensures latent actions do not leak future observation information. Finally, explore the CLAW paper talk for a direct, concise explanation of the method.

### Latent action representation learning *(prerequisite)*
Latent action representation learning is about encoding actions as continuous variables in a latent space, learned directly from data like videos, without explicit action labels. This helps models understand and predict how actions affect the environment in a compact, meaningful way.

*How the paper uses it:* CLAW learns continuous latent action representations from unlabeled video to capture meaningful action semantics.

▶ [Shared Autonomy with Learned Latent Actions](https://www.youtube.com/watch?v=7BouKojzVyk) — Stanford ILIAD · 5:31 · 6y ago

### World models for control and planning *(prerequisite)*
World models are AI systems that learn to predict how environments evolve over time, especially in response to actions, enabling planning and control. Understanding world models helps grasp how CLAW predicts future frames conditioned on latent actions.

*How the paper uses it:* CLAW jointly learns a world model that predicts future frames conditioned on latent actions for planning and imitation.

▶ [What are World Models ?](https://www.youtube.com/watch?v=qulPOUiz-08) — New Machina · 5:22 · 1y ago

### Diffusion models for video generation *(prerequisite)*
Diffusion models generate data by gradually denoising from random noise to a clean sample, and have been adapted for video generation to predict future frames. CLAW uses a diffusion-based world model with causal attention masking for accurate video prediction.

*How the paper uses it:* CLAW employs diffusion-based video generation to model environment dynamics conditioned on latent actions.

▶ [Sander Dieleman - Diffusion models for image and video generation | ML in PL 2025](https://www.youtube.com/watch?v=qFIT3mSwWEk) — ML in PL · 51:52 · 7mo ago

### Gradient reversal adversarial training *(prerequisite)*
Gradient reversal adversarial training is a technique where gradients are reversed during backpropagation to encourage a model to learn representations invariant to certain information, often used to remove unwanted signals. CLAW uses this to prevent latent actions from encoding future observation information.

*How the paper uses it:* CLAW applies gradient reversal to adversarially regularize latent actions, discouraging future observation leakage.

▶ [What is a Gradient Reversal Layer?](https://www.youtube.com/watch?v=VCUaaTWTomc) — Standarity · 4:18 · 1mo ago

## Already in your library

- [World Models explained in 10min..](https://www.youtube.com/watch?v=ECWC-YlAk1o) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [Lecture 16 | Adversarial Examples and Adversarial Training](https://www.youtube.com/watch?v=CIfsB_EYsVI) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Stanford CS231N | Spring 2025 | Lecture 3: Regularization and Optimization](https://www.youtube.com/watch?v=dyNGd06MWn4) — also for: Few-Step Diffusion Language Models via Trajectory Self-Distillation (Vladimir Pavlovic)
- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Adversarial Machine Learning explained! | With examples.](https://www.youtube.com/watch?v=YyTyWGUUhmo) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)
- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [Stanford CS25: V5 I Transformers in Diffusion Models for Image Generation and Beyond](https://www.youtube.com/watch?v=vXtapCFctTI) — also for: NoiseCLR: A Contrastive Learning Approach for Unsupervised Discovery of Interpretable Directions in Diffusion Models (Pinar Yanardag)
- [11: Generative AI – Text-to-Image Models](https://www.youtube.com/watch?v=NQBhhRG-Pe4) — also for: “AI Watermarking”: Bridging Policy Discourse and Technical Capabilities (Sunoo Park)
- [Text-to-video models explained](https://www.youtube.com/watch?v=dECiAdfn2d4) — also for: PROBE: Diagnosing Residual Concept Capacity in Erased Text-to-Video Diffusion Models (Ping Liu)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [But how do AI images and videos actually work? | Guest video by Welch Labs](https://www.youtube.com/watch?v=iv-5mZ_9CPY) — also for: GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running (C. Karen Liu)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [Lec 12. Representation Learning: Similarity-Based](https://www.youtube.com/watch?v=yUh1fEGGdl4) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)
- [TUM AI Lecture Series - Building generative world models ...](https://www.youtube.com/watch?v=CkOSMqwvFiQ) — also for: HandMade: Spatial Prompting for Generative 3D Creation with Part-Labeled VR Sketches (Yotam I. Gingold)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [\[ML 2021 (English version)\] Lecture 27: Domain Adaptation](https://www.youtube.com/watch?v=8AKqH6V9kjE) — also for: Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment (Rajiv Bagai)
- [Gradient descent, how neural networks learn | Deep Learning Chapter 2](https://www.youtube.com/watch?v=IHZwWFHWa-w) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of CLAW's approach to learning continuous latent action representations and world models from unlabeled video. The beginner project focuses on implementing and visualizing the adversarial latent regularization concept on synthetic data. The intermediate project involves reimplementing CLAW's core latent action learning method on a publicly available video dataset and comparing it to a baseline. The advanced project extends CLAW by incorporating a memory mechanism to address its stated limitation in partially observable environments.

### Beginner — Adversarial Latent Regularization Visualization
*Effort: a weekend, ~8 hours*

You build a simple autoencoder model that encodes frame-to-frame transitions into a latent action space constrained on a unit sphere. You implement adversarial latent regularization using gradient reversal to discourage encoding future observation information in the latent actions. You visualize how the adversarial loss affects the latent space distribution and reconstruction quality.

**Why it shows you understood the paper:** This project demonstrates your grasp of the key adversarial latent regularization technique CLAW introduces to ensure latent actions do not leak future observation information, a core novelty of the paper.

**Grounded in:** Introduction of adversarial latent regularization to prevent future observation leakage in latent actions.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Matplotlib

**Data:** Synthetic video frame pairs generated by simple transformations (e.g., translation, rotation) to simulate frame transitions.

**Build it:**

1. Generate synthetic consecutive frame pairs simulating simple environment transitions.
2. Implement an autoencoder that encodes frame differences into a continuous latent action vector constrained on a unit sphere.
3. Implement a gradient reversal layer and an adversarial network that tries to predict future frame information from latent actions.
4. Train the autoencoder jointly with adversarial latent regularization to minimize future information leakage.
5. Visualize latent space distributions and reconstruction errors with and without adversarial regularization.

**Ships as:** A GitHub repo with code, visualizations of latent space before and after adversarial regularization, and a README explaining the method and results.

**Stretch goal:** Add a simple imitation learning policy that uses the learned latent actions to reproduce synthetic action sequences.

### Intermediate — Reimplementation of CLAW Latent Action Learning
*Effort: 2 weekends, ~20 hours*

You reimplement the core CLAW method to jointly learn continuous latent action representations and a diffusion-based world model from unlabeled video. You train on a publicly available video dataset of robotic or simulated environment interactions (e.g., RoboDesk from the cited third-party artifacts). You compare your model's latent action policy performance against a simple baseline like a VAE-based latent action model on a downstream imitation learning task.

**Why it shows you understood the paper:** This project shows you can reproduce the paper's main contribution of end-to-end latent action and world model learning from unlabeled video, and evaluate its effectiveness quantitatively against a baseline.

**Grounded in:** First end-to-end self-supervised framework to jointly learn continuous latent action representations and a world model from unlabeled video.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Use RoboDesk benchmark dataset from https://github.com/google-research/robodesk as a substitute for the paper's unlabeled video data.

**Build it:**

1. Download and preprocess the RoboDesk dataset to extract consecutive video frames.
2. Implement the Latent Action Model (LAM) that encodes frame transitions into continuous latent actions on a unit sphere.
3. Implement a diffusion-based world model with causal attention masking to predict future frames conditioned on latent actions and initial observations.
4. Implement adversarial latent regularization with gradient reversal to prevent future observation leakage.
5. Train the model end-to-end on the dataset.
6. Evaluate the learned latent action policy on an imitation learning task and compare success rates to a baseline VAE latent action model.

**Verified links from the paper:**

- <https://github.com/google-research/robodesk> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with training code, evaluation scripts, plots comparing imitation learning success rates, and a detailed README describing the implementation and results.

**Stretch goal:** Add nearest neighbor retrieval visualization in latent space to demonstrate semantic clustering of actions.

### Advanced — Memory-Augmented CLAW for Partially Observable Environments
*Effort: 3+ weeks*

You extend the CLAW framework by incorporating an explicit memory mechanism (e.g., recurrent neural network or transformer memory) into the diffusion-based world model to address the limitation of lacking memory of past generations. You train and evaluate this memory-augmented CLAW on a partially observable video environment dataset, assessing improvements in long-horizon prediction accuracy and planning success.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of CLAW's architecture and the challenges in partially observable settings, while contributing a novel extension.

**Grounded in:** Incorporating explicit memory mechanisms to improve long-horizon consistency and performance in partially observable settings.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Use RoboDesk or a similar partially observable video dataset from the cited third-party artifacts as a proxy for testing memory-augmented models.

**Build it:**

1. Reimplement the baseline CLAW model from the intermediate project.
2. Design and integrate a memory module (e.g., LSTM, GRU, or transformer-based memory) into the diffusion-based world model to retain past frame/action context.
3. Modify training to incorporate memory states and causal attention over past frames.
4. Train the memory-augmented model on the dataset.
5. Evaluate improvements in long-horizon frame prediction accuracy and planning success rates compared to the baseline CLAW model.
6. Document the architecture changes, training procedure, and quantitative/qualitative results.

**Verified links from the paper:**

- <https://github.com/google-research/robodesk> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with extended CLAW code, evaluation scripts showing improved performance in partially observable settings, and a comprehensive README detailing the memory integration and results.

**Stretch goal:** Experiment with fully unsupervised mapping of latent actions to executable controls to reduce reliance on labeled action data.

_The paper authors have not released their code or dataset; the intermediate and advanced projects rely on the RoboDesk dataset from the cited third-party artifacts as a substitute, which may differ in complexity and domain from the original CLAW training data._
