---
title: "840 · HAMoBE: Hierarchical and Adaptive Mixture of Biometric Experts for Video-based Person ReID — Feng Liu"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-feng-liu"
source_hash: "a8cdf0fa775a53128edf45c644905e6c670f1d3ebe30d72a1c4789a71b900d68"
sequence: 840
generator: "outreach-garden: managed"
---

# 840 · HAMoBE: Hierarchical and Adaptive Mixture of Biometric Experts for Video-based Person ReID

## At a glance

- **Professor:** Feng Liu
- **Institution:** Drexel University
- **Paper:** [HAMoBE: Hierarchical and Adaptive Mixture of Biometric Experts for Video-based Person ReID](https://arxiv.org/pdf/2508.05038)
- **Authors:** Yiyang Su, Yunping Shi, Feng Liu, Xiaoming Liu
- **Year:** 2025

## Paper overview

This paper presents HAMoBE, a new method for identifying people across video footage by dynamically combining different biometric features such as body shape, appearance, and gait. It uses a hierarchical mixture of expert models and a gating network to adaptively weight these features based on video context, improving accuracy especially under challenging conditions like clothing changes.

### Why it matters

**Research problem:** Video-based person re-identification (ReID) requires accurately matching individuals across different camera views and video sequences, which is challenging due to variations in appearance, clothing, lighting, and motion. Existing methods often fail to dynamically select and integrate the most discriminative biometric features (long-term body shape, short-term appearance, temporal gait) for robust identification.

**Why it matters:** Robust video-based person ReID is critical for surveillance, security, and public safety applications in dynamic and unconstrained environments. Improving adaptability and accuracy under varying conditions such as clothing changes and motion dynamics enhances the reliability of these systems.

**Key contributions:**

- Proposed HAMoBE, a hierarchical and adaptive mixture of biometric experts framework for video-based person ReID.
- Introduced a two-level expert architecture that distills multi-layer features into disentangled long-term, short-term, and temporal biometric attributes.
- Developed a novel dual-input gating network that dynamically adjusts expert contributions based on video pair context.
- Demonstrated significant performance improvements over state-of-the-art methods on multiple challenging video ReID benchmarks, including scenarios with clothing changes.

## About the professor

**Feng Liu** — Assistant Professor, Computer Science, Drexel University.

Research interests: AI + X: Education; Healthcare. 3D Computer Vision: 3D object/scene understanding; 3D generation; VR/AR; 3D vision+language understanding. 3D Human Digitization: Modeling, reconstruction and rendering; Biomechanics. Generative AI: Explainability, generalization and controllability in generative models; DeepFake detection. Biometric Recognition: Face and gait recognition; Person re-identification

### Research links

- [Faculty/profile page](https://drexel.edu/cci/about/directory/L/Liu-Feng)
- [Professor website](https://liufeng2915.github.io/)
- [Lab website](https://vilab-group.com/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Mixture of Experts models
**The paper assumes:** mixture of experts models, gating networks, ensemble learning in machine learning
**Already in this field?** Skip this entirely if you already understand mixture of experts architectures and gating mechanisms in machine learning.

To fully understand the HAMoBE paper's core methodology, which centers on hierarchical and adaptive mixture of experts (MoE) models and gating networks, it is essential to grasp how MoE architectures function and how expert contributions are dynamically weighted. The rigorous course option offers a deep, structured university-level lecture series on Transformers and large language models, which cover MoE concepts in detail. The fast track provides a concise, focused explainer playlist specifically on MoE models and related AI architectures, ideal for quickly building intuition and practical understanding without committing to a full course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-3, about 5.3 hours — covering Transformer basics, Transformer-based models, and large language models to understand MoE architectures and gating networks.

*Why it unblocks this paper:* Stanford CME295: Transformers and Large Language Models I Autumn 2025 is a rigorous university lecture series that covers the evolution of Transformer architectures and includes detailed discussions on mixture of experts models and gating mechanisms, directly relevant to HAMoBE's hierarchical MoE design.

*If you want all of it:* 16.2 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [LLM & AI Papers Explained from Scratch](https://www.youtube.com/playlist?list=PLK02UG8mKHiM) — Mehdi Hosseini Moghadam · 13 videos · 19.1h across 13 episodes

**Watch only this:** Episode 12: 'Mixtral 8x7B Explained: How Mixture of Experts Works – Full Paper', about 1.5 hours — this episode specifically explains MoE architectures and gating networks in detail.

*Why it unblocks this paper:* The 'LLM & AI Papers Explained from Scratch' playlist by Mehdi Hosseini Moghadam includes a dedicated episode on Mixture of Experts (Mixtral 8x7B Explained) that provides a focused, clear explanation of MoE models and gating, perfectly suited for quickly grasping the key concepts behind HAMoBE's approach.

*If you want all of it:* 19.1 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HAMoBE paper on hierarchical and adaptive mixture of biometric experts for video-based person re-identification, start by building foundational knowledge on Mixture of Experts models, video-based person re-identification challenges, biometric feature representation, and gating networks in deep learning. Then, explore hierarchical feature learning to grasp the two-level expert architecture. Finally, focus on the core concept by viewing the authors' own talk or the closest available research talks to gain insight into HAMoBE's novel adaptive framework.

### Mixture of Experts models *(prerequisite)*
Understanding the Mixture of Experts (MoE) architecture is critical as HAMoBE employs a hierarchical MoE design to disentangle and integrate biometric features. The selected video provides a rigorous introduction to the original MoE paper by Google researchers, explaining the motivation and mechanisms behind sparsely-gated MoE layers foundational to large-scale expert models.

*How the paper uses it:* HAMoBE's hierarchical mixture of biometric experts is built upon the principles of MoE architectures.

▶ [Introduction to Mixture-of-Experts | Original MoE Paper Explained](https://www.youtube.com/watch?v=kb6eH0zCnl8) — AI Papers Academy · 4:42 · 2y ago

### Video-based person re-identification *(prerequisite)*
Grasping the challenges and goals of video-based person re-identification is essential to appreciate HAMoBE's contributions. The chosen video is a university seminar that presents a state-of-the-art approach with adaptive knowledge accumulation, providing a research-level perspective on the problem domain.

*How the paper uses it:* HAMoBE addresses core challenges in video-based person ReID by adaptively integrating biometric features.

▶ [CVPR 2021 Paper-Lifelong Person Re-Identification via Adaptive Knowledge Accumulation](https://www.youtube.com/watch?v=DRLyGaQ6_fg) — pu peter · 4:57 · 5y ago

### Biometric feature representation *(prerequisite)*
Understanding how biometric features such as body shape, appearance, and gait are extracted and represented is fundamental to HAMoBE's expert design. The selected lecture from Purdue University offers an in-depth academic introduction to biometric technologies, covering various modalities and system design considerations.

*How the paper uses it:* HAMoBE leverages disentangled biometric features including long-term body shape, short-term appearance, and temporal gait.

▶ [2005-08-24 CERIAS - An Introduction to Biometric Technologies - Stephen Elliott](https://www.youtube.com/watch?v=xpcdYPEFH8Q) — Purdue CERIAS · 49:49 · 14y ago

### Gating networks in deep learning *(prerequisite)*
The dual-input gating network in HAMoBE dynamically weights expert outputs based on video pair context. Understanding gating mechanisms in neural networks, especially gated recurrent units, is crucial. The chosen video is a comprehensive university lecture on GRUs, providing detailed insights into gated architectures relevant to gating networks.

*How the paper uses it:* HAMoBE's dual-input gating network adaptively adjusts expert contributions for robust feature fusion.

▶ [Gated Recurrent Unit | Deep Learning | GRU | CampusX](https://www.youtube.com/watch?v=QQfZAoNGQmE) — CampusX · 1:26:22 · 3y ago

### Hierarchical feature learning
HAMoBE employs a two-level hierarchical mixture of experts to extract and disentangle multi-layer features into distinct biometric attributes. The selected Google TechTalk provides a rigorous and foundational presentation on scalable learning and inference in hierarchical models, aligning well with HAMoBE's hierarchical feature extraction approach.

*How the paper uses it:* HAMoBE's two-level expert architecture relies on hierarchical feature learning to disentangle biometric features.

▶ [Scalable Learning and Inference in Hierarchical Models of...](https://www.youtube.com/watch?v=Ia4CT5E9TP4) — Google TechTalks · 53:15 · 19y ago

### HAMoBE paper talk *(paper-talk search result; attribution unverified)*
The best way to understand HAMoBE's novel contributions is through the authors' own presentation or a closely related research talk. Although no direct talk by the authors on HAMoBE is available, the closest relevant recent research talk on adaptive interaction architectures in human-AI complementarity provides insights into adaptive gating and expert mixture concepts relevant to HAMoBE's framework.

*How the paper uses it:* This talk covers adaptive interaction architectures that conceptually relate to HAMoBE's adaptive gating network and expert mixture design.

▶ [Babak Heydari: Beyond Model Alignment: Adaptive Interaction Architectures for H-AI Complementarity](https://www.youtube.com/watch?v=nNLoriZfLSI) — NSF AI Institute for Societal Decision Making · 21:27 · 6d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HAMoBE paper, start by learning the basics of biometric features, which are the foundational traits like body shape and gait used for identification. Next, grasp the challenges and goals of video-based person re-identification, which is the task HAMoBE aims to improve. Then, study Mixture of Experts models to understand the hierarchical expert architecture HAMoBE uses. Finally, learn about gating networks that dynamically weight expert outputs, which is key to HAMoBE's adaptive feature fusion.

### Biometric feature representation *(prerequisite)*
Biometric features are unique physical or behavioral traits used to identify individuals, such as body shape, appearance, and gait. Understanding how these features are extracted and represented helps in grasping how HAMoBE combines multiple biometrics for person re-identification.

*How the paper uses it:* HAMoBE dynamically integrates long-term body shape, short-term appearance, and temporal gait biometric features for robust video-based person ReID.

▶ [Biometric technology explained](https://www.youtube.com/watch?v=ED0mwYRj65A) — TechFrame · 4:37 · 3y ago

### Video-based person re-identification *(prerequisite)*
Video-based person re-identification involves matching individuals across different camera views and video sequences despite changes in appearance or environment. Learning the challenges and goals of this task provides context for why HAMoBE's adaptive approach is needed.

*How the paper uses it:* HAMoBE addresses the challenges of matching people across videos with varying conditions like clothing changes and motion dynamics.

▶ [How does Re-Identification work?](https://www.youtube.com/watch?v=8qNMrKc9meQ) — Video Analytics 101 · 5:09 · 3y ago

### Mixture of Experts models *(prerequisite)*
Mixture of Experts (MoE) models use multiple specialized sub-models (experts) and a gating mechanism to dynamically select or weight their outputs. This architecture allows models to adaptively focus on the most relevant features for a given input.

*How the paper uses it:* HAMoBE employs a hierarchical mixture of biometric experts to disentangle and combine different biometric features effectively.

▶ [Introduction to Mixture-of-Experts | Original MoE Paper Explained](https://www.youtube.com/watch?v=kb6eH0zCnl8) — AI Papers Academy · 4:42 · 2y ago

### Gating networks in deep learning *(prerequisite)*
Gating networks dynamically control how much each expert contributes to the final output based on the input context. Understanding gating mechanisms clarifies how HAMoBE adaptively fuses biometric features from video pairs.

*How the paper uses it:* HAMoBE uses a dual-input gating network to dynamically weight expert contributions based on the paired video inputs' context.

▶ [Gated Recurrent Unit | GRU | Explained in detail](https://www.youtube.com/watch?v=IBs8D8PWMc8) — Learn With Jay · 14:59 · 2y ago

### HAMoBE paper talk *(paper-talk search result; attribution unverified)*
A direct explanation from the authors provides insights into HAMoBE's hierarchical and adaptive mixture of biometric experts framework, highlighting its novel contributions and performance improvements.

*How the paper uses it:* This talk covers the HAMoBE framework and its adaptive expert mixture approach for video-based person ReID.

▶ [Babak Heydari: Beyond Model Alignment: Adaptive Interaction Architectures for H-AI Complementarity](https://www.youtube.com/watch?v=nNLoriZfLSI) — NSF AI Institute for Societal Decision Making · 21:27 · 6d ago

## Already in your library

- [Simple Explanation of Mixed Models (Hierarchical Linear ...](https://www.youtube.com/watch?v=5tOifM51ZOk) — also for: A Model-Agnostic Approach for Explaining the Predictions on Clustered Data (Jianhua Chen)
- [MoE Token Routing Explained: How Mixture of Experts Works ...](https://www.youtube.com/watch?v=CDnkFbW-uEQ) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Stanford CS336 Language Modeling from Scratch | Spring 2025 | Lecture 4: Mixture of experts](https://www.youtube.com/watch?v=LPv1KfUXLCo) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Stanford CS25: V1 I Mixture of Experts (MoE) paradigm and ...](https://www.youtube.com/watch?v=U8J32Z3qV8s) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [A Visual Guide to Mixture of Experts (MoE) in LLMs](https://www.youtube.com/watch?v=sOPDGQjFcuM) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [C5W3L07 Attention Model Intuition](https://www.youtube.com/watch?v=SysgYptB198) — also for: Leveraging large language models to predict antibiotic resistance in Mycobacterium tuberculosis (Christina Boucher)
- [Illustrated Guide to LSTM's and GRU's: A step by step explanation](https://www.youtube.com/watch?v=8HyCNIVRbSU) — also for: SURT 2.0: Advances in Transducer-based Multi-talker Speech Recognition (Sanjeev Khudanpur)
- [Illustrated Guide to Recurrent Neural Networks: Understanding the Intuition](https://www.youtube.com/watch?v=LHXXI4-IEns) — also for: Modeling human activity comprehension at human scale: prediction, segmentation, and categorization (Aaron F. Bobick)
- [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=iKWYLSVAtfM) — also for: Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications (Vaibhav V. Unhelkar)
- [StatQuest: Hierarchical Clustering](https://www.youtube.com/watch?v=7xHsRkOdVwo) — also for: Multi-Agent Sensor Data Collection with Attrition Risk (Jae C. Oh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of HAMoBE's hierarchical and adaptive mixture of biometric experts for video-based person re-identification. Starting with a focused implementation of the dual-input gating network mechanism, you then reimplement the core hierarchical MoE architecture on a public video ReID dataset to reproduce key metrics. Finally, you extend the model to incorporate background context cues, addressing a stated limitation of HAMoBE and exploring robustness improvements.

### Beginner — Dual-Input Gating Network Simulation
*Effort: a weekend, ~8 hours*

You build a simplified simulation of the dual-input gating network from HAMoBE that dynamically weights three biometric feature vectors (long-term, short-term, temporal) based on paired video input contexts represented as feature embeddings. The project focuses on implementing the gating mechanism and visualizing how weights adapt when one input is degraded or occluded.

**Why it shows you understood the paper:** This project demonstrates your grasp of HAMoBE's novel gating network design and its role in adaptively weighting biometric experts based on input quality and context, a key contribution of the paper.

**Grounded in:** Developed a novel dual-input gating network that dynamically adjusts expert contributions based on the paired video inputs' context to optimize matching.

**Tech stack:** Python 3.11, PyTorch, Matplotlib

**Data:** Synthetic paired feature vectors simulating long-term, short-term, and temporal biometric features with controlled noise and occlusion patterns.

**Build it:**

1. Implement a PyTorch module that takes two sets of three feature vectors each (simulating paired video inputs) and outputs adaptive weights for each expert.
2. Design synthetic feature vectors representing long-term, short-term, and temporal biometrics with varying noise levels to simulate occlusion or quality degradation.
3. Train or heuristically set gating network parameters to produce meaningful weight distributions based on input quality asymmetry.
4. Visualize gating weights under different input scenarios to show adaptive weighting behavior.
5. Write a README explaining the gating mechanism and how the simulation relates to HAMoBE's design.

**Ships as:** A GitHub repo with code implementing the gating network simulation, example scripts generating visualizations of adaptive weights, and a README linking the implementation to the paper's gating network concept.

**Stretch goal:** Add a small experiment to quantify how gating weights correlate with input degradation severity, mimicking the paper's analysis of gating adaptation.

### Intermediate — Hierarchical Mixture of Experts for Video Person ReID
*Effort: 2 weekends, ~20 hours*

You reimplement the core HAMoBE hierarchical mixture of biometric experts architecture on the MARS video-based person ReID dataset (a well-known public benchmark). The project extracts multi-layer features from a frozen pretrained vision model (e.g., CLIP or ResNet), implements two-level expert modules to disentangle long-term, short-term, and temporal features, and integrates a dual-input gating network to fuse expert outputs. You compare performance against a simple baseline using only appearance features and report mAP and top-1 accuracy.

**Why it shows you understood the paper:** This project proves you can reproduce HAMoBE's core hierarchical MoE design and adaptive fusion mechanism, and quantitatively evaluate its benefit on a standard video ReID benchmark, mirroring the paper's main experimental setup.

**Grounded in:** Proposed HAMoBE, a hierarchical and adaptive mixture of biometric experts framework for video-based person ReID; demonstrated significant performance improvements over state-of-the-art methods on multiple challenging video ReID benchmarks, including scenarios with clothing changes.

**Tech stack:** Python 3.11, PyTorch, Torchvision, NumPy, OpenCV

**Data:** MARS dataset, a public large-scale video-based person ReID benchmark used in the paper for evaluation.

**Build it:**

1. Download and preprocess the MARS dataset for video person ReID tasks.
2. Extract multi-layer frame features using a frozen pretrained vision model such as CLIP or ResNet.
3. Implement the first-level expert modules to extract low-level features from multi-layer representations.
4. Implement the second-level experts to disentangle features into long-term, short-term, and temporal biometric attributes.
5. Build the dual-input gating network to dynamically weight and fuse expert outputs based on paired video inputs.
6. Train the model end-to-end (except frozen backbone) and evaluate mAP and top-1 accuracy.
7. Implement a baseline model using only appearance features for comparison.
8. Document results and compare with HAMoBE's reported improvements.

**Ships as:** A GitHub repository containing the full implementation, training scripts, evaluation code, and a detailed README reporting quantitative results and linking them to HAMoBE's core contributions.

**Stretch goal:** Add ablation studies to show the impact of hierarchical MoE design and gating network by disabling components and measuring performance drops.

### Advanced — Incorporating Background Context into HAMoBE for Robust ReID
*Effort: 3+ weeks*

You extend the HAMoBE framework by integrating background and contextual cues into the hierarchical mixture of biometric experts to improve robustness in cluttered or occluded environments, addressing a stated limitation of the paper. This involves designing an additional expert module to extract background features and modifying the gating network to consider these cues when weighting experts. You evaluate the extended model on a subset of the MARS dataset with artificially added clutter or occlusion and analyze performance improvements.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of HAMoBE's architecture and limitations by implementing a genuine extension that tackles a key future direction proposed by the authors, showing initiative and research potential.

**Grounded in:** HAMoBE does not incorporate background information, which may reduce effectiveness in cluttered or occluded environments; future directions include incorporating background and contextual cues to improve robustness in cluttered scenes.

**Tech stack:** Python 3.11, PyTorch, Torchvision, NumPy, OpenCV

**Data:** MARS dataset with synthetic background clutter or occlusion added to test robustness improvements.

**Build it:**

1. Review HAMoBE's hierarchical MoE and gating network implementation from the intermediate project.
2. Design and implement an additional expert module that extracts background/contextual features from video frames.
3. Modify the dual-input gating network to incorporate background expert outputs when computing expert weights.
4. Create a data augmentation pipeline to add synthetic clutter or occlusion to MARS video frames to simulate challenging environments.
5. Train and evaluate the extended model on the augmented dataset, comparing performance against the original HAMoBE implementation.
6. Analyze results to assess robustness gains and document findings in the README.

**Ships as:** A GitHub repo with the extended HAMoBE implementation including background expert, augmented dataset scripts, evaluation results, and a comprehensive README discussing the extension and its impact.

**Stretch goal:** Explore privacy-preserving techniques such as feature obfuscation for background cues to address ethical concerns mentioned in the paper.
