---
title: "688 · SSL-Cleanse: Trojan Detection and Mitigation in Self-Supervised Learning — Mengxin Zheng"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mengxin-zheng"
source_hash: "d8322e7e94a9a254f2d214f8a3fd0a5cbf96abc3e99b5d86e986f9f33c664048"
sequence: 688
generator: "outreach-garden: managed"
---

# 688 · SSL-Cleanse: Trojan Detection and Mitigation in Self-Supervised Learning

## At a glance

- **Professor:** Mengxin Zheng
- **Institution:** University of Central Florida
- **Paper:** [SSL-Cleanse: Trojan Detection and Mitigation in Self-Supervised Learning](https://arxiv.org/pdf/2303.09079)
- **Authors:** Mengxin Zheng, Jiaqi Xue, Zihao Wang, Xun Chen, Qian Lou, Lei Jiang, Xiaofeng Wang
- **Year:** 2024

## Paper overview

This paper presents SSL-Cleanse, a method to detect and remove hidden Trojan backdoor attacks in self-supervised learning (SSL) image encoders. These attacks embed malicious triggers that cause models to misclassify inputs when triggered, while behaving normally otherwise. SSL-Cleanse works without needing labeled data or knowledge of downstream tasks, using clustering and trigger reconstruction techniques to identify and mitigate these threats, preserving model accuracy.

### Why it matters

**Research problem:** Self-supervised learning encoders are vulnerable to Trojan backdoor attacks that are difficult to detect because they operate covertly, spread across users and devices, and the downstream tasks or labels are often unknown or unavailable. Existing detection methods for supervised learning do not effectively detect these attacks in SSL encoders.

**Why it matters:** Trojaned SSL encoders can be widely distributed and fine-tuned into downstream classifiers that inherit the backdoor behavior, posing significant security risks. Detecting and mitigating these backdoors before encoders are disseminated is crucial to prevent malicious exploitation.

**Key contributions:**

- A framework to detect training-agnostic Trojan attacks in SSL encoders without requiring downstream labels.
- Introduction of the Sliding Window Kneedle (SWK) algorithm for accurate cluster number estimation in unlabeled SSL data.
- Development of the Representation-Oriented Trigger Reverse (ROTR) method to reconstruct Trojan triggers from clustered representations.
- Proposal of the Size-Norm Trigger Outlier Detector to identify both patch-based and frequency-domain global triggers.
- Design of the Self-supervised Clustering Unlearning (SCU) method to mitigate backdoor effects and cleanse SSL encoders.

## About the professor

**Mengxin Zheng** — Assistant Professor, Department of Computer Science, University of Central Florida.

Research interests: trustworthy AI and quantum computing across the model-to-hardware stack, securing quantum algorithms on real hardware, securing machine-learning models and agents, protecting the data they learn from, and making privacy-preserving computation practical

### Research links

- [Faculty/profile page](https://mxzheng.github.io)
- [Google Scholar](https://scholar.google.com/citations?user=CwLrXMAAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** unsupervised clustering algorithms
**The paper assumes:** unsupervised clustering algorithms, cluster number estimation methods, K-Means clustering, outlier detection in clustering
**Already in this field?** Skip this entirely if you already understand unsupervised clustering methods and how cluster numbers are estimated in machine learning.

This background focuses on unsupervised clustering algorithms, crucial for understanding the SSL-Cleanse paper's detection method that segments unlabeled data representations to identify Trojan triggers. The rigorous course option offers a deeper, structured exploration of K-Means clustering fundamentals and nuances, while the fast track provides a concise, intuition-driven introduction to K-Means clustering suitable for quick comprehension and practical understanding.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Kmeans](https://www.youtube.com/playlist?list=PLB8i6h-95BOAmRYdB3AvkrB1omtEN94xN) — Addy · 13 videos · 1.6h across 13 episodes

**Watch only this:** Episodes 2-5: 'K-Means Clustering Visualization - Intro to Machine Learning' parts 1-3 and 'Sklearn', about 28 minutes — these episodes explain K-Means visually and demonstrate practical usage, sufficient for understanding clustering basics and implementation.

*Why it unblocks this paper:* Addy's 'Kmeans' playlist offers a concise and visually intuitive introduction to K-Means clustering across 13 short episodes, ideal for quickly grasping the intuition and practical aspects of clustering relevant to the SSL-Cleanse detection method.

*If you want all of it:* All 13 episodes, about 1.6 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SSL-Cleanse paper, start with foundational knowledge on self-supervised learning representations and clustering algorithms, as these underpin the detection and mitigation methods. Next, gain insight into Trojan backdoor attacks in machine learning to grasp the security challenges addressed. Finally, focus on the core concept of SSL-Cleanse itself, prioritizing any direct talks by the authors or related advanced research presentations.

### Self-Supervised Learning Representations *(prerequisite)*
This section covers the fundamentals of self-supervised learning (SSL), focusing on how models learn useful representations from unlabeled data. Understanding SSL is essential because the paper targets Trojan backdoors in SSL image encoders, which differ from supervised models in training and vulnerability.

*How the paper uses it:* The paper targets Trojan detection and mitigation specifically in SSL image encoders, making foundational knowledge of SSL representations critical.

▶ [Self-Supervised Learning for Visual Recognition](https://www.youtube.com/watch?v=2mQ9Ls2l0WU) — Vanderbilt School of Engineering · 52:24

### Clustering Algorithms and Cluster Number Estimation *(prerequisite)*
Clustering and accurately estimating the number of clusters are key to the SSL-Cleanse detection pipeline, particularly for the Sliding Window Kneedle (SWK) algorithm and K-Means clustering steps. This section provides rigorous academic lectures on clustering methods and the challenges of choosing cluster counts.

*How the paper uses it:* SSL-Cleanse uses clustering and the SWK algorithm to identify potential Trojan triggers from unlabeled SSL representations.

▶ [L18: Choice of K](https://www.youtube.com/watch?v=4-ycWgdMXD4) — IIT Madras - B.S. Degree Programme · 17:00

### Trojan Backdoor Attacks in Machine Learning *(prerequisite)*
Understanding the nature and mechanics of Trojan backdoor attacks in machine learning is essential to appreciate the security problem SSL-Cleanse addresses. This section includes advanced seminar talks and research presentations on practical backdoor attacks and defenses.

*How the paper uses it:* The paper addresses Trojan backdoor attacks that are stealthily embedded in SSL encoders, posing unique detection challenges.

▶ [TrustML Seminar: Pin-Yu Chen on Practical Backdoor Attacks and Defenses in Machine Learning Systems](https://www.youtube.com/watch?v=RY8j_2zIvPY) — Trustworthy ML Initiative · Streamed 5 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand SSL-Cleanse, start by learning what Trojan backdoor attacks are and why they threaten machine learning models. Next, grasp the fundamentals of self-supervised learning (SSL) and how SSL encoders learn representations without labels. Then, study clustering algorithms and how to estimate the number of clusters, which is crucial for detecting anomalies in unlabeled data. Finally, explore the core SSL-Cleanse method that detects and mitigates Trojan backdoors in SSL encoders by reconstructing triggers and unlearning backdoor effects.

### Trojan Backdoor Attacks in Machine Learning *(prerequisite)*
Trojan backdoor attacks embed hidden triggers in machine learning models that cause them to misbehave only when the trigger is present, making them hard to detect. Understanding these attacks helps grasp the security problem SSL-Cleanse addresses.

*How the paper uses it:* The paper targets Trojan backdoors that covertly manipulate SSL encoders, posing security risks.

▶ [TrustML Seminar: Pin-Yu Chen on Practical Backdoor Attacks and Defenses in Machine Learning Systems](https://www.youtube.com/watch?v=RY8j_2zIvPY) — Trustworthy ML Initiative · Streamed 5 yr ago

### Self-Supervised Learning Representations *(prerequisite)*
Self-supervised learning trains models to learn useful data representations without labeled examples, enabling flexible downstream tasks. Knowing how SSL encoders work is key to understanding why detecting backdoors in them is challenging.

*How the paper uses it:* SSL-Cleanse focuses on Trojan detection in SSL image encoders that learn from unlabeled data.

▶ [Self-Supervised Learning Explained: How AI Teaches Itself ...](https://www.youtube.com/watch?v=8jCvhy4H-wE) — Infomity · 7:02

### Clustering Algorithms and Cluster Number Estimation *(prerequisite)*
Clustering groups similar data points, and estimating the correct number of clusters is vital for meaningful analysis. SSL-Cleanse uses clustering to identify suspicious patterns in unlabeled SSL representations.

*How the paper uses it:* The paper introduces the Sliding Window Kneedle algorithm to improve cluster number estimation for Trojan detection.

▶ [L18: Choice of K](https://www.youtube.com/watch?v=4-ycWgdMXD4) — IIT Madras - B.S. Degree Programme · 17:00

## Already in your library

- [Neural Cleanse: Identifying and Mitigating Backdoor Attacks in ...](https://www.youtube.com/watch?v=krVLXbGdlEg) — also for: Robust Defense Strategies for Multimodal Contrastive Learning: Efficient Fine-tuning Against Backdoor Attacks (Ming Shao)
- [April 16 Visitor Talk: Practical Backdoor Attacks and Defenses in Machine Learning Systems](https://www.youtube.com/watch?v=uoYEWZY16Uc) — also for: CutBackdoor: A Circuit Cut Triggered Backdoor Attack on Variational Quantum Algorithms (Lei Jiang)
- [What Is Self-Supervised Learning and Why Care?](https://www.youtube.com/watch?v=iGJ1XSkCyU0) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)
- [K Means Clustering Algorithm | K Means Solved Numerical Example Euclidean Distance by Mahesh Huddar](https://www.youtube.com/watch?v=KzJORp8bgqs) — also for: Context-Aware Image Denoising with Auto-Threshold Canny Edge Detection to Suppress Adversarial Perturbation (Wu-chi Feng)
- [Lec-13: K-mean Clustering with Numerical Example | Unsupervised Learning | Machine🖥️ Learning 🙇‍♂️🙇](https://www.youtube.com/watch?v=5FpsGnkbEpM) — also for: Mean Shift, Mode Seeking, and Clustering (Yizong Cheng)
- [K-Means Clustering Algorithm | Geometric Intuition | Clustering | Unsupervised Learning](https://www.youtube.com/watch?v=5shTLzwAdEc) — also for: Flash-Fusion: Enabling Expressive, Low-Latency Queries on IoT Sensor Streams with LLMs (Ashutosh Dhekne)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply SSL-Cleanse's approach to Trojan backdoor detection and mitigation in self-supervised learning (SSL) image encoders. The beginner project focuses on reproducing a core clustering visualization from the paper using familiar tools. The intermediate project involves running and extending the authors' released SSL-Cleanse code on a smaller public dataset, comparing detection accuracy against a simple baseline. The advanced project explores a genuine extension by investigating SSL-Cleanse's detection robustness when the unlabeled dataset differs from the encoder's training domain, addressing a stated limitation and future direction.

### Beginner — Visualize SSL Encoder Representations and Cluster Estimation
*Effort: a weekend, ~8 hours*

You build a Python notebook that loads pretrained SSL image encoder embeddings (e.g., from a public SSL model on CIFAR-10 or ImageNet-100 substitute), applies the Sliding Window Kneedle (SWK) algorithm to estimate the number of clusters, and visualizes the clustered representations with K-Means. This reproduces a key step of the SSL-Cleanse Detector component without requiring labeled data.

**Why it shows you understood the paper:** This project demonstrates your grasp of the SWK algorithm and clustering techniques central to SSL-Cleanse's Trojan detection approach, showing you can implement and visualize the cluster number estimation and representation clustering that underpin trigger reconstruction.

**Grounded in:** Introduction of the Sliding Window Kneedle (SWK) algorithm for accurate cluster number estimation in unlabeled SSL data.

**Tech stack:** Python 3.11, scikit-learn, matplotlib, numpy, jupyter notebook

**Data:** Use publicly available pretrained SSL encoder embeddings on CIFAR-10 or ImageNet-100 substitutes (e.g., embeddings extracted from SimCLR or MoCo V2 pretrained models available online).

**Build it:**

1. Obtain pretrained SSL encoder embeddings for a small image dataset (CIFAR-10 or ImageNet-100 substitute).
2. Implement the Sliding Window Kneedle (SWK) algorithm to estimate the optimal number of clusters K from the embeddings.
3. Apply K-Means clustering with the estimated K to the embeddings.
4. Visualize the clustered embeddings using 2D dimensionality reduction (e.g., t-SNE or PCA).
5. Document the process and results in a Jupyter notebook.

**Ships as:** A Jupyter notebook showing SWK cluster number estimation, K-Means clustering, and visualization of SSL encoder embeddings, with explanations linking to the paper's Detector component.

**Stretch goal:** Add a comparison visualization using the direct Kneedle method to show SWK's improvement in cluster estimation stability.

### Intermediate — Run and Extend SSL-Cleanse on ImageNet-100 Subset
*Effort: 1-3 weekends*

You clone and run the authors' SSL-Cleanse codebase on a smaller subset of ImageNet-100 or a similar public dataset. You reproduce the detection accuracy metric reported in the paper and implement a simple baseline detector (e.g., direct Kneedle cluster estimation without SWK). You then compare detection accuracy and cluster estimation performance between SSL-Cleanse and the baseline.

**Why it shows you understood the paper:** This project shows you can operate the full SSL-Cleanse pipeline, understand its core algorithms (SWK, ROTR, outlier detection), and critically evaluate its effectiveness against a baseline, demonstrating comprehension of the paper's main contributions and results.

**Grounded in:** Achieved an average detection accuracy of 82.2% on ImageNet-100 across 1200 encoders; The SWK algorithm improved cluster number estimation accuracy by 30% compared to direct Kneedle method.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, matplotlib, numpy

**Data:** Use ImageNet-100 or a publicly available subset of ImageNet as a substitute for the paper's evaluation dataset.

**Build it:**

1. Clone the SSL-Cleanse repository from https://github.com/UCF-ML-Research/SSL-Cleanse.
2. Set up the environment and dependencies as per the repository instructions.
3. Prepare a smaller subset of ImageNet-100 or a similar dataset for unlabeled data input.
4. Run the SSL-Cleanse Detector on the subset to obtain detection accuracy.
5. Implement a baseline detector using direct Kneedle cluster estimation without SWK.
6. Compare and report detection accuracy and cluster number estimation results between SSL-Cleanse and the baseline.
7. Document findings in a detailed README or report.

**Verified links from the paper:**

- <https://github.com/UCF-ML-Research/SSL-Cleanse> — released by the paper's authors

**Ships as:** A GitHub repository with code and documentation showing SSL-Cleanse detection results on a smaller dataset, baseline comparison, and analysis of cluster estimation accuracy.

**Stretch goal:** Extend the evaluation to include mitigation with SCU and report attack success rate reduction and accuracy preservation.

### Advanced — Evaluate SSL-Cleanse Robustness with Domain-Shifted Unlabeled Data
*Effort: few weeks*

You design and conduct experiments to test SSL-Cleanse's detection performance when the unlabeled dataset used for detection differs significantly from the encoder's original training data domain. You implement strategies to maintain or improve detection robustness under domain shift, such as data augmentation or domain adaptation techniques, and analyze results.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to extend SSL-Cleanse to more realistic and challenging scenarios, and your understanding of domain adaptation challenges in Trojan detection for SSL encoders.

**Grounded in:** The approach may be less effective if the unlabeled data is not representative or too limited; future directions include improving detection robustness under such conditions.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, matplotlib, numpy, domain adaptation libraries (e.g., PyTorch Domain Adaptation Toolkit)

**Data:** Use ImageNet-100 or CIFAR-10 as the encoder training domain, and select a different dataset (e.g., STL-10 or GTSRB) as the unlabeled detection data to simulate domain shift.

**Build it:**

1. Set up SSL-Cleanse codebase and prepare pretrained SSL encoders trained on a source domain dataset (e.g., ImageNet-100).
2. Prepare unlabeled datasets from a different domain (e.g., STL-10 or GTSRB) for detection input.
3. Run SSL-Cleanse Detector on domain-shifted unlabeled data and record detection accuracy.
4. Implement domain adaptation or data augmentation techniques to align unlabeled data representations closer to the encoder's domain.
5. Re-run detection with adapted data and compare results to baseline domain-shifted detection.
6. Analyze and document the impact of domain shift and mitigation strategies on detection robustness.

**Verified links from the paper:**

- <https://github.com/UCF-ML-Research/SSL-Cleanse> — released by the paper's authors

**Ships as:** A comprehensive GitHub repository with code, experiments, and analysis showing SSL-Cleanse detection performance under domain shift and proposed robustness improvements.

**Stretch goal:** Explore mitigation effectiveness (SCU) under domain-shifted detection data and report on attack success rate and accuracy trade-offs.
