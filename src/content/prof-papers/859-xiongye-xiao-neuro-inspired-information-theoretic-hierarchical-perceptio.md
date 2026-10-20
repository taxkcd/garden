---
title: "859 · Neuro-Inspired Information-Theoretic Hierarchical Perception for Multimodal Learning — Xiongye Xiao"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xiongye-xiao"
source_hash: "5f92ff516d7993991250fb6d2b609073a56edbea09c6759c3c3eafbec2fa5bfa"
sequence: 859
generator: "outreach-garden: managed"
---

# 859 · Neuro-Inspired Information-Theoretic Hierarchical Perception for Multimodal Learning

## At a glance

- **Professor:** Xiongye Xiao
- **Institution:** University of Tennessee
- **Paper:** [Neuro-Inspired Information-Theoretic Hierarchical Perception for Multimodal Learning](https://arxiv.org/pdf/2404.09403)
- **Authors:** Xiongye Xiao, Gengshuo Liu, Gaurav Gupta, Defu Cao, Shixuan Li, Yaxing Li, Tianqing Fang, Mingxi Cheng, Paul Bogdan
- **Year:** 2024

## Paper overview

This paper introduces a novel model called Information-Theoretic Hierarchical Perception (ITHP) inspired by how the human brain processes information from multiple sources. Unlike traditional models that treat all data sources equally, ITHP designates a primary data source and treats others as supporting detectors to distill information efficiently. Using principles from information theory, it creates compact representations that retain relevant information while minimizing redundancy. The model shows superior performance on tasks like sarcasm detection and sentiment analysis, even surpassing human-level benchmarks on some datasets.

### Why it matters

**Research problem:** Effectively integrating and processing multimodal data (e.g., text, audio, video) to achieve accurate perception and understanding in autonomous and cyber-physical systems is challenging due to high dimensionality, complex correlations, and noisy data. Existing fusion methods often do not reflect the hierarchical and selective information processing observed in the human brain.

**Why it matters:** Multimodal learning is critical for autonomous systems and AI applications that require comprehensive understanding from diverse data sources. Improving fusion methods can lead to more robust, interpretable, and efficient AI models, enhancing performance in tasks like sentiment analysis, sarcasm detection, and other perception-related applications.

**Key contributions:**

- Proposed a novel neuro-inspired multimodal fusion mechanism that designates a prime modality as input and treats other modalities as detectors, reflecting hierarchical brain processing.
- Developed the ITHP model based on the information bottleneck principle to construct compact and informative latent states for multimodal data fusion.
- Integrated ITHP with advanced neural architectures, including DeBERTa, enhancing compatibility with existing multimodal learning frameworks.
- Demonstrated that ITHP outperforms state-of-the-art models and surpasses human-level performance on multimodal sentiment analysis tasks.
- Provided extensive experimental validation on multiple datasets (MUStARD, CMU-MOSI, CMU-MOSEI) showing consistent improvements.

## About the professor

**Xiongye Xiao** — Assistant Professor, Min H. Kao Department of Electrical Engineering and Computer Science, University of Tennessee.

Research interests: Artificial Intelligence and Neural Operators, Network Science and Complex Systems, AI for Science (Neuroscience, Materials Modeling), Science for AI (Biologically Inspired and Physics-Informed AI)

### Research links

- [Faculty/profile page](https://eecs.utk.edu/people/xiongye-xiao)
- [Professor website](https://xiongyexiao.com/)
- [Lab website](https://dual.xiongyexiao.com/)
- [Google Scholar](https://scholar.google.com/citations?user=AvIxA64AAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Information Theory for Machine Learning
**The paper assumes:** information theory, mutual information, information bottleneck principle, information-theoretic machine learning
**Already in this field?** Skip this entirely if you already understand the basics of information theory and its application in machine learning, especially the information bottleneck method.

This background focuses on Information Theory for Machine Learning, essential for understanding the Information-Theoretic Hierarchical Perception (ITHP) model in the paper. The rigorous course offers a deep, structured university-level introduction to core concepts like entropy, mutual information, and compression, while the fast track provides a concise, intuition-driven overview suitable for quickly grasping the fundamentals without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Information Theory](https://www.youtube.com/playlist?list=PLgMDNELGJ1CYS-8dlMGPIaowVfeda4nUj) — NPTEL - Indian Institute of Science, Bengaluru · 68 videos

**Watch only this:** Episodes 1-20 ("Information Theory - Intro" through "20 - Properties of KL divergence"), about 7 hours — these cover the fundamental concepts of information, entropy, probability, compression, and KL divergence essential for understanding the information bottleneck principle used in ITHP.

*Why it unblocks this paper:* This NPTEL course from the Indian Institute of Science, Bengaluru, provides a comprehensive and authoritative university-level treatment of information theory concepts foundational to the ITHP model, including entropy, mutual information, and compression principles.

*If you want all of it:* About 21.9 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Information Theory](https://www.youtube.com/playlist?list=PLMLlWB4PwEaVvQwxa3eH0Vvj5rLDasdL5) — Quang Trung Đặng · 18 videos · 6.1h across 18 episodes

**Watch only this:** Episodes 1-6 ("But what is a Fourier series?" through "Binomial distributions | Probabilities of probabilities, part 1"), about 2 hours — these episodes cover the basics of information, probability, and foundational concepts needed to grasp the paper's theoretical framework.

*Why it unblocks this paper:* This playlist by Quang Trung Đặng offers clear, visual explanations of key information theory concepts relevant to machine learning, providing an accessible and time-efficient introduction to the core ideas behind information bottleneck and mutual information.

*If you want all of it:* About 6.1 hours across all 18 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Neuro-Inspired Information-Theoretic Hierarchical Perception for Multimodal Learning,' start by grounding yourself in the foundational concepts of the Information Bottleneck principle, which underpins the model's theoretical framework. Next, explore the principles of Multimodal Learning and Fusion to grasp how diverse data sources are integrated. Then, study Hierarchical Neural Network Architectures to appreciate the layered latent state design. Follow this with insights into Neuro-Inspired AI Models to contextualize the brain-inspired design philosophy. Finally, focus on the core concept of Information-Theoretic Hierarchical Perception, culminating with the authors' own talks or closely related advanced research presentations to connect theory with their novel contributions.

### Information Bottleneck Principle *(prerequisite)*
The Information Bottleneck (IB) principle is fundamental to understanding how the ITHP model balances compression of input data with retention of relevant information. This principle provides the theoretical basis for constructing compact latent representations that distill essential features from multimodal inputs.

*How the paper uses it:* ITHP leverages the IB principle to optimize mutual information terms for effective multimodal fusion.

▶ [Direct and dual Information Bottleneck frameworks for Deep Learning - Tali Tishby](https://www.youtube.com/watch?v=TisObdHW8Wo) — Institute for Advanced Study · 1:10:02 · 6y ago

### Multimodal Learning and Fusion *(prerequisite)*
Multimodal learning involves integrating and processing data from multiple modalities such as text, audio, and video. Understanding the challenges and existing fusion strategies is critical to appreciate how ITHP innovates by designating a prime modality and treating others as detectors in a hierarchical manner.

*How the paper uses it:* ITHP addresses multimodal fusion challenges by modeling hierarchical and selective information processing inspired by the brain.

▶ [What nobody tells you about MULTIMODAL Machine Learning! 🙊 THE definition.](https://www.youtube.com/watch?v=jReaoJWdO78) — AI Coffee Break with Letitia · 10:59 · 6y ago

### Hierarchical Neural Network Architectures *(prerequisite)*
Hierarchical neural architectures organize latent representations in layered structures, enabling incremental abstraction and information distillation. This concept is key to understanding how ITHP constructs a hierarchy of latent states to process multimodal data efficiently.

*How the paper uses it:* ITHP's hierarchical latent states reflect the layered processing inspired by neural architectures in the brain.

▶ [Lecture "Hierarchical (Part 1, Hierarchical Models)" of "Analyzing Software using Deep Learning"](https://www.youtube.com/watch?v=UQh3TYqWZME) — Michael Pradel · 27:47 · 6y ago

### Neuro-Inspired AI Models *(prerequisite)*
Neuro-inspired AI models draw design principles from neuroscience to build interpretable and robust AI systems. Familiarity with this area helps contextualize ITHP's approach of mimicking hierarchical and selective brain information processing for multimodal fusion.

*How the paper uses it:* ITHP exemplifies neuro-inspired AI by reflecting brain-like hierarchical perception in multimodal learning.

▶ [Colloquium: Brain-inspired sparse network science for next generation efficient and sustainable AI](https://www.youtube.com/watch?v=yq9_VkCkhAI) — IAIFI: Institute for AI & Fundamental Interactions · Streamed 7mo ago

### Information-Theoretic Hierarchical Perception
This core concept encapsulates the novel multimodal fusion mechanism proposed by the paper, which hierarchically distills information using information-theoretic principles. Understanding this concept is essential to grasp the unique contributions and performance gains of the ITHP model.

*How the paper uses it:* The paper's central contribution is the ITHP model, which embodies information-theoretic hierarchical perception for multimodal learning.

▶ [Bill et al Structure in motion visual motion perception as online hierarchical inference](https://www.youtube.com/watch?v=-SiTV7ypNrM) — Neuromatch Conference · 4y ago

### Paper Authors' Talk *(paper-talk search result; attribution unverified)*
Direct talks by the authors provide the most precise and insightful exposition of their novel ITHP model, experimental results, and future directions. Such talks often include nuanced discussions not fully captured in the paper.

*How the paper uses it:* The authors' own presentations offer authoritative insights into the design and impact of ITHP.

▶ [Theoretic analyses of internal model dynamics in the brain](https://www.youtube.com/watch?v=4KCtllrKXCU) — Simons Institute for the Theory of Computing · 32:24 · Streamed 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the foundational concepts of multimodal learning and fusion, which explain how different types of data are combined. Then, grasp the information bottleneck principle, which underpins the model's approach to balancing information compression and retention. Next, explore hierarchical neural network architectures to understand the layered processing structure. Finally, connect these ideas to neuro-inspired AI models before diving into the core concept of Information-Theoretic Hierarchical Perception (ITHP) as proposed in the paper.

### Multimodal Learning and Fusion *(prerequisite)*
Multimodal learning involves integrating information from multiple data types like text, audio, and video to improve understanding and decision-making. Fusion techniques combine these modalities effectively, which is essential for models like ITHP that rely on hierarchical and selective processing.

*How the paper uses it:* ITHP addresses multimodal fusion by designating a prime modality and treating others as detectors, improving integration efficiency.

▶ [What nobody tells you about MULTIMODAL Machine Learning! 🙊 THE definition.](https://www.youtube.com/watch?v=jReaoJWdO78) — AI Coffee Break with Letitia · 10:59 · 6y ago

### Information Bottleneck Principle *(prerequisite)*
The information bottleneck principle is a framework that helps models compress input data while preserving the most relevant information for a task. It balances minimizing redundancy and maximizing useful information, which is critical for efficient representation learning.

*How the paper uses it:* ITHP uses the information bottleneck principle to create compact latent states that retain relevant multimodal information while reducing redundancy.

▶ [Direct and dual Information Bottleneck frameworks for Deep Learning - Tali Tishby](https://www.youtube.com/watch?v=TisObdHW8Wo) — Institute for Advanced Study · 1:10:02 · 6y ago

### Hierarchical Neural Network Architectures *(prerequisite)*
Hierarchical neural networks process data through multiple layers or levels, allowing incremental abstraction and refinement of information. This layered approach mirrors how complex information can be distilled progressively.

*How the paper uses it:* ITHP employs a hierarchical structure of latent states to incrementally distill information from the prime and supporting modalities.

▶ [Hierarchical Neural Networks](https://www.youtube.com/watch?v=xHxCT1GLpPk) — Joseph Lazarus · 9:36 · 4y ago

### Neuro-Inspired AI Models *(prerequisite)*
Neuro-inspired AI models draw design principles from how the human brain processes information, aiming for more interpretable and efficient AI. These models often incorporate hierarchical and selective processing mechanisms.

*How the paper uses it:* ITHP is neuro-inspired, mimicking the brain's hierarchical and selective processing by designating a prime modality and supporting detectors.

▶ [Colloquium: Brain-inspired sparse network science for next generation efficient and sustainable AI](https://www.youtube.com/watch?v=yq9_VkCkhAI) — IAIFI: Institute for AI & Fundamental Interactions · Streamed 7mo ago

## Already in your library

- [Information Theory Basics](https://www.youtube.com/watch?v=bkLHszLlH34) — also for: Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts (Nathan D. Cahill)
- [Information Theory of Deep Learning, Naftali Tishby](https://www.youtube.com/watch?v=XL07WEc2TRI) — also for: Near Real-time Learning and Extraction of Attack Models from Intrusion Alerts (Nathan D. Cahill)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [CS 198-126: Lecture 22 - Multimodal Learning](https://www.youtube.com/watch?v=_Y-D5jrX7IQ) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [MedAI #56: Fundamentals of Multimodal Representation Learning | Paul Pu Liang](https://www.youtube.com/watch?v=ybJXOtJNpNw) — also for: Global and Local Semantic Completion Learning for Vision-Language Pre-training (Liu Liu)
- [Lecture 3.1 - Multimodal Representation Fusion (CMU Multimodal Machine Learning, Fall 2023)](https://www.youtube.com/watch?v=WL2AlMIupC4) — also for: Allocation Before Ranking: Decoupled Token Compression for OmniLLMs (Miao Yin)
- [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Lecture 4 – Multimodal Alignment (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=kixc1mh55yY) — also for: UniDetect: LLM-Driven Universal Fraud Detection across Heterogeneous Blockchains (Dan Lin)
- [Multimodal fusion explained: how machines learn to “see, hear, and understand” together](https://www.youtube.com/watch?v=eg9PSb7FoYU) — also for: Zero-Shot Relational Learning for Multimodal Knowledge Graphs (Shichao Pei)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Lec-14: Hierarchical Clustering | Agglomerative vs Divisive with examples](https://www.youtube.com/watch?v=zxQF8Rmpk1M) — also for: From Overload to Insight: Scaffolding Creative Ideation through Structuring Inspiration (Aniket Kittur)
- [BEST Neuro Symbolic AI EXPLAINER](https://www.youtube.com/watch?v=6xGfrLBrDfo) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the core ideas of the ITHP model from the paper. Starting with a simple implementation of the information bottleneck principle on multimodal data, you then build and run the authors' ITHP model on a benchmark dataset to reproduce key results. Finally, you extend the model to address its limitation of fixed modality ordering by experimenting with dynamic modality ranking, exploring a future direction proposed by the authors.

### Beginner — Information Bottleneck on Multimodal Sentiment Features
*Effort: a weekend, ~8 hours*

You implement a simplified version of the information bottleneck (IB) principle to compress and distill information from two modalities (e.g., text and audio features) for sentiment classification. Using pre-extracted features from a public multimodal sentiment dataset, you create a small neural network that learns compact latent representations balancing compression and relevance.

**Why it shows you understood the paper:** This project demonstrates your grasp of the IB principle central to ITHP, showing you can implement and tune the trade-off between compression and information retention on multimodal data, a key mechanism in the paper.

**Grounded in:** The model uses the information bottleneck principle to balance compression and retention of relevant information.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** Use the CMU-MOSI dataset's publicly available pre-extracted text and audio features as a substitute for the paper's data.

**Build it:**

1. Download CMU-MOSI pre-extracted features for text and audio modalities.
2. Implement a simple IB neural network with an encoder compressing input features into a latent state and a decoder predicting sentiment labels.
3. Train the model optimizing the IB objective balancing mutual information terms.
4. Evaluate classification accuracy and visualize latent space compression effects.
5. Document the implementation and results in a README.

**Ships as:** A GitHub repo with code and notebook showing IB-based multimodal compression and sentiment classification, with plots illustrating the compression-relevance trade-off.

**Stretch goal:** Add a third modality (e.g., visual features) and observe how IB compression scales.

### Intermediate — Reproduce ITHP on MUStARD Sarcasm Detection
*Effort: 1-3 weekends*

You clone and run the authors' ITHP implementation from their official repository, integrating DeBERTa for text feature extraction. You train and evaluate the model on the MUStARD sarcasm detection dataset, comparing ITHP's performance against a baseline multimodal fusion model like Self-MM.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand their hierarchical fusion mechanism, and reproduce key performance improvements, demonstrating comprehension of the model's architecture and training.

**Grounded in:** ITHP achieved weighted precision, recall, and F-score improvements of over 11% compared to baseline models in sarcasm detection on MUStARD dataset.

**Tech stack:** Python 3.11, PyTorch, DeBERTa, Git

**Data:** Use the MUStARD dataset as used in the paper; the authors' codebase includes scripts for data loading and preprocessing.

**Build it:**

1. Clone the authors' ITHP repository from https://github.com/joshuaxiao98/ITHP.
2. Set up the environment and install dependencies including DeBERTa from https://github.com/microsoft/DeBERTa.
3. Download and prepare the MUStARD dataset following the repo instructions.
4. Train the ITHP model on MUStARD, monitoring training metrics.
5. Run evaluation and compare results to the baseline Self-MM model.
6. Write a report summarizing results and insights.

**Verified links from the paper:**

- <https://github.com/joshuaxiao98/ITHP> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/microsoft/DeBERTa> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/thuiar/Self-MM> — released by the paper's authors

**Ships as:** A GitHub repo fork with scripts to train and evaluate ITHP on MUStARD, reproducing reported metrics and comparing to baseline.

**Stretch goal:** Experiment with tuning the Lagrange multipliers controlling compression to observe effects on performance.

### Advanced — Dynamic Modality Ordering for ITHP
*Effort: a few weeks*

You extend the ITHP model to dynamically learn the optimal modality hierarchy instead of relying on a preset order. This involves implementing a reinforcement learning or meta-learning component that selects modality order during training to optimize performance. You evaluate this extension on CMU-MOSEI or CMU-MOSI datasets to test robustness and compare against fixed-order ITHP.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of the hierarchical fusion mechanism and the challenges of modality ordering, while applying advanced machine learning techniques.

**Grounded in:** Develop methods to efficiently learn or infer optimal modality ordering within the deep learning framework to reduce reliance on preset orders.

**Tech stack:** Python 3.11, PyTorch, DeBERTa, Reinforcement Learning libraries (e.g., Stable Baselines3)

**Data:** Use CMU-MOSEI or CMU-MOSI datasets as in the paper; data loading scripts available in the authors' repository.

**Build it:**

1. Fork and clone the authors' ITHP repository.
2. Implement a module that parameterizes modality ordering and integrates with ITHP training.
3. Incorporate a reinforcement learning or meta-learning algorithm to optimize modality order selection based on validation performance.
4. Train the extended ITHP model on CMU-MOSEI or CMU-MOSI datasets.
5. Evaluate and compare results with fixed-order ITHP baselines.
6. Document the methodology, challenges, and results.

**Verified links from the paper:**

- <https://github.com/joshuaxiao98/ITHP> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/microsoft/DeBERTa> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the extended ITHP model supporting dynamic modality ordering, training scripts, and evaluation reports demonstrating improved or comparable performance without preset modality order.

**Stretch goal:** Explore integrating complementary information from secondary modalities more deeply during dynamic ordering.
